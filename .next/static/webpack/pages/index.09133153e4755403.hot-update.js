"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const { connect, connectors, error, isLoading, pendingConnector } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useConnect)();\n    const { address } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useAccount)();\n    const { disconnect } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useDisconnect)();\n    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setMounted(true);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: mounted ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"flex min-h-screen flex-col items-center justify-between p-24 bg-white text-black\",\n            children: [\n                connectors.map((connector)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>connect({\n                                connector\n                            }),\n                        className: \"border boder-1 border-black rounded-sm px-3 py-1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: connector.name\n                        }, void 0, false, {\n                            fileName: \"/Users/macos/Documents/Coding/metamask-reproduce/pages/index.js\",\n                            lineNumber: 28,\n                            columnNumber: 15\n                        }, this)\n                    }, connector.id, false, {\n                        fileName: \"/Users/macos/Documents/Coding/metamask-reproduce/pages/index.js\",\n                        lineNumber: 22,\n                        columnNumber: 13\n                    }, this)),\n                error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: error.message\n                }, void 0, false, {\n                    fileName: \"/Users/macos/Documents/Coding/metamask-reproduce/pages/index.js\",\n                    lineNumber: 32,\n                    columnNumber: 21\n                }, this),\n                address ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Address: \",\n                                address\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/macos/Documents/Coding/metamask-reproduce/pages/index.js\",\n                            lineNumber: 35,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"px-3 py-1 border border-black rounded-sm\",\n                            onClick: disconnect,\n                            children: \"Log out\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macos/Documents/Coding/metamask-reproduce/pages/index.js\",\n                            lineNumber: 36,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macos/Documents/Coding/metamask-reproduce/pages/index.js\",\n                    lineNumber: 34,\n                    columnNumber: 13\n                }, this) : null\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/macos/Documents/Coding/metamask-reproduce/pages/index.js\",\n            lineNumber: 18,\n            columnNumber: 9\n        }, this) : null\n    }, void 0, false, {\n        fileName: \"/Users/macos/Documents/Coding/metamask-reproduce/pages/index.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"6Iux8pbzYbV/iLnQRzlcTGMFqOE=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_2__.useConnect,\n        wagmi__WEBPACK_IMPORTED_MODULE_2__.useAccount,\n        wagmi__WEBPACK_IMPORTED_MODULE_2__.useDisconnect\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE0QztBQUNrQjtBQUUvQyxTQUFTSzs7SUFDdEIsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRUMsS0FBSyxFQUFFQyxTQUFTLEVBQUVDLGdCQUFnQixFQUFFLEdBQy9EUCxpREFBVUE7SUFDWixNQUFNLEVBQUVRLE9BQU8sRUFBRSxHQUFHVCxpREFBVUE7SUFDOUIsTUFBTSxFQUFFVSxVQUFVLEVBQUUsR0FBR1Isb0RBQWFBO0lBQ3BDLE1BQU0sQ0FBQ1MsU0FBU0MsV0FBVyxHQUFHYiwrQ0FBUUEsQ0FBQztJQUV2Q0QsZ0RBQVNBLENBQUM7UUFDUmMsV0FBVztJQUNiLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDQztrQkFDRUYsd0JBQ0MsOERBQUNHO1lBQ0NDLFdBQVk7O2dCQUVYVixXQUFXVyxHQUFHLENBQUMsQ0FBQ0MsMEJBQ2YsOERBQUNDO3dCQUdDQyxTQUFTLElBQU1mLFFBQVE7Z0NBQUVhOzRCQUFVO3dCQUNuQ0YsV0FBVTtrQ0FFViw0RUFBQ0s7c0NBQUdILFVBQVVJLElBQUk7Ozs7Ozt1QkFKYkosVUFBVUssRUFBRTs7Ozs7Z0JBUXBCaEIsdUJBQVMsOERBQUNpQjs4QkFBS2pCLE1BQU1rQixPQUFPOzs7Ozs7Z0JBQzVCZix3QkFDQyw4REFBQ2M7O3NDQUNDLDhEQUFDSDs7Z0NBQUU7Z0NBQVVYOzs7Ozs7O3NDQUNiLDhEQUFDUzs0QkFDQ0gsV0FBVTs0QkFDVkksU0FBU1Q7c0NBQ1Y7Ozs7Ozs7Ozs7OzJCQUlEOzs7Ozs7bUJBRUo7Ozs7OztBQUdWO0dBNUN3QlA7O1FBRXBCRiw2Q0FBVUE7UUFDUUQsNkNBQVVBO1FBQ1BFLGdEQUFhQTs7O0tBSmRDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQWNjb3VudCwgdXNlQ29ubmVjdCwgdXNlRGlzY29ubmVjdCB9IGZyb20gXCJ3YWdtaVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IGNvbm5lY3QsIGNvbm5lY3RvcnMsIGVycm9yLCBpc0xvYWRpbmcsIHBlbmRpbmdDb25uZWN0b3IgfSA9XG4gICAgdXNlQ29ubmVjdCgpO1xuICBjb25zdCB7IGFkZHJlc3MgfSA9IHVzZUFjY291bnQoKTtcbiAgY29uc3QgeyBkaXNjb25uZWN0IH0gPSB1c2VEaXNjb25uZWN0KCk7XG4gIGNvbnN0IFttb3VudGVkLCBzZXRNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldE1vdW50ZWQodHJ1ZSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uPlxuICAgICAge21vdW50ZWQgPyAoXG4gICAgICAgIDxtYWluXG4gICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTI0IGJnLXdoaXRlIHRleHQtYmxhY2tgfVxuICAgICAgICA+XG4gICAgICAgICAge2Nvbm5lY3RvcnMubWFwKChjb25uZWN0b3IpID0+IChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgLy8gZGlzYWJsZWQ9eyFjb25uZWN0b3IucmVhZHl9XG4gICAgICAgICAgICAgIGtleT17Y29ubmVjdG9yLmlkfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjb25uZWN0KHsgY29ubmVjdG9yIH0pfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9kZXItMSBib3JkZXItYmxhY2sgcm91bmRlZC1zbSBweC0zIHB5LTFcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cD57Y29ubmVjdG9yLm5hbWV9PC9wPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKSl9XG5cbiAgICAgICAgICB7ZXJyb3IgJiYgPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj59XG4gICAgICAgICAge2FkZHJlc3MgPyAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8cD5BZGRyZXNzOiB7YWRkcmVzc308L3A+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0zIHB5LTEgYm9yZGVyIGJvcmRlci1ibGFjayByb3VuZGVkLXNtXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtkaXNjb25uZWN0fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTG9nIG91dFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L21haW4+XG4gICAgICApIDogbnVsbH1cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VBY2NvdW50IiwidXNlQ29ubmVjdCIsInVzZURpc2Nvbm5lY3QiLCJIb21lIiwiY29ubmVjdCIsImNvbm5lY3RvcnMiLCJlcnJvciIsImlzTG9hZGluZyIsInBlbmRpbmdDb25uZWN0b3IiLCJhZGRyZXNzIiwiZGlzY29ubmVjdCIsIm1vdW50ZWQiLCJzZXRNb3VudGVkIiwic2VjdGlvbiIsIm1haW4iLCJjbGFzc05hbWUiLCJtYXAiLCJjb25uZWN0b3IiLCJidXR0b24iLCJvbkNsaWNrIiwicCIsIm5hbWUiLCJpZCIsImRpdiIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});