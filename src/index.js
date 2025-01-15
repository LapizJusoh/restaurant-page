import "./styles.css";
import addHome from "./home.js";
import addMenu from "./menu.js";
import addContact from "./contact.js";

const content = document.querySelector("#content");

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const contactBtn = document.querySelector("#contact-btn");

addHome();
homeBtn.classList.toggle("active");

homeBtn.addEventListener("click", () => {
  content.removeChild(content.lastElementChild);
  addHome();
  !homeBtn.classList.contains("active") ? homeBtn.classList.toggle("active") : '' ;
  menuBtn.classList.contains("active") ? menuBtn.classList.toggle("active") : '' ;
  contactBtn.classList.contains("active") ? contactBtn.classList.toggle("active") : '' ;
});

menuBtn.addEventListener("click", () => {
  content.removeChild(content.lastElementChild);
  addMenu();
  !menuBtn.classList.contains("active") ? menuBtn.classList.toggle("active") : '' ;
  homeBtn.classList.contains("active") ? homeBtn.classList.toggle("active") : '' ;
  contactBtn.classList.contains("active") ? contactBtn.classList.toggle("active") : '' ;
});

contactBtn.addEventListener("click", () => {
  content.removeChild(content.lastElementChild);
  addContact();
  !contactBtn.classList.contains("active") ? contactBtn.classList.toggle("active") : '' ;
  menuBtn.classList.contains("active") ? menuBtn.classList.toggle("active") : '' ;
  homeBtn.classList.contains("active") ? homeBtn.classList.toggle("active") : '' ;
});