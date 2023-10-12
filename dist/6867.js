"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([[6867],{

/***/ 16867:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   submitValidateNetworkTopologyJob: () => (/* binding */ n),\n/* harmony export */   validateNetworkTopology: () => (/* binding */ a)\n/* harmony export */ });\n/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66341);\n/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70375);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84238);\n/* harmony import */ var _support_ValidateNetworkTopologyResult_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55420);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.27/esri/copyright.txt for details.\n*/\nasync function a(o,a,n){const d=(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .parseUrl */ .en)(o),l=a.toJSON();a.validationSet&&(l.validationSet=JSON.stringify(a.validationSet));const u={...l,returnEdits:!0,f:\"json\"},p=(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .encode */ .cv)({...d.query,...u}),m=(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .asValidOptions */ .lA)(p,{...n,method:\"post\"}),v=`${d.path}/validateNetworkTopology`,{data:y}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(v,m),c=_support_ValidateNetworkTopologyResult_js__WEBPACK_IMPORTED_MODULE_3__/* [\"default\"] */ .Z.fromJSON(y);return c.serviceEdits=c.serviceEdits?.map((t=>({layerId:t.id,editedFeatures:t.editedFeatures})))??[],c}async function n(s,a,n){if(!a.gdbVersion)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* [\"default\"] */ .Z(\"submit-validate-network-topology-job:missing-gdb-version\",\"version is missing\");const d=(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .parseUrl */ .en)(s),l=a.toJSON();a.validationSet&&(l.validationSet=JSON.stringify(a.validationSet));const u=(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .asValidOptions */ .lA)(d.query,{query:(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .encode */ .cv)({...l,returnEdits:!0,async:!0,f:\"json\"}),...n,method:\"post\"}),p=`${d.path}/validateNetworkTopology`,{data:m}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(p,u);return m?m.statusUrl:null}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTY4NjcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDb00sd0JBQXdCLFFBQVEsNkRBQUMsaUJBQWlCLG1FQUFtRSxTQUFTLDZCQUE2QixHQUFHLDJEQUFDLEVBQUUsZ0JBQWdCLElBQUksbUVBQUMsSUFBSSxtQkFBbUIsT0FBTyxPQUFPLDJCQUEyQixPQUFPLE9BQU8sdURBQUMsUUFBUSwwRkFBQyxhQUFhLGdEQUFnRCw2Q0FBNkMsVUFBVSx3QkFBd0IsMkJBQTJCLCtEQUFDLGtGQUFrRixRQUFRLDZEQUFDLGlCQUFpQixtRUFBbUUsUUFBUSxtRUFBQyxVQUFVLE1BQU0sMkRBQUMsRUFBRSxzQ0FBc0MscUJBQXFCLE9BQU8sT0FBTywyQkFBMkIsT0FBTyxPQUFPLHVEQUFDLE1BQU0sMEJBQXFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcmNnaXMvY29yZS9yZXN0L25ldHdvcmtzL3ZhbGlkYXRlTmV0d29ya1RvcG9sb2d5LmpzP2E5ZTQiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbkFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG5TZWUgaHR0cHM6Ly9qcy5hcmNnaXMuY29tLzQuMjcvZXNyaS9jb3B5cmlnaHQudHh0IGZvciBkZXRhaWxzLlxuKi9cbmltcG9ydCB0IGZyb21cIi4uLy4uL3JlcXVlc3QuanNcIjtpbXBvcnQgbyBmcm9tXCIuLi8uLi9jb3JlL0Vycm9yLmpzXCI7aW1wb3J0e3BhcnNlVXJsIGFzIGksZW5jb2RlIGFzIGUsYXNWYWxpZE9wdGlvbnMgYXMgcn1mcm9tXCIuLi91dGlscy5qc1wiO2ltcG9ydCBzIGZyb21cIi4vc3VwcG9ydC9WYWxpZGF0ZU5ldHdvcmtUb3BvbG9neVJlc3VsdC5qc1wiO2FzeW5jIGZ1bmN0aW9uIGEobyxhLG4pe2NvbnN0IGQ9aShvKSxsPWEudG9KU09OKCk7YS52YWxpZGF0aW9uU2V0JiYobC52YWxpZGF0aW9uU2V0PUpTT04uc3RyaW5naWZ5KGEudmFsaWRhdGlvblNldCkpO2NvbnN0IHU9ey4uLmwscmV0dXJuRWRpdHM6ITAsZjpcImpzb25cIn0scD1lKHsuLi5kLnF1ZXJ5LC4uLnV9KSxtPXIocCx7Li4ubixtZXRob2Q6XCJwb3N0XCJ9KSx2PWAke2QucGF0aH0vdmFsaWRhdGVOZXR3b3JrVG9wb2xvZ3lgLHtkYXRhOnl9PWF3YWl0IHQodixtKSxjPXMuZnJvbUpTT04oeSk7cmV0dXJuIGMuc2VydmljZUVkaXRzPWMuc2VydmljZUVkaXRzPy5tYXAoKHQ9Pih7bGF5ZXJJZDp0LmlkLGVkaXRlZEZlYXR1cmVzOnQuZWRpdGVkRmVhdHVyZXN9KSkpPz9bXSxjfWFzeW5jIGZ1bmN0aW9uIG4ocyxhLG4pe2lmKCFhLmdkYlZlcnNpb24pdGhyb3cgbmV3IG8oXCJzdWJtaXQtdmFsaWRhdGUtbmV0d29yay10b3BvbG9neS1qb2I6bWlzc2luZy1nZGItdmVyc2lvblwiLFwidmVyc2lvbiBpcyBtaXNzaW5nXCIpO2NvbnN0IGQ9aShzKSxsPWEudG9KU09OKCk7YS52YWxpZGF0aW9uU2V0JiYobC52YWxpZGF0aW9uU2V0PUpTT04uc3RyaW5naWZ5KGEudmFsaWRhdGlvblNldCkpO2NvbnN0IHU9cihkLnF1ZXJ5LHtxdWVyeTplKHsuLi5sLHJldHVybkVkaXRzOiEwLGFzeW5jOiEwLGY6XCJqc29uXCJ9KSwuLi5uLG1ldGhvZDpcInBvc3RcIn0pLHA9YCR7ZC5wYXRofS92YWxpZGF0ZU5ldHdvcmtUb3BvbG9neWAse2RhdGE6bX09YXdhaXQgdChwLHUpO3JldHVybiBtP20uc3RhdHVzVXJsOm51bGx9ZXhwb3J0e24gYXMgc3VibWl0VmFsaWRhdGVOZXR3b3JrVG9wb2xvZ3lKb2IsYSBhcyB2YWxpZGF0ZU5ldHdvcmtUb3BvbG9neX07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///16867\n");

/***/ })

}]);