# esri-jsapi-esm-webpack

This repo demontrates how to build the [ArcGIS Maps SDK for JavaScript ES modules](https://www.npmjs.com/package/@arcgis/core) with [webpack](https://www.npmjs.com/package/webpack). Current version @arcgis/core 4.27.0.

## Getting Started

### Pre Requisites
 - node
 - npm
 - webpack npm global install

### Install Packages 
1. cd to [_root_](./)  
2. ```npm install``` to install [package.json](./package.json) libraries

### Bundling
1. _webpack.config.js_ - bundling config for ESM javascript and css, and copying @arcgis/core/asset files
2. ```npx webpack``` or ```npm run build``` - bundled files in [./dist](./dist/)

### Running Site
1. Reference bundled files in [./dist_](./dist/) in [./index.html](./index.html)  
2. Reference copied [assets](./dist/assets/) esriConfig.assetsPath = "./assets";
2. Use vscode liveserver to serve [./index.html](./index.html) or ```npm run serve``` (currently not serving static files correctly)

### Refernces
- [Build with ES modules - ESRI](https://developers.arcgis.com/javascript/latest/es-modules/)
- [Webpack](https://webpack.js.org/)