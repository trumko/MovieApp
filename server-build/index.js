/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_components_AppWrapper_AppWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/AppWrapper/AppWrapper */ \"./src/components/AppWrapper/AppWrapper.js\");\n\n\n\n\n\n\nvar PORT = 8080;\nvar app = express__WEBPACK_IMPORTED_MODULE_2___default()();\nvar router = express__WEBPACK_IMPORTED_MODULE_2___default.a.Router();\n\nvar serverRenderer = function serverRenderer(req, res, next) {\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve('./build/index.html'), 'utf8', function (err, data) {\n    if (err) {\n      console.error(err);\n      return res.status(500).send('An error occurred');\n    }\n\n    return res.send(data.replace('<div id=\"root\"></div>', \"<div id=\\\"root\\\">\".concat(react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_components_AppWrapper_AppWrapper__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)), \"</div>\")));\n  });\n};\n\nrouter.use('^/$', serverRenderer);\nrouter.use(express__WEBPACK_IMPORTED_MODULE_2___default.a.static('./build', {\n  maxAge: '30d'\n})); // tell the app to use the above rules\n\napp.use(router); // app.use(express.static('./build'))\n\napp.listen(PORT, function () {\n  console.log(\"SSR running on port \".concat(PORT));\n}); // import path from 'path';\n// import fs from 'fs';\n//\n// import React from 'react';\n// import express from 'express';\n// import ReactDOMServer from 'react-dom/server';\n//\n// import AppWrapper from '../src/components/AppWrapper/AppWrapper';\n//\n// const PORT = process.env.PORT || 3006;\n// const app = express();\n//\n// app.use(express.static('./build'));\n//\n// app.get('/*', (req, res) => {\n//   const app = ReactDOMServer.renderToString(<AppWrapper />);\n//\n//   const indexFile = path.resolve('./build/index.html');\n//   fs.readFile(indexFile, 'utf8', (err, data) => {\n//     if (err) {\n//       console.error('Something went wrong:', err);\n//       return res.status(500).send('Oops, better luck next time!');\n//     }\n//\n//     return res.send(\n//       data.replace('<div id=\"root\"></div>', `<div id=\"root\">${app}</div>`)\n//     );\n//   });\n// });\n//\n// app.listen(PORT, () => {\n//   console.log(`😎 Server is listening on port ${PORT}`);\n// });\n// import path from 'path'\n// import fs from 'fs'\n//\n// import express from 'express'\n// import React from 'react'\n// import ReactDOMServer from 'react-dom/server'\n//\n// import AppWrapper from '../src/components/AppWrapper/AppWrapper';\n//\n// const PORT = 8080\n// const app = express()\n//\n// const router = express.Router()\n//\n// const serverRenderer = (req, res, next) => {\n//   fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {\n//     if (err) {\n//       console.error(err)\n//       return res.status(500).send('An error occurred')\n//     }\n//     return res.send(\n//       data.replace(\n//         '<div id=\"root\"></div>',\n//         `<div id=\"root\">${ReactDOMServer.renderToString(<AppWrapper />)}</div>`\n//       )\n//     )\n//   })\n// }\n// router.use('^/$', serverRenderer)\n//\n// router.use(\n//   express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' })\n// )\n//\n// // tell the app to use the above rules\n// app.use(router)\n//\n// // app.use(express.static('./build'))\n// app.listen(PORT, () => {\n//   console.log(`SSR running on port ${PORT}`)\n// })\n//\n//\n//\n// import path from 'path';\n// import fs from 'fs';\n//\n// import React from 'react';\n// import express from 'express';\n// import ReactDOMServer from 'react-dom/server';\n//\n// import AppWrapper from '../src/components/AppWrapper/AppWrapper';\n//\n// const PORT = process.env.PORT || 3006;\n// const app = express();\n//\n// app.use(express.static('./build'));\n//\n// app.get('/*', (req, res) => {\n//   const app = ReactDOMServer.renderToString(<AppWrapper />);\n//\n//   const indexFile = path.resolve('./build/index.html');\n//   fs.readFile(indexFile, 'utf8', (err, data) => {\n//     if (err) {\n//       console.error('Something went wrong:', err);\n//       return res.status(500).send('Oops, better luck next time!');\n//     }\n//\n//     return res.send(\n//       data.replace('<div id=\"root\"></div>', `<div id=\"root\">${app}</div>`)\n//     );\n//   });\n// });\n//\n// app.listen(PORT, () => {\n//   console.log(`😎 Server is listening on port ${PORT}`);\n// });\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/app-module-path-register.js":
/*!*****************************************!*\
  !*** ./src/app-module-path-register.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// import \"app-module-path/register\";\n// import \"app-module-path/cwd\";\n\n//# sourceURL=webpack:///./src/app-module-path-register.js?");

/***/ }),

/***/ "./src/components/AppWrapper/AppWrapper.js":
/*!*************************************************!*\
  !*** ./src/components/AppWrapper/AppWrapper.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AppWrapper; });\n/* harmony import */ var _app_module_path_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app-module-path-register */ \"./src/app-module-path-register.js\");\n/* harmony import */ var _app_module_path_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_module_path_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var store_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store/index */ \"./src/store/index.js\");\n/* harmony import */ var redux_persist_lib_integration_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-persist/lib/integration/react */ \"redux-persist/lib/integration/react\");\n/* harmony import */ var redux_persist_lib_integration_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_integration_react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var components_ErrorBoundary_ErrorBoundary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/ErrorBoundary/ErrorBoundary */ \"./src/components/ErrorBoundary/ErrorBoundary.js\");\n/* harmony import */ var components_Pages_Page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Pages/Page */ \"./src/components/Pages/Page.js\");\n/* harmony import */ var components_Footer_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Footer/Footer */ \"./src/components/Footer/Footer.js\");\n\n\n\n\n\n\n\n\n // import './AppWrapper.scss'\n\nfunction AppWrapper() {\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"h1\", null, \"AAAA  ssss  AAAAA  sdfsd  fffffs\");\n} // export default function AppWrapper() {\n//   return (\n//     <Provider store={store}>\n//       <PersistGate loading={null} persistor={persistor}>\n//         <ErrorBoundary>\n//           <Router>\n//             <Page />\n//             <Footer />\n//           </Router>\n//         </ErrorBoundary>\n//       </PersistGate>\n//     </Provider>\n//   );\n// }\n\n//# sourceURL=webpack:///./src/components/AppWrapper/AppWrapper.js?");

