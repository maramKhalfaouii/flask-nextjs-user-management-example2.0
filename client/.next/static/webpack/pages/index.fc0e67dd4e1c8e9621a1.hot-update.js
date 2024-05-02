webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var utils_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/auth */ \"./utils/auth/index.ts\");\nvar _this = undefined,\n  _jsxFileName = \"/usr/src/app/pages/index.tsx\",\n  _s = $RefreshSig$();\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar Home = function Home() {\n  _s();\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([{\n      id: 1,\n      firstName: \"dev\",\n      lastName: \"ops\",\n      email: \"admin@gmail.com\",\n      admin: true\n    }, {\n      id: 2,\n      firstName: \"Jane\",\n      lastName: \"Doe\",\n      email: \"jane@example.com\",\n      admin: false\n    }, {\n      id: 3,\n      firstName: \"Jane\",\n      lastName: \"Doe\",\n      email: \"jane@example.com\",\n      admin: false\n    }, {\n      id: 4,\n      firstName: \"Jane\",\n      lastName: \"Doe\",\n      email: \"jane@example.com\",\n      admin: false\n    }, {\n      id: 5,\n      firstName: \"Jane\",\n      lastName: \"Doe\",\n      email: \"jane@example.com\",\n      admin: false\n    }\n    // Add more users here as needed\n    ]),\n    users = _useState[0],\n    setUsers = _useState[1];\n  var auth = Object(utils_auth__WEBPACK_IMPORTED_MODULE_1__[\"useAuth\"])();\n  return __jsx(\"div\", {\n    style: {\n      maxWidth: \"600px\",\n      margin: \"auto\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    style: {\n      textAlign: \"center\",\n      marginBottom: \"40px\",\n      color: \"#333\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, \"Welcome to our Home Page !\"), __jsx(\"div\", {\n    style: {\n      border: \"1px solid #ccc\",\n      borderRadius: \"5px\",\n      padding: \"20px\",\n      backgroundColor: \"#f9f9f9\",\n      boxShadow: \"0px 0px 10px rgba(0, 0, 0, 0.1)\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    style: {\n      textAlign: \"center\",\n      marginBottom: \"20px\",\n      color: \"#333\",\n      fontSize: \"1.2rem\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, \"Users List\"), __jsx(\"table\", {\n    style: {\n      width: \"100%\",\n      borderCollapse: \"collapse\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, __jsx(\"thead\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 11\n    }\n  }, __jsx(\"tr\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }, __jsx(\"th\", {\n    style: {\n      border: \"1px solid #ccc\",\n      padding: \"8px\",\n      backgroundColor: \"#f9f9f9\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 15\n    }\n  }, \"Name\"), __jsx(\"th\", {\n    style: {\n      border: \"1px solid #ccc\",\n      padding: \"8px\",\n      backgroundColor: \"#f9f9f9\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 15\n    }\n  }, \"Email\"), __jsx(\"th\", {\n    style: {\n      border: \"1px solid #ccc\",\n      padding: \"8px\",\n      backgroundColor: \"#f9f9f9\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 15\n    }\n  }, \"Status\"))), __jsx(\"tbody\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }\n  }, users.map(function (user) {\n    return __jsx(\"tr\", {\n      key: user.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 15\n      }\n    }, __jsx(\"td\", {\n      style: {\n        border: \"1px solid #ccc\",\n        padding: \"8px\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 17\n      }\n    }, user.firstName, \" \", user.lastName), __jsx(\"td\", {\n      style: {\n        border: \"1px solid #ccc\",\n        padding: \"8px\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }\n    }, user.email), __jsx(\"td\", {\n      style: {\n        border: \"1px solid #ccc\",\n        padding: \"8px\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 17\n      }\n    }, user.admin ? \"Admin\" : \"No\"));\n  })))));\n};\n_s(Home, \"ZH4lBa2AeQ4D7ytlCiZd56HH0bA=\", false, function () {\n  return [utils_auth__WEBPACK_IMPORTED_MODULE_1__[\"useAuth\"]];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSG9tZSIsIl9zIiwiX3VzZVN0YXRlIiwidXNlU3RhdGUiLCJpZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJhZG1pbiIsInVzZXJzIiwic2V0VXNlcnMiLCJhdXRoIiwidXNlQXV0aCIsIl9fanN4Iiwic3R5bGUiLCJtYXhXaWR0aCIsIm1hcmdpbiIsIl9fc2VsZiIsIl90aGlzIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Cb3R0b20iLCJjb2xvciIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3hTaGFkb3ciLCJmb250U2l6ZSIsIndpZHRoIiwiYm9yZGVyQ29sbGFwc2UiLCJtYXAiLCJ1c2VyIiwia2V5IiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdDO0FBQ0g7QUFFckMsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQUlBLENBQUEsRUFBUztFQUFBQyxFQUFBO0VBQ2pCLElBQUFDLFNBQUEsR0FBMEJDLHNEQUFRLENBQUMsQ0FDakM7TUFBRUMsRUFBRSxFQUFFLENBQUM7TUFBRUMsU0FBUyxFQUFFLEtBQUs7TUFBRUMsUUFBUSxFQUFFLEtBQUs7TUFBRUMsS0FBSyxFQUFFLGlCQUFpQjtNQUFFQyxLQUFLLEVBQUU7SUFBSyxDQUFDLEVBQ25GO01BQUVKLEVBQUUsRUFBRSxDQUFDO01BQUVDLFNBQVMsRUFBRSxNQUFNO01BQUVDLFFBQVEsRUFBRSxLQUFLO01BQUVDLEtBQUssRUFBRSxrQkFBa0I7TUFBRUMsS0FBSyxFQUFFO0lBQU0sQ0FBQyxFQUN0RjtNQUFFSixFQUFFLEVBQUUsQ0FBQztNQUFFQyxTQUFTLEVBQUUsTUFBTTtNQUFFQyxRQUFRLEVBQUUsS0FBSztNQUFFQyxLQUFLLEVBQUUsa0JBQWtCO01BQUVDLEtBQUssRUFBRTtJQUFNLENBQUMsRUFDdEY7TUFBRUosRUFBRSxFQUFFLENBQUM7TUFBRUMsU0FBUyxFQUFFLE1BQU07TUFBRUMsUUFBUSxFQUFFLEtBQUs7TUFBRUMsS0FBSyxFQUFFLGtCQUFrQjtNQUFFQyxLQUFLLEVBQUU7SUFBTSxDQUFDLEVBQ3RGO01BQUVKLEVBQUUsRUFBRSxDQUFDO01BQUVDLFNBQVMsRUFBRSxNQUFNO01BQUVDLFFBQVEsRUFBRSxLQUFLO01BQUVDLEtBQUssRUFBRSxrQkFBa0I7TUFBRUMsS0FBSyxFQUFFO0lBQU07SUFDckY7SUFBQSxDQUNELENBQUM7SUFQS0MsS0FBSyxHQUFBUCxTQUFBO0lBQUVRLFFBQVEsR0FBQVIsU0FBQTtFQVF0QixJQUFNUyxJQUFJLEdBQUdDLDBEQUFPLENBQUMsQ0FBQztFQUV0QixPQUNFQyxLQUFBO0lBQUtDLEtBQUssRUFBRTtNQUFFQyxRQUFRLEVBQUUsT0FBTztNQUFFQyxNQUFNLEVBQUU7SUFBTyxDQUFFO0lBQUFDLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ2hEVixLQUFBO0lBQUlDLEtBQUssRUFBRTtNQUFFVSxTQUFTLEVBQUUsUUFBUTtNQUFFQyxZQUFZLEVBQUUsTUFBTTtNQUFFQyxLQUFLLEVBQUU7SUFBTyxDQUFFO0lBQUFULE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQUMsNEJBQThCLENBQUMsRUFDeEdWLEtBQUE7SUFBS0MsS0FBSyxFQUFFO01BQUVhLE1BQU0sRUFBRSxnQkFBZ0I7TUFBRUMsWUFBWSxFQUFFLEtBQUs7TUFBRUMsT0FBTyxFQUFFLE1BQU07TUFBRUMsZUFBZSxFQUFFLFNBQVM7TUFBRUMsU0FBUyxFQUFFO0lBQWtDLENBQUU7SUFBQWQsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDdkpWLEtBQUE7SUFBSUMsS0FBSyxFQUFFO01BQUVVLFNBQVMsRUFBRSxRQUFRO01BQUVDLFlBQVksRUFBRSxNQUFNO01BQUVDLEtBQUssRUFBRSxNQUFNO01BQUVNLFFBQVEsRUFBRTtJQUFTLENBQUU7SUFBQWYsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FBQyxZQUFjLENBQUMsRUFDNUdWLEtBQUE7SUFBT0MsS0FBSyxFQUFFO01BQUVtQixLQUFLLEVBQUUsTUFBTTtNQUFFQyxjQUFjLEVBQUU7SUFBVyxDQUFFO0lBQUFqQixNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUMxRFYsS0FBQTtJQUFBSSxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNFVixLQUFBO0lBQUFJLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ0VWLEtBQUE7SUFBSUMsS0FBSyxFQUFFO01BQUVhLE1BQU0sRUFBRSxnQkFBZ0I7TUFBRUUsT0FBTyxFQUFFLEtBQUs7TUFBRUMsZUFBZSxFQUFFO0lBQVUsQ0FBRTtJQUFBYixNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUFDLE1BQVEsQ0FBQyxFQUM5RlYsS0FBQTtJQUFJQyxLQUFLLEVBQUU7TUFBRWEsTUFBTSxFQUFFLGdCQUFnQjtNQUFFRSxPQUFPLEVBQUUsS0FBSztNQUFFQyxlQUFlLEVBQUU7SUFBVSxDQUFFO0lBQUFiLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQUMsT0FBUyxDQUFDLEVBQy9GVixLQUFBO0lBQUlDLEtBQUssRUFBRTtNQUFFYSxNQUFNLEVBQUUsZ0JBQWdCO01BQUVFLE9BQU8sRUFBRSxLQUFLO01BQUVDLGVBQWUsRUFBRTtJQUFVLENBQUU7SUFBQWIsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FBQyxRQUFVLENBQzdGLENBQ0MsQ0FBQyxFQUNSVixLQUFBO0lBQUFJLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ0dkLEtBQUssQ0FBQzBCLEdBQUcsQ0FBQyxVQUFDQyxJQUFJO0lBQUEsT0FDZHZCLEtBQUE7TUFBSXdCLEdBQUcsRUFBRUQsSUFBSSxDQUFDaEMsRUFBRztNQUFBYSxNQUFBLEVBQUFDLEtBQUE7TUFBQUMsUUFBQTtRQUFBQyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUE7SUFBQSxHQUNmVixLQUFBO01BQUlDLEtBQUssRUFBRTtRQUFFYSxNQUFNLEVBQUUsZ0JBQWdCO1FBQUVFLE9BQU8sRUFBRTtNQUFNLENBQUU7TUFBQVosTUFBQSxFQUFBQyxLQUFBO01BQUFDLFFBQUE7UUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBO0lBQUEsR0FBRWEsSUFBSSxDQUFDL0IsU0FBUyxFQUFDLEdBQUMsRUFBQytCLElBQUksQ0FBQzlCLFFBQWEsQ0FBQyxFQUM5Rk8sS0FBQTtNQUFJQyxLQUFLLEVBQUU7UUFBRWEsTUFBTSxFQUFFLGdCQUFnQjtRQUFFRSxPQUFPLEVBQUU7TUFBTSxDQUFFO01BQUFaLE1BQUEsRUFBQUMsS0FBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLEdBQUVhLElBQUksQ0FBQzdCLEtBQVUsQ0FBQyxFQUMxRU0sS0FBQTtNQUFJQyxLQUFLLEVBQUU7UUFBRWEsTUFBTSxFQUFFLGdCQUFnQjtRQUFFRSxPQUFPLEVBQUU7TUFBTSxDQUFFO01BQUFaLE1BQUEsRUFBQUMsS0FBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLEdBQUVhLElBQUksQ0FBQzVCLEtBQUssR0FBRyxPQUFPLEdBQUcsSUFBUyxDQUN4RixDQUFDO0VBQUEsQ0FDTixDQUNJLENBQ0YsQ0FDSixDQUNGLENBQUM7QUFFVixDQUFDO0FBQUNQLEVBQUEsQ0FyQ0lELElBQUk7RUFBQSxRQVNLWSxrREFBTztBQUFBO0FBQUEwQixFQUFBLEdBVGhCdEMsSUFBSTtBQXVDS0EsbUVBQUksRUFBQztBQUFBLElBQUFzQyxFQUFBO0FBQUFDLFlBQUEsQ0FBQUQsRUFBQSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcInV0aWxzL2F1dGhcIjtcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPSB1c2VTdGF0ZShbXHJcbiAgICB7IGlkOiAxLCBmaXJzdE5hbWU6IFwiZGV2XCIsIGxhc3ROYW1lOiBcIm9wc1wiLCBlbWFpbDogXCJhZG1pbkBnbWFpbC5jb21cIiwgYWRtaW46IHRydWUgfSxcclxuICAgIHsgaWQ6IDIsIGZpcnN0TmFtZTogXCJKYW5lXCIsIGxhc3ROYW1lOiBcIkRvZVwiLCBlbWFpbDogXCJqYW5lQGV4YW1wbGUuY29tXCIsIGFkbWluOiBmYWxzZSB9LFxyXG4gICAgeyBpZDogMywgZmlyc3ROYW1lOiBcIkphbmVcIiwgbGFzdE5hbWU6IFwiRG9lXCIsIGVtYWlsOiBcImphbmVAZXhhbXBsZS5jb21cIiwgYWRtaW46IGZhbHNlIH0sXHJcbiAgICB7IGlkOiA0LCBmaXJzdE5hbWU6IFwiSmFuZVwiLCBsYXN0TmFtZTogXCJEb2VcIiwgZW1haWw6IFwiamFuZUBleGFtcGxlLmNvbVwiLCBhZG1pbjogZmFsc2UgfSxcclxuICAgIHsgaWQ6IDUsIGZpcnN0TmFtZTogXCJKYW5lXCIsIGxhc3ROYW1lOiBcIkRvZVwiLCBlbWFpbDogXCJqYW5lQGV4YW1wbGUuY29tXCIsIGFkbWluOiBmYWxzZSB9LFxyXG4gICAgLy8gQWRkIG1vcmUgdXNlcnMgaGVyZSBhcyBuZWVkZWRcclxuICBdKTtcclxuICBjb25zdCBhdXRoID0gdXNlQXV0aCgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyBtYXhXaWR0aDogXCI2MDBweFwiLCBtYXJnaW46IFwiYXV0b1wiIH19PlxyXG4gICAgICA8aDEgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW5Cb3R0b206IFwiNDBweFwiLCBjb2xvcjogXCIjMzMzXCIgfX0+V2VsY29tZSB0byBvdXIgSG9tZSBQYWdlICE8L2gxPlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWQgI2NjY1wiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIHBhZGRpbmc6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y5ZjlmOVwiLCBib3hTaGFkb3c6IFwiMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKVwiIH19PlxyXG4gICAgICAgIDxoMiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpbkJvdHRvbTogXCIyMHB4XCIsIGNvbG9yOiBcIiMzMzNcIiwgZm9udFNpemU6IFwiMS4ycmVtXCIgfX0+VXNlcnMgTGlzdDwvaDI+XHJcbiAgICAgICAgPHRhYmxlIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgYm9yZGVyQ29sbGFwc2U6IFwiY29sbGFwc2VcIiB9fT5cclxuICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkICNjY2NcIiwgcGFkZGluZzogXCI4cHhcIiwgYmFja2dyb3VuZENvbG9yOiBcIiNmOWY5ZjlcIiB9fT5OYW1lPC90aD5cclxuICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZCAjY2NjXCIsIHBhZGRpbmc6IFwiOHB4XCIsIGJhY2tncm91bmRDb2xvcjogXCIjZjlmOWY5XCIgfX0+RW1haWw8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkICNjY2NcIiwgcGFkZGluZzogXCI4cHhcIiwgYmFja2dyb3VuZENvbG9yOiBcIiNmOWY5ZjlcIiB9fT5TdGF0dXM8L3RoPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAge3VzZXJzLm1hcCgodXNlcikgPT4gKFxyXG4gICAgICAgICAgICAgIDx0ciBrZXk9e3VzZXIuaWR9PlxyXG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWQgI2NjY1wiLCBwYWRkaW5nOiBcIjhweFwiIH19Pnt1c2VyLmZpcnN0TmFtZX0ge3VzZXIubGFzdE5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkICNjY2NcIiwgcGFkZGluZzogXCI4cHhcIiB9fT57dXNlci5lbWFpbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWQgI2NjY1wiLCBwYWRkaW5nOiBcIjhweFwiIH19Pnt1c2VyLmFkbWluID8gXCJBZG1pblwiIDogXCJOb1wifTwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})