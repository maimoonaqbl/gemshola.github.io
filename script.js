const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            console.log(button);
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });

        });

    });
}

window.addEventListener("load", initSlider);

//------------read more & less more ------------------//

var i = 0;
function read(){
    if(!i){
        document.getElementById("moretext").style.
            display = "inline";
        document.getElementById("read-more-btn").innerHTML="Read Less";
        i=1;
    }
    else{
        document.getElementById("moretext").style.
            display = "none";
        document.getElementById("read-more-btn").innerHTML="Read More";
       i=0;
    }
}

//--here add the JS for onclick menu and x function for small screens
        var sidemenu = document.querySelector(".sidemenu");

function openmenu(){
sidemenu.style.right = "0";}

function closemenu(){
sidemenu.style.right = "-200px";
}
