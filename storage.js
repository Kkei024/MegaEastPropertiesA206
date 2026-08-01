const name = [
    "palo_alto",
    "the_perch",
    "tracen",
    "palo_alto",
    "the_perch",
    "tracen",
    "palo_alto",
    "the_perch",
    "tracen",
];

const type = [
    "Lot",
    "House",
    "Dorm"
];

const loc = [
    "Baras",
    "Antipolo",
    "Tokyo"
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

//display all list items
function display() {
    name.forEach((element, index) => {
        list.innerHTML += `
            <div class="${loc[index]} ${name[index]} ${type[index]}" style="background-image: url('${thumbnails[index]}');">
                <li class="item" id="item${index}">
                    <h2>${name[index].replace("_", " ")}</h2>
                    <p>${loc[index]}, ${type[index]}</p>
                </li>
            </div>
        `;
    });
    
    name.forEach((element, index) => {
        //for each item, give it an onclick that sends its index to sessionStorage so that it persists between page reloads
        document.getElementById(`item${index}`).addEventListener("click", () => {
            sessionStorage.setItem("nextPage", index);
            newPage();
        })
    })
}

//change style of hovered list item
function showCurrent(highlight) {
    document.getElementById(`item${highlight}`).classList.add("currentPage");
}

//change header image in content
let image; function changeThumb(setThumb) {
    image = document.getElementById('thumbnail')
    image.style.backgroundImage = `url(${thumbnails[setThumb]})`;
}

//change details and description in content
function content(contIndex) {
    document.getElementById('name').innerText = name[contIndex].replace("_", " ");

    if (price[contIndex] <= 500000) {
        document.getElementById('price').innerText = `₱${price[contIndex].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/sqm`;
    }

    else {
        document.getElementById('price').innerText = `₱${price[contIndex].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    }

    document.getElementById('location').innerText = loc[contIndex];
    document.getElementById('type').innerText = type[contIndex];
    document.getElementById('address').innerText = address[contIndex];
    document.getElementById('description').innerText = description[contIndex];
}

function scrolling(scroller, scrolled) {
    let contHeight = scrolled.scrollHeight - window.innerHeight;
    console.log(`Height is ${contHeight}px`);

    scrolled.addEventListener("scroll", () => {
        let progress = (scrolled.scrollTop);
        let perc = (progress / contHeight);

        if(progress < contHeight) {
                scroller.style.top = `calc(${perc * 100}% - (20% + clamp(7vh, 5vw, 10vh)) * ${perc})`;
            }
        })

        function drag() {
            let Ypos = scrolled.getBoundingClientRect();
            var pos;
    
    
            const tracker = (event) => {
                
                if (event.type == "touchmove") {
                    var touch = event.touches[0] || event.changedTouches[0];
                    pos = touch.pageY;
                }
                else {
                    event.preventDefault();
                    pos = event.clientY;
                }
    
                
                let perc = (Math.trunc(pos) - Math.trunc(Ypos.top)) / (Math.trunc(Ypos.bottom) - Math.trunc(Ypos.top))
                
                if(perc > 0 && perc < 1.02) {
                    scroller.style.top = `calc(${perc * 100}% - (10% + clamp(7vh, 5vw, 10vh)) * ${perc})`;
                    scrolled.scroll({
                        top: perc * contHeight,
                    })
                }
            }
    
            const clicker = (event) => {
    
                event.preventDefault();
                
                document.addEventListener("mousemove", tracker, true)
                document.addEventListener("touchmove", tracker, true)
                
                document.addEventListener("mouseup", () => {
                    document.removeEventListener("mousemove", tracker, true);
    
                    document.removeEventListener("touchmove", tracker, true);
                })
            }
    
            scroller.addEventListener("mouseover", () => {
                scroller.addEventListener("mousedown", clicker, true);
    
                scroller.addEventListener("touchstart", clicker, true);
            })
        }

    drag()
}

window.addEventListener("dragstart", (event) => event.preventDefault());