/***/ }),

/***/ "./src/components/ErrorBoundary/ErrorBoundary.js":
/*!*******************************************************!*\
  !*** ./src/components/ErrorBoundary/ErrorBoundary.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ErrorBoundary; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar ErrorBoundary =\n/*#__PURE__*/\nfunction (_PureComponent) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ErrorBoundary, _PureComponent);\n\n  function ErrorBoundary(props) {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ErrorBoundary);\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ErrorBoundary).call(this, props));\n    _this.state = {\n      hasError: false\n    };\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ErrorBoundary, [{\n    key: \"componentDidCatch\",\n    value: function componentDidCatch(error, info) {\n      console.log('componentDidCatch', error, info);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      if (this.state.hasError) {\n        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"h1\", null, \"Something went wrong\");\n      }\n\n      return this.props.children;\n    }\n  }], [{\n    key: \"getDerivedStateFromError\",\n    value: function getDerivedStateFromError(error) {\n      console.log('getDerivedStateFromError', error);\n      return {\n        hasError: true\n      };\n    }\n  }]);\n\n  return ErrorBoundary;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"PureComponent\"]);\n\n\n\n//# sourceURL=webpack:///./src/components/ErrorBoundary/ErrorBoundary.js?");

/***/ }),

/***/ "./src/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Footer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_Logo_Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Logo/Logo */ \"./src/components/Logo/Logo.js\");\n\n // import './Footer.scss'\n\nfunction Footer() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"mr_footer\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"mr_container\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Logo_Logo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)));\n}\n\n//# sourceURL=webpack:///./src/components/Footer/Footer.js?");

/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_Logo_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Logo/Logo */ \"./src/components/Logo/Logo.js\");\n\n\n // import './Header.scss'\n\nfunction Header(_ref) {\n  var className = _ref.className,\n      children = _ref.children;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('mr_header', className)\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"mr_container mr_headerContent\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Logo_Logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), children));\n}\n\n//# sourceURL=webpack:///./src/components/Header/Header.js?");

/***/ }),

/***/ "./src/components/Logo/Logo.js":
/*!*************************************!*\
  !*** ./src/components/Logo/Logo.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Logo; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n // import './Logo.scss'\n\nfunction Logo() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"mr_logoConteiner\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/\",\n    className: \"mr_logo\"\n  }, \"netflixroulette\"));\n}\n\n//# sourceURL=webpack:///./src/components/Logo/Logo.js?");

/***/ }),

/***/ "./src/components/Movie/Movie.js":
/*!***************************************!*\
  !*** ./src/components/Movie/Movie.js ***!
  \***************************************/
/*! exports provided: Movie, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Movie\", function() { return Movie; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var utils_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/helpers */ \"./src/utils/helpers.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./actions */ \"./src/components/Movie/actions/index.js\");\n/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./selectors */ \"./src/components/Movie/selectors/index.js\");\n\n\n\n\n\n\n\n\n\n\n // import './Movie.scss';\n\nvar Movie =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Movie, _Component);\n\n  function Movie() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Movie);\n\n    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Movie).apply(this, arguments));\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Movie, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var movieId = this.props.match.params.movieId;\n      this.props.getMovie(movieId);\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate(prevProps) {\n      var currentMovie = this.props.movie || {};\n      var previosMovie = prevProps.movie || {};\n\n      if (currentMovie.id && (!previosMovie.id || currentMovie.id !== previosMovie.id)) {\n        var _this$props = this.props,\n            movie = _this$props.movie,\n            _getSimilarResults = _this$props.getSimilarResults;\n\n        _getSimilarResults(movie);\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var movie = this.props.movie;\n\n      if (!movie) {\n        return null;\n      }\n\n      var title = movie.title,\n          release_date = movie.release_date,\n          poster_path = movie.poster_path,\n          tagline = movie.tagline,\n          runtime = movie.runtime,\n          overview = movie.overview,\n          vote_average = movie.vote_average;\n      var movieYear = Object(utils_helpers__WEBPACK_IMPORTED_MODULE_8__[\"getMovieYear\"])(release_date);\n      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"mr_movie\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"mr_poster\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"img\", {\n        src: poster_path,\n        alt: title\n      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"mr_movieDetails\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"h1\", null, title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"span\", {\n        className: \"mr_voteAvarage\"\n      }, vote_average), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"p\", {\n        className: \"mr_tagLine\"\n      }, tagline), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"p\", {\n        className: \"mr_movieYear\"\n      }, movieYear), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"p\", {\n        className: \"mr_runtime\"\n      }, runtime, \" min\")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"p\", {\n        className: \"mr_overview\"\n      }, overview)));\n    }\n  }]);\n\n  return Movie;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    getMovie: function getMovie(movieId) {\n      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_9__[\"getMovie\"])(movieId));\n    },\n    getSimilarResults: function getSimilarResults(genres) {\n      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_9__[\"getSimilarResults\"])(genres));\n    }\n  };\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    movie: Object(_selectors__WEBPACK_IMPORTED_MODULE_10__[\"selectMovie\"])(state)\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[\"withRouter\"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Movie)));\n\n//# sourceURL=webpack:///./src/components/Movie/Movie.js?");

/***/ }),

/***/ "./src/components/Movie/actions/index.js":
/*!***********************************************!*\
  !*** ./src/components/Movie/actions/index.js ***!
  \***********************************************/
