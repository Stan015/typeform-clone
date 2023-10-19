const navLink = document.querySelector(".nav-products-div");
const arrowDown = document.getElementById("nav-arrow-down");
const navProduct = document.querySelector(".products-content");

const arrowRotate = () => {
    navLink.addEventListener('mouseenter', function() {
        arrowDown.classList.add("arrow-rotate");

        if (navProduct.style.display = "none") {
            navProduct.style.display = "flex";
        };

    });

    // navLink.addEventListener('mouseout', function() {
    //     arrowDown.classList.remove("arrow-rotate");

    //     if (navProduct.style.display = "flex") {
    //         navProduct.style.display = "none";
    //     };
    // });
}
arrowRotate();

