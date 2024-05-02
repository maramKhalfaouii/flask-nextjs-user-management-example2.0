module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/secure-page.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/secure-page.tsx":
/*!*******************************!*\
  !*** ./pages/secure-page.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var utils_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/auth */ \"./utils/auth/index.ts\");\nvar _jsxFileName = \"/usr/src/app/pages/secure-page.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nclass SecurePage extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return __jsx(\"div\", {\n      style: {\n        maxWidth: \"600px\",\n        margin: \"auto\",\n        marginTop: \"20px\"\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 7\n      }\n    }, __jsx(\"h1\", {\n      style: {\n        textAlign: \"center\",\n        marginBottom: \"20px\",\n        color: \"#333\"\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }\n    }, \"Secure Page\"), __jsx(\"div\", {\n      style: {\n        border: \"1px solid #ccc\",\n        borderRadius: \"5px\",\n        padding: \"20px\",\n        backgroundColor: \"#f9f9f9\",\n        boxShadow: \"0px 0px 10px rgba(0, 0, 0, 0.1)\",\n        marginTop: \"20px\"\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }\n    }, __jsx(\"div\", {\n      style: {\n        textAlign: \"center\",\n        marginBottom: \"35px\",\n        fontSize: \"1.2rem\"\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 11\n      }\n    }, \"You can only access this page if you are logged in.\"), __jsx(\"div\", {\n      style: {\n        textAlign: \"left\",\n        marginTop: \"10px\"\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 11\n      }\n    }, __jsx(\"div\", {\n      style: {\n        marginBottom: \"15px\"\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 13\n      }\n    }, __jsx(\"strong\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 15\n      }\n    }, \"Email:\"), \" yasmine@gmail.com\"), __jsx(\"div\", {\n      style: {\n        marginBottom: \"25px\"\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 13\n      }\n    }, __jsx(\"strong\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 15\n      }\n    }, \"Password:\"), \" \", __jsx(PasswordWithVisibilityToggle, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 15\n      }\n    })))));\n  }\n}\n\n// Component for Password with visibility toggle\nconst PasswordWithVisibilityToggle = () => {\n  const {\n    0: showPassword,\n    1: setShowPassword\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const togglePasswordVisibility = () => {\n    setShowPassword(!showPassword);\n  };\n  return __jsx(\"div\", {\n    style: {\n      display: \"flex\",\n      alignItems: \"center\"\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }\n  }, __jsx(\"input\", {\n    type: showPassword ? \"text\" : \"password\",\n    value: showPassword ? \"yasmine101866\" : \"*********\",\n    readOnly: true,\n    style: {\n      flex: 1,\n      padding: \"10px\",\n      border: \"1px solid #ccc\",\n      borderRadius: \"5px\",\n      marginRight: \"10px\",\n      fontSize: \"1rem\"\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }), __jsx(\"button\", {\n    onClick: togglePasswordVisibility,\n    style: {\n      padding: \"10px 20px\",\n      borderRadius: \"5px\",\n      cursor: \"pointer\",\n      backgroundColor: \"#007bff\",\n      color: \"#fff\",\n      border: \"none\",\n      fontSize: \"1rem\"\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  }, showPassword ? \"Hide\" : \"Show\"));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(utils_auth__WEBPACK_IMPORTED_MODULE_1__[\"withAuth\"])(SecurePage));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zZWN1cmUtcGFnZS50c3g/NTc3ZiJdLCJuYW1lcyI6WyJTZWN1cmVQYWdlIiwiQ29tcG9uZW50IiwicmVuZGVyIiwiX19qc3giLCJzdHlsZSIsIm1heFdpZHRoIiwibWFyZ2luIiwibWFyZ2luVG9wIiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Cb3R0b20iLCJjb2xvciIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3hTaGFkb3ciLCJmb250U2l6ZSIsIlBhc3N3b3JkV2l0aFZpc2liaWxpdHlUb2dnbGUiLCJzaG93UGFzc3dvcmQiLCJzZXRTaG93UGFzc3dvcmQiLCJ1c2VTdGF0ZSIsInRvZ2dsZVBhc3N3b3JkVmlzaWJpbGl0eSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwidHlwZSIsInZhbHVlIiwicmVhZE9ubHkiLCJmbGV4IiwibWFyZ2luUmlnaHQiLCJvbkNsaWNrIiwiY3Vyc29yIiwid2l0aEF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFtRDtBQUNiO0FBRXRDLE1BQU1BLFVBQVUsU0FBU0MsK0NBQVMsQ0FBQztFQUNqQ0MsTUFBTUEsQ0FBQSxFQUFHO0lBQ1AsT0FDRUMsS0FBQTtNQUFLQyxLQUFLLEVBQUU7UUFBRUMsUUFBUSxFQUFFLE9BQU87UUFBRUMsTUFBTSxFQUFFLE1BQU07UUFBRUMsU0FBUyxFQUFFO01BQU8sQ0FBRTtNQUFBQyxNQUFBO01BQUFDLFFBQUE7UUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBO0lBQUEsR0FDbkVWLEtBQUE7TUFBSUMsS0FBSyxFQUFFO1FBQUVVLFNBQVMsRUFBRSxRQUFRO1FBQUVDLFlBQVksRUFBRSxNQUFNO1FBQUVDLEtBQUssRUFBRTtNQUFPLENB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QUFFZCxPQUFPLEVBQUUsTUFBTTtNQUFFRixNQUFNLEVBQUUsZ0JBQWdCO01BQUVDLFlBQVksRUFBRSxLQUFLO01BQUVnQixXQUFXLEVBQUUsTUFBTTtNQUFFWixRQUFRLEVBQUU7SUFBTyxDQUFFO0lBQUFkLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUMzSCxDQUFDLEVBQ0ZWLEtBQUE7SUFBUWdDLE9BQU8sRUFBRVIsd0JBQXlCO0lBQUN2QixLQUFLLEVBQUU7TUFBRWUsT0FBTyxFQUFFLFdBQVc7TUFBRUQsWUFBWSxFQUFFLEtBQUs7TUFBRWtCLE1BQU0sRUFBRSxTQUFTO01BQUVoQixlQUFlLEVBQUUsU0FBUztNQUFFSixLQUFLLEVBQUUsTUFBTTtNQUFFQyxNQUFNLEVBQUUsTUFBTTtNQUFFSyxRQUFRLEVBQUU7SUFBTyxDQUFFO0lBQUFkLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUM3TFcsWUFBWSxHQUFHLE1BQU0sR0FBRyxNQUNuQixDQUNMLENBQUM7QUFFVixDQUFDO0FBRWNhLDBIQUFRLENBQUNyQyxVQUFVLENBQUMiLCJmaWxlIjoiLi9wYWdlcy9zZWN1cmUtcGFnZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB3aXRoQXV0aCB9IGZyb20gXCJ1dGlscy9hdXRoXCI7XHJcblxyXG5jbGFzcyBTZWN1cmVQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1heFdpZHRoOiBcIjYwMHB4XCIsIG1hcmdpbjogXCJhdXRvXCIsIG1hcmdpblRvcDogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgPGgxIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luQm90dG9tOiBcIjIwcHhcIiwgY29sb3I6IFwiIzMzM1wiIH19PlNlY3VyZSBQYWdlPC9oMT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWQgI2NjY1wiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIHBhZGRpbmc6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y5ZjlmOVwiLCBib3hTaGFkb3c6IFwiMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKVwiLCBtYXJnaW5Ub3A6IFwiMjBweFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpbkJvdHRvbTogXCIzNXB4XCIsIGZvbnRTaXplOiBcIjEuMnJlbVwiIH19PlxyXG4gICAgICAgICAgICBZb3UgY2FuIG9ubHkgYWNjZXNzIHRoaXMgcGFnZSBpZiB5b3UgYXJlIGxvZ2dlZCBpbi5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwibGVmdFwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5FbWFpbDo8L3N0cm9uZz4geWFzbWluZUBnbWFpbC5jb21cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjI1cHhcIiB9fT5cclxuICAgICAgICAgICAgICA8c3Ryb25nPlBhc3N3b3JkOjwvc3Ryb25nPntcIiBcIn1cclxuICAgICAgICAgICAgICA8UGFzc3dvcmRXaXRoVmlzaWJpbGl0eVRvZ2dsZSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBDb21wb25lbnQgZm9yIFBhc3N3b3JkIHdpdGggdmlzaWJpbGl0eSB0b2dnbGVcclxuY29uc3QgUGFzc3dvcmRXaXRoVmlzaWJpbGl0eVRvZ2dsZSA9ICgpID0+IHtcclxuICBjb25zdCBbc2hvd1Bhc3N3b3JkLCBzZXRTaG93UGFzc3dvcmRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB0b2dnbGVQYXNzd29yZFZpc2liaWxpdHkgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93UGFzc3dvcmQoIXNob3dQYXNzd29yZCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9e3Nob3dQYXNzd29yZCA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwifVxyXG4gICAgICAgIHZhbHVlPXtzaG93UGFzc3dvcmQgPyBcInlhc21pbmUxMDE4NjZcIiA6IFwiKioqKioqKioqXCJ9XHJcbiAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICBzdHlsZT17eyBmbGV4OiAxLCBwYWRkaW5nOiBcIjEwcHhcIiwgYm9yZGVyOiBcIjFweCBzb2xpZCAjY2NjXCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBmb250U2l6ZTogXCIxcmVtXCIgfX1cclxuICAgICAgLz5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVQYXNzd29yZFZpc2liaWxpdHl9IHN0eWxlPXt7IHBhZGRpbmc6IFwiMTBweCAyMHB4XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiwgYmFja2dyb3VuZENvbG9yOiBcIiMwMDdiZmZcIiwgY29sb3I6IFwiI2ZmZlwiLCBib3JkZXI6IFwibm9uZVwiLCBmb250U2l6ZTogXCIxcmVtXCIgfX0+XHJcbiAgICAgICAge3Nob3dQYXNzd29yZCA/IFwiSGlkZVwiIDogXCJTaG93XCJ9XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKFNlY3VyZVBhZ2UpO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/secure-page.tsx\n");

