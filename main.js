/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/copy-anything/dist/index.js":
/*!**************************************************!*\
  !*** ./node_modules/copy-anything/dist/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copy: () => (/* binding */ copy)
/* harmony export */ });
/* harmony import */ var is_what__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-what */ "./node_modules/is-what/dist/index.js");


function assignProp(carry, key, newVal, originalObject, includeNonenumerable) {
  const propType = {}.propertyIsEnumerable.call(originalObject, key) ? "enumerable" : "nonenumerable";
  if (propType === "enumerable")
    carry[key] = newVal;
  if (includeNonenumerable && propType === "nonenumerable") {
    Object.defineProperty(carry, key, {
      value: newVal,
      enumerable: false,
      writable: true,
      configurable: true
    });
  }
}
function copy(target, options = {}) {
  if ((0,is_what__WEBPACK_IMPORTED_MODULE_0__.isArray)(target)) {
    return target.map((item) => copy(item, options));
  }
  if (!(0,is_what__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(target)) {
    return target;
  }
  const props = Object.getOwnPropertyNames(target);
  const symbols = Object.getOwnPropertySymbols(target);
  return [...props, ...symbols].reduce((carry, key) => {
    if ((0,is_what__WEBPACK_IMPORTED_MODULE_0__.isArray)(options.props) && !options.props.includes(key)) {
      return carry;
    }
    const val = target[key];
    const newVal = copy(val, options);
    assignProp(carry, key, newVal, target, options.nonenumerable);
    return carry;
  }, {});
}




/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Pages/CSS/DialogBox/dialog-box.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Pages/CSS/DialogBox/dialog-box.css ***!
  \**************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `dialog#new-entry-dialog{
    --animation-timing: 300ms;

    position: absolute;

    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    background-color: white;

    box-shadow: 0rem 2rem 5rem rgba(0, 0, 0, 0.5);

    width: 90rem;
    height: 65rem;


    

    /* transform-origin: center; */

    border-radius: 2rem;

    /* border: .2rem solid var(--light-grey); */


    animation: increaseScale var(--animation-timing) ease-in forwards;
}

dialog#new-entry-dialog[open]{
    display: grid;
    grid-template-columns: 25rem 1fr;
    grid-template-rows: 12rem
                        1fr;
    grid-template-areas: "header header"
                         "aside main";
}


dialog#new-entry-dialog.closing{
    animation: decreaseScale var(--animation-timing) ease-in forwards;
}

dialog#new-entry-dialog::backdrop{
    background-color: rgba(128, 128, 128, 0.4);
    backdrop-filter: blur(.5rem);
}



dialog #dialog-header{
    grid-area: header;

    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2rem;

    border-bottom: .2rem solid var(--light-grey);

    background-color: rgb(184, 204, 184);
}

dialog #dialog-header h1{
    color: rgb(255, 255, 255);
    text-shadow: .5rem .5rem 1rem grey;

    font-size: 4.5rem;
    font-weight: lighter;
}


dialog #dialog-header button#close-dialog{

    align-self: flex-start;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 42%;
    aspect-ratio: 1;

    cursor: pointer;

    background-color: transparent;

    /* overflow: hidden; */
}

dialog #dialog-header button#close-dialog svg{
    width: 100%;
    height: 100%;

    object-fit: cover;

    fill: rgb(255, 99, 125);
    


    /* rgb(255, 74, 74) */

    filter: drop-shadow(.4rem .4rem .2rem grey);
}




dialog #aside-theme-container{
    grid-area: aside;

    border-right: .2rem solid var(--light-grey);

    width: 100%;
    height: 100%;
}

dialog #main-editor-container{
    grid-area: main;

    width: 100%;
    height: 100%;
}


@keyframes increaseScale {
    from{
        transform: translate(-50%, -50%) scale(0);
    }
    to{
        transform: translate(-50%, -50%) scale(1);
    }
}

@keyframes decreaseScale {
    from{
        transform: translate(-50%, -50%) scale(1);
    }
    to{
        transform: translate(-50%, -50%) scale(0);
    }
}









div#aside-theme-container,
div#aside-theme-container div{
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    
}

div#aside-theme-container div{
    row-gap: 1rem;

    padding: 1rem 2rem;

    font-size: 3rem;
}

div#aside-theme-container div p.dialog-theme-selection{
    color: var(--dark-grey);

    display: flex;
    align-items: center;
    /* justify-content: center; */

    height: 5rem;

    border-radius: .5rem;

    padding: 0 1rem;

    cursor: pointer;

    text-wrap: nowrap;
}

div#aside-theme-container div p.dialog-theme-selection[data-page="unselected"]:hover{
    background-color: rgba(128, 128, 128, 0.3);
}


div#main-editor-container{
    width: 100%;
    height: 100%;

    padding: 0 2rem 1.5rem;
    
}


div#main-editor-container form{
    width: 100%;
    height: 100%;
}



button.submit-button{
    --submit-button-colour: rgb(29, 199, 134);

    
    height: 4.8rem;
    aspect-ratio: 3;

    border-radius: 3rem;
    border: var(--submit-button-colour) .3rem solid;

    color: var(--submit-button-colour);

    /* background-color: grey; */



    cursor: pointer;

    transition: background-color 300ms linear, 
                color 300ms linear;
}

button.submit-button:hover{
    background-color: var(--submit-button-colour);

    color: white;
}`, "",{"version":3,"sources":["webpack://./src/Pages/CSS/DialogBox/dialog-box.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;;IAEzB,kBAAkB;;IAElB,QAAQ;IACR,SAAS;;IAET,gCAAgC;;IAEhC,uBAAuB;;IAEvB,6CAA6C;;IAE7C,YAAY;IACZ,aAAa;;;;;IAKb,8BAA8B;;IAE9B,mBAAmB;;IAEnB,2CAA2C;;;IAG3C,iEAAiE;AACrE;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC;2BACuB;IACvB;qCACiC;AACrC;;;AAGA;IACI,iEAAiE;AACrE;;AAEA;IACI,0CAA0C;IAC1C,4BAA4B;AAChC;;;;AAIA;IACI,iBAAiB;;IAEjB,WAAW;IACX,YAAY;;IAEZ,aAAa;IACb,mBAAmB;IACnB,8BAA8B;;IAE9B,aAAa;;IAEb,4CAA4C;;IAE5C,oCAAoC;AACxC;;AAEA;IACI,yBAAyB;IACzB,kCAAkC;;IAElC,iBAAiB;IACjB,oBAAoB;AACxB;;;AAGA;;IAEI,sBAAsB;;IAEtB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;;IAEvB,WAAW;IACX,eAAe;;IAEf,eAAe;;IAEf,6BAA6B;;IAE7B,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,YAAY;;IAEZ,iBAAiB;;IAEjB,uBAAuB;;;;IAIvB,qBAAqB;;IAErB,2CAA2C;AAC/C;;;;;AAKA;IACI,gBAAgB;;IAEhB,2CAA2C;;IAE3C,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,eAAe;;IAEf,WAAW;IACX,YAAY;AAChB;;;AAGA;IACI;QACI,yCAAyC;IAC7C;IACA;QACI,yCAAyC;IAC7C;AACJ;;AAEA;IACI;QACI,yCAAyC;IAC7C;IACA;QACI,yCAAyC;IAC7C;AACJ;;;;;;;;;;AAUA;;IAEI,WAAW;IACX,YAAY;;IAEZ,aAAa;IACb,sBAAsB;;;AAG1B;;AAEA;IACI,aAAa;;IAEb,kBAAkB;;IAElB,eAAe;AACnB;;AAEA;IACI,uBAAuB;;IAEvB,aAAa;IACb,mBAAmB;IACnB,6BAA6B;;IAE7B,YAAY;;IAEZ,oBAAoB;;IAEpB,eAAe;;IAEf,eAAe;;IAEf,iBAAiB;AACrB;;AAEA;IACI,0CAA0C;AAC9C;;;AAGA;IACI,WAAW;IACX,YAAY;;IAEZ,sBAAsB;;AAE1B;;;AAGA;IACI,WAAW;IACX,YAAY;AAChB;;;;AAIA;IACI,yCAAyC;;;IAGzC,cAAc;IACd,eAAe;;IAEf,mBAAmB;IACnB,+CAA+C;;IAE/C,kCAAkC;;IAElC,4BAA4B;;;;IAI5B,eAAe;;IAEf;kCAC8B;AAClC;;AAEA;IACI,6CAA6C;;IAE7C,YAAY;AAChB","sourcesContent":["dialog#new-entry-dialog{\r\n    --animation-timing: 300ms;\r\n\r\n    position: absolute;\r\n\r\n    top: 50%;\r\n    left: 50%;\r\n\r\n    transform: translate(-50%, -50%);\r\n\r\n    background-color: white;\r\n\r\n    box-shadow: 0rem 2rem 5rem rgba(0, 0, 0, 0.5);\r\n\r\n    width: 90rem;\r\n    height: 65rem;\r\n\r\n\r\n    \r\n\r\n    /* transform-origin: center; */\r\n\r\n    border-radius: 2rem;\r\n\r\n    /* border: .2rem solid var(--light-grey); */\r\n\r\n\r\n    animation: increaseScale var(--animation-timing) ease-in forwards;\r\n}\r\n\r\ndialog#new-entry-dialog[open]{\r\n    display: grid;\r\n    grid-template-columns: 25rem 1fr;\r\n    grid-template-rows: 12rem\r\n                        1fr;\r\n    grid-template-areas: \"header header\"\r\n                         \"aside main\";\r\n}\r\n\r\n\r\ndialog#new-entry-dialog.closing{\r\n    animation: decreaseScale var(--animation-timing) ease-in forwards;\r\n}\r\n\r\ndialog#new-entry-dialog::backdrop{\r\n    background-color: rgba(128, 128, 128, 0.4);\r\n    backdrop-filter: blur(.5rem);\r\n}\r\n\r\n\r\n\r\ndialog #dialog-header{\r\n    grid-area: header;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n\r\n    padding: 2rem;\r\n\r\n    border-bottom: .2rem solid var(--light-grey);\r\n\r\n    background-color: rgb(184, 204, 184);\r\n}\r\n\r\ndialog #dialog-header h1{\r\n    color: rgb(255, 255, 255);\r\n    text-shadow: .5rem .5rem 1rem grey;\r\n\r\n    font-size: 4.5rem;\r\n    font-weight: lighter;\r\n}\r\n\r\n\r\ndialog #dialog-header button#close-dialog{\r\n\r\n    align-self: flex-start;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    height: 42%;\r\n    aspect-ratio: 1;\r\n\r\n    cursor: pointer;\r\n\r\n    background-color: transparent;\r\n\r\n    /* overflow: hidden; */\r\n}\r\n\r\ndialog #dialog-header button#close-dialog svg{\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    object-fit: cover;\r\n\r\n    fill: rgb(255, 99, 125);\r\n    \r\n\r\n\r\n    /* rgb(255, 74, 74) */\r\n\r\n    filter: drop-shadow(.4rem .4rem .2rem grey);\r\n}\r\n\r\n\r\n\r\n\r\ndialog #aside-theme-container{\r\n    grid-area: aside;\r\n\r\n    border-right: .2rem solid var(--light-grey);\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\ndialog #main-editor-container{\r\n    grid-area: main;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n\r\n@keyframes increaseScale {\r\n    from{\r\n        transform: translate(-50%, -50%) scale(0);\r\n    }\r\n    to{\r\n        transform: translate(-50%, -50%) scale(1);\r\n    }\r\n}\r\n\r\n@keyframes decreaseScale {\r\n    from{\r\n        transform: translate(-50%, -50%) scale(1);\r\n    }\r\n    to{\r\n        transform: translate(-50%, -50%) scale(0);\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ndiv#aside-theme-container,\r\ndiv#aside-theme-container div{\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    \r\n}\r\n\r\ndiv#aside-theme-container div{\r\n    row-gap: 1rem;\r\n\r\n    padding: 1rem 2rem;\r\n\r\n    font-size: 3rem;\r\n}\r\n\r\ndiv#aside-theme-container div p.dialog-theme-selection{\r\n    color: var(--dark-grey);\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    /* justify-content: center; */\r\n\r\n    height: 5rem;\r\n\r\n    border-radius: .5rem;\r\n\r\n    padding: 0 1rem;\r\n\r\n    cursor: pointer;\r\n\r\n    text-wrap: nowrap;\r\n}\r\n\r\ndiv#aside-theme-container div p.dialog-theme-selection[data-page=\"unselected\"]:hover{\r\n    background-color: rgba(128, 128, 128, 0.3);\r\n}\r\n\r\n\r\ndiv#main-editor-container{\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    padding: 0 2rem 1.5rem;\r\n    \r\n}\r\n\r\n\r\ndiv#main-editor-container form{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n\r\n\r\nbutton.submit-button{\r\n    --submit-button-colour: rgb(29, 199, 134);\r\n\r\n    \r\n    height: 4.8rem;\r\n    aspect-ratio: 3;\r\n\r\n    border-radius: 3rem;\r\n    border: var(--submit-button-colour) .3rem solid;\r\n\r\n    color: var(--submit-button-colour);\r\n\r\n    /* background-color: grey; */\r\n\r\n\r\n\r\n    cursor: pointer;\r\n\r\n    transition: background-color 300ms linear, \r\n                color 300ms linear;\r\n}\r\n\r\nbutton.submit-button:hover{\r\n    background-color: var(--submit-button-colour);\r\n\r\n    color: white;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Pages/CSS/DialogBox/dialog-note-form.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Pages/CSS/DialogBox/dialog-note-form.css ***!
  \********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `div#dialog-note-state{
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 8rem
                        1fr
                        6rem;
    grid-template-areas: "title"
                         "body-text"
                         "submit";

    row-gap: 1rem;
}

div#note-text-input-container{
    grid-area: title;
}

div#note-text-input-container input{
    width: 100%;
    height: 100%;

    color: var(--dark-grey);
}


div#note-body-text-container{
    grid-area: body-text;
}

div#note-body-text-container textarea{
    resize: none;

    width: 100%;
    height: 100%;

    color: var(--dark-grey);
}


div#note-dialog-complete-button-container{
    grid-area: submit;

    display: flex;
    justify-content: flex-end;
}

div#note-dialog-complete-button-container button{
    margin-right: 2rem;
}

div.note-dialog-input-container{
    width: 100%;
    height: 100%;
}`, "",{"version":3,"sources":["webpack://./src/Pages/CSS/DialogBox/dialog-note-form.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,YAAY;;IAEZ,aAAa;IACb,0BAA0B;IAC1B;;4BAEwB;IACxB;;iCAE6B;;IAE7B,aAAa;AACjB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,YAAY;;IAEZ,uBAAuB;AAC3B;;;AAGA;IACI,oBAAoB;AACxB;;AAEA;IACI,YAAY;;IAEZ,WAAW;IACX,YAAY;;IAEZ,uBAAuB;AAC3B;;;AAGA;IACI,iBAAiB;;IAEjB,aAAa;IACb,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB","sourcesContent":["div#dialog-note-state{\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 8rem\r\n                        1fr\r\n                        6rem;\r\n    grid-template-areas: \"title\"\r\n                         \"body-text\"\r\n                         \"submit\";\r\n\r\n    row-gap: 1rem;\r\n}\r\n\r\ndiv#note-text-input-container{\r\n    grid-area: title;\r\n}\r\n\r\ndiv#note-text-input-container input{\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    color: var(--dark-grey);\r\n}\r\n\r\n\r\ndiv#note-body-text-container{\r\n    grid-area: body-text;\r\n}\r\n\r\ndiv#note-body-text-container textarea{\r\n    resize: none;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    color: var(--dark-grey);\r\n}\r\n\r\n\r\ndiv#note-dialog-complete-button-container{\r\n    grid-area: submit;\r\n\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}\r\n\r\ndiv#note-dialog-complete-button-container button{\r\n    margin-right: 2rem;\r\n}\r\n\r\ndiv.note-dialog-input-container{\r\n    width: 100%;\r\n    height: 100%;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Pages/CSS/DialogBox/dialog-project-form.css":
/*!***********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Pages/CSS/DialogBox/dialog-project-form.css ***!
  \***********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `div#dialog-project-state{
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 8rem
                        1fr
                        6rem;
    grid-template-areas: "title"
                         "icon"
                         "submit";

    row-gap: 1rem;
}


div#project-text-input-container{
    grid-area: title;

    width: 100%;
    height: 100%;
}

div#project-text-input-container input{
    width: 100%;
    height: 100%;

    color: var(--dark-grey);
}


div#project-dialog-complete-button-container{
    grid-area: submit;

    width: 100%;
    height: 100%;
}

div#project-dialog-complete-button-container button{
    margin-left: auto;
    margin-right: 2rem;
}`, "",{"version":3,"sources":["webpack://./src/Pages/CSS/DialogBox/dialog-project-form.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,YAAY;;IAEZ,aAAa;IACb,0BAA0B;IAC1B;;4BAEwB;IACxB;;iCAE6B;;IAE7B,aAAa;AACjB;;;AAGA;IACI,gBAAgB;;IAEhB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;;IAEZ,uBAAuB;AAC3B;;;AAGA;IACI,iBAAiB;;IAEjB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB","sourcesContent":["div#dialog-project-state{\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 8rem\r\n                        1fr\r\n                        6rem;\r\n    grid-template-areas: \"title\"\r\n                         \"icon\"\r\n                         \"submit\";\r\n\r\n    row-gap: 1rem;\r\n}\r\n\r\n\r\ndiv#project-text-input-container{\r\n    grid-area: title;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\ndiv#project-text-input-container input{\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    color: var(--dark-grey);\r\n}\r\n\r\n\r\ndiv#project-dialog-complete-button-container{\r\n    grid-area: submit;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\ndiv#project-dialog-complete-button-container button{\r\n    margin-left: auto;\r\n    margin-right: 2rem;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Pages/CSS/DialogBox/dialog-task-form.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Pages/CSS/DialogBox/dialog-task-form.css ***!
  \********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `div#dialog-task-state{
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 6rem
                        1fr
                        6rem
                        6rem;
    grid-template-areas: "subject subject"
                         "description description"
                         "due-date ."
                         "project ."
                         "priority submit";

    row-gap: 1rem;

    


    /* padding: 1rem; */
}   

div.task-dialog-input-container{


    width: 100%;
    height: 100%;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: flex-start;


}




div#task-subject-container{
    grid-area: subject;
}

div#task-subject-container input{
    width: 100%;
    height: 100%;

    color: var(--dark-grey);
    /* border: .2rem solid var(--light-grey); */
    /* border-radius: .5rem; */

    /* padding: 0 2rem; */
}

div#task-subject-container label{
    position: absolute;

    top: 50%;
    left: 2rem;

    transform: translate(0%, -50%);

    background-color: white;

    color: var(--light-grey);

    cursor: text;
}







div#task-body-text-container{
    grid-area: description;
}

div#task-body-text-container textarea{
    width: 100%;
    height: 100%;

    color: var(--dark-grey);

    

    resize: none;
}

div#task-body-text-container label{
    position: absolute;

    top: 50%;
    left: 2rem;

    transform: translate(0%, -50%);

    /* background-color: white; */

    color: var(--light-grey);

    cursor: text;
}










div#task-due-date-container{
    grid-area: due-date;
}


div#task-project-container{
    grid-area: project;
}





div#task-priority-container{
    grid-area: priority;
}


div#task-dialog-complete-button-container{
    grid-area: submit;
}

div#task-dialog-complete-button-container button{
    margin-left: auto;
    margin-right: 2rem;

}`, "",{"version":3,"sources":["webpack://./src/Pages/CSS/DialogBox/dialog-task-form.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,YAAY;;IAEZ,aAAa;IACb,8BAA8B;IAC9B;;;4BAGwB;IACxB;;;;0CAIsC;;IAEtC,aAAa;;;;;IAKb,mBAAmB;AACvB;;AAEA;;;IAGI,WAAW;IACX,YAAY;;IAEZ,kBAAkB;;IAElB,aAAa;IACb,mBAAmB;IACnB,2BAA2B;;;AAG/B;;;;;AAKA;IACI,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;;IAEZ,uBAAuB;IACvB,2CAA2C;IAC3C,0BAA0B;;IAE1B,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;;IAElB,QAAQ;IACR,UAAU;;IAEV,8BAA8B;;IAE9B,uBAAuB;;IAEvB,wBAAwB;;IAExB,YAAY;AAChB;;;;;;;;AAQA;IACI,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,YAAY;;IAEZ,uBAAuB;;;;IAIvB,YAAY;AAChB;;AAEA;IACI,kBAAkB;;IAElB,QAAQ;IACR,UAAU;;IAEV,8BAA8B;;IAE9B,6BAA6B;;IAE7B,wBAAwB;;IAExB,YAAY;AAChB;;;;;;;;;;;AAWA;IACI,mBAAmB;AACvB;;;AAGA;IACI,kBAAkB;AACtB;;;;;;AAMA;IACI,mBAAmB;AACvB;;;AAGA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;;AAEtB","sourcesContent":["div#dialog-task-state{\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-rows: 6rem\r\n                        1fr\r\n                        6rem\r\n                        6rem;\r\n    grid-template-areas: \"subject subject\"\r\n                         \"description description\"\r\n                         \"due-date .\"\r\n                         \"project .\"\r\n                         \"priority submit\";\r\n\r\n    row-gap: 1rem;\r\n\r\n    \r\n\r\n\r\n    /* padding: 1rem; */\r\n}   \r\n\r\ndiv.task-dialog-input-container{\r\n\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    position: relative;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n\r\n\r\n}\r\n\r\n\r\n\r\n\r\ndiv#task-subject-container{\r\n    grid-area: subject;\r\n}\r\n\r\ndiv#task-subject-container input{\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    color: var(--dark-grey);\r\n    /* border: .2rem solid var(--light-grey); */\r\n    /* border-radius: .5rem; */\r\n\r\n    /* padding: 0 2rem; */\r\n}\r\n\r\ndiv#task-subject-container label{\r\n    position: absolute;\r\n\r\n    top: 50%;\r\n    left: 2rem;\r\n\r\n    transform: translate(0%, -50%);\r\n\r\n    background-color: white;\r\n\r\n    color: var(--light-grey);\r\n\r\n    cursor: text;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ndiv#task-body-text-container{\r\n    grid-area: description;\r\n}\r\n\r\ndiv#task-body-text-container textarea{\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    color: var(--dark-grey);\r\n\r\n    \r\n\r\n    resize: none;\r\n}\r\n\r\ndiv#task-body-text-container label{\r\n    position: absolute;\r\n\r\n    top: 50%;\r\n    left: 2rem;\r\n\r\n    transform: translate(0%, -50%);\r\n\r\n    /* background-color: white; */\r\n\r\n    color: var(--light-grey);\r\n\r\n    cursor: text;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ndiv#task-due-date-container{\r\n    grid-area: due-date;\r\n}\r\n\r\n\r\ndiv#task-project-container{\r\n    grid-area: project;\r\n}\r\n\r\n\r\n\r\n\r\n\r\ndiv#task-priority-container{\r\n    grid-area: priority;\r\n}\r\n\r\n\r\ndiv#task-dialog-complete-button-container{\r\n    grid-area: submit;\r\n}\r\n\r\ndiv#task-dialog-complete-button-container button{\r\n    margin-left: auto;\r\n    margin-right: 2rem;\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Pages/CSS/Main/aside.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Pages/CSS/Main/aside.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `aside{
    --hover-background-colour: rgba(190, 190, 190, 0.5);
}

aside.maximise{


    flex-shrink: 0;

    width: 100%;


    padding-top: var(--outer-card-border-radius);
    padding-bottom: var(--outer-card-border-radius);
    padding-left: var(--outer-card-border-radius);
    padding-right: calc(var(--outer-card-border-radius) / 2);

    display: flex;
    flex-direction: column;

    row-gap: 5rem;


    border-right: .2rem solid var(--light-grey);

}


aside.maximise #menu-title-container{
    flex-shrink: 0;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

}


#menu-title-container h2{
    color: black;

    font-size: 2.6rem;
}


#menu-title-container button{
    color: var(--light-grey);

    font-size: 2rem;
    font-weight: bold;

    padding: 1.2rem;

    border-radius: .4rem;

    cursor: pointer;

    transition: background-colour 200ms linear;
}

#menu-title-container button:hover{
    background-color: var(--hover-background-colour);
}



/******** MENU TITLE ABOVE ***********/



div#aside-list-options-container{
    flex-shrink: 0;
    flex-grow: 1;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    row-gap: 3rem;

    font-size: 1.6rem;

    color: var(--light-grey);

    padding: 0rem 1.5rem;
}


div.sidebar-outer-container{
    --sidebar-container-row-gap: .5rem;

    flex-shrink: 0;

    display: flex;
    flex-direction: column;

    row-gap: var(--sidebar-container-row-gap);
}


h3.sidebar-list-header{
    color: var(--dark-grey);
}


div.sidebar-inner-container{
    flex-shrink: 0;

    display: flex;
    flex-direction: column;

    row-gap: var(--sidebar-container-row-gap);

    max-height: 13rem;

    overflow-y: auto;
}


div.sidebar-option{
    flex-shrink: 0;

    display: flex;
    align-items: center;

    column-gap: .8rem;

    padding: 0rem .8rem;

    height: 4rem;

    border-radius: .4rem;

    cursor: pointer;

    background-color: inherit;

    transition: background-color 200ms linear;
}


[data-page="unselected"]:hover{
    background-color: var(--hover-background-colour);
}



div.sidebar-option > *{
    flex-shrink: 0;
}




div.sidebar-notification-number-container{
    flex-shrink: 0;
    
    margin-left: auto;

    display: flex;
    align-items: center;
    justify-content: center;

    /* width: 2rem;
    aspect-ratio: 1;

    border-radius: 50%;

    background-color: rgb(218, 25, 25); */
}


#aside-notes-list-container .sidebar-inner-container{

    display: flex;
    flex-direction: row;

    align-items: center;
    
}


#notes-container{
    display: flex;
    flex-direction: row;

    align-items: center;
    
    column-gap: .5rem;

    overflow-x: auto;
}



.sidebar-svg-container{
    flex-shrink: 0;

    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;
}

.sidebar-svg-container svg{
    fill: var(--dark-grey);

    height: 65%;
    aspect-ratio: 1;

    object-fit: cover;
}


/* #aside-projects-list-container .sidebar-option:nth-of-type(1) .sidebar-svg-container svg{
    fill: rgb(216, 76, 100);
} */

/* svg:has(use[href="#folder-svg-template"]){
    fill: rgb(216, 76, 100);
}


#aside-projects-list-container .sidebar-option:nth-of-type(2) .sidebar-svg-container svg{
    fill: rgb(77, 200, 241);
}



#aside-projects-list-container .sidebar-option:nth-of-type(3) .sidebar-svg-container svg{
    fill: rgb(179, 179, 38);
} */






.sidebar-notes-button{
    flex-shrink: 0;

    width: 8rem;
    min-width: min-content;
    
    height: 100%;

    text-wrap: nowrap;

    cursor: pointer;

    padding: 1rem .5rem;

    border-radius: .4rem;

    transition: background-color 300ms linear;
}

#add-note-button.sidebar-notes-button{
    font-weight: bold;
    
    color: black;

    width: 10rem;

    margin-left: auto;
}



/* .sidebar-notes-button:hover{
    background-color: var(--hover-background-colour);
} */


div.remove-sidebar-option{
    height: 100%;

    display: flex;
    align-items: center;
}

div.remove-sidebar-option:hover{
    color: red;
}`, "",{"version":3,"sources":["webpack://./src/Pages/CSS/Main/aside.css"],"names":[],"mappings":"AAAA;IACI,mDAAmD;AACvD;;AAEA;;;IAGI,cAAc;;IAEd,WAAW;;;IAGX,4CAA4C;IAC5C,+CAA+C;IAC/C,6CAA6C;IAC7C,wDAAwD;;IAExD,aAAa;IACb,sBAAsB;;IAEtB,aAAa;;;IAGb,2CAA2C;;AAE/C;;;AAGA;IACI,cAAc;;IAEd,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;;AAEvB;;;AAGA;IACI,YAAY;;IAEZ,iBAAiB;AACrB;;;AAGA;IACI,wBAAwB;;IAExB,eAAe;IACf,iBAAiB;;IAEjB,eAAe;;IAEf,oBAAoB;;IAEpB,eAAe;;IAEf,0CAA0C;AAC9C;;AAEA;IACI,gDAAgD;AACpD;;;;AAIA,sCAAsC;;;;AAItC;IACI,cAAc;IACd,YAAY;;IAEZ,aAAa;IACb,sBAAsB;IACtB,2BAA2B;;IAE3B,aAAa;;IAEb,iBAAiB;;IAEjB,wBAAwB;;IAExB,oBAAoB;AACxB;;;AAGA;IACI,kCAAkC;;IAElC,cAAc;;IAEd,aAAa;IACb,sBAAsB;;IAEtB,yCAAyC;AAC7C;;;AAGA;IACI,uBAAuB;AAC3B;;;AAGA;IACI,cAAc;;IAEd,aAAa;IACb,sBAAsB;;IAEtB,yCAAyC;;IAEzC,iBAAiB;;IAEjB,gBAAgB;AACpB;;;AAGA;IACI,cAAc;;IAEd,aAAa;IACb,mBAAmB;;IAEnB,iBAAiB;;IAEjB,mBAAmB;;IAEnB,YAAY;;IAEZ,oBAAoB;;IAEpB,eAAe;;IAEf,yBAAyB;;IAEzB,yCAAyC;AAC7C;;;AAGA;IACI,gDAAgD;AACpD;;;;AAIA;IACI,cAAc;AAClB;;;;;AAKA;IACI,cAAc;;IAEd,iBAAiB;;IAEjB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;;IAEvB;;;;;yCAKqC;AACzC;;;AAGA;;IAEI,aAAa;IACb,mBAAmB;;IAEnB,mBAAmB;;AAEvB;;;AAGA;IACI,aAAa;IACb,mBAAmB;;IAEnB,mBAAmB;;IAEnB,iBAAiB;;IAEjB,gBAAgB;AACpB;;;;AAIA;IACI,cAAc;;IAEd,YAAY;;IAEZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;;IAEvB,gBAAgB;AACpB;;AAEA;IACI,sBAAsB;;IAEtB,WAAW;IACX,eAAe;;IAEf,iBAAiB;AACrB;;;AAGA;;GAEG;;AAEH;;;;;;;;;;;;;GAaG;;;;;;;AAOH;IACI,cAAc;;IAEd,WAAW;IACX,sBAAsB;;IAEtB,YAAY;;IAEZ,iBAAiB;;IAEjB,eAAe;;IAEf,mBAAmB;;IAEnB,oBAAoB;;IAEpB,yCAAyC;AAC7C;;AAEA;IACI,iBAAiB;;IAEjB,YAAY;;IAEZ,YAAY;;IAEZ,iBAAiB;AACrB;;;;AAIA;;GAEG;;;AAGH;IACI,YAAY;;IAEZ,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,UAAU;AACd","sourcesContent":["aside{\r\n    --hover-background-colour: rgba(190, 190, 190, 0.5);\r\n}\r\n\r\naside.maximise{\r\n\r\n\r\n    flex-shrink: 0;\r\n\r\n    width: 100%;\r\n\r\n\r\n    padding-top: var(--outer-card-border-radius);\r\n    padding-bottom: var(--outer-card-border-radius);\r\n    padding-left: var(--outer-card-border-radius);\r\n    padding-right: calc(var(--outer-card-border-radius) / 2);\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    row-gap: 5rem;\r\n\r\n\r\n    border-right: .2rem solid var(--light-grey);\r\n\r\n}\r\n\r\n\r\naside.maximise #menu-title-container{\r\n    flex-shrink: 0;\r\n    \r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n\r\n}\r\n\r\n\r\n#menu-title-container h2{\r\n    color: black;\r\n\r\n    font-size: 2.6rem;\r\n}\r\n\r\n\r\n#menu-title-container button{\r\n    color: var(--light-grey);\r\n\r\n    font-size: 2rem;\r\n    font-weight: bold;\r\n\r\n    padding: 1.2rem;\r\n\r\n    border-radius: .4rem;\r\n\r\n    cursor: pointer;\r\n\r\n    transition: background-colour 200ms linear;\r\n}\r\n\r\n#menu-title-container button:hover{\r\n    background-color: var(--hover-background-colour);\r\n}\r\n\r\n\r\n\r\n/******** MENU TITLE ABOVE ***********/\r\n\r\n\r\n\r\ndiv#aside-list-options-container{\r\n    flex-shrink: 0;\r\n    flex-grow: 1;\r\n    \r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n\r\n    row-gap: 3rem;\r\n\r\n    font-size: 1.6rem;\r\n\r\n    color: var(--light-grey);\r\n\r\n    padding: 0rem 1.5rem;\r\n}\r\n\r\n\r\ndiv.sidebar-outer-container{\r\n    --sidebar-container-row-gap: .5rem;\r\n\r\n    flex-shrink: 0;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    row-gap: var(--sidebar-container-row-gap);\r\n}\r\n\r\n\r\nh3.sidebar-list-header{\r\n    color: var(--dark-grey);\r\n}\r\n\r\n\r\ndiv.sidebar-inner-container{\r\n    flex-shrink: 0;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    row-gap: var(--sidebar-container-row-gap);\r\n\r\n    max-height: 13rem;\r\n\r\n    overflow-y: auto;\r\n}\r\n\r\n\r\ndiv.sidebar-option{\r\n    flex-shrink: 0;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n\r\n    column-gap: .8rem;\r\n\r\n    padding: 0rem .8rem;\r\n\r\n    height: 4rem;\r\n\r\n    border-radius: .4rem;\r\n\r\n    cursor: pointer;\r\n\r\n    background-color: inherit;\r\n\r\n    transition: background-color 200ms linear;\r\n}\r\n\r\n\r\n[data-page=\"unselected\"]:hover{\r\n    background-color: var(--hover-background-colour);\r\n}\r\n\r\n\r\n\r\ndiv.sidebar-option > *{\r\n    flex-shrink: 0;\r\n}\r\n\r\n\r\n\r\n\r\ndiv.sidebar-notification-number-container{\r\n    flex-shrink: 0;\r\n    \r\n    margin-left: auto;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    /* width: 2rem;\r\n    aspect-ratio: 1;\r\n\r\n    border-radius: 50%;\r\n\r\n    background-color: rgb(218, 25, 25); */\r\n}\r\n\r\n\r\n#aside-notes-list-container .sidebar-inner-container{\r\n\r\n    display: flex;\r\n    flex-direction: row;\r\n\r\n    align-items: center;\r\n    \r\n}\r\n\r\n\r\n#notes-container{\r\n    display: flex;\r\n    flex-direction: row;\r\n\r\n    align-items: center;\r\n    \r\n    column-gap: .5rem;\r\n\r\n    overflow-x: auto;\r\n}\r\n\r\n\r\n\r\n.sidebar-svg-container{\r\n    flex-shrink: 0;\r\n\r\n    height: 100%;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    overflow: hidden;\r\n}\r\n\r\n.sidebar-svg-container svg{\r\n    fill: var(--dark-grey);\r\n\r\n    height: 65%;\r\n    aspect-ratio: 1;\r\n\r\n    object-fit: cover;\r\n}\r\n\r\n\r\n/* #aside-projects-list-container .sidebar-option:nth-of-type(1) .sidebar-svg-container svg{\r\n    fill: rgb(216, 76, 100);\r\n} */\r\n\r\n/* svg:has(use[href=\"#folder-svg-template\"]){\r\n    fill: rgb(216, 76, 100);\r\n}\r\n\r\n\r\n#aside-projects-list-container .sidebar-option:nth-of-type(2) .sidebar-svg-container svg{\r\n    fill: rgb(77, 200, 241);\r\n}\r\n\r\n\r\n\r\n#aside-projects-list-container .sidebar-option:nth-of-type(3) .sidebar-svg-container svg{\r\n    fill: rgb(179, 179, 38);\r\n} */\r\n\r\n\r\n\r\n\r\n\r\n\r\n.sidebar-notes-button{\r\n    flex-shrink: 0;\r\n\r\n    width: 8rem;\r\n    min-width: min-content;\r\n    \r\n    height: 100%;\r\n\r\n    text-wrap: nowrap;\r\n\r\n    cursor: pointer;\r\n\r\n    padding: 1rem .5rem;\r\n\r\n    border-radius: .4rem;\r\n\r\n    transition: background-color 300ms linear;\r\n}\r\n\r\n#add-note-button.sidebar-notes-button{\r\n    font-weight: bold;\r\n    \r\n    color: black;\r\n\r\n    width: 10rem;\r\n\r\n    margin-left: auto;\r\n}\r\n\r\n\r\n\r\n/* .sidebar-notes-button:hover{\r\n    background-color: var(--hover-background-colour);\r\n} */\r\n\r\n\r\ndiv.remove-sidebar-option{\r\n    height: 100%;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\ndiv.remove-sidebar-option:hover{\r\n    color: red;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Pages/CSS/Main/main.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Pages/CSS/Main/main.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `main{
    flex-grow: 1;
    flex-shrink: 0;

    display: flex;
    flex-direction: column;

    row-gap: 3rem;

    max-width: 100%;

    padding-top: calc(var(--outer-card-border-radius) / 1.5);
    padding-bottom: var(--outer-card-border-radius);
    padding-right: var(--outer-card-border-radius);
    padding-left: calc(var(--outer-card-border-radius) / 2);

}


main h1#main-title{
    flex-shrink: 0;

    font-size: 4.8rem;
}

main div#main-content{
    flex: 1 1 0;

    padding-left: 1rem;

    overflow: hidden;

    max-width: 100%;
}


div#home-content-container{

    display: flex;
    flex-direction: column;

    row-gap: 2rem;

    padding-bottom: 1.5rem;

    max-height: 100%;
    max-width: 100%;


    overflow-y: auto;
}


div.task-entry-container{
    --tasks-column-gap: 1.5rem;

    flex-shrink: 0;

    display: flex;
    align-items: center;

    max-width: 100%;
    width: 100%;


    height: 5rem;

    column-gap: var(--tasks-column-gap);

    padding: 0 var(--tasks-column-gap);

    border-left-width: .4rem;
    border-left-style: solid;
    border-radius: .5rem;

    overflow: hidden;

    cursor: pointer;

    transition: background-color 200ms linear;

}

div.task-entry-container:hover{
    background-color: rgba(194, 194, 194, 0.7);

}







div.task-entry-container[data-importance="low"]{
    border-left-color: green;
}

div.task-entry-container[data-importance="medium"]{
    border-left-color: rgb(221, 221, 0);
}

div.task-entry-container[data-importance="high"]{
    border-left-color: red;
}


div.task-entry-container label{
    flex-shrink: 0;

    height: 100%;
    

    display: grid;
    place-items: center;

    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    cursor: pointer;
    
}

div.task-entry-container input{
    height: 40%;
    aspect-ratio: 1.1;

    cursor: pointer;
}


p.task-entry-title{
    flex-shrink: 0;

    text-wrap: nowrap;
    text-overflow: ellipsis;

    font-weight: bold;
    font-size: 1.7rem;


}

p.task-entry-title.complete{
    text-decoration: line-through;
}

p.task-entry-description{
    flex: 1 1 0;

    max-width: 15rem;
    min-width: 0;

    text-wrap: nowrap;
    text-overflow: ellipsis;

    overflow: hidden;
}

p.due-date{
    flex-shrink: 0;

    color: var(--light-grey);

    margin-left: auto;
}


div.task-edit-svg-container,
div.task-del-svg-container{
    flex-shrink: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;
    aspect-ratio: 1;

    overflow: hidden;

    cursor: pointer;
}




div.task-edit-svg-container svg,
div.task-del-svg-container svg{
    height: 55%;
    aspect-ratio: 1;

    object-fit: cover;

    fill-rule:evenodd;
    clip-rule:evenodd;

    fill: var(--dark-grey);

    transition: fill 300ms linear;
}


div.task-edit-svg-container svg:hover{
    fill: rgb(73, 73, 253);
}

div.task-del-svg-container svg:hover{
    fill: rgb(253, 52, 52);
}


div.note-container{
    position: relative;

    flex-shrink: 0;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    row-gap: .8rem;

    height: max-content;
    width: 50%;

    padding: 1rem 0;

    border-radius: .3rem;

    box-shadow: .5rem .5rem 1rem rgba(128, 128, 128, 0.5);

    background-color: rgb(255, 255, 100);
}

div.note-container .note-title{
    padding: 0 .8rem;

    font-size: 1.6rem;
    font-style: italic;
    font-weight: bold;
}

div.note-container .note-body{
    padding: 0 1.8rem;
}

div.note-container button.note-del-btn{
    position: absolute;

    background-color: inherit;

    font-size: 2.2rem;
    font-weight: bold;

    top: 2%;
    right: 3%;


    color: grey;

    cursor: pointer;
}

div.note-container button.note-del-btn:hover{
    color: red;
}



/* #date-range-specifier{
    display: flex;
    flex-direction: column;

    width: min-content;
} */`, "",{"version":3,"sources":["webpack://./src/Pages/CSS/Main/main.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,cAAc;;IAEd,aAAa;IACb,sBAAsB;;IAEtB,aAAa;;IAEb,eAAe;;IAEf,wDAAwD;IACxD,+CAA+C;IAC/C,8CAA8C;IAC9C,uDAAuD;;AAE3D;;;AAGA;IACI,cAAc;;IAEd,iBAAiB;AACrB;;AAEA;IACI,WAAW;;IAEX,kBAAkB;;IAElB,gBAAgB;;IAEhB,eAAe;AACnB;;;AAGA;;IAEI,aAAa;IACb,sBAAsB;;IAEtB,aAAa;;IAEb,sBAAsB;;IAEtB,gBAAgB;IAChB,eAAe;;;IAGf,gBAAgB;AACpB;;;AAGA;IACI,0BAA0B;;IAE1B,cAAc;;IAEd,aAAa;IACb,mBAAmB;;IAEnB,eAAe;IACf,WAAW;;;IAGX,YAAY;;IAEZ,mCAAmC;;IAEnC,kCAAkC;;IAElC,wBAAwB;IACxB,wBAAwB;IACxB,oBAAoB;;IAEpB,gBAAgB;;IAEhB,eAAe;;IAEf,yCAAyC;;AAE7C;;AAEA;IACI,0CAA0C;;AAE9C;;;;;;;;AAQA;IACI,wBAAwB;AAC5B;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,sBAAsB;AAC1B;;;AAGA;IACI,cAAc;;IAEd,YAAY;;;IAGZ,aAAa;IACb,mBAAmB;;IAEnB,0BAA0B;IAC1B,uBAAuB;;IAEvB,eAAe;;AAEnB;;AAEA;IACI,WAAW;IACX,iBAAiB;;IAEjB,eAAe;AACnB;;;AAGA;IACI,cAAc;;IAEd,iBAAiB;IACjB,uBAAuB;;IAEvB,iBAAiB;IACjB,iBAAiB;;;AAGrB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,WAAW;;IAEX,gBAAgB;IAChB,YAAY;;IAEZ,iBAAiB;IACjB,uBAAuB;;IAEvB,gBAAgB;AACpB;;AAEA;IACI,cAAc;;IAEd,wBAAwB;;IAExB,iBAAiB;AACrB;;;AAGA;;IAEI,cAAc;;IAEd,aAAa;IACb,mBAAmB;IACnB,uBAAuB;;IAEvB,YAAY;IACZ,eAAe;;IAEf,gBAAgB;;IAEhB,eAAe;AACnB;;;;;AAKA;;IAEI,WAAW;IACX,eAAe;;IAEf,iBAAiB;;IAEjB,iBAAiB;IACjB,iBAAiB;;IAEjB,sBAAsB;;IAEtB,6BAA6B;AACjC;;;AAGA;IACI,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;AAC1B;;;AAGA;IACI,kBAAkB;;IAElB,cAAc;;IAEd,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,2BAA2B;;IAE3B,cAAc;;IAEd,mBAAmB;IACnB,UAAU;;IAEV,eAAe;;IAEf,oBAAoB;;IAEpB,qDAAqD;;IAErD,oCAAoC;AACxC;;AAEA;IACI,gBAAgB;;IAEhB,iBAAiB;IACjB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;;IAElB,yBAAyB;;IAEzB,iBAAiB;IACjB,iBAAiB;;IAEjB,OAAO;IACP,SAAS;;;IAGT,WAAW;;IAEX,eAAe;AACnB;;AAEA;IACI,UAAU;AACd;;;;AAIA;;;;;GAKG","sourcesContent":["main{\r\n    flex-grow: 1;\r\n    flex-shrink: 0;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    row-gap: 3rem;\r\n\r\n    max-width: 100%;\r\n\r\n    padding-top: calc(var(--outer-card-border-radius) / 1.5);\r\n    padding-bottom: var(--outer-card-border-radius);\r\n    padding-right: var(--outer-card-border-radius);\r\n    padding-left: calc(var(--outer-card-border-radius) / 2);\r\n\r\n}\r\n\r\n\r\nmain h1#main-title{\r\n    flex-shrink: 0;\r\n\r\n    font-size: 4.8rem;\r\n}\r\n\r\nmain div#main-content{\r\n    flex: 1 1 0;\r\n\r\n    padding-left: 1rem;\r\n\r\n    overflow: hidden;\r\n\r\n    max-width: 100%;\r\n}\r\n\r\n\r\ndiv#home-content-container{\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    row-gap: 2rem;\r\n\r\n    padding-bottom: 1.5rem;\r\n\r\n    max-height: 100%;\r\n    max-width: 100%;\r\n\r\n\r\n    overflow-y: auto;\r\n}\r\n\r\n\r\ndiv.task-entry-container{\r\n    --tasks-column-gap: 1.5rem;\r\n\r\n    flex-shrink: 0;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n\r\n    max-width: 100%;\r\n    width: 100%;\r\n\r\n\r\n    height: 5rem;\r\n\r\n    column-gap: var(--tasks-column-gap);\r\n\r\n    padding: 0 var(--tasks-column-gap);\r\n\r\n    border-left-width: .4rem;\r\n    border-left-style: solid;\r\n    border-radius: .5rem;\r\n\r\n    overflow: hidden;\r\n\r\n    cursor: pointer;\r\n\r\n    transition: background-color 200ms linear;\r\n\r\n}\r\n\r\ndiv.task-entry-container:hover{\r\n    background-color: rgba(194, 194, 194, 0.7);\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ndiv.task-entry-container[data-importance=\"low\"]{\r\n    border-left-color: green;\r\n}\r\n\r\ndiv.task-entry-container[data-importance=\"medium\"]{\r\n    border-left-color: rgb(221, 221, 0);\r\n}\r\n\r\ndiv.task-entry-container[data-importance=\"high\"]{\r\n    border-left-color: red;\r\n}\r\n\r\n\r\ndiv.task-entry-container label{\r\n    flex-shrink: 0;\r\n\r\n    height: 100%;\r\n    \r\n\r\n    display: grid;\r\n    place-items: center;\r\n\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 1fr;\r\n\r\n    cursor: pointer;\r\n    \r\n}\r\n\r\ndiv.task-entry-container input{\r\n    height: 40%;\r\n    aspect-ratio: 1.1;\r\n\r\n    cursor: pointer;\r\n}\r\n\r\n\r\np.task-entry-title{\r\n    flex-shrink: 0;\r\n\r\n    text-wrap: nowrap;\r\n    text-overflow: ellipsis;\r\n\r\n    font-weight: bold;\r\n    font-size: 1.7rem;\r\n\r\n\r\n}\r\n\r\np.task-entry-title.complete{\r\n    text-decoration: line-through;\r\n}\r\n\r\np.task-entry-description{\r\n    flex: 1 1 0;\r\n\r\n    max-width: 15rem;\r\n    min-width: 0;\r\n\r\n    text-wrap: nowrap;\r\n    text-overflow: ellipsis;\r\n\r\n    overflow: hidden;\r\n}\r\n\r\np.due-date{\r\n    flex-shrink: 0;\r\n\r\n    color: var(--light-grey);\r\n\r\n    margin-left: auto;\r\n}\r\n\r\n\r\ndiv.task-edit-svg-container,\r\ndiv.task-del-svg-container{\r\n    flex-shrink: 0;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    height: 100%;\r\n    aspect-ratio: 1;\r\n\r\n    overflow: hidden;\r\n\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n\r\ndiv.task-edit-svg-container svg,\r\ndiv.task-del-svg-container svg{\r\n    height: 55%;\r\n    aspect-ratio: 1;\r\n\r\n    object-fit: cover;\r\n\r\n    fill-rule:evenodd;\r\n    clip-rule:evenodd;\r\n\r\n    fill: var(--dark-grey);\r\n\r\n    transition: fill 300ms linear;\r\n}\r\n\r\n\r\ndiv.task-edit-svg-container svg:hover{\r\n    fill: rgb(73, 73, 253);\r\n}\r\n\r\ndiv.task-del-svg-container svg:hover{\r\n    fill: rgb(253, 52, 52);\r\n}\r\n\r\n\r\ndiv.note-container{\r\n    position: relative;\r\n\r\n    flex-shrink: 0;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-content: flex-start;\r\n\r\n    row-gap: .8rem;\r\n\r\n    height: max-content;\r\n    width: 50%;\r\n\r\n    padding: 1rem 0;\r\n\r\n    border-radius: .3rem;\r\n\r\n    box-shadow: .5rem .5rem 1rem rgba(128, 128, 128, 0.5);\r\n\r\n    background-color: rgb(255, 255, 100);\r\n}\r\n\r\ndiv.note-container .note-title{\r\n    padding: 0 .8rem;\r\n\r\n    font-size: 1.6rem;\r\n    font-style: italic;\r\n    font-weight: bold;\r\n}\r\n\r\ndiv.note-container .note-body{\r\n    padding: 0 1.8rem;\r\n}\r\n\r\ndiv.note-container button.note-del-btn{\r\n    position: absolute;\r\n\r\n    background-color: inherit;\r\n\r\n    font-size: 2.2rem;\r\n    font-weight: bold;\r\n\r\n    top: 2%;\r\n    right: 3%;\r\n\r\n\r\n    color: grey;\r\n\r\n    cursor: pointer;\r\n}\r\n\r\ndiv.note-container button.note-del-btn:hover{\r\n    color: red;\r\n}\r\n\r\n\r\n\r\n/* #date-range-specifier{\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    width: min-content;\r\n} */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Pages/CSS/Main/outer-card.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Pages/CSS/Main/outer-card.css ***!
  \*********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#outer-card{
    --outer-card-border-radius: 3rem;

    position: relative;


    width: 100rem;
    height: 70rem;

    background-color: whitesmoke;

    border-radius: var(--outer-card-border-radius);

    box-shadow: 0rem 0rem 1rem rgba(0, 0, 0, 0.3);

    display: grid;
    grid-template-columns: 32rem 1fr;
    grid-template-rows: 1fr;
    

}


button#add-button{
    --plus-large: 50%;
    --plus-small: 10%;

    position: absolute;

    top: -4rem;
    right: -4rem;

    background-color: rgb(255, 141, 160);

    box-shadow: .8rem .8rem 0.8rem rgba(59, 59, 59, 0.5);

    width: 8rem;
    aspect-ratio: 1;

    border-radius: 50%;

    display: grid;
    place-items: center;

    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    cursor: pointer;

    transition: background-color 500ms linear;

}




button#add-button:hover{
    background-color: rgb(255, 113, 137);
}

button#add-button:active{
    transform: scale(0.95);
}


button#add-button::before{
    content: '';

    grid-column: 1 / 1;
    grid-row: 1 / 1;

    width: var(--plus-large);
    height: var(--plus-small);

    border-radius: .5rem;

    background-color: white;
}

button#add-button::after{
    content: '';

    grid-column: 1 / 1;
    grid-row: 1 / 1;

    width: var(--plus-small);
    height: var(--plus-large);

    border-radius: .5rem;

    background-color: white;
}`, "",{"version":3,"sources":["webpack://./src/Pages/CSS/Main/outer-card.css"],"names":[],"mappings":"AAAA;IACI,gCAAgC;;IAEhC,kBAAkB;;;IAGlB,aAAa;IACb,aAAa;;IAEb,4BAA4B;;IAE5B,8CAA8C;;IAE9C,6CAA6C;;IAE7C,aAAa;IACb,gCAAgC;IAChC,uBAAuB;;;AAG3B;;;AAGA;IACI,iBAAiB;IACjB,iBAAiB;;IAEjB,kBAAkB;;IAElB,UAAU;IACV,YAAY;;IAEZ,oCAAoC;;IAEpC,oDAAoD;;IAEpD,WAAW;IACX,eAAe;;IAEf,kBAAkB;;IAElB,aAAa;IACb,mBAAmB;;IAEnB,0BAA0B;IAC1B,uBAAuB;;IAEvB,eAAe;;IAEf,yCAAyC;;AAE7C;;;;;AAKA;IACI,oCAAoC;AACxC;;AAEA;IACI,sBAAsB;AAC1B;;;AAGA;IACI,WAAW;;IAEX,kBAAkB;IAClB,eAAe;;IAEf,wBAAwB;IACxB,yBAAyB;;IAEzB,oBAAoB;;IAEpB,uBAAuB;AAC3B;;AAEA;IACI,WAAW;;IAEX,kBAAkB;IAClB,eAAe;;IAEf,wBAAwB;IACxB,yBAAyB;;IAEzB,oBAAoB;;IAEpB,uBAAuB;AAC3B","sourcesContent":["#outer-card{\r\n    --outer-card-border-radius: 3rem;\r\n\r\n    position: relative;\r\n\r\n\r\n    width: 100rem;\r\n    height: 70rem;\r\n\r\n    background-color: whitesmoke;\r\n\r\n    border-radius: var(--outer-card-border-radius);\r\n\r\n    box-shadow: 0rem 0rem 1rem rgba(0, 0, 0, 0.3);\r\n\r\n    display: grid;\r\n    grid-template-columns: 32rem 1fr;\r\n    grid-template-rows: 1fr;\r\n    \r\n\r\n}\r\n\r\n\r\nbutton#add-button{\r\n    --plus-large: 50%;\r\n    --plus-small: 10%;\r\n\r\n    position: absolute;\r\n\r\n    top: -4rem;\r\n    right: -4rem;\r\n\r\n    background-color: rgb(255, 141, 160);\r\n\r\n    box-shadow: .8rem .8rem 0.8rem rgba(59, 59, 59, 0.5);\r\n\r\n    width: 8rem;\r\n    aspect-ratio: 1;\r\n\r\n    border-radius: 50%;\r\n\r\n    display: grid;\r\n    place-items: center;\r\n\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 1fr;\r\n\r\n    cursor: pointer;\r\n\r\n    transition: background-color 500ms linear;\r\n\r\n}\r\n\r\n\r\n\r\n\r\nbutton#add-button:hover{\r\n    background-color: rgb(255, 113, 137);\r\n}\r\n\r\nbutton#add-button:active{\r\n    transform: scale(0.95);\r\n}\r\n\r\n\r\nbutton#add-button::before{\r\n    content: '';\r\n\r\n    grid-column: 1 / 1;\r\n    grid-row: 1 / 1;\r\n\r\n    width: var(--plus-large);\r\n    height: var(--plus-small);\r\n\r\n    border-radius: .5rem;\r\n\r\n    background-color: white;\r\n}\r\n\r\nbutton#add-button::after{\r\n    content: '';\r\n\r\n    grid-column: 1 / 1;\r\n    grid-row: 1 / 1;\r\n\r\n    width: var(--plus-small);\r\n    height: var(--plus-large);\r\n\r\n    border-radius: .5rem;\r\n\r\n    background-color: white;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Pages/CSS/style.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Pages/CSS/style.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
    font-size: 62.5%;

    --dark-grey: rgb(59, 59, 59);
    --light-grey: rgb(146, 146, 146);
}


*,
*::before,
*::after{
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;

    color: inherit;
    font-size: inherit;
    font-family: inherit;

    box-sizing: border-box;
}


html,
body{
    font-family: Andale Mono, monospace;

    font-size: 1.6rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgb(184, 204, 184);
    color: black;

    width: 100dvw;
    height: 100dvh;
}


[data-page="selected"],
[data-page="selected"]{
    background-color: rgba(32, 147, 255, 0.3) !important;
}`, "",{"version":3,"sources":["webpack://./src/Pages/CSS/style.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;;IAEhB,4BAA4B;IAC5B,gCAAgC;AACpC;;;AAGA;;;IAGI,SAAS;IACT,UAAU;IACV,SAAS;IACT,UAAU;;IAEV,cAAc;IACd,kBAAkB;IAClB,oBAAoB;;IAEpB,sBAAsB;AAC1B;;;AAGA;;IAEI,mCAAmC;;IAEnC,iBAAiB;;IAEjB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;;IAEvB,oCAAoC;IACpC,YAAY;;IAEZ,aAAa;IACb,cAAc;AAClB;;;AAGA;;IAEI,oDAAoD;AACxD","sourcesContent":[":root{\r\n    font-size: 62.5%;\r\n\r\n    --dark-grey: rgb(59, 59, 59);\r\n    --light-grey: rgb(146, 146, 146);\r\n}\r\n\r\n\r\n*,\r\n*::before,\r\n*::after{\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    outline: 0;\r\n\r\n    color: inherit;\r\n    font-size: inherit;\r\n    font-family: inherit;\r\n\r\n    box-sizing: border-box;\r\n}\r\n\r\n\r\nhtml,\r\nbody{\r\n    font-family: Andale Mono, monospace;\r\n\r\n    font-size: 1.6rem;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    background-color: rgb(184, 204, 184);\r\n    color: black;\r\n\r\n    width: 100dvw;\r\n    height: 100dvh;\r\n}\r\n\r\n\r\n[data-page=\"selected\"],\r\n[data-page=\"selected\"]{\r\n    background-color: rgba(32, 147, 255, 0.3) !important;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/is-what/dist/index.js":
/*!********************************************!*\
  !*** ./node_modules/is-what/dist/index.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getType: () => (/* binding */ getType),
/* harmony export */   isAnyObject: () => (/* binding */ isAnyObject),
/* harmony export */   isArray: () => (/* binding */ isArray),
/* harmony export */   isBlob: () => (/* binding */ isBlob),
/* harmony export */   isBoolean: () => (/* binding */ isBoolean),
/* harmony export */   isDate: () => (/* binding */ isDate),
/* harmony export */   isEmptyArray: () => (/* binding */ isEmptyArray),
/* harmony export */   isEmptyObject: () => (/* binding */ isEmptyObject),
/* harmony export */   isEmptyString: () => (/* binding */ isEmptyString),
/* harmony export */   isError: () => (/* binding */ isError),
/* harmony export */   isFile: () => (/* binding */ isFile),
/* harmony export */   isFullArray: () => (/* binding */ isFullArray),
/* harmony export */   isFullObject: () => (/* binding */ isFullObject),
/* harmony export */   isFullString: () => (/* binding */ isFullString),
/* harmony export */   isFunction: () => (/* binding */ isFunction),
/* harmony export */   isInstanceOf: () => (/* binding */ isInstanceOf),
/* harmony export */   isMap: () => (/* binding */ isMap),
/* harmony export */   isNaNValue: () => (/* binding */ isNaNValue),
/* harmony export */   isNegativeNumber: () => (/* binding */ isNegativeNumber),
/* harmony export */   isNull: () => (/* binding */ isNull),
/* harmony export */   isNullOrUndefined: () => (/* binding */ isNullOrUndefined),
/* harmony export */   isNumber: () => (/* binding */ isNumber),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   isObjectLike: () => (/* binding */ isObjectLike),
/* harmony export */   isOneOf: () => (/* binding */ isOneOf),
/* harmony export */   isPlainObject: () => (/* binding */ isPlainObject),
/* harmony export */   isPositiveNumber: () => (/* binding */ isPositiveNumber),
/* harmony export */   isPrimitive: () => (/* binding */ isPrimitive),
/* harmony export */   isPromise: () => (/* binding */ isPromise),
/* harmony export */   isRegExp: () => (/* binding */ isRegExp),
/* harmony export */   isSet: () => (/* binding */ isSet),
/* harmony export */   isString: () => (/* binding */ isString),
/* harmony export */   isSymbol: () => (/* binding */ isSymbol),
/* harmony export */   isType: () => (/* binding */ isType),
/* harmony export */   isUndefined: () => (/* binding */ isUndefined),
/* harmony export */   isWeakMap: () => (/* binding */ isWeakMap),
/* harmony export */   isWeakSet: () => (/* binding */ isWeakSet)
/* harmony export */ });
function getType(payload) {
  return Object.prototype.toString.call(payload).slice(8, -1);
}

function isAnyObject(payload) {
  return getType(payload) === "Object";
}

function isArray(payload) {
  return getType(payload) === "Array";
}

function isBlob(payload) {
  return getType(payload) === "Blob";
}

function isBoolean(payload) {
  return getType(payload) === "Boolean";
}

function isDate(payload) {
  return getType(payload) === "Date" && !isNaN(payload);
}

function isEmptyArray(payload) {
  return isArray(payload) && payload.length === 0;
}

function isPlainObject(payload) {
  if (getType(payload) !== "Object")
    return false;
  const prototype = Object.getPrototypeOf(payload);
  return !!prototype && prototype.constructor === Object && prototype === Object.prototype;
}

function isEmptyObject(payload) {
  return isPlainObject(payload) && Object.keys(payload).length === 0;
}

function isEmptyString(payload) {
  return payload === "";
}

function isError(payload) {
  return getType(payload) === "Error" || payload instanceof Error;
}

function isFile(payload) {
  return getType(payload) === "File";
}

function isFullArray(payload) {
  return isArray(payload) && payload.length > 0;
}

function isFullObject(payload) {
  return isPlainObject(payload) && Object.keys(payload).length > 0;
}

function isString(payload) {
  return getType(payload) === "String";
}

function isFullString(payload) {
  return isString(payload) && payload !== "";
}

function isFunction(payload) {
  return typeof payload === "function";
}

function isType(payload, type) {
  if (!(type instanceof Function)) {
    throw new TypeError("Type must be a function");
  }
  if (!Object.prototype.hasOwnProperty.call(type, "prototype")) {
    throw new TypeError("Type is not a class");
  }
  const name = type.name;
  return getType(payload) === name || Boolean(payload && payload.constructor === type);
}

function isInstanceOf(value, classOrClassName) {
  if (typeof classOrClassName === "function") {
    for (let p = value; p; p = Object.getPrototypeOf(p)) {
      if (isType(p, classOrClassName)) {
        return true;
      }
    }
    return false;
  } else {
    for (let p = value; p; p = Object.getPrototypeOf(p)) {
      if (getType(p) === classOrClassName) {
        return true;
      }
    }
    return false;
  }
}

function isMap(payload) {
  return getType(payload) === "Map";
}

function isNaNValue(payload) {
  return getType(payload) === "Number" && isNaN(payload);
}

function isNumber(payload) {
  return getType(payload) === "Number" && !isNaN(payload);
}

function isNegativeNumber(payload) {
  return isNumber(payload) && payload < 0;
}

function isNull(payload) {
  return getType(payload) === "Null";
}

function isOneOf(a, b, c, d, e) {
  return (value) => a(value) || b(value) || !!c && c(value) || !!d && d(value) || !!e && e(value);
}

function isUndefined(payload) {
  return getType(payload) === "Undefined";
}

const isNullOrUndefined = isOneOf(isNull, isUndefined);

function isObject(payload) {
  return isPlainObject(payload);
}

function isObjectLike(payload) {
  return isAnyObject(payload);
}

function isPositiveNumber(payload) {
  return isNumber(payload) && payload > 0;
}

function isSymbol(payload) {
  return getType(payload) === "Symbol";
}

function isPrimitive(payload) {
  return isBoolean(payload) || isNull(payload) || isUndefined(payload) || isNumber(payload) || isString(payload) || isSymbol(payload);
}

function isPromise(payload) {
  return getType(payload) === "Promise";
}

function isRegExp(payload) {
  return getType(payload) === "RegExp";
}

function isSet(payload) {
  return getType(payload) === "Set";
}

function isWeakMap(payload) {
  return getType(payload) === "WeakMap";
}

function isWeakSet(payload) {
  return getType(payload) === "WeakSet";
}




/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/superjson/dist/accessDeep.js":
/*!***************************************************!*\
  !*** ./node_modules/superjson/dist/accessDeep.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDeep: () => (/* binding */ getDeep),
/* harmony export */   setDeep: () => (/* binding */ setDeep)
/* harmony export */ });
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is.js */ "./node_modules/superjson/dist/is.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ "./node_modules/superjson/dist/util.js");


const getNthKey = (value, n) => {
    if (n > value.size)
        throw new Error('index out of bounds');
    const keys = value.keys();
    while (n > 0) {
        keys.next();
        n--;
    }
    return keys.next().value;
};
function validatePath(path) {
    if ((0,_util_js__WEBPACK_IMPORTED_MODULE_1__.includes)(path, '__proto__')) {
        throw new Error('__proto__ is not allowed as a property');
    }
    if ((0,_util_js__WEBPACK_IMPORTED_MODULE_1__.includes)(path, 'prototype')) {
        throw new Error('prototype is not allowed as a property');
    }
    if ((0,_util_js__WEBPACK_IMPORTED_MODULE_1__.includes)(path, 'constructor')) {
        throw new Error('constructor is not allowed as a property');
    }
}
const getDeep = (object, path) => {
    validatePath(path);
    for (let i = 0; i < path.length; i++) {
        const key = path[i];
        if ((0,_is_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(object)) {
            object = getNthKey(object, +key);
        }
        else if ((0,_is_js__WEBPACK_IMPORTED_MODULE_0__.isMap)(object)) {
            const row = +key;
            const type = +path[++i] === 0 ? 'key' : 'value';
            const keyOfRow = getNthKey(object, row);
            switch (type) {
                case 'key':
                    object = keyOfRow;
                    break;
                case 'value':
                    object = object.get(keyOfRow);
                    break;
            }
        }
        else {
            object = object[key];
        }
    }
    return object;
};
const setDeep = (object, path, mapper) => {
    validatePath(path);
    if (path.length === 0) {
        return mapper(object);
    }
    let parent = object;
    for (let i = 0; i < path.length - 1; i++) {
        const key = path[i];
        if ((0,_is_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(parent)) {
            const index = +key;
            parent = parent[index];
        }
        else if ((0,_is_js__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(parent)) {
            parent = parent[key];
        }
        else if ((0,_is_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(parent)) {
            const row = +key;
            parent = getNthKey(parent, row);
        }
        else if ((0,_is_js__WEBPACK_IMPORTED_MODULE_0__.isMap)(parent)) {
            const isEnd = i === path.length - 2;
            if (isEnd) {
                break;
            }
            const row = +key;
            const type = +path[++i] === 0 ? 'key' : 'value';
            const keyOfRow = getNthKey(parent, row);
            switch (type) {
                case 'key':
                    parent = keyOfRow;
                    break;
                case 'value':
                    parent = parent.get(keyOfRow);
                    break;
            }
        }
    }
    const lastKey = path[path.length - 1];
    if ((0,_is_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(parent)) {
        parent[+lastKey] = mapper(parent[+lastKey]);
    }
    else if ((0,_is_js__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(parent)) {
        parent[lastKey] = mapper(parent[lastKey]);
    }
    if ((0,_is_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(parent)) {
        const oldValue = getNthKey(parent, +lastKey);
        const newValue = mapper(oldValue);
        if (oldValue !== newValue) {
            parent.delete(oldValue);
            parent.add(newValue);
        }
    }
    if ((0,_is_js__WEBPACK_IMPORTED_MODULE_0__.isMap)(parent)) {
        const row = +path[path.length - 2];
        const keyToRow = getNthKey(parent, row);
        const type = +lastKey === 0 ? 'key' : 'value';
        switch (type) {
            case 'key': {
                const newKey = mapper(keyToRow);
                parent.set(newKey, parent.get(keyToRow));
                if (newKey !== keyToRow) {
                    parent.delete(keyToRow);
                }
                break;
            }
            case 'value': {
                parent.set(keyToRow, mapper(parent.get(keyToRow)));
                break;
            }
        }
    }
    return object;
};
//# sourceMappingURL=accessDeep.js.map

/***/ }),

/***/ "./node_modules/superjson/dist/class-registry.js":
/*!*******************************************************!*\
  !*** ./node_modules/superjson/dist/class-registry.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClassRegistry: () => (/* binding */ ClassRegistry)
/* harmony export */ });
/* harmony import */ var _registry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registry.js */ "./node_modules/superjson/dist/registry.js");

class ClassRegistry extends _registry_js__WEBPACK_IMPORTED_MODULE_0__.Registry {
    constructor() {
        super(c => c.name);
        this.classToAllowedProps = new Map();
    }
    register(value, options) {
        if (typeof options === 'object') {
            if (options.allowProps) {
                this.classToAllowedProps.set(value, options.allowProps);
            }
            super.register(value, options.identifier);
        }
        else {
            super.register(value, options);
        }
    }
    getAllowedProps(value) {
        return this.classToAllowedProps.get(value);
    }
}
//# sourceMappingURL=class-registry.js.map

/***/ }),

/***/ "./node_modules/superjson/dist/custom-transformer-registry.js":
/*!********************************************************************!*\
  !*** ./node_modules/superjson/dist/custom-transformer-registry.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomTransformerRegistry: () => (/* binding */ CustomTransformerRegistry)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./node_modules/superjson/dist/util.js");

class CustomTransformerRegistry {
    constructor() {
        this.transfomers = {};
    }
    register(transformer) {
        this.transfomers[transformer.name] = transformer;
    }
    findApplicable(v) {
        return (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.find)(this.transfomers, transformer => transformer.isApplicable(v));
    }
    findByName(name) {
        return this.transfomers[name];
    }
}
//# sourceMappingURL=custom-transformer-registry.js.map

/***/ }),

/***/ "./node_modules/superjson/dist/double-indexed-kv.js":
/*!**********************************************************!*\
  !*** ./node_modules/superjson/dist/double-indexed-kv.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DoubleIndexedKV: () => (/* binding */ DoubleIndexedKV)
/* harmony export */ });
class DoubleIndexedKV {
    constructor() {
        this.keyToValue = new Map();
        this.valueToKey = new Map();
    }
    set(key, value) {
        this.keyToValue.set(key, value);
        this.valueToKey.set(value, key);
    }
    getByKey(key) {
        return this.keyToValue.get(key);
    }
    getByValue(value) {
        return this.valueToKey.get(value);
    }
    clear() {
        this.keyToValue.clear();
        this.valueToKey.clear();
    }
}
//# sourceMappingURL=double-indexed-kv.js.map

/***/ }),

/***/ "./node_modules/superjson/dist/index.js":
/*!**********************************************!*\
  !*** ./node_modules/superjson/dist/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SuperJSON: () => (/* binding */ SuperJSON),
/* harmony export */   allowErrorProps: () => (/* binding */ allowErrorProps),
/* harmony export */   "default": () => (/* binding */ SuperJSON),
/* harmony export */   deserialize: () => (/* binding */ deserialize),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   registerClass: () => (/* binding */ registerClass),
/* harmony export */   registerCustom: () => (/* binding */ registerCustom),
/* harmony export */   registerSymbol: () => (/* binding */ registerSymbol),
/* harmony export */   serialize: () => (/* binding */ serialize),
/* harmony export */   stringify: () => (/* binding */ stringify)
/* harmony export */ });
/* harmony import */ var _class_registry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class-registry.js */ "./node_modules/superjson/dist/class-registry.js");
/* harmony import */ var _registry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registry.js */ "./node_modules/superjson/dist/registry.js");
/* harmony import */ var _custom_transformer_registry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-transformer-registry.js */ "./node_modules/superjson/dist/custom-transformer-registry.js");
/* harmony import */ var _plainer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plainer.js */ "./node_modules/superjson/dist/plainer.js");
/* harmony import */ var copy_anything__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! copy-anything */ "./node_modules/copy-anything/dist/index.js");





class SuperJSON {
    /**
     * @param dedupeReferentialEqualities  If true, SuperJSON will make sure only one instance of referentially equal objects are serialized and the rest are replaced with `null`.
     */
    constructor({ dedupe = false, } = {}) {
        this.classRegistry = new _class_registry_js__WEBPACK_IMPORTED_MODULE_0__.ClassRegistry();
        this.symbolRegistry = new _registry_js__WEBPACK_IMPORTED_MODULE_1__.Registry(s => s.description ?? '');
        this.customTransformerRegistry = new _custom_transformer_registry_js__WEBPACK_IMPORTED_MODULE_2__.CustomTransformerRegistry();
        this.allowedErrorProps = [];
        this.dedupe = dedupe;
    }
    serialize(object) {
        const identities = new Map();
        const output = (0,_plainer_js__WEBPACK_IMPORTED_MODULE_3__.walker)(object, identities, this, this.dedupe);
        const res = {
            json: output.transformedValue,
        };
        if (output.annotations) {
            res.meta = {
                ...res.meta,
                values: output.annotations,
            };
        }
        const equalityAnnotations = (0,_plainer_js__WEBPACK_IMPORTED_MODULE_3__.generateReferentialEqualityAnnotations)(identities, this.dedupe);
        if (equalityAnnotations) {
            res.meta = {
                ...res.meta,
                referentialEqualities: equalityAnnotations,
            };
        }
        return res;
    }
    deserialize(payload) {
        const { json, meta } = payload;
        let result = (0,copy_anything__WEBPACK_IMPORTED_MODULE_4__.copy)(json);
        if (meta?.values) {
            result = (0,_plainer_js__WEBPACK_IMPORTED_MODULE_3__.applyValueAnnotations)(result, meta.values, this);
        }
        if (meta?.referentialEqualities) {
            result = (0,_plainer_js__WEBPACK_IMPORTED_MODULE_3__.applyReferentialEqualityAnnotations)(result, meta.referentialEqualities);
        }
        return result;
    }
    stringify(object) {
        return JSON.stringify(this.serialize(object));
    }
    parse(string) {
        return this.deserialize(JSON.parse(string));
    }
    registerClass(v, options) {
        this.classRegistry.register(v, options);
    }
    registerSymbol(v, identifier) {
        this.symbolRegistry.register(v, identifier);
    }
    registerCustom(transformer, name) {
        this.customTransformerRegistry.register({
            name,
            ...transformer,
        });
    }
    allowErrorProps(...props) {
        this.allowedErrorProps.push(...props);
    }
}
SuperJSON.defaultInstance = new SuperJSON();
SuperJSON.serialize = SuperJSON.defaultInstance.serialize.bind(SuperJSON.defaultInstance);
SuperJSON.deserialize = SuperJSON.defaultInstance.deserialize.bind(SuperJSON.defaultInstance);
SuperJSON.stringify = SuperJSON.defaultInstance.stringify.bind(SuperJSON.defaultInstance);
SuperJSON.parse = SuperJSON.defaultInstance.parse.bind(SuperJSON.defaultInstance);
SuperJSON.registerClass = SuperJSON.defaultInstance.registerClass.bind(SuperJSON.defaultInstance);
SuperJSON.registerSymbol = SuperJSON.defaultInstance.registerSymbol.bind(SuperJSON.defaultInstance);
SuperJSON.registerCustom = SuperJSON.defaultInstance.registerCustom.bind(SuperJSON.defaultInstance);
SuperJSON.allowErrorProps = SuperJSON.defaultInstance.allowErrorProps.bind(SuperJSON.defaultInstance);

const serialize = SuperJSON.serialize;
const deserialize = SuperJSON.deserialize;
const stringify = SuperJSON.stringify;
const parse = SuperJSON.parse;
const registerClass = SuperJSON.registerClass;
const registerCustom = SuperJSON.registerCustom;
const registerSymbol = SuperJSON.registerSymbol;
const allowErrorProps = SuperJSON.allowErrorProps;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/superjson/dist/is.js":
/*!*******************************************!*\
  !*** ./node_modules/superjson/dist/is.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isArray: () => (/* binding */ isArray),
/* harmony export */   isBigint: () => (/* binding */ isBigint),
/* harmony export */   isBoolean: () => (/* binding */ isBoolean),
/* harmony export */   isDate: () => (/* binding */ isDate),
/* harmony export */   isEmptyObject: () => (/* binding */ isEmptyObject),
/* harmony export */   isError: () => (/* binding */ isError),
/* harmony export */   isInfinite: () => (/* binding */ isInfinite),
/* harmony export */   isMap: () => (/* binding */ isMap),
/* harmony export */   isNaNValue: () => (/* binding */ isNaNValue),
/* harmony export */   isNull: () => (/* binding */ isNull),
/* harmony export */   isNumber: () => (/* binding */ isNumber),
/* harmony export */   isPlainObject: () => (/* binding */ isPlainObject),
/* harmony export */   isPrimitive: () => (/* binding */ isPrimitive),
/* harmony export */   isRegExp: () => (/* binding */ isRegExp),
/* harmony export */   isSet: () => (/* binding */ isSet),
/* harmony export */   isString: () => (/* binding */ isString),
/* harmony export */   isSymbol: () => (/* binding */ isSymbol),
/* harmony export */   isTypedArray: () => (/* binding */ isTypedArray),
/* harmony export */   isURL: () => (/* binding */ isURL),
/* harmony export */   isUndefined: () => (/* binding */ isUndefined)
/* harmony export */ });
const getType = (payload) => Object.prototype.toString.call(payload).slice(8, -1);
const isUndefined = (payload) => typeof payload === 'undefined';
const isNull = (payload) => payload === null;
const isPlainObject = (payload) => {
    if (typeof payload !== 'object' || payload === null)
        return false;
    if (payload === Object.prototype)
        return false;
    if (Object.getPrototypeOf(payload) === null)
        return true;
    return Object.getPrototypeOf(payload) === Object.prototype;
};
const isEmptyObject = (payload) => isPlainObject(payload) && Object.keys(payload).length === 0;
const isArray = (payload) => Array.isArray(payload);
const isString = (payload) => typeof payload === 'string';
const isNumber = (payload) => typeof payload === 'number' && !isNaN(payload);
const isBoolean = (payload) => typeof payload === 'boolean';
const isRegExp = (payload) => payload instanceof RegExp;
const isMap = (payload) => payload instanceof Map;
const isSet = (payload) => payload instanceof Set;
const isSymbol = (payload) => getType(payload) === 'Symbol';
const isDate = (payload) => payload instanceof Date && !isNaN(payload.valueOf());
const isError = (payload) => payload instanceof Error;
const isNaNValue = (payload) => typeof payload === 'number' && isNaN(payload);
const isPrimitive = (payload) => isBoolean(payload) ||
    isNull(payload) ||
    isUndefined(payload) ||
    isNumber(payload) ||
    isString(payload) ||
    isSymbol(payload);
const isBigint = (payload) => typeof payload === 'bigint';
const isInfinite = (payload) => payload === Infinity || payload === -Infinity;
const isTypedArray = (payload) => ArrayBuffer.isView(payload) && !(payload instanceof DataView);
const isURL = (payload) => payload instanceof URL;
//# sourceMappingURL=is.js.map

/***/ }),

/***/ "./node_modules/superjson/dist/pathstringifier.js":
/*!********************************************************!*\
  !*** ./node_modules/superjson/dist/pathstringifier.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   escapeKey: () => (/* binding */ escapeKey),
/* harmony export */   parsePath: () => (/* binding */ parsePath),
/* harmony export */   stringifyPath: () => (/* binding */ stringifyPath)
/* harmony export */ });
const escapeKey = (key) => key.replace(/\./g, '\\.');
const stringifyPath = (path) => path
    .map(String)
    .map(escapeKey)
    .join('.');
const parsePath = (string) => {
    const result = [];
    let segment = '';
    for (let i = 0; i < string.length; i++) {
        let char = string.charAt(i);
        const isEscapedDot = char === '\\' && string.charAt(i + 1) === '.';
        if (isEscapedDot) {
            segment += '.';
            i++;
            continue;
        }
        const isEndOfSegment = char === '.';
        if (isEndOfSegment) {
            result.push(segment);
            segment = '';
            continue;
        }
        segment += char;
    }
    const lastSegment = segment;
    result.push(lastSegment);
    return result;
};
//# sourceMappingURL=pathstringifier.js.map

/***/ }),

/***/ "./node_modules/superjson/dist/plainer.js":
/*!************************************************!*\
  !*** ./node_modules/superjson/dist/plainer.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyReferentialEqualityAnnotations: () => (/* binding */ applyReferentialEqualityAnnotations),
/* harmony export */   applyValueAnnotations: () => (/* binding */ applyValueAnnotations),
/* harmony export */   generateReferentialEqualityAnnotations: () => (/* binding */ generateReferentialEqualityAnnotations),
/* harmony export */   walker: () => (/* binding */ walker)
/* harmony export */ });
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is.js */ "./node_modules/superjson/dist/is.js");
/* harmony import */ var _pathstringifier_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pathstringifier.js */ "./node_modules/superjson/dist/pathstringifier.js");
/* harmony import */ var _transformer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transformer.js */ "./node_modules/superjson/dist/transformer.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util.js */ "./node_modules/superjson/dist/util.js");
/* harmony import */ var _accessDeep_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accessDeep.js */ "./node_modules/superjson/dist/accessDeep.js");






function traverse(tree, walker, origin = []) {
    if (!tree) {
        return;
    }
    if (!(0,_is_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(tree)) {
        (0,_util_js__WEBPACK_IMPORTED_MODULE_3__.forEach)(tree, (subtree, key) => traverse(subtree, walker, [...origin, ...(0,_pathstringifier_js__WEBPACK_IMPORTED_MODULE_1__.parsePath)(key)]));
        return;
    }
    const [nodeValue, children] = tree;
    if (children) {
        (0,_util_js__WEBPACK_IMPORTED_MODULE_3__.forEach)(children, (child, key) => {
            traverse(child, walker, [...origin, ...(0,_pathstringifier_js__WEBPACK_IMPORTED_MODULE_1__.parsePath)(key)]);
        });
    }
    walker(nodeValue, origin);
}
function applyValueAnnotations(plain, annotations, superJson) {
    traverse(annotations, (type, path) => {
        plain = (0,_accessDeep_js__WEBPACK_IMPORTED_MODULE_4__.setDeep)(plain, path, v => (0,_transformer_js__WEBPACK_IMPORTED_MODULE_2__.untransformValue)(v, type, superJson));
    });
    return plain;
}
function applyReferentialEqualityAnnotations(plain, annotations) {
    function apply(identicalPaths, path) {
        const object = (0,_accessDeep_js__WEBPACK_IMPORTED_MODULE_4__.getDeep)(plain, (0,_pathstringifier_js__WEBPACK_IMPORTED_MODULE_1__.parsePath)(path));
        identicalPaths.map(_pathstringifier_js__WEBPACK_IMPORTED_MODULE_1__.parsePath).forEach(identicalObjectPath => {
            plain = (0,_accessDeep_js__WEBPACK_IMPORTED_MODULE_4__.setDeep)(plain, identicalObjectPath, () => object);
        });
    }
    if ((0,_is_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(annotations)) {
        const [root, other] = annotations;
        root.forEach(identicalPath => {
            plain = (0,_accessDeep_js__WEBPACK_IMPORTED_MODULE_4__.setDeep)(plain, (0,_pathstringifier_js__WEBPACK_IMPORTED_MODULE_1__.parsePath)(identicalPath), () => plain);
        });
        if (other) {
            (0,_util_js__WEBPACK_IMPORTED_MODULE_3__.forEach)(other, apply);
        }
    }
    else {
        (0,_util_js__WEBPACK_IMPORTED_MODULE_3__.forEach)(annotations, apply);
    }
    return plain;
}
const isDeep = (object, superJson) => (0,_is_js__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(object) ||
    (0,_is_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(object) ||
    (0,_is_js__WEBPACK_IMPORTED_MODULE_0__.isMap)(object) ||
    (0,_is_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(object) ||
    (0,_transformer_js__WEBPACK_IMPORTED_MODULE_2__.isInstanceOfRegisteredClass)(object, superJson);
function addIdentity(object, path, identities) {
    const existingSet = identities.get(object);
    if (existingSet) {
        existingSet.push(path);
    }
    else {
        identities.set(object, [path]);
    }
}
function generateReferentialEqualityAnnotations(identitites, dedupe) {
    const result = {};
    let rootEqualityPaths = undefined;
    identitites.forEach(paths => {
        if (paths.length <= 1) {
            return;
        }
        // if we're not deduping, all of these objects continue existing.
        // putting the shortest path first makes it easier to parse for humans
        // if we're deduping though, only the first entry will still exist, so we can't do this optimisation.
        if (!dedupe) {
            paths = paths
                .map(path => path.map(String))
                .sort((a, b) => a.length - b.length);
        }
        const [representativePath, ...identicalPaths] = paths;
        if (representativePath.length === 0) {
            rootEqualityPaths = identicalPaths.map(_pathstringifier_js__WEBPACK_IMPORTED_MODULE_1__.stringifyPath);
        }
        else {
            result[(0,_pathstringifier_js__WEBPACK_IMPORTED_MODULE_1__.stringifyPath)(representativePath)] = identicalPaths.map(_pathstringifier_js__WEBPACK_IMPORTED_MODULE_1__.stringifyPath);
        }
    });
    if (rootEqualityPaths) {
        if ((0,_is_js__WEBPACK_IMPORTED_MODULE_0__.isEmptyObject)(result)) {
            return [rootEqualityPaths];
        }
        else {
            return [rootEqualityPaths, result];
        }
    }
    else {
        return (0,_is_js__WEBPACK_IMPORTED_MODULE_0__.isEmptyObject)(result) ? undefined : result;
    }
}
const walker = (object, identities, superJson, dedupe, path = [], objectsInThisPath = [], seenObjects = new Map()) => {
    const primitive = (0,_is_js__WEBPACK_IMPORTED_MODULE_0__.isPrimitive)(object);
    if (!primitive) {
        addIdentity(object, path, identities);
        const seen = seenObjects.get(object);
        if (seen) {
            // short-circuit result if we've seen this object before
            return dedupe
                ? {
                    transformedValue: null,
                }
                : seen;
        }
    }
    if (!isDeep(object, superJson)) {
        const transformed = (0,_transformer_js__WEBPACK_IMPORTED_MODULE_2__.transformValue)(object, superJson);
        const result = transformed
            ? {
                transformedValue: transformed.value,
                annotations: [transformed.type],
            }
            : {
                transformedValue: object,
            };
        if (!primitive) {
            seenObjects.set(object, result);
        }
        return result;
    }
    if ((0,_util_js__WEBPACK_IMPORTED_MODULE_3__.includes)(objectsInThisPath, object)) {
        // prevent circular references
        return {
            transformedValue: null,
        };
    }
    const transformationResult = (0,_transformer_js__WEBPACK_IMPORTED_MODULE_2__.transformValue)(object, superJson);
    const transformed = transformationResult?.value ?? object;
    const transformedValue = (0,_is_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(transformed) ? [] : {};
    const innerAnnotations = {};
    (0,_util_js__WEBPACK_IMPORTED_MODULE_3__.forEach)(transformed, (value, index) => {
        if (index === '__proto__' ||
            index === 'constructor' ||
            index === 'prototype') {
            throw new Error(`Detected property ${index}. This is a prototype pollution risk, please remove it from your object.`);
        }
        const recursiveResult = walker(value, identities, superJson, dedupe, [...path, index], [...objectsInThisPath, object], seenObjects);
        transformedValue[index] = recursiveResult.transformedValue;
        if ((0,_is_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(recursiveResult.annotations)) {
            innerAnnotations[index] = recursiveResult.annotations;
        }
        else if ((0,_is_js__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(recursiveResult.annotations)) {
            (0,_util_js__WEBPACK_IMPORTED_MODULE_3__.forEach)(recursiveResult.annotations, (tree, key) => {
                innerAnnotations[(0,_pathstringifier_js__WEBPACK_IMPORTED_MODULE_1__.escapeKey)(index) + '.' + key] = tree;
            });
        }
    });
    const result = (0,_is_js__WEBPACK_IMPORTED_MODULE_0__.isEmptyObject)(innerAnnotations)
        ? {
            transformedValue,
            annotations: !!transformationResult
                ? [transformationResult.type]
                : undefined,
        }
        : {
            transformedValue,
            annotations: !!transformationResult
                ? [transformationResult.type, innerAnnotations]
                : innerAnnotations,
        };
    if (!primitive) {
        seenObjects.set(object, result);
    }
    return result;
};
//# sourceMappingURL=plainer.js.map

/***/ }),

/***/ "./node_modules/superjson/dist/registry.js":
/*!*************************************************!*\
  !*** ./node_modules/superjson/dist/registry.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Registry: () => (/* binding */ Registry)
/* harmony export */ });
/* harmony import */ var _double_indexed_kv_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./double-indexed-kv.js */ "./node_modules/superjson/dist/double-indexed-kv.js");

class Registry {
    constructor(generateIdentifier) {
        this.generateIdentifier = generateIdentifier;
        this.kv = new _double_indexed_kv_js__WEBPACK_IMPORTED_MODULE_0__.DoubleIndexedKV();
    }
    register(value, identifier) {
        if (this.kv.getByValue(value)) {
            return;
        }
        if (!identifier) {
            identifier = this.generateIdentifier(value);
        }
        this.kv.set(identifier, value);
    }
    clear() {
        this.kv.clear();
    }
    getIdentifier(value) {
        return this.kv.getByValue(value);
    }
    getValue(identifier) {
        return this.kv.getByKey(identifier);
    }
}
//# sourceMappingURL=registry.js.map

/***/ }),

/***/ "./node_modules/superjson/dist/transformer.js":
/*!****************************************************!*\
  !*** ./node_modules/superjson/dist/transformer.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isInstanceOfRegisteredClass: () => (/* binding */ isInstanceOfRegisteredClass),
/* harmony export */   transformValue: () => (/* binding */ transformValue),
/* harmony export */   untransformValue: () => (/* binding */ untransformValue)
/* harmony export */ });
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is.js */ "./node_modules/superjson/dist/is.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ "./node_modules/superjson/dist/util.js");


function simpleTransformation(isApplicable, annotation, transform, untransform) {
    return {
        isApplicable,
        annotation,
        transform,
        untransform,
    };
}
const simpleRules = [
    simpleTransformation(_is_js__WEBPACK_IMPORTED_MODULE_0__.isUndefined, 'undefined', () => null, () => undefined),
    simpleTransformation(_is_js__WEBPACK_IMPORTED_MODULE_0__.isBigint, 'bigint', v => v.toString(), v => {
        if (typeof BigInt !== 'undefined') {
            return BigInt(v);
        }
        console.error('Please add a BigInt polyfill.');
        return v;
    }),
    simpleTransformation(_is_js__WEBPACK_IMPORTED_MODULE_0__.isDate, 'Date', v => v.toISOString(), v => new Date(v)),
    simpleTransformation(_is_js__WEBPACK_IMPORTED_MODULE_0__.isError, 'Error', (v, superJson) => {
        const baseError = {
            name: v.name,
            message: v.message,
        };
        superJson.allowedErrorProps.forEach(prop => {
            baseError[prop] = v[prop];
        });
        return baseError;
    }, (v, superJson) => {
        const e = new Error(v.message);
        e.name = v.name;
        e.stack = v.stack;
        superJson.allowedErrorProps.forEach(prop => {
            e[prop] = v[prop];
        });
        return e;
    }),
    simpleTransformation(_is_js__WEBPACK_IMPORTED_MODULE_0__.isRegExp, 'regexp', v => '' + v, regex => {
        const body = regex.slice(1, regex.lastIndexOf('/'));
        const flags = regex.slice(regex.lastIndexOf('/') + 1);
        return new RegExp(body, flags);
    }),
    simpleTransformation(_is_js__WEBPACK_IMPORTED_MODULE_0__.isSet, 'set', 
    // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    v => [...v.values()], v => new Set(v)),
    simpleTransformation(_is_js__WEBPACK_IMPORTED_MODULE_0__.isMap, 'map', v => [...v.entries()], v => new Map(v)),
    simpleTransformation((v) => (0,_is_js__WEBPACK_IMPORTED_MODULE_0__.isNaNValue)(v) || (0,_is_js__WEBPACK_IMPORTED_MODULE_0__.isInfinite)(v), 'number', v => {
        if ((0,_is_js__WEBPACK_IMPORTED_MODULE_0__.isNaNValue)(v)) {
            return 'NaN';
        }
        if (v > 0) {
            return 'Infinity';
        }
        else {
            return '-Infinity';
        }
    }, Number),
    simpleTransformation((v) => v === 0 && 1 / v === -Infinity, 'number', () => {
        return '-0';
    }, Number),
    simpleTransformation(_is_js__WEBPACK_IMPORTED_MODULE_0__.isURL, 'URL', v => v.toString(), v => new URL(v)),
];
function compositeTransformation(isApplicable, annotation, transform, untransform) {
    return {
        isApplicable,
        annotation,
        transform,
        untransform,
    };
}
const symbolRule = compositeTransformation((s, superJson) => {
    if ((0,_is_js__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(s)) {
        const isRegistered = !!superJson.symbolRegistry.getIdentifier(s);
        return isRegistered;
    }
    return false;
}, (s, superJson) => {
    const identifier = superJson.symbolRegistry.getIdentifier(s);
    return ['symbol', identifier];
}, v => v.description, (_, a, superJson) => {
    const value = superJson.symbolRegistry.getValue(a[1]);
    if (!value) {
        throw new Error('Trying to deserialize unknown symbol');
    }
    return value;
});
const constructorToName = [
    Int8Array,
    Uint8Array,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array,
    Uint8ClampedArray,
].reduce((obj, ctor) => {
    obj[ctor.name] = ctor;
    return obj;
}, {});
const typedArrayRule = compositeTransformation(_is_js__WEBPACK_IMPORTED_MODULE_0__.isTypedArray, v => ['typed-array', v.constructor.name], v => [...v], (v, a) => {
    const ctor = constructorToName[a[1]];
    if (!ctor) {
        throw new Error('Trying to deserialize unknown typed array');
    }
    return new ctor(v);
});
function isInstanceOfRegisteredClass(potentialClass, superJson) {
    if (potentialClass?.constructor) {
        const isRegistered = !!superJson.classRegistry.getIdentifier(potentialClass.constructor);
        return isRegistered;
    }
    return false;
}
const classRule = compositeTransformation(isInstanceOfRegisteredClass, (clazz, superJson) => {
    const identifier = superJson.classRegistry.getIdentifier(clazz.constructor);
    return ['class', identifier];
}, (clazz, superJson) => {
    const allowedProps = superJson.classRegistry.getAllowedProps(clazz.constructor);
    if (!allowedProps) {
        return { ...clazz };
    }
    const result = {};
    allowedProps.forEach(prop => {
        result[prop] = clazz[prop];
    });
    return result;
}, (v, a, superJson) => {
    const clazz = superJson.classRegistry.getValue(a[1]);
    if (!clazz) {
        throw new Error(`Trying to deserialize unknown class '${a[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);
    }
    return Object.assign(Object.create(clazz.prototype), v);
});
const customRule = compositeTransformation((value, superJson) => {
    return !!superJson.customTransformerRegistry.findApplicable(value);
}, (value, superJson) => {
    const transformer = superJson.customTransformerRegistry.findApplicable(value);
    return ['custom', transformer.name];
}, (value, superJson) => {
    const transformer = superJson.customTransformerRegistry.findApplicable(value);
    return transformer.serialize(value);
}, (v, a, superJson) => {
    const transformer = superJson.customTransformerRegistry.findByName(a[1]);
    if (!transformer) {
        throw new Error('Trying to deserialize unknown custom value');
    }
    return transformer.deserialize(v);
});
const compositeRules = [classRule, symbolRule, customRule, typedArrayRule];
const transformValue = (value, superJson) => {
    const applicableCompositeRule = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.findArr)(compositeRules, rule => rule.isApplicable(value, superJson));
    if (applicableCompositeRule) {
        return {
            value: applicableCompositeRule.transform(value, superJson),
            type: applicableCompositeRule.annotation(value, superJson),
        };
    }
    const applicableSimpleRule = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.findArr)(simpleRules, rule => rule.isApplicable(value, superJson));
    if (applicableSimpleRule) {
        return {
            value: applicableSimpleRule.transform(value, superJson),
            type: applicableSimpleRule.annotation,
        };
    }
    return undefined;
};
const simpleRulesByAnnotation = {};
simpleRules.forEach(rule => {
    simpleRulesByAnnotation[rule.annotation] = rule;
});
const untransformValue = (json, type, superJson) => {
    if ((0,_is_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(type)) {
        switch (type[0]) {
            case 'symbol':
                return symbolRule.untransform(json, type, superJson);
            case 'class':
                return classRule.untransform(json, type, superJson);
            case 'custom':
                return customRule.untransform(json, type, superJson);
            case 'typed-array':
                return typedArrayRule.untransform(json, type, superJson);
            default:
                throw new Error('Unknown transformation: ' + type);
        }
    }
    else {
        const transformation = simpleRulesByAnnotation[type];
        if (!transformation) {
            throw new Error('Unknown transformation: ' + type);
        }
        return transformation.untransform(json, superJson);
    }
};
//# sourceMappingURL=transformer.js.map

/***/ }),

/***/ "./node_modules/superjson/dist/util.js":
/*!*********************************************!*\
  !*** ./node_modules/superjson/dist/util.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   find: () => (/* binding */ find),
/* harmony export */   findArr: () => (/* binding */ findArr),
/* harmony export */   forEach: () => (/* binding */ forEach),
/* harmony export */   includes: () => (/* binding */ includes)
/* harmony export */ });
function valuesOfObj(record) {
    if ('values' in Object) {
        // eslint-disable-next-line es5/no-es6-methods
        return Object.values(record);
    }
    const values = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const key in record) {
        if (record.hasOwnProperty(key)) {
            values.push(record[key]);
        }
    }
    return values;
}
function find(record, predicate) {
    const values = valuesOfObj(record);
    if ('find' in values) {
        // eslint-disable-next-line es5/no-es6-methods
        return values.find(predicate);
    }
    const valuesNotNever = values;
    for (let i = 0; i < valuesNotNever.length; i++) {
        const value = valuesNotNever[i];
        if (predicate(value)) {
            return value;
        }
    }
    return undefined;
}
function forEach(record, run) {
    Object.entries(record).forEach(([key, value]) => run(value, key));
}
function includes(arr, value) {
    return arr.indexOf(value) !== -1;
}
function findArr(record, predicate) {
    for (let i = 0; i < record.length; i++) {
        const value = record[i];
        if (predicate(value)) {
            return value;
        }
    }
    return undefined;
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "./node_modules/zod/lib/index.mjs":
/*!****************************************!*\
  !*** ./node_modules/zod/lib/index.mjs ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BRAND: () => (/* binding */ BRAND),
/* harmony export */   DIRTY: () => (/* binding */ DIRTY),
/* harmony export */   EMPTY_PATH: () => (/* binding */ EMPTY_PATH),
/* harmony export */   INVALID: () => (/* binding */ INVALID),
/* harmony export */   NEVER: () => (/* binding */ NEVER),
/* harmony export */   OK: () => (/* binding */ OK),
/* harmony export */   ParseStatus: () => (/* binding */ ParseStatus),
/* harmony export */   Schema: () => (/* binding */ ZodType),
/* harmony export */   ZodAny: () => (/* binding */ ZodAny),
/* harmony export */   ZodArray: () => (/* binding */ ZodArray),
/* harmony export */   ZodBigInt: () => (/* binding */ ZodBigInt),
/* harmony export */   ZodBoolean: () => (/* binding */ ZodBoolean),
/* harmony export */   ZodBranded: () => (/* binding */ ZodBranded),
/* harmony export */   ZodCatch: () => (/* binding */ ZodCatch),
/* harmony export */   ZodDate: () => (/* binding */ ZodDate),
/* harmony export */   ZodDefault: () => (/* binding */ ZodDefault),
/* harmony export */   ZodDiscriminatedUnion: () => (/* binding */ ZodDiscriminatedUnion),
/* harmony export */   ZodEffects: () => (/* binding */ ZodEffects),
/* harmony export */   ZodEnum: () => (/* binding */ ZodEnum),
/* harmony export */   ZodError: () => (/* binding */ ZodError),
/* harmony export */   ZodFirstPartyTypeKind: () => (/* binding */ ZodFirstPartyTypeKind),
/* harmony export */   ZodFunction: () => (/* binding */ ZodFunction),
/* harmony export */   ZodIntersection: () => (/* binding */ ZodIntersection),
/* harmony export */   ZodIssueCode: () => (/* binding */ ZodIssueCode),
/* harmony export */   ZodLazy: () => (/* binding */ ZodLazy),
/* harmony export */   ZodLiteral: () => (/* binding */ ZodLiteral),
/* harmony export */   ZodMap: () => (/* binding */ ZodMap),
/* harmony export */   ZodNaN: () => (/* binding */ ZodNaN),
/* harmony export */   ZodNativeEnum: () => (/* binding */ ZodNativeEnum),
/* harmony export */   ZodNever: () => (/* binding */ ZodNever),
/* harmony export */   ZodNull: () => (/* binding */ ZodNull),
/* harmony export */   ZodNullable: () => (/* binding */ ZodNullable),
/* harmony export */   ZodNumber: () => (/* binding */ ZodNumber),
/* harmony export */   ZodObject: () => (/* binding */ ZodObject),
/* harmony export */   ZodOptional: () => (/* binding */ ZodOptional),
/* harmony export */   ZodParsedType: () => (/* binding */ ZodParsedType),
/* harmony export */   ZodPipeline: () => (/* binding */ ZodPipeline),
/* harmony export */   ZodPromise: () => (/* binding */ ZodPromise),
/* harmony export */   ZodReadonly: () => (/* binding */ ZodReadonly),
/* harmony export */   ZodRecord: () => (/* binding */ ZodRecord),
/* harmony export */   ZodSchema: () => (/* binding */ ZodType),
/* harmony export */   ZodSet: () => (/* binding */ ZodSet),
/* harmony export */   ZodString: () => (/* binding */ ZodString),
/* harmony export */   ZodSymbol: () => (/* binding */ ZodSymbol),
/* harmony export */   ZodTransformer: () => (/* binding */ ZodEffects),
/* harmony export */   ZodTuple: () => (/* binding */ ZodTuple),
/* harmony export */   ZodType: () => (/* binding */ ZodType),
/* harmony export */   ZodUndefined: () => (/* binding */ ZodUndefined),
/* harmony export */   ZodUnion: () => (/* binding */ ZodUnion),
/* harmony export */   ZodUnknown: () => (/* binding */ ZodUnknown),
/* harmony export */   ZodVoid: () => (/* binding */ ZodVoid),
/* harmony export */   addIssueToContext: () => (/* binding */ addIssueToContext),
/* harmony export */   any: () => (/* binding */ anyType),
/* harmony export */   array: () => (/* binding */ arrayType),
/* harmony export */   bigint: () => (/* binding */ bigIntType),
/* harmony export */   boolean: () => (/* binding */ booleanType),
/* harmony export */   coerce: () => (/* binding */ coerce),
/* harmony export */   custom: () => (/* binding */ custom),
/* harmony export */   date: () => (/* binding */ dateType),
/* harmony export */   datetimeRegex: () => (/* binding */ datetimeRegex),
/* harmony export */   "default": () => (/* binding */ z),
/* harmony export */   defaultErrorMap: () => (/* binding */ errorMap),
/* harmony export */   discriminatedUnion: () => (/* binding */ discriminatedUnionType),
/* harmony export */   effect: () => (/* binding */ effectsType),
/* harmony export */   "enum": () => (/* binding */ enumType),
/* harmony export */   "function": () => (/* binding */ functionType),
/* harmony export */   getErrorMap: () => (/* binding */ getErrorMap),
/* harmony export */   getParsedType: () => (/* binding */ getParsedType),
/* harmony export */   "instanceof": () => (/* binding */ instanceOfType),
/* harmony export */   intersection: () => (/* binding */ intersectionType),
/* harmony export */   isAborted: () => (/* binding */ isAborted),
/* harmony export */   isAsync: () => (/* binding */ isAsync),
/* harmony export */   isDirty: () => (/* binding */ isDirty),
/* harmony export */   isValid: () => (/* binding */ isValid),
/* harmony export */   late: () => (/* binding */ late),
/* harmony export */   lazy: () => (/* binding */ lazyType),
/* harmony export */   literal: () => (/* binding */ literalType),
/* harmony export */   makeIssue: () => (/* binding */ makeIssue),
/* harmony export */   map: () => (/* binding */ mapType),
/* harmony export */   nan: () => (/* binding */ nanType),
/* harmony export */   nativeEnum: () => (/* binding */ nativeEnumType),
/* harmony export */   never: () => (/* binding */ neverType),
/* harmony export */   "null": () => (/* binding */ nullType),
/* harmony export */   nullable: () => (/* binding */ nullableType),
/* harmony export */   number: () => (/* binding */ numberType),
/* harmony export */   object: () => (/* binding */ objectType),
/* harmony export */   objectUtil: () => (/* binding */ objectUtil),
/* harmony export */   oboolean: () => (/* binding */ oboolean),
/* harmony export */   onumber: () => (/* binding */ onumber),
/* harmony export */   optional: () => (/* binding */ optionalType),
/* harmony export */   ostring: () => (/* binding */ ostring),
/* harmony export */   pipeline: () => (/* binding */ pipelineType),
/* harmony export */   preprocess: () => (/* binding */ preprocessType),
/* harmony export */   promise: () => (/* binding */ promiseType),
/* harmony export */   quotelessJson: () => (/* binding */ quotelessJson),
/* harmony export */   record: () => (/* binding */ recordType),
/* harmony export */   set: () => (/* binding */ setType),
/* harmony export */   setErrorMap: () => (/* binding */ setErrorMap),
/* harmony export */   strictObject: () => (/* binding */ strictObjectType),
/* harmony export */   string: () => (/* binding */ stringType),
/* harmony export */   symbol: () => (/* binding */ symbolType),
/* harmony export */   transformer: () => (/* binding */ effectsType),
/* harmony export */   tuple: () => (/* binding */ tupleType),
/* harmony export */   undefined: () => (/* binding */ undefinedType),
/* harmony export */   union: () => (/* binding */ unionType),
/* harmony export */   unknown: () => (/* binding */ unknownType),
/* harmony export */   util: () => (/* binding */ util),
/* harmony export */   "void": () => (/* binding */ voidType),
/* harmony export */   z: () => (/* binding */ z)
/* harmony export */ });
var util;
(function (util) {
    util.assertEqual = (val) => val;
    function assertIs(_arg) { }
    util.assertIs = assertIs;
    function assertNever(_x) {
        throw new Error();
    }
    util.assertNever = assertNever;
    util.arrayToEnum = (items) => {
        const obj = {};
        for (const item of items) {
            obj[item] = item;
        }
        return obj;
    };
    util.getValidEnumValues = (obj) => {
        const validKeys = util.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
        const filtered = {};
        for (const k of validKeys) {
            filtered[k] = obj[k];
        }
        return util.objectValues(filtered);
    };
    util.objectValues = (obj) => {
        return util.objectKeys(obj).map(function (e) {
            return obj[e];
        });
    };
    util.objectKeys = typeof Object.keys === "function" // eslint-disable-line ban/ban
        ? (obj) => Object.keys(obj) // eslint-disable-line ban/ban
        : (object) => {
            const keys = [];
            for (const key in object) {
                if (Object.prototype.hasOwnProperty.call(object, key)) {
                    keys.push(key);
                }
            }
            return keys;
        };
    util.find = (arr, checker) => {
        for (const item of arr) {
            if (checker(item))
                return item;
        }
        return undefined;
    };
    util.isInteger = typeof Number.isInteger === "function"
        ? (val) => Number.isInteger(val) // eslint-disable-line ban/ban
        : (val) => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
    function joinValues(array, separator = " | ") {
        return array
            .map((val) => (typeof val === "string" ? `'${val}'` : val))
            .join(separator);
    }
    util.joinValues = joinValues;
    util.jsonStringifyReplacer = (_, value) => {
        if (typeof value === "bigint") {
            return value.toString();
        }
        return value;
    };
})(util || (util = {}));
var objectUtil;
(function (objectUtil) {
    objectUtil.mergeShapes = (first, second) => {
        return {
            ...first,
            ...second, // second overwrites first
        };
    };
})(objectUtil || (objectUtil = {}));
const ZodParsedType = util.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set",
]);
const getParsedType = (data) => {
    const t = typeof data;
    switch (t) {
        case "undefined":
            return ZodParsedType.undefined;
        case "string":
            return ZodParsedType.string;
        case "number":
            return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
        case "boolean":
            return ZodParsedType.boolean;
        case "function":
            return ZodParsedType.function;
        case "bigint":
            return ZodParsedType.bigint;
        case "symbol":
            return ZodParsedType.symbol;
        case "object":
            if (Array.isArray(data)) {
                return ZodParsedType.array;
            }
            if (data === null) {
                return ZodParsedType.null;
            }
            if (data.then &&
                typeof data.then === "function" &&
                data.catch &&
                typeof data.catch === "function") {
                return ZodParsedType.promise;
            }
            if (typeof Map !== "undefined" && data instanceof Map) {
                return ZodParsedType.map;
            }
            if (typeof Set !== "undefined" && data instanceof Set) {
                return ZodParsedType.set;
            }
            if (typeof Date !== "undefined" && data instanceof Date) {
                return ZodParsedType.date;
            }
            return ZodParsedType.object;
        default:
            return ZodParsedType.unknown;
    }
};

const ZodIssueCode = util.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite",
]);
const quotelessJson = (obj) => {
    const json = JSON.stringify(obj, null, 2);
    return json.replace(/"([^"]+)":/g, "$1:");
};
class ZodError extends Error {
    get errors() {
        return this.issues;
    }
    constructor(issues) {
        super();
        this.issues = [];
        this.addIssue = (sub) => {
            this.issues = [...this.issues, sub];
        };
        this.addIssues = (subs = []) => {
            this.issues = [...this.issues, ...subs];
        };
        const actualProto = new.target.prototype;
        if (Object.setPrototypeOf) {
            // eslint-disable-next-line ban/ban
            Object.setPrototypeOf(this, actualProto);
        }
        else {
            this.__proto__ = actualProto;
        }
        this.name = "ZodError";
        this.issues = issues;
    }
    format(_mapper) {
        const mapper = _mapper ||
            function (issue) {
                return issue.message;
            };
        const fieldErrors = { _errors: [] };
        const processError = (error) => {
            for (const issue of error.issues) {
                if (issue.code === "invalid_union") {
                    issue.unionErrors.map(processError);
                }
                else if (issue.code === "invalid_return_type") {
                    processError(issue.returnTypeError);
                }
                else if (issue.code === "invalid_arguments") {
                    processError(issue.argumentsError);
                }
                else if (issue.path.length === 0) {
                    fieldErrors._errors.push(mapper(issue));
                }
                else {
                    let curr = fieldErrors;
                    let i = 0;
                    while (i < issue.path.length) {
                        const el = issue.path[i];
                        const terminal = i === issue.path.length - 1;
                        if (!terminal) {
                            curr[el] = curr[el] || { _errors: [] };
                            // if (typeof el === "string") {
                            //   curr[el] = curr[el] || { _errors: [] };
                            // } else if (typeof el === "number") {
                            //   const errorArray: any = [];
                            //   errorArray._errors = [];
                            //   curr[el] = curr[el] || errorArray;
                            // }
                        }
                        else {
                            curr[el] = curr[el] || { _errors: [] };
                            curr[el]._errors.push(mapper(issue));
                        }
                        curr = curr[el];
                        i++;
                    }
                }
            }
        };
        processError(this);
        return fieldErrors;
    }
    static assert(value) {
        if (!(value instanceof ZodError)) {
            throw new Error(`Not a ZodError: ${value}`);
        }
    }
    toString() {
        return this.message;
    }
    get message() {
        return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
        return this.issues.length === 0;
    }
    flatten(mapper = (issue) => issue.message) {
        const fieldErrors = {};
        const formErrors = [];
        for (const sub of this.issues) {
            if (sub.path.length > 0) {
                fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
                fieldErrors[sub.path[0]].push(mapper(sub));
            }
            else {
                formErrors.push(mapper(sub));
            }
        }
        return { formErrors, fieldErrors };
    }
    get formErrors() {
        return this.flatten();
    }
}
ZodError.create = (issues) => {
    const error = new ZodError(issues);
    return error;
};

const errorMap = (issue, _ctx) => {
    let message;
    switch (issue.code) {
        case ZodIssueCode.invalid_type:
            if (issue.received === ZodParsedType.undefined) {
                message = "Required";
            }
            else {
                message = `Expected ${issue.expected}, received ${issue.received}`;
            }
            break;
        case ZodIssueCode.invalid_literal:
            message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
            break;
        case ZodIssueCode.unrecognized_keys:
            message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
            break;
        case ZodIssueCode.invalid_union:
            message = `Invalid input`;
            break;
        case ZodIssueCode.invalid_union_discriminator:
            message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
            break;
        case ZodIssueCode.invalid_enum_value:
            message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
            break;
        case ZodIssueCode.invalid_arguments:
            message = `Invalid function arguments`;
            break;
        case ZodIssueCode.invalid_return_type:
            message = `Invalid function return type`;
            break;
        case ZodIssueCode.invalid_date:
            message = `Invalid date`;
            break;
        case ZodIssueCode.invalid_string:
            if (typeof issue.validation === "object") {
                if ("includes" in issue.validation) {
                    message = `Invalid input: must include "${issue.validation.includes}"`;
                    if (typeof issue.validation.position === "number") {
                        message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
                    }
                }
                else if ("startsWith" in issue.validation) {
                    message = `Invalid input: must start with "${issue.validation.startsWith}"`;
                }
                else if ("endsWith" in issue.validation) {
                    message = `Invalid input: must end with "${issue.validation.endsWith}"`;
                }
                else {
                    util.assertNever(issue.validation);
                }
            }
            else if (issue.validation !== "regex") {
                message = `Invalid ${issue.validation}`;
            }
            else {
                message = "Invalid";
            }
            break;
        case ZodIssueCode.too_small:
            if (issue.type === "array")
                message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
            else if (issue.type === "string")
                message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
            else if (issue.type === "number")
                message = `Number must be ${issue.exact
                    ? `exactly equal to `
                    : issue.inclusive
                        ? `greater than or equal to `
                        : `greater than `}${issue.minimum}`;
            else if (issue.type === "date")
                message = `Date must be ${issue.exact
                    ? `exactly equal to `
                    : issue.inclusive
                        ? `greater than or equal to `
                        : `greater than `}${new Date(Number(issue.minimum))}`;
            else
                message = "Invalid input";
            break;
        case ZodIssueCode.too_big:
            if (issue.type === "array")
                message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
            else if (issue.type === "string")
                message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
            else if (issue.type === "number")
                message = `Number must be ${issue.exact
                    ? `exactly`
                    : issue.inclusive
                        ? `less than or equal to`
                        : `less than`} ${issue.maximum}`;
            else if (issue.type === "bigint")
                message = `BigInt must be ${issue.exact
                    ? `exactly`
                    : issue.inclusive
                        ? `less than or equal to`
                        : `less than`} ${issue.maximum}`;
            else if (issue.type === "date")
                message = `Date must be ${issue.exact
                    ? `exactly`
                    : issue.inclusive
                        ? `smaller than or equal to`
                        : `smaller than`} ${new Date(Number(issue.maximum))}`;
            else
                message = "Invalid input";
            break;
        case ZodIssueCode.custom:
            message = `Invalid input`;
            break;
        case ZodIssueCode.invalid_intersection_types:
            message = `Intersection results could not be merged`;
            break;
        case ZodIssueCode.not_multiple_of:
            message = `Number must be a multiple of ${issue.multipleOf}`;
            break;
        case ZodIssueCode.not_finite:
            message = "Number must be finite";
            break;
        default:
            message = _ctx.defaultError;
            util.assertNever(issue);
    }
    return { message };
};

let overrideErrorMap = errorMap;
function setErrorMap(map) {
    overrideErrorMap = map;
}
function getErrorMap() {
    return overrideErrorMap;
}

const makeIssue = (params) => {
    const { data, path, errorMaps, issueData } = params;
    const fullPath = [...path, ...(issueData.path || [])];
    const fullIssue = {
        ...issueData,
        path: fullPath,
    };
    if (issueData.message !== undefined) {
        return {
            ...issueData,
            path: fullPath,
            message: issueData.message,
        };
    }
    let errorMessage = "";
    const maps = errorMaps
        .filter((m) => !!m)
        .slice()
        .reverse();
    for (const map of maps) {
        errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
    }
    return {
        ...issueData,
        path: fullPath,
        message: errorMessage,
    };
};
const EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
    const overrideMap = getErrorMap();
    const issue = makeIssue({
        issueData: issueData,
        data: ctx.data,
        path: ctx.path,
        errorMaps: [
            ctx.common.contextualErrorMap, // contextual error map is first priority
            ctx.schemaErrorMap, // then schema-bound map if available
            overrideMap, // then global override map
            overrideMap === errorMap ? undefined : errorMap, // then global default map
        ].filter((x) => !!x),
    });
    ctx.common.issues.push(issue);
}
class ParseStatus {
    constructor() {
        this.value = "valid";
    }
    dirty() {
        if (this.value === "valid")
            this.value = "dirty";
    }
    abort() {
        if (this.value !== "aborted")
            this.value = "aborted";
    }
    static mergeArray(status, results) {
        const arrayValue = [];
        for (const s of results) {
            if (s.status === "aborted")
                return INVALID;
            if (s.status === "dirty")
                status.dirty();
            arrayValue.push(s.value);
        }
        return { status: status.value, value: arrayValue };
    }
    static async mergeObjectAsync(status, pairs) {
        const syncPairs = [];
        for (const pair of pairs) {
            const key = await pair.key;
            const value = await pair.value;
            syncPairs.push({
                key,
                value,
            });
        }
        return ParseStatus.mergeObjectSync(status, syncPairs);
    }
    static mergeObjectSync(status, pairs) {
        const finalObject = {};
        for (const pair of pairs) {
            const { key, value } = pair;
            if (key.status === "aborted")
                return INVALID;
            if (value.status === "aborted")
                return INVALID;
            if (key.status === "dirty")
                status.dirty();
            if (value.status === "dirty")
                status.dirty();
            if (key.value !== "__proto__" &&
                (typeof value.value !== "undefined" || pair.alwaysSet)) {
                finalObject[key.value] = value.value;
            }
        }
        return { status: status.value, value: finalObject };
    }
}
const INVALID = Object.freeze({
    status: "aborted",
});
const DIRTY = (value) => ({ status: "dirty", value });
const OK = (value) => ({ status: "valid", value });
const isAborted = (x) => x.status === "aborted";
const isDirty = (x) => x.status === "dirty";
const isValid = (x) => x.status === "valid";
const isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var errorUtil;
(function (errorUtil) {
    errorUtil.errToObj = (message) => typeof message === "string" ? { message } : message || {};
    errorUtil.toString = (message) => typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
})(errorUtil || (errorUtil = {}));

var _ZodEnum_cache, _ZodNativeEnum_cache;
class ParseInputLazyPath {
    constructor(parent, value, path, key) {
        this._cachedPath = [];
        this.parent = parent;
        this.data = value;
        this._path = path;
        this._key = key;
    }
    get path() {
        if (!this._cachedPath.length) {
            if (this._key instanceof Array) {
                this._cachedPath.push(...this._path, ...this._key);
            }
            else {
                this._cachedPath.push(...this._path, this._key);
            }
        }
        return this._cachedPath;
    }
}
const handleResult = (ctx, result) => {
    if (isValid(result)) {
        return { success: true, data: result.value };
    }
    else {
        if (!ctx.common.issues.length) {
            throw new Error("Validation failed but no issues detected.");
        }
        return {
            success: false,
            get error() {
                if (this._error)
                    return this._error;
                const error = new ZodError(ctx.common.issues);
                this._error = error;
                return this._error;
            },
        };
    }
};
function processCreateParams(params) {
    if (!params)
        return {};
    const { errorMap, invalid_type_error, required_error, description } = params;
    if (errorMap && (invalid_type_error || required_error)) {
        throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    }
    if (errorMap)
        return { errorMap: errorMap, description };
    const customMap = (iss, ctx) => {
        var _a, _b;
        const { message } = params;
        if (iss.code === "invalid_enum_value") {
            return { message: message !== null && message !== void 0 ? message : ctx.defaultError };
        }
        if (typeof ctx.data === "undefined") {
            return { message: (_a = message !== null && message !== void 0 ? message : required_error) !== null && _a !== void 0 ? _a : ctx.defaultError };
        }
        if (iss.code !== "invalid_type")
            return { message: ctx.defaultError };
        return { message: (_b = message !== null && message !== void 0 ? message : invalid_type_error) !== null && _b !== void 0 ? _b : ctx.defaultError };
    };
    return { errorMap: customMap, description };
}
class ZodType {
    get description() {
        return this._def.description;
    }
    _getType(input) {
        return getParsedType(input.data);
    }
    _getOrReturnCtx(input, ctx) {
        return (ctx || {
            common: input.parent.common,
            data: input.data,
            parsedType: getParsedType(input.data),
            schemaErrorMap: this._def.errorMap,
            path: input.path,
            parent: input.parent,
        });
    }
    _processInputParams(input) {
        return {
            status: new ParseStatus(),
            ctx: {
                common: input.parent.common,
                data: input.data,
                parsedType: getParsedType(input.data),
                schemaErrorMap: this._def.errorMap,
                path: input.path,
                parent: input.parent,
            },
        };
    }
    _parseSync(input) {
        const result = this._parse(input);
        if (isAsync(result)) {
            throw new Error("Synchronous parse encountered promise.");
        }
        return result;
    }
    _parseAsync(input) {
        const result = this._parse(input);
        return Promise.resolve(result);
    }
    parse(data, params) {
        const result = this.safeParse(data, params);
        if (result.success)
            return result.data;
        throw result.error;
    }
    safeParse(data, params) {
        var _a;
        const ctx = {
            common: {
                issues: [],
                async: (_a = params === null || params === void 0 ? void 0 : params.async) !== null && _a !== void 0 ? _a : false,
                contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
            },
            path: (params === null || params === void 0 ? void 0 : params.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: getParsedType(data),
        };
        const result = this._parseSync({ data, path: ctx.path, parent: ctx });
        return handleResult(ctx, result);
    }
    "~validate"(data) {
        var _a, _b;
        const ctx = {
            common: {
                issues: [],
                async: !!this["~standard"].async,
            },
            path: [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: getParsedType(data),
        };
        if (!this["~standard"].async) {
            try {
                const result = this._parseSync({ data, path: [], parent: ctx });
                return isValid(result)
                    ? {
                        value: result.value,
                    }
                    : {
                        issues: ctx.common.issues,
                    };
            }
            catch (err) {
                if ((_b = (_a = err === null || err === void 0 ? void 0 : err.message) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === null || _b === void 0 ? void 0 : _b.includes("encountered")) {
                    this["~standard"].async = true;
                }
                ctx.common = {
                    issues: [],
                    async: true,
                };
            }
        }
        return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result)
            ? {
                value: result.value,
            }
            : {
                issues: ctx.common.issues,
            });
    }
    async parseAsync(data, params) {
        const result = await this.safeParseAsync(data, params);
        if (result.success)
            return result.data;
        throw result.error;
    }
    async safeParseAsync(data, params) {
        const ctx = {
            common: {
                issues: [],
                contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
                async: true,
            },
            path: (params === null || params === void 0 ? void 0 : params.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: getParsedType(data),
        };
        const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
        const result = await (isAsync(maybeAsyncResult)
            ? maybeAsyncResult
            : Promise.resolve(maybeAsyncResult));
        return handleResult(ctx, result);
    }
    refine(check, message) {
        const getIssueProperties = (val) => {
            if (typeof message === "string" || typeof message === "undefined") {
                return { message };
            }
            else if (typeof message === "function") {
                return message(val);
            }
            else {
                return message;
            }
        };
        return this._refinement((val, ctx) => {
            const result = check(val);
            const setError = () => ctx.addIssue({
                code: ZodIssueCode.custom,
                ...getIssueProperties(val),
            });
            if (typeof Promise !== "undefined" && result instanceof Promise) {
                return result.then((data) => {
                    if (!data) {
                        setError();
                        return false;
                    }
                    else {
                        return true;
                    }
                });
            }
            if (!result) {
                setError();
                return false;
            }
            else {
                return true;
            }
        });
    }
    refinement(check, refinementData) {
        return this._refinement((val, ctx) => {
            if (!check(val)) {
                ctx.addIssue(typeof refinementData === "function"
                    ? refinementData(val, ctx)
                    : refinementData);
                return false;
            }
            else {
                return true;
            }
        });
    }
    _refinement(refinement) {
        return new ZodEffects({
            schema: this,
            typeName: ZodFirstPartyTypeKind.ZodEffects,
            effect: { type: "refinement", refinement },
        });
    }
    superRefine(refinement) {
        return this._refinement(refinement);
    }
    constructor(def) {
        /** Alias of safeParseAsync */
        this.spa = this.safeParseAsync;
        this._def = def;
        this.parse = this.parse.bind(this);
        this.safeParse = this.safeParse.bind(this);
        this.parseAsync = this.parseAsync.bind(this);
        this.safeParseAsync = this.safeParseAsync.bind(this);
        this.spa = this.spa.bind(this);
        this.refine = this.refine.bind(this);
        this.refinement = this.refinement.bind(this);
        this.superRefine = this.superRefine.bind(this);
        this.optional = this.optional.bind(this);
        this.nullable = this.nullable.bind(this);
        this.nullish = this.nullish.bind(this);
        this.array = this.array.bind(this);
        this.promise = this.promise.bind(this);
        this.or = this.or.bind(this);
        this.and = this.and.bind(this);
        this.transform = this.transform.bind(this);
        this.brand = this.brand.bind(this);
        this.default = this.default.bind(this);
        this.catch = this.catch.bind(this);
        this.describe = this.describe.bind(this);
        this.pipe = this.pipe.bind(this);
        this.readonly = this.readonly.bind(this);
        this.isNullable = this.isNullable.bind(this);
        this.isOptional = this.isOptional.bind(this);
        this["~standard"] = {
            version: 1,
            vendor: "zod",
            validate: (data) => this["~validate"](data),
        };
    }
    optional() {
        return ZodOptional.create(this, this._def);
    }
    nullable() {
        return ZodNullable.create(this, this._def);
    }
    nullish() {
        return this.nullable().optional();
    }
    array() {
        return ZodArray.create(this);
    }
    promise() {
        return ZodPromise.create(this, this._def);
    }
    or(option) {
        return ZodUnion.create([this, option], this._def);
    }
    and(incoming) {
        return ZodIntersection.create(this, incoming, this._def);
    }
    transform(transform) {
        return new ZodEffects({
            ...processCreateParams(this._def),
            schema: this,
            typeName: ZodFirstPartyTypeKind.ZodEffects,
            effect: { type: "transform", transform },
        });
    }
    default(def) {
        const defaultValueFunc = typeof def === "function" ? def : () => def;
        return new ZodDefault({
            ...processCreateParams(this._def),
            innerType: this,
            defaultValue: defaultValueFunc,
            typeName: ZodFirstPartyTypeKind.ZodDefault,
        });
    }
    brand() {
        return new ZodBranded({
            typeName: ZodFirstPartyTypeKind.ZodBranded,
            type: this,
            ...processCreateParams(this._def),
        });
    }
    catch(def) {
        const catchValueFunc = typeof def === "function" ? def : () => def;
        return new ZodCatch({
            ...processCreateParams(this._def),
            innerType: this,
            catchValue: catchValueFunc,
            typeName: ZodFirstPartyTypeKind.ZodCatch,
        });
    }
    describe(description) {
        const This = this.constructor;
        return new This({
            ...this._def,
            description,
        });
    }
    pipe(target) {
        return ZodPipeline.create(this, target);
    }
    readonly() {
        return ZodReadonly.create(this);
    }
    isOptional() {
        return this.safeParse(undefined).success;
    }
    isNullable() {
        return this.safeParse(null).success;
    }
}
const cuidRegex = /^c[^\s-]{8,}$/i;
const cuid2Regex = /^[0-9a-z]+$/;
const ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
// const uuidRegex =
//   /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i;
const uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
const nanoidRegex = /^[a-z0-9_-]{21}$/i;
const jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
const durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
// from https://stackoverflow.com/a/46181/1550155
// old version: too slow, didn't support unicode
// const emailRegex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
//old email regex
// const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((?!-)([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{1,})[^-<>()[\].,;:\s@"]$/i;
// eslint-disable-next-line
// const emailRegex =
//   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/;
// const emailRegex =
//   /^[a-zA-Z0-9\.\!\#\$\%\&\'\*\+\/\=\?\^\_\`\{\|\}\~\-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
// const emailRegex =
//   /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
const emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
// const emailRegex =
//   /^[a-z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9\-]+)*$/i;
// from https://thekevinscott.com/emojis-in-javascript/#writing-a-regular-expression
const _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
let emojiRegex;
// faster, simpler, safer
const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
const ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
// const ipv6Regex =
// /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
const ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
const ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
// https://stackoverflow.com/questions/7860392/determine-if-string-is-in-base64-using-javascript
const base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
// https://base64.guru/standards/base64url
const base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
// simple
// const dateRegexSource = `\\d{4}-\\d{2}-\\d{2}`;
// no leap year validation
// const dateRegexSource = `\\d{4}-((0[13578]|10|12)-31|(0[13-9]|1[0-2])-30|(0[1-9]|1[0-2])-(0[1-9]|1\\d|2\\d))`;
// with leap year validation
const dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
const dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
    let secondsRegexSource = `[0-5]\\d`;
    if (args.precision) {
        secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
    }
    else if (args.precision == null) {
        secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
    }
    const secondsQuantifier = args.precision ? "+" : "?"; // require seconds if precision is nonzero
    return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
    return new RegExp(`^${timeRegexSource(args)}$`);
}
// Adapted from https://stackoverflow.com/a/3143231
function datetimeRegex(args) {
    let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
    const opts = [];
    opts.push(args.local ? `Z?` : `Z`);
    if (args.offset)
        opts.push(`([+-]\\d{2}:?\\d{2})`);
    regex = `${regex}(${opts.join("|")})`;
    return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
    if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
        return true;
    }
    if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
        return true;
    }
    return false;
}
function isValidJWT(jwt, alg) {
    if (!jwtRegex.test(jwt))
        return false;
    try {
        const [header] = jwt.split(".");
        // Convert base64url to base64
        const base64 = header
            .replace(/-/g, "+")
            .replace(/_/g, "/")
            .padEnd(header.length + ((4 - (header.length % 4)) % 4), "=");
        const decoded = JSON.parse(atob(base64));
        if (typeof decoded !== "object" || decoded === null)
            return false;
        if (!decoded.typ || !decoded.alg)
            return false;
        if (alg && decoded.alg !== alg)
            return false;
        return true;
    }
    catch (_a) {
        return false;
    }
}
function isValidCidr(ip, version) {
    if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
        return true;
    }
    if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
        return true;
    }
    return false;
}
class ZodString extends ZodType {
    _parse(input) {
        if (this._def.coerce) {
            input.data = String(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.string) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.string,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const status = new ParseStatus();
        let ctx = undefined;
        for (const check of this._def.checks) {
            if (check.kind === "min") {
                if (input.data.length < check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        minimum: check.value,
                        type: "string",
                        inclusive: true,
                        exact: false,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "max") {
                if (input.data.length > check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        maximum: check.value,
                        type: "string",
                        inclusive: true,
                        exact: false,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "length") {
                const tooBig = input.data.length > check.value;
                const tooSmall = input.data.length < check.value;
                if (tooBig || tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    if (tooBig) {
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.too_big,
                            maximum: check.value,
                            type: "string",
                            inclusive: true,
                            exact: true,
                            message: check.message,
                        });
                    }
                    else if (tooSmall) {
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.too_small,
                            minimum: check.value,
                            type: "string",
                            inclusive: true,
                            exact: true,
                            message: check.message,
                        });
                    }
                    status.dirty();
                }
            }
            else if (check.kind === "email") {
                if (!emailRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "email",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "emoji") {
                if (!emojiRegex) {
                    emojiRegex = new RegExp(_emojiRegex, "u");
                }
                if (!emojiRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "emoji",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "uuid") {
                if (!uuidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "uuid",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "nanoid") {
                if (!nanoidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "nanoid",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "cuid") {
                if (!cuidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "cuid",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "cuid2") {
                if (!cuid2Regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "cuid2",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "ulid") {
                if (!ulidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "ulid",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "url") {
                try {
                    new URL(input.data);
                }
                catch (_a) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "url",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "regex") {
                check.regex.lastIndex = 0;
                const testResult = check.regex.test(input.data);
                if (!testResult) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "regex",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "trim") {
                input.data = input.data.trim();
            }
            else if (check.kind === "includes") {
                if (!input.data.includes(check.value, check.position)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: { includes: check.value, position: check.position },
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "toLowerCase") {
                input.data = input.data.toLowerCase();
            }
            else if (check.kind === "toUpperCase") {
                input.data = input.data.toUpperCase();
            }
            else if (check.kind === "startsWith") {
                if (!input.data.startsWith(check.value)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: { startsWith: check.value },
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "endsWith") {
                if (!input.data.endsWith(check.value)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: { endsWith: check.value },
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "datetime") {
                const regex = datetimeRegex(check);
                if (!regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: "datetime",
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "date") {
                const regex = dateRegex;
                if (!regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: "date",
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "time") {
                const regex = timeRegex(check);
                if (!regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: "time",
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "duration") {
                if (!durationRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "duration",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "ip") {
                if (!isValidIP(input.data, check.version)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "ip",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "jwt") {
                if (!isValidJWT(input.data, check.alg)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "jwt",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "cidr") {
                if (!isValidCidr(input.data, check.version)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "cidr",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "base64") {
                if (!base64Regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "base64",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "base64url") {
                if (!base64urlRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "base64url",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else {
                util.assertNever(check);
            }
        }
        return { status: status.value, value: input.data };
    }
    _regex(regex, validation, message) {
        return this.refinement((data) => regex.test(data), {
            validation,
            code: ZodIssueCode.invalid_string,
            ...errorUtil.errToObj(message),
        });
    }
    _addCheck(check) {
        return new ZodString({
            ...this._def,
            checks: [...this._def.checks, check],
        });
    }
    email(message) {
        return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
    }
    url(message) {
        return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
    }
    emoji(message) {
        return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
    }
    uuid(message) {
        return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
    }
    nanoid(message) {
        return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
    }
    cuid(message) {
        return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
    }
    cuid2(message) {
        return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
    }
    ulid(message) {
        return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
    }
    base64(message) {
        return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
    }
    base64url(message) {
        // base64url encoding is a modification of base64 that can safely be used in URLs and filenames
        return this._addCheck({
            kind: "base64url",
            ...errorUtil.errToObj(message),
        });
    }
    jwt(options) {
        return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
    }
    ip(options) {
        return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
    }
    cidr(options) {
        return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
    }
    datetime(options) {
        var _a, _b;
        if (typeof options === "string") {
            return this._addCheck({
                kind: "datetime",
                precision: null,
                offset: false,
                local: false,
                message: options,
            });
        }
        return this._addCheck({
            kind: "datetime",
            precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
            offset: (_a = options === null || options === void 0 ? void 0 : options.offset) !== null && _a !== void 0 ? _a : false,
            local: (_b = options === null || options === void 0 ? void 0 : options.local) !== null && _b !== void 0 ? _b : false,
            ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message),
        });
    }
    date(message) {
        return this._addCheck({ kind: "date", message });
    }
    time(options) {
        if (typeof options === "string") {
            return this._addCheck({
                kind: "time",
                precision: null,
                message: options,
            });
        }
        return this._addCheck({
            kind: "time",
            precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
            ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message),
        });
    }
    duration(message) {
        return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
    }
    regex(regex, message) {
        return this._addCheck({
            kind: "regex",
            regex: regex,
            ...errorUtil.errToObj(message),
        });
    }
    includes(value, options) {
        return this._addCheck({
            kind: "includes",
            value: value,
            position: options === null || options === void 0 ? void 0 : options.position,
            ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message),
        });
    }
    startsWith(value, message) {
        return this._addCheck({
            kind: "startsWith",
            value: value,
            ...errorUtil.errToObj(message),
        });
    }
    endsWith(value, message) {
        return this._addCheck({
            kind: "endsWith",
            value: value,
            ...errorUtil.errToObj(message),
        });
    }
    min(minLength, message) {
        return this._addCheck({
            kind: "min",
            value: minLength,
            ...errorUtil.errToObj(message),
        });
    }
    max(maxLength, message) {
        return this._addCheck({
            kind: "max",
            value: maxLength,
            ...errorUtil.errToObj(message),
        });
    }
    length(len, message) {
        return this._addCheck({
            kind: "length",
            value: len,
            ...errorUtil.errToObj(message),
        });
    }
    /**
     * Equivalent to `.min(1)`
     */
    nonempty(message) {
        return this.min(1, errorUtil.errToObj(message));
    }
    trim() {
        return new ZodString({
            ...this._def,
            checks: [...this._def.checks, { kind: "trim" }],
        });
    }
    toLowerCase() {
        return new ZodString({
            ...this._def,
            checks: [...this._def.checks, { kind: "toLowerCase" }],
        });
    }
    toUpperCase() {
        return new ZodString({
            ...this._def,
            checks: [...this._def.checks, { kind: "toUpperCase" }],
        });
    }
    get isDatetime() {
        return !!this._def.checks.find((ch) => ch.kind === "datetime");
    }
    get isDate() {
        return !!this._def.checks.find((ch) => ch.kind === "date");
    }
    get isTime() {
        return !!this._def.checks.find((ch) => ch.kind === "time");
    }
    get isDuration() {
        return !!this._def.checks.find((ch) => ch.kind === "duration");
    }
    get isEmail() {
        return !!this._def.checks.find((ch) => ch.kind === "email");
    }
    get isURL() {
        return !!this._def.checks.find((ch) => ch.kind === "url");
    }
    get isEmoji() {
        return !!this._def.checks.find((ch) => ch.kind === "emoji");
    }
    get isUUID() {
        return !!this._def.checks.find((ch) => ch.kind === "uuid");
    }
    get isNANOID() {
        return !!this._def.checks.find((ch) => ch.kind === "nanoid");
    }
    get isCUID() {
        return !!this._def.checks.find((ch) => ch.kind === "cuid");
    }
    get isCUID2() {
        return !!this._def.checks.find((ch) => ch.kind === "cuid2");
    }
    get isULID() {
        return !!this._def.checks.find((ch) => ch.kind === "ulid");
    }
    get isIP() {
        return !!this._def.checks.find((ch) => ch.kind === "ip");
    }
    get isCIDR() {
        return !!this._def.checks.find((ch) => ch.kind === "cidr");
    }
    get isBase64() {
        return !!this._def.checks.find((ch) => ch.kind === "base64");
    }
    get isBase64url() {
        // base64url encoding is a modification of base64 that can safely be used in URLs and filenames
        return !!this._def.checks.find((ch) => ch.kind === "base64url");
    }
    get minLength() {
        let min = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "min") {
                if (min === null || ch.value > min)
                    min = ch.value;
            }
        }
        return min;
    }
    get maxLength() {
        let max = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "max") {
                if (max === null || ch.value < max)
                    max = ch.value;
            }
        }
        return max;
    }
}
ZodString.create = (params) => {
    var _a;
    return new ZodString({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodString,
        coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
        ...processCreateParams(params),
    });
};
// https://stackoverflow.com/questions/3966484/why-does-modulus-operator-return-fractional-number-in-javascript/31711034#31711034
function floatSafeRemainder(val, step) {
    const valDecCount = (val.toString().split(".")[1] || "").length;
    const stepDecCount = (step.toString().split(".")[1] || "").length;
    const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
    const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
    const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
    return (valInt % stepInt) / Math.pow(10, decCount);
}
class ZodNumber extends ZodType {
    constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
        this.step = this.multipleOf;
    }
    _parse(input) {
        if (this._def.coerce) {
            input.data = Number(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.number) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.number,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        let ctx = undefined;
        const status = new ParseStatus();
        for (const check of this._def.checks) {
            if (check.kind === "int") {
                if (!util.isInteger(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_type,
                        expected: "integer",
                        received: "float",
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "min") {
                const tooSmall = check.inclusive
                    ? input.data < check.value
                    : input.data <= check.value;
                if (tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        minimum: check.value,
                        type: "number",
                        inclusive: check.inclusive,
                        exact: false,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "max") {
                const tooBig = check.inclusive
                    ? input.data > check.value
                    : input.data >= check.value;
                if (tooBig) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        maximum: check.value,
                        type: "number",
                        inclusive: check.inclusive,
                        exact: false,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "multipleOf") {
                if (floatSafeRemainder(input.data, check.value) !== 0) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.not_multiple_of,
                        multipleOf: check.value,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "finite") {
                if (!Number.isFinite(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.not_finite,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else {
                util.assertNever(check);
            }
        }
        return { status: status.value, value: input.data };
    }
    gte(value, message) {
        return this.setLimit("min", value, true, errorUtil.toString(message));
    }
    gt(value, message) {
        return this.setLimit("min", value, false, errorUtil.toString(message));
    }
    lte(value, message) {
        return this.setLimit("max", value, true, errorUtil.toString(message));
    }
    lt(value, message) {
        return this.setLimit("max", value, false, errorUtil.toString(message));
    }
    setLimit(kind, value, inclusive, message) {
        return new ZodNumber({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind,
                    value,
                    inclusive,
                    message: errorUtil.toString(message),
                },
            ],
        });
    }
    _addCheck(check) {
        return new ZodNumber({
            ...this._def,
            checks: [...this._def.checks, check],
        });
    }
    int(message) {
        return this._addCheck({
            kind: "int",
            message: errorUtil.toString(message),
        });
    }
    positive(message) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: false,
            message: errorUtil.toString(message),
        });
    }
    negative(message) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: false,
            message: errorUtil.toString(message),
        });
    }
    nonpositive(message) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: true,
            message: errorUtil.toString(message),
        });
    }
    nonnegative(message) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: true,
            message: errorUtil.toString(message),
        });
    }
    multipleOf(value, message) {
        return this._addCheck({
            kind: "multipleOf",
            value: value,
            message: errorUtil.toString(message),
        });
    }
    finite(message) {
        return this._addCheck({
            kind: "finite",
            message: errorUtil.toString(message),
        });
    }
    safe(message) {
        return this._addCheck({
            kind: "min",
            inclusive: true,
            value: Number.MIN_SAFE_INTEGER,
            message: errorUtil.toString(message),
        })._addCheck({
            kind: "max",
            inclusive: true,
            value: Number.MAX_SAFE_INTEGER,
            message: errorUtil.toString(message),
        });
    }
    get minValue() {
        let min = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "min") {
                if (min === null || ch.value > min)
                    min = ch.value;
            }
        }
        return min;
    }
    get maxValue() {
        let max = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "max") {
                if (max === null || ch.value < max)
                    max = ch.value;
            }
        }
        return max;
    }
    get isInt() {
        return !!this._def.checks.find((ch) => ch.kind === "int" ||
            (ch.kind === "multipleOf" && util.isInteger(ch.value)));
    }
    get isFinite() {
        let max = null, min = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "finite" ||
                ch.kind === "int" ||
                ch.kind === "multipleOf") {
                return true;
            }
            else if (ch.kind === "min") {
                if (min === null || ch.value > min)
                    min = ch.value;
            }
            else if (ch.kind === "max") {
                if (max === null || ch.value < max)
                    max = ch.value;
            }
        }
        return Number.isFinite(min) && Number.isFinite(max);
    }
}
ZodNumber.create = (params) => {
    return new ZodNumber({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodNumber,
        coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
        ...processCreateParams(params),
    });
};
class ZodBigInt extends ZodType {
    constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
    }
    _parse(input) {
        if (this._def.coerce) {
            try {
                input.data = BigInt(input.data);
            }
            catch (_a) {
                return this._getInvalidInput(input);
            }
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.bigint) {
            return this._getInvalidInput(input);
        }
        let ctx = undefined;
        const status = new ParseStatus();
        for (const check of this._def.checks) {
            if (check.kind === "min") {
                const tooSmall = check.inclusive
                    ? input.data < check.value
                    : input.data <= check.value;
                if (tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        type: "bigint",
                        minimum: check.value,
                        inclusive: check.inclusive,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "max") {
                const tooBig = check.inclusive
                    ? input.data > check.value
                    : input.data >= check.value;
                if (tooBig) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        type: "bigint",
                        maximum: check.value,
                        inclusive: check.inclusive,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "multipleOf") {
                if (input.data % check.value !== BigInt(0)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.not_multiple_of,
                        multipleOf: check.value,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else {
                util.assertNever(check);
            }
        }
        return { status: status.value, value: input.data };
    }
    _getInvalidInput(input) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.bigint,
            received: ctx.parsedType,
        });
        return INVALID;
    }
    gte(value, message) {
        return this.setLimit("min", value, true, errorUtil.toString(message));
    }
    gt(value, message) {
        return this.setLimit("min", value, false, errorUtil.toString(message));
    }
    lte(value, message) {
        return this.setLimit("max", value, true, errorUtil.toString(message));
    }
    lt(value, message) {
        return this.setLimit("max", value, false, errorUtil.toString(message));
    }
    setLimit(kind, value, inclusive, message) {
        return new ZodBigInt({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind,
                    value,
                    inclusive,
                    message: errorUtil.toString(message),
                },
            ],
        });
    }
    _addCheck(check) {
        return new ZodBigInt({
            ...this._def,
            checks: [...this._def.checks, check],
        });
    }
    positive(message) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: false,
            message: errorUtil.toString(message),
        });
    }
    negative(message) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: false,
            message: errorUtil.toString(message),
        });
    }
    nonpositive(message) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: true,
            message: errorUtil.toString(message),
        });
    }
    nonnegative(message) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: true,
            message: errorUtil.toString(message),
        });
    }
    multipleOf(value, message) {
        return this._addCheck({
            kind: "multipleOf",
            value,
            message: errorUtil.toString(message),
        });
    }
    get minValue() {
        let min = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "min") {
                if (min === null || ch.value > min)
                    min = ch.value;
            }
        }
        return min;
    }
    get maxValue() {
        let max = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "max") {
                if (max === null || ch.value < max)
                    max = ch.value;
            }
        }
        return max;
    }
}
ZodBigInt.create = (params) => {
    var _a;
    return new ZodBigInt({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodBigInt,
        coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
        ...processCreateParams(params),
    });
};
class ZodBoolean extends ZodType {
    _parse(input) {
        if (this._def.coerce) {
            input.data = Boolean(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.boolean) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.boolean,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodBoolean.create = (params) => {
    return new ZodBoolean({
        typeName: ZodFirstPartyTypeKind.ZodBoolean,
        coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
        ...processCreateParams(params),
    });
};
class ZodDate extends ZodType {
    _parse(input) {
        if (this._def.coerce) {
            input.data = new Date(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.date) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.date,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        if (isNaN(input.data.getTime())) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_date,
            });
            return INVALID;
        }
        const status = new ParseStatus();
        let ctx = undefined;
        for (const check of this._def.checks) {
            if (check.kind === "min") {
                if (input.data.getTime() < check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        message: check.message,
                        inclusive: true,
                        exact: false,
                        minimum: check.value,
                        type: "date",
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "max") {
                if (input.data.getTime() > check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        message: check.message,
                        inclusive: true,
                        exact: false,
                        maximum: check.value,
                        type: "date",
                    });
                    status.dirty();
                }
            }
            else {
                util.assertNever(check);
            }
        }
        return {
            status: status.value,
            value: new Date(input.data.getTime()),
        };
    }
    _addCheck(check) {
        return new ZodDate({
            ...this._def,
            checks: [...this._def.checks, check],
        });
    }
    min(minDate, message) {
        return this._addCheck({
            kind: "min",
            value: minDate.getTime(),
            message: errorUtil.toString(message),
        });
    }
    max(maxDate, message) {
        return this._addCheck({
            kind: "max",
            value: maxDate.getTime(),
            message: errorUtil.toString(message),
        });
    }
    get minDate() {
        let min = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "min") {
                if (min === null || ch.value > min)
                    min = ch.value;
            }
        }
        return min != null ? new Date(min) : null;
    }
    get maxDate() {
        let max = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "max") {
                if (max === null || ch.value < max)
                    max = ch.value;
            }
        }
        return max != null ? new Date(max) : null;
    }
}
ZodDate.create = (params) => {
    return new ZodDate({
        checks: [],
        coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
        typeName: ZodFirstPartyTypeKind.ZodDate,
        ...processCreateParams(params),
    });
};
class ZodSymbol extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.symbol) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.symbol,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodSymbol.create = (params) => {
    return new ZodSymbol({
        typeName: ZodFirstPartyTypeKind.ZodSymbol,
        ...processCreateParams(params),
    });
};
class ZodUndefined extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.undefined) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.undefined,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodUndefined.create = (params) => {
    return new ZodUndefined({
        typeName: ZodFirstPartyTypeKind.ZodUndefined,
        ...processCreateParams(params),
    });
};
class ZodNull extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.null) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.null,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodNull.create = (params) => {
    return new ZodNull({
        typeName: ZodFirstPartyTypeKind.ZodNull,
        ...processCreateParams(params),
    });
};
class ZodAny extends ZodType {
    constructor() {
        super(...arguments);
        // to prevent instances of other classes from extending ZodAny. this causes issues with catchall in ZodObject.
        this._any = true;
    }
    _parse(input) {
        return OK(input.data);
    }
}
ZodAny.create = (params) => {
    return new ZodAny({
        typeName: ZodFirstPartyTypeKind.ZodAny,
        ...processCreateParams(params),
    });
};
class ZodUnknown extends ZodType {
    constructor() {
        super(...arguments);
        // required
        this._unknown = true;
    }
    _parse(input) {
        return OK(input.data);
    }
}
ZodUnknown.create = (params) => {
    return new ZodUnknown({
        typeName: ZodFirstPartyTypeKind.ZodUnknown,
        ...processCreateParams(params),
    });
};
class ZodNever extends ZodType {
    _parse(input) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.never,
            received: ctx.parsedType,
        });
        return INVALID;
    }
}
ZodNever.create = (params) => {
    return new ZodNever({
        typeName: ZodFirstPartyTypeKind.ZodNever,
        ...processCreateParams(params),
    });
};
class ZodVoid extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.undefined) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.void,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodVoid.create = (params) => {
    return new ZodVoid({
        typeName: ZodFirstPartyTypeKind.ZodVoid,
        ...processCreateParams(params),
    });
};
class ZodArray extends ZodType {
    _parse(input) {
        const { ctx, status } = this._processInputParams(input);
        const def = this._def;
        if (ctx.parsedType !== ZodParsedType.array) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.array,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        if (def.exactLength !== null) {
            const tooBig = ctx.data.length > def.exactLength.value;
            const tooSmall = ctx.data.length < def.exactLength.value;
            if (tooBig || tooSmall) {
                addIssueToContext(ctx, {
                    code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
                    minimum: (tooSmall ? def.exactLength.value : undefined),
                    maximum: (tooBig ? def.exactLength.value : undefined),
                    type: "array",
                    inclusive: true,
                    exact: true,
                    message: def.exactLength.message,
                });
                status.dirty();
            }
        }
        if (def.minLength !== null) {
            if (ctx.data.length < def.minLength.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_small,
                    minimum: def.minLength.value,
                    type: "array",
                    inclusive: true,
                    exact: false,
                    message: def.minLength.message,
                });
                status.dirty();
            }
        }
        if (def.maxLength !== null) {
            if (ctx.data.length > def.maxLength.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_big,
                    maximum: def.maxLength.value,
                    type: "array",
                    inclusive: true,
                    exact: false,
                    message: def.maxLength.message,
                });
                status.dirty();
            }
        }
        if (ctx.common.async) {
            return Promise.all([...ctx.data].map((item, i) => {
                return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
            })).then((result) => {
                return ParseStatus.mergeArray(status, result);
            });
        }
        const result = [...ctx.data].map((item, i) => {
            return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
        });
        return ParseStatus.mergeArray(status, result);
    }
    get element() {
        return this._def.type;
    }
    min(minLength, message) {
        return new ZodArray({
            ...this._def,
            minLength: { value: minLength, message: errorUtil.toString(message) },
        });
    }
    max(maxLength, message) {
        return new ZodArray({
            ...this._def,
            maxLength: { value: maxLength, message: errorUtil.toString(message) },
        });
    }
    length(len, message) {
        return new ZodArray({
            ...this._def,
            exactLength: { value: len, message: errorUtil.toString(message) },
        });
    }
    nonempty(message) {
        return this.min(1, message);
    }
}
ZodArray.create = (schema, params) => {
    return new ZodArray({
        type: schema,
        minLength: null,
        maxLength: null,
        exactLength: null,
        typeName: ZodFirstPartyTypeKind.ZodArray,
        ...processCreateParams(params),
    });
};
function deepPartialify(schema) {
    if (schema instanceof ZodObject) {
        const newShape = {};
        for (const key in schema.shape) {
            const fieldSchema = schema.shape[key];
            newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
        }
        return new ZodObject({
            ...schema._def,
            shape: () => newShape,
        });
    }
    else if (schema instanceof ZodArray) {
        return new ZodArray({
            ...schema._def,
            type: deepPartialify(schema.element),
        });
    }
    else if (schema instanceof ZodOptional) {
        return ZodOptional.create(deepPartialify(schema.unwrap()));
    }
    else if (schema instanceof ZodNullable) {
        return ZodNullable.create(deepPartialify(schema.unwrap()));
    }
    else if (schema instanceof ZodTuple) {
        return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
    }
    else {
        return schema;
    }
}
class ZodObject extends ZodType {
    constructor() {
        super(...arguments);
        this._cached = null;
        /**
         * @deprecated In most cases, this is no longer needed - unknown properties are now silently stripped.
         * If you want to pass through unknown properties, use `.passthrough()` instead.
         */
        this.nonstrict = this.passthrough;
        // extend<
        //   Augmentation extends ZodRawShape,
        //   NewOutput extends util.flatten<{
        //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
        //       ? Augmentation[k]["_output"]
        //       : k extends keyof Output
        //       ? Output[k]
        //       : never;
        //   }>,
        //   NewInput extends util.flatten<{
        //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
        //       ? Augmentation[k]["_input"]
        //       : k extends keyof Input
        //       ? Input[k]
        //       : never;
        //   }>
        // >(
        //   augmentation: Augmentation
        // ): ZodObject<
        //   extendShape<T, Augmentation>,
        //   UnknownKeys,
        //   Catchall,
        //   NewOutput,
        //   NewInput
        // > {
        //   return new ZodObject({
        //     ...this._def,
        //     shape: () => ({
        //       ...this._def.shape(),
        //       ...augmentation,
        //     }),
        //   }) as any;
        // }
        /**
         * @deprecated Use `.extend` instead
         *  */
        this.augment = this.extend;
    }
    _getCached() {
        if (this._cached !== null)
            return this._cached;
        const shape = this._def.shape();
        const keys = util.objectKeys(shape);
        return (this._cached = { shape, keys });
    }
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.object) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.object,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const { status, ctx } = this._processInputParams(input);
        const { shape, keys: shapeKeys } = this._getCached();
        const extraKeys = [];
        if (!(this._def.catchall instanceof ZodNever &&
            this._def.unknownKeys === "strip")) {
            for (const key in ctx.data) {
                if (!shapeKeys.includes(key)) {
                    extraKeys.push(key);
                }
            }
        }
        const pairs = [];
        for (const key of shapeKeys) {
            const keyValidator = shape[key];
            const value = ctx.data[key];
            pairs.push({
                key: { status: "valid", value: key },
                value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
                alwaysSet: key in ctx.data,
            });
        }
        if (this._def.catchall instanceof ZodNever) {
            const unknownKeys = this._def.unknownKeys;
            if (unknownKeys === "passthrough") {
                for (const key of extraKeys) {
                    pairs.push({
                        key: { status: "valid", value: key },
                        value: { status: "valid", value: ctx.data[key] },
                    });
                }
            }
            else if (unknownKeys === "strict") {
                if (extraKeys.length > 0) {
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.unrecognized_keys,
                        keys: extraKeys,
                    });
                    status.dirty();
                }
            }
            else if (unknownKeys === "strip") ;
            else {
                throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
            }
        }
        else {
            // run catchall validation
            const catchall = this._def.catchall;
            for (const key of extraKeys) {
                const value = ctx.data[key];
                pairs.push({
                    key: { status: "valid", value: key },
                    value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, key) //, ctx.child(key), value, getParsedType(value)
                    ),
                    alwaysSet: key in ctx.data,
                });
            }
        }
        if (ctx.common.async) {
            return Promise.resolve()
                .then(async () => {
                const syncPairs = [];
                for (const pair of pairs) {
                    const key = await pair.key;
                    const value = await pair.value;
                    syncPairs.push({
                        key,
                        value,
                        alwaysSet: pair.alwaysSet,
                    });
                }
                return syncPairs;
            })
                .then((syncPairs) => {
                return ParseStatus.mergeObjectSync(status, syncPairs);
            });
        }
        else {
            return ParseStatus.mergeObjectSync(status, pairs);
        }
    }
    get shape() {
        return this._def.shape();
    }
    strict(message) {
        errorUtil.errToObj;
        return new ZodObject({
            ...this._def,
            unknownKeys: "strict",
            ...(message !== undefined
                ? {
                    errorMap: (issue, ctx) => {
                        var _a, _b, _c, _d;
                        const defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
                        if (issue.code === "unrecognized_keys")
                            return {
                                message: (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError,
                            };
                        return {
                            message: defaultError,
                        };
                    },
                }
                : {}),
        });
    }
    strip() {
        return new ZodObject({
            ...this._def,
            unknownKeys: "strip",
        });
    }
    passthrough() {
        return new ZodObject({
            ...this._def,
            unknownKeys: "passthrough",
        });
    }
    // const AugmentFactory =
    //   <Def extends ZodObjectDef>(def: Def) =>
    //   <Augmentation extends ZodRawShape>(
    //     augmentation: Augmentation
    //   ): ZodObject<
    //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
    //     Def["unknownKeys"],
    //     Def["catchall"]
    //   > => {
    //     return new ZodObject({
    //       ...def,
    //       shape: () => ({
    //         ...def.shape(),
    //         ...augmentation,
    //       }),
    //     }) as any;
    //   };
    extend(augmentation) {
        return new ZodObject({
            ...this._def,
            shape: () => ({
                ...this._def.shape(),
                ...augmentation,
            }),
        });
    }
    /**
     * Prior to zod@1.0.12 there was a bug in the
     * inferred type of merged objects. Please
     * upgrade if you are experiencing issues.
     */
    merge(merging) {
        const merged = new ZodObject({
            unknownKeys: merging._def.unknownKeys,
            catchall: merging._def.catchall,
            shape: () => ({
                ...this._def.shape(),
                ...merging._def.shape(),
            }),
            typeName: ZodFirstPartyTypeKind.ZodObject,
        });
        return merged;
    }
    // merge<
    //   Incoming extends AnyZodObject,
    //   Augmentation extends Incoming["shape"],
    //   NewOutput extends {
    //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
    //       ? Augmentation[k]["_output"]
    //       : k extends keyof Output
    //       ? Output[k]
    //       : never;
    //   },
    //   NewInput extends {
    //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
    //       ? Augmentation[k]["_input"]
    //       : k extends keyof Input
    //       ? Input[k]
    //       : never;
    //   }
    // >(
    //   merging: Incoming
    // ): ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"],
    //   NewOutput,
    //   NewInput
    // > {
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    setKey(key, schema) {
        return this.augment({ [key]: schema });
    }
    // merge<Incoming extends AnyZodObject>(
    //   merging: Incoming
    // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
    // ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"]
    // > {
    //   // const mergedShape = objectUtil.mergeShapes(
    //   //   this._def.shape(),
    //   //   merging._def.shape()
    //   // );
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    catchall(index) {
        return new ZodObject({
            ...this._def,
            catchall: index,
        });
    }
    pick(mask) {
        const shape = {};
        util.objectKeys(mask).forEach((key) => {
            if (mask[key] && this.shape[key]) {
                shape[key] = this.shape[key];
            }
        });
        return new ZodObject({
            ...this._def,
            shape: () => shape,
        });
    }
    omit(mask) {
        const shape = {};
        util.objectKeys(this.shape).forEach((key) => {
            if (!mask[key]) {
                shape[key] = this.shape[key];
            }
        });
        return new ZodObject({
            ...this._def,
            shape: () => shape,
        });
    }
    /**
     * @deprecated
     */
    deepPartial() {
        return deepPartialify(this);
    }
    partial(mask) {
        const newShape = {};
        util.objectKeys(this.shape).forEach((key) => {
            const fieldSchema = this.shape[key];
            if (mask && !mask[key]) {
                newShape[key] = fieldSchema;
            }
            else {
                newShape[key] = fieldSchema.optional();
            }
        });
        return new ZodObject({
            ...this._def,
            shape: () => newShape,
        });
    }
    required(mask) {
        const newShape = {};
        util.objectKeys(this.shape).forEach((key) => {
            if (mask && !mask[key]) {
                newShape[key] = this.shape[key];
            }
            else {
                const fieldSchema = this.shape[key];
                let newField = fieldSchema;
                while (newField instanceof ZodOptional) {
                    newField = newField._def.innerType;
                }
                newShape[key] = newField;
            }
        });
        return new ZodObject({
            ...this._def,
            shape: () => newShape,
        });
    }
    keyof() {
        return createZodEnum(util.objectKeys(this.shape));
    }
}
ZodObject.create = (shape, params) => {
    return new ZodObject({
        shape: () => shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params),
    });
};
ZodObject.strictCreate = (shape, params) => {
    return new ZodObject({
        shape: () => shape,
        unknownKeys: "strict",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params),
    });
};
ZodObject.lazycreate = (shape, params) => {
    return new ZodObject({
        shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params),
    });
};
class ZodUnion extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const options = this._def.options;
        function handleResults(results) {
            // return first issue-free validation if it exists
            for (const result of results) {
                if (result.result.status === "valid") {
                    return result.result;
                }
            }
            for (const result of results) {
                if (result.result.status === "dirty") {
                    // add issues from dirty option
                    ctx.common.issues.push(...result.ctx.common.issues);
                    return result.result;
                }
            }
            // return invalid
            const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_union,
                unionErrors,
            });
            return INVALID;
        }
        if (ctx.common.async) {
            return Promise.all(options.map(async (option) => {
                const childCtx = {
                    ...ctx,
                    common: {
                        ...ctx.common,
                        issues: [],
                    },
                    parent: null,
                };
                return {
                    result: await option._parseAsync({
                        data: ctx.data,
                        path: ctx.path,
                        parent: childCtx,
                    }),
                    ctx: childCtx,
                };
            })).then(handleResults);
        }
        else {
            let dirty = undefined;
            const issues = [];
            for (const option of options) {
                const childCtx = {
                    ...ctx,
                    common: {
                        ...ctx.common,
                        issues: [],
                    },
                    parent: null,
                };
                const result = option._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: childCtx,
                });
                if (result.status === "valid") {
                    return result;
                }
                else if (result.status === "dirty" && !dirty) {
                    dirty = { result, ctx: childCtx };
                }
                if (childCtx.common.issues.length) {
                    issues.push(childCtx.common.issues);
                }
            }
            if (dirty) {
                ctx.common.issues.push(...dirty.ctx.common.issues);
                return dirty.result;
            }
            const unionErrors = issues.map((issues) => new ZodError(issues));
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_union,
                unionErrors,
            });
            return INVALID;
        }
    }
    get options() {
        return this._def.options;
    }
}
ZodUnion.create = (types, params) => {
    return new ZodUnion({
        options: types,
        typeName: ZodFirstPartyTypeKind.ZodUnion,
        ...processCreateParams(params),
    });
};
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//////////                                 //////////
//////////      ZodDiscriminatedUnion      //////////
//////////                                 //////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
const getDiscriminator = (type) => {
    if (type instanceof ZodLazy) {
        return getDiscriminator(type.schema);
    }
    else if (type instanceof ZodEffects) {
        return getDiscriminator(type.innerType());
    }
    else if (type instanceof ZodLiteral) {
        return [type.value];
    }
    else if (type instanceof ZodEnum) {
        return type.options;
    }
    else if (type instanceof ZodNativeEnum) {
        // eslint-disable-next-line ban/ban
        return util.objectValues(type.enum);
    }
    else if (type instanceof ZodDefault) {
        return getDiscriminator(type._def.innerType);
    }
    else if (type instanceof ZodUndefined) {
        return [undefined];
    }
    else if (type instanceof ZodNull) {
        return [null];
    }
    else if (type instanceof ZodOptional) {
        return [undefined, ...getDiscriminator(type.unwrap())];
    }
    else if (type instanceof ZodNullable) {
        return [null, ...getDiscriminator(type.unwrap())];
    }
    else if (type instanceof ZodBranded) {
        return getDiscriminator(type.unwrap());
    }
    else if (type instanceof ZodReadonly) {
        return getDiscriminator(type.unwrap());
    }
    else if (type instanceof ZodCatch) {
        return getDiscriminator(type._def.innerType);
    }
    else {
        return [];
    }
};
class ZodDiscriminatedUnion extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.object) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.object,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const discriminator = this.discriminator;
        const discriminatorValue = ctx.data[discriminator];
        const option = this.optionsMap.get(discriminatorValue);
        if (!option) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_union_discriminator,
                options: Array.from(this.optionsMap.keys()),
                path: [discriminator],
            });
            return INVALID;
        }
        if (ctx.common.async) {
            return option._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            });
        }
        else {
            return option._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            });
        }
    }
    get discriminator() {
        return this._def.discriminator;
    }
    get options() {
        return this._def.options;
    }
    get optionsMap() {
        return this._def.optionsMap;
    }
    /**
     * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
     * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
     * have a different value for each object in the union.
     * @param discriminator the name of the discriminator property
     * @param types an array of object schemas
     * @param params
     */
    static create(discriminator, options, params) {
        // Get all the valid discriminator values
        const optionsMap = new Map();
        // try {
        for (const type of options) {
            const discriminatorValues = getDiscriminator(type.shape[discriminator]);
            if (!discriminatorValues.length) {
                throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
            }
            for (const value of discriminatorValues) {
                if (optionsMap.has(value)) {
                    throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
                }
                optionsMap.set(value, type);
            }
        }
        return new ZodDiscriminatedUnion({
            typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
            discriminator,
            options,
            optionsMap,
            ...processCreateParams(params),
        });
    }
}
function mergeValues(a, b) {
    const aType = getParsedType(a);
    const bType = getParsedType(b);
    if (a === b) {
        return { valid: true, data: a };
    }
    else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
        const bKeys = util.objectKeys(b);
        const sharedKeys = util
            .objectKeys(a)
            .filter((key) => bKeys.indexOf(key) !== -1);
        const newObj = { ...a, ...b };
        for (const key of sharedKeys) {
            const sharedValue = mergeValues(a[key], b[key]);
            if (!sharedValue.valid) {
                return { valid: false };
            }
            newObj[key] = sharedValue.data;
        }
        return { valid: true, data: newObj };
    }
    else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
        if (a.length !== b.length) {
            return { valid: false };
        }
        const newArray = [];
        for (let index = 0; index < a.length; index++) {
            const itemA = a[index];
            const itemB = b[index];
            const sharedValue = mergeValues(itemA, itemB);
            if (!sharedValue.valid) {
                return { valid: false };
            }
            newArray.push(sharedValue.data);
        }
        return { valid: true, data: newArray };
    }
    else if (aType === ZodParsedType.date &&
        bType === ZodParsedType.date &&
        +a === +b) {
        return { valid: true, data: a };
    }
    else {
        return { valid: false };
    }
}
class ZodIntersection extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const handleParsed = (parsedLeft, parsedRight) => {
            if (isAborted(parsedLeft) || isAborted(parsedRight)) {
                return INVALID;
            }
            const merged = mergeValues(parsedLeft.value, parsedRight.value);
            if (!merged.valid) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_intersection_types,
                });
                return INVALID;
            }
            if (isDirty(parsedLeft) || isDirty(parsedRight)) {
                status.dirty();
            }
            return { status: status.value, value: merged.data };
        };
        if (ctx.common.async) {
            return Promise.all([
                this._def.left._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                }),
                this._def.right._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                }),
            ]).then(([left, right]) => handleParsed(left, right));
        }
        else {
            return handleParsed(this._def.left._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            }), this._def.right._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            }));
        }
    }
}
ZodIntersection.create = (left, right, params) => {
    return new ZodIntersection({
        left: left,
        right: right,
        typeName: ZodFirstPartyTypeKind.ZodIntersection,
        ...processCreateParams(params),
    });
};
class ZodTuple extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.array) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.array,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        if (ctx.data.length < this._def.items.length) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                minimum: this._def.items.length,
                inclusive: true,
                exact: false,
                type: "array",
            });
            return INVALID;
        }
        const rest = this._def.rest;
        if (!rest && ctx.data.length > this._def.items.length) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                maximum: this._def.items.length,
                inclusive: true,
                exact: false,
                type: "array",
            });
            status.dirty();
        }
        const items = [...ctx.data]
            .map((item, itemIndex) => {
            const schema = this._def.items[itemIndex] || this._def.rest;
            if (!schema)
                return null;
            return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
        })
            .filter((x) => !!x); // filter nulls
        if (ctx.common.async) {
            return Promise.all(items).then((results) => {
                return ParseStatus.mergeArray(status, results);
            });
        }
        else {
            return ParseStatus.mergeArray(status, items);
        }
    }
    get items() {
        return this._def.items;
    }
    rest(rest) {
        return new ZodTuple({
            ...this._def,
            rest,
        });
    }
}
ZodTuple.create = (schemas, params) => {
    if (!Array.isArray(schemas)) {
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    }
    return new ZodTuple({
        items: schemas,
        typeName: ZodFirstPartyTypeKind.ZodTuple,
        rest: null,
        ...processCreateParams(params),
    });
};
class ZodRecord extends ZodType {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.object) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.object,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const pairs = [];
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        for (const key in ctx.data) {
            pairs.push({
                key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
                value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
                alwaysSet: key in ctx.data,
            });
        }
        if (ctx.common.async) {
            return ParseStatus.mergeObjectAsync(status, pairs);
        }
        else {
            return ParseStatus.mergeObjectSync(status, pairs);
        }
    }
    get element() {
        return this._def.valueType;
    }
    static create(first, second, third) {
        if (second instanceof ZodType) {
            return new ZodRecord({
                keyType: first,
                valueType: second,
                typeName: ZodFirstPartyTypeKind.ZodRecord,
                ...processCreateParams(third),
            });
        }
        return new ZodRecord({
            keyType: ZodString.create(),
            valueType: first,
            typeName: ZodFirstPartyTypeKind.ZodRecord,
            ...processCreateParams(second),
        });
    }
}
class ZodMap extends ZodType {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.map) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.map,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        const pairs = [...ctx.data.entries()].map(([key, value], index) => {
            return {
                key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
                value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"])),
            };
        });
        if (ctx.common.async) {
            const finalMap = new Map();
            return Promise.resolve().then(async () => {
                for (const pair of pairs) {
                    const key = await pair.key;
                    const value = await pair.value;
                    if (key.status === "aborted" || value.status === "aborted") {
                        return INVALID;
                    }
                    if (key.status === "dirty" || value.status === "dirty") {
                        status.dirty();
                    }
                    finalMap.set(key.value, value.value);
                }
                return { status: status.value, value: finalMap };
            });
        }
        else {
            const finalMap = new Map();
            for (const pair of pairs) {
                const key = pair.key;
                const value = pair.value;
                if (key.status === "aborted" || value.status === "aborted") {
                    return INVALID;
                }
                if (key.status === "dirty" || value.status === "dirty") {
                    status.dirty();
                }
                finalMap.set(key.value, value.value);
            }
            return { status: status.value, value: finalMap };
        }
    }
}
ZodMap.create = (keyType, valueType, params) => {
    return new ZodMap({
        valueType,
        keyType,
        typeName: ZodFirstPartyTypeKind.ZodMap,
        ...processCreateParams(params),
    });
};
class ZodSet extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.set) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.set,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const def = this._def;
        if (def.minSize !== null) {
            if (ctx.data.size < def.minSize.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_small,
                    minimum: def.minSize.value,
                    type: "set",
                    inclusive: true,
                    exact: false,
                    message: def.minSize.message,
                });
                status.dirty();
            }
        }
        if (def.maxSize !== null) {
            if (ctx.data.size > def.maxSize.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_big,
                    maximum: def.maxSize.value,
                    type: "set",
                    inclusive: true,
                    exact: false,
                    message: def.maxSize.message,
                });
                status.dirty();
            }
        }
        const valueType = this._def.valueType;
        function finalizeSet(elements) {
            const parsedSet = new Set();
            for (const element of elements) {
                if (element.status === "aborted")
                    return INVALID;
                if (element.status === "dirty")
                    status.dirty();
                parsedSet.add(element.value);
            }
            return { status: status.value, value: parsedSet };
        }
        const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
        if (ctx.common.async) {
            return Promise.all(elements).then((elements) => finalizeSet(elements));
        }
        else {
            return finalizeSet(elements);
        }
    }
    min(minSize, message) {
        return new ZodSet({
            ...this._def,
            minSize: { value: minSize, message: errorUtil.toString(message) },
        });
    }
    max(maxSize, message) {
        return new ZodSet({
            ...this._def,
            maxSize: { value: maxSize, message: errorUtil.toString(message) },
        });
    }
    size(size, message) {
        return this.min(size, message).max(size, message);
    }
    nonempty(message) {
        return this.min(1, message);
    }
}
ZodSet.create = (valueType, params) => {
    return new ZodSet({
        valueType,
        minSize: null,
        maxSize: null,
        typeName: ZodFirstPartyTypeKind.ZodSet,
        ...processCreateParams(params),
    });
};
class ZodFunction extends ZodType {
    constructor() {
        super(...arguments);
        this.validate = this.implement;
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.function) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.function,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        function makeArgsIssue(args, error) {
            return makeIssue({
                data: args,
                path: ctx.path,
                errorMaps: [
                    ctx.common.contextualErrorMap,
                    ctx.schemaErrorMap,
                    getErrorMap(),
                    errorMap,
                ].filter((x) => !!x),
                issueData: {
                    code: ZodIssueCode.invalid_arguments,
                    argumentsError: error,
                },
            });
        }
        function makeReturnsIssue(returns, error) {
            return makeIssue({
                data: returns,
                path: ctx.path,
                errorMaps: [
                    ctx.common.contextualErrorMap,
                    ctx.schemaErrorMap,
                    getErrorMap(),
                    errorMap,
                ].filter((x) => !!x),
                issueData: {
                    code: ZodIssueCode.invalid_return_type,
                    returnTypeError: error,
                },
            });
        }
        const params = { errorMap: ctx.common.contextualErrorMap };
        const fn = ctx.data;
        if (this._def.returns instanceof ZodPromise) {
            // Would love a way to avoid disabling this rule, but we need
            // an alias (using an arrow function was what caused 2651).
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const me = this;
            return OK(async function (...args) {
                const error = new ZodError([]);
                const parsedArgs = await me._def.args
                    .parseAsync(args, params)
                    .catch((e) => {
                    error.addIssue(makeArgsIssue(args, e));
                    throw error;
                });
                const result = await Reflect.apply(fn, this, parsedArgs);
                const parsedReturns = await me._def.returns._def.type
                    .parseAsync(result, params)
                    .catch((e) => {
                    error.addIssue(makeReturnsIssue(result, e));
                    throw error;
                });
                return parsedReturns;
            });
        }
        else {
            // Would love a way to avoid disabling this rule, but we need
            // an alias (using an arrow function was what caused 2651).
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const me = this;
            return OK(function (...args) {
                const parsedArgs = me._def.args.safeParse(args, params);
                if (!parsedArgs.success) {
                    throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
                }
                const result = Reflect.apply(fn, this, parsedArgs.data);
                const parsedReturns = me._def.returns.safeParse(result, params);
                if (!parsedReturns.success) {
                    throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
                }
                return parsedReturns.data;
            });
        }
    }
    parameters() {
        return this._def.args;
    }
    returnType() {
        return this._def.returns;
    }
    args(...items) {
        return new ZodFunction({
            ...this._def,
            args: ZodTuple.create(items).rest(ZodUnknown.create()),
        });
    }
    returns(returnType) {
        return new ZodFunction({
            ...this._def,
            returns: returnType,
        });
    }
    implement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
    }
    strictImplement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
    }
    static create(args, returns, params) {
        return new ZodFunction({
            args: (args
                ? args
                : ZodTuple.create([]).rest(ZodUnknown.create())),
            returns: returns || ZodUnknown.create(),
            typeName: ZodFirstPartyTypeKind.ZodFunction,
            ...processCreateParams(params),
        });
    }
}
class ZodLazy extends ZodType {
    get schema() {
        return this._def.getter();
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const lazySchema = this._def.getter();
        return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
    }
}
ZodLazy.create = (getter, params) => {
    return new ZodLazy({
        getter: getter,
        typeName: ZodFirstPartyTypeKind.ZodLazy,
        ...processCreateParams(params),
    });
};
class ZodLiteral extends ZodType {
    _parse(input) {
        if (input.data !== this._def.value) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                received: ctx.data,
                code: ZodIssueCode.invalid_literal,
                expected: this._def.value,
            });
            return INVALID;
        }
        return { status: "valid", value: input.data };
    }
    get value() {
        return this._def.value;
    }
}
ZodLiteral.create = (value, params) => {
    return new ZodLiteral({
        value: value,
        typeName: ZodFirstPartyTypeKind.ZodLiteral,
        ...processCreateParams(params),
    });
};
function createZodEnum(values, params) {
    return new ZodEnum({
        values,
        typeName: ZodFirstPartyTypeKind.ZodEnum,
        ...processCreateParams(params),
    });
}
class ZodEnum extends ZodType {
    constructor() {
        super(...arguments);
        _ZodEnum_cache.set(this, void 0);
    }
    _parse(input) {
        if (typeof input.data !== "string") {
            const ctx = this._getOrReturnCtx(input);
            const expectedValues = this._def.values;
            addIssueToContext(ctx, {
                expected: util.joinValues(expectedValues),
                received: ctx.parsedType,
                code: ZodIssueCode.invalid_type,
            });
            return INVALID;
        }
        if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f")) {
            __classPrivateFieldSet(this, _ZodEnum_cache, new Set(this._def.values), "f");
        }
        if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f").has(input.data)) {
            const ctx = this._getOrReturnCtx(input);
            const expectedValues = this._def.values;
            addIssueToContext(ctx, {
                received: ctx.data,
                code: ZodIssueCode.invalid_enum_value,
                options: expectedValues,
            });
            return INVALID;
        }
        return OK(input.data);
    }
    get options() {
        return this._def.values;
    }
    get enum() {
        const enumValues = {};
        for (const val of this._def.values) {
            enumValues[val] = val;
        }
        return enumValues;
    }
    get Values() {
        const enumValues = {};
        for (const val of this._def.values) {
            enumValues[val] = val;
        }
        return enumValues;
    }
    get Enum() {
        const enumValues = {};
        for (const val of this._def.values) {
            enumValues[val] = val;
        }
        return enumValues;
    }
    extract(values, newDef = this._def) {
        return ZodEnum.create(values, {
            ...this._def,
            ...newDef,
        });
    }
    exclude(values, newDef = this._def) {
        return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
            ...this._def,
            ...newDef,
        });
    }
}
_ZodEnum_cache = new WeakMap();
ZodEnum.create = createZodEnum;
class ZodNativeEnum extends ZodType {
    constructor() {
        super(...arguments);
        _ZodNativeEnum_cache.set(this, void 0);
    }
    _parse(input) {
        const nativeEnumValues = util.getValidEnumValues(this._def.values);
        const ctx = this._getOrReturnCtx(input);
        if (ctx.parsedType !== ZodParsedType.string &&
            ctx.parsedType !== ZodParsedType.number) {
            const expectedValues = util.objectValues(nativeEnumValues);
            addIssueToContext(ctx, {
                expected: util.joinValues(expectedValues),
                received: ctx.parsedType,
                code: ZodIssueCode.invalid_type,
            });
            return INVALID;
        }
        if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f")) {
            __classPrivateFieldSet(this, _ZodNativeEnum_cache, new Set(util.getValidEnumValues(this._def.values)), "f");
        }
        if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f").has(input.data)) {
            const expectedValues = util.objectValues(nativeEnumValues);
            addIssueToContext(ctx, {
                received: ctx.data,
                code: ZodIssueCode.invalid_enum_value,
                options: expectedValues,
            });
            return INVALID;
        }
        return OK(input.data);
    }
    get enum() {
        return this._def.values;
    }
}
_ZodNativeEnum_cache = new WeakMap();
ZodNativeEnum.create = (values, params) => {
    return new ZodNativeEnum({
        values: values,
        typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
        ...processCreateParams(params),
    });
};
class ZodPromise extends ZodType {
    unwrap() {
        return this._def.type;
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.promise &&
            ctx.common.async === false) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.promise,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const promisified = ctx.parsedType === ZodParsedType.promise
            ? ctx.data
            : Promise.resolve(ctx.data);
        return OK(promisified.then((data) => {
            return this._def.type.parseAsync(data, {
                path: ctx.path,
                errorMap: ctx.common.contextualErrorMap,
            });
        }));
    }
}
ZodPromise.create = (schema, params) => {
    return new ZodPromise({
        type: schema,
        typeName: ZodFirstPartyTypeKind.ZodPromise,
        ...processCreateParams(params),
    });
};
class ZodEffects extends ZodType {
    innerType() {
        return this._def.schema;
    }
    sourceType() {
        return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects
            ? this._def.schema.sourceType()
            : this._def.schema;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const effect = this._def.effect || null;
        const checkCtx = {
            addIssue: (arg) => {
                addIssueToContext(ctx, arg);
                if (arg.fatal) {
                    status.abort();
                }
                else {
                    status.dirty();
                }
            },
            get path() {
                return ctx.path;
            },
        };
        checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
        if (effect.type === "preprocess") {
            const processed = effect.transform(ctx.data, checkCtx);
            if (ctx.common.async) {
                return Promise.resolve(processed).then(async (processed) => {
                    if (status.value === "aborted")
                        return INVALID;
                    const result = await this._def.schema._parseAsync({
                        data: processed,
                        path: ctx.path,
                        parent: ctx,
                    });
                    if (result.status === "aborted")
                        return INVALID;
                    if (result.status === "dirty")
                        return DIRTY(result.value);
                    if (status.value === "dirty")
                        return DIRTY(result.value);
                    return result;
                });
            }
            else {
                if (status.value === "aborted")
                    return INVALID;
                const result = this._def.schema._parseSync({
                    data: processed,
                    path: ctx.path,
                    parent: ctx,
                });
                if (result.status === "aborted")
                    return INVALID;
                if (result.status === "dirty")
                    return DIRTY(result.value);
                if (status.value === "dirty")
                    return DIRTY(result.value);
                return result;
            }
        }
        if (effect.type === "refinement") {
            const executeRefinement = (acc) => {
                const result = effect.refinement(acc, checkCtx);
                if (ctx.common.async) {
                    return Promise.resolve(result);
                }
                if (result instanceof Promise) {
                    throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                }
                return acc;
            };
            if (ctx.common.async === false) {
                const inner = this._def.schema._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                });
                if (inner.status === "aborted")
                    return INVALID;
                if (inner.status === "dirty")
                    status.dirty();
                // return value is ignored
                executeRefinement(inner.value);
                return { status: status.value, value: inner.value };
            }
            else {
                return this._def.schema
                    ._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx })
                    .then((inner) => {
                    if (inner.status === "aborted")
                        return INVALID;
                    if (inner.status === "dirty")
                        status.dirty();
                    return executeRefinement(inner.value).then(() => {
                        return { status: status.value, value: inner.value };
                    });
                });
            }
        }
        if (effect.type === "transform") {
            if (ctx.common.async === false) {
                const base = this._def.schema._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                });
                if (!isValid(base))
                    return base;
                const result = effect.transform(base.value, checkCtx);
                if (result instanceof Promise) {
                    throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
                }
                return { status: status.value, value: result };
            }
            else {
                return this._def.schema
                    ._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx })
                    .then((base) => {
                    if (!isValid(base))
                        return base;
                    return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({ status: status.value, value: result }));
                });
            }
        }
        util.assertNever(effect);
    }
}
ZodEffects.create = (schema, effect, params) => {
    return new ZodEffects({
        schema,
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        effect,
        ...processCreateParams(params),
    });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
    return new ZodEffects({
        schema,
        effect: { type: "preprocess", transform: preprocess },
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        ...processCreateParams(params),
    });
};
class ZodOptional extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === ZodParsedType.undefined) {
            return OK(undefined);
        }
        return this._def.innerType._parse(input);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ZodOptional.create = (type, params) => {
    return new ZodOptional({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodOptional,
        ...processCreateParams(params),
    });
};
class ZodNullable extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === ZodParsedType.null) {
            return OK(null);
        }
        return this._def.innerType._parse(input);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ZodNullable.create = (type, params) => {
    return new ZodNullable({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodNullable,
        ...processCreateParams(params),
    });
};
class ZodDefault extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        let data = ctx.data;
        if (ctx.parsedType === ZodParsedType.undefined) {
            data = this._def.defaultValue();
        }
        return this._def.innerType._parse({
            data,
            path: ctx.path,
            parent: ctx,
        });
    }
    removeDefault() {
        return this._def.innerType;
    }
}
ZodDefault.create = (type, params) => {
    return new ZodDefault({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodDefault,
        defaultValue: typeof params.default === "function"
            ? params.default
            : () => params.default,
        ...processCreateParams(params),
    });
};
class ZodCatch extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        // newCtx is used to not collect issues from inner types in ctx
        const newCtx = {
            ...ctx,
            common: {
                ...ctx.common,
                issues: [],
            },
        };
        const result = this._def.innerType._parse({
            data: newCtx.data,
            path: newCtx.path,
            parent: {
                ...newCtx,
            },
        });
        if (isAsync(result)) {
            return result.then((result) => {
                return {
                    status: "valid",
                    value: result.status === "valid"
                        ? result.value
                        : this._def.catchValue({
                            get error() {
                                return new ZodError(newCtx.common.issues);
                            },
                            input: newCtx.data,
                        }),
                };
            });
        }
        else {
            return {
                status: "valid",
                value: result.status === "valid"
                    ? result.value
                    : this._def.catchValue({
                        get error() {
                            return new ZodError(newCtx.common.issues);
                        },
                        input: newCtx.data,
                    }),
            };
        }
    }
    removeCatch() {
        return this._def.innerType;
    }
}
ZodCatch.create = (type, params) => {
    return new ZodCatch({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodCatch,
        catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
        ...processCreateParams(params),
    });
};
class ZodNaN extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.nan) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.nan,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return { status: "valid", value: input.data };
    }
}
ZodNaN.create = (params) => {
    return new ZodNaN({
        typeName: ZodFirstPartyTypeKind.ZodNaN,
        ...processCreateParams(params),
    });
};
const BRAND = Symbol("zod_brand");
class ZodBranded extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const data = ctx.data;
        return this._def.type._parse({
            data,
            path: ctx.path,
            parent: ctx,
        });
    }
    unwrap() {
        return this._def.type;
    }
}
class ZodPipeline extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.common.async) {
            const handleAsync = async () => {
                const inResult = await this._def.in._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                });
                if (inResult.status === "aborted")
                    return INVALID;
                if (inResult.status === "dirty") {
                    status.dirty();
                    return DIRTY(inResult.value);
                }
                else {
                    return this._def.out._parseAsync({
                        data: inResult.value,
                        path: ctx.path,
                        parent: ctx,
                    });
                }
            };
            return handleAsync();
        }
        else {
            const inResult = this._def.in._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            });
            if (inResult.status === "aborted")
                return INVALID;
            if (inResult.status === "dirty") {
                status.dirty();
                return {
                    status: "dirty",
                    value: inResult.value,
                };
            }
            else {
                return this._def.out._parseSync({
                    data: inResult.value,
                    path: ctx.path,
                    parent: ctx,
                });
            }
        }
    }
    static create(a, b) {
        return new ZodPipeline({
            in: a,
            out: b,
            typeName: ZodFirstPartyTypeKind.ZodPipeline,
        });
    }
}
class ZodReadonly extends ZodType {
    _parse(input) {
        const result = this._def.innerType._parse(input);
        const freeze = (data) => {
            if (isValid(data)) {
                data.value = Object.freeze(data.value);
            }
            return data;
        };
        return isAsync(result)
            ? result.then((data) => freeze(data))
            : freeze(result);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ZodReadonly.create = (type, params) => {
    return new ZodReadonly({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodReadonly,
        ...processCreateParams(params),
    });
};
////////////////////////////////////////
////////////////////////////////////////
//////////                    //////////
//////////      z.custom      //////////
//////////                    //////////
////////////////////////////////////////
////////////////////////////////////////
function cleanParams(params, data) {
    const p = typeof params === "function"
        ? params(data)
        : typeof params === "string"
            ? { message: params }
            : params;
    const p2 = typeof p === "string" ? { message: p } : p;
    return p2;
}
function custom(check, _params = {}, 
/**
 * @deprecated
 *
 * Pass `fatal` into the params object instead:
 *
 * ```ts
 * z.string().custom((val) => val.length > 5, { fatal: false })
 * ```
 *
 */
fatal) {
    if (check)
        return ZodAny.create().superRefine((data, ctx) => {
            var _a, _b;
            const r = check(data);
            if (r instanceof Promise) {
                return r.then((r) => {
                    var _a, _b;
                    if (!r) {
                        const params = cleanParams(_params, data);
                        const _fatal = (_b = (_a = params.fatal) !== null && _a !== void 0 ? _a : fatal) !== null && _b !== void 0 ? _b : true;
                        ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
                    }
                });
            }
            if (!r) {
                const params = cleanParams(_params, data);
                const _fatal = (_b = (_a = params.fatal) !== null && _a !== void 0 ? _a : fatal) !== null && _b !== void 0 ? _b : true;
                ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
            }
            return;
        });
    return ZodAny.create();
}
const late = {
    object: ZodObject.lazycreate,
};
var ZodFirstPartyTypeKind;
(function (ZodFirstPartyTypeKind) {
    ZodFirstPartyTypeKind["ZodString"] = "ZodString";
    ZodFirstPartyTypeKind["ZodNumber"] = "ZodNumber";
    ZodFirstPartyTypeKind["ZodNaN"] = "ZodNaN";
    ZodFirstPartyTypeKind["ZodBigInt"] = "ZodBigInt";
    ZodFirstPartyTypeKind["ZodBoolean"] = "ZodBoolean";
    ZodFirstPartyTypeKind["ZodDate"] = "ZodDate";
    ZodFirstPartyTypeKind["ZodSymbol"] = "ZodSymbol";
    ZodFirstPartyTypeKind["ZodUndefined"] = "ZodUndefined";
    ZodFirstPartyTypeKind["ZodNull"] = "ZodNull";
    ZodFirstPartyTypeKind["ZodAny"] = "ZodAny";
    ZodFirstPartyTypeKind["ZodUnknown"] = "ZodUnknown";
    ZodFirstPartyTypeKind["ZodNever"] = "ZodNever";
    ZodFirstPartyTypeKind["ZodVoid"] = "ZodVoid";
    ZodFirstPartyTypeKind["ZodArray"] = "ZodArray";
    ZodFirstPartyTypeKind["ZodObject"] = "ZodObject";
    ZodFirstPartyTypeKind["ZodUnion"] = "ZodUnion";
    ZodFirstPartyTypeKind["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
    ZodFirstPartyTypeKind["ZodIntersection"] = "ZodIntersection";
    ZodFirstPartyTypeKind["ZodTuple"] = "ZodTuple";
    ZodFirstPartyTypeKind["ZodRecord"] = "ZodRecord";
    ZodFirstPartyTypeKind["ZodMap"] = "ZodMap";
    ZodFirstPartyTypeKind["ZodSet"] = "ZodSet";
    ZodFirstPartyTypeKind["ZodFunction"] = "ZodFunction";
    ZodFirstPartyTypeKind["ZodLazy"] = "ZodLazy";
    ZodFirstPartyTypeKind["ZodLiteral"] = "ZodLiteral";
    ZodFirstPartyTypeKind["ZodEnum"] = "ZodEnum";
    ZodFirstPartyTypeKind["ZodEffects"] = "ZodEffects";
    ZodFirstPartyTypeKind["ZodNativeEnum"] = "ZodNativeEnum";
    ZodFirstPartyTypeKind["ZodOptional"] = "ZodOptional";
    ZodFirstPartyTypeKind["ZodNullable"] = "ZodNullable";
    ZodFirstPartyTypeKind["ZodDefault"] = "ZodDefault";
    ZodFirstPartyTypeKind["ZodCatch"] = "ZodCatch";
    ZodFirstPartyTypeKind["ZodPromise"] = "ZodPromise";
    ZodFirstPartyTypeKind["ZodBranded"] = "ZodBranded";
    ZodFirstPartyTypeKind["ZodPipeline"] = "ZodPipeline";
    ZodFirstPartyTypeKind["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
const instanceOfType = (
// const instanceOfType = <T extends new (...args: any[]) => any>(
cls, params = {
    message: `Input not instance of ${cls.name}`,
}) => custom((data) => data instanceof cls, params);
const stringType = ZodString.create;
const numberType = ZodNumber.create;
const nanType = ZodNaN.create;
const bigIntType = ZodBigInt.create;
const booleanType = ZodBoolean.create;
const dateType = ZodDate.create;
const symbolType = ZodSymbol.create;
const undefinedType = ZodUndefined.create;
const nullType = ZodNull.create;
const anyType = ZodAny.create;
const unknownType = ZodUnknown.create;
const neverType = ZodNever.create;
const voidType = ZodVoid.create;
const arrayType = ZodArray.create;
const objectType = ZodObject.create;
const strictObjectType = ZodObject.strictCreate;
const unionType = ZodUnion.create;
const discriminatedUnionType = ZodDiscriminatedUnion.create;
const intersectionType = ZodIntersection.create;
const tupleType = ZodTuple.create;
const recordType = ZodRecord.create;
const mapType = ZodMap.create;
const setType = ZodSet.create;
const functionType = ZodFunction.create;
const lazyType = ZodLazy.create;
const literalType = ZodLiteral.create;
const enumType = ZodEnum.create;
const nativeEnumType = ZodNativeEnum.create;
const promiseType = ZodPromise.create;
const effectsType = ZodEffects.create;
const optionalType = ZodOptional.create;
const nullableType = ZodNullable.create;
const preprocessType = ZodEffects.createWithPreprocess;
const pipelineType = ZodPipeline.create;
const ostring = () => stringType().optional();
const onumber = () => numberType().optional();
const oboolean = () => booleanType().optional();
const coerce = {
    string: ((arg) => ZodString.create({ ...arg, coerce: true })),
    number: ((arg) => ZodNumber.create({ ...arg, coerce: true })),
    boolean: ((arg) => ZodBoolean.create({
        ...arg,
        coerce: true,
    })),
    bigint: ((arg) => ZodBigInt.create({ ...arg, coerce: true })),
    date: ((arg) => ZodDate.create({ ...arg, coerce: true })),
};
const NEVER = INVALID;

var z = /*#__PURE__*/Object.freeze({
    __proto__: null,
    defaultErrorMap: errorMap,
    setErrorMap: setErrorMap,
    getErrorMap: getErrorMap,
    makeIssue: makeIssue,
    EMPTY_PATH: EMPTY_PATH,
    addIssueToContext: addIssueToContext,
    ParseStatus: ParseStatus,
    INVALID: INVALID,
    DIRTY: DIRTY,
    OK: OK,
    isAborted: isAborted,
    isDirty: isDirty,
    isValid: isValid,
    isAsync: isAsync,
    get util () { return util; },
    get objectUtil () { return objectUtil; },
    ZodParsedType: ZodParsedType,
    getParsedType: getParsedType,
    ZodType: ZodType,
    datetimeRegex: datetimeRegex,
    ZodString: ZodString,
    ZodNumber: ZodNumber,
    ZodBigInt: ZodBigInt,
    ZodBoolean: ZodBoolean,
    ZodDate: ZodDate,
    ZodSymbol: ZodSymbol,
    ZodUndefined: ZodUndefined,
    ZodNull: ZodNull,
    ZodAny: ZodAny,
    ZodUnknown: ZodUnknown,
    ZodNever: ZodNever,
    ZodVoid: ZodVoid,
    ZodArray: ZodArray,
    ZodObject: ZodObject,
    ZodUnion: ZodUnion,
    ZodDiscriminatedUnion: ZodDiscriminatedUnion,
    ZodIntersection: ZodIntersection,
    ZodTuple: ZodTuple,
    ZodRecord: ZodRecord,
    ZodMap: ZodMap,
    ZodSet: ZodSet,
    ZodFunction: ZodFunction,
    ZodLazy: ZodLazy,
    ZodLiteral: ZodLiteral,
    ZodEnum: ZodEnum,
    ZodNativeEnum: ZodNativeEnum,
    ZodPromise: ZodPromise,
    ZodEffects: ZodEffects,
    ZodTransformer: ZodEffects,
    ZodOptional: ZodOptional,
    ZodNullable: ZodNullable,
    ZodDefault: ZodDefault,
    ZodCatch: ZodCatch,
    ZodNaN: ZodNaN,
    BRAND: BRAND,
    ZodBranded: ZodBranded,
    ZodPipeline: ZodPipeline,
    ZodReadonly: ZodReadonly,
    custom: custom,
    Schema: ZodType,
    ZodSchema: ZodType,
    late: late,
    get ZodFirstPartyTypeKind () { return ZodFirstPartyTypeKind; },
    coerce: coerce,
    any: anyType,
    array: arrayType,
    bigint: bigIntType,
    boolean: booleanType,
    date: dateType,
    discriminatedUnion: discriminatedUnionType,
    effect: effectsType,
    'enum': enumType,
    'function': functionType,
    'instanceof': instanceOfType,
    intersection: intersectionType,
    lazy: lazyType,
    literal: literalType,
    map: mapType,
    nan: nanType,
    nativeEnum: nativeEnumType,
    never: neverType,
    'null': nullType,
    nullable: nullableType,
    number: numberType,
    object: objectType,
    oboolean: oboolean,
    onumber: onumber,
    optional: optionalType,
    ostring: ostring,
    pipeline: pipelineType,
    preprocess: preprocessType,
    promise: promiseType,
    record: recordType,
    set: setType,
    strictObject: strictObjectType,
    string: stringType,
    symbol: symbolType,
    transformer: effectsType,
    tuple: tupleType,
    'undefined': undefinedType,
    union: unionType,
    unknown: unknownType,
    'void': voidType,
    NEVER: NEVER,
    ZodIssueCode: ZodIssueCode,
    quotelessJson: quotelessJson,
    ZodError: ZodError
});




/***/ }),

/***/ "./src/Pages/CSS/DialogBox/dialog-box.css":
/*!************************************************!*\
  !*** ./src/Pages/CSS/DialogBox/dialog-box.css ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_dialog_box_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./dialog-box.css */ "./node_modules/css-loader/dist/cjs.js!./src/Pages/CSS/DialogBox/dialog-box.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_dialog_box_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_dialog_box_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_dialog_box_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_dialog_box_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/Pages/CSS/DialogBox/dialog-note-form.css":
/*!******************************************************!*\
  !*** ./src/Pages/CSS/DialogBox/dialog-note-form.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_dialog_note_form_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./dialog-note-form.css */ "./node_modules/css-loader/dist/cjs.js!./src/Pages/CSS/DialogBox/dialog-note-form.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_dialog_note_form_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_dialog_note_form_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_dialog_note_form_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_dialog_note_form_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/Pages/CSS/DialogBox/dialog-project-form.css":
/*!*********************************************************!*\
  !*** ./src/Pages/CSS/DialogBox/dialog-project-form.css ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_dialog_project_form_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./dialog-project-form.css */ "./node_modules/css-loader/dist/cjs.js!./src/Pages/CSS/DialogBox/dialog-project-form.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_dialog_project_form_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_dialog_project_form_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_dialog_project_form_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_dialog_project_form_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/Pages/CSS/DialogBox/dialog-task-form.css":
/*!******************************************************!*\
  !*** ./src/Pages/CSS/DialogBox/dialog-task-form.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_dialog_task_form_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./dialog-task-form.css */ "./node_modules/css-loader/dist/cjs.js!./src/Pages/CSS/DialogBox/dialog-task-form.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_dialog_task_form_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_dialog_task_form_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_dialog_task_form_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_dialog_task_form_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/Pages/CSS/Main/aside.css":
/*!**************************************!*\
  !*** ./src/Pages/CSS/Main/aside.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_aside_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./aside.css */ "./node_modules/css-loader/dist/cjs.js!./src/Pages/CSS/Main/aside.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_aside_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_aside_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_aside_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_aside_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/Pages/CSS/Main/main.css":
/*!*************************************!*\
  !*** ./src/Pages/CSS/Main/main.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/Pages/CSS/Main/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/Pages/CSS/Main/outer-card.css":
/*!*******************************************!*\
  !*** ./src/Pages/CSS/Main/outer-card.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_outer_card_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./outer-card.css */ "./node_modules/css-loader/dist/cjs.js!./src/Pages/CSS/Main/outer-card.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_outer_card_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_outer_card_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_outer_card_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_outer_card_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/Pages/CSS/style.css":
/*!*********************************!*\
  !*** ./src/Pages/CSS/style.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/Pages/CSS/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/Pages/HTML/index.html":
/*!***********************************!*\
  !*** ./src/Pages/HTML/index.html ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Imports
var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../Media/Images/web-icon.png */ "./src/Pages/Media/Images/web-icon.png"), __webpack_require__.b);
// Module
var code = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo-List</title>
    <link rel="icon" href="${___HTML_LOADER_IMPORT_0___}" type="image/png">
</head>
<body>
    
    <svg id="project-svg-img-container" style="display: none;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        
        <defs>
            <symbol id="folder-svg-template" viewBox="0 0 122.88 82.18">
                <g>
                    <path d="M2.3,12.86h30.8v-1.5C33.1,5.11,38.21,0,44.46,0h11.37c6.25,0,11.36,5.11,11.36,11.36v1.5h28.85 c1.26,0,2.3,1.03,2.3,2.3v7.51H28.06c-1.29,0-2.84,1.05-3.46,2.34L1.88,72.06C0.81,71.86,0,70.93,0,69.81V15.16 C0,13.89,1.03,12.86,2.3,12.86L2.3,12.86z M38.75,12.86h22.79v-1.29c0-3.21-2.62-5.84-5.84-5.84H44.59c-3.21,0-5.84,2.63-5.84,5.84 V12.86L38.75,12.86z M30.41,27.01h90.91c1.28,0,1.93,1.07,1.34,2.33L98.91,79.85c-0.59,1.26-2.05,2.33-3.33,2.33l-90.91,0 c-1.29,0-1.93-1.07-1.34-2.33l23.75-50.51C27.67,28.08,29.12,27.01,30.41,27.01L30.41,27.01L30.41,27.01z"/>
                </g>
            </symbol>

            <symbol id="book-svg-template" viewBox="0 0 103.19 122.88">
                <g>
                    <path d="M17.16 0h82.72a3.32 3.32 0 013.31 3.31v92.32c-.15 2.58-3.48 2.64-7.08 2.48H15.94c-4.98 0-9.05 4.07-9.05 9.05s4.07 9.05 9.05 9.05h80.17v-9.63h7.08v12.24c0 2.23-1.82 4.05-4.05 4.05H16.29C7.33 122.88 0 115.55 0 106.59V17.16C0 7.72 7.72 0 17.16 0zm3.19 13.4h2.86c1.46 0 2.66.97 2.66 2.15v67.47c0 1.18-1.2 2.15-2.66 2.15h-2.86c-1.46 0-2.66-.97-2.66-2.15V15.55c.01-1.19 1.2-2.15 2.66-2.15z"/>
                </g>
            </symbol>

            <symbol id="social-svg-template" viewBox="0 0 122.87 122.88">
                <g>
                    <path d="M1.61,97.18l5.38-5.38c0.14-0.14,0.29-0.27,0.44-0.4l-3.86-3.86v0c-0.06-0.06-0.11-0.12-0.16-0.18 c-0.96-1.05-1.44-2.38-1.44-3.7c0-1.4,0.54-2.8,1.61-3.87l0,0l0,0l0,0l5.38-5.38l0,0c0.14-0.14,0.29-0.27,0.44-0.4l-3.86-3.86h0 c-1.07-1.07-1.6-2.48-1.6-3.88c0-1.4,0.54-2.8,1.6-3.87l0,0l0,0l0,0l5.38-5.38c1.07-1.07,2.48-1.6,3.88-1.6 c1.41,0,2.81,0.53,3.88,1.6l47.21,47.21c1.07,1.07,1.6,2.48,1.6,3.88c0,1.41-0.53,2.81-1.6,3.88l-5.38,5.38v0 c-0.06,0.06-0.12,0.11-0.18,0.16c-1.05,0.96-2.38,1.44-3.7,1.44c-1.4,0-2.8-0.54-3.87-1.6l0,0l0,0l0,0l-3.27-3.27 c-0.12,0.15-0.25,0.3-0.39,0.44l0,0l0,0l-5.38,5.38h0c-0.06,0.06-0.12,0.11-0.18,0.16c-1.04,0.95-2.37,1.43-3.7,1.43 c-1.41,0-2.81-0.53-3.87-1.6l0,0l0,0l0,0l-4.46-4.46c-0.12,0.15-0.25,0.3-0.4,0.44l-5.38,5.38c-1.07,1.07-2.48,1.6-3.88,1.6 c-1.4,0-2.81-0.53-3.88-1.6L1.61,104.95C0.54,103.88,0,102.47,0,101.07C0,99.66,0.54,98.26,1.61,97.18L1.61,97.18z M65.85,8.98 l-5.38,5.38h0l-0.05,0.05c-0.08,0.11-0.12,0.24-0.12,0.37c0,0.15,0.06,0.31,0.17,0.42h0l47.21,47.21c0.11,0.11,0.26,0.17,0.42,0.17 c0.15,0,0.31-0.06,0.42-0.17l5.38-5.38l0,0l0.05-0.05c0.08-0.1,0.12-0.24,0.12-0.37c0-0.16-0.05-0.31-0.16-0.42l0,0l0,0l-7.13-7.13 v0L74.41,16.71l-7.72-7.72v0c-0.11-0.11-0.26-0.17-0.42-0.17C66.11,8.81,65.96,8.87,65.85,8.98L65.85,8.98L65.85,8.98L65.85,8.98z M71.47,47.31c1.34-1.34,3.52-1.34,4.87,0c1.34,1.34,1.34,3.52,0,4.87L52.74,75.76c-1.34,1.34-3.52,1.34-4.87,0 c-1.34-1.34-1.34-3.52,0-4.87L71.47,47.31L71.47,47.31z M100.65,5.07l-5.38,5.38l0,0c-0.12,0.12-0.18,0.27-0.18,0.42 c0,0.13,0.04,0.25,0.12,0.36l0.06,0.06l0,0h0l16.32,16.32l0,0l0.05,0.05c0.1,0.08,0.23,0.11,0.36,0.11c0.15,0,0.31-0.06,0.42-0.17 l5.38-5.38v0c0.12-0.12,0.18-0.27,0.18-0.42c0-0.15-0.06-0.31-0.17-0.42l0,0v0L101.49,5.07l0,0c-0.11-0.11-0.26-0.17-0.42-0.17 S100.76,4.96,100.65,5.07L100.65,5.07L100.65,5.07z M91.81,6.98l5.38-5.38l0,0c1.07-1.07,2.48-1.6,3.88-1.6s2.81,0.53,3.88,1.6l0,0 l16.32,16.32h0l0,0l0,0c1.06,1.06,1.6,2.47,1.59,3.87c0,1.41-0.53,2.82-1.59,3.88h0l-5.38,5.38c-0.14,0.14-0.29,0.27-0.44,0.4 l4.46,4.46c1.07,1.07,1.6,2.48,1.6,3.88c0,1.41-0.54,2.81-1.6,3.88l-5.38,5.38l0,0l0,0l0,0c-0.14,0.14-0.29,0.27-0.44,0.39 l3.27,3.27l0,0l0,0l0,0c1.07,1.07,1.6,2.47,1.6,3.87c0,1.33-0.48,2.66-1.44,3.7c-0.05,0.06-0.1,0.12-0.16,0.18l0,0l-5.38,5.38 c-1.07,1.07-2.48,1.6-3.88,1.6c-1.41,0-2.81-0.54-3.88-1.6L57.01,18.66v0c-1.07-1.07-1.61-2.48-1.61-3.88 c0-1.33,0.48-2.66,1.44-3.7c0.05-0.06,0.1-0.12,0.16-0.18l0,0l5.38-5.38l0,0l0,0l0,0c1.07-1.07,2.47-1.6,3.87-1.6 c1.41,0,2.81,0.54,3.88,1.6l0,0l3.86,3.86c0.12-0.15,0.25-0.3,0.4-0.44l5.38-5.38c1.07-1.07,2.48-1.61,3.88-1.61 c1.41,0,2.81,0.54,3.88,1.61l3.86,3.86C91.54,7.27,91.67,7.12,91.81,6.98L91.81,6.98L91.81,6.98z M83.25,7.03l-5.38,5.38 c-0.11,0.11-0.17,0.26-0.17,0.42c0,0.15,0.05,0.3,0.16,0.41l0.01,0.01l32.36,32.36h0c0.11,0.11,0.26,0.17,0.42,0.17 c0.16,0,0.31-0.05,0.42-0.16l0,0h0l5.38-5.38c0.11-0.11,0.17-0.26,0.17-0.42c0-0.15-0.06-0.31-0.17-0.42l-8.31-8.31l0,0l0,0l0,0 l0,0L84.09,7.03c-0.11-0.11-0.27-0.17-0.42-0.17C83.51,6.86,83.36,6.91,83.25,7.03L83.25,7.03z M16.71,74.41L16.71,74.41 l32.36,32.36l0,0l0,0l0,0l0,0l0,0l0,0l0,0l7.11,7.11l0,0l0,0c0.11,0.11,0.27,0.16,0.42,0.16c0.13,0,0.26-0.04,0.37-0.12l0.05-0.05 v0l5.38-5.38c0.11-0.11,0.17-0.26,0.17-0.42c0-0.15-0.06-0.31-0.17-0.42L15.2,60.47c-0.11-0.11-0.26-0.17-0.42-0.17 c-0.15,0-0.31,0.06-0.42,0.17l-5.38,5.38v0l0,0c-0.11,0.11-0.16,0.27-0.16,0.42c0,0.15,0.06,0.31,0.17,0.42v0L16.71,74.41 L16.71,74.41z M45.66,110.29l-0.05-0.05L13.24,77.87h0l-0.06-0.06c-0.11-0.08-0.23-0.12-0.36-0.12c-0.15,0-0.3,0.06-0.42,0.18h0 l-5.38,5.38v0l0,0c-0.11,0.11-0.16,0.27-0.16,0.42c0,0.13,0.04,0.26,0.12,0.37l0.05,0.05v0l7.72,7.72l16.32,16.32l8.32,8.32h0l0,0 c0.12,0.12,0.27,0.17,0.42,0.17c0.13,0,0.26-0.04,0.37-0.12l0.05-0.05h0l5.38-5.38l0,0c0.11-0.11,0.16-0.27,0.16-0.42 C45.77,110.52,45.73,110.39,45.66,110.29L45.66,110.29z M10.45,95.27l-5.38,5.38c-0.11,0.11-0.17,0.26-0.17,0.42 s0.06,0.31,0.17,0.42l16.32,16.32c0.11,0.11,0.26,0.17,0.42,0.17c0.15,0,0.31-0.06,0.42-0.17l5.38-5.38 c0.11-0.11,0.17-0.26,0.17-0.42c0-0.16-0.06-0.31-0.17-0.42L11.28,95.27l-0.01-0.01c-0.11-0.11-0.26-0.16-0.41-0.16 C10.71,95.1,10.56,95.16,10.45,95.27L10.45,95.27z"/>
                </g>
            </symbol>

        </defs>

    </svg>

    <div id="outer-card">
        <aside class="maximise">
            <div id="menu-title-container">
                <h2>Menu</h2>
                <button style="display: none;" type="button">
                    <<
                </button>
            </div>
            <div id="aside-list-options-container">

                <div id="aside-tasks-list-container" class="sidebar-outer-container">
                    <h3 id="sidebar-tasks-header" class="sidebar-list-header">Tasks</h3>
                    
                    <div class="sidebar-inner-container">
                        <div data-page="unselected" id="home-option" class="sidebar-option">
                            <div class="sidebar-svg-container">
                                <?xml version="1.0" encoding="utf-8"?><svg height="2.5996rem" width="2.5966rem" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 112.07" style="enable-background:new 0 0 122.88 112.07" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g><path class="st0" d="M61.44,0L0,60.18l14.99,7.87L61.04,19.7l46.85,48.36l14.99-7.87L61.44,0L61.44,0z M18.26,69.63L18.26,69.63 L61.5,26.38l43.11,43.25h0v0v42.43H73.12V82.09H49.49v29.97H18.26V69.63L18.26,69.63L18.26,69.63z"/></g></svg>
                            </div>
                            <p class="sidebar-option-title">Home</p>
                            <div class="sidebar-notification-number-container" data-notification="active">12</div>
                        </div>
                        <div data-page="unselected" id="upcoming-option" class="sidebar-option">
                            <div class="sidebar-svg-container">
                                <?xml version="1.0" encoding="utf-8"?>
                                <svg height="2.5996rem" width="2.5966rem" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 102.85 122.88" style="enable-background:new 0 0 102.85 122.88" xml:space="preserve">
                                    <style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style>
                                    <g>
                                        <path class="st0" d="M56.91,20.32C67.15,21.4,76.5,25.5,84.05,31.7l5.21-5.44c1.06-1.11,2.84-1.13,3.95-0.06l3.5,3.4 c1.1,1.07,1.12,2.84,0.06,3.94l-5.35,5.58c7.15,8.83,11.44,20.08,11.44,32.32c0,28.4-23.03,51.43-51.43,51.43 C23.03,122.88,0,99.85,0,71.45C0,58.63,4.7,46.9,12.46,37.89l-6.02-5.66c-1.12-1.05-1.15-2.83-0.09-3.94l3.37-3.53 c1.06-1.11,2.83-1.14,3.94-0.09l6.41,6.03c7.81-6.02,17.39-9.84,27.83-10.54V9h-9.9c-1.32,0-2.4-1.08-2.4-2.4V2.4 c0-1.32,1.08-2.4,2.4-2.4h28.8c1.32,0,2.4,1.08,2.4,2.4v4.2c0,1.32-1.08,2.4-2.4,2.4h-9.9V20.32L56.91,20.32z M47.24,52.63h4.39 c0.8,0,1.46,0.66,1.46,1.46v18.35h13.51c0.8,0,1.46,0.66,1.46,1.46v4.39c0,0.8-0.66,1.46-1.46,1.46H45.78V77.6v-5.16V54.09 C45.78,53.28,46.44,52.63,47.24,52.63L47.24,52.63z M51.43,29.69c23.06,0,41.76,18.7,41.76,41.76c0,23.06-18.7,41.76-41.76,41.76 c-23.06,0-41.76-18.7-41.76-41.76C9.67,48.39,28.37,29.69,51.43,29.69L51.43,29.69z"/>
                                    </g>
                                </svg>
                            </div>
                            <p class="sidebar-option-title">Upcoming</p>
                            <div class="sidebar-notification-number-container" data-notification="inactive"></div>
                        </div>
                        <div data-page="unselected" id="calendar-option" class="sidebar-option">
                            <div class="sidebar-svg-container">
                                <?xml version="1.0" encoding="utf-8"?>
                                <svg height="2.5996rem" width="2.5966rem" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 122.88" style="enable-background:new 0 0 122.88 122.88" xml:space="preserve">
                                    <g>
                                        <path d="M81.61,4.73c0-2.61,2.58-4.73,5.77-4.73c3.19,0,5.77,2.12,5.77,4.73v20.72c0,2.61-2.58,4.73-5.77,4.73 c-3.19,0-5.77-2.12-5.77-4.73V4.73L81.61,4.73z M66.11,103.81c-0.34,0-0.61-1.43-0.61-3.2c0-1.77,0.27-3.2,0.61-3.2H81.9 c0.34,0,0.61,1.43,0.61,3.2c0,1.77-0.27,3.2-0.61,3.2H66.11L66.11,103.81z M15.85,67.09c-0.34,0-0.61-1.43-0.61-3.2 c0-1.77,0.27-3.2,0.61-3.2h15.79c0.34,0,0.61,1.43,0.61,3.2c0,1.77-0.27,3.2-0.61,3.2H15.85L15.85,67.09z M40.98,67.09 c-0.34,0-0.61-1.43-0.61-3.2c0-1.77,0.27-3.2,0.61-3.2h15.79c0.34,0,0.61,1.43,0.61,3.2c0,1.77-0.27,3.2-0.61,3.2H40.98 L40.98,67.09z M66.11,67.09c-0.34,0-0.61-1.43-0.61-3.2c0-1.77,0.27-3.2,0.61-3.2H81.9c0.34,0,0.61,1.43,0.61,3.2 c0,1.77-0.27,3.2-0.61,3.2H66.11L66.11,67.09z M91.25,67.09c-0.34,0-0.61-1.43-0.61-3.2c0-1.77,0.27-3.2,0.61-3.2h15.79 c0.34,0,0.61,1.43,0.61,3.2c0,1.77-0.27,3.2-0.61,3.2H91.25L91.25,67.09z M15.85,85.45c-0.34,0-0.61-1.43-0.61-3.2 c0-1.77,0.27-3.2,0.61-3.2h15.79c0.34,0,0.61,1.43,0.61,3.2c0,1.77-0.27,3.2-0.61,3.2H15.85L15.85,85.45z M40.98,85.45 c-0.34,0-0.61-1.43-0.61-3.2c0-1.77,0.27-3.2,0.61-3.2h15.79c0.34,0,0.61,1.43,0.61,3.2c0,1.77-0.27,3.2-0.61,3.2H40.98 L40.98,85.45z M66.11,85.45c-0.34,0-0.61-1.43-0.61-3.2c0-1.77,0.27-3.2,0.61-3.2H81.9c0.34,0,0.61,1.43,0.61,3.2 c0,1.77-0.27,3.2-0.61,3.2H66.11L66.11,85.45z M91.25,85.45c-0.34,0-0.61-1.43-0.61-3.2c0-1.77,0.27-3.2,0.61-3.2h15.79 c0.34,0,0.61,1.43,0.61,3.2c0,1.77-0.27,3.2-0.61,3.2H91.25L91.25,85.45z M15.85,103.81c-0.34,0-0.61-1.43-0.61-3.2 c0-1.77,0.27-3.2,0.61-3.2h15.79c0.34,0,0.61,1.43,0.61,3.2c0,1.77-0.27,3.2-0.61,3.2H15.85L15.85,103.81z M40.98,103.81 c-0.34,0-0.61-1.43-0.61-3.2c0-1.77,0.27-3.2,0.61-3.2h15.79c0.34,0,0.61,1.43,0.61,3.2c0,1.77-0.27,3.2-0.61,3.2H40.98 L40.98,103.81z M29.61,4.73c0-2.61,2.58-4.73,5.77-4.73s5.77,2.12,5.77,4.73v20.72c0,2.61-2.58,4.73-5.77,4.73 s-5.77-2.12-5.77-4.73V4.73L29.61,4.73z M6.4,45.32h110.07V21.47c0-0.8-0.33-1.53-0.86-2.07c-0.53-0.53-1.26-0.86-2.07-0.86H103 c-1.77,0-3.2-1.43-3.2-3.2c0-1.77,1.43-3.2,3.2-3.2h10.55c2.57,0,4.9,1.05,6.59,2.74c1.69,1.69,2.74,4.02,2.74,6.59v27.06v65.03 c0,2.57-1.05,4.9-2.74,6.59c-1.69,1.69-4.02,2.74-6.59,2.74H9.33c-2.57,0-4.9-1.05-6.59-2.74C1.05,118.45,0,116.12,0,113.55V48.52 V21.47c0-2.57,1.05-4.9,2.74-6.59c1.69-1.69,4.02-2.74,6.59-2.74H20.6c1.77,0,3.2,1.43,3.2,3.2c0,1.77-1.43,3.2-3.2,3.2H9.33 c-0.8,0-1.53,0.33-2.07,0.86c-0.53,0.53-0.86,1.26-0.86,2.07V45.32L6.4,45.32z M116.48,51.73H6.4v61.82c0,0.8,0.33,1.53,0.86,2.07 c0.53,0.53,1.26,0.86,2.07,0.86h104.22c0.8,0,1.53-0.33,2.07-0.86c0.53-0.53,0.86-1.26,0.86-2.07V51.73L116.48,51.73z M50.43,18.54 c-1.77,0-3.2-1.43-3.2-3.2c0-1.77,1.43-3.2,3.2-3.2h21.49c1.77,0,3.2,1.43,3.2,3.2c0,1.77-1.43,3.2-3.2,3.2H50.43L50.43,18.54z"/>
                                    </g>
                                </svg>
                            </div>
                            <p class="sidebar-option-title">Calendar</p>
                            <div class="sidebar-notification-number-container" data-notification="inactive"></div>
                        </div>

                    </div>



                </div>
                <div id="aside-projects-list-container" class="sidebar-outer-container">
                    <h3 id="sidebar-projects-header" class="sidebar-list-header">Projects</h3>
                    
                    <div class="sidebar-inner-container">
                        <!-- <div data-page="unselected" id="personal-option" class="sidebar-option">
                            <div class="sidebar-svg-container">
                                <svg>
                                    <use href="#folder-svg-template" x="0" y="0" />
                                </svg>
                            </div>
                            <p class="sidebar-option-title">Personal</p>
                            <div class="sidebar-notification-number-container" data-notification="inactive"></div>
                            <div class="remove-sidebar-option">X</div>
                        </div>
                        <div data-page="unselected" id="study-option" class="sidebar-option">
                            <div class="sidebar-svg-container">
                                <svg>
                                    <use href="#book-svg-template" x="0" y="0" />
                                </svg>
                            </div>
                            <p class="sidebar-option-title">Studies</p>
                            <div class="sidebar-notification-number-container" data-notification="inactive"></div>
                            <div class="remove-sidebar-option">X</div>
                        </div>
                        <div data-page="unselected" id="list-one-option" class="sidebar-option">
                            <div class="sidebar-svg-container">
                                <svg>
                                    <use href="#social-svg-template" x="0" y="0" />
                                </svg>
                            </div>
                            <p class="sidebar-option-title">List 1</p>
                            <div class="sidebar-notification-number-container" data-notification="inactive"></div>
                            <div class="remove-sidebar-option">X</div>
                        </div> -->

                        


                    </div>








                </div>

                <div id="aside-notes-list-container" class="sidebar-outer-container">
                    <h3 id="sidebar-notes-header" class="sidebar-list-header">Notes</h3>
                    
                    <div class="sidebar-inner-container">

                        <div id="notes-container">

                            <!-- <button data-page="unselected" type="button" class="sidebar-notes-button">
                                Note 1
                            </button>
                            <button data-page="unselected" type="button" class="sidebar-notes-button">
                                Note 2
                            </button> -->
                            

                        </div>

                        <!-- <button type="button" id="add-note-button" class="sidebar-notes-button">
                            + Add Note
                        </button> -->

                    </div>
                </div>


            </div>


        </aside>
        <main>
            <h1 id="main-title">Home</h1>
            
            <div style="display: none;" id="date-range-specifier">
                
                <!-- <div id="from-date-container" class="date-specifier-container">
                    <label for="from-date-input">From:</label>
                    <input type="date" name="from-date-input" id="from-date-input">
                </div>                
                <div id="to-date-container" class="date-specifier-container">
                    <label for="to-date-input">To:</label>
                    <input type="date" name="to-date-input" id="to-date-input">
                </div>    -->
                
            </div>



            <div id="main-content">
                <div id="home-content-container" class="content-container">
                    <!-- <div class="task-entry-container" data-importance="low">
                        
                        <label>
                            <input type="checkbox">
                            <div class="checkbox-svg-container"></div>
                        </label>
                        <p class="task-entry-title incomplete"></p>
                        <p class="task-entry-description"></p>
                        <p class="due-date"></p>
                        <div class="task-edit-svg-container"></div>
                        <div class="task-del-svg-container"></div>
                    
                    </div>
                    <div class="task-entry-container" data-importance="low">
                        
                        <label>
                            <input type="checkbox">
                            <div class="checkbox-svg-container"></div>
                        </label>
                        <p class="task-entry-title complete">Complete this project</p>
                        <p class="task-entry-description">Spend your time today and tomorrow hopefully typing up this todo list using default webpack templates</p>
                        <p class="due-date">10th May</p>
                        <div class="task-edit-svg-container">
                            
                            <svg viewBox="0 0 122.88 122.88">
                                <g>
                                    <path d="M14.1,0h94.67c7.76,0,14.1,6.35,14.1,14.1v94.67c0,7.75-6.35,14.1-14.1,14.1H14.1c-7.75,0-14.1-6.34-14.1-14.1 V14.1C0,6.34,6.34,0,14.1,0L14.1,0z M81.35,28.38L94.1,41.14c1.68,1.68,1.68,4.44,0,6.11l-7.06,7.06L68.17,35.44l7.06-7.06 C76.91,26.7,79.66,26.7,81.35,28.38L81.35,28.38z M52.34,88.98c-5.1,1.58-10.21,3.15-15.32,4.74c-12.01,3.71-11.95,6.18-8.68-5.37 l5.16-18.2l0,0l-0.02-0.02L64.6,39.01l18.87,18.87l-31.1,31.11L52.34,88.98L52.34,88.98z M36.73,73.36l12.39,12.39 c-3.35,1.03-6.71,2.06-10.07,3.11c-7.88,2.42-7.84,4.05-5.7-3.54L36.73,73.36L36.73,73.36z"/>
                                </g>
                            </svg>
                            
                        </div>
                        <div class="task-del-svg-container">
                            <?xml version="1.0" encoding="utf-8"?>
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="109.484px" height="122.88px" viewBox="0 0 109.484 122.88" enable-background="new 0 0 109.484 122.88" xml:space="preserve"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M2.347,9.633h38.297V3.76c0-2.068,1.689-3.76,3.76-3.76h21.144 c2.07,0,3.76,1.691,3.76,3.76v5.874h37.83c1.293,0,2.347,1.057,2.347,2.349v11.514H0V11.982C0,10.69,1.055,9.633,2.347,9.633 L2.347,9.633z M8.69,29.605h92.921c1.937,0,3.696,1.599,3.521,3.524l-7.864,86.229c-0.174,1.926-1.59,3.521-3.523,3.521h-77.3 c-1.934,0-3.352-1.592-3.524-3.521L5.166,33.129C4.994,31.197,6.751,29.605,8.69,29.605L8.69,29.605z M69.077,42.998h9.866v65.314 h-9.866V42.998L69.077,42.998z M30.072,42.998h9.867v65.314h-9.867V42.998L30.072,42.998z M49.572,42.998h9.869v65.314h-9.869 V42.998L49.572,42.998z"/></g>
                                </svg>
                        </div>
                    
                    </div>
                    <div class="task-entry-container" data-importance="medium">
                        
                        <label>
                            <input type="checkbox">
                            <div class="checkbox-svg-container"></div>
                        </label>
                        <p class="task-entry-title incomplete"></p>
                        <p class="task-entry-description"></p>
                        <p class="due-date"></p>
                        <div class="task-edit-svg-container"></div>
                        <div class="task-del-svg-container"></div>
                    
                    </div>
                    <div class="task-entry-container" data-importance="low">
                        
                        <label>
                            <input type="checkbox">
                            <div class="checkbox-svg-container"></div>
                        </label>
                        <p class="task-entry-title incomplete"></p>
                        <p class="task-entry-description"></p>
                        <p class="due-date"></p>
                        <div class="task-edit-svg-container"></div>
                        <div class="task-del-svg-container"></div>
                    
                    </div>
                    <div class="task-entry-container" data-importance="high">
                        
                        <label>
                            <input type="checkbox">
                            <div class="checkbox-svg-container"></div>
                        </label>
                        <p class="task-entry-title incomplete"></p>
                        <p class="task-entry-description"></p>
                        <p class="due-date"></p>
                        <div class="task-edit-svg-container"></div>
                        <div class="task-del-svg-container"></div>
                    
                    </div> -->




                    <!-- <div class="note-container">
                        <button type="button" class="note-del-btn">X</button>
                        <div class="note-title">Example Title 1.0</div>
                        <div class="note-body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non obcaecati expedita laboriosam mollitia eveniet neque?</div>
                    </div>
                    <div class="note-container">
                        <button type="button" class="note-del-btn">X</button>
                        <div class="note-title">Example Title 2.0.0</div>
                        <div class="note-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium doloribus quisquam aliquid ab reprehenderit. Blanditiis fuga rerum incidunt et ipsa odit perspiciatis animi, quisquam nulla modi cum reprehenderit aspernatur. At natus quas ea aperiam voluptatibus impedit, aliquid voluptate repudiandae nam odit ullam, minima quasi. Nostrum voluptate provident doloremque esse iste?</div>
                    </div>
                    <div class="note-container">
                        <button type="button" class="note-del-btn">X</button>
                        <div class="note-title">Exp</div>
                        <div class="note-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque dolores, magni sed nulla tenetur delectus in rerum consectetur temporibus?</div>
                    </div> -->




                </div>


            </div>
        </main>
        <button type="button" id="add-button">
        </button>
    </div>
    <dialog id="new-entry-dialog">
        <div id="dialog-header">
            <h1 id="dialog-header-title">Add to your Todo list below:</h1>
            
            <button type="button" id="close-dialog">
                <?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="121.31px" height="122.876px" viewBox="0 0 121.31 122.876" enable-background="new 0 0 121.31 122.876" xml:space="preserve"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M90.914,5.296c6.927-7.034,18.188-7.065,25.154-0.068 c6.961,6.995,6.991,18.369,0.068,25.397L85.743,61.452l30.425,30.855c6.866,6.978,6.773,18.28-0.208,25.247 c-6.983,6.964-18.21,6.946-25.074-0.031L60.669,86.881L30.395,117.58c-6.927,7.034-18.188,7.065-25.154,0.068 c-6.961-6.995-6.992-18.369-0.068-25.397l30.393-30.827L5.142,30.568c-6.867-6.978-6.773-18.28,0.208-25.247 c6.983-6.963,18.21-6.946,25.074,0.031l30.217,30.643L90.914,5.296L90.914,5.296z"/></g></svg>
            </button>
        </div>
        <div id="aside-theme-container">
            <div>



                <!-- <p data-page="unselected" id="dialog-task-theme" class="dialog-theme-selection">Task</p>
                <p data-page="unselected" id="dialog-project-theme" class="dialog-theme-selection">Project</p>
                <p data-page="unselected" id="dialog-note-theme" class="dialog-theme-selection">Note</p>
             -->
            
            
            </div>
        </div>
        <div id="main-editor-container" data-state="task">
            <form style="display: flex;" id="form-task-state" method="dialog">
                <div id="dialog-task-state">
                    
                    <div class="task-dialog-input-container" id="task-subject-container">
                        <input value="" placeholder="Enter the subject for your task..." id="task-subject" name="title" type="text" required minlength="1">
                        <label for="task-subject"></label>
                    </div>
                    

                    <div class="task-dialog-input-container" id="task-body-text-container">
                        <textarea placeholder="Please enter your body of text here..." id="body-text" name="bodyText" required minlength="1"></textarea>
                        <label for="body-text"></label>
                    </div>
                    

                    <div class="task-dialog-input-container" id="task-due-date-container">
                        <label for="task-due-date">Task due-date:</label>
                        <input type="date" name="dueDate" id="task-due-date">  
                    </div>

                    <div class="task-dialog-input-container" id="task-project-container">
                        <label for="task-project">Project:</label>
                        <select id="task-project" name="project">
                            <option value="0" selected>(--none--)</option>

                        </select>
                        
                    </div>


                    <div class="task-dialog-input-container" id="task-priority-container">
                        <label for="task-priority">Priority level:</label>
                        <select id="task-priority" name="priority">
                            <option value="low" selected>Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                        
                    </div>

                    <div id="task-dialog-complete-button-container" class="task-dialog-input-container">
                        <button class="submit-button" type="submit">Complete</button>
                    </div>

                </div>
                
            </form>
            <form style="display: none;" id="form-project-state" method="dialog">
                <div id="dialog-project-state">

                    <div id="project-text-input-container">
                        <input required minlength="1" placeholder="Enter your new projects name..." type="text" name="title" id="project-name-input">
                        <label for="project-name-input"></label>
                    </div>

                    <div id="project-dialog-complete-button-container" class="project-dialog-input-container">
                        <button class="submit-button" type="submit">Complete</button>
                    </div>
                </div>    
            </form>
            <form style="display: none;" id="form-note-state" method="dialog">
                <div id="dialog-note-state">

                    <div class="note-dialog-input-container" id="note-text-input-container">
                        <input required minlength="1" placeholder="Enter your new notes name..." type="text" name="title" id="note-name-input">
                        <label for="note-name-input"></label>
                    </div>

                    <div class="note-dialog-input-container" id="note-body-text-container">
                        <textarea placeholder="Enter the body of text for your note..." name="bodyText" id="note-description"></textarea>
                        <label for="note-description"></label>
                    </div>

                    <div id="note-dialog-complete-button-container" class="note-dialog-input-container">
                        <button class="submit-button" type="submit">Complete</button>
                    </div>
                </div>    
            </form>

        </div>
    </dialog>


</body>
</html>`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/Pages/Media/Images/web-icon.png":
/*!*********************************************!*\
  !*** ./src/Pages/Media/Images/web-icon.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Media/images/web-iconf198d66eb58d135adf5d.png";

/***/ }),

/***/ "./src/featurefirst/Main.ts":
/*!**********************************!*\
  !*** ./src/featurefirst/Main.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_DialogComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/DialogComponent */ "./src/featurefirst/components/DialogComponent.ts");
/* harmony import */ var _features_Notes_components_NotesForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/Notes/components/NotesForm */ "./src/featurefirst/features/Notes/components/NotesForm.ts");
/* harmony import */ var _features_Notes_services_NoteSidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/Notes/services/NoteSidebar */ "./src/featurefirst/features/Notes/services/NoteSidebar.ts");
/* harmony import */ var _features_Notes_services_NoteSubmitCommand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/Notes/services/NoteSubmitCommand */ "./src/featurefirst/features/Notes/services/NoteSubmitCommand.ts");
/* harmony import */ var _features_Notes_states_NotesFormState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/Notes/states/NotesFormState */ "./src/featurefirst/features/Notes/states/NotesFormState.ts");
/* harmony import */ var _features_Projects_components_ProjectsForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/Projects/components/ProjectsForm */ "./src/featurefirst/features/Projects/components/ProjectsForm.ts");
/* harmony import */ var _features_Projects_services_ProjectClickEvent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./features/Projects/services/ProjectClickEvent */ "./src/featurefirst/features/Projects/services/ProjectClickEvent.ts");
/* harmony import */ var _features_Projects_services_ProjectHTMLCreator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features/Projects/services/ProjectHTMLCreator */ "./src/featurefirst/features/Projects/services/ProjectHTMLCreator.ts");
/* harmony import */ var _features_Projects_services_ProjectSubmitCommand__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./features/Projects/services/ProjectSubmitCommand */ "./src/featurefirst/features/Projects/services/ProjectSubmitCommand.ts");
/* harmony import */ var _features_Projects_states_ProjectsFormState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./features/Projects/states/ProjectsFormState */ "./src/featurefirst/features/Projects/states/ProjectsFormState.ts");
/* harmony import */ var _features_Projects_util_AllSymbolIDs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./features/Projects/util/AllSymbolIDs */ "./src/featurefirst/features/Projects/util/AllSymbolIDs.ts");
/* harmony import */ var _features_Tasks_components_SetDates__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./features/Tasks/components/SetDates */ "./src/featurefirst/features/Tasks/components/SetDates.ts");
/* harmony import */ var _features_Tasks_components_TaskDateFilters__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./features/Tasks/components/TaskDateFilters */ "./src/featurefirst/features/Tasks/components/TaskDateFilters.ts");
/* harmony import */ var _features_Tasks_components_TasksFormComponents__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./features/Tasks/components/TasksFormComponents */ "./src/featurefirst/features/Tasks/components/TasksFormComponents.ts");
/* harmony import */ var _features_Tasks_services_CreateDateRangeScreen__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./features/Tasks/services/CreateDateRangeScreen */ "./src/featurefirst/features/Tasks/services/CreateDateRangeScreen.ts");
/* harmony import */ var _features_Tasks_services_CreateTaskForm__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./features/Tasks/services/CreateTaskForm */ "./src/featurefirst/features/Tasks/services/CreateTaskForm.ts");
/* harmony import */ var _features_Tasks_services_CreateTaskHTML__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./features/Tasks/services/CreateTaskHTML */ "./src/featurefirst/features/Tasks/services/CreateTaskHTML.ts");
/* harmony import */ var _features_Tasks_services_EditTaskCommand__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./features/Tasks/services/EditTaskCommand */ "./src/featurefirst/features/Tasks/services/EditTaskCommand.ts");
/* harmony import */ var _features_Tasks_states_CalendarState__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./features/Tasks/states/CalendarState */ "./src/featurefirst/features/Tasks/states/CalendarState.ts");
/* harmony import */ var _features_Tasks_states_HomeState__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./features/Tasks/states/HomeState */ "./src/featurefirst/features/Tasks/states/HomeState.ts");
/* harmony import */ var _features_Tasks_states_TaskFormState__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./features/Tasks/states/TaskFormState */ "./src/featurefirst/features/Tasks/states/TaskFormState.ts");
/* harmony import */ var _features_Tasks_states_UpcomingState__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./features/Tasks/states/UpcomingState */ "./src/featurefirst/features/Tasks/states/UpcomingState.ts");
/* harmony import */ var _features_Tasks_util_DateToText__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./features/Tasks/util/DateToText */ "./src/featurefirst/features/Tasks/util/DateToText.ts");
/* harmony import */ var _features_Tasks_util_DatesFilter__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./features/Tasks/util/DatesFilter */ "./src/featurefirst/features/Tasks/util/DatesFilter.ts");
/* harmony import */ var _services_DialogShutDownCommands__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/DialogShutDownCommands */ "./src/featurefirst/services/DialogShutDownCommands.ts");
/* harmony import */ var _services_DialogToggle__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/DialogToggle */ "./src/featurefirst/services/DialogToggle.ts");
/* harmony import */ var _services_LocalStorage__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/LocalStorage */ "./src/featurefirst/services/LocalStorage.ts");
/* harmony import */ var _services_PageMediator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/PageMediator */ "./src/featurefirst/services/PageMediator.ts");
/* harmony import */ var _states_PageStateManager__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./states/PageStateManager */ "./src/featurefirst/states/PageStateManager.ts");
/* harmony import */ var _util_EventRegistry__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./util/EventRegistry */ "./src/featurefirst/util/EventRegistry.ts");
/* harmony import */ var _util_IDGenerator__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./util/IDGenerator */ "./src/featurefirst/util/IDGenerator.ts");
/* harmony import */ var _util_IDRandomSelect__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./util/IDRandomSelect */ "./src/featurefirst/util/IDRandomSelect.ts");
/* harmony import */ var _util_PageStateMemento__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./util/PageStateMemento */ "./src/featurefirst/util/PageStateMemento.ts");
/* harmony import */ var _util_ScreenRegistry__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./util/ScreenRegistry */ "./src/featurefirst/util/ScreenRegistry.ts");


































const taskLocalStorage = new _services_LocalStorage__WEBPACK_IMPORTED_MODULE_26__.TaskLocalStorage();
const projLocalStorage = new _services_LocalStorage__WEBPACK_IMPORTED_MODULE_26__.ProjectLocalStorage();
const noteLocalStorage = new _services_LocalStorage__WEBPACK_IMPORTED_MODULE_26__.NoteLocalStorage();
//********************************** THESE WILL BE UTIL CLASSES */
const homeScreenRegistry = new _util_ScreenRegistry__WEBPACK_IMPORTED_MODULE_33__.ScreenRegistry(new Map());
const homeClickEventRegistry = new _util_EventRegistry__WEBPACK_IMPORTED_MODULE_29__.ClickEventRegistry(new Map());
const homeChangeEventRegistry = new _util_EventRegistry__WEBPACK_IMPORTED_MODULE_29__.InputChangeEventRegistry(new Map());
const dateRangeScreenRegistry = new _util_ScreenRegistry__WEBPACK_IMPORTED_MODULE_33__.ScreenRegistry(new Map());
const dateChangeEventRegistry = new _util_EventRegistry__WEBPACK_IMPORTED_MODULE_29__.InputChangeEventRegistry(new Map());
const dateToStr = new _features_Tasks_util_DateToText__WEBPACK_IMPORTED_MODULE_22__.DateToString();
const dateCheck = new _features_Tasks_util_DatesFilter__WEBPACK_IMPORTED_MODULE_23__.DateRangeCheck();
let taskIDGenerator;
let projIDGenerator;
let noteIDGenerator; //THIS NEEDS TO BE ONE ONLY IF THE ARRAY OF PROJECTS/TASKS/NOTES ARE EMPTY OR NO KEYS IN LOCAL STORAGE
const allSymbolIDs = new _features_Projects_util_AllSymbolIDs__WEBPACK_IMPORTED_MODULE_10__.AllSymbolID();
const idRandomSelect = new _util_IDRandomSelect__WEBPACK_IMPORTED_MODULE_31__.PickRandomID();
//********************************** THESE WILL BE UTIL CLASSES */
const existingKeys = ["projects", "notes", "tasks"];
if (existingKeys.some((key) => localStorage.getItem(key) == null)) {
    taskIDGenerator = new _util_IDGenerator__WEBPACK_IMPORTED_MODULE_30__.IDGenertor(1);
    projIDGenerator = new _util_IDGenerator__WEBPACK_IMPORTED_MODULE_30__.IDGenertor(1);
    noteIDGenerator = new _util_IDGenerator__WEBPACK_IMPORTED_MODULE_30__.IDGenertor(1);
    //IF ALL THE KEYS ARE HERE THEN: LOAD WHATEVER WE HAVE IN THERE:
    //IF THERE ARE KEYS MISSING THEN: INITIATE NEW KEYS WITH EMPTY ARRAYS AS VALUES:
    noteLocalStorage.removeAll();
    taskLocalStorage.removeAll();
    projLocalStorage.removeAll();
    const defaultNotes = [
        {
            id: noteIDGenerator.generate(),
            title: "Default Note Title 1!!!",
            body: "This is the first note's default body, I can only imagine how long this is going to take"
        },
        {
            id: noteIDGenerator.generate(),
            title: "Default Note Title 2!!!",
            body: "Defaults only appear when there is no keys HOWEVER (Read Note 3 Body)"
        },
        {
            id: noteIDGenerator.generate(),
            title: "Default Note Title 3!!!",
            body: "The id generator will revert to 1 every time the page is opened even if there is an existing precedent of ids meaning it will override them"
        }
    ];
    const defaultProj = [
        {
            id: projIDGenerator.generate(),
            title: "Personal"
        },
        {
            id: projIDGenerator.generate(),
            title: "Studies"
        },
        {
            id: projIDGenerator.generate(),
            title: "List 1"
        }
    ];
    const defaultTasks = [
        {
            id: taskIDGenerator.generate(),
            title: "Random 1 Task",
            body: "I have a body of text here as an example...",
            priority: "high",
            project: 0,
            date: new Date(),
            completed: true
        },
        {
            id: taskIDGenerator.generate(),
            title: "Random 2 Task",
            body: "For the actual date of today...",
            priority: "low",
            project: 0,
            date: new Date(2025, 6, 27),
            completed: false
        },
        {
            id: taskIDGenerator.generate(),
            title: "Random 3 Task",
            body: "For four weeks ahead of today...",
            priority: "medium",
            project: 0,
            date: (0,_features_Tasks_components_SetDates__WEBPACK_IMPORTED_MODULE_11__.fourWeeksFromToday)(),
            completed: true
        },
        {
            id: taskIDGenerator.generate(),
            title: "Random 4 Task",
            body: "Set for project 1 default connect...",
            priority: "low",
            project: defaultProj[0]?.id ?? 0,
            date: new Date(2000, 7, 17),
            completed: false
        },
        {
            id: taskIDGenerator.generate(),
            title: "Random 5 Task",
            body: "Set for project 2 default connect...",
            priority: "low",
            project: defaultProj[1]?.id ?? 0,
            date: new Date(2025, 12, 31),
            completed: false
        },
        {
            id: taskIDGenerator.generate(),
            title: "Random 6 Task",
            body: "Set for project 3 default connect...",
            priority: "medium",
            project: defaultProj[2]?.id ?? 0,
            date: new Date(2012, 9, 18),
            completed: true
        },
        {
            id: taskIDGenerator.generate(),
            title: "Upcoming Check",
            body: "I have a body of text here as an example for the upcoming slot...",
            priority: "low",
            project: 1,
            date: (0,_features_Tasks_components_SetDates__WEBPACK_IMPORTED_MODULE_11__.nextWeek)(),
            completed: false
        },
    ];
    defaultNotes.forEach((note) => {
        noteLocalStorage.set(note.id, note);
    });
    defaultProj.forEach((proj) => {
        projLocalStorage.set(proj.id, proj);
    });
    defaultTasks.forEach((task) => {
        taskLocalStorage.set(task.id, task);
    });
}
else {
    const taskIDMax = taskLocalStorage.getAll().reduce((acc, curr) => { return Math.max(curr.id, acc); }, 0) + 1;
    const projIDMax = projLocalStorage.getAll().reduce((acc, curr) => { return Math.max(curr.id, acc); }, 0) + 1;
    const noteIDMax = noteLocalStorage.getAll().reduce((acc, curr) => { return Math.max(curr.id, acc); }, 0) + 1;
    taskIDGenerator = new _util_IDGenerator__WEBPACK_IMPORTED_MODULE_30__.IDGenertor(taskIDMax);
    projIDGenerator = new _util_IDGenerator__WEBPACK_IMPORTED_MODULE_30__.IDGenertor(projIDMax);
    noteIDGenerator = new _util_IDGenerator__WEBPACK_IMPORTED_MODULE_30__.IDGenertor(noteIDMax);
}
const mainPageClickEvents = new _util_EventRegistry__WEBPACK_IMPORTED_MODULE_29__.PageEventRegistry(new Map());
const mainPageStateManager = new _states_PageStateManager__WEBPACK_IMPORTED_MODULE_28__.PageStateManager();
const mainPageMemento = new _util_PageStateMemento__WEBPACK_IMPORTED_MODULE_32__.ChangePageMemento();
//********************************** THESE WILL BE THE PAGE EVENTS AND REGISTRY */
const dialogPageClickEventRegistry = new _util_EventRegistry__WEBPACK_IMPORTED_MODULE_29__.ClickEventRegistry(new Map());
const dialogPageStateManager = new _states_PageStateManager__WEBPACK_IMPORTED_MODULE_28__.PageStateManager();
const dialogPageMemento = new _util_PageStateMemento__WEBPACK_IMPORTED_MODULE_32__.ChangePageMemento();
const dialogSidebarPageRegistry = new _util_ScreenRegistry__WEBPACK_IMPORTED_MODULE_33__.ScreenRegistry(new Map());
const dialogAddRemovalCommand = new _services_DialogShutDownCommands__WEBPACK_IMPORTED_MODULE_24__.DialogShutdownCommand(dialogPageStateManager, dialogSidebarPageRegistry);
const dialogAddToggle = new _services_DialogToggle__WEBPACK_IMPORTED_MODULE_25__.DialogToggle(_components_DialogComponent__WEBPACK_IMPORTED_MODULE_0__.dialogElem, _components_DialogComponent__WEBPACK_IMPORTED_MODULE_0__.cancelBtn, dialogAddRemovalCommand
//ADDITIONAL LOGIC AFTER CLOSING THE DIALOG FOR THIS IS THAT WE WANT TO:
// SO ANY HTMLELEMENT BEING REGISTRED WITH THE PAGE SHOULD SHOW UP WITH DISPLAY FLEX
//LETS TRY AND MAKE THE PAGE SIMULATION OF COLOURS WORK WITH THE PAGE MEDIATOR
);
const dialogScreenRegistry = new _util_ScreenRegistry__WEBPACK_IMPORTED_MODULE_33__.ScreenRegistry(new Map());
const dialogSubmitEventRegistry = new _util_EventRegistry__WEBPACK_IMPORTED_MODULE_29__.FormSubmitEventRegistry(new Map());
const taskFormScreen = new _features_Tasks_services_CreateTaskForm__WEBPACK_IMPORTED_MODULE_15__.TaskForm(dialogScreenRegistry, dialogSubmitEventRegistry, _features_Tasks_components_TasksFormComponents__WEBPACK_IMPORTED_MODULE_13__.tasksForm, taskLocalStorage, projLocalStorage, dialogAddToggle, mainPageStateManager, dateToStr, taskIDGenerator);
const dialogShutDownEditCommand = new _services_DialogShutDownCommands__WEBPACK_IMPORTED_MODULE_24__.DialogShutdownEdit(dialogSidebarPageRegistry);
const dialogEditToggle = new _services_DialogToggle__WEBPACK_IMPORTED_MODULE_25__.DialogToggle(_components_DialogComponent__WEBPACK_IMPORTED_MODULE_0__.dialogElem, _components_DialogComponent__WEBPACK_IMPORTED_MODULE_0__.cancelBtn, dialogShutDownEditCommand);
const taskFormScreenEdit = new _features_Tasks_services_CreateTaskForm__WEBPACK_IMPORTED_MODULE_15__.TaskForm(dialogScreenRegistry, dialogSubmitEventRegistry, _features_Tasks_components_TasksFormComponents__WEBPACK_IMPORTED_MODULE_13__.tasksForm, taskLocalStorage, projLocalStorage, dialogEditToggle, mainPageStateManager, dateToStr, taskIDGenerator);
dialogShutDownEditCommand.setTaskFormScreen(taskFormScreenEdit);
const taskEditCommand = new _features_Tasks_services_EditTaskCommand__WEBPACK_IMPORTED_MODULE_17__.EditTaskCommand(dialogEditToggle, taskLocalStorage, taskFormScreenEdit, dialogSidebarPageRegistry, dialogPageMemento);
const taskRenderScreen = new _features_Tasks_services_CreateTaskHTML__WEBPACK_IMPORTED_MODULE_16__.RenderTasks(taskLocalStorage, homeChangeEventRegistry, homeClickEventRegistry, homeScreenRegistry, taskEditCommand);
const dateSelectorScreen = new _features_Tasks_services_CreateDateRangeScreen__WEBPACK_IMPORTED_MODULE_14__.DateRangeSelectorScreen(dateRangeScreenRegistry, dateChangeEventRegistry, dateToStr, taskRenderScreen, taskLocalStorage, dateCheck);
const defaultPage = new Map([
    [_features_Tasks_components_TaskDateFilters__WEBPACK_IMPORTED_MODULE_12__.tasksHomeBtn, new _features_Tasks_states_HomeState__WEBPACK_IMPORTED_MODULE_19__.HomeState(taskRenderScreen, taskLocalStorage)]
]);
const mainPageMediator = new _services_PageMediator__WEBPACK_IMPORTED_MODULE_27__.PageMediator(mainPageClickEvents, mainPageStateManager, mainPageMemento, defaultPage);
mainPageMediator.setLivePages(new Map([
    [_features_Tasks_components_TaskDateFilters__WEBPACK_IMPORTED_MODULE_12__.tasksCalendarBtn, new _features_Tasks_states_CalendarState__WEBPACK_IMPORTED_MODULE_18__.CalendarState(dateSelectorScreen)],
    [_features_Tasks_components_TaskDateFilters__WEBPACK_IMPORTED_MODULE_12__.tasksUpcomingBtn, new _features_Tasks_states_UpcomingState__WEBPACK_IMPORTED_MODULE_21__.UpcomingState(taskRenderScreen, taskLocalStorage, dateCheck)]
]));
//********************************** THESE WILL BE MAIN PAGE CLASSES */
//********************************** THESE WILL BE THE PAGE EVENTS AND REGISTRY */
//********************************** THESE WILL BE MAIN PAGE CLASSES */
// const homeScreenState: IState = new HomeState(
//     taskRenderScreen,
//     taskLocalStorage
// );
//********************************** THESE WILL BE THE PROJECT PAGE EVENTS AND REGISTRY */
const projRemoveClickRegistry = new _util_EventRegistry__WEBPACK_IMPORTED_MODULE_29__.ClickEventRegistry(new Map());
const projRemovalCommand = new _features_Projects_services_ProjectClickEvent__WEBPACK_IMPORTED_MODULE_6__.ProjectRemovalCommand(projLocalStorage, mainPageClickEvents, taskLocalStorage);
//ISSUE BEING THAT IT IS CAUSING AN ERROR TO DELETE THE FUNDAMENTALS, WORKING WITH EVENT LISTENERS IS AWFUL
const projHTMLCreation = new _features_Projects_services_ProjectHTMLCreator__WEBPACK_IMPORTED_MODULE_7__.ProjectHTMLCreator(allSymbolIDs, idRandomSelect, projRemoveClickRegistry, projRemovalCommand, mainPageStateManager, mainPageMediator, defaultPage, taskRenderScreen, taskLocalStorage, projLocalStorage);
//********************************** THESE WILL BE THE PAGE EVENTS AND REGISTRY */
//********************************** THESE WILL BE THE PAGE EVENTS AND REGISTRY */
//********************************** THESE WILL BE THE NOTES PAGE EVENTS AND REGISTRY */
const noteSidebarScreen = new _features_Notes_services_NoteSidebar__WEBPACK_IMPORTED_MODULE_2__.NoteSidebarScreen(mainPageMediator, mainPageClickEvents, mainPageStateManager, noteLocalStorage, homeScreenRegistry, homeClickEventRegistry, defaultPage);
//********************************** THESE WILL BE THE NOTES PAGE EVENTS AND REGISTRY */
noteLocalStorage.getAll().forEach((note) => {
    noteSidebarScreen.execute(note);
});
projLocalStorage.getAll().forEach((proj) => {
    projHTMLCreation.execute(proj);
});
//********************************** ALL THINGS DIALOG */
const taskFormState = new _features_Tasks_states_TaskFormState__WEBPACK_IMPORTED_MODULE_20__.TaskFormState(taskFormScreen);
const projSubmitCommand = new _features_Projects_services_ProjectSubmitCommand__WEBPACK_IMPORTED_MODULE_8__.ProjectSubmitCommand(projIDGenerator, projHTMLCreation, projLocalStorage, dialogAddToggle);
const projFormState = new _features_Projects_states_ProjectsFormState__WEBPACK_IMPORTED_MODULE_9__.ProjectsFormState(_features_Projects_components_ProjectsForm__WEBPACK_IMPORTED_MODULE_5__.projectsForm, projSubmitCommand, dialogSubmitEventRegistry);
const noteSubmitCommand = new _features_Notes_services_NoteSubmitCommand__WEBPACK_IMPORTED_MODULE_3__.NoteSubmitCommand(noteIDGenerator, noteSidebarScreen, noteLocalStorage, dialogAddToggle);
const noteFormState = new _features_Notes_states_NotesFormState__WEBPACK_IMPORTED_MODULE_4__.NotesFormState(_features_Notes_components_NotesForm__WEBPACK_IMPORTED_MODULE_1__.notesForm, noteSubmitCommand, dialogSubmitEventRegistry);
_components_DialogComponent__WEBPACK_IMPORTED_MODULE_0__.addBtn.addEventListener("click", () => {
    //SHOULD THE PAGE MEDIATOR BELONG INSIDE OF THE EVENT LISTENER: LEADING THEORY IS THAT YES BUT KEEP THE REGISTRIES OUTSIDE AS THE CONSTRUCTOR WILL ALWAYS SET, WE JUST NEED TO
    //CLEAR THE REGISTRY ON CLOSE
    const taskFormBtnComponent = new _features_Tasks_components_TasksFormComponents__WEBPACK_IMPORTED_MODULE_13__.TaskFormBtnComponent();
    dialogSidebarPageRegistry.set(taskFormBtnComponent.getHTML(), taskFormBtnComponent);
    taskFormBtnComponent.setValue("Task");
    taskFormBtnComponent.render(_components_DialogComponent__WEBPACK_IMPORTED_MODULE_0__.dialogSidePageOptionsContainer);
    const projFormBtnComponent = new _features_Projects_components_ProjectsForm__WEBPACK_IMPORTED_MODULE_5__.ProjectFormBtnComponent();
    dialogSidebarPageRegistry.set(projFormBtnComponent.getHTML(), projFormBtnComponent);
    projFormBtnComponent.setValue("Project");
    projFormBtnComponent.render(_components_DialogComponent__WEBPACK_IMPORTED_MODULE_0__.dialogSidePageOptionsContainer);
    const noteFormBtnComponent = new _features_Notes_components_NotesForm__WEBPACK_IMPORTED_MODULE_1__.NotesFormBtnComponent();
    dialogSidebarPageRegistry.set(noteFormBtnComponent.getHTML(), noteFormBtnComponent);
    noteFormBtnComponent.setValue("Note");
    noteFormBtnComponent.render(_components_DialogComponent__WEBPACK_IMPORTED_MODULE_0__.dialogSidePageOptionsContainer);
    const dialogPageMediator = new _services_PageMediator__WEBPACK_IMPORTED_MODULE_27__.PageMediator(dialogPageClickEventRegistry, dialogPageStateManager, dialogPageMemento, new Map([
        [taskFormBtnComponent.getHTML(), taskFormState]
    ]));
    dialogPageMediator.setLivePages(new Map([
        [projFormBtnComponent.getHTML(), projFormState],
        [noteFormBtnComponent.getHTML(), noteFormState]
    ]));
    dialogAddToggle.open();
});
//********************************** ALL THINGS DIALOG */


/***/ }),

/***/ "./src/featurefirst/components/DialogComponent.ts":
/*!********************************************************!*\
  !*** ./src/featurefirst/components/DialogComponent.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addBtn: () => (/* binding */ addBtn),
/* harmony export */   cancelBtn: () => (/* binding */ cancelBtn),
/* harmony export */   dialogElem: () => (/* binding */ dialogElem),
/* harmony export */   dialogSidePageOptionsContainer: () => (/* binding */ dialogSidePageOptionsContainer)
/* harmony export */ });
const dialogElem = document.getElementById("new-entry-dialog");
const addBtn = document.getElementById("add-button");
const cancelBtn = document.getElementById("close-dialog");
const dialogSidePageOptionsContainer = document.querySelector("#aside-theme-container > div");


/***/ }),

/***/ "./src/featurefirst/components/MainContainer.ts":
/*!******************************************************!*\
  !*** ./src/featurefirst/components/MainContainer.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homeContentContainer: () => (/* binding */ homeContentContainer)
/* harmony export */ });
const homeContentContainer = document.getElementById("home-content-container");


/***/ }),

/***/ "./src/featurefirst/components/MainTitle.ts":
/*!**************************************************!*\
  !*** ./src/featurefirst/components/MainTitle.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mainTitle: () => (/* binding */ mainTitle)
/* harmony export */ });
const mainTitle = document.getElementById("main-title");


/***/ }),

/***/ "./src/featurefirst/features/Notes/components/NoteSidebarButtons.ts":
/*!**************************************************************************!*\
  !*** ./src/featurefirst/features/Notes/components/NoteSidebarButtons.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoteSidebarBtn: () => (/* binding */ NoteSidebarBtn)
/* harmony export */ });
class NoteSidebarBtn {
    noteSidebarBtn;
    constructor() {
        this.noteSidebarBtn = document.createElement("button");
        this.noteSidebarBtn.classList.add("sidebar-notes-button");
        this.noteSidebarBtn.setAttribute("data-page", "unselected");
        this.noteSidebarBtn.type = "button";
    }
    remove() {
        this.noteSidebarBtn.remove();
    }
    render(container) {
        container.appendChild(this.noteSidebarBtn);
    }
    setValue(value) {
        this.noteSidebarBtn.textContent = value;
    }
    getHTML() {
        return this.noteSidebarBtn;
    }
}


/***/ }),

/***/ "./src/featurefirst/features/Notes/components/NoteSidebarContainer.ts":
/*!****************************************************************************!*\
  !*** ./src/featurefirst/features/Notes/components/NoteSidebarContainer.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   noteSidebarContainer: () => (/* binding */ noteSidebarContainer)
/* harmony export */ });
const noteSidebarContainer = document.getElementById("notes-container");


/***/ }),

/***/ "./src/featurefirst/features/Notes/components/NotesComponents.ts":
/*!***********************************************************************!*\
  !*** ./src/featurefirst/features/Notes/components/NotesComponents.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoteContainer: () => (/* binding */ NoteContainer),
/* harmony export */   NoteDesc: () => (/* binding */ NoteDesc),
/* harmony export */   NoteRemoveBtn: () => (/* binding */ NoteRemoveBtn),
/* harmony export */   NoteTitle: () => (/* binding */ NoteTitle)
/* harmony export */ });
class NoteTitle {
    noteTitle;
    constructor() {
        this.noteTitle = document.createElement("div");
        this.noteTitle.classList.add("note-title");
    }
    remove() {
        this.noteTitle.remove();
    }
    render(container) {
        container.appendChild(this.noteTitle);
    }
    setValue(value) {
        this.noteTitle.textContent = value;
    }
    getHTML() {
        return this.noteTitle;
    }
}
class NoteDesc {
    noteDesc;
    constructor() {
        this.noteDesc = document.createElement("div");
        this.noteDesc.classList.add("note-body");
    }
    remove() {
        this.noteDesc.remove();
    }
    render(container) {
        container.appendChild(this.noteDesc);
    }
    setValue(value) {
        this.noteDesc.textContent = value;
    }
    getHTML() {
        return this.noteDesc;
    }
}
class NoteRemoveBtn {
    noteRemoveBtn;
    constructor() {
        this.noteRemoveBtn = document.createElement("button");
        this.noteRemoveBtn.type = "button";
        this.noteRemoveBtn.classList.add("note-del-btn");
    }
    remove() {
        this.noteRemoveBtn.remove();
    }
    render(container) {
        container.appendChild(this.noteRemoveBtn);
    }
    setValue(value) {
        this.noteRemoveBtn.textContent = value;
    }
    getHTML() {
        return this.noteRemoveBtn;
    }
}
class NoteContainer {
    noteTitle;
    noteBody;
    noteRemoveBtn;
    innerContainer;
    constructor(noteTitle, noteBody, noteRemoveBtn) {
        this.noteTitle = noteTitle;
        this.noteBody = noteBody;
        this.noteRemoveBtn = noteRemoveBtn;
        this.innerContainer = document.createElement("div");
        this.innerContainer.classList.add("note-container");
    }
    remove() {
        this.innerContainer.remove();
    }
    render(container) {
        this.noteRemoveBtn.render(this.innerContainer);
        this.noteTitle.render(this.innerContainer);
        this.noteBody.render(this.innerContainer);
        container.appendChild(this.innerContainer);
    }
    setValue(value) {
    }
    getHTML() {
        return this.innerContainer;
    }
}


/***/ }),

/***/ "./src/featurefirst/features/Notes/components/NotesForm.ts":
/*!*****************************************************************!*\
  !*** ./src/featurefirst/features/Notes/components/NotesForm.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotesFormBtnComponent: () => (/* binding */ NotesFormBtnComponent),
/* harmony export */   notesForm: () => (/* binding */ notesForm),
/* harmony export */   notesFormBtn: () => (/* binding */ notesFormBtn)
/* harmony export */ });
const notesForm = document.getElementById("form-note-state");
const notesFormBtn = document.getElementById("dialog-note-theme");
class NotesFormBtnComponent {
    noteFormBtn;
    constructor() {
        this.noteFormBtn = document.createElement("p");
        this.noteFormBtn.id = "dialog-note-theme";
        this.noteFormBtn.classList.add("dialog-theme-selection");
        this.noteFormBtn.setAttribute("data-page", "unselected");
    }
    remove() {
        this.noteFormBtn.remove();
    }
    render(container) {
        container.appendChild(this.noteFormBtn);
    }
    setValue(value) {
        this.noteFormBtn.textContent = value;
    }
    getHTML() {
        return this.noteFormBtn;
    }
}


/***/ }),

/***/ "./src/featurefirst/features/Notes/models/NotesModel.ts":
/*!**************************************************************!*\
  !*** ./src/featurefirst/features/Notes/models/NotesModel.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoteSchema: () => (/* binding */ NoteSchema)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ "./node_modules/zod/lib/index.mjs");

const NoteSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    id: zod__WEBPACK_IMPORTED_MODULE_0__.z.number().positive(),
    title: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1),
    body: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1),
});


/***/ }),

/***/ "./src/featurefirst/features/Notes/services/NoteRemovalCommand.ts":
/*!************************************************************************!*\
  !*** ./src/featurefirst/features/Notes/services/NoteRemovalCommand.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoteRemovalCommand: () => (/* binding */ NoteRemovalCommand)
/* harmony export */ });
class NoteRemovalCommand {
    noteSidebarBtn;
    noteLocalStorage;
    pageEventRegistry;
    constructor(noteSidebarBtn, noteLocalStorage, pageEventRegistry) {
        this.noteSidebarBtn = noteSidebarBtn;
        this.noteLocalStorage = noteLocalStorage;
        this.pageEventRegistry = pageEventRegistry;
    }
    execute(criteria) {
        this.noteLocalStorage.removeByID(criteria);
        this.noteSidebarBtn.remove();
        this.pageEventRegistry.removeByID(this.noteSidebarBtn.getHTML());
        //NEED TO DO THE IF CHECK FOR PAGE STATE SOMEWHERE TO CHANGE TO ANOTHER PAGE BEFORE THIS HAPPENS
    }
}


/***/ }),

/***/ "./src/featurefirst/features/Notes/services/NoteSidebar.ts":
/*!*****************************************************************!*\
  !*** ./src/featurefirst/features/Notes/services/NoteSidebar.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoteSidebarScreen: () => (/* binding */ NoteSidebarScreen)
/* harmony export */ });
/* harmony import */ var _components_NoteSidebarButtons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/NoteSidebarButtons */ "./src/featurefirst/features/Notes/components/NoteSidebarButtons.ts");
/* harmony import */ var _components_NoteSidebarContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NoteSidebarContainer */ "./src/featurefirst/features/Notes/components/NoteSidebarContainer.ts");
/* harmony import */ var _states_NotePageState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../states/NotePageState */ "./src/featurefirst/features/Notes/states/NotePageState.ts");
/* harmony import */ var _NoteRemovalCommand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NoteRemovalCommand */ "./src/featurefirst/features/Notes/services/NoteRemovalCommand.ts");
// import { ICommand, ICommandCriteria } from "../../../models/CommandModel";
// import { IComponentEventRemovable, IComponentRemovable } from "../../../models/IComponentModels";
// import { IOpenClose } from "../../../models/OpenCloseModel";
// import { IClickEventRegistry, ILocalStorageRegistry, IScreenComponentRegistry } from "../../../models/Registry";
// import { NoteContainer, NoteDesc, NoteRemoveBtn, NoteTitle } from "../components/NotesComponents";
// import { INote, NoteSchema } from "../models/NotesModel";




// export class NotesRender implements IOpenClose<INote> {
//     private noteTitle: IComponentRemovable<string>;
//     private noteDesc: IComponentRemovable<string>;
//     private noteRemoveBtn: IComponentEventRemovable<string, [number]>;
//     private noteContainer: IComponentRemovable<void>;
//     constructor(
//         private openPageEvents: IClickEventRegistry,
//         //This is instantiated whenever the page is loaded
//         //Providing a new event registry whenever we open
//         // and then removing it when we close
//         private removeBtnCommand: ICommandCriteria<HTMLElement>,
//         private idContainer: HTMLElement
//     ) {
//         this.noteTitle = new NoteTitle();
//         this.noteDesc = new NoteDesc();
//         this.noteRemoveBtn = new NoteRemoveBtn(
//             this.openPageEvents,
//             this.removeBtnCommand,
//             this.idContainer
//         );
//         this.noteContainer = new NoteContainer(
//             this.noteTitle, 
//             this.noteDesc,
//             this.noteRemoveBtn
//         );
//     }
//     open(data: { id: number; title: string; body: string; } | undefined): void {
//         this.noteTitle.setValue(data?.title ?? "Exp Title");
//         this.noteDesc.setValue(data?.body ?? "Exp body text");
//         this.noteRemoveBtn.setValue("X");
//         this.noteRemoveBtn.addListener(data?.id ?? 1);
//         this.noteContainer.render(document.getElementById("home-content-container")!);
//     }
//     close(): void {
//         this.openPageEvents.removeAll();
//         this.noteContainer.remove();
//     }
// }
class NoteSidebarScreen {
    pageMediator;
    pageEventRegistry;
    pageStateManager;
    noteLocalStorage;
    screenRegistry;
    clickEventRegistry;
    defaultHomePage;
    constructor(pageMediator, pageEventRegistry, pageStateManager, noteLocalStorage, screenRegistry, clickEventRegistry, defaultHomePage) {
        this.pageMediator = pageMediator;
        this.pageEventRegistry = pageEventRegistry;
        this.pageStateManager = pageStateManager;
        this.noteLocalStorage = noteLocalStorage;
        this.screenRegistry = screenRegistry;
        this.clickEventRegistry = clickEventRegistry;
        this.defaultHomePage = defaultHomePage;
    }
    execute(criteria) {
        const noteSidebar = new _components_NoteSidebarButtons__WEBPACK_IMPORTED_MODULE_0__.NoteSidebarBtn();
        noteSidebar.setValue(criteria.title);
        noteSidebar.render(_components_NoteSidebarContainer__WEBPACK_IMPORTED_MODULE_1__.noteSidebarContainer);
        //AFTER MAKING THE HTML 
        const noteRemovalCommand = new _NoteRemovalCommand__WEBPACK_IMPORTED_MODULE_3__.NoteRemovalCommand(noteSidebar, this.noteLocalStorage, this.pageEventRegistry);
        // const noteScreen: INoteScreen = new NoteScreen(
        //     this.screenRegistry,
        //     this.clickEventRegistry,
        //     noteRemovalCommand,
        //     this.pageMediator,
        //     this.pageStateManager,
        //     this.defaultHomePage
        // );
        const notesGenericState = new _states_NotePageState__WEBPACK_IMPORTED_MODULE_2__.NoteDynamicPage(this.noteLocalStorage, criteria.id, this.screenRegistry, this.clickEventRegistry, this.pageStateManager, noteRemovalCommand, this.pageMediator, this.defaultHomePage);
        this.pageMediator.setLivePages(new Map([
            [noteSidebar.getHTML(), notesGenericState]
        ]));
    }
}


/***/ }),

/***/ "./src/featurefirst/features/Notes/services/NoteSubmitCommand.ts":
/*!***********************************************************************!*\
  !*** ./src/featurefirst/features/Notes/services/NoteSubmitCommand.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoteSubmitCommand: () => (/* binding */ NoteSubmitCommand)
/* harmony export */ });
/* harmony import */ var _models_NotesModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/NotesModel */ "./src/featurefirst/features/Notes/models/NotesModel.ts");

class NoteSubmitCommand {
    noteIDGenerator;
    noteHTMLCreator;
    noteLocalStorage;
    dialogToggle;
    constructor(noteIDGenerator, noteHTMLCreator, noteLocalStorage, dialogToggle) {
        this.noteIDGenerator = noteIDGenerator;
        this.noteHTMLCreator = noteHTMLCreator;
        this.noteLocalStorage = noteLocalStorage;
        this.dialogToggle = dialogToggle;
    }
    execute(criteria) {
        const form = criteria.target;
        const noteTitleInput = form.querySelector("input[name='title']");
        const noteBodyInput = form.querySelector("textarea[name='bodyText']");
        const obj = {};
        obj["id"] = this.noteIDGenerator.generate();
        obj["title"] = noteTitleInput.value;
        obj["body"] = noteBodyInput.value;
        if (_models_NotesModel__WEBPACK_IMPORTED_MODULE_0__.NoteSchema.safeParse(obj).success) {
            this.noteLocalStorage.set(obj["id"], obj);
            this.noteHTMLCreator.execute(obj);
            this.dialogToggle.close();
        }
    }
}


/***/ }),

/***/ "./src/featurefirst/features/Notes/states/NotePageState.ts":
/*!*****************************************************************!*\
  !*** ./src/featurefirst/features/Notes/states/NotePageState.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoteDynamicPage: () => (/* binding */ NoteDynamicPage)
/* harmony export */ });
/* harmony import */ var _components_MainContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/MainContainer */ "./src/featurefirst/components/MainContainer.ts");
/* harmony import */ var _components_MainTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/MainTitle */ "./src/featurefirst/components/MainTitle.ts");
/* harmony import */ var _components_NotesComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NotesComponents */ "./src/featurefirst/features/Notes/components/NotesComponents.ts");



class NoteDynamicPage {
    noteLocalStorage;
    noteID;
    elementRegistry;
    clickEventRegistry;
    pageStateManager;
    noteRemovalCommand;
    pageMediator;
    defaultPage;
    constructor(
    // private noteSidebarComponent: IComponentRemovable<string>, //Maybe this needs to be passed throuhg to the noteRenderScreen instead or the ID should be atleast???
    noteLocalStorage, noteID, elementRegistry, clickEventRegistry, pageStateManager, noteRemovalCommand, pageMediator, defaultPage) {
        this.noteLocalStorage = noteLocalStorage;
        this.noteID = noteID;
        this.elementRegistry = elementRegistry;
        this.clickEventRegistry = clickEventRegistry;
        this.pageStateManager = pageStateManager;
        this.noteRemovalCommand = noteRemovalCommand;
        this.pageMediator = pageMediator;
        this.defaultPage = defaultPage;
    }
    load() {
        _components_MainTitle__WEBPACK_IMPORTED_MODULE_1__.mainTitle.textContent = "";
        const note = this.noteLocalStorage.getByID(this.noteID);
        const noteTitle = new _components_NotesComponents__WEBPACK_IMPORTED_MODULE_2__.NoteTitle();
        noteTitle.setValue(note.title);
        this.elementRegistry.set(noteTitle.getHTML(), noteTitle);
        const noteDesc = new _components_NotesComponents__WEBPACK_IMPORTED_MODULE_2__.NoteDesc();
        noteDesc.setValue(note.body);
        this.elementRegistry.set(noteDesc.getHTML(), noteDesc);
        const noteRemv = new _components_NotesComponents__WEBPACK_IMPORTED_MODULE_2__.NoteRemoveBtn();
        noteRemv.setValue("X");
        this.elementRegistry.set(noteRemv.getHTML(), noteRemv);
        this.clickEventRegistry.set(noteRemv.getHTML(), (e) => {
            if (this.pageStateManager.getState() === this) {
                for (const [key, val] of this.defaultPage) {
                    this.pageMediator.changePage(key, val);
                }
            }
            this.noteRemovalCommand.execute(this.noteID);
        });
        const noteFull = new _components_NotesComponents__WEBPACK_IMPORTED_MODULE_2__.NoteContainer(noteTitle, noteDesc, noteRemv);
        this.elementRegistry.set(noteFull.getHTML(), noteFull);
        noteFull.render(_components_MainContainer__WEBPACK_IMPORTED_MODULE_0__.homeContentContainer);
    }
    exit() {
        this.elementRegistry.removeAll();
        this.clickEventRegistry.removeAll();
    }
}


/***/ }),

/***/ "./src/featurefirst/features/Notes/states/NotesFormState.ts":
/*!******************************************************************!*\
  !*** ./src/featurefirst/features/Notes/states/NotesFormState.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotesFormState: () => (/* binding */ NotesFormState)
/* harmony export */ });
// import { ICommand, ICommandCriteria } from "../../../models/CommandModel";
// import { IComponentRemovable } from "../../../models/IComponentModels";
// import { IIDGenerator } from "../../../models/IGenerator";
// import { IPageMediator } from "../../../models/PageMediator";
// import { IState, IStateManager } from "../../../models/PageState";
// import { IClickEventRegistry, ILocalStorageRegistry, ISubmitEventRegistry } from "../../../models/Registry";
// import { ClickEventRegistry } from "../../../util/EventRegistry";
// import { NoteSidebarBtn } from "../components/NoteSidebarButtons";
// import { INote } from "../models/NotesModel";
// import { NotesRender } from "../services/NotesRender";
// import { NoteDynamicPage } from "./NotePageState";
// export class NotesFormState implements IState<INote> {
//     constructor(
//         private eventRegistry: ISubmitEventRegistry,
//         private form: HTMLFormElement,
//         private removeNoteCommand: ICommandCriteria<HTMLElement>,
//         private stateManager: IStateManager<INote>,
//         private idGenerator: IIDGenerator,
//         private localStorage: ILocalStorageRegistry<INote>,
//         private pageEventRegistry: IClickEventRegistry,
//         private pageMediator: IPageMediator<INote>
//     ) {}
//     load(data: INote): void {
//         this.form.style.display = "flex";
//         this.eventRegistry.set(this.form, (e: SubmitEvent) => {
//             const noteTitleInput: HTMLInputElement = this.form.querySelector("input[name='title']")!; 
//             const noteBodyInput: HTMLInputElement = this.form.querySelector("input[name='bodyText']")!;
//             const noteSidebarBtn: IComponentRemovable<string> = new NoteSidebarBtn();
//             const id: number = this.idGenerator.generate();
//             noteSidebarBtn.getHTML().setAttribute("data-id", id.toString());
//             noteSidebarBtn.setValue(noteTitleInput.value);
//             noteSidebarBtn.render(document.getElementById("notes-container")!);
//             this.pageEventRegistry.set(noteSidebarBtn.getHTML(), (e: MouseEvent) => {
//                 const notePage: IState<INote> = new NoteDynamicPage(new NotesRender(
//                     new ClickEventRegistry(new Map<HTMLElement, (e: MouseEvent) => void>()),
//                     this.removeNoteCommand,
//                     noteSidebarBtn.getHTML()
//                 ));
//                 this.stateManager.exit();
//                 this.stateManager.set(notePage);
//                 this.stateManager.load(this.localStorage.getByID(id));
//             });
//         });
//     }
//     exit(): void {
//         this.form.style.display = "none";
//         this.eventRegistry.removeByID(this.form);
//     }
// }
class NotesFormState {
    form;
    noteSubmitCommand;
    eventsRegistry;
    constructor(form, noteSubmitCommand, eventsRegistry) {
        this.form = form;
        this.noteSubmitCommand = noteSubmitCommand;
        this.eventsRegistry = eventsRegistry;
    }
    load() {
        this.form.style.display = "flex";
        this.eventsRegistry.set(this.form, (e) => {
            e.preventDefault();
            this.noteSubmitCommand.execute(e);
        });
    }
    exit() {
        this.form.style.display = "none";
        this.form.reset();
        this.eventsRegistry.removeAll();
    }
}


/***/ }),

/***/ "./src/featurefirst/features/Projects/components/ProjectComponents.ts":
/*!****************************************************************************!*\
  !*** ./src/featurefirst/features/Projects/components/ProjectComponents.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectContainer: () => (/* binding */ ProjectContainer),
/* harmony export */   ProjectRemoveBtn: () => (/* binding */ ProjectRemoveBtn),
/* harmony export */   ProjectTitle: () => (/* binding */ ProjectTitle)
/* harmony export */ });
class ProjectTitle {
    projectTitle;
    constructor() {
        this.projectTitle = document.createElement("p");
        this.projectTitle.classList.add("sidebar-option-title");
    }
    remove() {
        this.projectTitle.remove();
    }
    render(container) {
        container.appendChild(this.projectTitle);
    }
    setValue(value) {
        this.projectTitle.textContent = value;
    }
    getHTML() {
        return this.projectTitle;
    }
}
class ProjectRemoveBtn {
    removeButton;
    constructor() {
        this.removeButton = document.createElement("div");
        this.removeButton.classList.add("remove-sidebar-option");
    }
    remove() {
        this.removeButton.remove();
    }
    render(container) {
        container.appendChild(this.removeButton);
    }
    setValue(value) {
        this.removeButton.textContent = value;
    }
    getHTML() {
        return this.removeButton;
    }
}
class ProjectContainer {
    projectTitle;
    allSymbols;
    pickRandomly;
    projID;
    innerContainer;
    svgContainer;
    svg;
    svgUsePath;
    notificationNumber;
    constructor(projectTitle, allSymbols, pickRandomly, projID) {
        this.projectTitle = projectTitle;
        this.allSymbols = allSymbols;
        this.pickRandomly = pickRandomly;
        this.projID = projID;
        const randomColours = ["rgb(216, 76, 100)", "rgb(77, 200, 241)", "rgb(179, 179, 38)"];
        this.innerContainer = document.createElement("div");
        this.innerContainer.classList.add("sidebar-option");
        this.innerContainer.setAttribute("data-page", "unselected");
        this.innerContainer.setAttribute("data-project-id", this.projID.toString());
        const XLINK_NS = 'http://www.w3.org/1999/xlink';
        this.svgContainer = document.createElement("div");
        this.svgContainer.classList.add("sidebar-svg-container");
        this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.svg.style.fill = randomColours[Math.floor(Math.random() * 3)];
        this.svgUsePath = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        const symbolIds = this.allSymbols.generate(document.getElementById("project-svg-img-container"));
        this.svgUsePath.setAttributeNS(XLINK_NS, "href", `#${this.pickRandomly.pickRandom(symbolIds)}`);
        this.notificationNumber = document.createElement("div");
        this.notificationNumber.classList.add("sidebar-notification-number-container");
        this.notificationNumber.setAttribute("data-notification", "inactive");
    }
    remove() {
        this.innerContainer.remove();
    }
    render(container) {
        this.svg.appendChild(this.svgUsePath);
        this.svgContainer.appendChild(this.svg);
        this.innerContainer.appendChild(this.svgContainer);
        this.projectTitle.render(this.innerContainer);
        this.innerContainer.appendChild(this.notificationNumber);
        container.appendChild(this.innerContainer);
    }
    setValue(value) {
    }
    getHTML() {
        return this.innerContainer;
    }
}


/***/ }),

/***/ "./src/featurefirst/features/Projects/components/ProjectContainer.ts":
/*!***************************************************************************!*\
  !*** ./src/featurefirst/features/Projects/components/ProjectContainer.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projContainer: () => (/* binding */ projContainer)
/* harmony export */ });
const projContainer = document.querySelector("#aside-projects-list-container > .sidebar-inner-container");


/***/ }),

/***/ "./src/featurefirst/features/Projects/components/ProjectsForm.ts":
/*!***********************************************************************!*\
  !*** ./src/featurefirst/features/Projects/components/ProjectsForm.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectFormBtnComponent: () => (/* binding */ ProjectFormBtnComponent),
/* harmony export */   projectsForm: () => (/* binding */ projectsForm),
/* harmony export */   projectsFormBtn: () => (/* binding */ projectsFormBtn)
/* harmony export */ });
const projectsForm = document.getElementById("form-project-state");
const projectsFormBtn = document.getElementById("dialog-project-theme");
class ProjectFormBtnComponent {
    projFormBtn;
    constructor() {
        this.projFormBtn = document.createElement("p");
        this.projFormBtn.id = "dialog-project-theme";
        this.projFormBtn.classList.add("dialog-theme-selection");
        this.projFormBtn.setAttribute("data-page", "unselected");
    }
    remove() {
        this.projFormBtn.remove();
    }
    render(container) {
        container.appendChild(this.projFormBtn);
    }
    setValue(value) {
        this.projFormBtn.textContent = value;
    }
    getHTML() {
        return this.projFormBtn;
    }
}


/***/ }),

/***/ "./src/featurefirst/features/Projects/models/ProjectsModel.ts":
/*!********************************************************************!*\
  !*** ./src/featurefirst/features/Projects/models/ProjectsModel.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectSchema: () => (/* binding */ ProjectSchema)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ "./node_modules/zod/lib/index.mjs");

// import { TaskSchema } from "../../Tasks/models/TaskModels";
const ProjectSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    id: zod__WEBPACK_IMPORTED_MODULE_0__.z.number().nonnegative(),
    title: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1),
    // tasks: z.number().positive().array(),
    // tasks: TaskSchema.array()
});


/***/ }),

/***/ "./src/featurefirst/features/Projects/services/ProjectClickEvent.ts":
/*!**************************************************************************!*\
  !*** ./src/featurefirst/features/Projects/services/ProjectClickEvent.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectRemovalCommand: () => (/* binding */ ProjectRemovalCommand)
/* harmony export */ });
class ProjectRemovalCommand {
    projLocalStorage;
    pageClickEventRegistry;
    taskLocalStorage;
    constructor(projLocalStorage, pageClickEventRegistry, taskLocalStorage
    // private pageStateManager: IStateManager,
    // private pageChangeMediator: IPageMediator<null, undefined>,
    // private defaultPage: HTMLElement
    ) {
        this.projLocalStorage = projLocalStorage;
        this.pageClickEventRegistry = pageClickEventRegistry;
        this.taskLocalStorage = taskLocalStorage;
    }
    execute(projSidebarComponent) {
        const projSidebarBtn = projSidebarComponent.getHTML();
        const projID = Number(projSidebarBtn.getAttribute("data-project-id"));
        this.projLocalStorage.removeByID(projID);
        this.pageClickEventRegistry.removeByID(projSidebarBtn);
        //DO I HAVE TO REMOVE THE REMOVE BTN AS WELL???
        projSidebarComponent.remove();
        const tasks = this.taskLocalStorage.getAll().filter(task => {
            return task.project == projID;
        });
        tasks.forEach(task => {
            task.project = 0;
            this.taskLocalStorage.set(task.id, task);
        });
    }
}


/***/ }),

/***/ "./src/featurefirst/features/Projects/services/ProjectHTMLCreator.ts":
/*!***************************************************************************!*\
  !*** ./src/featurefirst/features/Projects/services/ProjectHTMLCreator.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectHTMLCreator: () => (/* binding */ ProjectHTMLCreator)
/* harmony export */ });
/* harmony import */ var _components_ProjectComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ProjectComponents */ "./src/featurefirst/features/Projects/components/ProjectComponents.ts");
/* harmony import */ var _components_ProjectContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ProjectContainer */ "./src/featurefirst/features/Projects/components/ProjectContainer.ts");
/* harmony import */ var _states_ProjectGenericState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../states/ProjectGenericState */ "./src/featurefirst/features/Projects/states/ProjectGenericState.ts");



class ProjectHTMLCreator {
    allSymbolID;
    idRandomSelect;
    pageClickEventRegistry;
    projRemovalCommand;
    pageStateManager;
    pageMediator;
    defaultPage;
    taskRenderScreen;
    taskLocalStorage;
    projLocalStorage;
    constructor(allSymbolID, idRandomSelect, //For building containers we have one instance of these
    pageClickEventRegistry, // For setting the click events of a new page we set some of these
    projRemovalCommand, pageStateManager, pageMediator, defaultPage, taskRenderScreen, taskLocalStorage, projLocalStorage) {
        this.allSymbolID = allSymbolID;
        this.idRandomSelect = idRandomSelect;
        this.pageClickEventRegistry = pageClickEventRegistry;
        this.projRemovalCommand = projRemovalCommand;
        this.pageStateManager = pageStateManager;
        this.pageMediator = pageMediator;
        this.defaultPage = defaultPage;
        this.taskRenderScreen = taskRenderScreen;
        this.taskLocalStorage = taskLocalStorage;
        this.projLocalStorage = projLocalStorage;
    }
    execute(criteria) {
        const projHTMLTitle = new _components_ProjectComponents__WEBPACK_IMPORTED_MODULE_0__.ProjectTitle();
        projHTMLTitle.setValue(criteria["title"]);
        const projHTMLContainer = new _components_ProjectComponents__WEBPACK_IMPORTED_MODULE_0__.ProjectContainer(projHTMLTitle, this.allSymbolID, //This one can be passed through the constructor
        this.idRandomSelect, criteria.id);
        const projRemoveBtn = new _components_ProjectComponents__WEBPACK_IMPORTED_MODULE_0__.ProjectRemoveBtn();
        projRemoveBtn.setValue("X");
        //NEED TO SET IN THE CLICKEVENTLISTENERS FOR THE PAGES CLICKREGISTRY FOR BOTH THE REMOVE BTN AND CONTAINER, WE MIGHT NEED TO BRING THE REMOVE BTN OUT THE CONTAINER
        //AFTER SET UP BOTH WITH THEIR OWN COMMANDS
        const newProjState = new _states_ProjectGenericState__WEBPACK_IMPORTED_MODULE_2__.ProjectGenericState(criteria.id, this.projLocalStorage, this.taskRenderScreen, this.taskLocalStorage);
        this.pageMediator.setLivePages(new Map([
            [projHTMLContainer.getHTML(), newProjState]
        ])); //This does the change page event logic 
        // this.pageClickEventRegistry.set(projHTMLContainer.getHTML(), (e: MouseEvent) => {
        //     this.pageMediator.changePage(e.target as HTMLElement);
        // });
        this.pageClickEventRegistry.set(projRemoveBtn.getHTML(), (e) => {
            e.stopPropagation();
            if (this.pageStateManager.getState() === newProjState) {
                for (const [key, val] of this.defaultPage) {
                    this.pageMediator.changePage(key, val);
                }
            }
            this.projRemovalCommand.execute(projHTMLContainer);
            this.pageClickEventRegistry.removeByID(projRemoveBtn.getHTML());
        });
        projHTMLContainer.render(_components_ProjectContainer__WEBPACK_IMPORTED_MODULE_1__.projContainer);
        projRemoveBtn.render(projHTMLContainer.getHTML());
    }
}


/***/ }),

/***/ "./src/featurefirst/features/Projects/services/ProjectSubmitCommand.ts":
/*!*****************************************************************************!*\
  !*** ./src/featurefirst/features/Projects/services/ProjectSubmitCommand.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectSubmitCommand: () => (/* binding */ ProjectSubmitCommand)
/* harmony export */ });
/* harmony import */ var _models_ProjectsModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/ProjectsModel */ "./src/featurefirst/features/Projects/models/ProjectsModel.ts");

class ProjectSubmitCommand {
    projIDGenerator;
    projHTMLCreator;
    projLocalStorage;
    dialogToggle;
    constructor(projIDGenerator, projHTMLCreator, projLocalStorage, dialogToggle) {
        this.projIDGenerator = projIDGenerator;
        this.projHTMLCreator = projHTMLCreator;
        this.projLocalStorage = projLocalStorage;
        this.dialogToggle = dialogToggle;
    }
    execute(criteria) {
        const form = criteria.target;
        const projTitleInput = form.querySelector("input[name='title']");
        const obj = {};
        obj["id"] = this.projIDGenerator.generate();
        obj["title"] = projTitleInput.value;
        if (_models_ProjectsModel__WEBPACK_IMPORTED_MODULE_0__.ProjectSchema.safeParse(obj).success) {
            this.projLocalStorage.set(obj["id"], obj);
            this.projHTMLCreator.execute(obj);
            this.dialogToggle.close();
        }
    }
}


/***/ }),

/***/ "./src/featurefirst/features/Projects/states/ProjectGenericState.ts":
/*!**************************************************************************!*\
  !*** ./src/featurefirst/features/Projects/states/ProjectGenericState.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectGenericState: () => (/* binding */ ProjectGenericState)
/* harmony export */ });
/* harmony import */ var _components_MainTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/MainTitle */ "./src/featurefirst/components/MainTitle.ts");

class ProjectGenericState {
    projID;
    projLocalStorage;
    taskRenderScreen;
    taskLocalStorage;
    constructor(projID, projLocalStorage, taskRenderScreen, taskLocalStorage) {
        this.projID = projID;
        this.projLocalStorage = projLocalStorage;
        this.taskRenderScreen = taskRenderScreen;
        this.taskLocalStorage = taskLocalStorage;
    }
    load() {
        _components_MainTitle__WEBPACK_IMPORTED_MODULE_0__.mainTitle.textContent = this.projLocalStorage.getByID(this.projID).title;
        const tasks = this.taskLocalStorage.getAll().filter(task => {
            return task.project == this.projID;
        });
        for (const task of tasks) {
            this.taskRenderScreen.renderDataToScreen(task);
        }
    }
    exit() {
        this.taskRenderScreen.removeAll();
    }
}


/***/ }),

/***/ "./src/featurefirst/features/Projects/states/ProjectsFormState.ts":
/*!************************************************************************!*\
  !*** ./src/featurefirst/features/Projects/states/ProjectsFormState.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsFormState: () => (/* binding */ ProjectsFormState)
/* harmony export */ });
class ProjectsFormState {
    form;
    projectSubmitCommand;
    eventsRegistry;
    constructor(form, 
    // private formInputVals: ICommand, I'm going to try setting the vals in the event listeners when the dialog is called up
    //I also just realised that for projects the input values don't matter as we can't edit them so as long as they are reset when we
    //submit and when we close the dialog
    projectSubmitCommand, eventsRegistry) {
        this.form = form;
        this.projectSubmitCommand = projectSubmitCommand;
        this.eventsRegistry = eventsRegistry;
    }
    load() {
        this.form.style.display = "flex";
        this.eventsRegistry.set(this.form, (e) => {
            e.preventDefault();
            this.projectSubmitCommand.execute(e);
        });
    }
    exit() {
        this.form.style.display = "none";
        this.form.reset();
        this.eventsRegistry.removeAll();
    }
}


/***/ }),

/***/ "./src/featurefirst/features/Projects/util/AllSymbolIDs.ts":
/*!*****************************************************************!*\
  !*** ./src/featurefirst/features/Projects/util/AllSymbolIDs.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllSymbolID: () => (/* binding */ AllSymbolID)
/* harmony export */ });
class AllSymbolID {
    constructor() { }
    generate(container) {
        const symbols = Array.from(container.querySelectorAll("symbol"));
        return symbols.map(sym => sym.id).filter(id => id.length > 0);
    }
}


/***/ }),

/***/ "./src/featurefirst/features/Tasks/components/ProjectOption.ts":
/*!*********************************************************************!*\
  !*** ./src/featurefirst/features/Tasks/components/ProjectOption.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectOption: () => (/* binding */ ProjectOption)
/* harmony export */ });
class ProjectOption {
    option;
    constructor(id) {
        this.option = document.createElement("option");
        this.option.value = id.toString();
    }
    remove() {
        this.option.remove();
    }
    render(container) {
        container.appendChild(this.option);
    }
    setValue(value) {
        this.option.textContent = value;
    }
    getHTML() {
        return this.option;
    }
}


/***/ }),

/***/ "./src/featurefirst/features/Tasks/components/SetDates.ts":
/*!****************************************************************!*\
  !*** ./src/featurefirst/features/Tasks/components/SetDates.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fourWeeksFromToday: () => (/* binding */ fourWeeksFromToday),
/* harmony export */   nextWeek: () => (/* binding */ nextWeek)
/* harmony export */ });
const fourWeeksFromToday = () => {
    const today = new Date();
    const fourWeeksAhead = new Date(today);
    fourWeeksAhead.setDate(today.getDate() + 28);
    return fourWeeksAhead;
};
const nextWeek = () => {
    const today = new Date();
    const nextWeekAhead = new Date(today);
    nextWeekAhead.setDate(today.getDate() + 7);
    return nextWeekAhead;
};


/***/ }),

/***/ "./src/featurefirst/features/Tasks/components/StorageTasks.ts":
/*!********************************************************************!*\
  !*** ./src/featurefirst/features/Tasks/components/StorageTasks.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeleteTask: () => (/* binding */ DeleteTask),
/* harmony export */   EditTask: () => (/* binding */ EditTask),
/* harmony export */   InputCompletedTask: () => (/* binding */ InputCompletedTask),
/* harmony export */   TaskContainer: () => (/* binding */ TaskContainer)
/* harmony export */ });
class InputCompletedTask {
    eventRegistry;
    inputCompleted;
    constructor(eventRegistry) {
        this.eventRegistry = eventRegistry;
        this.inputCompleted = document.createElement("input");
        this.inputCompleted.type = "checkbox";
    }
    setValue(value) {
        this.inputCompleted.checked = value;
    }
    getHTML() {
        return this.inputCompleted;
    }
    remove() {
        this.inputCompleted.remove();
    }
    render(container) {
        container.appendChild(this.inputCompleted);
    }
    addListener() {
        this.eventRegistry.set(this.inputCompleted, () => { });
    }
    removeListener() {
        this.eventRegistry.removeByID(this.inputCompleted);
    }
}
class EditTask {
    eventRegistry;
    taskEntryEdit;
    editSVG;
    editPath;
    constructor(eventRegistry) {
        this.eventRegistry = eventRegistry;
        const SVG_NS = "http://www.w3.org/2000/svg";
        this.taskEntryEdit = document.createElement("div");
        this.taskEntryEdit.classList.add("task-edit-svg-container", "edit-button");
        this.editSVG = document.createElementNS(SVG_NS, "svg");
        this.editSVG.setAttribute("viewBox", "0 0 122.88 122.88");
        this.editPath = document.createElementNS(SVG_NS, "path");
        this.editPath.setAttribute("d", "M14.1,0h94.67c7.76,0,14.1,6.35,14.1,14.1v94.67c0,7.75-6.35,14.1-14.1,14.1H14.1c-7.75,0-14.1-6.34-14.1-14.1 V14.1C0,6.34,6.34,0,14.1,0L14.1,0z M81.35,28.38L94.1,41.14c1.68,1.68,1.68,4.44,0,6.11l-7.06,7.06L68.17,35.44l7.06-7.06 C76.91,26.7,79.66,26.7,81.35,28.38L81.35,28.38z M52.34,88.98c-5.1,1.58-10.21,3.15-15.32,4.74c-12.01,3.71-11.95,6.18-8.68-5.37 l5.16-18.2l0,0l-0.02-0.02L64.6,39.01l18.87,18.87l-31.1,31.11L52.34,88.98L52.34,88.98z M36.73,73.36l12.39,12.39 c-3.35,1.03-6.71,2.06-10.07,3.11c-7.88,2.42-7.84,4.05-5.7-3.54L36.73,73.36L36.73,73.36z");
    }
    setValue(value) {
    }
    getHTML() {
        return this.taskEntryEdit;
    }
    remove() {
        this.taskEntryEdit.remove();
    }
    render(container) {
        this.editSVG.appendChild(this.editPath);
        this.taskEntryEdit.appendChild(this.editSVG);
        container.appendChild(this.taskEntryEdit);
    }
    addListener() {
        this.eventRegistry.set(this.taskEntryEdit, () => { });
    }
    removeListener() {
        this.eventRegistry.removeByID(this.taskEntryEdit);
    }
}
class DeleteTask {
    eventRegistry;
    taskEntryDel;
    delSVG;
    delPath;
    constructor(eventRegistry) {
        this.eventRegistry = eventRegistry;
        const SVG_NS = "http://www.w3.org/2000/svg";
        this.taskEntryDel = document.createElement("div");
        this.taskEntryDel.classList.add("task-del-svg-container");
        this.delSVG = document.createElementNS(SVG_NS, "svg");
        this.delSVG.setAttribute("viewBox", "0 0 122.88 122.88");
        this.delPath = document.createElementNS(SVG_NS, "path");
        this.delPath.setAttribute("d", "M2.347,9.633h38.297V3.76c0-2.068,1.689-3.76,3.76-3.76h21.144 c2.07,0,3.76,1.691,3.76,3.76v5.874h37.83c1.293,0,2.347,1.057,2.347,2.349v11.514H0V11.982C0,10.69,1.055,9.633,2.347,9.633 L2.347,9.633z M8.69,29.605h92.921c1.937,0,3.696,1.599,3.521,3.524l-7.864,86.229c-0.174,1.926-1.59,3.521-3.523,3.521h-77.3 c-1.934,0-3.352-1.592-3.524-3.521L5.166,33.129C4.994,31.197,6.751,29.605,8.69,29.605L8.69,29.605z M69.077,42.998h9.866v65.314 h-9.866V42.998L69.077,42.998z M30.072,42.998h9.867v65.314h-9.867V42.998L30.072,42.998z M49.572,42.998h9.869v65.314h-9.869 V42.998L49.572,42.998z");
    }
    setValue(value) {
    }
    getHTML() {
        return this.taskEntryDel;
    }
    remove() {
        this.taskEntryDel.remove();
    }
    render(container) {
        this.delSVG.appendChild(this.delPath);
        this.taskEntryDel.appendChild(this.delSVG);
        container.appendChild(this.taskEntryDel);
    }
    addListener() {
        this.eventRegistry.set(this.taskEntryDel, () => { });
    }
    removeListener() {
        this.eventRegistry.removeByID(this.taskEntryDel);
    }
}
class TaskContainer {
    inputComplete;
    editTask;
    delTask;
    container;
    // private inputComplete: IComponentEventRemovable;
    // private editTask: IComponentEventRemovable;
    // private delTask: IComponentEventRemovable;
    label;
    title;
    description;
    date;
    constructor(inputComplete, editTask, delTask) {
        this.inputComplete = inputComplete;
        this.editTask = editTask;
        this.delTask = delTask;
        this.container = document.createElement("div");
        this.container.classList.add("task-entry-container", "mod-container");
        // this.editTask = new EditTask();
        // this.delTask = new DeleteTask();
        this.label = document.createElement("label");
        // this.inputComplete = new InputCompletedTask();
        this.title = document.createElement("p");
        this.description = document.createElement("p");
        this.description.classList.add("task-entry-description");
        this.date = document.createElement("p");
        this.date.classList.add("due-date");
    }
    setValue(value) {
        this.container.setAttribute("data-importance", value.priority);
        this.container.setAttribute("data-id", value.id.toString());
        if (value.completed) {
            this.title.classList.remove("incomplete");
            this.title.classList.add("complete");
        }
        else {
            this.title.classList.remove("complete");
            this.title.classList.add("incomplete");
        }
        this.title.classList.add("task-entry-title");
        this.title.textContent = value.title;
        this.description.textContent = value.body;
        this.date.textContent = value.date.toDateString();
    }
    remove() {
        this.container.remove();
    }
    render(outerContainer) {
        this.container.appendChild(this.label);
        this.inputComplete.render(this.label);
        this.container.appendChild(this.title);
        this.container.appendChild(this.description);
        this.container.appendChild(this.date);
        this.editTask.render(this.container);
        this.delTask.render(this.container);
        outerContainer.appendChild(this.container);
    }
    getHTML() {
        return this.container;
    }
}


/***/ }),

/***/ "./src/featurefirst/features/Tasks/components/TaskDateFilters.ts":
/*!***********************************************************************!*\
  !*** ./src/featurefirst/features/Tasks/components/TaskDateFilters.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalendarFromComponent: () => (/* binding */ CalendarFromComponent),
/* harmony export */   CalendarToComponent: () => (/* binding */ CalendarToComponent),
/* harmony export */   dateSpecifierContainer: () => (/* binding */ dateSpecifierContainer),
/* harmony export */   tasksCalendarBtn: () => (/* binding */ tasksCalendarBtn),
/* harmony export */   tasksHomeBtn: () => (/* binding */ tasksHomeBtn),
/* harmony export */   tasksUpcomingBtn: () => (/* binding */ tasksUpcomingBtn)
/* harmony export */ });
const tasksHomeBtn = document.getElementById("home-option");
const tasksUpcomingBtn = document.getElementById("upcoming-option");
const tasksCalendarBtn = document.getElementById("calendar-option");
//All IComponents should have a set method in case you need to set a value it shouldn't really be passed through the constructor
class CalendarFromComponent {
    dateToInputStr;
    fromContainer;
    fromLabel;
    fromInput;
    constructor(dateToInputStr) {
        this.dateToInputStr = dateToInputStr;
        this.fromContainer = document.createElement("div");
        this.fromContainer.id = "from-date-container";
        this.fromContainer.classList.add("date-specifier-container");
        this.fromLabel = document.createElement("label");
        this.fromLabel.htmlFor = "from-date-input";
        this.fromLabel.textContent = "From:";
        this.fromInput = document.createElement("input");
        this.fromInput.type = "date";
        this.fromInput.id = "from-date-input";
        this.fromInput.name = "from-date-input";
    }
    setValue(value) {
        this.fromInput.value = this.dateToInputStr.transform(value);
    }
    remove() {
        this.fromInput.remove();
        this.fromLabel.remove();
        this.fromContainer.remove();
    }
    render(container) {
        this.fromContainer.appendChild(this.fromLabel);
        this.fromContainer.appendChild(this.fromInput);
        container.appendChild(this.fromContainer);
    }
    getHTML() {
        return this.fromInput;
    }
}
class CalendarToComponent {
    dateToInputStr;
    toContainer;
    toLabel;
    toInput;
    constructor(dateToInputStr) {
        this.dateToInputStr = dateToInputStr;
        this.toContainer = document.createElement("div");
        this.toContainer.id = "to-date-container";
        this.toContainer.classList.add("date-specifier-container");
        this.toLabel = document.createElement("label");
        this.toLabel.htmlFor = "to-date-input";
        this.toLabel.textContent = "To:";
        this.toInput = document.createElement("input");
        this.toInput.type = "date";
        this.toInput.id = "to-date-input";
        this.toInput.name = "to-date-input";
    }
    setValue(value) {
        this.toInput.value = this.dateToInputStr.transform(value);
    }
    remove() {
        this.toLabel.remove();
        this.toInput.remove();
        this.toContainer.remove();
    }
    render(container) {
        this.toContainer.appendChild(this.toLabel);
        this.toContainer.appendChild(this.toInput);
        container.appendChild(this.toContainer);
    }
    getHTML() {
        return this.toInput;
    }
}
const dateSpecifierContainer = document.getElementById("date-range-specifier");


/***/ }),

/***/ "./src/featurefirst/features/Tasks/components/TasksFormComponents.ts":
/*!***************************************************************************!*\
  !*** ./src/featurefirst/features/Tasks/components/TasksFormComponents.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskFormBtnComponent: () => (/* binding */ TaskFormBtnComponent),
/* harmony export */   TaskFormComponent: () => (/* binding */ TaskFormComponent),
/* harmony export */   tasksForm: () => (/* binding */ tasksForm),
/* harmony export */   tasksFormBtn: () => (/* binding */ tasksFormBtn)
/* harmony export */ });
const tasksForm = document.getElementById("form-task-state");
const tasksFormBtn = document.getElementById("dialog-task-theme");
class TaskFormComponent {
    formElement;
    constructor() {
        this.formElement = document.getElementById("form-task-state");
    }
    remove() {
        this.formElement.style.display = "none";
    }
    render(container) {
        this.formElement.style.display = "flex";
    }
    setValue(value) {
    }
    getHTML() {
        return this.formElement;
    }
}
class TaskFormBtnComponent {
    taskFormBtn;
    constructor() {
        this.taskFormBtn = document.createElement("p");
        this.taskFormBtn.id = "dialog-task-theme";
        this.taskFormBtn.classList.add("dialog-theme-selection");
    }
    remove() {
        this.taskFormBtn.remove();
    }
    render(container) {
        container.appendChild(this.taskFormBtn);
    }
    setValue(value) {
        this.taskFormBtn.textContent = value;
    }
    getHTML() {
        return this.taskFormBtn;
    }
}


/***/ }),

/***/ "./src/featurefirst/features/Tasks/models/TaskModels.ts":
/*!**************************************************************!*\
  !*** ./src/featurefirst/features/Tasks/models/TaskModels.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PRIORITY_VALUES: () => (/* binding */ PRIORITY_VALUES),
/* harmony export */   TaskSchema: () => (/* binding */ TaskSchema)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ "./node_modules/zod/lib/index.mjs");

const PRIORITY_VALUES = ["low", "medium", "high"];
const TaskSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    id: zod__WEBPACK_IMPORTED_MODULE_0__.z.number().positive(),
    title: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1),
    body: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1),
    date: zod__WEBPACK_IMPORTED_MODULE_0__.z.date(),
    priority: zod__WEBPACK_IMPORTED_MODULE_0__.z.enum(PRIORITY_VALUES),
    project: zod__WEBPACK_IMPORTED_MODULE_0__.z.number().nonnegative(),
    completed: zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean()
});


/***/ }),

/***/ "./src/featurefirst/features/Tasks/services/CreateDateRangeScreen.ts":
/*!***************************************************************************!*\
  !*** ./src/featurefirst/features/Tasks/services/CreateDateRangeScreen.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateRangeSelectorScreen: () => (/* binding */ DateRangeSelectorScreen)
/* harmony export */ });
/* harmony import */ var _components_TaskDateFilters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/TaskDateFilters */ "./src/featurefirst/features/Tasks/components/TaskDateFilters.ts");
/* harmony import */ var _util_DateChangeFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/DateChangeFilter */ "./src/featurefirst/features/Tasks/util/DateChangeFilter.ts");


class DateRangeSelectorScreen {
    screenRegistry;
    changeEventRegistry;
    dateToStr;
    renderTaskScreen;
    taskLocalStorage;
    dateCheck;
    constructor(screenRegistry, changeEventRegistry, dateToStr, renderTaskScreen, taskLocalStorage, dateCheck) {
        this.screenRegistry = screenRegistry;
        this.changeEventRegistry = changeEventRegistry;
        this.dateToStr = dateToStr;
        this.renderTaskScreen = renderTaskScreen;
        this.taskLocalStorage = taskLocalStorage;
        this.dateCheck = dateCheck;
    }
    renderDataToScreen(data) {
        const fromDateInput = new _components_TaskDateFilters__WEBPACK_IMPORTED_MODULE_0__.CalendarFromComponent(this.dateToStr);
        const toDateInput = new _components_TaskDateFilters__WEBPACK_IMPORTED_MODULE_0__.CalendarToComponent(this.dateToStr);
        fromDateInput.setValue(data.fromDate);
        toDateInput.setValue(data.toDate);
        //Should rendering be done in the registry or are there ways of combining registries with stuff like this in a facade pattern???
        const changeDateCommand = new _util_DateChangeFilter__WEBPACK_IMPORTED_MODULE_1__.DateChangeFilterCommand(fromDateInput, toDateInput, this.renderTaskScreen, this.taskLocalStorage, this.dateCheck);
        changeDateCommand.execute();
        this.changeEventRegistry.set(fromDateInput.getHTML(), (e) => {
            this.renderTaskScreen.removeAll();
            changeDateCommand.execute();
        });
        this.changeEventRegistry.set(toDateInput.getHTML(), (e) => {
            this.renderTaskScreen.removeAll();
            changeDateCommand.execute();
        });
        this.screenRegistry.set(fromDateInput.getHTML(), fromDateInput);
        this.screenRegistry.set(toDateInput.getHTML(), toDateInput);
        fromDateInput.render(_components_TaskDateFilters__WEBPACK_IMPORTED_MODULE_0__.dateSpecifierContainer);
        toDateInput.render(_components_TaskDateFilters__WEBPACK_IMPORTED_MODULE_0__.dateSpecifierContainer); // set the registry straight now!!!!
    }
    removeAll() {
        this.renderTaskScreen.removeAll();
        this.screenRegistry.removeAll();
        this.changeEventRegistry.removeAll();
    }
}


/***/ }),

/***/ "./src/featurefirst/features/Tasks/services/CreateTaskForm.ts":
/*!********************************************************************!*\
  !*** ./src/featurefirst/features/Tasks/services/CreateTaskForm.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskForm: () => (/* binding */ TaskForm)
/* harmony export */ });
/* harmony import */ var _components_ProjectOption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ProjectOption */ "./src/featurefirst/features/Tasks/components/ProjectOption.ts");
/* harmony import */ var _models_TaskModels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/TaskModels */ "./src/featurefirst/features/Tasks/models/TaskModels.ts");


class TaskForm {
    screenElementRegistry;
    screenSubmitEventsRegistry;
    form;
    taskLocalStorage;
    projLocalStorage;
    dialogToggle;
    stateManager;
    dateToString;
    idGen;
    title;
    bodyText;
    date;
    priority;
    project;
    constructor(screenElementRegistry, screenSubmitEventsRegistry, form, taskLocalStorage, projLocalStorage, dialogToggle, stateManager, dateToString, idGen) {
        this.screenElementRegistry = screenElementRegistry;
        this.screenSubmitEventsRegistry = screenSubmitEventsRegistry;
        this.form = form;
        this.taskLocalStorage = taskLocalStorage;
        this.projLocalStorage = projLocalStorage;
        this.dialogToggle = dialogToggle;
        this.stateManager = stateManager;
        this.dateToString = dateToString;
        this.idGen = idGen;
        this.title = this.form.querySelector("[name='title']");
        this.bodyText = this.form.querySelector("[name='bodyText']");
        this.date = this.form.querySelector("[name='dueDate']");
        this.priority = this.form.querySelector("[name='priority']");
        this.project = this.form.querySelector("[name='project']");
    }
    renderDataToScreen(data) {
        this.form.style.display = "flex";
        this.title.value = data?.title ?? "";
        this.bodyText.value = data?.body ?? "";
        this.priority.value = data?.priority ?? "low";
        this.date.value = this.dateToString.transform(data?.date ?? new Date()); // Need a class to transfer it to a string
        for (const proj of this.projLocalStorage.getAll()) {
            const projOption = new _components_ProjectOption__WEBPACK_IMPORTED_MODULE_0__.ProjectOption(proj.id);
            this.screenElementRegistry.set(projOption.getHTML(), projOption);
            projOption.setValue(proj.title);
            projOption.render(this.project);
        }
        this.project.value = data?.project?.toString() ?? "0"; // Need a class to help get a name from an id number
        this.screenSubmitEventsRegistry.set(this.form, (e) => {
            e.preventDefault();
            const obj = {};
            obj["id"] = data?.id ?? this.idGen.generate();
            obj["title"] = this.title.value;
            obj["body"] = this.bodyText.value;
            obj["date"] = new Date(this.date.value);
            obj["priority"] = this.priority.value;
            obj["project"] = Number(this.project.value); //If this guy is --default-- then you should set it as default but it won't pass TaskSchema you should set it to a default negative number instead
            obj["completed"] = data?.completed ?? false;
            if (_models_TaskModels__WEBPACK_IMPORTED_MODULE_1__.TaskSchema.safeParse(obj).success) {
                this.taskLocalStorage.set(obj["id"], obj);
                //GOING TO NEED SOME SORT OF CURRENT SCREEN .LOAD(INSTEAD OF TAKING LOCALSTORAGE.GETALL IT ONLY TAKES THE ONE ITASK)
                // this.removeAll();
                this.dialogToggle.close();
                this.stateManager.exit();
                this.stateManager.load();
                //Dialog.close(),
                //Remove All page functionalities for dialog pages
                //Remove the buttons on the side, all of them possible???///As set by the class opening them up???
            }
            //const stringToTask
            //Turn values into correct data types
            //add to local storage the ITask
            //There should be a way to pass through to the current screen an ITask and then filter that alone to add it to the page???
            //YOU COULD HAVE SAID WHAT DOES THIS CLASS NEED TO DO ON A BASE LEVEL, private loadValues: ILoadTaskValues WHICH COULD HAVE BEEN GIVEN EITHER AN ADD OR EDIT
        });
    }
    removeAll() {
        this.form.style.display = "none";
        this.form.reset();
        // this.screenElementRegistry.removeAll()
        this.screenElementRegistry.removeAll();
        this.screenSubmitEventsRegistry.removeAll();
    }
}


/***/ }),

/***/ "./src/featurefirst/features/Tasks/services/CreateTaskHTML.ts":
/*!********************************************************************!*\
  !*** ./src/featurefirst/features/Tasks/services/CreateTaskHTML.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RenderTasks: () => (/* binding */ RenderTasks)
/* harmony export */ });
/* harmony import */ var _components_MainContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/MainContainer */ "./src/featurefirst/components/MainContainer.ts");
/* harmony import */ var _components_StorageTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/StorageTasks */ "./src/featurefirst/features/Tasks/components/StorageTasks.ts");


class RenderTasks {
    taskLocalStorage;
    inputChangeEvents;
    screenEvents;
    screenRegistry;
    editTaskCommand;
    constructor(taskLocalStorage, 
    // private stateManager: IStateManager,
    inputChangeEvents, screenEvents, screenRegistry, editTaskCommand) {
        this.taskLocalStorage = taskLocalStorage;
        this.inputChangeEvents = inputChangeEvents;
        this.screenEvents = screenEvents;
        this.screenRegistry = screenRegistry;
        this.editTaskCommand = editTaskCommand;
    }
    renderDataToScreen(data) {
        const inputCheckBox = new _components_StorageTasks__WEBPACK_IMPORTED_MODULE_1__.InputCompletedTask(this.screenEvents);
        inputCheckBox.setValue(data?.completed ?? false);
        // inputCheckBox.addListener();
        const editTask = new _components_StorageTasks__WEBPACK_IMPORTED_MODULE_1__.EditTask(this.screenEvents);
        // editTask.addListener();
        const delTask = new _components_StorageTasks__WEBPACK_IMPORTED_MODULE_1__.DeleteTask(this.screenEvents);
        const taskContainer = new _components_StorageTasks__WEBPACK_IMPORTED_MODULE_1__.TaskContainer(inputCheckBox, editTask, delTask);
        taskContainer.setValue(data);
        this.screenRegistry.set(taskContainer.getHTML(), taskContainer);
        this.inputChangeEvents.set(inputCheckBox.getHTML(), (e) => {
            e.stopPropagation();
            const task = this.taskLocalStorage.getByID(data.id);
            task.completed = !task.completed;
            taskContainer.setValue(task);
            this.taskLocalStorage.set(data.id, task);
        });
        this.screenEvents.set(editTask.getHTML(), (e) => {
            e.stopPropagation();
            this.editTaskCommand.execute(data.id);
        });
        this.screenEvents.set(delTask.getHTML(), (e) => {
            e.stopPropagation();
            this.taskLocalStorage.removeByID(data.id);
            // taskContainer.remove();
            this.inputChangeEvents.removeByID(inputCheckBox.getHTML());
            this.screenEvents.removeByID(editTask.getHTML());
            this.screenEvents.removeByID(delTask.getHTML());
            this.screenRegistry.removeByID(taskContainer.getHTML());
        });
        taskContainer.render(_components_MainContainer__WEBPACK_IMPORTED_MODULE_0__.homeContentContainer);
    }
    removeAll() {
        this.inputChangeEvents.removeAll();
        this.screenEvents.removeAll();
        this.screenRegistry.removeAll();
    }
}


/***/ }),

/***/ "./src/featurefirst/features/Tasks/services/EditTaskCommand.ts":
/*!*********************************************************************!*\
  !*** ./src/featurefirst/features/Tasks/services/EditTaskCommand.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditTaskCommand: () => (/* binding */ EditTaskCommand)
/* harmony export */ });
/* harmony import */ var _components_DialogComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/DialogComponent */ "./src/featurefirst/components/DialogComponent.ts");
/* harmony import */ var _components_TasksFormComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TasksFormComponents */ "./src/featurefirst/features/Tasks/components/TasksFormComponents.ts");


class EditTaskCommand {
    dialogToggle;
    taskLocalStorage;
    taskFormScreen;
    taskSidebarPageOption;
    pageChangeMemento;
    constructor(dialogToggle, taskLocalStorage, taskFormScreen, taskSidebarPageOption, pageChangeMemento) {
        this.dialogToggle = dialogToggle;
        this.taskLocalStorage = taskLocalStorage;
        this.taskFormScreen = taskFormScreen;
        this.taskSidebarPageOption = taskSidebarPageOption;
        this.pageChangeMemento = pageChangeMemento;
    }
    execute(criteria) {
        const task = this.taskLocalStorage.getByID(criteria);
        const taskSidebarOption = new _components_TasksFormComponents__WEBPACK_IMPORTED_MODULE_1__.TaskFormBtnComponent();
        this.taskSidebarPageOption.set(taskSidebarOption.getHTML(), taskSidebarOption);
        taskSidebarOption.setValue("Task");
        this.pageChangeMemento.changeState(taskSidebarOption.getHTML()); //GET THE SIDEBAR OPTION UP AND ACTIVE IN BLUE
        taskSidebarOption.render(_components_DialogComponent__WEBPACK_IMPORTED_MODULE_0__.dialogSidePageOptionsContainer);
        this.taskFormScreen.renderDataToScreen(task);
        this.dialogToggle.open();
    }
}


/***/ }),

/***/ "./src/featurefirst/features/Tasks/states/CalendarState.ts":
/*!*****************************************************************!*\
  !*** ./src/featurefirst/features/Tasks/states/CalendarState.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalendarState: () => (/* binding */ CalendarState)
/* harmony export */ });
/* harmony import */ var _components_MainTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/MainTitle */ "./src/featurefirst/components/MainTitle.ts");
/* harmony import */ var _components_SetDates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SetDates */ "./src/featurefirst/features/Tasks/components/SetDates.ts");
/* harmony import */ var _components_TaskDateFilters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TaskDateFilters */ "./src/featurefirst/features/Tasks/components/TaskDateFilters.ts");



class CalendarState {
    dateScreen;
    // private dateScreenRegistry!: IScreenComponentRegistry;
    // private dateEventRegistry!: IChangeEventRegistry;
    // private screenRegistry!: IScreenComponentRegistry;
    // private eventRegistry!: IClickEventRegistry;
    constructor(
    // private taskScreen: ITaskScreen,
    dateScreen) {
        this.dateScreen = dateScreen;
    }
    load() {
        // this.dateScreenRegistry = new ScreenRegistry(new Map<HTMLElement, IComponentRemovable<string>>());
        // this.dateEventRegistry = new InputChangeEventRegistry(new Map<HTMLInputElement, (e: Event) => void>());
        // const fromInput: IComponentEventRemovable<string, [IScreenComponentRegistry, IClickEventRegistry, HTMLInputElement]> = new CalendarFromComponent(this.dateEventRegistry);
        // const toInput: IComponentEventRemovable<string, [IScreenComponentRegistry, IClickEventRegistry, HTMLInputElement]> = new CalendarToComponent(this.dateEventRegistry);
        // this.dateScreenRegistry.set(fromInput.getHTML(), fromInput);
        // this.dateScreenRegistry.set(toInput.getHTML(), toInput);
        // this.screenRegistry = new ScreenRegistry(new Map<HTMLElement, IComponentRemovable<any>>());
        // this.eventRegistry = new ClickEventRegistry(new Map<HTMLElement, () => void>());
        // const container: HTMLElement = document.getElementById("home-content-container")!;
        // fromInput.render(container);
        // toInput.render(container);
        // fromInput.addListener(this.screenRegistry, this.eventRegistry, toInput.getHTML() as HTMLInputElement);
        // toInput.addListener(this.screenRegistry, this.eventRegistry, fromInput.getHTML() as HTMLInputElement);
        // const dateToString: IDateToString = new DateToString();
        // const today: Date = new Date();
        // const fourWeeksAhead: Date = new Date(today);
        // fourWeeksAhead.setDate(today.getDate() + 28);
        // fromInput.setValue(dateToString.transform(today));
        // toInput.setValue(dateToString.transform(fourWeeksAhead));
        // const localStorage: LocalStorage<ITask> = new TaskLocalStorage();
        // const tasks: ITask[] = localStorage.getAll().filter((task) => {
        //     const dateCheck: IDateRangeCheck = new DateRangeCheck(today, fourWeeksAhead);
        //     return dateCheck.isBetween(task.date);
        // });
        // for (const task of tasks) {
        //     const taskRender: ICommand = new RenderTasks(task, this.eventRegistry, this.screenRegistry);
        //     taskRender.execute(); //This can be done if TaskRender wasn't an IOpenClose as I believe ITasks needs to go through load instead of through the constructor anyway???
        // }
        // const today: Date = new Date();
        // const fourWeeksAhead: Date = new Date(today);
        // fourWeeksAhead.setDate(today.getDate() + 28);
        // const defaultDates: IDateRange = {
        //     fromDate: today,
        //     toDate: fourWeeksAhead
        // }
        _components_MainTitle__WEBPACK_IMPORTED_MODULE_0__.mainTitle.textContent = "Calendar";
        const dateRange = {
            fromDate: new Date(),
            toDate: (0,_components_SetDates__WEBPACK_IMPORTED_MODULE_1__.fourWeeksFromToday)()
        };
        _components_TaskDateFilters__WEBPACK_IMPORTED_MODULE_2__.dateSpecifierContainer.style.display = "block";
        this.dateScreen.renderDataToScreen(dateRange);
        // const tasks: ITask[] = this.localStorage.getAll().filter((task) => {
        //     return this.dateCheck.isBetween(task.date, dateRange);
        // });
        // for (const task of tasks) {
        //     this.taskScreen.renderDataToScreen(task);
        // }
    }
    exit() {
        // this.screenRegistry.removeAll();
        // this.eventRegistry.removeAll();
        // this.dateScreenRegistry.removeAll();
        // this.dateEventRegistry.removeAll();
        // this.taskScreen.removeAll();
        _components_TaskDateFilters__WEBPACK_IMPORTED_MODULE_2__.dateSpecifierContainer.style.display = "none";
        this.dateScreen.removeAll();
    }
}


/***/ }),

/***/ "./src/featurefirst/features/Tasks/states/HomeState.ts":
/*!*************************************************************!*\
  !*** ./src/featurefirst/features/Tasks/states/HomeState.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeState: () => (/* binding */ HomeState)
/* harmony export */ });
/* harmony import */ var _components_MainTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/MainTitle */ "./src/featurefirst/components/MainTitle.ts");

class HomeState {
    screen;
    localStorage;
    // private screenRegistry!: IScreenComponentRegistry;
    // private eventRegistry!: IClickEventRegistry;
    constructor(screen, localStorage) {
        this.screen = screen;
        this.localStorage = localStorage;
    }
    load() {
        _components_MainTitle__WEBPACK_IMPORTED_MODULE_0__.mainTitle.textContent = "Home";
        // const localStorage: LocalStorage<ITask> = new TaskLocalStorage();
        // const tasks: ITask[] = localStorage.getAll();
        // this.screenRegistry = new ScreenRegistry(new Map<HTMLElement, IComponentRemovable<any>>());
        // this.eventRegistry = new ClickEventRegistry(new Map<HTMLElement, () => void>());
        // for (const task of tasks) {
        //     const taskRender: ICommand = new RenderTasks(task, this.eventRegistry, this.screenRegistry);
        //     taskRender.execute(); //This can be done if TaskRender wasn't an IOpenClose as I believe ITasks needs to go through load instead of through the constructor anyway???
        // }
        for (const task of this.localStorage.getAll()) {
            this.screen.renderDataToScreen(task);
        }
    }
    exit() {
        // this.screenRegistry.removeAll();
        // this.eventRegistry.removeAll();
        this.screen.removeAll();
    }
}


/***/ }),

/***/ "./src/featurefirst/features/Tasks/states/TaskFormState.ts":
/*!*****************************************************************!*\
  !*** ./src/featurefirst/features/Tasks/states/TaskFormState.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskFormState: () => (/* binding */ TaskFormState)
/* harmony export */ });
class TaskFormState {
    taskFormScreen;
    constructor(taskFormScreen) {
        this.taskFormScreen = taskFormScreen;
    }
    load() {
        this.taskFormScreen.renderDataToScreen({});
    }
    exit() {
        this.taskFormScreen.removeAll();
    }
}


/***/ }),

/***/ "./src/featurefirst/features/Tasks/states/UpcomingState.ts":
/*!*****************************************************************!*\
  !*** ./src/featurefirst/features/Tasks/states/UpcomingState.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpcomingState: () => (/* binding */ UpcomingState)
/* harmony export */ });
/* harmony import */ var _components_MainTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/MainTitle */ "./src/featurefirst/components/MainTitle.ts");
/* harmony import */ var _components_SetDates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SetDates */ "./src/featurefirst/features/Tasks/components/SetDates.ts");


class UpcomingState {
    screen;
    localStorage;
    dateCheck;
    // private screenRegistry!: IScreenComponentRegistry;
    // private eventRegistry!: IClickEventRegistry;
    constructor(screen, localStorage, dateCheck) {
        this.screen = screen;
        this.localStorage = localStorage;
        this.dateCheck = dateCheck;
    }
    load() {
        // const localStorage: ILocalStorageRegistry<ITask> = new TaskLocalStorage();
        // const tasks: ITask[] = localStorage.getAll().filter((task) => {
        //     const today: Date = new Date();
        //     const nextWeek: Date = new Date(today);
        //     nextWeek.setDate(today.getDate() + 7);
        //     const dateCheck: IDateRangeCheck = new DateRangeCheck(today, nextWeek);
        //     return dateCheck.isBetween(task.date);
        // });
        // this.screenRegistry = new ScreenRegistry(new Map<HTMLElement, IComponentRemovable<any>>());
        // this.eventRegistry = new ClickEventRegistry(new Map<HTMLElement, () => void>());
        // for (const task of tasks) {
        //     const taskRender: ICommand = new RenderTasks(task, this.eventRegistry, this.screenRegistry);
        //     taskRender.execute(); //This can be done if TaskRender wasn't an IOpenClose as I believe ITasks needs to go through load instead of through the constructor anyway???
        // }
        _components_MainTitle__WEBPACK_IMPORTED_MODULE_0__.mainTitle.textContent = "Upcoming";
        const dateRange = {
            fromDate: new Date(),
            toDate: (0,_components_SetDates__WEBPACK_IMPORTED_MODULE_1__.nextWeek)()
        };
        const tasks = this.localStorage.getAll().filter((task) => {
            return this.dateCheck.isBetween(task.date, dateRange);
        });
        for (const task of tasks) {
            this.screen.renderDataToScreen(task);
        }
    }
    exit() {
        this.screen.removeAll();
        // this.screenRegistry.removeAll();
        // this.eventRegistry.removeAll();
    }
}


/***/ }),

/***/ "./src/featurefirst/features/Tasks/util/DateChangeFilter.ts":
/*!******************************************************************!*\
  !*** ./src/featurefirst/features/Tasks/util/DateChangeFilter.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateChangeFilterCommand: () => (/* binding */ DateChangeFilterCommand)
/* harmony export */ });
class DateChangeFilterCommand {
    fromDateInput;
    toDateInput;
    renderTasksScreen;
    tasksLocalStorage;
    dateCheck;
    constructor(fromDateInput, toDateInput, renderTasksScreen, tasksLocalStorage, dateCheck) {
        this.fromDateInput = fromDateInput;
        this.toDateInput = toDateInput;
        this.renderTasksScreen = renderTasksScreen;
        this.tasksLocalStorage = tasksLocalStorage;
        this.dateCheck = dateCheck;
    }
    execute() {
        const fromDateInputElem = this.fromDateInput.getHTML();
        const toDateInputElem = this.toDateInput.getHTML();
        const dateRange = {
            fromDate: new Date(fromDateInputElem.value),
            toDate: new Date(toDateInputElem.value)
        };
        const tasks = this.tasksLocalStorage.getAll().filter((task) => {
            return this.dateCheck.isBetween(task.date, dateRange);
        });
        for (const task of tasks) {
            this.renderTasksScreen.renderDataToScreen(task);
        }
    }
}


/***/ }),

/***/ "./src/featurefirst/features/Tasks/util/DateToText.ts":
/*!************************************************************!*\
  !*** ./src/featurefirst/features/Tasks/util/DateToText.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateToString: () => (/* binding */ DateToString)
/* harmony export */ });
class DateToString {
    constructor() { }
    transform(valueToBeTransformed) {
        const yyyy = valueToBeTransformed.getFullYear();
        const mm = String(valueToBeTransformed.getMonth() + 1).padStart(2, "0");
        const dd = String(valueToBeTransformed.getDate()).padStart(2, "0");
        return `${yyyy}-${mm}-${dd}`;
    }
}


/***/ }),

/***/ "./src/featurefirst/features/Tasks/util/DatesFilter.ts":
/*!*************************************************************!*\
  !*** ./src/featurefirst/features/Tasks/util/DatesFilter.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateRangeCheck: () => (/* binding */ DateRangeCheck)
/* harmony export */ });
class DateRangeCheck {
    constructor() { }
    isBetween(date, dateRange) {
        return date >= dateRange.fromDate &&
            date <= dateRange.toDate;
    }
}


/***/ }),

/***/ "./src/featurefirst/services/DialogShutDownCommands.ts":
/*!*************************************************************!*\
  !*** ./src/featurefirst/services/DialogShutDownCommands.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DialogShutdownCommand: () => (/* binding */ DialogShutdownCommand),
/* harmony export */   DialogShutdownEdit: () => (/* binding */ DialogShutdownEdit)
/* harmony export */ });
class DialogShutdownCommand {
    dialogPageStateManager;
    pageComponentRegistry;
    constructor(dialogPageStateManager, pageComponentRegistry) {
        this.dialogPageStateManager = dialogPageStateManager;
        this.pageComponentRegistry = pageComponentRegistry;
    }
    execute() {
        this.dialogPageStateManager.exit();
        this.pageComponentRegistry.removeAll();
    }
}
class DialogShutdownEdit {
    pageComponentRegistry;
    taskScreen;
    constructor(pageComponentRegistry) {
        this.pageComponentRegistry = pageComponentRegistry;
    }
    setTaskFormScreen(taskFormScreen) {
        this.taskScreen = taskFormScreen;
    }
    execute() {
        this.pageComponentRegistry.removeAll();
        this.taskScreen.removeAll();
    }
}


/***/ }),

/***/ "./src/featurefirst/services/DialogToggle.ts":
/*!***************************************************!*\
  !*** ./src/featurefirst/services/DialogToggle.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DialogToggle: () => (/* binding */ DialogToggle)
/* harmony export */ });
class DialogToggle {
    dialog;
    cancelBtn;
    additionalCloseLogic;
    constructor(dialog, cancelBtn, additionalCloseLogic) {
        this.dialog = dialog;
        this.cancelBtn = cancelBtn;
        this.additionalCloseLogic = additionalCloseLogic;
    }
    open() {
        this.dialog.showModal();
        this.dialog.addEventListener("cancel", (e) => {
            e.preventDefault();
            this.close();
        }, { once: true });
        this.cancelBtn.addEventListener("click", (e) => {
            this.close();
        }, { once: true });
    }
    close() {
        this.dialog.classList.add("closing");
        this.dialog.addEventListener("animationend", (e) => {
            this.additionalCloseLogic?.execute();
            this.dialog.close();
            this.dialog.classList.remove("closing");
        }, { once: true });
    }
}


/***/ }),

/***/ "./src/featurefirst/services/LocalStorage.ts":
/*!***************************************************!*\
  !*** ./src/featurefirst/services/LocalStorage.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalStorage: () => (/* binding */ LocalStorage),
/* harmony export */   NoteLocalStorage: () => (/* binding */ NoteLocalStorage),
/* harmony export */   ProjectLocalStorage: () => (/* binding */ ProjectLocalStorage),
/* harmony export */   TaskLocalStorage: () => (/* binding */ TaskLocalStorage)
/* harmony export */ });
/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! superjson */ "./node_modules/superjson/dist/index.js");

class LocalStorage {
    set(key, val) {
        const all = this.getAll();
        const idx = all.findIndex(x => x.id === key);
        if (idx >= 0) {
            all[idx] = val;
        }
        else {
            all.push(val);
        }
        localStorage.setItem(this.accessType, superjson__WEBPACK_IMPORTED_MODULE_0__["default"].stringify(all));
    }
    getByID(key) {
        return this.getAll().find(item => item.id === key);
    }
    getAll() {
        const raw = localStorage.getItem(this.accessType);
        if (!raw)
            return [];
        try {
            return superjson__WEBPACK_IMPORTED_MODULE_0__["default"].parse(raw);
        }
        catch {
            console.log('Corrupt data at', this.accessType);
            return [];
        }
    }
    removeByID(key) {
        const filtered = this.getAll().filter(x => x.id !== key);
        localStorage.setItem(this.accessType, superjson__WEBPACK_IMPORTED_MODULE_0__["default"].stringify(filtered));
    }
    removeAll() {
        localStorage.setItem(this.accessType, superjson__WEBPACK_IMPORTED_MODULE_0__["default"].stringify([]));
    }
}
class TaskLocalStorage extends LocalStorage {
    accessType = "tasks";
}
class ProjectLocalStorage extends LocalStorage {
    accessType = "projects";
}
class NoteLocalStorage extends LocalStorage {
    accessType = "notes";
}


/***/ }),

/***/ "./src/featurefirst/services/PageMediator.ts":
/*!***************************************************!*\
  !*** ./src/featurefirst/services/PageMediator.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageMediator: () => (/* binding */ PageMediator)
/* harmony export */ });
// export class PageMediator<T extends { id: number }> implements IPageMediator<T, "click"> {
//     constructor(
//         private stateManager: IStateManager<T>,
//         private eventRegistry: IEventRegistry<HTMLElement, "click">,
//         private eventBus: IEventBus<HTMLElement, "click">
//     ) {}
//     setLivePages(pages: Map<HTMLElement, (e: HTMLElementEventMap["click"]) => void>): void {
//         for (const [key, val] of pages) {
//             this.eventRegistry.set(key, val);
//             this.eventBus.addListener(key);
//         }
//     }
//     changePage(newPageKey: HTMLElement): void {
//         this.stateManager.exit();
//     }
//     pageReset(): void {
//         throw new Error("Method not implemented.");
//     }
// }
// export class PageMediator implements IPageMediator {
//     private pageObs: PageRegistry;
//     private eventObs: IClickEventRegistry;
//     private stateManager: IPageChangeMemento;
//     constructor(firstElem: HTMLElement, firstPage: IState) {
//         this.pageObs = new PageRegistry(new Map<HTMLElement, IState>());
//         this.eventObs = new ClickEventRegistry(new Map<HTMLElement, () => void>());
//         this.stateManager = new ChangePageMemento();
//         this.pageObs.set(firstElem, firstPage);
//         this.stateManager.changeState(firstElem);
//         firstPage.load(); //Should be in a factory pattern
//     }
//     setLivePages(pages: Map<HTMLElement, IState>): void {
//         for (const [key, val] of pages) {
//             this.pageObs.set(key, val);
//             this.eventObs.set(key, () => { this.changePage(key); });
//         }
//     }
//     changePage(newPageKey: HTMLElement): void {
//         const prevKey: HTMLElement = this.stateManager.getLatestState()!;
//         this.pageObs.getByID(prevKey).exit();
//         this.eventObs.set(this.stateManager.getLatestState()!, () => { this.changePage(prevKey); });
//         this.stateManager.changeState(newPageKey);
//         this.pageObs.getByID(newPageKey).load();
//         this.eventObs.removeByID(newPageKey);
//     }
//     pageReset(): void {
//         this.eventObs.removeAll();
//     }
// }
class PageMediator {
    pageClickEventRegistry;
    pageStateManager;
    pageChangeMemento;
    startPage;
    constructor(pageClickEventRegistry, pageStateManager, pageChangeMemento, startPage) {
        this.pageClickEventRegistry = pageClickEventRegistry;
        this.pageStateManager = pageStateManager;
        this.pageChangeMemento = pageChangeMemento;
        this.startPage = startPage;
        for (const [key, val] of this.startPage) {
            this.pageStateManager.set(val);
            this.pageChangeMemento.changeState(key);
            this.pageClickEventRegistry.set(key, (e) => { this.changePage(key, val); });
            val.load();
        }
    }
    setLivePages(pages) {
        for (const [key, val] of pages) {
            // const func: (e: MouseEvent) => void = (e) => {
            //     this.pageStateManager.exit();
            //     this.pageStateManager.set(val);
            //     this.pageStateManager.load();
            //     this.changePage(key);
            // }
            this.pageClickEventRegistry.set(key, (e) => {
                this.changePage(key, val);
            });
            key.addEventListener("click", (e) => {
                this.changePage(key, val);
            });
        }
    } //NEED TO CHANGE THIS CHANGE PAGE FUNCTIONALITY THROUGHOUT SO THAT IT IN ITSELF DOES THE STATEMANAGER STUFF
    changePage(newPageKey, val) {
        this.pageStateManager.exit();
        this.pageStateManager.set(val);
        this.pageStateManager.load();
        const funcRemove = this.pageClickEventRegistry.getByID(newPageKey);
        newPageKey.removeEventListener("click", funcRemove);
        const funcAdd = this.pageClickEventRegistry.getByID(this.pageChangeMemento.getLatestState());
        this.pageChangeMemento.getLatestState().addEventListener("click", funcAdd);
        this.pageChangeMemento.changeState(newPageKey);
    }
    pageReset() {
        this.pageClickEventRegistry.removeAll();
    }
}


/***/ }),

/***/ "./src/featurefirst/states/PageStateManager.ts":
/*!*****************************************************!*\
  !*** ./src/featurefirst/states/PageStateManager.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageStateManager: () => (/* binding */ PageStateManager),
/* harmony export */   PageStateManagerCriteria: () => (/* binding */ PageStateManagerCriteria)
/* harmony export */ });
class PageStateManager {
    state;
    constructor() { }
    set(newState) {
        this.state = newState;
    }
    getState() {
        return this.state;
    }
    load() {
        this.state.load();
    }
    exit() {
        this.state.exit();
    }
}
class PageStateManagerCriteria {
    state;
    constructor(state) {
        this.state = state;
    }
    set(newState) {
        this.state = newState;
    }
    load(data) {
        this.state.load(data);
    }
    exit() {
        this.state.exit();
    }
}
//WHEN YOU COME BACK, MAKE ALL TASK FORM SCREENS INTO ISTATES, each should accept no data in load()
//MAKE A SUBMIT COMMAND FOR EACH TASK, NOTE AND PROJECT that you can pass through to the ISTATE and attach the form to
//MAKE SCREENS THAT WHEN TASK IS EDITED CAN BE RUN WITH .LOAD(task: ITASK) that goes towards filling the task form
//MAKE SUBMIT COMMAND ATTACH TO THAT
//MAKE PAGE MEDIATOR THAT CONNECTS THE FUNCTIONALITY OF PAGES
//MAKE ALL PROJECT, NOTES AND HOME/TASK PAGE ELEMENTS CHANGE THE PAGE WHEN CLICKED
//MAKE A DELETION MECHANISM SEND US BACK TO THE HOME PAGE
//MAKE A WAY OF ATTACHING NEW ELEMENTS TO THE USERS LOCALSTORAGE IF THEY DON'T ALREADY HAVE A KEY NAMED PROJECT, TASK OR NOTES THERE 


/***/ }),

/***/ "./src/featurefirst/util/EventRegistry.ts":
/*!************************************************!*\
  !*** ./src/featurefirst/util/EventRegistry.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClickEventRegistry: () => (/* binding */ ClickEventRegistry),
/* harmony export */   EventBus: () => (/* binding */ EventBus),
/* harmony export */   FormSubmitEventRegistry: () => (/* binding */ FormSubmitEventRegistry),
/* harmony export */   InputChangeEventRegistry: () => (/* binding */ InputChangeEventRegistry),
/* harmony export */   PageEventRegistry: () => (/* binding */ PageEventRegistry)
/* harmony export */ });
class PageEventRegistry {
    map;
    constructor(map) {
        this.map = map;
    }
    set(key, val) {
        this.map.set(key, val);
    }
    getByID(key) {
        return this.map.get(key);
    }
    getAll() {
        return Array.from(this.map.values());
    }
    removeByID(key) {
        this.map.delete(key);
    }
    removeAll() {
        for (const key of this.map.keys()) {
            this.removeByID(key);
        }
    }
}
class ClickEventRegistry {
    map;
    constructor(map) {
        this.map = map;
    }
    getByID(key) {
        return this.map.get(key);
    }
    getAll() {
        return Array.from(this.map.values());
    }
    removeAll() {
        for (const key of this.map.keys()) {
            this.removeByID(key);
        }
    }
    set(key, val) {
        this.map.set(key, val);
        key.addEventListener("click", val);
    }
    removeByID(key) {
        const func = this.map.get(key);
        key.removeEventListener("click", func);
        this.map.delete(key);
    }
}
class FormSubmitEventRegistry {
    map;
    constructor(map) {
        this.map = map;
    }
    set(key, val) {
        this.map.set(key, val);
        key.addEventListener("submit", val);
    }
    getByID(key) {
        return this.map.get(key);
    }
    getAll() {
        return Array.from(this.map.values());
    }
    removeByID(key) {
        const func = this.map.get(key);
        key.removeEventListener("submit", func);
        this.map.delete(key);
    }
    removeAll() {
        for (const key of this.map.keys()) {
            this.removeByID(key);
        }
    }
}
class InputChangeEventRegistry {
    map;
    constructor(map) {
        this.map = map;
    }
    getByID(key) {
        return this.map.get(key);
    }
    getAll() {
        return Array.from(this.map.values());
    }
    removeAll() {
        for (const key of this.map.keys()) {
            this.removeByID(key);
        }
    }
    set(key, val) {
        this.map.set(key, val);
        key.addEventListener("change", val);
    }
    removeByID(key) {
        const func = this.map.get(key);
        key.removeEventListener("change", func);
        this.map.delete(key);
    }
}
class EventBus {
    map;
    constructor(map) {
        this.map = map;
    }
    set(key, val) {
        this.map.set(key, val);
    }
    getByID(key) {
        return this.map.get(key);
    }
    getAll() {
        return Array.from(this.map.values());
    }
    removeByID(key) {
        this.map.delete(key);
    }
    removeAll() {
        for (const key of this.map.keys()) {
            this.removeByID(key);
        }
    }
}


/***/ }),

/***/ "./src/featurefirst/util/IDGenerator.ts":
/*!**********************************************!*\
  !*** ./src/featurefirst/util/IDGenerator.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IDGenertor: () => (/* binding */ IDGenertor)
/* harmony export */ });
class IDGenertor {
    startNum;
    constructor(startNum) {
        this.startNum = startNum;
    }
    generate() {
        return this.startNum++;
    }
}


/***/ }),

/***/ "./src/featurefirst/util/IDRandomSelect.ts":
/*!*************************************************!*\
  !*** ./src/featurefirst/util/IDRandomSelect.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PickRandomID: () => (/* binding */ PickRandomID)
/* harmony export */ });
class PickRandomID {
    constructor() { }
    pickRandom(arr) {
        if (arr.length === 0)
            return undefined;
        const index = Math.floor(Math.random() * arr.length);
        return arr[index];
    }
}


/***/ }),

/***/ "./src/featurefirst/util/PageStateMemento.ts":
/*!***************************************************!*\
  !*** ./src/featurefirst/util/PageStateMemento.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangePageMemento: () => (/* binding */ ChangePageMemento)
/* harmony export */ });
class ChangePageMemento {
    currentPage;
    changeState(nextPage) {
        if (this.currentPage) {
            this.currentPage?.setAttribute("data-page", "unselected");
        }
        this.currentPage = nextPage;
        this.currentPage?.setAttribute("data-page", "selected");
    }
    getLatestState() {
        return this.currentPage;
    }
}


/***/ }),

/***/ "./src/featurefirst/util/ScreenRegistry.ts":
/*!*************************************************!*\
  !*** ./src/featurefirst/util/ScreenRegistry.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScreenRegistry: () => (/* binding */ ScreenRegistry)
/* harmony export */ });
class ScreenRegistry {
    map;
    constructor(map) {
        this.map = map;
    }
    set(key, val) {
        this.map.set(key, val);
    }
    getByID(key) {
        return this.map.get(key);
    }
    getAll() {
        return Array.from(this.map.values());
    }
    removeByID(key) {
        this.map.get(key)?.remove();
        this.map.delete(key);
    }
    removeAll() {
        for (const key of this.map.keys()) {
            this.removeByID(key);
        }
    }
}


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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pages_HTML_index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pages/HTML/index.html */ "./src/Pages/HTML/index.html");
/* harmony import */ var _Pages_CSS_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pages/CSS/style.css */ "./src/Pages/CSS/style.css");
/* harmony import */ var _Pages_CSS_Main_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pages/CSS/Main/main.css */ "./src/Pages/CSS/Main/main.css");
/* harmony import */ var _Pages_CSS_Main_aside_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pages/CSS/Main/aside.css */ "./src/Pages/CSS/Main/aside.css");
/* harmony import */ var _Pages_CSS_Main_outer_card_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Pages/CSS/Main/outer-card.css */ "./src/Pages/CSS/Main/outer-card.css");
/* harmony import */ var _Pages_CSS_DialogBox_dialog_box_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pages/CSS/DialogBox/dialog-box.css */ "./src/Pages/CSS/DialogBox/dialog-box.css");
/* harmony import */ var _Pages_CSS_DialogBox_dialog_task_form_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Pages/CSS/DialogBox/dialog-task-form.css */ "./src/Pages/CSS/DialogBox/dialog-task-form.css");
/* harmony import */ var _Pages_CSS_DialogBox_dialog_project_form_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Pages/CSS/DialogBox/dialog-project-form.css */ "./src/Pages/CSS/DialogBox/dialog-project-form.css");
/* harmony import */ var _Pages_CSS_DialogBox_dialog_note_form_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Pages/CSS/DialogBox/dialog-note-form.css */ "./src/Pages/CSS/DialogBox/dialog-note-form.css");
/* harmony import */ var _featurefirst_Main_ts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./featurefirst/Main.ts */ "./src/featurefirst/Main.ts");












})();

/******/ })()
;
//# sourceMappingURL=main.js.map