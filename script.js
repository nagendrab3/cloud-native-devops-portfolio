/* ===========================
   Mobile Navigation Menu
=========================== */

// Create hamburger button
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");

const menuButton = document.createElement("div");
menuButton.classList.add("menu-btn");
menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';

navbar.appendChild(menuButton);


// Open / Close menu
menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    menuButton.innerHTML = navLinks.classList.contains("active")
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';

});


// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuButton.innerHTML =
        '<i class="fa-solid fa-bars"></i>';

    });

});



/* ===========================
   Typing Animation
=========================== */

const roles = [
    "Cloud-Native Engineer",
    "Kubernetes Engineer",
    "DevOps Engineer",
    "Telecom CNF Specialist"
];

let roleIndex = 0;
let charIndex = 0;

const heroTitle = document.querySelector(".hero h2");


function typeEffect(){

    if(charIndex < roles[roleIndex].length){

        heroTitle.textContent += 
        roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);

    }

    else{

        setTimeout(deleteEffect,1500);

    }

}


function deleteEffect(){

    if(charIndex > 0){

        heroTitle.textContent =
        roles[roleIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(deleteEffect,50);

    }

    else{

        roleIndex++;

        if(roleIndex >= roles.length){

            roleIndex = 0;

        }

        setTimeout(typeEffect,500);

    }

}


// Start animation

heroTitle.textContent = "";

typeEffect();



/* ===========================
   Scroll Reveal Animation
=========================== */


const sections = document.querySelectorAll("section");


window.addEventListener("scroll",()=>{

    sections.forEach(section=>{

        let position =
        section.getBoundingClientRect().top;

        let screenHeight =
        window.innerHeight;


        if(position < screenHeight - 100){

            section.classList.add("show");

        }

    });

});



/* ===========================
   Current Year Footer
=========================== */

const footer = document.querySelector("footer p");

const year = new Date().getFullYear();


footer.innerHTML =
`
© ${year} Nagendra Babu Alapati
<br>
Cloud-Native | DevOps | Kubernetes | AWS
`;



/* ===========================
   Download Resume Tracking
=========================== */


const resumeButton =
document.querySelector(".btn");


resumeButton.addEventListener("click",()=>{

    console.log("Resume downloaded");

});
