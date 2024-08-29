const pageLinks = document.querySelectorAll('.menu-link');
const resultsContainer = document.getElementById('search-results');

pageLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o redirecionamento imediato
        const url = this.getAttribute('href');

        // Faz uma requisição para obter o conteúdo da página
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.text();
                }
                throw new Error('Erro ao carregar a página');
            })
            .then(html => {
                // Cria um elemento temporário para buscar o título
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const title = doc.title;

                // Adiciona o título ao container de resultados
                resultsContainer.innerHTML = `<div><a href="${url}">${title}</a></div>`;
            })
            .catch(error => {
                console.error(error);
                resultsContainer.innerHTML = 'Erro ao buscar o título.';
            });
    });
});

// Pesquisa por título na barra de pesquisa
document.getElementById('search').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    resultsContainer.innerHTML = '';

    pageLinks.forEach(link => {
        const title = link.textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            resultsContainer.innerHTML += `<div><a href="${link.getAttribute('href')}">${link.textContent}</a></div>`;
        }
    });
});