/***/ }),

/***/ "./utils/auth/auth-hook.tsx":
/*!**********************************!*\
  !*** ./utils/auth/auth-hook.tsx ***!
  \**********************************/
/*! exports provided: authContext, useAuth, ProvideAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authContext\", function() { return authContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useAuth\", function() { return useAuth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProvideAuth\", function() { return ProvideAuth; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/usr/src/app/utils/auth/auth-hook.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n// @ts-ignore\nconst authContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])(null);\n// Hook for child components to get the auth object ...\n// ... and re-render when it changes.\nconst useAuth = () => {\n  return Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(authContext);\n};\n\n// Provider component that wraps your app and makes auth object ...\n// ... available to any child component that calls useAuth().\nfunction ProvideAuth(props) {\n  return __jsx(authContext.Provider, {\n    value: props.auth,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, props.children);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9hdXRoL2F1dGgtaG9vay50c3g/NjM3NiJdLCJuYW1lcyI6WyJhdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VBdXRoIiwidXNlQ29udGV4dCIsIlByb3ZpZGVBdXRoIiwicHJvcHMiLCJfX2pzeCIsIlByb3ZpZGVyIiwidmFsdWUiLCJhdXRoIiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUQ7QUFHekQ7QUFDTyxNQUFNQSxXQUFXLGdCQUFHQywyREFBYSxDQUFtQixJQUFJLENBQUM7QUFPaEU7QUFDQTtBQUNPLE1BQU1DLE9BQU8sR0FBR0EsQ0FBQSxLQUF3QjtFQUM3QyxPQUFPQyx3REFBVSxDQUFDSCxXQUFXLENBQUM7QUFDaEMsQ0FBQzs7QUFFRDtBQUNBO0FBQ08sU0FBU0ksV0FBV0EsQ0FBQ0MsS0FBd0IsRUFBRTtFQUNwRCxPQUNFQyxLQUFBLENBQUNOLFdBQVcsQ0FBQ08sUUFBUTtJQUFDQyxLQUFLLEVBQUVILEtBQUssQ0FBQ0ksSUFBSztJQUFBQyxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDckNWLEtBQUssQ0FBQ1csUUFDYSxDQUFDO0FBRTNCIiwiZmlsZSI6Ii4vdXRpbHMvYXV0aC9hdXRoLWhvb2sudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXV0aFRva2VuIH0gZnJvbSBcIi4vYXV0aC10b2tlblwiO1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5leHBvcnQgY29uc3QgYXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0PEF1dGhUb2tlbiB8IG51bGw+KG51bGwpO1xyXG5cclxudHlwZSBQcm92aWRlckF1dGhQcm9wcyA9IHtcclxuICBhdXRoOiBBdXRoVG9rZW47XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB8IFJlYWN0LlJlYWN0Q2hpbGRyZW47XHJcbn07XHJcblxyXG4vLyBIb29rIGZvciBjaGlsZCBjb21wb25lbnRzIHRvIGdldCB0aGUgYXV0aCBvYmplY3QgLi4uXHJcbi8vIC4uLiBhbmQgcmUtcmVuZGVyIHdoZW4gaXQgY2hhbmdlcy5cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKTogQXV0aFRva2VuIHwgbnVsbCA9PiB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoYXV0aENvbnRleHQpO1xyXG59O1xyXG5cclxuLy8gUHJvdmlkZXIgY29tcG9uZW50IHRoYXQgd3JhcHMgeW91ciBhcHAgYW5kIG1ha2VzIGF1dGggb2JqZWN0IC4uLlxyXG4vLyAuLi4gYXZhaWxhYmxlIHRvIGFueSBjaGlsZCBjb21wb25lbnQgdGhhdCBjYWxscyB1c2VBdXRoKCkuXHJcbmV4cG9ydCBmdW5jdGlvbiBQcm92aWRlQXV0aChwcm9wczogUHJvdmlkZXJBdXRoUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtwcm9wcy5hdXRofT5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9hdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/auth/auth-hook.tsx\n");

/***/ }),

