// Carrega o cabeçalho a partir do arquivo header.html
document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header-container');
    fetch('/header.html')
        .then(response => response.text())
        .then(data => {
            header.innerHTML = data; // Insere o conteúdo do cabeçalho
        })
        .catch(error => console.error('Erro ao carregar o cabeçalho:', error));
});