/*! exports provided: getMovie, clearMovie, getSimilarResults, clearSimilarResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMovie\", function() { return getMovie; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearMovie\", function() { return clearMovie; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSimilarResults\", function() { return getSimilarResults; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearSimilarResults\", function() { return clearSimilarResults; });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./src/components/Movie/actions/types.js\");\n\nvar getMovie = function getMovie(payload) {\n  console.log(payload);\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__[\"SPECIFIC_MOVIE_GET\"],\n    payload: payload\n  };\n};\nvar clearMovie = function clearMovie(payload) {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__[\"SPECIFIC_MOVIE_CLEAR\"],\n    payload: payload\n  };\n};\nvar getSimilarResults = function getSimilarResults(payload) {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__[\"SIMILAR_RESULTS_GET\"],\n    payload: payload\n  };\n};\nvar clearSimilarResults = function clearSimilarResults(payload) {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__[\"SIMILAR_RESULTS_CLEAR\"],\n    payload: payload\n  };\n};\n\n//# sourceURL=webpack:///./src/components/Movie/actions/index.js?");

/***/ }),

/***/ "./src/components/Movie/actions/types.js":
/*!***********************************************!*\
  !*** ./src/components/Movie/actions/types.js ***!
  \***********************************************/
/*! exports provided: SPECIFIC_MOVIE_GET, SPECIFIC_MOVIE_GET_SUCCESS, SPECIFIC_MOVIE_GET_FAIL, SPECIFIC_MOVIE_CLEAR, SIMILAR_RESULTS_GET, SIMILAR_RESULTS_GET_SUCCESS, SIMILAR_RESULTS_GET_FAIL, SIMILAR_RESULTS_CLEAR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SPECIFIC_MOVIE_GET\", function() { return SPECIFIC_MOVIE_GET; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SPECIFIC_MOVIE_GET_SUCCESS\", function() { return SPECIFIC_MOVIE_GET_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SPECIFIC_MOVIE_GET_FAIL\", function() { return SPECIFIC_MOVIE_GET_FAIL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SPECIFIC_MOVIE_CLEAR\", function() { return SPECIFIC_MOVIE_CLEAR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIMILAR_RESULTS_GET\", function() { return SIMILAR_RESULTS_GET; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIMILAR_RESULTS_GET_SUCCESS\", function() { return SIMILAR_RESULTS_GET_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIMILAR_RESULTS_GET_FAIL\", function() { return SIMILAR_RESULTS_GET_FAIL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIMILAR_RESULTS_CLEAR\", function() { return SIMILAR_RESULTS_CLEAR; });\nvar SPECIFIC_MOVIE_GET = 'SPECIFIC_MOVIE_GET';\nvar SPECIFIC_MOVIE_GET_SUCCESS = 'SPECIFIC_MOVIE_GET_SUCCESS';\nvar SPECIFIC_MOVIE_GET_FAIL = 'SPECIFIC_MOVIE_GET_FAIL';\nvar SPECIFIC_MOVIE_CLEAR = 'SPECIFIC_MOVIE_CLEAR';\nvar SIMILAR_RESULTS_GET = \"SIMILAR_RESULTS_GET\";\nvar SIMILAR_RESULTS_GET_SUCCESS = \"SIMILAR_RESULTS_GET_SUCCESS\";\nvar SIMILAR_RESULTS_GET_FAIL = \"SIMILAR_RESULTS_GET_FAIL\";\nvar SIMILAR_RESULTS_CLEAR = \"SIMILAR_RESULTS_CLEAR\";\n\n//# sourceURL=webpack:///./src/components/Movie/actions/types.js?");

/***/ }),

/***/ "./src/components/Movie/reducer/index.js":
/*!***********************************************!*\
  !*** ./src/components/Movie/reducer/index.js ***!
  \***********************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return movieReducer; });\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ \"@babel/runtime/helpers/objectSpread\");\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/types */ \"./src/components/Movie/actions/types.js\");\n\n\nvar initialState = {\n  movie: null,\n  similarResults: null\n};\nfunction movieReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_1__[\"SPECIFIC_MOVIE_GET_SUCCESS\"]:\n      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {\n        movie: action.payload\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_1__[\"SPECIFIC_MOVIE_GET\"]:\n    case _actions_types__WEBPACK_IMPORTED_MODULE_1__[\"SPECIFIC_MOVIE_GET_FAIL\"]:\n      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {\n        movie: null\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_1__[\"SIMILAR_RESULTS_GET_SUCCESS\"]:\n      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {\n        similarResults: action.payload.data\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_1__[\"SIMILAR_RESULTS_GET\"]:\n    case _actions_types__WEBPACK_IMPORTED_MODULE_1__[\"SIMILAR_RESULTS_GET_FAIL\"]:\n      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {\n        similarResults: null\n      });\n\n    default:\n      break;\n  }\n\n  return state;\n}\n\n//# sourceURL=webpack:///./src/components/Movie/reducer/index.js?");

/***/ }),

