"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([[8699],{

/***/ 98699:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   registerFunctions: () => (/* binding */ d)\n/* harmony export */ });\n/* harmony import */ var _executionError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7182);\n/* harmony import */ var _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94837);\n/* harmony import */ var _fieldStats_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45573);\n/* harmony import */ var _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3362);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.27/esri/copyright.txt for details.\n*/\nasync function f(n,t,r,i,f,d){if(1===i.length){if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.m)(i[0]))return (0,_fieldStats_js__WEBPACK_IMPORTED_MODULE_2__/* .calculateStat */ .t)(n,i[0],(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.D)(i[1],-1));if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.o)(i[0]))return (0,_fieldStats_js__WEBPACK_IMPORTED_MODULE_2__/* .calculateStat */ .t)(n,i[0].toArray(),(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.D)(i[1],-1))}else if(2===i.length){if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.m)(i[0]))return (0,_fieldStats_js__WEBPACK_IMPORTED_MODULE_2__/* .calculateStat */ .t)(n,i[0],(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.D)(i[1],-1));if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.o)(i[0]))return (0,_fieldStats_js__WEBPACK_IMPORTED_MODULE_2__/* .calculateStat */ .t)(n,i[0].toArray(),(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.D)(i[1],-1));if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.r)(i[0])){const r=await i[0].load(),e=await l(_core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_3__.WhereClause.create(i[1],r.getFieldsIndex()),d,f);return i[0].calculateStatistic(n,e,(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.D)(i[2],1e3),t.abortSignal)}}else if(3===i.length&&(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.r)(i[0])){const r=await i[0].load(),e=await l(_core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_3__.WhereClause.create(i[1],r.getFieldsIndex()),d,f);return i[0].calculateStatistic(n,e,(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.D)(i[2],1e3),t.abortSignal)}return (0,_fieldStats_js__WEBPACK_IMPORTED_MODULE_2__/* .calculateStat */ .t)(n,i,-1)}async function l(n,t,r){const e=n.getVariables();if(e.length>0){const a=[];for(let n=0;n<e.length;n++){const i={name:e[n]};a.push(await t.evaluateIdentifier(r,i))}const i={};for(let n=0;n<e.length;n++)i[e[n]]=a[n];return n.parameters=i,n}return n}function d(c){\"async\"===c.mode&&(c.functions.stdev=function(n,t){return c.standardFunctionAsync(n,t,((t,r,e)=>f(\"stdev\",t,r,e,n,c)))},c.functions.variance=function(n,t){return c.standardFunctionAsync(n,t,((t,r,e)=>f(\"variance\",t,r,e,n,c)))},c.functions.average=function(n,t){return c.standardFunctionAsync(n,t,((t,r,e)=>f(\"mean\",t,r,e,n,c)))},c.functions.mean=function(n,t){return c.standardFunctionAsync(n,t,((t,r,e)=>f(\"mean\",t,r,e,n,c)))},c.functions.sum=function(n,t){return c.standardFunctionAsync(n,t,((t,r,e)=>f(\"sum\",t,r,e,n,c)))},c.functions.min=function(n,t){return c.standardFunctionAsync(n,t,((t,r,e)=>f(\"min\",t,r,e,n,c)))},c.functions.max=function(n,t){return c.standardFunctionAsync(n,t,((t,r,e)=>f(\"max\",t,r,e,n,c)))},c.functions.count=function(o,u){return c.standardFunctionAsync(o,u,((c,f,l)=>{if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.C)(l,1,1,o,u),(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.r)(l[0]))return l[0].count(c.abortSignal);if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.m)(l[0])||(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.c)(l[0]))return l[0].length;if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.o)(l[0]))return l[0].length();throw new _executionError_js__WEBPACK_IMPORTED_MODULE_0__/* .ArcadeExecutionError */ .aV(o,_executionError_js__WEBPACK_IMPORTED_MODULE_0__/* .ExecutionErrorCodes */ .rH.InvalidParameter,u)}))})}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTg2OTkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNzUiw4QkFBOEIsaUJBQWlCLEdBQUcsMkRBQUMsY0FBYyxzRUFBQyxRQUFRLDJEQUFDLFdBQVcsR0FBRywyREFBQyxjQUFjLHNFQUFDLGtCQUFrQiwyREFBQyxXQUFXLHNCQUFzQixHQUFHLDJEQUFDLGNBQWMsc0VBQUMsUUFBUSwyREFBQyxXQUFXLEdBQUcsMkRBQUMsY0FBYyxzRUFBQyxrQkFBa0IsMkRBQUMsV0FBVyxHQUFHLDJEQUFDLFFBQVEsb0NBQW9DLGlFQUFDLHNDQUFzQyxtQ0FBbUMsMkRBQUMsMkJBQTJCLHNCQUFzQiwyREFBQyxRQUFRLG9DQUFvQyxpRUFBQyxzQ0FBc0MsbUNBQW1DLDJEQUFDLDBCQUEwQixPQUFPLHNFQUFDLFNBQVMsd0JBQXdCLHlCQUF5QixlQUFlLFdBQVcsWUFBWSxXQUFXLEtBQUssU0FBUyxXQUFXLHdDQUF3QyxXQUFXLFlBQVksV0FBVyxpQkFBaUIsd0JBQXdCLFNBQVMsY0FBYyxtREFBbUQsb0VBQW9FLG9DQUFvQyx1RUFBdUUsbUNBQW1DLG1FQUFtRSxnQ0FBZ0MsbUVBQW1FLCtCQUErQixrRUFBa0UsK0JBQStCLGtFQUFrRSwrQkFBK0Isa0VBQWtFLGlDQUFpQyw4Q0FBOEMsR0FBRywyREFBQyxZQUFZLDJEQUFDLHdDQUF3QyxHQUFHLDJEQUFDLFFBQVEsMkRBQUMsMEJBQTBCLEdBQUcsMkRBQUMsNEJBQTRCLFVBQVUsOEVBQUMsR0FBRyw2RUFBQyxxQkFBcUIsR0FBRyxFQUFpQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXJjZ2lzL2NvcmUvYXJjYWRlL2Z1bmN0aW9ucy9mZWF0dXJlc2V0c3RhdHMuanM/MDhiZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cblNlZSBodHRwczovL2pzLmFyY2dpcy5jb20vNC4yNy9lc3JpL2NvcHlyaWdodC50eHQgZm9yIGRldGFpbHMuXG4qL1xuaW1wb3J0e0FyY2FkZUV4ZWN1dGlvbkVycm9yIGFzIG4sRXhlY3V0aW9uRXJyb3JDb2RlcyBhcyB0fWZyb21cIi4uL2V4ZWN1dGlvbkVycm9yLmpzXCI7aW1wb3J0e0MgYXMgcixyIGFzIGUsbSBhcyBhLGMgYXMgaSxvIGFzIHMsRCBhcyBjfWZyb21cIi4uLy4uL2NodW5rcy9sYW5ndWFnZVV0aWxzLmpzXCI7aW1wb3J0e2NhbGN1bGF0ZVN0YXQgYXMgb31mcm9tXCIuL2ZpZWxkU3RhdHMuanNcIjtpbXBvcnR7V2hlcmVDbGF1c2UgYXMgdX1mcm9tXCIuLi8uLi9jb3JlL3NxbC9XaGVyZUNsYXVzZS5qc1wiO2FzeW5jIGZ1bmN0aW9uIGYobix0LHIsaSxmLGQpe2lmKDE9PT1pLmxlbmd0aCl7aWYoYShpWzBdKSlyZXR1cm4gbyhuLGlbMF0sYyhpWzFdLC0xKSk7aWYocyhpWzBdKSlyZXR1cm4gbyhuLGlbMF0udG9BcnJheSgpLGMoaVsxXSwtMSkpfWVsc2UgaWYoMj09PWkubGVuZ3RoKXtpZihhKGlbMF0pKXJldHVybiBvKG4saVswXSxjKGlbMV0sLTEpKTtpZihzKGlbMF0pKXJldHVybiBvKG4saVswXS50b0FycmF5KCksYyhpWzFdLC0xKSk7aWYoZShpWzBdKSl7Y29uc3Qgcj1hd2FpdCBpWzBdLmxvYWQoKSxlPWF3YWl0IGwodS5jcmVhdGUoaVsxXSxyLmdldEZpZWxkc0luZGV4KCkpLGQsZik7cmV0dXJuIGlbMF0uY2FsY3VsYXRlU3RhdGlzdGljKG4sZSxjKGlbMl0sMWUzKSx0LmFib3J0U2lnbmFsKX19ZWxzZSBpZigzPT09aS5sZW5ndGgmJmUoaVswXSkpe2NvbnN0IHI9YXdhaXQgaVswXS5sb2FkKCksZT1hd2FpdCBsKHUuY3JlYXRlKGlbMV0sci5nZXRGaWVsZHNJbmRleCgpKSxkLGYpO3JldHVybiBpWzBdLmNhbGN1bGF0ZVN0YXRpc3RpYyhuLGUsYyhpWzJdLDFlMyksdC5hYm9ydFNpZ25hbCl9cmV0dXJuIG8obixpLC0xKX1hc3luYyBmdW5jdGlvbiBsKG4sdCxyKXtjb25zdCBlPW4uZ2V0VmFyaWFibGVzKCk7aWYoZS5sZW5ndGg+MCl7Y29uc3QgYT1bXTtmb3IobGV0IG49MDtuPGUubGVuZ3RoO24rKyl7Y29uc3QgaT17bmFtZTplW25dfTthLnB1c2goYXdhaXQgdC5ldmFsdWF0ZUlkZW50aWZpZXIocixpKSl9Y29uc3QgaT17fTtmb3IobGV0IG49MDtuPGUubGVuZ3RoO24rKylpW2Vbbl1dPWFbbl07cmV0dXJuIG4ucGFyYW1ldGVycz1pLG59cmV0dXJuIG59ZnVuY3Rpb24gZChjKXtcImFzeW5jXCI9PT1jLm1vZGUmJihjLmZ1bmN0aW9ucy5zdGRldj1mdW5jdGlvbihuLHQpe3JldHVybiBjLnN0YW5kYXJkRnVuY3Rpb25Bc3luYyhuLHQsKCh0LHIsZSk9PmYoXCJzdGRldlwiLHQscixlLG4sYykpKX0sYy5mdW5jdGlvbnMudmFyaWFuY2U9ZnVuY3Rpb24obix0KXtyZXR1cm4gYy5zdGFuZGFyZEZ1bmN0aW9uQXN5bmMobix0LCgodCxyLGUpPT5mKFwidmFyaWFuY2VcIix0LHIsZSxuLGMpKSl9LGMuZnVuY3Rpb25zLmF2ZXJhZ2U9ZnVuY3Rpb24obix0KXtyZXR1cm4gYy5zdGFuZGFyZEZ1bmN0aW9uQXN5bmMobix0LCgodCxyLGUpPT5mKFwibWVhblwiLHQscixlLG4sYykpKX0sYy5mdW5jdGlvbnMubWVhbj1mdW5jdGlvbihuLHQpe3JldHVybiBjLnN0YW5kYXJkRnVuY3Rpb25Bc3luYyhuLHQsKCh0LHIsZSk9PmYoXCJtZWFuXCIsdCxyLGUsbixjKSkpfSxjLmZ1bmN0aW9ucy5zdW09ZnVuY3Rpb24obix0KXtyZXR1cm4gYy5zdGFuZGFyZEZ1bmN0aW9uQXN5bmMobix0LCgodCxyLGUpPT5mKFwic3VtXCIsdCxyLGUsbixjKSkpfSxjLmZ1bmN0aW9ucy5taW49ZnVuY3Rpb24obix0KXtyZXR1cm4gYy5zdGFuZGFyZEZ1bmN0aW9uQXN5bmMobix0LCgodCxyLGUpPT5mKFwibWluXCIsdCxyLGUsbixjKSkpfSxjLmZ1bmN0aW9ucy5tYXg9ZnVuY3Rpb24obix0KXtyZXR1cm4gYy5zdGFuZGFyZEZ1bmN0aW9uQXN5bmMobix0LCgodCxyLGUpPT5mKFwibWF4XCIsdCxyLGUsbixjKSkpfSxjLmZ1bmN0aW9ucy5jb3VudD1mdW5jdGlvbihvLHUpe3JldHVybiBjLnN0YW5kYXJkRnVuY3Rpb25Bc3luYyhvLHUsKChjLGYsbCk9PntpZihyKGwsMSwxLG8sdSksZShsWzBdKSlyZXR1cm4gbFswXS5jb3VudChjLmFib3J0U2lnbmFsKTtpZihhKGxbMF0pfHxpKGxbMF0pKXJldHVybiBsWzBdLmxlbmd0aDtpZihzKGxbMF0pKXJldHVybiBsWzBdLmxlbmd0aCgpO3Rocm93IG5ldyBuKG8sdC5JbnZhbGlkUGFyYW1ldGVyLHUpfSkpfSl9ZXhwb3J0e2QgYXMgcmVnaXN0ZXJGdW5jdGlvbnN9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///98699\n");

/***/ })

}]);