/***/ "./utils/auth/auth-token.ts":
/*!**********************************!*\
  !*** ./utils/auth/auth-token.ts ***!
  \**********************************/
/*! exports provided: AuthToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthToken\", function() { return AuthToken; });\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ \"jwt-decode\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_0__);\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == typeof i ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != typeof i) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\nclass AuthToken {\n  constructor(token) {\n    this.token = token;\n    _defineProperty(this, \"decodedToken\", void 0);\n    // we are going to default to an expired decodedToken\n    this.decodedToken = {\n      id: 0,\n      exp: 0,\n      iat: 0\n    };\n\n    // then try and decode the jwt using jwt-decode\n    try {\n      if (token) this.decodedToken = jwt_decode__WEBPACK_IMPORTED_MODULE_0___default()(token);\n    } catch (e) {}\n  }\n  get authorizationString() {\n    return `Bearer ${this.token}`;\n  }\n  get expiresAt() {\n    return new Date(this.decodedToken.exp * 1000);\n  }\n  get isExpired() {\n    return new Date() > this.expiresAt;\n  }\n  get isValid() {\n    return !this.isExpired;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9hdXRoL2F1dGgtdG9rZW4udHM/MWUyOSJdLCJuYW1lcyI6WyJBdXRoVG9rZW4iLCJjb25zdHJ1Y3RvciIsInRva2VuIiwiX2RlZmluZVByb3BlcnR5IiwiZGVjb2RlZFRva2VuIiwiaWQiLCJleHAiLCJpYXQiLCJqd3REZWNvZGUiLCJlIiwiYXV0aG9yaXphdGlvblN0cmluZyIsImV4cGlyZXNBdCIsIkRhdGUiLCJpc0V4cGlyZWQiLCJpc1ZhbGlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW1DO0FBUTVCLE1BQU1BLFNBQVMsQ0FBQztFQUdyQkMsV0FBV0EsQ0FBVUMsS0FBYyxFQUFFO0lBQUEsS0FBaEJBLEtBQWMsR0FBZEEsS0FBYztJQUFBQyxlQUFBO0lBQ2pDO0lBQ0EsSUFBSSxDQUFDQyxZQUFZLEdBQUc7TUFBRUMsRUFBRSxFQUFFLENBQUM7TUFBRUMsR0FBRyxFQUFFLENBQUM7TUFBRUMsR0FBRyxFQUFFO0lBQUUsQ0FBQzs7SUFFN0M7SUFDQSxJQUFJO01BQ0YsSUFBSUwsS0FBSyxFQUFFLElBQUksQ0FBQ0UsWUFBWSxHQUFHSSxpREFBUyxDQUFDTixLQUFLLENBQUM7SUFDakQsQ0FBQyxDQUFDLE9BQU9PLENBQUMsRUFBRSxDQUFDO0VBQ2Y7RUFFQSxJQUFJQyxtQkFBbUJBLENBQUEsRUFBRztJQUN4QixPQUFRLFVBQVMsSUFBSSxDQUFDUixLQUFNLEVBQUM7RUFDL0I7RUFFQSxJQUFJUyxTQUFTQSxDQUFBLEVBQVM7SUFDcEIsT0FBTyxJQUFJQyxJQUFJLENBQUMsSUFBSSxDQUFDUixZQUFZLENBQUNFLEdBQUcsR0FBRyxJQUFJLENBQUM7RUFDL0M7RUFFQSxJQUFJTyxTQUFTQSxDQUFBLEVBQVk7SUFDdkIsT0FBTyxJQUFJRCxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQ0QsU0FBUztFQUNwQztFQUVBLElBQUlHLE9BQU9BLENBQUEsRUFBWTtJQUNyQixPQUFPLENBQUMsSUFBSSxDQUFDRCxTQUFTO0VBQ3hCO0FBQ0YiLCJmaWxlIjoiLi91dGlscy9hdXRoL2F1dGgtdG9rZW4udHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0RGVjb2RlIGZyb20gXCJqd3QtZGVjb2RlXCI7XHJcblxyXG5leHBvcnQgdHlwZSBEZWNvZGVkVG9rZW4gPSB7XHJcbiAgcmVhZG9ubHkgZXhwOiBudW1iZXI7XHJcbiAgcmVhZG9ubHkgaWF0OiBudW1iZXI7XHJcbiAgcmVhZG9ubHkgaWQ6IG51bWJlcjtcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRoVG9rZW4ge1xyXG4gIHJlYWRvbmx5IGRlY29kZWRUb2tlbjogRGVjb2RlZFRva2VuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihyZWFkb25seSB0b2tlbj86IHN0cmluZykge1xyXG4gICAgLy8gd2UgYXJlIGdvaW5nIHRvIGRlZmF1bHQgdG8gYW4gZXhwaXJlZCBkZWNvZGVkVG9rZW5cclxuICAgIHRoaXMuZGVjb2RlZFRva2VuID0geyBpZDogMCwgZXhwOiAwLCBpYXQ6IDAgfTtcclxuXHJcbiAgICAvLyB0aGVuIHRyeSBhbmQgZGVjb2RlIHRoZSBqd3QgdXNpbmcgand0LWRlY29kZVxyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKHRva2VuKSB0aGlzLmRlY29kZWRUb2tlbiA9IGp3dERlY29kZSh0b2tlbik7XHJcbiAgICB9IGNhdGNoIChlKSB7fVxyXG4gIH1cclxuXHJcbiAgZ2V0IGF1dGhvcml6YXRpb25TdHJpbmcoKSB7XHJcbiAgICByZXR1cm4gYEJlYXJlciAke3RoaXMudG9rZW59YDtcclxuICB9XHJcblxyXG4gIGdldCBleHBpcmVzQXQoKTogRGF0ZSB7XHJcbiAgICByZXR1cm4gbmV3IERhdGUodGhpcy5kZWNvZGVkVG9rZW4uZXhwICogMTAwMCk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNFeHBpcmVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKCkgPiB0aGlzLmV4cGlyZXNBdDtcclxuICB9XHJcblxyXG4gIGdldCBpc1ZhbGlkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICF0aGlzLmlzRXhwaXJlZDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/auth/auth-token.ts\n");

/***/ }),

