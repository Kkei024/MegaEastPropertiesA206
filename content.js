//shows content on page load
changeThumb(currentPage);
showCurrent(currentPage);
content(currentPage);

function newPage() {
    currentPage = Number(sessionStorage.getItem("nextPage"));
    console.log(currentPage);
    changeThumb(currentPage);
    document.querySelector(".currentPage").classList.remove("currentPage");
    showCurrent(currentPage);
    content(currentPage);
    console.log(currentPage);
}

