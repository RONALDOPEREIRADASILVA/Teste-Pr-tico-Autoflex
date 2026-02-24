<?php

/**
 * Endpoint para cadastrar novas matérias-primas.
 */

// 1. Cabeçalhos obrigatórios para uma API JSON
header("Access-Control-Allow-Origin: *"); // Permite que o Front-end acesse a API
header("Content-Type: application/json; charset=UTF-8"); // Define que a resposta é um JSON
header("Access-Control-Allow-Methods: POST"); // Aceita apenas o método POST (envio de dados)

// 2. Incluindo a nossa classe de conexão
include_once '../config/Database.php';

// 3. Preparando a conexão com o banco
$database = new Database();
$db = $database->getConnection();

// 4. Lendo os dados que o JavaScript (Front-end) enviou
// Como o JS envia em formato JSON, usamos 'php://input' para capturar esse texto
$data = json_decode(file_get_contents("php://input"));

// 5. Verificação: Se os campos não estiverem vazios
if (!empty($data->name) && isset($data->stock_quantity)) {

    try {
        // Criamos o comando SQL com 'placeholders' (:name, :stock) por segurança
        $query = "INSERT INTO raw_materials (name, stock_quantity) VALUES (:name, :stock)";

        // Preparamos a execução (protege contra SQL Injection)
        $stmt = $db->prepare($query);

        // 'Limpamos' os dados para evitar códigos maliciosos
        $name = htmlspecialchars(strip_tags($data->name));
        $stock = htmlspecialchars(strip_tags($data->stock_quantity));

        // Substituímos os placeholders pelos valores reais
        $stmt->bindParam(":name", $name);
        $stmt->bindParam(":stock", $stock);

        // Executamos no banco de dados
        if ($stmt->execute()) {
            // Se der certo, respondemos com código 201 (Criado) e uma mensagem
            http_response_code(201);
            echo json_encode(["message" => "Material was created successfully."]);
        } else {
            // Se o banco recusar por algum motivo
            http_response_code(503);
            echo json_encode(["message" => "Unable to create material."]);
        }
    } catch (Exception $e) {
        // Em caso de erro técnico (ex: tabela não existe)
        http_response_code(500);
        echo json_encode(["message" => "Server error: " . $e->getMessage()]);
    }
} else {
    // Se o usuário esqueceu de preencher algo
    http_response_code(400);
    echo json_encode(["message" => "Incomplete data. Please provide name and stock quantity."]);
}
