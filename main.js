/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/img/item1.jpg":
/*!***************************!*\
  !*** ./src/img/item1.jpg ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "45951383aee65b86d99d423dd9150397.jpg");

/***/ }),

/***/ "./src/img/item2.jpg":
/*!***************************!*\
  !*** ./src/img/item2.jpg ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "e01f9363fc6697ca1b7463f520031a2a.jpg");

/***/ }),

/***/ "./src/img/item3.jpg":
/*!***************************!*\
  !*** ./src/img/item3.jpg ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "8c393fe90aacd6aee1ebf10ac67b8fa2.jpg");

/***/ }),

/***/ "./src/img/item4.jpg":
/*!***************************!*\
  !*** ./src/img/item4.jpg ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "590aab2bf2c3e3a2d4e42a6c10ea12d2.jpg");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact": () => (/* binding */ contact)
/* harmony export */ });


const contact = () => {
    const cont = document.createElement("div");
    const header = document.createElement("h1");
    header.textContent = "Contact";

    // Creating card for 1st employee
    const cont1 = document.createElement("div");
    const head1 = document.createElement("h2");
    head1.textContent = "Sous Chef";
    const contInfo1 = document.createElement("ul");
    const num1 = document.createElement("li");
    num1.textContent = "Contact Number: 555-555-555";
    const email1 = document.createElement("li");
    email1.textContent = "Email: realEmail@notfakeemail.com";
    contInfo1.append(num1, email1);
    cont1.append(head1, contInfo1);
    cont1.classList.add("card");

    // Create card for 2nd employee
    const cont2 = document.createElement("div");
    const head2 = document.createElement("h2");
    head2.textContent = "Chef";
    const contInfo2 = document.createElement("ul");
    const num2 = document.createElement("li");
    num2.textContent = "Contact Number: 555-555-555";
    const email2 = document.createElement("li");
    email2.textContent = "Email: realEmail@notfakeemail.com";
    contInfo2.append(num2, email2);
    cont2.append(head2, contInfo2);
    cont2.classList.add("card");

    // Create card for 3rd employee
    const cont3 = document.createElement("div");
    const head3 = document.createElement("h2");
    head3.textContent = "Waiter";
    const contInfo3 = document.createElement("ul");
    const num3 = document.createElement("li");
    num3.textContent = "Contact Number: 555-555-555";
    const email3 = document.createElement("li");
    email3.textContent = "Email: realEmail@notfakeemail.com";
    contInfo3.append(num3, email3);
    cont3.append(head3, contInfo3);
    cont3.classList.add("card");

    cont.append(header, cont1, cont2, cont3);
    return cont;
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home": () => (/* binding */ home)
/* harmony export */ });
const home = () => {
  const home_body = document.createElement("div");

  // Restaraunt Name
  const restaraunt_name = document.createElement("h1");
  restaraunt_name.textContent = "Dayan's Delicious Desserts";
  restaraunt_name.classList.add("Name");

  // Create a Reviews Section
  const review = document.createElement("div");
  review.id = "review";
  const heading1 = document.createElement("h2");
  heading1.textContent = "Reviews";
  review.append(heading1);
  const review_text = document.createElement("div");
  review_text.textContent +=
    "Dayan's Delicious Desserts cooked up some of the most delightful desserts I have ever tasted in my life! I would recommend any dessert enjoyer to go here so they can taste the delicious goodness for themselves.";
  const reviewer = document.createElement("div");
  reviewer.textContent = "Generic Person";
  review.append(review_text);
  review.append(reviewer);

  // Create the Time Section
  const times = document.createElement("div");
  times.id = "times";
  const heading2 = document.createElement("h2");
  heading2.textContent = "Times";
  times.append(heading2);
  const time_list = document.createElement("ul");
  const t1 = document.createElement("li");
  t1.textContent = "Monday: 08:00 - 22:00";
  const t2 = document.createElement("li");
  t2.textContent = "Tuesday: 08:00 - 22:00";
  const t3 = document.createElement("li");
  t3.textContent = "Wednesday: 08:00 - 22:00";
  const t4 = document.createElement("li");
  t4.textContent = "Thursday: 08:00 - 22:00";
  const t5 = document.createElement("li");
  t5.textContent = "Friday: 08:00 - 20:00";
  const t6 = document.createElement("li");
  t6.textContent = "Saturday: 08:00 - 20:00";
  const t7 = document.createElement("li");
  t7.textContent = "Sunday: 08:00 - 20:00";
  time_list.append(t1, t2, t3, t4, t5, t6, t7);
  times.append(time_list);

  // Create the Location Section
  const loc = document.createElement("div");
  loc.id = "location";
  const heading3 = document.createElement("h2");
  heading3.textContent = "Location";
  loc.append(heading3);
  const location = document.createElement("div");
  location.textContent +=
    "Some City Somewhere, Some Town Somewhere, Some Street Somewhere, Building Somewhere";
  loc.append(location);
  // Appending the divs
  home_body.append(restaraunt_name, review, times, loc);
  return home_body;
};




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _img_item1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/item1.jpg */ "./src/img/item1.jpg");
/* harmony import */ var _img_item2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/item2.jpg */ "./src/img/item2.jpg");
/* harmony import */ var _img_item3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/item3.jpg */ "./src/img/item3.jpg");
/* harmony import */ var _img_item4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/item4.jpg */ "./src/img/item4.jpg");






