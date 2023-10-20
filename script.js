const arrowDown = document.querySelectorAll(".nav-arrow-down");

const arrowRotate = () => {
    //for nav products lists
    const navProduct = document.querySelector(".products");
    const navProductContents = document.querySelector(".products-content");

    navProduct.addEventListener('mouseenter', function() {
        arrowDown[0].classList.add("arrow-rotate");

        if (navProductContents.style.display = "none") {
            navProductContents.style.display = "flex";
        };

    });

    navProductContents.addEventListener('mouseleave', function() {
        arrowDown[0].classList.remove("arrow-rotate");

        if (navProductContents.style.display = "flex") {
            navProductContents.style.display = "none";
        };
    });
    //

    //fir solutions lists
    const navSolutions = document.querySelector(".solutions");
    const navSolutionContents = document.querySelector(".solutions-lists");

    navSolutions.addEventListener('mouseenter', function() {
        arrowDown[1].classList.add("arrow-rotate");

        if (navSolutionContents.style.display = "none") {
            navSolutionContents.style.display = "flex";
        };

    });

    navSolutionContents.addEventListener('mouseleave', function() {
        arrowDown[1].classList.remove("arrow-rotate");

        if (navSolutionContents.style.display = "flex") {
            navSolutionContents.style.display = "none";
        };
    });
    //
    
    //for templates lists
    const navTemplates = document.querySelector(".templates");
    const navTemplatesContents = document.querySelector(".templates-lists");

    navTemplates.addEventListener('mouseenter', function() {
        arrowDown[2].classList.add("arrow-rotate");

        if (navTemplatesContents.style.display = "none") {
            navTemplatesContents.style.display = "flex";
        };

    });

    navTemplatesContents.addEventListener('mouseleave', function() {
        arrowDown[2].classList.remove("arrow-rotate");

        if (navTemplatesContents.style.display = "flex") {
            navTemplatesContents.style.display = "none";
        };
    });
    //

    //for integrations lists
    const navIntegrations = document.querySelector(".integrations-pr-link");
    const navIntegrationsContents = document.querySelector(".integrations-comps");

    navIntegrations.addEventListener('mouseenter', function() {
        arrowDown[3].classList.add("arrow-rotate");

        if (navIntegrationsContents.style.display = "none") {
            navIntegrationsContents.style.display = "grid";
        };

    });

    navIntegrationsContents.addEventListener('mouseleave', function() {
        arrowDown[3].classList.remove("arrow-rotate");

        if (navIntegrationsContents.style.display = "grid") {
            navIntegrationsContents.style.display = "none";
        };
    });
    //

    //for Resources and support lists
    const navResources = document.querySelector(".r-and-s");
    const navResourcesContents = document.querySelector(".resources-and-support");

    navResources.addEventListener('mouseenter', function() {
        arrowDown[4].classList.add("arrow-rotate");

        if (navResourcesContents.style.display = "none") {
            navResourcesContents.style.display = "flex";
        };

    });

    navResourcesContents.addEventListener('mouseleave', function() {
        arrowDown[4].classList.remove("arrow-rotate");

        if (navResourcesContents.style.display = "flex") {
            navResourcesContents.style.display = "none";
        };
    });
    //
}

arrowRotate();
//

