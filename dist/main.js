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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! check.svg */ \"./src/check.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n    margin: 0;\\n    overflow: hidden;\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n.header > h1 {\\n    margin: 0;\\n    padding: 0;\\n    font-size: 35px;\\n    color: black;\\n}\\n\\n\\n.header {\\n    background-color: #F5F6FA;\\n    height: 130px;\\n    width: 100vw;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\\n}\\n\\n.body {\\n    display: grid;\\n    grid-template-columns: 1fr 5fr;\\n}\\n\\n.sidebar {\\n    grid-column: 1 / 2;\\n    background-color: #EFEFEF;\\n    height: 100vh;\\n}\\n\\n.nav {\\n    list-style-type: none;\\n    display: flex;\\n    flex-direction: column;\\n    padding: 0;\\n    align-items: center;\\n    gap: 20px;\\n    font-size: 20px;\\n    padding: 20px;\\n}\\n\\n.nav > li {\\n    background-color:#F5F6FA;\\n    padding: 10px;\\n    width: 200px;\\n    border-radius: 1rem;\\n}\\n\\n.nav > li:hover, .all-tasks.current-page, .todays-tasks.current-page, .upcoming-tasks.current-page {\\n    background-color: #FF3B3F;\\n    color: white;\\n    cursor: pointer;\\n}\\n\\n.sidebar > h3 {\\n    text-align: center;\\n    font-size: 25px;\\n}\\n\\n.todo-list > ul {\\n    font-size: 20px;\\n    display: flex;\\n    flex-direction: column;\\n    gap: 20px;\\n    list-style-type: none;\\n    padding: 0px;\\n}\\n\\n.task-template, .task {\\n    background-color:#F5F6FA;\\n    padding: 10px;\\n    border-radius: 1rem;\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n}\\n\\n.todo-list > ul > li:hover {\\n    cursor: pointer;\\n}\\n\\n.todo-list {\\n    padding: 40px;\\n    padding-top: 19px;\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n.complete-button {\\n    height: 20px;\\n    width: 20px;\\n    margin-right: 5px;\\n    border-radius: 50%;\\n    border: 1px solid #EFEFEF;\\n    background-color: white;\\n}\\n\\n.add-task {\\n    text-align: center;\\n    color:rgba(0, 0, 0, 0.8);\\n}\\n\\n.add-task:hover {\\n    cursor: pointer;\\n}\\n\\n.add-task-form {\\n    height: 340px;\\n    width: 500px;\\n    background-color:#EFEFEF;\\n    position: fixed;\\n    left: 50%;\\n    transform: translate(-50%, 0);\\n    top: 220px;\\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\\n    z-index: 1;\\n    border-radius: 5px;\\n    display: none;\\n    padding: 15px;\\n}\\n\\n.opacity-cover {\\n    height: 100vh;\\n    width: 100vw;\\n    background-color: rgba(0,0,0,0.3);\\n    position: fixed;\\n    display: none;\\n    backdrop-filter: blur(3px);\\n}\\n\\n.add-task-form-data {\\n    display: flex;\\n    flex-direction: column;\\n    width: 400px;\\n    gap: 18px;\\n}\\n\\n#description {\\n    width: 493px; \\n    height: 88px;\\n    resize: none;\\n}\\n\\n.add-task-button, .edit-task-button {\\n    width: 100px;\\n    height: 40px;\\n    margin-left: 50%;\\n    margin-top: 10px;\\n    border-radius: 1rem;\\n    background-color:#ddd;\\n    border: none;\\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\\n}\\n\\n.add-task-button:hover {\\n    cursor: pointer;\\n}\\n\\n.select-priority {\\n    display: flex;\\n    gap: 10px;\\n    align-items: center;\\n}\\n\\n#title, #description {\\n    background-color: transparent;\\n    border: none;\\n    font-size: 20px;\\n    outline: none;\\n}\\n\\n#date {\\n    border-radius: 1rem;\\n    padding: 5px;\\n    border: none;\\n    margin-left: 10px;\\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\\n}\\n\\n.select-priority input[type=\\\"radio\\\"] {\\n    opacity: 0;\\n    width: 0;\\n    position: fixed;\\n}\\n\\n.select-priority label, .task-priority {\\n    display: inline-block;\\n    background-color: #ddd;\\n    padding: 5px 15px;\\n    font-family: sans-serif, Arial;\\n    font-size: 14px;\\n    border-radius: 4px;\\n}\\n\\n.select-priority #Low-priority:checked + label {\\n    background-color: #59981A;\\n    color: white;\\n}\\n\\n.select-priority #Medium-priority:checked + label {\\n    background-color: #FFAC1C;\\n    color: white;\\n}\\n\\n.select-priority #High-priority:checked + label {\\n    background-color: #FC0E0E;\\n    color: white;\\n}\\n\\n.select-priority input[type=\\\"radio\\\"]:focus + label {\\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\\n}\\n\\n.select-priority input[type=\\\"radio\\\"]:hover + label {\\n    cursor: pointer;\\n}\\n\\n.task-description {\\n    font-size: smaller;\\n    margin-top: 5px;\\n}\\n\\n#delete-button, #edit-button, #info-button {\\n    fill: gray;\\n    margin-left: 5px;\\n}\\n\\n.task-complete-button {\\n    height: 25px;\\n    width: 25px;\\n    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\\n    border-radius: 50%;\\n    border: none;\\n    margin-right: 15px;\\n    margin-left: 10px;\\n}\\n\\n.checked {\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    background-position: 1px 1px;\\n    background-color: gray;\\n}\\n\\n.complete {\\n    text-decoration: line-through;\\n    opacity: 50%;\\n}\\n\\n.information-left, .information-right {\\n    display: flex;\\n    align-items: center;\\n}\\n\\n.task-dueDate {\\n    font-size: 15px;\\n    color:#FC0E0E;  \\n    margin-right: 15px; \\n}\\n\\n.task-priority {\\n    margin-right: 15px;\\n    color: white;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toInteger)\n/* harmony export */ });\nfunction toInteger(dirtyNumber) {\n  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {\n    return NaN;\n  }\n\n  var number = Number(dirtyNumber);\n\n  if (isNaN(number)) {\n    return number;\n  }\n\n  return number < 0 ? Math.ceil(number) : Math.floor(number);\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/_lib/toInteger/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"daysInWeek\": () => (/* binding */ daysInWeek),\n/* harmony export */   \"daysInYear\": () => (/* binding */ daysInYear),\n/* harmony export */   \"maxTime\": () => (/* binding */ maxTime),\n/* harmony export */   \"millisecondsInHour\": () => (/* binding */ millisecondsInHour),\n/* harmony export */   \"millisecondsInMinute\": () => (/* binding */ millisecondsInMinute),\n/* harmony export */   \"millisecondsInSecond\": () => (/* binding */ millisecondsInSecond),\n/* harmony export */   \"minTime\": () => (/* binding */ minTime),\n/* harmony export */   \"minutesInHour\": () => (/* binding */ minutesInHour),\n/* harmony export */   \"monthsInQuarter\": () => (/* binding */ monthsInQuarter),\n/* harmony export */   \"monthsInYear\": () => (/* binding */ monthsInYear),\n/* harmony export */   \"quartersInYear\": () => (/* binding */ quartersInYear),\n/* harmony export */   \"secondsInDay\": () => (/* binding */ secondsInDay),\n/* harmony export */   \"secondsInHour\": () => (/* binding */ secondsInHour),\n/* harmony export */   \"secondsInMinute\": () => (/* binding */ secondsInMinute),\n/* harmony export */   \"secondsInMonth\": () => (/* binding */ secondsInMonth),\n/* harmony export */   \"secondsInQuarter\": () => (/* binding */ secondsInQuarter),\n/* harmony export */   \"secondsInWeek\": () => (/* binding */ secondsInWeek),\n/* harmony export */   \"secondsInYear\": () => (/* binding */ secondsInYear)\n/* harmony export */ });\n/**\n * Days in 1 week.\n *\n * @name daysInWeek\n * @constant\n * @type {number}\n * @default\n */\nvar daysInWeek = 7;\n/**\n * Days in 1 year\n * One years equals 365.2425 days according to the formula:\n *\n * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.\n * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days\n *\n * @name daysInYear\n * @constant\n * @type {number}\n * @default\n */\n\nvar daysInYear = 365.2425;\n/**\n * Maximum allowed time.\n *\n * @name maxTime\n * @constant\n * @type {number}\n * @default\n */\n\nvar maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;\n/**\n * Milliseconds in 1 minute\n *\n * @name millisecondsInMinute\n * @constant\n * @type {number}\n * @default\n */\n\nvar millisecondsInMinute = 60000;\n/**\n * Milliseconds in 1 hour\n *\n * @name millisecondsInHour\n * @constant\n * @type {number}\n * @default\n */\n\nvar millisecondsInHour = 3600000;\n/**\n * Milliseconds in 1 second\n *\n * @name millisecondsInSecond\n * @constant\n * @type {number}\n * @default\n */\n\nvar millisecondsInSecond = 1000;\n/**\n * Minimum allowed time.\n *\n * @name minTime\n * @constant\n * @type {number}\n * @default\n */\n\nvar minTime = -maxTime;\n/**\n * Minutes in 1 hour\n *\n * @name minutesInHour\n * @constant\n * @type {number}\n * @default\n */\n\nvar minutesInHour = 60;\n/**\n * Months in 1 quarter\n *\n * @name monthsInQuarter\n * @constant\n * @type {number}\n * @default\n */\n\nvar monthsInQuarter = 3;\n/**\n * Months in 1 year\n *\n * @name monthsInYear\n * @constant\n * @type {number}\n * @default\n */\n\nvar monthsInYear = 12;\n/**\n * Quarters in 1 year\n *\n * @name quartersInYear\n * @constant\n * @type {number}\n * @default\n */\n\nvar quartersInYear = 4;\n/**\n * Seconds in 1 hour\n *\n * @name secondsInHour\n * @constant\n * @type {number}\n * @default\n */\n\nvar secondsInHour = 3600;\n/**\n * Seconds in 1 minute\n *\n * @name secondsInMinute\n * @constant\n * @type {number}\n * @default\n */\n\nvar secondsInMinute = 60;\n/**\n * Seconds in 1 day\n *\n * @name secondsInDay\n * @constant\n * @type {number}\n * @default\n */\n\nvar secondsInDay = secondsInHour * 24;\n/**\n * Seconds in 1 week\n *\n * @name secondsInWeek\n * @constant\n * @type {number}\n * @default\n */\n\nvar secondsInWeek = secondsInDay * 7;\n/**\n * Seconds in 1 year\n *\n * @name secondsInYear\n * @constant\n * @type {number}\n * @default\n */\n\nvar secondsInYear = secondsInDay * daysInYear;\n/**\n * Seconds in 1 month\n *\n * @name secondsInMonth\n * @constant\n * @type {number}\n * @default\n */\n\nvar secondsInMonth = secondsInYear / 12;\n/**\n * Seconds in 1 quarter\n *\n * @name secondsInQuarter\n * @constant\n * @type {number}\n * @default\n */\n\nvar secondsInQuarter = secondsInMonth * 3;\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/constants/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isFuture/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/isFuture/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isFuture)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isFuture\n * @category Common Helpers\n * @summary Is the given date in the future?\n * @pure false\n *\n * @description\n * Is the given date in the future?\n *\n * > ⚠️ Please note that this function is not present in the FP submodule as\n * > it uses `Date.now()` internally hence impure and can't be safely curried.\n *\n * @param {Date|Number} date - the date to check\n * @returns {Boolean} the date is in the future\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // If today is 6 October 2014, is 31 December 2014 in the future?\n * const result = isFuture(new Date(2014, 11, 31))\n * //=> true\n */\n\nfunction isFuture(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate).getTime() > Date.now();\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/isFuture/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isSameDay)\n/* harmony export */ });\n/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ \"./node_modules/date-fns/esm/startOfDay/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isSameDay\n * @category Day Helpers\n * @summary Are the given dates in the same day (and year and month)?\n *\n * @description\n * Are the given dates in the same day (and year and month)?\n *\n * @param {Date|Number} dateLeft - the first date to check\n * @param {Date|Number} dateRight - the second date to check\n * @returns {Boolean} the dates are in the same day (and year and month)\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?\n * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))\n * //=> true\n *\n * @example\n * // Are 4 September and 4 October in the same day?\n * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))\n * //=> false\n *\n * @example\n * // Are 4 September, 2014 and 4 September, 2015 in the same day?\n * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))\n * //=> false\n */\n\nfunction isSameDay(dirtyDateLeft, dirtyDateRight) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateLeft);\n  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateRight);\n  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/isSameDay/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isToday)\n/* harmony export */ });\n/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ \"./node_modules/date-fns/esm/isSameDay/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isToday\n * @category Day Helpers\n * @summary Is the given date today?\n * @pure false\n *\n * @description\n * Is the given date today?\n *\n * > ⚠️ Please note that this function is not present in the FP submodule as\n * > it uses `Date.now()` internally hence impure and can't be safely curried.\n *\n * @param {Date|Number} date - the date to check\n * @returns {Boolean} the date is today\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // If today is 6 October 2014, is 6 October 14:00:00 today?\n * const result = isToday(new Date(2014, 9, 6, 14, 0))\n * //=> true\n */\n\nfunction isToday(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate, Date.now());\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/isToday/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ parseISO)\n/* harmony export */ });\n/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ \"./node_modules/date-fns/esm/constants/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/esm/_lib/toInteger/index.js\");\n\n\n\n/**\n * @name parseISO\n * @category Common Helpers\n * @summary Parse ISO string\n *\n * @description\n * Parse the given string in ISO 8601 format and return an instance of Date.\n *\n * Function accepts complete ISO 8601 formats as well as partial implementations.\n * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601\n *\n * If the argument isn't a string, the function cannot parse the string or\n * the values are invalid, it returns Invalid Date.\n *\n * @param {String} argument - the value to convert\n * @param {Object} [options] - an object with options.\n * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2\n *\n * @example\n * // Convert string '2014-02-11T11:30:30' to date:\n * const result = parseISO('2014-02-11T11:30:30')\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert string '+02014101' to date,\n * // if the additional number of digits in the extended year format is 1:\n * const result = parseISO('+02014101', { additionalDigits: 1 })\n * //=> Fri Apr 11 2014 00:00:00\n */\n\nfunction parseISO(argument, options) {\n  var _options$additionalDi;\n\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);\n\n  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {\n    throw new RangeError('additionalDigits must be 0, 1 or 2');\n  }\n\n  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {\n    return new Date(NaN);\n  }\n\n  var dateStrings = splitDateString(argument);\n  var date;\n\n  if (dateStrings.date) {\n    var parseYearResult = parseYear(dateStrings.date, additionalDigits);\n    date = parseDate(parseYearResult.restDateString, parseYearResult.year);\n  }\n\n  if (!date || isNaN(date.getTime())) {\n    return new Date(NaN);\n  }\n\n  var timestamp = date.getTime();\n  var time = 0;\n  var offset;\n\n  if (dateStrings.time) {\n    time = parseTime(dateStrings.time);\n\n    if (isNaN(time)) {\n      return new Date(NaN);\n    }\n  }\n\n  if (dateStrings.timezone) {\n    offset = parseTimezone(dateStrings.timezone);\n\n    if (isNaN(offset)) {\n      return new Date(NaN);\n    }\n  } else {\n    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone\n    // but we need it to be parsed in our timezone\n    // so we use utc values to build date in our timezone.\n    // Year values from 0 to 99 map to the years 1900 to 1999\n    // so set year explicitly with setFullYear.\n\n    var result = new Date(0);\n    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());\n    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());\n    return result;\n  }\n\n  return new Date(timestamp + time + offset);\n}\nvar patterns = {\n  dateTimeDelimiter: /[T ]/,\n  timeZoneDelimiter: /[Z ]/i,\n  timezone: /([Z+-].*)$/\n};\nvar dateRegex = /^-?(?:(\\d{3})|(\\d{2})(?:-?(\\d{2}))?|W(\\d{2})(?:-?(\\d{1}))?|)$/;\nvar timeRegex = /^(\\d{2}(?:[.,]\\d*)?)(?::?(\\d{2}(?:[.,]\\d*)?))?(?::?(\\d{2}(?:[.,]\\d*)?))?$/;\nvar timezoneRegex = /^([+-])(\\d{2})(?::?(\\d{2}))?$/;\n\nfunction splitDateString(dateString) {\n  var dateStrings = {};\n  var array = dateString.split(patterns.dateTimeDelimiter);\n  var timeString; // The regex match should only return at maximum two array elements.\n  // [date], [time], or [date, time].\n\n  if (array.length > 2) {\n    return dateStrings;\n  }\n\n  if (/:/.test(array[0])) {\n    timeString = array[0];\n  } else {\n    dateStrings.date = array[0];\n    timeString = array[1];\n\n    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {\n      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];\n      timeString = dateString.substr(dateStrings.date.length, dateString.length);\n    }\n  }\n\n  if (timeString) {\n    var token = patterns.timezone.exec(timeString);\n\n    if (token) {\n      dateStrings.time = timeString.replace(token[1], '');\n      dateStrings.timezone = token[1];\n    } else {\n      dateStrings.time = timeString;\n    }\n  }\n\n  return dateStrings;\n}\n\nfunction parseYear(dateString, additionalDigits) {\n  var regex = new RegExp('^(?:(\\\\d{4}|[+-]\\\\d{' + (4 + additionalDigits) + '})|(\\\\d{2}|[+-]\\\\d{' + (2 + additionalDigits) + '})$)');\n  var captures = dateString.match(regex); // Invalid ISO-formatted year\n\n  if (!captures) return {\n    year: NaN,\n    restDateString: ''\n  };\n  var year = captures[1] ? parseInt(captures[1]) : null;\n  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both\n\n  return {\n    year: century === null ? year : century * 100,\n    restDateString: dateString.slice((captures[1] || captures[2]).length)\n  };\n}\n\nfunction parseDate(dateString, year) {\n  // Invalid ISO-formatted year\n  if (year === null) return new Date(NaN);\n  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string\n\n  if (!captures) return new Date(NaN);\n  var isWeekDate = !!captures[4];\n  var dayOfYear = parseDateUnit(captures[1]);\n  var month = parseDateUnit(captures[2]) - 1;\n  var day = parseDateUnit(captures[3]);\n  var week = parseDateUnit(captures[4]);\n  var dayOfWeek = parseDateUnit(captures[5]) - 1;\n\n  if (isWeekDate) {\n    if (!validateWeekDate(year, week, dayOfWeek)) {\n      return new Date(NaN);\n    }\n\n    return dayOfISOWeekYear(year, week, dayOfWeek);\n  } else {\n    var date = new Date(0);\n\n    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {\n      return new Date(NaN);\n    }\n\n    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));\n    return date;\n  }\n}\n\nfunction parseDateUnit(value) {\n  return value ? parseInt(value) : 1;\n}\n\nfunction parseTime(timeString) {\n  var captures = timeString.match(timeRegex);\n  if (!captures) return NaN; // Invalid ISO-formatted time\n\n  var hours = parseTimeUnit(captures[1]);\n  var minutes = parseTimeUnit(captures[2]);\n  var seconds = parseTimeUnit(captures[3]);\n\n  if (!validateTime(hours, minutes, seconds)) {\n    return NaN;\n  }\n\n  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;\n}\n\nfunction parseTimeUnit(value) {\n  return value && parseFloat(value.replace(',', '.')) || 0;\n}\n\nfunction parseTimezone(timezoneString) {\n  if (timezoneString === 'Z') return 0;\n  var captures = timezoneString.match(timezoneRegex);\n  if (!captures) return 0;\n  var sign = captures[1] === '+' ? -1 : 1;\n  var hours = parseInt(captures[2]);\n  var minutes = captures[3] && parseInt(captures[3]) || 0;\n\n  if (!validateTimezone(hours, minutes)) {\n    return NaN;\n  }\n\n  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);\n}\n\nfunction dayOfISOWeekYear(isoWeekYear, week, day) {\n  var date = new Date(0);\n  date.setUTCFullYear(isoWeekYear, 0, 4);\n  var fourthOfJanuaryDay = date.getUTCDay() || 7;\n  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;\n  date.setUTCDate(date.getUTCDate() + diff);\n  return date;\n} // Validation functions\n// February is null to handle the leap year (using ||)\n\n\nvar daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];\n\nfunction isLeapYearIndex(year) {\n  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;\n}\n\nfunction validateDate(year, month, date) {\n  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));\n}\n\nfunction validateDayOfYearDate(year, dayOfYear) {\n  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);\n}\n\nfunction validateWeekDate(_year, week, day) {\n  return week >= 1 && week <= 53 && day >= 0 && day <= 6;\n}\n\nfunction validateTime(hours, minutes, seconds) {\n  if (hours === 24) {\n    return minutes === 0 && seconds === 0;\n  }\n\n  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;\n}\n\nfunction validateTimezone(_hours, minutes) {\n  return minutes >= 0 && minutes <= 59;\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/parseISO/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startOfDay)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name startOfDay\n * @category Day Helpers\n * @summary Return the start of a day for the given date.\n *\n * @description\n * Return the start of a day for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|Number} date - the original date\n * @returns {Date} the start of a day\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // The start of a day for 2 September 2014 11:55:00:\n * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Tue Sep 02 2014 00:00:00\n */\n\nfunction startOfDay(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate);\n  date.setHours(0, 0, 0, 0);\n  return date;\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/startOfDay/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\n\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var argStr = Object.prototype.toString.call(argument); // Clone the date\n\n  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments\"); // eslint-disable-next-line no-console\n\n      console.warn(new Error().stack);\n    }\n\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/toDate/index.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/complete.js":
/*!*************************!*\
  !*** ./src/complete.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"markComplete\": () => (/* binding */ markComplete)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nfunction markComplete() {\n    const task = _index__WEBPACK_IMPORTED_MODULE_0__.defaultTasks[this.parentNode.parentNode.getAttribute(\"data-index\")];\n    const task_el = this.parentNode.parentNode;\n    const taskButton = this;\n\n    if (task.status == \"incomplete\") {\n        task.status = \"complete\";\n        taskButton.classList.add(\"checked\");\n        task_el.classList.add(\"complete\");\n    }\n    else {\n        task.status = \"incomplete\";\n        taskButton.classList.remove(\"checked\");\n        task_el.classList.remove(\"complete\");       \n    }\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/complete.js?");

/***/ }),

