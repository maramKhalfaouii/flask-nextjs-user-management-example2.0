webpackHotUpdate_N_E("pages/secure-page",{

/***/ "./pages/secure-page.tsx":
/*!*******************************!*\
  !*** ./pages/secure-page.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var utils_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/auth */ \"./utils/auth/index.ts\");\n\n\n\n\n\nvar _jsxFileName = \"/usr/src/app/pages/secure-page.tsx\",\n  _this = undefined,\n  _s = $RefreshSig$();\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\nfunction _callSuper(t, o, e) { return o = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(o), Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(t).constructor) : o.apply(t, e)); }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\n\n\nvar SecurePage = /*#__PURE__*/function (_Component) {\n  function SecurePage() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, SecurePage);\n    return _callSuper(this, SecurePage, arguments);\n  }\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(SecurePage, _Component);\n  return Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(SecurePage, [{\n    key: \"render\",\n    value: function render() {\n      return __jsx(\"div\", {\n        style: {\n          maxWidth: \"600px\",\n          margin: \"auto\",\n          marginTop: \"20px\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 7,\n          columnNumber: 7\n        }\n      }, __jsx(\"h1\", {\n        style: {\n          textAlign: \"center\",\n          marginBottom: \"20px\",\n          color: \"#333\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 8,\n          columnNumber: 9\n        }\n      }, \"Secure Page\"), __jsx(\"div\", {\n        style: {\n          border: \"1px solid #ccc\",\n          borderRadius: \"5px\",\n          padding: \"20px\",\n          backgroundColor: \"#f9f9f9\",\n          boxShadow: \"0px 0px 10px rgba(0, 0, 0, 0.1)\",\n          marginTop: \"20px\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 9,\n          columnNumber: 9\n        }\n      }, __jsx(\"div\", {\n        style: {\n          textAlign: \"center\",\n          marginBottom: \"20px\",\n          fontSize: \"1.2rem\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 10,\n          columnNumber: 11\n        }\n      }, \"You can only access this page if you are logged in.\"), __jsx(\"div\", {\n        style: {\n          textAlign: \"left\",\n          marginTop: \"10px\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 11\n        }\n      }, __jsx(\"div\", {\n        style: {\n          marginBottom: \"2°px\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 13\n        }\n      }, __jsx(\"strong\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 15\n        }\n      }, \"Email:\"), \" user@example.com\"), __jsx(\"div\", {\n        style: {\n          marginBottom: \"20px\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 13\n        }\n      }, __jsx(\"strong\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 15\n        }\n      }, \"Password:\"), \" \", __jsx(PasswordWithVisibilityToggle, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 15\n        }\n      })))));\n    }\n  }]);\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]); // Component for Password with visibility toggle\nvar PasswordWithVisibilityToggle = function PasswordWithVisibilityToggle() {\n  _s();\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(false),\n    showPassword = _useState[0],\n    setShowPassword = _useState[1];\n  var togglePasswordVisibility = function togglePasswordVisibility() {\n    setShowPassword(!showPassword);\n  };\n  return __jsx(\"div\", {\n    style: {\n      display: \"flex\",\n      alignItems: \"center\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }\n  }, __jsx(\"input\", {\n    type: showPassword ? \"text\" : \"password\",\n    value: showPassword ? \"password123\" : \"*********\",\n    readOnly: true,\n    style: {\n      flex: 1,\n      padding: \"10px\",\n      border: \"1px solid #ccc\",\n      borderRadius: \"5px\",\n      marginRight: \"10px\",\n      fontSize: \"1rem\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }), __jsx(\"button\", {\n    onClick: togglePasswordVisibility,\n    style: {\n      padding: \"10px 20px\",\n      borderRadius: \"5px\",\n      cursor: \"pointer\",\n      backgroundColor: \"#007bff\",\n      color: \"#fff\",\n      border: \"none\",\n      fontSize: \"1rem\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  }, showPassword ? \"Hide\" : \"Show\"));\n};\n_s(PasswordWithVisibilityToggle, \"daguiRHWMFkqPgCh/ppD7CF5VuQ=\");\n_c = PasswordWithVisibilityToggle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = Object(utils_auth__WEBPACK_IMPORTED_MODULE_6__[\"withAuth\"])(SecurePage));\nvar _c, _c2;\n$RefreshReg$(_c, \"PasswordWithVisibilityToggle\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VjdXJlLXBhZ2UudHN4PzU3N2YiXSwibmFtZXMiOlsiU2VjdXJlUGFnZSIsIl9Db21wb25lbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwiYXJndW1lbnRzIiwiX2luaGVyaXRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJfX2pzeCIsInN0eWxlIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJtYXJnaW5Ub3AiLCJfX3NlbGYiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsInRleHRBbGlnbiIsIm1hcmdpbkJvdHRvbSIsImNvbG9yIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsImJveFNoYWRvdyIsImZvbnRTaXplIiwiUGFzc3dvcmRXaXRoVmlzaWJpbGl0eVRvZ2dsZSIsIkNvbXBvbmVudCIsIl9zIiwiX3VzZVN0YXRlIiwidXNlU3RhdGUiLCJzaG93UGFzc3dvcmQiLCJzZXRTaG93UGFzc3dvcmQiLCJ0b2dnbGVQYXNzd29yZFZpc2liaWxpdHkiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsIl90aGlzIiwidHlwZSIsInJlYWRPbmx5IiwiZmxleCIsIm1hcmdpblJpZ2h0Iiwib25DbGljayIsImN1cnNvciIsIl9jIiwiX2MyIiwid2l0aEF1dGgiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ2I7QUFBQSxJQUVoQ0EsVUFBVSwwQkFBQUMsVUFBQTtFQUFBLFNBQUFELFdBQUE7SUFBQUUseUZBQUEsT0FBQUYsVUFBQTtJQUFBLE9BQUFHLFVBQUEsT0FBQUgsVUFBQSxFQUFBSSxTQUFBO0VBQUE7RUFBQUMsbUZBQUEsQ0FBQUwsVUFBQSxFQUFBQyxVQUFBO0VBQUEsT0FBQUssc0ZBQUEsQ0FBQU4s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QUFBQyxZQUFBO0lBQUE7RUFBQSxHQUM3TGUsWUFBWSxHQUFHLE1BQU0sR0FBRyxNQUNuQixDQUNMLENBQUM7QUFFVixDQUFDO0FBQUNILEVBQUEsQ0FwQklGLDRCQUE0QjtBQUFBaUIsRUFBQSxHQUE1QmpCLDRCQUE0QjtBQXNCbENrQixrRUFBQSxHQUFlQywyREFBUSxDQUFDakQsVUFBVSxDQUFDLEVBQUM7QUFBQSxJQUFBK0MsRUFBQSxFQUFBQyxHQUFBO0FBQUFFLFlBQUEsQ0FBQUgsRUFBQTtBQUFBRyxZQUFBLENBQUFGLEdBQUEiLCJmaWxlIjoiLi9wYWdlcy9zZWN1cmUtcGFnZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB3aXRoQXV0aCB9IGZyb20gXCJ1dGlscy9hdXRoXCI7XHJcblxyXG5jbGFzcyBTZWN1cmVQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1heFdpZHRoOiBcIjYwMHB4XCIsIG1hcmdpbjogXCJhdXRvXCIsIG1hcmdpblRvcDogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgPGgxIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luQm90dG9tOiBcIjIwcHhcIiwgY29sb3I6IFwiIzMzM1wiIH19PlNlY3VyZSBQYWdlPC9oMT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWQgI2NjY1wiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIHBhZGRpbmc6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y5ZjlmOVwiLCBib3hTaGFkb3c6IFwiMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKVwiLCBtYXJnaW5Ub3A6IFwiMjBweFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpbkJvdHRvbTogXCIyMHB4XCIsIGZvbnRTaXplOiBcIjEuMnJlbVwiIH19PlxyXG4gICAgICAgICAgICBZb3UgY2FuIG9ubHkgYWNjZXNzIHRoaXMgcGFnZSBpZiB5b3UgYXJlIGxvZ2dlZCBpbi5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwibGVmdFwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIywrBweFwiIH19PlxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+RW1haWw6PC9zdHJvbmc+IHVzZXJAZXhhbXBsZS5jb21cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICA8c3Ryb25nPlBhc3N3b3JkOjwvc3Ryb25nPntcIiBcIn1cclxuICAgICAgICAgICAgICA8UGFzc3dvcmRXaXRoVmlzaWJpbGl0eVRvZ2dsZSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBDb21wb25lbnQgZm9yIFBhc3N3b3JkIHdpdGggdmlzaWJpbGl0eSB0b2dnbGVcclxuY29uc3QgUGFzc3dvcmRXaXRoVmlzaWJpbGl0eVRvZ2dsZSA9ICgpID0+IHtcclxuICBjb25zdCBbc2hvd1Bhc3N3b3JkLCBzZXRTaG93UGFzc3dvcmRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB0b2dnbGVQYXNzd29yZFZpc2liaWxpdHkgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93UGFzc3dvcmQoIXNob3dQYXNzd29yZCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9e3Nob3dQYXNzd29yZCA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwifVxyXG4gICAgICAgIHZhbHVlPXtzaG93UGFzc3dvcmQgPyBcInBhc3N3b3JkMTIzXCIgOiBcIioqKioqKioqKlwifVxyXG4gICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgc3R5bGU9e3sgZmxleDogMSwgcGFkZGluZzogXCIxMHB4XCIsIGJvcmRlcjogXCIxcHggc29saWQgI2NjY1wiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgZm9udFNpemU6IFwiMXJlbVwiIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ2xlUGFzc3dvcmRWaXNpYmlsaXR5fSBzdHlsZT17eyBwYWRkaW5nOiBcIjEwcHggMjBweFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIGN1cnNvcjogXCJwb2ludGVyXCIsIGJhY2tncm91bmRDb2xvcjogXCIjMDA3YmZmXCIsIGNvbG9yOiBcIiNmZmZcIiwgYm9yZGVyOiBcIm5vbmVcIiwgZm9udFNpemU6IFwiMXJlbVwiIH19PlxyXG4gICAgICAgIHtzaG93UGFzc3dvcmQgPyBcIkhpZGVcIiA6IFwiU2hvd1wifVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChTZWN1cmVQYWdlKTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/secure-page.tsx\n");

/***/ })

})