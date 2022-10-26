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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nconst root = document.querySelector(\"#root\");\nconst url = \"http://localhost:8888/todos\";\nconst get = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './js/modules/get'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nconst POST = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './js/modules/post'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nconst PUT = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './js/modules/put'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nconst DELETE = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './js/modules/delete'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nconst isCompleted = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './js/modules/completed'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nconst UI = {\n\ttitle: document.createElement(\"h1\"),\n\tsubTitle: document.createElement(\"p\"),\n\tform: document.createElement(\"form\"),\n\tscreenBlock: document.createElement(\"div\"),\n\tscreenInput: document.createElement(\"input\"),\n\tscreenAddBtn: document.createElement(\"button\"),\n\tlistsBlock: document.createElement(\"div\"),\n\n\telementOptions() {\n\t\tthis.title.textContent = \"CRUD\";\n\t\tthis.subTitle.textContent = \"Asyn Application\";\n\n\t\tthis.form.id = \"app-form\";\n\t\tthis.screenBlock.id = \"screenBlock\";\n\t\tthis.screenInput.type = \"text\";\n\t\tthis.screenInput.placeholder = \"Type here...\";\n\t\tthis.screenAddBtn.textContent = \"ADD\";\n\t\tthis.screenAddBtn.id = \"screenAddBtn\";\n\t\tthis.listsBlock.id = \"listBlock\";\n\t},\n\n\tappendElements() {\n\t\troot.append(this.title, this.subTitle, this.form, this.listsBlock);\n\t\tthis.form.append(this.screenBlock);\n\t\tthis.screenBlock.append(this.screenInput, this.screenAddBtn);\n\t},\n\n\ttoHTML(id, value, isComplete) {\n\t\tif(isComplete){\n\t\t\tthis.listsBlock.innerHTML += `\n\t\t\t<div class=\"listsBlockItem\">\n\t\t\t\t<div class=\"listsBlockItemContent\">\n\t\t\t\t\t<span>${id}</span>\n\t\t\t\t\t<input class=\"disabled\" type=\"text\" value=\"${value}\" readonly>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"buttons\">\n\t\t\t\t\t<button class=\"complitedBtn\">Completed</button>\n\t\t\t\t\t<button class=\"removeBtn\">Remove</button>\n\t\t\t\t\t<button class=\"editBtn\">Edit</button>\n\t\t\t\t\t<button class=\"saveBtn\">Save</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t`;\n\t\t}else{\n\t\t\tthis.listsBlock.innerHTML += `\n\t\t\t<div class=\"listsBlockItem\">\n\t\t\t\t<div class=\"listsBlockItemContent\">\n\t\t\t\t\t<span>${id}</span>\n\t\t\t\t\t<input type=\"text\" value=\"${value}\" readonly>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"buttons\">\n\t\t\t\t\t<button class=\"complitedBtn\">IsComplitid?</button>\n\t\t\t\t\t<button class=\"removeBtn\">Remove</button>\n\t\t\t\t\t<button class=\"editBtn\">Edit</button>\n\t\t\t\t\t<button class=\"saveBtn\">Save</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t`;\n\t\t}\n\t},\n\n\tstart() {\n\t\tthis.elementOptions();\n\t\tthis.appendElements();\n\t}\n};\n\nUI.start();\n\nconst { form, screenInput } = UI;\n\n\n\n\nPOST();\n\n\n\nGET();\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://crud/./src/js/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;