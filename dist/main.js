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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/three/build/three.js":
/*!*******************************************!*\
  !*** ./node_modules/three/build/three.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_three_build_three_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/three/build/three.js */ \"./node_modules/three/build/three.js\");\n/* harmony import */ var _node_modules_three_build_three_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_three_build_three_js__WEBPACK_IMPORTED_MODULE_0__);\nconsole.log('hello');\n\nvar scene, camera, renderer, cube;\nvar ADD = 0.01;\n\nvar createCube = function createCube() {\n  var geometry = new _node_modules_three_build_three_js__WEBPACK_IMPORTED_MODULE_0__[\"BoxGeometry\"](1, 1, 1);\n  var material = new _node_modules_three_build_three_js__WEBPACK_IMPORTED_MODULE_0__[\"MeshBasicMaterial\"]({\n    color: 0x00a1cb\n  });\n  cube = new _node_modules_three_build_three_js__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](geometry, material);\n  scene.add(cube);\n};\n\nvar init = function init() {\n  // create the scene\n  scene = new _node_modules_three_build_three_js__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]();\n  scene.background = new _node_modules_three_build_three_js__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](0xffffee); // create an locate the camera\n\n  camera = new _node_modules_three_build_three_js__WEBPACK_IMPORTED_MODULE_0__[\"PerspectiveCamera\"](75, window.innerWidth / window.innerHeight, 1, 1000);\n  camera.position.z = 5;\n  createCube(); // create the renderer   \n\n  renderer = new _node_modules_three_build_three_js__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]();\n  renderer.setSize(window.innerWidth, window.innerHeight);\n  document.body.appendChild(renderer.domElement);\n};\n\nvar mainLoop = function mainLoop() {\n  // cube.position.x += ADD;    \n  // cube.rotation.z -= ADD;\n  if (cube.position.x <= -3 || cube.position.x >= 3) ADD *= -1;\n  renderer.render(scene, camera);\n  requestAnimationFrame(mainLoop);\n};\n\ninit();\nmainLoop();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygnaGVsbG8nKVxuXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICcuLi9ub2RlX21vZHVsZXMvdGhyZWUvYnVpbGQvdGhyZWUuanMnO1xuXG5sZXQgc2NlbmUsIGNhbWVyYSwgcmVuZGVyZXIsIGN1YmU7XG5sZXQgQUREID0gMC4wMTtcblxubGV0IGNyZWF0ZUN1YmUgPSBmdW5jdGlvbigpe1xuICAgbGV0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEsMSwxKTtcbiAgIGxldCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7Y29sb3I6MHgwMGExY2J9KTtcbiAgIGN1YmUgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpXG4gICBzY2VuZS5hZGQoY3ViZSk7XG59O1xuXG5sZXQgaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgLy8gY3JlYXRlIHRoZSBzY2VuZVxuICAgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgIHNjZW5lLmJhY2tncm91bmQgPSBuZXcgVEhSRUUuQ29sb3IoMHhmZmZmZWUpO1xuICAgXG4gICAvLyBjcmVhdGUgYW4gbG9jYXRlIHRoZSBjYW1lcmFcbiAgIGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg3NSwgXG4gICAgICAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCwgXG4gICAgICAgICAgICAgICAxLCAxMDAwKTtcbiAgIGNhbWVyYS5wb3NpdGlvbi56ID0gNTtcbiAgIFxuICAgY3JlYXRlQ3ViZSgpO1xuICAgXG4gICAvLyBjcmVhdGUgdGhlIHJlbmRlcmVyICAgXG4gICByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCk7ICAgXG4gICByZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgXG4gICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuIH07XG5cblxubGV0IG1haW5Mb29wID0gZnVuY3Rpb24oKSB7XG4gICAvLyBjdWJlLnBvc2l0aW9uLnggKz0gQUREOyAgICBcbiAgIC8vIGN1YmUucm90YXRpb24ueiAtPSBBREQ7XG4gICBcbiAgIGlmKGN1YmUucG9zaXRpb24ueCA8PSAtMyB8fCBjdWJlLnBvc2l0aW9uLnggPj0gMylcbiAgICAgIEFERCAqPSAtMTtcbiAgIFxuICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG1haW5Mb29wKTtcbiB9O1xuXG5cbmluaXQoKVxubWFpbkxvb3AoKSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });