document.getElementById('search').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const menuItems = document.querySelectorAll('#menu-list > li');

    menuItems.forEach(item => {
        if (item.textContent.toLowerCase().includes(searchTerm)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});