/* ==================================================
   PH PERTAMA ISTC
   MAIN JAVASCRIPT
================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeHeader();
    initializeMobileMenu();
    initializeDarkMode();
    initializeCounters();
    initializeScrollReveal();
    initializeBackToTop();
    initializeNewsletter();
    initializeActiveNav();
    initializeSmoothScroll();
    initializePreloader();

});

/* ==================================================
   STICKY HEADER
================================================== */

function initializeHeader() {

    const header = document.getElementById("header");

    if (!header) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    });

}

/* ==================================================
   MOBILE MENU
================================================== */

function initializeMobileMenu() {

    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (!menuBtn || !mobileMenu) return;

    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
    });

    mobileMenu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
        });

    });

}

/* ==================================================
   DARK MODE
================================================== */

function initializeDarkMode() {

    const themeBtn = document.getElementById("themeToggle");

    if (!themeBtn) return;

    const savedTheme =
        localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

        themeBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    }

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle(
            "dark-mode"
        );

        const isDark =
            document.body.classList.contains(
                "dark-mode"
            );

        localStorage.setItem(
            "theme",
            isDark ? "dark" : "light"
        );

        themeBtn.innerHTML = isDark
            ? '<i class="fa-solid fa-sun"></i>'
            : '<i class="fa-solid fa-moon"></i>';

    });

}

/* ==================================================
   COUNTER ANIMATION
================================================== */

function initializeCounters() {

    const counters =
        document.querySelectorAll(".counter");

    if (!counters.length) return;

    const observer =
        new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const counter =
                    entry.target;

                const target =
                    Number(
                        counter.dataset.target
                    );

                let current = 0;

                const increment =
                    target / 120;

                const updateCounter = () => {

                    current += increment;

                    if (current < target) {

                        counter.innerText =
                            Math.floor(current)
                            .toLocaleString();

                        requestAnimationFrame(
                            updateCounter
                        );

                    } else {

                        counter.innerText =
                            target.toLocaleString();

                    }

                };

                updateCounter();

                observer.unobserve(counter);

            });

        });

    counters.forEach(counter => {

        observer.observe(counter);

    });

}

/* ==================================================
   SCROLL REVEAL
================================================== */

function initializeScrollReveal() {

    const elements = document.querySelectorAll(
        ".stat-card, .service-card, .project-card, .why-card, .testimonial-card, .mvv-card"
    );

    if (!elements.length) return;

    const observer =
        new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "revealed"
                    );

                }

            });

        }, {
            threshold: 0.15
        });

    elements.forEach(element => {

        element.classList.add("reveal");

        observer.observe(element);

    });

}

/* ==================================================
   BACK TO TOP
================================================== */

function initializeBackToTop() {

    const button =
        document.getElementById("topBtn");

    if (!button) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            button.style.display = "flex";

        } else {

            button.style.display = "none";

        }

    });

    button.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

/* ==================================================
   NEWSLETTER
================================================== */

function initializeNewsletter() {

    const form =
        document.querySelector(
            ".newsletter-form"
        );

    if (!form) return;

    form.addEventListener("submit", e => {

        e.preventDefault();

        const email =
            form.querySelector("input");

        const value =
            email.value.trim();

        const pattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!pattern.test(value)) {

            alert(
                "Please enter a valid email address."
            );

            return;

        }

        alert(
            "Thank you for subscribing!"
        );

        form.reset();

    });

}

/* ==================================================
   ACTIVE NAVIGATION
================================================== */

function initializeActiveNav() {

    const links =
        document.querySelectorAll("nav a");

    const currentPage =
        window.location.pathname
        .split("/")
        .pop();

    links.forEach(link => {

        const href =
            link.getAttribute("href");

        if (
            href === currentPage ||
            (currentPage === "" &&
             href === "index.html")
        ) {

            link.classList.add("active-nav");

        }

    });

}

/* ==================================================
   SMOOTH SCROLL
================================================== */

function initializeSmoothScroll() {

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener(
                "click",
                function (e) {

                    const target =
                        document.querySelector(
                            this.getAttribute(
                                "href"
                            )
                        );

                    if (!target) return;

                    e.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }
            );

        });

}

/* ==================================================
   SIMPLE PRELOADER
================================================== */

function initializePreloader() {

    document.body.classList.add(
        "loaded"
    );

}

/* ==================================================
   PROJECT FILTER
   FOR PROJECTS PAGE
================================================== */

function filterProjects(category) {

    const projects =
        document.querySelectorAll(
            ".project-item"
        );

    projects.forEach(project => {

        if (
            category === "all" ||
            project.classList.contains(category)
        ) {

            project.style.display = "block";

        } else {

            project.style.display = "none";

        }

    });

}

/* ==================================================
   CONTACT FORM
================================================== */

function submitContactForm(event) {

    event.preventDefault();

    alert(
        "Thank you for contacting PH Pertama ISTC. We will respond shortly."
    );

    event.target.reset();

}

/* ==================================================
   COST ESTIMATOR
================================================== */

function calculateEstimate() {

    const type =
        document.getElementById(
            "projectType"
        );

    const area =
        document.getElementById(
            "projectArea"
        );

    const result =
        document.getElementById(
            "estimateResult"
        );

    if (
        !type ||
        !area ||
        !result
    ) return;

    const rate =
        Number(type.value);

    const sqm =
        Number(area.value);

    if (!sqm) {

        result.innerHTML =
            "Enter project size.";

        return;

    }

    const total =
        rate * sqm;

    result.innerHTML =
        "Estimated Cost: ₱" +
        total.toLocaleString();

}