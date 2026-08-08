function sidemenu() {
    menuToggle(document.getElementById('toggMen'));
    document.getElementById("dropMen").classList.remove('opened');
}

function dropmenu() {
    menuToggle(document.getElementById('dropMen'));
    document.getElementById("toggMen").classList.remove('opened');
    document.getElementById('inpsrch').focus();
}


function menuToggle(targetMenu) {
    let slide = document.getElementById('obsc');
    
    slide.classList.add("opened");
    bool = targetMenu.classList.toggle("opened");
    
    if(bool == false) {
        console.log(bool);
        
        slide.classList.add("closing");
        slide.classList.remove("opened");
        
        setTimeout(() => {
            slide.classList.remove("closing");
        }, 300)
    }
}


