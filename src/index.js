import { home } from "./home"

const body = document.querySelector("#content");

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
body.append(home())