/***/ "./src/components/Movie/saga/index.js":
/*!********************************************!*\
  !*** ./src/components/Movie/saga/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return movieSaga; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/api */ \"./src/utils/api.js\");\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/types */ \"./src/components/Movie/actions/types.js\");\n\n\nvar _marked =\n/*#__PURE__*/\n_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getMovie),\n    _marked2 =\n/*#__PURE__*/\n_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getSimilarResults),\n    _marked3 =\n/*#__PURE__*/\n_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(movieSaga);\n\n\n\n\n\nfunction getMovie(action) {\n  var payload;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getMovie$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          _context.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"call\"])(utils_api__WEBPACK_IMPORTED_MODULE_2__[\"fetchMovie\"], action.payload);\n\n        case 3:\n          payload = _context.sent;\n          _context.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _actions_types__WEBPACK_IMPORTED_MODULE_3__[\"SPECIFIC_MOVIE_GET_SUCCESS\"],\n            payload: payload\n          });\n\n        case 6:\n          _context.next = 12;\n          break;\n\n        case 8:\n          _context.prev = 8;\n          _context.t0 = _context[\"catch\"](0);\n          _context.next = 12;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _actions_types__WEBPACK_IMPORTED_MODULE_3__[\"SPECIFIC_MOVIE_GET_FAIL\"],\n            payload: _context.t0\n          });\n\n        case 12:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _marked, null, [[0, 8]]);\n}\n\nfunction getSimilarResults(action) {\n  var payload;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getSimilarResults$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.prev = 0;\n          _context2.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"call\"])(utils_api__WEBPACK_IMPORTED_MODULE_2__[\"fetchSimilarResults\"], action.payload);\n\n        case 3:\n          payload = _context2.sent;\n          _context2.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _actions_types__WEBPACK_IMPORTED_MODULE_3__[\"SIMILAR_RESULTS_GET_SUCCESS\"],\n            payload: payload\n          });\n\n        case 6:\n          _context2.next = 12;\n          break;\n\n        case 8:\n          _context2.prev = 8;\n          _context2.t0 = _context2[\"catch\"](0);\n          _context2.next = 12;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _actions_types__WEBPACK_IMPORTED_MODULE_3__[\"SIMILAR_RESULTS_GET_FAIL\"],\n            payload: _context2.t0\n          });\n\n        case 12:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, _marked2, null, [[0, 8]]);\n}\n\nfunction movieSaga() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function movieSaga$(_context3) {\n    while (1) {\n      switch (_context3.prev = _context3.next) {\n        case 0:\n          _context3.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeEvery\"])(_actions_types__WEBPACK_IMPORTED_MODULE_3__[\"SPECIFIC_MOVIE_GET\"], getMovie);\n\n        case 2:\n          _context3.next = 4;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeEvery\"])(_actions_types__WEBPACK_IMPORTED_MODULE_3__[\"SIMILAR_RESULTS_GET\"], getSimilarResults);\n\n        case 4:\n        case \"end\":\n          return _context3.stop();\n      }\n    }\n  }, _marked3);\n}\n\n//# sourceURL=webpack:///./src/components/Movie/saga/index.js?");

/***/ }),

/***/ "./src/components/Movie/selectors/index.js":
/*!*************************************************!*\
  !*** ./src/components/Movie/selectors/index.js ***!
  \*************************************************/
/*! exports provided: movieReducerSelector, selectMovie, selectSimilarResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"movieReducerSelector\", function() { return movieReducerSelector; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectMovie\", function() { return selectMovie; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectSimilarResults\", function() { return selectSimilarResults; });\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ \"reselect\");\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);\n\nvar movieReducerSelector = function movieReducerSelector(state) {\n  return state.movieReducer;\n};\nvar selectMovie = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(movieReducerSelector, function (movieReducerSelector) {\n  return movieReducerSelector.movie;\n});\nvar selectSimilarResults = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(movieReducerSelector, function (movieReducerSelector) {\n  return movieReducerSelector.similarResults;\n});\n\n//# sourceURL=webpack:///./src/components/Movie/selectors/index.js?");

/***/ }),

/***/ "./src/components/MoviePreview/MoviePreview.js":
/*!*****************************************************!*\
  !*** ./src/components/MoviePreview/MoviePreview.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MoviePreview; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var utils_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/helpers */ \"./src/utils/helpers.js\");\n\n\n // import './MoviePreview.scss';\n\nfunction MoviePreview(_ref) {\n  var title = _ref.title,\n      date = _ref.date,\n      genres = _ref.genres,\n      posterUrl = _ref.posterUrl,\n      id = _ref.id;\n  var movieYear = Object(utils_helpers__WEBPACK_IMPORTED_MODULE_2__[\"getMovieYear\"])(date);\n  var movieGenres = genres.join(', ');\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/movie/\".concat(id),\n    className: \"mr_moviePreview\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: posterUrl,\n    className: \"mr_moviePoster\",\n    alt: title\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"mr_movieInfo\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"mr_movieTitle\"\n  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"mr_movieDate\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, movieYear))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"mr_movieGenre\"\n  }, movieGenres)));\n}\n\n//# sourceURL=webpack:///./src/components/MoviePreview/MoviePreview.js?");

/***/ }),

/***/ "./src/components/MoviePreviews/MoviePreviews.js":
/*!*******************************************************!*\
  !*** ./src/components/MoviePreviews/MoviePreviews.js ***!
  \*******************************************************/
/*! exports provided: MoviePreviews, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MoviePreviews\", function() { return MoviePreviews; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_MoviePreview_MoviePreview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/MoviePreview/MoviePreview */ \"./src/components/MoviePreview/MoviePreview.js\");\n/* harmony import */ var utils_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/helpers */ \"./src/utils/helpers.js\");\n\n\n // import './MoviePreviews.scss';\n\nfunction MoviePreviews(_ref) {\n  var movies = _ref.movies,\n      sortbyType = _ref.sortbyType;\n\n  if (!movies) {\n    return null;\n  }\n\n  var sortMovies = function sortMovies() {\n    var sortTypes = {\n      'raiting': 'vote_average',\n      'release date': 'release_date'\n    };\n    return Object(utils_helpers__WEBPACK_IMPORTED_MODULE_2__[\"sortByField\"])(movies, sortTypes[sortbyType]);\n  };\n\n  var sortedMovies = sortMovies(movies, sortbyType);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"mr_moviePreviews\"\n  }, sortedMovies.map(function (_ref2) {\n    var title = _ref2.title,\n        release_date = _ref2.release_date,\n        genres = _ref2.genres,\n        poster_path = _ref2.poster_path,\n        id = _ref2.id;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_MoviePreview_MoviePreview__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      title: title,\n      date: release_date,\n      genres: genres,\n      posterUrl: poster_path,\n      key: id,\n      id: id\n    });\n  }));\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (MoviePreviews);\n\n//# sourceURL=webpack:///./src/components/MoviePreviews/MoviePreviews.js?");

/***/ }),

/***/ "./src/components/Pages/Page.js":
/*!**************************************!*\
  !*** ./src/components/Pages/Page.js ***!
  \**************************************/
