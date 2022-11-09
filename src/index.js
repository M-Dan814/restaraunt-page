import { home } from "./home";
import { menu } from "./menu";
import { contact } from "./contact";
import "./styles.css";

const body = document.querySelector("#content");
const holder = document.createElement("div");
holder.classList.add("holder");

const header = document.createElement("header");
header.classList.add("header");
const linkCont = document.createElement("ul");
const homeLink = document.createElement("li");
homeLink.textContent = "Home";
homeLink.id = "home";
homeLink.classList.add("active");

const contactLink = document.createElement("li");
contactLink.textContent = "Contact";
contactLink.id = "contact";
const menuLink = document.createElement("li");
menuLink.textContent = "Menu";
menuLink.id = "menu";

linkCont.append(homeLink, contactLink, menuLink);
linkCont.classList.add("links");
header.append(linkCont);
body.append(header);
holder.append(home());
body.append(holder);

homeLink.addEventListener("click", () => {
  holder.innerHTML = "";
  holder.append(home());
  body.append(holder);
  homeLink.classList.add("active");
  menuLink.classList.remove("active");
  contactLink.classList.remove("active");
});

contactLink.addEventListener("click", () => {
  holder.innerHTML = "";
  holder.append(contact());
  body.append(holder);
  contactLink.classList.add("active");
  menuLink.classList.remove("active");
  homeLink.classList.remove("active");
});

menuLink.addEventListener("click", () => {
  holder.innerHTML = "";
  holder.append(menu());
  body.append(holder);
  menuLink.classList.add("active");
  homeLink.classList.remove("active");
  contactLink.classList.remove("active");
});
