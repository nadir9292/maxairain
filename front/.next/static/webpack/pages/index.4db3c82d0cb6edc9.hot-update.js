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

/***/ "./src/components/Stock.jsx":
/*!**********************************!*\
  !*** ./src/components/Stock.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   answerVariant: function() { return /* binding */ answerVariant; },\n/* harmony export */   counterQuestion: function() { return /* binding */ counterQuestion; },\n/* harmony export */   interrogationVariant: function() { return /* binding */ interrogationVariant; },\n/* harmony export */   listAnswers: function() { return /* binding */ listAnswers; },\n/* harmony export */   scoreVariant: function() { return /* binding */ scoreVariant; }\n/* harmony export */ });\n/* harmony import */ var C_Users_nad_m_code_maxairain_front_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_Users_nad_m_code_maxairain_front_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var C_Users_nad_m_code_maxairain_front_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_Users_nad_m_code_maxairain_front_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_nad_m_code_maxairain_front_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _UseApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UseApi */ \"./src/components/UseApi.jsx\");\n/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Text */ \"./src/components/Text.jsx\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Button */ \"./src/components/Button.jsx\");\n/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Popup */ \"./src/components/Popup.jsx\");\n/* harmony import */ var _services_makeClient__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/makeClient */ \"./src/services/makeClient.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\nad_m\\\\code\\\\maxairain\\\\front\\\\src\\\\components\\\\Stock.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar Stock = function Stock(props) {\n  _s();\n\n  var userId = props.userId;\n  var items = (0,_UseApi__WEBPACK_IMPORTED_MODULE_4__[\"default\"])([{}], \"get\", \"/items\");\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"),\n      error = _useState[0],\n      setError = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      isLoading = _useState2[0],\n      setIsLoading = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      showPopup = _useState3[0],\n      setShowPopup = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      selectedItems = _useState4[0],\n      setSelectedItems = _useState4[1];\n\n  var handleCheckboxChange = function handleCheckboxChange(itemId, label, quantity) {\n    if (selectedItems.some(function (item) {\n      return item.id === itemId;\n    })) {\n      setSelectedItems(selectedItems.filter(function (item) {\n        return item.id !== itemId;\n      }));\n    } else {\n      setSelectedItems([].concat((0,C_Users_nad_m_code_maxairain_front_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(selectedItems), [{\n        id: itemId,\n        label: label,\n        quantity: quantity\n      }]));\n    }\n  };\n\n  var handleButtonClick = /*#__PURE__*/function () {\n    var _ref = (0,C_Users_nad_m_code_maxairain_front_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_Users_nad_m_code_maxairain_front_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(uid) {\n      var itemsSelected, _yield$makeClient$pos, _yield$makeClient$pos2, jwt, _userId, _err$response, data;\n\n      return C_Users_nad_m_code_maxairain_front_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              setIsLoading(true);\n              setError(null);\n              itemsSelected = selectedItems.map(function (item) {\n                return {\n                  label: item.label,\n                  id: item.id,\n                  quantity: item.quantity\n                };\n              });\n              _context.next = 6;\n              return (0,_services_makeClient__WEBPACK_IMPORTED_MODULE_8__.makeClient)().post(\"/chooseItems/\".concat(uid), {\n                itemsSelected: itemsSelected\n              });\n\n            case 6:\n              _yield$makeClient$pos = _context.sent;\n              _yield$makeClient$pos2 = _yield$makeClient$pos.data;\n              jwt = _yield$makeClient$pos2.jwt;\n              _userId = _yield$makeClient$pos2.userId;\n\n              if (jwt) {\n                _context.next = 12;\n                break;\n              }\n\n              throw new Error(\"Missing jwt\");\n\n            case 12:\n              setShowPopup(true);\n              _context.next = 15;\n              return delay(1500);\n\n            case 15:\n              setError(null);\n              _context.next = 25;\n              break;\n\n            case 18:\n              _context.prev = 18;\n              _context.t0 = _context[\"catch\"](0);\n              _err$response = _context.t0.response;\n              _err$response = _err$response === void 0 ? {} : _err$response;\n              data = _err$response.data;\n              console.log(\"ERROR = \" + _context.t0);\n              setError(\"Something went wrong...🙂\");\n\n            case 25:\n              _context.prev = 25;\n              setIsLoading(false);\n              return _context.finish(25);\n\n            case 28:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 18, 25, 28]]);\n    }));\n\n    return function handleButtonClick(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n    className: \"grid md:grid-cols-2\",\n    children: [error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Popup__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      btnMsg: \"Retry please \\uD83D\\uDE15\",\n      isDisabled: false,\n      msg: error,\n      color: \"bg-red-400\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }, _this), showPopup && !error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Popup__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      msg: \"Welcome \\uD83D\\uDE42\",\n      btnMsg: \"OK\",\n      isDisabled: true,\n      color: \"bg-green-400\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }, _this), items.map(function (_ref2, index) {\n      var id = _ref2.id,\n          label = _ref2.label,\n          quantity = _ref2.quantity;\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"label\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"ul\", {\n            className: \" mb-2 mx-2 hover:scale-105 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"li\", {\n              className: \"w-full dark:border-gray-600\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n                className: \"flex items-center pl-3\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"input\", {\n                  type: \"checkbox\",\n                  checked: selectedItems.some(function (item) {\n                    return item.id === id;\n                  }),\n                  onChange: function onChange() {\n                    return handleCheckboxChange(id, label, quantity);\n                  }\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 78,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Text__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                  variant: \"items\",\n                  size: \"md\",\n                  children: [\"id : \", id, \" - \", label, \" - \", quantity]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 83,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 77,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 76,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }, _this)\n      }, id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, _this);\n    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      variant: \"btnSubmit\",\n      size: \"lg\",\n      onClick: function onClick() {\n        return handleButtonClick(userId);\n      },\n      children: \"Valider\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"p\", {\n      className: \"mb-5\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 55,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Stock, \"QxXe2FAqDOChDVUDKyJJbVT5q+w=\");\n\n_c = Stock;\nvar scoreVariant = {\n  normal: {\n    opacity: 1,\n    scale: 0.5\n  },\n  change: {\n    opacity: 1,\n    borderRadius: 50,\n    scale: 1\n  },\n  scale: {\n    type: \"spring\",\n    damping: 5,\n    stiffness: 100,\n    restDelta: 0.001\n  }\n};\nvar counterQuestion = {\n  initial: {\n    opacity: 0,\n    x: -100\n  },\n  visible: {\n    opacity: 1,\n    x: 0\n  }\n};\nvar interrogationVariant = {\n  hidden: {\n    opacity: 0,\n    scale: 0.5\n  },\n  visible: {\n    opacity: 1,\n    scale: 1\n  },\n  scale: {\n    type: \"spring\",\n    damping: 2,\n    stiffness: 100,\n    restDelta: 0.001\n  }\n};\nvar answerVariant = {\n  whileHover: {\n    scale: 1.2,\n    color: \"#fcba03\"\n  },\n  whileTap: {\n    scale: 0.8\n  },\n  transition: {\n    type: \"spring\",\n    stiffness: 100,\n    damping: 10\n  },\n  visible: {\n    opacity: 1,\n    x: 0\n  },\n  hidden: {\n    opacity: 0,\n    x: -100\n  }\n};\nvar listAnswers = {\n  visible: {\n    opacity: 1,\n    transition: {\n      when: \"beforeChildren\",\n      staggerChildren: 0.3\n    }\n  },\n  hidden: {\n    opacity: 0\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Stock);\n\nvar _c;\n\n$RefreshReg$(_c, \"Stock\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNWRSxJQUFJLEVBQUUsZ0JBREk7TUFFVkMsZUFBZSxFQUFFO0lBRlA7RUFGTCxDQURnQjtFQVF6QlIsTUFBTSxFQUFFO0lBQUViLE9BQU8sRUFBRTtFQUFYO0FBUmlCLENBQXBCO0FBV1AsK0RBQWVuQyxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1N0b2NrLmpzeD9iYjllIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgVXNlQXBpIGZyb20gXCIuL1VzZUFwaVwiXG5pbXBvcnQgVGV4dCBmcm9tIFwiLi9UZXh0XCJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCJcbmltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cFwiXG5pbXBvcnQgeyBtYWtlQ2xpZW50IH0gZnJvbSBcIi4uL3NlcnZpY2VzL21ha2VDbGllbnRcIlxuXG5jb25zdCBTdG9jayA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHVzZXJJZCB9ID0gcHJvcHNcbiAgY29uc3QgaXRlbXMgPSBVc2VBcGkoW3t9XSwgXCJnZXRcIiwgYC9pdGVtc2ApXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbc2hvd1BvcHVwLCBzZXRTaG93UG9wdXBdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtzZWxlY3RlZEl0ZW1zLCBzZXRTZWxlY3RlZEl0ZW1zXSA9IHVzZVN0YXRlKFtdKVxuXG4gIGNvbnN0IGhhbmRsZUNoZWNrYm94Q2hhbmdlID0gKGl0ZW1JZCwgbGFiZWwsIHF1YW50aXR5KSA9PiB7XG4gICAgaWYgKHNlbGVjdGVkSXRlbXMuc29tZSgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaXRlbUlkKSkge1xuICAgICAgc2V0U2VsZWN0ZWRJdGVtcyhzZWxlY3RlZEl0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gaXRlbUlkKSlcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U2VsZWN0ZWRJdGVtcyhbLi4uc2VsZWN0ZWRJdGVtcywgeyBpZDogaXRlbUlkLCBsYWJlbCwgcXVhbnRpdHkgfV0pXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQnV0dG9uQ2xpY2sgPSBhc3luYyAodWlkKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHNldElzTG9hZGluZyh0cnVlKVxuICAgICAgc2V0RXJyb3IobnVsbClcbiAgICAgIGNvbnN0IGl0ZW1zU2VsZWN0ZWQgPSBzZWxlY3RlZEl0ZW1zLm1hcCgoaXRlbSkgPT4gKHtcbiAgICAgICAgbGFiZWw6IGl0ZW0ubGFiZWwsXG4gICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICBxdWFudGl0eTogaXRlbS5xdWFudGl0eSxcbiAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7XG4gICAgICAgIGRhdGE6IHsgand0LCB1c2VySWQgfSxcbiAgICAgIH0gPSBhd2FpdCBtYWtlQ2xpZW50KCkucG9zdChgL2Nob29zZUl0ZW1zLyR7dWlkfWAsIHsgaXRlbXNTZWxlY3RlZCB9KVxuXG4gICAgICBpZiAoIWp3dCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIGp3dFwiKVxuICAgICAgfVxuXG4gICAgICBzZXRTaG93UG9wdXAodHJ1ZSlcbiAgICAgIGF3YWl0IGRlbGF5KDE1MDApXG4gICAgICBzZXRFcnJvcihudWxsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc3QgeyByZXNwb25zZTogeyBkYXRhIH0gPSB7fSB9ID0gZXJyXG4gICAgICBjb25zb2xlLmxvZyhcIkVSUk9SID0gXCIgKyBlcnIpXG4gICAgICBzZXRFcnJvcihcIlNvbWV0aGluZyB3ZW50IHdyb25nLi4u8J+ZglwiKVxuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTJcIj5cbiAgICAgIHtlcnJvciAmJiAoXG4gICAgICAgIDxQb3B1cFxuICAgICAgICAgIGJ0bk1zZz1cIlJldHJ5IHBsZWFzZSDwn5iVXCJcbiAgICAgICAgICBpc0Rpc2FibGVkPXtmYWxzZX1cbiAgICAgICAgICBtc2c9e2Vycm9yfVxuICAgICAgICAgIGNvbG9yPVwiYmctcmVkLTQwMFwiXG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAge3Nob3dQb3B1cCAmJiAhZXJyb3IgJiYgKFxuICAgICAgICA8UG9wdXBcbiAgICAgICAgICBtc2c9XCJXZWxjb21lIPCfmYJcIlxuICAgICAgICAgIGJ0bk1zZz1cIk9LXCJcbiAgICAgICAgICBpc0Rpc2FibGVkPXt0cnVlfVxuICAgICAgICAgIGNvbG9yPVwiYmctZ3JlZW4tNDAwXCJcbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICB7aXRlbXMubWFwKCh7IGlkLCBsYWJlbCwgcXVhbnRpdHkgfSwgaW5kZXgpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2lkfT5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiIG1iLTIgbXgtMiBob3ZlcjpzY2FsZS0xMDUgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIGJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcm91bmRlZC1sZyBkYXJrOmJnLWdyYXktNzAwIGRhcms6Ym9yZGVyLWdyYXktNjAwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidy1mdWxsIGRhcms6Ym9yZGVyLWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBwbC0zXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWRJdGVtcy5zb21lKChpdGVtKSA9PiBpdGVtLmlkID09PSBpZCl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBoYW5kbGVDaGVja2JveENoYW5nZShpZCwgbGFiZWwsIHF1YW50aXR5KX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8VGV4dCB2YXJpYW50PVwiaXRlbXNcIiBzaXplPVwibWRcIj5cbiAgICAgICAgICAgICAgICAgICAgaWQgOiB7aWR9IC0ge2xhYmVsfSAtIHtxdWFudGl0eX1cbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICAgIDxCdXR0b25cbiAgICAgICAgdmFyaWFudD1cImJ0blN1Ym1pdFwiXG4gICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUJ1dHRvbkNsaWNrKHVzZXJJZCl9XG4gICAgICA+XG4gICAgICAgIFZhbGlkZXJcbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItNVwiPjwvcD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgY29uc3Qgc2NvcmVWYXJpYW50ID0ge1xuICBub3JtYWw6IHtcbiAgICBvcGFjaXR5OiAxLFxuICAgIHNjYWxlOiAwLjUsXG4gIH0sXG4gIGNoYW5nZToge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgYm9yZGVyUmFkaXVzOiA1MCxcbiAgICBzY2FsZTogMSxcbiAgfSxcbiAgc2NhbGU6IHtcbiAgICB0eXBlOiBcInNwcmluZ1wiLFxuICAgIGRhbXBpbmc6IDUsXG4gICAgc3RpZmZuZXNzOiAxMDAsXG4gICAgcmVzdERlbHRhOiAwLjAwMSxcbiAgfSxcbn1cbmV4cG9ydCBjb25zdCBjb3VudGVyUXVlc3Rpb24gPSB7XG4gIGluaXRpYWw6IHtcbiAgICBvcGFjaXR5OiAwLFxuICAgIHg6IC0xMDAsXG4gIH0sXG4gIHZpc2libGU6IHtcbiAgICBvcGFjaXR5OiAxLFxuICAgIHg6IDAsXG4gIH0sXG59XG5leHBvcnQgY29uc3QgaW50ZXJyb2dhdGlvblZhcmlhbnQgPSB7XG4gIGhpZGRlbjoge1xuICAgIG9wYWNpdHk6IDAsXG4gICAgc2NhbGU6IDAuNSxcbiAgfSxcbiAgdmlzaWJsZToge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgc2NhbGU6IDEsXG4gIH0sXG4gIHNjYWxlOiB7XG4gICAgdHlwZTogXCJzcHJpbmdcIixcbiAgICBkYW1waW5nOiAyLFxuICAgIHN0aWZmbmVzczogMTAwLFxuICAgIHJlc3REZWx0YTogMC4wMDEsXG4gIH0sXG59XG5leHBvcnQgY29uc3QgYW5zd2VyVmFyaWFudCA9IHtcbiAgd2hpbGVIb3Zlcjoge1xuICAgIHNjYWxlOiAxLjIsXG4gICAgY29sb3I6IFwiI2ZjYmEwM1wiLFxuICB9LFxuICB3aGlsZVRhcDogeyBzY2FsZTogMC44IH0sXG4gIHRyYW5zaXRpb246IHtcbiAgICB0eXBlOiBcInNwcmluZ1wiLFxuICAgIHN0aWZmbmVzczogMTAwLFxuICAgIGRhbXBpbmc6IDEwLFxuICB9LFxuICB2aXNpYmxlOiB7IG9wYWNpdHk6IDEsIHg6IDAgfSxcbiAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHg6IC0xMDAgfSxcbn1cbmV4cG9ydCBjb25zdCBsaXN0QW5zd2VycyA9IHtcbiAgdmlzaWJsZToge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgd2hlbjogXCJiZWZvcmVDaGlsZHJlblwiLFxuICAgICAgc3RhZ2dlckNoaWxkcmVuOiAwLjMsXG4gICAgfSxcbiAgfSxcbiAgaGlkZGVuOiB7IG9wYWNpdHk6IDAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RvY2tcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiVXNlQXBpIiwiVGV4dCIsIkJ1dHRvbiIsIlBvcHVwIiwibWFrZUNsaWVudCIsIlN0b2NrIiwicHJvcHMiLCJ1c2VySWQiLCJpdGVtcyIsImVycm9yIiwic2V0RXJyb3IiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJzaG93UG9wdXAiLCJzZXRTaG93UG9wdXAiLCJzZWxlY3RlZEl0ZW1zIiwic2V0U2VsZWN0ZWRJdGVtcyIsImhhbmRsZUNoZWNrYm94Q2hhbmdlIiwiaXRlbUlkIiwibGFiZWwiLCJxdWFudGl0eSIsInNvbWUiLCJpdGVtIiwiaWQiLCJmaWx0ZXIiLCJoYW5kbGVCdXR0b25DbGljayIsInVpZCIsIml0ZW1zU2VsZWN0ZWQiLCJtYXAiLCJwb3N0IiwiZGF0YSIsImp3dCIsIkVycm9yIiwiZGVsYXkiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJpbmRleCIsInNjb3JlVmFyaWFudCIsIm5vcm1hbCIsIm9wYWNpdHkiLCJzY2FsZSIsImNoYW5nZSIsImJvcmRlclJhZGl1cyIsInR5cGUiLCJkYW1waW5nIiwic3RpZmZuZXNzIiwicmVzdERlbHRhIiwiY291bnRlclF1ZXN0aW9uIiwiaW5pdGlhbCIsIngiLCJ2aXNpYmxlIiwiaW50ZXJyb2dhdGlvblZhcmlhbnQiLCJoaWRkZW4iLCJhbnN3ZXJWYXJpYW50Iiwid2hpbGVIb3ZlciIsImNvbG9yIiwid2hpbGVUYXAiLCJ0cmFuc2l0aW9uIiwibGlzdEFuc3dlcnMiLCJ3aGVuIiwic3RhZ2dlckNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Stock.jsx\n"));

/***/ })

});