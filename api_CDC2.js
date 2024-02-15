const suporte1 = "42667322444";
const suporte2 = "54538709077";
let userDocumentValue = suporte1;

document.addEventListener('DOMContentLoaded', function() { //usei o DOMContentLoaded para ter CERTEZA que o código só será executado após o carregamento completo da página
document.querySelector('form').addEventListener('submit', function(event) { // Antes eu estava usando o click no botão como evento mais alterei para o submit do formulário
    event.preventDefault();
    // Obter os valores do formulário
    const name = document.getElementById('nome').value;
    const number = document.getElementById('telefone').value;
    const email = document.getElementById('seu_melhor_email_').value;
    const cpf = document.getElementById('cpf').value;
    const dataNascimento = document.getElementById('data_de_nascimento').value;
    const selct = document.getElementById('possui_habilitação');
    const temCNH = selct.options[selct.selectedIndex].value;

    // Dados do formulário
    const formData = {
        name: name, // NOME DO LEAD
        phone: number, // NÚMERO DO LEAD
        email: email, // EMAIL DO LEAD
        product_id: 1, // AQUI O "ID" DO PRODUTO
        source_id: 2053, // FONTE DE ORIGEM (Você precisa definir o valor correto)
        user_document: userDocumentValue, // CPF DO USUÁRIO À RECEBER O LEAD
        comment: `Lead encaminhado da LP V4 CDC. informações do lead: Nome: ${name}, Telefone: ${number}, E-mail: ${email}, CPF: ${cpf}, Data de nascimento: ${dataNascimento}, Possuí Habilitação: ${temCNH}` 
        // COMENTÁRIO OPCIONAL
    };

    // Alternando entre os usuários de suporte
    userDocumentValue = (userDocumentValue === suporte1) ? suporte2 : suporte1;

    // URL da API
    const apiUrl = "https://teiacrm.com.br/api/lead";

    // Token de autenticação - JÁ ALTEREI COM O TOKEN DO USUÁRIO DA V4 NO TEIA CRM
    const accessToken = "kgO7maTwweBGn4jS2Sjq5W92CSsowpfY07VIC9K64GeUZAL5jaWR5zVCXGJR"; // token do usuário do SUPORTE DO TEIA  vulgo eu

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
            console.log('Lead enviado:', data);
        })
        .catch(error => {
            console.error('Erro ao enviar a requisição:', error);
        });
});
});