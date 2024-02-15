const joao = "61517245346";
let userDocumentValue = joao;

document.getElementById('lp-pom-button-31').addEventListener('click', function(event) {

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
        product_id: 35, // AQUI O "ID" DO PRODUTO
        source_id: 3037, // FONTE DE ORIGEM (Você precisa definir o valor correto)
        user_document: userDocumentValue, // CPF DO USUÁRIO À RECEBER O LEAD
        comment: `Lead encaminhado da LP-V4-CDC. informações do lead: Nome:${name}, Telefone:${phone}, E-mail:${email}, CPF${cpf}, Data de nascimento:${dataNascimento}, Possuí Habilitação:${temCNH}` // COMENTÁRIO OPCIONAL
    };

    // URL da API
    const apiUrl = "https://teiacrm.com.br/api/lead";

    // Token de autenticação - JÁ ALTEREI COM O TOKEN DO USUÁRIO DA V4 NO TEIA CRM
    const accessToken = "47Nrifp8D2qvAo8SEtQDSpdhsMXndSSTU6gTH69Q8s3kY0EqfCdRPAeGQhL2";

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