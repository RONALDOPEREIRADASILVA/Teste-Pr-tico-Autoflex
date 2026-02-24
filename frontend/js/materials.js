/**
 * Script que gerencia matérias-primas via API
 */

//Escuta quando o formulário for enviado
document.getElementById('materialForme').addEventListener('submit', function (e) {
    e.preventDefault(); //Impede que a página carregue.

    const name = document.getElementById('name').Value;
    const stock = document.getElementById('stock').Value;
    //Pega os valores dos inputs.

    const data = {
        name: name,
        stock_quatity: stock
    };
    //Cria o objeto que será enviado(JSON)

    fetch('../back-end/api/criat_material.php', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(date)
        // Trasforma o objeto em texto JSON.
    })


})

    .then(response => response.json())
    //Espera a resposta do PHP.
    .then(result => {
        alert(result.message);
        //mostra a mensagen de sucesso ou erro.
    });

if (result.message.includes("successfully")) {
    document.getElementById('materialForm').reset()
        //limpa o formulario


        .catch(error => {
            console.error('ERROR:', error);
            alert('Failed to connect to the server. ');


        });
}
