/*!
 * jQuery JavaScript Library v1.5.2
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Thu Mar 31 15:28:23 2011 -0400
 */ (function (e, t) {
    function n(e) {
        return A.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
    }
    function r(e) {
        if (!nn[e]) {
            var t = A("<" + e + ">").appendTo("body"),
                n = t.css("display");
            t.remove();
            if (n === "none" || n === "") n = "block";
            nn[e] = n
        }
        return nn[e]
    }
    function i(e, t) {
        var n = {};
        return A.each(un.concat.apply([], un.slice(0, t)), function () {
            n[this] = e
        }), n
    }
    function s() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function o() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    function u() {
        A(e).unload(function () {
            for (var e in en) en[e](0, 1)
        })
    }
    function a(e, n) {
        e.dataFilter && (n = e.dataFilter(n, e.dataType));
        var r = e.dataTypes,
            i = {}, s, o, u = r.length,
            a, f = r[0],
            l, c, h, p, d;
        for (s = 1; s < u; s++) {
            if (s === 1) for (o in e.converters) typeof o == "string" && (i[o.toLowerCase()] = e.converters[o]);
            l = f, f = r[s];
            if (f === "*") f = l;
            else if (l !== "*" && l !== f) {
                c = l + " " + f, h = i[c] || i["* " + f];
                if (!h) {
                    d = t;
                    for (p in i) {
                        a = p.split(" ");
                        if (a[0] === l || a[0] === "*") {
                            d = i[a[1] + " " + f];
                            if (d) {
                                p = i[p], p === !0 ? h = d : d === !0 && (h = p);
                                break
                            }
                        }
                    }
                }!h && !d && A.error("No conversion from " + c.replace(" ", " to ")), h !== !0 && (n = h ? h(n) : d(p(n)))
            }
        }
        return n
    }
    function f(e, n, r) {
        var i = e.contents,
            s = e.dataTypes,
            o = e.responseFields,
            u, a, f, l;
        for (a in o) a in r && (n[o[a]] = r[a]);
        while (s[0] === "*") s.shift(), u === t && (u = e.mimeType || n.getResponseHeader("content-type"));
        if (u) for (a in i) if (i[a] && i[a].test(u)) {
            s.unshift(a);
            break
        }
        if (s[0] in r) f = s[0];
        else {
            for (a in r) {
                if (!s[0] || e.converters[a + " " + s[0]]) {
                    f = a;
                    break
                }
                l || (l = a)
            }
            f = f || l
        }
        if (f) return f !== s[0] && s.unshift(f), r[f]
    }
    function l(e, t, n, r) {
        if (A.isArray(t) && t.length) A.each(t, function (t, i) {
            n || At.test(e) ? r(e, i) : l(e + "[" + (typeof i == "object" || A.isArray(i) ? t : "") + "]", i, n, r)
        });
        else if (n || t == null || typeof t != "object") r(e, t);
        else if (A.isArray(t) || A.isEmptyObject(t)) r(e, "");
        else for (var i in t) l(e + "[" + i + "]", t[i], n, r)
    }
    function c(e, n, r, i, s, o) {
        s = s || n.dataTypes[0], o = o || {}, o[s] = !0;
        var u = e[s],
            a = 0,
            f = u ? u.length : 0,
            l = e === Vt,
            h;
        for (; a < f && (l || !h); a++) h = u[a](n, r, i), typeof h == "string" && (!l || o[h] ? h = t : (n.dataTypes.unshift(h), h = c(e, n, r, i, h, o)));
        return (l || !h) && !o["*"] && (h = c(e, n, r, i, "*", o)), h
    }
    function h(e) {
        return function (t, n) {
            typeof t != "string" && (n = t, t = "*");
            if (A.isFunction(n)) {
                var r = t.toLowerCase().split(qt),
                    i = 0,
                    s = r.length,
                    o, u, a;
                for (; i < s; i++) o = r[i], a = /^\+/.test(o), a && (o = o.substr(1) || "*"), u = e[o] = e[o] || [], u[a ? "unshift" : "push"](n)
            }
        }
    }
    function p(e, t, n) {
        var r = t === "width" ? St : xt,
            i = t === "width" ? e.offsetWidth : e.offsetHeight;
        return n === "border" ? i : (A.each(r, function () {
            n || (i -= parseFloat(A.css(e, "padding" + this)) || 0), n === "margin" ? i += parseFloat(A.css(e, "margin" + this)) || 0 : i -= parseFloat(A.css(e, "border" + this + "Width")) || 0
        }), i)
    }
    function d(e, t) {
        t.src ? A.ajax({
            url: t.src,
            async: !1,
            dataType: "script"
        }) : A.globalEval(t.text || t.textContent || t.innerHTML || ""), t.parentNode && t.parentNode.removeChild(t)
    }
    function v(e) {
        return "getElementsByTagName" in e ? e.getElementsByTagName("*") : "querySelectorAll" in e ? e.querySelectorAll("*") : []
    }
    function m(e, t) {
        if (t.nodeType === 1) {
            var n = t.nodeName.toLowerCase();
            t.clearAttributes(), t.mergeAttributes(e);
            if (n === "object") t.outerHTML = e.outerHTML;
            else if (n !== "input" || e.type !== "checkbox" && e.type !== "radio") {
                if (n === "option") t.selected = e.defaultSelected;
                else if (n === "input" || n === "textarea") t.defaultValue = e.defaultValue
            } else e.checked && (t.defaultChecked = t.checked = e.checked), t.value !== e.value && (t.value = e.value);
            t.removeAttribute(A.expando)
        }
    }
    function g(e, t) {
        if (t.nodeType === 1 && A.hasData(e)) {
            var n = A.expando,
                r = A.data(e),
                i = A.data(t, r);
            if (r = r[n]) {
                var s = r.events;
                i = i[n] = A.extend({}, r);
                if (s) {
                    delete i.handle, i.events = {};
                    for (var o in s) for (var u = 0, a = s[o].length; u < a; u++) A.event.add(t, o + (s[o][u].namespace ? "." : "") + s[o][u].namespace, s[o][u], s[o][u].data)
                }
            }
        }
    }
    function y(e, t) {
        return A.nodeName(e, "table") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function b(e, t, n) {
        if (A.isFunction(t)) return A.grep(e, function (e, r) {
            var i = !! t.call(e, r, e);
            return i === n
        });
        if (t.nodeType) return A.grep(e, function (e, r) {
            return e === t === n
        });
        if (typeof t == "string") {
            var r = A.grep(e, function (e) {
                return e.nodeType === 1
            });
            if (nt.test(t)) return A.filter(t, r, !n);
            t = A.filter(t, r)
        }
        return A.grep(e, function (e, r) {
            return A.inArray(e, t) >= 0 === n
        })
    }
    function w(e) {
        return !e || !e.parentNode || e.parentNode.nodeType === 11
    }
    function E(e, t) {
        return (e && e !== "*" ? e + "." : "") + t.replace(z, "`").replace(W, "&")
    }
    function S(e) {
        var t, n, r, i, s, o, u, a, f, l, c, h, p, d = [],
            v = [],
            m = A._data(this, "events");
        if (e.liveFired !== this && m && m.live && !e.target.disabled && (!e.button || e.type !== "click")) {
            e.namespace && (h = new RegExp("(^|\\.)" + e.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)")), e.liveFired = this;
            var g = m.live.slice(0);
            for (u = 0; u < g.length; u++) s = g[u], s.origType.replace(R, "") === e.type ? v.push(s.selector) : g.splice(u--, 1);
            i = A(e.target).closest(v, e.currentTarget);
            for (a = 0, f = i.length; a < f; a++) {
                c = i[a];
                for (u = 0; u < g.length; u++) {
                    s = g[u];
                    if (c.selector === s.selector && (!h || h.test(s.namespace)) && !c.elem.disabled) {
                        o = c.elem, r = null;
                        if (s.preType === "mouseenter" || s.preType === "mouseleave") e.type = s.preType, r = A(e.relatedTarget).closest(s.selector)[0];
                        (!r || r !== o) && d.push({
                            elem: o,
                            handleObj: s,
                            level: c.level
                        })
                    }
                }
            }
            for (a = 0, f = d.length; a < f; a++) {
                i = d[a];
                if (n && i.level > n) break;
                e.currentTarget = i.elem, e.data = i.handleObj.data, e.handleObj = i.handleObj, p = i.handleObj.origHandler.apply(i.elem, arguments);
                if (p === !1 || e.isPropagationStopped()) {
                    n = i.level, p === !1 && (t = !1);
                    if (e.isImmediatePropagationStopped()) break
                }
            }
            return t
        }
    }
    function x(e, n, r) {
        var i = A.extend({}, r[0]);
        i.type = e, i.originalEvent = {}, i.liveFired = t, A.event.handle.call(n, i), i.isDefaultPrevented() && r[0].preventDefault()
    }
    function T() {
        return !0
    }
    function N() {
        return !1
    }
    function C(e) {
        for (var t in e) if (t !== "toJSON") return !1;
        return !0
    }
    function k(e, n, r) {
        if (r === t && e.nodeType === 1) {
            r = e.getAttribute("data-" + n);
            if (typeof r == "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : A.isNaN(r) ? _.test(r) ? A.parseJSON(r) : r : parseFloat(r)
                } catch (i) {}
                A.data(e, n, r)
            } else r = t
        }
        return r
    }
    var L = e.document,
        A = function () {
            function n() {
                if (!r.isReady) {
                    try {
                        L.documentElement.doScroll("left")
                    } catch (e) {
                        setTimeout(n, 1);
                        return
                    }
                    r.ready()
                }
            }
            var r = function (e, t) {
                return new r.fn.init(e, t, o)
            }, i = e.jQuery,
                s = e.$,
                o, u = /^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,
                a = /\S/,
                f = /^\s+/,
                l = /\s+$/,
                c = /\d/,
                h = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                p = /^[\],:{}\s]*$/,
                d = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                v = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                m = /(?:^|:|,)(?:\s*\[)+/g,
                g = /(webkit)[ \/]([\w.]+)/,
                y = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                b = /(msie) ([\w.]+)/,
                w = /(mozilla)(?:.*? rv:([\w.]+))?/,
                E = navigator.userAgent,
                S, x, T, N = Object.prototype.toString,
                C = Object.prototype.hasOwnProperty,
                k = Array.prototype.push,
                A = Array.prototype.slice,
                O = String.prototype.trim,
                M = Array.prototype.indexOf,
                _ = {};
            return r.fn = r.prototype = {
                constructor: r,
                init: function (e, n, i) {
                    var s, o, a, f;
                    if (!e) return this;
                    if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
                    if (e === "body" && !n && L.body) return this.context = L, this[0] = L.body, this.selector = "body", this.length = 1, this;
                    if (typeof e == "string") {
                        s = u.exec(e);
                        if (!s || !s[1] && n) return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e);
                        if (s[1]) return n = n instanceof r ? n[0] : n, f = n ? n.ownerDocument || n : L, a = h.exec(e), a ? r.isPlainObject(n) ? (e = [L.createElement(a[1])], r.fn.attr.call(e, n, !0)) : e = [f.createElement(a[1])] : (a = r.buildFragment([s[1]], [f]), e = (a.cacheable ? r.clone(a.fragment) : a.fragment).childNodes), r.merge(this, e);
                        o = L.getElementById(s[2]);
                        if (o && o.parentNode) {
                            if (o.id !== s[2]) return i.find(e);
                            this.length = 1, this[0] = o
                        }
                        return this.context = L, this.selector = e, this
                    }
                    return r.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), r.makeArray(e, this))
                },
                selector: "",
                jquery: "1.5.2",
                length: 0,
                size: function () {
                    return this.length
                },
                toArray: function () {
                    return A.call(this, 0)
                },
                get: function (e) {
                    return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
                },
                pushStack: function (e, t, n) {
                    var i = this.constructor();
                    return r.isArray(e) ? k.apply(i, e) : r.merge(i, e), i.prevObject = this, i.context = this.context, t === "find" ? i.selector = this.selector + (this.selector ? " " : "") + n : t && (i.selector = this.selector + "." + t + "(" + n + ")"), i
                },
                each: function (e, t) {
                    return r.each(this, e, t)
                },
                ready: function (e) {
                    return r.bindReady(), x.done(e), this
                },
                eq: function (e) {
                    return e === -1 ? this.slice(e) : this.slice(e, +e + 1)
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                slice: function () {
                    return this.pushStack(A.apply(this, arguments), "slice", A.call(arguments).join(","))
                },
                map: function (e) {
                    return this.pushStack(r.map(this, function (t, n) {
                        return e.call(t, n, t)
                    }))
                },
                end: function () {
                    return this.prevObject || this.constructor(null)
                },
                push: k,
                sort: [].sort,
                splice: [].splice
            }, r.fn.init.prototype = r.fn, r.extend = r.fn.extend = function () {
                var e, n, i, s, o, u, a = arguments[0] || {}, f = 1,
                    l = arguments.length,
                    c = !1;
                typeof a == "boolean" && (c = a, a = arguments[1] || {}, f = 2), typeof a != "object" && !r.isFunction(a) && (a = {}), l === f && (a = this, --f);
                for (; f < l; f++) if ((e = arguments[f]) != null) for (n in e) {
                    i = a[n], s = e[n];
                    if (a === s) continue;
                    c && s && (r.isPlainObject(s) || (o = r.isArray(s))) ? (o ? (o = !1, u = i && r.isArray(i) ? i : []) : u = i && r.isPlainObject(i) ? i : {}, a[n] = r.extend(c, u, s)) : s !== t && (a[n] = s)
                }
                return a
            }, r.extend({
                noConflict: function (t) {
                    return e.$ = s, t && (e.jQuery = i), r
                },
                isReady: !1,
                readyWait: 1,
                ready: function (e) {
                    e === !0 && r.readyWait--;
                    if (!r.readyWait || e !== !0 && !r.isReady) {
                        if (!L.body) return setTimeout(r.ready, 1);
                        r.isReady = !0;
                        if (e !== !0 && --r.readyWait > 0) return;
                        x.resolveWith(L, [r]), r.fn.trigger && r(L).trigger("ready").unbind("ready")
                    }
                },
                bindReady: function () {
                    if (!x) {
                        x = r._Deferred();
                        if (L.readyState === "complete") return setTimeout(r.ready, 1);
                        if (L.addEventListener) L.addEventListener("DOMContentLoaded", T, !1), e.addEventListener("load", r.ready, !1);
                        else if (L.attachEvent) {
                            L.attachEvent("onreadystatechange", T), e.attachEvent("onload", r.ready);
                            var t = !1;
                            try {
                                t = e.frameElement == null
                            } catch (i) {}
                            L.documentElement.doScroll && t && n()
                        }
                    }
                },
                isFunction: function (e) {
                    return r.type(e) === "function"
                },
                isArray: Array.isArray || function (e) {
                    return r.type(e) === "array"
                },
                isWindow: function (e) {
                    return e && typeof e == "object" && "setInterval" in e
                },
                isNaN: function (e) {
                    return e == null || !c.test(e) || isNaN(e)
                },
                type: function (e) {
                    return e == null ? String(e) : _[N.call(e)] || "object"
                },
                isPlainObject: function (e) {
                    if (!e || r.type(e) !== "object" || e.nodeType || r.isWindow(e)) return !1;
                    if (e.constructor && !C.call(e, "constructor") && !C.call(e.constructor.prototype, "isPrototypeOf")) return !1;
                    var n;
                    for (n in e);
                    return n === t || C.call(e, n)
                },
                isEmptyObject: function (e) {
                    for (var t in e) return !1;
                    return !0
                },
                error: function (e) {
                    throw e
                },
                parseJSON: function (t) {
                    if (typeof t != "string" || !t) return null;
                    t = r.trim(t);
                    if (p.test(t.replace(d, "@").replace(v, "]").replace(m, ""))) return e.JSON && e.JSON.parse ? e.JSON.parse(t) : (new Function("return " + t))();
                    r.error("Invalid JSON: " + t)
                },
                parseXML: function (t, n, i) {
                    return e.DOMParser ? (i = new DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t)), i = n.documentElement, (!i || !i.nodeName || i.nodeName === "parsererror") && r.error("Invalid XML: " + t), n
                },
                noop: function () {},
                globalEval: function (e) {
                    if (e && a.test(e)) {
                        var t = L.head || L.getElementsByTagName("head")[0] || L.documentElement,
                            n = L.createElement("script");
                        r.support.scriptEval() ? n.appendChild(L.createTextNode(e)) : n.text = e, t.insertBefore(n, t.firstChild), t.removeChild(n)
                    }
                },
                nodeName: function (e, t) {
                    return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
                },
                each: function (e, n, i) {
                    var s, o = 0,
                        u = e.length,
                        a = u === t || r.isFunction(e);
                    if (i) {
                        if (a) {
                            for (s in e) if (n.apply(e[s], i) === !1) break
                        } else for (; o < u;) if (n.apply(e[o++], i) === !1) break
                    } else if (a) {
                        for (s in e) if (n.call(e[s], s, e[s]) === !1) break
                    } else for (var f = e[0]; o < u && n.call(f, o, f) !== !1; f = e[++o]);
                    return e
                },
                trim: O ? function (e) {
                    return e == null ? "" : O.call(e)
                } : function (e) {
                    return e == null ? "" : (e + "").replace(f, "").replace(l, "")
                },
                makeArray: function (e, t) {
                    var n = t || [];
                    if (e != null) {
                        var i = r.type(e);
                        e.length == null || i === "string" || i === "function" || i === "regexp" || r.isWindow(e) ? k.call(n, e) : r.merge(n, e)
                    }
                    return n
                },
                inArray: function (e, t) {
                    if (t.indexOf) return t.indexOf(e);
                    for (var n = 0, r = t.length; n < r; n++) if (t[n] === e) return n;
                    return -1
                },
                merge: function (e, n) {
                    var r = e.length,
                        i = 0;
                    if (typeof n.length == "number") for (var s = n.length; i < s; i++) e[r++] = n[i];
                    else while (n[i] !== t) e[r++] = n[i++];
                    return e.length = r, e
                },
                grep: function (e, t, n) {
                    var r = [],
                        i;
                    n = !! n;
                    for (var s = 0, o = e.length; s < o; s++) i = !! t(e[s], s), n !== i && r.push(e[s]);
                    return r
                },
                map: function (e, t, n) {
                    var r = [],
                        i;
                    for (var s = 0, o = e.length; s < o; s++) i = t(e[s], s, n), i != null && (r[r.length] = i);
                    return r.concat.apply([], r)
                },
                guid: 1,
                proxy: function (e, n, i) {
                    return arguments.length === 2 && (typeof n == "string" ? (i = e, e = i[n], n = t) : n && !r.isFunction(n) && (i = n, n = t)), !n && e && (n = function () {
                        return e.apply(i || this, arguments)
                    }), e && (n.guid = e.guid = e.guid || n.guid || r.guid++), n
                },
                access: function (e, n, i, s, o, u) {
                    var a = e.length;
                    if (typeof n == "object") {
                        for (var f in n) r.access(e, f, n[f], s, o, i);
                        return e
                    }
                    if (i !== t) {
                        s = !u && s && r.isFunction(i);
                        for (var l = 0; l < a; l++) o(e[l], n, s ? i.call(e[l], l, o(e[l], n)) : i, u);
                        return e
                    }
                    return a ? o(e[0], n) : t
                },
                now: function () {
                    return (new Date).getTime()
                },
                uaMatch: function (e) {
                    e = e.toLowerCase();
                    var t = g.exec(e) || y.exec(e) || b.exec(e) || e.indexOf("compatible") < 0 && w.exec(e) || [];
                    return {
                        browser: t[1] || "",
                        version: t[2] || "0"
                    }
                },
                sub: function () {
                    function e(t, n) {
                        return new e.fn.init(t, n)
                    }
                    r.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.subclass = this.subclass, e.fn.init = function n(n, i) {
                        return i && i instanceof r && !(i instanceof e) && (i = e(i)), r.fn.init.call(this, n, i, t)
                    }, e.fn.init.prototype = e.fn;
                    var t = e(L);
                    return e
                },
                browser: {}
            }), r.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (e, t) {
                _["[object " + t + "]"] = t.toLowerCase()
            }), S = r.uaMatch(E), S.browser && (r.browser[S.browser] = !0, r.browser.version = S.version), r.browser.webkit && (r.browser.safari = !0), M && (r.inArray = function (e, t) {
                return M.call(t, e)
            }), a.test("Â ") && (f = /^[\s\xA0]+/, l = /[\s\xA0]+$/), o = r(L), L.addEventListener ? T = function () {
                L.removeEventListener("DOMContentLoaded", T, !1), r.ready()
            } : L.attachEvent && (T = function () {
                L.readyState === "complete" && (L.detachEvent("onreadystatechange", T), r.ready())
            }), r
        }(),
        O = "then done fail isResolved isRejected promise".split(" "),
        M = [].slice;
    A.extend({
        _Deferred: function () {
            var e = [],
                t, n, r, i = {
                    done: function () {
                        if (!r) {
                            var n = arguments,
                                s, o, u, a, f;
                            t && (f = t, t = 0);
                            for (s = 0, o = n.length; s < o; s++) u = n[s], a = A.type(u), a === "array" ? i.done.apply(i, u) : a === "function" && e.push(u);
                            f && i.resolveWith(f[0], f[1])
                        }
                        return this
                    },
                    resolveWith: function (i, s) {
                        if (!r && !t && !n) {
                            s = s || [], n = 1;
                            try {
                                while (e[0]) e.shift().apply(i, s)
                            } finally {
                                t = [i, s], n = 0
                            }
                        }
                        return this
                    },
                    resolve: function () {
                        return i.resolveWith(this, arguments), this
                    },
                    isResolved: function () {
                        return n || t
                    },
                    cancel: function () {
                        return r = 1, e = [], this
                    }
                };
            return i
        },
        Deferred: function (e) {
            var t = A._Deferred(),
                n = A._Deferred(),
                r;
            return A.extend(t, {
                then: function (e, n) {
                    return t.done(e).fail(n), this
                },
                fail: n.done,
                rejectWith: n.resolveWith,
                reject: n.resolve,
                isRejected: n.isResolved,
                promise: function (e) {
                    if (e == null) {
                        if (r) return r;
                        r = e = {}
                    }
                    var n = O.length;
                    while (n--) e[O[n]] = t[O[n]];
                    return e
                }
            }), t.done(n.cancel).fail(t.cancel), delete t.cancel, e && e.call(t, t), t
        },
        when: function (e) {
            function t(e) {
                return function (t) {
                    n[e] = arguments.length > 1 ? M.call(arguments, 0) : t, --s || o.resolveWith(o, M.call(n, 0))
                }
            }
            var n = arguments,
                r = 0,
                i = n.length,
                s = i,
                o = i <= 1 && e && A.isFunction(e.promise) ? e : A.Deferred();
            if (i > 1) {
                for (; r < i; r++) n[r] && A.isFunction(n[r].promise) ? n[r].promise().then(t(r), o.reject) : --s;
                s || o.resolveWith(o, n)
            } else o !== e && o.resolveWith(o, i ? [e] : []);
            return o.promise()
        }
    }),
    function () {
        A.support = {};
        var t = L.createElement("div");
        t.style.display = "none", t.innerHTML = "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
        var n = t.getElementsByTagName("*"),
            r = t.getElementsByTagName("a")[0],
            i = L.createElement("select"),
            s = i.appendChild(L.createElement("option")),
            o = t.getElementsByTagName("input")[0];
        if (n && n.length && r) {
            A.support = {
                leadingWhitespace: t.firstChild.nodeType === 3,
                tbody: !t.getElementsByTagName("tbody").length,
                htmlSerialize: !! t.getElementsByTagName("link").length,
                style: /red/.test(r.getAttribute("style")),
                hrefNormalized: r.getAttribute("href") === "/a",
                opacity: /^0.55$/.test(r.style.opacity),
                cssFloat: !! r.style.cssFloat,
                checkOn: o.value === "on",
                optSelected: s.selected,
                deleteExpando: !0,
                optDisabled: !1,
                checkClone: !1,
                noCloneEvent: !0,
                noCloneChecked: !0,
                boxModel: null,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableHiddenOffsets: !0,
                reliableMarginRight: !0
            }, o.checked = !0, A.support.noCloneChecked = o.cloneNode(!0).checked, i.disabled = !0, A.support.optDisabled = !s.disabled;
            var u = null;
            A.support.scriptEval = function () {
                if (u === null) {
                    var t = L.documentElement,
                        n = L.createElement("script"),
                        r = "script" + A.now();
                    try {
                        n.appendChild(L.createTextNode("window." + r + "=1;"))
                    } catch (i) {}
                    t.insertBefore(n, t.firstChild), e[r] ? (u = !0, delete e[r]) : u = !1, t.removeChild(n)
                }
                return u
            };
            try {
                delete t.test
            } catch (a) {
                A.support.deleteExpando = !1
            }!t.addEventListener && t.attachEvent && t.fireEvent && (t.attachEvent("onclick", function c() {
                A.support.noCloneEvent = !1, t.detachEvent("onclick", c)
            }), t.cloneNode(!0).fireEvent("onclick")), t = L.createElement("div"), t.innerHTML = "<input type='radio' name='radiotest' checked='checked'/>";
            var f = L.createDocumentFragment();
            f.appendChild(t.firstChild), A.support.checkClone = f.cloneNode(!0).cloneNode(!0).lastChild.checked, A(function () {
                var e = L.createElement("div"),
                    t = L.getElementsByTagName("body")[0];
                if (t) {
                    e.style.width = e.style.paddingLeft = "1px", t.appendChild(e), A.boxModel = A.support.boxModel = e.offsetWidth === 2, "zoom" in e.style && (e.style.display = "inline", e.style.zoom = 1, A.support.inlineBlockNeedsLayout = e.offsetWidth === 2, e.style.display = "", e.innerHTML = "<div style='width:4px;'></div>", A.support.shrinkWrapBlocks = e.offsetWidth !== 2), e.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
                    var n = e.getElementsByTagName("td");
                    A.support.reliableHiddenOffsets = n[0].offsetHeight === 0, n[0].style.display = "", n[1].style.display = "none", A.support.reliableHiddenOffsets = A.support.reliableHiddenOffsets && n[0].offsetHeight === 0, e.innerHTML = "", L.defaultView && L.defaultView.getComputedStyle && (e.style.width = "1px", e.style.marginRight = "0", A.support.reliableMarginRight = (parseInt((L.defaultView.getComputedStyle(e, null) || {
                        marginRight: 0
                    }).marginRight, 10) || 0) === 0), t.removeChild(e).style.display = "none", e = n = null
                }
            });
            var l = function (e) {
                var t = L.createElement("div");
                e = "on" + e;
                if (!t.attachEvent) return !0;
                var n = e in t;
                return n || (t.setAttribute(e, "return;"), n = typeof t[e] == "function"), n
            };
            A.support.submitBubbles = l("submit"), A.support.changeBubbles = l("change"), t = n = r = null
        }
    }();
    var _ = /^(?:\{.*\}|\[.*\])$/;
    A.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (A.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (e) {
            return e = e.nodeType ? A.cache[e[A.expando]] : e[A.expando], !! e && !C(e)
        },
        data: function (e, n, r, i) {
            if (A.acceptData(e)) {
                var s = A.expando,
                    o = typeof n == "string",
                    u, a = e.nodeType,
                    f = a ? A.cache : e,
                    l = a ? e[A.expando] : e[A.expando] && A.expando;
                if ((!l || i && l && !f[l][s]) && o && r === t) return;
                l || (a ? e[A.expando] = l = ++A.uuid : l = A.expando), f[l] || (f[l] = {}, a || (f[l].toJSON = A.noop));
                if (typeof n == "object" || typeof n == "function") i ? f[l][s] = A.extend(f[l][s], n) : f[l] = A.extend(f[l], n);
                return u = f[l], i && (u[s] || (u[s] = {}), u = u[s]), r !== t && (u[n] = r), n === "events" && !u[n] ? u[s] && u[s].events : o ? u[n] : u
            }
        },
        removeData: function (t, n, r) {
            if (A.acceptData(t)) {
                var i = A.expando,
                    s = t.nodeType,
                    o = s ? A.cache : t,
                    u = s ? t[A.expando] : A.expando;
                if (!o[u]) return;
                if (n) {
                    var a = r ? o[u][i] : o[u];
                    if (a) {
                        delete a[n];
                        if (!C(a)) return
                    }
                }
                if (r) {
                    delete o[u][i];
                    if (!C(o[u])) return
                }
                var f = o[u][i];
                A.support.deleteExpando || o != e ? delete o[u] : o[u] = null, f ? (o[u] = {}, s || (o[u].toJSON = A.noop), o[u][i] = f) : s && (A.support.deleteExpando ? delete t[A.expando] : t.removeAttribute ? t.removeAttribute(A.expando) : t[A.expando] = null)
            }
        },
        _data: function (e, t, n) {
            return A.data(e, t, n, !0)
        },
        acceptData: function (e) {
            if (e.nodeName) {
                var t = A.noData[e.nodeName.toLowerCase()];
                if (t) return t !== !0 && e.getAttribute("classid") === t
            }
            return !0
        }
    }), A.fn.extend({
        data: function (e, n) {
            var r = null;
            if (typeof e == "undefined") {
                if (this.length) {
                    r = A.data(this[0]);
                    if (this[0].nodeType === 1) {
                        var i = this[0].attributes,
                            s;
                        for (var o = 0, u = i.length; o < u; o++) s = i[o].name, s.indexOf("data-") === 0 && (s = s.substr(5), k(this[0], s, r[s]))
                    }
                }
                return r
            }
            if (typeof e == "object") return this.each(function () {
                A.data(this, e)
            });
            var a = e.split(".");
            return a[1] = a[1] ? "." + a[1] : "", n === t ? (r = this.triggerHandler("getData" + a[1] + "!", [a[0]]), r === t && this.length && (r = A.data(this[0], e), r = k(this[0], e, r)), r === t && a[1] ? this.data(a[0]) : r) : this.each(function () {
                var t = A(this),
                    r = [a[0], n];
                t.triggerHandler("setData" + a[1] + "!", r), A.data(this, e, n), t.triggerHandler("changeData" + a[1] + "!", r)
            })
        },
        removeData: function (e) {
            return this.each(function () {
                A.removeData(this, e)
            })
        }
    }), A.extend({
        queue: function (e, t, n) {
            if (e) {
                t = (t || "fx") + "queue";
                var r = A._data(e, t);
                return n ? (!r || A.isArray(n) ? r = A._data(e, t, A.makeArray(n)) : r.push(n), r) : r || []
            }
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = A.queue(e, t),
                r = n.shift();
            r === "inprogress" && (r = n.shift()), r && (t === "fx" && n.unshift("inprogress"), r.call(e, function () {
                A.dequeue(e, t)
            })), n.length || A.removeData(e, t + "queue", !0)
        }
    }), A.fn.extend({
        queue: function (e, n) {
            return typeof e != "string" && (n = e, e = "fx"), n === t ? A.queue(this[0], e) : this.each(function (t) {
                var r = A.queue(this, e, n);
                e === "fx" && r[0] !== "inprogress" && A.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                A.dequeue(this, e)
            })
        },
        delay: function (e, t) {
            return e = A.fx ? A.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function () {
                var n = this;
                setTimeout(function () {
                    A.dequeue(n, t)
                }, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }
    });
    var D = /[\n\t\r]/g,
        P = /\s+/,
        H = /\r/g,
        B = /^(?:href|src|style)$/,
        j = /^(?:button|input)$/i,
        F = /^(?:button|input|object|select|textarea)$/i,
        I = /^a(?:rea)?$/i,
        q = /^(?:radio|checkbox)$/i;
    A.props = {
        "for": "htmlFor",
        "class": "className",
        readonly: "readOnly",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        rowspan: "rowSpan",
        colspan: "colSpan",
        tabindex: "tabIndex",
        usemap: "useMap",
        frameborder: "frameBorder"
    }, A.fn.extend({
        attr: function (e, t) {
            return A.access(this, e, t, !0, A.attr)
        },
        removeAttr: function (e, t) {
            return this.each(function () {
                A.attr(this, e, ""), this.nodeType === 1 && this.removeAttribute(e)
            })
        },
        addClass: function (e) {
            if (A.isFunction(e)) return this.each(function (t) {
                var n = A(this);
                n.addClass(e.call(this, t, n.attr("class")))
            });
            if (e && typeof e == "string") {
                var t = (e || "").split(P);
                for (var n = 0, r = this.length; n < r; n++) {
                    var i = this[n];
                    if (i.nodeType === 1) if (i.className) {
                        var s = " " + i.className + " ",
                            o = i.className;
                        for (var u = 0, a = t.length; u < a; u++) s.indexOf(" " + t[u] + " ") < 0 && (o += " " + t[u]);
                        i.className = A.trim(o)
                    } else i.className = e
                }
            }
            return this
        },
        removeClass: function (e) {
            if (A.isFunction(e)) return this.each(function (t) {
                var n = A(this);
                n.removeClass(e.call(this, t, n.attr("class")))
            });
            if (e && typeof e == "string" || e === t) {
                var n = (e || "").split(P);
                for (var r = 0, i = this.length; r < i; r++) {
                    var s = this[r];
                    if (s.nodeType === 1 && s.className) if (e) {
                        var o = (" " + s.className + " ").replace(D, " ");
                        for (var u = 0, a = n.length; u < a; u++) o = o.replace(" " + n[u] + " ", " ");
                        s.className = A.trim(o)
                    } else s.className = ""
                }
            }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e,
                r = typeof t == "boolean";
            return A.isFunction(e) ? this.each(function (n) {
                var r = A(this);
                r.toggleClass(e.call(this, n, r.attr("class"), t), t)
            }) : this.each(function () {
                if (n === "string") {
                    var i, s = 0,
                        o = A(this),
                        u = t,
                        a = e.split(P);
                    while (i = a[s++]) u = r ? u : !o.hasClass(i), o[u ? "addClass" : "removeClass"](i)
                } else if (n === "undefined" || n === "boolean") this.className && A._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : A._data(this, "__className__") || ""
            })
        },
        hasClass: function (e) {
            var t = " " + e + " ";
            for (var n = 0, r = this.length; n < r; n++) if ((" " + this[n].className + " ").replace(D, " ").indexOf(t) > -1) return !0;
            return !1
        },
        val: function (e) {
            if (!arguments.length) {
                var n = this[0];
                if (n) {
                    if (A.nodeName(n, "option")) {
                        var r = n.attributes.value;
                        return !r || r.specified ? n.value : n.text
                    }
                    if (A.nodeName(n, "select")) {
                        var i = n.selectedIndex,
                            s = [],
                            o = n.options,
                            u = n.type === "select-one";
                        if (i < 0) return null;
                        for (var a = u ? i : 0, f = u ? i + 1 : o.length; a < f; a++) {
                            var l = o[a];
                            if (l.selected && (A.support.optDisabled ? !l.disabled : l.getAttribute("disabled") === null) && (!l.parentNode.disabled || !A.nodeName(l.parentNode, "optgroup"))) {
                                e = A(l).val();
                                if (u) return e;
                                s.push(e)
                            }
                        }
                        return u && !s.length && o.length ? A(o[i]).val() : s
                    }
                    return q.test(n.type) && !A.support.checkOn ? n.getAttribute("value") === null ? "on" : n.value : (n.value || "").replace(H, "")
                }
                return t
            }
            var c = A.isFunction(e);
            return this.each(function (t) {
                var n = A(this),
                    r = e;
                if (this.nodeType === 1) {
                    c && (r = e.call(this, t, n.val())), r == null ? r = "" : typeof r == "number" ? r += "" : A.isArray(r) && (r = A.map(r, function (e) {
                        return e == null ? "" : e + ""
                    }));
                    if (A.isArray(r) && q.test(this.type)) this.checked = A.inArray(n.val(), r) >= 0;
                    else if (A.nodeName(this, "select")) {
                        var i = A.makeArray(r);
                        A("option", this).each(function () {
                            this.selected = A.inArray(A(this).val(), i) >= 0
                        }), i.length || (this.selectedIndex = -1)
                    } else this.value = r
                }
            })
        }
    }), A.extend({
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function (e, n, r, i) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || e.nodeType === 2) return t;
            if (i && n in A.attrFn) return A(e)[n](r);
            var s = e.nodeType !== 1 || !A.isXMLDoc(e),
                o = r !== t;
            n = s && A.props[n] || n;
            if (e.nodeType === 1) {
                var u = B.test(n);
                if (n === "selected" && !A.support.optSelected) {
                    var a = e.parentNode;
                    a && (a.selectedIndex, a.parentNode && a.parentNode.selectedIndex)
                }
                if ((n in e || e[n] !== t) && s && !u) {
                    o && (n === "type" && j.test(e.nodeName) && e.parentNode && A.error("type property can't be changed"), r === null ? e.nodeType === 1 && e.removeAttribute(n) : e[n] = r);
                    if (A.nodeName(e, "form") && e.getAttributeNode(n)) return e.getAttributeNode(n).nodeValue;
                    if (n === "tabIndex") {
                        var f = e.getAttributeNode("tabIndex");
                        return f && f.specified ? f.value : F.test(e.nodeName) || I.test(e.nodeName) && e.href ? 0 : t
                    }
                    return e[n]
                }
                if (!A.support.style && s && n === "style") return o && (e.style.cssText = "" + r), e.style.cssText;
                o && e.setAttribute(n, "" + r);
                if (!e.attributes[n] && e.hasAttribute && !e.hasAttribute(n)) return t;
                var l = !A.support.hrefNormalized && s && u ? e.getAttribute(n, 2) : e.getAttribute(n);
                return l === null ? t : l
            }
            return o && (e[n] = r), e[n]
        }
    });
    var R = /\.(.*)$/,
        U = /^(?:textarea|input|select)$/i,
        z = /\./g,
        W = / /g,
        X = /[^\w\s.|`]/g,
        V = function (e) {
            return e.replace(X, "\\$&")
        };
    A.event = {
        add: function (n, r, i, s) {
            if (n.nodeType !== 3 && n.nodeType !== 8) {
                try {
                    A.isWindow(n) && n !== e && !n.frameElement && (n = e)
                } catch (o) {}
                if (i === !1) i = N;
                else if (!i) return;
                var u, a;
                i.handler && (u = i, i = u.handler), i.guid || (i.guid = A.guid++);
                var f = A._data(n);
                if (!f) return;
                var l = f.events,
                    c = f.handle;
                l || (f.events = l = {}), c || (f.handle = c = function (e) {
                    return typeof A != "undefined" && A.event.triggered !== e.type ? A.event.handle.apply(c.elem, arguments) : t
                }), c.elem = n, r = r.split(" ");
                var h, p = 0,
                    d;
                while (h = r[p++]) {
                    a = u ? A.extend({}, u) : {
                        handler: i,
                        data: s
                    }, h.indexOf(".") > -1 ? (d = h.split("."), h = d.shift(), a.namespace = d.slice(0).sort().join(".")) : (d = [], a.namespace = ""), a.type = h, a.guid || (a.guid = i.guid);
                    var v = l[h],
                        m = A.event.special[h] || {};
                    if (!v) {
                        v = l[h] = [];
                        if (!m.setup || m.setup.call(n, s, d, c) === !1) n.addEventListener ? n.addEventListener(h, c, !1) : n.attachEvent && n.attachEvent("on" + h, c)
                    }
                    m.add && (m.add.call(n, a), a.handler.guid || (a.handler.guid = i.guid)), v.push(a), A.event.global[h] = !0
                }
                n = null
            }
        },
        global: {},
        remove: function (e, n, r, i) {
            if (e.nodeType !== 3 && e.nodeType !== 8) {
                r === !1 && (r = N);
                var s, o, u, a, f = 0,
                    l, c, h, p, d, v, m, g = A.hasData(e) && A._data(e),
                    y = g && g.events;
                if (!g || !y) return;
                n && n.type && (r = n.handler, n = n.type);
                if (!n || typeof n == "string" && n.charAt(0) === ".") {
                    n = n || "";
                    for (o in y) A.event.remove(e, o + n);
                    return
                }
                n = n.split(" ");
                while (o = n[f++]) {
                    m = o, v = null, l = o.indexOf(".") < 0, c = [], l || (c = o.split("."), o = c.shift(), h = new RegExp("(^|\\.)" + A.map(c.slice(0).sort(), V).join("\\.(?:.*\\.)?") + "(\\.|$)")), d = y[o];
                    if (!d) continue;
                    if (!r) {
                        for (a = 0; a < d.length; a++) {
                            v = d[a];
                            if (l || h.test(v.namespace)) A.event.remove(e, m, v.handler, a), d.splice(a--, 1)
                        }
                        continue
                    }
                    p = A.event.special[o] || {};
                    for (a = i || 0; a < d.length; a++) {
                        v = d[a];
                        if (r.guid === v.guid) {
                            if (l || h.test(v.namespace)) i == null && d.splice(a--, 1), p.remove && p.remove.call(e, v);
                            if (i != null) break
                        }
                    }
                    if (d.length === 0 || i != null && d.length === 1)(!p.teardown || p.teardown.call(e, c) === !1) && A.removeEvent(e, o, g.handle), s = null, delete y[o]
                }
                if (A.isEmptyObject(y)) {
                    var b = g.handle;
                    b && (b.elem = null), delete g.events, delete g.handle, A.isEmptyObject(g) && A.removeData(e, t, !0)
                }
            }
        },
        trigger: function (e, n, r) {
            var i = e.type || e,
                s = arguments[3];
            if (!s) {
                e = typeof e == "object" ? e[A.expando] ? e : A.extend(A.Event(i), e) : A.Event(i), i.indexOf("!") >= 0 && (e.type = i = i.slice(0, -1), e.exclusive = !0), r || (e.stopPropagation(), A.event.global[i] && A.each(A.cache, function () {
                    var t = A.expando,
                        r = this[t];
                    r && r.events && r.events[i] && A.event.trigger(e, n, r.handle.elem)
                }));
                if (!r || r.nodeType === 3 || r.nodeType === 8) return t;
                e.result = t, e.target = r, n = A.makeArray(n), n.unshift(e)
            }
            e.currentTarget = r;
            var o = A._data(r, "handle");
            o && o.apply(r, n);
            var u = r.parentNode || r.ownerDocument;
            try {
                r && r.nodeName && A.noData[r.nodeName.toLowerCase()] || r["on" + i] && r["on" + i].apply(r, n) === !1 && (e.result = !1, e.preventDefault())
            } catch (a) {}
            if (!e.isPropagationStopped() && u) A.event.trigger(e, n, u, !0);
            else if (!e.isDefaultPrevented()) {
                var f, l = e.target,
                    c = i.replace(R, ""),
                    h = A.nodeName(l, "a") && c === "click",
                    p = A.event.special[c] || {};
                if ((!p._default || p._default.call(r, e) === !1) && !h && !(l && l.nodeName && A.noData[l.nodeName.toLowerCase()])) {
                    try {
                        l[c] && (f = l["on" + c], f && (l["on" + c] = null), A.event.triggered = e.type, l[c]())
                    } catch (d) {}
                    f && (l["on" + c] = f), A.event.triggered = t
                }
            }
        },
        handle: function (n) {
            var r, i, s, o, u, a = [],
                f = A.makeArray(arguments);
            n = f[0] = A.event.fix(n || e.event), n.currentTarget = this, r = n.type.indexOf(".") < 0 && !n.exclusive, r || (s = n.type.split("."), n.type = s.shift(), a = s.slice(0).sort(), o = new RegExp("(^|\\.)" + a.join("\\.(?:.*\\.)?") + "(\\.|$)")), n.namespace = n.namespace || a.join("."), u = A._data(this, "events"), i = (u || {})[n.type];
            if (u && i) {
                i = i.slice(0);
                for (var l = 0, c = i.length; l < c; l++) {
                    var h = i[l];
                    if (r || o.test(h.namespace)) {
                        n.handler = h.handler, n.data = h.data, n.handleObj = h;
                        var p = h.handler.apply(this, f);
                        p !== t && (n.result = p, p === !1 && (n.preventDefault(), n.stopPropagation()));
                        if (n.isImmediatePropagationStopped()) break
                    }
                }
            }
            return n.result
        },
        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        fix: function (e) {
            if (e[A.expando]) return e;
            var n = e;
            e = A.Event(n);
            for (var r = this.props.length, i; r;) i = this.props[--r], e[i] = n[i];
            e.target || (e.target = e.srcElement || L), e.target.nodeType === 3 && (e.target = e.target.parentNode), !e.relatedTarget && e.fromElement && (e.relatedTarget = e.fromElement === e.target ? e.toElement : e.fromElement);
            if (e.pageX == null && e.clientX != null) {
                var s = L.documentElement,
                    o = L.body;
                e.pageX = e.clientX + (s && s.scrollLeft || o && o.scrollLeft || 0) - (s && s.clientLeft || o && o.clientLeft || 0), e.pageY = e.clientY + (s && s.scrollTop || o && o.scrollTop || 0) - (s && s.clientTop || o && o.clientTop || 0)
            }
            return e.which == null && (e.charCode != null || e.keyCode != null) && (e.which = e.charCode != null ? e.charCode : e.keyCode), !e.metaKey && e.ctrlKey && (e.metaKey = e.ctrlKey), !e.which && e.button !== t && (e.which = e.button & 1 ? 1 : e.button & 2 ? 3 : e.button & 4 ? 2 : 0), e
        },
        guid: 1e8,
        proxy: A.proxy,
        special: {
            ready: {
                setup: A.bindReady,
                teardown: A.noop
            },
            live: {
                add: function (e) {
                    A.event.add(this, E(e.origType, e.selector), A.extend({}, e, {
                        handler: S,
                        guid: e.handler.guid
                    }))
                },
                remove: function (e) {
                    A.event.remove(this, E(e.origType, e.selector), e)
                }
            },
            beforeunload: {
                setup: function (e, t, n) {
                    A.isWindow(this) && (this.onbeforeunload = n)
                },
                teardown: function (e, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null)
                }
            }
        }
    }, A.removeEvent = L.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        e.detachEvent && e.detachEvent("on" + t, n)
    }, A.Event = function (e) {
        if (!this.preventDefault) return new A.Event(e);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? T : N) : this.type = e, this.timeStamp = A.now(), this[A.expando] = !0
    }, A.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = T;
            var e = this.originalEvent;
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            this.isPropagationStopped = T;
            var e = this.originalEvent;
            e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = T, this.stopPropagation()
        },
        isDefaultPrevented: N,
        isPropagationStopped: N,
        isImmediatePropagationStopped: N
    };
    var $ = function (e) {
        var t = e.relatedTarget;
        try {
            if (t && t !== L && !t.parentNode) return;
            while (t && t !== this) t = t.parentNode;
            t !== this && (e.type = e.data, A.event.handle.apply(this, arguments))
        } catch (n) {}
    }, J = function (e) {
        e.type = e.data, A.event.handle.apply(this, arguments)
    };
    A.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (e, t) {
        A.event.special[e] = {
            setup: function (n) {
                A.event.add(this, t, n && n.selector ? J : $, e)
            },
            teardown: function (e) {
                A.event.remove(this, t, e && e.selector ? J : $)
            }
        }
    }), A.support.submitBubbles || (A.event.special.submit = {
        setup: function (e, t) {
            if (!this.nodeName || this.nodeName.toLowerCase() === "form") return !1;
            A.event.add(this, "click.specialSubmit", function (e) {
                var t = e.target,
                    n = t.type;
                (n === "submit" || n === "image") && A(t).closest("form").length && x("submit", this, arguments)
            }), A.event.add(this, "keypress.specialSubmit", function (e) {
                var t = e.target,
                    n = t.type;
                (n === "text" || n === "password") && A(t).closest("form").length && e.keyCode === 13 && x("submit", this, arguments)
            })
        },
        teardown: function (e) {
            A.event.remove(this, ".specialSubmit")
        }
    });
    if (!A.support.changeBubbles) {
        var K, Q = function (e) {
            var t = e.type,
                n = e.value;
            return t === "radio" || t === "checkbox" ? n = e.checked : t === "select-multiple" ? n = e.selectedIndex > -1 ? A.map(e.options, function (e) {
                return e.selected
            }).join("-") : "" : e.nodeName.toLowerCase() === "select" && (n = e.selectedIndex), n
        }, G = function (n) {
            var r = n.target,
                i, s;
            if (U.test(r.nodeName) && !r.readOnly) {
                i = A._data(r, "_change_data"), s = Q(r), (n.type !== "focusout" || r.type !== "radio") && A._data(r, "_change_data", s);
                if (i === t || s === i) return;
                if (i != null || s) n.type = "change", n.liveFired = t, A.event.trigger(n, arguments[1], r)
            }
        };
        A.event.special.change = {
            filters: {
                focusout: G,
                beforedeactivate: G,
                click: function (e) {
                    var t = e.target,
                        n = t.type;
                    (n === "radio" || n === "checkbox" || t.nodeName.toLowerCase() === "select") && G.call(this, e)
                },
                keydown: function (e) {
                    var t = e.target,
                        n = t.type;
                    (e.keyCode === 13 && t.nodeName.toLowerCase() !== "textarea" || e.keyCode === 32 && (n === "checkbox" || n === "radio") || n === "select-multiple") && G.call(this, e)
                },
                beforeactivate: function (e) {
                    var t = e.target;
                    A._data(t, "_change_data", Q(t))
                }
            },
            setup: function (e, t) {
                if (this.type === "file") return !1;
                for (var n in K) A.event.add(this, n + ".specialChange", K[n]);
                return U.test(this.nodeName)
            },
            teardown: function (e) {
                return A.event.remove(this, ".specialChange"), U.test(this.nodeName)
            }
        }, K = A.event.special.change.filters, K.focus = K.beforeactivate
    }
    L.addEventListener && A.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        function n(e) {
            var n = A.event.fix(e);
            n.type = t, n.originalEvent = {}, A.event.trigger(n, null, n.target), n.isDefaultPrevented() && e.preventDefault()
        }
        var r = 0;
        A.event.special[t] = {
            setup: function () {
                r++ === 0 && L.addEventListener(e, n, !0)
            },
            teardown: function () {
                --r === 0 && L.removeEventListener(e, n, !0)
            }
        }
    }), A.each(["bind", "one"], function (e, n) {
        A.fn[n] = function (e, r, i) {
            if (typeof e == "object") {
                for (var s in e) this[n](s, r, e[s], i);
                return this
            }
            if (A.isFunction(r) || r === !1) i = r, r = t;
            var o = n === "one" ? A.proxy(i, function (e) {
                return A(this).unbind(e, o), i.apply(this, arguments)
            }) : i;
            if (e === "unload" && n !== "one") this.one(e, r, i);
            else for (var u = 0, a = this.length; u < a; u++) A.event.add(this[u], e, o, r);
            return this
        }
    }), A.fn.extend({
        unbind: function (e, t) {
            if (typeof e != "object" || e.preventDefault) for (var n = 0, r = this.length; n < r; n++) A.event.remove(this[n], e, t);
            else for (var i in e) this.unbind(i, e[i]);
            return this
        },
        delegate: function (e, t, n, r) {
            return this.live(t, n, r, e)
        },
        undelegate: function (e, t, n) {
            return arguments.length === 0 ? this.unbind("live") : this.die(t, null, n, e)
        },
        trigger: function (e, t) {
            return this.each(function () {
                A.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            if (this[0]) {
                var n = A.Event(e);
                return n.preventDefault(), n.stopPropagation(), A.event.trigger(n, t, this[0]), n.result
            }
        },
        toggle: function (e) {
            var t = arguments,
                n = 1;
            while (n < t.length) A.proxy(e, t[n++]);
            return this.click(A.proxy(e, function (r) {
                var i = (A._data(this, "lastToggle" + e.guid) || 0) % n;
                return A._data(this, "lastToggle" + e.guid, i + 1), r.preventDefault(), t[i].apply(this, arguments) || !1
            }))
        },
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    var Y = {
        focus: "focusin",
        blur: "focusout",
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    A.each(["live", "die"], function (e, n) {
        A.fn[n] = function (e, r, i, s) {
            var o, u = 0,
                a, f, l, c = s || this.selector,
                h = s ? this : A(this.context);
            if (typeof e == "object" && !e.preventDefault) {
                for (var p in e) h[n](p, r, e[p], c);
                return this
            }
            A.isFunction(r) && (i = r, r = t), e = (e || "").split(" ");
            while ((o = e[u++]) != null) {
                a = R.exec(o), f = "", a && (f = a[0], o = o.replace(R, ""));
                if (o === "hover") {
                    e.push("mouseenter" + f, "mouseleave" + f);
                    continue
                }
                l = o, o === "focus" || o === "blur" ? (e.push(Y[o] + f), o += f) : o = (Y[o] || o) + f;
                if (n === "live") for (var d = 0, v = h.length; d < v; d++) A.event.add(h[d], "live." + E(o, c), {
                    data: r,
                    selector: c,
                    handler: i,
                    origType: o,
                    origHandler: i,
                    preType: l
                });
                else h.unbind("live." + E(o, c), i)
            }
            return this
        }
    }), A.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function (e, t) {
        A.fn[t] = function (e, n) {
            return n == null && (n = e, e = null), arguments.length > 0 ? this.bind(t, e, n) : this.trigger(t)
        }, A.attrFn && (A.attrFn[t] = !0)
    }),
    function () {
        function e(e, t, n, r, i, s) {
            for (var o = 0, u = r.length; o < u; o++) {
                var a = r[o];
                if (a) {
                    var f = !1;
                    a = a[e];
                    while (a) {
                        if (a.sizcache === n) {
                            f = r[a.sizset];
                            break
                        }
                        if (a.nodeType === 1) {
                            s || (a.sizcache = n, a.sizset = o);
                            if (typeof t != "string") {
                                if (a === t) {
                                    f = !0;
                                    break
                                }
                            } else if (l.filter(t, [a]).length > 0) {
                                f = a;
                                break
                            }
                        }
                        a = a[e]
                    }
                    r[o] = f
                }
            }
        }
        function n(e, t, n, r, i, s) {
            for (var o = 0, u = r.length; o < u; o++) {
                var a = r[o];
                if (a) {
                    var f = !1;
                    a = a[e];
                    while (a) {
                        if (a.sizcache === n) {
                            f = r[a.sizset];
                            break
                        }
                        a.nodeType === 1 && !s && (a.sizcache = n, a.sizset = o);
                        if (a.nodeName.toLowerCase() === t) {
                            f = a;
                            break
                        }
                        a = a[e]
                    }
                    r[o] = f
                }
            }
        }
        var r = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            i = 0,
            s = Object.prototype.toString,
            o = !1,
            u = !0,
            a = /\\/g,
            f = /\W/;
        [0, 0].sort(function () {
            return u = !1, 0
        });
        var l = function (e, t, n, i) {
            n = n || [], t = t || L;
            var o = t;
            if (t.nodeType !== 1 && t.nodeType !== 9) return [];
            if (!e || typeof e != "string") return n;
            var u, a, f, p, d, m, g, y, w = !0,
                E = l.isXML(t),
                S = [],
                x = e;
            do {
                r.exec(""), u = r.exec(x);
                if (u) {
                    x = u[3], S.push(u[1]);
                    if (u[2]) {
                        p = u[3];
                        break
                    }
                }
            } while (u);
            if (S.length > 1 && h.exec(e)) if (S.length === 2 && c.relative[S[0]]) a = b(S[0] + S[1], t);
            else {
                a = c.relative[S[0]] ? [t] : l(S.shift(), t);
                while (S.length) e = S.shift(), c.relative[e] && (e += S.shift()), a = b(e, a)
            } else {
                !i && S.length > 1 && t.nodeType === 9 && !E && c.match.ID.test(S[0]) && !c.match.ID.test(S[S.length - 1]) && (d = l.find(S.shift(), t, E), t = d.expr ? l.filter(d.expr, d.set)[0] : d.set[0]);
                if (t) {
                    d = i ? {
                        expr: S.pop(),
                        set: v(i)
                    } : l.find(S.pop(), S.length !== 1 || S[0] !== "~" && S[0] !== "+" || !t.parentNode ? t : t.parentNode, E), a = d.expr ? l.filter(d.expr, d.set) : d.set, S.length > 0 ? f = v(a) : w = !1;
                    while (S.length) m = S.pop(), g = m, c.relative[m] ? g = S.pop() : m = "", g == null && (g = t), c.relative[m](f, g, E)
                } else f = S = []
            }
            f || (f = a), f || l.error(m || e);
            if (s.call(f) === "[object Array]") if (w) if (t && t.nodeType === 1) for (y = 0; f[y] != null; y++) f[y] && (f[y] === !0 || f[y].nodeType === 1 && l.contains(t, f[y])) && n.push(a[y]);
            else for (y = 0; f[y] != null; y++) f[y] && f[y].nodeType === 1 && n.push(a[y]);
            else n.push.apply(n, f);
            else v(f, n);
            return p && (l(p, o, n, i), l.uniqueSort(n)), n
        };
        l.uniqueSort = function (e) {
            if (g) {
                o = u, e.sort(g);
                if (o) for (var t = 1; t < e.length; t++) e[t] === e[t - 1] && e.splice(t--, 1)
            }
            return e
        }, l.matches = function (e, t) {
            return l(e, null, null, t)
        }, l.matchesSelector = function (e, t) {
            return l(t, null, null, [e]).length > 0
        }, l.find = function (e, t, n) {
            var r;
            if (!e) return [];
            for (var i = 0, s = c.order.length; i < s; i++) {
                var o, u = c.order[i];
                if (o = c.leftMatch[u].exec(e)) {
                    var f = o[1];
                    o.splice(1, 1);
                    if (f.substr(f.length - 1) !== "\\") {
                        o[1] = (o[1] || "").replace(a, ""), r = c.find[u](o, t, n);
                        if (r != null) {
                            e = e.replace(c.match[u], "");
                            break
                        }
                    }
                }
            }
            return r || (r = typeof t.getElementsByTagName != "undefined" ? t.getElementsByTagName("*") : []), {
                set: r,
                expr: e
            }
        }, l.filter = function (e, n, r, i) {
            var s, o, u = e,
                a = [],
                f = n,
                h = n && n[0] && l.isXML(n[0]);
            while (e && n.length) {
                for (var p in c.filter) if ((s = c.leftMatch[p].exec(e)) != null && s[2]) {
                    var d, v, m = c.filter[p],
                        g = s[1];
                    o = !1, s.splice(1, 1);
                    if (g.substr(g.length - 1) === "\\") continue;
                    f === a && (a = []);
                    if (c.preFilter[p]) {
                        s = c.preFilter[p](s, f, r, a, i, h);
                        if (s) {
                            if (s === !0) continue
                        } else o = d = !0
                    }
                    if (s) for (var y = 0;
                    (v = f[y]) != null; y++) if (v) {
                        d = m(v, s, y, f);
                        var b = i ^ !! d;
                        r && d != null ? b ? o = !0 : f[y] = !1 : b && (a.push(v), o = !0)
                    }
                    if (d !== t) {
                        r || (f = a), e = e.replace(c.match[p], "");
                        if (!o) return [];
                        break
                    }
                }
                if (e === u) {
                    if (o != null) break;
                    l.error(e)
                }
                u = e
            }
            return f
        }, l.error = function (e) {
            throw "Syntax error, unrecognized expression: " + e
        };
        var c = l.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function (e) {
                    return e.getAttribute("href")
                },
                type: function (e) {
                    return e.getAttribute("type")
                }
            },
            relative: {
                "+": function (e, t) {
                    var n = typeof t == "string",
                        r = n && !f.test(t),
                        i = n && !r;
                    r && (t = t.toLowerCase());
                    for (var s = 0, o = e.length, u; s < o; s++) if (u = e[s]) {
                        while ((u = u.previousSibling) && u.nodeType !== 1);
                        e[s] = i || u && u.nodeName.toLowerCase() === t ? u || !1 : u === t
                    }
                    i && l.filter(t, e, !0)
                },
                ">": function (e, t) {
                    var n, r = typeof t == "string",
                        i = 0,
                        s = e.length;
                    if (r && !f.test(t)) {
                        t = t.toLowerCase();
                        for (; i < s; i++) {
                            n = e[i];
                            if (n) {
                                var o = n.parentNode;
                                e[i] = o.nodeName.toLowerCase() === t ? o : !1
                            }
                        }
                    } else {
                        for (; i < s; i++) n = e[i], n && (e[i] = r ? n.parentNode : n.parentNode === t);
                        r && l.filter(t, e, !0)
                    }
                },
                "": function (t, r, s) {
                    var o, u = i++,
                        a = e;
                    typeof r == "string" && !f.test(r) && (r = r.toLowerCase(), o = r, a = n), a("parentNode", r, u, t, o, s)
                },
                "~": function (t, r, s) {
                    var o, u = i++,
                        a = e;
                    typeof r == "string" && !f.test(r) && (r = r.toLowerCase(), o = r, a = n), a("previousSibling", r, u, t, o, s)
                }
            },
            find: {
                ID: function (e, t, n) {
                    if (typeof t.getElementById != "undefined" && !n) {
                        var r = t.getElementById(e[1]);
                        return r && r.parentNode ? [r] : []
                    }
                },
                NAME: function (e, t) {
                    if (typeof t.getElementsByName != "undefined") {
                        var n = [],
                            r = t.getElementsByName(e[1]);
                        for (var i = 0, s = r.length; i < s; i++) r[i].getAttribute("name") === e[1] && n.push(r[i]);
                        return n.length === 0 ? null : n
                    }
                },
                TAG: function (e, t) {
                    if (typeof t.getElementsByTagName != "undefined") return t.getElementsByTagName(e[1])
                }
            },
            preFilter: {
                CLASS: function (e, t, n, r, i, s) {
                    e = " " + e[1].replace(a, "") + " ";
                    if (s) return e;
                    for (var o = 0, u;
                    (u = t[o]) != null; o++) u && (i ^ (u.className && (" " + u.className + " ").replace(/[\t\n\r]/g, " ").indexOf(e) >= 0) ? n || r.push(u) : n && (t[o] = !1));
                    return !1
                },
                ID: function (e) {
                    return e[1].replace(a, "")
                },
                TAG: function (e, t) {
                    return e[1].replace(a, "").toLowerCase()
                },
                CHILD: function (e) {
                    if (e[1] === "nth") {
                        e[2] || l.error(e[0]), e[2] = e[2].replace(/^\+|\s*/g, "");
                        var t = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(e[2] === "even" && "2n" || e[2] === "odd" && "2n+1" || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
                        e[2] = t[1] + (t[2] || 1) - 0, e[3] = t[3] - 0
                    } else e[2] && l.error(e[0]);
                    return e[0] = i++, e
                },
                ATTR: function (e, t, n, r, i, s) {
                    var o = e[1] = e[1].replace(a, "");
                    return !s && c.attrMap[o] && (e[1] = c.attrMap[o]), e[4] = (e[4] || e[5] || "").replace(a, ""), e[2] === "~=" && (e[4] = " " + e[4] + " "), e
                },
                PSEUDO: function (e, t, n, i, s) {
                    if (e[1] === "not") {
                        if (!((r.exec(e[3]) || "").length > 1 || /^\w/.test(e[3]))) {
                            var o = l.filter(e[3], t, n, !0 ^ s);
                            return n || i.push.apply(i, o), !1
                        }
                        e[3] = l(e[3], null, null, t)
                    } else if (c.match.POS.test(e[0]) || c.match.CHILD.test(e[0])) return !0;
                    return e
                },
                POS: function (e) {
                    return e.unshift(!0), e
                }
            },
            filters: {
                enabled: function (e) {
                    return e.disabled === !1 && e.type !== "hidden"
                },
                disabled: function (e) {
                    return e.disabled === !0
                },
                checked: function (e) {
                    return e.checked === !0
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                parent: function (e) {
                    return !!e.firstChild
                },
                empty: function (e) {
                    return !e.firstChild
                },
                has: function (e, t, n) {
                    return !!l(n[3], e).length
                },
                header: function (e) {
                    return /h\d/i.test(e.nodeName)
                },
                text: function (e) {
                    var t = e.getAttribute("type"),
                        n = e.type;
                    return "text" === n && (t === n || t === null)
                },
                radio: function (e) {
                    return "radio" === e.type
                },
                checkbox: function (e) {
                    return "checkbox" === e.type
                },
                file: function (e) {
                    return "file" === e.type
                },
                password: function (e) {
                    return "password" === e.type
                },
                submit: function (e) {
                    return "submit" === e.type
                },
                image: function (e) {
                    return "image" === e.type
                },
                reset: function (e) {
                    return "reset" === e.type
                },
                button: function (e) {
                    return "button" === e.type || e.nodeName.toLowerCase() === "button"
                },
                input: function (e) {
                    return /input|select|textarea|button/i.test(e.nodeName)
                }
            },
            setFilters: {
                first: function (e, t) {
                    return t === 0
                },
                last: function (e, t, n, r) {
                    return t === r.length - 1
                },
                even: function (e, t) {
                    return t % 2 === 0
                },
                odd: function (e, t) {
                    return t % 2 === 1
                },
                lt: function (e, t, n) {
                    return t < n[3] - 0
                },
                gt: function (e, t, n) {
                    return t > n[3] - 0
                },
                nth: function (e, t, n) {
                    return n[3] - 0 === t
                },
                eq: function (e, t, n) {
                    return n[3] - 0 === t
                }
            },
            filter: {
                PSEUDO: function (e, t, n, r) {
                    var i = t[1],
                        s = c.filters[i];
                    if (s) return s(e, n, t, r);
                    if (i === "contains") return (e.textContent || e.innerText || l.getText([e]) || "").indexOf(t[3]) >= 0;
                    if (i === "not") {
                        var o = t[3];
                        for (var u = 0, a = o.length; u < a; u++) if (o[u] === e) return !1;
                        return !0
                    }
                    l.error(i)
                },
                CHILD: function (e, t) {
                    var n = t[1],
                        r = e;
                    switch (n) {
                        case "only":
                        case "first":
                            while (r = r.previousSibling) if (r.nodeType === 1) return !1;
                            if (n === "first") return !0;
                            r = e;
                        case "last":
                            while (r = r.nextSibling) if (r.nodeType === 1) return !1;
                            return !0;
                        case "nth":
                            var i = t[2],
                                s = t[3];
                            if (i === 1 && s === 0) return !0;
                            var o = t[0],
                                u = e.parentNode;
                            if (u && (u.sizcache !== o || !e.nodeIndex)) {
                                var a = 0;
                                for (r = u.firstChild; r; r = r.nextSibling) r.nodeType === 1 && (r.nodeIndex = ++a);
                                u.sizcache = o
                            }
                            var f = e.nodeIndex - s;
                            return i === 0 ? f === 0 : f % i === 0 && f / i >= 0
                    }
                },
                ID: function (e, t) {
                    return e.nodeType === 1 && e.getAttribute("id") === t
                },
                TAG: function (e, t) {
                    return t === "*" && e.nodeType === 1 || e.nodeName.toLowerCase() === t
                },
                CLASS: function (e, t) {
                    return (" " + (e.className || e.getAttribute("class")) + " ").indexOf(t) > -1
                },
                ATTR: function (e, t) {
                    var n = t[1],
                        r = c.attrHandle[n] ? c.attrHandle[n](e) : e[n] != null ? e[n] : e.getAttribute(n),
                        i = r + "",
                        s = t[2],
                        o = t[4];
                    return r == null ? s === "!=" : s === "=" ? i === o : s === "*=" ? i.indexOf(o) >= 0 : s === "~=" ? (" " + i + " ").indexOf(o) >= 0 : o ? s === "!=" ? i !== o : s === "^=" ? i.indexOf(o) === 0 : s === "$=" ? i.substr(i.length - o.length) === o : s === "|=" ? i === o || i.substr(0, o.length + 1) === o + "-" : !1 : i && r !== !1
                },
                POS: function (e, t, n, r) {
                    var i = t[2],
                        s = c.setFilters[i];
                    if (s) return s(e, n, t, r)
                }
            }
        }, h = c.match.POS,
            p = function (e, t) {
                return "\\" + (t - 0 + 1)
            };
        for (var d in c.match) c.match[d] = new RegExp(c.match[d].source + /(?![^\[]*\])(?![^\(]*\))/.source), c.leftMatch[d] = new RegExp(/(^(?:.|\r|\n)*?)/.source + c.match[d].source.replace(/\\(\d+)/g, p));
        var v = function (e, t) {
            return e = Array.prototype.slice.call(e, 0), t ? (t.push.apply(t, e), t) : e
        };
        try {
            Array.prototype.slice.call(L.documentElement.childNodes, 0)[0].nodeType
        } catch (m) {
            v = function (e, t) {
                var n = 0,
                    r = t || [];
                if (s.call(e) === "[object Array]") Array.prototype.push.apply(r, e);
                else if (typeof e.length == "number") for (var i = e.length; n < i; n++) r.push(e[n]);
                else for (; e[n]; n++) r.push(e[n]);
                return r
            }
        }
        var g, y;
        L.documentElement.compareDocumentPosition ? g = function (e, t) {
            return e === t ? (o = !0, 0) : !e.compareDocumentPosition || !t.compareDocumentPosition ? e.compareDocumentPosition ? -1 : 1 : e.compareDocumentPosition(t) & 4 ? -1 : 1
        } : (g = function (e, t) {
            var n, r, i = [],
                s = [],
                u = e.parentNode,
                a = t.parentNode,
                f = u;
            if (e === t) return o = !0, 0;
            if (u === a) return y(e, t);
            if (!u) return -1;
            if (!a) return 1;
            while (f) i.unshift(f), f = f.parentNode;
            f = a;
            while (f) s.unshift(f), f = f.parentNode;
            n = i.length, r = s.length;
            for (var l = 0; l < n && l < r; l++) if (i[l] !== s[l]) return y(i[l], s[l]);
            return l === n ? y(e, s[l], -1) : y(i[l], t, 1)
        }, y = function (e, t, n) {
            if (e === t) return n;
            var r = e.nextSibling;
            while (r) {
                if (r === t) return -1;
                r = r.nextSibling
            }
            return 1
        }), l.getText = function (e) {
            var t = "",
                n;
            for (var r = 0; e[r]; r++) n = e[r], n.nodeType === 3 || n.nodeType === 4 ? t += n.nodeValue : n.nodeType !== 8 && (t += l.getText(n.childNodes));
            return t
        },
        function () {
            var e = L.createElement("div"),
                n = "script" + (new Date).getTime(),
                r = L.documentElement;
            e.innerHTML = "<a name='" + n + "'/>", r.insertBefore(e, r.firstChild), L.getElementById(n) && (c.find.ID = function (e, n, r) {
                if (typeof n.getElementById != "undefined" && !r) {
                    var i = n.getElementById(e[1]);
                    return i ? i.id === e[1] || typeof i.getAttributeNode != "undefined" && i.getAttributeNode("id").nodeValue === e[1] ? [i] : t : []
                }
            }, c.filter.ID = function (e, t) {
                var n = typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id");
                return e.nodeType === 1 && n && n.nodeValue === t
            }), r.removeChild(e), r = e = null
        }(),
        function () {
            var e = L.createElement("div");
            e.appendChild(L.createComment("")), e.getElementsByTagName("*").length > 0 && (c.find.TAG = function (e, t) {
                var n = t.getElementsByTagName(e[1]);
                if (e[1] === "*") {
                    var r = [];
                    for (var i = 0; n[i]; i++) n[i].nodeType === 1 && r.push(n[i]);
                    n = r
                }
                return n
            }), e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute != "undefined" && e.firstChild.getAttribute("href") !== "#" && (c.attrHandle.href = function (e) {
                return e.getAttribute("href", 2)
            }), e = null
        }(), L.querySelectorAll && function () {
            var e = l,
                t = L.createElement("div"),
                n = "__sizzle__";
            t.innerHTML = "<p class='TEST'></p>";
            if (!t.querySelectorAll || t.querySelectorAll(".TEST").length !== 0) {
                l = function (t, r, i, s) {
                    r = r || L;
                    if (!s && !l.isXML(r)) {
                        var o = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);
                        if (o && (r.nodeType === 1 || r.nodeType === 9)) {
                            if (o[1]) return v(r.getElementsByTagName(t), i);
                            if (o[2] && c.find.CLASS && r.getElementsByClassName) return v(r.getElementsByClassName(o[2]), i)
                        }
                        if (r.nodeType === 9) {
                            if (t === "body" && r.body) return v([r.body], i);
                            if (o && o[3]) {
                                var u = r.getElementById(o[3]);
                                if (!u || !u.parentNode) return v([], i);
                                if (u.id === o[3]) return v([u], i)
                            }
                            try {
                                return v(r.querySelectorAll(t), i)
                            } catch (a) {}
                        } else if (r.nodeType === 1 && r.nodeName.toLowerCase() !== "object") {
                            var f = r,
                                h = r.getAttribute("id"),
                                p = h || n,
                                d = r.parentNode,
                                m = /^\s*[+~]/.test(t);
                            h ? p = p.replace(/'/g, "\\$&") : r.setAttribute("id", p), m && d && (r = r.parentNode);
                            try {
                                if (!m || d) return v(r.querySelectorAll("[id='" + p + "'] " + t), i)
                            } catch (g) {} finally {
                                h || f.removeAttribute("id")
                            }
                        }
                    }
                    return e(t, r, i, s)
                };
                for (var r in e) l[r] = e[r];
                t = null
            }
        }(),
        function () {
            var e = L.documentElement,
                t = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
            if (t) {
                var n = !t.call(L.createElement("div"), "div"),
                    r = !1;
                try {
                    t.call(L.documentElement, "[test!='']:sizzle")
                } catch (i) {
                    r = !0
                }
                l.matchesSelector = function (e, i) {
                    i = i.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!l.isXML(e)) try {
                        if (r || !c.match.PSEUDO.test(i) && !/!=/.test(i)) {
                            var s = t.call(e, i);
                            if (s || !n || e.document && e.document.nodeType !== 11) return s
                        }
                    } catch (o) {}
                    return l(i, null, null, [e]).length > 0
                }
            }
        }(),
        function () {
            var e = L.createElement("div");
            e.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (e.getElementsByClassName && e.getElementsByClassName("e").length !== 0) {
                e.lastChild.className = "e";
                if (e.getElementsByClassName("e").length === 1) return;
                c.order.splice(1, 0, "CLASS"), c.find.CLASS = function (e, t, n) {
                    if (typeof t.getElementsByClassName != "undefined" && !n) return t.getElementsByClassName(e[1])
                }, e = null
            }
        }(), L.documentElement.contains ? l.contains = function (e, t) {
            return e !== t && (e.contains ? e.contains(t) : !0)
        } : L.documentElement.compareDocumentPosition ? l.contains = function (e, t) {
            return !!(e.compareDocumentPosition(t) & 16)
        } : l.contains = function () {
            return !1
        }, l.isXML = function (e) {
            var t = (e ? e.ownerDocument || e : 0).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        };
        var b = function (e, t) {
            var n, r = [],
                i = "",
                s = t.nodeType ? [t] : t;
            while (n = c.match.PSEUDO.exec(e)) i += n[0], e = e.replace(c.match.PSEUDO, "");
            e = c.relative[e] ? e + "*" : e;
            for (var o = 0, u = s.length; o < u; o++) l(e, s[o], r);
            return l.filter(i, r)
        };
        A.find = l, A.expr = l.selectors, A.expr[":"] = A.expr.filters, A.unique = l.uniqueSort, A.text = l.getText, A.isXMLDoc = l.isXML, A.contains = l.contains
    }();
    var Z = /Until$/,
        et = /^(?:parents|prevUntil|prevAll)/,
        tt = /,/,
        nt = /^.[^:#\[\.,]*$/,
        rt = Array.prototype.slice,
        it = A.expr.match.POS,
        st = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    A.fn.extend({
        find: function (e) {
            var t = this.pushStack("", "find", e),
                n = 0;
            for (var r = 0, i = this.length; r < i; r++) {
                n = t.length, A.find(e, this[r], t);
                if (r > 0) for (var s = n; s < t.length; s++) for (var o = 0; o < n; o++) if (t[o] === t[s]) {
                    t.splice(s--, 1);
                    break
                }
            }
            return t
        },
        has: function (e) {
            var t = A(e);
            return this.filter(function () {
                for (var e = 0, n = t.length; e < n; e++) if (A.contains(this, t[e])) return !0
            })
        },
        not: function (e) {
            return this.pushStack(b(this, e, !1), "not", e)
        },
        filter: function (e) {
            return this.pushStack(b(this, e, !0), "filter", e)
        },
        is: function (e) {
            return !!e && A.filter(e, this).length > 0
        },
        closest: function (e, t) {
            var n = [],
                r, i, s = this[0];
            if (A.isArray(e)) {
                var o, u, a = {}, f = 1;
                if (s && e.length) {
                    for (r = 0, i = e.length; r < i; r++) u = e[r], a[u] || (a[u] = A.expr.match.POS.test(u) ? A(u, t || this.context) : u);
                    while (s && s.ownerDocument && s !== t) {
                        for (u in a) o = a[u], (o.jquery ? o.index(s) > -1 : A(s).is(o)) && n.push({
                            selector: u,
                            elem: s,
                            level: f
                        });
                        s = s.parentNode, f++
                    }
                }
                return n
            }
            var l = it.test(e) ? A(e, t || this.context) : null;
            for (r = 0, i = this.length; r < i; r++) {
                s = this[r];
                while (s) {
                    if (l ? l.index(s) > -1 : A.find.matchesSelector(s, e)) {
                        n.push(s);
                        break
                    }
                    s = s.parentNode;
                    if (!s || !s.ownerDocument || s === t) break
                }
            }
            return n = n.length > 1 ? A.unique(n) : n, this.pushStack(n, "closest", e)
        },
        index: function (e) {
            return !e || typeof e == "string" ? A.inArray(this[0], e ? A(e) : this.parent().children()) : A.inArray(e.jquery ? e[0] : e, this)
        },
        add: function (e, t) {
            var n = typeof e == "string" ? A(e, t) : A.makeArray(e),
                r = A.merge(this.get(), n);
            return this.pushStack(w(n[0]) || w(r[0]) ? r : A.unique(r))
        },
        andSelf: function () {
            return this.add(this.prevObject)
        }
    }), A.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function (e) {
            return A.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return A.dir(e, "parentNode", n)
        },
        next: function (e) {
            return A.nth(e, 2, "nextSibling")
        },
        prev: function (e) {
            return A.nth(e, 2, "previousSibling")
        },
        nextAll: function (e) {
            return A.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return A.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return A.dir(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return A.dir(e, "previousSibling", n)
        },
        siblings: function (e) {
            return A.sibling(e.parentNode.firstChild, e)
        },
        children: function (e) {
            return A.sibling(e.firstChild)
        },
        contents: function (e) {
            return A.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : A.makeArray(e.childNodes)
        }
    }, function (e, t) {
        A.fn[e] = function (n, r) {
            var i = A.map(this, t, n),
                s = rt.call(arguments);
            return Z.test(e) || (r = n), r && typeof r == "string" && (i = A.filter(r, i)), i = this.length > 1 && !st[e] ? A.unique(i) : i, (this.length > 1 || tt.test(r)) && et.test(e) && (i = i.reverse()), this.pushStack(i, e, s.join(","))
        }
    }), A.extend({
        filter: function (e, t, n) {
            return n && (e = ":not(" + e + ")"), t.length === 1 ? A.find.matchesSelector(t[0], e) ? [t[0]] : [] : A.find.matches(e, t)
        },
        dir: function (e, n, r) {
            var i = [],
                s = e[n];
            while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !A(s).is(r))) s.nodeType === 1 && i.push(s), s = s[n];
            return i
        },
        nth: function (e, t, n, r) {
            t = t || 1;
            var i = 0;
            for (; e; e = e[n]) if (e.nodeType === 1 && ++i === t) break;
            return e
        },
        sibling: function (e, t) {
            var n = [];
            for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
            return n
        }
    });
    var ot = / jQuery\d+="(?:\d+|null)"/g,
        ut = /^\s+/,
        at = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        ft = /<([\w:]+)/,
        lt = /<tbody/i,
        ct = /<|&#?\w+;/,
        ht = /<(?:script|object|embed|option|style)/i,
        pt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        dt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        };
    dt.optgroup = dt.option, dt.tbody = dt.tfoot = dt.colgroup = dt.caption = dt.thead, dt.th = dt.td, A.support.htmlSerialize || (dt._default = [1, "div<div>", "</div>"]), A.fn.extend({
        text: function (e) {
            return A.isFunction(e) ? this.each(function (t) {
                var n = A(this);
                n.text(e.call(this, t, n.text()))
            }) : typeof e != "object" && e !== t ? this.empty().append((this[0] && this[0].ownerDocument || L).createTextNode(e)) : A.text(this)
        },
        wrapAll: function (e) {
            if (A.isFunction(e)) return this.each(function (t) {
                A(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = A(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    var e = this;
                    while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function (e) {
            return A.isFunction(e) ? this.each(function (t) {
                A(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = A(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            return this.each(function () {
                A(this).wrapAll(e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                A.nodeName(this, "body") || A(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (e) {
                this.nodeType === 1 && this.appendChild(e)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (e) {
                this.nodeType === 1 && this.insertBefore(e, this.firstChild)
            })
        },
        before: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (e) {
                this.parentNode.insertBefore(e, this)
            });
            if (arguments.length) {
                var e = A(arguments[0]);
                return e.push.apply(e, this.toArray()), this.pushStack(e, "before", arguments)
            }
        },
        after: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (e) {
                this.parentNode.insertBefore(e, this.nextSibling)
            });
            if (arguments.length) {
                var e = this.pushStack(this, "after", arguments);
                return e.push.apply(e, A(arguments[0]).toArray()), e
            }
        },
        remove: function (e, t) {
            for (var n = 0, r;
            (r = this[n]) != null; n++) if (!e || A.filter(e, [r]).length)!t && r.nodeType === 1 && (A.cleanData(r.getElementsByTagName("*")), A.cleanData([r])), r.parentNode && r.parentNode.removeChild(r);
            return this
        },
        empty: function () {
            for (var e = 0, t;
            (t = this[e]) != null; e++) {
                t.nodeType === 1 && A.cleanData(t.getElementsByTagName("*"));
                while (t.firstChild) t.removeChild(t.firstChild)
            }
            return this
        },
        clone: function (e, t) {
            return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function () {
                return A.clone(this, e, t)
            })
        },
        html: function (e) {
            if (e === t) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(ot, "") : null;
            if (typeof e != "string" || ht.test(e) || !A.support.leadingWhitespace && ut.test(e) || dt[(ft.exec(e) || ["", ""])[1].toLowerCase()]) A.isFunction(e) ? this.each(function (t) {
                var n = A(this);
                n.html(e.call(this, t, n.html()))
            }) : this.empty().append(e);
            else {
                e = e.replace(at, "<$1></$2>");
                try {
                    for (var n = 0, r = this.length; n < r; n++) this[n].nodeType === 1 && (A.cleanData(this[n].getElementsByTagName("*")), this[n].innerHTML = e)
                } catch (i) {
                    this.empty().append(e)
                }
            }
            return this
        },
        replaceWith: function (e) {
            return this[0] && this[0].parentNode ? A.isFunction(e) ? this.each(function (t) {
                var n = A(this),
                    r = n.html();
                n.replaceWith(e.call(this, t, r))
            }) : (typeof e != "string" && (e = A(e).detach()), this.each(function () {
                var t = this.nextSibling,
                    n = this.parentNode;
                A(this).remove(), t ? A(t).before(e) : A(n).append(e)
            })) : this.length ? this.pushStack(A(A.isFunction(e) ? e() : e), "replaceWith", e) : this
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, n, r) {
            var i, s, o, u, a = e[0],
                f = [];
            if (!A.support.checkClone && arguments.length === 3 && typeof a == "string" && pt.test(a)) return this.each(function () {
                A(this).domManip(e, n, r, !0)
            });
            if (A.isFunction(a)) return this.each(function (i) {
                var s = A(this);
                e[0] = a.call(this, i, n ? s.html() : t), s.domManip(e, n, r)
            });
            if (this[0]) {
                u = a && a.parentNode, A.support.parentNode && u && u.nodeType === 11 && u.childNodes.length === this.length ? i = {
                    fragment: u
                } : i = A.buildFragment(e, this, f), o = i.fragment, o.childNodes.length === 1 ? s = o = o.firstChild : s = o.firstChild;
                if (s) {
                    n = n && A.nodeName(s, "tr");
                    for (var l = 0, c = this.length, h = c - 1; l < c; l++) r.call(n ? y(this[l], s) : this[l], i.cacheable || c > 1 && l < h ? A.clone(o, !0, !0) : o)
                }
                f.length && A.each(f, d)
            }
            return this
        }
    }), A.buildFragment = function (e, t, n) {
        var r, i, s, o = t && t[0] ? t[0].ownerDocument || t[0] : L;
        return e.length === 1 && typeof e[0] == "string" && e[0].length < 512 && o === L && e[0].charAt(0) === "<" && !ht.test(e[0]) && (A.support.checkClone || !pt.test(e[0])) && (i = !0, s = A.fragments[e[0]], s && s !== 1 && (r = s)), r || (r = o.createDocumentFragment(), A.clean(e, o, r, n)), i && (A.fragments[e[0]] = s ? r : 1), {
            fragment: r,
            cacheable: i
        }
    }, A.fragments = {}, A.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        A.fn[e] = function (n) {
            var r = [],
                i = A(n),
                s = this.length === 1 && this[0].parentNode;
            if (s && s.nodeType === 11 && s.childNodes.length === 1 && i.length === 1) return i[t](this[0]), this;
            for (var o = 0, u = i.length; o < u; o++) {
                var a = (o > 0 ? this.clone(!0) : this).get();
                A(i[o])[t](a), r = r.concat(a)
            }
            return this.pushStack(r, e, i.selector)
        }
    }), A.extend({
        clone: function (e, t, n) {
            var r = e.cloneNode(!0),
                i, s, o;
            if ((!A.support.noCloneEvent || !A.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !A.isXMLDoc(e)) {
                m(e, r), i = v(e), s = v(r);
                for (o = 0; i[o]; ++o) m(i[o], s[o])
            }
            if (t) {
                g(e, r);
                if (n) {
                    i = v(e), s = v(r);
                    for (o = 0; i[o]; ++o) g(i[o], s[o])
                }
            }
            return r
        },
        clean: function (e, t, n, r) {
            t = t || L, typeof t.createElement == "undefined" && (t = t.ownerDocument || t[0] && t[0].ownerDocument || L);
            var i = [];
            for (var s = 0, o;
            (o = e[s]) != null; s++) {
                typeof o == "number" && (o += "");
                if (!o) continue;
                if (typeof o != "string" || ct.test(o)) {
                    if (typeof o == "string") {
                        o = o.replace(at, "<$1></$2>");
                        var u = (ft.exec(o) || ["", ""])[1].toLowerCase(),
                            a = dt[u] || dt._default,
                            f = a[0],
                            l = t.createElement("div");
                        l.innerHTML = a[1] + o + a[2];
                        while (f--) l = l.lastChild;
                        if (!A.support.tbody) {
                            var c = lt.test(o),
                                h = u === "table" && !c ? l.firstChild && l.firstChild.childNodes : a[1] === "<table>" && !c ? l.childNodes : [];
                            for (var p = h.length - 1; p >= 0; --p) A.nodeName(h[p], "tbody") && !h[p].childNodes.length && h[p].parentNode.removeChild(h[p])
                        }!A.support.leadingWhitespace && ut.test(o) && l.insertBefore(t.createTextNode(ut.exec(o)[0]), l.firstChild), o = l.childNodes
                    }
                } else o = t.createTextNode(o);
                o.nodeType ? i.push(o) : i = A.merge(i, o)
            }
            if (n) for (s = 0; i[s]; s++)!r || !A.nodeName(i[s], "script") || i[s].type && i[s].type.toLowerCase() !== "text/javascript" ? (i[s].nodeType === 1 && i.splice.apply(i, [s + 1, 0].concat(A.makeArray(i[s].getElementsByTagName("script")))), n.appendChild(i[s])) : r.push(i[s].parentNode ? i[s].parentNode.removeChild(i[s]) : i[s]);
            return i
        },
        cleanData: function (e) {
            var t, n, r = A.cache,
                i = A.expando,
                s = A.event.special,
                o = A.support.deleteExpando;
            for (var u = 0, a;
            (a = e[u]) != null; u++) {
                if (a.nodeName && A.noData[a.nodeName.toLowerCase()]) continue;
                n = a[A.expando];
                if (n) {
                    t = r[n] && r[n][i];
                    if (t && t.events) {
                        for (var f in t.events) s[f] ? A.event.remove(a, f) : A.removeEvent(a, f, t.handle);
                        t.handle && (t.handle.elem = null)
                    }
                    o ? delete a[A.expando] : a.removeAttribute && a.removeAttribute(A.expando), delete r[n]
                }
            }
        }
    });
    var vt = /alpha\([^)]*\)/i,
        mt = /opacity=([^)]*)/,
        gt = /-([a-z])/ig,
        yt = /([A-Z]|^ms)/g,
        bt = /^-?\d+(?:px)?$/i,
        wt = /^-?\d/,
        Et = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, St = ["Left", "Right"],
        xt = ["Top", "Bottom"],
        Tt, Nt, Ct, kt = function (e, t) {
            return t.toUpperCase()
        };
    A.fn.css = function (e, n) {
        return arguments.length === 2 && n === t ? this : A.access(this, e, n, !0, function (e, n, r) {
            return r !== t ? A.style(e, n, r) : A.css(e, n)
        })
    }, A.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Tt(e, "opacity", "opacity");
                        return n === "" ? "1" : n
                    }
                    return e.style.opacity
                }
            }
        },
        cssNumber: {
            zIndex: !0,
            fontWeight: !0,
            opacity: !0,
            zoom: !0,
            lineHeight: !0
        },
        cssProps: {
            "float": A.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (e, n, r, i) {
            if (e && e.nodeType !== 3 && e.nodeType !== 8 && e.style) {
                var s, o = A.camelCase(n),
                    u = e.style,
                    a = A.cssHooks[o];
                n = A.cssProps[o] || o;
                if (r === t) return a && "get" in a && (s = a.get(e, !1, i)) !== t ? s : u[n];
                if (typeof r == "number" && isNaN(r) || r == null) return;
                typeof r == "number" && !A.cssNumber[o] && (r += "px");
                if (!a || !("set" in a) || (r = a.set(e, r)) !== t) try {
                    u[n] = r
                } catch (f) {}
            }
        },
        css: function (e, n, r) {
            var i, s = A.camelCase(n),
                o = A.cssHooks[s];
            n = A.cssProps[s] || s;
            if (o && "get" in o && (i = o.get(e, !0, r)) !== t) return i;
            if (Tt) return Tt(e, n, s)
        },
        swap: function (e, t, n) {
            var r = {};
            for (var i in t) r[i] = e.style[i], e.style[i] = t[i];
            n.call(e);
            for (i in t) e.style[i] = r[i]
        },
        camelCase: function (e) {
            return e.replace(gt, kt)
        }
    }), A.curCSS = A.css, A.each(["height", "width"], function (e, t) {
        A.cssHooks[t] = {
            get: function (e, n, r) {
                var i;
                if (n) {
                    e.offsetWidth !== 0 ? i = p(e, t, r) : A.swap(e, Et, function () {
                        i = p(e, t, r)
                    });
                    if (i <= 0) {
                        i = Tt(e, t, t), i === "0px" && Ct && (i = Ct(e, t, t));
                        if (i != null) return i === "" || i === "auto" ? "0px" : i
                    }
                    return i < 0 || i == null ? (i = e.style[t], i === "" || i === "auto" ? "0px" : i) : typeof i == "string" ? i : i + "px"
                }
            },
            set: function (e, t) {
                if (!bt.test(t)) return t;
                t = parseFloat(t);
                if (t >= 0) return t + "px"
            }
        }
    }), A.support.opacity || (A.cssHooks.opacity = {
        get: function (e, t) {
            return mt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var n = e.style;
            n.zoom = 1;
            var r = A.isNaN(t) ? "" : "alpha(opacity=" + t * 100 + ")",
                i = n.filter || "";
            n.filter = vt.test(i) ? i.replace(vt, r) : n.filter + " " + r
        }
    }), A(function () {
        A.support.reliableMarginRight || (A.cssHooks.marginRight = {
            get: function (e, t) {
                var n;
                return A.swap(e, {
                    display: "inline-block"
                }, function () {
                    t ? n = Tt(e, "margin-right", "marginRight") : n = e.style.marginRight
                }), n
            }
        })
    }), L.defaultView && L.defaultView.getComputedStyle && (Nt = function (e, n, r) {
        var i, s, o;
        r = r.replace(yt, "-$1").toLowerCase();
        if (!(s = e.ownerDocument.defaultView)) return t;
        if (o = s.getComputedStyle(e, null)) i = o.getPropertyValue(r), i === "" && !A.contains(e.ownerDocument.documentElement, e) && (i = A.style(e, r));
        return i
    }), L.documentElement.currentStyle && (Ct = function (e, t) {
        var n, r = e.currentStyle && e.currentStyle[t],
            i = e.runtimeStyle && e.runtimeStyle[t],
            s = e.style;
        return !bt.test(r) && wt.test(r) && (n = s.left, i && (e.runtimeStyle.left = e.currentStyle.left), s.left = t === "fontSize" ? "1em" : r || 0, r = s.pixelLeft + "px", s.left = n, i && (e.runtimeStyle.left = i)), r === "" ? "auto" : r
    }), Tt = Nt || Ct, A.expr && A.expr.filters && (A.expr.filters.hidden = function (e) {
        var t = e.offsetWidth,
            n = e.offsetHeight;
        return t === 0 && n === 0 || !A.support.reliableHiddenOffsets && (e.style.display || A.css(e, "display")) === "none"
    }, A.expr.filters.visible = function (e) {
        return !A.expr.filters.hidden(e)
    });
    var Lt = /%20/g,
        At = /\[\]$/,
        Ot = /\r?\n/g,
        Mt = /#.*$/,
        _t = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        Dt = /^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Pt = /^(?:about|app|app\-storage|.+\-extension|file|widget):$/,
        Ht = /^(?:GET|HEAD)$/,
        Bt = /^\/\//,
        jt = /\?/,
        Ft = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        It = /^(?:select|textarea)/i,
        qt = /\s+/,
        Rt = /([?&])_=[^&]*/,
        Ut = /(^|\-)([a-z])/g,
        zt = function (e, t, n) {
            return t + n.toUpperCase()
        }, Wt = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        Xt = A.fn.load,
        Vt = {}, $t = {}, Jt, Kt;
    try {
        Jt = L.location.href
    } catch (Qt) {
        Jt = L.createElement("a"), Jt.href = "", Jt = Jt.href
    }
    Kt = Wt.exec(Jt.toLowerCase()) || [], A.fn.extend({
        load: function (e, n, r) {
            if (typeof e != "string" && Xt) return Xt.apply(this, arguments);
            if (!this.length) return this;
            var i = e.indexOf(" ");
            if (i >= 0) {
                var s = e.slice(i, e.length);
                e = e.slice(0, i)
            }
            var o = "GET";
            n && (A.isFunction(n) ? (r = n, n = t) : typeof n == "object" && (n = A.param(n, A.ajaxSettings.traditional), o = "POST"));
            var u = this;
            return A.ajax({
                url: e,
                type: o,
                dataType: "html",
                data: n,
                complete: function (e, t, n) {
                    n = e.responseText, e.isResolved() && (e.done(function (e) {
                        n = e
                    }), u.html(s ? A("<div>").append(n.replace(Ft, "")).find(s) : n)), r && u.each(r, [n, t, e])
                }
            }), this
        },
        serialize: function () {
            return A.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? A.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || It.test(this.nodeName) || Dt.test(this.type))
            }).map(function (e, t) {
                var n = A(this).val();
                return n == null ? null : A.isArray(n) ? A.map(n, function (e, n) {
                    return {
                        name: t.name,
                        value: e.replace(Ot, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Ot, "\r\n")
                }
            }).get()
        }
    }), A.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (e, t) {
        A.fn[t] = function (e) {
            return this.bind(t, e)
        }
    }), A.each(["get", "post"], function (e, n) {
        A[n] = function (e, r, i, s) {
            return A.isFunction(r) && (s = s || i, i = r, r = t), A.ajax({
                type: n,
                url: e,
                data: r,
                success: i,
                dataType: s
            })
        }
    }), A.extend({
        getScript: function (e, n) {
            return A.get(e, t, n, "script")
        },
        getJSON: function (e, t, n) {
            return A.get(e, t, n, "json")
        },
        ajaxSetup: function (e, t) {
            t ? A.extend(!0, e, A.ajaxSettings, t) : (t = e, e = A.extend(!0, A.ajaxSettings, t));
            for (var n in {
                context: 1,
                url: 1
            }) n in t ? e[n] = t[n] : n in A.ajaxSettings && (e[n] = A.ajaxSettings[n]);
            return e
        },
        ajaxSettings: {
            url: Jt,
            isLocal: Pt.test(Kt[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": "*/*"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": A.parseJSON,
                "text xml": A.parseXML
            }
        },
        ajaxPrefilter: h(Vt),
        ajaxTransport: h($t),
        ajax: function (e, n) {
            function r(e, n, r, c) {
                if (w !== 2) {
                    w = 2, y && clearTimeout(y), g = t, v = c || "", x.readyState = e ? 4 : 0;
                    var d, m, b, S = r ? f(i, x, r) : t,
                        T, N;
                    if (e >= 200 && e < 300 || e === 304) {
                        if (i.ifModified) {
                            if (T = x.getResponseHeader("Last-Modified")) A.lastModified[p] = T;
                            if (N = x.getResponseHeader("Etag")) A.etag[p] = N
                        }
                        if (e === 304) n = "notmodified", d = !0;
                        else try {
                            m = a(i, S), n = "success", d = !0
                        } catch (C) {
                            n = "parsererror", b = C
                        }
                    } else {
                        b = n;
                        if (!n || e) n = "error", e < 0 && (e = 0)
                    }
                    x.status = e, x.statusText = n, d ? u.resolveWith(s, [m, n, x]) : u.rejectWith(s, [x, n, b]), x.statusCode(h), h = t, E && o.trigger("ajax" + (d ? "Success" : "Error"), [x, i, d ? m : b]), l.resolveWith(s, [x, n]), E && (o.trigger("ajaxComplete", [x, i]), --A.active || A.event.trigger("ajaxStop"))
                }
            }
            typeof e == "object" && (n = e, e = t), n = n || {};
            var i = A.ajaxSetup({}, n),
                s = i.context || i,
                o = s !== i && (s.nodeType || s instanceof A) ? A(s) : A.event,
                u = A.Deferred(),
                l = A._Deferred(),
                h = i.statusCode || {}, p, d = {}, v, m, g, y, b, w = 0,
                E, S, x = {
                    readyState: 0,
                    setRequestHeader: function (e, t) {
                        return w || (d[e.toLowerCase().replace(Ut, zt)] = t), this
                    },
                    getAllResponseHeaders: function () {
                        return w === 2 ? v : null
                    },
                    getResponseHeader: function (e) {
                        var n;
                        if (w === 2) {
                            if (!m) {
                                m = {};
                                while (n = _t.exec(v)) m[n[1].toLowerCase()] = n[2]
                            }
                            n = m[e.toLowerCase()]
                        }
                        return n === t ? null : n
                    },
                    overrideMimeType: function (e) {
                        return w || (i.mimeType = e), this
                    },
                    abort: function (e) {
                        return e = e || "abort", g && g.abort(e), r(0, e), this
                    }
                };
            u.promise(x), x.success = x.done, x.error = x.fail, x.complete = l.done, x.statusCode = function (e) {
                if (e) {
                    var t;
                    if (w < 2) for (t in e) h[t] = [h[t], e[t]];
                    else t = e[x.status], x.then(t, t)
                }
                return this
            }, i.url = ((e || i.url) + "").replace(Mt, "").replace(Bt, Kt[1] + "//"), i.dataTypes = A.trim(i.dataType || "*").toLowerCase().split(qt), i.crossDomain == null && (b = Wt.exec(i.url.toLowerCase()), i.crossDomain = b && (b[1] != Kt[1] || b[2] != Kt[2] || (b[3] || (b[1] === "http:" ? 80 : 443)) != (Kt[3] || (Kt[1] === "http:" ? 80 : 443)))), i.data && i.processData && typeof i.data != "string" && (i.data = A.param(i.data, i.traditional)), c(Vt, i, n, x);
            if (w === 2) return !1;
            E = i.global, i.type = i.type.toUpperCase(), i.hasContent = !Ht.test(i.type), E && A.active++ === 0 && A.event.trigger("ajaxStart");
            if (!i.hasContent) {
                i.data && (i.url += (jt.test(i.url) ? "&" : "?") + i.data), p = i.url;
                if (i.cache === !1) {
                    var T = A.now(),
                        N = i.url.replace(Rt, "$1_=" + T);
                    i.url = N + (N === i.url ? (jt.test(i.url) ? "&" : "?") + "_=" + T : "")
                }
            }
            if (i.data && i.hasContent && i.contentType !== !1 || n.contentType) d["Content-Type"] = i.contentType;
            i.ifModified && (p = p || i.url, A.lastModified[p] && (d["If-Modified-Since"] = A.lastModified[p]), A.etag[p] && (d["If-None-Match"] = A.etag[p])), d.Accept = i.dataTypes[0] && i.accepts[i.dataTypes[0]] ? i.accepts[i.dataTypes[0]] + (i.dataTypes[0] !== "*" ? ", */*; q=0.01" : "") : i.accepts["*"];
            for (S in i.headers) x.setRequestHeader(S, i.headers[S]);
            if (!i.beforeSend || i.beforeSend.call(s, x, i) !== !1 && w !== 2) {
                for (S in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[S](i[S]);
                g = c($t, i, n, x);
                if (g) {
                    x.readyState = 1, E && o.trigger("ajaxSend", [x, i]), i.async && i.timeout > 0 && (y = setTimeout(function () {
                        x.abort("timeout")
                    }, i.timeout));
                    try {
                        w = 1, g.send(d, r)
                    } catch (C) {
                        status < 2 ? r(-1, C) : A.error(C)
                    }
                } else r(-1, "No Transport");
                return x
            }
            return x.abort(), !1
        },
        param: function (e, n) {
            var r = [],
                i = function (e, t) {
                    t = A.isFunction(t) ? t() : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            n === t && (n = A.ajaxSettings.traditional);
            if (A.isArray(e) || e.jquery && !A.isPlainObject(e)) A.each(e, function () {
                i(this.name, this.value)
            });
            else for (var s in e) l(s, e[s], n, i);
            return r.join("&").replace(Lt, "+")
        }
    }), A.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Gt = A.now(),
        Yt = /(\=)\?(&|$)|\?\?/i;
    A.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            return A.expando + "_" + Gt++
        }
    }), A.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i = typeof t.data == "string";
        if (t.dataTypes[0] === "jsonp" || n.jsonpCallback || n.jsonp != null || t.jsonp !== !1 && (Yt.test(t.url) || i && Yt.test(t.data))) {
            var s, o = t.jsonpCallback = A.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
                u = e[o],
                a = t.url,
                f = t.data,
                l = "$1" + o + "$2",
                c = function () {
                    e[o] = u, s && A.isFunction(u) && e[o](s[0])
                };
            return t.jsonp !== !1 && (a = a.replace(Yt, l), t.url === a && (i && (f = f.replace(Yt, l)), t.data === f && (a += (/\?/.test(a) ? "&" : "?") + t.jsonp + "=" + o))), t.url = a, t.data = f, e[o] = function (e) {
                s = [e]
            }, r.then(c, c), t.converters["script json"] = function () {
                return s || A.error(o + " was not called"), s[0]
            }, t.dataTypes[0] = "json", "script"
        }
    }), A.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function (e) {
                return A.globalEval(e), e
            }
        }
    }), A.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), A.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, r = L.head || L.getElementsByTagName("head")[0] || L.documentElement;
            return {
                send: function (i, s) {
                    n = L.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, i) {
                        if (!n.readyState || /loaded|complete/.test(n.readyState)) n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = t, i || s(200, "success")
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function () {
                    n && n.onload(0, 1)
                }
            }
        }
    });
    var Zt = A.now(),
        en, tn;
    A.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && o() || s()
    } : o, tn = A.ajaxSettings.xhr(), A.support.ajax = !! tn, A.support.cors = tn && "withCredentials" in tn, tn = t, A.support.ajax && A.ajaxTransport(function (e) {
        if (!e.crossDomain || A.support.cors) {
            var n;
            return {
                send: function (r, i) {
                    var s = e.xhr(),
                        o, a;
                    e.username ? s.open(e.type, e.url, e.async, e.username, e.password) : s.open(e.type, e.url, e.async);
                    if (e.xhrFields) for (a in e.xhrFields) s[a] = e.xhrFields[a];
                    e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), !e.crossDomain && !r["X-Requested-With"] && (r["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (a in r) s.setRequestHeader(a, r[a])
                    } catch (f) {}
                    s.send(e.hasContent && e.data || null), n = function (r, u) {
                        var a, f, l, c, h;
                        try {
                            if (n && (u || s.readyState === 4)) {
                                n = t, o && (s.onreadystatechange = A.noop, delete en[o]);
                                if (u) s.readyState !== 4 && s.abort();
                                else {
                                    a = s.status, l = s.getAllResponseHeaders(), c = {}, h = s.responseXML, h && h.documentElement && (c.xml = h), c.text = s.responseText;
                                    try {
                                        f = s.statusText
                                    } catch (p) {
                                        f = ""
                                    }
                                    a || !e.isLocal || e.crossDomain ? a === 1223 && (a = 204) : a = c.text ? 200 : 404
                                }
                            }
                        } catch (d) {
                            u || i(-1, d)
                        }
                        c && i(a, f, c, l)
                    }, e.async && s.readyState !== 4 ? (en || (en = {}, u()), o = Zt++, s.onreadystatechange = en[o] = n) : n()
                },
                abort: function () {
                    n && n(0, 1)
                }
            }
        }
    });
    var nn = {}, rn = /^(?:toggle|show|hide)$/,
        sn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        on, un = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ];
    A.fn.extend({
        show: function (e, t, n) {
            var s, o;
            if (e || e === 0) return this.animate(i("show", 3), e, t, n);
            for (var u = 0, a = this.length; u < a; u++) s = this[u], o = s.style.display, !A._data(s, "olddisplay") && o === "none" && (o = s.style.display = ""), o === "" && A.css(s, "display") === "none" && A._data(s, "olddisplay", r(s.nodeName));
            for (u = 0; u < a; u++) {
                s = this[u], o = s.style.display;
                if (o === "" || o === "none") s.style.display = A._data(s, "olddisplay") || ""
            }
            return this
        },
        hide: function (e, t, n) {
            if (e || e === 0) return this.animate(i("hide", 3), e, t, n);
            for (var r = 0, s = this.length; r < s; r++) {
                var o = A.css(this[r], "display");
                o !== "none" && !A._data(this[r], "olddisplay") && A._data(this[r], "olddisplay", o)
            }
            for (r = 0; r < s; r++) this[r].style.display = "none";
            return this
        },
        _toggle: A.fn.toggle,
        toggle: function (e, t, n) {
            var r = typeof e == "boolean";
            return A.isFunction(e) && A.isFunction(t) ? this._toggle.apply(this, arguments) : e == null || r ? this.each(function () {
                var t = r ? e : A(this).is(":hidden");
                A(this)[t ? "show" : "hide"]()
            }) : this.animate(i("toggle", 3), e, t, n), this
        },
        fadeTo: function (e, t, n, r) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function (e, t, n, i) {
            var s = A.speed(t, n, i);
            return A.isEmptyObject(e) ? this.each(s.complete) : this[s.queue === !1 ? "each" : "queue"](function () {
                var t = A.extend({}, s),
                    n, i = this.nodeType === 1,
                    o = i && A(this).is(":hidden"),
                    u = this;
                for (n in e) {
                    var a = A.camelCase(n);
                    n !== a && (e[a] = e[n], delete e[n], n = a);
                    if (e[n] === "hide" && o || e[n] === "show" && !o) return t.complete.call(this);
                    if (i && (n === "height" || n === "width")) {
                        t.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY];
                        if (A.css(this, "display") === "inline" && A.css(this, "float") === "none") if (A.support.inlineBlockNeedsLayout) {
                            var f = r(this.nodeName);
                            f === "inline" ? this.style.display = "inline-block" : (this.style.display = "inline", this.style.zoom = 1)
                        } else this.style.display = "inline-block"
                    }
                    A.isArray(e[n]) && ((t.specialEasing = t.specialEasing || {})[n] = e[n][1], e[n] = e[n][0])
                }
                return t.overflow != null && (this.style.overflow = "hidden"), t.curAnim = A.extend({}, e), A.each(e, function (n, r) {
                    var i = new A.fx(u, t, n);
                    if (rn.test(r)) i[r === "toggle" ? o ? "show" : "hide" : r](e);
                    else {
                        var s = sn.exec(r),
                            a = i.cur();
                        if (s) {
                            var f = parseFloat(s[2]),
                                l = s[3] || (A.cssNumber[n] ? "" : "px");
                            l !== "px" && (A.style(u, n, (f || 1) + l), a = (f || 1) / i.cur() * a, A.style(u, n, a + l)), s[1] && (f = (s[1] === "-=" ? -1 : 1) * f + a), i.custom(a, f, l)
                        } else i.custom(a, r, "")
                    }
                }), !0
            })
        },
        stop: function (e, t) {
            var n = A.timers;
            return e && this.queue([]), this.each(function () {
                for (var e = n.length - 1; e >= 0; e--) n[e].elem === this && (t && n[e](!0), n.splice(e, 1))
            }), t || this.dequeue(), this
        }
    }), A.each({
        slideDown: i("show", 1),
        slideUp: i("hide", 1),
        slideToggle: i("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, t) {
        A.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), A.extend({
        speed: function (e, t, n) {
            var r = e && typeof e == "object" ? A.extend({}, e) : {
                complete: n || !n && t || A.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !A.isFunction(t) && t
            };
            return r.duration = A.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in A.fx.speeds ? A.fx.speeds[r.duration] : A.fx.speeds._default, r.old = r.complete, r.complete = function () {
                r.queue !== !1 && A(this).dequeue(), A.isFunction(r.old) && r.old.call(this)
            }, r
        },
        easing: {
            linear: function (e, t, n, r) {
                return n + r * e
            },
            swing: function (e, t, n, r) {
                return (-Math.cos(e * Math.PI) / 2 + .5) * r + n
            }
        },
        timers: [],
        fx: function (e, t, n) {
            this.options = t, this.elem = e, this.prop = n, t.orig || (t.orig = {})
        }
    }), A.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem, this.now, this), (A.fx.step[this.prop] || A.fx.step._default)(this)
        },
        cur: function () {
            if (this.elem[this.prop] == null || !! this.elem.style && this.elem.style[this.prop] != null) {
                var e, t = A.css(this.elem, this.prop);
                return isNaN(e = parseFloat(t)) ? !t || t === "auto" ? 0 : t : e
            }
            return this.elem[this.prop]
        },
        custom: function (e, t, n) {
            function r(e) {
                return i.step(e)
            }
            var i = this,
                s = A.fx;
            this.startTime = A.now(), this.start = e, this.end = t, this.unit = n || this.unit || (A.cssNumber[this.prop] ? "" : "px"), this.now = this.start, this.pos = this.state = 0, r.elem = this.elem, r() && A.timers.push(r) && !on && (on = setInterval(s.tick, s.interval))
        },
        show: function () {
            this.options.orig[this.prop] = A.style(this.elem, this.prop), this.options.show = !0, this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), A(this.elem).show()
        },
        hide: function () {
            this.options.orig[this.prop] = A.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        },
        step: function (e) {
            var t = A.now(),
                n = !0;
            if (e || t >= this.options.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), this.options.curAnim[this.prop] = !0;
                for (var r in this.options.curAnim) this.options.curAnim[r] !== !0 && (n = !1);
                if (n) {
                    if (this.options.overflow != null && !A.support.shrinkWrapBlocks) {
                        var i = this.elem,
                            s = this.options;
                        A.each(["", "X", "Y"], function (e, t) {
                            i.style["overflow" + t] = s.overflow[e]
                        })
                    }
                    this.options.hide && A(this.elem).hide();
                    if (this.options.hide || this.options.show) for (var o in this.options.curAnim) A.style(this.elem, o, this.options.orig[o]);
                    this.options.complete.call(this.elem)
                }
                return !1
            }
            var u = t - this.startTime;
            this.state = u / this.options.duration;
            var a = this.options.specialEasing && this.options.specialEasing[this.prop],
                f = this.options.easing || (A.easing.swing ? "swing" : "linear");
            return this.pos = A.easing[a || f](this.state, u, 0, 1, this.options.duration), this.now = this.start + (this.end - this.start) * this.pos, this.update(), !0
        }
    }, A.extend(A.fx, {
        tick: function () {
            var e = A.timers;
            for (var t = 0; t < e.length; t++) e[t]() || e.splice(t--, 1);
            e.length || A.fx.stop()
        },
        interval: 13,
        stop: function () {
            clearInterval(on), on = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function (e) {
                A.style(e.elem, "opacity", e.now)
            },
            _default: function (e) {
                e.elem.style && e.elem.style[e.prop] != null ? e.elem.style[e.prop] = (e.prop === "width" || e.prop === "height" ? Math.max(0, e.now) : e.now) + e.unit : e.elem[e.prop] = e.now
            }
        }
    }), A.expr && A.expr.filters && (A.expr.filters.animated = function (e) {
        return A.grep(A.timers, function (t) {
            return e === t.elem
        }).length
    });
    var an = /^t(?:able|d|h)$/i,
        fn = /^(?:body|html)$/i;
    "getBoundingClientRect" in L.documentElement ? A.fn.offset = function (e) {
        var t = this[0],
            r;
        if (e) return this.each(function (t) {
            A.offset.setOffset(this, e, t)
        });
        if (!t || !t.ownerDocument) return null;
        if (t === t.ownerDocument.body) return A.offset.bodyOffset(t);
        try {
            r = t.getBoundingClientRect()
        } catch (i) {}
        var s = t.ownerDocument,
            o = s.documentElement;
        if (!r || !A.contains(o, t)) return r ? {
            top: r.top,
            left: r.left
        } : {
            top: 0,
            left: 0
        };
        var u = s.body,
            a = n(s),
            f = o.clientTop || u.clientTop || 0,
            l = o.clientLeft || u.clientLeft || 0,
            c = a.pageYOffset || A.support.boxModel && o.scrollTop || u.scrollTop,
            h = a.pageXOffset || A.support.boxModel && o.scrollLeft || u.scrollLeft,
            p = r.top + c - f,
            d = r.left + h - l;
        return {
            top: p,
            left: d
        }
    } : A.fn.offset = function (e) {
        var t = this[0];
        if (e) return this.each(function (t) {
            A.offset.setOffset(this, e, t)
        });
        if (!t || !t.ownerDocument) return null;
        if (t === t.ownerDocument.body) return A.offset.bodyOffset(t);
        A.offset.initialize();
        var n, r = t.offsetParent,
            i = t,
            s = t.ownerDocument,
            o = s.documentElement,
            u = s.body,
            a = s.defaultView,
            f = a ? a.getComputedStyle(t, null) : t.currentStyle,
            l = t.offsetTop,
            c = t.offsetLeft;
        while ((t = t.parentNode) && t !== u && t !== o) {
            if (A.offset.supportsFixedPosition && f.position === "fixed") break;
            n = a ? a.getComputedStyle(t, null) : t.currentStyle, l -= t.scrollTop, c -= t.scrollLeft, t === r && (l += t.offsetTop, c += t.offsetLeft, A.offset.doesNotAddBorder && (!A.offset.doesAddBorderForTableAndCells || !an.test(t.nodeName)) && (l += parseFloat(n.borderTopWidth) || 0, c += parseFloat(n.borderLeftWidth) || 0), i = r, r = t.offsetParent), A.offset.subtractsBorderForOverflowNotVisible && n.overflow !== "visible" && (l += parseFloat(n.borderTopWidth) || 0, c += parseFloat(n.borderLeftWidth) || 0), f = n
        }
        if (f.position === "relative" || f.position === "static") l += u.offsetTop, c += u.offsetLeft;
        return A.offset.supportsFixedPosition && f.position === "fixed" && (l += Math.max(o.scrollTop, u.scrollTop), c += Math.max(o.scrollLeft, u.scrollLeft)), {
            top: l,
            left: c
        }
    }, A.offset = {
        initialize: function () {
            var e = L.body,
                t = L.createElement("div"),
                n, r, i, s, o = parseFloat(A.css(e, "marginTop")) || 0,
                u = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            A.extend(t.style, {
                position: "absolute",
                top: 0,
                left: 0,
                margin: 0,
                border: 0,
                width: "1px",
                height: "1px",
                visibility: "hidden"
            }), t.innerHTML = u, e.insertBefore(t, e.firstChild), n = t.firstChild, r = n.firstChild, s = n.nextSibling.firstChild.firstChild, this.doesNotAddBorder = r.offsetTop !== 5, this.doesAddBorderForTableAndCells = s.offsetTop === 5, r.style.position = "fixed", r.style.top = "20px", this.supportsFixedPosition = r.offsetTop === 20 || r.offsetTop === 15, r.style.position = r.style.top = "", n.style.overflow = "hidden", n.style.position = "relative", this.subtractsBorderForOverflowNotVisible = r.offsetTop === -5, this.doesNotIncludeMarginInBodyOffset = e.offsetTop !== o, e.removeChild(t), A.offset.initialize = A.noop
        },
        bodyOffset: function (e) {
            var t = e.offsetTop,
                n = e.offsetLeft;
            return A.offset.initialize(), A.offset.doesNotIncludeMarginInBodyOffset && (t += parseFloat(A.css(e, "marginTop")) || 0, n += parseFloat(A.css(e, "marginLeft")) || 0), {
                top: t,
                left: n
            }
        },
        setOffset: function (e, t, n) {
            var r = A.css(e, "position");
            r === "static" && (e.style.position = "relative");
            var i = A(e),
                s = i.offset(),
                o = A.css(e, "top"),
                u = A.css(e, "left"),
                a = (r === "absolute" || r === "fixed") && A.inArray("auto", [o, u]) > -1,
                f = {}, l = {}, c, h;
            a && (l = i.position()), c = a ? l.top : parseInt(o, 10) || 0, h = a ? l.left : parseInt(u, 10) || 0, A.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + c), t.left != null && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f)
        }
    }, A.fn.extend({
        position: function () {
            if (!this[0]) return null;
            var e = this[0],
                t = this.offsetParent(),
                n = this.offset(),
                r = fn.test(t[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : t.offset();
            return n.top -= parseFloat(A.css(e, "marginTop")) || 0, n.left -= parseFloat(A.css(e, "marginLeft")) || 0, r.top += parseFloat(A.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(A.css(t[0], "borderLeftWidth")) || 0, {
                top: n.top - r.top,
                left: n.left - r.left
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent || L.body;
                while (e && !fn.test(e.nodeName) && A.css(e, "position") === "static") e = e.offsetParent;
                return e
            })
        }
    }), A.each(["Left", "Top"], function (e, r) {
        var i = "scroll" + r;
        A.fn[i] = function (r) {
            var s = this[0],
                o;
            return s ? r !== t ? this.each(function () {
                o = n(this), o ? o.scrollTo(e ? A(o).scrollLeft() : r, e ? r : A(o).scrollTop()) : this[i] = r
            }) : (o = n(s), o ? "pageXOffset" in o ? o[e ? "pageYOffset" : "pageXOffset"] : A.support.boxModel && o.document.documentElement[i] || o.document.body[i] : s[i]) : null
        }
    }), A.each(["Height", "Width"], function (e, n) {
        var r = n.toLowerCase();
        A.fn["inner" + n] = function () {
            return this[0] ? parseFloat(A.css(this[0], r, "padding")) : null
        }, A.fn["outer" + n] = function (e) {
            return this[0] ? parseFloat(A.css(this[0], r, e ? "margin" : "border")) : null
        }, A.fn[r] = function (e) {
            var i = this[0];
            if (!i) return e == null ? null : this;
            if (A.isFunction(e)) return this.each(function (t) {
                var n = A(this);
                n[r](e.call(this, t, n[r]()))
            });
            if (A.isWindow(i)) {
                var s = i.document.documentElement["client" + n];
                return i.document.compatMode === "CSS1Compat" && s || i.document.body["client" + n] || s
            }
            if (i.nodeType === 9) return Math.max(i.documentElement["client" + n], i.body["scroll" + n], i.documentElement["scroll" + n], i.body["offset" + n], i.documentElement["offset" + n]);
            if (e === t) {
                var o = A.css(i, r),
                    u = parseFloat(o);
                return A.isNaN(u) ? o : u
            }
            return this.css(r, typeof e == "string" ? e : e + "px")
        }
    }), e.jQuery = e.$ = A
})(window), window.Gotag = $.noConflict(!0), Gotag(function () {
    (function (e) {
        function n(t) {
            return e.grep(e(t).attr("class").split(/\s+/), function (e, t) {
                return e.match(/^gotag-event-(\d+)$/)
            })[0]
        }
        var t = e('[class*="gotag-event-"]'),
            r = navigator.userAgent.indexOf("MSIE 6") >= 0 ? !0 : !1;
        if (r) {
            t.each(function (t) {
                var r, i;
                i = n(this);
                if (i && (r = i.match(/^gotag-event-(\d+)$/))) {
                    var s = r[1];
                    e(this).click(function () {
                        return window.location = "https://gotag.in/events/" + s, !1
                    })
                }
            });
            return
        }
        e("head").append(e('<link charset="utf-8" type="text/css" rel="stylesheet" href="http://developers.gotag.in/gotag.js/buttons.css" />'));
        var i = e('    <div id="gotag" class="gotag-lightbox" style="display: none;">      <div class="gotag-wrapper">        <div class="gotag-container">          <div class="gotag-header">            <a class="gotag-close" href="#"></a>            <span id="gotag-title">Register for Event</span> <em>powered by <a href="https://gotag.in?ref=embed" target="_blank">Gotag</a></em>          </div>          <div class="gotag-body">          </div>        </div>      </div>    </div>  ');
        e("#gotag").length ? i = e("#gotag") : i.appendTo("body");
        var s = "Register for Event";
        Gotag.load_tickets = function (t, n) {
            var r = "gotag-iframe-" + n;
            if (e("iframe[name=" + r + "]").length > 0) return;
            var o = "https://gotag.in/events/" + n + "/embed?return_url=" + window.location.toString(),
                u = e('<iframe name="' + r + '" frameborder="0" hspace="0" scrolling="auto" style="display: none;" width="760" height="490" src="' + o + '"></iframe>').appendTo("div.gotag-body");
            e(t).click(function () {
                var t, n;
                return (t = e(this).attr("title")) ? n = "Register for " + (t.length > 30 ? t.substring(0, 25) + "&#8230;" : t) : n = s, e("#gotag-title")[0].innerHTML = n, e("iframe[name^=gotag-iframe-]").css("display", "none"), e(u).css("display", "block"), e(i).css("display", "block"), !1
            }), e(".gotag-close").click(function () {
                return e(i).css("display", "none"), e("#gotag-title")[0].innerHTML = s, e(u).css("display", "none"), e("iframe[name=" + r + "]")[0].src = o, !1
            })
        }, t.each(function (e) {
            var t, r;
            r = n(this);
            if (r && (t = r.match(/^gotag-event-(\d+)$/))) {
                var i = t[1];
                Gotag.load_tickets("." + r, i)
            }
        });
        if (document.location.hash && document.location.hash.toString().length > 1) {
            var o = document.location.hash.substring(1).split(";", 2),
                u = "gotag-iframe-" + o[0],
                a = e("iframe[name=" + u + "]")[0];
            a.src = "https://gotag.in/events/" + o[0] + "/purchases/" + o[1] + "/iframe?return_url=" + window.location.toString(), e(a).css("display", "block"), e(i).css("display", "block")
        }
    })(Gotag)
});