/*! exports provided: Page, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Page\", function() { return Page; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_HomePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/HomePage */ \"./src/components/Pages/components/HomePage.js\");\n/* harmony import */ var _components_MoviePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/MoviePage */ \"./src/components/Pages/components/MoviePage.js\");\n/* harmony import */ var _components_SearchPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/SearchPage */ \"./src/components/Pages/components/SearchPage.js\");\n/* harmony import */ var _components_NotFoundPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/NotFoundPage */ \"./src/components/Pages/components/NotFoundPage.js\");\n\n\n\n\n\n\nfunction Page(_ref) {\n  var location = _ref.location;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    exact: true,\n    path: \"/\",\n    component: _components_HomePage__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/movie/:movieId\",\n    component: _components_MoviePage__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    key: location.key\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/search\",\n    component: _components_SearchPage__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    key: location.key\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    component: _components_NotFoundPage__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  }));\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"withRouter\"])(Page));\n\n//# sourceURL=webpack:///./src/components/Pages/Page.js?");

/***/ }),

/***/ "./src/components/Pages/components/HomePage.js":
/*!*****************************************************!*\
  !*** ./src/components/Pages/components/HomePage.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HomePage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Header/Header */ \"./src/components/Header/Header.js\");\n/* harmony import */ var components_Search_Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Search/Search */ \"./src/components/Search/Search.js\");\n\n\n\nfunction HomePage() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Header_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Search_Search__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"mr_content mr_container\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"mr_searchMotto\"\n  }, \"Find your movie\")));\n}\n\n//# sourceURL=webpack:///./src/components/Pages/components/HomePage.js?");

/***/ }),

/***/ "./src/components/Pages/components/MoviePage.js":
/*!******************************************************!*\
  !*** ./src/components/Pages/components/MoviePage.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MoviePage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_SimilarResults_SimilarResults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/SimilarResults/SimilarResults */ \"./src/components/SimilarResults/SimilarResults.js\");\n/* harmony import */ var components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Header/Header */ \"./src/components/Header/Header.js\");\n/* harmony import */ var components_Movie_Movie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Movie/Movie */ \"./src/components/Movie/Movie.js\");\n\n\n\n\nfunction MoviePage() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Header_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: \"mr_movieHeader\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Movie_Movie__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"mr_content mr_container\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_SimilarResults_SimilarResults__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)));\n}\n\n//# sourceURL=webpack:///./src/components/Pages/components/MoviePage.js?");

/***/ }),

/***/ "./src/components/Pages/components/NotFoundPage.js":
/*!*********************************************************!*\
  !*** ./src/components/Pages/components/NotFoundPage.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NotFoundPage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Header/Header */ \"./src/components/Header/Header.js\");\n/* harmony import */ var components_Search_Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Search/Search */ \"./src/components/Search/Search.js\");\n\n\n\nfunction NotFoundPage() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Header_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Search_Search__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"mr_content mr_container\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"mr_notFoundMotto\"\n  }, \"Oooooppsss!\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"mr_notFoundExplanation\"\n  }, \"We can't seem to find the page you're looking for\")));\n}\n\n//# sourceURL=webpack:///./src/components/Pages/components/NotFoundPage.js?");

/***/ }),

/***/ "./src/components/Pages/components/SearchPage.js":
/*!*******************************************************!*\
  !*** ./src/components/Pages/components/SearchPage.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MoviePage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_SearchResults_SearchResults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/SearchResults/SearchResults */ \"./src/components/SearchResults/SearchResults.js\");\n/* harmony import */ var components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Header/Header */ \"./src/components/Header/Header.js\");\n/* harmony import */ var components_Search_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Search/Search */ \"./src/components/Search/Search.js\");\n/* harmony import */ var components_SearchOrganize_SearchOrganize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/SearchOrganize/SearchOrganize */ \"./src/components/SearchOrganize/SearchOrganize.js\");\n\n\n\n\n\nfunction MoviePage() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Header_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Search_Search__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_SearchOrganize_SearchOrganize__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"mr_content mr_container\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_SearchResults_SearchResults__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)));\n}\n\n//# sourceURL=webpack:///./src/components/Pages/components/SearchPage.js?");

/***/ }),

/***/ "./src/components/Search/Search.js":
/*!*****************************************!*\
  !*** ./src/components/Search/Search.js ***!
  \*****************************************/
/*! exports provided: Search, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Search\", function() { return Search; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"@babel/runtime/helpers/assertThisInitialized\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n // import './Search.scss';\n\nvar Search =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Search, _Component);\n\n  function Search(props) {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Search);\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Search).call(this, props));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"setSearchByType\", function (type) {\n      _this.setState({\n        type: type\n      });\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"onInputChange\", function (e) {\n      _this.setState({\n        inputQuery: e.currentTarget.value\n      });\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"onFormSubmit\", function (e) {\n      e.preventDefault();\n\n      if (_this.state.inputQuery) {\n        console.log('this.props.history', _this.props.history);\n\n        _this.props.history.push(\"/search?search=\".concat(_this.state.inputQuery, \"&genre=\").concat(_this.state.type));\n      }\n    });\n\n    _this.state = {\n      type: 'title',\n      inputQuery: ''\n    };\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Search, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: \"mr_search\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"h1\", null, \"Find your movie\"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"form\", {\n        onSubmit: this.onFormSubmit\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"input\", {\n        className: \"mr_searchInput\",\n        type: \"text\",\n        name: \"search-query\",\n        placeholder: \"search...\",\n        value: this.state.inputQuery,\n        onChange: this.onInputChange\n      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"hr\", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"button\", {\n        className: \"mr_searchSubmit\",\n        type: \"submit\",\n        name: \"search\"\n      }, \"search\"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: \"mr_searchSwitch\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"span\", null, \"Search by\"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"button\", {\n        type: \"button\",\n        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()({\n          'mr_isActiveType': this.state.type === 'title'\n        }),\n        onClick: function onClick() {\n          return _this2.setSearchByType('title');\n        },\n        \"data-search-type\": \"title\"\n      }, \"title\"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"button\", {\n        type: \"button\",\n        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()({\n          'mr_isActiveType': this.state.type === 'genres'\n        }),\n        onClick: function onClick() {\n          return _this2.setSearchByType('genres');\n        },\n        \"data-search-type\": \"genres\"\n      }, \"genre\"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: \"mr_subHeader\"\n      }));\n    }\n  }]);\n\n  return Search;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__[\"withRouter\"])(Search));\n\n//# sourceURL=webpack:///./src/components/Search/Search.js?");

/***/ }),

