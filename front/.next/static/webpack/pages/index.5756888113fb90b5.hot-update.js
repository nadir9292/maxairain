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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   answerVariant: function() { return /* binding */ answerVariant; },\n/* harmony export */   counterQuestion: function() { return /* binding */ counterQuestion; },\n/* harmony export */   interrogationVariant: function() { return /* binding */ interrogationVariant; },\n/* harmony export */   listAnswers: function() { return /* binding */ listAnswers; },\n/* harmony export */   scoreVariant: function() { return /* binding */ scoreVariant; }\n/* harmony export */ });\n/* harmony import */ var C_Users_nad_m_code_maxairain_front_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_Users_nad_m_code_maxairain_front_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var C_Users_nad_m_code_maxairain_front_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_Users_nad_m_code_maxairain_front_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_nad_m_code_maxairain_front_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _UseApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UseApi */ \"./src/components/UseApi.jsx\");\n/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Text */ \"./src/components/Text.jsx\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Button */ \"./src/components/Button.jsx\");\n/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Popup */ \"./src/components/Popup.jsx\");\n/* harmony import */ var _services_makeClient__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/makeClient */ \"./src/services/makeClient.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\nad_m\\\\code\\\\maxairain\\\\front\\\\src\\\\components\\\\Stock.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar Stock = function Stock(props) {\n  _s();\n\n  var userId = props.userId;\n  var items = (0,_UseApi__WEBPACK_IMPORTED_MODULE_4__[\"default\"])([{}], \"get\", \"/items\");\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"),\n      error = _useState[0],\n      setError = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      isLoading = _useState2[0],\n      setIsLoading = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      showPopup = _useState3[0],\n      setShowPopup = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      selectedItems = _useState4[0],\n      setSelectedItems = _useState4[1];\n\n  var handleCheckboxChange = function handleCheckboxChange(itemId, label, quantity) {\n    if (selectedItems.some(function (item) {\n      return item.id === itemId;\n    })) {\n      setSelectedItems(selectedItems.filter(function (item) {\n        return item.id !== itemId;\n      }));\n    } else {\n      setSelectedItems([].concat((0,C_Users_nad_m_code_maxairain_front_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(selectedItems), [{\n        id: itemId,\n        label: label,\n        quantity: quantity\n      }]));\n    }\n  };\n\n  var handleButtonClick = /*#__PURE__*/function () {\n    var _ref = (0,C_Users_nad_m_code_maxairain_front_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_Users_nad_m_code_maxairain_front_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(uId) {\n      var itemsSelected, _yield$makeClient$pos, _yield$makeClient$pos2, jwt, _userId, _err$response, data;\n\n      return C_Users_nad_m_code_maxairain_front_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              setIsLoading(true);\n              setError(null);\n              console.log(\"toto = \" + JSON.parse());\n              itemsSelected = selectedItems.map(function (item) {\n                return {\n                  label: item.label,\n                  id: item.id,\n                  quantity: item.quantity\n                };\n              });\n              _context.next = 7;\n              return (0,_services_makeClient__WEBPACK_IMPORTED_MODULE_8__.makeClient)().post(\"/chooseItems/3\", {\n                itemsSelected: itemsSelected\n              });\n\n            case 7:\n              _yield$makeClient$pos = _context.sent;\n              _yield$makeClient$pos2 = _yield$makeClient$pos.data;\n              jwt = _yield$makeClient$pos2.jwt;\n              _userId = _yield$makeClient$pos2.userId;\n\n              if (jwt) {\n                _context.next = 13;\n                break;\n              }\n\n              throw new Error(\"Missing jwt\");\n\n            case 13:\n              setShowPopup(true);\n              _context.next = 16;\n              return delay(1500);\n\n            case 16:\n              setError(null);\n              _context.next = 26;\n              break;\n\n            case 19:\n              _context.prev = 19;\n              _context.t0 = _context[\"catch\"](0);\n              _err$response = _context.t0.response;\n              _err$response = _err$response === void 0 ? {} : _err$response;\n              data = _err$response.data;\n              console.log(\"ERROR = \" + _context.t0);\n              setError(\"Something went wrong...\");\n\n            case 26:\n              _context.prev = 26;\n              setIsLoading(false);\n              return _context.finish(26);\n\n            case 29:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 19, 26, 29]]);\n    }));\n\n    return function handleButtonClick(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n    className: \"grid md:grid-cols-2\",\n    children: [error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Popup__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      btnMsg: \"Retry please \\uD83D\\uDE15\",\n      isDisabled: false,\n      msg: error,\n      color: \"bg-red-400\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }, _this), showPopup && !error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Popup__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      msg: \"Welcome \\uD83D\\uDE42\",\n      btnMsg: \"OK\",\n      isDisabled: true,\n      color: \"bg-green-400\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }, _this), items.map(function (_ref2, index) {\n      var id = _ref2.id,\n          label = _ref2.label,\n          quantity = _ref2.quantity;\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"label\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"ul\", {\n            className: \" mb-2 mx-2 hover:scale-105 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"li\", {\n              className: \"w-full dark:border-gray-600\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n                className: \"flex items-center pl-3\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"input\", {\n                  type: \"checkbox\",\n                  checked: selectedItems.some(function (item) {\n                    return item.id === id;\n                  }),\n                  onChange: function onChange() {\n                    return handleCheckboxChange(id, label, quantity);\n                  }\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 80,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Text__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                  variant: \"items\",\n                  size: \"md\",\n                  children: [\"id : \", id, \" - \", label, \" - \", quantity]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 85,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 79,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 78,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 11\n        }, _this)\n      }, id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }, _this);\n    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      variant: \"btnSubmit\",\n      size: \"lg\",\n      onClick: handleButtonClick,\n      children: \"Valider\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"p\", {\n      className: \"mb-5\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Stock, \"QxXe2FAqDOChDVUDKyJJbVT5q+w=\");\n\n_c = Stock;\nvar scoreVariant = {\n  normal: {\n    opacity: 1,\n    scale: 0.5\n  },\n  change: {\n    opacity: 1,\n    borderRadius: 50,\n    scale: 1\n  },\n  scale: {\n    type: \"spring\",\n    damping: 5,\n    stiffness: 100,\n    restDelta: 0.001\n  }\n};\nvar counterQuestion = {\n  initial: {\n    opacity: 0,\n    x: -100\n  },\n  visible: {\n    opacity: 1,\n    x: 0\n  }\n};\nvar interrogationVariant = {\n  hidden: {\n    opacity: 0,\n    scale: 0.5\n  },\n  visible: {\n    opacity: 1,\n    scale: 1\n  },\n  scale: {\n    type: \"spring\",\n    damping: 2,\n    stiffness: 100,\n    restDelta: 0.001\n  }\n};\nvar answerVariant = {\n  whileHover: {\n    scale: 1.2,\n    color: \"#fcba03\"\n  },\n  whileTap: {\n    scale: 0.8\n  },\n  transition: {\n    type: \"spring\",\n    stiffness: 100,\n    damping: 10\n  },\n  visible: {\n    opacity: 1,\n    x: 0\n  },\n  hidden: {\n    opacity: 0,\n    x: -100\n  }\n};\nvar listAnswers = {\n  visible: {\n    opacity: 1,\n    transition: {\n      when: \"beforeChildren\",\n      staggerChildren: 0.3\n    }\n  },\n  hidden: {\n    opacity: 0\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Stock);\n\nvar _c;\n\n$RefreshReg$(_c, \"Stock\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RjtJQUVQa0IsVUFBVSxFQUFFO01BQ1ZFLElBQUksRUFBRSxnQkFESTtNQUVWQyxlQUFlLEVBQUU7SUFGUDtFQUZMLENBRGdCO0VBUXpCUixNQUFNLEVBQUU7SUFBRWIsT0FBTyxFQUFFO0VBQVg7QUFSaUIsQ0FBcEI7QUFXUCwrREFBZXJDLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3RvY2suanN4P2JiOWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBVc2VBcGkgZnJvbSBcIi4vVXNlQXBpXCJcbmltcG9ydCBUZXh0IGZyb20gXCIuL1RleHRcIlxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIlxuaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwXCJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcbmltcG9ydCB7IG1ha2VDbGllbnQgfSBmcm9tIFwiLi4vc2VydmljZXMvbWFrZUNsaWVudFwiXG5cbmNvbnN0IFN0b2NrID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdXNlcklkIH0gPSBwcm9wc1xuICBjb25zdCBpdGVtcyA9IFVzZUFwaShbe31dLCBcImdldFwiLCBgL2l0ZW1zYClcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtzaG93UG9wdXAsIHNldFNob3dQb3B1cF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3NlbGVjdGVkSXRlbXMsIHNldFNlbGVjdGVkSXRlbXNdID0gdXNlU3RhdGUoW10pXG5cbiAgY29uc3QgaGFuZGxlQ2hlY2tib3hDaGFuZ2UgPSAoaXRlbUlkLCBsYWJlbCwgcXVhbnRpdHkpID0+IHtcbiAgICBpZiAoc2VsZWN0ZWRJdGVtcy5zb21lKChpdGVtKSA9PiBpdGVtLmlkID09PSBpdGVtSWQpKSB7XG4gICAgICBzZXRTZWxlY3RlZEl0ZW1zKHNlbGVjdGVkSXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBpdGVtSWQpKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTZWxlY3RlZEl0ZW1zKFsuLi5zZWxlY3RlZEl0ZW1zLCB7IGlkOiBpdGVtSWQsIGxhYmVsLCBxdWFudGl0eSB9XSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVCdXR0b25DbGljayA9IGFzeW5jICh1SWQpID0+IHtcbiAgICB0cnkge1xuICAgICAgc2V0SXNMb2FkaW5nKHRydWUpXG4gICAgICBzZXRFcnJvcihudWxsKVxuICAgICAgY29uc29sZS5sb2coXCJ0b3RvID0gXCIgKyBKU09OLnBhcnNlKCkpXG4gICAgICBjb25zdCBpdGVtc1NlbGVjdGVkID0gc2VsZWN0ZWRJdGVtcy5tYXAoKGl0ZW0pID0+ICh7XG4gICAgICAgIGxhYmVsOiBpdGVtLmxhYmVsLFxuICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHksXG4gICAgICB9KSlcblxuICAgICAgY29uc3Qge1xuICAgICAgICBkYXRhOiB7IGp3dCwgdXNlcklkIH0sXG4gICAgICB9ID0gYXdhaXQgbWFrZUNsaWVudCgpLnBvc3QoYC9jaG9vc2VJdGVtcy8zYCwgeyBpdGVtc1NlbGVjdGVkIH0pXG5cbiAgICAgIGlmICghand0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3Npbmcgand0XCIpXG4gICAgICB9XG5cbiAgICAgIHNldFNob3dQb3B1cCh0cnVlKVxuICAgICAgYXdhaXQgZGVsYXkoMTUwMClcbiAgICAgIHNldEVycm9yKG51bGwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zdCB7IHJlc3BvbnNlOiB7IGRhdGEgfSA9IHt9IH0gPSBlcnJcbiAgICAgIGNvbnNvbGUubG9nKFwiRVJST1IgPSBcIiArIGVycilcbiAgICAgIHNldEVycm9yKFwiU29tZXRoaW5nIHdlbnQgd3JvbmcuLi5cIilcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yXCI+XG4gICAgICB7ZXJyb3IgJiYgKFxuICAgICAgICA8UG9wdXBcbiAgICAgICAgICBidG5Nc2c9XCJSZXRyeSBwbGVhc2Ug8J+YlVwiXG4gICAgICAgICAgaXNEaXNhYmxlZD17ZmFsc2V9XG4gICAgICAgICAgbXNnPXtlcnJvcn1cbiAgICAgICAgICBjb2xvcj1cImJnLXJlZC00MDBcIlxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtzaG93UG9wdXAgJiYgIWVycm9yICYmIChcbiAgICAgICAgPFBvcHVwXG4gICAgICAgICAgbXNnPVwiV2VsY29tZSDwn5mCXCJcbiAgICAgICAgICBidG5Nc2c9XCJPS1wiXG4gICAgICAgICAgaXNEaXNhYmxlZD17dHJ1ZX1cbiAgICAgICAgICBjb2xvcj1cImJnLWdyZWVuLTQwMFwiXG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAge2l0ZW1zLm1hcCgoeyBpZCwgbGFiZWwsIHF1YW50aXR5IH0sIGluZGV4KSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtpZH0+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIiBtYi0yIG14LTIgaG92ZXI6c2NhbGUtMTA1IHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQtbGcgZGFyazpiZy1ncmF5LTcwMCBkYXJrOmJvcmRlci1ncmF5LTYwMCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInctZnVsbCBkYXJrOmJvcmRlci1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcGwtM1wiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkSXRlbXMuc29tZSgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaWQpfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gaGFuZGxlQ2hlY2tib3hDaGFuZ2UoaWQsIGxhYmVsLCBxdWFudGl0eSl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPFRleHQgdmFyaWFudD1cIml0ZW1zXCIgc2l6ZT1cIm1kXCI+XG4gICAgICAgICAgICAgICAgICAgIGlkIDoge2lkfSAtIHtsYWJlbH0gLSB7cXVhbnRpdHl9XG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJidG5TdWJtaXRcIiBzaXplPVwibGdcIiBvbkNsaWNrPXtoYW5kbGVCdXR0b25DbGlja30+XG4gICAgICAgIFZhbGlkZXJcbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItNVwiPjwvcD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgY29uc3Qgc2NvcmVWYXJpYW50ID0ge1xuICBub3JtYWw6IHtcbiAgICBvcGFjaXR5OiAxLFxuICAgIHNjYWxlOiAwLjUsXG4gIH0sXG4gIGNoYW5nZToge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgYm9yZGVyUmFkaXVzOiA1MCxcbiAgICBzY2FsZTogMSxcbiAgfSxcbiAgc2NhbGU6IHtcbiAgICB0eXBlOiBcInNwcmluZ1wiLFxuICAgIGRhbXBpbmc6IDUsXG4gICAgc3RpZmZuZXNzOiAxMDAsXG4gICAgcmVzdERlbHRhOiAwLjAwMSxcbiAgfSxcbn1cbmV4cG9ydCBjb25zdCBjb3VudGVyUXVlc3Rpb24gPSB7XG4gIGluaXRpYWw6IHtcbiAgICBvcGFjaXR5OiAwLFxuICAgIHg6IC0xMDAsXG4gIH0sXG4gIHZpc2libGU6IHtcbiAgICBvcGFjaXR5OiAxLFxuICAgIHg6IDAsXG4gIH0sXG59XG5leHBvcnQgY29uc3QgaW50ZXJyb2dhdGlvblZhcmlhbnQgPSB7XG4gIGhpZGRlbjoge1xuICAgIG9wYWNpdHk6IDAsXG4gICAgc2NhbGU6IDAuNSxcbiAgfSxcbiAgdmlzaWJsZToge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgc2NhbGU6IDEsXG4gIH0sXG4gIHNjYWxlOiB7XG4gICAgdHlwZTogXCJzcHJpbmdcIixcbiAgICBkYW1waW5nOiAyLFxuICAgIHN0aWZmbmVzczogMTAwLFxuICAgIHJlc3REZWx0YTogMC4wMDEsXG4gIH0sXG59XG5leHBvcnQgY29uc3QgYW5zd2VyVmFyaWFudCA9IHtcbiAgd2hpbGVIb3Zlcjoge1xuICAgIHNjYWxlOiAxLjIsXG4gICAgY29sb3I6IFwiI2ZjYmEwM1wiLFxuICB9LFxuICB3aGlsZVRhcDogeyBzY2FsZTogMC44IH0sXG4gIHRyYW5zaXRpb246IHtcbiAgICB0eXBlOiBcInNwcmluZ1wiLFxuICAgIHN0aWZmbmVzczogMTAwLFxuICAgIGRhbXBpbmc6IDEwLFxuICB9LFxuICB2aXNpYmxlOiB7IG9wYWNpdHk6IDEsIHg6IDAgfSxcbiAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHg6IC0xMDAgfSxcbn1cbmV4cG9ydCBjb25zdCBsaXN0QW5zd2VycyA9IHtcbiAgdmlzaWJsZToge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgd2hlbjogXCJiZWZvcmVDaGlsZHJlblwiLFxuICAgICAgc3RhZ2dlckNoaWxkcmVuOiAwLjMsXG4gICAgfSxcbiAgfSxcbiAgaGlkZGVuOiB7IG9wYWNpdHk6IDAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RvY2tcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiVXNlQXBpIiwiVGV4dCIsIkJ1dHRvbiIsIlBvcHVwIiwibW90aW9uIiwibWFrZUNsaWVudCIsIlN0b2NrIiwicHJvcHMiLCJ1c2VySWQiLCJpdGVtcyIsImVycm9yIiwic2V0RXJyb3IiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJzaG93UG9wdXAiLCJzZXRTaG93UG9wdXAiLCJzZWxlY3RlZEl0ZW1zIiwic2V0U2VsZWN0ZWRJdGVtcyIsImhhbmRsZUNoZWNrYm94Q2hhbmdlIiwiaXRlbUlkIiwibGFiZWwiLCJxdWFudGl0eSIsInNvbWUiLCJpdGVtIiwiaWQiLCJmaWx0ZXIiLCJoYW5kbGVCdXR0b25DbGljayIsInVJZCIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwicGFyc2UiLCJpdGVtc1NlbGVjdGVkIiwibWFwIiwicG9zdCIsImRhdGEiLCJqd3QiLCJFcnJvciIsImRlbGF5IiwicmVzcG9uc2UiLCJpbmRleCIsInNjb3JlVmFyaWFudCIsIm5vcm1hbCIsIm9wYWNpdHkiLCJzY2FsZSIsImNoYW5nZSIsImJvcmRlclJhZGl1cyIsInR5cGUiLCJkYW1waW5nIiwic3RpZmZuZXNzIiwicmVzdERlbHRhIiwiY291bnRlclF1ZXN0aW9uIiwiaW5pdGlhbCIsIngiLCJ2aXNpYmxlIiwiaW50ZXJyb2dhdGlvblZhcmlhbnQiLCJoaWRkZW4iLCJhbnN3ZXJWYXJpYW50Iiwid2hpbGVIb3ZlciIsImNvbG9yIiwid2hpbGVUYXAiLCJ0cmFuc2l0aW9uIiwibGlzdEFuc3dlcnMiLCJ3aGVuIiwic3RhZ2dlckNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Stock.jsx\n"));

/***/ })

});