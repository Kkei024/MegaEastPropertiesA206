
let currURL = new URL(window.location);

let textParam = currURL.searchParams.toString().replaceAll("+", " ").toLowerCase().trim();
console.log(textParam);

let tempArr = textParam.split("&");
console.log(tempArr);

let strung = "";

let counter = 0;

let results = [];
var IDpicker = [];
var target = document.getElementById('stuff');

tempArr.forEach((element, index) => {
    let cutter = element.indexOf("=") + 1;

    strung = element.substring(cutter, element.length)
    
    if(strung != "") {
        console.log(strung);
        let resultsTemp = target.querySelectorAll(`.${strung}`);
        let IDpickerTemp = (target.querySelectorAll(`.${strung} li`));

        resultsTemp.forEach((element) => { results.push(element) })
        IDpickerTemp.forEach((element) => { IDpicker.push(element) })
        counter++
    }
});

console.log(typeof(results));
console.log(results);
console.log(results.length);

console.log(typeof(IDpicker));
console.log(IDpicker);
console.log(IDpicker.length);

let IDlist = [];

IDpicker.forEach((element, index) => {
    console.log("it exists");
    IDlist[index] = Number(element.id.substring(4, element.length));
    console.log(`logged id of item${IDlist[index]}`)
})

clear()

console.log(tempArr.length > 1 || (tempArr[0] != "name=" && tempArr[0] != ""))
if (tempArr.length > 1 || (tempArr[0] != "name=" && tempArr[0] != "")) {
    if (results.length > 0) {
        results.forEach((element, index) => {
            target.innerHTML += results[index].outerHTML;

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
                window.location.assign("list.html");
            }
        })
    }
}

else {
    display();
    newPage()
    console.log('failed. defaulting to display')
}

function onlyUnique(value, index, array) {
  return array.indexOf(value) === index;
}

let locUniq = loc.filter(onlyUnique)
let typUniq = type.filter(onlyUnique)

locUniq.forEach((element) => {
    document.querySelector('.locs').innerHTML += `
    <label for="${element}">
        <input type="checkbox" name="location" id="${element}" value="${element}">${element}
    </label>
    `
})

typUniq.forEach((element) => {
    document.querySelector('.typs').innerHTML += `
    <label for="${element}">
        <input type="checkbox" name="location" id="${element}" value="${element}">${element}
    </label>
    `
})