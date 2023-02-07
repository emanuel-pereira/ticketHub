/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./api/build-client.js":
/*!*****************************!*\
  !*** ./api/build-client.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst buildClient = ({\n  req\n}) => {\n  if (true) {\n    // We are on the server\n    return axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n      baseURL: \"http://www.YOUR_DOMAIN_NAME\",\n      headers: req.headers\n    });\n  } else {}\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (buildClient);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9hcGkvYnVpbGQtY2xpZW50LmpzP2UxOTYiXSwibmFtZXMiOlsiYnVpbGRDbGllbnQiLCJyZXEiLCJheGlvcyIsImJhc2VVUkwiLCJoZWFkZXJzIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTs7QUFFQSxNQUFNQSxXQUFXLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBYTtBQUMvQixZQUFtQztBQUNqQztBQUVBLFdBQU9DLG1EQUFBLENBQWE7QUFDbEJDLGFBQU8sRUFBRSw2QkFEUztBQUVsQkMsYUFBTyxFQUFFSCxHQUFHLENBQUNHO0FBRkssS0FBYixDQUFQO0FBSUQsR0FQRCxNQU9PLEVBS047QUFDRixDQWREOztBQWdCQSwrREFBZUosV0FBZiIsImZpbGUiOiIuL2FwaS9idWlsZC1jbGllbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IGJ1aWxkQ2xpZW50ID0gKHsgcmVxIH0pID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAvLyBXZSBhcmUgb24gdGhlIHNlcnZlclxuXG4gICAgcmV0dXJuIGF4aW9zLmNyZWF0ZSh7XG4gICAgICBiYXNlVVJMOiBcImh0dHA6Ly93d3cuWU9VUl9ET01BSU5fTkFNRVwiLFxuICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMsXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gV2UgbXVzdCBiZSBvbiB0aGUgYnJvd3NlclxuICAgIHJldHVybiBheGlvcy5jcmVhdGUoe1xuICAgICAgYmFzZVVybDogXCIvXCIsXG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkQ2xpZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./api/build-client.js\n");

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/EmanuelPereira/Desktop/ticketHub/client/components/header.js\";\n\n\nconst Header = ({\n  currentUser\n}) => {\n  const links = [!currentUser && {\n    label: \"Sign Up\",\n    href: \"/auth/signup\"\n  }, !currentUser && {\n    label: \"Sign In\",\n    href: \"/auth/signin\"\n  }, currentUser && {\n    label: \"Sell Tickets\",\n    href: \"/tickets/new\"\n  }, currentUser && {\n    label: \"My Orders\",\n    href: \"/orders\"\n  }, currentUser && {\n    label: \"Sign Out\",\n    href: \"/auth/signout\"\n  }].filter(linkConfig => linkConfig).map(({\n    label,\n    href\n  }) => {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n      className: \"nav-item\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: href,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          className: \"nav-link\",\n          children: label\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 13\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 11\n      }, undefined)\n    }, href, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }, undefined);\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n    className: \"navbar navbar-light bg-light\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n      href: \"/\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        className: \"navbar-brand\",\n        children: \"GitTix\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"d-flex justify-content-end\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"nav d-flex align-items-center\",\n        children: links\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL2hlYWRlci5qcz82NDc4Il0sIm5hbWVzIjpbIkhlYWRlciIsImN1cnJlbnRVc2VyIiwibGlua3MiLCJsYWJlbCIsImhyZWYiLCJmaWx0ZXIiLCJsaW5rQ29uZmlnIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQXFCO0FBQ2xDLFFBQU1DLEtBQUssR0FBRyxDQUNaLENBQUNELFdBQUQsSUFBZ0I7QUFBRUUsU0FBSyxFQUFFLFNBQVQ7QUFBb0JDLFFBQUksRUFBRTtBQUExQixHQURKLEVBRVosQ0FBQ0gsV0FBRCxJQUFnQjtBQUFFRSxTQUFLLEVBQUUsU0FBVDtBQUFvQkMsUUFBSSxFQUFFO0FBQTFCLEdBRkosRUFHWkgsV0FBVyxJQUFJO0FBQUVFLFNBQUssRUFBRSxjQUFUO0FBQXlCQyxRQUFJLEVBQUU7QUFBL0IsR0FISCxFQUlaSCxXQUFXLElBQUk7QUFBRUUsU0FBSyxFQUFFLFdBQVQ7QUFBc0JDLFFBQUksRUFBRTtBQUE1QixHQUpILEVBS1pILFdBQVcsSUFBSTtBQUFFRSxTQUFLLEVBQUUsVUFBVDtBQUFxQkMsUUFBSSxFQUFFO0FBQTNCLEdBTEgsRUFPWEMsTUFQVyxDQU9IQyxVQUFELElBQWdCQSxVQVBaLEVBUVhDLEdBUlcsQ0FRUCxDQUFDO0FBQUVKLFNBQUY7QUFBU0M7QUFBVCxHQUFELEtBQXFCO0FBQ3hCLHdCQUNFO0FBQWUsZUFBUyxFQUFDLFVBQXpCO0FBQUEsNkJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUVBLElBQVo7QUFBQSwrQkFDRTtBQUFHLG1CQUFTLEVBQUMsVUFBYjtBQUFBLG9CQUF5QkQ7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixPQUFTQyxJQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFPRCxHQWhCVyxDQUFkO0FBa0JBLHNCQUNFO0FBQUssYUFBUyxFQUFDLDhCQUFmO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUMsR0FBWDtBQUFBLDZCQUNFO0FBQUcsaUJBQVMsRUFBQyxjQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUtFO0FBQUssZUFBUyxFQUFDLDRCQUFmO0FBQUEsNkJBQ0U7QUFBSSxpQkFBUyxFQUFDLCtCQUFkO0FBQUEsa0JBQStDRjtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVdELENBOUJEOztBQWdDQSwrREFBZUYsTUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvaGVhZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBIZWFkZXIgPSAoeyBjdXJyZW50VXNlciB9KSA9PiB7XG4gIGNvbnN0IGxpbmtzID0gW1xuICAgICFjdXJyZW50VXNlciAmJiB7IGxhYmVsOiBcIlNpZ24gVXBcIiwgaHJlZjogXCIvYXV0aC9zaWdudXBcIiB9LFxuICAgICFjdXJyZW50VXNlciAmJiB7IGxhYmVsOiBcIlNpZ24gSW5cIiwgaHJlZjogXCIvYXV0aC9zaWduaW5cIiB9LFxuICAgIGN1cnJlbnRVc2VyICYmIHsgbGFiZWw6IFwiU2VsbCBUaWNrZXRzXCIsIGhyZWY6IFwiL3RpY2tldHMvbmV3XCIgfSxcbiAgICBjdXJyZW50VXNlciAmJiB7IGxhYmVsOiBcIk15IE9yZGVyc1wiLCBocmVmOiBcIi9vcmRlcnNcIiB9LFxuICAgIGN1cnJlbnRVc2VyICYmIHsgbGFiZWw6IFwiU2lnbiBPdXRcIiwgaHJlZjogXCIvYXV0aC9zaWdub3V0XCIgfSxcbiAgXVxuICAgIC5maWx0ZXIoKGxpbmtDb25maWcpID0+IGxpbmtDb25maWcpXG4gICAgLm1hcCgoeyBsYWJlbCwgaHJlZiB9KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8bGkga2V5PXtocmVmfSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9PlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj57bGFiZWx9PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICk7XG4gICAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItbGlnaHQgYmctbGlnaHRcIj5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPkdpdFRpeDwvYT5cbiAgICAgIDwvTGluaz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj57bGlua3N9PC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/header.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/build-client */ \"./api/build-client.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ \"./components/header.js\");\n\nvar _jsxFileName = \"/Users/EmanuelPereira/Desktop/ticketHub/client/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nconst AppComponent = ({\n  Component,\n  pageProps,\n  currentUser\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__.default, {\n      currentUser: currentUser\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"container\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({\n        currentUser: currentUser\n      }, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, undefined);\n};\n\nAppComponent.getInitialProps = async appContext => {\n  const client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_2__.default)(appContext.ctx);\n  const {\n    data\n  } = await client.get(\"/api/users/currentuser\");\n  let pageProps = {};\n\n  if (appContext.Component.getInitialProps) {\n    pageProps = await appContext.Component.getInitialProps(appContext.ctx, client, data.currentUser);\n  }\n\n  return _objectSpread({\n    pageProps\n  }, data);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppComponent);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY3VycmVudFVzZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJhcHBDb250ZXh0IiwiY2xpZW50IiwiYnVpbGRDbGllbnQiLCJjdHgiLCJkYXRhIiwiZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFlBQVksR0FBRyxDQUFDO0FBQUVDLFdBQUY7QUFBYUMsV0FBYjtBQUF3QkM7QUFBeEIsQ0FBRCxLQUEyQztBQUM5RCxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLHVEQUFEO0FBQVEsaUJBQVcsRUFBRUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw2QkFDRSw4REFBQyxTQUFEO0FBQVcsbUJBQVcsRUFBRUE7QUFBeEIsU0FBeUNELFNBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBUUQsQ0FURDs7QUFXQUYsWUFBWSxDQUFDSSxlQUFiLEdBQStCLE1BQU9DLFVBQVAsSUFBc0I7QUFDbkQsUUFBTUMsTUFBTSxHQUFHQywwREFBVyxDQUFDRixVQUFVLENBQUNHLEdBQVosQ0FBMUI7QUFDQSxRQUFNO0FBQUVDO0FBQUYsTUFBVyxNQUFNSCxNQUFNLENBQUNJLEdBQVAsQ0FBVyx3QkFBWCxDQUF2QjtBQUVBLE1BQUlSLFNBQVMsR0FBRyxFQUFoQjs7QUFDQSxNQUFJRyxVQUFVLENBQUNKLFNBQVgsQ0FBcUJHLGVBQXpCLEVBQTBDO0FBQ3hDRixhQUFTLEdBQUcsTUFBTUcsVUFBVSxDQUFDSixTQUFYLENBQXFCRyxlQUFyQixDQUNoQkMsVUFBVSxDQUFDRyxHQURLLEVBRWhCRixNQUZnQixFQUdoQkcsSUFBSSxDQUFDTixXQUhXLENBQWxCO0FBS0Q7O0FBRUQ7QUFDRUQ7QUFERixLQUVLTyxJQUZMO0FBSUQsQ0FqQkQ7O0FBbUJBLCtEQUFlVCxZQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzXCI7XG5pbXBvcnQgYnVpbGRDbGllbnQgZnJvbSBcIi4uL2FwaS9idWlsZC1jbGllbnRcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5cbmNvbnN0IEFwcENvbXBvbmVudCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzLCBjdXJyZW50VXNlciB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkZXIgY3VycmVudFVzZXI9e2N1cnJlbnRVc2VyfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPENvbXBvbmVudCBjdXJyZW50VXNlcj17Y3VycmVudFVzZXJ9IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkFwcENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoYXBwQ29udGV4dCkgPT4ge1xuICBjb25zdCBjbGllbnQgPSBidWlsZENsaWVudChhcHBDb250ZXh0LmN0eCk7XG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LmdldChcIi9hcGkvdXNlcnMvY3VycmVudHVzZXJcIik7XG5cbiAgbGV0IHBhZ2VQcm9wcyA9IHt9O1xuICBpZiAoYXBwQ29udGV4dC5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgcGFnZVByb3BzID0gYXdhaXQgYXBwQ29udGV4dC5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgYXBwQ29udGV4dC5jdHgsXG4gICAgICBjbGllbnQsXG4gICAgICBkYXRhLmN1cnJlbnRVc2VyXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcGFnZVByb3BzLFxuICAgIC4uLmRhdGEsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHBDb21wb25lbnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/***/ (function() {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();