/***/ "./src/components/SearchOrganize/SearchOrganize.js":
/*!*********************************************************!*\
  !*** ./src/components/SearchOrganize/SearchOrganize.js ***!
  \*********************************************************/
/*! exports provided: SearchOrganize, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SearchOrganize\", function() { return SearchOrganize; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"@babel/runtime/helpers/assertThisInitialized\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var components_SearchResults_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/SearchResults/actions */ \"./src/components/SearchResults/actions/index.js\");\n\n\n\n\n\n\n\n\n\n\n // import './SearchOrganize.scss';\n\nvar SearchOrganize =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(SearchOrganize, _Component);\n\n  function SearchOrganize(props) {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SearchOrganize);\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(SearchOrganize).call(this, props));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"setSortByType\", function (type) {\n      _this.props.sortSearchResults(type);\n\n      _this.setState({\n        type: type\n      });\n    });\n\n    _this.state = {\n      type: 'release date'\n    };\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SearchOrganize, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: \"mr_container mr_searchOrganizer\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: \"mr_sortSwitch\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"span\", null, \"Sort by\"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"button\", {\n        type: \"button\",\n        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()({\n          'mr_isActiveType': this.state.type === 'release date'\n        }),\n        onClick: function onClick() {\n          return _this2.setSortByType('release date');\n        },\n        \"data-search-type\": \"release date\"\n      }, \"release date\"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"button\", {\n        type: \"button\",\n        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()({\n          'mr_isActiveType': this.state.type === 'raiting'\n        }),\n        onClick: function onClick() {\n          return _this2.setSortByType('raiting');\n        },\n        \"data-search-type\": \"raiting\"\n      }, \"raiting\")));\n    }\n  }]);\n\n  return SearchOrganize;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    sortSearchResults: function sortSearchResults(params) {\n      return dispatch(Object(components_SearchResults_actions__WEBPACK_IMPORTED_MODULE_10__[\"sortSearchResults\"])(params));\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__[\"connect\"])(null, mapDispatchToProps)(SearchOrganize));\n\n//# sourceURL=webpack:///./src/components/SearchOrganize/SearchOrganize.js?");

/***/ }),

/***/ "./src/components/SearchResults/SearchResults.js":
/*!*******************************************************!*\
  !*** ./src/components/SearchResults/SearchResults.js ***!
  \*******************************************************/
/*! exports provided: SearchResults, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SearchResults\", function() { return SearchResults; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! query-string */ \"query-string\");\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var components_MoviePreviews_MoviePreviews__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/MoviePreviews/MoviePreviews */ \"./src/components/MoviePreviews/MoviePreviews.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./actions */ \"./src/components/SearchResults/actions/index.js\");\n/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./selectors */ \"./src/components/SearchResults/selectors/index.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nvar SearchResults =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SearchResults, _Component);\n\n  function SearchResults() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SearchResults);\n\n    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(SearchResults).apply(this, arguments));\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SearchResults, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var params = query_string__WEBPACK_IMPORTED_MODULE_8___default.a.parse(this.props.location.search);\n      this.props.getSearchResults(params);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          searchResults = _this$props.searchResults,\n          sortbyType = _this$props.sortbyType;\n\n      if (!searchResults) {\n        return null;\n      }\n\n      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_MoviePreviews_MoviePreviews__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        movies: searchResults,\n        sortbyType: sortbyType\n      });\n    }\n  }]);\n\n  return SearchResults;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    getSearchResults: function getSearchResults(params) {\n      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_10__[\"getSearchResults\"])(params));\n    }\n  };\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    searchResults: Object(_selectors__WEBPACK_IMPORTED_MODULE_11__[\"selectSearchResults\"])(state),\n    sortbyType: Object(_selectors__WEBPACK_IMPORTED_MODULE_11__[\"selectSortbyType\"])(state)\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[\"withRouter\"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"connect\"])(mapStateToProps, mapDispatchToProps)(SearchResults)));\n\n//# sourceURL=webpack:///./src/components/SearchResults/SearchResults.js?");

/***/ }),

/***/ "./src/components/SearchResults/actions/index.js":
/*!*******************************************************!*\
  !*** ./src/components/SearchResults/actions/index.js ***!
  \*******************************************************/
/*! exports provided: getSearchResults, sortSearchResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSearchResults\", function() { return getSearchResults; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sortSearchResults\", function() { return sortSearchResults; });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./src/components/SearchResults/actions/types.js\");\n\nvar getSearchResults = function getSearchResults(payload) {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__[\"SEARCH_RESULTS_GET\"],\n    payload: payload\n  };\n};\nvar sortSearchResults = function sortSearchResults(payload) {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__[\"SEARCH_RESULTS_SORT\"],\n    payload: payload\n  };\n};\n\n//# sourceURL=webpack:///./src/components/SearchResults/actions/index.js?");

/***/ }),

/***/ "./src/components/SearchResults/actions/types.js":
/*!*******************************************************!*\
  !*** ./src/components/SearchResults/actions/types.js ***!
  \*******************************************************/
/*! exports provided: SEARCH_RESULTS_GET, SEARCH_RESULTS_GET_SUCCESS, SEARCH_RESULTS_GET_FAIL, SEARCH_RESULTS_SORT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SEARCH_RESULTS_GET\", function() { return SEARCH_RESULTS_GET; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SEARCH_RESULTS_GET_SUCCESS\", function() { return SEARCH_RESULTS_GET_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SEARCH_RESULTS_GET_FAIL\", function() { return SEARCH_RESULTS_GET_FAIL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SEARCH_RESULTS_SORT\", function() { return SEARCH_RESULTS_SORT; });\nvar SEARCH_RESULTS_GET = \"SEARCH_RESULTS_GET\";\nvar SEARCH_RESULTS_GET_SUCCESS = \"SEARCH_RESULTS_GET_SUCCESS\";\nvar SEARCH_RESULTS_GET_FAIL = \"SEARCH_RESULTS_GET_FAIL\";\nvar SEARCH_RESULTS_SORT = \"SEARCH_RESULTS_SORT\";\n\n//# sourceURL=webpack:///./src/components/SearchResults/actions/types.js?");

/***/ }),

