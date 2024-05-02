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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/usr/src/app/pages/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/*import { useAuth } from \"utils/auth\";*/\n\nconst Home = () => {\n  const {\n    0: users /*setUsers*/\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([{\n    id: 1,\n    firstName: \"admin\",\n    lastName: \"admin\",\n    email: \"admin@gmail.com\",\n    admin: true\n  }, {\n    id: 2,\n    firstName: \"Yasmine\",\n    lastName: \"Oumaya\",\n    email: \"yasmine@gmail.com\",\n    admin: false\n  }, {\n    id: 3,\n    firstName: \"Maram\",\n    lastName: \"Khalfaoui\",\n    email: \"maram12@enit.com\",\n    admin: false\n  }, {\n    id: 4,\n    firstName: \"dev\",\n    lastName: \"ops\",\n    email: \"devops@outlook.com\",\n    admin: false\n  }, {\n    id: 5,\n    firstName: \"user\",\n    lastName: \"app\",\n    email: \"user@gmail.com\",\n    admin: false\n  }]);\n  /*const auth = useAuth();*/\n\n  return __jsx(\"div\", {\n    style: {\n      maxWidth: \"600px\",\n      margin: \"auto\"\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    style: {\n      textAlign: \"center\",\n      marginBottom: \"40px\",\n      color: \"#333\"\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, \"Welcome to our Home Page !\"), __jsx(\"div\", {\n    style: {\n      border: \"1px solid #ccc\",\n      borderRadius: \"5px\",\n      padding: \"20px\",\n      backgroundColor: \"#f9f9f9\",\n      boxShadow: \"0px 0px 10px rgba(0, 0, 0, 0.1)\"\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    style: {\n      textAlign: \"center\",\n      marginBottom: \"20px\",\n      color: \"#333\",\n      fontSize: \"1.2rem\"\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, \"Users List\"), __jsx(\"table\", {\n    style: {\n      width: \"100%\",\n      borderCollapse: \"collapse\"\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, __jsx(\"thead\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 11\n    }\n  }, __jsx(\"tr\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  }, __jsx(\"th\", {\n    style: {\n      border: \"1px solid #ccc\",\n      padding: \"8px\",\n      backgroundColor: \"#f9f9f9\"\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 15\n    }\n  }, \"Name\"), __jsx(\"th\", {\n    style: {\n      border: \"1px solid #ccc\",\n      padding: \"8px\",\n      backgroundColor: \"#f9f9f9\"\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 15\n    }\n  }, \"Email\"), __jsx(\"th\", {\n    style: {\n      border: \"1px solid #ccc\",\n      padding: \"8px\",\n      backgroundColor: \"#f9f9f9\"\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 15\n    }\n  }, \"Status\"))), __jsx(\"tbody\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }, users.map(user => __jsx(\"tr\", {\n    key: user.id,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 15\n    }\n  }, __jsx(\"td\", {\n    style: {\n      border: \"1px solid #ccc\",\n      padding: \"8px\"\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 17\n    }\n  }, user.firstName, \" \", user.lastName), __jsx(\"td\", {\n    style: {\n      border: \"1px solid #ccc\",\n      padding: \"8px\"\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 17\n    }\n  }, user.email), __jsx(\"td\", {\n    style: {\n      border: \"1px solid #ccc\",\n      padding: \"8px\"\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 17\n    }\n  }, user.admin ? \"Admin\" : \"No\")))))));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJIb21lIiwidXNlcnMiLCJ1c2VTdGF0ZSIsImlkIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsImFkbWluIiwiX19qc3giLCJzdHlsZSIsIm1heFdpZHRoIiwibWFyZ2luIiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Cb3R0b20iLCJjb2xvciIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3hTaGFkb3ciLCJmb250U2l6ZSIsIndpZHRoIiwiYm9yZGVyQ29sbGFwc2UiLCJtYXAiLCJ1c2VyIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7OztBQUF3QztBQUN4Qzs7QUFFQSxNQUFNQSxJQUFJLEdBQUdBLENBQUEsS0FBTTtFQUNqQixNQUFNO0lBQUEsR0FBQ0MsS0FBSyxDQUFFO0VBQUEsSUFBZ0JDLHNEQUFRLENBQUMsQ0FDckM7SUFBRUMsRUFBRSxFQUFFLENBQUM7SUFBRUMsU0FBUyxFQUFFLE9BQU87SUFBRUMsUUFBUSxFQUFFLE9BQU87SUFBRUMsS0FBSyxFQUFFLGlCQUFpQjtJQUFFQyxLQUFLLEVBQUU7RUFBSyxDQUFDLEVBQ3ZGO0lBQUVKLEVBQUUsRUFBRSxDQUFDO0lBQUVDLFNBQVMsRUFBRSxTQUFTO0lBQUVDLFFBQVEsRUFBRSxRQUFRO0lBQUVDLEtBQUssRUFBRSxtQkFBbUI7SUFBRUMsS0FBSyxFQUFFO0VBQU0sQ0FBQyxFQUM3RjtJQUFFSixFQUFFLEVBQUUsQ0FBQztJQUFFQyxTQUFTLEVBQUUsT0FBTztJQUFFQyxRQUFRLEVBQUUsV0FBVztJQUFFQyxLQUFLLEVBQUUsa0JBQWtCO0lBQUVDLEtBQUssRUFBRTtFQUFNLENBQUMsRUFDN0Y7SUFBRUosRUFBRSxFQUFFLENB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YSxJQUFJLENBQUN2QixLQUFLLEdBQUcsT0FBTyxHQUFHLElBQVMsQ0FDeEYsQ0FDTCxDQUNJLENBQ0YsQ0FDSixDQUNGLENBQUM7QUFFVixDQUFDO0FBRWNQLG1FQUFJIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8qaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCJ1dGlscy9hdXRoXCI7Ki9cclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3VzZXJzLCAvKnNldFVzZXJzKi9dID0gdXNlU3RhdGUoW1xyXG4gICAgeyBpZDogMSwgZmlyc3ROYW1lOiBcImFkbWluXCIsIGxhc3ROYW1lOiBcImFkbWluXCIsIGVtYWlsOiBcImFkbWluQGdtYWlsLmNvbVwiLCBhZG1pbjogdHJ1ZSB9LFxyXG4gICAgeyBpZDogMiwgZmlyc3ROYW1lOiBcIllhc21pbmVcIiwgbGFzdE5hbWU6IFwiT3VtYXlhXCIsIGVtYWlsOiBcInlhc21pbmVAZ21haWwuY29tXCIsIGFkbWluOiBmYWxzZSB9LFxyXG4gICAgeyBpZDogMywgZmlyc3ROYW1lOiBcIk1hcmFtXCIsIGxhc3ROYW1lOiBcIktoYWxmYW91aVwiLCBlbWFpbDogXCJtYXJhbTEyQGVuaXQuY29tXCIsIGFkbWluOiBmYWxzZSB9LFxyXG4gICAgeyBpZDogNCwgZmlyc3ROYW1lOiBcImRldlwiLCBsYXN0TmFtZTogXCJvcHNcIiwgZW1haWw6IFwiZGV2b3BzQG91dGxvb2suY29tXCIsIGFkbWluOiBmYWxzZSB9LFxyXG4gICAgeyBpZDogNSwgZmlyc3ROYW1lOiBcInVzZXJcIiwgbGFzdE5hbWU6IFwiYXBwXCIsIGVtYWlsOiBcInVzZXJAZ21haWwuY29tXCIsIGFkbWluOiBmYWxzZSB9LFxyXG4gIF0pO1xyXG4gIC8qY29uc3QgYXV0aCA9IHVzZUF1dGgoKTsqL1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyBtYXhXaWR0aDogXCI2MDBweFwiLCBtYXJnaW46IFwiYXV0b1wiIH19PlxyXG4gICAgICA8aDEgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW5Cb3R0b206IFwiNDBweFwiLCBjb2xvcjogXCIjMzMzXCIgfX0+V2VsY29tZSB0byBvdXIgSG9tZSBQYWdlICE8L2gxPlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWQgI2NjY1wiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIHBhZGRpbmc6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y5ZjlmOVwiLCBib3hTaGFkb3c6IFwiMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKVwiIH19PlxyXG4gICAgICAgIDxoMiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpbkJvdHRvbTogXCIyMHB4XCIsIGNvbG9yOiBcIiMzMzNcIiwgZm9udFNpemU6IFwiMS4ycmVtXCIgfX0+VXNlcnMgTGlzdDwvaDI+XHJcbiAgICAgICAgPHRhYmxlIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgYm9yZGVyQ29sbGFwc2U6IFwiY29sbGFwc2VcIiB9fT5cclxuICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkICNjY2NcIiwgcGFkZGluZzogXCI4cHhcIiwgYmFja2dyb3VuZENvbG9yOiBcIiNmOWY5ZjlcIiB9fT5OYW1lPC90aD5cclxuICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZCAjY2NjXCIsIHBhZGRpbmc6IFwiOHB4XCIsIGJhY2tncm91bmRDb2xvcjogXCIjZjlmOWY5XCIgfX0+RW1haWw8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkICNjY2NcIiwgcGFkZGluZzogXCI4cHhcIiwgYmFja2dyb3VuZENvbG9yOiBcIiNmOWY5ZjlcIiB9fT5TdGF0dXM8L3RoPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAge3VzZXJzLm1hcCgodXNlcikgPT4gKFxyXG4gICAgICAgICAgICAgIDx0ciBrZXk9e3VzZXIuaWR9PlxyXG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWQgI2NjY1wiLCBwYWRkaW5nOiBcIjhweFwiIH19Pnt1c2VyLmZpcnN0TmFtZX0ge3VzZXIubGFzdE5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkICNjY2NcIiwgcGFkZGluZzogXCI4cHhcIiB9fT57dXNlci5lbWFpbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWQgI2NjY1wiLCBwYWRkaW5nOiBcIjhweFwiIH19Pnt1c2VyLmFkbWluID8gXCJBZG1pblwiIDogXCJOb1wifTwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

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