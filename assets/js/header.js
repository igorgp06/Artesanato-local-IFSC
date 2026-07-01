const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("#menu-principal");
const overlay = document.querySelector(".menu-overlay");
const menuIcon = menuToggle?.querySelector("i");
const navLinks = document.querySelectorAll(".nav-link");

let scrollPosition = 0;

function openMenu() {
    scrollPosition = window.scrollY;

    menu.classList.add("active");
    overlay.classList.add("active");
    document.body.classList.add("menu-open");

    /*
        Trava o body exatamente na posição atual.
        Isso impede o usuário de scrollar por trás do menu
        e evita a página pular para o topo.
    */
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";

    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Fechar menu");

    if (menuIcon) {
        menuIcon.classList.remove("bi-list");
        menuIcon.classList.add("bi-x-lg");
    }
}

function closeMenu() {
    menu.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("menu-open");

    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";

    window.scrollTo(0, scrollPosition);

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");

    if (menuIcon) {
        menuIcon.classList.remove("bi-x-lg");
        menuIcon.classList.add("bi-list");
    }
}

function toggleMenu() {
    const isOpen = menu.classList.contains("active");

    if (isOpen) {
        closeMenu();
    } else {
        openMenu();
    }
}

function setActiveLink() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    navLinks.forEach((link) => {
        const linkPage = link.getAttribute("href").split("/").pop();

        if (linkPage === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

if (menuToggle && menu && overlay) {
    menuToggle.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", closeMenu);

    navLinks.forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && menu.classList.contains("active")) {
            closeMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768 && menu.classList.contains("active")) {
            closeMenu();
        }
    });

    setActiveLink();
}