let currentPage = Number(sessionStorage.getItem("nextPage"));

clear();

display();

let bar = document.getElementById('side');
let thumb = document.getElementById('sideMenuScroll');

scrolling(thumb, bar);

window.addEventListener("resize", () => {scrolling(thumb, bar)}) 