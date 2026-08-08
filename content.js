//shows content on page load
currentPage = Number(sessionStorage.getItem("nextPage"));
changeThumb(currentPage);
showCurrent(currentPage);
content(currentPage);


function newPage() {
    currentPage = Number(sessionStorage.getItem("nextPage"));
    console.log(currentPage);
    changeThumb(currentPage);
    if(document.querySelector(".currentPage") !== null) {
        document.querySelector(".currentPage").classList.remove("currentPage");
    }
    showCurrent(currentPage);
    content(currentPage);
    console.log(currentPage);
}