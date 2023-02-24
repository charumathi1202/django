// toggle navbar
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
});
function hideSection() {
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar() {
    document.querySelector(".header").classList.toggle("active");
}

// Active section
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("link-item") && e.target.hash !== "") {
        navToggler.classList.add("hide");
        if (e.target.classList.contains("nav-item")) {
            toggleNavbar();
        }
        else {
            hideSection();
            document.body.classList.add("hide-scrolling")
        }
        setTimeout(() => {
            document.querySelector("section.active").classList.remove("active", "fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0, 0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
        },500);
    }
})

// port item details popup
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("view-project-btn")) {
        togglePortPopup();
        document.querySelector(".port-popup").scrollTo(0, 0);
        portItemDetails(e.target.parentElement);
    }
})
function togglePortPopup() {
    document.querySelector(".port-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click", togglePortPopup);

// hide popup when clicking outside if it
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("pp-inner")) {
        togglePortPopup();
    }
});


function portItemDetails(portItem) {
    document.querySelector(".pp-thumbnail img").src =
        portItem.querySelector(".port-item-thumbnail img").src;
    
    document.querySelector(".pp-header h3").innerHTML =
        portItem.querySelector(".port-item-title").innerHTML;
    
    document.querySelector(".pp-body").innerHTML =
        portItem.querySelector(".port-item-details").innerHTML;
        
}


