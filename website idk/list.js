let currentPage = Number(localStorage.getItem("nextPage"));

clear();

display();


scrolling(
    document.getElementById('sideMenuScroll'),
    document.getElementById('side'));