/***/ "./src/components/SearchResults/reducer/index.js":
/*!*******************************************************!*\
  !*** ./src/components/SearchResults/reducer/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return movieReducer; });\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ \"@babel/runtime/helpers/objectSpread\");\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/types */ \"./src/components/SearchResults/actions/types.js\");\n\n\nvar initialState = {\n  searchResults: null,\n  sortBy: 'release date'\n};\nfunction movieReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_1__[\"SEARCH_RESULTS_GET_SUCCESS\"]:\n      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {\n        searchResults: action.payload.data\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_1__[\"SEARCH_RESULTS_GET_FAIL\"]:\n      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {\n        searchResults: null\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_1__[\"SEARCH_RESULTS_SORT\"]:\n      console.log('action', action);\n      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {\n        sortBy: action.payload\n      });\n\n    default:\n      break;\n  }\n\n  return state;\n}\n\n//# sourceURL=webpack:///./src/components/SearchResults/reducer/index.js?");

/***/ }),

/***/ "./src/components/SearchResults/saga/index.js":
/*!****************************************************!*\
  !*** ./src/components/SearchResults/saga/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return searchResultsSaga; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/api */ \"./src/utils/api.js\");\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/types */ \"./src/components/SearchResults/actions/types.js\");\n\n\nvar _marked =\n/*#__PURE__*/\n_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getSearchResults),\n    _marked2 =\n/*#__PURE__*/\n_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(searchResultsSaga);\n\n\n\n\n\nfunction getSearchResults(action) {\n  var payload;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getSearchResults$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          _context.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"call\"])(utils_api__WEBPACK_IMPORTED_MODULE_2__[\"fetchSearchResults\"], action.payload);\n\n        case 3:\n          payload = _context.sent;\n          _context.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _actions_types__WEBPACK_IMPORTED_MODULE_3__[\"SEARCH_RESULTS_GET_SUCCESS\"],\n            payload: payload\n          });\n\n        case 6:\n          _context.next = 12;\n          break;\n\n        case 8:\n          _context.prev = 8;\n          _context.t0 = _context[\"catch\"](0);\n          _context.next = 12;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _actions_types__WEBPACK_IMPORTED_MODULE_3__[\"SEARCH_RESULTS_GET_FAIL\"],\n            payload: _context.t0\n          });\n\n        case 12:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _marked, null, [[0, 8]]);\n}\n\nfunction searchResultsSaga() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function searchResultsSaga$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeEvery\"])(_actions_types__WEBPACK_IMPORTED_MODULE_3__[\"SEARCH_RESULTS_GET\"], getSearchResults);\n\n        case 2:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, _marked2);\n}\n\n//# sourceURL=webpack:///./src/components/SearchResults/saga/index.js?");

/***/ }),

/***/ "./src/components/SearchResults/selectors/index.js":
/*!*********************************************************!*\
  !*** ./src/components/SearchResults/selectors/index.js ***!
  \*********************************************************/
/*! exports provided: searchResultsReducerSelector, selectSearchResults, selectSortbyType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchResultsReducerSelector\", function() { return searchResultsReducerSelector; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectSearchResults\", function() { return selectSearchResults; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectSortbyType\", function() { return selectSortbyType; });\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ \"reselect\");\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);\n\nvar searchResultsReducerSelector = function searchResultsReducerSelector(state) {\n  return state.searchResultsReducer;\n};\nvar selectSearchResults = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(searchResultsReducerSelector, function (searchResultsReducerSelector) {\n  return searchResultsReducerSelector.searchResults;\n});\nvar selectSortbyType = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(searchResultsReducerSelector, function (searchResultsReducerSelector) {\n  return searchResultsReducerSelector.sortBy;\n});\n\n//# sourceURL=webpack:///./src/components/SearchResults/selectors/index.js?");

/***/ }),

/***/ "./src/components/SimilarResults/SimilarResults.js":
/*!*********************************************************!*\
  !*** ./src/components/SimilarResults/SimilarResults.js ***!
  \*********************************************************/
/*! exports provided: SimilarResults, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SimilarResults\", function() { return SimilarResults; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_MoviePreviews_MoviePreviews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/MoviePreviews/MoviePreviews */ \"./src/components/MoviePreviews/MoviePreviews.js\");\n/* harmony import */ var components_Movie_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Movie/selectors */ \"./src/components/Movie/selectors/index.js\");\n\n\n\n\n\nfunction SimilarResults(_ref) {\n  var similarResults = _ref.similarResults;\n\n  if (!similarResults) {\n    return null;\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_MoviePreviews_MoviePreviews__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    movies: similarResults\n  });\n}\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    similarResults: Object(components_Movie_selectors__WEBPACK_IMPORTED_MODULE_4__[\"selectSimilarResults\"])(state)\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"withRouter\"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, {})(SimilarResults)));\n\n//# sourceURL=webpack:///./src/components/SimilarResults/SimilarResults.js?");

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: rootReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rootReducer\", function() { return rootReducer; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_Movie_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Movie/reducer */ \"./src/components/Movie/reducer/index.js\");\n/* harmony import */ var components_SearchResults_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/SearchResults/reducer */ \"./src/components/SearchResults/reducer/index.js\");\n\n\n\nvar rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  movieReducer: components_Movie_reducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  searchResultsReducer: components_SearchResults_reducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/reducers/index.js?");

/***/ }),

