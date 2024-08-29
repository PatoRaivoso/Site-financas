// inc-header.js
document.addEventListener('DOMContentLoaded', function() {
    const headerContainer = document.getElementById('header-container');

    // Função para carregar o cabeçalho
    function loadHeader() {
        fetch('/header.html') // Substitua pelo caminho correto para o seu arquivo header.html
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao carregar o cabeçalho');
                }
                return response.text();
            })
            .then(data => {
                headerContainer.innerHTML = data; // Insere o conteúdo do cabeçalho
                initializeHeaderEvents(); // Inicializa eventos após o cabeçalho ser carregado
            })
            .catch(error => console.error(error));
    }

    function initializeHeaderEvents() {
        const menuToggle = document.getElementById('menu-toggle');
        const searchInput = document.getElementById('search');

        menuToggle.addEventListener('click', function() {
            const sidebar = document.getElementById('sidebar');
            sidebar.classList.toggle('visible'); // Alterna a visibilidade do menu
        });

        searchInput.addEventListener('input', function() {
            const query = searchInput.value.toLowerCase();
            console.log('Pesquisando:', query); // Aqui você pode adicionar a lógica de pesquisa
        });
    }

    loadHeader(); // Chama a função para carregar o cabeçalho
});