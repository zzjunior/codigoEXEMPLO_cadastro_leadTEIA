const suporte1 = "42667322444";
let userDocumentValue = suporte1;

document.getElementById('enviar').addEventListener('click', function(event) {
    event.preventDefault();

    // Obter os valores do formulário
    const name = document.getElementById('nome').value;
    const number = document.getElementById('telefone').value;
    const email = document.getElementById('seu_melhor_email_').value;

    // Dados do formulário
    const formData = {
        name: name, // NOME DO LEAD
        phone: number, // NÚMERO DO LEAD
        email: email, // EMAIL DO LEAD
        product_id: 35, // AQUI O "ID" DO PRODUTO
        source_id: 2053, // FONTE DE ORIGEM (Você precisa definir o valor correto)
        user_document: userDocumentValue, // CPF DO USUÁRIO À RECEBER O LEAD
        comment: "...TESTE DEU CERTO! :D" // COMENTÁRIO OPCIONAL
    };

    // URL da API
    const apiUrl = "https://teiacrm.com.br/api/lead";

    // Token de autenticação - JÁ ALTEREI COM O TOKEN DO USUÁRIO DA V4 NO TEIA CRM
    const accessToken = "UhjBIpraBiGyv36nHyo8YA1utEmDTuGGEz90bRfgvt2ZDyfeqTlrn5Z0os23";

    // Configurações da requisição
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(formData)
    };

    // Envia a requisição
    fetch(apiUrl, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log('Lead enviado >>', data);
        })
        .catch(error => {
            console.error('Erro ao enviar:', error);
        });
});
