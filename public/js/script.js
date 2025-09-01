document.addEventListener('DOMContentLoaded', function() {
    const searchBtns = document.querySelectorAll('.searchBtn');
    const searchBar = document.querySelector('.searchBar');
    const searchInput = document.getElementById('searchInput');
    const searchClose = document.getElementById('searchClose');

    searchBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            searchBar.style.visibility = 'visible';
            searchBar.classList.add('open');
            this.setAttribute('aria-expanded', 'true');
            searchInput.focus();
        });
    });

    if (searchClose) {
        searchClose.addEventListener('click', function() {
            searchBar.style.visibility = 'hidden';
            searchBar.classList.remove('open');
            searchBtns.forEach(btn => btn.setAttribute('aria-expanded', 'false'));
        });
    }
});