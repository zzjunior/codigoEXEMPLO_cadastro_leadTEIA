document.getElementById('enviar').addEventListener('click', function(event) {
    event.preventDefault();

    // Obter os valores do formulário
    const name = document.getElementById('nome').value;
    const number = document.getElementById('telefone').value;
    const email = document.getElementById('seu_melhor_email_').value;
    const TokenTEIA = document.getElementById('token').value;
    const sourceTEIA = document.getElementById('source').value;
    const storeTEIA = document.getElementById('store').value;
    const comentario = document.getElementById('comentario').value;
    const tags = document.getElementById('tags').value;
    // CORRIGIR TAGS PRA FICAREM NO FORMATO ACEITO NA API tags= [ "tag1", "tag2", "tag3"]
    let processedTags = [];
    if (tags.trim()) {
        processedTags = tags.split(',').map(tag => tag.trim()).filter(tag => tag);
    }

    // Dados do formulário
    const formData = {
        name: name, // NOME DO LEAD
        phone: number, // NÚMERO DO LEAD
        email: email, // EMAIL DO LEAD
        product_id: 35, // AQUI O "ID" DO PRODUTO
        source_id: sourceTEIA, // FONTE DE ORIGEM
        //user_document: userDocumentValue, // CPF DO USUÁRIO À RECEBER O LEAD
        store_id: storeTEIA, // LOJA DE ORIGEM
        comment: comentario, // COMENTÁRIO OPCIONAL
        tags: processedTags // TAGS OPCIONAIS NO FORMATO CORRETO

    };

    // URL da API
    const apiUrl = "https://teiacrm.com.br/api/lead";

    // Token de autenticação
    const accessToken = TokenTEIA;

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
            document.getElementById('retorno-api').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Erro ao enviar:', error);
            document.getElementById('retorno-api').innerText = 'Erro ao enviar: ' + error;
        });
});
