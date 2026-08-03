
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
    
    else {
        document.querySelector('.sidemenu').classList.add('noRes')
        document.querySelector('.sidemenu').innerHTML = `
            <h1>Oops!</h1>
            <h3>Your search returned no results. <br><br> Check the spelling and try again</h3>
        `

        document.querySelector('.cont').classList.add("noRes")
        document.querySelector('.cont').innerHTML = `
            <h1>Click here to reset search criteria</h1>
            <br><br>
            <div class="refr"></div>
        `

        document.querySelector('.refr').addEventListener("click", () => {
            let conf = window.confirm("Are you sure you want to reload?");

            if (conf == true) {
                window.location.assign("index.html");
            }
        })
    }
}

else {display()}