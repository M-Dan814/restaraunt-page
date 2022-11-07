import { home } from "./home";
import { contact } from "./contact"

const body = document.querySelector("#content");
const holder = document.createElement("div");
holder.classList.add("holder");

const header = document.createElement("header");
const linkCont = document.createElement("ul");
const homeLink = document.createElement("li");
homeLink.textContent = "Home";
const aboutLink = document.createElement("li");
aboutLink.textContent = "About";
const menuLink = document.createElement("li");
menuLink.textContent = "Menu";
linkCont.append(homeLink, aboutLink, menuLink);
linkCont.classList.add("links");
header.append(linkCont);
body.append(header);
holder.append(contact())
body.append(holder)