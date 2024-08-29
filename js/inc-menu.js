// Carrega o menu lateral a partir do arquivo menu.html
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    fetch('/menu.html')
        .then(response => response.text())
        .then(data => {
            sidebar.innerHTML = data; // Insere o conteúdo do menu
        })
        .catch(error => console.error('Erro ao carregar o menu:', error));
});