const menu = () => {
  const cont = document.createElement("div");
  const header = document.createElement("h1");
  header.textContent = "Menu";

  // Creating card for 1st dish
  const cont1 = document.createElement("div");
  const head1 = document.createElement("h2");
  head1.textContent = "Chocolate Parfait";
  const img1 = new Image();
  img1.src = _img_item1_jpg__WEBPACK_IMPORTED_MODULE_0__["default"];
  img1.classList.add("image");
  const descript1 = document.createElement("div");
  descript1.textContent =
    "This Chocolate Parfait is whipped up by our incredibly talented chefs using the most exquisite ingredients. This will be sure to tickle your taste buds!";
  const price1 = document.createElement("div");
  price1.textContent = "$5.00";
  price1.classList.add("price");
  cont1.append(head1, img1, descript1, price1);
  cont1.classList.add("card");

  // Create card for 2nd dish
  const cont2 = document.createElement("div");
  const head2 = document.createElement("h2");
  head2.textContent = "Chocolate Cookies";
  const img2 = new Image();
  img2.src = _img_item2_jpg__WEBPACK_IMPORTED_MODULE_1__["default"];
  img2.classList.add("image");
  const descript2 = document.createElement("div");
  descript2.textContent =
    "These Chocolate Cookies will be sure to delight your taste buds. They are baked to perfection using the best possible ingredients.";
  const price2 = document.createElement("div");
  price2.textContent = "$1.50";
  price2.classList.add("price");
  cont2.append(head2, img2, descript2, price2);
  cont2.classList.add("card");

  // Create card for 3rd dish
  const cont3 = document.createElement("div");
  const head3 = document.createElement("h2");
  head3.textContent = "Strawberry Pastries";
  const img3 = new Image();
  img3.src = _img_item3_jpg__WEBPACK_IMPORTED_MODULE_2__["default"];
  img3.classList.add("image");
  const descript3 = document.createElement("div");
  descript3.textContent =
    "These Strawberry Pastries utilize freshly picked strawberries and our very own handmade vanilla cream. The decorations on this dish ensure that this is a treat not only for your taste buds but for your eyes as well.";
  const price3 = document.createElement("div");
  price3.textContent = "$2.00";
  price3.classList.add("price");
  cont3.append(head3, img3, descript3, price3);
  cont3.classList.add("card");

  // Create card for 4th dish
  const cont4 = document.createElement("div");
  const head4 = document.createElement("h2");
  head4.textContent = "Strawberry Cheesecake";
  const img4 = new Image();
  img4.src = _img_item4_jpg__WEBPACK_IMPORTED_MODULE_3__["default"];
  img4.classList.add("image");
  const descript4 = document.createElement("div");
  descript4.textContent =
    "This Strawberry Cheesecake is whipped up by our incredibly talented chefs using the most exquisite ingredients. This will be sure to tickle your taste buds!";
  const price4 = document.createElement("div");
  price4.textContent = "$3.50";
  price4.classList.add("price");
  cont4.append(head4, img4, descript4, price4);
  cont4.classList.add("card");

  cont.append(header, cont1, cont2, cont3, cont4);
  return cont;
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");





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
    holder.append((0,_home__WEBPACK_IMPORTED_MODULE_0__.home)());
    body.append(holder);
})

