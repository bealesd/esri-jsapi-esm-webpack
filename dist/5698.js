"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([[5698],{

/***/ 5698:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  \"default\": () => (/* binding */ a)\n});\n\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js\nvar tslib_es6 = __webpack_require__(36663);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js\nvar Logger = __webpack_require__(13802);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js\nvar ensureType = __webpack_require__(7283);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/arrayUtils.js\nvar arrayUtils = __webpack_require__(7753);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js\nvar has = __webpack_require__(39994);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js\nvar Error = __webpack_require__(70375);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js\nvar subclass = __webpack_require__(40266);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/layers/FeatureLayerView2D.js + 18 modules\nvar FeatureLayerView2D = __webpack_require__(28854);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js\nvar property = __webpack_require__(81977);\n;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/layers/OGCFeatureLayerView.js\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.27/esri/copyright.txt for details.\n*/\nconst o=o=>{let t=class extends o{get availableFields(){return this.layer.fieldsIndex.fields.map((e=>e.name))}};return (0,tslib_es6._)([(0,property/* property */.Cb)()],t.prototype,\"layer\",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],t.prototype,\"availableFields\",null),t=(0,tslib_es6._)([(0,subclass/* subclass */.j)(\"esri.views.layers.OGCFeatureLayerView\")],t),t};\n\n;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/layers/OGCFeatureLayerView2D.js\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.27/esri/copyright.txt for details.\n*/\nlet t=class extends(o(FeatureLayerView2D[\"default\"])){supportsSpatialReference(r){return this.layer.serviceSupportsSpatialReference(r)}};t=(0,tslib_es6._)([(0,subclass/* subclass */.j)(\"esri.views.2d.layers.OGCFeatureLayerView2D\")],t);const a=t;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTY5OC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNvVCxZQUFZLHNCQUFzQixzQkFBc0Isd0RBQXdELE9BQU8sZUFBQyxFQUFFLDZCQUFDLGdDQUFnQyxlQUFDLEVBQUUsNkJBQUMsRUFBRSxZQUFZLHlDQUF5QyxlQUFDLEVBQUUsNEJBQUMsaURBQXNFOzs7QUNKcGxCO0FBQ0E7QUFDQTtBQUNBO0FBQytZLG9CQUFvQixDQUFDLENBQUMsNkJBQUMsR0FBRyw0QkFBNEIsdURBQXVELEVBQUUsZUFBQyxFQUFFLDRCQUFDLG1EQUFtRCxVQUErQiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXJjZ2lzL2NvcmUvdmlld3MvbGF5ZXJzL09HQ0ZlYXR1cmVMYXllclZpZXcuanM/MjM4OCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFyY2dpcy9jb3JlL3ZpZXdzLzJkL2xheWVycy9PR0NGZWF0dXJlTGF5ZXJWaWV3MkQuanM/MWYwMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cblNlZSBodHRwczovL2pzLmFyY2dpcy5jb20vNC4yNy9lc3JpL2NvcHlyaWdodC50eHQgZm9yIGRldGFpbHMuXG4qL1xuaW1wb3J0e18gYXMgZX1mcm9tXCIuLi8uLi9jaHVua3MvdHNsaWIuZXM2LmpzXCI7aW1wb3J0e3Byb3BlcnR5IGFzIHJ9ZnJvbVwiLi4vLi4vY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycy9wcm9wZXJ0eS5qc1wiO2ltcG9ydFwiLi4vLi4vY29yZS9hY2Nlc3NvclN1cHBvcnQvZW5zdXJlVHlwZS5qc1wiO2ltcG9ydFwiLi4vLi4vY29yZS9hcnJheVV0aWxzLmpzXCI7aW1wb3J0XCIuLi8uLi9jb3JlL2hhcy5qc1wiO2ltcG9ydHtzdWJjbGFzcyBhcyBzfWZyb21cIi4uLy4uL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMvc3ViY2xhc3MuanNcIjtjb25zdCBvPW89PntsZXQgdD1jbGFzcyBleHRlbmRzIG97Z2V0IGF2YWlsYWJsZUZpZWxkcygpe3JldHVybiB0aGlzLmxheWVyLmZpZWxkc0luZGV4LmZpZWxkcy5tYXAoKGU9PmUubmFtZSkpfX07cmV0dXJuIGUoW3IoKV0sdC5wcm90b3R5cGUsXCJsYXllclwiLHZvaWQgMCksZShbcih7cmVhZE9ubHk6ITB9KV0sdC5wcm90b3R5cGUsXCJhdmFpbGFibGVGaWVsZHNcIixudWxsKSx0PWUoW3MoXCJlc3JpLnZpZXdzLmxheWVycy5PR0NGZWF0dXJlTGF5ZXJWaWV3XCIpXSx0KSx0fTtleHBvcnR7byBhcyBkZWZhdWx0fTtcbiIsIi8qXG5BbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuU2VlIGh0dHBzOi8vanMuYXJjZ2lzLmNvbS80LjI3L2VzcmkvY29weXJpZ2h0LnR4dCBmb3IgZGV0YWlscy5cbiovXG5pbXBvcnR7XyBhcyByfWZyb21cIi4uLy4uLy4uL2NodW5rcy90c2xpYi5lczYuanNcIjtpbXBvcnRcIi4uLy4uLy4uL2NvcmUvTG9nZ2VyLmpzXCI7aW1wb3J0XCIuLi8uLi8uLi9jb3JlL2FjY2Vzc29yU3VwcG9ydC9lbnN1cmVUeXBlLmpzXCI7aW1wb3J0XCIuLi8uLi8uLi9jb3JlL2FycmF5VXRpbHMuanNcIjtpbXBvcnRcIi4uLy4uLy4uL2NvcmUvaGFzLmpzXCI7aW1wb3J0XCIuLi8uLi8uLi9jb3JlL0Vycm9yLmpzXCI7aW1wb3J0e3N1YmNsYXNzIGFzIGV9ZnJvbVwiLi4vLi4vLi4vY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycy9zdWJjbGFzcy5qc1wiO2ltcG9ydCBzIGZyb21cIi4vRmVhdHVyZUxheWVyVmlldzJELmpzXCI7aW1wb3J0IG8gZnJvbVwiLi4vLi4vbGF5ZXJzL09HQ0ZlYXR1cmVMYXllclZpZXcuanNcIjtsZXQgdD1jbGFzcyBleHRlbmRzKG8ocykpe3N1cHBvcnRzU3BhdGlhbFJlZmVyZW5jZShyKXtyZXR1cm4gdGhpcy5sYXllci5zZXJ2aWNlU3VwcG9ydHNTcGF0aWFsUmVmZXJlbmNlKHIpfX07dD1yKFtlKFwiZXNyaS52aWV3cy4yZC5sYXllcnMuT0dDRmVhdHVyZUxheWVyVmlldzJEXCIpXSx0KTtjb25zdCBhPXQ7ZXhwb3J0e2EgYXMgZGVmYXVsdH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5698\n");

/***/ })

}]);