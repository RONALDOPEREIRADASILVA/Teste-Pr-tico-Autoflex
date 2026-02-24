<?php

/**
 * Classe de conexão com o banco de dados.
 */
class Database
{
    // Configurações de acesso ao servidor local (XAMPP/WAMP)
    private $host = "localhost";        // Endereço do servidor
    private $db_name = "factory_db";    // Nome do banco de dados que criamos no MySQL
    private $username = "root";         // Usuário padrão do MySQL local
    private $password = "";             // Senha padrão (vazia no XAMPP)

    // Variável que guardará a conexão ativa
    public $conn;

    /**
     * Função que estabelece a conexão e a retorna para quem precisar usar
     */
    public function getConnection()
    {
        // Começamos limpando a variável de conexão
        $this->conn = null;

        try {
            // Criamos a conexão usando o PDO (PHP Data Objects)
            // É a forma mais segura e moderna de conectar PHP com bancos de dados
            $this->conn = new PDO(
                "mysql:host=" . $this->host . ";dbname=" . $this->db_name,
                $this->username,
                $this->password
            );

            // Forçamos o banco a usar UTF-8 para não dar erro em acentos e caracteres especiais
            $this->conn->exec("set names utf8");

            // Configuramos o PDO para lançar uma exceção (erro) caso algo dê errado no SQL
            // Isso facilita muito descobrir onde está o erro no seu código
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $exception) {
            // Caso a conexão falhe (ex: senha errada), ele cai aqui e avisa o erro
            echo "Erro na conexão: " . $exception->getMessage();
        }

        // Retorna o objeto de conexão pronto para ser usado nos CRUDs
        return $this->conn;
    }
}
