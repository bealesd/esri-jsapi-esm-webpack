"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([[5009],{

/***/ 35009:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   previewWebStyleSymbol: () => (/* binding */ h)\n/* harmony export */ });\n/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66341);\n/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95550);\n/* harmony import */ var _previewUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83773);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59672);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.27/esri/copyright.txt for details.\n*/\nfunction h(e,i,h){const s=e.thumbnail&&e.thumbnail.url;return s?(0,_request_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(s,{responseType:\"image\"}).then((t=>{const e=r(t.data,h);return h&&h.node?(h.node.appendChild(e),h.node):e})):(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .fetchWebStyleSymbol */ .Q8)(e).then((t=>t?i(t,h):null))}function r(t,n){const h=!/\\\\.svg$/i.test(t.src)&&n&&n.disableUpsampling,r=Math.max(t.width,t.height);let s=n&&null!=n.maxSize?(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .pt2px */ .F2)(n.maxSize):_previewUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .SymbolSizeDefaults */ .b_.maxSize;h&&(s=Math.min(r,s));const o=\"number\"==typeof n?.size?n?.size:null,m=Math.min(s,null!=o?(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .pt2px */ .F2)(o):r);if(m!==r){const e=0!==t.width&&0!==t.height?t.width/t.height:1;e>=1?(t.width=m,t.height=m/e):(t.width=m*e,t.height=m)}return t}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzUwMDkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQzBMLGtCQUFrQixxQ0FBcUMsU0FBUyx1REFBQyxJQUFJLHFCQUFxQixZQUFZLG9CQUFvQixrREFBa0QsR0FBRyx3RUFBQyw2QkFBNkIsZ0JBQWdCLHFGQUFxRix5QkFBeUIscUVBQUMsWUFBWSwwRUFBQyxTQUFTLHFCQUFxQixtRUFBbUUscUVBQUMsT0FBTyxVQUFVLHFEQUFxRCx1REFBdUQsU0FBNEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFyY2dpcy9jb3JlL3N5bWJvbHMvc3VwcG9ydC9wcmV2aWV3V2ViU3R5bGVTeW1ib2wuanM/YTIwNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cblNlZSBodHRwczovL2pzLmFyY2dpcy5jb20vNC4yNy9lc3JpL2NvcHlyaWdodC50eHQgZm9yIGRldGFpbHMuXG4qL1xuaW1wb3J0IHQgZnJvbVwiLi4vLi4vcmVxdWVzdC5qc1wiO2ltcG9ydHtwdDJweCBhcyBlfWZyb21cIi4uLy4uL2NvcmUvc2NyZWVuVXRpbHMuanNcIjtpbXBvcnR7U3ltYm9sU2l6ZURlZmF1bHRzIGFzIGl9ZnJvbVwiLi9wcmV2aWV3VXRpbHMuanNcIjtpbXBvcnR7ZmV0Y2hXZWJTdHlsZVN5bWJvbCBhcyBufWZyb21cIi4vdXRpbHMuanNcIjtmdW5jdGlvbiBoKGUsaSxoKXtjb25zdCBzPWUudGh1bWJuYWlsJiZlLnRodW1ibmFpbC51cmw7cmV0dXJuIHM/dChzLHtyZXNwb25zZVR5cGU6XCJpbWFnZVwifSkudGhlbigodD0+e2NvbnN0IGU9cih0LmRhdGEsaCk7cmV0dXJuIGgmJmgubm9kZT8oaC5ub2RlLmFwcGVuZENoaWxkKGUpLGgubm9kZSk6ZX0pKTpuKGUpLnRoZW4oKHQ9PnQ/aSh0LGgpOm51bGwpKX1mdW5jdGlvbiByKHQsbil7Y29uc3QgaD0hL1xcXFwuc3ZnJC9pLnRlc3QodC5zcmMpJiZuJiZuLmRpc2FibGVVcHNhbXBsaW5nLHI9TWF0aC5tYXgodC53aWR0aCx0LmhlaWdodCk7bGV0IHM9biYmbnVsbCE9bi5tYXhTaXplP2Uobi5tYXhTaXplKTppLm1heFNpemU7aCYmKHM9TWF0aC5taW4ocixzKSk7Y29uc3Qgbz1cIm51bWJlclwiPT10eXBlb2Ygbj8uc2l6ZT9uPy5zaXplOm51bGwsbT1NYXRoLm1pbihzLG51bGwhPW8/ZShvKTpyKTtpZihtIT09cil7Y29uc3QgZT0wIT09dC53aWR0aCYmMCE9PXQuaGVpZ2h0P3Qud2lkdGgvdC5oZWlnaHQ6MTtlPj0xPyh0LndpZHRoPW0sdC5oZWlnaHQ9bS9lKToodC53aWR0aD1tKmUsdC5oZWlnaHQ9bSl9cmV0dXJuIHR9ZXhwb3J0e2ggYXMgcHJldmlld1dlYlN0eWxlU3ltYm9sfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///35009\n");

/***/ })

}]);