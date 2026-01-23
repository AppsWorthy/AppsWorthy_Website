(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/AppsWorthy/Development/AppsWorthy_Website/theme/theme.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AppsWorthy$2f$Development$2f$AppsWorthy_Website$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__ = __turbopack_context__.i("[project]/Desktop/AppsWorthy/Development/AppsWorthy_Website/node_modules/@mui/material/esm/styles/createTheme.js [app-client] (ecmascript) <export default as createTheme>");
'use client';
;
const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AppsWorthy$2f$Development$2f$AppsWorthy_Website$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__["createTheme"])({
    palette: {
        primary: {
            main: '#2563eb',
            light: '#60a5fa',
            dark: '#1e40af'
        },
        secondary: {
            main: '#7c3aed',
            light: '#a78bfa',
            dark: '#5b21b6'
        },
        background: {
            default: '#ffffff',
            paper: '#f8fafc'
        },
        text: {
            primary: '#0f172a',
            secondary: '#475569'
        }
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: '3.5rem',
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: '-0.02em'
        },
        h2: {
            fontSize: '2.5rem',
            fontWeight: 700,
            lineHeight: 1.3
        },
        h3: {
            fontSize: '2rem',
            fontWeight: 600
        },
        body1: {
            fontSize: '1.125rem',
            lineHeight: 1.6
        },
        button: {
            textTransform: 'none',
            fontWeight: 600
        }
    },
    shape: {
        borderRadius: 12
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    padding: '10px 24px',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)'
                    }
                },
                containedPrimary: {
                    background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)'
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }
            }
        }
    }
});
const __TURBOPACK__default__export__ = theme;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/AppsWorthy/Development/AppsWorthy_Website/theme/ThemeRegistry.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThemeRegistry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AppsWorthy$2f$Development$2f$AppsWorthy_Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AppsWorthy/Development/AppsWorthy_Website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AppsWorthy$2f$Development$2f$AppsWorthy_Website$2f$node_modules$2f40$mui$2f$material$2d$nextjs$2f$esm$2f$v13$2d$appRouter$2f$appRouterV13$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AppRouterCacheProvider$3e$__ = __turbopack_context__.i("[project]/Desktop/AppsWorthy/Development/AppsWorthy_Website/node_modules/@mui/material-nextjs/esm/v13-appRouter/appRouterV13.js [app-client] (ecmascript) <export default as AppRouterCacheProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AppsWorthy$2f$Development$2f$AppsWorthy_Website$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__ = __turbopack_context__.i("[project]/Desktop/AppsWorthy/Development/AppsWorthy_Website/node_modules/@mui/material/esm/styles/ThemeProvider.js [app-client] (ecmascript) <export default as ThemeProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AppsWorthy$2f$Development$2f$AppsWorthy_Website$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AppsWorthy/Development/AppsWorthy_Website/node_modules/@mui/material/esm/CssBaseline/CssBaseline.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AppsWorthy$2f$Development$2f$AppsWorthy_Website$2f$theme$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AppsWorthy/Development/AppsWorthy_Website/theme/theme.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function ThemeRegistry({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AppsWorthy$2f$Development$2f$AppsWorthy_Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AppsWorthy$2f$Development$2f$AppsWorthy_Website$2f$node_modules$2f40$mui$2f$material$2d$nextjs$2f$esm$2f$v13$2d$appRouter$2f$appRouterV13$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AppRouterCacheProvider$3e$__["AppRouterCacheProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AppsWorthy$2f$Development$2f$AppsWorthy_Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AppsWorthy$2f$Development$2f$AppsWorthy_Website$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__["ThemeProvider"], {
            theme: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AppsWorthy$2f$Development$2f$AppsWorthy_Website$2f$theme$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AppsWorthy$2f$Development$2f$AppsWorthy_Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AppsWorthy$2f$Development$2f$AppsWorthy_Website$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Desktop/AppsWorthy/Development/AppsWorthy_Website/theme/ThemeRegistry.js",
                    lineNumber: 12,
                    columnNumber: 17
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/AppsWorthy/Development/AppsWorthy_Website/theme/ThemeRegistry.js",
            lineNumber: 11,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/AppsWorthy/Development/AppsWorthy_Website/theme/ThemeRegistry.js",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
_c = ThemeRegistry;
var _c;
__turbopack_context__.k.register(_c, "ThemeRegistry");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_AppsWorthy_Development_AppsWorthy_Website_theme_4beea803._.js.map