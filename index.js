// For animation
var typed = new Typed(".text", {
  strings: ["Web Developer", "UI Designer", "Competitive Programmar"],
  typeSpeed: 100,
  backSpeed: 100,
  backdelay: 1000,
  loop: true,
});

let tablinks = document.getElementsByClassName("tab-links");
let tabcontent = document.getElementsByClassName("tab-contents");

function openTab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tab of tabcontent) {
    tab.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

let menu = document.getElementById("sidemenu");

function openmenu() {
  menu.style.right = "0";
}

function closemenu() {
  menu.style.right = "-150px";
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzbGdg3A3aUZUb2BnGburRTo416OEelgBmoiM_Qo4NmpHzP1s9J4tt09pnBLjGAWjvT/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
