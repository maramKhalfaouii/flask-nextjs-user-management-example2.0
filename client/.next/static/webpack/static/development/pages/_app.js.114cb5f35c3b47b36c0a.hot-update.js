webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/layout/footer.tsx":
/*!**************************************!*\
  !*** ./components/layout/footer.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar _templateObject,\n  _templateObject2,\n  _templateObject3,\n  _this = undefined,\n  _jsxFileName = \"/usr/src/app/components/layout/footer.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\nvar CustomFooter = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].footer(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  position: fixed; /* Fixed position to keep footer at the bottom of the viewport */\\n  bottom: 0;\\n  width: 100%;\\n  line-height: 60px;\\n  background-color: #f5f5f5;\\n  color: #ffffff; /* Set text color */\\n  padding: 0 20px; /* Add padding for better spacing */\\n\"])));\n_c = CustomFooter;\nvar FooterContent = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  max-width: 1200px; /* Limit width to prevent stretching on larger screens */\\n  margin: 0 auto; /* Center align content */\\n\"])));\n_c2 = FooterContent;\nvar FooterLink = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].a(_templateObject3 || (_templateObject3 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  color: #ffffff; /* Set link color */\\n  text-decoration: none; /* Remove default underline */\\n  transition: color 0.3s ease; /* Add smooth transition for color change */\\n  &:hover {\\n    color: #cccccc; /* Change color on hover */\\n  }\\n\"])));\n_c3 = FooterLink;\nvar Footer = function Footer() {\n  return __jsx(CustomFooter, {\n    className: \"bg-dark\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  }, __jsx(FooterContent, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, \"\\xA9 \", new Date().getFullYear(), \" Company Inc. All Rights Reserved\"), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, __jsx(FooterLink, {\n    href: \"https://github.com/martindavid/flask-react-docker-app\",\n    target: \"_blank\",\n    rel: \"noopener noreferrer\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 11\n    }\n  }, \"Github\"))));\n};\n_c4 = Footer;\nFooter.displayName = \"Footer\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\nvar _c, _c2, _c3, _c4;\n$RefreshReg$(_c, \"CustomFooter\");\n$RefreshReg$(_c2, \"FooterContent\");\n$RefreshReg$(_c3, \"FooterLink\");\n$RefreshReg$(_c4, \"Footer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9mb290ZXIudHN4PzQ1NmMiXSwibmFtZXMiOlsiQ3VzdG9tRm9vdGVyIiwic3R5bGVkIiwiZm9vdGVyIiwiX3RlbXBsYXRlT2JqZWN0IiwiX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbCIsIl9jIiwiRm9vdGVyQ29udGVudCIsImRpdiIsIl90ZW1wbGF0ZU9iamVjdDIiLCJfYzIiLCJGb290ZXJMaW5rIiwiYSIsIl90ZW1wbGF0ZU9iamVjdDMiLCJfYzMiLCJGb290ZXIiLCJfX2pzeCIsImNsYXNzTmFtZSIsIl9fc2VsZiIsIl90aGlzIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwiX2M0IiwiZGlzcGxheU5hbWUiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNhO0FBRXZDLElBQU1BLFlBQVksR0FBR0MseURBQU0sQ0FBQ0MsTUFBTSxDQUFBQyxlQUFBLEtBQUFBLGVBQUEsR0FBQUMsZ0dBQUEsbVJBUWpDO0FBQUNDLEVBQUEsR0FSSUwsWUFBWTtBQVVsQixJQUFNTSxhQUFhLEdBQUdMLHlEQUFNLENBQUNNLEdBQUcsQ0FBQUMsZ0JBQUEsS0FBQUEsZ0JBQUEsR0FBQUosZ0dBQUEscU5BTS9CO0FBQUNLLEdBQUEsR0FOSUgsYUFBYTtBQVFuQixJQUFNSSxVQUFVLEdBQUdULHlEQUFNLENBQUNVLENBQUMsQ0FBQUMsZ0JBQUEsS0FBQUEsZ0JBQUEsR0FBQVIsZ0dBQUEsMlBBTzFCO0FBQUNTLEdBQUEsR0FQSUgsVUFBVTtBQVNoQixJQUFNSSxNQUFNLEdBQUcsU0FBVEEsTUFBTUEsQ0FBQSxFQUFTO0VBQ25CLE9BQ0VDLEtBQUEsQ0FBQ2YsWUFBWTtJQUFDZ0IsU0FBUyxFQUFDLFNBQVM7SUFBQUMsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDL0JSLEtBQUEsQ0FBQ1QsYUFBYTtJQUFBVyxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNaUixLQUFBO0lBQUFFLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQU0sT0FBTyxFQUFDLElBQUlDLElBQUksQ0FBQyxDQUFDLENBQUNDLFdBQVcsQ0FBQyxDQUFDLEVBQUMsbUNBQXVDLENBQUMsRUFDL0VWLEtBQUE7SUFBQUUsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDRVIsS0FBQSxDQUFDTCxVQUFVO0lBQ1RnQixJQUFJLEVBQUMsdURBQXVEO0lBQzVEQyxNQUFNLEVBQUMsUUFBUTtJQUNmQyxHQUFHLEVBQUMscUJBQXFCO0lBQUFYLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQzFCLFFBRVcsQ0FDVCxDQUNRLENBQ0gsQ0FBQztBQUVuQixDQUFDO0FBQUNNLEdBQUEsR0FqQklmLE1BQU07QUFtQlpBLE1BQU0sQ0FBQ2dCLFdBQVcsR0FBRyxRQUFRO0FBRWRoQixxRUFBTSxFQUFDO0FBQUEsSUFBQVQsRUFBQSxFQUFBSSxHQUFBLEVBQUFJLEdBQUEsRUFBQWdCLEdBQUE7QUFBQUUsWUFBQSxDQUFBMUIsRUFBQTtBQUFBMEIsWUFBQSxDQUFBdEIsR0FBQTtBQUFBc0IsWUFBQSxDQUFBbEIsR0FBQTtBQUFBa0IsWUFBQSxDQUFBRixHQUFBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IEN1c3RvbUZvb3RlciA9IHN0eWxlZC5mb290ZXJgXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogRml4ZWQgcG9zaXRpb24gdG8ga2VlcCBmb290ZXIgYXQgdGhlIGJvdHRvbSBvZiB0aGUgdmlld3BvcnQgKi9cbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGNvbG9yOiAjZmZmZmZmOyAvKiBTZXQgdGV4dCBjb2xvciAqL1xuICBwYWRkaW5nOiAwIDIwcHg7IC8qIEFkZCBwYWRkaW5nIGZvciBiZXR0ZXIgc3BhY2luZyAqL1xuYDtcblxuY29uc3QgRm9vdGVyQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7IC8qIExpbWl0IHdpZHRoIHRvIHByZXZlbnQgc3RyZXRjaGluZyBvbiBsYXJnZXIgc2NyZWVucyAqL1xuICBtYXJnaW46IDAgYXV0bzsgLyogQ2VudGVyIGFsaWduIGNvbnRlbnQgKi9cbmA7XG5cbmNvbnN0IEZvb3RlckxpbmsgPSBzdHlsZWQuYWBcbiAgY29sb3I6ICNmZmZmZmY7IC8qIFNldCBsaW5rIGNvbG9yICovXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgLyogUmVtb3ZlIGRlZmF1bHQgdW5kZXJsaW5lICovXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTsgLyogQWRkIHNtb290aCB0cmFuc2l0aW9uIGZvciBjb2xvciBjaGFuZ2UgKi9cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICNjY2NjY2M7IC8qIENoYW5nZSBjb2xvciBvbiBob3ZlciAqL1xuICB9XG5gO1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEN1c3RvbUZvb3RlciBjbGFzc05hbWU9XCJiZy1kYXJrXCI+XG4gICAgICA8Rm9vdGVyQ29udGVudD5cbiAgICAgICAgPHNwYW4+JiMxNjk7IHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IENvbXBhbnkgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkPC9zcGFuPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxGb290ZXJMaW5rXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL21hcnRpbmRhdmlkL2ZsYXNrLXJlYWN0LWRvY2tlci1hcHBcIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEdpdGh1YlxuICAgICAgICAgIDwvRm9vdGVyTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0Zvb3RlckNvbnRlbnQ+XG4gICAgPC9DdXN0b21Gb290ZXI+XG4gICk7XG59O1xuXG5Gb290ZXIuZGlzcGxheU5hbWUgPSBcIkZvb3RlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/footer.tsx\n");

/***/ })

})