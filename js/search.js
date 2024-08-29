let pages = [];
const resultsContainer = document.getElementById('search-results');
const showMoreButton = document.getElementById('show-more');
let currentResults = 0;
const resultsPerPage = 6;

// Carrega o arquivo JSON e armazena os dados na variável pages
fetch('/json/pages.json')
    .then(response => response.json())
    .then(data => {
        pages = data; // Armazena as páginas no array
    })
    .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));

// Função para pesquisar os títulos
document.getElementById('search').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    resultsContainer.innerHTML = '';
    currentResults = 0;
    showMoreButton.classList.add('hidden'); // Esconde o botão "Mostrar Mais"

    // Filtra as páginas com base no título
    const filteredPages = pages.filter(page => 
        page.title.toLowerCase().includes(searchTerm)
    );

    // Exibe até 6 resultados
    displayResults(filteredPages.slice(0, resultsPerPage));

    // Se houver mais resultados, mostra o botão "Mostrar Mais"
    if (filteredPages.length > resultsPerPage) {
        showMoreButton.classList.remove('hidden');
    }

    // Adiciona evento para o botão "Mostrar Mais"
    showMoreButton.onclick = () => {
        displayResults(filteredPages.slice(currentResults, currentResults + resultsPerPage));
        currentResults += resultsPerPage;

        if (currentResults >= filteredPages.length) {
            showMoreButton.classList.add('hidden'); // Esconde o botão se não houver mais resultados
        }
    };
});

// Função para exibir resultados
function displayResults(results) {
    results.forEach(page => {
        const resultItem = document.createElement('div');
        resultItem.innerHTML = `<a href="${page.url}">${page.title}</a>`;
        resultsContainer.appendChild(resultItem);
    });
    currentResults += results.length; // Atualiza o número de resultados exibidos
}