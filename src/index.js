import "./styles.css";
import addHome from "./home.js";
import addMenu from "./menu.js";
import addContact from "./contact.js";

const content = document.querySelector("#content");

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const contactBtn = document.querySelector("#contact-btn");

addHome();
homeBtn.addEventListener("click", () => {
  content.removeChild(content.lastElementChild);
  addHome();
});

menuBtn.addEventListener("click", () => {
  content.removeChild(content.lastElementChild);
  addMenu();
});

contactBtn.addEventListener("click", () => {
  content.removeChild(content.lastElementChild);
  addContact();
});