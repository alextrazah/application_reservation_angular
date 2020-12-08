! function (a, b) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
		if (!a.document) throw new Error("jQuery requires a window with a document");
		return b(a)
	} : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
	function c(a) {
		var b = "length" in a && a.length,
			c = _.type(a);
		return "function" === c || _.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
	}

	function d(a, b, c) {
		if (_.isFunction(b)) return _.grep(a, function (a, d) {
			return !!b.call(a, d, a) !== c
		});
		if (b.nodeType) return _.grep(a, function (a) {
			return a === b !== c
		});
		if ("string" == typeof b) {
			if (ha.test(b)) return _.filter(b, a, c);
			b = _.filter(b, a)
		}
		return _.grep(a, function (a) {
			return U.call(b, a) >= 0 !== c
		})
	}

	function e(a, b) {
		for (;
			(a = a[b]) && 1 !== a.nodeType;);
		return a
	}

	function f(a) {
		var b = oa[a] = {};
		return _.each(a.match(na) || [], function (a, c) {
			b[c] = !0
		}), b
	}

	function g() {
		Z.removeEventListener("DOMContentLoaded", g, !1), a.removeEventListener("load", g, !1), _.ready()
	}

	function h() {
		Object.defineProperty(this.cache = {}, 0, {
			get: function () {
				return {}
			}
		}), this.expando = _.expando + h.uid++
	}

	function i(a, b, c) {
		var d;
		if (void 0 === c && 1 === a.nodeType)
			if (d = "data-" + b.replace(ua, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
				try {
					c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : ta.test(c) ? _.parseJSON(c) : c
				} catch (e) {}
				sa.set(a, b, c)
			} else c = void 0;
		return c
	}

	function j() {
		return !0
	}

	function k() {
		return !1
	}

	function l() {
		try {
			return Z.activeElement
		} catch (a) {}
	}

	function m(a, b) {
		return _.nodeName(a, "table") && _.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
	}

	function n(a) {
		return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
	}

	function o(a) {
		var b = Ka.exec(a.type);
		return b ? a.type = b[1] : a.removeAttribute("type"), a
	}

	function p(a, b) {
		for (var c = 0, d = a.length; d > c; c++) ra.set(a[c], "globalEval", !b || ra.get(b[c], "globalEval"))
	}

	function q(a, b) {
		var c, d, e, f, g, h, i, j;
		if (1 === b.nodeType) {
			if (ra.hasData(a) && (f = ra.access(a), g = ra.set(b, f), j = f.events)) {
				delete g.handle, g.events = {};
				for (e in j)
					for (c = 0, d = j[e].length; d > c; c++) _.event.add(b, e, j[e][c])
			}
			sa.hasData(a) && (h = sa.access(a), i = _.extend({}, h), sa.set(b, i))
		}
	}

	function r(a, b) {
		var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
		return void 0 === b || b && _.nodeName(a, b) ? _.merge([a], c) : c
	}

	function s(a, b) {
		var c = b.nodeName.toLowerCase();
		"input" === c && ya.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
	}

	function t(b, c) {
		var d, e = _(c.createElement(b)).appendTo(c.body),
			f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : _.css(e[0], "display");
		return e.detach(), f
	}

	function u(a) {
		var b = Z,
			c = Oa[a];
		return c || (c = t(a, b), "none" !== c && c || (Na = (Na || _("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Na[0].contentDocument, b.write(), b.close(), c = t(a, b), Na.detach()), Oa[a] = c), c
	}

	function v(a, b, c) {
		var d, e, f, g, h = a.style;
		return c = c || Ra(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)), Qa.test(g) && Pa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
	}

	function w(a, b) {
		return {
			get: function () {
				return a() ? void delete this.get : (this.get = b).apply(this, arguments)
			}
		}
	}

	function x(a, b) {
		if (b in a) return b;
		for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xa.length; e--;)
			if (b = Xa[e] + c, b in a) return b;
		return d
	}

	function y(a, b, c) {
		var d = Ta.exec(b);
		return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
	}

	function z(a, b, c, d, e) {
		for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += _.css(a, c + wa[f], !0, e)), d ? ("content" === c && (g -= _.css(a, "padding" + wa[f], !0, e)), "margin" !== c && (g -= _.css(a, "border" + wa[f] + "Width", !0, e))) : (g += _.css(a, "padding" + wa[f], !0, e), "padding" !== c && (g += _.css(a, "border" + wa[f] + "Width", !0, e)));
		return g
	}

	function A(a, b, c) {
		var d = !0,
			e = "width" === b ? a.offsetWidth : a.offsetHeight,
			f = Ra(a),
			g = "border-box" === _.css(a, "boxSizing", !1, f);
		if (0 >= e || null == e) {
			if (e = v(a, b, f), (0 > e || null == e) && (e = a.style[b]), Qa.test(e)) return e;
			d = g && (Y.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
		}
		return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px"
	}

	function B(a, b) {
		for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = ra.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && xa(d) && (f[g] = ra.access(d, "olddisplay", u(d.nodeName)))) : (e = xa(d), "none" === c && e || ra.set(d, "olddisplay", e ? c : _.css(d, "display"))));
		for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
		return a
	}

	function C(a, b, c, d, e) {
		return new C.prototype.init(a, b, c, d, e)
	}

	function D() {
		return setTimeout(function () {
			Ya = void 0
		}), Ya = _.now()
	}

	function E(a, b) {
		var c, d = 0,
			e = {
				height: a
			};
		for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = wa[d], e["margin" + c] = e["padding" + c] = a;
		return b && (e.opacity = e.width = a), e
	}

	function F(a, b, c) {
		for (var d, e = (cb[b] || []).concat(cb["*"]), f = 0, g = e.length; g > f; f++)
			if (d = e[f].call(c, b, a)) return d
	}

	function G(a, b, c) {
		var d, e, f, g, h, i, j, k, l = this,
			m = {},
			n = a.style,
			o = a.nodeType && xa(a),
			p = ra.get(a, "fxshow");
		c.queue || (h = _._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
			h.unqueued || i()
		}), h.unqueued++, l.always(function () {
			l.always(function () {
				h.unqueued--, _.queue(a, "fx").length || h.empty.fire()
			})
		})), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = _.css(a, "display"), k = "none" === j ? ra.get(a, "olddisplay") || u(a.nodeName) : j, "inline" === k && "none" === _.css(a, "float") && (n.display = "inline-block")), c.overflow && (n.overflow = "hidden", l.always(function () {
			n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
		}));
		for (d in b)
			if (e = b[d], $a.exec(e)) {
				if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
					if ("show" !== e || !p || void 0 === p[d]) continue;
					o = !0
				}
				m[d] = p && p[d] || _.style(a, d)
			} else j = void 0;
		if (_.isEmptyObject(m)) "inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j);
		else {
			p ? "hidden" in p && (o = p.hidden) : p = ra.access(a, "fxshow", {}), f && (p.hidden = !o), o ? _(a).show() : l.done(function () {
				_(a).hide()
			}), l.done(function () {
				var b;
				ra.remove(a, "fxshow");
				for (b in m) _.style(a, b, m[b])
			});
			for (d in m) g = F(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
		}
	}

	function H(a, b) {
		var c, d, e, f, g;
		for (c in a)
			if (d = _.camelCase(c), e = b[d], f = a[c], _.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = _.cssHooks[d], g && "expand" in g) {
				f = g.expand(f), delete a[d];
				for (c in f) c in a || (a[c] = f[c], b[c] = e)
			} else b[d] = e
	}

	function I(a, b, c) {
		var d, e, f = 0,
			g = bb.length,
			h = _.Deferred().always(function () {
				delete i.elem
			}),
			i = function () {
				if (e) return !1;
				for (var b = Ya || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
				return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
			},
			j = h.promise({
				elem: a,
				props: _.extend({}, b),
				opts: _.extend(!0, {
					specialEasing: {}
				}, c),
				originalProperties: b,
				originalOptions: c,
				startTime: Ya || D(),
				duration: c.duration,
				tweens: [],
				createTween: function (b, c) {
					var d = _.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
					return j.tweens.push(d), d
				},
				stop: function (b) {
					var c = 0,
						d = b ? j.tweens.length : 0;
					if (e) return this;
					for (e = !0; d > c; c++) j.tweens[c].run(1);
					return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
				}
			}),
			k = j.props;
		for (H(k, j.opts.specialEasing); g > f; f++)
			if (d = bb[f].call(j, a, k, j.opts)) return d;
		return _.map(k, F, j), _.isFunction(j.opts.start) && j.opts.start.call(a, j), _.fx.timer(_.extend(i, {
			elem: a,
			anim: j,
			queue: j.opts.queue
		})), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
	}

	function J(a) {
		return function (b, c) {
			"string" != typeof b && (c = b, b = "*");
			var d, e = 0,
				f = b.toLowerCase().match(na) || [];
			if (_.isFunction(c))
				for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
		}
	}

	function K(a, b, c, d) {
		function e(h) {
			var i;
			return f[h] = !0, _.each(a[h] || [], function (a, h) {
				var j = h(b, c, d);
				return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
			}), i
		}
		var f = {},
			g = a === tb;
		return e(b.dataTypes[0]) || !f["*"] && e("*")
	}

	function L(a, b) {
		var c, d, e = _.ajaxSettings.flatOptions || {};
		for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
		return d && _.extend(!0, a, d), a
	}

	function M(a, b, c) {
		for (var d, e, f, g, h = a.contents, i = a.dataTypes;
			"*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
		if (d)
			for (e in h)
				if (h[e] && h[e].test(d)) {
					i.unshift(e);
					break
				}
		if (i[0] in c) f = i[0];
		else {
			for (e in c) {
				if (!i[0] || a.converters[e + " " + i[0]]) {
					f = e;
					break
				}
				g || (g = e)
			}
			f = f || g
		}
		return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
	}

	function N(a, b, c, d) {
		var e, f, g, h, i, j = {},
			k = a.dataTypes.slice();
		if (k[1])
			for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
		for (f = k.shift(); f;)
			if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
				if ("*" === f) f = i;
				else if ("*" !== i && i !== f) {
			if (g = j[i + " " + f] || j["* " + f], !g)
				for (e in j)
					if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
						g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
						break
					}
			if (g !== !0)
				if (g && a["throws"]) b = g(b);
				else try {
					b = g(b)
				} catch (l) {
					return {
						state: "parsererror",
						error: g ? l : "No conversion from " + i + " to " + f
					}
				}
		}
		return {
			state: "success",
			data: b
		}
	}

	function O(a, b, c, d) {
		var e;
		if (_.isArray(b)) _.each(b, function (b, e) {
			c || yb.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
		});
		else if (c || "object" !== _.type(b)) d(a, b);
		else
			for (e in b) O(a + "[" + e + "]", b[e], c, d)
	}

	function P(a) {
		return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
	}
	var Q = [],
		R = Q.slice,
		S = Q.concat,
		T = Q.push,
		U = Q.indexOf,
		V = {},
		W = V.toString,
		X = V.hasOwnProperty,
		Y = {},
		Z = a.document,
		$ = "2.1.4",
		_ = function (a, b) {
			return new _.fn.init(a, b)
		},
		aa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		ba = /^-ms-/,
		ca = /-([\da-z])/gi,
		da = function (a, b) {
			return b.toUpperCase()
		};
	_.fn = _.prototype = {
		jquery: $,
		constructor: _,
		selector: "",
		length: 0,
		toArray: function () {
			return R.call(this)
		},
		get: function (a) {
			return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this)
		},
		pushStack: function (a) {
			var b = _.merge(this.constructor(), a);
			return b.prevObject = this, b.context = this.context, b
		},
		each: function (a, b) {
			return _.each(this, a, b)
		},
		map: function (a) {
			return this.pushStack(_.map(this, function (b, c) {
				return a.call(b, c, b)
			}))
		},
		slice: function () {
			return this.pushStack(R.apply(this, arguments))
		},
		first: function () {
			return this.eq(0)
		},
		last: function () {
			return this.eq(-1)
		},
		eq: function (a) {
			var b = this.length,
				c = +a + (0 > a ? b : 0);
			return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
		},
		end: function () {
			return this.prevObject || this.constructor(null)
		},
		push: T,
		sort: Q.sort,
		splice: Q.splice
	}, _.extend = _.fn.extend = function () {
		var a, b, c, d, e, f, g = arguments[0] || {},
			h = 1,
			i = arguments.length,
			j = !1;
		for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || _.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
			if (null != (a = arguments[h]))
				for (b in a) c = g[b], d = a[b], g !== d && (j && d && (_.isPlainObject(d) || (e = _.isArray(d))) ? (e ? (e = !1, f = c && _.isArray(c) ? c : []) : f = c && _.isPlainObject(c) ? c : {}, g[b] = _.extend(j, f, d)) : void 0 !== d && (g[b] = d));
		return g
	}, _.extend({
		expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function (a) {
			throw new Error(a)
		},
		noop: function () {},
		isFunction: function (a) {
			return "function" === _.type(a)
		},
		isArray: Array.isArray,
		isWindow: function (a) {
			return null != a && a === a.window
		},
		isNumeric: function (a) {
			return !_.isArray(a) && a - parseFloat(a) + 1 >= 0
		},
		isPlainObject: function (a) {
			return "object" !== _.type(a) || a.nodeType || _.isWindow(a) ? !1 : a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
		},
		isEmptyObject: function (a) {
			var b;
			for (b in a) return !1;
			return !0
		},
		type: function (a) {
			return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a
		},
		globalEval: function (a) {
			var b, c = eval;
			a = _.trim(a), a && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"), b.text = a, Z.head.appendChild(b).parentNode.removeChild(b)) : c(a))
		},
		camelCase: function (a) {
			return a.replace(ba, "ms-").replace(ca, da)
		},
		nodeName: function (a, b) {
			return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
		},
		each: function (a, b, d) {
			var e, f = 0,
				g = a.length,
				h = c(a);
			if (d) {
				if (h)
					for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
				else
					for (f in a)
						if (e = b.apply(a[f], d), e === !1) break
			} else if (h)
				for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
			else
				for (f in a)
					if (e = b.call(a[f], f, a[f]), e === !1) break;
			return a
		},
		trim: function (a) {
			return null == a ? "" : (a + "").replace(aa, "")
		},
		makeArray: function (a, b) {
			var d = b || [];
			return null != a && (c(Object(a)) ? _.merge(d, "string" == typeof a ? [a] : a) : T.call(d, a)), d
		},
		inArray: function (a, b, c) {
			return null == b ? -1 : U.call(b, a, c)
		},
		merge: function (a, b) {
			for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
			return a.length = e, a
		},
		grep: function (a, b, c) {
			for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
			return e
		},
		map: function (a, b, d) {
			var e, f = 0,
				g = a.length,
				h = c(a),
				i = [];
			if (h)
				for (; g > f; f++) e = b(a[f], f, d), null != e && i.push(e);
			else
				for (f in a) e = b(a[f], f, d), null != e && i.push(e);
			return S.apply([], i)
		},
		guid: 1,
		proxy: function (a, b) {
			var c, d, e;
			return "string" == typeof b && (c = a[b], b = a, a = c), _.isFunction(a) ? (d = R.call(arguments, 2), e = function () {
				return a.apply(b || this, d.concat(R.call(arguments)))
			}, e.guid = a.guid = a.guid || _.guid++, e) : void 0
		},
		now: Date.now,
		support: Y
	}), _.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
		V["[object " + b + "]"] = b.toLowerCase()
	});
	var ea = function (a) {
		function b(a, b, c, d) {
			var e, f, g, h, i, j, l, n, o, p;
			if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h) return c;
			if (!d && I) {
				if (11 !== h && (e = sa.exec(a)))
					if (g = e[1]) {
						if (9 === h) {
							if (f = b.getElementById(g), !f || !f.parentNode) return c;
							if (f.id === g) return c.push(f), c
						} else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c
					} else {
						if (e[2]) return $.apply(c, b.getElementsByTagName(a)), c;
						if ((g = e[3]) && v.getElementsByClassName) return $.apply(c, b.getElementsByClassName(g)), c
					}
				if (v.qsa && (!J || !J.test(a))) {
					if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
						for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ua, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;) j[i] = n + m(j[i]);
						o = ta.test(a) && k(b.parentNode) || b, p = j.join(",")
					}
					if (p) try {
						return $.apply(c, o.querySelectorAll(p)), c
					} catch (q) {} finally {
						l || b.removeAttribute("id")
					}
				}
			}
			return B(a.replace(ia, "$1"), b, c, d)
		}

		function c() {
			function a(c, d) {
				return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
			}
			var b = [];
			return a
		}

		function d(a) {
			return a[N] = !0, a
		}

		function e(a) {
			var b = G.createElement("div");
			try {
				return !!a(b)
			} catch (c) {
				return !1
			} finally {
				b.parentNode && b.parentNode.removeChild(b), b = null
			}
		}

		function f(a, b) {
			for (var c = a.split("|"), d = a.length; d--;) w.attrHandle[c[d]] = b
		}

		function g(a, b) {
			var c = b && a,
				d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
			if (d) return d;
			if (c)
				for (; c = c.nextSibling;)
					if (c === b) return -1;
			return a ? 1 : -1
		}

		function h(a) {
			return function (b) {
				var c = b.nodeName.toLowerCase();
				return "input" === c && b.type === a
			}
		}

		function i(a) {
			return function (b) {
				var c = b.nodeName.toLowerCase();
				return ("input" === c || "button" === c) && b.type === a
			}
		}

		function j(a) {
			return d(function (b) {
				return b = +b, d(function (c, d) {
					for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
				})
			})
		}

		function k(a) {
			return a && "undefined" != typeof a.getElementsByTagName && a
		}

		function l() {}

		function m(a) {
			for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
			return d
		}

		function n(a, b, c) {
			var d = b.dir,
				e = c && "parentNode" === d,
				f = Q++;
			return b.first ? function (b, c, f) {
				for (; b = b[d];)
					if (1 === b.nodeType || e) return a(b, c, f)
			} : function (b, c, g) {
				var h, i, j = [P, f];
				if (g) {
					for (; b = b[d];)
						if ((1 === b.nodeType || e) && a(b, c, g)) return !0
				} else
					for (; b = b[d];)
						if (1 === b.nodeType || e) {
							if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
							if (i[d] = j, j[2] = a(b, c, g)) return !0
						}
			}
		}

		function o(a) {
			return a.length > 1 ? function (b, c, d) {
				for (var e = a.length; e--;)
					if (!a[e](b, c, d)) return !1;
				return !0
			} : a[0]
		}

		function p(a, c, d) {
			for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
			return d
		}

		function q(a, b, c, d, e) {
			for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
			return g
		}

		function r(a, b, c, e, f, g) {
			return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function (d, g, h, i) {
				var j, k, l, m = [],
					n = [],
					o = g.length,
					r = d || p(b || "*", h.nodeType ? [h] : h, []),
					s = !a || !d && b ? r : q(r, m, a, h, i),
					t = c ? f || (d ? a : o || e) ? [] : g : s;
				if (c && c(s, t, h, i), e)
					for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
				if (d) {
					if (f || a) {
						if (f) {
							for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
							f(null, t = [], j, i)
						}
						for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
					}
				} else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
			})
		}

		function s(a) {
			for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function (a) {
					return a === b
				}, g, !0), j = n(function (a) {
					return aa(b, a) > -1
				}, g, !0), k = [function (a, c, d) {
					var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
					return b = null, e
				}]; e > h; h++)
				if (c = w.relative[a[h].type]) k = [n(o(k), c)];
				else {
					if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
						for (d = ++h; e > d && !w.relative[a[d].type]; d++);
						return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
							value: " " === a[h - 2].type ? "*" : ""
						})).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
					}
					k.push(c)
				}
			return o(k)
		}

		function t(a, c) {
			var e = c.length > 0,
				f = a.length > 0,
				g = function (d, g, h, i, j) {
					var k, l, m, n = 0,
						o = "0",
						p = d && [],
						r = [],
						s = C,
						t = d || f && w.find.TAG("*", j),
						u = P += null == s ? 1 : Math.random() || .1,
						v = t.length;
					for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
						if (f && k) {
							for (l = 0; m = a[l++];)
								if (m(k, g, h)) {
									i.push(k);
									break
								}
							j && (P = u)
						}
						e && ((k = !m && k) && n--, d && p.push(k))
					}
					if (n += o, e && o !== n) {
						for (l = 0; m = c[l++];) m(p, r, g, h);
						if (d) {
							if (n > 0)
								for (; o--;) p[o] || r[o] || (r[o] = Y.call(i));
							r = q(r)
						}
						$.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
					}
					return j && (P = u, C = s), p
				};
			return e ? d(g) : g
		}
		var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date,
			O = a.document,
			P = 0,
			Q = 0,
			R = c(),
			S = c(),
			T = c(),
			U = function (a, b) {
				return a === b && (E = !0), 0
			},
			V = 1 << 31,
			W = {}.hasOwnProperty,
			X = [],
			Y = X.pop,
			Z = X.push,
			$ = X.push,
			_ = X.slice,
			aa = function (a, b) {
				for (var c = 0, d = a.length; d > c; c++)
					if (a[c] === b) return c;
				return -1
			},
			ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			ca = "[\\x20\\t\\r\\n\\f]",
			da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			ea = da.replace("w", "w#"),
			fa = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ea + "))|)" + ca + "*\\]",
			ga = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fa + ")*)|.*)\\)|)",
			ha = new RegExp(ca + "+", "g"),
			ia = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
			ja = new RegExp("^" + ca + "*," + ca + "*"),
			ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
			la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
			ma = new RegExp(ga),
			na = new RegExp("^" + ea + "$"),
			oa = {
				ID: new RegExp("^#(" + da + ")"),
				CLASS: new RegExp("^\\.(" + da + ")"),
				TAG: new RegExp("^(" + da.replace("w", "w*") + ")"),
				ATTR: new RegExp("^" + fa),
				PSEUDO: new RegExp("^" + ga),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + ba + ")$", "i"),
				needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
			},
			pa = /^(?:input|select|textarea|button)$/i,
			qa = /^h\d$/i,
			ra = /^[^{]+\{\s*\[native \w/,
			sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			ta = /[+~]/,
			ua = /'|\\/g,
			va = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
			wa = function (a, b, c) {
				var d = "0x" + b - 65536;
				return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
			},
			xa = function () {
				F()
			};
		try {
			$.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
		} catch (ya) {
			$ = {
				apply: X.length ? function (a, b) {
					Z.apply(a, _.call(b))
				} : function (a, b) {
					for (var c = a.length, d = 0; a[c++] = b[d++];);
					a.length = c - 1
				}
			}
		}
		v = b.support = {}, y = b.isXML = function (a) {
			var b = a && (a.ownerDocument || a).documentElement;
			return b ? "HTML" !== b.nodeName : !1
		}, F = b.setDocument = function (a) {
			var b, c, d = a ? a.ownerDocument || a : O;
			return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), I = !y(d), v.attributes = e(function (a) {
				return a.className = "i", !a.getAttribute("className")
			}), v.getElementsByTagName = e(function (a) {
				return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length
			}), v.getElementsByClassName = ra.test(d.getElementsByClassName), v.getById = e(function (a) {
				return H.appendChild(a).id = N, !d.getElementsByName || !d.getElementsByName(N).length
			}), v.getById ? (w.find.ID = function (a, b) {
				if ("undefined" != typeof b.getElementById && I) {
					var c = b.getElementById(a);
					return c && c.parentNode ? [c] : []
				}
			}, w.filter.ID = function (a) {
				var b = a.replace(va, wa);
				return function (a) {
					return a.getAttribute("id") === b
				}
			}) : (delete w.find.ID, w.filter.ID = function (a) {
				var b = a.replace(va, wa);
				return function (a) {
					var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
					return c && c.value === b
				}
			}), w.find.TAG = v.getElementsByTagName ? function (a, b) {
				return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
			} : function (a, b) {
				var c, d = [],
					e = 0,
					f = b.getElementsByTagName(a);
				if ("*" === a) {
					for (; c = f[e++];) 1 === c.nodeType && d.push(c);
					return d
				}
				return f
			}, w.find.CLASS = v.getElementsByClassName && function (a, b) {
				return I ? b.getElementsByClassName(a) : void 0
			}, K = [], J = [], (v.qsa = ra.test(d.querySelectorAll)) && (e(function (a) {
				H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
			}), e(function (a) {
				var b = d.createElement("input");
				b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
			})), (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function (a) {
				v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ga)
			}), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ? function (a, b) {
				var c = 9 === a.nodeType ? a.documentElement : a,
					d = b && b.parentNode;
				return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
			} : function (a, b) {
				if (b)
					for (; b = b.parentNode;)
						if (b === a) return !0;
				return !1
			}, U = b ? function (a, b) {
				if (a === b) return E = !0, 0;
				var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
				return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1)
			} : function (a, b) {
				if (a === b) return E = !0, 0;
				var c, e = 0,
					f = a.parentNode,
					h = b.parentNode,
					i = [a],
					j = [b];
				if (!f || !h) return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? aa(D, a) - aa(D, b) : 0;
				if (f === h) return g(a, b);
				for (c = a; c = c.parentNode;) i.unshift(c);
				for (c = b; c = c.parentNode;) j.unshift(c);
				for (; i[e] === j[e];) e++;
				return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
			}, d) : G
		}, b.matches = function (a, c) {
			return b(a, null, null, c)
		}, b.matchesSelector = function (a, c) {
			if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, "='$1']"), !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c))) try {
				var d = L.call(a, c);
				if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
			} catch (e) {}
			return b(c, G, null, [a]).length > 0
		}, b.contains = function (a, b) {
			return (a.ownerDocument || a) !== G && F(a), M(a, b)
		}, b.attr = function (a, b) {
			(a.ownerDocument || a) !== G && F(a);
			var c = w.attrHandle[b.toLowerCase()],
				d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
			return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
		}, b.error = function (a) {
			throw new Error("Syntax error, unrecognized expression: " + a)
		}, b.uniqueSort = function (a) {
			var b, c = [],
				d = 0,
				e = 0;
			if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
				for (; b = a[e++];) b === a[e] && (d = c.push(e));
				for (; d--;) a.splice(c[d], 1)
			}
			return D = null, a
		}, x = b.getText = function (a) {
			var b, c = "",
				d = 0,
				e = a.nodeType;
			if (e) {
				if (1 === e || 9 === e || 11 === e) {
					if ("string" == typeof a.textContent) return a.textContent;
					for (a = a.firstChild; a; a = a.nextSibling) c += x(a)
				} else if (3 === e || 4 === e) return a.nodeValue
			} else
				for (; b = a[d++];) c += x(b);
			return c
		}, w = b.selectors = {
			cacheLength: 50,
			createPseudo: d,
			match: oa,
			attrHandle: {},
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function (a) {
					return a[1] = a[1].replace(va, wa), a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
				},
				CHILD: function (a) {
					return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
				},
				PSEUDO: function (a) {
					var b, c = !a[6] && a[2];
					return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
				}
			},
			filter: {
				TAG: function (a) {
					var b = a.replace(va, wa).toLowerCase();
					return "*" === a ? function () {
						return !0
					} : function (a) {
						return a.nodeName && a.nodeName.toLowerCase() === b
					}
				},
				CLASS: function (a) {
					var b = R[a + " "];
					return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function (a) {
						return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
					})
				},
				ATTR: function (a, c, d) {
					return function (e) {
						var f = b.attr(e, a);
						return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
					}
				},
				CHILD: function (a, b, c, d, e) {
					var f = "nth" !== a.slice(0, 3),
						g = "last" !== a.slice(-4),
						h = "of-type" === b;
					return 1 === d && 0 === e ? function (a) {
						return !!a.parentNode
					} : function (b, c, i) {
						var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
							q = b.parentNode,
							r = h && b.nodeName.toLowerCase(),
							s = !i && !h;
						if (q) {
							if (f) {
								for (; p;) {
									for (l = b; l = l[p];)
										if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
									o = p = "only" === a && !o && "nextSibling"
								}
								return !0
							}
							if (o = [g ? q.firstChild : q.lastChild], g && s) {
								for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
									if (1 === l.nodeType && ++m && l === b) {
										k[a] = [P, n, m];
										break
									}
							} else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
							else
								for (;
									(l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
							return m -= e, m === d || m % d === 0 && m / d >= 0
						}
					}
				},
				PSEUDO: function (a, c) {
					var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
					return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function (a, b) {
						for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g])
					}) : function (a) {
						return f(a, 0, e)
					}) : f
				}
			},
			pseudos: {
				not: d(function (a) {
					var b = [],
						c = [],
						e = A(a.replace(ia, "$1"));
					return e[N] ? d(function (a, b, c, d) {
						for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
					}) : function (a, d, f) {
						return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
					}
				}),
				has: d(function (a) {
					return function (c) {
						return b(a, c).length > 0
					}
				}),
				contains: d(function (a) {
					return a = a.replace(va, wa),
						function (b) {
							return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
						}
				}),
				lang: d(function (a) {
					return na.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(va, wa).toLowerCase(),
						function (b) {
							var c;
							do
								if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
							return !1
						}
				}),
				target: function (b) {
					var c = a.location && a.location.hash;
					return c && c.slice(1) === b.id
				},
				root: function (a) {
					return a === H
				},
				focus: function (a) {
					return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
				},
				enabled: function (a) {
					return a.disabled === !1
				},
				disabled: function (a) {
					return a.disabled === !0
				},
				checked: function (a) {
					var b = a.nodeName.toLowerCase();
					return "input" === b && !!a.checked || "option" === b && !!a.selected
				},
				selected: function (a) {
					return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
				},
				empty: function (a) {
					for (a = a.firstChild; a; a = a.nextSibling)
						if (a.nodeType < 6) return !1;
					return !0
				},
				parent: function (a) {
					return !w.pseudos.empty(a)
				},
				header: function (a) {
					return qa.test(a.nodeName)
				},
				input: function (a) {
					return pa.test(a.nodeName)
				},
				button: function (a) {
					var b = a.nodeName.toLowerCase();
					return "input" === b && "button" === a.type || "button" === b
				},
				text: function (a) {
					var b;
					return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
				},
				first: j(function () {
					return [0]
				}),
				last: j(function (a, b) {
					return [b - 1]
				}),
				eq: j(function (a, b, c) {
					return [0 > c ? c + b : c]
				}),
				even: j(function (a, b) {
					for (var c = 0; b > c; c += 2) a.push(c);
					return a
				}),
				odd: j(function (a, b) {
					for (var c = 1; b > c; c += 2) a.push(c);
					return a
				}),
				lt: j(function (a, b, c) {
					for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
					return a
				}),
				gt: j(function (a, b, c) {
					for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
					return a
				})
			}
		}, w.pseudos.nth = w.pseudos.eq;
		for (u in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) w.pseudos[u] = h(u);
		for (u in {
				submit: !0,
				reset: !0
			}) w.pseudos[u] = i(u);
		return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function (a, c) {
			var d, e, f, g, h, i, j, k = S[a + " "];
			if (k) return c ? 0 : k.slice(0);
			for (h = a, i = [], j = w.preFilter; h;) {
				(!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ka.exec(h)) && (d = e.shift(), f.push({
					value: d,
					type: e[0].replace(ia, " ")
				}), h = h.slice(d.length));
				for (g in w.filter) !(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
					value: d,
					type: g,
					matches: e
				}), h = h.slice(d.length));
				if (!d) break
			}
			return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
		}, A = b.compile = function (a, b) {
			var c, d = [],
				e = [],
				f = T[a + " "];
			if (!f) {
				for (b || (b = z(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
				f = T(a, t(e, d)), f.selector = a
			}
			return f
		}, B = b.select = function (a, b, c, d) {
			var e, f, g, h, i, j = "function" == typeof a && a,
				l = !d && z(a = j.selector || a);
			if (c = c || [], 1 === l.length) {
				if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
					if (b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0], !b) return c;
					j && (b = b.parentNode), a = a.slice(f.shift().value.length)
				}
				for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);)
					if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
						if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d), c;
						break
					}
			}
			return (j || A(a, l))(d, b, !I, c, ta.test(a) && k(b.parentNode) || b), c
		}, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function (a) {
			return 1 & a.compareDocumentPosition(G.createElement("div"))
		}), e(function (a) {
			return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
		}) || f("type|href|height|width", function (a, b, c) {
			return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
		}), v.attributes && e(function (a) {
			return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
		}) || f("value", function (a, b, c) {
			return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
		}), e(function (a) {
			return null == a.getAttribute("disabled")
		}) || f(ba, function (a, b, c) {
			var d;
			return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
		}), b
	}(a);
	_.find = ea, _.expr = ea.selectors, _.expr[":"] = _.expr.pseudos, _.unique = ea.uniqueSort, _.text = ea.getText, _.isXMLDoc = ea.isXML, _.contains = ea.contains;
	var fa = _.expr.match.needsContext,
		ga = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		ha = /^.[^:#\[\.,]*$/;
	_.filter = function (a, b, c) {
		var d = b[0];
		return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? _.find.matchesSelector(d, a) ? [d] : [] : _.find.matches(a, _.grep(b, function (a) {
			return 1 === a.nodeType
		}))
	}, _.fn.extend({
		find: function (a) {
			var b, c = this.length,
				d = [],
				e = this;

			if ("string" != typeof a) return this.pushStack(_(a).filter(function () {
				for (b = 0; c > b; b++)
					if (_.contains(e[b], this)) return !0
			}));
			for (b = 0; c > b; b++) _.find(a, e[b], d);
			return d = this.pushStack(c > 1 ? _.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
		},
		filter: function (a) {
			return this.pushStack(d(this, a || [], !1))
		},
		not: function (a) {
			return this.pushStack(d(this, a || [], !0))
		},
		is: function (a) {
			return !!d(this, "string" == typeof a && fa.test(a) ? _(a) : a || [], !1).length
		}
	});
	var ia, ja = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		ka = _.fn.init = function (a, b) {
			var c, d;
			if (!a) return this;
			if ("string" == typeof a) {
				if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : ja.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || ia).find(a) : this.constructor(b).find(a);
				if (c[1]) {
					if (b = b instanceof _ ? b[0] : b, _.merge(this, _.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)), ga.test(c[1]) && _.isPlainObject(b))
						for (c in b) _.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
					return this
				}
				return d = Z.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = Z, this.selector = a, this
			}
			return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : _.isFunction(a) ? "undefined" != typeof ia.ready ? ia.ready(a) : a(_) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), _.makeArray(a, this))
		};
	ka.prototype = _.fn, ia = _(Z);
	var la = /^(?:parents|prev(?:Until|All))/,
		ma = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	_.extend({
		dir: function (a, b, c) {
			for (var d = [], e = void 0 !== c;
				(a = a[b]) && 9 !== a.nodeType;)
				if (1 === a.nodeType) {
					if (e && _(a).is(c)) break;
					d.push(a)
				}
			return d
		},
		sibling: function (a, b) {
			for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
			return c
		}
	}), _.fn.extend({
		has: function (a) {
			var b = _(a, this),
				c = b.length;
			return this.filter(function () {
				for (var a = 0; c > a; a++)
					if (_.contains(this, b[a])) return !0
			})
		},
		closest: function (a, b) {
			for (var c, d = 0, e = this.length, f = [], g = fa.test(a) || "string" != typeof a ? _(a, b || this.context) : 0; e > d; d++)
				for (c = this[d]; c && c !== b; c = c.parentNode)
					if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && _.find.matchesSelector(c, a))) {
						f.push(c);
						break
					}
			return this.pushStack(f.length > 1 ? _.unique(f) : f)
		},
		index: function (a) {
			return a ? "string" == typeof a ? U.call(_(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function (a, b) {
			return this.pushStack(_.unique(_.merge(this.get(), _(a, b))))
		},
		addBack: function (a) {
			return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
		}
	}), _.each({
		parent: function (a) {
			var b = a.parentNode;
			return b && 11 !== b.nodeType ? b : null
		},
		parents: function (a) {
			return _.dir(a, "parentNode")
		},
		parentsUntil: function (a, b, c) {
			return _.dir(a, "parentNode", c)
		},
		next: function (a) {
			return e(a, "nextSibling")
		},
		prev: function (a) {
			return e(a, "previousSibling")
		},
		nextAll: function (a) {
			return _.dir(a, "nextSibling")
		},
		prevAll: function (a) {
			return _.dir(a, "previousSibling")
		},
		nextUntil: function (a, b, c) {
			return _.dir(a, "nextSibling", c)
		},
		prevUntil: function (a, b, c) {
			return _.dir(a, "previousSibling", c)
		},
		siblings: function (a) {
			return _.sibling((a.parentNode || {}).firstChild, a)
		},
		children: function (a) {
			return _.sibling(a.firstChild)
		},
		contents: function (a) {
			return a.contentDocument || _.merge([], a.childNodes)
		}
	}, function (a, b) {
		_.fn[a] = function (c, d) {
			var e = _.map(this, b, c);
			return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = _.filter(d, e)), this.length > 1 && (ma[a] || _.unique(e), la.test(a) && e.reverse()), this.pushStack(e)
		}
	});
	var na = /\S+/g,
		oa = {};
	_.Callbacks = function (a) {
		a = "string" == typeof a ? oa[a] || f(a) : _.extend({}, a);
		var b, c, d, e, g, h, i = [],
			j = !a.once && [],
			k = function (f) {
				for (b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0; i && g > h; h++)
					if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
						b = !1;
						break
					}
				d = !1, i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable())
			},
			l = {
				add: function () {
					if (i) {
						var c = i.length;
						! function f(b) {
							_.each(b, function (b, c) {
								var d = _.type(c);
								"function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
							})
						}(arguments), d ? g = i.length : b && (e = c, k(b))
					}
					return this
				},
				remove: function () {
					return i && _.each(arguments, function (a, b) {
						for (var c;
							(c = _.inArray(b, i, c)) > -1;) i.splice(c, 1), d && (g >= c && g--, h >= c && h--)
					}), this
				},
				has: function (a) {
					return a ? _.inArray(a, i) > -1 : !(!i || !i.length)
				},
				empty: function () {
					return i = [], g = 0, this
				},
				disable: function () {
					return i = j = b = void 0, this
				},
				disabled: function () {
					return !i
				},
				lock: function () {
					return j = void 0, b || l.disable(), this
				},
				locked: function () {
					return !j
				},
				fireWith: function (a, b) {
					return !i || c && !j || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? j.push(b) : k(b)), this
				},
				fire: function () {
					return l.fireWith(this, arguments), this
				},
				fired: function () {
					return !!c
				}
			};
		return l
	}, _.extend({
		Deferred: function (a) {
			var b = [
					["resolve", "done", _.Callbacks("once memory"), "resolved"],
					["reject", "fail", _.Callbacks("once memory"), "rejected"],
					["notify", "progress", _.Callbacks("memory")]
				],
				c = "pending",
				d = {
					state: function () {
						return c
					},
					always: function () {
						return e.done(arguments).fail(arguments), this
					},
					then: function () {
						var a = arguments;
						return _.Deferred(function (c) {
							_.each(b, function (b, f) {
								var g = _.isFunction(a[b]) && a[b];
								e[f[1]](function () {
									var a = g && g.apply(this, arguments);
									a && _.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
								})
							}), a = null
						}).promise()
					},
					promise: function (a) {
						return null != a ? _.extend(a, d) : d
					}
				},
				e = {};
			return d.pipe = d.then, _.each(b, function (a, f) {
				var g = f[2],
					h = f[3];
				d[f[1]] = g.add, h && g.add(function () {
					c = h
				}, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
					return e[f[0] + "With"](this === e ? d : this, arguments), this
				}, e[f[0] + "With"] = g.fireWith
			}), d.promise(e), a && a.call(e, e), e
		},
		when: function (a) {
			var b, c, d, e = 0,
				f = R.call(arguments),
				g = f.length,
				h = 1 !== g || a && _.isFunction(a.promise) ? g : 0,
				i = 1 === h ? a : _.Deferred(),
				j = function (a, c, d) {
					return function (e) {
						c[a] = this, d[a] = arguments.length > 1 ? R.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
					}
				};
			if (g > 1)
				for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && _.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
			return h || i.resolveWith(d, f), i.promise()
		}
	});
	var pa;
	_.fn.ready = function (a) {
		return _.ready.promise().done(a), this
	}, _.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function (a) {
			a ? _.readyWait++ : _.ready(!0)
		},
		ready: function (a) {
			(a === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0, a !== !0 && --_.readyWait > 0 || (pa.resolveWith(Z, [_]), _.fn.triggerHandler && (_(Z).triggerHandler("ready"), _(Z).off("ready"))))
		}
	}), _.ready.promise = function (b) {
		return pa || (pa = _.Deferred(), "complete" === Z.readyState ? setTimeout(_.ready) : (Z.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1))), pa.promise(b)
	}, _.ready.promise();
	var qa = _.access = function (a, b, c, d, e, f, g) {
		var h = 0,
			i = a.length,
			j = null == c;
		if ("object" === _.type(c)) {
			e = !0;
			for (h in c) _.access(a, b, h, c[h], !0, f, g)
		} else if (void 0 !== d && (e = !0, _.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
				return j.call(_(a), c)
			})), b))
			for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
		return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
	};
	_.acceptData = function (a) {
		return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
	}, h.uid = 1, h.accepts = _.acceptData, h.prototype = {
		key: function (a) {
			if (!h.accepts(a)) return 0;
			var b = {},
				c = a[this.expando];
			if (!c) {
				c = h.uid++;
				try {
					b[this.expando] = {
						value: c
					}, Object.defineProperties(a, b)
				} catch (d) {
					b[this.expando] = c, _.extend(a, b)
				}
			}
			return this.cache[c] || (this.cache[c] = {}), c
		},
		set: function (a, b, c) {
			var d, e = this.key(a),
				f = this.cache[e];
			if ("string" == typeof b) f[b] = c;
			else if (_.isEmptyObject(f)) _.extend(this.cache[e], b);
			else
				for (d in b) f[d] = b[d];
			return f
		},
		get: function (a, b) {
			var c = this.cache[this.key(a)];
			return void 0 === b ? c : c[b]
		},
		access: function (a, b, c) {
			var d;
			return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, _.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
		},
		remove: function (a, b) {
			var c, d, e, f = this.key(a),
				g = this.cache[f];
			if (void 0 === b) this.cache[f] = {};
			else {
				_.isArray(b) ? d = b.concat(b.map(_.camelCase)) : (e = _.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(na) || [])), c = d.length;
				for (; c--;) delete g[d[c]]
			}
		},
		hasData: function (a) {
			return !_.isEmptyObject(this.cache[a[this.expando]] || {})
		},
		discard: function (a) {
			a[this.expando] && delete this.cache[a[this.expando]]
		}
	};
	var ra = new h,
		sa = new h,
		ta = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		ua = /([A-Z])/g;
	_.extend({
		hasData: function (a) {
			return sa.hasData(a) || ra.hasData(a)
		},
		data: function (a, b, c) {
			return sa.access(a, b, c)
		},
		removeData: function (a, b) {
			sa.remove(a, b)
		},
		_data: function (a, b, c) {
			return ra.access(a, b, c)
		},
		_removeData: function (a, b) {
			ra.remove(a, b)
		}
	}), _.fn.extend({
		data: function (a, b) {
			var c, d, e, f = this[0],
				g = f && f.attributes;
			if (void 0 === a) {
				if (this.length && (e = sa.get(f), 1 === f.nodeType && !ra.get(f, "hasDataAttrs"))) {
					for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = _.camelCase(d.slice(5)), i(f, d, e[d])));
					ra.set(f, "hasDataAttrs", !0)
				}
				return e
			}
			return "object" == typeof a ? this.each(function () {
				sa.set(this, a)
			}) : qa(this, function (b) {
				var c, d = _.camelCase(a);
				if (f && void 0 === b) {
					if (c = sa.get(f, a), void 0 !== c) return c;
					if (c = sa.get(f, d), void 0 !== c) return c;
					if (c = i(f, d, void 0), void 0 !== c) return c
				} else this.each(function () {
					var c = sa.get(this, d);
					sa.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && sa.set(this, a, b)
				})
			}, null, b, arguments.length > 1, null, !0)
		},
		removeData: function (a) {
			return this.each(function () {
				sa.remove(this, a)
			})
		}
	}), _.extend({
		queue: function (a, b, c) {
			var d;
			return a ? (b = (b || "fx") + "queue", d = ra.get(a, b), c && (!d || _.isArray(c) ? d = ra.access(a, b, _.makeArray(c)) : d.push(c)), d || []) : void 0
		},
		dequeue: function (a, b) {
			b = b || "fx";
			var c = _.queue(a, b),
				d = c.length,
				e = c.shift(),
				f = _._queueHooks(a, b),
				g = function () {
					_.dequeue(a, b)
				};
			"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
		},
		_queueHooks: function (a, b) {
			var c = b + "queueHooks";
			return ra.get(a, c) || ra.access(a, c, {
				empty: _.Callbacks("once memory").add(function () {
					ra.remove(a, [b + "queue", c])
				})
			})
		}
	}), _.fn.extend({
		queue: function (a, b) {
			var c = 2;
			return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? _.queue(this[0], a) : void 0 === b ? this : this.each(function () {
				var c = _.queue(this, a, b);
				_._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && _.dequeue(this, a)
			})
		},
		dequeue: function (a) {
			return this.each(function () {
				_.dequeue(this, a)
			})
		},
		clearQueue: function (a) {
			return this.queue(a || "fx", [])
		},
		promise: function (a, b) {
			var c, d = 1,
				e = _.Deferred(),
				f = this,
				g = this.length,
				h = function () {
					--d || e.resolveWith(f, [f])
				};
			for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = ra.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
			return h(), e.promise(b)
		}
	});
	var va = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		wa = ["Top", "Right", "Bottom", "Left"],
		xa = function (a, b) {
			return a = b || a, "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a)
		},
		ya = /^(?:checkbox|radio)$/i;
	! function () {
		var a = Z.createDocumentFragment(),
			b = a.appendChild(Z.createElement("div")),
			c = Z.createElement("input");
		c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
	}();
	var za = "undefined";
	Y.focusinBubbles = "onfocusin" in a;
	var Aa = /^key/,
		Ba = /^(?:mouse|pointer|contextmenu)|click/,
		Ca = /^(?:focusinfocus|focusoutblur)$/,
		Da = /^([^.]*)(?:\.(.+)|)$/;
	_.event = {
		global: {},
		add: function (a, b, c, d, e) {
			var f, g, h, i, j, k, l, m, n, o, p, q = ra.get(a);
			if (q)
				for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = _.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
						return typeof _ !== za && _.event.triggered !== b.type ? _.event.dispatch.apply(a, arguments) : void 0
					}), b = (b || "").match(na) || [""], j = b.length; j--;) h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = _.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = _.event.special[n] || {}, k = _.extend({
					type: n,
					origType: p,
					data: d,
					handler: c,
					guid: c.guid,
					selector: e,
					needsContext: e && _.expr.match.needsContext.test(e),
					namespace: o.join(".")
				}, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), _.event.global[n] = !0)
		},
		remove: function (a, b, c, d, e) {
			var f, g, h, i, j, k, l, m, n, o, p, q = ra.hasData(a) && ra.get(a);
			if (q && (i = q.events)) {
				for (b = (b || "").match(na) || [""], j = b.length; j--;)
					if (h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
						for (l = _.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
						g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || _.removeEvent(a, n, q.handle), delete i[n])
					} else
						for (n in i) _.event.remove(a, n + b[j], c, d, !0);
				_.isEmptyObject(i) && (delete q.handle, ra.remove(a, "events"))
			}
		},
		trigger: function (b, c, d, e) {
			var f, g, h, i, j, k, l, m = [d || Z],
				n = X.call(b, "type") ? b.type : b,
				o = X.call(b, "namespace") ? b.namespace.split(".") : [];
			if (g = h = d = d || Z, 3 !== d.nodeType && 8 !== d.nodeType && !Ca.test(n + _.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[_.expando] ? b : new _.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : _.makeArray(c, [b]), l = _.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
				if (!e && !l.noBubble && !_.isWindow(d)) {
					for (i = l.delegateType || n, Ca.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), h = g;
					h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a)
				}
				for (f = 0;
					(g = m[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i : l.bindType || n, k = (ra.get(g, "events") || {})[b.type] && ra.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && _.acceptData(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
				return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !_.acceptData(d) || j && _.isFunction(d[n]) && !_.isWindow(d) && (h = d[j], h && (d[j] = null), _.event.triggered = n, d[n](), _.event.triggered = void 0, h && (d[j] = h)), b.result
			}
		},
		dispatch: function (a) {
			a = _.event.fix(a);
			var b, c, d, e, f, g = [],
				h = R.call(arguments),
				i = (ra.get(this, "events") || {})[a.type] || [],
				j = _.event.special[a.type] || {};
			if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
				for (g = _.event.handlers.call(this, a, i), b = 0;
					(e = g[b++]) && !a.isPropagationStopped();)
					for (a.currentTarget = e.elem, c = 0;
						(f = e.handlers[c++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(f.namespace)) && (a.handleObj = f, a.data = f.data, d = ((_.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
				return j.postDispatch && j.postDispatch.call(this, a), a.result
			}
		},
		handlers: function (a, b) {
			var c, d, e, f, g = [],
				h = b.delegateCount,
				i = a.target;
			if (h && i.nodeType && (!a.button || "click" !== a.type))
				for (; i !== this; i = i.parentNode || this)
					if (i.disabled !== !0 || "click" !== a.type) {
						for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? _(e, this).index(i) >= 0 : _.find(e, this, null, [i]).length), d[e] && d.push(f);
						d.length && g.push({
							elem: i,
							handlers: d
						})
					}
			return h < b.length && g.push({
				elem: this,
				handlers: b.slice(h)
			}), g
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function (a, b) {
				return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function (a, b) {
				var c, d, e, f = b.button;
				return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
			}
		},
		fix: function (a) {
			if (a[_.expando]) return a;
			var b, c, d, e = a.type,
				f = a,
				g = this.fixHooks[e];
			for (g || (this.fixHooks[e] = g = Ba.test(e) ? this.mouseHooks : Aa.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new _.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
			return a.target || (a.target = Z), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function () {
					return this !== l() && this.focus ? (this.focus(), !1) : void 0
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function () {
					return this === l() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function () {
					return "checkbox" === this.type && this.click && _.nodeName(this, "input") ? (this.click(), !1) : void 0
				},
				_default: function (a) {
					return _.nodeName(a.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function (a) {
					void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
				}
			}
		},
		simulate: function (a, b, c, d) {
			var e = _.extend(new _.Event, c, {
				type: a,
				isSimulated: !0,
				originalEvent: {}
			});
			d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
		}
	}, _.removeEvent = function (a, b, c) {
		a.removeEventListener && a.removeEventListener(b, c, !1)
	}, _.Event = function (a, b) {
		return this instanceof _.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? j : k) : this.type = a, b && _.extend(this, b), this.timeStamp = a && a.timeStamp || _.now(), void(this[_.expando] = !0)) : new _.Event(a, b)
	}, _.Event.prototype = {
		isDefaultPrevented: k,
		isPropagationStopped: k,
		isImmediatePropagationStopped: k,
		preventDefault: function () {
			var a = this.originalEvent;
			this.isDefaultPrevented = j, a && a.preventDefault && a.preventDefault()
		},
		stopPropagation: function () {
			var a = this.originalEvent;
			this.isPropagationStopped = j, a && a.stopPropagation && a.stopPropagation()
		},
		stopImmediatePropagation: function () {
			var a = this.originalEvent;
			this.isImmediatePropagationStopped = j, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
		}
	}, _.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function (a, b) {
		_.event.special[a] = {
			delegateType: b,
			bindType: b,
			handle: function (a) {
				var c, d = this,
					e = a.relatedTarget,
					f = a.handleObj;
				return (!e || e !== d && !_.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
			}
		}
	}), Y.focusinBubbles || _.each({
		focus: "focusin",
		blur: "focusout"
	}, function (a, b) {
		var c = function (a) {
			_.event.simulate(b, a.target, _.event.fix(a), !0)
		};
		_.event.special[b] = {
			setup: function () {
				var d = this.ownerDocument || this,
					e = ra.access(d, b);
				e || d.addEventListener(a, c, !0), ra.access(d, b, (e || 0) + 1)
			},
			teardown: function () {
				var d = this.ownerDocument || this,
					e = ra.access(d, b) - 1;
				e ? ra.access(d, b, e) : (d.removeEventListener(a, c, !0), ra.remove(d, b))
			}
		}
	}), _.fn.extend({
		on: function (a, b, c, d, e) {
			var f, g;
			if ("object" == typeof a) {
				"string" != typeof b && (c = c || b, b = void 0);
				for (g in a) this.on(g, b, c, a[g], e);
				return this
			}
			if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = k;
			else if (!d) return this;
			return 1 === e && (f = d, d = function (a) {
				return _().off(a), f.apply(this, arguments)
			}, d.guid = f.guid || (f.guid = _.guid++)), this.each(function () {
				_.event.add(this, a, d, c, b)
			})
		},
		one: function (a, b, c, d) {
			return this.on(a, b, c, d, 1)
		},
		off: function (a, b, c) {
			var d, e;
			if (a && a.preventDefault && a.handleObj) return d = a.handleObj, _(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
			if ("object" == typeof a) {
				for (e in a) this.off(e, b, a[e]);
				return this
			}
			return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = k), this.each(function () {
				_.event.remove(this, a, c, b)
			})
		},
		trigger: function (a, b) {
			return this.each(function () {
				_.event.trigger(a, b, this)
			})
		},
		triggerHandler: function (a, b) {
			var c = this[0];
			return c ? _.event.trigger(a, b, c, !0) : void 0
		}
	});
	var Ea = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		Fa = /<([\w:]+)/,
		Ga = /<|&#?\w+;/,
		Ha = /<(?:script|style|link)/i,
		Ia = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Ja = /^$|\/(?:java|ecma)script/i,
		Ka = /^true\/(.*)/,
		La = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		Ma = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
	Ma.optgroup = Ma.option, Ma.tbody = Ma.tfoot = Ma.colgroup = Ma.caption = Ma.thead, Ma.th = Ma.td, _.extend({
		clone: function (a, b, c) {
			var d, e, f, g, h = a.cloneNode(!0),
				i = _.contains(a.ownerDocument, a);
			if (!(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _.isXMLDoc(a)))
				for (g = r(h), f = r(a), d = 0, e = f.length; e > d; d++) s(f[d], g[d]);
			if (b)
				if (c)
					for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++) q(f[d], g[d]);
				else q(a, h);
			return g = r(h, "script"), g.length > 0 && p(g, !i && r(a, "script")), h
		},
		buildFragment: function (a, b, c, d) {
			for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++)
				if (e = a[m], e || 0 === e)
					if ("object" === _.type(e)) _.merge(l, e.nodeType ? [e] : e);
					else if (Ga.test(e)) {
				for (f = f || k.appendChild(b.createElement("div")), g = (Fa.exec(e) || ["", ""])[1].toLowerCase(), h = Ma[g] || Ma._default, f.innerHTML = h[1] + e.replace(Ea, "<$1></$2>") + h[2], j = h[0]; j--;) f = f.lastChild;
				_.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
			} else l.push(b.createTextNode(e));
			for (k.textContent = "", m = 0; e = l[m++];)
				if ((!d || -1 === _.inArray(e, d)) && (i = _.contains(e.ownerDocument, e), f = r(k.appendChild(e), "script"), i && p(f), c))
					for (j = 0; e = f[j++];) Ja.test(e.type || "") && c.push(e);
			return k
		},
		cleanData: function (a) {
			for (var b, c, d, e, f = _.event.special, g = 0; void 0 !== (c = a[g]); g++) {
				if (_.acceptData(c) && (e = c[ra.expando], e && (b = ra.cache[e]))) {
					if (b.events)
						for (d in b.events) f[d] ? _.event.remove(c, d) : _.removeEvent(c, d, b.handle);
					ra.cache[e] && delete ra.cache[e]
				}
				delete sa.cache[c[sa.expando]]
			}
		}
	}), _.fn.extend({
		text: function (a) {
			return qa(this, function (a) {
				return void 0 === a ? _.text(this) : this.empty().each(function () {
					(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
				})
			}, null, a, arguments.length)
		},
		append: function () {
			return this.domManip(arguments, function (a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = m(this, a);
					b.appendChild(a)
				}
			})
		},
		prepend: function () {
			return this.domManip(arguments, function (a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = m(this, a);
					b.insertBefore(a, b.firstChild)
				}
			})
		},
		before: function () {
			return this.domManip(arguments, function (a) {
				this.parentNode && this.parentNode.insertBefore(a, this)
			})
		},
		after: function () {
			return this.domManip(arguments, function (a) {
				this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
			})
		},
		remove: function (a, b) {
			for (var c, d = a ? _.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || _.cleanData(r(c)), c.parentNode && (b && _.contains(c.ownerDocument, c) && p(r(c, "script")), c.parentNode.removeChild(c));
			return this
		},
		empty: function () {
			for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (_.cleanData(r(a, !1)), a.textContent = "");
			return this
		},
		clone: function (a, b) {
			return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
				return _.clone(this, a, b)
			})
		},
		html: function (a) {
			return qa(this, function (a) {
				var b = this[0] || {},
					c = 0,
					d = this.length;
				if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
				if ("string" == typeof a && !Ha.test(a) && !Ma[(Fa.exec(a) || ["", ""])[1].toLowerCase()]) {
					a = a.replace(Ea, "<$1></$2>");
					try {
						for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (_.cleanData(r(b, !1)), b.innerHTML = a);
						b = 0
					} catch (e) {}
				}
				b && this.empty().append(a)
			}, null, a, arguments.length)
		},
		replaceWith: function () {
			var a = arguments[0];
			return this.domManip(arguments, function (b) {
				a = this.parentNode, _.cleanData(r(this)), a && a.replaceChild(b, this)
			}), a && (a.length || a.nodeType) ? this : this.remove()
		},
		detach: function (a) {
			return this.remove(a, !0)
		},
		domManip: function (a, b) {
			a = S.apply([], a);
			var c, d, e, f, g, h, i = 0,
				j = this.length,
				k = this,
				l = j - 1,
				m = a[0],
				p = _.isFunction(m);
			if (p || j > 1 && "string" == typeof m && !Y.checkClone && Ia.test(m)) return this.each(function (c) {
				var d = k.eq(c);
				p && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
			});
			if (j && (c = _.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
				for (e = _.map(r(c, "script"), n), f = e.length; j > i; i++) g = c, i !== l && (g = _.clone(g, !0, !0), f && _.merge(e, r(g, "script"))), b.call(this[i], g, i);
				if (f)
					for (h = e[e.length - 1].ownerDocument, _.map(e, o), i = 0; f > i; i++) g = e[i], Ja.test(g.type || "") && !ra.access(g, "globalEval") && _.contains(h, g) && (g.src ? _._evalUrl && _._evalUrl(g.src) : _.globalEval(g.textContent.replace(La, "")))
			}
			return this
		}
	}), _.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (a, b) {
		_.fn[a] = function (a) {
			for (var c, d = [], e = _(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), _(e[g])[b](c), T.apply(d, c.get());
			return this.pushStack(d)
		}
	});
	var Na, Oa = {},
		Pa = /^margin/,
		Qa = new RegExp("^(" + va + ")(?!px)[a-z%]+$", "i"),
		Ra = function (b) {
			return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
		};
	! function () {
		function b() {
			g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", g.innerHTML = "", e.appendChild(f);
			var b = a.getComputedStyle(g, null);
			c = "1%" !== b.top, d = "4px" === b.width, e.removeChild(f)
		}
		var c, d, e = Z.documentElement,
			f = Z.createElement("div"),
			g = Z.createElement("div");
		g.style && (g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", f.appendChild(g), a.getComputedStyle && _.extend(Y, {
			pixelPosition: function () {
				return b(), c
			},
			boxSizingReliable: function () {
				return null == d && b(), d
			},
			reliableMarginRight: function () {
				var b, c = g.appendChild(Z.createElement("div"));
				return c.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", g.style.width = "1px", e.appendChild(f), b = !parseFloat(a.getComputedStyle(c, null).marginRight), e.removeChild(f), g.removeChild(c), b
			}
		}))
	}(), _.swap = function (a, b, c, d) {
		var e, f, g = {};
		for (f in b) g[f] = a.style[f], a.style[f] = b[f];
		e = c.apply(a, d || []);
		for (f in b) a.style[f] = g[f];
		return e
	};
	var Sa = /^(none|table(?!-c[ea]).+)/,
		Ta = new RegExp("^(" + va + ")(.*)$", "i"),
		Ua = new RegExp("^([+-])=(" + va + ")", "i"),
		Va = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Wa = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		Xa = ["Webkit", "O", "Moz", "ms"];
	_.extend({
		cssHooks: {
			opacity: {
				get: function (a, b) {
					if (b) {
						var c = v(a, "opacity");
						return "" === c ? "1" : c
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": "cssFloat"
		},
		style: function (a, b, c, d) {
			if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
				var e, f, g, h = _.camelCase(b),
					i = a.style;
				return b = _.cssProps[h] || (_.cssProps[h] = x(i, h)), g = _.cssHooks[b] || _.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ua.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || _.cssNumber[h] || (c += "px"), Y.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
			}
		},
		css: function (a, b, c, d) {
			var e, f, g, h = _.camelCase(b);
			return b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h)), g = _.cssHooks[b] || _.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = v(a, b, d)), "normal" === e && b in Wa && (e = Wa[b]), "" === c || c ? (f = parseFloat(e), c === !0 || _.isNumeric(f) ? f || 0 : e) : e
		}
	}), _.each(["height", "width"], function (a, b) {
		_.cssHooks[b] = {
			get: function (a, c, d) {
				return c ? Sa.test(_.css(a, "display")) && 0 === a.offsetWidth ? _.swap(a, Va, function () {
					return A(a, b, d)
				}) : A(a, b, d) : void 0
			},
			set: function (a, c, d) {
				var e = d && Ra(a);
				return y(a, c, d ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e) : 0)
			}
		}
	}), _.cssHooks.marginRight = w(Y.reliableMarginRight, function (a, b) {
		return b ? _.swap(a, {
			display: "inline-block"
		}, v, [a, "marginRight"]) : void 0
	}), _.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function (a, b) {
		_.cssHooks[a + b] = {
			expand: function (c) {
				for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + wa[d] + b] = f[d] || f[d - 2] || f[0];
				return e
			}
		}, Pa.test(a) || (_.cssHooks[a + b].set = y)
	}), _.fn.extend({
		css: function (a, b) {
			return qa(this, function (a, b, c) {
				var d, e, f = {},
					g = 0;
				if (_.isArray(b)) {
					for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = _.css(a, b[g], !1, d);
					return f
				}
				return void 0 !== c ? _.style(a, b, c) : _.css(a, b)
			}, a, b, arguments.length > 1)
		},
		show: function () {
			return B(this, !0)
		},
		hide: function () {
			return B(this)
		},
		toggle: function (a) {
			return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
				xa(this) ? _(this).show() : _(this).hide()
			})
		}
	}), _.Tween = C, C.prototype = {
		constructor: C,
		init: function (a, b, c, d, e, f) {
			this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (_.cssNumber[c] ? "" : "px")
		},
		cur: function () {
			var a = C.propHooks[this.prop];
			return a && a.get ? a.get(this) : C.propHooks._default.get(this)
		},
		run: function (a) {
			var b, c = C.propHooks[this.prop];
			return this.pos = b = this.options.duration ? _.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : C.propHooks._default.set(this), this
		}
	}, C.prototype.init.prototype = C.prototype, C.propHooks = {
		_default: {
			get: function (a) {
				var b;
				return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = _.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
			},
			set: function (a) {
				_.fx.step[a.prop] ? _.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop]) ? _.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
			}
		}
	}, C.propHooks.scrollTop = C.propHooks.scrollLeft = {
		set: function (a) {
			a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
		}
	}, _.easing = {
		linear: function (a) {
			return a
		},
		swing: function (a) {
			return .5 - Math.cos(a * Math.PI) / 2
		}
	}, _.fx = C.prototype.init, _.fx.step = {};
	var Ya, Za, $a = /^(?:toggle|show|hide)$/,
		_a = new RegExp("^(?:([+-])=|)(" + va + ")([a-z%]*)$", "i"),
		ab = /queueHooks$/,
		bb = [G],
		cb = {
			"*": [function (a, b) {
				var c = this.createTween(a, b),
					d = c.cur(),
					e = _a.exec(b),
					f = e && e[3] || (_.cssNumber[a] ? "" : "px"),
					g = (_.cssNumber[a] || "px" !== f && +d) && _a.exec(_.css(c.elem, a)),
					h = 1,
					i = 20;
				if (g && g[3] !== f) {
					f = f || g[3], e = e || [], g = +d || 1;
					do h = h || ".5", g /= h, _.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
				}
				return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
			}]
		};
	_.Animation = _.extend(I, {
			tweener: function (a, b) {
				_.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
				for (var c, d = 0, e = a.length; e > d; d++) c = a[d], cb[c] = cb[c] || [], cb[c].unshift(b)
			},
			prefilter: function (a, b) {
				b ? bb.unshift(a) : bb.push(a)
			}
		}), _.speed = function (a, b, c) {
			var d = a && "object" == typeof a ? _.extend({}, a) : {
				complete: c || !c && b || _.isFunction(a) && a,
				duration: a,
				easing: c && b || b && !_.isFunction(b) && b
			};
			return d.duration = _.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in _.fx.speeds ? _.fx.speeds[d.duration] : _.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
				_.isFunction(d.old) && d.old.call(this), d.queue && _.dequeue(this, d.queue)
			}, d
		}, _.fn.extend({
			fadeTo: function (a, b, c, d) {
				return this.filter(xa).css("opacity", 0).show().end().animate({
					opacity: b
				}, a, c, d)
			},
			animate: function (a, b, c, d) {
				var e = _.isEmptyObject(a),
					f = _.speed(b, c, d),
					g = function () {
						var b = I(this, _.extend({}, a), f);
						(e || ra.get(this, "finish")) && b.stop(!0)
					};
				return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
			},
			stop: function (a, b, c) {
				var d = function (a) {
					var b = a.stop;
					delete a.stop, b(c)
				};
				return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
					var b = !0,
						e = null != a && a + "queueHooks",
						f = _.timers,
						g = ra.get(this);
					if (e) g[e] && g[e].stop && d(g[e]);
					else
						for (e in g) g[e] && g[e].stop && ab.test(e) && d(g[e]);
					for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
					(b || !c) && _.dequeue(this, a)
				})
			},
			finish: function (a) {
				return a !== !1 && (a = a || "fx"), this.each(function () {
					var b, c = ra.get(this),
						d = c[a + "queue"],
						e = c[a + "queueHooks"],
						f = _.timers,
						g = d ? d.length : 0;
					for (c.finish = !0, _.queue(this, a, []), e && e.stop && e.stop.call(this, !0),
						b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
					for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
					delete c.finish
				})
			}
		}), _.each(["toggle", "show", "hide"], function (a, b) {
			var c = _.fn[b];
			_.fn[b] = function (a, d, e) {
				return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e)
			}
		}), _.each({
			slideDown: E("show"),
			slideUp: E("hide"),
			slideToggle: E("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function (a, b) {
			_.fn[a] = function (a, c, d) {
				return this.animate(b, a, c, d)
			}
		}), _.timers = [], _.fx.tick = function () {
			var a, b = 0,
				c = _.timers;
			for (Ya = _.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
			c.length || _.fx.stop(), Ya = void 0
		}, _.fx.timer = function (a) {
			_.timers.push(a), a() ? _.fx.start() : _.timers.pop()
		}, _.fx.interval = 13, _.fx.start = function () {
			Za || (Za = setInterval(_.fx.tick, _.fx.interval))
		}, _.fx.stop = function () {
			clearInterval(Za), Za = null
		}, _.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, _.fn.delay = function (a, b) {
			return a = _.fx ? _.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
				var d = setTimeout(b, a);
				c.stop = function () {
					clearTimeout(d)
				}
			})
		},
		function () {
			var a = Z.createElement("input"),
				b = Z.createElement("select"),
				c = b.appendChild(Z.createElement("option"));
			a.type = "checkbox", Y.checkOn = "" !== a.value, Y.optSelected = c.selected, b.disabled = !0, Y.optDisabled = !c.disabled, a = Z.createElement("input"), a.value = "t", a.type = "radio", Y.radioValue = "t" === a.value
		}();
	var db, eb, fb = _.expr.attrHandle;
	_.fn.extend({
		attr: function (a, b) {
			return qa(this, _.attr, a, b, arguments.length > 1)
		},
		removeAttr: function (a) {
			return this.each(function () {
				_.removeAttr(this, a)
			})
		}
	}), _.extend({
		attr: function (a, b, c) {
			var d, e, f = a.nodeType;
			if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === za ? _.prop(a, b, c) : (1 === f && _.isXMLDoc(a) || (b = b.toLowerCase(), d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? eb : db)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = _.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void _.removeAttr(a, b))
		},
		removeAttr: function (a, b) {
			var c, d, e = 0,
				f = b && b.match(na);
			if (f && 1 === a.nodeType)
				for (; c = f[e++];) d = _.propFix[c] || c, _.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
		},
		attrHooks: {
			type: {
				set: function (a, b) {
					if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) {
						var c = a.value;
						return a.setAttribute("type", b), c && (a.value = c), b
					}
				}
			}
		}
	}), eb = {
		set: function (a, b, c) {
			return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c), c
		}
	}, _.each(_.expr.match.bool.source.match(/\w+/g), function (a, b) {
		var c = fb[b] || _.find.attr;
		fb[b] = function (a, b, d) {
			var e, f;
			return d || (f = fb[b], fb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, fb[b] = f), e
		}
	});
	var gb = /^(?:input|select|textarea|button)$/i;
	_.fn.extend({
		prop: function (a, b) {
			return qa(this, _.prop, a, b, arguments.length > 1)
		},
		removeProp: function (a) {
			return this.each(function () {
				delete this[_.propFix[a] || a]
			})
		}
	}), _.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
		prop: function (a, b, c) {
			var d, e, f, g = a.nodeType;
			if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !_.isXMLDoc(a), f && (b = _.propFix[b] || b, e = _.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
		},
		propHooks: {
			tabIndex: {
				get: function (a) {
					return a.hasAttribute("tabindex") || gb.test(a.nodeName) || a.href ? a.tabIndex : -1
				}
			}
		}
	}), Y.optSelected || (_.propHooks.selected = {
		get: function (a) {
			var b = a.parentNode;
			return b && b.parentNode && b.parentNode.selectedIndex, null
		}
	}), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		_.propFix[this.toLowerCase()] = this
	});
	var hb = /[\t\r\n\f]/g;
	_.fn.extend({
		addClass: function (a) {
			var b, c, d, e, f, g, h = "string" == typeof a && a,
				i = 0,
				j = this.length;
			if (_.isFunction(a)) return this.each(function (b) {
				_(this).addClass(a.call(this, b, this.className))
			});
			if (h)
				for (b = (a || "").match(na) || []; j > i; i++)
					if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : " ")) {
						for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
						g = _.trim(d), c.className !== g && (c.className = g)
					}
			return this
		},
		removeClass: function (a) {
			var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
				i = 0,
				j = this.length;
			if (_.isFunction(a)) return this.each(function (b) {
				_(this).removeClass(a.call(this, b, this.className))
			});
			if (h)
				for (b = (a || "").match(na) || []; j > i; i++)
					if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : "")) {
						for (f = 0; e = b[f++];)
							for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
						g = a ? _.trim(d) : "", c.className !== g && (c.className = g)
					}
			return this
		},
		toggleClass: function (a, b) {
			var c = typeof a;
			return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(_.isFunction(a) ? function (c) {
				_(this).toggleClass(a.call(this, c, this.className, b), b)
			} : function () {
				if ("string" === c)
					for (var b, d = 0, e = _(this), f = a.match(na) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
				else(c === za || "boolean" === c) && (this.className && ra.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ra.get(this, "__className__") || "")
			})
		},
		hasClass: function (a) {
			for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
				if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(hb, " ").indexOf(b) >= 0) return !0;
			return !1
		}
	});
	var ib = /\r/g;
	_.fn.extend({
		val: function (a) {
			var b, c, d, e = this[0]; {
				if (arguments.length) return d = _.isFunction(a), this.each(function (c) {
					var e;
					1 === this.nodeType && (e = d ? a.call(this, c, _(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : _.isArray(e) && (e = _.map(e, function (a) {
						return null == a ? "" : a + ""
					})), b = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
				});
				if (e) return b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ib, "") : null == c ? "" : c)
			}
		}
	}), _.extend({
		valHooks: {
			option: {
				get: function (a) {
					var b = _.find.attr(a, "value");
					return null != b ? b : _.trim(_.text(a))
				}
			},
			select: {
				get: function (a) {
					for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
						if (c = d[i], !(!c.selected && i !== e || (Y.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && _.nodeName(c.parentNode, "optgroup"))) {
							if (b = _(c).val(), f) return b;
							g.push(b)
						}
					return g
				},
				set: function (a, b) {
					for (var c, d, e = a.options, f = _.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
					return c || (a.selectedIndex = -1), f
				}
			}
		}
	}), _.each(["radio", "checkbox"], function () {
		_.valHooks[this] = {
			set: function (a, b) {
				return _.isArray(b) ? a.checked = _.inArray(_(a).val(), b) >= 0 : void 0
			}
		}, Y.checkOn || (_.valHooks[this].get = function (a) {
			return null === a.getAttribute("value") ? "on" : a.value
		})
	}), _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
		_.fn[b] = function (a, c) {
			return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
		}
	}), _.fn.extend({
		hover: function (a, b) {
			return this.mouseenter(a).mouseleave(b || a)
		},
		bind: function (a, b, c) {
			return this.on(a, null, b, c)
		},
		unbind: function (a, b) {
			return this.off(a, null, b)
		},
		delegate: function (a, b, c, d) {
			return this.on(b, a, c, d)
		},
		undelegate: function (a, b, c) {
			return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
		}
	});
	var jb = _.now(),
		kb = /\?/;
	_.parseJSON = function (a) {
		return JSON.parse(a + "")
	}, _.parseXML = function (a) {
		var b, c;
		if (!a || "string" != typeof a) return null;
		try {
			c = new DOMParser, b = c.parseFromString(a, "text/xml")
		} catch (d) {
			b = void 0
		}
		return (!b || b.getElementsByTagName("parsererror").length) && _.error("Invalid XML: " + a), b
	};
	var lb = /#.*$/,
		mb = /([?&])_=[^&]*/,
		nb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		pb = /^(?:GET|HEAD)$/,
		qb = /^\/\//,
		rb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		sb = {},
		tb = {},
		ub = "*/".concat("*"),
		vb = a.location.href,
		wb = rb.exec(vb.toLowerCase()) || [];
	_.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: vb,
			type: "GET",
			isLocal: ob.test(wb[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": ub,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": _.parseJSON,
				"text xml": _.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function (a, b) {
			return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a)
		},
		ajaxPrefilter: J(sb),
		ajaxTransport: J(tb),
		ajax: function (a, b) {
			function c(a, b, c, g) {
				var i, k, r, s, u, w = b;
				2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || "", v.readyState = a > 0 ? 4 : 0, i = a >= 200 && 300 > a || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (_.lastModified[e] = u), u = v.getResponseHeader("etag"), u && (_.etag[e] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, i = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [v, l, i ? k : r]), p.fireWith(m, [v, w]), j && (n.trigger("ajaxComplete", [v, l]), --_.active || _.event.trigger("ajaxStop")))
			}
			"object" == typeof a && (b = a, a = void 0), b = b || {};
			var d, e, f, g, h, i, j, k, l = _.ajaxSetup({}, b),
				m = l.context || l,
				n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event,
				o = _.Deferred(),
				p = _.Callbacks("once memory"),
				q = l.statusCode || {},
				r = {},
				s = {},
				t = 0,
				u = "canceled",
				v = {
					readyState: 0,
					getResponseHeader: function (a) {
						var b;
						if (2 === t) {
							if (!g)
								for (g = {}; b = nb.exec(f);) g[b[1].toLowerCase()] = b[2];
							b = g[a.toLowerCase()]
						}
						return null == b ? null : b
					},
					getAllResponseHeaders: function () {
						return 2 === t ? f : null
					},
					setRequestHeader: function (a, b) {
						var c = a.toLowerCase();
						return t || (a = s[c] = s[c] || a, r[a] = b), this
					},
					overrideMimeType: function (a) {
						return t || (l.mimeType = a), this
					},
					statusCode: function (a) {
						var b;
						if (a)
							if (2 > t)
								for (b in a) q[b] = [q[b], a[b]];
							else v.always(a[v.status]);
						return this
					},
					abort: function (a) {
						var b = a || u;
						return d && d.abort(b), c(0, b), this
					}
				};
			if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || vb) + "").replace(lb, "").replace(qb, wb[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = _.trim(l.dataType || "*").toLowerCase().match(na) || [""], null == l.crossDomain && (i = rb.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === wb[1] && i[2] === wb[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (wb[3] || ("http:" === wb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = _.param(l.data, l.traditional)), K(sb, l, b, v), 2 === t) return v;
			j = _.event && l.global, j && 0 === _.active++ && _.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !pb.test(l.type), e = l.url, l.hasContent || (l.data && (e = l.url += (kb.test(e) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = mb.test(e) ? e.replace(mb, "$1_=" + jb++) : e + (kb.test(e) ? "&" : "?") + "_=" + jb++)), l.ifModified && (_.lastModified[e] && v.setRequestHeader("If-Modified-Since", _.lastModified[e]), _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : l.accepts["*"]);
			for (k in l.headers) v.setRequestHeader(k, l.headers[k]);
			if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
			u = "abort";
			for (k in {
					success: 1,
					error: 1,
					complete: 1
				}) v[k](l[k]);
			if (d = K(tb, l, b, v)) {
				v.readyState = 1, j && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function () {
					v.abort("timeout")
				}, l.timeout));
				try {
					t = 1, d.send(r, c)
				} catch (w) {
					if (!(2 > t)) throw w;
					c(-1, w)
				}
			} else c(-1, "No Transport");
			return v
		},
		getJSON: function (a, b, c) {
			return _.get(a, b, c, "json")
		},
		getScript: function (a, b) {
			return _.get(a, void 0, b, "script")
		}
	}), _.each(["get", "post"], function (a, b) {
		_[b] = function (a, c, d, e) {
			return _.isFunction(c) && (e = e || d, d = c, c = void 0), _.ajax({
				url: a,
				type: b,
				dataType: e,
				data: c,
				success: d
			})
		}
	}), _._evalUrl = function (a) {
		return _.ajax({
			url: a,
			type: "GET",
			dataType: "script",
			async: !1,
			global: !1,
			"throws": !0
		})
	}, _.fn.extend({
		wrapAll: function (a) {
			var b;
			return _.isFunction(a) ? this.each(function (b) {
				_(this).wrapAll(a.call(this, b))
			}) : (this[0] && (b = _(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
				for (var a = this; a.firstElementChild;) a = a.firstElementChild;
				return a
			}).append(this)), this)
		},
		wrapInner: function (a) {
			return this.each(_.isFunction(a) ? function (b) {
				_(this).wrapInner(a.call(this, b))
			} : function () {
				var b = _(this),
					c = b.contents();
				c.length ? c.wrapAll(a) : b.append(a)
			})
		},
		wrap: function (a) {
			var b = _.isFunction(a);
			return this.each(function (c) {
				_(this).wrapAll(b ? a.call(this, c) : a)
			})
		},
		unwrap: function () {
			return this.parent().each(function () {
				_.nodeName(this, "body") || _(this).replaceWith(this.childNodes)
			}).end()
		}
	}), _.expr.filters.hidden = function (a) {
		return a.offsetWidth <= 0 && a.offsetHeight <= 0
	}, _.expr.filters.visible = function (a) {
		return !_.expr.filters.hidden(a)
	};
	var xb = /%20/g,
		yb = /\[\]$/,
		zb = /\r?\n/g,
		Ab = /^(?:submit|button|image|reset|file)$/i,
		Bb = /^(?:input|select|textarea|keygen)/i;
	_.param = function (a, b) {
		var c, d = [],
			e = function (a, b) {
				b = _.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
			};
		if (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional), _.isArray(a) || a.jquery && !_.isPlainObject(a)) _.each(a, function () {
			e(this.name, this.value)
		});
		else
			for (c in a) O(c, a[c], b, e);
		return d.join("&").replace(xb, "+")
	}, _.fn.extend({
		serialize: function () {
			return _.param(this.serializeArray())
		},
		serializeArray: function () {
			return this.map(function () {
				var a = _.prop(this, "elements");
				return a ? _.makeArray(a) : this
			}).filter(function () {
				var a = this.type;
				return this.name && !_(this).is(":disabled") && Bb.test(this.nodeName) && !Ab.test(a) && (this.checked || !ya.test(a))
			}).map(function (a, b) {
				var c = _(this).val();
				return null == c ? null : _.isArray(c) ? _.map(c, function (a) {
					return {
						name: b.name,
						value: a.replace(zb, "\r\n")
					}
				}) : {
					name: b.name,
					value: c.replace(zb, "\r\n")
				}
			}).get()
		}
	}), _.ajaxSettings.xhr = function () {
		try {
			return new XMLHttpRequest
		} catch (a) {}
	};
	var Cb = 0,
		Db = {},
		Eb = {
			0: 200,
			1223: 204
		},
		Fb = _.ajaxSettings.xhr();
	a.attachEvent && a.attachEvent("onunload", function () {
		for (var a in Db) Db[a]()
	}), Y.cors = !!Fb && "withCredentials" in Fb, Y.ajax = Fb = !!Fb, _.ajaxTransport(function (a) {
		var b;
		return Y.cors || Fb && !a.crossDomain ? {
			send: function (c, d) {
				var e, f = a.xhr(),
					g = ++Cb;
				if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
					for (e in a.xhrFields) f[e] = a.xhrFields[e];
				a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
				for (e in c) f.setRequestHeader(e, c[e]);
				b = function (a) {
					return function () {
						b && (delete Db[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Eb[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
							text: f.responseText
						} : void 0, f.getAllResponseHeaders()))
					}
				}, f.onload = b(), f.onerror = b("error"), b = Db[g] = b("abort");
				try {
					f.send(a.hasContent && a.data || null)
				} catch (h) {
					if (b) throw h
				}
			},
			abort: function () {
				b && b()
			}
		} : void 0
	}), _.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function (a) {
				return _.globalEval(a), a
			}
		}
	}), _.ajaxPrefilter("script", function (a) {
		void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
	}), _.ajaxTransport("script", function (a) {
		if (a.crossDomain) {
			var b, c;
			return {
				send: function (d, e) {
					b = _("<script>").prop({
						async: !0,
						charset: a.scriptCharset,
						src: a.url
					}).on("load error", c = function (a) {
						b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
					}), Z.head.appendChild(b[0])
				},
				abort: function () {
					c && c()
				}
			}
		}
	});
	var Gb = [],
		Hb = /(=)\?(?=&|$)|\?\?/;
	_.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function () {
			var a = Gb.pop() || _.expando + "_" + jb++;
			return this[a] = !0, a
		}
	}), _.ajaxPrefilter("json jsonp", function (b, c, d) {
		var e, f, g, h = b.jsonp !== !1 && (Hb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hb.test(b.data) && "data");
		return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = _.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hb, "$1" + e) : b.jsonp !== !1 && (b.url += (kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
			return g || _.error(e + " was not called"), g[0]
		}, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
			g = arguments
		}, d.always(function () {
			a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gb.push(e)), g && _.isFunction(f) && f(g[0]), g = f = void 0
		}), "script") : void 0
	}), _.parseHTML = function (a, b, c) {
		if (!a || "string" != typeof a) return null;
		"boolean" == typeof b && (c = b, b = !1), b = b || Z;
		var d = ga.exec(a),
			e = !c && [];
		return d ? [b.createElement(d[1])] : (d = _.buildFragment([a], b, e), e && e.length && _(e).remove(), _.merge([], d.childNodes))
	};
	var Ib = _.fn.load;
	_.fn.load = function (a, b, c) {
		if ("string" != typeof a && Ib) return Ib.apply(this, arguments);
		var d, e, f, g = this,
			h = a.indexOf(" ");
		return h >= 0 && (d = _.trim(a.slice(h)), a = a.slice(0, h)), _.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && _.ajax({
			url: a,
			type: e,
			dataType: "html",
			data: b
		}).done(function (a) {
			f = arguments, g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a)
		}).complete(c && function (a, b) {
			g.each(c, f || [a.responseText, b, a])
		}), this
	}, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
		_.fn[b] = function (a) {
			return this.on(b, a)
		}
	}), _.expr.filters.animated = function (a) {
		return _.grep(_.timers, function (b) {
			return a === b.elem
		}).length
	};
	var Jb = a.document.documentElement;
	_.offset = {
		setOffset: function (a, b, c) {
			var d, e, f, g, h, i, j, k = _.css(a, "position"),
				l = _(a),
				m = {};
			"static" === k && (a.style.position = "relative"), h = l.offset(), f = _.css(a, "top"), i = _.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), _.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
		}
	}, _.fn.extend({
		offset: function (a) {
			if (arguments.length) return void 0 === a ? this : this.each(function (b) {
				_.offset.setOffset(this, a, b)
			});
			var b, c, d = this[0],
				e = {
					top: 0,
					left: 0
				},
				f = d && d.ownerDocument;
			if (f) return b = f.documentElement, _.contains(b, d) ? (typeof d.getBoundingClientRect !== za && (e = d.getBoundingClientRect()), c = P(f), {
				top: e.top + c.pageYOffset - b.clientTop,
				left: e.left + c.pageXOffset - b.clientLeft
			}) : e
		},
		position: function () {
			if (this[0]) {
				var a, b, c = this[0],
					d = {
						top: 0,
						left: 0
					};
				return "fixed" === _.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), _.nodeName(a[0], "html") || (d = a.offset()), d.top += _.css(a[0], "borderTopWidth", !0), d.left += _.css(a[0], "borderLeftWidth", !0)), {
					top: b.top - d.top - _.css(c, "marginTop", !0),
					left: b.left - d.left - _.css(c, "marginLeft", !0)
				}
			}
		},
		offsetParent: function () {
			return this.map(function () {
				for (var a = this.offsetParent || Jb; a && !_.nodeName(a, "html") && "static" === _.css(a, "position");) a = a.offsetParent;
				return a || Jb
			})
		}
	}), _.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function (b, c) {
		var d = "pageYOffset" === c;
		_.fn[b] = function (e) {
			return qa(this, function (b, e, f) {
				var g = P(b);
				return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
			}, b, e, arguments.length, null)
		}
	}), _.each(["top", "left"], function (a, b) {
		_.cssHooks[b] = w(Y.pixelPosition, function (a, c) {
			return c ? (c = v(a, b), Qa.test(c) ? _(a).position()[b] + "px" : c) : void 0
		})
	}), _.each({
		Height: "height",
		Width: "width"
	}, function (a, b) {
		_.each({
			padding: "inner" + a,
			content: b,
			"": "outer" + a
		}, function (c, d) {
			_.fn[d] = function (d, e) {
				var f = arguments.length && (c || "boolean" != typeof d),
					g = c || (d === !0 || e === !0 ? "margin" : "border");
				return qa(this, function (b, c, d) {
					var e;
					return _.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? _.css(b, c, g) : _.style(b, c, d, g)
				}, b, f ? d : void 0, f, null)
			}
		})
	}), _.fn.size = function () {
		return this.length
	}, _.fn.andSelf = _.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
		return _
	});
	var Kb = a.jQuery,
		Lb = a.$;
	return _.noConflict = function (b) {
		return a.$ === _ && (a.$ = Lb), b && a.jQuery === _ && (a.jQuery = Kb), _
	}, typeof b === za && (a.jQuery = a.$ = _), _
});
var imgLiquid = imgLiquid || {
	VER: "0.9.944"
};
imgLiquid.bgs_Available = !1, imgLiquid.bgs_CheckRunned = !1, imgLiquid.injectCss = ".imgLiquid img {visibility:hidden}",
	function (a) {
		function b() {
			if (!imgLiquid.bgs_CheckRunned) {
				imgLiquid.bgs_CheckRunned = !0;
				var b = a('<span style="background-size:cover" />');
				a("body").append(b), ! function () {
					var a = b[0];
					if (a && window.getComputedStyle) {
						var c = window.getComputedStyle(a, null);
						c && c.backgroundSize && (imgLiquid.bgs_Available = "cover" === c.backgroundSize)
					}
				}(), b.remove()
			}
		}
		a.fn.extend({
			imgLiquid: function (c) {
				this.defaults = {
					fill: !0,
					verticalAlign: "center",
					horizontalAlign: "center",
					useBackgroundSize: !0,
					useDataHtmlAttr: !0,
					responsive: !0,
					delay: 0,
					fadeInTime: 0,
					removeBoxBackground: !0,
					hardPixels: !0,
					responsiveCheckTime: 500,
					timecheckvisibility: 500,
					onStart: null,
					onFinish: null,
					onItemStart: null,
					onItemFinish: null,
					onItemError: null
				}, b();
				var d = this;
				return this.options = c, this.settings = a.extend({}, this.defaults, this.options), this.settings.onStart && this.settings.onStart(), this.each(function (b) {
					function c() {
						-1 === l.css("background-image").indexOf(encodeURI(m.attr("src"))) && l.css({
							"background-image": 'url("' + encodeURI(m.attr("src")) + '")'
						}), l.css({
							"background-size": k.fill ? "cover" : "contain",
							"background-position": (k.horizontalAlign + " " + k.verticalAlign).toLowerCase(),
							"background-repeat": "no-repeat"
						}), a("a:first", l).css({
							display: "block",
							width: "100%",
							height: "100%"
						}), a("img", l).css({
							display: "none"
						}), k.onItemFinish && k.onItemFinish(b, l, m), l.addClass("imgLiquid_bgSize"), l.addClass("imgLiquid_ready"), j()
					}

					function e() {
						function c() {
							m.data("imgLiquid_error") || m.data("imgLiquid_loaded") || m.data("imgLiquid_oldProcessed") || (l.is(":visible") && m[0].complete && m[0].width > 0 && m[0].height > 0 ? (m.data("imgLiquid_loaded", !0), setTimeout(i, b * k.delay)) : setTimeout(c, k.timecheckvisibility))
						}
						if (m.data("oldSrc") && m.data("oldSrc") !== m.attr("src")) {
							var d = m.clone().removeAttr("style");
							return d.data("imgLiquid_settings", m.data("imgLiquid_settings")), m.parent().prepend(d), m.remove(), m = d, m[0].width = 0, void setTimeout(e, 10)
						}
						return m.data("imgLiquid_oldProcessed") ? void i() : (m.data("imgLiquid_oldProcessed", !1), m.data("oldSrc", m.attr("src")), a("img:not(:first)", l).css("display", "none"), l.css({
							overflow: "hidden"
						}), m.fadeTo(0, 0).removeAttr("width").removeAttr("height").css({
							visibility: "visible",
							"max-width": "none",
							"max-height": "none",
							width: "auto",
							height: "auto",
							display: "block"
						}), m.on("error", g), m[0].onerror = g, c(), void f())
					}

					function f() {
						(k.responsive || m.data("imgLiquid_oldProcessed")) && m.data("imgLiquid_settings") && (k = m.data("imgLiquid_settings"), l.actualSize = l.get(0).offsetWidth + l.get(0).offsetHeight / 1e4, l.sizeOld && l.actualSize !== l.sizeOld && i(), l.sizeOld = l.actualSize, setTimeout(f, k.responsiveCheckTime))
					}

					function g() {
						m.data("imgLiquid_error", !0), l.addClass("imgLiquid_error"), k.onItemError && k.onItemError(b, l, m), j()
					}

					function h() {
						var a = {};
						if (d.settings.useDataHtmlAttr) {
							var b = l.attr("data-imgLiquid-fill"),
								c = l.attr("data-imgLiquid-horizontalAlign"),
								e = l.attr("data-imgLiquid-verticalAlign");
							("true" === b || "false" === b) && (a.fill = Boolean("true" === b)), void 0 === c || "left" !== c && "center" !== c && "right" !== c && -1 === c.indexOf("%") || (a.horizontalAlign = c), void 0 === e || "top" !== e && "bottom" !== e && "center" !== e && -1 === e.indexOf("%") || (a.verticalAlign = e)
						}
						return imgLiquid.isIE && d.settings.ieFadeInDisabled && (a.fadeInTime = 0), a
					}

					function i() {
						var a, c, d, e, f, g, h, i, n = 0,
							o = 0,
							p = l.width(),
							q = l.height();
						void 0 === m.data("owidth") && m.data("owidth", m[0].width), void 0 === m.data("oheight") && m.data("oheight", m[0].height), k.fill === p / q >= m.data("owidth") / m.data("oheight") ? (a = "100%", c = "auto", d = Math.floor(p), e = Math.floor(p * (m.data("oheight") / m.data("owidth")))) : (a = "auto", c = "100%", d = Math.floor(q * (m.data("owidth") / m.data("oheight"))), e = Math.floor(q)), f = k.horizontalAlign.toLowerCase(), h = p - d, "left" === f && (o = 0), "center" === f && (o = .5 * h), "right" === f && (o = h), -1 !== f.indexOf("%") && (f = parseInt(f.replace("%", ""), 10), f > 0 && (o = h * f * .01)), g = k.verticalAlign.toLowerCase(), i = q - e, "left" === g && (n = 0), "center" === g && (n = .5 * i), "bottom" === g && (n = i), -1 !== g.indexOf("%") && (g = parseInt(g.replace("%", ""), 10), g > 0 && (n = i * g * .01)), k.hardPixels && (a = d, c = e), m.css({
							width: a,
							height: c,
							"margin-left": Math.floor(o),
							"margin-top": Math.floor(n)
						}), m.data("imgLiquid_oldProcessed") || (m.fadeTo(k.fadeInTime, 1), m.data("imgLiquid_oldProcessed", !0), k.removeBoxBackground && l.css("background-image", "none"), l.addClass("imgLiquid_nobgSize"), l.addClass("imgLiquid_ready")), k.onItemFinish && k.onItemFinish(b, l, m), j()
					}

					function j() {
						b === d.length - 1 && d.settings.onFinish && d.settings.onFinish()
					}
					var k = d.settings,
						l = a(this),
						m = a("img:first", l);
					return m.length ? (m.data("imgLiquid_settings") ? (l.removeClass("imgLiquid_error").removeClass("imgLiquid_ready"), k = a.extend({}, m.data("imgLiquid_settings"), d.options)) : k = a.extend({}, d.settings, h()), m.data("imgLiquid_settings", k), k.onItemStart && k.onItemStart(b, l, m), void(imgLiquid.bgs_Available && k.useBackgroundSize ? c() : e())) : void g()
				})
			}
		})
	}(jQuery), ! function () {
		var a = imgLiquid.injectCss,
			b = document.getElementsByTagName("head")[0],
			c = document.createElement("style");
		c.type = "text/css", c.styleSheet ? c.styleSheet.cssText = a : c.appendChild(document.createTextNode(a)), b.appendChild(c)
	}(),
	function (a) {
		function b() {}

		function c(a) {
			function c(b) {
				b.prototype.option || (b.prototype.option = function (b) {
					a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
				})
			}

			function e(b, c) {
				a.fn[b] = function (e) {
					if ("string" == typeof e) {
						for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
							var j = this[h],
								k = a.data(j, b);
							if (k)
								if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
									var l = k[e].apply(k, g);
									if (void 0 !== l) return l
								} else f("no such method '" + e + "' for " + b + " instance");
							else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'")
						}
						return this
					}
					return this.each(function () {
						var d = a.data(this, b);
						d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d))
					})
				}
			}
			if (a) {
				var f = "undefined" == typeof console ? b : function (a) {};
				return a.bridget = function (a, b) {
					c(b), e(a, b)
				}, a.bridget
			}
		}
		var d = Array.prototype.slice;
		"function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], c) : c("object" == typeof exports ? require("jquery") : a.jQuery)
	}(window),
	function (a) {
		function b(b) {
			var c = a.event;
			return c.target = c.target || c.srcElement || b, c
		}
		var c = document.documentElement,
			d = function () {};
		c.addEventListener ? d = function (a, b, c) {
			a.addEventListener(b, c, !1)
		} : c.attachEvent && (d = function (a, c, d) {
			a[c + d] = d.handleEvent ? function () {
				var c = b(a);
				d.handleEvent.call(d, c)
			} : function () {
				var c = b(a);
				d.call(a, c)
			}, a.attachEvent("on" + c, a[c + d])
		});
		var e = function () {};
		c.removeEventListener ? e = function (a, b, c) {
			a.removeEventListener(b, c, !1)
		} : c.detachEvent && (e = function (a, b, c) {
			a.detachEvent("on" + b, a[b + c]);
			try {
				delete a[b + c]
			} catch (d) {
				a[b + c] = void 0
			}
		});
		var f = {
			bind: d,
			unbind: e
		};
		"function" == typeof define && define.amd ? define("eventie/eventie", f) : "object" == typeof exports ? module.exports = f : a.eventie = f
	}(window),
	function () {
		"use strict";

		function a() {}

		function b(a, b) {
			for (var c = a.length; c--;)
				if (a[c].listener === b) return c;
			return -1
		}

		function c(a) {
			return function () {
				return this[a].apply(this, arguments)
			}
		}
		var d = a.prototype,
			e = this,
			f = e.EventEmitter;
		d.getListeners = function (a) {
			var b, c, d = this._getEvents();
			if (a instanceof RegExp) {
				b = {};
				for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
			} else b = d[a] || (d[a] = []);
			return b
		}, d.flattenListeners = function (a) {
			var b, c = [];
			for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
			return c
		}, d.getListenersAsObject = function (a) {
			var b, c = this.getListeners(a);
			return c instanceof Array && (b = {}, b[a] = c), b || c
		}, d.addListener = function (a, c) {
			var d, e = this.getListenersAsObject(a),
				f = "object" == typeof c;
			for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
				listener: c,
				once: !1
			});
			return this
		}, d.on = c("addListener"), d.addOnceListener = function (a, b) {
			return this.addListener(a, {
				listener: b,
				once: !0
			})
		}, d.once = c("addOnceListener"), d.defineEvent = function (a) {
			return this.getListeners(a), this
		}, d.defineEvents = function (a) {
			for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
			return this
		}, d.removeListener = function (a, c) {
			var d, e, f = this.getListenersAsObject(a);
			for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
			return this
		}, d.off = c("removeListener"), d.addListeners = function (a, b) {
			return this.manipulateListeners(!1, a, b)
		}, d.removeListeners = function (a, b) {
			return this.manipulateListeners(!0, a, b)
		}, d.manipulateListeners = function (a, b, c) {
			var d, e, f = a ? this.removeListener : this.addListener,
				g = a ? this.removeListeners : this.addListeners;
			if ("object" != typeof b || b instanceof RegExp)
				for (d = c.length; d--;) f.call(this, b, c[d]);
			else
				for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
			return this
		}, d.removeEvent = function (a) {
			var b, c = typeof a,
				d = this._getEvents();
			if ("string" === c) delete d[a];
			else if (a instanceof RegExp)
				for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
			else delete this._events;
			return this
		}, d.removeAllListeners = c("removeEvent"), d.emitEvent = function (a, b) {
			var c, d, e, f, g = this.getListenersAsObject(a);
			for (e in g)
				if (g.hasOwnProperty(e))
					for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
			return this
		}, d.trigger = c("emitEvent"), d.emit = function (a) {
			var b = Array.prototype.slice.call(arguments, 1);
			return this.emitEvent(a, b)
		}, d.setOnceReturnValue = function (a) {
			return this._onceReturnValue = a, this
		}, d._getOnceReturnValue = function () {
			return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
		}, d._getEvents = function () {
			return this._events || (this._events = {})
		}, a.noConflict = function () {
			return e.EventEmitter = f, a
		}, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
			return a
		}) : "object" == typeof module && module.exports ? module.exports = a : e.EventEmitter = a
	}.call(this),
	function (a) {
		function b(a) {
			if (a) {
				if ("string" == typeof d[a]) return a;
				a = a.charAt(0).toUpperCase() + a.slice(1);
				for (var b, e = 0, f = c.length; f > e; e++)
					if (b = c[e] + a, "string" == typeof d[b]) return b
			}
		}
		var c = "Webkit Moz ms Ms O".split(" "),
			d = document.documentElement.style;
		"function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function () {
			return b
		}) : "object" == typeof exports ? module.exports = b : a.getStyleProperty = b
	}(window),
	function (a) {
		function b(a) {
			var b = parseFloat(a),
				c = -1 === a.indexOf("%") && !isNaN(b);
			return c && b
		}

		function c() {}

		function d() {
			for (var a = {
					width: 0,
					height: 0,
					innerWidth: 0,
					innerHeight: 0,
					outerWidth: 0,
					outerHeight: 0
				}, b = 0, c = g.length; c > b; b++) {
				var d = g[b];
				a[d] = 0
			}
			return a
		}

		function e(c) {
			function e() {
				if (!m) {
					m = !0;
					var d = a.getComputedStyle;
					if (j = function () {
							var a = d ? function (a) {
								return d(a, null)
							} : function (a) {
								return a.currentStyle
							};
							return function (b) {
								var c = a(b);
								return c || f("Style returned " + c + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), c
							}
						}(), k = c("boxSizing")) {
						var e = document.createElement("div");
						e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style[k] = "border-box";
						var g = document.body || document.documentElement;
						g.appendChild(e);
						var h = j(e);
						l = 200 === b(h.width), g.removeChild(e)
					}
				}
			}

			function h(a) {
				if (e(), "string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) {
					var c = j(a);
					if ("none" === c.display) return d();
					var f = {};
					f.width = a.offsetWidth, f.height = a.offsetHeight;
					for (var h = f.isBorderBox = !(!k || !c[k] || "border-box" !== c[k]), m = 0, n = g.length; n > m; m++) {
						var o = g[m],
							p = c[o];
						p = i(a, p);
						var q = parseFloat(p);
						f[o] = isNaN(q) ? 0 : q
					}
					var r = f.paddingLeft + f.paddingRight,
						s = f.paddingTop + f.paddingBottom,
						t = f.marginLeft + f.marginRight,
						u = f.marginTop + f.marginBottom,
						v = f.borderLeftWidth + f.borderRightWidth,
						w = f.borderTopWidth + f.borderBottomWidth,
						x = h && l,
						y = b(c.width);
					y !== !1 && (f.width = y + (x ? 0 : r + v));
					var z = b(c.height);
					return z !== !1 && (f.height = z + (x ? 0 : s + w)), f.innerWidth = f.width - (r + v), f.innerHeight = f.height - (s + w), f.outerWidth = f.width + t, f.outerHeight = f.height + u, f
				}
			}

			function i(b, c) {
				if (a.getComputedStyle || -1 === c.indexOf("%")) return c;
				var d = b.style,
					e = d.left,
					f = b.runtimeStyle,
					g = f && f.left;

				return g && (f.left = b.currentStyle.left), d.left = c, c = d.pixelLeft, d.left = e, g && (f.left = g), c
			}
			var j, k, l, m = !1;
			return h
		}
		var f = "undefined" == typeof console ? c : function (a) {},
			g = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
		"function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], e) : "object" == typeof exports ? module.exports = e(require("desandro-get-style-property")) : a.getSize = e(a.getStyleProperty)
	}(window),
	function (a) {
		function b(a) {
			"function" == typeof a && (b.isReady ? a() : g.push(a))
		}

		function c(a) {
			var c = "readystatechange" === a.type && "complete" !== f.readyState;
			b.isReady || c || d()
		}

		function d() {
			b.isReady = !0;
			for (var a = 0, c = g.length; c > a; a++) {
				var d = g[a];
				d()
			}
		}

		function e(e) {
			return "complete" === f.readyState ? d() : (e.bind(f, "DOMContentLoaded", c), e.bind(f, "readystatechange", c), e.bind(a, "load", c)), b
		}
		var f = a.document,
			g = [];
		b.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], e) : "object" == typeof exports ? module.exports = e(require("eventie")) : a.docReady = e(a.eventie)
	}(window),
	function (a) {
		"use strict";

		function b(a, b) {
			return a[g](b)
		}

		function c(a) {
			if (!a.parentNode) {
				var b = document.createDocumentFragment();
				b.appendChild(a)
			}
		}

		function d(a, b) {
			c(a);
			for (var d = a.parentNode.querySelectorAll(b), e = 0, f = d.length; f > e; e++)
				if (d[e] === a) return !0;
			return !1
		}

		function e(a, d) {
			return c(a), b(a, d)
		}
		var f, g = function () {
			if (a.matches) return "matches";
			if (a.matchesSelector) return "matchesSelector";
			for (var b = ["webkit", "moz", "ms", "o"], c = 0, d = b.length; d > c; c++) {
				var e = b[c],
					f = e + "MatchesSelector";
				if (a[f]) return f
			}
		}();
		if (g) {
			var h = document.createElement("div"),
				i = b(h, "div");
			f = i ? b : e
		} else f = d;
		"function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function () {
			return f
		}) : "object" == typeof exports ? module.exports = f : window.matchesSelector = f
	}(Element.prototype),
	function (a, b) {
		"use strict";
		"function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function (c, d) {
			return b(a, c, d)
		}) : "object" == typeof exports ? module.exports = b(a, require("doc-ready"), require("desandro-matches-selector")) : a.fizzyUIUtils = b(a, a.docReady, a.matchesSelector)
	}(window, function (a, b, c) {
		var d = {};
		d.extend = function (a, b) {
			for (var c in b) a[c] = b[c];
			return a
		}, d.modulo = function (a, b) {
			return (a % b + b) % b
		};
		var e = Object.prototype.toString;
		d.isArray = function (a) {
			return "[object Array]" == e.call(a)
		}, d.makeArray = function (a) {
			var b = [];
			if (d.isArray(a)) b = a;
			else if (a && "number" == typeof a.length)
				for (var c = 0, e = a.length; e > c; c++) b.push(a[c]);
			else b.push(a);
			return b
		}, d.indexOf = Array.prototype.indexOf ? function (a, b) {
			return a.indexOf(b)
		} : function (a, b) {
			for (var c = 0, d = a.length; d > c; c++)
				if (a[c] === b) return c;
			return -1
		}, d.removeFrom = function (a, b) {
			var c = d.indexOf(a, b); - 1 != c && a.splice(c, 1)
		}, d.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function (a) {
			return a instanceof HTMLElement
		} : function (a) {
			return a && "object" == typeof a && 1 == a.nodeType && "string" == typeof a.nodeName
		}, d.setText = function () {
			function a(a, c) {
				b = b || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), a[b] = c
			}
			var b;
			return a
		}(), d.getParent = function (a, b) {
			for (; a != document.body;)
				if (a = a.parentNode, c(a, b)) return a
		}, d.getQueryElement = function (a) {
			return "string" == typeof a ? document.querySelector(a) : a
		}, d.handleEvent = function (a) {
			var b = "on" + a.type;
			this[b] && this[b](a)
		}, d.filterFindElements = function (a, b) {
			a = d.makeArray(a);
			for (var e = [], f = 0, g = a.length; g > f; f++) {
				var h = a[f];
				if (d.isElement(h))
					if (b) {
						c(h, b) && e.push(h);
						for (var i = h.querySelectorAll(b), j = 0, k = i.length; k > j; j++) e.push(i[j])
					} else e.push(h)
			}
			return e
		}, d.debounceMethod = function (a, b, c) {
			var d = a.prototype[b],
				e = b + "Timeout";
			a.prototype[b] = function () {
				var a = this[e];
				a && clearTimeout(a);
				var b = arguments,
					f = this;
				this[e] = setTimeout(function () {
					d.apply(f, b), delete f[e]
				}, c || 100)
			}
		}, d.toDashed = function (a) {
			return a.replace(/(.)([A-Z])/g, function (a, b, c) {
				return b + "-" + c
			}).toLowerCase()
		};
		var f = a.console;
		return d.htmlInit = function (c, e) {
			b(function () {
				for (var b = d.toDashed(e), g = document.querySelectorAll(".js-" + b), h = "data-" + b + "-options", i = 0, j = g.length; j > i; i++) {
					var k, l = g[i],
						m = l.getAttribute(h);
					try {
						k = m && JSON.parse(m)
					} catch (n) {
						f && f.error("Error parsing " + h + " on " + l.nodeName.toLowerCase() + (l.id ? "#" + l.id : "") + ": " + n);
						continue
					}
					var o = new c(l, k),
						p = a.jQuery;
					p && p.data(l, e, o)
				}
			})
		}, d
	}),
	function (a, b) {
		"use strict";
		"function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function (c, d, e, f) {
			return b(a, c, d, e, f)
		}) : "object" == typeof exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (a.Outlayer = {}, a.Outlayer.Item = b(a, a.EventEmitter, a.getSize, a.getStyleProperty, a.fizzyUIUtils))
	}(window, function (a, b, c, d, e) {
		"use strict";

		function f(a) {
			for (var b in a) return !1;
			return b = null, !0
		}

		function g(a, b) {
			a && (this.element = a, this.layout = b, this.position = {
				x: 0,
				y: 0
			}, this._create())
		}

		function h(a) {
			return a.replace(/([A-Z])/g, function (a) {
				return "-" + a.toLowerCase()
			})
		}
		var i = a.getComputedStyle,
			j = i ? function (a) {
				return i(a, null)
			} : function (a) {
				return a.currentStyle
			},
			k = d("transition"),
			l = d("transform"),
			m = k && l,
			n = !!d("perspective"),
			o = {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "otransitionend",
				transition: "transitionend"
			}[k],
			p = ["transform", "transition", "transitionDuration", "transitionProperty"],
			q = function () {
				for (var a = {}, b = 0, c = p.length; c > b; b++) {
					var e = p[b],
						f = d(e);
					f && f !== e && (a[e] = f)
				}
				return a
			}();
		e.extend(g.prototype, b.prototype), g.prototype._create = function () {
			this._transn = {
				ingProperties: {},
				clean: {},
				onEnd: {}
			}, this.css({
				position: "absolute"
			})
		}, g.prototype.handleEvent = function (a) {
			var b = "on" + a.type;
			this[b] && this[b](a)
		}, g.prototype.getSize = function () {
			this.size = c(this.element)
		}, g.prototype.css = function (a) {
			var b = this.element.style;
			for (var c in a) {
				var d = q[c] || c;
				b[d] = a[c]
			}
		}, g.prototype.getPosition = function () {
			var a = j(this.element),
				b = this.layout.options,
				c = b.isOriginLeft,
				d = b.isOriginTop,
				e = a[c ? "left" : "right"],
				f = a[d ? "top" : "bottom"],
				g = this.layout.size,
				h = -1 != e.indexOf("%") ? parseFloat(e) / 100 * g.width : parseInt(e, 10),
				i = -1 != f.indexOf("%") ? parseFloat(f) / 100 * g.height : parseInt(f, 10);
			h = isNaN(h) ? 0 : h, i = isNaN(i) ? 0 : i, h -= c ? g.paddingLeft : g.paddingRight, i -= d ? g.paddingTop : g.paddingBottom, this.position.x = h, this.position.y = i
		}, g.prototype.layoutPosition = function () {
			var a = this.layout.size,
				b = this.layout.options,
				c = {},
				d = b.isOriginLeft ? "paddingLeft" : "paddingRight",
				e = b.isOriginLeft ? "left" : "right",
				f = b.isOriginLeft ? "right" : "left",
				g = this.position.x + a[d];
			c[e] = this.getXValue(g), c[f] = "";
			var h = b.isOriginTop ? "paddingTop" : "paddingBottom",
				i = b.isOriginTop ? "top" : "bottom",
				j = b.isOriginTop ? "bottom" : "top",
				k = this.position.y + a[h];
			c[i] = this.getYValue(k), c[j] = "", this.css(c), this.emitEvent("layout", [this])
		}, g.prototype.getXValue = function (a) {
			var b = this.layout.options;
			return b.percentPosition && !b.isHorizontal ? a / this.layout.size.width * 100 + "%" : a + "px"
		}, g.prototype.getYValue = function (a) {
			var b = this.layout.options;
			return b.percentPosition && b.isHorizontal ? a / this.layout.size.height * 100 + "%" : a + "px"
		}, g.prototype._transitionTo = function (a, b) {
			this.getPosition();
			var c = this.position.x,
				d = this.position.y,
				e = parseInt(a, 10),
				f = parseInt(b, 10),
				g = e === this.position.x && f === this.position.y;
			if (this.setPosition(a, b), g && !this.isTransitioning) return void this.layoutPosition();
			var h = a - c,
				i = b - d,
				j = {};
			j.transform = this.getTranslate(h, i), this.transition({
				to: j,
				onTransitionEnd: {
					transform: this.layoutPosition
				},
				isCleaning: !0
			})
		}, g.prototype.getTranslate = function (a, b) {
			var c = this.layout.options;
			return a = c.isOriginLeft ? a : -a, b = c.isOriginTop ? b : -b, n ? "translate3d(" + a + "px, " + b + "px, 0)" : "translate(" + a + "px, " + b + "px)"
		}, g.prototype.goTo = function (a, b) {
			this.setPosition(a, b), this.layoutPosition()
		}, g.prototype.moveTo = m ? g.prototype._transitionTo : g.prototype.goTo, g.prototype.setPosition = function (a, b) {
			this.position.x = parseInt(a, 10), this.position.y = parseInt(b, 10)
		}, g.prototype._nonTransition = function (a) {
			this.css(a.to), a.isCleaning && this._removeStyles(a.to);
			for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this)
		}, g.prototype._transition = function (a) {
			if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(a);
			var b = this._transn;
			for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c];
			for (c in a.to) b.ingProperties[c] = !0, a.isCleaning && (b.clean[c] = !0);
			if (a.from) {
				this.css(a.from);
				var d = this.element.offsetHeight;
				d = null
			}
			this.enableTransition(a.to), this.css(a.to), this.isTransitioning = !0
		};
		var r = "opacity," + h(q.transform || "transform");
		g.prototype.enableTransition = function () {
			this.isTransitioning || (this.css({
				transitionProperty: r,
				transitionDuration: this.layout.options.transitionDuration
			}), this.element.addEventListener(o, this, !1))
		}, g.prototype.transition = g.prototype[k ? "_transition" : "_nonTransition"], g.prototype.onwebkitTransitionEnd = function (a) {
			this.ontransitionend(a)
		}, g.prototype.onotransitionend = function (a) {
			this.ontransitionend(a)
		};
		var s = {
			"-webkit-transform": "transform",
			"-moz-transform": "transform",
			"-o-transform": "transform"
		};
		g.prototype.ontransitionend = function (a) {
			if (a.target === this.element) {
				var b = this._transn,
					c = s[a.propertyName] || a.propertyName;
				if (delete b.ingProperties[c], f(b.ingProperties) && this.disableTransition(), c in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[c]), c in b.onEnd) {
					var d = b.onEnd[c];
					d.call(this), delete b.onEnd[c]
				}
				this.emitEvent("transitionEnd", [this])
			}
		}, g.prototype.disableTransition = function () {
			this.removeTransitionStyles(), this.element.removeEventListener(o, this, !1), this.isTransitioning = !1
		}, g.prototype._removeStyles = function (a) {
			var b = {};
			for (var c in a) b[c] = "";
			this.css(b)
		};
		var t = {
			transitionProperty: "",
			transitionDuration: ""
		};
		return g.prototype.removeTransitionStyles = function () {
			this.css(t)
		}, g.prototype.removeElem = function () {
			this.element.parentNode.removeChild(this.element), this.css({
				display: ""
			}), this.emitEvent("remove", [this])
		}, g.prototype.remove = function () {
			if (!k || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
			var a = this;
			this.once("transitionEnd", function () {
				a.removeElem()
			}), this.hide()
		}, g.prototype.reveal = function () {
			delete this.isHidden, this.css({
				display: ""
			});
			var a = this.layout.options,
				b = {},
				c = this.getHideRevealTransitionEndProperty("visibleStyle");
			b[c] = this.onRevealTransitionEnd, this.transition({
				from: a.hiddenStyle,
				to: a.visibleStyle,
				isCleaning: !0,
				onTransitionEnd: b
			})
		}, g.prototype.onRevealTransitionEnd = function () {
			this.isHidden || this.emitEvent("reveal")
		}, g.prototype.getHideRevealTransitionEndProperty = function (a) {
			var b = this.layout.options[a];
			if (b.opacity) return "opacity";
			for (var c in b) return c
		}, g.prototype.hide = function () {
			this.isHidden = !0, this.css({
				display: ""
			});
			var a = this.layout.options,
				b = {},
				c = this.getHideRevealTransitionEndProperty("hiddenStyle");
			b[c] = this.onHideTransitionEnd, this.transition({
				from: a.visibleStyle,
				to: a.hiddenStyle,
				isCleaning: !0,
				onTransitionEnd: b
			})
		}, g.prototype.onHideTransitionEnd = function () {
			this.isHidden && (this.css({
				display: "none"
			}), this.emitEvent("hide"))
		}, g.prototype.destroy = function () {
			this.css({
				position: "",
				left: "",
				right: "",
				top: "",
				bottom: "",
				transition: "",
				transform: ""
			})
		}, g
	}),
	function (a, b) {
		"use strict";
		"function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (c, d, e, f, g) {
			return b(a, c, d, e, f, g)
		}) : "object" == typeof exports ? module.exports = b(a, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : a.Outlayer = b(a, a.eventie, a.EventEmitter, a.getSize, a.fizzyUIUtils, a.Outlayer.Item)
	}(window, function (a, b, c, d, e, f) {
		"use strict";

		function g(a, b) {
			var c = e.getQueryElement(a);
			if (!c) return void(h && h.error("Bad element for " + this.constructor.namespace + ": " + (c || a)));
			this.element = c, i && (this.$element = i(this.element)), this.options = e.extend({}, this.constructor.defaults), this.option(b);
			var d = ++k;
			this.element.outlayerGUID = d, l[d] = this, this._create(), this.options.isInitLayout && this.layout()
		}
		var h = a.console,
			i = a.jQuery,
			j = function () {},
			k = 0,
			l = {};
		return g.namespace = "outlayer", g.Item = f, g.defaults = {
			containerStyle: {
				position: "relative"
			},
			isInitLayout: !0,
			isOriginLeft: !0,
			isOriginTop: !0,
			isResizeBound: !0,
			isResizingContainer: !0,
			transitionDuration: "0.4s",
			hiddenStyle: {
				opacity: 0,
				transform: "scale(0.001)"
			},
			visibleStyle: {
				opacity: 1,
				transform: "scale(1)"
			}
		}, e.extend(g.prototype, c.prototype), g.prototype.option = function (a) {
			e.extend(this.options, a)
		}, g.prototype._create = function () {
			this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
		}, g.prototype.reloadItems = function () {
			this.items = this._itemize(this.element.children)
		}, g.prototype._itemize = function (a) {
			for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) {
				var g = b[e],
					h = new c(g, this);
				d.push(h)
			}
			return d
		}, g.prototype._filterFindItemElements = function (a) {
			return e.filterFindElements(a, this.options.itemSelector)
		}, g.prototype.getItemElements = function () {
			for (var a = [], b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].element);
			return a
		}, g.prototype.layout = function () {
			this._resetLayout(), this._manageStamps();
			var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
			this.layoutItems(this.items, a), this._isLayoutInited = !0
		}, g.prototype._init = g.prototype.layout, g.prototype._resetLayout = function () {
			this.getSize()
		}, g.prototype.getSize = function () {
			this.size = d(this.element)
		}, g.prototype._getMeasurement = function (a, b) {
			var c, f = this.options[a];
			f ? ("string" == typeof f ? c = this.element.querySelector(f) : e.isElement(f) && (c = f), this[a] = c ? d(c)[b] : f) : this[a] = 0
		}, g.prototype.layoutItems = function (a, b) {
			a = this._getItemsForLayout(a), this._layoutItems(a, b), this._postLayout()
		}, g.prototype._getItemsForLayout = function (a) {
			for (var b = [], c = 0, d = a.length; d > c; c++) {
				var e = a[c];
				e.isIgnored || b.push(e)
			}
			return b
		}, g.prototype._layoutItems = function (a, b) {
			if (this._emitCompleteOnItems("layout", a), a && a.length) {
				for (var c = [], d = 0, e = a.length; e > d; d++) {
					var f = a[d],
						g = this._getItemLayoutPosition(f);
					g.item = f, g.isInstant = b || f.isLayoutInstant, c.push(g)
				}
				this._processLayoutQueue(c)
			}
		}, g.prototype._getItemLayoutPosition = function () {
			return {
				x: 0,
				y: 0
			}
		}, g.prototype._processLayoutQueue = function (a) {
			for (var b = 0, c = a.length; c > b; b++) {
				var d = a[b];
				this._positionItem(d.item, d.x, d.y, d.isInstant)
			}
		}, g.prototype._positionItem = function (a, b, c, d) {
			d ? a.goTo(b, c) : a.moveTo(b, c)
		}, g.prototype._postLayout = function () {
			this.resizeContainer()
		}, g.prototype.resizeContainer = function () {
			if (this.options.isResizingContainer) {
				var a = this._getContainerSize();
				a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1))
			}
		}, g.prototype._getContainerSize = j, g.prototype._setContainerMeasure = function (a, b) {
			if (void 0 !== a) {
				var c = this.size;
				c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth), a = Math.max(a, 0), this.element.style[b ? "width" : "height"] = a + "px"
			}
		}, g.prototype._emitCompleteOnItems = function (a, b) {
			function c() {
				e.dispatchEvent(a + "Complete", null, [b])
			}

			function d() {
				g++, g === f && c()
			}
			var e = this,
				f = b.length;
			if (!b || !f) return void c();
			for (var g = 0, h = 0, i = b.length; i > h; h++) {
				var j = b[h];
				j.once(a, d)
			}
		}, g.prototype.dispatchEvent = function (a, b, c) {
			var d = b ? [b].concat(c) : c;
			if (this.emitEvent(a, d), i)
				if (this.$element = this.$element || i(this.element), b) {
					var e = i.Event(b);
					e.type = a, this.$element.trigger(e, c)
				} else this.$element.trigger(a, c)
		}, g.prototype.ignore = function (a) {
			var b = this.getItem(a);
			b && (b.isIgnored = !0)
		}, g.prototype.unignore = function (a) {
			var b = this.getItem(a);
			b && delete b.isIgnored
		}, g.prototype.stamp = function (a) {
			if (a = this._find(a)) {
				this.stamps = this.stamps.concat(a);
				for (var b = 0, c = a.length; c > b; b++) {
					var d = a[b];
					this.ignore(d)
				}
			}
		}, g.prototype.unstamp = function (a) {
			if (a = this._find(a))
				for (var b = 0, c = a.length; c > b; b++) {
					var d = a[b];
					e.removeFrom(this.stamps, d), this.unignore(d)
				}
		}, g.prototype._find = function (a) {
			return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = e.makeArray(a)) : void 0
		}, g.prototype._manageStamps = function () {
			if (this.stamps && this.stamps.length) {
				this._getBoundingRect();
				for (var a = 0, b = this.stamps.length; b > a; a++) {
					var c = this.stamps[a];
					this._manageStamp(c)
				}
			}
		}, g.prototype._getBoundingRect = function () {
			var a = this.element.getBoundingClientRect(),
				b = this.size;
			this._boundingRect = {
				left: a.left + b.paddingLeft + b.borderLeftWidth,
				top: a.top + b.paddingTop + b.borderTopWidth,
				right: a.right - (b.paddingRight + b.borderRightWidth),
				bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
			}
		}, g.prototype._manageStamp = j, g.prototype._getElementOffset = function (a) {
			var b = a.getBoundingClientRect(),
				c = this._boundingRect,
				e = d(a),
				f = {
					left: b.left - c.left - e.marginLeft,
					top: b.top - c.top - e.marginTop,
					right: c.right - b.right - e.marginRight,
					bottom: c.bottom - b.bottom - e.marginBottom
				};
			return f
		}, g.prototype.handleEvent = function (a) {
			var b = "on" + a.type;
			this[b] && this[b](a)
		}, g.prototype.bindResize = function () {
			this.isResizeBound || (b.bind(a, "resize", this), this.isResizeBound = !0)
		}, g.prototype.unbindResize = function () {
			this.isResizeBound && b.unbind(a, "resize", this), this.isResizeBound = !1
		}, g.prototype.onresize = function () {
			function a() {
				b.resize(), delete b.resizeTimeout
			}
			this.resizeTimeout && clearTimeout(this.resizeTimeout);
			var b = this;
			this.resizeTimeout = setTimeout(a, 100)
		}, g.prototype.resize = function () {
			this.isResizeBound && this.needsResizeLayout() && this.layout()
		}, g.prototype.needsResizeLayout = function () {
			var a = d(this.element),
				b = this.size && a;
			return b && a.innerWidth !== this.size.innerWidth
		}, g.prototype.addItems = function (a) {
			var b = this._itemize(a);
			return b.length && (this.items = this.items.concat(b)), b
		}, g.prototype.appended = function (a) {
			var b = this.addItems(a);
			b.length && (this.layoutItems(b, !0), this.reveal(b))
		}, g.prototype.prepended = function (a) {
			var b = this._itemize(a);
			if (b.length) {
				var c = this.items.slice(0);
				this.items = b.concat(c), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c)
			}
		}, g.prototype.reveal = function (a) {
			this._emitCompleteOnItems("reveal", a);
			for (var b = a && a.length, c = 0; b && b > c; c++) {
				var d = a[c];
				d.reveal()
			}
		}, g.prototype.hide = function (a) {
			this._emitCompleteOnItems("hide", a);
			for (var b = a && a.length, c = 0; b && b > c; c++) {
				var d = a[c];
				d.hide()
			}
		}, g.prototype.revealItemElements = function (a) {
			var b = this.getItems(a);
			this.reveal(b)
		}, g.prototype.hideItemElements = function (a) {
			var b = this.getItems(a);
			this.hide(b)
		}, g.prototype.getItem = function (a) {
			for (var b = 0, c = this.items.length; c > b; b++) {
				var d = this.items[b];
				if (d.element === a) return d
			}
		}, g.prototype.getItems = function (a) {
			a = e.makeArray(a);
			for (var b = [], c = 0, d = a.length; d > c; c++) {
				var f = a[c],
					g = this.getItem(f);
				g && b.push(g)
			}
			return b
		}, g.prototype.remove = function (a) {
			var b = this.getItems(a);
			if (this._emitCompleteOnItems("remove", b), b && b.length)
				for (var c = 0, d = b.length; d > c; c++) {
					var f = b[c];
					f.remove(), e.removeFrom(this.items, f)
				}
		}, g.prototype.destroy = function () {
			var a = this.element.style;
			a.height = "", a.position = "", a.width = "";
			for (var b = 0, c = this.items.length; c > b; b++) {
				var d = this.items[b];
				d.destroy()
			}
			this.unbindResize();
			var e = this.element.outlayerGUID;
			delete l[e], delete this.element.outlayerGUID, i && i.removeData(this.element, this.constructor.namespace)
		}, g.data = function (a) {
			a = e.getQueryElement(a);
			var b = a && a.outlayerGUID;
			return b && l[b]
		}, g.create = function (a, b) {
			function c() {
				g.apply(this, arguments)
			}
			return Object.create ? c.prototype = Object.create(g.prototype) : e.extend(c.prototype, g.prototype), c.prototype.constructor = c, c.defaults = e.extend({}, g.defaults), e.extend(c.defaults, b), c.prototype.settings = {}, c.namespace = a, c.data = g.data, c.Item = function () {
				f.apply(this, arguments)
			}, c.Item.prototype = new f, e.htmlInit(c, a), i && i.bridget && i.bridget(a, c), c
		}, g.Item = f, g
	}),
	function (a, b) {
		"use strict";
		"function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.Item = b(a.Outlayer))
	}(window, function (a) {
		"use strict";

		function b() {
			a.Item.apply(this, arguments)
		}
		b.prototype = new a.Item, b.prototype._create = function () {
			this.id = this.layout.itemGUID++, a.Item.prototype._create.call(this), this.sortData = {}
		}, b.prototype.updateSortData = function () {
			if (!this.isIgnored) {
				this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
				var a = this.layout.options.getSortData,
					b = this.layout._sorters;
				for (var c in a) {
					var d = b[c];
					this.sortData[c] = d(this.element, this)
				}
			}
		};
		var c = b.prototype.destroy;
		return b.prototype.destroy = function () {
			c.apply(this, arguments), this.css({
				display: ""
			})
		}, b
	}),
	function (a, b) {
		"use strict";
		"function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("get-size"), require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.LayoutMode = b(a.getSize, a.Outlayer))
	}(window, function (a, b) {
		"use strict";

		function c(a) {
			this.isotope = a, a && (this.options = a.options[this.namespace], this.element = a.element, this.items = a.filteredItems, this.size = a.size)
		}
		return function () {
			function a(a) {
				return function () {
					return b.prototype[a].apply(this.isotope, arguments)
				}
			}
			for (var d = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], e = 0, f = d.length; f > e; e++) {
				var g = d[e];
				c.prototype[g] = a(g)
			}
		}(), c.prototype.needsVerticalResizeLayout = function () {
			var b = a(this.isotope.element),
				c = this.isotope.size && b;
			return c && b.innerHeight != this.isotope.size.innerHeight
		}, c.prototype._getMeasurement = function () {
			this.isotope._getMeasurement.apply(this, arguments)
		}, c.prototype.getColumnWidth = function () {
			this.getSegmentSize("column", "Width")
		}, c.prototype.getRowHeight = function () {
			this.getSegmentSize("row", "Height")
		}, c.prototype.getSegmentSize = function (a, b) {
			var c = a + b,
				d = "outer" + b;
			if (this._getMeasurement(c, d), !this[c]) {
				var e = this.getFirstItemSize();
				this[c] = e && e[d] || this.isotope.size["inner" + b]
			}
		}, c.prototype.getFirstItemSize = function () {
			var b = this.isotope.filteredItems[0];
			return b && b.element && a(b.element)
		}, c.prototype.layout = function () {
			this.isotope.layout.apply(this.isotope, arguments)
		}, c.prototype.getSize = function () {
			this.isotope.getSize(), this.size = this.isotope.size
		}, c.modes = {}, c.create = function (a, b) {
			function d() {
				c.apply(this, arguments)
			}
			return d.prototype = new c, b && (d.options = b), d.prototype.namespace = a, c.modes[a] = d, d
		}, c
	}),
	function (a, b) {
		"use strict";
		"function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], b) : "object" == typeof exports ? module.exports = b(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : a.Masonry = b(a.Outlayer, a.getSize, a.fizzyUIUtils)
	}(window, function (a, b, c) {
		var d = a.create("masonry");
		return d.prototype._resetLayout = function () {
			this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
			var a = this.cols;
			for (this.colYs = []; a--;) this.colYs.push(0);
			this.maxY = 0
		}, d.prototype.measureColumns = function () {
			if (this.getContainerWidth(), !this.columnWidth) {
				var a = this.items[0],
					c = a && a.element;
				this.columnWidth = c && b(c).outerWidth || this.containerWidth
			}
			var d = this.columnWidth += this.gutter,
				e = this.containerWidth + this.gutter,
				f = e / d,
				g = d - e % d,
				h = g && 1 > g ? "round" : "floor";
			f = Math[h](f), this.cols = Math.max(f, 1)
		}, d.prototype.getContainerWidth = function () {
			var a = this.options.isFitWidth ? this.element.parentNode : this.element,
				c = b(a);
			this.containerWidth = c && c.innerWidth
		}, d.prototype._getItemLayoutPosition = function (a) {
			a.getSize();
			var b = a.size.outerWidth % this.columnWidth,
				d = b && 1 > b ? "round" : "ceil",
				e = Math[d](a.size.outerWidth / this.columnWidth);
			e = Math.min(e, this.cols);
			for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c.indexOf(f, g), i = {
					x: this.columnWidth * h,
					y: g
				}, j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++) this.colYs[h + l] = j;
			return i
		}, d.prototype._getColGroup = function (a) {
			if (2 > a) return this.colYs;
			for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
				var e = this.colYs.slice(d, d + a);
				b[d] = Math.max.apply(Math, e)
			}
			return b
		}, d.prototype._manageStamp = function (a) {
			var c = b(a),
				d = this._getElementOffset(a),
				e = this.options.isOriginLeft ? d.left : d.right,
				f = e + c.outerWidth,
				g = Math.floor(e / this.columnWidth);
			g = Math.max(0, g);
			var h = Math.floor(f / this.columnWidth);
			h -= f % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
			for (var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight, j = g; h >= j; j++) this.colYs[j] = Math.max(i, this.colYs[j])
		}, d.prototype._getContainerSize = function () {
			this.maxY = Math.max.apply(Math, this.colYs);
			var a = {
				height: this.maxY
			};
			return this.options.isFitWidth && (a.width = this._getContainerFitWidth()), a
		}, d.prototype._getContainerFitWidth = function () {
			for (var a = 0, b = this.cols; --b && 0 === this.colYs[b];) a++;
			return (this.cols - a) * this.columnWidth - this.gutter
		}, d.prototype.needsResizeLayout = function () {
			var a = this.containerWidth;
			return this.getContainerWidth(), a !== this.containerWidth
		}, d
	}),
	function (a, b) {
		"use strict";
		"function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode"), require("masonry-layout")) : b(a.Isotope.LayoutMode, a.Masonry)
	}(window, function (a, b) {
		"use strict";

		function c(a, b) {
			for (var c in b) a[c] = b[c];
			return a
		}
		var d = a.create("masonry"),
			e = d.prototype._getElementOffset,
			f = d.prototype.layout,
			g = d.prototype._getMeasurement;
		c(d.prototype, b.prototype), d.prototype._getElementOffset = e, d.prototype.layout = f, d.prototype._getMeasurement = g;
		var h = d.prototype.measureColumns;
		d.prototype.measureColumns = function () {
			this.items = this.isotope.filteredItems, h.call(this)
		};
		var i = d.prototype._manageStamp;
		return d.prototype._manageStamp = function () {
			this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, i.apply(this, arguments)
		}, d
	}),
	function (a, b) {
		"use strict";
		"function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
	}(window, function (a) {
		"use strict";
		var b = a.create("fitRows");
		return b.prototype._resetLayout = function () {
			this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
		}, b.prototype._getItemLayoutPosition = function (a) {
			a.getSize();
			var b = a.size.outerWidth + this.gutter,
				c = this.isotope.size.innerWidth + this.gutter;
			0 !== this.x && b + this.x > c && (this.x = 0, this.y = this.maxY);
			var d = {
				x: this.x,
				y: this.y
			};
			return this.maxY = Math.max(this.maxY, this.y + a.size.outerHeight), this.x += b, d
		}, b.prototype._getContainerSize = function () {
			return {
				height: this.maxY
			}
		}, b
	}),
	function (a, b) {
		"use strict";
		"function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
	}(window, function (a) {
		"use strict";
		var b = a.create("vertical", {
			horizontalAlignment: 0
		});
		return b.prototype._resetLayout = function () {
			this.y = 0
		}, b.prototype._getItemLayoutPosition = function (a) {
			a.getSize();
			var b = (this.isotope.size.innerWidth - a.size.outerWidth) * this.options.horizontalAlignment,
				c = this.y;
			return this.y += a.size.outerHeight, {
				x: b,
				y: c
			}
		}, b.prototype._getContainerSize = function () {
			return {
				height: this.y
			}
		}, b
	}),
	function (a, b) {
		"use strict";
		"function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function (c, d, e, f, g, h) {
			return b(a, c, d, e, f, g, h)
		}) : "object" == typeof exports ? module.exports = b(a, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : a.Isotope = b(a, a.Outlayer, a.getSize, a.matchesSelector, a.fizzyUIUtils, a.Isotope.Item, a.Isotope.LayoutMode)
	}(window, function (a, b, c, d, e, f, g) {
		function h(a, b) {
			return function (c, d) {
				for (var e = 0, f = a.length; f > e; e++) {
					var g = a[e],
						h = c.sortData[g],
						i = d.sortData[g];
					if (h > i || i > h) {
						var j = void 0 !== b[g] ? b[g] : b,
							k = j ? 1 : -1;
						return (h > i ? 1 : -1) * k
					}
				}
				return 0
			}
		}
		var i = a.jQuery,
			j = String.prototype.trim ? function (a) {
				return a.trim()
			} : function (a) {
				return a.replace(/^\s+|\s+$/g, "")
			},
			k = document.documentElement,
			l = k.textContent ? function (a) {
				return a.textContent
			} : function (a) {
				return a.innerText
			},
			m = b.create("isotope", {
				layoutMode: "masonry",
				isJQueryFiltering: !0,
				sortAscending: !0
			});
		m.Item = f, m.LayoutMode = g, m.prototype._create = function () {
			this.itemGUID = 0, this._sorters = {}, this._getSorters(), b.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
			for (var a in g.modes) this._initLayoutMode(a)
		}, m.prototype.reloadItems = function () {
			this.itemGUID = 0, b.prototype.reloadItems.call(this)
		}, m.prototype._itemize = function () {
			for (var a = b.prototype._itemize.apply(this, arguments), c = 0, d = a.length; d > c; c++) {
				var e = a[c];
				e.id = this.itemGUID++
			}
			return this._updateItemsSortData(a), a
		}, m.prototype._initLayoutMode = function (a) {
			var b = g.modes[a],
				c = this.options[a] || {};
			this.options[a] = b.options ? e.extend(b.options, c) : c, this.modes[a] = new b(this)
		}, m.prototype.layout = function () {
			return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
		}, m.prototype._layout = function () {
			var a = this._getIsInstant();
			this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, a), this._isLayoutInited = !0
		}, m.prototype.arrange = function (a) {
			function b() {
				d.reveal(c.needReveal), d.hide(c.needHide)
			}
			this.option(a), this._getIsInstant();
			var c = this._filter(this.items);
			this.filteredItems = c.matches;
			var d = this;
			this._bindArrangeComplete(), this._isInstant ? this._noTransition(b) : b(), this._sort(), this._layout()
		}, m.prototype._init = m.prototype.arrange, m.prototype._getIsInstant = function () {
			var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
			return this._isInstant = a, a
		}, m.prototype._bindArrangeComplete = function () {
			function a() {
				b && c && d && e.dispatchEvent("arrangeComplete", null, [e.filteredItems])
			}
			var b, c, d, e = this;
			this.once("layoutComplete", function () {
				b = !0, a()
			}), this.once("hideComplete", function () {
				c = !0, a()
			}), this.once("revealComplete", function () {
				d = !0, a()
			})
		}, m.prototype._filter = function (a) {
			var b = this.options.filter;
			b = b || "*";
			for (var c = [], d = [], e = [], f = this._getFilterTest(b), g = 0, h = a.length; h > g; g++) {
				var i = a[g];
				if (!i.isIgnored) {
					var j = f(i);
					j && c.push(i), j && i.isHidden ? d.push(i) : j || i.isHidden || e.push(i)
				}
			}
			return {
				matches: c,
				needReveal: d,
				needHide: e
			}
		}, m.prototype._getFilterTest = function (a) {
			return i && this.options.isJQueryFiltering ? function (b) {
				return i(b.element).is(a)
			} : "function" == typeof a ? function (b) {
				return a(b.element)
			} : function (b) {
				return d(b.element, a)
			}
		}, m.prototype.updateSortData = function (a) {
			var b;
			a ? (a = e.makeArray(a), b = this.getItems(a)) : b = this.items, this._getSorters(), this._updateItemsSortData(b)
		}, m.prototype._getSorters = function () {
			var a = this.options.getSortData;
			for (var b in a) {
				var c = a[b];
				this._sorters[b] = n(c)
			}
		}, m.prototype._updateItemsSortData = function (a) {
			for (var b = a && a.length, c = 0; b && b > c; c++) {
				var d = a[c];
				d.updateSortData()
			}
		};
		var n = function () {
			function a(a) {
				if ("string" != typeof a) return a;
				var c = j(a).split(" "),
					d = c[0],
					e = d.match(/^\[(.+)\]$/),
					f = e && e[1],
					g = b(f, d),
					h = m.sortDataParsers[c[1]];
				return a = h ? function (a) {
					return a && h(g(a))
				} : function (a) {
					return a && g(a)
				}
			}

			function b(a, b) {
				var c;
				return c = a ? function (b) {
					return b.getAttribute(a)
				} : function (a) {
					var c = a.querySelector(b);
					return c && l(c)
				}
			}
			return a
		}();
		m.sortDataParsers = {
			parseInt: function (a) {
				return parseInt(a, 10)
			},
			parseFloat: function (a) {
				return parseFloat(a)
			}
		}, m.prototype._sort = function () {
			var a = this.options.sortBy;
			if (a) {
				var b = [].concat.apply(a, this.sortHistory),
					c = h(b, this.options.sortAscending);
				this.filteredItems.sort(c), a != this.sortHistory[0] && this.sortHistory.unshift(a)
			}
		}, m.prototype._mode = function () {
			var a = this.options.layoutMode,
				b = this.modes[a];
			if (!b) throw new Error("No layout mode: " + a);
			return b.options = this.options[a], b
		}, m.prototype._resetLayout = function () {
			b.prototype._resetLayout.call(this), this._mode()._resetLayout()
		}, m.prototype._getItemLayoutPosition = function (a) {
			return this._mode()._getItemLayoutPosition(a)
		}, m.prototype._manageStamp = function (a) {
			this._mode()._manageStamp(a)
		}, m.prototype._getContainerSize = function () {
			return this._mode()._getContainerSize()
		}, m.prototype.needsResizeLayout = function () {
			return this._mode().needsResizeLayout()
		}, m.prototype.appended = function (a) {
			var b = this.addItems(a);
			if (b.length) {
				var c = this._filterRevealAdded(b);
				this.filteredItems = this.filteredItems.concat(c)
			}
		}, m.prototype.prepended = function (a) {
			var b = this._itemize(a);
			if (b.length) {
				this._resetLayout(), this._manageStamps();
				var c = this._filterRevealAdded(b);
				this.layoutItems(this.filteredItems), this.filteredItems = c.concat(this.filteredItems), this.items = b.concat(this.items)
			}
		}, m.prototype._filterRevealAdded = function (a) {
			var b = this._filter(a);
			return this.hide(b.needHide), this.reveal(b.matches), this.layoutItems(b.matches, !0), b.matches
		}, m.prototype.insert = function (a) {
			var b = this.addItems(a);
			if (b.length) {
				var c, d, e = b.length;
				for (c = 0; e > c; c++) d = b[c], this.element.appendChild(d.element);
				var f = this._filter(b).matches;
				for (c = 0; e > c; c++) b[c].isLayoutInstant = !0;
				for (this.arrange(), c = 0; e > c; c++) delete b[c].isLayoutInstant;
				this.reveal(f)
			}
		};
		var o = m.prototype.remove;
		return m.prototype.remove = function (a) {
			a = e.makeArray(a);
			var b = this.getItems(a);
			o.call(this, a);
			var c = b && b.length;
			if (c)
				for (var d = 0; c > d; d++) {
					var f = b[d];
					e.removeFrom(this.filteredItems, f)
				}
		}, m.prototype.shuffle = function () {
			for (var a = 0, b = this.items.length; b > a; a++) {
				var c = this.items[a];
				c.sortData.random = Math.random()
			}
			this.options.sortBy = "random", this._sort(), this._layout()
		}, m.prototype._noTransition = function (a) {
			var b = this.options.transitionDuration;
			this.options.transitionDuration = 0;
			var c = a.call(this);
			return this.options.transitionDuration = b, c
		}, m.prototype.getFilteredItemElements = function () {
			for (var a = [], b = 0, c = this.filteredItems.length; c > b; b++) a.push(this.filteredItems[b].element);
			return a
		}, m
	}), "function" != typeof Object.create && (Object.create = function (a) {
		function b() {}
		return b.prototype = a, new b
	}),
	function (a, b, c) {
		var d = {
			init: function (b, c) {
				var d = this;
				d.$elem = a(c), d.options = a.extend({}, a.fn.owlCarousel.options, d.$elem.data(), b), d.userOptions = b, d.loadContent()
			},
			loadContent: function () {
				function b(a) {
					var b, c = "";
					if ("function" == typeof d.options.jsonSuccess) d.options.jsonSuccess.apply(this, [a]);
					else {
						for (b in a.owl) a.owl.hasOwnProperty(b) && (c += a.owl[b].item);
						d.$elem.html(c)
					}
					d.logIn()
				}
				var c, d = this;
				"function" == typeof d.options.beforeInit && d.options.beforeInit.apply(this, [d.$elem]), "string" == typeof d.options.jsonPath ? (c = d.options.jsonPath, a.getJSON(c, b)) : d.logIn()
			},
			logIn: function () {
				var a = this;
				a.$elem.data("owl-originalStyles", a.$elem.attr("style")).data("owl-originalClasses", a.$elem.attr("class")), a.$elem.css({
					opacity: 0
				}), a.orignalItems = a.options.items, a.checkBrowser(), a.wrapperWidth = 0, a.checkVisible = null, a.setVars()
			},
			setVars: function () {
				var a = this;
				return 0 === a.$elem.children().length ? !1 : (a.baseClass(), a.eventTypes(), a.$userItems = a.$elem.children(), a.itemsAmount = a.$userItems.length, a.wrapItems(), a.$owlItems = a.$elem.find(".owl-item"), a.$owlWrapper = a.$elem.find(".owl-wrapper"), a.playDirection = "next", a.prevItem = 0, a.prevArr = [0], a.currentItem = 0, a.customEvents(), void a.onStartup())
			},
			onStartup: function () {
				var a = this;
				a.updateItems(), a.calculateAll(), a.buildControls(), a.updateControls(), a.response(), a.moveEvents(), a.stopOnHover(), a.owlStatus(), a.options.transitionStyle !== !1 && a.transitionTypes(a.options.transitionStyle), a.options.autoPlay === !0 && (a.options.autoPlay = 5e3), a.play(), a.$elem.find(".owl-wrapper").css("display", "block"), a.$elem.is(":visible") ? a.$elem.css("opacity", 1) : a.watchVisibility(), a.onstartup = !1, a.eachMoveUpdate(), "function" == typeof a.options.afterInit && a.options.afterInit.apply(this, [a.$elem])
			},
			eachMoveUpdate: function () {
				var a = this;
				a.options.lazyLoad === !0 && a.lazyLoad(), a.options.autoHeight === !0 && a.autoHeight(), a.onVisibleItems(), "function" == typeof a.options.afterAction && a.options.afterAction.apply(this, [a.$elem])
			},
			updateVars: function () {
				var a = this;
				"function" == typeof a.options.beforeUpdate && a.options.beforeUpdate.apply(this, [a.$elem]), a.watchVisibility(), a.updateItems(), a.calculateAll(), a.updatePosition(), a.updateControls(), a.eachMoveUpdate(), "function" == typeof a.options.afterUpdate && a.options.afterUpdate.apply(this, [a.$elem])
			},
			reload: function () {
				var a = this;
				b.setTimeout(function () {
					a.updateVars()
				}, 0)
			},
			watchVisibility: function () {
				var a = this;
				return a.$elem.is(":visible") !== !1 ? !1 : (a.$elem.css({
					opacity: 0
				}), b.clearInterval(a.autoPlayInterval), b.clearInterval(a.checkVisible), void(a.checkVisible = b.setInterval(function () {
					a.$elem.is(":visible") && (a.reload(), a.$elem.animate({
						opacity: 1
					}, 200), b.clearInterval(a.checkVisible))
				}, 500)))
			},
			wrapItems: function () {
				var a = this;
				a.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'), a.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'), a.wrapperOuter = a.$elem.find(".owl-wrapper-outer"), a.$elem.css("display", "block")
			},
			baseClass: function () {
				var a = this,
					b = a.$elem.hasClass(a.options.baseClass),
					c = a.$elem.hasClass(a.options.theme);
				b || a.$elem.addClass(a.options.baseClass), c || a.$elem.addClass(a.options.theme)
			},
			updateItems: function () {
				var b, c, d = this;
				if (d.options.responsive === !1) return !1;
				if (d.options.singleItem === !0) return d.options.items = d.orignalItems = 1, d.options.itemsCustom = !1, d.options.itemsDesktop = !1, d.options.itemsDesktopSmall = !1, d.options.itemsTablet = !1, d.options.itemsTabletSmall = !1, d.options.itemsMobile = !1, !1;
				if (b = a(d.options.responsiveBaseWidth).width(), b > (d.options.itemsDesktop[0] || d.orignalItems) && (d.options.items = d.orignalItems), d.options.itemsCustom !== !1)
					for (d.options.itemsCustom.sort(function (a, b) {
							return a[0] - b[0]
						}), c = 0; c < d.options.itemsCustom.length; c += 1) d.options.itemsCustom[c][0] <= b && (d.options.items = d.options.itemsCustom[c][1]);
				else b <= d.options.itemsDesktop[0] && d.options.itemsDesktop !== !1 && (d.options.items = d.options.itemsDesktop[1]), b <= d.options.itemsDesktopSmall[0] && d.options.itemsDesktopSmall !== !1 && (d.options.items = d.options.itemsDesktopSmall[1]), b <= d.options.itemsTablet[0] && d.options.itemsTablet !== !1 && (d.options.items = d.options.itemsTablet[1]), b <= d.options.itemsTabletSmall[0] && d.options.itemsTabletSmall !== !1 && (d.options.items = d.options.itemsTabletSmall[1]), b <= d.options.itemsMobile[0] && d.options.itemsMobile !== !1 && (d.options.items = d.options.itemsMobile[1]);
				d.options.items > d.itemsAmount && d.options.itemsScaleUp === !0 && (d.options.items = d.itemsAmount)
			},
			response: function () {
				var c, d, e = this;
				return e.options.responsive !== !0 ? !1 : (d = a(b).width(), e.resizer = function () {
					a(b).width() !== d && (e.options.autoPlay !== !1 && b.clearInterval(e.autoPlayInterval), b.clearTimeout(c), c = b.setTimeout(function () {
						d = a(b).width(), e.updateVars()
					}, e.options.responsiveRefreshRate))
				}, void a(b).resize(e.resizer))
			},
			updatePosition: function () {
				var a = this;
				a.jumpTo(a.currentItem), a.options.autoPlay !== !1 && a.checkAp()
			},
			appendItemsSizes: function () {
				var b = this,
					c = 0,
					d = b.itemsAmount - b.options.items;
				b.$owlItems.each(function (e) {
					var f = a(this);
					f.css({
						width: b.itemWidth
					}).data("owl-item", Number(e)), (e % b.options.items === 0 || e === d) && (e > d || (c += 1)), f.data("owl-roundPages", c)
				})
			},
			appendWrapperSizes: function () {
				var a = this,
					b = a.$owlItems.length * a.itemWidth;
				a.$owlWrapper.css({
					width: 2 * b,
					left: 0
				}), a.appendItemsSizes()
			},
			calculateAll: function () {
				var a = this;
				a.calculateWidth(), a.appendWrapperSizes(), a.loops(), a.max()
			},
			calculateWidth: function () {
				var a = this;
				a.itemWidth = Math.round(a.$elem.width() / a.options.items)
			},
			max: function () {
				var a = this,
					b = -1 * (a.itemsAmount * a.itemWidth - a.options.items * a.itemWidth);
				return a.options.items > a.itemsAmount ? (a.maximumItem = 0, b = 0, a.maximumPixels = 0) : (a.maximumItem = a.itemsAmount - a.options.items, a.maximumPixels = b), b
			},
			min: function () {
				return 0
			},
			loops: function () {
				var b, c, d, e = this,
					f = 0,
					g = 0;
				for (e.positionsInArray = [0], e.pagesInArray = [], b = 0; b < e.itemsAmount; b += 1) g += e.itemWidth, e.positionsInArray.push(-g), e.options.scrollPerPage === !0 && (c = a(e.$owlItems[b]), d = c.data("owl-roundPages"), d !== f && (e.pagesInArray[f] = e.positionsInArray[b], f = d))
			},
			buildControls: function () {
				var b = this;
				(b.options.navigation === !0 || b.options.pagination === !0) && (b.owlControls = a('<div class="owl-controls"/>').toggleClass("clickable", !b.browser.isTouch).appendTo(b.$elem)), b.options.pagination === !0 && b.buildPagination(), b.options.navigation === !0 && b.buildButtons()
			},
			buildButtons: function () {
				var b = this,
					c = a('<div class="owl-buttons"/>');
				b.owlControls.append(c), b.buttonPrev = a("<div/>", {
					"class": "owl-prev",
					html: b.options.navigationText[0] || ""
				}), b.buttonNext = a("<div/>", {
					"class": "owl-next",
					html: b.options.navigationText[1] || ""
				}), c.append(b.buttonPrev).append(b.buttonNext), c.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function (a) {
					a.preventDefault()
				}), c.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function (c) {
					c.preventDefault(), a(this).hasClass("owl-next") ? b.next() : b.prev()
				})
			},
			buildPagination: function () {
				var b = this;
				b.paginationWrapper = a('<div class="owl-pagination"/>'), b.owlControls.append(b.paginationWrapper), b.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function (c) {
					c.preventDefault(), Number(a(this).data("owl-page")) !== b.currentItem && b.goTo(Number(a(this).data("owl-page")), !0)
				})
			},
			updatePagination: function () {
				var b, c, d, e, f, g, h = this;
				if (h.options.pagination === !1) return !1;
				for (h.paginationWrapper.html(""), b = 0, c = h.itemsAmount - h.itemsAmount % h.options.items, e = 0; e < h.itemsAmount; e += 1) e % h.options.items === 0 && (b += 1, c === e && (d = h.itemsAmount - h.options.items), f = a("<div/>", {
					"class": "owl-page"
				}), g = a("<span></span>", {
					text: h.options.paginationNumbers === !0 ? b : "",
					"class": h.options.paginationNumbers === !0 ? "owl-numbers" : ""
				}), f.append(g), f.data("owl-page", c === e ? d : e), f.data("owl-roundPages", b), h.paginationWrapper.append(f));
				h.checkPagination()
			},
			checkPagination: function () {
				var b = this;
				return b.options.pagination === !1 ? !1 : void b.paginationWrapper.find(".owl-page").each(function () {
					a(this).data("owl-roundPages") === a(b.$owlItems[b.currentItem]).data("owl-roundPages") && (b.paginationWrapper.find(".owl-page").removeClass("active"), a(this).addClass("active"))
				})
			},
			checkNavigation: function () {
				var a = this;
				return a.options.navigation === !1 ? !1 : void(a.options.rewindNav === !1 && (0 === a.currentItem && 0 === a.maximumItem ? (a.buttonPrev.addClass("disabled"), a.buttonNext.addClass("disabled")) : 0 === a.currentItem && 0 !== a.maximumItem ? (a.buttonPrev.addClass("disabled"), a.buttonNext.removeClass("disabled")) : a.currentItem === a.maximumItem ? (a.buttonPrev.removeClass("disabled"), a.buttonNext.addClass("disabled")) : 0 !== a.currentItem && a.currentItem !== a.maximumItem && (a.buttonPrev.removeClass("disabled"), a.buttonNext.removeClass("disabled"))))
			},
			updateControls: function () {
				var a = this;
				a.updatePagination(), a.checkNavigation(), a.owlControls && (a.options.items >= a.itemsAmount ? a.owlControls.hide() : a.owlControls.show())
			},
			destroyControls: function () {
				var a = this;
				a.owlControls && a.owlControls.remove()
			},
			next: function (a) {
				var b = this;
				if (b.isTransition) return !1;
				if (b.currentItem += b.options.scrollPerPage === !0 ? b.options.items : 1, b.currentItem > b.maximumItem + (b.options.scrollPerPage === !0 ? b.options.items - 1 : 0)) {
					if (b.options.rewindNav !== !0) return b.currentItem = b.maximumItem, !1;
					b.currentItem = 0, a = "rewind"
				}
				b.goTo(b.currentItem, a)
			},
			prev: function (a) {
				var b = this;
				if (b.isTransition) return !1;
				if (b.options.scrollPerPage === !0 && b.currentItem > 0 && b.currentItem < b.options.items ? b.currentItem = 0 : b.currentItem -= b.options.scrollPerPage === !0 ? b.options.items : 1, b.currentItem < 0) {
					if (b.options.rewindNav !== !0) return b.currentItem = 0, !1;
					b.currentItem = b.maximumItem, a = "rewind"
				}
				b.goTo(b.currentItem, a)
			},
			goTo: function (a, c, d) {
				var e, f = this;
				return f.isTransition ? !1 : ("function" == typeof f.options.beforeMove && f.options.beforeMove.apply(this, [f.$elem]), a >= f.maximumItem ? a = f.maximumItem : 0 >= a && (a = 0), f.currentItem = f.owl.currentItem = a, f.options.transitionStyle !== !1 && "drag" !== d && 1 === f.options.items && f.browser.support3d === !0 ? (f.swapSpeed(0), f.browser.support3d === !0 ? f.transition3d(f.positionsInArray[a]) : f.css2slide(f.positionsInArray[a], 1), f.afterGo(), f.singleItemTransition(), !1) : (e = f.positionsInArray[a], f.browser.support3d === !0 ? (f.isCss3Finish = !1, c === !0 ? (f.swapSpeed("paginationSpeed"), b.setTimeout(function () {
					f.isCss3Finish = !0
				}, f.options.paginationSpeed)) : "rewind" === c ? (f.swapSpeed(f.options.rewindSpeed), b.setTimeout(function () {
					f.isCss3Finish = !0
				}, f.options.rewindSpeed)) : (f.swapSpeed("slideSpeed"), b.setTimeout(function () {
					f.isCss3Finish = !0
				}, f.options.slideSpeed)), f.transition3d(e)) : c === !0 ? f.css2slide(e, f.options.paginationSpeed) : "rewind" === c ? f.css2slide(e, f.options.rewindSpeed) : f.css2slide(e, f.options.slideSpeed), void f.afterGo()))
			},
			jumpTo: function (a) {
				var b = this;
				"function" == typeof b.options.beforeMove && b.options.beforeMove.apply(this, [b.$elem]), a >= b.maximumItem || -1 === a ? a = b.maximumItem : 0 >= a && (a = 0), b.swapSpeed(0), b.browser.support3d === !0 ? b.transition3d(b.positionsInArray[a]) : b.css2slide(b.positionsInArray[a], 1), b.currentItem = b.owl.currentItem = a, b.afterGo()
			},
			afterGo: function () {
				var a = this;
				a.prevArr.push(a.currentItem), a.prevItem = a.owl.prevItem = a.prevArr[a.prevArr.length - 2], a.prevArr.shift(0), a.prevItem !== a.currentItem && (a.checkPagination(), a.checkNavigation(), a.eachMoveUpdate(), a.options.autoPlay !== !1 && a.checkAp()), "function" == typeof a.options.afterMove && a.prevItem !== a.currentItem && a.options.afterMove.apply(this, [a.$elem])
			},
			stop: function () {
				var a = this;
				a.apStatus = "stop", b.clearInterval(a.autoPlayInterval)
			},
			checkAp: function () {
				var a = this;
				"stop" !== a.apStatus && a.play()
			},
			play: function () {
				var a = this;
				return a.apStatus = "play", a.options.autoPlay === !1 ? !1 : (b.clearInterval(a.autoPlayInterval), void(a.autoPlayInterval = b.setInterval(function () {
					a.next(!0)
				}, a.options.autoPlay)))
			},
			swapSpeed: function (a) {
				var b = this;
				"slideSpeed" === a ? b.$owlWrapper.css(b.addCssSpeed(b.options.slideSpeed)) : "paginationSpeed" === a ? b.$owlWrapper.css(b.addCssSpeed(b.options.paginationSpeed)) : "string" != typeof a && b.$owlWrapper.css(b.addCssSpeed(a))
			},
			addCssSpeed: function (a) {
				return {
					"-webkit-transition": "all " + a + "ms ease",
					"-moz-transition": "all " + a + "ms ease",
					"-o-transition": "all " + a + "ms ease",
					transition: "all " + a + "ms ease"
				}
			},
			removeTransition: function () {
				return {
					"-webkit-transition": "",
					"-moz-transition": "",
					"-o-transition": "",
					transition: ""
				}
			},
			doTranslate: function (a) {
				return {
					"-webkit-transform": "translate3d(" + a + "px, 0px, 0px)",
					"-moz-transform": "translate3d(" + a + "px, 0px, 0px)",
					"-o-transform": "translate3d(" + a + "px, 0px, 0px)",
					"-ms-transform": "translate3d(" + a + "px, 0px, 0px)",
					transform: "translate3d(" + a + "px, 0px,0px)"
				}
			},
			transition3d: function (a) {
				var b = this;
				b.$owlWrapper.css(b.doTranslate(a))
			},
			css2move: function (a) {
				var b = this;
				b.$owlWrapper.css({
					left: a
				})
			},
			css2slide: function (a, b) {
				var c = this;
				c.isCssFinish = !1, c.$owlWrapper.stop(!0, !0).animate({
					left: a
				}, {
					duration: b || c.options.slideSpeed,
					complete: function () {
						c.isCssFinish = !0
					}
				})
			},
			checkBrowser: function () {
				var a, d, e, f, g = this,
					h = "translate3d(0px, 0px, 0px)",
					i = c.createElement("div");
				i.style.cssText = "  -moz-transform:" + h + "; -ms-transform:" + h + "; -o-transform:" + h + "; -webkit-transform:" + h + "; transform:" + h, a = /translate3d\(0px, 0px, 0px\)/g, d = i.style.cssText.match(a), e = null !== d && 1 === d.length, f = "ontouchstart" in b || b.navigator.msMaxTouchPoints, g.browser = {
					support3d: e,
					isTouch: f
				}
			},
			moveEvents: function () {
				var a = this;
				(a.options.mouseDrag !== !1 || a.options.touchDrag !== !1) && (a.gestures(), a.disabledEvents())
			},
			eventTypes: function () {
				var a = this,
					b = ["s", "e", "x"];
				a.ev_types = {}, a.options.mouseDrag === !0 && a.options.touchDrag === !0 ? b = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : a.options.mouseDrag === !1 && a.options.touchDrag === !0 ? b = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : a.options.mouseDrag === !0 && a.options.touchDrag === !1 && (b = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]), a.ev_types.start = b[0], a.ev_types.move = b[1], a.ev_types.end = b[2]
			},
			disabledEvents: function () {
				var b = this;
				b.$elem.on("dragstart.owl", function (a) {
					a.preventDefault()
				}), b.$elem.on("mousedown.disableTextSelect", function (b) {
					return a(b.target).is("input, textarea, select, option")
				})
			},
			gestures: function () {
				function d(a) {
					if (void 0 !== a.touches) return {
						x: a.touches[0].pageX,
						y: a.touches[0].pageY
					};
					if (void 0 === a.touches) {
						if (void 0 !== a.pageX) return {
							x: a.pageX,
							y: a.pageY
						};
						if (void 0 === a.pageX) return {
							x: a.clientX,
							y: a.clientY
						}
					}
				}

				function e(b) {
					"on" === b ? (a(c).on(i.ev_types.move, g), a(c).on(i.ev_types.end, h)) : "off" === b && (a(c).off(i.ev_types.move), a(c).off(i.ev_types.end))
				}

				function f(c) {
					var f, g = c.originalEvent || c || b.event;
					if (3 === g.which) return !1;
					if (!(i.itemsAmount <= i.options.items)) {
						if (i.isCssFinish === !1 && !i.options.dragBeforeAnimFinish) return !1;
						if (i.isCss3Finish === !1 && !i.options.dragBeforeAnimFinish) return !1;
						i.options.autoPlay !== !1 && b.clearInterval(i.autoPlayInterval), i.browser.isTouch === !0 || i.$owlWrapper.hasClass("grabbing") || i.$owlWrapper.addClass("grabbing"), i.newPosX = 0, i.newRelativeX = 0, a(this).css(i.removeTransition()), f = a(this).position(), j.relativePos = f.left, j.offsetX = d(g).x - f.left, j.offsetY = d(g).y - f.top, e("on"), j.sliding = !1, j.targetElement = g.target || g.srcElement
					}
				}

				function g(e) {
					var f, g, h = e.originalEvent || e || b.event;
					i.newPosX = d(h).x - j.offsetX, i.newPosY = d(h).y - j.offsetY, i.newRelativeX = i.newPosX - j.relativePos, "function" == typeof i.options.startDragging && j.dragging !== !0 && 0 !== i.newRelativeX && (j.dragging = !0, i.options.startDragging.apply(i, [i.$elem])), (i.newRelativeX > 8 || i.newRelativeX < -8) && i.browser.isTouch === !0 && (void 0 !== h.preventDefault ? h.preventDefault() : h.returnValue = !1, j.sliding = !0), (i.newPosY > 10 || i.newPosY < -10) && j.sliding === !1 && a(c).off("touchmove.owl"), f = function () {
						return i.newRelativeX / 5
					}, g = function () {
						return i.maximumPixels + i.newRelativeX / 5
					}, i.newPosX = Math.max(Math.min(i.newPosX, f()), g()), i.browser.support3d === !0 ? i.transition3d(i.newPosX) : i.css2move(i.newPosX)
				}

				function h(c) {
					var d, f, g, h = c.originalEvent || c || b.event;
					h.target = h.target || h.srcElement, j.dragging = !1, i.browser.isTouch !== !0 && i.$owlWrapper.removeClass("grabbing"), i.dragDirection = i.owl.dragDirection = i.newRelativeX < 0 ? "left" : "right", 0 !== i.newRelativeX && (d = i.getNewPosition(), i.goTo(d, !1, "drag"), j.targetElement === h.target && i.browser.isTouch !== !0 && (a(h.target).on("click.disable", function (b) {
						b.stopImmediatePropagation(), b.stopPropagation(), b.preventDefault(), a(b.target).off("click.disable")
					}), f = a._data(h.target, "events").click, g = f.pop(), f.splice(0, 0, g))), e("off")
				}
				var i = this,
					j = {
						offsetX: 0,
						offsetY: 0,
						baseElWidth: 0,
						relativePos: 0,
						position: null,
						minSwipe: null,
						maxSwipe: null,
						sliding: null,
						dargging: null,
						targetElement: null
					};
				i.isCssFinish = !0, i.$elem.on(i.ev_types.start, ".owl-wrapper", f)
			},
			getNewPosition: function () {
				var a = this,
					b = a.closestItem();
				return b > a.maximumItem ? (a.currentItem = a.maximumItem, b = a.maximumItem) : a.newPosX >= 0 && (b = 0, a.currentItem = 0), b
			},
			closestItem: function () {
				var b = this,
					c = b.options.scrollPerPage === !0 ? b.pagesInArray : b.positionsInArray,
					d = b.newPosX,
					e = null;
				return a.each(c, function (f, g) {
					d - b.itemWidth / 20 > c[f + 1] && d - b.itemWidth / 20 < g && "left" === b.moveDirection() ? (e = g, b.currentItem = b.options.scrollPerPage === !0 ? a.inArray(e, b.positionsInArray) : f) : d + b.itemWidth / 20 < g && d + b.itemWidth / 20 > (c[f + 1] || c[f] - b.itemWidth) && "right" === b.moveDirection() && (b.options.scrollPerPage === !0 ? (e = c[f + 1] || c[c.length - 1], b.currentItem = a.inArray(e, b.positionsInArray)) : (e = c[f + 1], b.currentItem = f + 1))
				}), b.currentItem
			},
			moveDirection: function () {
				var a, b = this;
				return b.newRelativeX < 0 ? (a = "right", b.playDirection = "next") : (a = "left", b.playDirection = "prev"), a
			},
			customEvents: function () {
				var a = this;
				a.$elem.on("owl.next", function () {
					a.next()
				}), a.$elem.on("owl.prev", function () {
					a.prev()
				}), a.$elem.on("owl.play", function (b, c) {
					a.options.autoPlay = c, a.play(), a.hoverStatus = "play"
				}), a.$elem.on("owl.stop", function () {
					a.stop(), a.hoverStatus = "stop"
				}), a.$elem.on("owl.goTo", function (b, c) {
					a.goTo(c)
				}), a.$elem.on("owl.jumpTo", function (b, c) {
					a.jumpTo(c)
				})
			},
			stopOnHover: function () {
				var a = this;
				a.options.stopOnHover === !0 && a.browser.isTouch !== !0 && a.options.autoPlay !== !1 && (a.$elem.on("mouseover", function () {
					a.stop()
				}), a.$elem.on("mouseout", function () {
					"stop" !== a.hoverStatus && a.play()
				}))
			},
			lazyLoad: function () {
				var b, c, d, e, f, g = this;
				if (g.options.lazyLoad === !1) return !1;
				for (b = 0; b < g.itemsAmount; b += 1) c = a(g.$owlItems[b]), "loaded" !== c.data("owl-loaded") && (d = c.data("owl-item"), e = c.find(".lazyOwl"), "string" == typeof e.data("src") ? (void 0 === c.data("owl-loaded") && (e.hide(), c.addClass("loading").data("owl-loaded", "checked")), f = g.options.lazyFollow === !0 ? d >= g.currentItem : !0, f && d < g.currentItem + g.options.items && e.length && g.lazyPreload(c, e)) : c.data("owl-loaded", "loaded"))
			},
			lazyPreload: function (a, c) {
				function d() {
					a.data("owl-loaded", "loaded").removeClass("loading"), c.removeAttr("data-src"), "fade" === g.options.lazyEffect ? c.fadeIn(400) : c.show(), "function" == typeof g.options.afterLazyLoad && g.options.afterLazyLoad.apply(this, [g.$elem])
				}

				function e() {
					h += 1, g.completeImg(c.get(0)) || f === !0 ? d() : 100 >= h ? b.setTimeout(e, 100) : d()
				}
				var f, g = this,
					h = 0;
				"DIV" === c.prop("tagName") ? (c.css("background-image", "url(" + c.data("src") + ")"), f = !0) : c[0].src = c.data("src"), e()
			},
			autoHeight: function () {
				function c() {
					var c = a(f.$owlItems[f.currentItem]).height();
					f.wrapperOuter.css("height", c + "px"), f.wrapperOuter.hasClass("autoHeight") || b.setTimeout(function () {
						f.wrapperOuter.addClass("autoHeight")
					}, 0)
				}

				function d() {
					e += 1, f.completeImg(g.get(0)) ? c() : 100 >= e ? b.setTimeout(d, 100) : f.wrapperOuter.css("height", "")
				}
				var e, f = this,
					g = a(f.$owlItems[f.currentItem]).find("img");
				void 0 !== g.get(0) ? (e = 0, d()) : c()
			},
			completeImg: function (a) {
				var b;
				return a.complete ? (b = typeof a.naturalWidth, "undefined" !== b && 0 === a.naturalWidth ? !1 : !0) : !1
			},
			onVisibleItems: function () {
				var b, c = this;
				for (c.options.addClassActive === !0 && c.$owlItems.removeClass("active"), c.visibleItems = [], b = c.currentItem; b < c.currentItem + c.options.items; b += 1) c.visibleItems.push(b), c.options.addClassActive === !0 && a(c.$owlItems[b]).addClass("active");
				c.owl.visibleItems = c.visibleItems
			},
			transitionTypes: function (a) {
				var b = this;
				b.outClass = "owl-" + a + "-out", b.inClass = "owl-" + a + "-in"
			},
			singleItemTransition: function () {
				function a(a) {
					return {
						position: "relative",
						left: a + "px"
					}
				}
				var b = this,
					c = b.outClass,
					d = b.inClass,
					e = b.$owlItems.eq(b.currentItem),
					f = b.$owlItems.eq(b.prevItem),
					g = Math.abs(b.positionsInArray[b.currentItem]) + b.positionsInArray[b.prevItem],
					h = Math.abs(b.positionsInArray[b.currentItem]) + b.itemWidth / 2,
					i = "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";
				b.isTransition = !0, b.$owlWrapper.addClass("owl-origin").css({
					"-webkit-transform-origin": h + "px",
					"-moz-perspective-origin": h + "px",
					"perspective-origin": h + "px"
				}), f.css(a(g, 10)).addClass(c).on(i, function () {
					b.endPrev = !0, f.off(i), b.clearTransStyle(f, c)
				}), e.addClass(d).on(i, function () {
					b.endCurrent = !0, e.off(i), b.clearTransStyle(e, d)
				})
			},
			clearTransStyle: function (a, b) {
				var c = this;
				a.css({
					position: "",
					left: ""
				}).removeClass(b), c.endPrev && c.endCurrent && (c.$owlWrapper.removeClass("owl-origin"), c.endPrev = !1, c.endCurrent = !1, c.isTransition = !1)
			},
			owlStatus: function () {
				var a = this;
				a.owl = {
					userOptions: a.userOptions,
					baseElement: a.$elem,
					userItems: a.$userItems,
					owlItems: a.$owlItems,
					currentItem: a.currentItem,
					prevItem: a.prevItem,
					visibleItems: a.visibleItems,
					isTouch: a.browser.isTouch,
					browser: a.browser,
					dragDirection: a.dragDirection
				}
			},
			clearEvents: function () {
				var d = this;
				d.$elem.off(".owl owl mousedown.disableTextSelect"), a(c).off(".owl owl"), a(b).off("resize", d.resizer)
			},
			unWrap: function () {
				var a = this;
				0 !== a.$elem.children().length && (a.$owlWrapper.unwrap(), a.$userItems.unwrap().unwrap(), a.owlControls && a.owlControls.remove()), a.clearEvents(), a.$elem.attr("style", a.$elem.data("owl-originalStyles") || "").attr("class", a.$elem.data("owl-originalClasses"))
			},
			destroy: function () {
				var a = this;
				a.stop(), b.clearInterval(a.checkVisible), a.unWrap(), a.$elem.removeData()
			},
			reinit: function (b) {
				var c = this,
					d = a.extend({}, c.userOptions, b);
				c.unWrap(), c.init(d, c.$elem)
			},
			addItem: function (a, b) {
				var c, d = this;
				return a ? 0 === d.$elem.children().length ? (d.$elem.append(a), d.setVars(), !1) : (d.unWrap(), c = void 0 === b || -1 === b ? -1 : b, c >= d.$userItems.length || -1 === c ? d.$userItems.eq(-1).after(a) : d.$userItems.eq(c).before(a), void d.setVars()) : !1
			},
			removeItem: function (a) {
				var b, c = this;
				return 0 === c.$elem.children().length ? !1 : (b = void 0 === a || -1 === a ? -1 : a, c.unWrap(), c.$userItems.eq(b).remove(), void c.setVars())
			}
		};
		a.fn.owlCarousel = function (b) {
			return this.each(function () {
				if (a(this).data("owl-init") === !0) return !1;
				a(this).data("owl-init", !0);
				var c = Object.create(d);
				c.init(b, this), a.data(this, "owlCarousel", c)
			})
		}, a.fn.owlCarousel.options = {
			items: 5,
			itemsCustom: !1,
			itemsDesktop: [1199, 4],
			itemsDesktopSmall: [979, 3],
			itemsTablet: [768, 2],
			itemsTabletSmall: !1,
			itemsMobile: [479, 1],
			singleItem: !1,
			itemsScaleUp: !1,
			slideSpeed: 200,
			paginationSpeed: 800,
			rewindSpeed: 1e3,
			autoPlay: !1,
			stopOnHover: !1,
			navigation: !1,
			navigationText: ["prev", "next"],
			rewindNav: !0,
			scrollPerPage: !1,
			pagination: !0,
			paginationNumbers: !1,
			responsive: !0,
			responsiveRefreshRate: 200,
			responsiveBaseWidth: b,
			baseClass: "owl-carousel",
			theme: "owl-theme",
			lazyLoad: !1,
			lazyFollow: !0,
			lazyEffect: "fade",
			autoHeight: !1,
			jsonPath: !1,
			jsonSuccess: !1,
			dragBeforeAnimFinish: !0,
			mouseDrag: !0,
			touchDrag: !0,
			addClassActive: !1,
			transitionStyle: !1,
			beforeUpdate: !1,
			afterUpdate: !1,
			beforeInit: !1,
			afterInit: !1,
			beforeMove: !1,
			afterMove: !1,
			afterAction: !1,
			startDragging: !1,
			afterLazyLoad: !1
		}
	}(jQuery, window, document),
	function (a) {
		a.fn.extend({
			slimScroll: function (b) {
				var c = a.extend({
					width: "auto",
					height: "250px",
					size: "7px",
					color: "#000",
					position: "right",
					distance: "1px",
					start: "top",
					opacity: .4,
					alwaysVisible: !1,
					disableFadeOut: !1,
					railVisible: !1,
					railColor: "#333",
					railOpacity: .2,
					railDraggable: !0,
					railClass: "slimScrollRail",
					barClass: "slimScrollBar",
					wrapperClass: "slimScrollDiv",
					allowPageScroll: !1,
					wheelStep: 20,
					touchScrollStep: 200,
					borderRadius: "7px",
					railBorderRadius: "7px"
				}, b);
				return this.each(function () {
					function d(b) {
						if (i) {
							b = b || window.event;
							var d = 0;
							b.wheelDelta && (d = -b.wheelDelta / 120), b.detail && (d = b.detail / 3), a(b.target || b.srcTarget || b.srcElement).closest("." + c.wrapperClass).is(r.parent()) && e(d, !0), b.preventDefault && !q && b.preventDefault(), q || (b.returnValue = !1)
						}
					}

					function e(a, b, d) {
						q = !1;
						var e = a,
							f = r.outerHeight() - u.outerHeight();
						b && (e = parseInt(u.css("top")) + a * parseInt(c.wheelStep) / 100 * u.outerHeight(), e = Math.min(Math.max(e, 0), f), e = a > 0 ? Math.ceil(e) : Math.floor(e), u.css({
							top: e + "px"
						})), o = parseInt(u.css("top")) / (r.outerHeight() - u.outerHeight()), e = o * (r[0].scrollHeight - r.outerHeight()), d && (e = a, a = e / r[0].scrollHeight * r.outerHeight(), a = Math.min(Math.max(a, 0), f), u.css({
							top: a + "px"
						})), r.scrollTop(e), r.trigger("slimscrolling", ~~e), g(), h()
					}

					function f() {
						n = Math.max(r.outerHeight() / r[0].scrollHeight * r.outerHeight(), 30), u.css({
							height: n + "px"
						});
						var a = n == r.outerHeight() ? "none" : "block";
						u.css({
							display: a
						})
					}

					function g() {
						f(), clearTimeout(l), o == ~~o ? (q = c.allowPageScroll, p != o && r.trigger("slimscroll", 0 == ~~o ? "top" : "bottom")) : q = !1, p = o, n >= r.outerHeight() ? q = !0 : (u.stop(!0, !0).fadeIn("fast"), c.railVisible && v.stop(!0, !0).fadeIn("fast"))
					}

					function h() {
						c.alwaysVisible || (l = setTimeout(function () {
							c.disableFadeOut && i || j || k || (u.fadeOut("slow"), v.fadeOut("slow"))
						}, 1e3))
					}
					var i, j, k, l, m, n, o, p, q = !1,
						r = a(this);
					if (r.parent().hasClass(c.wrapperClass)) {
						var s = r.scrollTop(),
							u = r.closest("." + c.barClass),
							v = r.closest("." + c.railClass);
						if (f(), a.isPlainObject(b)) {
							if ("height" in b && "auto" == b.height) {
								r.parent().css("height", "auto"), r.css("height", "auto");
								var w = r.parent().parent().height();
								r.parent().css("height", w), r.css("height", w)
							}
							if ("scrollTo" in b) s = parseInt(c.scrollTo);
							else if ("scrollBy" in b) s += parseInt(c.scrollBy);
							else if ("destroy" in b) return u.remove(), v.remove(), void r.unwrap();
							e(s, !1, !0)
						}
					} else if (!(a.isPlainObject(b) && "destroy" in b)) {
						c.height = "auto" == c.height ? r.parent().height() : c.height, s = a("<div></div>").addClass(c.wrapperClass).css({
							position: "relative",
							overflow: "hidden",
							width: c.width,
							height: c.height
						}), r.css({
							overflow: "hidden",
							width: c.width,
							height: c.height
						});
						var v = a("<div></div>").addClass(c.railClass).css({
								width: c.size,
								height: "100%",
								position: "absolute",
								top: 0,
								display: c.alwaysVisible && c.railVisible ? "block" : "none",
								"border-radius": c.railBorderRadius,
								background: c.railColor,
								opacity: c.railOpacity,
								zIndex: 90
							}),
							u = a("<div></div>").addClass(c.barClass).css({
								background: c.color,
								width: c.size,
								position: "absolute",
								top: 0,
								opacity: c.opacity,
								display: c.alwaysVisible ? "block" : "none",
								"border-radius": c.borderRadius,
								BorderRadius: c.borderRadius,
								MozBorderRadius: c.borderRadius,
								WebkitBorderRadius: c.borderRadius,
								zIndex: 99
							}),
							w = "right" == c.position ? {
								right: c.distance
							} : {
								left: c.distance
							};
						v.css(w), u.css(w), r.wrap(s), r.parent().append(u), r.parent().append(v), c.railDraggable && u.bind("mousedown", function (b) {
							var c = a(document);
							return k = !0, t = parseFloat(u.css("top")), pageY = b.pageY, c.bind("mousemove.slimscroll", function (a) {
								currTop = t + a.pageY - pageY, u.css("top", currTop), e(0, u.position().top, !1)
							}), c.bind("mouseup.slimscroll", function () {
								k = !1, h(), c.unbind(".slimscroll")
							}), !1
						}).bind("selectstart.slimscroll", function (a) {
							return a.stopPropagation(), a.preventDefault(), !1
						}), v.hover(function () {
							g()
						}, function () {
							h()
						}), u.hover(function () {
							j = !0
						}, function () {
							j = !1
						}), r.hover(function () {
							i = !0, g(), h()
						}, function () {
							i = !1, h()
						}), r.bind("touchstart", function (a) {
							a.originalEvent.touches.length && (m = a.originalEvent.touches[0].pageY)
						}), r.bind("touchmove", function (a) {
							q || a.originalEvent.preventDefault(), a.originalEvent.touches.length && (e((m - a.originalEvent.touches[0].pageY) / c.touchScrollStep, !0), m = a.originalEvent.touches[0].pageY)
						}), f(), "bottom" === c.start ? (u.css({
							top: r.outerHeight() - u.outerHeight()
						}), e(0, !0)) : "top" !== c.start && (e(a(c.start).position().top, null, !0), c.alwaysVisible || u.hide()), window.addEventListener ? (this.addEventListener("DOMMouseScroll", d, !1), this.addEventListener("mousewheel", d, !1)) : document.attachEvent("onmousewheel", d)
					}
				}), this
			}
		}), a.fn.extend({
			slimscroll: a.fn.slimScroll
		})
	}(jQuery),
	function (a) {
		"use strict";
		"function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
	}(function (a) {
		"use strict";

		function b(b, c) {
			this.$el = a(b), this.options = a.extend(!0, {}, this.defaults, c), this.isVisible = !1, this.$hoverElem = this.$el.find(this.options.hoverElem), this.transitionProp = "all " + this.options.speed + "ms " + this.options.easing, this.support = this._supportsTransitions(), this._loadEvents()
		}
		b.prototype = {
			defaults: {
				speed: 300,
				easing: "ease",
				hoverDelay: 0,
				inverse: !1,
				hoverElem: "div"
			},
			constructor: b,
			_supportsTransitions: function () {
				if ("undefined" != typeof Modernizr) return Modernizr.csstransitions;
				var a = document.body || document.documentElement,
					b = a.style,
					c = "transition";
				if ("string" == typeof b[c]) return !0;
				var d = ["Moz", "webkit", "Webkit", "Khtml", "O", "ms"];
				c = c.charAt(0).toUpperCase() + c.substr(1);
				for (var e = 0; e < d.length; e++)
					if ("string" == typeof b[d[e] + c]) return !0;
				return !1
			},
			_loadEvents: function () {
				this.$el.on("mouseenter.hoverdir mouseleave.hoverdir", a.proxy(function (a) {
					this.direction = this._getDir({
						x: a.pageX,
						y: a.pageY
					}), "mouseenter" === a.type ? this._showHover() : this._hideHover()
				}, this))
			},
			_showHover: function () {
				var b = this._getStyle(this.direction);
				this.support && this.$hoverElem.css("transition", ""), this.$hoverElem.hide().css(b.from), clearTimeout(this.tmhover), this.tmhover = setTimeout(a.proxy(function () {
					this.$hoverElem.show(0, a.proxy(function () {
						this.support && this.$hoverElem.css("transition", this.transitionProp), this._applyAnimation(b.to)
					}, this))
				}, this), this.options.hoverDelay), this.isVisible = !0
			},
			_hideHover: function () {
				var a = this._getStyle(this.direction);
				this.support && this.$hoverElem.css("transition", this.transitionProp), clearTimeout(this.tmhover), this._applyAnimation(a.from), this.isVisible = !1
			},
			_getDir: function (a) {
				var b = this.$el.width(),
					c = this.$el.height(),
					d = (a.x - this.$el.offset().left - b / 2) * (b > c ? c / b : 1),
					e = (a.y - this.$el.offset().top - c / 2) * (c > b ? b / c : 1),
					f = Math.round((Math.atan2(e, d) * (180 / Math.PI) + 180) / 90 + 3) % 4;
				return f
			},
			_getStyle: function (a) {
				var b, c, d = {
						left: "0",
						top: "-100%"
					},
					e = {
						left: "0",
						top: "100%"
					},
					f = {
						left: "-100%",
						top: "0"
					},
					g = {
						left: "100%",
						top: "0"
					},
					h = {
						top: "0"
					},
					i = {
						left: "0"
					};
				switch (a) {
					case 0:
					case "top":
						b = this.options.inverse ? e : d, c = h;
						break;
					case 1:
					case "right":
						b = this.options.inverse ? f : g, c = i;
						break;
					case 2:
					case "bottom":
						b = this.options.inverse ? d : e, c = h;
						break;
					case 3:
					case "left":
						b = this.options.inverse ? g : f, c = i
				}
				return {
					from: b,
					to: c
				}
			},
			_applyAnimation: function (b) {
				a.fn.applyStyle = this.support ? a.fn.css : a.fn.animate, this.$hoverElem.stop().applyStyle(b, a.extend(!0, [], {
					duration: this.options.speed
				}))
			},
			show: function (a) {
				this.$el.off("mouseenter.hoverdir mouseleave.hoverdir"), this.isVisible || (this.direction = a || "top", this._showHover())
			},
			hide: function (a) {
				this.rebuild(), this.isVisible && (this.direction = a || "bottom",
					this._hideHover())
			},
			setOptions: function (b) {
				this.options = a.extend(!0, {}, this.defaults, this.options, b)
			},
			destroy: function () {
				this.$el.off("mouseenter.hoverdir mouseleave.hoverdir"), this.$el.data("hoverdir", null)
			},
			rebuild: function (a) {
				"object" == typeof a && this.setOptions(a), this._loadEvents()
			}
		}, a.fn.hoverdir = function (c, d) {
			return this.each(function () {
				var e = a(this).data("hoverdir"),
					f = "object" == typeof c && c;
				e || (e = new b(this, f), a(this).data("hoverdir", e)), "string" == typeof c && (e[c](d), "destroy" === c && a(this).data("hoverdir", !1))
			})
		}, a.fn.hoverdir.Constructor = b
	}),
	function () {
		function a() {}

		function b(a, b) {
			for (var c = a.length; c--;)
				if (a[c].listener === b) return c;
			return -1
		}

		function c(a) {
			return function () {
				return this[a].apply(this, arguments)
			}
		}
		var d = a.prototype,
			e = this,
			f = e.EventEmitter;
		d.getListeners = function (a) {
			var b, c, d = this._getEvents();
			if ("object" == typeof a) {
				b = {};
				for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
			} else b = d[a] || (d[a] = []);
			return b
		}, d.flattenListeners = function (a) {
			var b, c = [];
			for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
			return c
		}, d.getListenersAsObject = function (a) {
			var b, c = this.getListeners(a);
			return c instanceof Array && (b = {}, b[a] = c), b || c
		}, d.addListener = function (a, c) {
			var d, e = this.getListenersAsObject(a),
				f = "object" == typeof c;
			for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
				listener: c,
				once: !1
			});
			return this
		}, d.on = c("addListener"), d.addOnceListener = function (a, b) {
			return this.addListener(a, {
				listener: b,
				once: !0
			})
		}, d.once = c("addOnceListener"), d.defineEvent = function (a) {
			return this.getListeners(a), this
		}, d.defineEvents = function (a) {
			for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
			return this
		}, d.removeListener = function (a, c) {
			var d, e, f = this.getListenersAsObject(a);
			for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
			return this
		}, d.off = c("removeListener"), d.addListeners = function (a, b) {
			return this.manipulateListeners(!1, a, b)
		}, d.removeListeners = function (a, b) {
			return this.manipulateListeners(!0, a, b)
		}, d.manipulateListeners = function (a, b, c) {
			var d, e, f = a ? this.removeListener : this.addListener,
				g = a ? this.removeListeners : this.addListeners;
			if ("object" != typeof b || b instanceof RegExp)
				for (d = c.length; d--;) f.call(this, b, c[d]);
			else
				for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
			return this
		}, d.removeEvent = function (a) {
			var b, c = typeof a,
				d = this._getEvents();
			if ("string" === c) delete d[a];
			else if ("object" === c)
				for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
			else delete this._events;
			return this
		}, d.removeAllListeners = c("removeEvent"), d.emitEvent = function (a, b) {
			var c, d, e, f, g = this.getListenersAsObject(a);
			for (e in g)
				if (g.hasOwnProperty(e))
					for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
			return this
		}, d.trigger = c("emitEvent"), d.emit = function (a) {
			var b = Array.prototype.slice.call(arguments, 1);
			return this.emitEvent(a, b)
		}, d.setOnceReturnValue = function (a) {
			return this._onceReturnValue = a, this
		}, d._getOnceReturnValue = function () {
			return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
		}, d._getEvents = function () {
			return this._events || (this._events = {})
		}, a.noConflict = function () {
			return e.EventEmitter = f, a
		}, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
			return a
		}) : "object" == typeof module && module.exports ? module.exports = a : this.EventEmitter = a
	}.call(this),
	function (a) {
		function b(b) {
			var c = a.event;
			return c.target = c.target || c.srcElement || b, c
		}
		var c = document.documentElement,
			d = function () {};
		c.addEventListener ? d = function (a, b, c) {
			a.addEventListener(b, c, !1)
		} : c.attachEvent && (d = function (a, c, d) {
			a[c + d] = d.handleEvent ? function () {
				var c = b(a);
				d.handleEvent.call(d, c)
			} : function () {
				var c = b(a);
				d.call(a, c)
			}, a.attachEvent("on" + c, a[c + d])
		});
		var e = function () {};
		c.removeEventListener ? e = function (a, b, c) {
			a.removeEventListener(b, c, !1)
		} : c.detachEvent && (e = function (a, b, c) {
			a.detachEvent("on" + b, a[b + c]);
			try {
				delete a[b + c]
			} catch (d) {
				a[b + c] = void 0
			}
		});
		var f = {
			bind: d,
			unbind: e
		};
		"function" == typeof define && define.amd ? define("eventie/eventie", f) : a.eventie = f
	}(this),
	function (a, b) {
		"function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (c, d) {
			return b(a, c, d)
		}) : "object" == typeof exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("eventie")) : a.imagesLoaded = b(a, a.EventEmitter, a.eventie)
	}(window, function (a, b, c) {
		function d(a, b) {
			for (var c in b) a[c] = b[c];
			return a
		}

		function e(a) {
			return "[object Array]" === m.call(a)
		}

		function f(a) {
			var b = [];
			if (e(a)) b = a;
			else if ("number" == typeof a.length)
				for (var c = 0, d = a.length; d > c; c++) b.push(a[c]);
			else b.push(a);
			return b
		}

		function g(a, b, c) {
			if (!(this instanceof g)) return new g(a, b);
			"string" == typeof a && (a = document.querySelectorAll(a)), this.elements = f(a), this.options = d({}, this.options), "function" == typeof b ? c = b : d(this.options, b), c && this.on("always", c), this.getImages(), j && (this.jqDeferred = new j.Deferred);
			var e = this;
			setTimeout(function () {
				e.check()
			})
		}

		function h(a) {
			this.img = a
		}

		function i(a) {
			this.src = a, n[a] = this
		}
		var j = a.jQuery,
			k = a.console,
			l = "undefined" != typeof k,
			m = Object.prototype.toString;
		g.prototype = new b, g.prototype.options = {}, g.prototype.getImages = function () {
			this.images = [];
			for (var a = 0, b = this.elements.length; b > a; a++) {
				var c = this.elements[a];
				"IMG" === c.nodeName && this.addImage(c);
				var d = c.nodeType;
				if (d && (1 === d || 9 === d || 11 === d))
					for (var e = c.querySelectorAll("img"), f = 0, g = e.length; g > f; f++) {
						var h = e[f];
						this.addImage(h)
					}
			}
		}, g.prototype.addImage = function (a) {
			var b = new h(a);
			this.images.push(b)
		}, g.prototype.check = function () {
			function a(a, e) {
				return b.options.debug && l && k.log("confirm", a, e), b.progress(a), c++, c === d && b.complete(), !0
			}
			var b = this,
				c = 0,
				d = this.images.length;
			if (this.hasAnyBroken = !1, !d) return void this.complete();
			for (var e = 0; d > e; e++) {
				var f = this.images[e];
				f.on("confirm", a), f.check()
			}
		}, g.prototype.progress = function (a) {
			this.hasAnyBroken = this.hasAnyBroken || !a.isLoaded;
			var b = this;
			setTimeout(function () {
				b.emit("progress", b, a), b.jqDeferred && b.jqDeferred.notify && b.jqDeferred.notify(b, a)
			})
		}, g.prototype.complete = function () {
			var a = this.hasAnyBroken ? "fail" : "done";
			this.isComplete = !0;
			var b = this;
			setTimeout(function () {
				if (b.emit(a, b), b.emit("always", b), b.jqDeferred) {
					var c = b.hasAnyBroken ? "reject" : "resolve";
					b.jqDeferred[c](b)
				}
			})
		}, j && (j.fn.imagesLoaded = function (a, b) {
			var c = new g(this, a, b);
			return c.jqDeferred.promise(j(this))
		}), h.prototype = new b, h.prototype.check = function () {
			var a = n[this.img.src] || new i(this.img.src);
			if (a.isConfirmed) return void this.confirm(a.isLoaded, "cached was confirmed");
			if (this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
			var b = this;
			a.on("confirm", function (a, c) {
				return b.confirm(a.isLoaded, c), !0
			}), a.check()
		}, h.prototype.confirm = function (a, b) {
			this.isLoaded = a, this.emit("confirm", this, b)
		};
		var n = {};
		return i.prototype = new b, i.prototype.check = function () {
			if (!this.isChecked) {
				var a = new Image;
				c.bind(a, "load", this), c.bind(a, "error", this), a.src = this.src, this.isChecked = !0
			}
		}, i.prototype.handleEvent = function (a) {
			var b = "on" + a.type;
			this[b] && this[b](a)
		}, i.prototype.onload = function (a) {
			this.confirm(!0, "onload"), this.unbindProxyEvents(a)
		}, i.prototype.onerror = function (a) {
			this.confirm(!1, "onerror"), this.unbindProxyEvents(a)
		}, i.prototype.confirm = function (a, b) {
			this.isConfirmed = !0, this.isLoaded = a, this.emit("confirm", this, b)
		}, i.prototype.unbindProxyEvents = function (a) {
			c.unbind(a.target, "load", this), c.unbind(a.target, "error", this)
		}, g
	}), ! function (a) {
		"function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
	}(function (a) {
		function b(a, b) {
			return a.parsleyAdaptedCallback || (a.parsleyAdaptedCallback = function () {
				var c = Array.prototype.slice.call(arguments, 0);
				c.unshift(this), a.apply(b || q, c)
			}), a.parsleyAdaptedCallback
		}

		function c(a) {
			return 0 === a.lastIndexOf(s, 0) ? a.substr(s.length) : a
		}
		"undefined" == typeof a && "undefined" != typeof window.jQuery && (a = window.jQuery);
		var d = 1,
			e = {},
			f = {
				attr: function (a, b, c) {
					var d, e, f = new RegExp("^" + b, "i");
					if ("undefined" == typeof c) c = {};
					else
						for (var g in c) c.hasOwnProperty(g) && delete c[g];
					if ("undefined" == typeof a || "undefined" == typeof a[0]) return c;
					e = a[0].attributes;
					for (var g = e.length; g--;) d = e[g], d && d.specified && f.test(d.name) && (c[this.camelize(d.name.slice(b.length))] = this.deserializeValue(d.value));
					return c
				},
				checkAttr: function (a, b, c) {
					return a.is("[" + b + c + "]")
				},
				setAttr: function (a, b, c, d) {
					a[0].setAttribute(this.dasherize(b + c), String(d))
				},
				generateID: function () {
					return "" + d++
				},
				deserializeValue: function (b) {
					var c;
					try {
						return b ? "true" == b || ("false" == b ? !1 : "null" == b ? null : isNaN(c = Number(b)) ? /^[\[\{]/.test(b) ? a.parseJSON(b) : b : c) : b
					} catch (d) {
						return b
					}
				},
				camelize: function (a) {
					return a.replace(/-+(.)?/g, function (a, b) {
						return b ? b.toUpperCase() : ""
					})
				},
				dasherize: function (a) {
					return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
				},
				warn: function () {
					window.console && "function" == typeof window.console.warn && window.console.warn.apply(window.console, arguments)
				},
				warnOnce: function (a) {
					e[a] || (e[a] = !0, this.warn.apply(this, arguments))
				},
				_resetWarnings: function () {
					e = {}
				},
				objectCreate: Object.create || function () {
					var a = function () {};
					return function (b) {
						if (arguments.length > 1) throw Error("Second argument not supported");
						if ("object" != typeof b) throw TypeError("Argument must be an object");
						a.prototype = b;
						var c = new a;
						return a.prototype = null, c
					}
				}()
			},
			g = {
				namespace: "data-parsley-",
				inputs: "input, textarea, select",
				excluded: "input[type=button], input[type=submit], input[type=reset], input[type=hidden]",
				priorityEnabled: !0,
				multiple: null,
				group: null,
				uiEnabled: !0,
				validationThreshold: 3,
				focus: "first",
				trigger: !1,
				errorClass: "parsley-error",
				successClass: "parsley-success",
				classHandler: function () {},
				errorsContainer: function () {},
				errorsWrapper: '<ul class="parsley-errors-list"></ul>',
				errorTemplate: "<li></li>"
			},
			h = function () {};
		h.prototype = {
			asyncSupport: !1,
			actualizeOptions: function () {
				return f.attr(this.$element, this.options.namespace, this.domOptions), this.parent && this.parent.actualizeOptions && this.parent.actualizeOptions(), this
			},
			_resetOptions: function (a) {
				this.domOptions = f.objectCreate(this.parent.options), this.options = f.objectCreate(this.domOptions);
				for (var b in a) a.hasOwnProperty(b) && (this.options[b] = a[b]);
				this.actualizeOptions()
			},
			validateThroughValidator: function (a, b, c) {
				return window.ParsleyValidator.validate(a, b, c)
			},
			_listeners: null,
			on: function (a, b) {
				this._listeners = this._listeners || {};
				var c = this._listeners[a] = this._listeners[a] || [];
				return c.push(b), this
			},
			subscribe: function (b, c) {
				a.listenTo(this, b.toLowerCase(), c)
			},
			off: function (a, b) {
				var c = this._listeners && this._listeners[a];
				if (c)
					if (b)
						for (var d = c.length; d--;) c[d] === b && c.splice(d, 1);
					else delete this._listeners[a];
				return this
			},
			unsubscribe: function (b) {
				a.unsubscribeTo(this, b.toLowerCase())
			},
			trigger: function (a, b) {
				b = b || this;
				var c, d = this._listeners && this._listeners[a];
				if (d)
					for (var e = d.length; e--;)
						if (c = d[e].call(b, b), c === !1) return c;
				return this.parent ? this.parent.trigger(a, b) : !0
			},
			reset: function () {
				if ("ParsleyForm" !== this.__class__) return this._trigger("reset");
				for (var a = 0; a < this.fields.length; a++) this.fields[a]._trigger("reset");
				this._trigger("reset")
			},
			destroy: function () {
				if ("ParsleyForm" !== this.__class__) return this.$element.removeData("Parsley"), this.$element.removeData("ParsleyFieldMultiple"), void this._trigger("destroy");
				for (var a = 0; a < this.fields.length; a++) this.fields[a].destroy();
				this.$element.removeData("Parsley"), this._trigger("destroy")
			},
			_findRelatedMultiple: function () {
				return this.parent.$element.find("[" + this.options.namespace + 'multiple="' + this.options.multiple + '"]')
			}
		};
		var i = function () {
			var a = {},
				b = function (a) {
					this.__class__ = "Validator", this.__version__ = "1.0.1", this.options = a || {}, this.bindingKey = this.options.bindingKey || "_validatorjsConstraint"
				};
			b.prototype = {
				constructor: b,
				validate: function (a, b, c) {
					if ("string" != typeof a && "object" != typeof a) throw new Error("You must validate an object or a string");
					return "string" == typeof a || g(a) ? this._validateString(a, b, c) : this.isBinded(a) ? this._validateBindedObject(a, b) : this._validateObject(a, b, c)
				},
				bind: function (a, b) {
					if ("object" != typeof a) throw new Error("Must bind a Constraint to an object");
					return a[this.bindingKey] = new c(b), this
				},
				unbind: function (a) {
					return "undefined" == typeof a._validatorjsConstraint ? this : (delete a[this.bindingKey], this)
				},
				isBinded: function (a) {
					return "undefined" != typeof a[this.bindingKey]
				},
				getBinded: function (a) {
					return this.isBinded(a) ? a[this.bindingKey] : null
				},
				_validateString: function (a, b, c) {
					var f, h = [];
					g(b) || (b = [b]);
					for (var i = 0; i < b.length; i++) {
						if (!(b[i] instanceof e)) throw new Error("You must give an Assert or an Asserts array to validate a string");
						f = b[i].check(a, c), f instanceof d && h.push(f)
					}
					return h.length ? h : !0
				},
				_validateObject: function (a, b, d) {
					if ("object" != typeof b) throw new Error("You must give a constraint to validate an object");
					return b instanceof c ? b.check(a, d) : new c(b).check(a, d)
				},
				_validateBindedObject: function (a, b) {
					return a[this.bindingKey].check(a, b)
				}
			}, b.errorCode = {
				must_be_a_string: "must_be_a_string",
				must_be_an_array: "must_be_an_array",
				must_be_a_number: "must_be_a_number",
				must_be_a_string_or_array: "must_be_a_string_or_array"
			};
			var c = function (a, b) {
				if (this.__class__ = "Constraint", this.options = b || {}, this.nodes = {}, a) try {
					this._bootstrap(a)
				} catch (c) {
					throw new Error("Should give a valid mapping object to Constraint", c, a)
				}
			};
			c.prototype = {
				constructor: c,
				check: function (a, b) {
					var c, d = {};
					for (var h in this.nodes) {
						for (var i = !1, j = this.get(h), k = g(j) ? j : [j], l = k.length - 1; l >= 0; l--) "Required" !== k[l].__class__ || (i = k[l].requiresValidation(b));
						if (this.has(h, a) || this.options.strict || i) try {
							this.has(h, this.options.strict || i ? a : void 0) || (new e).HaveProperty(h).validate(a), c = this._check(h, a[h], b), (g(c) && c.length > 0 || !g(c) && !f(c)) && (d[h] = c)
						} catch (m) {
							d[h] = m
						}
					}
					return f(d) ? !0 : d
				},
				add: function (a, b) {
					if (b instanceof e || g(b) && b[0] instanceof e) return this.nodes[a] = b, this;
					if ("object" == typeof b && !g(b)) return this.nodes[a] = b instanceof c ? b : new c(b), this;
					throw new Error("Should give an Assert, an Asserts array, a Constraint", b)
				},
				has: function (a, b) {
					return b = "undefined" != typeof b ? b : this.nodes, "undefined" != typeof b[a]
				},
				get: function (a, b) {
					return this.has(a) ? this.nodes[a] : b || null
				},
				remove: function (a) {
					var b = [];
					for (var c in this.nodes) c !== a && (b[c] = this.nodes[c]);
					return this.nodes = b, this
				},
				_bootstrap: function (a) {
					if (a instanceof c) return this.nodes = a.nodes;
					for (var b in a) this.add(b, a[b])
				},
				_check: function (a, b, d) {
					if (this.nodes[a] instanceof e) return this._checkAsserts(b, [this.nodes[a]], d);
					if (g(this.nodes[a])) return this._checkAsserts(b, this.nodes[a], d);
					if (this.nodes[a] instanceof c) return this.nodes[a].check(b, d);
					throw new Error("Invalid node", this.nodes[a])
				},
				_checkAsserts: function (a, b, c) {
					for (var d, e = [], f = 0; f < b.length; f++) d = b[f].check(a, c), "undefined" != typeof d && !0 !== d && e.push(d);
					return e
				}
			};
			var d = function (a, b, c) {
				if (this.__class__ = "Violation", !(a instanceof e)) throw new Error("Should give an assertion implementing the Assert interface");
				this.assert = a, this.value = b, "undefined" != typeof c && (this.violation = c)
			};
			d.prototype = {
				show: function () {
					var a = {
						assert: this.assert.__class__,
						value: this.value
					};
					return this.violation && (a.violation = this.violation), a
				},
				__toString: function () {
					return "undefined" != typeof this.violation && (this.violation = '", ' + this.getViolation().constraint + " expected was " + this.getViolation().expected), this.assert.__class__ + ' assert failed for "' + this.value + this.violation || ""
				},
				getViolation: function () {
					var a, b;
					for (a in this.violation) b = this.violation[a];
					return {
						constraint: a,
						expected: b
					}
				}
			};
			var e = function (a) {
				this.__class__ = "Assert", this.__parentClass__ = this.__class__, this.groups = [], "undefined" != typeof a && this.addGroup(a)
			};
			e.prototype = {
				construct: e,
				requiresValidation: function (a) {
					return a && !this.hasGroup(a) ? !1 : !a && this.hasGroups() ? !1 : !0
				},
				check: function (a, b) {
					if (this.requiresValidation(b)) try {
						return this.validate(a, b)
					} catch (c) {
						return c
					}
				},
				hasGroup: function (a) {
					return g(a) ? this.hasOneOf(a) : "Any" === a ? !0 : this.hasGroups() ? -1 !== this.groups.indexOf(a) : "Default" === a
				},
				hasOneOf: function (a) {
					for (var b = 0; b < a.length; b++)
						if (this.hasGroup(a[b])) return !0;
					return !1
				},
				hasGroups: function () {
					return this.groups.length > 0
				},
				addGroup: function (a) {
					return g(a) ? this.addGroups(a) : (this.hasGroup(a) || this.groups.push(a), this)
				},
				removeGroup: function (a) {
					for (var b = [], c = 0; c < this.groups.length; c++) a !== this.groups[c] && b.push(this.groups[c]);
					return this.groups = b, this
				},
				addGroups: function (a) {
					for (var b = 0; b < a.length; b++) this.addGroup(a[b]);
					return this
				},
				HaveProperty: function (a) {
					return this.__class__ = "HaveProperty", this.node = a, this.validate = function (a) {
						if ("undefined" == typeof a[this.node]) throw new d(this, a, {
							value: this.node
						});
						return !0
					}, this
				},
				Blank: function () {
					return this.__class__ = "Blank", this.validate = function (a) {
						if ("string" != typeof a) throw new d(this, a, {
							value: b.errorCode.must_be_a_string
						});
						if ("" !== a.replace(/^\s+/g, "").replace(/\s+$/g, "")) throw new d(this, a);
						return !0
					}, this
				},
				Callback: function (a) {
					if (this.__class__ = "Callback", this.arguments = Array.prototype.slice.call(arguments), 1 === this.arguments.length ? this.arguments = [] : this.arguments.splice(0, 1), "function" != typeof a) throw new Error("Callback must be instanciated with a function");
					return this.fn = a, this.validate = function (a) {
						var b = this.fn.apply(this, [a].concat(this.arguments));
						if (!0 !== b) throw new d(this, a, {
							result: b
						});
						return !0
					}, this
				},
				Choice: function (a) {
					if (this.__class__ = "Choice", !g(a) && "function" != typeof a) throw new Error("Choice must be instanciated with an array or a function");
					return this.list = a, this.validate = function (a) {
						for (var b = "function" == typeof this.list ? this.list() : this.list, c = 0; c < b.length; c++)
							if (a === b[c]) return !0;
						throw new d(this, a, {
							choices: b
						})
					}, this
				},
				Collection: function (a) {
					return this.__class__ = "Collection", this.constraint = "undefined" != typeof a ? a instanceof e ? a : new c(a) : !1, this.validate = function (a, c) {
						var e, h = new b,
							i = 0,
							j = {},
							k = this.groups.length ? this.groups : c;
						if (!g(a)) throw new d(this, a, {
							value: b.errorCode.must_be_an_array
						});
						for (var l = 0; l < a.length; l++) e = this.constraint ? h.validate(a[l], this.constraint, k) : h.validate(a[l], k), f(e) || (j[i] = e), i++;
						return f(j) ? !0 : j
					}, this
				},
				Count: function (a) {
					return this.__class__ = "Count", this.count = a, this.validate = function (a) {
						if (!g(a)) throw new d(this, a, {
							value: b.errorCode.must_be_an_array
						});
						var c = "function" == typeof this.count ? this.count(a) : this.count;
						if (isNaN(Number(c))) throw new Error("Count must be a valid interger", c);
						if (c !== a.length) throw new d(this, a, {
							count: c
						});
						return !0
					}, this
				},
				Email: function () {
					return this.__class__ = "Email", this.validate = function (a) {
						var c = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
						if ("string" != typeof a) throw new d(this, a, {
							value: b.errorCode.must_be_a_string
						});
						if (!c.test(a)) throw new d(this, a);
						return !0
					}, this
				},
				EqualTo: function (a) {
					if (this.__class__ = "EqualTo", "undefined" == typeof a) throw new Error("EqualTo must be instanciated with a value or a function");
					return this.reference = a, this.validate = function (a) {
						var b = "function" == typeof this.reference ? this.reference(a) : this.reference;
						if (b !== a) throw new d(this, a, {
							value: b
						});
						return !0
					}, this
				},
				GreaterThan: function (a) {
					if (this.__class__ = "GreaterThan", "undefined" == typeof a) throw new Error("Should give a threshold value");
					return this.threshold = a, this.validate = function (a) {
						if ("" === a || isNaN(Number(a))) throw new d(this, a, {
							value: b.errorCode.must_be_a_number
						});
						if (this.threshold >= a) throw new d(this, a, {
							threshold: this.threshold
						});
						return !0
					}, this
				},
				GreaterThanOrEqual: function (a) {
					if (this.__class__ = "GreaterThanOrEqual", "undefined" == typeof a) throw new Error("Should give a threshold value");
					return this.threshold = a, this.validate = function (a) {
						if ("" === a || isNaN(Number(a))) throw new d(this, a, {
							value: b.errorCode.must_be_a_number
						});
						if (this.threshold > a) throw new d(this, a, {
							threshold: this.threshold
						});
						return !0
					}, this
				},
				InstanceOf: function (a) {
					if (this.__class__ = "InstanceOf", "undefined" == typeof a) throw new Error("InstanceOf must be instanciated with a value");
					return this.classRef = a, this.validate = function (a) {
						if (!0 != a instanceof this.classRef) throw new d(this, a, {
							classRef: this.classRef
						});
						return !0
					}, this
				},
				Length: function (a) {
					if (this.__class__ = "Length", !a.min && !a.max) throw new Error("Lenth assert must be instanciated with a { min: x, max: y } object");
					return this.min = a.min, this.max = a.max, this.validate = function (a) {
						if ("string" != typeof a && !g(a)) throw new d(this, a, {
							value: b.errorCode.must_be_a_string_or_array
						});
						if ("undefined" != typeof this.min && this.min === this.max && a.length !== this.min) throw new d(this, a, {
							min: this.min,
							max: this.max
						});
						if ("undefined" != typeof this.max && a.length > this.max) throw new d(this, a, {
							max: this.max
						});
						if ("undefined" != typeof this.min && a.length < this.min) throw new d(this, a, {
							min: this.min
						});
						return !0
					}, this
				},
				LessThan: function (a) {
					if (this.__class__ = "LessThan", "undefined" == typeof a) throw new Error("Should give a threshold value");
					return this.threshold = a, this.validate = function (a) {
						if ("" === a || isNaN(Number(a))) throw new d(this, a, {
							value: b.errorCode.must_be_a_number
						});
						if (this.threshold <= a) throw new d(this, a, {
							threshold: this.threshold
						});
						return !0
					}, this
				},
				LessThanOrEqual: function (a) {
					if (this.__class__ = "LessThanOrEqual", "undefined" == typeof a) throw new Error("Should give a threshold value");
					return this.threshold = a, this.validate = function (a) {
						if ("" === a || isNaN(Number(a))) throw new d(this, a, {
							value: b.errorCode.must_be_a_number
						});
						if (this.threshold < a) throw new d(this, a, {
							threshold: this.threshold
						});
						return !0
					}, this
				},
				NotNull: function () {
					return this.__class__ = "NotNull", this.validate = function (a) {
						if (null === a || "undefined" == typeof a) throw new d(this, a);
						return !0
					}, this
				},
				NotBlank: function () {
					return this.__class__ = "NotBlank", this.validate = function (a) {
						if ("string" != typeof a) throw new d(this, a, {
							value: b.errorCode.must_be_a_string
						});
						if ("" === a.replace(/^\s+/g, "").replace(/\s+$/g, "")) throw new d(this, a);
						return !0
					}, this
				},
				Null: function () {
					return this.__class__ = "Null", this.validate = function (a) {
						if (null !== a) throw new d(this, a);
						return !0
					}, this
				},
				Range: function (a, b) {
					if (this.__class__ = "Range", "undefined" == typeof a || "undefined" == typeof b) throw new Error("Range assert expects min and max values");
					return this.min = a, this.max = b, this.validate = function (a) {
						try {
							return "string" == typeof a && isNaN(Number(a)) || g(a) ? (new e).Length({
								min: this.min,
								max: this.max
							}).validate(a) : (new e).GreaterThanOrEqual(this.min).validate(a) && (new e).LessThanOrEqual(this.max).validate(a), !0
						} catch (b) {
							throw new d(this, a, b.violation)
						}
						return !0
					}, this
				},
				Regexp: function (a, c) {
					if (this.__class__ = "Regexp", "undefined" == typeof a) throw new Error("You must give a regexp");
					return this.regexp = a, this.flag = c || "", this.validate = function (a) {
						if ("string" != typeof a) throw new d(this, a, {
							value: b.errorCode.must_be_a_string
						});
						if (!new RegExp(this.regexp, this.flag).test(a)) throw new d(this, a, {
							regexp: this.regexp,
							flag: this.flag
						});
						return !0
					}, this
				},
				Required: function () {
					return this.__class__ = "Required", this.validate = function (a) {
						if ("undefined" == typeof a) throw new d(this, a);
						try {
							"string" == typeof a ? (new e).NotNull().validate(a) && (new e).NotBlank().validate(a) : !0 === g(a) && (new e).Length({
								min: 1
							}).validate(a)
						} catch (b) {
							throw new d(this, a)
						}
						return !0
					}, this
				},
				Unique: function (a) {
					return this.__class__ = "Unique", "object" == typeof a && (this.key = a.key), this.validate = function (a) {
						var c, e = [];
						if (!g(a)) throw new d(this, a, {
							value: b.errorCode.must_be_an_array
						});
						for (var f = 0; f < a.length; f++)
							if (c = "object" == typeof a[f] ? a[f][this.key] : a[f], "undefined" != typeof c) {
								if (-1 !== e.indexOf(c)) throw new d(this, a, {
									value: c
								});
								e.push(c)
							}
						return !0
					}, this
				}
			}, a.Assert = e, a.Validator = b, a.Violation = d, a.Constraint = c, Array.prototype.indexOf || (Array.prototype.indexOf = function (a) {
				"use strict";
				if (null === this) throw new TypeError;
				var b = Object(this),
					c = b.length >>> 0;
				if (0 === c) return -1;
				var d = 0;
				if (arguments.length > 1 && (d = Number(arguments[1]), d != d ? d = 0 : 0 !== d && d != 1 / 0 && d != -(1 / 0) && (d = (d > 0 || -1) * Math.floor(Math.abs(d)))), d >= c) return -1;
				for (var e = d >= 0 ? d : Math.max(c - Math.abs(d), 0); c > e; e++)
					if (e in b && b[e] === a) return e;
				return -1
			});
			var f = function (a) {
					for (var b in a) return !1;
					return !0
				},
				g = function (a) {
					return "[object Array]" === Object.prototype.toString.call(a)
				};
			return "function" == typeof define && define.amd ? define("vendors/validator.js/dist/validator", [], function () {
				return a
			}) : "undefined" != typeof module && module.exports ? module.exports = a : window["undefined" != typeof validatorjs_ns ? validatorjs_ns : "Validator"] = a, a
		}();
		i = "undefined" != typeof i ? i : "undefined" != typeof module ? module.exports : null;
		var j = function (a, b) {
			this.__class__ = "ParsleyValidator", this.Validator = i, this.locale = "en", this.init(a || {}, b || {})
		};
		j.prototype = {
			init: function (b, c) {
				this.catalog = c, this.validators = a.extend({}, this.validators);
				for (var d in b) this.addValidator(d, b[d].fn, b[d].priority, b[d].requirementsTransformer);
				window.Parsley.trigger("parsley:validator:init")
			},
			setLocale: function (a) {
				if ("undefined" == typeof this.catalog[a]) throw new Error(a + " is not available in the catalog");
				return this.locale = a, this
			},
			addCatalog: function (a, b, c) {
				return "object" == typeof b && (this.catalog[a] = b), !0 === c ? this.setLocale(a) : this
			},
			addMessage: function (a, b, c) {
				return "undefined" == typeof this.catalog[a] && (this.catalog[a] = {}), this.catalog[a][b.toLowerCase()] = c, this
			},
			validate: function () {
				return (new this.Validator.Validator).validate.apply(new i.Validator, arguments)
			},
			addValidator: function (a, b, c, d) {
				if (this.validators[a]) f.warn('Validator "' + a + '" is already defined.');
				else if (g.hasOwnProperty(a)) return void f.warn('"' + a + '" is a restricted keyword and is not a valid validator name.');
				return this._setValidator(a, b, c, d)
			},
			updateValidator: function (a, b, c, d) {
				return this.validators[a] ? this._setValidator(a, b, c, d) : (f.warn('Validator "' + a + '" is not already defined.'), this.addValidator(a, b, c, d))
			},
			removeValidator: function (a) {
				return this.validators[a] || f.warn('Validator "' + a + '" is not defined.'), delete this.validators[a], this
			},
			_setValidator: function (b, c, d, e) {
				return this.validators[b] = function (b) {
					return a.extend((new i.Assert).Callback(c, b), {
						priority: d,
						requirementsTransformer: e
					})
				}, this
			},
			getErrorMessage: function (a) {
				var b;
				if ("type" === a.name) {
					var c = this.catalog[this.locale][a.name] || {};
					b = c[a.requirements]
				} else b = this.formatMessage(this.catalog[this.locale][a.name], a.requirements);
				return b || this.catalog[this.locale].defaultMessage || this.catalog.en.defaultMessage
			},
			formatMessage: function (a, b) {
				if ("object" == typeof b) {
					for (var c in b) a = this.formatMessage(a, b[c]);
					return a
				}
				return "string" == typeof a ? a.replace(new RegExp("%s", "i"), b) : ""
			},
			validators: {
				notblank: function () {
					return a.extend((new i.Assert).NotBlank(), {
						priority: 2
					})
				},
				required: function () {
					return a.extend((new i.Assert).Required(), {
						priority: 512
					})
				},
				type: function (b) {
					var c;
					switch (b) {
						case "email":
							c = (new i.Assert).Email();
							break;
						case "range":
						case "number":
							c = (new i.Assert).Regexp("^-?(?:\\d+|\\d{1,3}(?:,\\d{3})+)?(?:\\.\\d+)?$");
							break;
						case "integer":
							c = (new i.Assert).Regexp("^-?\\d+$");
							break;
						case "digits":
							c = (new i.Assert).Regexp("^\\d+$");
							break;
						case "alphanum":
							c = (new i.Assert).Regexp("^\\w+$", "i");
							break;
						case "url":
							c = (new i.Assert).Regexp("^(?:(?:https?|ftp)://)?(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/\\S*)?$", "i");
							break;
						default:
							throw new Error("validator type `" + b + "` is not supported")
					}
					return a.extend(c, {
						priority: 256
					})
				},
				pattern: function (b) {
					var c = "";
					return /^\/.*\/(?:[gimy]*)$/.test(b) && (c = b.replace(/.*\/([gimy]*)$/, "$1"), b = b.replace(new RegExp("^/(.*?)/" + c + "$"), "$1")), a.extend((new i.Assert).Regexp(b, c), {
						priority: 64
					})
				},
				minlength: function (b) {
					return a.extend((new i.Assert).Length({
						min: b
					}), {
						priority: 30,
						requirementsTransformer: function () {
							return "string" != typeof b || isNaN(b) ? b : parseInt(b, 10)
						}
					})
				},
				maxlength: function (b) {
					return a.extend((new i.Assert).Length({
						max: b
					}), {
						priority: 30,
						requirementsTransformer: function () {
							return "string" != typeof b || isNaN(b) ? b : parseInt(b, 10)
						}
					})
				},
				length: function (b) {
					return a.extend((new i.Assert).Length({
						min: b[0],
						max: b[1]
					}), {
						priority: 32
					})
				},
				mincheck: function (a) {
					return this.minlength(a)
				},
				maxcheck: function (a) {
					return this.maxlength(a)
				},
				check: function (a) {
					return this.length(a)
				},
				min: function (b) {
					return a.extend((new i.Assert).GreaterThanOrEqual(b), {
						priority: 30,
						requirementsTransformer: function () {
							return "string" != typeof b || isNaN(b) ? b : parseInt(b, 10)
						}
					})
				},
				max: function (b) {
					return a.extend((new i.Assert).LessThanOrEqual(b), {
						priority: 30,
						requirementsTransformer: function () {
							return "string" != typeof b || isNaN(b) ? b : parseInt(b, 10)
						}
					})
				},
				range: function (b) {
					return a.extend((new i.Assert).Range(b[0], b[1]), {
						priority: 32,
						requirementsTransformer: function () {
							for (var a = 0; a < b.length; a++) b[a] = "string" != typeof b[a] || isNaN(b[a]) ? b[a] : parseInt(b[a], 10);
							return b
						}
					})
				},
				equalto: function (b) {
					return a.extend((new i.Assert).EqualTo(b), {
						priority: 256,
						requirementsTransformer: function () {
							return a(b).length ? a(b).val() : b
						}
					})
				}
			}
		};
		var k = function () {
			this.__class__ = "ParsleyUI"
		};
		k.prototype = {
			listen: function () {
				var a = this;
				return window.Parsley.on("form:init", function () {
					a.setupForm(this)
				}).on("field:init", function () {
					a.setupField(this)
				}).on("field:validated", function () {
					a.reflow(this)
				}).on("form:validated", function () {
					a.focus(this)
				}).on("field:reset", function () {
					a.reset(this)
				}).on("form:destroy", function () {
					a.destroy(this)
				}).on("field:destroy", function () {
					a.destroy(this)
				}), this
			},
			reflow: function (a) {
				if ("undefined" != typeof a._ui && !1 !== a._ui.active) {
					var b = this._diff(a.validationResult, a._ui.lastValidationResult);
					a._ui.lastValidationResult = a.validationResult, a._ui.validatedOnce = !0, this.manageStatusClass(a), this.manageErrorsMessages(a, b), this.actualizeTriggers(a), (b.kept.length || b.added.length) && !0 !== a._ui.failedOnce && this.manageFailingFieldTrigger(a)
				}
			},
			getErrorsMessages: function (a) {
				if (!0 === a.validationResult) return [];
				for (var b = [], c = 0; c < a.validationResult.length; c++) b.push(this._getErrorMessage(a, a.validationResult[c].assert));
				return b
			},
			manageStatusClass: function (a) {
				a.hasConstraints() && a.needsValidation() && !0 === a.validationResult ? this._successClass(a) : a.validationResult.length > 0 ? this._errorClass(a) : this._resetClass(a)
			},
			manageErrorsMessages: function (b, c) {
				if ("undefined" == typeof b.options.errorsMessagesDisabled) {
					if ("undefined" != typeof b.options.errorMessage) return c.added.length || c.kept.length ? (this._insertErrorWrapper(b), 0 === b._ui.$errorsWrapper.find(".parsley-custom-error-message").length && b._ui.$errorsWrapper.append(a(b.options.errorTemplate).addClass("parsley-custom-error-message")), b._ui.$errorsWrapper.addClass("filled").find(".parsley-custom-error-message").html(b.options.errorMessage)) : b._ui.$errorsWrapper.removeClass("filled").find(".parsley-custom-error-message").remove();
					for (var d = 0; d < c.removed.length; d++) this.removeError(b, c.removed[d].assert.name, !0);
					for (d = 0; d < c.added.length; d++) this.addError(b, c.added[d].assert.name, void 0, c.added[d].assert, !0);
					for (d = 0; d < c.kept.length; d++) this.updateError(b, c.kept[d].assert.name, void 0, c.kept[d].assert, !0)
				}
			},
			addError: function (b, c, d, e, f) {
				this._insertErrorWrapper(b), b._ui.$errorsWrapper.addClass("filled").append(a(b.options.errorTemplate).addClass("parsley-" + c).html(d || this._getErrorMessage(b, e))), !0 !== f && this._errorClass(b)
			},
			updateError: function (a, b, c, d, e) {
				a._ui.$errorsWrapper.addClass("filled").find(".parsley-" + b).html(c || this._getErrorMessage(a, d)), !0 !== e && this._errorClass(a)
			},
			removeError: function (a, b, c) {
				a._ui.$errorsWrapper.removeClass("filled").find(".parsley-" + b).remove(), !0 !== c && this.manageStatusClass(a)
			},
			focus: function (a) {
				if (a._focusedField = null, !0 === a.validationResult || "none" === a.options.focus) return null;
				for (var b = 0; b < a.fields.length; b++) {
					var c = a.fields[b];
					if (!0 !== c.validationResult && c.validationResult.length > 0 && "undefined" == typeof c.options.noFocus && (a._focusedField = c.$element, "first" === a.options.focus)) break
				}
				return null === a._focusedField ? null : a._focusedField.focus()
			},
			_getErrorMessage: function (a, b) {
				var c = b.name + "Message";
				return "undefined" != typeof a.options[c] ? window.ParsleyValidator.formatMessage(a.options[c], b.requirements) : window.ParsleyValidator.getErrorMessage(b)
			},
			_diff: function (a, b, c) {
				for (var d = [], e = [], f = 0; f < a.length; f++) {
					for (var g = !1, h = 0; h < b.length; h++)
						if (a[f].assert.name === b[h].assert.name) {
							g = !0;
							break
						}
					g ? e.push(a[f]) : d.push(a[f])
				}
				return {
					kept: e,
					added: d,
					removed: c ? [] : this._diff(b, a, !0).added
				}
			},
			setupForm: function (b) {
				b.$element.on("submit.Parsley", !1, a.proxy(b.onSubmitValidate, b)), !1 !== b.options.uiEnabled && b.$element.attr("novalidate", "")
			},
			setupField: function (b) {
				var c = {
					active: !1
				};
				!1 !== b.options.uiEnabled && (c.active = !0, b.$element.attr(b.options.namespace + "id", b.__id__), c.$errorClassHandler = this._manageClassHandler(b), c.errorsWrapperId = "parsley-id-" + (b.options.multiple ? "multiple-" + b.options.multiple : b.__id__), c.$errorsWrapper = a(b.options.errorsWrapper).attr("id", c.errorsWrapperId), c.lastValidationResult = [], c.validatedOnce = !1, c.validationInformationVisible = !1, b._ui = c, this.actualizeTriggers(b))
			},
			_manageClassHandler: function (b) {
				if ("string" == typeof b.options.classHandler && a(b.options.classHandler).length) return a(b.options.classHandler);
				var c = b.options.classHandler(b);
				return "undefined" != typeof c && c.length ? c : !b.options.multiple || b.$element.is("select") ? b.$element : b.$element.parent()
			},
			_insertErrorWrapper: function (b) {
				var c;
				if (0 !== b._ui.$errorsWrapper.parent().length) return b._ui.$errorsWrapper.parent();
				if ("string" == typeof b.options.errorsContainer) {
					if (a(b.options.errorsContainer).length) return a(b.options.errorsContainer).append(b._ui.$errorsWrapper);
					f.warn("The errors container `" + b.options.errorsContainer + "` does not exist in DOM")
				} else "function" == typeof b.options.errorsContainer && (c = b.options.errorsContainer(b));
				if ("undefined" != typeof c && c.length) return c.append(b._ui.$errorsWrapper);
				var d = b.$element;
				return b.options.multiple && (d = d.parent()), d.after(b._ui.$errorsWrapper)
			},
			actualizeTriggers: function (b) {
				var c = b.$element;
				if (b.options.multiple && (c = a("[" + b.options.namespace + 'multiple="' + b.options.multiple + '"]')), c.off(".Parsley"), !1 !== b.options.trigger) {
					var d = b.options.trigger.replace(/^\s+/g, "").replace(/\s+$/g, "");
					"" !== d && c.on(d.split(" ").join(".Parsley ") + ".Parsley", a.proxy("function" == typeof b.eventValidate ? b.eventValidate : this.eventValidate, b))
				}
			},
			eventValidate: function (a) {
				new RegExp("key").test(a.type) && !this._ui.validationInformationVisible && this.getValue().length <= this.options.validationThreshold || (this._ui.validatedOnce = !0, this.validate())
			},
			manageFailingFieldTrigger: function (b) {
				return b._ui.failedOnce = !0, b.options.multiple && a("[" + b.options.namespace + 'multiple="' + b.options.multiple + '"]').each(function () {
					return new RegExp("change", "i").test(a(this).parsley().options.trigger || "") ? void 0 : a(this).on("change.ParsleyFailedOnce", !1, a.proxy(b.validate, b))
				}), b.$element.is("select") && !new RegExp("change", "i").test(b.options.trigger || "") ? b.$element.on("change.ParsleyFailedOnce", !1, a.proxy(b.validate, b)) : new RegExp("keyup", "i").test(b.options.trigger || "") ? void 0 : b.$element.on("keyup.ParsleyFailedOnce", !1, a.proxy(b.validate, b))
			},
			reset: function (a) {
				this.actualizeTriggers(a), a.$element.off(".ParsleyFailedOnce"), "undefined" != typeof a._ui && "ParsleyForm" !== a.__class__ && (a._ui.$errorsWrapper.removeClass("filled").children().remove(), this._resetClass(a), a._ui.validatedOnce = !1, a._ui.lastValidationResult = [], a._ui.validationInformationVisible = !1, a._ui.failedOnce = !1)
			},
			destroy: function (a) {
				this.reset(a), "ParsleyForm" !== a.__class__ && ("undefined" != typeof a._ui && a._ui.$errorsWrapper.remove(), delete a._ui)
			},
			_successClass: function (a) {
				a._ui.validationInformationVisible = !0, a._ui.$errorClassHandler.removeClass(a.options.errorClass).addClass(a.options.successClass)
			},
			_errorClass: function (a) {
				a._ui.validationInformationVisible = !0, a._ui.$errorClassHandler.removeClass(a.options.successClass).addClass(a.options.errorClass)
			},
			_resetClass: function (a) {
				a._ui.$errorClassHandler.removeClass(a.options.successClass).removeClass(a.options.errorClass)
			}
		};
		var l = function (b, c, d) {
			this.__class__ = "ParsleyForm", this.__id__ = f.generateID(), this.$element = a(b), this.domOptions = c, this.options = d, this.parent = window.Parsley, this.fields = [], this.validationResult = null
		};
		l.prototype = {
			onSubmitValidate: function (b) {
				return this.validate(void 0, void 0, b), (!1 === this.validationResult || !this._trigger("submit")) && b instanceof a.Event && (b.stopImmediatePropagation(), b.preventDefault()), this
			},
			validate: function (a, b, c) {
				this.submitEvent = c, this.validationResult = !0;
				var d = [];
				return this._trigger("validate"), this._refreshFields(), this._withoutReactualizingFormOptions(function () {
					for (var c = 0; c < this.fields.length; c++)(!a || this._isFieldInGroup(this.fields[c], a)) && (d = this.fields[c].validate(b), !0 !== d && d.length > 0 && this.validationResult && (this.validationResult = !1))
				}), this._trigger(this.validationResult ? "success" : "error"), this._trigger("validated"), this.validationResult
			},
			isValid: function (a, b) {
				return this._refreshFields(), this._withoutReactualizingFormOptions(function () {
					for (var c = 0; c < this.fields.length; c++)
						if ((!a || this._isFieldInGroup(this.fields[c], a)) && !1 === this.fields[c].isValid(b)) return !1;
					return !0
				})
			},
			_isFieldInGroup: function (b, c) {
				return a.isArray(b.options.group) ? -1 !== a.inArray(c, b.options.group) : b.options.group === c
			},
			_refreshFields: function () {
				return this.actualizeOptions()._bindFields()
			},
			_bindFields: function () {
				var b = this,
					c = this.fields;
				return this.fields = [], this.fieldsMappedById = {}, this._withoutReactualizingFormOptions(function () {
					this.$element.find(this.options.inputs).not(this.options.excluded).each(function () {
						var a = new t.Factory(this, {}, b);
						"ParsleyField" !== a.__class__ && "ParsleyFieldMultiple" !== a.__class__ || !0 === a.options.excluded || "undefined" == typeof b.fieldsMappedById[a.__class__ + "-" + a.__id__] && (b.fieldsMappedById[a.__class__ + "-" + a.__id__] = a, b.fields.push(a))
					}), a(c).not(b.fields).each(function () {
						this._trigger("reset")
					})
				}), this
			},
			_withoutReactualizingFormOptions: function (a) {
				var b = this.actualizeOptions;
				this.actualizeOptions = function () {
					return this
				};
				var c = a.call(this);
				return this.actualizeOptions = b, c
			},
			_trigger: function (a) {
				return a = "form:" + a, this.trigger.apply(this, arguments)
			}
		};
		var m = function (b, c, d, e, g) {
				var h = {};
				if (!new RegExp("ParsleyField").test(b.__class__)) throw new Error("ParsleyField or ParsleyFieldMultiple instance expected");
				if ("function" == typeof window.ParsleyValidator.validators[c] && (h = window.ParsleyValidator.validators[c](d)), "Assert" !== h.__parentClass__) throw new Error("Valid validator expected");
				var i = function () {
					return "undefined" != typeof b.options[c + "Priority"] ? b.options[c + "Priority"] : h.priority || 2
				};
				return e = e || i(), "function" == typeof h.requirementsTransformer && (d = h.requirementsTransformer(), h = window.ParsleyValidator.validators[c](d)), a.extend(h, {
					name: c,
					requirements: d,
					priority: e,
					groups: [e],
					isDomConstraint: g || f.checkAttr(b.$element, b.options.namespace, c)
				})
			},
			n = function (b, c, d, e) {
				this.__class__ = "ParsleyField", this.__id__ = f.generateID(), this.$element = a(b), "undefined" != typeof e && (this.parent = e), this.options = d, this.domOptions = c, this.constraints = [], this.constraintsByName = {}, this.validationResult = [], this._bindConstraints()
			};
		n.prototype = {
			validate: function (a) {
				return this.value = this.getValue(), this._trigger("validate"), this._trigger(this.isValid(a, this.value) ? "success" : "error"), this._trigger("validated"), this.validationResult
			},
			hasConstraints: function () {
				return 0 !== this.constraints.length
			},
			needsValidation: function (a) {
				return "undefined" == typeof a && (a = this.getValue()), a.length || this._isRequired() || "undefined" != typeof this.options.validateIfEmpty ? !0 : !1
			},
			isValid: function (a, b) {
				if (this.refreshConstraints(), this.validationResult = !0, !this.hasConstraints()) return !0;
				if (("undefined" == typeof b || null === b) && (b = this.getValue()), !this.needsValidation(b) && !0 !== a) return !0;
				var c = ["Any"];
				!1 !== this.options.priorityEnabled && (c = this._getConstraintsSortedPriorities());
				for (var d = 0; d < c.length; d++)
					if (!0 !== (this.validationResult = this.validateThroughValidator(b, this.constraints, c[d]))) return !1;
				return !0
			},
			getValue: function () {
				var a;
				return a = "function" == typeof this.options.value ? this.options.value(this) : "undefined" != typeof this.options.value ? this.options.value : this.$element.val(), "undefined" == typeof a || null === a ? "" : this._handleWhitespace(a)
			},
			refreshConstraints: function () {
				return this.actualizeOptions()._bindConstraints()
			},
			addConstraint: function (a, b, c, d) {
				if ("function" == typeof window.ParsleyValidator.validators[a]) {
					var e = new m(this, a, b, c, d);
					"undefined" !== this.constraintsByName[e.name] && this.removeConstraint(e.name), this.constraints.push(e), this.constraintsByName[e.name] = e
				}
				return this
			},
			removeConstraint: function (a) {
				for (var b = 0; b < this.constraints.length; b++)
					if (a === this.constraints[b].name) {
						this.constraints.splice(b, 1);
						break
					}
				return delete this.constraintsByName[a], this
			},
			updateConstraint: function (a, b, c) {
				return this.removeConstraint(a).addConstraint(a, b, c)
			},
			_bindConstraints: function () {
				for (var a = [], b = {}, c = 0; c < this.constraints.length; c++) !1 === this.constraints[c].isDomConstraint && (a.push(this.constraints[c]), b[this.constraints[c].name] = this.constraints[c]);
				this.constraints = a, this.constraintsByName = b;
				for (var d in this.options) this.addConstraint(d, this.options[d]);
				return this._bindHtml5Constraints()
			},
			_bindHtml5Constraints: function () {
				(this.$element.hasClass("required") || this.$element.attr("required")) && this.addConstraint("required", !0, void 0, !0), "string" == typeof this.$element.attr("pattern") && this.addConstraint("pattern", this.$element.attr("pattern"), void 0, !0), "undefined" != typeof this.$element.attr("min") && "undefined" != typeof this.$element.attr("max") ? this.addConstraint("range", [this.$element.attr("min"), this.$element.attr("max")], void 0, !0) : "undefined" != typeof this.$element.attr("min") ? this.addConstraint("min", this.$element.attr("min"), void 0, !0) : "undefined" != typeof this.$element.attr("max") && this.addConstraint("max", this.$element.attr("max"), void 0, !0), "undefined" != typeof this.$element.attr("minlength") && "undefined" != typeof this.$element.attr("maxlength") ? this.addConstraint("length", [this.$element.attr("minlength"), this.$element.attr("maxlength")], void 0, !0) : "undefined" != typeof this.$element.attr("minlength") ? this.addConstraint("minlength", this.$element.attr("minlength"), void 0, !0) : "undefined" != typeof this.$element.attr("maxlength") && this.addConstraint("maxlength", this.$element.attr("maxlength"), void 0, !0);
				var a = this.$element.attr("type");
				return "undefined" == typeof a ? this : "number" === a ? "undefined" == typeof this.$element.attr("step") || 0 === parseFloat(this.$element.attr("step")) % 1 ? this.addConstraint("type", "integer", void 0, !0) : this.addConstraint("type", "number", void 0, !0) : /^(email|url|range)$/i.test(a) ? this.addConstraint("type", a, void 0, !0) : this
			},
			_isRequired: function () {
				return "undefined" == typeof this.constraintsByName.required ? !1 : !1 !== this.constraintsByName.required.requirements
			},
			_trigger: function (a) {
				return a = "field:" + a, this.trigger.apply(this, arguments)
			},
			_handleWhitespace: function (a) {
				return !0 === this.options.trimValue && f.warnOnce('data-parsley-trim-value="true" is deprecated, please use data-parsley-whitespace="trim"'), "squish" === this.options.whitespace && (a = a.replace(/\s{2,}/g, " ")), ("trim" === this.options.whitespace || "squish" === this.options.whitespace || !0 === this.options.trimValue) && (a = a.replace(/^\s+|\s+$/g, "")), a
			},
			_getConstraintsSortedPriorities: function () {
				for (var a = [], b = 0; b < this.constraints.length; b++) - 1 === a.indexOf(this.constraints[b].priority) && a.push(this.constraints[b].priority);
				return a.sort(function (a, b) {
					return b - a
				}), a
			}
		};
		var o = function () {
			this.__class__ = "ParsleyFieldMultiple"
		};
		o.prototype = {
			addElement: function (a) {
				return this.$elements.push(a), this
			},
			refreshConstraints: function () {
				var b;
				if (this.constraints = [], this.$element.is("select")) return this.actualizeOptions()._bindConstraints(), this;
				for (var c = 0; c < this.$elements.length; c++)
					if (a("html").has(this.$elements[c]).length) {
						b = this.$elements[c].data("ParsleyFieldMultiple").refreshConstraints().constraints;
						for (var d = 0; d < b.length; d++) this.addConstraint(b[d].name, b[d].requirements, b[d].priority, b[d].isDomConstraint)
					} else this.$elements.splice(c, 1);
				return this
			},
			getValue: function () {
				if ("undefined" != typeof this.options.value) return this.options.value;
				if (this.$element.is("input[type=radio]")) return this._findRelatedMultiple().filter(":checked").val() || "";
				if (this.$element.is("input[type=checkbox]")) {
					var b = [];
					return this._findRelatedMultiple().filter(":checked").each(function () {
						b.push(a(this).val())
					}), b
				}
				return this.$element.is("select") && null === this.$element.val() ? [] : this.$element.val()
			},
			_init: function () {
				return this.$elements = [this.$element], this
			}
		};
		var p = function (b, c, d) {
			this.$element = a(b);
			var e = this.$element.data("Parsley");
			if (e) return "undefined" != typeof d && e.parent === window.Parsley && (e.parent = d, e._resetOptions(e.options)), e;
			if (!this.$element.length) throw new Error("You must bind Parsley on an existing element.");
			if ("undefined" != typeof d && "ParsleyForm" !== d.__class__) throw new Error("Parent instance must be a ParsleyForm instance");
			return this.parent = d || window.Parsley, this.init(c)
		};
		p.prototype = {
			init: function (a) {
				return this.__class__ = "Parsley", this.__version__ = "2.1.3", this.__id__ = f.generateID(), this._resetOptions(a), this.$element.is("form") || f.checkAttr(this.$element, this.options.namespace, "validate") && !this.$element.is(this.options.inputs) ? this.bind("parsleyForm") : this.isMultiple() ? this.handleMultiple() : this.bind("parsleyField")
			},
			isMultiple: function () {
				return this.$element.is("input[type=radio], input[type=checkbox]") || this.$element.is("select") && "undefined" != typeof this.$element.attr("multiple")
			},
			handleMultiple: function () {
				var b, c, d = this;
				if (this.options.multiple || ("undefined" != typeof this.$element.attr("name") && this.$element.attr("name").length ? this.options.multiple = b = this.$element.attr("name") : "undefined" != typeof this.$element.attr("id") && this.$element.attr("id").length && (this.options.multiple = this.$element.attr("id"))), this.$element.is("select") && "undefined" != typeof this.$element.attr("multiple")) return this.options.multiple = this.options.multiple || this.__id__, this.bind("parsleyFieldMultiple");
				if (!this.options.multiple) return f.warn("To be bound by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.", this.$element), this;
				this.options.multiple = this.options.multiple.replace(/(:|\.|\[|\]|\{|\}|\$)/g, ""), "undefined" != typeof b && a('input[name="' + b + '"]').each(function () {
					a(this).is("input[type=radio], input[type=checkbox]") && a(this).attr(d.options.namespace + "multiple", d.options.multiple)
				});
				for (var e = this._findRelatedMultiple(), g = 0; g < e.length; g++)
					if (c = a(e.get(g)).data("Parsley"), "undefined" != typeof c) {
						this.$element.data("ParsleyFieldMultiple") || c.addElement(this.$element);
						break
					}
				return this.bind("parsleyField", !0), c || this.bind("parsleyFieldMultiple")
			},
			bind: function (b, c) {
				var d;
				switch (b) {
					case "parsleyForm":
						d = a.extend(new l(this.$element, this.domOptions, this.options), window.ParsleyExtend)._bindFields();
						break;
					case "parsleyField":
						d = a.extend(new n(this.$element, this.domOptions, this.options, this.parent), window.ParsleyExtend);
						break;
					case "parsleyFieldMultiple":
						d = a.extend(new n(this.$element, this.domOptions, this.options, this.parent), new o, window.ParsleyExtend)._init();
						break;
					default:
						throw new Error(b + "is not a supported Parsley type")
				}
				return this.options.multiple && f.setAttr(this.$element, this.options.namespace, "multiple", this.options.multiple), "undefined" != typeof c ? (this.$element.data("ParsleyFieldMultiple", d), d) : (this.$element.data("Parsley", d), d._trigger("init"), d)
			}
		};
		var q = a({}),
			r = function () {
				f.warnOnce("Parsley's pubsub module is deprecated; use the 'on' and 'off' methods on parsley instances or window.Parsley")
			},
			s = "parsley:";
		a.listen = function (a, d) {
			var e;
			if (r(), "object" == typeof arguments[1] && "function" == typeof arguments[2] && (e = arguments[1], d = arguments[2]), "function" != typeof arguments[1]) throw new Error("Wrong parameters");
			window.Parsley.on(c(a), b(d, e))
		}, a.listenTo = function (a, d, e) {
			if (r(), !(a instanceof n || a instanceof l)) throw new Error("Must give Parsley instance");
			if ("string" != typeof d || "function" != typeof e) throw new Error("Wrong parameters");
			a.on(c(d), b(e))
		}, a.unsubscribe = function (a, b) {
			if (r(), "string" != typeof a || "function" != typeof b) throw new Error("Wrong arguments");
			window.Parsley.off(c(a), b.parsleyAdaptedCallback)
		}, a.unsubscribeTo = function (a, b) {
			if (r(), !(a instanceof n || a instanceof l)) throw new Error("Must give Parsley instance");
			a.off(c(b))
		}, a.unsubscribeAll = function (b) {
			r(), window.Parsley.off(c(b)), a("form,input,textarea,select").each(function () {
				var d = a(this).data("Parsley");
				d && d.off(c(b))
			})
		}, a.emit = function (a, b) {
			r();
			var d = b instanceof n || b instanceof l,
				e = Array.prototype.slice.call(arguments, d ? 2 : 1);
			e.unshift(c(a)), d || (b = window.Parsley), b.trigger.apply(b, e)
		}, window.ParsleyConfig = window.ParsleyConfig || {}, window.ParsleyConfig.i18n = window.ParsleyConfig.i18n || {}, window.ParsleyConfig.i18n.en = jQuery.extend(window.ParsleyConfig.i18n.en || {}, {
			defaultMessage: "This value seems to be invalid.",
			type: {
				email: "This value should be a valid email.",
				url: "This value should be a valid url.",
				number: "This value should be a valid number.",
				integer: "This value should be a valid integer.",
				digits: "This value should be digits.",
				alphanum: "This value should be alphanumeric."
			},
			notblank: "This value should not be blank.",
			required: "This value is required.",
			pattern: "This value seems to be invalid.",
			min: "This value should be greater than or equal to %s.",
			max: "This value should be lower than or equal to %s.",
			range: "This value should be between %s and %s.",
			minlength: "This value is too short. It should have %s characters or more.",
			maxlength: "This value is too long. It should have %s characters or fewer.",
			length: "This value length is invalid. It should be between %s and %s characters long.",
			mincheck: "You must select at least %s choices.",
			maxcheck: "You must select %s choices or fewer.",
			check: "You must select between %s and %s choices.",
			equalto: "This value should be the same."
		}), "undefined" != typeof window.ParsleyValidator && window.ParsleyValidator.addCatalog("en", window.ParsleyConfig.i18n.en, !0);
		var t = a.extend(new h, {
			$element: a(document),
			actualizeOptions: null,
			_resetOptions: null,
			Factory: p,
			version: "2.1.3"
		});
		return a.extend(n.prototype, h.prototype), a.extend(l.prototype, h.prototype), a.extend(p.prototype, h.prototype), a.fn.parsley = a.fn.psly = function (b) {
			if (this.length > 1) {
				var c = [];
				return this.each(function () {
					c.push(a(this).parsley(b))
				}), c
			}
			return a(this).length ? new p(this, b) : void f.warn("You must bind Parsley on an existing element.")
		}, "undefined" == typeof window.ParsleyExtend && (window.ParsleyExtend = {}), t.options = a.extend(f.objectCreate(g), window.ParsleyConfig), window.ParsleyConfig = t.options, window.Parsley = window.psly = t, window.ParsleyUtils = f, window.ParsleyValidator = new j(window.ParsleyConfig.validators, window.ParsleyConfig.i18n), window.ParsleyUI = "function" == typeof window.ParsleyConfig.ParsleyUI ? (new window.ParsleyConfig.ParsleyUI).listen() : (new k).listen(), !1 !== window.ParsleyConfig.autoBind && a(function () {
			a("[data-parsley-validate]").length && a("[data-parsley-validate]").parsley()
		}), window.Parsley
	}),
	function (a) {
		"use strict";
		"function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
	}(function (a) {
		"use strict";

		function b(a) {
			if (a instanceof Date) return a;
			if (String(a).match(g)) return String(a).match(/^[0-9]*$/) && (a = Number(a)), String(a).match(/\-/) && (a = String(a).replace(/\-/g, "/")), new Date(a);
			throw new Error("Couldn't cast `" + a + "` to a date object.")
		}

		function c(a) {
			var b = a.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
			return new RegExp(b)
		}

		function d(a) {
			return function (b) {
				var d = b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
				if (d)
					for (var f = 0, g = d.length; g > f; ++f) {
						var h = d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
							j = c(h[0]),
							k = h[1] || "",
							l = h[3] || "",
							m = null;
						h = h[2], i.hasOwnProperty(h) && (m = i[h], m = Number(a[m])), null !== m && ("!" === k && (m = e(l, m)), "" === k && 10 > m && (m = "0" + m.toString()), b = b.replace(j, m.toString()))
					}
				return b = b.replace(/%%/, "%")
			}
		}

		function e(a, b) {
			var c = "s",
				d = "";
			return a && (a = a.replace(/(:|;|\s)/gi, "").split(/\,/), 1 === a.length ? c = a[0] : (d = a[0], c = a[1])), 1 === Math.abs(b) ? d : c
		}
		var f = [],
			g = [],
			h = {
				precision: 100,
				elapse: !1
			};
		g.push(/^[0-9]*$/.source), g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g = new RegExp(g.join("|"));
		var i = {
				Y: "years",
				m: "months",
				n: "daysToMonth",
				w: "weeks",
				d: "daysToWeek",
				D: "totalDays",
				H: "hours",
				M: "minutes",
				S: "seconds"
			},
			j = function (b, c, d) {
				this.el = b, this.$el = a(b), this.interval = null, this.offset = {}, this.options = a.extend({}, h), this.instanceNumber = f.length, f.push(this), this.$el.data("countdown-instance", this.instanceNumber), d && ("function" == typeof d ? (this.$el.on("update.countdown", d), this.$el.on("stoped.countdown", d), this.$el.on("finish.countdown", d)) : this.options = a.extend({}, h, d)), this.setFinalDate(c), this.start()
			};
		a.extend(j.prototype, {
			start: function () {
				null !== this.interval && clearInterval(this.interval);
				var a = this;
				this.update(), this.interval = setInterval(function () {
					a.update.call(a)
				}, this.options.precision)
			},
			stop: function () {
				clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped")
			},
			toggle: function () {
				this.interval ? this.stop() : this.start()
			},
			pause: function () {
				this.stop()
			},
			resume: function () {
				this.start()
			},
			remove: function () {
				this.stop.call(this), f[this.instanceNumber] = null, delete this.$el.data().countdownInstance
			},
			setFinalDate: function (a) {
				this.finalDate = b(a)
			},
			update: function () {
				if (0 === this.$el.closest("html").length) return void this.remove();
				var b, c = void 0 !== a._data(this.el, "events"),
					d = new Date;
				b = this.finalDate.getTime() - d.getTime(), b = Math.ceil(b / 1e3), b = !this.options.elapse && 0 > b ? 0 : Math.abs(b), this.totalSecsLeft !== b && c && (this.totalSecsLeft = b, this.elapsed = d >= this.finalDate, this.offset = {
					seconds: this.totalSecsLeft % 60,
					minutes: Math.floor(this.totalSecsLeft / 60) % 60,
					hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
					days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
					daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
					daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
					totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
					weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
					months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
					years: Math.abs(this.finalDate.getFullYear() - d.getFullYear())
				}, this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish")))
			},
			dispatchEvent: function (b) {
				var c = a.Event(b + ".countdown");
				c.finalDate = this.finalDate, c.elapsed = this.elapsed, c.offset = a.extend({}, this.offset), c.strftime = d(this.offset), this.$el.trigger(c)
			}
		}), a.fn.countdown = function () {
			var b = Array.prototype.slice.call(arguments, 0);
			return this.each(function () {
				var c = a(this).data("countdown-instance");
				if (void 0 !== c) {
					var d = f[c],
						e = b[0];
					j.prototype.hasOwnProperty(e) ? d[e].apply(d, b.slice(1)) : null === String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (d.setFinalDate.call(d, e), d.start()) : a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, e))
				} else new j(this, b[0], b[1])
			})
		}
	}), ! function () {
		"use strict";

		function a(d) {
			if (!d) throw new Error("No options passed to Waypoint constructor");
			if (!d.element) throw new Error("No element option passed to Waypoint constructor");
			if (!d.handler) throw new Error("No handler option passed to Waypoint constructor");
			this.key = "waypoint-" + b, this.options = a.Adapter.extend({}, a.defaults, d), this.element = this.options.element, this.adapter = new a.Adapter(this.element), this.callback = d.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = a.Group.findOrCreate({
				name: this.options.group,
				axis: this.axis
			}), this.context = a.Context.findOrCreateByElement(this.options.context), a.offsetAliases[this.options.offset] && (this.options.offset = a.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), c[this.key] = this, b += 1
		}
		var b = 0,
			c = {};
		a.prototype.queueTrigger = function (a) {
			this.group.queueTrigger(this, a)
		}, a.prototype.trigger = function (a) {
			this.enabled && this.callback && this.callback.apply(this, a)
		}, a.prototype.destroy = function () {
			this.context.remove(this), this.group.remove(this), delete c[this.key]
		}, a.prototype.disable = function () {
			return this.enabled = !1, this
		}, a.prototype.enable = function () {
			return this.context.refresh(), this.enabled = !0, this
		}, a.prototype.next = function () {
			return this.group.next(this)
		}, a.prototype.previous = function () {
			return this.group.previous(this)
		}, a.invokeAll = function (a) {
			var b = [];
			for (var d in c) b.push(c[d]);
			for (var e = 0, f = b.length; f > e; e++) b[e][a]()
		}, a.destroyAll = function () {
			a.invokeAll("destroy")
		}, a.disableAll = function () {
			a.invokeAll("disable")
		}, a.enableAll = function () {
			a.invokeAll("enable")
		}, a.refreshAll = function () {
			a.Context.refreshAll()
		}, a.viewportHeight = function () {
			return window.innerHeight || document.documentElement.clientHeight
		}, a.viewportWidth = function () {
			return document.documentElement.clientWidth
		}, a.adapters = [], a.defaults = {
			context: window,
			continuous: !0,
			enabled: !0,
			group: "default",
			horizontal: !1,
			offset: 0
		}, a.offsetAliases = {
			"bottom-in-view": function () {
				return this.context.innerHeight() - this.adapter.outerHeight()
			},
			"right-in-view": function () {
				return this.context.innerWidth() - this.adapter.outerWidth()
			}
		}, window.Waypoint = a
	}(),
	function () {
		"use strict";

		function a(a) {
			window.setTimeout(a, 1e3 / 60)
		}

		function b(a) {
			this.element = a, this.Adapter = e.Adapter, this.adapter = new this.Adapter(a), this.key = "waypoint-context-" + c, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
				x: this.adapter.scrollLeft(),
				y: this.adapter.scrollTop()
			}, this.waypoints = {
				vertical: {},
				horizontal: {}
			}, a.waypointContextKey = this.key, d[a.waypointContextKey] = this, c += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
		}
		var c = 0,
			d = {},
			e = window.Waypoint,
			f = window.onload;
		b.prototype.add = function (a) {
			var b = a.options.horizontal ? "horizontal" : "vertical";
			this.waypoints[b][a.key] = a, this.refresh()
		}, b.prototype.checkEmpty = function () {
			var a = this.Adapter.isEmptyObject(this.waypoints.horizontal),
				b = this.Adapter.isEmptyObject(this.waypoints.vertical);
			a && b && (this.adapter.off(".waypoints"), delete d[this.key])
		}, b.prototype.createThrottledResizeHandler = function () {
			function a() {
				b.handleResize(), b.didResize = !1
			}
			var b = this;
			this.adapter.on("resize.waypoints", function () {
				b.didResize || (b.didResize = !0, e.requestAnimationFrame(a))
			})
		}, b.prototype.createThrottledScrollHandler = function () {
			function a() {
				b.handleScroll(), b.didScroll = !1
			}
			var b = this;
			this.adapter.on("scroll.waypoints", function () {
				(!b.didScroll || e.isTouch) && (b.didScroll = !0, e.requestAnimationFrame(a))
			})
		}, b.prototype.handleResize = function () {
			e.Context.refreshAll()
		}, b.prototype.handleScroll = function () {
			var a = {},
				b = {
					horizontal: {
						newScroll: this.adapter.scrollLeft(),
						oldScroll: this.oldScroll.x,
						forward: "right",
						backward: "left"
					},
					vertical: {
						newScroll: this.adapter.scrollTop(),
						oldScroll: this.oldScroll.y,
						forward: "down",
						backward: "up"
					}
				};
			for (var c in b) {
				var d = b[c],
					e = d.newScroll > d.oldScroll,
					f = e ? d.forward : d.backward;
				for (var g in this.waypoints[c]) {
					var h = this.waypoints[c][g],
						i = d.oldScroll < h.triggerPoint,
						j = d.newScroll >= h.triggerPoint,
						k = i && j,
						l = !i && !j;
					(k || l) && (h.queueTrigger(f), a[h.group.id] = h.group)
				}
			}
			for (var m in a) a[m].flushTriggers();
			this.oldScroll = {
				x: b.horizontal.newScroll,
				y: b.vertical.newScroll
			}
		}, b.prototype.innerHeight = function () {
			return this.element == this.element.window ? e.viewportHeight() : this.adapter.innerHeight()
		}, b.prototype.remove = function (a) {
			delete this.waypoints[a.axis][a.key], this.checkEmpty()
		}, b.prototype.innerWidth = function () {
			return this.element == this.element.window ? e.viewportWidth() : this.adapter.innerWidth()
		}, b.prototype.destroy = function () {
			var a = [];
			for (var b in this.waypoints)
				for (var c in this.waypoints[b]) a.push(this.waypoints[b][c]);
			for (var d = 0, e = a.length; e > d; d++) a[d].destroy()
		}, b.prototype.refresh = function () {
			var a, b = this.element == this.element.window,
				c = b ? void 0 : this.adapter.offset(),
				d = {};
			this.handleScroll(), a = {
				horizontal: {
					contextOffset: b ? 0 : c.left,
					contextScroll: b ? 0 : this.oldScroll.x,
					contextDimension: this.innerWidth(),
					oldScroll: this.oldScroll.x,
					forward: "right",
					backward: "left",
					offsetProp: "left"
				},
				vertical: {
					contextOffset: b ? 0 : c.top,
					contextScroll: b ? 0 : this.oldScroll.y,
					contextDimension: this.innerHeight(),
					oldScroll: this.oldScroll.y,
					forward: "down",
					backward: "up",
					offsetProp: "top"
				}
			};
			for (var f in a) {
				var g = a[f];
				for (var h in this.waypoints[f]) {
					var i, j, k, l, m, n = this.waypoints[f][h],
						o = n.options.offset,
						p = n.triggerPoint,
						q = 0,
						r = null == p;
					n.element !== n.element.window && (q = n.adapter.offset()[g.offsetProp]), "function" == typeof o ? o = o.apply(n) : "string" == typeof o && (o = parseFloat(o), n.options.offset.indexOf("%") > -1 && (o = Math.ceil(g.contextDimension * o / 100))), i = g.contextScroll - g.contextOffset, n.triggerPoint = q + i - o, j = p < g.oldScroll, k = n.triggerPoint >= g.oldScroll, l = j && k, m = !j && !k, !r && l ? (n.queueTrigger(g.backward), d[n.group.id] = n.group) : !r && m ? (n.queueTrigger(g.forward), d[n.group.id] = n.group) : r && g.oldScroll >= n.triggerPoint && (n.queueTrigger(g.forward), d[n.group.id] = n.group)
				}
			}
			return e.requestAnimationFrame(function () {
				for (var a in d) d[a].flushTriggers()
			}), this
		}, b.findOrCreateByElement = function (a) {
			return b.findByElement(a) || new b(a)
		}, b.refreshAll = function () {
			for (var a in d) d[a].refresh()
		}, b.findByElement = function (a) {
			return d[a.waypointContextKey]
		}, window.onload = function () {
			f && f(), b.refreshAll()
		}, e.requestAnimationFrame = function (b) {
			var c = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || a;
			c.call(window, b)
		}, e.Context = b
	}(),
	function () {
		"use strict";

		function a(a, b) {
			return a.triggerPoint - b.triggerPoint
		}

		function b(a, b) {
			return b.triggerPoint - a.triggerPoint
		}

		function c(a) {
			this.name = a.name, this.axis = a.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), d[this.axis][this.name] = this
		}
		var d = {
				vertical: {},
				horizontal: {}
			},
			e = window.Waypoint;
		c.prototype.add = function (a) {
			this.waypoints.push(a)
		}, c.prototype.clearTriggerQueues = function () {
			this.triggerQueues = {
				up: [],
				down: [],
				left: [],
				right: []
			}
		}, c.prototype.flushTriggers = function () {
			for (var c in this.triggerQueues) {
				var d = this.triggerQueues[c],
					e = "up" === c || "left" === c;
				d.sort(e ? b : a);
				for (var f = 0, g = d.length; g > f; f += 1) {
					var h = d[f];
					(h.options.continuous || f === d.length - 1) && h.trigger([c])
				}
			}
			this.clearTriggerQueues()
		}, c.prototype.next = function (b) {
			this.waypoints.sort(a);
			var c = e.Adapter.inArray(b, this.waypoints),
				d = c === this.waypoints.length - 1;
			return d ? null : this.waypoints[c + 1]
		}, c.prototype.previous = function (b) {
			this.waypoints.sort(a);
			var c = e.Adapter.inArray(b, this.waypoints);
			return c ? this.waypoints[c - 1] : null
		}, c.prototype.queueTrigger = function (a, b) {
			this.triggerQueues[b].push(a)
		}, c.prototype.remove = function (a) {
			var b = e.Adapter.inArray(a, this.waypoints);
			b > -1 && this.waypoints.splice(b, 1)
		}, c.prototype.first = function () {
			return this.waypoints[0]
		}, c.prototype.last = function () {
			return this.waypoints[this.waypoints.length - 1]
		}, c.findOrCreate = function (a) {
			return d[a.axis][a.name] || new c(a)
		}, e.Group = c
	}(),
	function () {
		"use strict";

		function a(a) {
			this.$element = b(a)
		}
		var b = window.jQuery,
			c = window.Waypoint;
		b.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (b, c) {
			a.prototype[c] = function () {
				var a = Array.prototype.slice.call(arguments);
				return this.$element[c].apply(this.$element, a)
			}
		}), b.each(["extend", "inArray", "isEmptyObject"], function (c, d) {
			a[d] = b[d]
		}), c.adapters.push({
			name: "jquery",
			Adapter: a
		}), c.Adapter = a
	}(),
	function () {
		"use strict";

		function a(a) {
			return function () {
				var c = [],
					d = arguments[0];
				return a.isFunction(arguments[0]) && (d = a.extend({}, arguments[1]), d.handler = arguments[0]), this.each(function () {
					var e = a.extend({}, d, {
						element: this
					});
					"string" == typeof e.context && (e.context = a(this).closest(e.context)[0]), c.push(new b(e))
				}), c
			}
		}
		var b = window.Waypoint;
		window.jQuery && (window.jQuery.fn.waypoint = a(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = a(window.Zepto))
	}(),
	function (a) {
		"function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
	}(function (a) {
		var b, c, d, e, f, g, h, i = "Close",
			j = "BeforeClose",
			k = "AfterClose",
			l = "BeforeAppend",
			m = "MarkupParse",
			n = "Open",
			o = "Change",
			p = "mfp",
			q = "." + p,
			r = "mfp-ready",
			s = "mfp-removing",
			t = "mfp-prevent-close",
			u = function () {},
			v = !!window.jQuery,
			w = a(window),
			x = function (a, c) {
				b.ev.on(p + a + q, c)
			},
			y = function (b, c, d, e) {
				var f = document.createElement("div");
				return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
			},
			z = function (c, d) {
				b.ev.triggerHandler(p + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
			},
			A = function (c) {
				return c === h && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), h = c), b.currTemplate.closeBtn
			},
			B = function () {
				a.magnificPopup.instance || (b = new u, b.init(), a.magnificPopup.instance = b)
			},
			C = function () {
				var a = document.createElement("p").style,
					b = ["ms", "O", "Moz", "Webkit"];
				if (void 0 !== a.transition) return !0;
				for (; b.length;)
					if (b.pop() + "Transition" in a) return !0;
				return !1
			};
		u.prototype = {
			constructor: u,
			init: function () {
				var c = navigator.appVersion;
				b.isIE7 = -1 !== c.indexOf("MSIE 7."), b.isIE8 = -1 !== c.indexOf("MSIE 8."), b.isLowIE = b.isIE7 || b.isIE8, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = C(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), e = a(document), b.popupsCache = {}
			},
			open: function (c) {
				d || (d = a(document.body));
				var f;
				if (c.isObj === !1) {
					b.items = c.items.toArray(), b.index = 0;
					var h, i = c.items;
					for (f = 0; f < i.length; f++)
						if (h = i[f], h.parsed && (h = h.el[0]), h === c.el[0]) {
							b.index = f;
							break
						}
				} else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
				if (b.isOpen) return void b.updateItemHTML();
				b.types = [], g = "", b.ev = c.mainEl && c.mainEl.length ? c.mainEl.eq(0) : e, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = y("bg").on("click" + q, function () {
					b.close()
				}), b.wrap = y("wrap").attr("tabindex", -1).on("click" + q, function (a) {
					b._checkIfClose(a.target) && b.close()
				}), b.container = y("container", b.wrap)), b.contentContainer = y("content"), b.st.preloader && (b.preloader = y("preloader", b.container, b.st.tLoading));
				var j = a.magnificPopup.modules;
				for (f = 0; f < j.length; f++) {
					var k = j[f];
					k = k.charAt(0).toUpperCase() + k.slice(1), b["init" + k].call(b)
				}
				z("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (x(m, function (a, b, c, d) {
					c.close_replaceWith = A(d.type)
				}), g += " mfp-close-btn-in") : b.wrap.append(A())), b.st.alignTop && (g += " mfp-align-top"), b.wrap.css(b.fixedContentPos ? {
					overflow: b.st.overflowY,
					overflowX: "hidden",
					overflowY: b.st.overflowY
				} : {
					top: w.scrollTop(),
					position: "absolute"
				}), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
					height: e.height(),
					position: "absolute"
				}), b.st.enableEscapeKey && e.on("keyup" + q, function (a) {
					27 === a.keyCode && b.close()
				}), w.on("resize" + q, function () {
					b.updateSize()
				}), b.st.closeOnContentClick || (g += " mfp-auto-cursor"), g && b.wrap.addClass(g);
				var l = b.wH = w.height(),
					o = {};
				if (b.fixedContentPos && b._hasScrollBar(l)) {
					var p = b._getScrollbarSize();
					p && (o.marginRight = p)
				}
				b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : o.overflow = "hidden");
				var s = b.st.mainClass;
				return b.isIE7 && (s += " mfp-ie7"), s && b._addClassToMFP(s), b.updateItemHTML(), z("BuildControls"), a("html").css(o), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || d), b._lastFocusedEl = document.activeElement, setTimeout(function () {
					b.content ? (b._addClassToMFP(r), b._setFocus()) : b.bgOverlay.addClass(r), e.on("focusin" + q, b._onFocusIn)
				}, 16), b.isOpen = !0, b.updateSize(l), z(n), c
			},
			close: function () {
				b.isOpen && (z(j), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(s), setTimeout(function () {
					b._close()
				}, b.st.removalDelay)) : b._close())
			},
			_close: function () {
				z(i);
				var c = s + " " + r + " ";
				if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
					var d = {
						marginRight: ""
					};
					b.isIE7 ? a("body, html").css("overflow", "") : d.overflow = "", a("html").css(d)
				}
				e.off("keyup" + q + " focusin" + q), b.ev.off(q), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, z(k)
			},
			updateSize: function (a) {
				if (b.isIOS) {
					var c = document.documentElement.clientWidth / window.innerWidth,
						d = window.innerHeight * c;
					b.wrap.css("height", d), b.wH = d
				} else b.wH = a || w.height();
				b.fixedContentPos || b.wrap.css("height", b.wH), z("Resize")
			},
			updateItemHTML: function () {
				var c = b.items[b.index];
				b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
				var d = c.type;
				if (z("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
					var e = b.st[d] ? b.st[d].markup : !1;
					z("FirstMarkupParse", e), b.currTemplate[d] = e ? a(e) : !0
				}
				f && f !== c.type && b.container.removeClass("mfp-" + f + "-holder");
				var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
				b.appendContent(g, d), c.preloaded = !0, z(o, c), f = c.type, b.container.prepend(b.contentContainer), z("AfterChange")
			},
			appendContent: function (a, c) {
				b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(A()) : b.content = a : b.content = "", z(l), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
			},
			parseEl: function (c) {
				var d, e = b.items[c];
				if (e.tagName ? e = {
						el: a(e)
					} : (d = e.type, e = {
						data: e,
						src: e.src
					}), e.el) {
					for (var f = b.types, g = 0; g < f.length; g++)
						if (e.el.hasClass("mfp-" + f[g])) {
							d = f[g];
							break
						}
					e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
				}
				return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, z("ElementParse", e), b.items[c]
			},
			addGroup: function (a, c) {
				var d = function (d) {
					d.mfpEl = this, b._openClick(d, a, c)
				};
				c || (c = {});
				var e = "click.magnificPopup";
				c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
			},
			_openClick: function (c, d, e) {
				var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
				if (f || 2 !== c.which && !c.ctrlKey && !c.metaKey) {
					var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
					if (g)
						if (a.isFunction(g)) {
							if (!g.call(b)) return !0
						} else if (w.width() < g) return !0;
					c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
				}
			},
			updateStatus: function (a, d) {
				if (b.preloader) {
					c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
					var e = {
						status: a,
						text: d
					};
					z("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) {
						a.stopImmediatePropagation()
					}), b.container.addClass("mfp-s-" + a), c = a
				}
			},
			_checkIfClose: function (c) {
				if (!a(c).hasClass(t)) {
					var d = b.st.closeOnContentClick,
						e = b.st.closeOnBgClick;
					if (d && e) return !0;
					if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
					if (c === b.content[0] || a.contains(b.content[0], c)) {
						if (d) return !0
					} else if (e && a.contains(document, c)) return !0;
					return !1
				}
			},
			_addClassToMFP: function (a) {
				b.bgOverlay.addClass(a), b.wrap.addClass(a)
			},
			_removeClassFromMFP: function (a) {
				this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
			},
			_hasScrollBar: function (a) {
				return (b.isIE7 ? e.height() : document.body.scrollHeight) > (a || w.height())
			},
			_setFocus: function () {
				(b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
			},
			_onFocusIn: function (c) {
				return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
			},
			_parseMarkup: function (b, c, d) {
				var e;
				d.data && (c = a.extend(d.data, c)), z(m, [b, c, d]), a.each(c, function (a, c) {
					if (void 0 === c || c === !1) return !0;
					if (e = a.split("_"), e.length > 1) {
						var d = b.find(q + "-" + e[0]);
						if (d.length > 0) {
							var f = e[1];
							"replaceWith" === f ? d[0] !== c[0] && d.replaceWith(c) : "img" === f ? d.is("img") ? d.attr("src", c) : d.replaceWith('<img src="' + c + '" class="' + d.attr("class") + '" />') : d.attr(e[1], c)
						}
					} else b.find(q + "-" + a).html(c)
				})
			},
			_getScrollbarSize: function () {
				if (void 0 === b.scrollbarSize) {
					var a = document.createElement("div");
					a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
				}
				return b.scrollbarSize
			}
		}, a.magnificPopup = {
			instance: null,
			proto: u.prototype,
			modules: [],
			open: function (b, c) {
				return B(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
			},
			close: function () {
				return a.magnificPopup.instance && a.magnificPopup.instance.close()
			},
			registerModule: function (b, c) {
				c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
			},
			defaults: {
				disableOn: 0,
				key: null,
				midClick: !1,
				mainClass: "",
				preloader: !0,
				focus: "",
				closeOnContentClick: !1,
				closeOnBgClick: !0,
				closeBtnInside: !0,
				showCloseBtn: !0,
				enableEscapeKey: !0,
				modal: !1,
				alignTop: !1,
				removalDelay: 0,
				prependTo: null,
				fixedContentPos: "auto",
				fixedBgPos: "auto",
				overflowY: "auto",
				closeMarkup: '<button title="%title%" type="button" class="mfp-close">×</button>',
				tClose: "Close (Esc)",
				tLoading: "Loading..."
			}
		}, a.fn.magnificPopup = function (c) {
			B();
			var d = a(this);
			if ("string" == typeof c)
				if ("open" === c) {
					var e, f = v ? d.data("magnificPopup") : d[0].magnificPopup,
						g = parseInt(arguments[1], 10) || 0;
					f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
						mfpEl: e
					}, d, f)
				} else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
			else c = a.extend(!0, {}, c), v ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
			return d
		};
		var D, E, F, G = "inline",
			H = function () {
				F && (E.after(F.addClass(D)).detach(), F = null)
			};
		a.magnificPopup.registerModule(G, {
			options: {
				hiddenClass: "hide",
				markup: "",
				tNotFound: "Content not found"
			},
			proto: {
				initInline: function () {
					b.types.push(G), x(i + "." + G, function () {
						H()
					})
				},
				getInline: function (c, d) {
					if (H(), c.src) {
						var e = b.st.inline,
							f = a(c.src);
						if (f.length) {
							var g = f[0].parentNode;
							g && g.tagName && (E || (D = e.hiddenClass, E = y(D), D = "mfp-" + D), F = f.after(E).detach().removeClass(D)), b.updateStatus("ready")
						} else b.updateStatus("error", e.tNotFound), f = a("<div>");
						return c.inlineElement = f, f
					}
					return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
				}
			}
		});
		var I, J = "ajax",
			K = function () {
				I && d.removeClass(I)
			},
			L = function () {
				K(), b.req && b.req.abort()
			};
		a.magnificPopup.registerModule(J, {
			options: {
				settings: null,
				cursor: "mfp-ajax-cur",
				tError: '<a href="%url%">The content</a> could not be loaded.'
			},
			proto: {
				initAjax: function () {
					b.types.push(J), I = b.st.ajax.cursor, x(i + "." + J, L), x("BeforeChange." + J, L)
				},
				getAjax: function (c) {
					I && d.addClass(I), b.updateStatus("loading");
					var e = a.extend({
						url: c.src,
						success: function (d, e, f) {
							var g = {
								data: d,
								xhr: f
							};
							z("ParseAjax", g), b.appendContent(a(g.data), J), c.finished = !0, K(), b._setFocus(), setTimeout(function () {
								b.wrap.addClass(r)
							}, 16), b.updateStatus("ready"), z("AjaxContentAdded")
						},
						error: function () {
							K(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
						}
					}, b.st.ajax.settings);
					return b.req = a.ajax(e), ""
				}
			}
		});
		var M, N = function (c) {
			if (c.data && void 0 !== c.data.title) return c.data.title;
			var d = b.st.image.titleSrc;
			if (d) {
				if (a.isFunction(d)) return d.call(b, c);
				if (c.el) return c.el.attr(d) || ""
			}
			return ""
		};
		a.magnificPopup.registerModule("image", {
			options: {
				markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
				cursor: "mfp-zoom-out-cur",
				titleSrc: "title",
				verticalFit: !0,
				tError: '<a href="%url%">The image</a> could not be loaded.'
			},
			proto: {
				initImage: function () {
					var a = b.st.image,
						c = ".image";
					b.types.push("image"), x(n + c, function () {
						"image" === b.currItem.type && a.cursor && d.addClass(a.cursor)
					}), x(i + c, function () {
						a.cursor && d.removeClass(a.cursor), w.off("resize" + q)
					}), x("Resize" + c, b.resizeImage), b.isLowIE && x("AfterChange", b.resizeImage)
				},
				resizeImage: function () {
					var a = b.currItem;
					if (a && a.img && b.st.image.verticalFit) {
						var c = 0;
						b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
					}
				},
				_onImageHasSize: function (a) {
					a.img && (a.hasSize = !0, M && clearInterval(M), a.isCheckingImgSize = !1, z("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
				},
				findImageSize: function (a) {
					var c = 0,
						d = a.img[0],
						e = function (f) {
							M && clearInterval(M), M = setInterval(function () {
								return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(M), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
							}, f)
						};
					e(1)
				},
				getImage: function (c, d) {
					var e = 0,
						f = function () {
							c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, z("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
						},
						g = function () {
							c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
						},
						h = b.st.image,
						i = d.find(".mfp-img");
					if (i.length) {
						var j = document.createElement("img");
						j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
					}
					return b._parseMarkup(d, {
						title: N(c),
						img_replaceWith: c.img
					}, c), b.resizeImage(), c.hasSize ? (M && clearInterval(M), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
				}
			}
		});
		var O, P = function () {
			return void 0 === O && (O = void 0 !== document.createElement("p").style.MozTransform), O
		};
		a.magnificPopup.registerModule("zoom", {
			options: {
				enabled: !1,
				easing: "ease-in-out",
				duration: 300,
				opener: function (a) {
					return a.is("img") ? a : a.find("img")
				}
			},
			proto: {
				initZoom: function () {
					var a, c = b.st.zoom,
						d = ".zoom";
					if (c.enabled && b.supportsTransition) {
						var e, f, g = c.duration,
							h = function (a) {
								var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
									d = "all " + c.duration / 1e3 + "s " + c.easing,
									e = {
										position: "fixed",
										zIndex: 9999,
										left: 0,
										top: 0,
										"-webkit-backface-visibility": "hidden"
									},
									f = "transition";
								return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
							},
							k = function () {
								b.content.css("visibility", "visible")
							};
						x("BuildControls" + d, function () {
							if (b._allowZoom()) {
								if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
								f = h(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () {
									f.css(b._getOffset(!0)), e = setTimeout(function () {
										k(), setTimeout(function () {
											f.remove(), a = f = null, z("ZoomAnimationEnded")
										}, 16)
									}, g)
								}, 16)
							}
						}), x(j + d, function () {
							if (b._allowZoom()) {
								if (clearTimeout(e), b.st.removalDelay = g, !a) {
									if (a = b._getItemToZoom(), !a) return;
									f = h(a)
								}
								f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () {
									f.css(b._getOffset())
								}, 16)
							}
						}), x(i + d, function () {
							b._allowZoom() && (k(), f && f.remove(), a = null)
						})
					}
				},
				_allowZoom: function () {
					return "image" === b.currItem.type
				},
				_getItemToZoom: function () {
					return b.currItem.hasSize ? b.currItem.img : !1
				},
				_getOffset: function (c) {
					var d;
					d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
					var e = d.offset(),
						f = parseInt(d.css("padding-top"), 10),
						g = parseInt(d.css("padding-bottom"), 10);
					e.top -= a(window).scrollTop() - f;
					var h = {
						width: d.width(),
						height: (v ? d.innerHeight() : d[0].offsetHeight) - g - f
					};
					return P() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
				}
			}
		});
		var Q = "iframe",
			R = "//about:blank",
			S = function (a) {
				if (b.currTemplate[Q]) {
					var c = b.currTemplate[Q].find("iframe");
					c.length && (a || (c[0].src = R), b.isIE8 && c.css("display", a ? "block" : "none"))
				}
			};
		a.magnificPopup.registerModule(Q, {
			options: {
				markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
				srcAction: "iframe_src",
				patterns: {
					youtube: {
						index: "youtube.com",
						id: "v=",
						src: "//www.youtube.com/embed/%id%?autoplay=1"
					},
					vimeo: {
						index: "vimeo.com/",
						id: "/",
						src: "//player.vimeo.com/video/%id%?autoplay=1"
					},
					gmaps: {
						index: "//maps.google.",
						src: "%id%&output=embed"
					}
				}
			},
			proto: {
				initIframe: function () {
					b.types.push(Q), x("BeforeChange", function (a, b, c) {
						b !== c && (b === Q ? S() : c === Q && S(!0))
					}), x(i + "." + Q, function () {
						S()
					})
				},
				getIframe: function (c, d) {
					var e = c.src,
						f = b.st.iframe;
					a.each(f.patterns, function () {
						return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
					});
					var g = {};
					return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
				}
			}
		});
		var T = function (a) {
				var c = b.items.length;
				return a > c - 1 ? a - c : 0 > a ? c + a : a
			},
			U = function (a, b, c) {
				return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
			};
		a.magnificPopup.registerModule("gallery", {
			options: {
				enabled: !1,
				arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
				preload: [0, 2],
				navigateByImgClick: !0,
				arrows: !0,
				tPrev: "Previous (Left arrow key)",
				tNext: "Next (Right arrow key)",
				tCounter: "%curr% of %total%"
			},
			proto: {
				initGallery: function () {
					var c = b.st.gallery,
						d = ".mfp-gallery",
						f = Boolean(a.fn.mfpFastClick);
					return b.direction = !0, c && c.enabled ? (g += " mfp-gallery", x(n + d, function () {
						c.navigateByImgClick && b.wrap.on("click" + d, ".mfp-img", function () {
							return b.items.length > 1 ? (b.next(), !1) : void 0
						}), e.on("keydown" + d, function (a) {
							37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
						})
					}), x("UpdateStatus" + d, function (a, c) {
						c.text && (c.text = U(c.text, b.currItem.index, b.items.length))
					}), x(m + d, function (a, d, e, f) {
						var g = b.items.length;
						e.counter = g > 1 ? U(c.tCounter, f.index, g) : ""
					}), x("BuildControls" + d, function () {
						if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
							var d = c.arrowMarkup,
								e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(t),
								g = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(t),
								h = f ? "mfpFastClick" : "click";
							e[h](function () {
								b.prev()
							}), g[h](function () {
								b.next()
							}), b.isIE7 && (y("b", e[0], !1, !0), y("a", e[0], !1, !0), y("b", g[0], !1, !0), y("a", g[0], !1, !0)), b.container.append(e.add(g))
						}
					}), x(o + d, function () {
						b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () {
							b.preloadNearbyImages(), b._preloadTimeout = null
						}, 16)
					}), void x(i + d, function () {
						e.off(d), b.wrap.off("click" + d), b.arrowLeft && f && b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(), b.arrowRight = b.arrowLeft = null
					})) : !1
				},
				next: function () {
					b.direction = !0, b.index = T(b.index + 1), b.updateItemHTML()
				},
				prev: function () {
					b.direction = !1, b.index = T(b.index - 1), b.updateItemHTML()
				},
				goTo: function (a) {
					b.direction = a >= b.index, b.index = a, b.updateItemHTML()
				},
				preloadNearbyImages: function () {
					var a, c = b.st.gallery.preload,
						d = Math.min(c[0], b.items.length),
						e = Math.min(c[1], b.items.length);
					for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
					for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
				},
				_preloadItem: function (c) {
					if (c = T(c), !b.items[c].preloaded) {
						var d = b.items[c];
						d.parsed || (d = b.parseEl(c)), z("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () {
							d.hasSize = !0
						}).on("error.mfploader", function () {
							d.hasSize = !0, d.loadError = !0, z("LazyLoadError", d)
						}).attr("src", d.src)), d.preloaded = !0
					}
				}
			}
		});
		var V = "retina";
		a.magnificPopup.registerModule(V, {
				options: {
					replaceSrc: function (a) {
						return a.src.replace(/\.\w+$/, function (a) {
							return "@2x" + a
						})
					},
					ratio: 1
				},
				proto: {
					initRetina: function () {
						if (window.devicePixelRatio > 1) {
							var a = b.st.retina,
								c = a.ratio;
							c = isNaN(c) ? c() : c, c > 1 && (x("ImageHasSize." + V, function (a, b) {
								b.img.css({
									"max-width": b.img[0].naturalWidth / c,
									width: "100%"
								})
							}), x("ElementParse." + V, function (b, d) {
								d.src = a.replaceSrc(d, c)
							}))
						}
					}
				}
			}),
			function () {
				var b = 1e3,
					c = "ontouchstart" in window,
					d = function () {
						w.off("touchmove" + f + " touchend" + f)
					},
					e = "mfpFastClick",
					f = "." + e;
				a.fn.mfpFastClick = function (e) {
					return a(this).each(function () {
						var g, h = a(this);
						if (c) {
							var i, j, k, l, m, n;
							h.on("touchstart" + f, function (a) {
								l = !1, n = 1, m = a.originalEvent ? a.originalEvent.touches[0] : a.touches[0], j = m.clientX, k = m.clientY, w.on("touchmove" + f, function (a) {
									m = a.originalEvent ? a.originalEvent.touches : a.touches, n = m.length, m = m[0], (Math.abs(m.clientX - j) > 10 || Math.abs(m.clientY - k) > 10) && (l = !0, d())
								}).on("touchend" + f, function (a) {
									d(), l || n > 1 || (g = !0, a.preventDefault(), clearTimeout(i), i = setTimeout(function () {
										g = !1
									}, b), e())
								})
							})
						}
						h.on("click" + f, function () {
							g || e()
						})
					})
				}, a.fn.destroyMfpFastClick = function () {
					a(this).off("touchstart" + f + " click" + f), c && w.off("touchmove" + f + " touchend" + f)
				}
			}(), B()
	});