/***/ "./src/delete.js":
/*!***********************!*\
  !*** ./src/delete.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteTask\": () => (/* binding */ deleteTask)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\nfunction deleteTask() {\n    _index__WEBPACK_IMPORTED_MODULE_0__.defaultTasks.splice(this.parentNode.parentNode.getAttribute(\"data-index\"), 1);\n    (0,_index__WEBPACK_IMPORTED_MODULE_0__.renderAllTasks)();\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/delete.js?");

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"editTask\": () => (/* binding */ editTask)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\nfunction editTask() {\n    const task = _index__WEBPACK_IMPORTED_MODULE_0__.defaultTasks[this.parentNode.parentNode.getAttribute(\"data-index\")];\n    const taskForm = document.querySelector(\".add-task-form\");\n    const taskOverlay = document.querySelector(\".opacity-cover\");\n    const form = document.querySelector(\"form\");\n\n    // Display Form and fill in task data\n    taskForm.style.display = \"block\";\n    taskOverlay.style.display = \"block\";\n    document.querySelector(\"#title\").value = task.title;\n    document.querySelector(\"#description\").value = task.description;\n    document.querySelector(\"#date\").value = task.dueDate;\n    document.querySelector(`#${task.priority}-priority`).checked = true;\n    \n    // Create Edit Button\n    const addTaskButton = document.querySelector(\".add-task-button\");\n    if (addTaskButton) {\n        addTaskButton.remove();\n    }\n    const editTaskButton = document.createElement(\"button\");\n    editTaskButton.classList.add(\"edit-task-button\");\n    editTaskButton.setAttribute(\"type\", \"button\");\n    editTaskButton.textContent = \"Edit\";\n    form.appendChild(editTaskButton);\n\n    // Update task and display\n    editTaskButton.addEventListener(\"click\", () => {\n        task.title = document.querySelector(\"#title\").value;\n        task.description = document.querySelector(\"#description\").value;\n        task.dueDate = document.querySelector(\"#date\").value;\n        task.priority = document.querySelector(\"input[name=priority]:checked\").value;\n        taskForm.style.display = \"none\";\n        taskOverlay.style.display = \"none\";\n        editTaskButton.remove();\n        form.reset();\n        (0,_index__WEBPACK_IMPORTED_MODULE_0__.renderAllTasks)();\n    });\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/edit.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"defaultTasks\": () => (/* binding */ defaultTasks),\n/* harmony export */   \"renderAllTasks\": () => (/* binding */ renderAllTasks),\n/* harmony export */   \"setPriorityColor\": () => (/* binding */ setPriorityColor)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos */ \"./src/todos.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/isToday/index.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/parseISO/index.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/isFuture/index.js\");\n/* harmony import */ var _renderTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderTasks */ \"./src/renderTasks.js\");\n\n\n\n\n\nconst defaultTasks = [];\ndocument.querySelector(\".all-tasks\").classList.add(\"current-page\");\n\n// Clear from DOM\nfunction clearTasks() {\n    const tasks = document.querySelectorAll(\".task\");\n    tasks.forEach((task) => {\n        task.remove();\n    });\n};\n\nfunction switchTab(e) {\n    navTabs.forEach((tab) => {\n        tab.classList.remove(\"current-page\");\n        e.target.classList.add(\"current-page\");\n    });\n}\n\nconst navTabs = document.querySelectorAll(\".nav li\");\nnavTabs.forEach((tab) => {\n    tab.addEventListener(\"click\", (e) => {\n        switchTab(e);\n    });\n});\n\nfunction setPriorityColor(priority) {\n    if (priority == \"Low\") {\n        return \"#59981A\";\n    }\n    else if (priority == \"Medium\") {\n        return \"#FFAC1C\";\n    }\n    else {\n        return \"#FC0E0E\";\n    }\n};\n\n// Render all the tasks inside array\nfunction renderAllTasks() {\n    clearTasks();\n    defaultTasks.forEach((task, index) => {\n        (0,_renderTasks__WEBPACK_IMPORTED_MODULE_2__.renderTasks)(task, index);\n    });\n}\n\n// Displaying the Add Task popup\n\nconst addTask = document.querySelector(\".add-task\");\nconst taskForm = document.querySelector(\".add-task-form\");\nconst taskOverlay = document.querySelector(\".opacity-cover\");\nconst form = document.querySelector(\"form\");\n\naddTask.addEventListener(\"click\", () => {\n    const addTaskButton = document.createElement(\"button\");\n    addTaskButton.classList.add(\"add-task-button\");\n    addTaskButton.textContent = \"Add Task\";\n    addTaskButton.setAttribute(\"type\", \"button\");\n    addTaskButton.addEventListener(\"click\", () => {\n        const title = document.querySelector(\"#title\").value;\n        const description = document.querySelector(\"#description\").value;\n        const dueDate = document.querySelector(\"#date\").value;\n        const priority = document.querySelector(\"input[name=priority]:checked\").value;\n        const task = new _todos__WEBPACK_IMPORTED_MODULE_1__.Task(title, description, dueDate, priority, \"incomplete\");\n        defaultTasks.push(task);\n        taskForm.style.display = \"none\";\n        taskOverlay.style.display = \"none\";\n        renderAllTasks();\n        form.reset();\n        addTaskButton.remove();\n    })\n    form.appendChild(addTaskButton);\n    taskForm.style.display = \"block\";\n    taskOverlay.style.display = \"block\";\n});\n\nconst allTasks = document.querySelector(\".all-tasks\");\nallTasks.addEventListener(\"click\", () => {\n    renderAllTasks();\n});\n\nconst todaysTasks = document.querySelector(\".todays-tasks\");\ntodaysTasks.addEventListener(\"click\", renderTodaysTasks);\n\nconst upcomingTasks = document.querySelector(\".upcoming-tasks\");\nupcomingTasks.addEventListener(\"click\", renderUpcomingTasks);\n\n\nfunction renderTodaysTasks() {\n    clearTasks();\n    defaultTasks.forEach((task, index) => {\n        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,date_fns__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(task.dueDate))) {\n            (0,_renderTasks__WEBPACK_IMPORTED_MODULE_2__.renderTasks)(task, index);\n        }\n    })\n}\n\nfunction renderUpcomingTasks() {\n    clearTasks();\n    defaultTasks.forEach((task, index) => {\n        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,date_fns__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(task.dueDate))) {\n            (0,_renderTasks__WEBPACK_IMPORTED_MODULE_2__.renderTasks)(task, index);\n        }\n    });\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/renderTasks.js":
/*!****************************!*\
  !*** ./src/renderTasks.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderTasks\": () => (/* binding */ renderTasks)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _complete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complete */ \"./src/complete.js\");\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ \"./src/edit.js\");\n/* harmony import */ var _delete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delete */ \"./src/delete.js\");\n\n\n\n\n\n\n\nfunction renderTasks(task, index) {\n    const todoItems = document.querySelector(\".todo-items\");\n    const li = document.querySelector(\".task-template\").cloneNode(true);\n    const docFrag = document.createDocumentFragment();\n    li.querySelector(\".task-title\").textContent = task.title;\n    li.querySelector(\".task-description\").textContent = task.description;\n    li.querySelector(\".task-dueDate\").textContent = task.dueDate;\n    li.querySelector(\".task-priority\").textContent = task.priority;\n    li.querySelector(\".task-priority\").style.backgroundColor = (0,_index__WEBPACK_IMPORTED_MODULE_0__.setPriorityColor)(task.priority);\n    li.querySelector(\".task-complete-button\").addEventListener(\"click\", _complete__WEBPACK_IMPORTED_MODULE_1__.markComplete);\n    li.querySelector(\"#edit-button\").addEventListener(\"click\", _edit__WEBPACK_IMPORTED_MODULE_2__.editTask);\n    li.querySelector(\"#delete-button\").addEventListener(\"click\", _delete__WEBPACK_IMPORTED_MODULE_3__.deleteTask);\n    li.style.display = \"flex\";\n    li.className = \"task\";\n    if (task.status == \"complete\") {\n        li.classList.add(\"complete\");\n        li.querySelector(\".task-complete-button\").classList.add(\"checked\");\n    }\n    li.dataset.index = index;\n    docFrag.appendChild(li);\n    todoItems.appendChild(docFrag);\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/renderTasks.js?");

/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\nfunction Task(title, description, dueDate, priority, status) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.status = status;\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/todos.js?");

/***/ }),

/***/ "./src/check.svg":
/*!***********************!*\
  !*** ./src/check.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5b7392e07d13c0094e7b.svg\";\n\n//# sourceURL=webpack://todo-list/./src/check.svg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;