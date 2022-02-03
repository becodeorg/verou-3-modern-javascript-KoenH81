/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/arrays.js":
/*!***************************!*\
  !*** ./scripts/arrays.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weekdays);\n\n//# sourceURL=webpack://verou-3-modern-javascript-koenh81/./scripts/arrays.js?");

/***/ }),

/***/ "./scripts/config.js":
/*!***************************!*\
  !*** ./scripts/config.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Data = {\r\n    key: \"b35f66fbd381c1f2047a929e45bdf011\"\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);\n\n//# sourceURL=webpack://verou-3-modern-javascript-koenh81/./scripts/config.js?");

/***/ }),

/***/ "./scripts/resetWeather.js":
/*!*********************************!*\
  !*** ./scripts/resetWeather.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst container = document.querySelector(\".container\");\r\n// reset function\r\nconst resetWeather = () => {\r\n    while (container.firstChild) {\r\n        container.removeChild(container.firstChild);\r\n    };\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resetWeather);\n\n//# sourceURL=webpack://verou-3-modern-javascript-koenh81/./scripts/resetWeather.js?");

/***/ }),

/***/ "./scripts/variables.js":
/*!******************************!*\
  !*** ./scripts/variables.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst searchBar = document.querySelector('#searchBar');\r\nconst container = document.querySelector(\".container\");\r\nconst cityNameContainer = document.querySelector('.city-name');\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ searchBar, container, cityNameContainer });\n\n//# sourceURL=webpack://verou-3-modern-javascript-koenh81/./scripts/variables.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/config.js */ \"./scripts/config.js\");\n/* harmony import */ var _scripts_resetWeather_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/resetWeather.js */ \"./scripts/resetWeather.js\");\n/* harmony import */ var _scripts_variables_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scripts/variables.js */ \"./scripts/variables.js\");\n/* harmony import */ var _scripts_arrays_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/arrays.js */ \"./scripts/arrays.js\");\n\r\n\r\n\r\n\r\n// checking the action for specific key (Enter)\r\nconst keyCheck = (event) => {\r\n    if (event.key === \"Enter\") {\r\n        // Store target in variable\r\n        const thisCity = event.currentTarget.value.toLowerCase();\r\n        const apiUrl = \"https://api.openweathermap.org/data/2.5/forecast/?q=\" + thisCity + \"&appid=\" + _scripts_config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].key;\r\n        event.currentTarget.value = '';\r\n        // Fetching first api to get the City coordinates\r\n        fetch(apiUrl)\r\n            .then(response => response.json())\r\n            .then(data => {\r\n                const lon = data.city.coord.lon;\r\n                const lat = data.city.coord.lat;\r\n\r\n                _scripts_variables_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].cityNameContainer.innerHTML = data.city.name;\r\n\r\n                // Fetching final data according to the coordinates\r\n                fetch(\"https://api.openweathermap.org/data/2.5/onecall?lat=\" + lat + \"&lon=\" + lon + \"&cnt=5&units=metric&exclude=minutely,hourly,alerts&appid=\" + _scripts_config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].key)\r\n                    .then(response => response.json())\r\n                    .then(result => {\r\n                        console.log('Welcome to this basic weather app. this is not a product but the product of an academic exercise.')\r\n\r\n                        // Removing all child elements from Container\r\n                        ;(0,_scripts_resetWeather_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n                        // Looping through 5 days of weather data\r\n                        for (let i = 0; i < 5; i++) {\r\n\r\n                            // Use the remainder operator (%) to switch from saturday (last in array) back to sunday (first in array)\r\n                            const date = new Date();\r\n                            let dayOfTheWeek = _scripts_arrays_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"][(date.getDay() + i) % 7];\r\n                            const data = result.daily[i];\r\n                            // Create the elements with Data\r\n                            const card = document.createElement('div');\r\n                            card.classList.add(\"card\");\r\n                            _scripts_variables_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].container.appendChild(card);\r\n\r\n                            const imageBox = document.createElement('div');\r\n                            imageBox.classList.add(\"imgBx\");\r\n                            card.appendChild(imageBox);\r\n\r\n                            const cardImg = document.createElement('img');\r\n                            cardImg.src = \"http://openweathermap.org/img/wn/\" + data.weather[0].icon + \"@2x.png\";\r\n                            imageBox.appendChild(cardImg);\r\n\r\n                            const contentBox = document.createElement(\"div\");\r\n                            contentBox.classList.add(\"contentBx\");\r\n                            card.appendChild(contentBox);\r\n\r\n                            const cardHeader = document.createElement(\"h2\");\r\n                            cardHeader.innerHTML = dayOfTheWeek;\r\n                            contentBox.appendChild(cardHeader);\r\n\r\n                            const tempDescription = document.createElement(\"h4\");\r\n                            tempDescription.innerHTML = data.weather[0].description;\r\n                            contentBox.appendChild(tempDescription);\r\n\r\n                            const currentTempBox = document.createElement(\"div\");\r\n                            currentTempBox.classList.add(\"color\");\r\n                            contentBox.appendChild(currentTempBox);\r\n\r\n                            const currentTempHeader = document.createElement(\"h3\");\r\n                            currentTempHeader.innerHTML = \"Temp:\"\r\n                            currentTempBox.appendChild(currentTempHeader);\r\n\r\n                            const currentTemp = document.createElement(\"span\");\r\n                            currentTemp.classList.add(\"current-temp\");\r\n                            currentTemp.innerHTML = data.temp.day + \"°C\";\r\n                            currentTempBox.appendChild(currentTemp);\r\n\r\n                            const minMaxTemperatures = document.createElement(\"div\");\r\n                            minMaxTemperatures.classList.add(\"details\");\r\n                            contentBox.appendChild(minMaxTemperatures);\r\n\r\n                            const minMaxTempHeader = document.createElement(\"h3\");\r\n                            minMaxTempHeader.innerHTML = \"More:\"\r\n                            minMaxTemperatures.appendChild(minMaxTempHeader);\r\n\r\n                            const minTemp = document.createElement(\"span\");\r\n                            minTemp.classList.add(\"min-temp\")\r\n                            minTemp.innerHTML = data.temp.min + \"°C\";\r\n                            minMaxTemperatures.appendChild(minTemp);\r\n\r\n                            const maxTemp = document.createElement(\"span\");\r\n                            maxTemp.classList.add(\"max-temp\")\r\n                            maxTemp.innerHTML = data.temp.max + \"°C\";\r\n                            minMaxTemperatures.appendChild(maxTemp);\r\n                        };\r\n                    });\r\n            })\r\n            .catch((error) => {\r\n                // If there are errors, send out an error message\r\n                console.error('Error:', \"not a place!\");\r\n                while (_scripts_variables_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].container.firstChild) {\r\n                    _scripts_variables_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].container.removeChild(_scripts_variables_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].container.firstChild);\r\n                };\r\n                return alert(\"Are you sure you aren't holding your map upside down?\");\r\n            });\r\n    };\r\n};\r\n// Event will start on a keyup action\r\n_scripts_variables_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].searchBar.addEventListener('keyup', keyCheck);\r\n\r\n\r\n\n\n//# sourceURL=webpack://verou-3-modern-javascript-koenh81/./src/index.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;