const name = [
    "Palo Alto",
    "The Perch",
    "test3",
];

const type = [
    "Lot",
    "House",
    "condo"
];

const loc = [
    "Baras",
    "Antipolo",
    "Pasig"
];

const address = [
    "Rizal",
    "Perch 3 Blk 11 Lot 2 Quail st.",
    "test",
]

const price = [
    13500,
    25000000,
    100000,
]

const description = [
    `test`,
    `LA: 300sqm

FA: 202sqm

Living Area

Dining Area

Kitchen with countertop

Secondary Kitchen

Service Area

Maid's Room with T&B

Powder Room

Porch

Spacious Backyard

3 Bedroom

Master's Bedroom with Walk-in closet and T&B

2 BR with Built-in Cabinet & 1 shared T&B

Family Hall

Spacious Lanai with Mountain View

4 Carport`,
    `test`
]

const thumbnails = [
    "images/paloAltoPH.jpg",
    "images/thePerch.jpg",
    "https://preview.redd.it/has-there-been-an-attempt-to-map-out-the-tracen-academy-v0-t0vvvunpc64g1.png?width=1080&crop=smart&auto=webp&s=f83c3e7625631cd7400ea28f31bbab8eec508a60"
]

let list;

//clear contents before displaying items
function clear() {
    list = document.getElementById('stuff');
    list.innerHTML = ``;
}

//display all
function display() {
    name.forEach((element, index) => {
        list.innerHTML += `
            <div style="background-image: url('${thumbnails[index]}');">
                <li class="item ${loc[index]} ${name[index]} ${type[index]}" id="item${index}">
                    <h2>${name[index]}</h2>
                    <p>${loc[index]}, ${type[index]}</p>
                </li>
            </div>
        `;
    });
    
    name.forEach((element, index) => {
        //for each item, give it an onclick that sends its index to localStorage so that it persists between page reloads
        document.getElementById(`item${index}`).addEventListener("click", () => {
            localStorage.setItem("nextPage", index);
            console.log("logged " + index);
            newPage();
    })
})
}

function showCurrent(highlight) {
    document.getElementById(`item${highlight}`).classList.add("currentPage");
}

let image;

function changeThumb(setThumb) {
    image = document.getElementById('thumbnail')
    image.style.backgroundImage = `url(${thumbnails[setThumb]})`;
}

function content(contIndex) {
    document.getElementById('name').innerText = name[contIndex];

    if (price[contIndex] <= 500000) {
        document.getElementById('price').innerText = `₱${price[contIndex].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/sqm`;
    }

    else {
        document.getElementById('price').innerText = `₱${price[contIndex].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    }

    document.getElementById('location').innerText = loc[contIndex];
    document.getElementById('type').innerText = type[contIndex];
    document.getElementById('address').innerText = name[contIndex];
    document.getElementById('description').innerText = description[contIndex];
}