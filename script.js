/* ===================================
   STICKY HEADER
=================================== */

const header =
document.getElementById("header");

window.addEventListener("scroll",()=>{

  if(window.scrollY > 50){

    header.classList.add("scrolled");

  }else{

    header.classList.remove("scrolled");

  }

});

/* ===================================
   MOBILE MENU
=================================== */

const menuBtn =
document.getElementById("menuBtn");

const mobileMenu =
document.querySelector(".mobile-menu");

menuBtn.addEventListener("click",()=>{

  mobileMenu.classList.toggle("active");

});

document
.querySelectorAll(".mobile-menu a")
.forEach(link=>{

  link.addEventListener("click",()=>{

    mobileMenu.classList.remove("active");

  });

});

/* ===================================
   DARK MODE
=================================== */

const themeToggle =
document.getElementById("themeToggle");

themeToggle.addEventListener("click",()=>{

  document.body.classList.toggle(
    "dark-mode"
  );

  const icon =
  themeToggle.querySelector("i");

  if(
    document.body.classList.contains(
      "dark-mode"
    )
  ){

    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");

  }else{

    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");

  }

});

/* ===================================
   COUNTER ANIMATION
=================================== */

const counters =
document.querySelectorAll(".counter");

const counterObserver =
new IntersectionObserver(entries=>{

  entries.forEach(entry=>{

    if(entry.isIntersecting){

      const counter =
      entry.target;

      const target =
      +counter.dataset.target;

      let current = 0;

      const increment =
      target / 120;

      const update = ()=>{

        current += increment;

        if(current < target){

          counter.innerText =
          Math.floor(current)
          .toLocaleString();

          requestAnimationFrame(update);

        }else{

          counter.innerText =
          target.toLocaleString();

        }

      };

      update();

      counterObserver.unobserve(
        counter
      );

    }

  });

});

counters.forEach(counter=>{

  counterObserver.observe(counter);

});

/* ===================================
   PROJECT FILTER
=================================== */

const filters =
document.querySelectorAll(".filter");

const projects =
document.querySelectorAll(".project");

filters.forEach(button=>{

  button.addEventListener("click",()=>{

    document
    .querySelector(".filter.active")
    .classList.remove("active");

    button.classList.add("active");

    const filter =
    button.dataset.filter;

    projects.forEach(project=>{

      if(
        filter === "all" ||
        project.classList.contains(filter)
      ){

        project.style.display =
        "block";

      }else{

        project.style.display =
        "none";

      }

    });

  });

});

/* ===================================
   PROJECT MODAL
=================================== */

const modal =
document.getElementById("projectModal");

const modalImage =
document.getElementById("modalImage");

const closeModal =
document.getElementById("closeModal");

projects.forEach(project=>{

  project.addEventListener("click",()=>{

    const img =
    project.querySelector("img");

    modal.style.display =
    "flex";

    modalImage.src =
    img.src;

  });

});

closeModal.addEventListener("click",()=>{

  modal.style.display =
  "none";

});

modal.addEventListener("click",(e)=>{

  if(e.target === modal){

    modal.style.display =
    "none";

  }

});

/* ===================================
   SCROLL REVEAL
=================================== */

const revealElements =
document.querySelectorAll(
  "section, .service-card, .team-card, .timeline-item"
);

revealElements.forEach(el=>{

  el.classList.add("reveal");

});

const revealObserver =
new IntersectionObserver(entries=>{

  entries.forEach(entry=>{

    if(entry.isIntersecting){

      entry.target.classList.add(
        "show"
      );

    }

  });

},{
  threshold:0.15
});

revealElements.forEach(el=>{

  revealObserver.observe(el);

});

/* ===================================
   COST ESTIMATOR
=================================== */

const calculateBtn =
document.getElementById(
  "calculateBtn"
);

calculateBtn.addEventListener(
"click",()=>{

  const rate =
  Number(
    document.getElementById(
      "projectType"
    ).value
  );

  const size =
  Number(
    document.getElementById(
      "projectSize"
    ).value
  );

  if(!size){

    alert(
      "Please enter project size."
    );

    return;

  }

  const total =
  rate * size;

  document.getElementById(
    "estimateResult"
  ).innerText =
  "Estimated Cost: ₱" +
  total.toLocaleString();

});

/* ===================================
   CONTACT FORM
=================================== */

const contactForm =
document.getElementById(
  "contactForm"
);

contactForm.addEventListener(
"submit",(e)=>{

  e.preventDefault();

  alert(
    "Thank you for contacting PH PERTAMA ISTC. We will get back to you shortly."
  );

  contactForm.reset();

});

/* ===================================
   SCROLL TO TOP
=================================== */

const topBtn =
document.getElementById(
  "topBtn"
);

window.addEventListener(
"scroll",()=>{

  if(window.scrollY > 500){

    topBtn.style.display =
    "flex";

  }else{

    topBtn.style.display =
    "none";

  }

});

topBtn.addEventListener(
"click",()=>{

  window.scrollTo({

    top:0,

    behavior:"smooth"

  });

});

/* ===================================
   ACTIVE NAVIGATION
=================================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(
  "nav a"
);

window.addEventListener(
"scroll",()=>{

  let current = "";

  sections.forEach(section=>{

    const top =
    section.offsetTop - 120;

    const height =
    section.clientHeight;

    if(
      pageYOffset >= top &&
      pageYOffset < top + height
    ){

      current =
      section.getAttribute("id");

    }

  });

  navLinks.forEach(link=>{

    link.classList.remove(
      "active-nav"
    );

    if(
      link.getAttribute("href") ===
      "#" + current
    ){

      link.classList.add(
        "active-nav"
      );

    }

  });

});

/* ===================================
   PARALLAX HERO EFFECT
=================================== */

window.addEventListener(
"scroll",()=>{

  const hero =
  document.querySelector(
    ".hero-content"
  );

  const offset =
  window.scrollY * 0.25;

  hero.style.transform =
  `translateY(${offset}px)`;

});

/* ===================================
   WHATSAPP BUTTON
=================================== */

const whatsappBtn =
document.getElementById(
  "whatsappBtn"
);

whatsappBtn.href =
"https://wa.me/639123456789";

/* ===================================
   PAGE LOADED
=================================== */

window.addEventListener(
"load",()=>{

  document.body.classList.add(
    "loaded"
  );

  console.log(
    "PH PERTAMA ISTC Website Loaded"
  );

});