/***/ "./src/sagas/index.js":
/*!****************************!*\
  !*** ./src/sagas/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return rootSaga; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_Movie_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Movie/saga */ \"./src/components/Movie/saga/index.js\");\n/* harmony import */ var components_SearchResults_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/SearchResults/saga */ \"./src/components/SearchResults/saga/index.js\");\n\n\nvar _marked =\n/*#__PURE__*/\n_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);\n\n\n\n\nfunction rootSaga() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(components_Movie_saga__WEBPACK_IMPORTED_MODULE_2__[\"default\"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(components_SearchResults_saga__WEBPACK_IMPORTED_MODULE_3__[\"default\"])]);\n\n        case 2:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _marked);\n}\n\n//# sourceURL=webpack:///./src/sagas/index.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: store, persistor, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"store\", function() { return store; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"persistor\", function() { return persistor; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist */ \"redux-persist\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist/lib/storage */ \"redux-persist/lib/storage\");\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_persist_lib_stateReconciler_autoMergeLevel2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist/lib/stateReconciler/autoMergeLevel2 */ \"redux-persist/lib/stateReconciler/autoMergeLevel2\");\n/* harmony import */ var redux_persist_lib_stateReconciler_autoMergeLevel2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_stateReconciler_autoMergeLevel2__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/index */ \"./src/reducers/index.js\");\n/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sagas */ \"./src/sagas/index.js\");\n\n\n\n\n\n\n\nvar persistConfig = {\n  key: 'root',\n  storage: redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2___default.a,\n  stateReconciler: redux_persist_lib_stateReconciler_autoMergeLevel2__WEBPACK_IMPORTED_MODULE_3___default.a\n};\nvar pReducer = Object(redux_persist__WEBPACK_IMPORTED_MODULE_1__[\"persistReducer\"])(persistConfig, _reducers_index__WEBPACK_IMPORTED_MODULE_5__[\"rootReducer\"]);\nvar sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_4___default()(); // const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;\n\nvar composeEnhancer = typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_0__[\"compose\"];\nvar store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(pReducer, composeEnhancer(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(sagaMiddleware)));\nvar persistor = Object(redux_persist__WEBPACK_IMPORTED_MODULE_1__[\"persistStore\"])(store);\nsagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "./src/utils/api.js":
/*!**************************!*\
  !*** ./src/utils/api.js ***!
  \**************************/
/*! exports provided: fetchMovie, fetchSearchResults, fetchSimilarResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchMovie\", function() { return fetchMovie; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchSearchResults\", function() { return fetchSearchResults; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchSimilarResults\", function() { return fetchSimilarResults; });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/utils/helpers.js\");\n\nvar fetchMovie = function fetchMovie(movieId) {\n  return fetch(\"https://reactjs-cdp.herokuapp.com/movies/\".concat(movieId)).then(function (response) {\n    return response.json();\n  });\n};\nvar fetchSearchResults = function fetchSearchResults(params) {\n  var search = params.search,\n      genre = params.genre;\n  return fetch(\"https://reactjs-cdp.herokuapp.com/movies?search=\".concat(search, \"&searchBy=\").concat(genre, \"&limit=12\")).then(function (response) {\n    return response.json();\n  });\n};\nvar fetchSimilarResults = function fetchSimilarResults(movie) {\n  var randomGenre = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"shuffle\"])(movie.genres)[0];\n  return fetch(\"https://reactjs-cdp.herokuapp.com/movies?searchBy=genres&filter=\".concat(randomGenre, \"&limit=12\")).then(function (response) {\n    return response.json();\n  });\n};\n\n//# sourceURL=webpack:///./src/utils/api.js?");

/***/ }),

/***/ "./src/utils/helpers.js":
/*!******************************!*\
  !*** ./src/utils/helpers.js ***!
  \******************************/
/*! exports provided: getMovieYear, shuffle, sortByField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMovieYear\", function() { return getMovieYear; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shuffle\", function() { return shuffle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sortByField\", function() { return sortByField; });\nvar getMovieYear = function getMovieYear(releaseDate) {\n  return new Date(releaseDate).getFullYear();\n};\nvar shuffle = function shuffle(array) {\n  return array.sort(function () {\n    return Math.random() - 0.5;\n  });\n};\nvar sortByField = function sortByField(objs, field) {\n  return objs.sort(function (a, b) {\n    return a[field] < b[field] ? 1 : b[field] < a[field] ? -1 : 0;\n  });\n};\n\n//# sourceURL=webpack:///./src/utils/helpers.js?");

/***/ }),

/***/ "@babel/runtime/helpers/assertThisInitialized":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/assertThisInitialized" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/assertThisInitialized\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/assertThisInitialized%22?");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/classCallCheck\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/classCallCheck%22?");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/createClass\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/createClass%22?");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/defineProperty\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/defineProperty%22?");

/***/ }),

/***/ "@babel/runtime/helpers/getPrototypeOf":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/getPrototypeOf\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/getPrototypeOf%22?");

/***/ }),

/***/ "@babel/runtime/helpers/inherits":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/inherits\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/inherits%22?");

/***/ }),

/***/ "@babel/runtime/helpers/objectSpread":
/*!******************************************************!*\
  !*** external "@babel/runtime/helpers/objectSpread" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/objectSpread\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/objectSpread%22?");

/***/ }),

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/possibleConstructorReturn\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/possibleConstructorReturn%22?");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/regenerator%22?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"query-string\");\n\n//# sourceURL=webpack:///external_%22query-string%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-persist\");\n\n//# sourceURL=webpack:///external_%22redux-persist%22?");

/***/ }),

/***/ "redux-persist/lib/integration/react":
/*!******************************************************!*\
  !*** external "redux-persist/lib/integration/react" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-persist/lib/integration/react\");\n\n//# sourceURL=webpack:///external_%22redux-persist/lib/integration/react%22?");

/***/ }),

/***/ "redux-persist/lib/stateReconciler/autoMergeLevel2":
/*!********************************************************************!*\
  !*** external "redux-persist/lib/stateReconciler/autoMergeLevel2" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-persist/lib/stateReconciler/autoMergeLevel2\");\n\n//# sourceURL=webpack:///external_%22redux-persist/lib/stateReconciler/autoMergeLevel2%22?");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-persist/lib/storage\");\n\n//# sourceURL=webpack:///external_%22redux-persist/lib/storage%22?");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga\");\n\n//# sourceURL=webpack:///external_%22redux-saga%22?");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga/effects\");\n\n//# sourceURL=webpack:///external_%22redux-saga/effects%22?");

/***/ }),

/***/ "reselect":
/*!***************************!*\
  !*** external "reselect" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"reselect\");\n\n//# sourceURL=webpack:///external_%22reselect%22?");

/***/ })

/******/ });