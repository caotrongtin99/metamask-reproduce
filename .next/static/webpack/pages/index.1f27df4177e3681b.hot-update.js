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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n\nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const { connect, connectors, error, isLoading, pendingConnector } = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.useConnect)();\n    const { address } = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.useAccount)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24 bg-white text-black\",\n        children: [\n            connectors.map((connector)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>connect({\n                            connector\n                        }),\n                    className: \"border boder-1 border-black rounded-sm px-3 py-1\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: connector.name\n                    }, void 0, false, {\n                        fileName: \"/Users/macos/Documents/Coding/metamask-reproduce/pages/index.js\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, this)\n                }, connector.id, false, {\n                    fileName: \"/Users/macos/Documents/Coding/metamask-reproduce/pages/index.js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this)),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: error.message\n            }, void 0, false, {\n                fileName: \"/Users/macos/Documents/Coding/metamask-reproduce/pages/index.js\",\n                lineNumber: 23,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Address: \",\n                    address\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macos/Documents/Coding/metamask-reproduce/pages/index.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macos/Documents/Coding/metamask-reproduce/pages/index.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"Yi9cXj4eCH1C828TeAD9kAwGl6w=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_1__.useConnect,\n        wagmi__WEBPACK_IMPORTED_MODULE_1__.useAccount\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBK0M7QUFFaEMsU0FBU0U7O0lBQ3RCLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUVDLEtBQUssRUFBRUMsU0FBUyxFQUFFQyxnQkFBZ0IsRUFBRSxHQUMvRE4saURBQVVBO0lBQ1osTUFBTSxFQUFFTyxPQUFPLEVBQUUsR0FBR1IsaURBQVVBO0lBRTlCLHFCQUNFLDhEQUFDUztRQUNDQyxXQUFZOztZQUVYTixXQUFXTyxHQUFHLENBQUMsQ0FBQ0MsMEJBQ2YsOERBQUNDO29CQUdDQyxTQUFTLElBQU1YLFFBQVE7NEJBQUVTO3dCQUFVO29CQUNuQ0YsV0FBVTs4QkFFViw0RUFBQ0s7a0NBQUdILFVBQVVJLElBQUk7Ozs7OzttQkFKYkosVUFBVUssRUFBRTs7Ozs7WUFRcEJaLHVCQUFTLDhEQUFDYTswQkFBS2IsTUFBTWMsT0FBTzs7Ozs7OzBCQUM3Qiw4REFBQ0Q7O29CQUFJO29CQUFVVjs7Ozs7Ozs7Ozs7OztBQUdyQjtHQXhCd0JOOztRQUVwQkQsNkNBQVVBO1FBQ1FELDZDQUFVQTs7O0tBSFJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQWNjb3VudCwgdXNlQ29ubmVjdCB9IGZyb20gXCJ3YWdtaVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IGNvbm5lY3QsIGNvbm5lY3RvcnMsIGVycm9yLCBpc0xvYWRpbmcsIHBlbmRpbmdDb25uZWN0b3IgfSA9XG4gICAgdXNlQ29ubmVjdCgpO1xuICBjb25zdCB7IGFkZHJlc3MgfSA9IHVzZUFjY291bnQoKTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluXG4gICAgICBjbGFzc05hbWU9e2BmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtMjQgYmctd2hpdGUgdGV4dC1ibGFja2B9XG4gICAgPlxuICAgICAge2Nvbm5lY3RvcnMubWFwKChjb25uZWN0b3IpID0+IChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIC8vIGRpc2FibGVkPXshY29ubmVjdG9yLnJlYWR5fVxuICAgICAgICAgIGtleT17Y29ubmVjdG9yLmlkfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNvbm5lY3QoeyBjb25uZWN0b3IgfSl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvZGVyLTEgYm9yZGVyLWJsYWNrIHJvdW5kZWQtc20gcHgtMyBweS0xXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwPntjb25uZWN0b3IubmFtZX08L3A+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKSl9XG5cbiAgICAgIHtlcnJvciAmJiA8ZGl2PntlcnJvci5tZXNzYWdlfTwvZGl2Pn1cbiAgICAgIDxkaXY+QWRkcmVzczoge2FkZHJlc3N9PC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUFjY291bnQiLCJ1c2VDb25uZWN0IiwiSG9tZSIsImNvbm5lY3QiLCJjb25uZWN0b3JzIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJwZW5kaW5nQ29ubmVjdG9yIiwiYWRkcmVzcyIsIm1haW4iLCJjbGFzc05hbWUiLCJtYXAiLCJjb25uZWN0b3IiLCJidXR0b24iLCJvbkNsaWNrIiwicCIsIm5hbWUiLCJpZCIsImRpdiIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});