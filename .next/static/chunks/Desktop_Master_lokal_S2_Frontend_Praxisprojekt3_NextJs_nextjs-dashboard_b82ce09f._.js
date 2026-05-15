(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Master_lokal/S2_Frontend/Praxisprojekt3_NextJs/nextjs-dashboard/app/ui/search.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Search
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Master_lokal$2f$S2_Frontend$2f$Praxisprojekt3_NextJs$2f$nextjs$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Master_lokal/S2_Frontend/Praxisprojekt3_NextJs/nextjs-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Master_lokal$2f$S2_Frontend$2f$Praxisprojekt3_NextJs$2f$nextjs$2d$dashboard$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MagnifyingGlassIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MagnifyingGlassIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Master_lokal/S2_Frontend/Praxisprojekt3_NextJs/nextjs-dashboard/node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js [app-client] (ecmascript) <export default as MagnifyingGlassIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Master_lokal$2f$S2_Frontend$2f$Praxisprojekt3_NextJs$2f$nextjs$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Master_lokal/S2_Frontend/Praxisprojekt3_NextJs/nextjs-dashboard/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Master_lokal$2f$S2_Frontend$2f$Praxisprojekt3_NextJs$2f$nextjs$2d$dashboard$2f$node_modules$2f$use$2d$debounce$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Master_lokal/S2_Frontend/Praxisprojekt3_NextJs/nextjs-dashboard/node_modules/use-debounce/dist/index.module.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Search(param) {
    let { placeholder } = param;
    var _searchParams_get;
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Master_lokal$2f$S2_Frontend$2f$Praxisprojekt3_NextJs$2f$nextjs$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Master_lokal$2f$S2_Frontend$2f$Praxisprojekt3_NextJs$2f$nextjs$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { replace } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Master_lokal$2f$S2_Frontend$2f$Praxisprojekt3_NextJs$2f$nextjs$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Master_lokal$2f$S2_Frontend$2f$Praxisprojekt3_NextJs$2f$nextjs$2d$dashboard$2f$node_modules$2f$use$2d$debounce$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebouncedCallback"])({
        "Search.useDebouncedCallback[handleSearch]": (term)=>{
            console.log("Searching... ".concat(term));
            const params = new URLSearchParams(searchParams);
            if (term) {
                params.set('query', term);
            } else {
                params.delete('query');
            }
            replace("".concat(pathname, "?").concat(params.toString()));
        }
    }["Search.useDebouncedCallback[handleSearch]"], 300);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Master_lokal$2f$S2_Frontend$2f$Praxisprojekt3_NextJs$2f$nextjs$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex flex-1 shrink-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Master_lokal$2f$S2_Frontend$2f$Praxisprojekt3_NextJs$2f$nextjs$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: "search",
                className: "sr-only",
                children: "Search"
            }, void 0, false, {
                fileName: "[project]/Desktop/Master_lokal/S2_Frontend/Praxisprojekt3_NextJs/nextjs-dashboard/app/ui/search.tsx",
                lineNumber: 28,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Master_lokal$2f$S2_Frontend$2f$Praxisprojekt3_NextJs$2f$nextjs$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                className: "peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500",
                placeholder: placeholder,
                onChange: (e)=>handleSearch(e.target.value),
                defaultValue: (_searchParams_get = searchParams.get('query')) === null || _searchParams_get === void 0 ? void 0 : _searchParams_get.toString()
            }, void 0, false, {
                fileName: "[project]/Desktop/Master_lokal/S2_Frontend/Praxisprojekt3_NextJs/nextjs-dashboard/app/ui/search.tsx",
                lineNumber: 31,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Master_lokal$2f$S2_Frontend$2f$Praxisprojekt3_NextJs$2f$nextjs$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Master_lokal$2f$S2_Frontend$2f$Praxisprojekt3_NextJs$2f$nextjs$2d$dashboard$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MagnifyingGlassIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MagnifyingGlassIcon$3e$__["MagnifyingGlassIcon"], {
                className: "absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
            }, void 0, false, {
                fileName: "[project]/Desktop/Master_lokal/S2_Frontend/Praxisprojekt3_NextJs/nextjs-dashboard/app/ui/search.tsx",
                lineNumber: 37,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Master_lokal/S2_Frontend/Praxisprojekt3_NextJs/nextjs-dashboard/app/ui/search.tsx",
        lineNumber: 27,
        columnNumber: 9
    }, this);
}
_s(Search, "vCAeG7Dxg1cijEEWRCJvC0O/qwo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Master_lokal$2f$S2_Frontend$2f$Praxisprojekt3_NextJs$2f$nextjs$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Master_lokal$2f$S2_Frontend$2f$Praxisprojekt3_NextJs$2f$nextjs$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Master_lokal$2f$S2_Frontend$2f$Praxisprojekt3_NextJs$2f$nextjs$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Master_lokal$2f$S2_Frontend$2f$Praxisprojekt3_NextJs$2f$nextjs$2d$dashboard$2f$node_modules$2f$use$2d$debounce$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebouncedCallback"]
    ];
});
_c = Search;
var _c;
__turbopack_context__.k.register(_c, "Search");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Master_lokal/S2_Frontend/Praxisprojekt3_NextJs/nextjs-dashboard/node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Master_lokal$2f$S2_Frontend$2f$Praxisprojekt3_NextJs$2f$nextjs$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Master_lokal/S2_Frontend/Praxisprojekt3_NextJs/nextjs-dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function MagnifyingGlassIcon(param, svgRef) {
    let { title, titleId, ...props } = param;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Master_lokal$2f$S2_Frontend$2f$Praxisprojekt3_NextJs$2f$nextjs$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Master_lokal$2f$S2_Frontend$2f$Praxisprojekt3_NextJs$2f$nextjs$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Master_lokal$2f$S2_Frontend$2f$Praxisprojekt3_NextJs$2f$nextjs$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    }));
}
const ForwardRef = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Master_lokal$2f$S2_Frontend$2f$Praxisprojekt3_NextJs$2f$nextjs$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](MagnifyingGlassIcon);
const __TURBOPACK__default__export__ = ForwardRef;
}),
"[project]/Desktop/Master_lokal/S2_Frontend/Praxisprojekt3_NextJs/nextjs-dashboard/node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js [app-client] (ecmascript) <export default as MagnifyingGlassIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MagnifyingGlassIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Master_lokal$2f$S2_Frontend$2f$Praxisprojekt3_NextJs$2f$nextjs$2d$dashboard$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MagnifyingGlassIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Master_lokal$2f$S2_Frontend$2f$Praxisprojekt3_NextJs$2f$nextjs$2d$dashboard$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MagnifyingGlassIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Master_lokal/S2_Frontend/Praxisprojekt3_NextJs/nextjs-dashboard/node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js [app-client] (ecmascript)");
}),
"[project]/Desktop/Master_lokal/S2_Frontend/Praxisprojekt3_NextJs/nextjs-dashboard/node_modules/use-debounce/dist/index.module.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDebounce",
    ()=>l,
    "useDebouncedCallback",
    ()=>c,
    "useThrottledCallback",
    ()=>a
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Master_lokal$2f$S2_Frontend$2f$Praxisprojekt3_NextJs$2f$nextjs$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Master_lokal/S2_Frontend/Praxisprojekt3_NextJs/nextjs-dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function c(e, u, c, i) {
    var l = this, a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Master_lokal$2f$S2_Frontend$2f$Praxisprojekt3_NextJs$2f$nextjs$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Master_lokal$2f$S2_Frontend$2f$Praxisprojekt3_NextJs$2f$nextjs$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0), f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Master_lokal$2f$S2_Frontend$2f$Praxisprojekt3_NextJs$2f$nextjs$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0), v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Master_lokal$2f$S2_Frontend$2f$Praxisprojekt3_NextJs$2f$nextjs$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Master_lokal$2f$S2_Frontend$2f$Praxisprojekt3_NextJs$2f$nextjs$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]), s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Master_lokal$2f$S2_Frontend$2f$Praxisprojekt3_NextJs$2f$nextjs$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Master_lokal$2f$S2_Frontend$2f$Praxisprojekt3_NextJs$2f$nextjs$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(), h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Master_lokal$2f$S2_Frontend$2f$Praxisprojekt3_NextJs$2f$nextjs$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(e), g = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Master_lokal$2f$S2_Frontend$2f$Praxisprojekt3_NextJs$2f$nextjs$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(!0), x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Master_lokal$2f$S2_Frontend$2f$Praxisprojekt3_NextJs$2f$nextjs$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(), E = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Master_lokal$2f$S2_Frontend$2f$Praxisprojekt3_NextJs$2f$nextjs$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    h.current = e;
    var b = "undefined" != typeof window, p = !u && 0 !== u && b;
    if ("function" != typeof e) throw new TypeError("Expected a function");
    u = +u || 0;
    var y = !!(c = c || {}).leading, w = !("trailing" in c) || !!c.trailing, T = !!c.flushOnExit && w, O = "maxWait" in c, F = "debounceOnServer" in c && !!c.debounceOnServer, L = O ? Math.max(+c.maxWait || 0, u) : null, A = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Master_lokal$2f$S2_Frontend$2f$Praxisprojekt3_NextJs$2f$nextjs$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        var r = function(r) {
            var n = d.current, t = s.current;
            return d.current = s.current = null, o.current = r, f.current = f.current || r, m.current = h.current.apply(t, n);
        }, n = function(r, n) {
            p && cancelAnimationFrame(v.current), v.current = p ? requestAnimationFrame(r) : setTimeout(r, n);
        }, t = function(r) {
            if (!g.current) return !1;
            var n = r - a.current;
            return !a.current || n >= u || n < 0 || O && r - o.current >= L;
        }, e = function(n) {
            return v.current = null, w && d.current ? r(n) : (d.current = s.current = null, m.current);
        }, c = function r() {
            var c = Date.now();
            if (y && f.current === o.current && A(), t(c)) return e(c);
            if (g.current) {
                var i = u - (c - a.current), l = O ? Math.min(i, L - (c - o.current)) : i;
                n(r, l);
            }
        }, A = function() {
            i && i({});
        }, D = function() {
            if (b || F) {
                var e, i = Date.now(), f = t(i);
                if (d.current = [].slice.call(arguments), s.current = l, a.current = i, T && !x.current && (x.current = function() {
                    var r;
                    "hidden" === (null == (r = globalThis.document) ? void 0 : r.visibilityState) && E.current.flush();
                }, null == (e = globalThis.document) || null == e.addEventListener || e.addEventListener("visibilitychange", x.current)), f) {
                    if (!v.current && g.current) return o.current = a.current, n(c, u), y ? r(a.current) : m.current;
                    if (O) return n(c, u), r(a.current);
                }
                return v.current || n(c, u), m.current;
            }
        };
        return D.cancel = function() {
            var r = v.current;
            r && (p ? cancelAnimationFrame(v.current) : clearTimeout(v.current)), o.current = 0, d.current = a.current = s.current = v.current = null, r && i && i({});
        }, D.isPending = function() {
            return !!v.current;
        }, D.flush = function() {
            return v.current ? e(Date.now()) : m.current;
        }, D;
    }, [
        y,
        O,
        u,
        L,
        w,
        T,
        p,
        b,
        F,
        i
    ]);
    return E.current = A, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Master_lokal$2f$S2_Frontend$2f$Praxisprojekt3_NextJs$2f$nextjs$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        return g.current = !0, function() {
            var r;
            T && E.current.flush(), x.current && (null == (r = globalThis.document) || null == r.removeEventListener || r.removeEventListener("visibilitychange", x.current), x.current = null), g.current = !1;
        };
    }, [
        T
    ]), A;
}
function i(r, n) {
    return r === n;
}
function l(n, t, l) {
    var a = l && l.equalityFn || i, o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Master_lokal$2f$S2_Frontend$2f$Praxisprojekt3_NextJs$2f$nextjs$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(n), f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Master_lokal$2f$S2_Frontend$2f$Praxisprojekt3_NextJs$2f$nextjs$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({})[1], v = c((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Master_lokal$2f$S2_Frontend$2f$Praxisprojekt3_NextJs$2f$nextjs$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(function(r) {
        o.current = r, f({});
    }, [
        f
    ]), t, l, f), d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Master_lokal$2f$S2_Frontend$2f$Praxisprojekt3_NextJs$2f$nextjs$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(n);
    return a(d.current, n) || (v(n), d.current = n), [
        o.current,
        v
    ];
}
function a(r, n, t) {
    var e = void 0 === t ? {} : t, u = e.leading, i = e.trailing, l = e.flushOnExit;
    return c(r, n, {
        maxWait: n,
        leading: void 0 === u || u,
        trailing: void 0 === i || i,
        flushOnExit: void 0 !== l && l
    });
}
;
 //# sourceMappingURL=index.module.js.map
}),
]);

//# sourceMappingURL=Desktop_Master_lokal_S2_Frontend_Praxisprojekt3_NextJs_nextjs-dashboard_b82ce09f._.js.map