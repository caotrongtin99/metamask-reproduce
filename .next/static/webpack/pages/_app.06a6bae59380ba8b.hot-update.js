"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi/providers/public */ \"./node_modules/wagmi/dist/providers/public.js\");\n/* harmony import */ var wagmi_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/connectors/coinbaseWallet */ \"./node_modules/wagmi/dist/connectors/coinbaseWallet.js\");\n/* harmony import */ var wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi/connectors/injected */ \"./node_modules/wagmi/dist/connectors/injected.js\");\n/* harmony import */ var wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi/connectors/metaMask */ \"./node_modules/wagmi/dist/connectors/metaMask.js\");\n\n\n\n\n\n\n\nconst { chains, publicClient, webSocketPublicClient } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.configureChains)([\n    wagmi__WEBPACK_IMPORTED_MODULE_2__.mainnet,\n    wagmi__WEBPACK_IMPORTED_MODULE_2__.sepolia\n], [\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_3__.publicProvider)()\n]);\nconst config = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.createConfig)({\n    autoConnect: true,\n    connectors: [\n        new wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_4__.MetaMaskConnector({\n            chains\n        }),\n        new wagmi_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_5__.CoinbaseWalletConnector({\n            chains,\n            options: {\n                appName: \"wagmi\"\n            }\n        }),\n        new wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_6__.InjectedConnector({\n            chains,\n            options: {\n                name: \"Injected\",\n                shimDisconnect: true\n            }\n        })\n    ],\n    publicClient,\n    webSocketPublicClient\n});\nfunction App(param) {\n    let { Component, pageProps } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_2__.WagmiConfig, {\n        config: config,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/macos/Documents/Coding/metamask-reproduce/pages/_app.js\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/macos/Documents/Coding/metamask-reproduce/pages/_app.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBT2Y7QUFDeUM7QUFDa0I7QUFDWjtBQUNBO0FBQzlELE1BQU0sRUFBRVMsTUFBTSxFQUFFQyxZQUFZLEVBQUVDLHFCQUFxQixFQUFFLEdBQUdWLHNEQUFlQSxDQUNyRTtJQUFDRSwwQ0FBT0E7SUFBRUMsMENBQU9BO0NBQUMsRUFDbEI7SUFBQ0Msc0VBQWNBO0NBQUc7QUFFcEIsTUFBTU8sU0FBU1YsbURBQVlBLENBQUM7SUFDMUJXLGFBQWE7SUFDYkMsWUFBWTtRQUNWLElBQUlOLHdFQUFpQkEsQ0FBQztZQUFFQztRQUFPO1FBQy9CLElBQUlILG9GQUF1QkEsQ0FBQztZQUMxQkc7WUFDQU0sU0FBUztnQkFDUEMsU0FBUztZQUNYO1FBQ0Y7UUFDQSxJQUFJVCx3RUFBaUJBLENBQUM7WUFDcEJFO1lBQ0FNLFNBQVM7Z0JBQ1BFLE1BQU07Z0JBQ05DLGdCQUFnQjtZQUNsQjtRQUNGO0tBQ0Q7SUFDRFI7SUFDQUM7QUFDRjtBQUNlLFNBQVNRLElBQUksS0FBd0I7UUFBeEIsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUUsR0FBeEI7SUFDMUIscUJBQ0UsOERBQUNyQiw4Q0FBV0E7UUFBQ1ksUUFBUUE7a0JBQ25CLDRFQUFDUTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCO0tBTndCRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQC9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB7XG4gIFdhZ21pQ29uZmlnLFxuICBjb25maWd1cmVDaGFpbnMsXG4gIGNyZWF0ZUNvbmZpZyxcbiAgbWFpbm5ldCxcbiAgc2Vwb2xpYSxcbn0gZnJvbSBcIndhZ21pXCI7XG5pbXBvcnQgeyBwdWJsaWNQcm92aWRlciB9IGZyb20gXCJ3YWdtaS9wcm92aWRlcnMvcHVibGljXCI7XG5pbXBvcnQgeyBDb2luYmFzZVdhbGxldENvbm5lY3RvciB9IGZyb20gXCJ3YWdtaS9jb25uZWN0b3JzL2NvaW5iYXNlV2FsbGV0XCI7XG5pbXBvcnQgeyBJbmplY3RlZENvbm5lY3RvciB9IGZyb20gXCJ3YWdtaS9jb25uZWN0b3JzL2luamVjdGVkXCI7XG5pbXBvcnQgeyBNZXRhTWFza0Nvbm5lY3RvciB9IGZyb20gXCJ3YWdtaS9jb25uZWN0b3JzL21ldGFNYXNrXCI7XG5jb25zdCB7IGNoYWlucywgcHVibGljQ2xpZW50LCB3ZWJTb2NrZXRQdWJsaWNDbGllbnQgfSA9IGNvbmZpZ3VyZUNoYWlucyhcbiAgW21haW5uZXQsIHNlcG9saWFdLFxuICBbcHVibGljUHJvdmlkZXIoKV1cbik7XG5jb25zdCBjb25maWcgPSBjcmVhdGVDb25maWcoe1xuICBhdXRvQ29ubmVjdDogdHJ1ZSxcbiAgY29ubmVjdG9yczogW1xuICAgIG5ldyBNZXRhTWFza0Nvbm5lY3Rvcih7IGNoYWlucyB9KSxcbiAgICBuZXcgQ29pbmJhc2VXYWxsZXRDb25uZWN0b3Ioe1xuICAgICAgY2hhaW5zLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBhcHBOYW1lOiBcIndhZ21pXCIsXG4gICAgICB9LFxuICAgIH0pLFxuICAgIG5ldyBJbmplY3RlZENvbm5lY3Rvcih7XG4gICAgICBjaGFpbnMsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIG5hbWU6IFwiSW5qZWN0ZWRcIixcbiAgICAgICAgc2hpbURpc2Nvbm5lY3Q6IHRydWUsXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBwdWJsaWNDbGllbnQsXG4gIHdlYlNvY2tldFB1YmxpY0NsaWVudCxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxXYWdtaUNvbmZpZyBjb25maWc9e2NvbmZpZ30+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9XYWdtaUNvbmZpZz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJXYWdtaUNvbmZpZyIsImNvbmZpZ3VyZUNoYWlucyIsImNyZWF0ZUNvbmZpZyIsIm1haW5uZXQiLCJzZXBvbGlhIiwicHVibGljUHJvdmlkZXIiLCJDb2luYmFzZVdhbGxldENvbm5lY3RvciIsIkluamVjdGVkQ29ubmVjdG9yIiwiTWV0YU1hc2tDb25uZWN0b3IiLCJjaGFpbnMiLCJwdWJsaWNDbGllbnQiLCJ3ZWJTb2NrZXRQdWJsaWNDbGllbnQiLCJjb25maWciLCJhdXRvQ29ubmVjdCIsImNvbm5lY3RvcnMiLCJvcHRpb25zIiwiYXBwTmFtZSIsIm5hbWUiLCJzaGltRGlzY29ubmVjdCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});