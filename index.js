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