/***/ "./utils/auth/auth.tsx":
/*!*****************************!*\
  !*** ./utils/auth/auth.tsx ***!
  \*****************************/
/*! exports provided: TOKEN_STORAGE_NAME, login, logout, withAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TOKEN_STORAGE_NAME\", function() { return TOKEN_STORAGE_NAME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logout\", function() { return logout; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"withAuth\", function() { return withAuth; });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redirect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./redirect */ \"./utils/auth/redirect.tsx\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/usr/src/app/utils/auth/auth.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\nconst TOKEN_STORAGE_NAME = \"app.authToken\";\nfunction login(token) {\n  nookies__WEBPACK_IMPORTED_MODULE_3___default.a.set(null, TOKEN_STORAGE_NAME, token, {\n    maxAge: 7 * 24 * 60 * 60,\n    path: \"/\"\n  });\n  next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push(\"/\");\n}\nfunction logout() {\n  js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.remove(TOKEN_STORAGE_NAME, {\n    path: \"/\"\n  });\n  // to support logging out from all windows\n  window.localStorage.setItem(\"logout\", Date.now().toString());\n}\nfunction withAuth(WrappedComponent) {\n  return class AuthWrapper extends react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"] {\n    static async getInitialProps(ctx, props) {\n      const {\n        auth\n      } = props;\n      if (!auth || auth && auth.isExpired) {\n        Object(_redirect__WEBPACK_IMPORTED_MODULE_2__[\"redirectToLogin\"])(ctx.res);\n      }\n      const initialProps = {\n        auth\n      };\n      if (WrappedComponent.getInitialProps) {\n        return WrappedComponent.getInitialProps(ctx, initialProps);\n      }\n      return initialProps;\n    }\n    render() {\n      return __jsx(WrappedComponent, _extends({}, this.props, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 14\n        }\n      }));\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9hdXRoL2F1dGgudHN4P2U5YWEiXSwibmFtZXMiOlsiVE9LRU5fU1RPUkFHRV9OQU1FIiwibG9naW4iLCJ0b2tlbiIsIm5vb2tpZXMiLCJzZXQiLCJtYXhBZ2UiLCJwYXRoIiwiUm91dGVyIiwicHVzaCIsImxvZ291dCIsIkNvb2tpZXMiLCJyZW1vdmUiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiRGF0ZSIsIm5vdyIsInRvU3RyaW5nIiwid2l0aEF1dGgiLCJXcmFwcGVkQ29tcG9uZW50IiwiQXV0aFdyYXBwZXIiLCJDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJwcm9wcyIsImF1dGgiLCJpc0V4cGlyZWQiLCJyZWRpcmVjdFRvTG9naW4iLCJyZXMiLCJpbml0aWFsUHJvcHMiLCJyZW5kZXIiLCJfX2pzeCIsIl9leHRlbmRzIiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBRVE7QUFFSTtBQUNmO0FBQ0U7QUFFekIsTUFBTUEsa0JBQWtCLEdBQUcsZUFBZTtBQUUxQyxTQUFTQyxLQUFLQSxDQUFDQyxLQUFhLEVBQUU7RUFDbkNDLDhDQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLEVBQUVKLGtCQUFrQixFQUFFRSxLQUFLLEVBQUU7SUFDM0NHLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO0lBQ3hCQyxJQUFJLEVBQUU7RUFDUixDQUFDLENBQUM7RUFDRkMsa0RBQU0sQ0FBQ0MsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUNsQjtBQUVPLFNBQVNDLE1BQU1BLENBQUEsRUFBRztFQUN2QkMsZ0RBQU8sQ0FBQ0MsTUFBTSxDQUFDWCxrQkFBa0IsRUFBRTtJQUFFTSxJQUFJLEVBQUU7RUFBSSxDQUFDLENBQUM7RUFDakQ7RUFDQU0sTUFBTSxDQUFDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxRQUFRLEVBQUVDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUM5RDtBQU1PLFNBQVNDLFFBQVFBLENBQUNDLGdCQUFxQixFQUFFO0VBQzlDLE9BQU8sTUFBTUMsV0FBVyxTQUFTQywrQ0FBUyxDQUFZO0lBQ3BELGFBQWFDLGVBQWVBLENBQUNDLEdBQW9CLEVBQUVDLEtBQWdCLEVBQUU7TUFDbkUsTUFBTTtRQUFFQztNQUFLLENBQUMsR0FBR0QsS0FBSztNQUN0QixJQUFJLENBQUNDLElBQUksSUFBS0EsSUFBSSxJQUFJQSxJQUFJLENBQUNDLFNBQVUsRUFBRTtRQUNyQ0MsaUVBQWUsQ0FBQ0osR0FBRyxDQUFDSyxHQUFHLENBQUM7TUFDMUI7TUFDQSxNQUFNQyxZQUFZLEdBQUc7UUFBRUo7TUFBSyxDQUFDO01BQzdCLElBQUlOLGdCQUFnQixDQUFDRyxlQUFlLEVBQUU7UUFDcEMsT0FBT0gsZ0JBQWdCLENBQUNHLGVBQWUsQ0FBQ0MsR0FBRyxFQUFFTSxZQUFZLENBQUM7TUFDNUQ7TUFDQSxPQUFPQSxZQUFZO0lBQ3JCO0lBRUFDLE1BQU1BLENBQUEsRUFBRztNQUNQLE9BQU9DLEtBQUEsQ0FBQ1osZ0JBQWdCLEVBQUFhLFFBQUEsS0FBSyxJQUFJLENBQUNSLEtBQUs7UUFBQVMsTUFBQTtRQUFBQyxRQUFBO1VBQUFDLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQTtNQUFBLEVBQUcsQ0FBQztJQUM3QztFQUNGLENBQUM7QUFDSCIsImZpbGUiOiIuL3V0aWxzL2F1dGgvYXV0aC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBOZXh0UGFnZUNvbnRleHQgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEF1dGhUb2tlbiB9IGZyb20gXCIuL2F1dGgtdG9rZW5cIjtcclxuaW1wb3J0IHsgcmVkaXJlY3RUb0xvZ2luIH0gZnJvbSBcIi4vcmVkaXJlY3RcIjtcclxuaW1wb3J0IG5vb2tpZXMgZnJvbSBcIm5vb2tpZXNcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRPS0VOX1NUT1JBR0VfTkFNRSA9IFwiYXBwLmF1dGhUb2tlblwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2luKHRva2VuOiBzdHJpbmcpIHtcclxuICBub29raWVzLnNldChudWxsLCBUT0tFTl9TVE9SQUdFX05BTUUsIHRva2VuLCB7XHJcbiAgICBtYXhBZ2U6IDcgKiAyNCAqIDYwICogNjAsXHJcbiAgICBwYXRoOiBcIi9cIixcclxuICB9KTtcclxuICBSb3V0ZXIucHVzaChcIi9cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2dvdXQoKSB7XHJcbiAgQ29va2llcy5yZW1vdmUoVE9LRU5fU1RPUkFHRV9OQU1FLCB7IHBhdGg6IFwiL1wiIH0pO1xyXG4gIC8vIHRvIHN1cHBvcnQgbG9nZ2luZyBvdXQgZnJvbSBhbGwgd2luZG93c1xyXG4gIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvZ291dFwiLCBEYXRlLm5vdygpLnRvU3RyaW5nKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBBdXRoUHJvcHMgPSB7XHJcbiAgYXV0aDogQXV0aFRva2VuO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdpdGhBdXRoKFdyYXBwZWRDb21wb25lbnQ6IGFueSkge1xyXG4gIHJldHVybiBjbGFzcyBBdXRoV3JhcHBlciBleHRlbmRzIENvbXBvbmVudDxBdXRoUHJvcHM+IHtcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoY3R4OiBOZXh0UGFnZUNvbnRleHQsIHByb3BzOiBBdXRoUHJvcHMpIHtcclxuICAgICAgY29uc3QgeyBhdXRoIH0gPSBwcm9wcztcclxuICAgICAgaWYgKCFhdXRoIHx8IChhdXRoICYmIGF1dGguaXNFeHBpcmVkKSkge1xyXG4gICAgICAgIHJlZGlyZWN0VG9Mb2dpbihjdHgucmVzKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBpbml0aWFsUHJvcHMgPSB7IGF1dGggfTtcclxuICAgICAgaWYgKFdyYXBwZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XHJcbiAgICAgICAgcmV0dXJuIFdyYXBwZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCwgaW5pdGlhbFByb3BzKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaW5pdGlhbFByb3BzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgcmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSAvPjtcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/auth/auth.tsx\n");

/***/ }),

/***/ "./utils/auth/index.ts":
/*!*****************************!*\
  !*** ./utils/auth/index.ts ***!
  \*****************************/
/*! exports provided: TOKEN_STORAGE_NAME, login, logout, withAuth, AuthToken, authContext, useAuth, ProvideAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth */ \"./utils/auth/auth.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TOKEN_STORAGE_NAME\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"TOKEN_STORAGE_NAME\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"login\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"logout\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"logout\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"withAuth\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"withAuth\"]; });\n\n/* harmony import */ var _auth_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-token */ \"./utils/auth/auth-token.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AuthToken\", function() { return _auth_token__WEBPACK_IMPORTED_MODULE_1__[\"AuthToken\"]; });\n\n/* harmony import */ var _auth_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-hook */ \"./utils/auth/auth-hook.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"authContext\", function() { return _auth_hook__WEBPACK_IMPORTED_MODULE_2__[\"authContext\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"useAuth\", function() { return _auth_hook__WEBPACK_IMPORTED_MODULE_2__[\"useAuth\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ProvideAuth\", function() { return _auth_hook__WEBPACK_IMPORTED_MODULE_2__[\"ProvideAuth\"]; });\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9hdXRoL2luZGV4LnRzP2FiZTEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1QjtBQUNNIiwiZmlsZSI6Ii4vdXRpbHMvYXV0aC9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCIuL2F1dGhcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vYXV0aC10b2tlblwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9hdXRoLWhvb2tcIjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/auth/index.ts\n");

/***/ }),

