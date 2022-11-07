import { home } from "./home";
import { menu } from "./menu";
import { contact } from "./contact"


const body = document.querySelector("#content");
const holder = document.createElement("div");
holder.classList.add("holder");

const header = document.createElement("header");
const linkCont = document.createElement("ul");
const homeLink = document.createElement("li");
homeLink.textContent = "Home";
homeLink.id = "home";
const contactLink = document.createElement("li");
contactLink.textContent = "Contact";
contactLink.id = "about";
const menuLink = document.createElement("li");
menuLink.textContent = "Menu";
menuLink.id = "menu";

linkCont.append(homeLink, contactLink, menuLink);
linkCont.classList.add("links");
header.append(linkCont);
body.append(header);

homeLink.addEventListener("click", () => {
    holder.innerHTML = "";
    holder.append(home());
    body.append(holder);
})

contactLink.addEventListener("click", () => {
    holder.innerHTML = "";
    holder.append(contact());
    body.append(holder);
})

menuLink.addEventListener("click", () => {
    holder.innerHTML = "";
    holder.append(menu());
    body.append(holder);
})