contactLink.addEventListener("click", () => {
    holder.innerHTML = "";
    holder.append((0,_contact__WEBPACK_IMPORTED_MODULE_2__.contact)());
    body.append(holder);
})

menuLink.addEventListener("click", () => {
    holder.innerHTML = "";
    holder.append((0,_menu__WEBPACK_IMPORTED_MODULE_1__.menu)());
    body.append(holder);
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEbUI7QUFDQTtBQUNBO0FBQ0E7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxzREFBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHNEQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsc0RBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxzREFBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDOUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7OztBQ2Y4QjtBQUNBO0FBQ0s7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsMkNBQUk7QUFDdEI7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlEQUFPO0FBQ3pCO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwyQ0FBSTtBQUN0QjtBQUNBLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhcmF1bnQtcGFnZS8uL3NyYy9pbWcvaXRlbTEuanBnIiwid2VicGFjazovL3Jlc3RhcmF1bnQtcGFnZS8uL3NyYy9pbWcvaXRlbTIuanBnIiwid2VicGFjazovL3Jlc3RhcmF1bnQtcGFnZS8uL3NyYy9pbWcvaXRlbTMuanBnIiwid2VicGFjazovL3Jlc3RhcmF1bnQtcGFnZS8uL3NyYy9pbWcvaXRlbTQuanBnIiwid2VicGFjazovL3Jlc3RhcmF1bnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhcmF1bnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhcmF1bnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhcmF1bnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhcmF1bnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhcmF1bnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhcmF1bnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhcmF1bnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjQ1OTUxMzgzYWVlNjViODZkOTlkNDIzZGQ5MTUwMzk3LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlMDFmOTM2M2ZjNjY5N2NhMWI3NDYzZjUyMDAzMWEyYS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOGMzOTNmZTkwYWFjZDZhZWUxZWJmMTBhYzY3YjhmYTIuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjU5MGFhYjJiZjJjM2UzYTJkNGU0MmE2YzEwZWExMmQyLmpwZ1wiOyIsIlxyXG5cclxuY29uc3QgY29udGFjdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XHJcblxyXG4gICAgLy8gQ3JlYXRpbmcgY2FyZCBmb3IgMXN0IGVtcGxveWVlXHJcbiAgICBjb25zdCBjb250MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBoZWFkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIGhlYWQxLnRleHRDb250ZW50ID0gXCJTb3VzIENoZWZcIjtcclxuICAgIGNvbnN0IGNvbnRJbmZvMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIGNvbnN0IG51bTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBudW0xLnRleHRDb250ZW50ID0gXCJDb250YWN0IE51bWJlcjogNTU1LTU1NS01NTVcIjtcclxuICAgIGNvbnN0IGVtYWlsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIGVtYWlsMS50ZXh0Q29udGVudCA9IFwiRW1haWw6IHJlYWxFbWFpbEBub3RmYWtlZW1haWwuY29tXCI7XHJcbiAgICBjb250SW5mbzEuYXBwZW5kKG51bTEsIGVtYWlsMSk7XHJcbiAgICBjb250MS5hcHBlbmQoaGVhZDEsIGNvbnRJbmZvMSk7XHJcbiAgICBjb250MS5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcclxuXHJcbiAgICAvLyBDcmVhdGUgY2FyZCBmb3IgMm5kIGVtcGxveWVlXHJcbiAgICBjb25zdCBjb250MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBoZWFkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIGhlYWQyLnRleHRDb250ZW50ID0gXCJDaGVmXCI7XHJcbiAgICBjb25zdCBjb250SW5mbzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICBjb25zdCBudW0yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgbnVtMi50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBOdW1iZXI6IDU1NS01NTUtNTU1XCI7XHJcbiAgICBjb25zdCBlbWFpbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBlbWFpbDIudGV4dENvbnRlbnQgPSBcIkVtYWlsOiByZWFsRW1haWxAbm90ZmFrZWVtYWlsLmNvbVwiO1xyXG4gICAgY29udEluZm8yLmFwcGVuZChudW0yLCBlbWFpbDIpO1xyXG4gICAgY29udDIuYXBwZW5kKGhlYWQyLCBjb250SW5mbzIpO1xyXG4gICAgY29udDIuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XHJcblxyXG4gICAgLy8gQ3JlYXRlIGNhcmQgZm9yIDNyZCBlbXBsb3llZVxyXG4gICAgY29uc3QgY29udDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgaGVhZDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBoZWFkMy50ZXh0Q29udGVudCA9IFwiV2FpdGVyXCI7XHJcbiAgICBjb25zdCBjb250SW5mbzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICBjb25zdCBudW0zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgbnVtMy50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBOdW1iZXI6IDU1NS01NTUtNTU1XCI7XHJcbiAgICBjb25zdCBlbWFpbDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBlbWFpbDMudGV4dENvbnRlbnQgPSBcIkVtYWlsOiByZWFsRW1haWxAbm90ZmFrZWVtYWlsLmNvbVwiO1xyXG4gICAgY29udEluZm8zLmFwcGVuZChudW0zLCBlbWFpbDMpO1xyXG4gICAgY29udDMuYXBwZW5kKGhlYWQzLCBjb250SW5mbzMpO1xyXG4gICAgY29udDMuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XHJcblxyXG4gICAgY29udC5hcHBlbmQoaGVhZGVyLCBjb250MSwgY29udDIsIGNvbnQzKTtcclxuICAgIHJldHVybiBjb250O1xyXG59XHJcblxyXG5leHBvcnQgeyBjb250YWN0IH07IiwiY29uc3QgaG9tZSA9ICgpID0+IHtcclxuICBjb25zdCBob21lX2JvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAvLyBSZXN0YXJhdW50IE5hbWVcclxuICBjb25zdCByZXN0YXJhdW50X25hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgcmVzdGFyYXVudF9uYW1lLnRleHRDb250ZW50ID0gXCJEYXlhbidzIERlbGljaW91cyBEZXNzZXJ0c1wiO1xyXG4gIHJlc3RhcmF1bnRfbmFtZS5jbGFzc0xpc3QuYWRkKFwiTmFtZVwiKTtcclxuXHJcbiAgLy8gQ3JlYXRlIGEgUmV2aWV3cyBTZWN0aW9uXHJcbiAgY29uc3QgcmV2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICByZXZpZXcuaWQgPSBcInJldmlld1wiO1xyXG4gIGNvbnN0IGhlYWRpbmcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gIGhlYWRpbmcxLnRleHRDb250ZW50ID0gXCJSZXZpZXdzXCI7XHJcbiAgcmV2aWV3LmFwcGVuZChoZWFkaW5nMSk7XHJcbiAgY29uc3QgcmV2aWV3X3RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHJldmlld190ZXh0LnRleHRDb250ZW50ICs9XHJcbiAgICBcIkRheWFuJ3MgRGVsaWNpb3VzIERlc3NlcnRzIGNvb2tlZCB1cCBzb21lIG9mIHRoZSBtb3N0IGRlbGlnaHRmdWwgZGVzc2VydHMgSSBoYXZlIGV2ZXIgdGFzdGVkIGluIG15IGxpZmUhIEkgd291bGQgcmVjb21tZW5kIGFueSBkZXNzZXJ0IGVuam95ZXIgdG8gZ28gaGVyZSBzbyB0aGV5IGNhbiB0YXN0ZSB0aGUgZGVsaWNpb3VzIGdvb2RuZXNzIGZvciB0aGVtc2VsdmVzLlwiO1xyXG4gIGNvbnN0IHJldmlld2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICByZXZpZXdlci50ZXh0Q29udGVudCA9IFwiR2VuZXJpYyBQZXJzb25cIjtcclxuICByZXZpZXcuYXBwZW5kKHJldmlld190ZXh0KTtcclxuICByZXZpZXcuYXBwZW5kKHJldmlld2VyKTtcclxuXHJcbiAgLy8gQ3JlYXRlIHRoZSBUaW1lIFNlY3Rpb25cclxuICBjb25zdCB0aW1lcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdGltZXMuaWQgPSBcInRpbWVzXCI7XHJcbiAgY29uc3QgaGVhZGluZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgaGVhZGluZzIudGV4dENvbnRlbnQgPSBcIlRpbWVzXCI7XHJcbiAgdGltZXMuYXBwZW5kKGhlYWRpbmcyKTtcclxuICBjb25zdCB0aW1lX2xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgY29uc3QgdDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgdDEudGV4dENvbnRlbnQgPSBcIk1vbmRheTogMDg6MDAgLSAyMjowMFwiO1xyXG4gIGNvbnN0IHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gIHQyLnRleHRDb250ZW50ID0gXCJUdWVzZGF5OiAwODowMCAtIDIyOjAwXCI7XHJcbiAgY29uc3QgdDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgdDMudGV4dENvbnRlbnQgPSBcIldlZG5lc2RheTogMDg6MDAgLSAyMjowMFwiO1xyXG4gIGNvbnN0IHQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gIHQ0LnRleHRDb250ZW50ID0gXCJUaHVyc2RheTogMDg6MDAgLSAyMjowMFwiO1xyXG4gIGNvbnN0IHQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gIHQ1LnRleHRDb250ZW50ID0gXCJGcmlkYXk6IDA4OjAwIC0gMjA6MDBcIjtcclxuICBjb25zdCB0NiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICB0Ni50ZXh0Q29udGVudCA9IFwiU2F0dXJkYXk6IDA4OjAwIC0gMjA6MDBcIjtcclxuICBjb25zdCB0NyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICB0Ny50ZXh0Q29udGVudCA9IFwiU3VuZGF5OiAwODowMCAtIDIwOjAwXCI7XHJcbiAgdGltZV9saXN0LmFwcGVuZCh0MSwgdDIsIHQzLCB0NCwgdDUsIHQ2LCB0Nyk7XHJcbiAgdGltZXMuYXBwZW5kKHRpbWVfbGlzdCk7XHJcblxyXG4gIC8vIENyZWF0ZSB0aGUgTG9jYXRpb24gU2VjdGlvblxyXG4gIGNvbnN0IGxvYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbG9jLmlkID0gXCJsb2NhdGlvblwiO1xyXG4gIGNvbnN0IGhlYWRpbmczID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gIGhlYWRpbmczLnRleHRDb250ZW50ID0gXCJMb2NhdGlvblwiO1xyXG4gIGxvYy5hcHBlbmQoaGVhZGluZzMpO1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsb2NhdGlvbi50ZXh0Q29udGVudCArPVxyXG4gICAgXCJTb21lIENpdHkgU29tZXdoZXJlLCBTb21lIFRvd24gU29tZXdoZXJlLCBTb21lIFN0cmVldCBTb21ld2hlcmUsIEJ1aWxkaW5nIFNvbWV3aGVyZVwiO1xyXG4gIGxvYy5hcHBlbmQobG9jYXRpb24pO1xyXG4gIC8vIEFwcGVuZGluZyB0aGUgZGl2c1xyXG4gIGhvbWVfYm9keS5hcHBlbmQocmVzdGFyYXVudF9uYW1lLCByZXZpZXcsIHRpbWVzLCBsb2MpO1xyXG4gIHJldHVybiBob21lX2JvZHk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBob21lIH07XHJcbiIsImltcG9ydCBpdGVtMSBmcm9tIFwiLi9pbWcvaXRlbTEuanBnXCJcclxuaW1wb3J0IGl0ZW0yIGZyb20gXCIuL2ltZy9pdGVtMi5qcGdcIlxyXG5pbXBvcnQgaXRlbTMgZnJvbSBcIi4vaW1nL2l0ZW0zLmpwZ1wiXHJcbmltcG9ydCBpdGVtNCBmcm9tIFwiLi9pbWcvaXRlbTQuanBnXCJcclxuXHJcblxyXG5jb25zdCBtZW51ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuXHJcbiAgLy8gQ3JlYXRpbmcgY2FyZCBmb3IgMXN0IGRpc2hcclxuICBjb25zdCBjb250MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgaGVhZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgaGVhZDEudGV4dENvbnRlbnQgPSBcIkNob2NvbGF0ZSBQYXJmYWl0XCI7XHJcbiAgY29uc3QgaW1nMSA9IG5ldyBJbWFnZSgpO1xyXG4gIGltZzEuc3JjID0gaXRlbTE7XHJcbiAgaW1nMS5jbGFzc0xpc3QuYWRkKFwiaW1hZ2VcIik7XHJcbiAgY29uc3QgZGVzY3JpcHQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBkZXNjcmlwdDEudGV4dENvbnRlbnQgPVxyXG4gICAgXCJUaGlzIENob2NvbGF0ZSBQYXJmYWl0IGlzIHdoaXBwZWQgdXAgYnkgb3VyIGluY3JlZGlibHkgdGFsZW50ZWQgY2hlZnMgdXNpbmcgdGhlIG1vc3QgZXhxdWlzaXRlIGluZ3JlZGllbnRzLiBUaGlzIHdpbGwgYmUgc3VyZSB0byB0aWNrbGUgeW91ciB0YXN0ZSBidWRzIVwiO1xyXG4gIGNvbnN0IHByaWNlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcHJpY2UxLnRleHRDb250ZW50ID0gXCIkNS4wMFwiO1xyXG4gIHByaWNlMS5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XHJcbiAgY29udDEuYXBwZW5kKGhlYWQxLCBpbWcxLCBkZXNjcmlwdDEsIHByaWNlMSk7XHJcbiAgY29udDEuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XHJcblxyXG4gIC8vIENyZWF0ZSBjYXJkIGZvciAybmQgZGlzaFxyXG4gIGNvbnN0IGNvbnQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBoZWFkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICBoZWFkMi50ZXh0Q29udGVudCA9IFwiQ2hvY29sYXRlIENvb2tpZXNcIjtcclxuICBjb25zdCBpbWcyID0gbmV3IEltYWdlKCk7XHJcbiAgaW1nMi5zcmMgPSBpdGVtMjtcclxuICBpbWcyLmNsYXNzTGlzdC5hZGQoXCJpbWFnZVwiKTtcclxuICBjb25zdCBkZXNjcmlwdDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGRlc2NyaXB0Mi50ZXh0Q29udGVudCA9XHJcbiAgICBcIlRoZXNlIENob2NvbGF0ZSBDb29raWVzIHdpbGwgYmUgc3VyZSB0byBkZWxpZ2h0IHlvdXIgdGFzdGUgYnVkcy4gVGhleSBhcmUgYmFrZWQgdG8gcGVyZmVjdGlvbiB1c2luZyB0aGUgYmVzdCBwb3NzaWJsZSBpbmdyZWRpZW50cy5cIjtcclxuICBjb25zdCBwcmljZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHByaWNlMi50ZXh0Q29udGVudCA9IFwiJDEuNTBcIjtcclxuICBwcmljZTIuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xyXG4gIGNvbnQyLmFwcGVuZChoZWFkMiwgaW1nMiwgZGVzY3JpcHQyLCBwcmljZTIpO1xyXG4gIGNvbnQyLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xyXG5cclxuICAvLyBDcmVhdGUgY2FyZCBmb3IgM3JkIGRpc2hcclxuICBjb25zdCBjb250MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgaGVhZDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgaGVhZDMudGV4dENvbnRlbnQgPSBcIlN0cmF3YmVycnkgUGFzdHJpZXNcIjtcclxuICBjb25zdCBpbWczID0gbmV3IEltYWdlKCk7XHJcbiAgaW1nMy5zcmMgPSBpdGVtMztcclxuICBpbWczLmNsYXNzTGlzdC5hZGQoXCJpbWFnZVwiKTtcclxuICBjb25zdCBkZXNjcmlwdDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGRlc2NyaXB0My50ZXh0Q29udGVudCA9XHJcbiAgICBcIlRoZXNlIFN0cmF3YmVycnkgUGFzdHJpZXMgdXRpbGl6ZSBmcmVzaGx5IHBpY2tlZCBzdHJhd2JlcnJpZXMgYW5kIG91ciB2ZXJ5IG93biBoYW5kbWFkZSB2YW5pbGxhIGNyZWFtLiBUaGUgZGVjb3JhdGlvbnMgb24gdGhpcyBkaXNoIGVuc3VyZSB0aGF0IHRoaXMgaXMgYSB0cmVhdCBub3Qgb25seSBmb3IgeW91ciB0YXN0ZSBidWRzIGJ1dCBmb3IgeW91ciBleWVzIGFzIHdlbGwuXCI7XHJcbiAgY29uc3QgcHJpY2UzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBwcmljZTMudGV4dENvbnRlbnQgPSBcIiQyLjAwXCI7XHJcbiAgcHJpY2UzLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcclxuICBjb250My5hcHBlbmQoaGVhZDMsIGltZzMsIGRlc2NyaXB0MywgcHJpY2UzKTtcclxuICBjb250My5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcclxuXHJcbiAgLy8gQ3JlYXRlIGNhcmQgZm9yIDR0aCBkaXNoXHJcbiAgY29uc3QgY29udDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGhlYWQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gIGhlYWQ0LnRleHRDb250ZW50ID0gXCJTdHJhd2JlcnJ5IENoZWVzZWNha2VcIjtcclxuICBjb25zdCBpbWc0ID0gbmV3IEltYWdlKCk7XHJcbiAgaW1nNC5zcmMgPSBpdGVtNDtcclxuICBpbWc0LmNsYXNzTGlzdC5hZGQoXCJpbWFnZVwiKTtcclxuICBjb25zdCBkZXNjcmlwdDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGRlc2NyaXB0NC50ZXh0Q29udGVudCA9XHJcbiAgICBcIlRoaXMgU3RyYXdiZXJyeSBDaGVlc2VjYWtlIGlzIHdoaXBwZWQgdXAgYnkgb3VyIGluY3JlZGlibHkgdGFsZW50ZWQgY2hlZnMgdXNpbmcgdGhlIG1vc3QgZXhxdWlzaXRlIGluZ3JlZGllbnRzLiBUaGlzIHdpbGwgYmUgc3VyZSB0byB0aWNrbGUgeW91ciB0YXN0ZSBidWRzIVwiO1xyXG4gIGNvbnN0IHByaWNlNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcHJpY2U0LnRleHRDb250ZW50ID0gXCIkMy41MFwiO1xyXG4gIHByaWNlNC5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XHJcbiAgY29udDQuYXBwZW5kKGhlYWQ0LCBpbWc0LCBkZXNjcmlwdDQsIHByaWNlNCk7XHJcbiAgY29udDQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XHJcblxyXG4gIGNvbnQuYXBwZW5kKGhlYWRlciwgY29udDEsIGNvbnQyLCBjb250MywgY29udDQpO1xyXG4gIHJldHVybiBjb250O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgbWVudSB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7IGhvbWUgfSBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCB7IG1lbnUgfSBmcm9tIFwiLi9tZW51XCI7XHJcbmltcG9ydCB7IGNvbnRhY3QgfSBmcm9tIFwiLi9jb250YWN0XCJcclxuXHJcblxyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5jb25zdCBob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5ob2xkZXIuY2xhc3NMaXN0LmFkZChcImhvbGRlclwiKTtcclxuXHJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbmNvbnN0IGxpbmtDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG5jb25zdCBob21lTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuaG9tZUxpbmsudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcclxuaG9tZUxpbmsuaWQgPSBcImhvbWVcIjtcclxuY29uc3QgY29udGFjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbmNvbnRhY3RMaW5rLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XHJcbmNvbnRhY3RMaW5rLmlkID0gXCJhYm91dFwiO1xyXG5jb25zdCBtZW51TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxubWVudUxpbmsudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxubWVudUxpbmsuaWQgPSBcIm1lbnVcIjtcclxuXHJcbmxpbmtDb250LmFwcGVuZChob21lTGluaywgY29udGFjdExpbmssIG1lbnVMaW5rKTtcclxubGlua0NvbnQuY2xhc3NMaXN0LmFkZChcImxpbmtzXCIpO1xyXG5oZWFkZXIuYXBwZW5kKGxpbmtDb250KTtcclxuYm9keS5hcHBlbmQoaGVhZGVyKTtcclxuXHJcbmhvbWVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBob2xkZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGhvbGRlci5hcHBlbmQoaG9tZSgpKTtcclxuICAgIGJvZHkuYXBwZW5kKGhvbGRlcik7XHJcbn0pXHJcblxyXG5jb250YWN0TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgaG9sZGVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBob2xkZXIuYXBwZW5kKGNvbnRhY3QoKSk7XHJcbiAgICBib2R5LmFwcGVuZChob2xkZXIpO1xyXG59KVxyXG5cclxubWVudUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGhvbGRlci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgaG9sZGVyLmFwcGVuZChtZW51KCkpO1xyXG4gICAgYm9keS5hcHBlbmQoaG9sZGVyKTtcclxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=