/***/ "./utils/auth/redirect.tsx":
/*!*********************************!*\
  !*** ./utils/auth/redirect.tsx ***!
  \*********************************/
/*! exports provided: redirectToLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"redirectToLogin\", function() { return redirectToLogin; });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n\nconst redirectToLogin = server => {\n  const login = \"/login?redirected=true\";\n  if (server) {\n    // @see https://github.com/zeit/next.js/wiki/Redirecting-in-%60getInitialProps%60\n    // server rendered pages need to do a server redirect\n    server.writeHead(302, {\n      Location: login\n    });\n    server.end();\n  } else {\n    // only client side pages have access to next/router\n    next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push(login);\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9hdXRoL3JlZGlyZWN0LnRzeD82ZTUxIl0sIm5hbWVzIjpbInJlZGlyZWN0VG9Mb2dpbiIsInNlcnZlciIsImxvZ2luIiwid3JpdGVIZWFkIiwiTG9jYXRpb24iLCJlbmQiLCJSb3V0ZXIiLCJwdXNoIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFpQztBQUUxQixNQUFNQSxlQUFlLEdBQUlDLE1BQXVCLElBQUs7RUFDMUQsTUFBTUMsS0FBSyxHQUFHLHdCQUF3QjtFQUN0QyxJQUFJRCxNQUFNLEVBQUU7SUFDVjtJQUNBO0lBQ0FBLE1BQU0sQ0FBQ0UsU0FBUyxDQUFDLEdBQUcsRUFBRTtNQUNwQkMsUUFBUSxFQUFFRjtJQUNaLENBQUMsQ0FBQztJQUNGRCxNQUFNLENBQUNJLEdBQUcsQ0FBQyxDQUFDO0VBQ2QsQ0FBQyxNQUFNO0lBQ0w7SUFDQUMsa0RBQU0sQ0FBQ0MsSUFBSSxDQUFDTCxLQUFLLENBQUM7RUFDcEI7QUFDRixDQUFDIiwiZmlsZSI6Ii4vdXRpbHMvYXV0aC9yZWRpcmVjdC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gXCJodHRwXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVkaXJlY3RUb0xvZ2luID0gKHNlcnZlcj86IFNlcnZlclJlc3BvbnNlKSA9PiB7XHJcbiAgY29uc3QgbG9naW4gPSBcIi9sb2dpbj9yZWRpcmVjdGVkPXRydWVcIjtcclxuICBpZiAoc2VydmVyKSB7XHJcbiAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS96ZWl0L25leHQuanMvd2lraS9SZWRpcmVjdGluZy1pbi0lNjBnZXRJbml0aWFsUHJvcHMlNjBcclxuICAgIC8vIHNlcnZlciByZW5kZXJlZCBwYWdlcyBuZWVkIHRvIGRvIGEgc2VydmVyIHJlZGlyZWN0XHJcbiAgICBzZXJ2ZXIud3JpdGVIZWFkKDMwMiwge1xyXG4gICAgICBMb2NhdGlvbjogbG9naW4sXHJcbiAgICB9KTtcclxuICAgIHNlcnZlci5lbmQoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gb25seSBjbGllbnQgc2lkZSBwYWdlcyBoYXZlIGFjY2VzcyB0byBuZXh0L3JvdXRlclxyXG4gICAgUm91dGVyLnB1c2gobG9naW4pO1xyXG4gIH1cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/auth/redirect.tsx\n");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"js-cookie\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIj8wM2MxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImpzLWNvb2tpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///js-cookie\n");

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jwt-decode\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqd3QtZGVjb2RlXCI/M2U5OSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJqd3QtZGVjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiand0LWRlY29kZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///jwt-decode\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nookies\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub29raWVzXCI/ZDk3NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJub29raWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9va2llc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///nookies\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });