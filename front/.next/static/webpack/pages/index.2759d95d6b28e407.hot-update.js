"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Button.jsx":
/*!***********************************!*\
  !*** ./src/components/Button.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_nad_m_code_perso_maxairain_maxairain_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var C_Users_nad_m_code_perso_maxairain_maxairain_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _excluded = [\"variant\", \"size\", \"color\"];\n\nvar _jsxFileName = \"C:\\\\Users\\\\nad_m\\\\code\\\\perso\\\\maxairain\\\\maxairain\\\\src\\\\components\\\\Button.jsx\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,C_Users_nad_m_code_perso_maxairain_maxairain_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\nvar className = \"font-bold\";\nvar variants = {\n  primary: \"inline-flex items-center m-1 font-montserrat border border-transparent rounded-lg shadow-lg  font-large text-zinc-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500\",\n  secondary: \"inline-flex items-center m-1 rounded-lg font-montserrat font-large text-zinc-200 focus:outline-none focus:ring-2 hover:scale-110 focus:ring-offset-2 focus:ring-indigo-500\",\n  navBar: \"inline-flex items-center m-1 font-montserrat text-md md:text-lg rounded-xl text-zinc-100 md:text-neutral-800 focus:outline-none focus:ring-2 hover:scale-110 focus:ring-yellow-500 md:focus:ring-neutral-800\",\n  classicAnswer: \"inline-flex items-center font-montserrat bg-zinc-100 rounded-full shadow-lg w-64 sm:w-96 h-16 text-md md:text-lg\",\n  btnValidation: \"w-full hover:scale-110 flex items-center justify-center mt-5 border border-transparent rounded-lg shadow-lg font-medium text-zinc-200 bg-yellow-600 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-700\",\n  btnSubmit: \"w-full hover:scale-110 flex items-center justify-center mt-5 border border-transparent rounded-lg shadow-lg font-medium text-zinc-200 bg-yellow-600 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-700\",\n  btnDelete: \"focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900\"\n};\nvar sizes = {\n  sm: \"py-1 px-1.5\",\n  md: \"py-1.5 px-3\",\n  lg: \"py-3 px-6\",\n  xl: \"py-5 px-7\"\n};\nvar bgColor = {\n  normal: \"bg-zinc-100\",\n  bad: \"bg-red-500\",\n  good: \"bg-green-500\"\n};\n\nvar Button = function Button(props) {\n  var variant = props.variant,\n      size = props.size,\n      color = props.color,\n      otherProps = (0,C_Users_nad_m_code_perso_maxairain_maxairain_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(props, _excluded);\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", _objectSpread(_objectSpread({}, otherProps), {}, {\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, variants[variant], sizes[size], bgColor[color])\n  }), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Button;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);\n\nvar _c;\n\n$RefreshReg$(_c, \"Button\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CdXR0b24uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1DLFNBQVMsR0FBRyxXQUFsQjtBQUVBLElBQU1DLFFBQVEsR0FBRztFQUNmQyxPQUFPLEVBQ0wsaU5BRmE7RUFHZkMsU0FBUyxFQUNQLDRLQUphO0VBS2ZDLE1BQU0sRUFDSiw4TUFOYTtFQU9mQyxhQUFhLEVBQ1gsa0hBUmE7RUFTZkMsYUFBYSxFQUNYLG1QQVZhO0VBV2ZDLFNBQVMsRUFDUCxtUEFaYTtFQWFmQyxTQUFTLEVBQ1A7QUFkYSxDQUFqQjtBQWlCQSxJQUFNQyxLQUFLLEdBQUc7RUFDWkMsRUFBRSxFQUFFLGFBRFE7RUFFWkMsRUFBRSxFQUFFLGFBRlE7RUFHWkMsRUFBRSxFQUFFLFdBSFE7RUFJWkMsRUFBRSxFQUFFO0FBSlEsQ0FBZDtBQU9BLElBQU1DLE9BQU8sR0FBRztFQUNkQyxNQUFNLEVBQUUsYUFETTtFQUVkQyxHQUFHLEVBQUUsWUFGUztFQUdkQyxJQUFJLEVBQUU7QUFIUSxDQUFoQjs7QUFNQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVc7RUFDeEIsSUFBUUMsT0FBUixHQUFnREQsS0FBaEQsQ0FBUUMsT0FBUjtFQUFBLElBQWlCQyxJQUFqQixHQUFnREYsS0FBaEQsQ0FBaUJFLElBQWpCO0VBQUEsSUFBdUJDLEtBQXZCLEdBQWdESCxLQUFoRCxDQUF1QkcsS0FBdkI7RUFBQSxJQUFpQ0MsVUFBakMsaUxBQWdESixLQUFoRDs7RUFFQSxvQkFDRSx3R0FDTUksVUFETjtJQUVFLFNBQVMsRUFBRXhCLGlEQUFVLENBQ25CQyxTQURtQixFQUVuQkMsUUFBUSxDQUFDbUIsT0FBRCxDQUZXLEVBR25CWCxLQUFLLENBQUNZLElBQUQsQ0FIYyxFQUluQlAsT0FBTyxDQUFDUSxLQUFELENBSlk7RUFGdkI7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURGO0FBV0QsQ0FkRDs7S0FBTUo7QUFnQk4sK0RBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uLmpzeD80ZTFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcclxuXHJcbmNvbnN0IGNsYXNzTmFtZSA9IFwiZm9udC1ib2xkXCJcclxuXHJcbmNvbnN0IHZhcmlhbnRzID0ge1xyXG4gIHByaW1hcnk6XHJcbiAgICBcImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBtLTEgZm9udC1tb250c2VycmF0IGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZC1sZyBzaGFkb3ctbGcgIGZvbnQtbGFyZ2UgdGV4dC16aW5jLTIwMCBob3ZlcjpzY2FsZS0xMTAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMFwiLFxyXG4gIHNlY29uZGFyeTpcclxuICAgIFwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIG0tMSByb3VuZGVkLWxnIGZvbnQtbW9udHNlcnJhdCBmb250LWxhcmdlIHRleHQtemluYy0yMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBob3ZlcjpzY2FsZS0xMTAgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLWluZGlnby01MDBcIixcclxuICBuYXZCYXI6XHJcbiAgICBcImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBtLTEgZm9udC1tb250c2VycmF0IHRleHQtbWQgbWQ6dGV4dC1sZyByb3VuZGVkLXhsIHRleHQtemluYy0xMDAgbWQ6dGV4dC1uZXV0cmFsLTgwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGhvdmVyOnNjYWxlLTExMCBmb2N1czpyaW5nLXllbGxvdy01MDAgbWQ6Zm9jdXM6cmluZy1uZXV0cmFsLTgwMFwiLFxyXG4gIGNsYXNzaWNBbnN3ZXI6XHJcbiAgICBcImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBmb250LW1vbnRzZXJyYXQgYmctemluYy0xMDAgcm91bmRlZC1mdWxsIHNoYWRvdy1sZyB3LTY0IHNtOnctOTYgaC0xNiB0ZXh0LW1kIG1kOnRleHQtbGdcIixcclxuICBidG5WYWxpZGF0aW9uOlxyXG4gICAgXCJ3LWZ1bGwgaG92ZXI6c2NhbGUtMTEwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG10LTUgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkLWxnIHNoYWRvdy1sZyBmb250LW1lZGl1bSB0ZXh0LXppbmMtMjAwIGJnLXllbGxvdy02MDAgaG92ZXI6YmcteWVsbG93LTYwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy15ZWxsb3ctNzAwXCIsXHJcbiAgYnRuU3VibWl0OlxyXG4gICAgXCJ3LWZ1bGwgaG92ZXI6c2NhbGUtMTEwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG10LTUgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkLWxnIHNoYWRvdy1sZyBmb250LW1lZGl1bSB0ZXh0LXppbmMtMjAwIGJnLXllbGxvdy02MDAgaG92ZXI6YmcteWVsbG93LTYwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy15ZWxsb3ctNzAwXCIsXHJcbiAgYnRuRGVsZXRlOlxyXG4gICAgXCJmb2N1czpvdXRsaW5lLW5vbmUgdGV4dC13aGl0ZSBiZy1yZWQtNzAwIGhvdmVyOmJnLXJlZC04MDAgZm9jdXM6cmluZy00IGZvY3VzOnJpbmctcmVkLTMwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIGRhcms6YmctcmVkLTYwMCBkYXJrOmhvdmVyOmJnLXJlZC03MDAgZGFyazpmb2N1czpyaW5nLXJlZC05MDBcIixcclxufVxyXG5cclxuY29uc3Qgc2l6ZXMgPSB7XHJcbiAgc206IFwicHktMSBweC0xLjVcIixcclxuICBtZDogXCJweS0xLjUgcHgtM1wiLFxyXG4gIGxnOiBcInB5LTMgcHgtNlwiLFxyXG4gIHhsOiBcInB5LTUgcHgtN1wiLFxyXG59XHJcblxyXG5jb25zdCBiZ0NvbG9yID0ge1xyXG4gIG5vcm1hbDogXCJiZy16aW5jLTEwMFwiLFxyXG4gIGJhZDogXCJiZy1yZWQtNTAwXCIsXHJcbiAgZ29vZDogXCJiZy1ncmVlbi01MDBcIixcclxufVxyXG5cclxuY29uc3QgQnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyB2YXJpYW50LCBzaXplLCBjb2xvciwgLi4ub3RoZXJQcm9wcyB9ID0gcHJvcHNcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b25cclxuICAgICAgey4uLm90aGVyUHJvcHN9XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgdmFyaWFudHNbdmFyaWFudF0sXHJcbiAgICAgICAgc2l6ZXNbc2l6ZV0sXHJcbiAgICAgICAgYmdDb2xvcltjb2xvcl1cclxuICAgICAgKX1cclxuICAgIC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cclxuIl0sIm5hbWVzIjpbImNsYXNzTmFtZXMiLCJjbGFzc05hbWUiLCJ2YXJpYW50cyIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJuYXZCYXIiLCJjbGFzc2ljQW5zd2VyIiwiYnRuVmFsaWRhdGlvbiIsImJ0blN1Ym1pdCIsImJ0bkRlbGV0ZSIsInNpemVzIiwic20iLCJtZCIsImxnIiwieGwiLCJiZ0NvbG9yIiwibm9ybWFsIiwiYmFkIiwiZ29vZCIsIkJ1dHRvbiIsInByb3BzIiwidmFyaWFudCIsInNpemUiLCJjb2xvciIsIm90aGVyUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Button.jsx\n"));

/***/ })

});