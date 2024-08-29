document.getElementById('menu-toggle').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
});

// Lida com a exibição dos subitens no menu
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function() {
        const submenu = this.nextElementSibling;
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    });
});