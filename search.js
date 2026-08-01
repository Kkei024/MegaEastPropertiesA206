
let currURL = new URL(window.location);

let textParam = currURL.searchParams.toString().replaceAll("+", " ").toLowerCase().trim();
console.log(textParam);


let searchTerm = textParam.substring(2, textParam.length).replaceAll(" ", "_");
console.log(searchTerm);

let target = document.getElementById('stuff');

let results = target.querySelectorAll(`.${searchTerm}`);

let IDpicker = target.querySelectorAll(`.${searchTerm} li`);
let IDlist = [];

IDpicker.forEach((element, index) => {
    IDlist[index] = Number(element.id.substring(4, element.length));
    console.log(IDlist[index]);
})

let focus = IDlist[0] || 1;
console.log(focus);
sessionStorage.setItem("nextPage", focus);
newPage();


clear()

if (searchTerm != "") {
    if (results.length > 0) {
        results.forEach((element, index) => {
            target.innerHTML += results.item(index).outerHTML;

            document.getElementById(`item${IDlist[index]}`).addEventListener("click", () => {
            sessionStorage.setItem("nextPage", IDlist[index]);
            newPage();
            console.log(`added to item${IDlist[index]}`);
        })
        })


        let resetter = target.querySelectorAll("li");
        resetter.forEach((element, index) => {
            document.getElementById(`item${IDlist[index]}`).addEventListener("click", () => {
                sessionStorage.setItem("nextPage", IDlist[index]);
                console.log(`added to item${IDlist[index]}`)
                console.log("success");
                newPage();
            })
        })
    }
    
    else {}
}

else {display()}