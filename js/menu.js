document.getElementById('menu-toggle').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
});

const menuItems = document.querySelectorAll('#menu-list > li');
menuItems.forEach(item => {
    item.addEventListener('click', function(event) {
        // Evita que o clique no submenu feche o sidebar
        event.stopPropagation();
        const submenu = item.querySelector('.submenu');
        if (submenu) {
            submenu.classList.toggle('open');
        }
    });
});