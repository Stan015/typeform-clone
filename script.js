const navLink = document.querySelector(".products");
const arrowDown = document.getElementById("nav-arrow-down");
const navProduct = document.querySelector(".products-content");

const arrowRotate = () => {
    navLink.addEventListener('mouseenter', function() {
        arrowDown.classList.add("arrow-rotate");

        if (navProduct.style.display = "none") {
            navProduct.style.display = "flex";
        };

    });

    navProduct.addEventListener('mouseleave', function() {
        arrowDown.classList.remove("arrow-rotate");

        if (navProduct.style.display = "flex") {
            navProduct.style.display = "none";
        };
    });
}
arrowRotate();

