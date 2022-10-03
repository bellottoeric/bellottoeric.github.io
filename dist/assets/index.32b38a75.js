(function () { const e = document.createElement("link").relList; if (e && e.supports && e.supports("modulepreload")) return; for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i); new MutationObserver(i => { for (const r of i) if (r.type === "childList") for (const o of r.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && n(o) }).observe(document, { childList: !0, subtree: !0 }); function t(i) { const r = {}; return i.integrity && (r.integrity = i.integrity), i.referrerpolicy && (r.referrerPolicy = i.referrerpolicy), i.crossorigin === "use-credentials" ? r.credentials = "include" : i.crossorigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r } function n(i) { if (i.ep) return; i.ep = !0; const r = t(i); fetch(i.href, r) } })();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gs = "143", Nn = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 }, zn = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, Za = 0, Ns = 1, Ja = 2, ca = 1, $a = 2, mi = 3, Si = 0, Ct = 1, ln = 2, Ka = 1, on = 0, ei = 1, zs = 2, Os = 3, Us = 4, Qa = 5, $n = 100, el = 101, tl = 102, Bs = 103, Gs = 104, nl = 200, il = 201, rl = 202, sl = 203, ua = 204, ha = 205, ol = 206, al = 207, ll = 208, cl = 209, ul = 210, hl = 0, dl = 1, fl = 2, ns = 3, pl = 4, ml = 5, gl = 6, _l = 7, da = 0, xl = 1, vl = 2, Yt = 0, yl = 1, Ml = 2, Sl = 3, bl = 4, wl = 5, fa = 300, ii = 301, ri = 302, is = 303, rs = 304, ur = 306, ss = 1e3, At = 1001, os = 1002, at = 1003, ks = 1004, Vs = 1005, xt = 1006, El = 1007, hr = 1008, wn = 1009, Tl = 1010, Al = 1011, pa = 1012, Cl = 1013, vn = 1014, yn = 1015, bi = 1016, Ll = 1017, Pl = 1018, ti = 1020, Dl = 1021, Rl = 1022, Rt = 1023, Il = 1024, Fl = 1025, Sn = 1026, si = 1027, Nl = 1028, zl = 1029, Ol = 1030, Ul = 1031, Bl = 1033, yr = 33776, Mr = 33777, Sr = 33778, br = 33779, Hs = 35840, Ws = 35841, Xs = 35842, qs = 35843, Gl = 36196, Ys = 37492, js = 37496, Zs = 37808, Js = 37809, $s = 37810, Ks = 37811, Qs = 37812, eo = 37813, to = 37814, no = 37815, io = 37816, ro = 37817, so = 37818, oo = 37819, ao = 37820, lo = 37821, co = 36492, En = 3e3, ke = 3001, kl = 3200, Vl = 3201, ma = 0, Hl = 1, Wt = "srgb", Mn = "srgb-linear", wr = 7680, Wl = 519, uo = 35044, ho = "300 es", as = 1035; class Pn { addEventListener(e, t) { this._listeners === void 0 && (this._listeners = {}); const n = this._listeners; n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t) } hasEventListener(e, t) { if (this._listeners === void 0) return !1; const n = this._listeners; return n[e] !== void 0 && n[e].indexOf(t) !== -1 } removeEventListener(e, t) { if (this._listeners === void 0) return; const i = this._listeners[e]; if (i !== void 0) { const r = i.indexOf(t); r !== -1 && i.splice(r, 1) } } dispatchEvent(e) { if (this._listeners === void 0) return; const n = this._listeners[e.type]; if (n !== void 0) { e.target = this; const i = n.slice(0); for (let r = 0, o = i.length; r < o; r++)i[r].call(this, e); e.target = null } } } const nt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"]; let fo = 1234567; const xi = Math.PI / 180, sr = 180 / Math.PI; function Dn() { const s = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0; return (nt[s & 255] + nt[s >> 8 & 255] + nt[s >> 16 & 255] + nt[s >> 24 & 255] + "-" + nt[e & 255] + nt[e >> 8 & 255] + "-" + nt[e >> 16 & 15 | 64] + nt[e >> 24 & 255] + "-" + nt[t & 63 | 128] + nt[t >> 8 & 255] + "-" + nt[t >> 16 & 255] + nt[t >> 24 & 255] + nt[n & 255] + nt[n >> 8 & 255] + nt[n >> 16 & 255] + nt[n >> 24 & 255]).toLowerCase() } function tt(s, e, t) { return Math.max(e, Math.min(t, s)) } function _s(s, e) { return (s % e + e) % e } function Xl(s, e, t, n, i) { return n + (s - e) * (i - n) / (t - e) } function ql(s, e, t) { return s !== e ? (t - s) / (e - s) : 0 } function vi(s, e, t) { return (1 - t) * s + t * e } function Yl(s, e, t, n) { return vi(s, e, 1 - Math.exp(-t * n)) } function jl(s, e = 1) { return e - Math.abs(_s(s, e * 2) - e) } function Zl(s, e, t) { return s <= e ? 0 : s >= t ? 1 : (s = (s - e) / (t - e), s * s * (3 - 2 * s)) } function Jl(s, e, t) { return s <= e ? 0 : s >= t ? 1 : (s = (s - e) / (t - e), s * s * s * (s * (s * 6 - 15) + 10)) } function $l(s, e) { return s + Math.floor(Math.random() * (e - s + 1)) } function Kl(s, e) { return s + Math.random() * (e - s) } function Ql(s) { return s * (.5 - Math.random()) } function ec(s) { s !== void 0 && (fo = s); let e = fo += 1831565813; return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296 } function tc(s) { return s * xi } function nc(s) { return s * sr } function ls(s) { return (s & s - 1) === 0 && s !== 0 } function ic(s) { return Math.pow(2, Math.ceil(Math.log(s) / Math.LN2)) } function or(s) { return Math.pow(2, Math.floor(Math.log(s) / Math.LN2)) } function rc(s, e, t, n, i) { const r = Math.cos, o = Math.sin, a = r(t / 2), c = o(t / 2), l = r((e + n) / 2), u = o((e + n) / 2), h = r((e - n) / 2), f = o((e - n) / 2), p = r((n - e) / 2), g = o((n - e) / 2); switch (i) { case "XYX": s.set(a * u, c * h, c * f, a * l); break; case "YZY": s.set(c * f, a * u, c * h, a * l); break; case "ZXZ": s.set(c * h, c * f, a * u, a * l); break; case "XZX": s.set(a * u, c * g, c * p, a * l); break; case "YXY": s.set(c * p, a * u, c * g, a * l); break; case "ZYZ": s.set(c * g, c * p, a * u, a * l); break; default: console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i) } } function sc(s, e) { switch (e.constructor) { case Float32Array: return s; case Uint16Array: return s / 65535; case Uint8Array: return s / 255; case Int16Array: return Math.max(s / 32767, -1); case Int8Array: return Math.max(s / 127, -1); default: throw new Error("Invalid component type.") } } function oc(s, e) { switch (e.constructor) { case Float32Array: return s; case Uint16Array: return Math.round(s * 65535); case Uint8Array: return Math.round(s * 255); case Int16Array: return Math.round(s * 32767); case Int8Array: return Math.round(s * 127); default: throw new Error("Invalid component type.") } } var ac = Object.freeze({ __proto__: null, DEG2RAD: xi, RAD2DEG: sr, generateUUID: Dn, clamp: tt, euclideanModulo: _s, mapLinear: Xl, inverseLerp: ql, lerp: vi, damp: Yl, pingpong: jl, smoothstep: Zl, smootherstep: Jl, randInt: $l, randFloat: Kl, randFloatSpread: Ql, seededRandom: ec, degToRad: tc, radToDeg: nc, isPowerOfTwo: ls, ceilPowerOfTwo: ic, floorPowerOfTwo: or, setQuaternionFromProperEuler: rc, normalize: oc, denormalize: sc }); class le { constructor(e = 0, t = 0) { le.prototype.isVector2 = !0, this.x = e, this.y = t } get width() { return this.x } set width(e) { this.x = e } get height() { return this.y } set height(e) { this.y = e } set(e, t) { return this.x = e, this.y = t, this } setScalar(e) { return this.x = e, this.y = e, this } setX(e) { return this.x = e, this } setY(e) { return this.y = e, this } setComponent(e, t) { switch (e) { case 0: this.x = t; break; case 1: this.y = t; break; default: throw new Error("index is out of range: " + e) }return this } getComponent(e) { switch (e) { case 0: return this.x; case 1: return this.y; default: throw new Error("index is out of range: " + e) } } clone() { return new this.constructor(this.x, this.y) } copy(e) { return this.x = e.x, this.y = e.y, this } add(e) { return this.x += e.x, this.y += e.y, this } addScalar(e) { return this.x += e, this.y += e, this } addVectors(e, t) { return this.x = e.x + t.x, this.y = e.y + t.y, this } addScaledVector(e, t) { return this.x += e.x * t, this.y += e.y * t, this } sub(e) { return this.x -= e.x, this.y -= e.y, this } subScalar(e) { return this.x -= e, this.y -= e, this } subVectors(e, t) { return this.x = e.x - t.x, this.y = e.y - t.y, this } multiply(e) { return this.x *= e.x, this.y *= e.y, this } multiplyScalar(e) { return this.x *= e, this.y *= e, this } divide(e) { return this.x /= e.x, this.y /= e.y, this } divideScalar(e) { return this.multiplyScalar(1 / e) } applyMatrix3(e) { const t = this.x, n = this.y, i = e.elements; return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this } min(e) { return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this } max(e) { return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this } clamp(e, t) { return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this } clampScalar(e, t) { return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this } clampLength(e, t) { const n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n))) } floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this } ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this } round() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this } roundToZero() { return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this } negate() { return this.x = -this.x, this.y = -this.y, this } dot(e) { return this.x * e.x + this.y * e.y } cross(e) { return this.x * e.y - this.y * e.x } lengthSq() { return this.x * this.x + this.y * this.y } length() { return Math.sqrt(this.x * this.x + this.y * this.y) } manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) } normalize() { return this.divideScalar(this.length() || 1) } angle() { return Math.atan2(-this.y, -this.x) + Math.PI } distanceTo(e) { return Math.sqrt(this.distanceToSquared(e)) } distanceToSquared(e) { const t = this.x - e.x, n = this.y - e.y; return t * t + n * n } manhattanDistanceTo(e) { return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) } setLength(e) { return this.normalize().multiplyScalar(e) } lerp(e, t) { return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this } lerpVectors(e, t, n) { return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this } equals(e) { return e.x === this.x && e.y === this.y } fromArray(e, t = 0) { return this.x = e[t], this.y = e[t + 1], this } toArray(e = [], t = 0) { return e[t] = this.x, e[t + 1] = this.y, e } fromBufferAttribute(e, t) { return this.x = e.getX(t), this.y = e.getY(t), this } rotateAround(e, t) { const n = Math.cos(t), i = Math.sin(t), r = this.x - e.x, o = this.y - e.y; return this.x = r * n - o * i + e.x, this.y = r * i + o * n + e.y, this } random() { return this.x = Math.random(), this.y = Math.random(), this } *[Symbol.iterator]() { yield this.x, yield this.y } } class vt { constructor() { vt.prototype.isMatrix3 = !0, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1] } set(e, t, n, i, r, o, a, c, l) { const u = this.elements; return u[0] = e, u[1] = i, u[2] = a, u[3] = t, u[4] = r, u[5] = c, u[6] = n, u[7] = o, u[8] = l, this } identity() { return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this } copy(e) { const t = this.elements, n = e.elements; return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this } extractBasis(e, t, n) { return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this } setFromMatrix4(e) { const t = e.elements; return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this } multiply(e) { return this.multiplyMatrices(this, e) } premultiply(e) { return this.multiplyMatrices(e, this) } multiplyMatrices(e, t) { const n = e.elements, i = t.elements, r = this.elements, o = n[0], a = n[3], c = n[6], l = n[1], u = n[4], h = n[7], f = n[2], p = n[5], g = n[8], m = i[0], d = i[3], _ = i[6], v = i[1], T = i[4], S = i[7], y = i[2], C = i[5], D = i[8]; return r[0] = o * m + a * v + c * y, r[3] = o * d + a * T + c * C, r[6] = o * _ + a * S + c * D, r[1] = l * m + u * v + h * y, r[4] = l * d + u * T + h * C, r[7] = l * _ + u * S + h * D, r[2] = f * m + p * v + g * y, r[5] = f * d + p * T + g * C, r[8] = f * _ + p * S + g * D, this } multiplyScalar(e) { const t = this.elements; return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this } determinant() { const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], o = e[4], a = e[5], c = e[6], l = e[7], u = e[8]; return t * o * u - t * a * l - n * r * u + n * a * c + i * r * l - i * o * c } invert() { const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], o = e[4], a = e[5], c = e[6], l = e[7], u = e[8], h = u * o - a * l, f = a * c - u * r, p = l * r - o * c, g = t * h + n * f + i * p; if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0); const m = 1 / g; return e[0] = h * m, e[1] = (i * l - u * n) * m, e[2] = (a * n - i * o) * m, e[3] = f * m, e[4] = (u * t - i * c) * m, e[5] = (i * r - a * t) * m, e[6] = p * m, e[7] = (n * c - l * t) * m, e[8] = (o * t - n * r) * m, this } transpose() { let e; const t = this.elements; return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this } getNormalMatrix(e) { return this.setFromMatrix4(e).invert().transpose() } transposeIntoArray(e) { const t = this.elements; return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this } setUvTransform(e, t, n, i, r, o, a) { const c = Math.cos(r), l = Math.sin(r); return this.set(n * c, n * l, -n * (c * o + l * a) + o + e, -i * l, i * c, -i * (-l * o + c * a) + a + t, 0, 0, 1), this } scale(e, t) { const n = this.elements; return n[0] *= e, n[3] *= e, n[6] *= e, n[1] *= t, n[4] *= t, n[7] *= t, this } rotate(e) { const t = Math.cos(e), n = Math.sin(e), i = this.elements, r = i[0], o = i[3], a = i[6], c = i[1], l = i[4], u = i[7]; return i[0] = t * r + n * c, i[3] = t * o + n * l, i[6] = t * a + n * u, i[1] = -n * r + t * c, i[4] = -n * o + t * l, i[7] = -n * a + t * u, this } translate(e, t) { const n = this.elements; return n[0] += e * n[2], n[3] += e * n[5], n[6] += e * n[8], n[1] += t * n[2], n[4] += t * n[5], n[7] += t * n[8], this } equals(e) { const t = this.elements, n = e.elements; for (let i = 0; i < 9; i++)if (t[i] !== n[i]) return !1; return !0 } fromArray(e, t = 0) { for (let n = 0; n < 9; n++)this.elements[n] = e[n + t]; return this } toArray(e = [], t = 0) { const n = this.elements; return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e } clone() { return new this.constructor().fromArray(this.elements) } } function ga(s) { for (let e = s.length - 1; e >= 0; --e)if (s[e] > 65535) return !0; return !1 } function wi(s) { return document.createElementNS("http://www.w3.org/1999/xhtml", s) } function bn(s) { return s < .04045 ? s * .0773993808 : Math.pow(s * .9478672986 + .0521327014, 2.4) } function nr(s) { return s < .0031308 ? s * 12.92 : 1.055 * Math.pow(s, .41666) - .055 } const Er = { [Wt]: { [Mn]: bn }, [Mn]: { [Wt]: nr } }, St = { legacyMode: !0, get workingColorSpace() { return Mn }, set workingColorSpace(s) { console.warn("THREE.ColorManagement: .workingColorSpace is readonly.") }, convert: function (s, e, t) { if (this.legacyMode || e === t || !e || !t) return s; if (Er[e] && Er[e][t] !== void 0) { const n = Er[e][t]; return s.r = n(s.r), s.g = n(s.g), s.b = n(s.b), s } throw new Error("Unsupported color space conversion.") }, fromWorkingColorSpace: function (s, e) { return this.convert(s, this.workingColorSpace, e) }, toWorkingColorSpace: function (s, e) { return this.convert(s, e, this.workingColorSpace) } }, _a = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, Ze = { r: 0, g: 0, b: 0 }, bt = { h: 0, s: 0, l: 0 }, Ri = { h: 0, s: 0, l: 0 }; function Tr(s, e, t) { return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? s + (e - s) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? s + (e - s) * 6 * (2 / 3 - t) : s } function Ii(s, e) { return e.r = s.r, e.g = s.g, e.b = s.b, e } class Ne { constructor(e, t, n) { return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n) } set(e) { return e && e.isColor ? this.copy(e) : typeof e == "number" ? this.setHex(e) : typeof e == "string" && this.setStyle(e), this } setScalar(e) { return this.r = e, this.g = e, this.b = e, this } setHex(e, t = Wt) { return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, St.toWorkingColorSpace(this, t), this } setRGB(e, t, n, i = Mn) { return this.r = e, this.g = t, this.b = n, St.toWorkingColorSpace(this, i), this } setHSL(e, t, n, i = Mn) { if (e = _s(e, 1), t = tt(t, 0, 1), n = tt(n, 0, 1), t === 0) this.r = this.g = this.b = n; else { const r = n <= .5 ? n * (1 + t) : n + t - n * t, o = 2 * n - r; this.r = Tr(o, r, e + 1 / 3), this.g = Tr(o, r, e), this.b = Tr(o, r, e - 1 / 3) } return St.toWorkingColorSpace(this, i), this } setStyle(e, t = Wt) { function n(r) { r !== void 0 && parseFloat(r) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.") } let i; if (i = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)) { let r; const o = i[1], a = i[2]; switch (o) { case "rgb": case "rgba": if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return this.r = Math.min(255, parseInt(r[1], 10)) / 255, this.g = Math.min(255, parseInt(r[2], 10)) / 255, this.b = Math.min(255, parseInt(r[3], 10)) / 255, St.toWorkingColorSpace(this, t), n(r[4]), this; if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return this.r = Math.min(100, parseInt(r[1], 10)) / 100, this.g = Math.min(100, parseInt(r[2], 10)) / 100, this.b = Math.min(100, parseInt(r[3], 10)) / 100, St.toWorkingColorSpace(this, t), n(r[4]), this; break; case "hsl": case "hsla": if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) { const c = parseFloat(r[1]) / 360, l = parseInt(r[2], 10) / 100, u = parseInt(r[3], 10) / 100; return n(r[4]), this.setHSL(c, l, u, t) } break } } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) { const r = i[1], o = r.length; if (o === 3) return this.r = parseInt(r.charAt(0) + r.charAt(0), 16) / 255, this.g = parseInt(r.charAt(1) + r.charAt(1), 16) / 255, this.b = parseInt(r.charAt(2) + r.charAt(2), 16) / 255, St.toWorkingColorSpace(this, t), this; if (o === 6) return this.r = parseInt(r.charAt(0) + r.charAt(1), 16) / 255, this.g = parseInt(r.charAt(2) + r.charAt(3), 16) / 255, this.b = parseInt(r.charAt(4) + r.charAt(5), 16) / 255, St.toWorkingColorSpace(this, t), this } return e && e.length > 0 ? this.setColorName(e, t) : this } setColorName(e, t = Wt) { const n = _a[e.toLowerCase()]; return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this } clone() { return new this.constructor(this.r, this.g, this.b) } copy(e) { return this.r = e.r, this.g = e.g, this.b = e.b, this } copySRGBToLinear(e) { return this.r = bn(e.r), this.g = bn(e.g), this.b = bn(e.b), this } copyLinearToSRGB(e) { return this.r = nr(e.r), this.g = nr(e.g), this.b = nr(e.b), this } convertSRGBToLinear() { return this.copySRGBToLinear(this), this } convertLinearToSRGB() { return this.copyLinearToSRGB(this), this } getHex(e = Wt) { return St.fromWorkingColorSpace(Ii(this, Ze), e), tt(Ze.r * 255, 0, 255) << 16 ^ tt(Ze.g * 255, 0, 255) << 8 ^ tt(Ze.b * 255, 0, 255) << 0 } getHexString(e = Wt) { return ("000000" + this.getHex(e).toString(16)).slice(-6) } getHSL(e, t = Mn) { St.fromWorkingColorSpace(Ii(this, Ze), t); const n = Ze.r, i = Ze.g, r = Ze.b, o = Math.max(n, i, r), a = Math.min(n, i, r); let c, l; const u = (a + o) / 2; if (a === o) c = 0, l = 0; else { const h = o - a; switch (l = u <= .5 ? h / (o + a) : h / (2 - o - a), o) { case n: c = (i - r) / h + (i < r ? 6 : 0); break; case i: c = (r - n) / h + 2; break; case r: c = (n - i) / h + 4; break }c /= 6 } return e.h = c, e.s = l, e.l = u, e } getRGB(e, t = Mn) { return St.fromWorkingColorSpace(Ii(this, Ze), t), e.r = Ze.r, e.g = Ze.g, e.b = Ze.b, e } getStyle(e = Wt) { return St.fromWorkingColorSpace(Ii(this, Ze), e), e !== Wt ? `color(${e} ${Ze.r} ${Ze.g} ${Ze.b})` : `rgb(${Ze.r * 255 | 0},${Ze.g * 255 | 0},${Ze.b * 255 | 0})` } offsetHSL(e, t, n) { return this.getHSL(bt), bt.h += e, bt.s += t, bt.l += n, this.setHSL(bt.h, bt.s, bt.l), this } add(e) { return this.r += e.r, this.g += e.g, this.b += e.b, this } addColors(e, t) { return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this } addScalar(e) { return this.r += e, this.g += e, this.b += e, this } sub(e) { return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this } multiply(e) { return this.r *= e.r, this.g *= e.g, this.b *= e.b, this } multiplyScalar(e) { return this.r *= e, this.g *= e, this.b *= e, this } lerp(e, t) { return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this } lerpColors(e, t, n) { return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this } lerpHSL(e, t) { this.getHSL(bt), e.getHSL(Ri); const n = vi(bt.h, Ri.h, t), i = vi(bt.s, Ri.s, t), r = vi(bt.l, Ri.l, t); return this.setHSL(n, i, r), this } equals(e) { return e.r === this.r && e.g === this.g && e.b === this.b } fromArray(e, t = 0) { return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this } toArray(e = [], t = 0) { return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e } fromBufferAttribute(e, t) { return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), e.normalized === !0 && (this.r /= 255, this.g /= 255, this.b /= 255), this } toJSON() { return this.getHex() } *[Symbol.iterator]() { yield this.r, yield this.g, yield this.b } } Ne.NAMES = _a; let On; class xa { static getDataURL(e) { if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src; let t; if (e instanceof HTMLCanvasElement) t = e; else { On === void 0 && (On = wi("canvas")), On.width = e.width, On.height = e.height; const n = On.getContext("2d"); e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = On } return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", .6)) : t.toDataURL("image/png") } static sRGBToLinear(e) { if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) { const t = wi("canvas"); t.width = e.width, t.height = e.height; const n = t.getContext("2d"); n.drawImage(e, 0, 0, e.width, e.height); const i = n.getImageData(0, 0, e.width, e.height), r = i.data; for (let o = 0; o < r.length; o++)r[o] = bn(r[o] / 255) * 255; return n.putImageData(i, 0, 0), t } else if (e.data) { const t = e.data.slice(0); for (let n = 0; n < t.length; n++)t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(bn(t[n] / 255) * 255) : t[n] = bn(t[n]); return { data: t, width: e.width, height: e.height } } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e } } class va { constructor(e = null) { this.isSource = !0, this.uuid = Dn(), this.data = e, this.version = 0 } set needsUpdate(e) { e === !0 && this.version++ } toJSON(e) { const t = e === void 0 || typeof e == "string"; if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid]; const n = { uuid: this.uuid, url: "" }, i = this.data; if (i !== null) { let r; if (Array.isArray(i)) { r = []; for (let o = 0, a = i.length; o < a; o++)i[o].isDataTexture ? r.push(Ar(i[o].image)) : r.push(Ar(i[o])) } else r = Ar(i); n.url = r } return t || (e.images[this.uuid] = n), n } } function Ar(s) { return typeof HTMLImageElement < "u" && s instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && s instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && s instanceof ImageBitmap ? xa.getDataURL(s) : s.data ? { data: Array.from(s.data), width: s.width, height: s.height, type: s.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {}) } let lc = 0; class yt extends Pn { constructor(e = yt.DEFAULT_IMAGE, t = yt.DEFAULT_MAPPING, n = At, i = At, r = xt, o = hr, a = Rt, c = wn, l = 1, u = En) { super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: lc++ }), this.uuid = Dn(), this.name = "", this.source = new va(e), this.mipmaps = [], this.mapping = t, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = o, this.anisotropy = l, this.format = a, this.internalFormat = null, this.type = c, this.offset = new le(0, 0), this.repeat = new le(1, 1), this.center = new le(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new vt, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = u, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1 } get image() { return this.source.data } set image(e) { this.source.data = e } updateMatrix() { this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y) } clone() { return new this.constructor().copy(this) } copy(e) { return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.encoding = e.encoding, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this } toJSON(e) { const t = e === void 0 || typeof e == "string"; if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid]; const n = { metadata: { version: 4.5, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(e).uuid, mapping: this.mapping, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, type: this.type, encoding: this.encoding, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment }; return JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n } dispose() { this.dispatchEvent({ type: "dispose" }) } transformUv(e) { if (this.mapping !== fa) return e; if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) { case ss: e.x = e.x - Math.floor(e.x); break; case At: e.x = e.x < 0 ? 0 : 1; break; case os: Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x); break }if (e.y < 0 || e.y > 1) switch (this.wrapT) { case ss: e.y = e.y - Math.floor(e.y); break; case At: e.y = e.y < 0 ? 0 : 1; break; case os: Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y); break }return this.flipY && (e.y = 1 - e.y), e } set needsUpdate(e) { e === !0 && (this.version++, this.source.needsUpdate = !0) } } yt.DEFAULT_IMAGE = null; yt.DEFAULT_MAPPING = fa; class ze { constructor(e = 0, t = 0, n = 0, i = 1) { ze.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = i } get width() { return this.z } set width(e) { this.z = e } get height() { return this.w } set height(e) { this.w = e } set(e, t, n, i) { return this.x = e, this.y = t, this.z = n, this.w = i, this } setScalar(e) { return this.x = e, this.y = e, this.z = e, this.w = e, this } setX(e) { return this.x = e, this } setY(e) { return this.y = e, this } setZ(e) { return this.z = e, this } setW(e) { return this.w = e, this } setComponent(e, t) { switch (e) { case 0: this.x = t; break; case 1: this.y = t; break; case 2: this.z = t; break; case 3: this.w = t; break; default: throw new Error("index is out of range: " + e) }return this } getComponent(e) { switch (e) { case 0: return this.x; case 1: return this.y; case 2: return this.z; case 3: return this.w; default: throw new Error("index is out of range: " + e) } } clone() { return new this.constructor(this.x, this.y, this.z, this.w) } copy(e) { return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this } add(e) { return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this } addScalar(e) { return this.x += e, this.y += e, this.z += e, this.w += e, this } addVectors(e, t) { return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this } addScaledVector(e, t) { return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this } sub(e) { return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this } subScalar(e) { return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this } subVectors(e, t) { return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this } multiply(e) { return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this } multiplyScalar(e) { return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this } applyMatrix4(e) { const t = this.x, n = this.y, i = this.z, r = this.w, o = e.elements; return this.x = o[0] * t + o[4] * n + o[8] * i + o[12] * r, this.y = o[1] * t + o[5] * n + o[9] * i + o[13] * r, this.z = o[2] * t + o[6] * n + o[10] * i + o[14] * r, this.w = o[3] * t + o[7] * n + o[11] * i + o[15] * r, this } divideScalar(e) { return this.multiplyScalar(1 / e) } setAxisAngleFromQuaternion(e) { this.w = 2 * Math.acos(e.w); const t = Math.sqrt(1 - e.w * e.w); return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this } setAxisAngleFromRotationMatrix(e) { let t, n, i, r; const c = e.elements, l = c[0], u = c[4], h = c[8], f = c[1], p = c[5], g = c[9], m = c[2], d = c[6], _ = c[10]; if (Math.abs(u - f) < .01 && Math.abs(h - m) < .01 && Math.abs(g - d) < .01) { if (Math.abs(u + f) < .1 && Math.abs(h + m) < .1 && Math.abs(g + d) < .1 && Math.abs(l + p + _ - 3) < .1) return this.set(1, 0, 0, 0), this; t = Math.PI; const T = (l + 1) / 2, S = (p + 1) / 2, y = (_ + 1) / 2, C = (u + f) / 4, D = (h + m) / 4, x = (g + d) / 4; return T > S && T > y ? T < .01 ? (n = 0, i = .707106781, r = .707106781) : (n = Math.sqrt(T), i = C / n, r = D / n) : S > y ? S < .01 ? (n = .707106781, i = 0, r = .707106781) : (i = Math.sqrt(S), n = C / i, r = x / i) : y < .01 ? (n = .707106781, i = .707106781, r = 0) : (r = Math.sqrt(y), n = D / r, i = x / r), this.set(n, i, r, t), this } let v = Math.sqrt((d - g) * (d - g) + (h - m) * (h - m) + (f - u) * (f - u)); return Math.abs(v) < .001 && (v = 1), this.x = (d - g) / v, this.y = (h - m) / v, this.z = (f - u) / v, this.w = Math.acos((l + p + _ - 1) / 2), this } min(e) { return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this } max(e) { return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this } clamp(e, t) { return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this } clampScalar(e, t) { return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this } clampLength(e, t) { const n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n))) } floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this } ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this } round() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this } roundToZero() { return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this } negate() { return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this } dot(e) { return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w } lengthSq() { return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w } length() { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w) } manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w) } normalize() { return this.divideScalar(this.length() || 1) } setLength(e) { return this.normalize().multiplyScalar(e) } lerp(e, t) { return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this } lerpVectors(e, t, n) { return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this } equals(e) { return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w } fromArray(e, t = 0) { return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this } toArray(e = [], t = 0) { return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e } fromBufferAttribute(e, t) { return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this } random() { return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this } *[Symbol.iterator]() { yield this.x, yield this.y, yield this.z, yield this.w } } class Tn extends Pn { constructor(e, t, n = {}) { super(), this.isWebGLRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new ze(0, 0, e, t), this.scissorTest = !1, this.viewport = new ze(0, 0, e, t); const i = { width: e, height: t, depth: 1 }; this.texture = new yt(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1, this.texture.internalFormat = n.internalFormat !== void 0 ? n.internalFormat : null, this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : xt, this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0, this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1, this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null, this.samples = n.samples !== void 0 ? n.samples : 0 } setSize(e, t, n = 1) { (this.width !== e || this.height !== t || this.depth !== n) && (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t) } clone() { return new this.constructor().copy(this) } copy(e) { this.width = e.width, this.height = e.height, this.depth = e.depth, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.isRenderTargetTexture = !0; const t = Object.assign({}, e.texture.image); return this.texture.source = new va(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this } dispose() { this.dispatchEvent({ type: "dispose" }) } } class ya extends yt { constructor(e = null, t = 1, n = 1, i = 1) { super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = at, this.minFilter = at, this.wrapR = At, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1 } } class cc extends yt { constructor(e = null, t = 1, n = 1, i = 1) { super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = at, this.minFilter = at, this.wrapR = At, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1 } } class An { constructor(e = 0, t = 0, n = 0, i = 1) { this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i } static slerpFlat(e, t, n, i, r, o, a) { let c = n[i + 0], l = n[i + 1], u = n[i + 2], h = n[i + 3]; const f = r[o + 0], p = r[o + 1], g = r[o + 2], m = r[o + 3]; if (a === 0) { e[t + 0] = c, e[t + 1] = l, e[t + 2] = u, e[t + 3] = h; return } if (a === 1) { e[t + 0] = f, e[t + 1] = p, e[t + 2] = g, e[t + 3] = m; return } if (h !== m || c !== f || l !== p || u !== g) { let d = 1 - a; const _ = c * f + l * p + u * g + h * m, v = _ >= 0 ? 1 : -1, T = 1 - _ * _; if (T > Number.EPSILON) { const y = Math.sqrt(T), C = Math.atan2(y, _ * v); d = Math.sin(d * C) / y, a = Math.sin(a * C) / y } const S = a * v; if (c = c * d + f * S, l = l * d + p * S, u = u * d + g * S, h = h * d + m * S, d === 1 - a) { const y = 1 / Math.sqrt(c * c + l * l + u * u + h * h); c *= y, l *= y, u *= y, h *= y } } e[t] = c, e[t + 1] = l, e[t + 2] = u, e[t + 3] = h } static multiplyQuaternionsFlat(e, t, n, i, r, o) { const a = n[i], c = n[i + 1], l = n[i + 2], u = n[i + 3], h = r[o], f = r[o + 1], p = r[o + 2], g = r[o + 3]; return e[t] = a * g + u * h + c * p - l * f, e[t + 1] = c * g + u * f + l * h - a * p, e[t + 2] = l * g + u * p + a * f - c * h, e[t + 3] = u * g - a * h - c * f - l * p, e } get x() { return this._x } set x(e) { this._x = e, this._onChangeCallback() } get y() { return this._y } set y(e) { this._y = e, this._onChangeCallback() } get z() { return this._z } set z(e) { this._z = e, this._onChangeCallback() } get w() { return this._w } set w(e) { this._w = e, this._onChangeCallback() } set(e, t, n, i) { return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this } clone() { return new this.constructor(this._x, this._y, this._z, this._w) } copy(e) { return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this } setFromEuler(e, t) { if (!(e && e.isEuler)) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order."); const n = e._x, i = e._y, r = e._z, o = e._order, a = Math.cos, c = Math.sin, l = a(n / 2), u = a(i / 2), h = a(r / 2), f = c(n / 2), p = c(i / 2), g = c(r / 2); switch (o) { case "XYZ": this._x = f * u * h + l * p * g, this._y = l * p * h - f * u * g, this._z = l * u * g + f * p * h, this._w = l * u * h - f * p * g; break; case "YXZ": this._x = f * u * h + l * p * g, this._y = l * p * h - f * u * g, this._z = l * u * g - f * p * h, this._w = l * u * h + f * p * g; break; case "ZXY": this._x = f * u * h - l * p * g, this._y = l * p * h + f * u * g, this._z = l * u * g + f * p * h, this._w = l * u * h - f * p * g; break; case "ZYX": this._x = f * u * h - l * p * g, this._y = l * p * h + f * u * g, this._z = l * u * g - f * p * h, this._w = l * u * h + f * p * g; break; case "YZX": this._x = f * u * h + l * p * g, this._y = l * p * h + f * u * g, this._z = l * u * g - f * p * h, this._w = l * u * h - f * p * g; break; case "XZY": this._x = f * u * h - l * p * g, this._y = l * p * h - f * u * g, this._z = l * u * g + f * p * h, this._w = l * u * h + f * p * g; break; default: console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o) }return t !== !1 && this._onChangeCallback(), this } setFromAxisAngle(e, t) { const n = t / 2, i = Math.sin(n); return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this } setFromRotationMatrix(e) { const t = e.elements, n = t[0], i = t[4], r = t[8], o = t[1], a = t[5], c = t[9], l = t[2], u = t[6], h = t[10], f = n + a + h; if (f > 0) { const p = .5 / Math.sqrt(f + 1); this._w = .25 / p, this._x = (u - c) * p, this._y = (r - l) * p, this._z = (o - i) * p } else if (n > a && n > h) { const p = 2 * Math.sqrt(1 + n - a - h); this._w = (u - c) / p, this._x = .25 * p, this._y = (i + o) / p, this._z = (r + l) / p } else if (a > h) { const p = 2 * Math.sqrt(1 + a - n - h); this._w = (r - l) / p, this._x = (i + o) / p, this._y = .25 * p, this._z = (c + u) / p } else { const p = 2 * Math.sqrt(1 + h - n - a); this._w = (o - i) / p, this._x = (r + l) / p, this._y = (c + u) / p, this._z = .25 * p } return this._onChangeCallback(), this } setFromUnitVectors(e, t) { let n = e.dot(t) + 1; return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize() } angleTo(e) { return 2 * Math.acos(Math.abs(tt(this.dot(e), -1, 1))) } rotateTowards(e, t) { const n = this.angleTo(e); if (n === 0) return this; const i = Math.min(1, t / n); return this.slerp(e, i), this } identity() { return this.set(0, 0, 0, 1) } invert() { return this.conjugate() } conjugate() { return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this } dot(e) { return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w } lengthSq() { return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w } length() { return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w) } normalize() { let e = this.length(); return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this } multiply(e) { return this.multiplyQuaternions(this, e) } premultiply(e) { return this.multiplyQuaternions(e, this) } multiplyQuaternions(e, t) { const n = e._x, i = e._y, r = e._z, o = e._w, a = t._x, c = t._y, l = t._z, u = t._w; return this._x = n * u + o * a + i * l - r * c, this._y = i * u + o * c + r * a - n * l, this._z = r * u + o * l + n * c - i * a, this._w = o * u - n * a - i * c - r * l, this._onChangeCallback(), this } slerp(e, t) { if (t === 0) return this; if (t === 1) return this.copy(e); const n = this._x, i = this._y, r = this._z, o = this._w; let a = o * e._w + n * e._x + i * e._y + r * e._z; if (a < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1) return this._w = o, this._x = n, this._y = i, this._z = r, this; const c = 1 - a * a; if (c <= Number.EPSILON) { const p = 1 - t; return this._w = p * o + t * this._w, this._x = p * n + t * this._x, this._y = p * i + t * this._y, this._z = p * r + t * this._z, this.normalize(), this._onChangeCallback(), this } const l = Math.sqrt(c), u = Math.atan2(l, a), h = Math.sin((1 - t) * u) / l, f = Math.sin(t * u) / l; return this._w = o * h + this._w * f, this._x = n * h + this._x * f, this._y = i * h + this._y * f, this._z = r * h + this._z * f, this._onChangeCallback(), this } slerpQuaternions(e, t, n) { return this.copy(e).slerp(t, n) } random() { const e = Math.random(), t = Math.sqrt(1 - e), n = Math.sqrt(e), i = 2 * Math.PI * Math.random(), r = 2 * Math.PI * Math.random(); return this.set(t * Math.cos(i), n * Math.sin(r), n * Math.cos(r), t * Math.sin(i)) } equals(e) { return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w } fromArray(e, t = 0) { return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this } toArray(e = [], t = 0) { return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e } fromBufferAttribute(e, t) { return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this } _onChange(e) { return this._onChangeCallback = e, this } _onChangeCallback() { } *[Symbol.iterator]() { yield this._x, yield this._y, yield this._z, yield this._w } } class L { constructor(e = 0, t = 0, n = 0) { L.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n } set(e, t, n) { return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this } setScalar(e) { return this.x = e, this.y = e, this.z = e, this } setX(e) { return this.x = e, this } setY(e) { return this.y = e, this } setZ(e) { return this.z = e, this } setComponent(e, t) { switch (e) { case 0: this.x = t; break; case 1: this.y = t; break; case 2: this.z = t; break; default: throw new Error("index is out of range: " + e) }return this } getComponent(e) { switch (e) { case 0: return this.x; case 1: return this.y; case 2: return this.z; default: throw new Error("index is out of range: " + e) } } clone() { return new this.constructor(this.x, this.y, this.z) } copy(e) { return this.x = e.x, this.y = e.y, this.z = e.z, this } add(e) { return this.x += e.x, this.y += e.y, this.z += e.z, this } addScalar(e) { return this.x += e, this.y += e, this.z += e, this } addVectors(e, t) { return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this } addScaledVector(e, t) { return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this } sub(e) { return this.x -= e.x, this.y -= e.y, this.z -= e.z, this } subScalar(e) { return this.x -= e, this.y -= e, this.z -= e, this } subVectors(e, t) { return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this } multiply(e) { return this.x *= e.x, this.y *= e.y, this.z *= e.z, this } multiplyScalar(e) { return this.x *= e, this.y *= e, this.z *= e, this } multiplyVectors(e, t) { return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this } applyEuler(e) { return this.applyQuaternion(po.setFromEuler(e)) } applyAxisAngle(e, t) { return this.applyQuaternion(po.setFromAxisAngle(e, t)) } applyMatrix3(e) { const t = this.x, n = this.y, i = this.z, r = e.elements; return this.x = r[0] * t + r[3] * n + r[6] * i, this.y = r[1] * t + r[4] * n + r[7] * i, this.z = r[2] * t + r[5] * n + r[8] * i, this } applyNormalMatrix(e) { return this.applyMatrix3(e).normalize() } applyMatrix4(e) { const t = this.x, n = this.y, i = this.z, r = e.elements, o = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]); return this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * o, this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * o, this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * o, this } applyQuaternion(e) { const t = this.x, n = this.y, i = this.z, r = e.x, o = e.y, a = e.z, c = e.w, l = c * t + o * i - a * n, u = c * n + a * t - r * i, h = c * i + r * n - o * t, f = -r * t - o * n - a * i; return this.x = l * c + f * -r + u * -a - h * -o, this.y = u * c + f * -o + h * -r - l * -a, this.z = h * c + f * -a + l * -o - u * -r, this } project(e) { return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix) } unproject(e) { return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld) } transformDirection(e) { const t = this.x, n = this.y, i = this.z, r = e.elements; return this.x = r[0] * t + r[4] * n + r[8] * i, this.y = r[1] * t + r[5] * n + r[9] * i, this.z = r[2] * t + r[6] * n + r[10] * i, this.normalize() } divide(e) { return this.x /= e.x, this.y /= e.y, this.z /= e.z, this } divideScalar(e) { return this.multiplyScalar(1 / e) } min(e) { return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this } max(e) { return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this } clamp(e, t) { return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this } clampScalar(e, t) { return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this } clampLength(e, t) { const n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n))) } floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this } ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this } round() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this } roundToZero() { return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this } negate() { return this.x = -this.x, this.y = -this.y, this.z = -this.z, this } dot(e) { return this.x * e.x + this.y * e.y + this.z * e.z } lengthSq() { return this.x * this.x + this.y * this.y + this.z * this.z } length() { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z) } manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) } normalize() { return this.divideScalar(this.length() || 1) } setLength(e) { return this.normalize().multiplyScalar(e) } lerp(e, t) { return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this } lerpVectors(e, t, n) { return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this } cross(e) { return this.crossVectors(this, e) } crossVectors(e, t) { const n = e.x, i = e.y, r = e.z, o = t.x, a = t.y, c = t.z; return this.x = i * c - r * a, this.y = r * o - n * c, this.z = n * a - i * o, this } projectOnVector(e) { const t = e.lengthSq(); if (t === 0) return this.set(0, 0, 0); const n = e.dot(this) / t; return this.copy(e).multiplyScalar(n) } projectOnPlane(e) { return Cr.copy(this).projectOnVector(e), this.sub(Cr) } reflect(e) { return this.sub(Cr.copy(e).multiplyScalar(2 * this.dot(e))) } angleTo(e) { const t = Math.sqrt(this.lengthSq() * e.lengthSq()); if (t === 0) return Math.PI / 2; const n = this.dot(e) / t; return Math.acos(tt(n, -1, 1)) } distanceTo(e) { return Math.sqrt(this.distanceToSquared(e)) } distanceToSquared(e) { const t = this.x - e.x, n = this.y - e.y, i = this.z - e.z; return t * t + n * n + i * i } manhattanDistanceTo(e) { return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z) } setFromSpherical(e) { return this.setFromSphericalCoords(e.radius, e.phi, e.theta) } setFromSphericalCoords(e, t, n) { const i = Math.sin(t) * e; return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this } setFromCylindrical(e) { return this.setFromCylindricalCoords(e.radius, e.theta, e.y) } setFromCylindricalCoords(e, t, n) { return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this } setFromMatrixPosition(e) { const t = e.elements; return this.x = t[12], this.y = t[13], this.z = t[14], this } setFromMatrixScale(e) { const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), i = this.setFromMatrixColumn(e, 2).length(); return this.x = t, this.y = n, this.z = i, this } setFromMatrixColumn(e, t) { return this.fromArray(e.elements, t * 4) } setFromMatrix3Column(e, t) { return this.fromArray(e.elements, t * 3) } setFromEuler(e) { return this.x = e._x, this.y = e._y, this.z = e._z, this } equals(e) { return e.x === this.x && e.y === this.y && e.z === this.z } fromArray(e, t = 0) { return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this } toArray(e = [], t = 0) { return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e } fromBufferAttribute(e, t) { return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this } random() { return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this } randomDirection() { const e = (Math.random() - .5) * 2, t = Math.random() * Math.PI * 2, n = Math.sqrt(1 - e ** 2); return this.x = n * Math.cos(t), this.y = n * Math.sin(t), this.z = e, this } *[Symbol.iterator]() { yield this.x, yield this.y, yield this.z } } const Cr = new L, po = new An; class Ci { constructor(e = new L(1 / 0, 1 / 0, 1 / 0), t = new L(-1 / 0, -1 / 0, -1 / 0)) { this.isBox3 = !0, this.min = e, this.max = t } set(e, t) { return this.min.copy(e), this.max.copy(t), this } setFromArray(e) { let t = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, o = -1 / 0, a = -1 / 0; for (let c = 0, l = e.length; c < l; c += 3) { const u = e[c], h = e[c + 1], f = e[c + 2]; u < t && (t = u), h < n && (n = h), f < i && (i = f), u > r && (r = u), h > o && (o = h), f > a && (a = f) } return this.min.set(t, n, i), this.max.set(r, o, a), this } setFromBufferAttribute(e) { let t = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, o = -1 / 0, a = -1 / 0; for (let c = 0, l = e.count; c < l; c++) { const u = e.getX(c), h = e.getY(c), f = e.getZ(c); u < t && (t = u), h < n && (n = h), f < i && (i = f), u > r && (r = u), h > o && (o = h), f > a && (a = f) } return this.min.set(t, n, i), this.max.set(r, o, a), this } setFromPoints(e) { this.makeEmpty(); for (let t = 0, n = e.length; t < n; t++)this.expandByPoint(e[t]); return this } setFromCenterAndSize(e, t) { const n = hn.copy(t).multiplyScalar(.5); return this.min.copy(e).sub(n), this.max.copy(e).add(n), this } setFromObject(e, t = !1) { return this.makeEmpty(), this.expandByObject(e, t) } clone() { return new this.constructor().copy(this) } copy(e) { return this.min.copy(e.min), this.max.copy(e.max), this } makeEmpty() { return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this } isEmpty() { return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z } getCenter(e) { return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5) } getSize(e) { return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min) } expandByPoint(e) { return this.min.min(e), this.max.max(e), this } expandByVector(e) { return this.min.sub(e), this.max.add(e), this } expandByScalar(e) { return this.min.addScalar(-e), this.max.addScalar(e), this } expandByObject(e, t = !1) { e.updateWorldMatrix(!1, !1); const n = e.geometry; if (n !== void 0) if (t && n.attributes != null && n.attributes.position !== void 0) { const r = n.attributes.position; for (let o = 0, a = r.count; o < a; o++)hn.fromBufferAttribute(r, o).applyMatrix4(e.matrixWorld), this.expandByPoint(hn) } else n.boundingBox === null && n.computeBoundingBox(), Lr.copy(n.boundingBox), Lr.applyMatrix4(e.matrixWorld), this.union(Lr); const i = e.children; for (let r = 0, o = i.length; r < o; r++)this.expandByObject(i[r], t); return this } containsPoint(e) { return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z) } containsBox(e) { return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z } getParameter(e, t) { return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z)) } intersectsBox(e) { return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z) } intersectsSphere(e) { return this.clampPoint(e.center, hn), hn.distanceToSquared(e.center) <= e.radius * e.radius } intersectsPlane(e) { let t, n; return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant } intersectsTriangle(e) { if (this.isEmpty()) return !1; this.getCenter(hi), Fi.subVectors(this.max, hi), Un.subVectors(e.a, hi), Bn.subVectors(e.b, hi), Gn.subVectors(e.c, hi), Jt.subVectors(Bn, Un), $t.subVectors(Gn, Bn), dn.subVectors(Un, Gn); let t = [0, -Jt.z, Jt.y, 0, -$t.z, $t.y, 0, -dn.z, dn.y, Jt.z, 0, -Jt.x, $t.z, 0, -$t.x, dn.z, 0, -dn.x, -Jt.y, Jt.x, 0, -$t.y, $t.x, 0, -dn.y, dn.x, 0]; return !Pr(t, Un, Bn, Gn, Fi) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Pr(t, Un, Bn, Gn, Fi)) ? !1 : (Ni.crossVectors(Jt, $t), t = [Ni.x, Ni.y, Ni.z], Pr(t, Un, Bn, Gn, Fi)) } clampPoint(e, t) { return t.copy(e).clamp(this.min, this.max) } distanceToPoint(e) { return hn.copy(e).clamp(this.min, this.max).sub(e).length() } getBoundingSphere(e) { return this.getCenter(e.center), e.radius = this.getSize(hn).length() * .5, e } intersect(e) { return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this } union(e) { return this.min.min(e.min), this.max.max(e.max), this } applyMatrix4(e) { return this.isEmpty() ? this : (zt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), zt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), zt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), zt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), zt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), zt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), zt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), zt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(zt), this) } translate(e) { return this.min.add(e), this.max.add(e), this } equals(e) { return e.min.equals(this.min) && e.max.equals(this.max) } } const zt = [new L, new L, new L, new L, new L, new L, new L, new L], hn = new L, Lr = new Ci, Un = new L, Bn = new L, Gn = new L, Jt = new L, $t = new L, dn = new L, hi = new L, Fi = new L, Ni = new L, fn = new L; function Pr(s, e, t, n, i) { for (let r = 0, o = s.length - 3; r <= o; r += 3) { fn.fromArray(s, r); const a = i.x * Math.abs(fn.x) + i.y * Math.abs(fn.y) + i.z * Math.abs(fn.z), c = e.dot(fn), l = t.dot(fn), u = n.dot(fn); if (Math.max(-Math.max(c, l, u), Math.min(c, l, u)) > a) return !1 } return !0 } const uc = new Ci, mo = new L, zi = new L, Dr = new L; class xs { constructor(e = new L, t = -1) { this.center = e, this.radius = t } set(e, t) { return this.center.copy(e), this.radius = t, this } setFromPoints(e, t) { const n = this.center; t !== void 0 ? n.copy(t) : uc.setFromPoints(e).getCenter(n); let i = 0; for (let r = 0, o = e.length; r < o; r++)i = Math.max(i, n.distanceToSquared(e[r])); return this.radius = Math.sqrt(i), this } copy(e) { return this.center.copy(e.center), this.radius = e.radius, this } isEmpty() { return this.radius < 0 } makeEmpty() { return this.center.set(0, 0, 0), this.radius = -1, this } containsPoint(e) { return e.distanceToSquared(this.center) <= this.radius * this.radius } distanceToPoint(e) { return e.distanceTo(this.center) - this.radius } intersectsSphere(e) { const t = this.radius + e.radius; return e.center.distanceToSquared(this.center) <= t * t } intersectsBox(e) { return e.intersectsSphere(this) } intersectsPlane(e) { return Math.abs(e.distanceToPoint(this.center)) <= this.radius } clampPoint(e, t) { const n = this.center.distanceToSquared(e); return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t } getBoundingBox(e) { return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e) } applyMatrix4(e) { return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this } translate(e) { return this.center.add(e), this } expandByPoint(e) { Dr.subVectors(e, this.center); const t = Dr.lengthSq(); if (t > this.radius * this.radius) { const n = Math.sqrt(t), i = (n - this.radius) * .5; this.center.add(Dr.multiplyScalar(i / n)), this.radius += i } return this } union(e) { return this.center.equals(e.center) === !0 ? zi.set(0, 0, 1).multiplyScalar(e.radius) : zi.subVectors(e.center, this.center).normalize().multiplyScalar(e.radius), this.expandByPoint(mo.copy(e.center).add(zi)), this.expandByPoint(mo.copy(e.center).sub(zi)), this } equals(e) { return e.center.equals(this.center) && e.radius === this.radius } clone() { return new this.constructor().copy(this) } } const Ot = new L, Rr = new L, Oi = new L, Kt = new L, Ir = new L, Ui = new L, Fr = new L; class Ma { constructor(e = new L, t = new L(0, 0, -1)) { this.origin = e, this.direction = t } set(e, t) { return this.origin.copy(e), this.direction.copy(t), this } copy(e) { return this.origin.copy(e.origin), this.direction.copy(e.direction), this } at(e, t) { return t.copy(this.direction).multiplyScalar(e).add(this.origin) } lookAt(e) { return this.direction.copy(e).sub(this.origin).normalize(), this } recast(e) { return this.origin.copy(this.at(e, Ot)), this } closestPointToPoint(e, t) { t.subVectors(e, this.origin); const n = t.dot(this.direction); return n < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(n).add(this.origin) } distanceToPoint(e) { return Math.sqrt(this.distanceSqToPoint(e)) } distanceSqToPoint(e) { const t = Ot.subVectors(e, this.origin).dot(this.direction); return t < 0 ? this.origin.distanceToSquared(e) : (Ot.copy(this.direction).multiplyScalar(t).add(this.origin), Ot.distanceToSquared(e)) } distanceSqToSegment(e, t, n, i) { Rr.copy(e).add(t).multiplyScalar(.5), Oi.copy(t).sub(e).normalize(), Kt.copy(this.origin).sub(Rr); const r = e.distanceTo(t) * .5, o = -this.direction.dot(Oi), a = Kt.dot(this.direction), c = -Kt.dot(Oi), l = Kt.lengthSq(), u = Math.abs(1 - o * o); let h, f, p, g; if (u > 0) if (h = o * c - a, f = o * a - c, g = r * u, h >= 0) if (f >= -g) if (f <= g) { const m = 1 / u; h *= m, f *= m, p = h * (h + o * f + 2 * a) + f * (o * h + f + 2 * c) + l } else f = r, h = Math.max(0, -(o * f + a)), p = -h * h + f * (f + 2 * c) + l; else f = -r, h = Math.max(0, -(o * f + a)), p = -h * h + f * (f + 2 * c) + l; else f <= -g ? (h = Math.max(0, -(-o * r + a)), f = h > 0 ? -r : Math.min(Math.max(-r, -c), r), p = -h * h + f * (f + 2 * c) + l) : f <= g ? (h = 0, f = Math.min(Math.max(-r, -c), r), p = f * (f + 2 * c) + l) : (h = Math.max(0, -(o * r + a)), f = h > 0 ? r : Math.min(Math.max(-r, -c), r), p = -h * h + f * (f + 2 * c) + l); else f = o > 0 ? -r : r, h = Math.max(0, -(o * f + a)), p = -h * h + f * (f + 2 * c) + l; return n && n.copy(this.direction).multiplyScalar(h).add(this.origin), i && i.copy(Oi).multiplyScalar(f).add(Rr), p } intersectSphere(e, t) { Ot.subVectors(e.center, this.origin); const n = Ot.dot(this.direction), i = Ot.dot(Ot) - n * n, r = e.radius * e.radius; if (i > r) return null; const o = Math.sqrt(r - i), a = n - o, c = n + o; return a < 0 && c < 0 ? null : a < 0 ? this.at(c, t) : this.at(a, t) } intersectsSphere(e) { return this.distanceSqToPoint(e.center) <= e.radius * e.radius } distanceToPlane(e) { const t = e.normal.dot(this.direction); if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null; const n = -(this.origin.dot(e.normal) + e.constant) / t; return n >= 0 ? n : null } intersectPlane(e, t) { const n = this.distanceToPlane(e); return n === null ? null : this.at(n, t) } intersectsPlane(e) { const t = e.distanceToPoint(this.origin); return t === 0 || e.normal.dot(this.direction) * t < 0 } intersectBox(e, t) { let n, i, r, o, a, c; const l = 1 / this.direction.x, u = 1 / this.direction.y, h = 1 / this.direction.z, f = this.origin; return l >= 0 ? (n = (e.min.x - f.x) * l, i = (e.max.x - f.x) * l) : (n = (e.max.x - f.x) * l, i = (e.min.x - f.x) * l), u >= 0 ? (r = (e.min.y - f.y) * u, o = (e.max.y - f.y) * u) : (r = (e.max.y - f.y) * u, o = (e.min.y - f.y) * u), n > o || r > i || ((r > n || n !== n) && (n = r), (o < i || i !== i) && (i = o), h >= 0 ? (a = (e.min.z - f.z) * h, c = (e.max.z - f.z) * h) : (a = (e.max.z - f.z) * h, c = (e.min.z - f.z) * h), n > c || a > i) || ((a > n || n !== n) && (n = a), (c < i || i !== i) && (i = c), i < 0) ? null : this.at(n >= 0 ? n : i, t) } intersectsBox(e) { return this.intersectBox(e, Ot) !== null } intersectTriangle(e, t, n, i, r) { Ir.subVectors(t, e), Ui.subVectors(n, e), Fr.crossVectors(Ir, Ui); let o = this.direction.dot(Fr), a; if (o > 0) { if (i) return null; a = 1 } else if (o < 0) a = -1, o = -o; else return null; Kt.subVectors(this.origin, e); const c = a * this.direction.dot(Ui.crossVectors(Kt, Ui)); if (c < 0) return null; const l = a * this.direction.dot(Ir.cross(Kt)); if (l < 0 || c + l > o) return null; const u = -a * Kt.dot(Fr); return u < 0 ? null : this.at(u / o, r) } applyMatrix4(e) { return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this } equals(e) { return e.origin.equals(this.origin) && e.direction.equals(this.direction) } clone() { return new this.constructor().copy(this) } } class He { constructor() { He.prototype.isMatrix4 = !0, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1] } set(e, t, n, i, r, o, a, c, l, u, h, f, p, g, m, d) { const _ = this.elements; return _[0] = e, _[4] = t, _[8] = n, _[12] = i, _[1] = r, _[5] = o, _[9] = a, _[13] = c, _[2] = l, _[6] = u, _[10] = h, _[14] = f, _[3] = p, _[7] = g, _[11] = m, _[15] = d, this } identity() { return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this } clone() { return new He().fromArray(this.elements) } copy(e) { const t = this.elements, n = e.elements; return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this } copyPosition(e) { const t = this.elements, n = e.elements; return t[12] = n[12], t[13] = n[13], t[14] = n[14], this } setFromMatrix3(e) { const t = e.elements; return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this } extractBasis(e, t, n) { return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this } makeBasis(e, t, n) { return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this } extractRotation(e) { const t = this.elements, n = e.elements, i = 1 / kn.setFromMatrixColumn(e, 0).length(), r = 1 / kn.setFromMatrixColumn(e, 1).length(), o = 1 / kn.setFromMatrixColumn(e, 2).length(); return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = 0, t[8] = n[8] * o, t[9] = n[9] * o, t[10] = n[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this } makeRotationFromEuler(e) { const t = this.elements, n = e.x, i = e.y, r = e.z, o = Math.cos(n), a = Math.sin(n), c = Math.cos(i), l = Math.sin(i), u = Math.cos(r), h = Math.sin(r); if (e.order === "XYZ") { const f = o * u, p = o * h, g = a * u, m = a * h; t[0] = c * u, t[4] = -c * h, t[8] = l, t[1] = p + g * l, t[5] = f - m * l, t[9] = -a * c, t[2] = m - f * l, t[6] = g + p * l, t[10] = o * c } else if (e.order === "YXZ") { const f = c * u, p = c * h, g = l * u, m = l * h; t[0] = f + m * a, t[4] = g * a - p, t[8] = o * l, t[1] = o * h, t[5] = o * u, t[9] = -a, t[2] = p * a - g, t[6] = m + f * a, t[10] = o * c } else if (e.order === "ZXY") { const f = c * u, p = c * h, g = l * u, m = l * h; t[0] = f - m * a, t[4] = -o * h, t[8] = g + p * a, t[1] = p + g * a, t[5] = o * u, t[9] = m - f * a, t[2] = -o * l, t[6] = a, t[10] = o * c } else if (e.order === "ZYX") { const f = o * u, p = o * h, g = a * u, m = a * h; t[0] = c * u, t[4] = g * l - p, t[8] = f * l + m, t[1] = c * h, t[5] = m * l + f, t[9] = p * l - g, t[2] = -l, t[6] = a * c, t[10] = o * c } else if (e.order === "YZX") { const f = o * c, p = o * l, g = a * c, m = a * l; t[0] = c * u, t[4] = m - f * h, t[8] = g * h + p, t[1] = h, t[5] = o * u, t[9] = -a * u, t[2] = -l * u, t[6] = p * h + g, t[10] = f - m * h } else if (e.order === "XZY") { const f = o * c, p = o * l, g = a * c, m = a * l; t[0] = c * u, t[4] = -h, t[8] = l * u, t[1] = f * h + m, t[5] = o * u, t[9] = p * h - g, t[2] = g * h - p, t[6] = a * u, t[10] = m * h + f } return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this } makeRotationFromQuaternion(e) { return this.compose(hc, e, dc) } lookAt(e, t, n) { const i = this.elements; return ht.subVectors(e, t), ht.lengthSq() === 0 && (ht.z = 1), ht.normalize(), Qt.crossVectors(n, ht), Qt.lengthSq() === 0 && (Math.abs(n.z) === 1 ? ht.x += 1e-4 : ht.z += 1e-4, ht.normalize(), Qt.crossVectors(n, ht)), Qt.normalize(), Bi.crossVectors(ht, Qt), i[0] = Qt.x, i[4] = Bi.x, i[8] = ht.x, i[1] = Qt.y, i[5] = Bi.y, i[9] = ht.y, i[2] = Qt.z, i[6] = Bi.z, i[10] = ht.z, this } multiply(e) { return this.multiplyMatrices(this, e) } premultiply(e) { return this.multiplyMatrices(e, this) } multiplyMatrices(e, t) { const n = e.elements, i = t.elements, r = this.elements, o = n[0], a = n[4], c = n[8], l = n[12], u = n[1], h = n[5], f = n[9], p = n[13], g = n[2], m = n[6], d = n[10], _ = n[14], v = n[3], T = n[7], S = n[11], y = n[15], C = i[0], D = i[4], x = i[8], A = i[12], I = i[1], N = i[5], J = i[9], Z = i[13], R = i[2], W = i[6], B = i[10], Y = i[14], q = i[3], O = i[7], V = i[11], ee = i[15]; return r[0] = o * C + a * I + c * R + l * q, r[4] = o * D + a * N + c * W + l * O, r[8] = o * x + a * J + c * B + l * V, r[12] = o * A + a * Z + c * Y + l * ee, r[1] = u * C + h * I + f * R + p * q, r[5] = u * D + h * N + f * W + p * O, r[9] = u * x + h * J + f * B + p * V, r[13] = u * A + h * Z + f * Y + p * ee, r[2] = g * C + m * I + d * R + _ * q, r[6] = g * D + m * N + d * W + _ * O, r[10] = g * x + m * J + d * B + _ * V, r[14] = g * A + m * Z + d * Y + _ * ee, r[3] = v * C + T * I + S * R + y * q, r[7] = v * D + T * N + S * W + y * O, r[11] = v * x + T * J + S * B + y * V, r[15] = v * A + T * Z + S * Y + y * ee, this } multiplyScalar(e) { const t = this.elements; return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this } determinant() { const e = this.elements, t = e[0], n = e[4], i = e[8], r = e[12], o = e[1], a = e[5], c = e[9], l = e[13], u = e[2], h = e[6], f = e[10], p = e[14], g = e[3], m = e[7], d = e[11], _ = e[15]; return g * (+r * c * h - i * l * h - r * a * f + n * l * f + i * a * p - n * c * p) + m * (+t * c * p - t * l * f + r * o * f - i * o * p + i * l * u - r * c * u) + d * (+t * l * h - t * a * p - r * o * h + n * o * p + r * a * u - n * l * u) + _ * (-i * a * u - t * c * h + t * a * f + i * o * h - n * o * f + n * c * u) } transpose() { const e = this.elements; let t; return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this } setPosition(e, t, n) { const i = this.elements; return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this } invert() { const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], o = e[4], a = e[5], c = e[6], l = e[7], u = e[8], h = e[9], f = e[10], p = e[11], g = e[12], m = e[13], d = e[14], _ = e[15], v = h * d * l - m * f * l + m * c * p - a * d * p - h * c * _ + a * f * _, T = g * f * l - u * d * l - g * c * p + o * d * p + u * c * _ - o * f * _, S = u * m * l - g * h * l + g * a * p - o * m * p - u * a * _ + o * h * _, y = g * h * c - u * m * c - g * a * f + o * m * f + u * a * d - o * h * d, C = t * v + n * T + i * S + r * y; if (C === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0); const D = 1 / C; return e[0] = v * D, e[1] = (m * f * r - h * d * r - m * i * p + n * d * p + h * i * _ - n * f * _) * D, e[2] = (a * d * r - m * c * r + m * i * l - n * d * l - a * i * _ + n * c * _) * D, e[3] = (h * c * r - a * f * r - h * i * l + n * f * l + a * i * p - n * c * p) * D, e[4] = T * D, e[5] = (u * d * r - g * f * r + g * i * p - t * d * p - u * i * _ + t * f * _) * D, e[6] = (g * c * r - o * d * r - g * i * l + t * d * l + o * i * _ - t * c * _) * D, e[7] = (o * f * r - u * c * r + u * i * l - t * f * l - o * i * p + t * c * p) * D, e[8] = S * D, e[9] = (g * h * r - u * m * r - g * n * p + t * m * p + u * n * _ - t * h * _) * D, e[10] = (o * m * r - g * a * r + g * n * l - t * m * l - o * n * _ + t * a * _) * D, e[11] = (u * a * r - o * h * r - u * n * l + t * h * l + o * n * p - t * a * p) * D, e[12] = y * D, e[13] = (u * m * i - g * h * i + g * n * f - t * m * f - u * n * d + t * h * d) * D, e[14] = (g * a * i - o * m * i - g * n * c + t * m * c + o * n * d - t * a * d) * D, e[15] = (o * h * i - u * a * i + u * n * c - t * h * c - o * n * f + t * a * f) * D, this } scale(e) { const t = this.elements, n = e.x, i = e.y, r = e.z; return t[0] *= n, t[4] *= i, t[8] *= r, t[1] *= n, t[5] *= i, t[9] *= r, t[2] *= n, t[6] *= i, t[10] *= r, t[3] *= n, t[7] *= i, t[11] *= r, this } getMaxScaleOnAxis() { const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10]; return Math.sqrt(Math.max(t, n, i)) } makeTranslation(e, t, n) { return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this } makeRotationX(e) { const t = Math.cos(e), n = Math.sin(e); return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this } makeRotationY(e) { const t = Math.cos(e), n = Math.sin(e); return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this } makeRotationZ(e) { const t = Math.cos(e), n = Math.sin(e); return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this } makeRotationAxis(e, t) { const n = Math.cos(t), i = Math.sin(t), r = 1 - n, o = e.x, a = e.y, c = e.z, l = r * o, u = r * a; return this.set(l * o + n, l * a - i * c, l * c + i * a, 0, l * a + i * c, u * a + n, u * c - i * o, 0, l * c - i * a, u * c + i * o, r * c * c + n, 0, 0, 0, 0, 1), this } makeScale(e, t, n) { return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this } makeShear(e, t, n, i, r, o) { return this.set(1, n, r, 0, e, 1, o, 0, t, i, 1, 0, 0, 0, 0, 1), this } compose(e, t, n) { const i = this.elements, r = t._x, o = t._y, a = t._z, c = t._w, l = r + r, u = o + o, h = a + a, f = r * l, p = r * u, g = r * h, m = o * u, d = o * h, _ = a * h, v = c * l, T = c * u, S = c * h, y = n.x, C = n.y, D = n.z; return i[0] = (1 - (m + _)) * y, i[1] = (p + S) * y, i[2] = (g - T) * y, i[3] = 0, i[4] = (p - S) * C, i[5] = (1 - (f + _)) * C, i[6] = (d + v) * C, i[7] = 0, i[8] = (g + T) * D, i[9] = (d - v) * D, i[10] = (1 - (f + m)) * D, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this } decompose(e, t, n) { const i = this.elements; let r = kn.set(i[0], i[1], i[2]).length(); const o = kn.set(i[4], i[5], i[6]).length(), a = kn.set(i[8], i[9], i[10]).length(); this.determinant() < 0 && (r = -r), e.x = i[12], e.y = i[13], e.z = i[14], wt.copy(this); const l = 1 / r, u = 1 / o, h = 1 / a; return wt.elements[0] *= l, wt.elements[1] *= l, wt.elements[2] *= l, wt.elements[4] *= u, wt.elements[5] *= u, wt.elements[6] *= u, wt.elements[8] *= h, wt.elements[9] *= h, wt.elements[10] *= h, t.setFromRotationMatrix(wt), n.x = r, n.y = o, n.z = a, this } makePerspective(e, t, n, i, r, o) { const a = this.elements, c = 2 * r / (t - e), l = 2 * r / (n - i), u = (t + e) / (t - e), h = (n + i) / (n - i), f = -(o + r) / (o - r), p = -2 * o * r / (o - r); return a[0] = c, a[4] = 0, a[8] = u, a[12] = 0, a[1] = 0, a[5] = l, a[9] = h, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = f, a[14] = p, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this } makeOrthographic(e, t, n, i, r, o) { const a = this.elements, c = 1 / (t - e), l = 1 / (n - i), u = 1 / (o - r), h = (t + e) * c, f = (n + i) * l, p = (o + r) * u; return a[0] = 2 * c, a[4] = 0, a[8] = 0, a[12] = -h, a[1] = 0, a[5] = 2 * l, a[9] = 0, a[13] = -f, a[2] = 0, a[6] = 0, a[10] = -2 * u, a[14] = -p, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this } equals(e) { const t = this.elements, n = e.elements; for (let i = 0; i < 16; i++)if (t[i] !== n[i]) return !1; return !0 } fromArray(e, t = 0) { for (let n = 0; n < 16; n++)this.elements[n] = e[n + t]; return this } toArray(e = [], t = 0) { const n = this.elements; return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e } } const kn = new L, wt = new He, hc = new L(0, 0, 0), dc = new L(1, 1, 1), Qt = new L, Bi = new L, ht = new L, go = new He, _o = new An; class Li { constructor(e = 0, t = 0, n = 0, i = Li.DefaultOrder) { this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = i } get x() { return this._x } set x(e) { this._x = e, this._onChangeCallback() } get y() { return this._y } set y(e) { this._y = e, this._onChangeCallback() } get z() { return this._z } set z(e) { this._z = e, this._onChangeCallback() } get order() { return this._order } set order(e) { this._order = e, this._onChangeCallback() } set(e, t, n, i = this._order) { return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this } clone() { return new this.constructor(this._x, this._y, this._z, this._order) } copy(e) { return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this } setFromRotationMatrix(e, t = this._order, n = !0) { const i = e.elements, r = i[0], o = i[4], a = i[8], c = i[1], l = i[5], u = i[9], h = i[2], f = i[6], p = i[10]; switch (t) { case "XYZ": this._y = Math.asin(tt(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(-u, p), this._z = Math.atan2(-o, r)) : (this._x = Math.atan2(f, l), this._z = 0); break; case "YXZ": this._x = Math.asin(-tt(u, -1, 1)), Math.abs(u) < .9999999 ? (this._y = Math.atan2(a, p), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-h, r), this._z = 0); break; case "ZXY": this._x = Math.asin(tt(f, -1, 1)), Math.abs(f) < .9999999 ? (this._y = Math.atan2(-h, p), this._z = Math.atan2(-o, l)) : (this._y = 0, this._z = Math.atan2(c, r)); break; case "ZYX": this._y = Math.asin(-tt(h, -1, 1)), Math.abs(h) < .9999999 ? (this._x = Math.atan2(f, p), this._z = Math.atan2(c, r)) : (this._x = 0, this._z = Math.atan2(-o, l)); break; case "YZX": this._z = Math.asin(tt(c, -1, 1)), Math.abs(c) < .9999999 ? (this._x = Math.atan2(-u, l), this._y = Math.atan2(-h, r)) : (this._x = 0, this._y = Math.atan2(a, p)); break; case "XZY": this._z = Math.asin(-tt(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(f, l), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-u, p), this._y = 0); break; default: console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t) }return this._order = t, n === !0 && this._onChangeCallback(), this } setFromQuaternion(e, t, n) { return go.makeRotationFromQuaternion(e), this.setFromRotationMatrix(go, t, n) } setFromVector3(e, t = this._order) { return this.set(e.x, e.y, e.z, t) } reorder(e) { return _o.setFromEuler(this), this.setFromQuaternion(_o, e) } equals(e) { return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order } fromArray(e) { return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this } toArray(e = [], t = 0) { return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e } _onChange(e) { return this._onChangeCallback = e, this } _onChangeCallback() { } *[Symbol.iterator]() { yield this._x, yield this._y, yield this._z, yield this._order } toVector3() { console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead") } } Li.DefaultOrder = "XYZ"; Li.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"]; class vs { constructor() { this.mask = 1 } set(e) { this.mask = (1 << e | 0) >>> 0 } enable(e) { this.mask |= 1 << e | 0 } enableAll() { this.mask = -1 } toggle(e) { this.mask ^= 1 << e | 0 } disable(e) { this.mask &= ~(1 << e | 0) } disableAll() { this.mask = 0 } test(e) { return (this.mask & e.mask) !== 0 } isEnabled(e) { return (this.mask & (1 << e | 0)) !== 0 } } let fc = 0; const xo = new L, Vn = new An, Ut = new He, Gi = new L, di = new L, pc = new L, mc = new An, vo = new L(1, 0, 0), yo = new L(0, 1, 0), Mo = new L(0, 0, 1), gc = { type: "added" }, So = { type: "removed" }; class Mt extends Pn { constructor() { super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: fc++ }), this.uuid = Dn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Mt.DefaultUp.clone(); const e = new L, t = new Li, n = new An, i = new L(1, 1, 1); function r() { n.setFromEuler(t, !1) } function o() { t.setFromQuaternion(n, void 0, !1) } t._onChange(r), n._onChange(o), Object.defineProperties(this, { position: { configurable: !0, enumerable: !0, value: e }, rotation: { configurable: !0, enumerable: !0, value: t }, quaternion: { configurable: !0, enumerable: !0, value: n }, scale: { configurable: !0, enumerable: !0, value: i }, modelViewMatrix: { value: new He }, normalMatrix: { value: new vt } }), this.matrix = new He, this.matrixWorld = new He, this.matrixAutoUpdate = Mt.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new vs, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {} } onBeforeRender() { } onAfterRender() { } applyMatrix4(e) { this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale) } applyQuaternion(e) { return this.quaternion.premultiply(e), this } setRotationFromAxisAngle(e, t) { this.quaternion.setFromAxisAngle(e, t) } setRotationFromEuler(e) { this.quaternion.setFromEuler(e, !0) } setRotationFromMatrix(e) { this.quaternion.setFromRotationMatrix(e) } setRotationFromQuaternion(e) { this.quaternion.copy(e) } rotateOnAxis(e, t) { return Vn.setFromAxisAngle(e, t), this.quaternion.multiply(Vn), this } rotateOnWorldAxis(e, t) { return Vn.setFromAxisAngle(e, t), this.quaternion.premultiply(Vn), this } rotateX(e) { return this.rotateOnAxis(vo, e) } rotateY(e) { return this.rotateOnAxis(yo, e) } rotateZ(e) { return this.rotateOnAxis(Mo, e) } translateOnAxis(e, t) { return xo.copy(e).applyQuaternion(this.quaternion), this.position.add(xo.multiplyScalar(t)), this } translateX(e) { return this.translateOnAxis(vo, e) } translateY(e) { return this.translateOnAxis(yo, e) } translateZ(e) { return this.translateOnAxis(Mo, e) } localToWorld(e) { return e.applyMatrix4(this.matrixWorld) } worldToLocal(e) { return e.applyMatrix4(Ut.copy(this.matrixWorld).invert()) } lookAt(e, t, n) { e.isVector3 ? Gi.copy(e) : Gi.set(e, t, n); const i = this.parent; this.updateWorldMatrix(!0, !1), di.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Ut.lookAt(di, Gi, this.up) : Ut.lookAt(Gi, di, this.up), this.quaternion.setFromRotationMatrix(Ut), i && (Ut.extractRotation(i.matrixWorld), Vn.setFromRotationMatrix(Ut), this.quaternion.premultiply(Vn.invert())) } add(e) { if (arguments.length > 1) { for (let t = 0; t < arguments.length; t++)this.add(arguments[t]); return this } return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(gc)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this) } remove(e) { if (arguments.length > 1) { for (let n = 0; n < arguments.length; n++)this.remove(arguments[n]); return this } const t = this.children.indexOf(e); return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(So)), this } removeFromParent() { const e = this.parent; return e !== null && e.remove(this), this } clear() { for (let e = 0; e < this.children.length; e++) { const t = this.children[e]; t.parent = null, t.dispatchEvent(So) } return this.children.length = 0, this } attach(e) { return this.updateWorldMatrix(!0, !1), Ut.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Ut.multiply(e.parent.matrixWorld)), e.applyMatrix4(Ut), this.add(e), e.updateWorldMatrix(!1, !0), this } getObjectById(e) { return this.getObjectByProperty("id", e) } getObjectByName(e) { return this.getObjectByProperty("name", e) } getObjectByProperty(e, t) { if (this[e] === t) return this; for (let n = 0, i = this.children.length; n < i; n++) { const o = this.children[n].getObjectByProperty(e, t); if (o !== void 0) return o } } getWorldPosition(e) { return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld) } getWorldQuaternion(e) { return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(di, e, pc), e } getWorldScale(e) { return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(di, mc, e), e } getWorldDirection(e) { this.updateWorldMatrix(!0, !1); const t = this.matrixWorld.elements; return e.set(t[8], t[9], t[10]).normalize() } raycast() { } traverse(e) { e(this); const t = this.children; for (let n = 0, i = t.length; n < i; n++)t[n].traverse(e) } traverseVisible(e) { if (this.visible === !1) return; e(this); const t = this.children; for (let n = 0, i = t.length; n < i; n++)t[n].traverseVisible(e) } traverseAncestors(e) { const t = this.parent; t !== null && (e(t), t.traverseAncestors(e)) } updateMatrix() { this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0 } updateMatrixWorld(e) { this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0); const t = this.children; for (let n = 0, i = t.length; n < i; n++)t[n].updateMatrixWorld(e) } updateWorldMatrix(e, t) { const n = this.parent; if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) { const i = this.children; for (let r = 0, o = i.length; r < o; r++)i[r].updateWorldMatrix(!1, !0) } } toJSON(e) { const t = e === void 0 || typeof e == "string", n = {}; t && (e = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, n.metadata = { version: 4.5, type: "Object", generator: "Object3D.toJSON" }); const i = {}; i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), JSON.stringify(this.userData) !== "{}" && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON())); function r(a, c) { return a[c.uuid] === void 0 && (a[c.uuid] = c.toJSON(e)), c.uuid } if (this.isScene) this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(e).uuid); else if (this.isMesh || this.isLine || this.isPoints) { i.geometry = r(e.geometries, this.geometry); const a = this.geometry.parameters; if (a !== void 0 && a.shapes !== void 0) { const c = a.shapes; if (Array.isArray(c)) for (let l = 0, u = c.length; l < u; l++) { const h = c[l]; r(e.shapes, h) } else r(e.shapes, c) } } if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) { const a = []; for (let c = 0, l = this.material.length; c < l; c++)a.push(r(e.materials, this.material[c])); i.material = a } else i.material = r(e.materials, this.material); if (this.children.length > 0) { i.children = []; for (let a = 0; a < this.children.length; a++)i.children.push(this.children[a].toJSON(e).object) } if (this.animations.length > 0) { i.animations = []; for (let a = 0; a < this.animations.length; a++) { const c = this.animations[a]; i.animations.push(r(e.animations, c)) } } if (t) { const a = o(e.geometries), c = o(e.materials), l = o(e.textures), u = o(e.images), h = o(e.shapes), f = o(e.skeletons), p = o(e.animations), g = o(e.nodes); a.length > 0 && (n.geometries = a), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), u.length > 0 && (n.images = u), h.length > 0 && (n.shapes = h), f.length > 0 && (n.skeletons = f), p.length > 0 && (n.animations = p), g.length > 0 && (n.nodes = g) } return n.object = i, n; function o(a) { const c = []; for (const l in a) { const u = a[l]; delete u.metadata, c.push(u) } return c } } clone(e) { return new this.constructor().copy(this, e) } copy(e, t = !0) { if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0) for (let n = 0; n < e.children.length; n++) { const i = e.children[n]; this.add(i.clone()) } return this } } Mt.DefaultUp = new L(0, 1, 0); Mt.DefaultMatrixAutoUpdate = !0; const Et = new L, Bt = new L, Nr = new L, Gt = new L, Hn = new L, Wn = new L, bo = new L, zr = new L, Or = new L, Ur = new L; class Xt { constructor(e = new L, t = new L, n = new L) { this.a = e, this.b = t, this.c = n } static getNormal(e, t, n, i) { i.subVectors(n, t), Et.subVectors(e, t), i.cross(Et); const r = i.lengthSq(); return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0) } static getBarycoord(e, t, n, i, r) { Et.subVectors(i, t), Bt.subVectors(n, t), Nr.subVectors(e, t); const o = Et.dot(Et), a = Et.dot(Bt), c = Et.dot(Nr), l = Bt.dot(Bt), u = Bt.dot(Nr), h = o * l - a * a; if (h === 0) return r.set(-2, -1, -1); const f = 1 / h, p = (l * c - a * u) * f, g = (o * u - a * c) * f; return r.set(1 - p - g, g, p) } static containsPoint(e, t, n, i) { return this.getBarycoord(e, t, n, i, Gt), Gt.x >= 0 && Gt.y >= 0 && Gt.x + Gt.y <= 1 } static getUV(e, t, n, i, r, o, a, c) { return this.getBarycoord(e, t, n, i, Gt), c.set(0, 0), c.addScaledVector(r, Gt.x), c.addScaledVector(o, Gt.y), c.addScaledVector(a, Gt.z), c } static isFrontFacing(e, t, n, i) { return Et.subVectors(n, t), Bt.subVectors(e, t), Et.cross(Bt).dot(i) < 0 } set(e, t, n) { return this.a.copy(e), this.b.copy(t), this.c.copy(n), this } setFromPointsAndIndices(e, t, n, i) { return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this } setFromAttributeAndIndices(e, t, n, i) { return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this } clone() { return new this.constructor().copy(this) } copy(e) { return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this } getArea() { return Et.subVectors(this.c, this.b), Bt.subVectors(this.a, this.b), Et.cross(Bt).length() * .5 } getMidpoint(e) { return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3) } getNormal(e) { return Xt.getNormal(this.a, this.b, this.c, e) } getPlane(e) { return e.setFromCoplanarPoints(this.a, this.b, this.c) } getBarycoord(e, t) { return Xt.getBarycoord(e, this.a, this.b, this.c, t) } getUV(e, t, n, i, r) { return Xt.getUV(e, this.a, this.b, this.c, t, n, i, r) } containsPoint(e) { return Xt.containsPoint(e, this.a, this.b, this.c) } isFrontFacing(e) { return Xt.isFrontFacing(this.a, this.b, this.c, e) } intersectsBox(e) { return e.intersectsTriangle(this) } closestPointToPoint(e, t) { const n = this.a, i = this.b, r = this.c; let o, a; Hn.subVectors(i, n), Wn.subVectors(r, n), zr.subVectors(e, n); const c = Hn.dot(zr), l = Wn.dot(zr); if (c <= 0 && l <= 0) return t.copy(n); Or.subVectors(e, i); const u = Hn.dot(Or), h = Wn.dot(Or); if (u >= 0 && h <= u) return t.copy(i); const f = c * h - u * l; if (f <= 0 && c >= 0 && u <= 0) return o = c / (c - u), t.copy(n).addScaledVector(Hn, o); Ur.subVectors(e, r); const p = Hn.dot(Ur), g = Wn.dot(Ur); if (g >= 0 && p <= g) return t.copy(r); const m = p * l - c * g; if (m <= 0 && l >= 0 && g <= 0) return a = l / (l - g), t.copy(n).addScaledVector(Wn, a); const d = u * g - p * h; if (d <= 0 && h - u >= 0 && p - g >= 0) return bo.subVectors(r, i), a = (h - u) / (h - u + (p - g)), t.copy(i).addScaledVector(bo, a); const _ = 1 / (d + m + f); return o = m * _, a = f * _, t.copy(n).addScaledVector(Hn, o).addScaledVector(Wn, a) } equals(e) { return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c) } } let _c = 0; class Pi extends Pn { constructor() { super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: _c++ }), this.uuid = Dn(), this.name = "", this.type = "Material", this.blending = ei, this.side = Si, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = ua, this.blendDst = ha, this.blendEquation = $n, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = ns, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = Wl, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = wr, this.stencilZFail = wr, this.stencilZPass = wr, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0 } get alphaTest() { return this._alphaTest } set alphaTest(e) { this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e } onBuild() { } onBeforeRender() { } onBeforeCompile() { } customProgramCacheKey() { return this.onBeforeCompile.toString() } setValues(e) { if (e !== void 0) for (const t in e) { const n = e[t]; if (n === void 0) { console.warn("THREE.Material: '" + t + "' parameter is undefined."); continue } if (t === "shading") { console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = n === Ka; continue } const i = this[t]; if (i === void 0) { console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material."); continue } i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n } } toJSON(e) { const t = e === void 0 || typeof e == "string"; t && (e = { textures: {}, images: {} }); const n = { metadata: { version: 4.5, type: "Material", generator: "Material.toJSON" } }; n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== ei && (n.blending = this.blending), this.side !== Si && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha), this.wireframe === !0 && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = this.flatShading), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData); function i(r) { const o = []; for (const a in r) { const c = r[a]; delete c.metadata, o.push(c) } return o } if (t) { const r = i(e.textures), o = i(e.images); r.length > 0 && (n.textures = r), o.length > 0 && (n.images = o) } return n } clone() { return new this.constructor().copy(this) } copy(e) { this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite; const t = e.clippingPlanes; let n = null; if (t !== null) { const i = t.length; n = new Array(i); for (let r = 0; r !== i; ++r)n[r] = t[r].clone() } return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this } dispose() { this.dispatchEvent({ type: "dispose" }) } set needsUpdate(e) { e === !0 && this.version++ } } class qt extends Pi { constructor(e) { super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Ne(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = da, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e) } copy(e) { return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this } } const qe = new L, ki = new le; class It { constructor(e, t, n) { if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array."); this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n === !0, this.usage = uo, this.updateRange = { offset: 0, count: -1 }, this.version = 0 } onUploadCallback() { } set needsUpdate(e) { e === !0 && this.version++ } setUsage(e) { return this.usage = e, this } copy(e) { return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this } copyAt(e, t, n) { e *= this.itemSize, n *= t.itemSize; for (let i = 0, r = this.itemSize; i < r; i++)this.array[e + i] = t.array[n + i]; return this } copyArray(e) { return this.array.set(e), this } copyColorsArray(e) { const t = this.array; let n = 0; for (let i = 0, r = e.length; i < r; i++) { let o = e[i]; o === void 0 && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i), o = new Ne), t[n++] = o.r, t[n++] = o.g, t[n++] = o.b } return this } copyVector2sArray(e) { const t = this.array; let n = 0; for (let i = 0, r = e.length; i < r; i++) { let o = e[i]; o === void 0 && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i), o = new le), t[n++] = o.x, t[n++] = o.y } return this } copyVector3sArray(e) { const t = this.array; let n = 0; for (let i = 0, r = e.length; i < r; i++) { let o = e[i]; o === void 0 && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i), o = new L), t[n++] = o.x, t[n++] = o.y, t[n++] = o.z } return this } copyVector4sArray(e) { const t = this.array; let n = 0; for (let i = 0, r = e.length; i < r; i++) { let o = e[i]; o === void 0 && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i), o = new ze), t[n++] = o.x, t[n++] = o.y, t[n++] = o.z, t[n++] = o.w } return this } applyMatrix3(e) { if (this.itemSize === 2) for (let t = 0, n = this.count; t < n; t++)ki.fromBufferAttribute(this, t), ki.applyMatrix3(e), this.setXY(t, ki.x, ki.y); else if (this.itemSize === 3) for (let t = 0, n = this.count; t < n; t++)qe.fromBufferAttribute(this, t), qe.applyMatrix3(e), this.setXYZ(t, qe.x, qe.y, qe.z); return this } applyMatrix4(e) { for (let t = 0, n = this.count; t < n; t++)qe.fromBufferAttribute(this, t), qe.applyMatrix4(e), this.setXYZ(t, qe.x, qe.y, qe.z); return this } applyNormalMatrix(e) { for (let t = 0, n = this.count; t < n; t++)qe.fromBufferAttribute(this, t), qe.applyNormalMatrix(e), this.setXYZ(t, qe.x, qe.y, qe.z); return this } transformDirection(e) { for (let t = 0, n = this.count; t < n; t++)qe.fromBufferAttribute(this, t), qe.transformDirection(e), this.setXYZ(t, qe.x, qe.y, qe.z); return this } set(e, t = 0) { return this.array.set(e, t), this } getX(e) { return this.array[e * this.itemSize] } setX(e, t) { return this.array[e * this.itemSize] = t, this } getY(e) { return this.array[e * this.itemSize + 1] } setY(e, t) { return this.array[e * this.itemSize + 1] = t, this } getZ(e) { return this.array[e * this.itemSize + 2] } setZ(e, t) { return this.array[e * this.itemSize + 2] = t, this } getW(e) { return this.array[e * this.itemSize + 3] } setW(e, t) { return this.array[e * this.itemSize + 3] = t, this } setXY(e, t, n) { return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this } setXYZ(e, t, n, i) { return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this } setXYZW(e, t, n, i, r) { return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = r, this } onUpload(e) { return this.onUploadCallback = e, this } clone() { return new this.constructor(this.array, this.itemSize).copy(this) } toJSON() { const e = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized }; return this.name !== "" && (e.name = this.name), this.usage !== uo && (e.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange), e } } class Sa extends It { constructor(e, t, n) { super(new Uint16Array(e), t, n) } } class ba extends It { constructor(e, t, n) { super(new Uint32Array(e), t, n) } } class Je extends It { constructor(e, t, n) { super(new Float32Array(e), t, n) } } let xc = 0; const _t = new He, Br = new Mt, Xn = new L, dt = new Ci, fi = new Ci, Ke = new L; class Lt extends Pn { constructor() { super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: xc++ }), this.uuid = Dn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {} } getIndex() { return this.index } setIndex(e) { return Array.isArray(e) ? this.index = new (ga(e) ? ba : Sa)(e, 1) : this.index = e, this } getAttribute(e) { return this.attributes[e] } setAttribute(e, t) { return this.attributes[e] = t, this } deleteAttribute(e) { return delete this.attributes[e], this } hasAttribute(e) { return this.attributes[e] !== void 0 } addGroup(e, t, n = 0) { this.groups.push({ start: e, count: t, materialIndex: n }) } clearGroups() { this.groups = [] } setDrawRange(e, t) { this.drawRange.start = e, this.drawRange.count = t } applyMatrix4(e) { const t = this.attributes.position; t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0); const n = this.attributes.normal; if (n !== void 0) { const r = new vt().getNormalMatrix(e); n.applyNormalMatrix(r), n.needsUpdate = !0 } const i = this.attributes.tangent; return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this } applyQuaternion(e) { return _t.makeRotationFromQuaternion(e), this.applyMatrix4(_t), this } rotateX(e) { return _t.makeRotationX(e), this.applyMatrix4(_t), this } rotateY(e) { return _t.makeRotationY(e), this.applyMatrix4(_t), this } rotateZ(e) { return _t.makeRotationZ(e), this.applyMatrix4(_t), this } translate(e, t, n) { return _t.makeTranslation(e, t, n), this.applyMatrix4(_t), this } scale(e, t, n) { return _t.makeScale(e, t, n), this.applyMatrix4(_t), this } lookAt(e) { return Br.lookAt(e), Br.updateMatrix(), this.applyMatrix4(Br.matrix), this } center() { return this.computeBoundingBox(), this.boundingBox.getCenter(Xn).negate(), this.translate(Xn.x, Xn.y, Xn.z), this } setFromPoints(e) { const t = []; for (let n = 0, i = e.length; n < i; n++) { const r = e[n]; t.push(r.x, r.y, r.z || 0) } return this.setAttribute("position", new Je(t, 3)), this } computeBoundingBox() { this.boundingBox === null && (this.boundingBox = new Ci); const e = this.attributes.position, t = this.morphAttributes.position; if (e && e.isGLBufferAttribute) { console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(new L(-1 / 0, -1 / 0, -1 / 0), new L(1 / 0, 1 / 0, 1 / 0)); return } if (e !== void 0) { if (this.boundingBox.setFromBufferAttribute(e), t) for (let n = 0, i = t.length; n < i; n++) { const r = t[n]; dt.setFromBufferAttribute(r), this.morphTargetsRelative ? (Ke.addVectors(this.boundingBox.min, dt.min), this.boundingBox.expandByPoint(Ke), Ke.addVectors(this.boundingBox.max, dt.max), this.boundingBox.expandByPoint(Ke)) : (this.boundingBox.expandByPoint(dt.min), this.boundingBox.expandByPoint(dt.max)) } } else this.boundingBox.makeEmpty(); (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this) } computeBoundingSphere() { this.boundingSphere === null && (this.boundingSphere = new xs); const e = this.attributes.position, t = this.morphAttributes.position; if (e && e.isGLBufferAttribute) { console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new L, 1 / 0); return } if (e) { const n = this.boundingSphere.center; if (dt.setFromBufferAttribute(e), t) for (let r = 0, o = t.length; r < o; r++) { const a = t[r]; fi.setFromBufferAttribute(a), this.morphTargetsRelative ? (Ke.addVectors(dt.min, fi.min), dt.expandByPoint(Ke), Ke.addVectors(dt.max, fi.max), dt.expandByPoint(Ke)) : (dt.expandByPoint(fi.min), dt.expandByPoint(fi.max)) } dt.getCenter(n); let i = 0; for (let r = 0, o = e.count; r < o; r++)Ke.fromBufferAttribute(e, r), i = Math.max(i, n.distanceToSquared(Ke)); if (t) for (let r = 0, o = t.length; r < o; r++) { const a = t[r], c = this.morphTargetsRelative; for (let l = 0, u = a.count; l < u; l++)Ke.fromBufferAttribute(a, l), c && (Xn.fromBufferAttribute(e, l), Ke.add(Xn)), i = Math.max(i, n.distanceToSquared(Ke)) } this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this) } } computeTangents() { const e = this.index, t = this.attributes; if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) { console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"); return } const n = e.array, i = t.position.array, r = t.normal.array, o = t.uv.array, a = i.length / 3; this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new It(new Float32Array(4 * a), 4)); const c = this.getAttribute("tangent").array, l = [], u = []; for (let I = 0; I < a; I++)l[I] = new L, u[I] = new L; const h = new L, f = new L, p = new L, g = new le, m = new le, d = new le, _ = new L, v = new L; function T(I, N, J) { h.fromArray(i, I * 3), f.fromArray(i, N * 3), p.fromArray(i, J * 3), g.fromArray(o, I * 2), m.fromArray(o, N * 2), d.fromArray(o, J * 2), f.sub(h), p.sub(h), m.sub(g), d.sub(g); const Z = 1 / (m.x * d.y - d.x * m.y); !isFinite(Z) || (_.copy(f).multiplyScalar(d.y).addScaledVector(p, -m.y).multiplyScalar(Z), v.copy(p).multiplyScalar(m.x).addScaledVector(f, -d.x).multiplyScalar(Z), l[I].add(_), l[N].add(_), l[J].add(_), u[I].add(v), u[N].add(v), u[J].add(v)) } let S = this.groups; S.length === 0 && (S = [{ start: 0, count: n.length }]); for (let I = 0, N = S.length; I < N; ++I) { const J = S[I], Z = J.start, R = J.count; for (let W = Z, B = Z + R; W < B; W += 3)T(n[W + 0], n[W + 1], n[W + 2]) } const y = new L, C = new L, D = new L, x = new L; function A(I) { D.fromArray(r, I * 3), x.copy(D); const N = l[I]; y.copy(N), y.sub(D.multiplyScalar(D.dot(N))).normalize(), C.crossVectors(x, N); const Z = C.dot(u[I]) < 0 ? -1 : 1; c[I * 4] = y.x, c[I * 4 + 1] = y.y, c[I * 4 + 2] = y.z, c[I * 4 + 3] = Z } for (let I = 0, N = S.length; I < N; ++I) { const J = S[I], Z = J.start, R = J.count; for (let W = Z, B = Z + R; W < B; W += 3)A(n[W + 0]), A(n[W + 1]), A(n[W + 2]) } } computeVertexNormals() { const e = this.index, t = this.getAttribute("position"); if (t !== void 0) { let n = this.getAttribute("normal"); if (n === void 0) n = new It(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n); else for (let f = 0, p = n.count; f < p; f++)n.setXYZ(f, 0, 0, 0); const i = new L, r = new L, o = new L, a = new L, c = new L, l = new L, u = new L, h = new L; if (e) for (let f = 0, p = e.count; f < p; f += 3) { const g = e.getX(f + 0), m = e.getX(f + 1), d = e.getX(f + 2); i.fromBufferAttribute(t, g), r.fromBufferAttribute(t, m), o.fromBufferAttribute(t, d), u.subVectors(o, r), h.subVectors(i, r), u.cross(h), a.fromBufferAttribute(n, g), c.fromBufferAttribute(n, m), l.fromBufferAttribute(n, d), a.add(u), c.add(u), l.add(u), n.setXYZ(g, a.x, a.y, a.z), n.setXYZ(m, c.x, c.y, c.z), n.setXYZ(d, l.x, l.y, l.z) } else for (let f = 0, p = t.count; f < p; f += 3)i.fromBufferAttribute(t, f + 0), r.fromBufferAttribute(t, f + 1), o.fromBufferAttribute(t, f + 2), u.subVectors(o, r), h.subVectors(i, r), u.cross(h), n.setXYZ(f + 0, u.x, u.y, u.z), n.setXYZ(f + 1, u.x, u.y, u.z), n.setXYZ(f + 2, u.x, u.y, u.z); this.normalizeNormals(), n.needsUpdate = !0 } } merge(e, t) { if (!(e && e.isBufferGeometry)) { console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", e); return } t === void 0 && (t = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge.")); const n = this.attributes; for (const i in n) { if (e.attributes[i] === void 0) continue; const o = n[i].array, a = e.attributes[i], c = a.array, l = a.itemSize * t, u = Math.min(c.length, o.length - l); for (let h = 0, f = l; h < u; h++, f++)o[f] = c[h] } return this } normalizeNormals() { const e = this.attributes.normal; for (let t = 0, n = e.count; t < n; t++)Ke.fromBufferAttribute(e, t), Ke.normalize(), e.setXYZ(t, Ke.x, Ke.y, Ke.z) } toNonIndexed() { function e(a, c) { const l = a.array, u = a.itemSize, h = a.normalized, f = new l.constructor(c.length * u); let p = 0, g = 0; for (let m = 0, d = c.length; m < d; m++) { a.isInterleavedBufferAttribute ? p = c[m] * a.data.stride + a.offset : p = c[m] * u; for (let _ = 0; _ < u; _++)f[g++] = l[p++] } return new It(f, u, h) } if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this; const t = new Lt, n = this.index.array, i = this.attributes; for (const a in i) { const c = i[a], l = e(c, n); t.setAttribute(a, l) } const r = this.morphAttributes; for (const a in r) { const c = [], l = r[a]; for (let u = 0, h = l.length; u < h; u++) { const f = l[u], p = e(f, n); c.push(p) } t.morphAttributes[a] = c } t.morphTargetsRelative = this.morphTargetsRelative; const o = this.groups; for (let a = 0, c = o.length; a < c; a++) { const l = o[a]; t.addGroup(l.start, l.count, l.materialIndex) } return t } toJSON() { const e = { metadata: { version: 4.5, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } }; if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) { const c = this.parameters; for (const l in c) c[l] !== void 0 && (e[l] = c[l]); return e } e.data = { attributes: {} }; const t = this.index; t !== null && (e.data.index = { type: t.array.constructor.name, array: Array.prototype.slice.call(t.array) }); const n = this.attributes; for (const c in n) { const l = n[c]; e.data.attributes[c] = l.toJSON(e.data) } const i = {}; let r = !1; for (const c in this.morphAttributes) { const l = this.morphAttributes[c], u = []; for (let h = 0, f = l.length; h < f; h++) { const p = l[h]; u.push(p.toJSON(e.data)) } u.length > 0 && (i[c] = u, r = !0) } r && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative); const o = this.groups; o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o))); const a = this.boundingSphere; return a !== null && (e.data.boundingSphere = { center: a.center.toArray(), radius: a.radius }), e } clone() { return new this.constructor().copy(this) } copy(e) { this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null; const t = {}; this.name = e.name; const n = e.index; n !== null && this.setIndex(n.clone(t)); const i = e.attributes; for (const l in i) { const u = i[l]; this.setAttribute(l, u.clone(t)) } const r = e.morphAttributes; for (const l in r) { const u = [], h = r[l]; for (let f = 0, p = h.length; f < p; f++)u.push(h[f].clone(t)); this.morphAttributes[l] = u } this.morphTargetsRelative = e.morphTargetsRelative; const o = e.groups; for (let l = 0, u = o.length; l < u; l++) { const h = o[l]; this.addGroup(h.start, h.count, h.materialIndex) } const a = e.boundingBox; a !== null && (this.boundingBox = a.clone()); const c = e.boundingSphere; return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, e.parameters !== void 0 && (this.parameters = Object.assign({}, e.parameters)), this } dispose() { this.dispatchEvent({ type: "dispose" }) } } const wo = new He, qn = new Ma, Gr = new xs, en = new L, tn = new L, nn = new L, kr = new L, Vr = new L, Hr = new L, Vi = new L, Hi = new L, Wi = new L, Xi = new le, qi = new le, Yi = new le, Wr = new L, ji = new L; class Qe extends Mt { constructor(e = new Lt, t = new qt) { super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets() } copy(e, t) { return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = e.material, this.geometry = e.geometry, this } updateMorphTargets() { const t = this.geometry.morphAttributes, n = Object.keys(t); if (n.length > 0) { const i = t[n[0]]; if (i !== void 0) { this.morphTargetInfluences = [], this.morphTargetDictionary = {}; for (let r = 0, o = i.length; r < o; r++) { const a = i[r].name || String(r); this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r } } } } raycast(e, t) { const n = this.geometry, i = this.material, r = this.matrixWorld; if (i === void 0 || (n.boundingSphere === null && n.computeBoundingSphere(), Gr.copy(n.boundingSphere), Gr.applyMatrix4(r), e.ray.intersectsSphere(Gr) === !1) || (wo.copy(r).invert(), qn.copy(e.ray).applyMatrix4(wo), n.boundingBox !== null && qn.intersectsBox(n.boundingBox) === !1)) return; let o; const a = n.index, c = n.attributes.position, l = n.morphAttributes.position, u = n.morphTargetsRelative, h = n.attributes.uv, f = n.attributes.uv2, p = n.groups, g = n.drawRange; if (a !== null) if (Array.isArray(i)) for (let m = 0, d = p.length; m < d; m++) { const _ = p[m], v = i[_.materialIndex], T = Math.max(_.start, g.start), S = Math.min(a.count, Math.min(_.start + _.count, g.start + g.count)); for (let y = T, C = S; y < C; y += 3) { const D = a.getX(y), x = a.getX(y + 1), A = a.getX(y + 2); o = Zi(this, v, e, qn, c, l, u, h, f, D, x, A), o && (o.faceIndex = Math.floor(y / 3), o.face.materialIndex = _.materialIndex, t.push(o)) } } else { const m = Math.max(0, g.start), d = Math.min(a.count, g.start + g.count); for (let _ = m, v = d; _ < v; _ += 3) { const T = a.getX(_), S = a.getX(_ + 1), y = a.getX(_ + 2); o = Zi(this, i, e, qn, c, l, u, h, f, T, S, y), o && (o.faceIndex = Math.floor(_ / 3), t.push(o)) } } else if (c !== void 0) if (Array.isArray(i)) for (let m = 0, d = p.length; m < d; m++) { const _ = p[m], v = i[_.materialIndex], T = Math.max(_.start, g.start), S = Math.min(c.count, Math.min(_.start + _.count, g.start + g.count)); for (let y = T, C = S; y < C; y += 3) { const D = y, x = y + 1, A = y + 2; o = Zi(this, v, e, qn, c, l, u, h, f, D, x, A), o && (o.faceIndex = Math.floor(y / 3), o.face.materialIndex = _.materialIndex, t.push(o)) } } else { const m = Math.max(0, g.start), d = Math.min(c.count, g.start + g.count); for (let _ = m, v = d; _ < v; _ += 3) { const T = _, S = _ + 1, y = _ + 2; o = Zi(this, i, e, qn, c, l, u, h, f, T, S, y), o && (o.faceIndex = Math.floor(_ / 3), t.push(o)) } } } } function vc(s, e, t, n, i, r, o, a) { let c; if (e.side === Ct ? c = n.intersectTriangle(o, r, i, !0, a) : c = n.intersectTriangle(i, r, o, e.side !== ln, a), c === null) return null; ji.copy(a), ji.applyMatrix4(s.matrixWorld); const l = t.ray.origin.distanceTo(ji); return l < t.near || l > t.far ? null : { distance: l, point: ji.clone(), object: s } } function Zi(s, e, t, n, i, r, o, a, c, l, u, h) { en.fromBufferAttribute(i, l), tn.fromBufferAttribute(i, u), nn.fromBufferAttribute(i, h); const f = s.morphTargetInfluences; if (r && f) { Vi.set(0, 0, 0), Hi.set(0, 0, 0), Wi.set(0, 0, 0); for (let g = 0, m = r.length; g < m; g++) { const d = f[g], _ = r[g]; d !== 0 && (kr.fromBufferAttribute(_, l), Vr.fromBufferAttribute(_, u), Hr.fromBufferAttribute(_, h), o ? (Vi.addScaledVector(kr, d), Hi.addScaledVector(Vr, d), Wi.addScaledVector(Hr, d)) : (Vi.addScaledVector(kr.sub(en), d), Hi.addScaledVector(Vr.sub(tn), d), Wi.addScaledVector(Hr.sub(nn), d))) } en.add(Vi), tn.add(Hi), nn.add(Wi) } s.isSkinnedMesh && (s.boneTransform(l, en), s.boneTransform(u, tn), s.boneTransform(h, nn)); const p = vc(s, e, t, n, en, tn, nn, Wr); if (p) { a && (Xi.fromBufferAttribute(a, l), qi.fromBufferAttribute(a, u), Yi.fromBufferAttribute(a, h), p.uv = Xt.getUV(Wr, en, tn, nn, Xi, qi, Yi, new le)), c && (Xi.fromBufferAttribute(c, l), qi.fromBufferAttribute(c, u), Yi.fromBufferAttribute(c, h), p.uv2 = Xt.getUV(Wr, en, tn, nn, Xi, qi, Yi, new le)); const g = { a: l, b: u, c: h, normal: new L, materialIndex: 0 }; Xt.getNormal(en, tn, nn, g.normal), p.face = g } return p } class ai extends Lt { constructor(e = 1, t = 1, n = 1, i = 1, r = 1, o = 1) { super(), this.type = "BoxGeometry", this.parameters = { width: e, height: t, depth: n, widthSegments: i, heightSegments: r, depthSegments: o }; const a = this; i = Math.floor(i), r = Math.floor(r), o = Math.floor(o); const c = [], l = [], u = [], h = []; let f = 0, p = 0; g("z", "y", "x", -1, -1, n, t, e, o, r, 0), g("z", "y", "x", 1, -1, n, t, -e, o, r, 1), g("x", "z", "y", 1, 1, e, n, t, i, o, 2), g("x", "z", "y", 1, -1, e, n, -t, i, o, 3), g("x", "y", "z", 1, -1, e, t, n, i, r, 4), g("x", "y", "z", -1, -1, e, t, -n, i, r, 5), this.setIndex(c), this.setAttribute("position", new Je(l, 3)), this.setAttribute("normal", new Je(u, 3)), this.setAttribute("uv", new Je(h, 2)); function g(m, d, _, v, T, S, y, C, D, x, A) { const I = S / D, N = y / x, J = S / 2, Z = y / 2, R = C / 2, W = D + 1, B = x + 1; let Y = 0, q = 0; const O = new L; for (let V = 0; V < B; V++) { const ee = V * N - Z; for (let K = 0; K < W; K++) { const $ = K * I - J; O[m] = $ * v, O[d] = ee * T, O[_] = R, l.push(O.x, O.y, O.z), O[m] = 0, O[d] = 0, O[_] = C > 0 ? 1 : -1, u.push(O.x, O.y, O.z), h.push(K / D), h.push(1 - V / x), Y += 1 } } for (let V = 0; V < x; V++)for (let ee = 0; ee < D; ee++) { const K = f + ee + W * V, $ = f + ee + W * (V + 1), de = f + (ee + 1) + W * (V + 1), _e = f + (ee + 1) + W * V; c.push(K, $, _e), c.push($, de, _e), q += 6 } a.addGroup(p, q, A), p += q, f += Y } } static fromJSON(e) { return new ai(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments) } } function oi(s) { const e = {}; for (const t in s) { e[t] = {}; for (const n in s[t]) { const i = s[t][n]; i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i } } return e } function it(s) { const e = {}; for (let t = 0; t < s.length; t++) { const n = oi(s[t]); for (const i in n) e[i] = n[i] } return e } function yc(s) { const e = []; for (let t = 0; t < s.length; t++)e.push(s[t].clone()); return e } const Mc = { clone: oi, merge: it }; var Sc = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, bc = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`; class Cn extends Pi { constructor(e) { super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Sc, this.fragmentShader = bc, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.extensions = { derivatives: !1, fragDepth: !1, drawBuffers: !1, shaderTextureLOD: !1 }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv2: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && (e.attributes !== void 0 && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(e)) } copy(e) { return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = oi(e.uniforms), this.uniformsGroups = yc(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this } toJSON(e) { const t = super.toJSON(e); t.glslVersion = this.glslVersion, t.uniforms = {}; for (const i in this.uniforms) { const o = this.uniforms[i].value; o && o.isTexture ? t.uniforms[i] = { type: "t", value: o.toJSON(e).uuid } : o && o.isColor ? t.uniforms[i] = { type: "c", value: o.getHex() } : o && o.isVector2 ? t.uniforms[i] = { type: "v2", value: o.toArray() } : o && o.isVector3 ? t.uniforms[i] = { type: "v3", value: o.toArray() } : o && o.isVector4 ? t.uniforms[i] = { type: "v4", value: o.toArray() } : o && o.isMatrix3 ? t.uniforms[i] = { type: "m3", value: o.toArray() } : o && o.isMatrix4 ? t.uniforms[i] = { type: "m4", value: o.toArray() } : t.uniforms[i] = { value: o } } Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader; const n = {}; for (const i in this.extensions) this.extensions[i] === !0 && (n[i] = !0); return Object.keys(n).length > 0 && (t.extensions = n), t } } class wa extends Mt { constructor() { super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new He, this.projectionMatrix = new He, this.projectionMatrixInverse = new He } copy(e, t) { return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this } getWorldDirection(e) { this.updateWorldMatrix(!0, !1); const t = this.matrixWorld.elements; return e.set(-t[8], -t[9], -t[10]).normalize() } updateMatrixWorld(e) { super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert() } updateWorldMatrix(e, t) { super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert() } clone() { return new this.constructor().copy(this) } } class ft extends wa { constructor(e = 50, t = 1, n = .1, i = 2e3) { super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix() } copy(e, t) { return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this } setFocalLength(e) { const t = .5 * this.getFilmHeight() / e; this.fov = sr * 2 * Math.atan(t), this.updateProjectionMatrix() } getFocalLength() { const e = Math.tan(xi * .5 * this.fov); return .5 * this.getFilmHeight() / e } getEffectiveFOV() { return sr * 2 * Math.atan(Math.tan(xi * .5 * this.fov) / this.zoom) } getFilmWidth() { return this.filmGauge * Math.min(this.aspect, 1) } getFilmHeight() { return this.filmGauge / Math.max(this.aspect, 1) } setViewOffset(e, t, n, i, r, o) { this.aspect = e / t, this.view === null && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = o, this.updateProjectionMatrix() } clearViewOffset() { this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix() } updateProjectionMatrix() { const e = this.near; let t = e * Math.tan(xi * .5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, r = -.5 * i; const o = this.view; if (this.view !== null && this.view.enabled) { const c = o.fullWidth, l = o.fullHeight; r += o.offsetX * i / c, t -= o.offsetY * n / l, i *= o.width / c, n *= o.height / l } const a = this.filmOffset; a !== 0 && (r += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert() } toJSON(e) { const t = super.toJSON(e); return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t } } const Yn = 90, jn = 1; class wc extends Mt { constructor(e, t, n) { if (super(), this.type = "CubeCamera", n.isWebGLCubeRenderTarget !== !0) { console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter."); return } this.renderTarget = n; const i = new ft(Yn, jn, e, t); i.layers = this.layers, i.up.set(0, -1, 0), i.lookAt(new L(1, 0, 0)), this.add(i); const r = new ft(Yn, jn, e, t); r.layers = this.layers, r.up.set(0, -1, 0), r.lookAt(new L(-1, 0, 0)), this.add(r); const o = new ft(Yn, jn, e, t); o.layers = this.layers, o.up.set(0, 0, 1), o.lookAt(new L(0, 1, 0)), this.add(o); const a = new ft(Yn, jn, e, t); a.layers = this.layers, a.up.set(0, 0, -1), a.lookAt(new L(0, -1, 0)), this.add(a); const c = new ft(Yn, jn, e, t); c.layers = this.layers, c.up.set(0, -1, 0), c.lookAt(new L(0, 0, 1)), this.add(c); const l = new ft(Yn, jn, e, t); l.layers = this.layers, l.up.set(0, -1, 0), l.lookAt(new L(0, 0, -1)), this.add(l) } update(e, t) { this.parent === null && this.updateMatrixWorld(); const n = this.renderTarget, [i, r, o, a, c, l] = this.children, u = e.getRenderTarget(), h = e.toneMapping, f = e.xr.enabled; e.toneMapping = Yt, e.xr.enabled = !1; const p = n.texture.generateMipmaps; n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0), e.render(t, i), e.setRenderTarget(n, 1), e.render(t, r), e.setRenderTarget(n, 2), e.render(t, o), e.setRenderTarget(n, 3), e.render(t, a), e.setRenderTarget(n, 4), e.render(t, c), n.texture.generateMipmaps = p, e.setRenderTarget(n, 5), e.render(t, l), e.setRenderTarget(u), e.toneMapping = h, e.xr.enabled = f, n.texture.needsPMREMUpdate = !0 } } class Ea extends yt { constructor(e, t, n, i, r, o, a, c, l, u) { e = e !== void 0 ? e : [], t = t !== void 0 ? t : ii, super(e, t, n, i, r, o, a, c, l, u), this.isCubeTexture = !0, this.flipY = !1 } get images() { return this.image } set images(e) { this.image = e } } class Ec extends Tn {
	constructor(e, t = {}) { super(e, e, t), this.isWebGLCubeRenderTarget = !0; const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n]; this.texture = new Ea(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.encoding), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : xt } fromEquirectangularTexture(e, t) {
		this.texture.type = t.type, this.texture.encoding = t.encoding, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter; const n = {
			uniforms: { tEquirect: { value: null } }, vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`, fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`}, i = new ai(5, 5, 5), r = new Cn({ name: "CubemapFromEquirect", uniforms: oi(n.uniforms), vertexShader: n.vertexShader, fragmentShader: n.fragmentShader, side: Ct, blending: on }); r.uniforms.tEquirect.value = t; const o = new Qe(i, r), a = t.minFilter; return t.minFilter === hr && (t.minFilter = xt), new wc(1, 10, this).update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this
	} clear(e, t, n, i) { const r = e.getRenderTarget(); for (let o = 0; o < 6; o++)e.setRenderTarget(this, o), e.clear(t, n, i); e.setRenderTarget(r) }
} const Xr = new L, Tc = new L, Ac = new vt; class mn { constructor(e = new L(1, 0, 0), t = 0) { this.isPlane = !0, this.normal = e, this.constant = t } set(e, t) { return this.normal.copy(e), this.constant = t, this } setComponents(e, t, n, i) { return this.normal.set(e, t, n), this.constant = i, this } setFromNormalAndCoplanarPoint(e, t) { return this.normal.copy(e), this.constant = -t.dot(this.normal), this } setFromCoplanarPoints(e, t, n) { const i = Xr.subVectors(n, t).cross(Tc.subVectors(e, t)).normalize(); return this.setFromNormalAndCoplanarPoint(i, e), this } copy(e) { return this.normal.copy(e.normal), this.constant = e.constant, this } normalize() { const e = 1 / this.normal.length(); return this.normal.multiplyScalar(e), this.constant *= e, this } negate() { return this.constant *= -1, this.normal.negate(), this } distanceToPoint(e) { return this.normal.dot(e) + this.constant } distanceToSphere(e) { return this.distanceToPoint(e.center) - e.radius } projectPoint(e, t) { return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e) } intersectLine(e, t) { const n = e.delta(Xr), i = this.normal.dot(n); if (i === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null; const r = -(e.start.dot(this.normal) + this.constant) / i; return r < 0 || r > 1 ? null : t.copy(n).multiplyScalar(r).add(e.start) } intersectsLine(e) { const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end); return t < 0 && n > 0 || n < 0 && t > 0 } intersectsBox(e) { return e.intersectsPlane(this) } intersectsSphere(e) { return e.intersectsPlane(this) } coplanarPoint(e) { return e.copy(this.normal).multiplyScalar(-this.constant) } applyMatrix4(e, t) { const n = t || Ac.getNormalMatrix(e), i = this.coplanarPoint(Xr).applyMatrix4(e), r = this.normal.applyMatrix3(n).normalize(); return this.constant = -i.dot(r), this } translate(e) { return this.constant -= e.dot(this.normal), this } equals(e) { return e.normal.equals(this.normal) && e.constant === this.constant } clone() { return new this.constructor().copy(this) } } const Zn = new xs, Ji = new L; class ys { constructor(e = new mn, t = new mn, n = new mn, i = new mn, r = new mn, o = new mn) { this.planes = [e, t, n, i, r, o] } set(e, t, n, i, r, o) { const a = this.planes; return a[0].copy(e), a[1].copy(t), a[2].copy(n), a[3].copy(i), a[4].copy(r), a[5].copy(o), this } copy(e) { const t = this.planes; for (let n = 0; n < 6; n++)t[n].copy(e.planes[n]); return this } setFromProjectionMatrix(e) { const t = this.planes, n = e.elements, i = n[0], r = n[1], o = n[2], a = n[3], c = n[4], l = n[5], u = n[6], h = n[7], f = n[8], p = n[9], g = n[10], m = n[11], d = n[12], _ = n[13], v = n[14], T = n[15]; return t[0].setComponents(a - i, h - c, m - f, T - d).normalize(), t[1].setComponents(a + i, h + c, m + f, T + d).normalize(), t[2].setComponents(a + r, h + l, m + p, T + _).normalize(), t[3].setComponents(a - r, h - l, m - p, T - _).normalize(), t[4].setComponents(a - o, h - u, m - g, T - v).normalize(), t[5].setComponents(a + o, h + u, m + g, T + v).normalize(), this } intersectsObject(e) { const t = e.geometry; return t.boundingSphere === null && t.computeBoundingSphere(), Zn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(Zn) } intersectsSprite(e) { return Zn.center.set(0, 0, 0), Zn.radius = .7071067811865476, Zn.applyMatrix4(e.matrixWorld), this.intersectsSphere(Zn) } intersectsSphere(e) { const t = this.planes, n = e.center, i = -e.radius; for (let r = 0; r < 6; r++)if (t[r].distanceToPoint(n) < i) return !1; return !0 } intersectsBox(e) { const t = this.planes; for (let n = 0; n < 6; n++) { const i = t[n]; if (Ji.x = i.normal.x > 0 ? e.max.x : e.min.x, Ji.y = i.normal.y > 0 ? e.max.y : e.min.y, Ji.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(Ji) < 0) return !1 } return !0 } containsPoint(e) { const t = this.planes; for (let n = 0; n < 6; n++)if (t[n].distanceToPoint(e) < 0) return !1; return !0 } clone() { return new this.constructor().copy(this) } } function Ta() { let s = null, e = !1, t = null, n = null; function i(r, o) { t(r, o), n = s.requestAnimationFrame(i) } return { start: function () { e !== !0 && t !== null && (n = s.requestAnimationFrame(i), e = !0) }, stop: function () { s.cancelAnimationFrame(n), e = !1 }, setAnimationLoop: function (r) { t = r }, setContext: function (r) { s = r } } } function Cc(s, e) { const t = e.isWebGL2, n = new WeakMap; function i(l, u) { const h = l.array, f = l.usage, p = s.createBuffer(); s.bindBuffer(u, p), s.bufferData(u, h, f), l.onUploadCallback(); let g; if (h instanceof Float32Array) g = 5126; else if (h instanceof Uint16Array) if (l.isFloat16BufferAttribute) if (t) g = 5131; else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."); else g = 5123; else if (h instanceof Int16Array) g = 5122; else if (h instanceof Uint32Array) g = 5125; else if (h instanceof Int32Array) g = 5124; else if (h instanceof Int8Array) g = 5120; else if (h instanceof Uint8Array) g = 5121; else if (h instanceof Uint8ClampedArray) g = 5121; else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + h); return { buffer: p, type: g, bytesPerElement: h.BYTES_PER_ELEMENT, version: l.version } } function r(l, u, h) { const f = u.array, p = u.updateRange; s.bindBuffer(h, l), p.count === -1 ? s.bufferSubData(h, 0, f) : (t ? s.bufferSubData(h, p.offset * f.BYTES_PER_ELEMENT, f, p.offset, p.count) : s.bufferSubData(h, p.offset * f.BYTES_PER_ELEMENT, f.subarray(p.offset, p.offset + p.count)), p.count = -1) } function o(l) { return l.isInterleavedBufferAttribute && (l = l.data), n.get(l) } function a(l) { l.isInterleavedBufferAttribute && (l = l.data); const u = n.get(l); u && (s.deleteBuffer(u.buffer), n.delete(l)) } function c(l, u) { if (l.isGLBufferAttribute) { const f = n.get(l); (!f || f.version < l.version) && n.set(l, { buffer: l.buffer, type: l.type, bytesPerElement: l.elementSize, version: l.version }); return } l.isInterleavedBufferAttribute && (l = l.data); const h = n.get(l); h === void 0 ? n.set(l, i(l, u)) : h.version < l.version && (r(h.buffer, l, u), h.version = l.version) } return { get: o, remove: a, update: c } } class Ms extends Lt { constructor(e = 1, t = 1, n = 1, i = 1) { super(), this.type = "PlaneGeometry", this.parameters = { width: e, height: t, widthSegments: n, heightSegments: i }; const r = e / 2, o = t / 2, a = Math.floor(n), c = Math.floor(i), l = a + 1, u = c + 1, h = e / a, f = t / c, p = [], g = [], m = [], d = []; for (let _ = 0; _ < u; _++) { const v = _ * f - o; for (let T = 0; T < l; T++) { const S = T * h - r; g.push(S, -v, 0), m.push(0, 0, 1), d.push(T / a), d.push(1 - _ / c) } } for (let _ = 0; _ < c; _++)for (let v = 0; v < a; v++) { const T = v + l * _, S = v + l * (_ + 1), y = v + 1 + l * (_ + 1), C = v + 1 + l * _; p.push(T, S, C), p.push(S, y, C) } this.setIndex(p), this.setAttribute("position", new Je(g, 3)), this.setAttribute("normal", new Je(m, 3)), this.setAttribute("uv", new Je(d, 2)) } static fromJSON(e) { return new Ms(e.width, e.height, e.widthSegments, e.heightSegments) } } var Lc = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`, Pc = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Dc = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, Rc = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Ic = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, Fc = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Nc = "vec3 transformed = vec3( position );", zc = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Oc = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`, Uc = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, Bc = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Gc = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`, kc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Vc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Hc = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Wc = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Xc = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, qc = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, Yc = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, jc = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`, Zc = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Jc = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, $c = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Kc = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`, Qc = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, eu = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, tu = "gl_FragColor = linearToOutputTexel( gl_FragColor );", nu = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, iu = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, ru = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, su = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, ou = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, au = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, lu = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, cu = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, uu = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, hu = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, du = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`, fu = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, pu = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, mu = `vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`, gu = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, _u = `#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`, xu = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, vu = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`, yu = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Mu = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`, Su = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`, bu = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, wu = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, Eu = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, Tu = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`, Au = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Cu = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Lu = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, Pu = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, Du = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Ru = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Iu = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Fu = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Nu = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`, zu = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Ou = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Uu = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`, Bu = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`, Gu = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`, ku = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`, Vu = `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, Hu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Wu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Xu = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, qu = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`, Yu = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`, ju = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`, Zu = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`, Ju = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, $u = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Ku = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`, Qu = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, eh = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, th = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, nh = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, ih = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`, rh = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, sh = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`, oh = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, ah = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`, lh = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, ch = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, uh = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`, hh = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, dh = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, fh = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, ph = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, mh = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, gh = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, _h = `#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`, xh = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`, vh = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`, yh = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`, Mh = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`, Sh = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`, bh = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`, wh = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`, Eh = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`; const Th = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Ah = `uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, Ch = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Lh = `#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, Ph = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, Dh = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`, Rh = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, Ih = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, Fh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Nh = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, zh = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Oh = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Uh = `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, Bh = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Gh = `#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, kh = `uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Vh = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Hh = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Wh = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Xh = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, qh = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Yh = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, jh = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, Zh = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Jh = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, $h = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Kh = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Qh = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, ed = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, td = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, nd = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, id = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, we = { alphamap_fragment: Lc, alphamap_pars_fragment: Pc, alphatest_fragment: Dc, alphatest_pars_fragment: Rc, aomap_fragment: Ic, aomap_pars_fragment: Fc, begin_vertex: Nc, beginnormal_vertex: zc, bsdfs: Oc, iridescence_fragment: Uc, bumpmap_pars_fragment: Bc, clipping_planes_fragment: Gc, clipping_planes_pars_fragment: kc, clipping_planes_pars_vertex: Vc, clipping_planes_vertex: Hc, color_fragment: Wc, color_pars_fragment: Xc, color_pars_vertex: qc, color_vertex: Yc, common: jc, cube_uv_reflection_fragment: Zc, defaultnormal_vertex: Jc, displacementmap_pars_vertex: $c, displacementmap_vertex: Kc, emissivemap_fragment: Qc, emissivemap_pars_fragment: eu, encodings_fragment: tu, encodings_pars_fragment: nu, envmap_fragment: iu, envmap_common_pars_fragment: ru, envmap_pars_fragment: su, envmap_pars_vertex: ou, envmap_physical_pars_fragment: _u, envmap_vertex: au, fog_vertex: lu, fog_pars_vertex: cu, fog_fragment: uu, fog_pars_fragment: hu, gradientmap_pars_fragment: du, lightmap_fragment: fu, lightmap_pars_fragment: pu, lights_lambert_vertex: mu, lights_pars_begin: gu, lights_toon_fragment: xu, lights_toon_pars_fragment: vu, lights_phong_fragment: yu, lights_phong_pars_fragment: Mu, lights_physical_fragment: Su, lights_physical_pars_fragment: bu, lights_fragment_begin: wu, lights_fragment_maps: Eu, lights_fragment_end: Tu, logdepthbuf_fragment: Au, logdepthbuf_pars_fragment: Cu, logdepthbuf_pars_vertex: Lu, logdepthbuf_vertex: Pu, map_fragment: Du, map_pars_fragment: Ru, map_particle_fragment: Iu, map_particle_pars_fragment: Fu, metalnessmap_fragment: Nu, metalnessmap_pars_fragment: zu, morphcolor_vertex: Ou, morphnormal_vertex: Uu, morphtarget_pars_vertex: Bu, morphtarget_vertex: Gu, normal_fragment_begin: ku, normal_fragment_maps: Vu, normal_pars_fragment: Hu, normal_pars_vertex: Wu, normal_vertex: Xu, normalmap_pars_fragment: qu, clearcoat_normal_fragment_begin: Yu, clearcoat_normal_fragment_maps: ju, clearcoat_pars_fragment: Zu, iridescence_pars_fragment: Ju, output_fragment: $u, packing: Ku, premultiplied_alpha_fragment: Qu, project_vertex: eh, dithering_fragment: th, dithering_pars_fragment: nh, roughnessmap_fragment: ih, roughnessmap_pars_fragment: rh, shadowmap_pars_fragment: sh, shadowmap_pars_vertex: oh, shadowmap_vertex: ah, shadowmask_pars_fragment: lh, skinbase_vertex: ch, skinning_pars_vertex: uh, skinning_vertex: hh, skinnormal_vertex: dh, specularmap_fragment: fh, specularmap_pars_fragment: ph, tonemapping_fragment: mh, tonemapping_pars_fragment: gh, transmission_fragment: _h, transmission_pars_fragment: xh, uv_pars_fragment: vh, uv_pars_vertex: yh, uv_vertex: Mh, uv2_pars_fragment: Sh, uv2_pars_vertex: bh, uv2_vertex: wh, worldpos_vertex: Eh, background_vert: Th, background_frag: Ah, cube_vert: Ch, cube_frag: Lh, depth_vert: Ph, depth_frag: Dh, distanceRGBA_vert: Rh, distanceRGBA_frag: Ih, equirect_vert: Fh, equirect_frag: Nh, linedashed_vert: zh, linedashed_frag: Oh, meshbasic_vert: Uh, meshbasic_frag: Bh, meshlambert_vert: Gh, meshlambert_frag: kh, meshmatcap_vert: Vh, meshmatcap_frag: Hh, meshnormal_vert: Wh, meshnormal_frag: Xh, meshphong_vert: qh, meshphong_frag: Yh, meshphysical_vert: jh, meshphysical_frag: Zh, meshtoon_vert: Jh, meshtoon_frag: $h, points_vert: Kh, points_frag: Qh, shadow_vert: ed, shadow_frag: td, sprite_vert: nd, sprite_frag: id }, re = { common: { diffuse: { value: new Ne(16777215) }, opacity: { value: 1 }, map: { value: null }, uvTransform: { value: new vt }, uv2Transform: { value: new vt }, alphaMap: { value: null }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null } }, envmap: { envMap: { value: null }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: .98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } }, emissivemap: { emissiveMap: { value: null } }, bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalScale: { value: new le(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, roughnessmap: { roughnessMap: { value: null } }, metalnessmap: { metalnessMap: { value: null } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new Ne(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotShadowMap: { value: [] }, spotShadowMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new Ne(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaTest: { value: 0 }, uvTransform: { value: new vt } }, sprite: { diffuse: { value: new Ne(16777215) }, opacity: { value: 1 }, center: { value: new le(.5, .5) }, rotation: { value: 0 }, map: { value: null }, alphaMap: { value: null }, alphaTest: { value: 0 }, uvTransform: { value: new vt } } }, Dt = { basic: { uniforms: it([re.common, re.specularmap, re.envmap, re.aomap, re.lightmap, re.fog]), vertexShader: we.meshbasic_vert, fragmentShader: we.meshbasic_frag }, lambert: { uniforms: it([re.common, re.specularmap, re.envmap, re.aomap, re.lightmap, re.emissivemap, re.fog, re.lights, { emissive: { value: new Ne(0) } }]), vertexShader: we.meshlambert_vert, fragmentShader: we.meshlambert_frag }, phong: { uniforms: it([re.common, re.specularmap, re.envmap, re.aomap, re.lightmap, re.emissivemap, re.bumpmap, re.normalmap, re.displacementmap, re.fog, re.lights, { emissive: { value: new Ne(0) }, specular: { value: new Ne(1118481) }, shininess: { value: 30 } }]), vertexShader: we.meshphong_vert, fragmentShader: we.meshphong_frag }, standard: { uniforms: it([re.common, re.envmap, re.aomap, re.lightmap, re.emissivemap, re.bumpmap, re.normalmap, re.displacementmap, re.roughnessmap, re.metalnessmap, re.fog, re.lights, { emissive: { value: new Ne(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: we.meshphysical_vert, fragmentShader: we.meshphysical_frag }, toon: { uniforms: it([re.common, re.aomap, re.lightmap, re.emissivemap, re.bumpmap, re.normalmap, re.displacementmap, re.gradientmap, re.fog, re.lights, { emissive: { value: new Ne(0) } }]), vertexShader: we.meshtoon_vert, fragmentShader: we.meshtoon_frag }, matcap: { uniforms: it([re.common, re.bumpmap, re.normalmap, re.displacementmap, re.fog, { matcap: { value: null } }]), vertexShader: we.meshmatcap_vert, fragmentShader: we.meshmatcap_frag }, points: { uniforms: it([re.points, re.fog]), vertexShader: we.points_vert, fragmentShader: we.points_frag }, dashed: { uniforms: it([re.common, re.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: we.linedashed_vert, fragmentShader: we.linedashed_frag }, depth: { uniforms: it([re.common, re.displacementmap]), vertexShader: we.depth_vert, fragmentShader: we.depth_frag }, normal: { uniforms: it([re.common, re.bumpmap, re.normalmap, re.displacementmap, { opacity: { value: 1 } }]), vertexShader: we.meshnormal_vert, fragmentShader: we.meshnormal_frag }, sprite: { uniforms: it([re.sprite, re.fog]), vertexShader: we.sprite_vert, fragmentShader: we.sprite_frag }, background: { uniforms: { uvTransform: { value: new vt }, t2D: { value: null } }, vertexShader: we.background_vert, fragmentShader: we.background_frag }, cube: { uniforms: it([re.envmap, { opacity: { value: 1 } }]), vertexShader: we.cube_vert, fragmentShader: we.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: we.equirect_vert, fragmentShader: we.equirect_frag }, distanceRGBA: { uniforms: it([re.common, re.displacementmap, { referencePosition: { value: new L }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: we.distanceRGBA_vert, fragmentShader: we.distanceRGBA_frag }, shadow: { uniforms: it([re.lights, re.fog, { color: { value: new Ne(0) }, opacity: { value: 1 } }]), vertexShader: we.shadow_vert, fragmentShader: we.shadow_frag } }; Dt.physical = { uniforms: it([Dt.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatNormalScale: { value: new le(1, 1) }, clearcoatNormalMap: { value: null }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, sheen: { value: 0 }, sheenColor: { value: new Ne(0) }, sheenColorMap: { value: null }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionSamplerSize: { value: new le }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, attenuationDistance: { value: 0 }, attenuationColor: { value: new Ne(0) }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularColor: { value: new Ne(1, 1, 1) }, specularColorMap: { value: null } }]), vertexShader: we.meshphysical_vert, fragmentShader: we.meshphysical_frag }; function rd(s, e, t, n, i, r) { const o = new Ne(0); let a = i === !0 ? 0 : 1, c, l, u = null, h = 0, f = null; function p(m, d) { let _ = !1, v = d.isScene === !0 ? d.background : null; v && v.isTexture && (v = e.get(v)); const T = s.xr, S = T.getSession && T.getSession(); S && S.environmentBlendMode === "additive" && (v = null), v === null ? g(o, a) : v && v.isColor && (g(v, 1), _ = !0), (s.autoClear || _) && s.clear(s.autoClearColor, s.autoClearDepth, s.autoClearStencil), v && (v.isCubeTexture || v.mapping === ur) ? (l === void 0 && (l = new Qe(new ai(1, 1, 1), new Cn({ name: "BackgroundCubeMaterial", uniforms: oi(Dt.cube.uniforms), vertexShader: Dt.cube.vertexShader, fragmentShader: Dt.cube.fragmentShader, side: Ct, depthTest: !1, depthWrite: !1, fog: !1 })), l.geometry.deleteAttribute("normal"), l.geometry.deleteAttribute("uv"), l.onBeforeRender = function (y, C, D) { this.matrixWorld.copyPosition(D.matrixWorld) }, Object.defineProperty(l.material, "envMap", { get: function () { return this.uniforms.envMap.value } }), n.update(l)), l.material.uniforms.envMap.value = v, l.material.uniforms.flipEnvMap.value = v.isCubeTexture && v.isRenderTargetTexture === !1 ? -1 : 1, (u !== v || h !== v.version || f !== s.toneMapping) && (l.material.needsUpdate = !0, u = v, h = v.version, f = s.toneMapping), l.layers.enableAll(), m.unshift(l, l.geometry, l.material, 0, 0, null)) : v && v.isTexture && (c === void 0 && (c = new Qe(new Ms(2, 2), new Cn({ name: "BackgroundMaterial", uniforms: oi(Dt.background.uniforms), vertexShader: Dt.background.vertexShader, fragmentShader: Dt.background.fragmentShader, side: Si, depthTest: !1, depthWrite: !1, fog: !1 })), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", { get: function () { return this.uniforms.t2D.value } }), n.update(c)), c.material.uniforms.t2D.value = v, v.matrixAutoUpdate === !0 && v.updateMatrix(), c.material.uniforms.uvTransform.value.copy(v.matrix), (u !== v || h !== v.version || f !== s.toneMapping) && (c.material.needsUpdate = !0, u = v, h = v.version, f = s.toneMapping), c.layers.enableAll(), m.unshift(c, c.geometry, c.material, 0, 0, null)) } function g(m, d) { t.buffers.color.setClear(m.r, m.g, m.b, d, r) } return { getClearColor: function () { return o }, setClearColor: function (m, d = 1) { o.set(m), a = d, g(o, a) }, getClearAlpha: function () { return a }, setClearAlpha: function (m) { a = m, g(o, a) }, render: p } } function sd(s, e, t, n) { const i = s.getParameter(34921), r = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), o = n.isWebGL2 || r !== null, a = {}, c = d(null); let l = c, u = !1; function h(R, W, B, Y, q) { let O = !1; if (o) { const V = m(Y, B, W); l !== V && (l = V, p(l.object)), O = _(R, Y, B, q), O && v(R, Y, B, q) } else { const V = W.wireframe === !0; (l.geometry !== Y.id || l.program !== B.id || l.wireframe !== V) && (l.geometry = Y.id, l.program = B.id, l.wireframe = V, O = !0) } q !== null && t.update(q, 34963), (O || u) && (u = !1, x(R, W, B, Y), q !== null && s.bindBuffer(34963, t.get(q).buffer)) } function f() { return n.isWebGL2 ? s.createVertexArray() : r.createVertexArrayOES() } function p(R) { return n.isWebGL2 ? s.bindVertexArray(R) : r.bindVertexArrayOES(R) } function g(R) { return n.isWebGL2 ? s.deleteVertexArray(R) : r.deleteVertexArrayOES(R) } function m(R, W, B) { const Y = B.wireframe === !0; let q = a[R.id]; q === void 0 && (q = {}, a[R.id] = q); let O = q[W.id]; O === void 0 && (O = {}, q[W.id] = O); let V = O[Y]; return V === void 0 && (V = d(f()), O[Y] = V), V } function d(R) { const W = [], B = [], Y = []; for (let q = 0; q < i; q++)W[q] = 0, B[q] = 0, Y[q] = 0; return { geometry: null, program: null, wireframe: !1, newAttributes: W, enabledAttributes: B, attributeDivisors: Y, object: R, attributes: {}, index: null } } function _(R, W, B, Y) { const q = l.attributes, O = W.attributes; let V = 0; const ee = B.getAttributes(); for (const K in ee) if (ee[K].location >= 0) { const de = q[K]; let _e = O[K]; if (_e === void 0 && (K === "instanceMatrix" && R.instanceMatrix && (_e = R.instanceMatrix), K === "instanceColor" && R.instanceColor && (_e = R.instanceColor)), de === void 0 || de.attribute !== _e || _e && de.data !== _e.data) return !0; V++ } return l.attributesNum !== V || l.index !== Y } function v(R, W, B, Y) { const q = {}, O = W.attributes; let V = 0; const ee = B.getAttributes(); for (const K in ee) if (ee[K].location >= 0) { let de = O[K]; de === void 0 && (K === "instanceMatrix" && R.instanceMatrix && (de = R.instanceMatrix), K === "instanceColor" && R.instanceColor && (de = R.instanceColor)); const _e = {}; _e.attribute = de, de && de.data && (_e.data = de.data), q[K] = _e, V++ } l.attributes = q, l.attributesNum = V, l.index = Y } function T() { const R = l.newAttributes; for (let W = 0, B = R.length; W < B; W++)R[W] = 0 } function S(R) { y(R, 0) } function y(R, W) { const B = l.newAttributes, Y = l.enabledAttributes, q = l.attributeDivisors; B[R] = 1, Y[R] === 0 && (s.enableVertexAttribArray(R), Y[R] = 1), q[R] !== W && ((n.isWebGL2 ? s : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](R, W), q[R] = W) } function C() { const R = l.newAttributes, W = l.enabledAttributes; for (let B = 0, Y = W.length; B < Y; B++)W[B] !== R[B] && (s.disableVertexAttribArray(B), W[B] = 0) } function D(R, W, B, Y, q, O) { n.isWebGL2 === !0 && (B === 5124 || B === 5125) ? s.vertexAttribIPointer(R, W, B, q, O) : s.vertexAttribPointer(R, W, B, Y, q, O) } function x(R, W, B, Y) { if (n.isWebGL2 === !1 && (R.isInstancedMesh || Y.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null) return; T(); const q = Y.attributes, O = B.getAttributes(), V = W.defaultAttributeValues; for (const ee in O) { const K = O[ee]; if (K.location >= 0) { let $ = q[ee]; if ($ === void 0 && (ee === "instanceMatrix" && R.instanceMatrix && ($ = R.instanceMatrix), ee === "instanceColor" && R.instanceColor && ($ = R.instanceColor)), $ !== void 0) { const de = $.normalized, _e = $.itemSize, H = t.get($); if (H === void 0) continue; const Pe = H.buffer, pe = H.type, xe = H.bytesPerElement; if ($.isInterleavedBufferAttribute) { const he = $.data, Re = he.stride, Me = $.offset; if (he.isInstancedInterleavedBuffer) { for (let fe = 0; fe < K.locationSize; fe++)y(K.location + fe, he.meshPerAttribute); R.isInstancedMesh !== !0 && Y._maxInstanceCount === void 0 && (Y._maxInstanceCount = he.meshPerAttribute * he.count) } else for (let fe = 0; fe < K.locationSize; fe++)S(K.location + fe); s.bindBuffer(34962, Pe); for (let fe = 0; fe < K.locationSize; fe++)D(K.location + fe, _e / K.locationSize, pe, de, Re * xe, (Me + _e / K.locationSize * fe) * xe) } else { if ($.isInstancedBufferAttribute) { for (let he = 0; he < K.locationSize; he++)y(K.location + he, $.meshPerAttribute); R.isInstancedMesh !== !0 && Y._maxInstanceCount === void 0 && (Y._maxInstanceCount = $.meshPerAttribute * $.count) } else for (let he = 0; he < K.locationSize; he++)S(K.location + he); s.bindBuffer(34962, Pe); for (let he = 0; he < K.locationSize; he++)D(K.location + he, _e / K.locationSize, pe, de, _e * xe, _e / K.locationSize * he * xe) } } else if (V !== void 0) { const de = V[ee]; if (de !== void 0) switch (de.length) { case 2: s.vertexAttrib2fv(K.location, de); break; case 3: s.vertexAttrib3fv(K.location, de); break; case 4: s.vertexAttrib4fv(K.location, de); break; default: s.vertexAttrib1fv(K.location, de) } } } } C() } function A() { J(); for (const R in a) { const W = a[R]; for (const B in W) { const Y = W[B]; for (const q in Y) g(Y[q].object), delete Y[q]; delete W[B] } delete a[R] } } function I(R) { if (a[R.id] === void 0) return; const W = a[R.id]; for (const B in W) { const Y = W[B]; for (const q in Y) g(Y[q].object), delete Y[q]; delete W[B] } delete a[R.id] } function N(R) { for (const W in a) { const B = a[W]; if (B[R.id] === void 0) continue; const Y = B[R.id]; for (const q in Y) g(Y[q].object), delete Y[q]; delete B[R.id] } } function J() { Z(), u = !0, l !== c && (l = c, p(l.object)) } function Z() { c.geometry = null, c.program = null, c.wireframe = !1 } return { setup: h, reset: J, resetDefaultState: Z, dispose: A, releaseStatesOfGeometry: I, releaseStatesOfProgram: N, initAttributes: T, enableAttribute: S, disableUnusedAttributes: C } } function od(s, e, t, n) { const i = n.isWebGL2; let r; function o(l) { r = l } function a(l, u) { s.drawArrays(r, l, u), t.update(u, r, 1) } function c(l, u, h) { if (h === 0) return; let f, p; if (i) f = s, p = "drawArraysInstanced"; else if (f = e.get("ANGLE_instanced_arrays"), p = "drawArraysInstancedANGLE", f === null) { console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."); return } f[p](r, l, u, h), t.update(u, r, h) } this.setMode = o, this.render = a, this.renderInstances = c } function ad(s, e, t) { let n; function i() { if (n !== void 0) return n; if (e.has("EXT_texture_filter_anisotropic") === !0) { const D = e.get("EXT_texture_filter_anisotropic"); n = s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT) } else n = 0; return n } function r(D) { if (D === "highp") { if (s.getShaderPrecisionFormat(35633, 36338).precision > 0 && s.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp"; D = "mediump" } return D === "mediump" && s.getShaderPrecisionFormat(35633, 36337).precision > 0 && s.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp" } const o = typeof WebGL2RenderingContext < "u" && s instanceof WebGL2RenderingContext || typeof WebGL2ComputeRenderingContext < "u" && s instanceof WebGL2ComputeRenderingContext; let a = t.precision !== void 0 ? t.precision : "highp"; const c = r(a); c !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", c, "instead."), a = c); const l = o || e.has("WEBGL_draw_buffers"), u = t.logarithmicDepthBuffer === !0, h = s.getParameter(34930), f = s.getParameter(35660), p = s.getParameter(3379), g = s.getParameter(34076), m = s.getParameter(34921), d = s.getParameter(36347), _ = s.getParameter(36348), v = s.getParameter(36349), T = f > 0, S = o || e.has("OES_texture_float"), y = T && S, C = o ? s.getParameter(36183) : 0; return { isWebGL2: o, drawBuffers: l, getMaxAnisotropy: i, getMaxPrecision: r, precision: a, logarithmicDepthBuffer: u, maxTextures: h, maxVertexTextures: f, maxTextureSize: p, maxCubemapSize: g, maxAttributes: m, maxVertexUniforms: d, maxVaryings: _, maxFragmentUniforms: v, vertexTextures: T, floatFragmentTextures: S, floatVertexTextures: y, maxSamples: C } } function ld(s) { const e = this; let t = null, n = 0, i = !1, r = !1; const o = new mn, a = new vt, c = { value: null, needsUpdate: !1 }; this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function (h, f, p) { const g = h.length !== 0 || f || n !== 0 || i; return i = f, t = u(h, p, 0), n = h.length, g }, this.beginShadows = function () { r = !0, u(null) }, this.endShadows = function () { r = !1, l() }, this.setState = function (h, f, p) { const g = h.clippingPlanes, m = h.clipIntersection, d = h.clipShadows, _ = s.get(h); if (!i || g === null || g.length === 0 || r && !d) r ? u(null) : l(); else { const v = r ? 0 : n, T = v * 4; let S = _.clippingState || null; c.value = S, S = u(g, f, T, p); for (let y = 0; y !== T; ++y)S[y] = t[y]; _.clippingState = S, this.numIntersection = m ? this.numPlanes : 0, this.numPlanes += v } }; function l() { c.value !== t && (c.value = t, c.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0 } function u(h, f, p, g) { const m = h !== null ? h.length : 0; let d = null; if (m !== 0) { if (d = c.value, g !== !0 || d === null) { const _ = p + m * 4, v = f.matrixWorldInverse; a.getNormalMatrix(v), (d === null || d.length < _) && (d = new Float32Array(_)); for (let T = 0, S = p; T !== m; ++T, S += 4)o.copy(h[T]).applyMatrix4(v, a), o.normal.toArray(d, S), d[S + 3] = o.constant } c.value = d, c.needsUpdate = !0 } return e.numPlanes = m, e.numIntersection = 0, d } } function cd(s) { let e = new WeakMap; function t(o, a) { return a === is ? o.mapping = ii : a === rs && (o.mapping = ri), o } function n(o) { if (o && o.isTexture && o.isRenderTargetTexture === !1) { const a = o.mapping; if (a === is || a === rs) if (e.has(o)) { const c = e.get(o).texture; return t(c, o.mapping) } else { const c = o.image; if (c && c.height > 0) { const l = new Ec(c.height / 2); return l.fromEquirectangularTexture(s, o), e.set(o, l), o.addEventListener("dispose", i), t(l.texture, o.mapping) } else return null } } return o } function i(o) { const a = o.target; a.removeEventListener("dispose", i); const c = e.get(a); c !== void 0 && (e.delete(a), c.dispose()) } function r() { e = new WeakMap } return { get: n, dispose: r } } class ud extends wa { constructor(e = -1, t = 1, n = 1, i = -1, r = .1, o = 2e3) { super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = r, this.far = o, this.updateProjectionMatrix() } copy(e, t) { return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this } setViewOffset(e, t, n, i, r, o) { this.view === null && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = o, this.updateProjectionMatrix() } clearViewOffset() { this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix() } updateProjectionMatrix() { const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2; let r = n - e, o = n + e, a = i + t, c = i - t; if (this.view !== null && this.view.enabled) { const l = (this.right - this.left) / this.view.fullWidth / this.zoom, u = (this.top - this.bottom) / this.view.fullHeight / this.zoom; r += l * this.view.offsetX, o = r + l * this.view.width, a -= u * this.view.offsetY, c = a - u * this.view.height } this.projectionMatrix.makeOrthographic(r, o, a, c, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert() } toJSON(e) { const t = super.toJSON(e); return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t } } const Kn = 4, Eo = [.125, .215, .35, .446, .526, .582], xn = 20, qr = new ud, To = new Ne; let Yr = null; const gn = (1 + Math.sqrt(5)) / 2, Jn = 1 / gn, Ao = [new L(1, 1, 1), new L(-1, 1, 1), new L(1, 1, -1), new L(-1, 1, -1), new L(0, gn, Jn), new L(0, gn, -Jn), new L(Jn, 0, gn), new L(-Jn, 0, gn), new L(gn, Jn, 0), new L(-gn, Jn, 0)]; class Co { constructor(e) { this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial) } fromScene(e, t = 0, n = .1, i = 100) { Yr = this._renderer.getRenderTarget(), this._setSize(256); const r = this._allocateTargets(); return r.depthBuffer = !0, this._sceneToCubeUV(e, n, i, r), t > 0 && this._blur(r, 0, 0, t), this._applyPMREM(r), this._cleanup(r), r } fromEquirectangular(e, t = null) { return this._fromTexture(e, t) } fromCubemap(e, t = null) { return this._fromTexture(e, t) } compileCubemapShader() { this._cubemapMaterial === null && (this._cubemapMaterial = Do(), this._compileMaterial(this._cubemapMaterial)) } compileEquirectangularShader() { this._equirectMaterial === null && (this._equirectMaterial = Po(), this._compileMaterial(this._equirectMaterial)) } dispose() { this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose() } _setSize(e) { this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax) } _dispose() { this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose(); for (let e = 0; e < this._lodPlanes.length; e++)this._lodPlanes[e].dispose() } _cleanup(e) { this._renderer.setRenderTarget(Yr), e.scissorTest = !1, $i(e, 0, 0, e.width, e.height) } _fromTexture(e, t) { e.mapping === ii || e.mapping === ri ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Yr = this._renderer.getRenderTarget(); const n = t || this._allocateTargets(); return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n } _allocateTargets() { const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = { magFilter: xt, minFilter: xt, generateMipmaps: !1, type: bi, format: Rt, encoding: En, depthBuffer: !1 }, i = Lo(e, t, n); if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e) { this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Lo(e, t, n); const { _lodMax: r } = this; ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = hd(r)), this._blurMaterial = dd(r, e, t) } return i } _compileMaterial(e) { const t = new Qe(this._lodPlanes[0], e); this._renderer.compile(t, qr) } _sceneToCubeUV(e, t, n, i) { const a = new ft(90, 1, t, n), c = [1, -1, 1, 1, 1, 1], l = [1, 1, 1, -1, -1, -1], u = this._renderer, h = u.autoClear, f = u.toneMapping; u.getClearColor(To), u.toneMapping = Yt, u.autoClear = !1; const p = new qt({ name: "PMREM.Background", side: Ct, depthWrite: !1, depthTest: !1 }), g = new Qe(new ai, p); let m = !1; const d = e.background; d ? d.isColor && (p.color.copy(d), e.background = null, m = !0) : (p.color.copy(To), m = !0); for (let _ = 0; _ < 6; _++) { const v = _ % 3; v === 0 ? (a.up.set(0, c[_], 0), a.lookAt(l[_], 0, 0)) : v === 1 ? (a.up.set(0, 0, c[_]), a.lookAt(0, l[_], 0)) : (a.up.set(0, c[_], 0), a.lookAt(0, 0, l[_])); const T = this._cubeSize; $i(i, v * T, _ > 2 ? T : 0, T, T), u.setRenderTarget(i), m && u.render(g, a), u.render(e, a) } g.geometry.dispose(), g.material.dispose(), u.toneMapping = f, u.autoClear = h, e.background = d } _textureToCubeUV(e, t) { const n = this._renderer, i = e.mapping === ii || e.mapping === ri; i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Do()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Po()); const r = i ? this._cubemapMaterial : this._equirectMaterial, o = new Qe(this._lodPlanes[0], r), a = r.uniforms; a.envMap.value = e; const c = this._cubeSize; $i(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(o, qr) } _applyPMREM(e) { const t = this._renderer, n = t.autoClear; t.autoClear = !1; for (let i = 1; i < this._lodPlanes.length; i++) { const r = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1]), o = Ao[(i - 1) % Ao.length]; this._blur(e, i - 1, i, r, o) } t.autoClear = n } _blur(e, t, n, i, r) { const o = this._pingPongRenderTarget; this._halfBlur(e, o, t, n, i, "latitudinal", r), this._halfBlur(o, e, n, n, i, "longitudinal", r) } _halfBlur(e, t, n, i, r, o, a) { const c = this._renderer, l = this._blurMaterial; o !== "latitudinal" && o !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!"); const u = 3, h = new Qe(this._lodPlanes[i], l), f = l.uniforms, p = this._sizeLods[n] - 1, g = isFinite(r) ? Math.PI / (2 * p) : 2 * Math.PI / (2 * xn - 1), m = r / g, d = isFinite(r) ? 1 + Math.floor(u * m) : xn; d > xn && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${xn}`); const _ = []; let v = 0; for (let D = 0; D < xn; ++D) { const x = D / m, A = Math.exp(-x * x / 2); _.push(A), D === 0 ? v += A : D < d && (v += 2 * A) } for (let D = 0; D < _.length; D++)_[D] = _[D] / v; f.envMap.value = e.texture, f.samples.value = d, f.weights.value = _, f.latitudinal.value = o === "latitudinal", a && (f.poleAxis.value = a); const { _lodMax: T } = this; f.dTheta.value = g, f.mipInt.value = T - n; const S = this._sizeLods[i], y = 3 * S * (i > T - Kn ? i - T + Kn : 0), C = 4 * (this._cubeSize - S); $i(t, y, C, 3 * S, 2 * S), c.setRenderTarget(t), c.render(h, qr) } } function hd(s) { const e = [], t = [], n = []; let i = s; const r = s - Kn + 1 + Eo.length; for (let o = 0; o < r; o++) { const a = Math.pow(2, i); t.push(a); let c = 1 / a; o > s - Kn ? c = Eo[o - s + Kn - 1] : o === 0 && (c = 0), n.push(c); const l = 1 / (a - 2), u = -l, h = 1 + l, f = [u, u, h, u, h, h, u, u, h, h, u, h], p = 6, g = 6, m = 3, d = 2, _ = 1, v = new Float32Array(m * g * p), T = new Float32Array(d * g * p), S = new Float32Array(_ * g * p); for (let C = 0; C < p; C++) { const D = C % 3 * 2 / 3 - 1, x = C > 2 ? 0 : -1, A = [D, x, 0, D + 2 / 3, x, 0, D + 2 / 3, x + 1, 0, D, x, 0, D + 2 / 3, x + 1, 0, D, x + 1, 0]; v.set(A, m * g * C), T.set(f, d * g * C); const I = [C, C, C, C, C, C]; S.set(I, _ * g * C) } const y = new Lt; y.setAttribute("position", new It(v, m)), y.setAttribute("uv", new It(T, d)), y.setAttribute("faceIndex", new It(S, _)), e.push(y), i > Kn && i-- } return { lodPlanes: e, sizeLods: t, sigmas: n } } function Lo(s, e, t) { const n = new Tn(s, e, t); return n.texture.mapping = ur, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n } function $i(s, e, t, n, i) { s.viewport.set(e, t, n, i), s.scissor.set(e, t, n, i) } function dd(s, e, t) {
	const n = new Float32Array(xn), i = new L(0, 1, 0); return new Cn({
		name: "SphericalGaussianBlur", defines: { n: xn, CUBEUV_TEXEL_WIDTH: 1 / e, CUBEUV_TEXEL_HEIGHT: 1 / t, CUBEUV_MAX_MIP: `${s}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: n }, latitudinal: { value: !1 }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: i } }, vertexShader: Ss(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`, blending: on, depthTest: !1, depthWrite: !1
	})
} function Po() {
	return new Cn({
		name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: Ss(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`, blending: on, depthTest: !1, depthWrite: !1
	})
} function Do() {
	return new Cn({
		name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: Ss(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: on, depthTest: !1, depthWrite: !1
	})
} function Ss() {
	return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`} function fd(s) { let e = new WeakMap, t = null; function n(a) { if (a && a.isTexture) { const c = a.mapping, l = c === is || c === rs, u = c === ii || c === ri; if (l || u) if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) { a.needsPMREMUpdate = !1; let h = e.get(a); return t === null && (t = new Co(s)), h = l ? t.fromEquirectangular(a, h) : t.fromCubemap(a, h), e.set(a, h), h.texture } else { if (e.has(a)) return e.get(a).texture; { const h = a.image; if (l && h && h.height > 0 || u && h && i(h)) { t === null && (t = new Co(s)); const f = l ? t.fromEquirectangular(a) : t.fromCubemap(a); return e.set(a, f), a.addEventListener("dispose", r), f.texture } else return null } } } return a } function i(a) { let c = 0; const l = 6; for (let u = 0; u < l; u++)a[u] !== void 0 && c++; return c === l } function r(a) { const c = a.target; c.removeEventListener("dispose", r); const l = e.get(c); l !== void 0 && (e.delete(c), l.dispose()) } function o() { e = new WeakMap, t !== null && (t.dispose(), t = null) } return { get: n, dispose: o } } function pd(s) { const e = {}; function t(n) { if (e[n] !== void 0) return e[n]; let i; switch (n) { case "WEBGL_depth_texture": i = s.getExtension("WEBGL_depth_texture") || s.getExtension("MOZ_WEBGL_depth_texture") || s.getExtension("WEBKIT_WEBGL_depth_texture"); break; case "EXT_texture_filter_anisotropic": i = s.getExtension("EXT_texture_filter_anisotropic") || s.getExtension("MOZ_EXT_texture_filter_anisotropic") || s.getExtension("WEBKIT_EXT_texture_filter_anisotropic"); break; case "WEBGL_compressed_texture_s3tc": i = s.getExtension("WEBGL_compressed_texture_s3tc") || s.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc"); break; case "WEBGL_compressed_texture_pvrtc": i = s.getExtension("WEBGL_compressed_texture_pvrtc") || s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"); break; default: i = s.getExtension(n) }return e[n] = i, i } return { has: function (n) { return t(n) !== null }, init: function (n) { n.isWebGL2 ? t("EXT_color_buffer_float") : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture") }, get: function (n) { const i = t(n); return i === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), i } } } function md(s, e, t, n) { const i = {}, r = new WeakMap; function o(h) { const f = h.target; f.index !== null && e.remove(f.index); for (const g in f.attributes) e.remove(f.attributes[g]); f.removeEventListener("dispose", o), delete i[f.id]; const p = r.get(f); p && (e.remove(p), r.delete(f)), n.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount, t.memory.geometries-- } function a(h, f) { return i[f.id] === !0 || (f.addEventListener("dispose", o), i[f.id] = !0, t.memory.geometries++), f } function c(h) { const f = h.attributes; for (const g in f) e.update(f[g], 34962); const p = h.morphAttributes; for (const g in p) { const m = p[g]; for (let d = 0, _ = m.length; d < _; d++)e.update(m[d], 34962) } } function l(h) { const f = [], p = h.index, g = h.attributes.position; let m = 0; if (p !== null) { const v = p.array; m = p.version; for (let T = 0, S = v.length; T < S; T += 3) { const y = v[T + 0], C = v[T + 1], D = v[T + 2]; f.push(y, C, C, D, D, y) } } else { const v = g.array; m = g.version; for (let T = 0, S = v.length / 3 - 1; T < S; T += 3) { const y = T + 0, C = T + 1, D = T + 2; f.push(y, C, C, D, D, y) } } const d = new (ga(f) ? ba : Sa)(f, 1); d.version = m; const _ = r.get(h); _ && e.remove(_), r.set(h, d) } function u(h) { const f = r.get(h); if (f) { const p = h.index; p !== null && f.version < p.version && l(h) } else l(h); return r.get(h) } return { get: a, update: c, getWireframeAttribute: u } } function gd(s, e, t, n) { const i = n.isWebGL2; let r; function o(f) { r = f } let a, c; function l(f) { a = f.type, c = f.bytesPerElement } function u(f, p) { s.drawElements(r, p, a, f * c), t.update(p, r, 1) } function h(f, p, g) { if (g === 0) return; let m, d; if (i) m = s, d = "drawElementsInstanced"; else if (m = e.get("ANGLE_instanced_arrays"), d = "drawElementsInstancedANGLE", m === null) { console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."); return } m[d](r, p, a, f * c, g), t.update(p, r, g) } this.setMode = o, this.setIndex = l, this.render = u, this.renderInstances = h } function _d(s) { const e = { geometries: 0, textures: 0 }, t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 }; function n(r, o, a) { switch (t.calls++, o) { case 4: t.triangles += a * (r / 3); break; case 1: t.lines += a * (r / 2); break; case 3: t.lines += a * (r - 1); break; case 2: t.lines += a * r; break; case 0: t.points += a * r; break; default: console.error("THREE.WebGLInfo: Unknown draw mode:", o); break } } function i() { t.frame++, t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0 } return { memory: e, render: t, programs: null, autoReset: !0, reset: i, update: n } } function xd(s, e) { return s[0] - e[0] } function vd(s, e) { return Math.abs(e[1]) - Math.abs(s[1]) } function jr(s, e) { let t = 1; const n = e.isInterleavedBufferAttribute ? e.data.array : e.array; n instanceof Int8Array ? t = 127 : n instanceof Uint8Array ? t = 255 : n instanceof Uint16Array ? t = 65535 : n instanceof Int16Array ? t = 32767 : n instanceof Int32Array ? t = 2147483647 : console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ", n), s.divideScalar(t) } function yd(s, e, t) { const n = {}, i = new Float32Array(8), r = new WeakMap, o = new ze, a = []; for (let l = 0; l < 8; l++)a[l] = [l, 0]; function c(l, u, h, f) { const p = l.morphTargetInfluences; if (e.isWebGL2 === !0) { const m = u.morphAttributes.position || u.morphAttributes.normal || u.morphAttributes.color, d = m !== void 0 ? m.length : 0; let _ = r.get(u); if (_ === void 0 || _.count !== d) { let B = function () { R.dispose(), r.delete(u), u.removeEventListener("dispose", B) }; var g = B; _ !== void 0 && _.texture.dispose(); const S = u.morphAttributes.position !== void 0, y = u.morphAttributes.normal !== void 0, C = u.morphAttributes.color !== void 0, D = u.morphAttributes.position || [], x = u.morphAttributes.normal || [], A = u.morphAttributes.color || []; let I = 0; S === !0 && (I = 1), y === !0 && (I = 2), C === !0 && (I = 3); let N = u.attributes.position.count * I, J = 1; N > e.maxTextureSize && (J = Math.ceil(N / e.maxTextureSize), N = e.maxTextureSize); const Z = new Float32Array(N * J * 4 * d), R = new ya(Z, N, J, d); R.type = yn, R.needsUpdate = !0; const W = I * 4; for (let Y = 0; Y < d; Y++) { const q = D[Y], O = x[Y], V = A[Y], ee = N * J * 4 * Y; for (let K = 0; K < q.count; K++) { const $ = K * W; S === !0 && (o.fromBufferAttribute(q, K), q.normalized === !0 && jr(o, q), Z[ee + $ + 0] = o.x, Z[ee + $ + 1] = o.y, Z[ee + $ + 2] = o.z, Z[ee + $ + 3] = 0), y === !0 && (o.fromBufferAttribute(O, K), O.normalized === !0 && jr(o, O), Z[ee + $ + 4] = o.x, Z[ee + $ + 5] = o.y, Z[ee + $ + 6] = o.z, Z[ee + $ + 7] = 0), C === !0 && (o.fromBufferAttribute(V, K), V.normalized === !0 && jr(o, V), Z[ee + $ + 8] = o.x, Z[ee + $ + 9] = o.y, Z[ee + $ + 10] = o.z, Z[ee + $ + 11] = V.itemSize === 4 ? o.w : 1) } } _ = { count: d, texture: R, size: new le(N, J) }, r.set(u, _), u.addEventListener("dispose", B) } let v = 0; for (let S = 0; S < p.length; S++)v += p[S]; const T = u.morphTargetsRelative ? 1 : 1 - v; f.getUniforms().setValue(s, "morphTargetBaseInfluence", T), f.getUniforms().setValue(s, "morphTargetInfluences", p), f.getUniforms().setValue(s, "morphTargetsTexture", _.texture, t), f.getUniforms().setValue(s, "morphTargetsTextureSize", _.size) } else { const m = p === void 0 ? 0 : p.length; let d = n[u.id]; if (d === void 0 || d.length !== m) { d = []; for (let y = 0; y < m; y++)d[y] = [y, 0]; n[u.id] = d } for (let y = 0; y < m; y++) { const C = d[y]; C[0] = y, C[1] = p[y] } d.sort(vd); for (let y = 0; y < 8; y++)y < m && d[y][1] ? (a[y][0] = d[y][0], a[y][1] = d[y][1]) : (a[y][0] = Number.MAX_SAFE_INTEGER, a[y][1] = 0); a.sort(xd); const _ = u.morphAttributes.position, v = u.morphAttributes.normal; let T = 0; for (let y = 0; y < 8; y++) { const C = a[y], D = C[0], x = C[1]; D !== Number.MAX_SAFE_INTEGER && x ? (_ && u.getAttribute("morphTarget" + y) !== _[D] && u.setAttribute("morphTarget" + y, _[D]), v && u.getAttribute("morphNormal" + y) !== v[D] && u.setAttribute("morphNormal" + y, v[D]), i[y] = x, T += x) : (_ && u.hasAttribute("morphTarget" + y) === !0 && u.deleteAttribute("morphTarget" + y), v && u.hasAttribute("morphNormal" + y) === !0 && u.deleteAttribute("morphNormal" + y), i[y] = 0) } const S = u.morphTargetsRelative ? 1 : 1 - T; f.getUniforms().setValue(s, "morphTargetBaseInfluence", S), f.getUniforms().setValue(s, "morphTargetInfluences", i) } } return { update: c } } function Md(s, e, t, n) { let i = new WeakMap; function r(c) { const l = n.render.frame, u = c.geometry, h = e.get(c, u); return i.get(h) !== l && (e.update(h), i.set(h, l)), c.isInstancedMesh && (c.hasEventListener("dispose", a) === !1 && c.addEventListener("dispose", a), t.update(c.instanceMatrix, 34962), c.instanceColor !== null && t.update(c.instanceColor, 34962)), h } function o() { i = new WeakMap } function a(c) { const l = c.target; l.removeEventListener("dispose", a), t.remove(l.instanceMatrix), l.instanceColor !== null && t.remove(l.instanceColor) } return { update: r, dispose: o } } const Aa = new yt, Ca = new ya, La = new cc, Pa = new Ea, Ro = [], Io = [], Fo = new Float32Array(16), No = new Float32Array(9), zo = new Float32Array(4); function li(s, e, t) { const n = s[0]; if (n <= 0 || n > 0) return s; const i = e * t; let r = Ro[i]; if (r === void 0 && (r = new Float32Array(i), Ro[i] = r), e !== 0) { n.toArray(r, 0); for (let o = 1, a = 0; o !== e; ++o)a += t, s[o].toArray(r, a) } return r } function st(s, e) { if (s.length !== e.length) return !1; for (let t = 0, n = s.length; t < n; t++)if (s[t] !== e[t]) return !1; return !0 } function ot(s, e) { for (let t = 0, n = e.length; t < n; t++)s[t] = e[t] } function dr(s, e) { let t = Io[e]; t === void 0 && (t = new Int32Array(e), Io[e] = t); for (let n = 0; n !== e; ++n)t[n] = s.allocateTextureUnit(); return t } function Sd(s, e) { const t = this.cache; t[0] !== e && (s.uniform1f(this.addr, e), t[0] = e) } function bd(s, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (s.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y); else { if (st(t, e)) return; s.uniform2fv(this.addr, e), ot(t, e) } } function wd(s, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z); else if (e.r !== void 0) (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (s.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b); else { if (st(t, e)) return; s.uniform3fv(this.addr, e), ot(t, e) } } function Ed(s, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w); else { if (st(t, e)) return; s.uniform4fv(this.addr, e), ot(t, e) } } function Td(s, e) { const t = this.cache, n = e.elements; if (n === void 0) { if (st(t, e)) return; s.uniformMatrix2fv(this.addr, !1, e), ot(t, e) } else { if (st(t, n)) return; zo.set(n), s.uniformMatrix2fv(this.addr, !1, zo), ot(t, n) } } function Ad(s, e) { const t = this.cache, n = e.elements; if (n === void 0) { if (st(t, e)) return; s.uniformMatrix3fv(this.addr, !1, e), ot(t, e) } else { if (st(t, n)) return; No.set(n), s.uniformMatrix3fv(this.addr, !1, No), ot(t, n) } } function Cd(s, e) { const t = this.cache, n = e.elements; if (n === void 0) { if (st(t, e)) return; s.uniformMatrix4fv(this.addr, !1, e), ot(t, e) } else { if (st(t, n)) return; Fo.set(n), s.uniformMatrix4fv(this.addr, !1, Fo), ot(t, n) } } function Ld(s, e) { const t = this.cache; t[0] !== e && (s.uniform1i(this.addr, e), t[0] = e) } function Pd(s, e) { const t = this.cache; st(t, e) || (s.uniform2iv(this.addr, e), ot(t, e)) } function Dd(s, e) { const t = this.cache; st(t, e) || (s.uniform3iv(this.addr, e), ot(t, e)) } function Rd(s, e) { const t = this.cache; st(t, e) || (s.uniform4iv(this.addr, e), ot(t, e)) } function Id(s, e) { const t = this.cache; t[0] !== e && (s.uniform1ui(this.addr, e), t[0] = e) } function Fd(s, e) { const t = this.cache; st(t, e) || (s.uniform2uiv(this.addr, e), ot(t, e)) } function Nd(s, e) { const t = this.cache; st(t, e) || (s.uniform3uiv(this.addr, e), ot(t, e)) } function zd(s, e) { const t = this.cache; st(t, e) || (s.uniform4uiv(this.addr, e), ot(t, e)) } function Od(s, e, t) { const n = this.cache, i = t.allocateTextureUnit(); n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture2D(e || Aa, i) } function Ud(s, e, t) { const n = this.cache, i = t.allocateTextureUnit(); n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || La, i) } function Bd(s, e, t) { const n = this.cache, i = t.allocateTextureUnit(); n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || Pa, i) } function Gd(s, e, t) { const n = this.cache, i = t.allocateTextureUnit(); n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || Ca, i) } function kd(s) { switch (s) { case 5126: return Sd; case 35664: return bd; case 35665: return wd; case 35666: return Ed; case 35674: return Td; case 35675: return Ad; case 35676: return Cd; case 5124: case 35670: return Ld; case 35667: case 35671: return Pd; case 35668: case 35672: return Dd; case 35669: case 35673: return Rd; case 5125: return Id; case 36294: return Fd; case 36295: return Nd; case 36296: return zd; case 35678: case 36198: case 36298: case 36306: case 35682: return Od; case 35679: case 36299: case 36307: return Ud; case 35680: case 36300: case 36308: case 36293: return Bd; case 36289: case 36303: case 36311: case 36292: return Gd } } function Vd(s, e) { s.uniform1fv(this.addr, e) } function Hd(s, e) { const t = li(e, this.size, 2); s.uniform2fv(this.addr, t) } function Wd(s, e) { const t = li(e, this.size, 3); s.uniform3fv(this.addr, t) } function Xd(s, e) { const t = li(e, this.size, 4); s.uniform4fv(this.addr, t) } function qd(s, e) { const t = li(e, this.size, 4); s.uniformMatrix2fv(this.addr, !1, t) } function Yd(s, e) { const t = li(e, this.size, 9); s.uniformMatrix3fv(this.addr, !1, t) } function jd(s, e) { const t = li(e, this.size, 16); s.uniformMatrix4fv(this.addr, !1, t) } function Zd(s, e) { s.uniform1iv(this.addr, e) } function Jd(s, e) { s.uniform2iv(this.addr, e) } function $d(s, e) { s.uniform3iv(this.addr, e) } function Kd(s, e) { s.uniform4iv(this.addr, e) } function Qd(s, e) { s.uniform1uiv(this.addr, e) } function ef(s, e) { s.uniform2uiv(this.addr, e) } function tf(s, e) { s.uniform3uiv(this.addr, e) } function nf(s, e) { s.uniform4uiv(this.addr, e) } function rf(s, e, t) { const n = e.length, i = dr(t, n); s.uniform1iv(this.addr, i); for (let r = 0; r !== n; ++r)t.setTexture2D(e[r] || Aa, i[r]) } function sf(s, e, t) { const n = e.length, i = dr(t, n); s.uniform1iv(this.addr, i); for (let r = 0; r !== n; ++r)t.setTexture3D(e[r] || La, i[r]) } function of(s, e, t) { const n = e.length, i = dr(t, n); s.uniform1iv(this.addr, i); for (let r = 0; r !== n; ++r)t.setTextureCube(e[r] || Pa, i[r]) } function af(s, e, t) { const n = e.length, i = dr(t, n); s.uniform1iv(this.addr, i); for (let r = 0; r !== n; ++r)t.setTexture2DArray(e[r] || Ca, i[r]) } function lf(s) { switch (s) { case 5126: return Vd; case 35664: return Hd; case 35665: return Wd; case 35666: return Xd; case 35674: return qd; case 35675: return Yd; case 35676: return jd; case 5124: case 35670: return Zd; case 35667: case 35671: return Jd; case 35668: case 35672: return $d; case 35669: case 35673: return Kd; case 5125: return Qd; case 36294: return ef; case 36295: return tf; case 36296: return nf; case 35678: case 36198: case 36298: case 36306: case 35682: return rf; case 35679: case 36299: case 36307: return sf; case 35680: case 36300: case 36308: case 36293: return of; case 36289: case 36303: case 36311: case 36292: return af } } class cf { constructor(e, t, n) { this.id = e, this.addr = n, this.cache = [], this.setValue = kd(t.type) } } class uf { constructor(e, t, n) { this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = lf(t.type) } } class hf { constructor(e) { this.id = e, this.seq = [], this.map = {} } setValue(e, t, n) { const i = this.seq; for (let r = 0, o = i.length; r !== o; ++r) { const a = i[r]; a.setValue(e, t[a.id], n) } } } const Zr = /(\w+)(\])?(\[|\.)?/g; function Oo(s, e) { s.seq.push(e), s.map[e.id] = e } function df(s, e, t) { const n = s.name, i = n.length; for (Zr.lastIndex = 0; ;) { const r = Zr.exec(n), o = Zr.lastIndex; let a = r[1]; const c = r[2] === "]", l = r[3]; if (c && (a = a | 0), l === void 0 || l === "[" && o + 2 === i) { Oo(t, l === void 0 ? new cf(a, s, e) : new uf(a, s, e)); break } else { let h = t.map[a]; h === void 0 && (h = new hf(a), Oo(t, h)), t = h } } } class ir { constructor(e, t) { this.seq = [], this.map = {}; const n = e.getProgramParameter(t, 35718); for (let i = 0; i < n; ++i) { const r = e.getActiveUniform(t, i), o = e.getUniformLocation(t, r.name); df(r, o, this) } } setValue(e, t, n, i) { const r = this.map[t]; r !== void 0 && r.setValue(e, n, i) } setOptional(e, t, n) { const i = t[n]; i !== void 0 && this.setValue(e, n, i) } static upload(e, t, n, i) { for (let r = 0, o = t.length; r !== o; ++r) { const a = t[r], c = n[a.id]; c.needsUpdate !== !1 && a.setValue(e, c.value, i) } } static seqWithValue(e, t) { const n = []; for (let i = 0, r = e.length; i !== r; ++i) { const o = e[i]; o.id in t && n.push(o) } return n } } function Uo(s, e, t) { const n = s.createShader(e); return s.shaderSource(n, t), s.compileShader(n), n } let ff = 0; function pf(s, e) {
	const t = s.split(`
`), n = [], i = Math.max(e - 6, 0), r = Math.min(e + 6, t.length); for (let o = i; o < r; o++) { const a = o + 1; n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`) } return n.join(`
`)
} function mf(s) { switch (s) { case En: return ["Linear", "( value )"]; case ke: return ["sRGB", "( value )"]; default: return console.warn("THREE.WebGLProgram: Unsupported encoding:", s), ["Linear", "( value )"] } } function Bo(s, e, t) {
	const n = s.getShaderParameter(e, 35713), i = s.getShaderInfoLog(e).trim(); if (n && i === "") return ""; const r = /ERROR: 0:(\d+)/.exec(i); if (r) {
		const o = parseInt(r[1]); return t.toUpperCase() + `

`+ i + `

`+ pf(s.getShaderSource(e), o)
	} else return i
} function gf(s, e) { const t = mf(e); return "vec4 " + s + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }" } function _f(s, e) { let t; switch (e) { case yl: t = "Linear"; break; case Ml: t = "Reinhard"; break; case Sl: t = "OptimizedCineon"; break; case bl: t = "ACESFilmic"; break; case wl: t = "Custom"; break; default: console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear" }return "vec3 " + s + "( vec3 color ) { return " + t + "ToneMapping( color ); }" } function xf(s) {
	return [s.extensionDerivatives || !!s.envMapCubeUVHeight || s.bumpMap || s.tangentSpaceNormalMap || s.clearcoatNormalMap || s.flatShading || s.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "", (s.extensionFragDepth || s.logarithmicDepthBuffer) && s.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", s.extensionDrawBuffers && s.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (s.extensionShaderTextureLOD || s.envMap || s.transmission) && s.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(gi).join(`
`)
} function vf(s) {
	const e = []; for (const t in s) { const n = s[t]; n !== !1 && e.push("#define " + t + " " + n) } return e.join(`
`)
} function yf(s, e) { const t = {}, n = s.getProgramParameter(e, 35721); for (let i = 0; i < n; i++) { const r = s.getActiveAttrib(e, i), o = r.name; let a = 1; r.type === 35674 && (a = 2), r.type === 35675 && (a = 3), r.type === 35676 && (a = 4), t[o] = { type: r.type, location: s.getAttribLocation(e, o), locationSize: a } } return t } function gi(s) { return s !== "" } function Go(s, e) { return s.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows) } function ko(s, e) { return s.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection) } const Mf = /^[ \t]*#include +<([\w\d./]+)>/gm; function cs(s) { return s.replace(Mf, Sf) } function Sf(s, e) { const t = we[e]; if (t === void 0) throw new Error("Can not resolve #include <" + e + ">"); return cs(t) } const bf = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g, wf = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g; function Vo(s) { return s.replace(wf, Da).replace(bf, Ef) } function Ef(s, e, t, n) { return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."), Da(s, e, t, n) } function Da(s, e, t, n) { let i = ""; for (let r = parseInt(e); r < parseInt(t); r++)i += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r); return i } function Ho(s) {
	let e = "precision " + s.precision + ` float;
precision `+ s.precision + " int;"; return s.precision === "highp" ? e += `
#define HIGH_PRECISION`: s.precision === "mediump" ? e += `
#define MEDIUM_PRECISION`: s.precision === "lowp" && (e += `
#define LOW_PRECISION`), e
} function Tf(s) { let e = "SHADOWMAP_TYPE_BASIC"; return s.shadowMapType === ca ? e = "SHADOWMAP_TYPE_PCF" : s.shadowMapType === $a ? e = "SHADOWMAP_TYPE_PCF_SOFT" : s.shadowMapType === mi && (e = "SHADOWMAP_TYPE_VSM"), e } function Af(s) { let e = "ENVMAP_TYPE_CUBE"; if (s.envMap) switch (s.envMapMode) { case ii: case ri: e = "ENVMAP_TYPE_CUBE"; break; case ur: e = "ENVMAP_TYPE_CUBE_UV"; break }return e } function Cf(s) { let e = "ENVMAP_MODE_REFLECTION"; if (s.envMap) switch (s.envMapMode) { case ri: e = "ENVMAP_MODE_REFRACTION"; break }return e } function Lf(s) { let e = "ENVMAP_BLENDING_NONE"; if (s.envMap) switch (s.combine) { case da: e = "ENVMAP_BLENDING_MULTIPLY"; break; case xl: e = "ENVMAP_BLENDING_MIX"; break; case vl: e = "ENVMAP_BLENDING_ADD"; break }return e } function Pf(s) { const e = s.envMapCubeUVHeight; if (e === null) return null; const t = Math.log2(e) - 2, n = 1 / e; return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t } } function Df(s, e, t, n) {
	const i = s.getContext(), r = t.defines; let o = t.vertexShader, a = t.fragmentShader; const c = Tf(t), l = Af(t), u = Cf(t), h = Lf(t), f = Pf(t), p = t.isWebGL2 ? "" : xf(t), g = vf(r), m = i.createProgram(); let d, _, v = t.glslVersion ? "#version " + t.glslVersion + `
`: ""; t.isRawShaderMaterial ? (d = [g].filter(gi).join(`
`), d.length > 0 && (d += `
`), _ = [p, g].filter(gi).join(`
`), _.length > 0 && (_ += `
`)) : (d = [Ho(t), "#define SHADER_NAME " + t.shaderName, g, t.instancing ? "#define USE_INSTANCING" : "", t.instancingColor ? "#define USE_INSTANCING_COLOR" : "", t.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + u : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.displacementMap && t.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", t.vertexTangents ? "#define USE_TANGENT" : "", t.vertexColors ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUvs ? "#define USE_UV" : "", t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.skinning ? "#define USE_SKINNING" : "", t.morphTargets ? "#define USE_MORPHTARGETS" : "", t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "", t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "", t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "", t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + c : "", t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )", "	attribute vec3 morphTarget0;", "	attribute vec3 morphTarget1;", "	attribute vec3 morphTarget2;", "	attribute vec3 morphTarget3;", "	#ifdef USE_MORPHNORMALS", "		attribute vec3 morphNormal0;", "		attribute vec3 morphNormal1;", "		attribute vec3 morphNormal2;", "		attribute vec3 morphNormal3;", "	#else", "		attribute vec3 morphTarget4;", "		attribute vec3 morphTarget5;", "		attribute vec3 morphTarget6;", "		attribute vec3 morphTarget7;", "	#endif", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(gi).join(`
`), _ = [p, Ho(t), "#define SHADER_NAME " + t.shaderName, g, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.matcap ? "#define USE_MATCAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + l : "", t.envMap ? "#define " + u : "", t.envMap ? "#define " + h : "", f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "", f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "", f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", t.clearcoat ? "#define USE_CLEARCOAT" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescence ? "#define USE_IRIDESCENCE" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaTest ? "#define USE_ALPHATEST" : "", t.sheen ? "#define USE_SHEEN" : "", t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", t.vertexTangents ? "#define USE_TANGENT" : "", t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUvs ? "#define USE_UV" : "", t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", t.gradientMap ? "#define USE_GRADIENTMAP" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + c : "", t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", t.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", t.toneMapping !== Yt ? "#define TONE_MAPPING" : "", t.toneMapping !== Yt ? we.tonemapping_pars_fragment : "", t.toneMapping !== Yt ? _f("toneMapping", t.toneMapping) : "", t.dithering ? "#define DITHERING" : "", t.opaque ? "#define OPAQUE" : "", we.encodings_pars_fragment, gf("linearToOutputTexel", t.outputEncoding), t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "", `
`].filter(gi).join(`
`)), o = cs(o), o = Go(o, t), o = ko(o, t), a = cs(a), a = Go(a, t), a = ko(a, t), o = Vo(o), a = Vo(a), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (v = `#version 300 es
`, d = ["precision mediump sampler2DArray;", "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
`+ d, _ = ["#define varying in", t.glslVersion === ho ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", t.glslVersion === ho ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
`+ _); const T = v + d + o, S = v + _ + a, y = Uo(i, 35633, T), C = Uo(i, 35632, S); if (i.attachShader(m, y), i.attachShader(m, C), t.index0AttributeName !== void 0 ? i.bindAttribLocation(m, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(m, 0, "position"), i.linkProgram(m), s.debug.checkShaderErrors) {
		const A = i.getProgramInfoLog(m).trim(), I = i.getShaderInfoLog(y).trim(), N = i.getShaderInfoLog(C).trim(); let J = !0, Z = !0; if (i.getProgramParameter(m, 35714) === !1) {
			J = !1; const R = Bo(i, y, "vertex"), W = Bo(i, C, "fragment"); console.error("THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(m, 35715) + `

Program Info Log: `+ A + `
`+ R + `
`+ W)
		} else A !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", A) : (I === "" || N === "") && (Z = !1); Z && (this.diagnostics = { runnable: J, programLog: A, vertexShader: { log: I, prefix: d }, fragmentShader: { log: N, prefix: _ } })
	} i.deleteShader(y), i.deleteShader(C); let D; this.getUniforms = function () { return D === void 0 && (D = new ir(i, m)), D }; let x; return this.getAttributes = function () { return x === void 0 && (x = yf(i, m)), x }, this.destroy = function () { n.releaseStatesOfProgram(this), i.deleteProgram(m), this.program = void 0 }, this.name = t.shaderName, this.id = ff++, this.cacheKey = e, this.usedTimes = 1, this.program = m, this.vertexShader = y, this.fragmentShader = C, this
} let Rf = 0; class If { constructor() { this.shaderCache = new Map, this.materialCache = new Map } update(e) { const t = e.vertexShader, n = e.fragmentShader, i = this._getShaderStage(t), r = this._getShaderStage(n), o = this._getShaderCacheForMaterial(e); return o.has(i) === !1 && (o.add(i), i.usedTimes++), o.has(r) === !1 && (o.add(r), r.usedTimes++), this } remove(e) { const t = this.materialCache.get(e); for (const n of t) n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code); return this.materialCache.delete(e), this } getVertexShaderID(e) { return this._getShaderStage(e.vertexShader).id } getFragmentShaderID(e) { return this._getShaderStage(e.fragmentShader).id } dispose() { this.shaderCache.clear(), this.materialCache.clear() } _getShaderCacheForMaterial(e) { const t = this.materialCache; return t.has(e) === !1 && t.set(e, new Set), t.get(e) } _getShaderStage(e) { const t = this.shaderCache; if (t.has(e) === !1) { const n = new Ff(e); t.set(e, n) } return t.get(e) } } class Ff { constructor(e) { this.id = Rf++, this.code = e, this.usedTimes = 0 } } function Nf(s, e, t, n, i, r, o) { const a = new vs, c = new If, l = [], u = i.isWebGL2, h = i.logarithmicDepthBuffer, f = i.vertexTextures; let p = i.precision; const g = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" }; function m(x, A, I, N, J) { const Z = N.fog, R = J.geometry, W = x.isMeshStandardMaterial ? N.environment : null, B = (x.isMeshStandardMaterial ? t : e).get(x.envMap || W), Y = !!B && B.mapping === ur ? B.image.height : null, q = g[x.type]; x.precision !== null && (p = i.getMaxPrecision(x.precision), p !== x.precision && console.warn("THREE.WebGLProgram.getParameters:", x.precision, "not supported, using", p, "instead.")); const O = R.morphAttributes.position || R.morphAttributes.normal || R.morphAttributes.color, V = O !== void 0 ? O.length : 0; let ee = 0; R.morphAttributes.position !== void 0 && (ee = 1), R.morphAttributes.normal !== void 0 && (ee = 2), R.morphAttributes.color !== void 0 && (ee = 3); let K, $, de, _e; if (q) { const Re = Dt[q]; K = Re.vertexShader, $ = Re.fragmentShader } else K = x.vertexShader, $ = x.fragmentShader, c.update(x), de = c.getVertexShaderID(x), _e = c.getFragmentShaderID(x); const H = s.getRenderTarget(), Pe = x.alphaTest > 0, pe = x.clearcoat > 0, xe = x.iridescence > 0; return { isWebGL2: u, shaderID: q, shaderName: x.type, vertexShader: K, fragmentShader: $, defines: x.defines, customVertexShaderID: de, customFragmentShaderID: _e, isRawShaderMaterial: x.isRawShaderMaterial === !0, glslVersion: x.glslVersion, precision: p, instancing: J.isInstancedMesh === !0, instancingColor: J.isInstancedMesh === !0 && J.instanceColor !== null, supportsVertexTextures: f, outputEncoding: H === null ? s.outputEncoding : H.isXRRenderTarget === !0 ? H.texture.encoding : En, map: !!x.map, matcap: !!x.matcap, envMap: !!B, envMapMode: B && B.mapping, envMapCubeUVHeight: Y, lightMap: !!x.lightMap, aoMap: !!x.aoMap, emissiveMap: !!x.emissiveMap, bumpMap: !!x.bumpMap, normalMap: !!x.normalMap, objectSpaceNormalMap: x.normalMapType === Hl, tangentSpaceNormalMap: x.normalMapType === ma, decodeVideoTexture: !!x.map && x.map.isVideoTexture === !0 && x.map.encoding === ke, clearcoat: pe, clearcoatMap: pe && !!x.clearcoatMap, clearcoatRoughnessMap: pe && !!x.clearcoatRoughnessMap, clearcoatNormalMap: pe && !!x.clearcoatNormalMap, iridescence: xe, iridescenceMap: xe && !!x.iridescenceMap, iridescenceThicknessMap: xe && !!x.iridescenceThicknessMap, displacementMap: !!x.displacementMap, roughnessMap: !!x.roughnessMap, metalnessMap: !!x.metalnessMap, specularMap: !!x.specularMap, specularIntensityMap: !!x.specularIntensityMap, specularColorMap: !!x.specularColorMap, opaque: x.transparent === !1 && x.blending === ei, alphaMap: !!x.alphaMap, alphaTest: Pe, gradientMap: !!x.gradientMap, sheen: x.sheen > 0, sheenColorMap: !!x.sheenColorMap, sheenRoughnessMap: !!x.sheenRoughnessMap, transmission: x.transmission > 0, transmissionMap: !!x.transmissionMap, thicknessMap: !!x.thicknessMap, combine: x.combine, vertexTangents: !!x.normalMap && !!R.attributes.tangent, vertexColors: x.vertexColors, vertexAlphas: x.vertexColors === !0 && !!R.attributes.color && R.attributes.color.itemSize === 4, vertexUvs: !!x.map || !!x.bumpMap || !!x.normalMap || !!x.specularMap || !!x.alphaMap || !!x.emissiveMap || !!x.roughnessMap || !!x.metalnessMap || !!x.clearcoatMap || !!x.clearcoatRoughnessMap || !!x.clearcoatNormalMap || !!x.iridescenceMap || !!x.iridescenceThicknessMap || !!x.displacementMap || !!x.transmissionMap || !!x.thicknessMap || !!x.specularIntensityMap || !!x.specularColorMap || !!x.sheenColorMap || !!x.sheenRoughnessMap, uvsVertexOnly: !(!!x.map || !!x.bumpMap || !!x.normalMap || !!x.specularMap || !!x.alphaMap || !!x.emissiveMap || !!x.roughnessMap || !!x.metalnessMap || !!x.clearcoatNormalMap || !!x.iridescenceMap || !!x.iridescenceThicknessMap || x.transmission > 0 || !!x.transmissionMap || !!x.thicknessMap || !!x.specularIntensityMap || !!x.specularColorMap || x.sheen > 0 || !!x.sheenColorMap || !!x.sheenRoughnessMap) && !!x.displacementMap, fog: !!Z, useFog: x.fog === !0, fogExp2: Z && Z.isFogExp2, flatShading: !!x.flatShading, sizeAttenuation: x.sizeAttenuation, logarithmicDepthBuffer: h, skinning: J.isSkinnedMesh === !0, morphTargets: R.morphAttributes.position !== void 0, morphNormals: R.morphAttributes.normal !== void 0, morphColors: R.morphAttributes.color !== void 0, morphTargetsCount: V, morphTextureStride: ee, numDirLights: A.directional.length, numPointLights: A.point.length, numSpotLights: A.spot.length, numRectAreaLights: A.rectArea.length, numHemiLights: A.hemi.length, numDirLightShadows: A.directionalShadowMap.length, numPointLightShadows: A.pointShadowMap.length, numSpotLightShadows: A.spotShadowMap.length, numClippingPlanes: o.numPlanes, numClipIntersection: o.numIntersection, dithering: x.dithering, shadowMapEnabled: s.shadowMap.enabled && I.length > 0, shadowMapType: s.shadowMap.type, toneMapping: x.toneMapped ? s.toneMapping : Yt, physicallyCorrectLights: s.physicallyCorrectLights, premultipliedAlpha: x.premultipliedAlpha, doubleSided: x.side === ln, flipSided: x.side === Ct, useDepthPacking: !!x.depthPacking, depthPacking: x.depthPacking || 0, index0AttributeName: x.index0AttributeName, extensionDerivatives: x.extensions && x.extensions.derivatives, extensionFragDepth: x.extensions && x.extensions.fragDepth, extensionDrawBuffers: x.extensions && x.extensions.drawBuffers, extensionShaderTextureLOD: x.extensions && x.extensions.shaderTextureLOD, rendererExtensionFragDepth: u || n.has("EXT_frag_depth"), rendererExtensionDrawBuffers: u || n.has("WEBGL_draw_buffers"), rendererExtensionShaderTextureLod: u || n.has("EXT_shader_texture_lod"), customProgramCacheKey: x.customProgramCacheKey() } } function d(x) { const A = []; if (x.shaderID ? A.push(x.shaderID) : (A.push(x.customVertexShaderID), A.push(x.customFragmentShaderID)), x.defines !== void 0) for (const I in x.defines) A.push(I), A.push(x.defines[I]); return x.isRawShaderMaterial === !1 && (_(A, x), v(A, x), A.push(s.outputEncoding)), A.push(x.customProgramCacheKey), A.join() } function _(x, A) { x.push(A.precision), x.push(A.outputEncoding), x.push(A.envMapMode), x.push(A.envMapCubeUVHeight), x.push(A.combine), x.push(A.vertexUvs), x.push(A.fogExp2), x.push(A.sizeAttenuation), x.push(A.morphTargetsCount), x.push(A.morphAttributeCount), x.push(A.numDirLights), x.push(A.numPointLights), x.push(A.numSpotLights), x.push(A.numHemiLights), x.push(A.numRectAreaLights), x.push(A.numDirLightShadows), x.push(A.numPointLightShadows), x.push(A.numSpotLightShadows), x.push(A.shadowMapType), x.push(A.toneMapping), x.push(A.numClippingPlanes), x.push(A.numClipIntersection), x.push(A.depthPacking) } function v(x, A) { a.disableAll(), A.isWebGL2 && a.enable(0), A.supportsVertexTextures && a.enable(1), A.instancing && a.enable(2), A.instancingColor && a.enable(3), A.map && a.enable(4), A.matcap && a.enable(5), A.envMap && a.enable(6), A.lightMap && a.enable(7), A.aoMap && a.enable(8), A.emissiveMap && a.enable(9), A.bumpMap && a.enable(10), A.normalMap && a.enable(11), A.objectSpaceNormalMap && a.enable(12), A.tangentSpaceNormalMap && a.enable(13), A.clearcoat && a.enable(14), A.clearcoatMap && a.enable(15), A.clearcoatRoughnessMap && a.enable(16), A.clearcoatNormalMap && a.enable(17), A.iridescence && a.enable(18), A.iridescenceMap && a.enable(19), A.iridescenceThicknessMap && a.enable(20), A.displacementMap && a.enable(21), A.specularMap && a.enable(22), A.roughnessMap && a.enable(23), A.metalnessMap && a.enable(24), A.gradientMap && a.enable(25), A.alphaMap && a.enable(26), A.alphaTest && a.enable(27), A.vertexColors && a.enable(28), A.vertexAlphas && a.enable(29), A.vertexUvs && a.enable(30), A.vertexTangents && a.enable(31), A.uvsVertexOnly && a.enable(32), A.fog && a.enable(33), x.push(a.mask), a.disableAll(), A.useFog && a.enable(0), A.flatShading && a.enable(1), A.logarithmicDepthBuffer && a.enable(2), A.skinning && a.enable(3), A.morphTargets && a.enable(4), A.morphNormals && a.enable(5), A.morphColors && a.enable(6), A.premultipliedAlpha && a.enable(7), A.shadowMapEnabled && a.enable(8), A.physicallyCorrectLights && a.enable(9), A.doubleSided && a.enable(10), A.flipSided && a.enable(11), A.useDepthPacking && a.enable(12), A.dithering && a.enable(13), A.specularIntensityMap && a.enable(14), A.specularColorMap && a.enable(15), A.transmission && a.enable(16), A.transmissionMap && a.enable(17), A.thicknessMap && a.enable(18), A.sheen && a.enable(19), A.sheenColorMap && a.enable(20), A.sheenRoughnessMap && a.enable(21), A.decodeVideoTexture && a.enable(22), A.opaque && a.enable(23), x.push(a.mask) } function T(x) { const A = g[x.type]; let I; if (A) { const N = Dt[A]; I = Mc.clone(N.uniforms) } else I = x.uniforms; return I } function S(x, A) { let I; for (let N = 0, J = l.length; N < J; N++) { const Z = l[N]; if (Z.cacheKey === A) { I = Z, ++I.usedTimes; break } } return I === void 0 && (I = new Df(s, A, x, r), l.push(I)), I } function y(x) { if (--x.usedTimes === 0) { const A = l.indexOf(x); l[A] = l[l.length - 1], l.pop(), x.destroy() } } function C(x) { c.remove(x) } function D() { c.dispose() } return { getParameters: m, getProgramCacheKey: d, getUniforms: T, acquireProgram: S, releaseProgram: y, releaseShaderCache: C, programs: l, dispose: D } } function zf() { let s = new WeakMap; function e(r) { let o = s.get(r); return o === void 0 && (o = {}, s.set(r, o)), o } function t(r) { s.delete(r) } function n(r, o, a) { s.get(r)[o] = a } function i() { s = new WeakMap } return { get: e, remove: t, update: n, dispose: i } } function Of(s, e) { return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.material.id !== e.material.id ? s.material.id - e.material.id : s.z !== e.z ? s.z - e.z : s.id - e.id } function Wo(s, e) { return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.z !== e.z ? e.z - s.z : s.id - e.id } function Xo() { const s = []; let e = 0; const t = [], n = [], i = []; function r() { e = 0, t.length = 0, n.length = 0, i.length = 0 } function o(h, f, p, g, m, d) { let _ = s[e]; return _ === void 0 ? (_ = { id: h.id, object: h, geometry: f, material: p, groupOrder: g, renderOrder: h.renderOrder, z: m, group: d }, s[e] = _) : (_.id = h.id, _.object = h, _.geometry = f, _.material = p, _.groupOrder = g, _.renderOrder = h.renderOrder, _.z = m, _.group = d), e++, _ } function a(h, f, p, g, m, d) { const _ = o(h, f, p, g, m, d); p.transmission > 0 ? n.push(_) : p.transparent === !0 ? i.push(_) : t.push(_) } function c(h, f, p, g, m, d) { const _ = o(h, f, p, g, m, d); p.transmission > 0 ? n.unshift(_) : p.transparent === !0 ? i.unshift(_) : t.unshift(_) } function l(h, f) { t.length > 1 && t.sort(h || Of), n.length > 1 && n.sort(f || Wo), i.length > 1 && i.sort(f || Wo) } function u() { for (let h = e, f = s.length; h < f; h++) { const p = s[h]; if (p.id === null) break; p.id = null, p.object = null, p.geometry = null, p.material = null, p.group = null } } return { opaque: t, transmissive: n, transparent: i, init: r, push: a, unshift: c, finish: u, sort: l } } function Uf() { let s = new WeakMap; function e(n, i) { let r; return s.has(n) === !1 ? (r = new Xo, s.set(n, [r])) : i >= s.get(n).length ? (r = new Xo, s.get(n).push(r)) : r = s.get(n)[i], r } function t() { s = new WeakMap } return { get: e, dispose: t } } function Bf() { const s = {}; return { get: function (e) { if (s[e.id] !== void 0) return s[e.id]; let t; switch (e.type) { case "DirectionalLight": t = { direction: new L, color: new Ne }; break; case "SpotLight": t = { position: new L, direction: new L, color: new Ne, distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 }; break; case "PointLight": t = { position: new L, color: new Ne, distance: 0, decay: 0 }; break; case "HemisphereLight": t = { direction: new L, skyColor: new Ne, groundColor: new Ne }; break; case "RectAreaLight": t = { color: new Ne, position: new L, halfWidth: new L, halfHeight: new L }; break }return s[e.id] = t, t } } } function Gf() { const s = {}; return { get: function (e) { if (s[e.id] !== void 0) return s[e.id]; let t; switch (e.type) { case "DirectionalLight": t = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new le }; break; case "SpotLight": t = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new le }; break; case "PointLight": t = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new le, shadowCameraNear: 1, shadowCameraFar: 1e3 }; break }return s[e.id] = t, t } } } let kf = 0; function Vf(s, e) { return (e.castShadow ? 1 : 0) - (s.castShadow ? 1 : 0) } function Hf(s, e) { const t = new Bf, n = Gf(), i = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotShadow: [], spotShadowMap: [], spotShadowMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [] }; for (let u = 0; u < 9; u++)i.probe.push(new L); const r = new L, o = new He, a = new He; function c(u, h) { let f = 0, p = 0, g = 0; for (let A = 0; A < 9; A++)i.probe[A].set(0, 0, 0); let m = 0, d = 0, _ = 0, v = 0, T = 0, S = 0, y = 0, C = 0; u.sort(Vf); const D = h !== !0 ? Math.PI : 1; for (let A = 0, I = u.length; A < I; A++) { const N = u[A], J = N.color, Z = N.intensity, R = N.distance, W = N.shadow && N.shadow.map ? N.shadow.map.texture : null; if (N.isAmbientLight) f += J.r * Z * D, p += J.g * Z * D, g += J.b * Z * D; else if (N.isLightProbe) for (let B = 0; B < 9; B++)i.probe[B].addScaledVector(N.sh.coefficients[B], Z); else if (N.isDirectionalLight) { const B = t.get(N); if (B.color.copy(N.color).multiplyScalar(N.intensity * D), N.castShadow) { const Y = N.shadow, q = n.get(N); q.shadowBias = Y.bias, q.shadowNormalBias = Y.normalBias, q.shadowRadius = Y.radius, q.shadowMapSize = Y.mapSize, i.directionalShadow[m] = q, i.directionalShadowMap[m] = W, i.directionalShadowMatrix[m] = N.shadow.matrix, S++ } i.directional[m] = B, m++ } else if (N.isSpotLight) { const B = t.get(N); if (B.position.setFromMatrixPosition(N.matrixWorld), B.color.copy(J).multiplyScalar(Z * D), B.distance = R, B.coneCos = Math.cos(N.angle), B.penumbraCos = Math.cos(N.angle * (1 - N.penumbra)), B.decay = N.decay, N.castShadow) { const Y = N.shadow, q = n.get(N); q.shadowBias = Y.bias, q.shadowNormalBias = Y.normalBias, q.shadowRadius = Y.radius, q.shadowMapSize = Y.mapSize, i.spotShadow[_] = q, i.spotShadowMap[_] = W, i.spotShadowMatrix[_] = N.shadow.matrix, C++ } i.spot[_] = B, _++ } else if (N.isRectAreaLight) { const B = t.get(N); B.color.copy(J).multiplyScalar(Z), B.halfWidth.set(N.width * .5, 0, 0), B.halfHeight.set(0, N.height * .5, 0), i.rectArea[v] = B, v++ } else if (N.isPointLight) { const B = t.get(N); if (B.color.copy(N.color).multiplyScalar(N.intensity * D), B.distance = N.distance, B.decay = N.decay, N.castShadow) { const Y = N.shadow, q = n.get(N); q.shadowBias = Y.bias, q.shadowNormalBias = Y.normalBias, q.shadowRadius = Y.radius, q.shadowMapSize = Y.mapSize, q.shadowCameraNear = Y.camera.near, q.shadowCameraFar = Y.camera.far, i.pointShadow[d] = q, i.pointShadowMap[d] = W, i.pointShadowMatrix[d] = N.shadow.matrix, y++ } i.point[d] = B, d++ } else if (N.isHemisphereLight) { const B = t.get(N); B.skyColor.copy(N.color).multiplyScalar(Z * D), B.groundColor.copy(N.groundColor).multiplyScalar(Z * D), i.hemi[T] = B, T++ } } v > 0 && (e.isWebGL2 || s.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = re.LTC_FLOAT_1, i.rectAreaLTC2 = re.LTC_FLOAT_2) : s.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = re.LTC_HALF_1, i.rectAreaLTC2 = re.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = f, i.ambient[1] = p, i.ambient[2] = g; const x = i.hash; (x.directionalLength !== m || x.pointLength !== d || x.spotLength !== _ || x.rectAreaLength !== v || x.hemiLength !== T || x.numDirectionalShadows !== S || x.numPointShadows !== y || x.numSpotShadows !== C) && (i.directional.length = m, i.spot.length = _, i.rectArea.length = v, i.point.length = d, i.hemi.length = T, i.directionalShadow.length = S, i.directionalShadowMap.length = S, i.pointShadow.length = y, i.pointShadowMap.length = y, i.spotShadow.length = C, i.spotShadowMap.length = C, i.directionalShadowMatrix.length = S, i.pointShadowMatrix.length = y, i.spotShadowMatrix.length = C, x.directionalLength = m, x.pointLength = d, x.spotLength = _, x.rectAreaLength = v, x.hemiLength = T, x.numDirectionalShadows = S, x.numPointShadows = y, x.numSpotShadows = C, i.version = kf++) } function l(u, h) { let f = 0, p = 0, g = 0, m = 0, d = 0; const _ = h.matrixWorldInverse; for (let v = 0, T = u.length; v < T; v++) { const S = u[v]; if (S.isDirectionalLight) { const y = i.directional[f]; y.direction.setFromMatrixPosition(S.matrixWorld), r.setFromMatrixPosition(S.target.matrixWorld), y.direction.sub(r), y.direction.transformDirection(_), f++ } else if (S.isSpotLight) { const y = i.spot[g]; y.position.setFromMatrixPosition(S.matrixWorld), y.position.applyMatrix4(_), y.direction.setFromMatrixPosition(S.matrixWorld), r.setFromMatrixPosition(S.target.matrixWorld), y.direction.sub(r), y.direction.transformDirection(_), g++ } else if (S.isRectAreaLight) { const y = i.rectArea[m]; y.position.setFromMatrixPosition(S.matrixWorld), y.position.applyMatrix4(_), a.identity(), o.copy(S.matrixWorld), o.premultiply(_), a.extractRotation(o), y.halfWidth.set(S.width * .5, 0, 0), y.halfHeight.set(0, S.height * .5, 0), y.halfWidth.applyMatrix4(a), y.halfHeight.applyMatrix4(a), m++ } else if (S.isPointLight) { const y = i.point[p]; y.position.setFromMatrixPosition(S.matrixWorld), y.position.applyMatrix4(_), p++ } else if (S.isHemisphereLight) { const y = i.hemi[d]; y.direction.setFromMatrixPosition(S.matrixWorld), y.direction.transformDirection(_), d++ } } } return { setup: c, setupView: l, state: i } } function qo(s, e) { const t = new Hf(s, e), n = [], i = []; function r() { n.length = 0, i.length = 0 } function o(h) { n.push(h) } function a(h) { i.push(h) } function c(h) { t.setup(n, h) } function l(h) { t.setupView(n, h) } return { init: r, state: { lightsArray: n, shadowsArray: i, lights: t }, setupLights: c, setupLightsView: l, pushLight: o, pushShadow: a } } function Wf(s, e) { let t = new WeakMap; function n(r, o = 0) { let a; return t.has(r) === !1 ? (a = new qo(s, e), t.set(r, [a])) : o >= t.get(r).length ? (a = new qo(s, e), t.get(r).push(a)) : a = t.get(r)[o], a } function i() { t = new WeakMap } return { get: n, dispose: i } } class Xf extends Pi { constructor(e) { super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = kl, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e) } copy(e) { return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this } } class qf extends Pi { constructor(e) { super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.referencePosition = new L, this.nearDistance = 1, this.farDistance = 1e3, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e) } copy(e) { return super.copy(e), this.referencePosition.copy(e.referencePosition), this.nearDistance = e.nearDistance, this.farDistance = e.farDistance, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this } } const Yf = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, jf = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`; function Zf(s, e, t) { let n = new ys; const i = new le, r = new le, o = new ze, a = new Xf({ depthPacking: Vl }), c = new qf, l = {}, u = t.maxTextureSize, h = { 0: Ct, 1: Si, 2: ln }, f = new Cn({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new le }, radius: { value: 4 } }, vertexShader: Yf, fragmentShader: jf }), p = f.clone(); p.defines.HORIZONTAL_PASS = 1; const g = new Lt; g.setAttribute("position", new It(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3)); const m = new Qe(g, f), d = this; this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = ca, this.render = function (S, y, C) { if (d.enabled === !1 || d.autoUpdate === !1 && d.needsUpdate === !1 || S.length === 0) return; const D = s.getRenderTarget(), x = s.getActiveCubeFace(), A = s.getActiveMipmapLevel(), I = s.state; I.setBlending(on), I.buffers.color.setClear(1, 1, 1, 1), I.buffers.depth.setTest(!0), I.setScissorTest(!1); for (let N = 0, J = S.length; N < J; N++) { const Z = S[N], R = Z.shadow; if (R === void 0) { console.warn("THREE.WebGLShadowMap:", Z, "has no shadow."); continue } if (R.autoUpdate === !1 && R.needsUpdate === !1) continue; i.copy(R.mapSize); const W = R.getFrameExtents(); if (i.multiply(W), r.copy(R.mapSize), (i.x > u || i.y > u) && (i.x > u && (r.x = Math.floor(u / W.x), i.x = r.x * W.x, R.mapSize.x = r.x), i.y > u && (r.y = Math.floor(u / W.y), i.y = r.y * W.y, R.mapSize.y = r.y)), R.map === null) { const Y = this.type !== mi ? { minFilter: at, magFilter: at } : {}; R.map = new Tn(i.x, i.y, Y), R.map.texture.name = Z.name + ".shadowMap", R.camera.updateProjectionMatrix() } s.setRenderTarget(R.map), s.clear(); const B = R.getViewportCount(); for (let Y = 0; Y < B; Y++) { const q = R.getViewport(Y); o.set(r.x * q.x, r.y * q.y, r.x * q.z, r.y * q.w), I.viewport(o), R.updateMatrices(Z, Y), n = R.getFrustum(), T(y, C, R.camera, Z, this.type) } R.isPointLightShadow !== !0 && this.type === mi && _(R, C), R.needsUpdate = !1 } d.needsUpdate = !1, s.setRenderTarget(D, x, A) }; function _(S, y) { const C = e.update(m); f.defines.VSM_SAMPLES !== S.blurSamples && (f.defines.VSM_SAMPLES = S.blurSamples, p.defines.VSM_SAMPLES = S.blurSamples, f.needsUpdate = !0, p.needsUpdate = !0), S.mapPass === null && (S.mapPass = new Tn(i.x, i.y)), f.uniforms.shadow_pass.value = S.map.texture, f.uniforms.resolution.value = S.mapSize, f.uniforms.radius.value = S.radius, s.setRenderTarget(S.mapPass), s.clear(), s.renderBufferDirect(y, null, C, f, m, null), p.uniforms.shadow_pass.value = S.mapPass.texture, p.uniforms.resolution.value = S.mapSize, p.uniforms.radius.value = S.radius, s.setRenderTarget(S.map), s.clear(), s.renderBufferDirect(y, null, C, p, m, null) } function v(S, y, C, D, x, A) { let I = null; const N = C.isPointLight === !0 ? S.customDistanceMaterial : S.customDepthMaterial; if (N !== void 0 ? I = N : I = C.isPointLight === !0 ? c : a, s.localClippingEnabled && y.clipShadows === !0 && Array.isArray(y.clippingPlanes) && y.clippingPlanes.length !== 0 || y.displacementMap && y.displacementScale !== 0 || y.alphaMap && y.alphaTest > 0) { const J = I.uuid, Z = y.uuid; let R = l[J]; R === void 0 && (R = {}, l[J] = R); let W = R[Z]; W === void 0 && (W = I.clone(), R[Z] = W), I = W } return I.visible = y.visible, I.wireframe = y.wireframe, A === mi ? I.side = y.shadowSide !== null ? y.shadowSide : y.side : I.side = y.shadowSide !== null ? y.shadowSide : h[y.side], I.alphaMap = y.alphaMap, I.alphaTest = y.alphaTest, I.clipShadows = y.clipShadows, I.clippingPlanes = y.clippingPlanes, I.clipIntersection = y.clipIntersection, I.displacementMap = y.displacementMap, I.displacementScale = y.displacementScale, I.displacementBias = y.displacementBias, I.wireframeLinewidth = y.wireframeLinewidth, I.linewidth = y.linewidth, C.isPointLight === !0 && I.isMeshDistanceMaterial === !0 && (I.referencePosition.setFromMatrixPosition(C.matrixWorld), I.nearDistance = D, I.farDistance = x), I } function T(S, y, C, D, x) { if (S.visible === !1) return; if (S.layers.test(y.layers) && (S.isMesh || S.isLine || S.isPoints) && (S.castShadow || S.receiveShadow && x === mi) && (!S.frustumCulled || n.intersectsObject(S))) { S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse, S.matrixWorld); const N = e.update(S), J = S.material; if (Array.isArray(J)) { const Z = N.groups; for (let R = 0, W = Z.length; R < W; R++) { const B = Z[R], Y = J[B.materialIndex]; if (Y && Y.visible) { const q = v(S, Y, D, C.near, C.far, x); s.renderBufferDirect(C, null, N, q, S, B) } } } else if (J.visible) { const Z = v(S, J, D, C.near, C.far, x); s.renderBufferDirect(C, null, N, Z, S, null) } } const I = S.children; for (let N = 0, J = I.length; N < J; N++)T(I[N], y, C, D, x) } } function Jf(s, e, t) { const n = t.isWebGL2; function i() { let P = !1; const ie = new ze; let G = null; const ue = new ze(0, 0, 0, 0); return { setMask: function (ce) { G !== ce && !P && (s.colorMask(ce, ce, ce, ce), G = ce) }, setLocked: function (ce) { P = ce }, setClear: function (ce, Ae, $e, Ve, jt) { jt === !0 && (ce *= Ve, Ae *= Ve, $e *= Ve), ie.set(ce, Ae, $e, Ve), ue.equals(ie) === !1 && (s.clearColor(ce, Ae, $e, Ve), ue.copy(ie)) }, reset: function () { P = !1, G = null, ue.set(-1, 0, 0, 0) } } } function r() { let P = !1, ie = null, G = null, ue = null; return { setTest: function (ce) { ce ? Pe(2929) : pe(2929) }, setMask: function (ce) { ie !== ce && !P && (s.depthMask(ce), ie = ce) }, setFunc: function (ce) { if (G !== ce) { if (ce) switch (ce) { case hl: s.depthFunc(512); break; case dl: s.depthFunc(519); break; case fl: s.depthFunc(513); break; case ns: s.depthFunc(515); break; case pl: s.depthFunc(514); break; case ml: s.depthFunc(518); break; case gl: s.depthFunc(516); break; case _l: s.depthFunc(517); break; default: s.depthFunc(515) } else s.depthFunc(515); G = ce } }, setLocked: function (ce) { P = ce }, setClear: function (ce) { ue !== ce && (s.clearDepth(ce), ue = ce) }, reset: function () { P = !1, ie = null, G = null, ue = null } } } function o() { let P = !1, ie = null, G = null, ue = null, ce = null, Ae = null, $e = null, Ve = null, jt = null; return { setTest: function (Be) { P || (Be ? Pe(2960) : pe(2960)) }, setMask: function (Be) { ie !== Be && !P && (s.stencilMask(Be), ie = Be) }, setFunc: function (Be, Nt, mt) { (G !== Be || ue !== Nt || ce !== mt) && (s.stencilFunc(Be, Nt, mt), G = Be, ue = Nt, ce = mt) }, setOp: function (Be, Nt, mt) { (Ae !== Be || $e !== Nt || Ve !== mt) && (s.stencilOp(Be, Nt, mt), Ae = Be, $e = Nt, Ve = mt) }, setLocked: function (Be) { P = Be }, setClear: function (Be) { jt !== Be && (s.clearStencil(Be), jt = Be) }, reset: function () { P = !1, ie = null, G = null, ue = null, ce = null, Ae = null, $e = null, Ve = null, jt = null } } } const a = new i, c = new r, l = new o, u = new WeakMap, h = new WeakMap; let f = {}, p = {}, g = new WeakMap, m = [], d = null, _ = !1, v = null, T = null, S = null, y = null, C = null, D = null, x = null, A = !1, I = null, N = null, J = null, Z = null, R = null; const W = s.getParameter(35661); let B = !1, Y = 0; const q = s.getParameter(7938); q.indexOf("WebGL") !== -1 ? (Y = parseFloat(/^WebGL (\d)/.exec(q)[1]), B = Y >= 1) : q.indexOf("OpenGL ES") !== -1 && (Y = parseFloat(/^OpenGL ES (\d)/.exec(q)[1]), B = Y >= 2); let O = null, V = {}; const ee = s.getParameter(3088), K = s.getParameter(2978), $ = new ze().fromArray(ee), de = new ze().fromArray(K); function _e(P, ie, G) { const ue = new Uint8Array(4), ce = s.createTexture(); s.bindTexture(P, ce), s.texParameteri(P, 10241, 9728), s.texParameteri(P, 10240, 9728); for (let Ae = 0; Ae < G; Ae++)s.texImage2D(ie + Ae, 0, 6408, 1, 1, 0, 6408, 5121, ue); return ce } const H = {}; H[3553] = _e(3553, 3553, 1), H[34067] = _e(34067, 34069, 6), a.setClear(0, 0, 0, 1), c.setClear(1), l.setClear(0), Pe(2929), c.setFunc(ns), Ye(!1), lt(Ns), Pe(2884), We(on); function Pe(P) { f[P] !== !0 && (s.enable(P), f[P] = !0) } function pe(P) { f[P] !== !1 && (s.disable(P), f[P] = !1) } function xe(P, ie) { return p[P] !== ie ? (s.bindFramebuffer(P, ie), p[P] = ie, n && (P === 36009 && (p[36160] = ie), P === 36160 && (p[36009] = ie)), !0) : !1 } function he(P, ie) { let G = m, ue = !1; if (P) if (G = g.get(ie), G === void 0 && (G = [], g.set(ie, G)), P.isWebGLMultipleRenderTargets) { const ce = P.texture; if (G.length !== ce.length || G[0] !== 36064) { for (let Ae = 0, $e = ce.length; Ae < $e; Ae++)G[Ae] = 36064 + Ae; G.length = ce.length, ue = !0 } } else G[0] !== 36064 && (G[0] = 36064, ue = !0); else G[0] !== 1029 && (G[0] = 1029, ue = !0); ue && (t.isWebGL2 ? s.drawBuffers(G) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(G)) } function Re(P) { return d !== P ? (s.useProgram(P), d = P, !0) : !1 } const Me = { [$n]: 32774, [el]: 32778, [tl]: 32779 }; if (n) Me[Bs] = 32775, Me[Gs] = 32776; else { const P = e.get("EXT_blend_minmax"); P !== null && (Me[Bs] = P.MIN_EXT, Me[Gs] = P.MAX_EXT) } const fe = { [nl]: 0, [il]: 1, [rl]: 768, [ua]: 770, [ul]: 776, [ll]: 774, [ol]: 772, [sl]: 769, [ha]: 771, [cl]: 775, [al]: 773 }; function We(P, ie, G, ue, ce, Ae, $e, Ve) { if (P === on) { _ === !0 && (pe(3042), _ = !1); return } if (_ === !1 && (Pe(3042), _ = !0), P !== Qa) { if (P !== v || Ve !== A) { if ((T !== $n || C !== $n) && (s.blendEquation(32774), T = $n, C = $n), Ve) switch (P) { case ei: s.blendFuncSeparate(1, 771, 1, 771); break; case zs: s.blendFunc(1, 1); break; case Os: s.blendFuncSeparate(0, 769, 0, 1); break; case Us: s.blendFuncSeparate(0, 768, 0, 770); break; default: console.error("THREE.WebGLState: Invalid blending: ", P); break } else switch (P) { case ei: s.blendFuncSeparate(770, 771, 1, 771); break; case zs: s.blendFunc(770, 1); break; case Os: s.blendFuncSeparate(0, 769, 0, 1); break; case Us: s.blendFunc(0, 768); break; default: console.error("THREE.WebGLState: Invalid blending: ", P); break }S = null, y = null, D = null, x = null, v = P, A = Ve } return } ce = ce || ie, Ae = Ae || G, $e = $e || ue, (ie !== T || ce !== C) && (s.blendEquationSeparate(Me[ie], Me[ce]), T = ie, C = ce), (G !== S || ue !== y || Ae !== D || $e !== x) && (s.blendFuncSeparate(fe[G], fe[ue], fe[Ae], fe[$e]), S = G, y = ue, D = Ae, x = $e), v = P, A = null } function et(P, ie) { P.side === ln ? pe(2884) : Pe(2884); let G = P.side === Ct; ie && (G = !G), Ye(G), P.blending === ei && P.transparent === !1 ? We(on) : We(P.blending, P.blendEquation, P.blendSrc, P.blendDst, P.blendEquationAlpha, P.blendSrcAlpha, P.blendDstAlpha, P.premultipliedAlpha), c.setFunc(P.depthFunc), c.setTest(P.depthTest), c.setMask(P.depthWrite), a.setMask(P.colorWrite); const ue = P.stencilWrite; l.setTest(ue), ue && (l.setMask(P.stencilWriteMask), l.setFunc(P.stencilFunc, P.stencilRef, P.stencilFuncMask), l.setOp(P.stencilFail, P.stencilZFail, P.stencilZPass)), Ie(P.polygonOffset, P.polygonOffsetFactor, P.polygonOffsetUnits), P.alphaToCoverage === !0 ? Pe(32926) : pe(32926) } function Ye(P) { I !== P && (P ? s.frontFace(2304) : s.frontFace(2305), I = P) } function lt(P) { P !== Za ? (Pe(2884), P !== N && (P === Ns ? s.cullFace(1029) : P === Ja ? s.cullFace(1028) : s.cullFace(1032))) : pe(2884), N = P } function je(P) { P !== J && (B && s.lineWidth(P), J = P) } function Ie(P, ie, G) { P ? (Pe(32823), (Z !== ie || R !== G) && (s.polygonOffset(ie, G), Z = ie, R = G)) : pe(32823) } function pt(P) { P ? Pe(3089) : pe(3089) } function ct(P) { P === void 0 && (P = 33984 + W - 1), O !== P && (s.activeTexture(P), O = P) } function E(P, ie) { O === null && ct(); let G = V[O]; G === void 0 && (G = { type: void 0, texture: void 0 }, V[O] = G), (G.type !== P || G.texture !== ie) && (s.bindTexture(P, ie || H[P]), G.type = P, G.texture = ie) } function M() { const P = V[O]; P !== void 0 && P.type !== void 0 && (s.bindTexture(P.type, null), P.type = void 0, P.texture = void 0) } function k() { try { s.compressedTexImage2D.apply(s, arguments) } catch (P) { console.error("THREE.WebGLState:", P) } } function Q() { try { s.texSubImage2D.apply(s, arguments) } catch (P) { console.error("THREE.WebGLState:", P) } } function te() { try { s.texSubImage3D.apply(s, arguments) } catch (P) { console.error("THREE.WebGLState:", P) } } function oe() { try { s.compressedTexSubImage2D.apply(s, arguments) } catch (P) { console.error("THREE.WebGLState:", P) } } function me() { try { s.texStorage2D.apply(s, arguments) } catch (P) { console.error("THREE.WebGLState:", P) } } function b() { try { s.texStorage3D.apply(s, arguments) } catch (P) { console.error("THREE.WebGLState:", P) } } function j() { try { s.texImage2D.apply(s, arguments) } catch (P) { console.error("THREE.WebGLState:", P) } } function ne() { try { s.texImage3D.apply(s, arguments) } catch (P) { console.error("THREE.WebGLState:", P) } } function ae(P) { $.equals(P) === !1 && (s.scissor(P.x, P.y, P.z, P.w), $.copy(P)) } function se(P) { de.equals(P) === !1 && (s.viewport(P.x, P.y, P.z, P.w), de.copy(P)) } function ge(P, ie) { let G = h.get(ie); G === void 0 && (G = new WeakMap, h.set(ie, G)); let ue = G.get(P); ue === void 0 && (ue = s.getUniformBlockIndex(ie, P.name), G.set(P, ue)) } function Ee(P, ie) { const ue = h.get(ie).get(P); u.get(P) !== ue && (s.uniformBlockBinding(ie, ue, P.__bindingPointIndex), u.set(P, ue)) } function Oe() { s.disable(3042), s.disable(2884), s.disable(2929), s.disable(32823), s.disable(3089), s.disable(2960), s.disable(32926), s.blendEquation(32774), s.blendFunc(1, 0), s.blendFuncSeparate(1, 0, 1, 0), s.colorMask(!0, !0, !0, !0), s.clearColor(0, 0, 0, 0), s.depthMask(!0), s.depthFunc(513), s.clearDepth(1), s.stencilMask(4294967295), s.stencilFunc(519, 0, 4294967295), s.stencilOp(7680, 7680, 7680), s.clearStencil(0), s.cullFace(1029), s.frontFace(2305), s.polygonOffset(0, 0), s.activeTexture(33984), s.bindFramebuffer(36160, null), n === !0 && (s.bindFramebuffer(36009, null), s.bindFramebuffer(36008, null)), s.useProgram(null), s.lineWidth(1), s.scissor(0, 0, s.canvas.width, s.canvas.height), s.viewport(0, 0, s.canvas.width, s.canvas.height), f = {}, O = null, V = {}, p = {}, g = new WeakMap, m = [], d = null, _ = !1, v = null, T = null, S = null, y = null, C = null, D = null, x = null, A = !1, I = null, N = null, J = null, Z = null, R = null, $.set(0, 0, s.canvas.width, s.canvas.height), de.set(0, 0, s.canvas.width, s.canvas.height), a.reset(), c.reset(), l.reset() } return { buffers: { color: a, depth: c, stencil: l }, enable: Pe, disable: pe, bindFramebuffer: xe, drawBuffers: he, useProgram: Re, setBlending: We, setMaterial: et, setFlipSided: Ye, setCullFace: lt, setLineWidth: je, setPolygonOffset: Ie, setScissorTest: pt, activeTexture: ct, bindTexture: E, unbindTexture: M, compressedTexImage2D: k, texImage2D: j, texImage3D: ne, updateUBOMapping: ge, uniformBlockBinding: Ee, texStorage2D: me, texStorage3D: b, texSubImage2D: Q, texSubImage3D: te, compressedTexSubImage2D: oe, scissor: ae, viewport: se, reset: Oe } } function $f(s, e, t, n, i, r, o) { const a = i.isWebGL2, c = i.maxTextures, l = i.maxCubemapSize, u = i.maxTextureSize, h = i.maxSamples, f = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, p = /OculusBrowser/g.test(navigator.userAgent), g = new WeakMap; let m; const d = new WeakMap; let _ = !1; try { _ = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null } catch { } function v(E, M) { return _ ? new OffscreenCanvas(E, M) : wi("canvas") } function T(E, M, k, Q) { let te = 1; if ((E.width > Q || E.height > Q) && (te = Q / Math.max(E.width, E.height)), te < 1 || M === !0) if (typeof HTMLImageElement < "u" && E instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && E instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && E instanceof ImageBitmap) { const oe = M ? or : Math.floor, me = oe(te * E.width), b = oe(te * E.height); m === void 0 && (m = v(me, b)); const j = k ? v(me, b) : m; return j.width = me, j.height = b, j.getContext("2d").drawImage(E, 0, 0, me, b), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + E.width + "x" + E.height + ") to (" + me + "x" + b + ")."), j } else return "data" in E && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + E.width + "x" + E.height + ")."), E; return E } function S(E) { return ls(E.width) && ls(E.height) } function y(E) { return a ? !1 : E.wrapS !== At || E.wrapT !== At || E.minFilter !== at && E.minFilter !== xt } function C(E, M) { return E.generateMipmaps && M && E.minFilter !== at && E.minFilter !== xt } function D(E) { s.generateMipmap(E) } function x(E, M, k, Q, te = !1) { if (a === !1) return M; if (E !== null) { if (s[E] !== void 0) return s[E]; console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + E + "'") } let oe = M; return M === 6403 && (k === 5126 && (oe = 33326), k === 5131 && (oe = 33325), k === 5121 && (oe = 33321)), M === 33319 && (k === 5126 && (oe = 33328), k === 5131 && (oe = 33327), k === 5121 && (oe = 33323)), M === 6408 && (k === 5126 && (oe = 34836), k === 5131 && (oe = 34842), k === 5121 && (oe = Q === ke && te === !1 ? 35907 : 32856), k === 32819 && (oe = 32854), k === 32820 && (oe = 32855)), (oe === 33325 || oe === 33326 || oe === 33327 || oe === 33328 || oe === 34842 || oe === 34836) && e.get("EXT_color_buffer_float"), oe } function A(E, M, k) { return C(E, k) === !0 || E.isFramebufferTexture && E.minFilter !== at && E.minFilter !== xt ? Math.log2(Math.max(M.width, M.height)) + 1 : E.mipmaps !== void 0 && E.mipmaps.length > 0 ? E.mipmaps.length : E.isCompressedTexture && Array.isArray(E.image) ? M.mipmaps.length : 1 } function I(E) { return E === at || E === ks || E === Vs ? 9728 : 9729 } function N(E) { const M = E.target; M.removeEventListener("dispose", N), Z(M), M.isVideoTexture && g.delete(M) } function J(E) { const M = E.target; M.removeEventListener("dispose", J), W(M) } function Z(E) { const M = n.get(E); if (M.__webglInit === void 0) return; const k = E.source, Q = d.get(k); if (Q) { const te = Q[M.__cacheKey]; te.usedTimes--, te.usedTimes === 0 && R(E), Object.keys(Q).length === 0 && d.delete(k) } n.remove(E) } function R(E) { const M = n.get(E); s.deleteTexture(M.__webglTexture); const k = E.source, Q = d.get(k); delete Q[M.__cacheKey], o.memory.textures-- } function W(E) { const M = E.texture, k = n.get(E), Q = n.get(M); if (Q.__webglTexture !== void 0 && (s.deleteTexture(Q.__webglTexture), o.memory.textures--), E.depthTexture && E.depthTexture.dispose(), E.isWebGLCubeRenderTarget) for (let te = 0; te < 6; te++)s.deleteFramebuffer(k.__webglFramebuffer[te]), k.__webglDepthbuffer && s.deleteRenderbuffer(k.__webglDepthbuffer[te]); else { if (s.deleteFramebuffer(k.__webglFramebuffer), k.__webglDepthbuffer && s.deleteRenderbuffer(k.__webglDepthbuffer), k.__webglMultisampledFramebuffer && s.deleteFramebuffer(k.__webglMultisampledFramebuffer), k.__webglColorRenderbuffer) for (let te = 0; te < k.__webglColorRenderbuffer.length; te++)k.__webglColorRenderbuffer[te] && s.deleteRenderbuffer(k.__webglColorRenderbuffer[te]); k.__webglDepthRenderbuffer && s.deleteRenderbuffer(k.__webglDepthRenderbuffer) } if (E.isWebGLMultipleRenderTargets) for (let te = 0, oe = M.length; te < oe; te++) { const me = n.get(M[te]); me.__webglTexture && (s.deleteTexture(me.__webglTexture), o.memory.textures--), n.remove(M[te]) } n.remove(M), n.remove(E) } let B = 0; function Y() { B = 0 } function q() { const E = B; return E >= c && console.warn("THREE.WebGLTextures: Trying to use " + E + " texture units while this GPU supports only " + c), B += 1, E } function O(E) { const M = []; return M.push(E.wrapS), M.push(E.wrapT), M.push(E.magFilter), M.push(E.minFilter), M.push(E.anisotropy), M.push(E.internalFormat), M.push(E.format), M.push(E.type), M.push(E.generateMipmaps), M.push(E.premultiplyAlpha), M.push(E.flipY), M.push(E.unpackAlignment), M.push(E.encoding), M.join() } function V(E, M) { const k = n.get(E); if (E.isVideoTexture && pt(E), E.isRenderTargetTexture === !1 && E.version > 0 && k.__version !== E.version) { const Q = E.image; if (Q === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found."); else if (Q.complete === !1) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete"); else { pe(k, E, M); return } } t.activeTexture(33984 + M), t.bindTexture(3553, k.__webglTexture) } function ee(E, M) { const k = n.get(E); if (E.version > 0 && k.__version !== E.version) { pe(k, E, M); return } t.activeTexture(33984 + M), t.bindTexture(35866, k.__webglTexture) } function K(E, M) { const k = n.get(E); if (E.version > 0 && k.__version !== E.version) { pe(k, E, M); return } t.activeTexture(33984 + M), t.bindTexture(32879, k.__webglTexture) } function $(E, M) { const k = n.get(E); if (E.version > 0 && k.__version !== E.version) { xe(k, E, M); return } t.activeTexture(33984 + M), t.bindTexture(34067, k.__webglTexture) } const de = { [ss]: 10497, [At]: 33071, [os]: 33648 }, _e = { [at]: 9728, [ks]: 9984, [Vs]: 9986, [xt]: 9729, [El]: 9985, [hr]: 9987 }; function H(E, M, k) { if (k ? (s.texParameteri(E, 10242, de[M.wrapS]), s.texParameteri(E, 10243, de[M.wrapT]), (E === 32879 || E === 35866) && s.texParameteri(E, 32882, de[M.wrapR]), s.texParameteri(E, 10240, _e[M.magFilter]), s.texParameteri(E, 10241, _e[M.minFilter])) : (s.texParameteri(E, 10242, 33071), s.texParameteri(E, 10243, 33071), (E === 32879 || E === 35866) && s.texParameteri(E, 32882, 33071), (M.wrapS !== At || M.wrapT !== At) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), s.texParameteri(E, 10240, I(M.magFilter)), s.texParameteri(E, 10241, I(M.minFilter)), M.minFilter !== at && M.minFilter !== xt && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), e.has("EXT_texture_filter_anisotropic") === !0) { const Q = e.get("EXT_texture_filter_anisotropic"); if (M.type === yn && e.has("OES_texture_float_linear") === !1 || a === !1 && M.type === bi && e.has("OES_texture_half_float_linear") === !1) return; (M.anisotropy > 1 || n.get(M).__currentAnisotropy) && (s.texParameterf(E, Q.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(M.anisotropy, i.getMaxAnisotropy())), n.get(M).__currentAnisotropy = M.anisotropy) } } function Pe(E, M) { let k = !1; E.__webglInit === void 0 && (E.__webglInit = !0, M.addEventListener("dispose", N)); const Q = M.source; let te = d.get(Q); te === void 0 && (te = {}, d.set(Q, te)); const oe = O(M); if (oe !== E.__cacheKey) { te[oe] === void 0 && (te[oe] = { texture: s.createTexture(), usedTimes: 0 }, o.memory.textures++, k = !0), te[oe].usedTimes++; const me = te[E.__cacheKey]; me !== void 0 && (te[E.__cacheKey].usedTimes--, me.usedTimes === 0 && R(M)), E.__cacheKey = oe, E.__webglTexture = te[oe].texture } return k } function pe(E, M, k) { let Q = 3553; M.isDataArrayTexture && (Q = 35866), M.isData3DTexture && (Q = 32879); const te = Pe(E, M), oe = M.source; if (t.activeTexture(33984 + k), t.bindTexture(Q, E.__webglTexture), oe.version !== oe.__currentVersion || te === !0) { s.pixelStorei(37440, M.flipY), s.pixelStorei(37441, M.premultiplyAlpha), s.pixelStorei(3317, M.unpackAlignment), s.pixelStorei(37443, 0); const me = y(M) && S(M.image) === !1; let b = T(M.image, me, !1, u); b = ct(M, b); const j = S(b) || a, ne = r.convert(M.format, M.encoding); let ae = r.convert(M.type), se = x(M.internalFormat, ne, ae, M.encoding, M.isVideoTexture); H(Q, M, j); let ge; const Ee = M.mipmaps, Oe = a && M.isVideoTexture !== !0, P = oe.__currentVersion === void 0 || te === !0, ie = A(M, b, j); if (M.isDepthTexture) se = 6402, a ? M.type === yn ? se = 36012 : M.type === vn ? se = 33190 : M.type === ti ? se = 35056 : se = 33189 : M.type === yn && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), M.format === Sn && se === 6402 && M.type !== pa && M.type !== vn && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), M.type = vn, ae = r.convert(M.type)), M.format === si && se === 6402 && (se = 34041, M.type !== ti && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), M.type = ti, ae = r.convert(M.type))), P && (Oe ? t.texStorage2D(3553, 1, se, b.width, b.height) : t.texImage2D(3553, 0, se, b.width, b.height, 0, ne, ae, null)); else if (M.isDataTexture) if (Ee.length > 0 && j) { Oe && P && t.texStorage2D(3553, ie, se, Ee[0].width, Ee[0].height); for (let G = 0, ue = Ee.length; G < ue; G++)ge = Ee[G], Oe ? t.texSubImage2D(3553, G, 0, 0, ge.width, ge.height, ne, ae, ge.data) : t.texImage2D(3553, G, se, ge.width, ge.height, 0, ne, ae, ge.data); M.generateMipmaps = !1 } else Oe ? (P && t.texStorage2D(3553, ie, se, b.width, b.height), t.texSubImage2D(3553, 0, 0, 0, b.width, b.height, ne, ae, b.data)) : t.texImage2D(3553, 0, se, b.width, b.height, 0, ne, ae, b.data); else if (M.isCompressedTexture) { Oe && P && t.texStorage2D(3553, ie, se, Ee[0].width, Ee[0].height); for (let G = 0, ue = Ee.length; G < ue; G++)ge = Ee[G], M.format !== Rt ? ne !== null ? Oe ? t.compressedTexSubImage2D(3553, G, 0, 0, ge.width, ge.height, ne, ge.data) : t.compressedTexImage2D(3553, G, se, ge.width, ge.height, 0, ge.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Oe ? t.texSubImage2D(3553, G, 0, 0, ge.width, ge.height, ne, ae, ge.data) : t.texImage2D(3553, G, se, ge.width, ge.height, 0, ne, ae, ge.data) } else if (M.isDataArrayTexture) Oe ? (P && t.texStorage3D(35866, ie, se, b.width, b.height, b.depth), t.texSubImage3D(35866, 0, 0, 0, 0, b.width, b.height, b.depth, ne, ae, b.data)) : t.texImage3D(35866, 0, se, b.width, b.height, b.depth, 0, ne, ae, b.data); else if (M.isData3DTexture) Oe ? (P && t.texStorage3D(32879, ie, se, b.width, b.height, b.depth), t.texSubImage3D(32879, 0, 0, 0, 0, b.width, b.height, b.depth, ne, ae, b.data)) : t.texImage3D(32879, 0, se, b.width, b.height, b.depth, 0, ne, ae, b.data); else if (M.isFramebufferTexture) { if (P) if (Oe) t.texStorage2D(3553, ie, se, b.width, b.height); else { let G = b.width, ue = b.height; for (let ce = 0; ce < ie; ce++)t.texImage2D(3553, ce, se, G, ue, 0, ne, ae, null), G >>= 1, ue >>= 1 } } else if (Ee.length > 0 && j) { Oe && P && t.texStorage2D(3553, ie, se, Ee[0].width, Ee[0].height); for (let G = 0, ue = Ee.length; G < ue; G++)ge = Ee[G], Oe ? t.texSubImage2D(3553, G, 0, 0, ne, ae, ge) : t.texImage2D(3553, G, se, ne, ae, ge); M.generateMipmaps = !1 } else Oe ? (P && t.texStorage2D(3553, ie, se, b.width, b.height), t.texSubImage2D(3553, 0, 0, 0, ne, ae, b)) : t.texImage2D(3553, 0, se, ne, ae, b); C(M, j) && D(Q), oe.__currentVersion = oe.version, M.onUpdate && M.onUpdate(M) } E.__version = M.version } function xe(E, M, k) { if (M.image.length !== 6) return; const Q = Pe(E, M), te = M.source; if (t.activeTexture(33984 + k), t.bindTexture(34067, E.__webglTexture), te.version !== te.__currentVersion || Q === !0) { s.pixelStorei(37440, M.flipY), s.pixelStorei(37441, M.premultiplyAlpha), s.pixelStorei(3317, M.unpackAlignment), s.pixelStorei(37443, 0); const oe = M.isCompressedTexture || M.image[0].isCompressedTexture, me = M.image[0] && M.image[0].isDataTexture, b = []; for (let G = 0; G < 6; G++)!oe && !me ? b[G] = T(M.image[G], !1, !0, l) : b[G] = me ? M.image[G].image : M.image[G], b[G] = ct(M, b[G]); const j = b[0], ne = S(j) || a, ae = r.convert(M.format, M.encoding), se = r.convert(M.type), ge = x(M.internalFormat, ae, se, M.encoding), Ee = a && M.isVideoTexture !== !0, Oe = te.__currentVersion === void 0 || Q === !0; let P = A(M, j, ne); H(34067, M, ne); let ie; if (oe) { Ee && Oe && t.texStorage2D(34067, P, ge, j.width, j.height); for (let G = 0; G < 6; G++) { ie = b[G].mipmaps; for (let ue = 0; ue < ie.length; ue++) { const ce = ie[ue]; M.format !== Rt ? ae !== null ? Ee ? t.compressedTexSubImage2D(34069 + G, ue, 0, 0, ce.width, ce.height, ae, ce.data) : t.compressedTexImage2D(34069 + G, ue, ge, ce.width, ce.height, 0, ce.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Ee ? t.texSubImage2D(34069 + G, ue, 0, 0, ce.width, ce.height, ae, se, ce.data) : t.texImage2D(34069 + G, ue, ge, ce.width, ce.height, 0, ae, se, ce.data) } } } else { ie = M.mipmaps, Ee && Oe && (ie.length > 0 && P++, t.texStorage2D(34067, P, ge, b[0].width, b[0].height)); for (let G = 0; G < 6; G++)if (me) { Ee ? t.texSubImage2D(34069 + G, 0, 0, 0, b[G].width, b[G].height, ae, se, b[G].data) : t.texImage2D(34069 + G, 0, ge, b[G].width, b[G].height, 0, ae, se, b[G].data); for (let ue = 0; ue < ie.length; ue++) { const Ae = ie[ue].image[G].image; Ee ? t.texSubImage2D(34069 + G, ue + 1, 0, 0, Ae.width, Ae.height, ae, se, Ae.data) : t.texImage2D(34069 + G, ue + 1, ge, Ae.width, Ae.height, 0, ae, se, Ae.data) } } else { Ee ? t.texSubImage2D(34069 + G, 0, 0, 0, ae, se, b[G]) : t.texImage2D(34069 + G, 0, ge, ae, se, b[G]); for (let ue = 0; ue < ie.length; ue++) { const ce = ie[ue]; Ee ? t.texSubImage2D(34069 + G, ue + 1, 0, 0, ae, se, ce.image[G]) : t.texImage2D(34069 + G, ue + 1, ge, ae, se, ce.image[G]) } } } C(M, ne) && D(34067), te.__currentVersion = te.version, M.onUpdate && M.onUpdate(M) } E.__version = M.version } function he(E, M, k, Q, te) { const oe = r.convert(k.format, k.encoding), me = r.convert(k.type), b = x(k.internalFormat, oe, me, k.encoding); n.get(M).__hasExternalTextures || (te === 32879 || te === 35866 ? t.texImage3D(te, 0, b, M.width, M.height, M.depth, 0, oe, me, null) : t.texImage2D(te, 0, b, M.width, M.height, 0, oe, me, null)), t.bindFramebuffer(36160, E), Ie(M) ? f.framebufferTexture2DMultisampleEXT(36160, Q, te, n.get(k).__webglTexture, 0, je(M)) : s.framebufferTexture2D(36160, Q, te, n.get(k).__webglTexture, 0), t.bindFramebuffer(36160, null) } function Re(E, M, k) { if (s.bindRenderbuffer(36161, E), M.depthBuffer && !M.stencilBuffer) { let Q = 33189; if (k || Ie(M)) { const te = M.depthTexture; te && te.isDepthTexture && (te.type === yn ? Q = 36012 : te.type === vn && (Q = 33190)); const oe = je(M); Ie(M) ? f.renderbufferStorageMultisampleEXT(36161, oe, Q, M.width, M.height) : s.renderbufferStorageMultisample(36161, oe, Q, M.width, M.height) } else s.renderbufferStorage(36161, Q, M.width, M.height); s.framebufferRenderbuffer(36160, 36096, 36161, E) } else if (M.depthBuffer && M.stencilBuffer) { const Q = je(M); k && Ie(M) === !1 ? s.renderbufferStorageMultisample(36161, Q, 35056, M.width, M.height) : Ie(M) ? f.renderbufferStorageMultisampleEXT(36161, Q, 35056, M.width, M.height) : s.renderbufferStorage(36161, 34041, M.width, M.height), s.framebufferRenderbuffer(36160, 33306, 36161, E) } else { const Q = M.isWebGLMultipleRenderTargets === !0 ? M.texture : [M.texture]; for (let te = 0; te < Q.length; te++) { const oe = Q[te], me = r.convert(oe.format, oe.encoding), b = r.convert(oe.type), j = x(oe.internalFormat, me, b, oe.encoding), ne = je(M); k && Ie(M) === !1 ? s.renderbufferStorageMultisample(36161, ne, j, M.width, M.height) : Ie(M) ? f.renderbufferStorageMultisampleEXT(36161, ne, j, M.width, M.height) : s.renderbufferStorage(36161, j, M.width, M.height) } } s.bindRenderbuffer(36161, null) } function Me(E, M) { if (M && M.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported"); if (t.bindFramebuffer(36160, E), !(M.depthTexture && M.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture"); (!n.get(M.depthTexture).__webglTexture || M.depthTexture.image.width !== M.width || M.depthTexture.image.height !== M.height) && (M.depthTexture.image.width = M.width, M.depthTexture.image.height = M.height, M.depthTexture.needsUpdate = !0), V(M.depthTexture, 0); const Q = n.get(M.depthTexture).__webglTexture, te = je(M); if (M.depthTexture.format === Sn) Ie(M) ? f.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, Q, 0, te) : s.framebufferTexture2D(36160, 36096, 3553, Q, 0); else if (M.depthTexture.format === si) Ie(M) ? f.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, Q, 0, te) : s.framebufferTexture2D(36160, 33306, 3553, Q, 0); else throw new Error("Unknown depthTexture format") } function fe(E) { const M = n.get(E), k = E.isWebGLCubeRenderTarget === !0; if (E.depthTexture && !M.__autoAllocateDepthBuffer) { if (k) throw new Error("target.depthTexture not supported in Cube render targets"); Me(M.__webglFramebuffer, E) } else if (k) { M.__webglDepthbuffer = []; for (let Q = 0; Q < 6; Q++)t.bindFramebuffer(36160, M.__webglFramebuffer[Q]), M.__webglDepthbuffer[Q] = s.createRenderbuffer(), Re(M.__webglDepthbuffer[Q], E, !1) } else t.bindFramebuffer(36160, M.__webglFramebuffer), M.__webglDepthbuffer = s.createRenderbuffer(), Re(M.__webglDepthbuffer, E, !1); t.bindFramebuffer(36160, null) } function We(E, M, k) { const Q = n.get(E); M !== void 0 && he(Q.__webglFramebuffer, E, E.texture, 36064, 3553), k !== void 0 && fe(E) } function et(E) { const M = E.texture, k = n.get(E), Q = n.get(M); E.addEventListener("dispose", J), E.isWebGLMultipleRenderTargets !== !0 && (Q.__webglTexture === void 0 && (Q.__webglTexture = s.createTexture()), Q.__version = M.version, o.memory.textures++); const te = E.isWebGLCubeRenderTarget === !0, oe = E.isWebGLMultipleRenderTargets === !0, me = S(E) || a; if (te) { k.__webglFramebuffer = []; for (let b = 0; b < 6; b++)k.__webglFramebuffer[b] = s.createFramebuffer() } else { if (k.__webglFramebuffer = s.createFramebuffer(), oe) if (i.drawBuffers) { const b = E.texture; for (let j = 0, ne = b.length; j < ne; j++) { const ae = n.get(b[j]); ae.__webglTexture === void 0 && (ae.__webglTexture = s.createTexture(), o.memory.textures++) } } else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension."); if (a && E.samples > 0 && Ie(E) === !1) { const b = oe ? M : [M]; k.__webglMultisampledFramebuffer = s.createFramebuffer(), k.__webglColorRenderbuffer = [], t.bindFramebuffer(36160, k.__webglMultisampledFramebuffer); for (let j = 0; j < b.length; j++) { const ne = b[j]; k.__webglColorRenderbuffer[j] = s.createRenderbuffer(), s.bindRenderbuffer(36161, k.__webglColorRenderbuffer[j]); const ae = r.convert(ne.format, ne.encoding), se = r.convert(ne.type), ge = x(ne.internalFormat, ae, se, ne.encoding), Ee = je(E); s.renderbufferStorageMultisample(36161, Ee, ge, E.width, E.height), s.framebufferRenderbuffer(36160, 36064 + j, 36161, k.__webglColorRenderbuffer[j]) } s.bindRenderbuffer(36161, null), E.depthBuffer && (k.__webglDepthRenderbuffer = s.createRenderbuffer(), Re(k.__webglDepthRenderbuffer, E, !0)), t.bindFramebuffer(36160, null) } } if (te) { t.bindTexture(34067, Q.__webglTexture), H(34067, M, me); for (let b = 0; b < 6; b++)he(k.__webglFramebuffer[b], E, M, 36064, 34069 + b); C(M, me) && D(34067), t.unbindTexture() } else if (oe) { const b = E.texture; for (let j = 0, ne = b.length; j < ne; j++) { const ae = b[j], se = n.get(ae); t.bindTexture(3553, se.__webglTexture), H(3553, ae, me), he(k.__webglFramebuffer, E, ae, 36064 + j, 3553), C(ae, me) && D(3553) } t.unbindTexture() } else { let b = 3553; (E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) && (a ? b = E.isWebGL3DRenderTarget ? 32879 : 35866 : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(b, Q.__webglTexture), H(b, M, me), he(k.__webglFramebuffer, E, M, 36064, b), C(M, me) && D(b), t.unbindTexture() } E.depthBuffer && fe(E) } function Ye(E) { const M = S(E) || a, k = E.isWebGLMultipleRenderTargets === !0 ? E.texture : [E.texture]; for (let Q = 0, te = k.length; Q < te; Q++) { const oe = k[Q]; if (C(oe, M)) { const me = E.isWebGLCubeRenderTarget ? 34067 : 3553, b = n.get(oe).__webglTexture; t.bindTexture(me, b), D(me), t.unbindTexture() } } } function lt(E) { if (a && E.samples > 0 && Ie(E) === !1) { const M = E.isWebGLMultipleRenderTargets ? E.texture : [E.texture], k = E.width, Q = E.height; let te = 16384; const oe = [], me = E.stencilBuffer ? 33306 : 36096, b = n.get(E), j = E.isWebGLMultipleRenderTargets === !0; if (j) for (let ne = 0; ne < M.length; ne++)t.bindFramebuffer(36160, b.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(36160, 36064 + ne, 36161, null), t.bindFramebuffer(36160, b.__webglFramebuffer), s.framebufferTexture2D(36009, 36064 + ne, 3553, null, 0); t.bindFramebuffer(36008, b.__webglMultisampledFramebuffer), t.bindFramebuffer(36009, b.__webglFramebuffer); for (let ne = 0; ne < M.length; ne++) { oe.push(36064 + ne), E.depthBuffer && oe.push(me); const ae = b.__ignoreDepthValues !== void 0 ? b.__ignoreDepthValues : !1; if (ae === !1 && (E.depthBuffer && (te |= 256), E.stencilBuffer && (te |= 1024)), j && s.framebufferRenderbuffer(36008, 36064, 36161, b.__webglColorRenderbuffer[ne]), ae === !0 && (s.invalidateFramebuffer(36008, [me]), s.invalidateFramebuffer(36009, [me])), j) { const se = n.get(M[ne]).__webglTexture; s.framebufferTexture2D(36009, 36064, 3553, se, 0) } s.blitFramebuffer(0, 0, k, Q, 0, 0, k, Q, te, 9728), p && s.invalidateFramebuffer(36008, oe) } if (t.bindFramebuffer(36008, null), t.bindFramebuffer(36009, null), j) for (let ne = 0; ne < M.length; ne++) { t.bindFramebuffer(36160, b.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(36160, 36064 + ne, 36161, b.__webglColorRenderbuffer[ne]); const ae = n.get(M[ne]).__webglTexture; t.bindFramebuffer(36160, b.__webglFramebuffer), s.framebufferTexture2D(36009, 36064 + ne, 3553, ae, 0) } t.bindFramebuffer(36009, b.__webglMultisampledFramebuffer) } } function je(E) { return Math.min(h, E.samples) } function Ie(E) { const M = n.get(E); return a && E.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && M.__useRenderToTexture !== !1 } function pt(E) { const M = o.render.frame; g.get(E) !== M && (g.set(E, M), E.update()) } function ct(E, M) { const k = E.encoding, Q = E.format, te = E.type; return E.isCompressedTexture === !0 || E.isVideoTexture === !0 || E.format === as || k !== En && (k === ke ? a === !1 ? e.has("EXT_sRGB") === !0 && Q === Rt ? (E.format = as, E.minFilter = xt, E.generateMipmaps = !1) : M = xa.sRGBToLinear(M) : (Q !== Rt || te !== wn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", k)), M } this.allocateTextureUnit = q, this.resetTextureUnits = Y, this.setTexture2D = V, this.setTexture2DArray = ee, this.setTexture3D = K, this.setTextureCube = $, this.rebindTextures = We, this.setupRenderTarget = et, this.updateRenderTargetMipmap = Ye, this.updateMultisampleRenderTarget = lt, this.setupDepthRenderbuffer = fe, this.setupFrameBufferTexture = he, this.useMultisampledRTT = Ie } function Kf(s, e, t) { const n = t.isWebGL2; function i(r, o = null) { let a; if (r === wn) return 5121; if (r === Ll) return 32819; if (r === Pl) return 32820; if (r === Tl) return 5120; if (r === Al) return 5122; if (r === pa) return 5123; if (r === Cl) return 5124; if (r === vn) return 5125; if (r === yn) return 5126; if (r === bi) return n ? 5131 : (a = e.get("OES_texture_half_float"), a !== null ? a.HALF_FLOAT_OES : null); if (r === Dl) return 6406; if (r === Rt) return 6408; if (r === Il) return 6409; if (r === Fl) return 6410; if (r === Sn) return 6402; if (r === si) return 34041; if (r === Nl) return 6403; if (r === Rl) return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"), 6408; if (r === as) return a = e.get("EXT_sRGB"), a !== null ? a.SRGB_ALPHA_EXT : null; if (r === zl) return 36244; if (r === Ol) return 33319; if (r === Ul) return 33320; if (r === Bl) return 36249; if (r === yr || r === Mr || r === Sr || r === br) if (o === ke) if (a = e.get("WEBGL_compressed_texture_s3tc_srgb"), a !== null) { if (r === yr) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT; if (r === Mr) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT; if (r === Sr) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT; if (r === br) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT } else return null; else if (a = e.get("WEBGL_compressed_texture_s3tc"), a !== null) { if (r === yr) return a.COMPRESSED_RGB_S3TC_DXT1_EXT; if (r === Mr) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT; if (r === Sr) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT; if (r === br) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT } else return null; if (r === Hs || r === Ws || r === Xs || r === qs) if (a = e.get("WEBGL_compressed_texture_pvrtc"), a !== null) { if (r === Hs) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG; if (r === Ws) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG; if (r === Xs) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG; if (r === qs) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG } else return null; if (r === Gl) return a = e.get("WEBGL_compressed_texture_etc1"), a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null; if (r === Ys || r === js) if (a = e.get("WEBGL_compressed_texture_etc"), a !== null) { if (r === Ys) return o === ke ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2; if (r === js) return o === ke ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC } else return null; if (r === Zs || r === Js || r === $s || r === Ks || r === Qs || r === eo || r === to || r === no || r === io || r === ro || r === so || r === oo || r === ao || r === lo) if (a = e.get("WEBGL_compressed_texture_astc"), a !== null) { if (r === Zs) return o === ke ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR; if (r === Js) return o === ke ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR; if (r === $s) return o === ke ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR; if (r === Ks) return o === ke ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR; if (r === Qs) return o === ke ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR; if (r === eo) return o === ke ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR; if (r === to) return o === ke ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR; if (r === no) return o === ke ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR; if (r === io) return o === ke ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR; if (r === ro) return o === ke ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR; if (r === so) return o === ke ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR; if (r === oo) return o === ke ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR; if (r === ao) return o === ke ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR; if (r === lo) return o === ke ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR } else return null; if (r === co) if (a = e.get("EXT_texture_compression_bptc"), a !== null) { if (r === co) return o === ke ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT } else return null; return r === ti ? n ? 34042 : (a = e.get("WEBGL_depth_texture"), a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null) : s[r] !== void 0 ? s[r] : null } return { convert: i } } class Qf extends ft { constructor(e = []) { super(), this.isArrayCamera = !0, this.cameras = e } } class Ki extends Mt { constructor() { super(), this.isGroup = !0, this.type = "Group" } } const ep = { type: "move" }; class Jr { constructor() { this._targetRay = null, this._grip = null, this._hand = null } getHandSpace() { return this._hand === null && (this._hand = new Ki, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand } getTargetRaySpace() { return this._targetRay === null && (this._targetRay = new Ki, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new L, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new L), this._targetRay } getGripSpace() { return this._grip === null && (this._grip = new Ki, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new L, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new L), this._grip } dispatchEvent(e) { return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this } disconnect(e) { return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this } update(e, t, n) { let i = null, r = null, o = null; const a = this._targetRay, c = this._grip, l = this._hand; if (e && t.session.visibilityState !== "visible-blurred") { if (l && e.hand) { o = !0; for (const m of e.hand.values()) { const d = t.getJointPose(m, n); if (l.joints[m.jointName] === void 0) { const v = new Ki; v.matrixAutoUpdate = !1, v.visible = !1, l.joints[m.jointName] = v, l.add(v) } const _ = l.joints[m.jointName]; d !== null && (_.matrix.fromArray(d.transform.matrix), _.matrix.decompose(_.position, _.rotation, _.scale), _.jointRadius = d.radius), _.visible = d !== null } const u = l.joints["index-finger-tip"], h = l.joints["thumb-tip"], f = u.position.distanceTo(h.position), p = .02, g = .005; l.inputState.pinching && f > p + g ? (l.inputState.pinching = !1, this.dispatchEvent({ type: "pinchend", handedness: e.handedness, target: this })) : !l.inputState.pinching && f <= p - g && (l.inputState.pinching = !0, this.dispatchEvent({ type: "pinchstart", handedness: e.handedness, target: this })) } else c !== null && e.gripSpace && (r = t.getPose(e.gripSpace, n), r !== null && (c.matrix.fromArray(r.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), r.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(r.linearVelocity)) : c.hasLinearVelocity = !1, r.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(r.angularVelocity)) : c.hasAngularVelocity = !1)); a !== null && (i = t.getPose(e.targetRaySpace, n), i === null && r !== null && (i = r), i !== null && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), i.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = !1, i.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(ep))) } return a !== null && (a.visible = i !== null), c !== null && (c.visible = r !== null), l !== null && (l.visible = o !== null), this } } class tp extends yt { constructor(e, t, n, i, r, o, a, c, l, u) { if (u = u !== void 0 ? u : Sn, u !== Sn && u !== si) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"); n === void 0 && u === Sn && (n = vn), n === void 0 && u === si && (n = ti), super(null, i, r, o, a, c, u, n, l), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = a !== void 0 ? a : at, this.minFilter = c !== void 0 ? c : at, this.flipY = !1, this.generateMipmaps = !1 } } class np extends Pn { constructor(e, t) { super(); const n = this; let i = null, r = 1, o = null, a = "local-floor", c = null, l = null, u = null, h = null, f = null, p = null; const g = t.getContextAttributes(); let m = null, d = null; const _ = [], v = [], T = new ft; T.layers.enable(1), T.viewport = new ze; const S = new ft; S.layers.enable(2), S.viewport = new ze; const y = [T, S], C = new Qf; C.layers.enable(1), C.layers.enable(2); let D = null, x = null; this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function (O) { let V = _[O]; return V === void 0 && (V = new Jr, _[O] = V), V.getTargetRaySpace() }, this.getControllerGrip = function (O) { let V = _[O]; return V === void 0 && (V = new Jr, _[O] = V), V.getGripSpace() }, this.getHand = function (O) { let V = _[O]; return V === void 0 && (V = new Jr, _[O] = V), V.getHandSpace() }; function A(O) { const V = v.indexOf(O.inputSource); if (V === -1) return; const ee = _[V]; ee !== void 0 && ee.dispatchEvent({ type: O.type, data: O.inputSource }) } function I() { i.removeEventListener("select", A), i.removeEventListener("selectstart", A), i.removeEventListener("selectend", A), i.removeEventListener("squeeze", A), i.removeEventListener("squeezestart", A), i.removeEventListener("squeezeend", A), i.removeEventListener("end", I), i.removeEventListener("inputsourceschange", N); for (let O = 0; O < _.length; O++) { const V = v[O]; V !== null && (v[O] = null, _[O].disconnect(V)) } D = null, x = null, e.setRenderTarget(m), f = null, h = null, u = null, i = null, d = null, q.stop(), n.isPresenting = !1, n.dispatchEvent({ type: "sessionend" }) } this.setFramebufferScaleFactor = function (O) { r = O, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.") }, this.setReferenceSpaceType = function (O) { a = O, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.") }, this.getReferenceSpace = function () { return c || o }, this.setReferenceSpace = function (O) { c = O }, this.getBaseLayer = function () { return h !== null ? h : f }, this.getBinding = function () { return u }, this.getFrame = function () { return p }, this.getSession = function () { return i }, this.setSession = async function (O) { if (i = O, i !== null) { if (m = e.getRenderTarget(), i.addEventListener("select", A), i.addEventListener("selectstart", A), i.addEventListener("selectend", A), i.addEventListener("squeeze", A), i.addEventListener("squeezestart", A), i.addEventListener("squeezeend", A), i.addEventListener("end", I), i.addEventListener("inputsourceschange", N), g.xrCompatible !== !0 && await t.makeXRCompatible(), i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) { const V = { antialias: i.renderState.layers === void 0 ? g.antialias : !0, alpha: g.alpha, depth: g.depth, stencil: g.stencil, framebufferScaleFactor: r }; f = new XRWebGLLayer(i, t, V), i.updateRenderState({ baseLayer: f }), d = new Tn(f.framebufferWidth, f.framebufferHeight, { format: Rt, type: wn, encoding: e.outputEncoding }) } else { let V = null, ee = null, K = null; g.depth && (K = g.stencil ? 35056 : 33190, V = g.stencil ? si : Sn, ee = g.stencil ? ti : vn); const $ = { colorFormat: 32856, depthFormat: K, scaleFactor: r }; u = new XRWebGLBinding(i, t), h = u.createProjectionLayer($), i.updateRenderState({ layers: [h] }), d = new Tn(h.textureWidth, h.textureHeight, { format: Rt, type: wn, depthTexture: new tp(h.textureWidth, h.textureHeight, ee, void 0, void 0, void 0, void 0, void 0, void 0, V), stencilBuffer: g.stencil, encoding: e.outputEncoding, samples: g.antialias ? 4 : 0 }); const de = e.properties.get(d); de.__ignoreDepthValues = h.ignoreDepthValues } d.isXRRenderTarget = !0, this.setFoveation(1), c = null, o = await i.requestReferenceSpace(a), q.setContext(i), q.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" }) } }; function N(O) { for (let V = 0; V < O.removed.length; V++) { const ee = O.removed[V], K = v.indexOf(ee); K >= 0 && (v[K] = null, _[K].dispatchEvent({ type: "disconnected", data: ee })) } for (let V = 0; V < O.added.length; V++) { const ee = O.added[V]; let K = v.indexOf(ee); if (K === -1) { for (let de = 0; de < _.length; de++)if (de >= v.length) { v.push(ee), K = de; break } else if (v[de] === null) { v[de] = ee, K = de; break } if (K === -1) break } const $ = _[K]; $ && $.dispatchEvent({ type: "connected", data: ee }) } } const J = new L, Z = new L; function R(O, V, ee) { J.setFromMatrixPosition(V.matrixWorld), Z.setFromMatrixPosition(ee.matrixWorld); const K = J.distanceTo(Z), $ = V.projectionMatrix.elements, de = ee.projectionMatrix.elements, _e = $[14] / ($[10] - 1), H = $[14] / ($[10] + 1), Pe = ($[9] + 1) / $[5], pe = ($[9] - 1) / $[5], xe = ($[8] - 1) / $[0], he = (de[8] + 1) / de[0], Re = _e * xe, Me = _e * he, fe = K / (-xe + he), We = fe * -xe; V.matrixWorld.decompose(O.position, O.quaternion, O.scale), O.translateX(We), O.translateZ(fe), O.matrixWorld.compose(O.position, O.quaternion, O.scale), O.matrixWorldInverse.copy(O.matrixWorld).invert(); const et = _e + fe, Ye = H + fe, lt = Re - We, je = Me + (K - We), Ie = Pe * H / Ye * et, pt = pe * H / Ye * et; O.projectionMatrix.makePerspective(lt, je, Ie, pt, et, Ye) } function W(O, V) { V === null ? O.matrixWorld.copy(O.matrix) : O.matrixWorld.multiplyMatrices(V.matrixWorld, O.matrix), O.matrixWorldInverse.copy(O.matrixWorld).invert() } this.updateCamera = function (O) { if (i === null) return; C.near = S.near = T.near = O.near, C.far = S.far = T.far = O.far, (D !== C.near || x !== C.far) && (i.updateRenderState({ depthNear: C.near, depthFar: C.far }), D = C.near, x = C.far); const V = O.parent, ee = C.cameras; W(C, V); for (let $ = 0; $ < ee.length; $++)W(ee[$], V); C.matrixWorld.decompose(C.position, C.quaternion, C.scale), O.position.copy(C.position), O.quaternion.copy(C.quaternion), O.scale.copy(C.scale), O.matrix.copy(C.matrix), O.matrixWorld.copy(C.matrixWorld); const K = O.children; for (let $ = 0, de = K.length; $ < de; $++)K[$].updateMatrixWorld(!0); ee.length === 2 ? R(C, T, S) : C.projectionMatrix.copy(T.projectionMatrix) }, this.getCamera = function () { return C }, this.getFoveation = function () { if (h !== null) return h.fixedFoveation; if (f !== null) return f.fixedFoveation }, this.setFoveation = function (O) { h !== null && (h.fixedFoveation = O), f !== null && f.fixedFoveation !== void 0 && (f.fixedFoveation = O) }; let B = null; function Y(O, V) { if (l = V.getViewerPose(c || o), p = V, l !== null) { const ee = l.views; f !== null && (e.setRenderTargetFramebuffer(d, f.framebuffer), e.setRenderTarget(d)); let K = !1; ee.length !== C.cameras.length && (C.cameras.length = 0, K = !0); for (let $ = 0; $ < ee.length; $++) { const de = ee[$]; let _e = null; if (f !== null) _e = f.getViewport(de); else { const Pe = u.getViewSubImage(h, de); _e = Pe.viewport, $ === 0 && (e.setRenderTargetTextures(d, Pe.colorTexture, h.ignoreDepthValues ? void 0 : Pe.depthStencilTexture), e.setRenderTarget(d)) } let H = y[$]; H === void 0 && (H = new ft, H.layers.enable($), H.viewport = new ze, y[$] = H), H.matrix.fromArray(de.transform.matrix), H.projectionMatrix.fromArray(de.projectionMatrix), H.viewport.set(_e.x, _e.y, _e.width, _e.height), $ === 0 && C.matrix.copy(H.matrix), K === !0 && C.cameras.push(H) } } for (let ee = 0; ee < _.length; ee++) { const K = v[ee], $ = _[ee]; K !== null && $ !== void 0 && $.update(K, V, c || o) } B && B(O, V), p = null } const q = new Ta; q.setAnimationLoop(Y), this.setAnimationLoop = function (O) { B = O }, this.dispose = function () { } } } function ip(s, e) { function t(m, d) { m.fogColor.value.copy(d.color), d.isFog ? (m.fogNear.value = d.near, m.fogFar.value = d.far) : d.isFogExp2 && (m.fogDensity.value = d.density) } function n(m, d, _, v, T) { d.isMeshBasicMaterial || d.isMeshLambertMaterial ? i(m, d) : d.isMeshToonMaterial ? (i(m, d), u(m, d)) : d.isMeshPhongMaterial ? (i(m, d), l(m, d)) : d.isMeshStandardMaterial ? (i(m, d), h(m, d), d.isMeshPhysicalMaterial && f(m, d, T)) : d.isMeshMatcapMaterial ? (i(m, d), p(m, d)) : d.isMeshDepthMaterial ? i(m, d) : d.isMeshDistanceMaterial ? (i(m, d), g(m, d)) : d.isMeshNormalMaterial ? i(m, d) : d.isLineBasicMaterial ? (r(m, d), d.isLineDashedMaterial && o(m, d)) : d.isPointsMaterial ? a(m, d, _, v) : d.isSpriteMaterial ? c(m, d) : d.isShadowMaterial ? (m.color.value.copy(d.color), m.opacity.value = d.opacity) : d.isShaderMaterial && (d.uniformsNeedUpdate = !1) } function i(m, d) { m.opacity.value = d.opacity, d.color && m.diffuse.value.copy(d.color), d.emissive && m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity), d.map && (m.map.value = d.map), d.alphaMap && (m.alphaMap.value = d.alphaMap), d.bumpMap && (m.bumpMap.value = d.bumpMap, m.bumpScale.value = d.bumpScale, d.side === Ct && (m.bumpScale.value *= -1)), d.displacementMap && (m.displacementMap.value = d.displacementMap, m.displacementScale.value = d.displacementScale, m.displacementBias.value = d.displacementBias), d.emissiveMap && (m.emissiveMap.value = d.emissiveMap), d.normalMap && (m.normalMap.value = d.normalMap, m.normalScale.value.copy(d.normalScale), d.side === Ct && m.normalScale.value.negate()), d.specularMap && (m.specularMap.value = d.specularMap), d.alphaTest > 0 && (m.alphaTest.value = d.alphaTest); const _ = e.get(d).envMap; if (_ && (m.envMap.value = _, m.flipEnvMap.value = _.isCubeTexture && _.isRenderTargetTexture === !1 ? -1 : 1, m.reflectivity.value = d.reflectivity, m.ior.value = d.ior, m.refractionRatio.value = d.refractionRatio), d.lightMap) { m.lightMap.value = d.lightMap; const S = s.physicallyCorrectLights !== !0 ? Math.PI : 1; m.lightMapIntensity.value = d.lightMapIntensity * S } d.aoMap && (m.aoMap.value = d.aoMap, m.aoMapIntensity.value = d.aoMapIntensity); let v; d.map ? v = d.map : d.specularMap ? v = d.specularMap : d.displacementMap ? v = d.displacementMap : d.normalMap ? v = d.normalMap : d.bumpMap ? v = d.bumpMap : d.roughnessMap ? v = d.roughnessMap : d.metalnessMap ? v = d.metalnessMap : d.alphaMap ? v = d.alphaMap : d.emissiveMap ? v = d.emissiveMap : d.clearcoatMap ? v = d.clearcoatMap : d.clearcoatNormalMap ? v = d.clearcoatNormalMap : d.clearcoatRoughnessMap ? v = d.clearcoatRoughnessMap : d.iridescenceMap ? v = d.iridescenceMap : d.iridescenceThicknessMap ? v = d.iridescenceThicknessMap : d.specularIntensityMap ? v = d.specularIntensityMap : d.specularColorMap ? v = d.specularColorMap : d.transmissionMap ? v = d.transmissionMap : d.thicknessMap ? v = d.thicknessMap : d.sheenColorMap ? v = d.sheenColorMap : d.sheenRoughnessMap && (v = d.sheenRoughnessMap), v !== void 0 && (v.isWebGLRenderTarget && (v = v.texture), v.matrixAutoUpdate === !0 && v.updateMatrix(), m.uvTransform.value.copy(v.matrix)); let T; d.aoMap ? T = d.aoMap : d.lightMap && (T = d.lightMap), T !== void 0 && (T.isWebGLRenderTarget && (T = T.texture), T.matrixAutoUpdate === !0 && T.updateMatrix(), m.uv2Transform.value.copy(T.matrix)) } function r(m, d) { m.diffuse.value.copy(d.color), m.opacity.value = d.opacity } function o(m, d) { m.dashSize.value = d.dashSize, m.totalSize.value = d.dashSize + d.gapSize, m.scale.value = d.scale } function a(m, d, _, v) { m.diffuse.value.copy(d.color), m.opacity.value = d.opacity, m.size.value = d.size * _, m.scale.value = v * .5, d.map && (m.map.value = d.map), d.alphaMap && (m.alphaMap.value = d.alphaMap), d.alphaTest > 0 && (m.alphaTest.value = d.alphaTest); let T; d.map ? T = d.map : d.alphaMap && (T = d.alphaMap), T !== void 0 && (T.matrixAutoUpdate === !0 && T.updateMatrix(), m.uvTransform.value.copy(T.matrix)) } function c(m, d) { m.diffuse.value.copy(d.color), m.opacity.value = d.opacity, m.rotation.value = d.rotation, d.map && (m.map.value = d.map), d.alphaMap && (m.alphaMap.value = d.alphaMap), d.alphaTest > 0 && (m.alphaTest.value = d.alphaTest); let _; d.map ? _ = d.map : d.alphaMap && (_ = d.alphaMap), _ !== void 0 && (_.matrixAutoUpdate === !0 && _.updateMatrix(), m.uvTransform.value.copy(_.matrix)) } function l(m, d) { m.specular.value.copy(d.specular), m.shininess.value = Math.max(d.shininess, 1e-4) } function u(m, d) { d.gradientMap && (m.gradientMap.value = d.gradientMap) } function h(m, d) { m.roughness.value = d.roughness, m.metalness.value = d.metalness, d.roughnessMap && (m.roughnessMap.value = d.roughnessMap), d.metalnessMap && (m.metalnessMap.value = d.metalnessMap), e.get(d).envMap && (m.envMapIntensity.value = d.envMapIntensity) } function f(m, d, _) { m.ior.value = d.ior, d.sheen > 0 && (m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen), m.sheenRoughness.value = d.sheenRoughness, d.sheenColorMap && (m.sheenColorMap.value = d.sheenColorMap), d.sheenRoughnessMap && (m.sheenRoughnessMap.value = d.sheenRoughnessMap)), d.clearcoat > 0 && (m.clearcoat.value = d.clearcoat, m.clearcoatRoughness.value = d.clearcoatRoughness, d.clearcoatMap && (m.clearcoatMap.value = d.clearcoatMap), d.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = d.clearcoatRoughnessMap), d.clearcoatNormalMap && (m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale), m.clearcoatNormalMap.value = d.clearcoatNormalMap, d.side === Ct && m.clearcoatNormalScale.value.negate())), d.iridescence > 0 && (m.iridescence.value = d.iridescence, m.iridescenceIOR.value = d.iridescenceIOR, m.iridescenceThicknessMinimum.value = d.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = d.iridescenceThicknessRange[1], d.iridescenceMap && (m.iridescenceMap.value = d.iridescenceMap), d.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = d.iridescenceThicknessMap)), d.transmission > 0 && (m.transmission.value = d.transmission, m.transmissionSamplerMap.value = _.texture, m.transmissionSamplerSize.value.set(_.width, _.height), d.transmissionMap && (m.transmissionMap.value = d.transmissionMap), m.thickness.value = d.thickness, d.thicknessMap && (m.thicknessMap.value = d.thicknessMap), m.attenuationDistance.value = d.attenuationDistance, m.attenuationColor.value.copy(d.attenuationColor)), m.specularIntensity.value = d.specularIntensity, m.specularColor.value.copy(d.specularColor), d.specularIntensityMap && (m.specularIntensityMap.value = d.specularIntensityMap), d.specularColorMap && (m.specularColorMap.value = d.specularColorMap) } function p(m, d) { d.matcap && (m.matcap.value = d.matcap) } function g(m, d) { m.referencePosition.value.copy(d.referencePosition), m.nearDistance.value = d.nearDistance, m.farDistance.value = d.farDistance } return { refreshFogUniforms: t, refreshMaterialUniforms: n } } function rp(s, e, t, n) { let i = {}, r = {}, o = []; const a = t.isWebGL2 ? s.getParameter(35375) : 0; function c(v, T) { const S = T.program; n.uniformBlockBinding(v, S) } function l(v, T) { let S = i[v.id]; S === void 0 && (g(v), S = u(v), i[v.id] = S, v.addEventListener("dispose", d)); const y = T.program; n.updateUBOMapping(v, y); const C = e.render.frame; r[v.id] !== C && (f(v), r[v.id] = C) } function u(v) { const T = h(); v.__bindingPointIndex = T; const S = s.createBuffer(), y = v.__size, C = v.usage; return s.bindBuffer(35345, S), s.bufferData(35345, y, C), s.bindBuffer(35345, null), s.bindBufferBase(35345, T, S), S } function h() { for (let v = 0; v < a; v++)if (o.indexOf(v) === -1) return o.push(v), v; return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0 } function f(v) { const T = i[v.id], S = v.uniforms, y = v.__cache; s.bindBuffer(35345, T); for (let C = 0, D = S.length; C < D; C++) { const x = S[C]; if (p(x, C, y) === !0) { const A = x.value, I = x.__offset; typeof A == "number" ? (x.__data[0] = A, s.bufferSubData(35345, I, x.__data)) : (x.value.isMatrix3 ? (x.__data[0] = x.value.elements[0], x.__data[1] = x.value.elements[1], x.__data[2] = x.value.elements[2], x.__data[3] = x.value.elements[0], x.__data[4] = x.value.elements[3], x.__data[5] = x.value.elements[4], x.__data[6] = x.value.elements[5], x.__data[7] = x.value.elements[0], x.__data[8] = x.value.elements[6], x.__data[9] = x.value.elements[7], x.__data[10] = x.value.elements[8], x.__data[11] = x.value.elements[0]) : A.toArray(x.__data), s.bufferSubData(35345, I, x.__data)) } } s.bindBuffer(35345, null) } function p(v, T, S) { const y = v.value; if (S[T] === void 0) return typeof y == "number" ? S[T] = y : S[T] = y.clone(), !0; if (typeof y == "number") { if (S[T] !== y) return S[T] = y, !0 } else { const C = S[T]; if (C.equals(y) === !1) return C.copy(y), !0 } return !1 } function g(v) { const T = v.uniforms; let S = 0; const y = 16; let C = 0; for (let D = 0, x = T.length; D < x; D++) { const A = T[D], I = m(A); if (A.__data = new Float32Array(I.storage / Float32Array.BYTES_PER_ELEMENT), A.__offset = S, D > 0) { C = S % y; const N = y - C; C !== 0 && N - I.boundary < 0 && (S += y - C, A.__offset = S) } S += I.storage } return C = S % y, C > 0 && (S += y - C), v.__size = S, v.__cache = {}, this } function m(v) { const T = v.value, S = { boundary: 0, storage: 0 }; return typeof T == "number" ? (S.boundary = 4, S.storage = 4) : T.isVector2 ? (S.boundary = 8, S.storage = 8) : T.isVector3 || T.isColor ? (S.boundary = 16, S.storage = 12) : T.isVector4 ? (S.boundary = 16, S.storage = 16) : T.isMatrix3 ? (S.boundary = 48, S.storage = 48) : T.isMatrix4 ? (S.boundary = 64, S.storage = 64) : T.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", T), S } function d(v) { const T = v.target; T.removeEventListener("dispose", d); const S = o.indexOf(T.__bindingPointIndex); o.splice(S, 1), s.deleteBuffer(i[T.id]), delete i[T.id], delete r[T.id] } function _() { for (const v in i) s.deleteBuffer(i[v]); o = [], i = {}, r = {} } return { bind: c, update: l, dispose: _ } } function sp() { const s = wi("canvas"); return s.style.display = "block", s } function op(s = {}) { this.isWebGLRenderer = !0; const e = s.canvas !== void 0 ? s.canvas : sp(), t = s.context !== void 0 ? s.context : null, n = s.depth !== void 0 ? s.depth : !0, i = s.stencil !== void 0 ? s.stencil : !0, r = s.antialias !== void 0 ? s.antialias : !1, o = s.premultipliedAlpha !== void 0 ? s.premultipliedAlpha : !0, a = s.preserveDrawingBuffer !== void 0 ? s.preserveDrawingBuffer : !1, c = s.powerPreference !== void 0 ? s.powerPreference : "default", l = s.failIfMajorPerformanceCaveat !== void 0 ? s.failIfMajorPerformanceCaveat : !1; let u; t !== null ? u = t.getContextAttributes().alpha : u = s.alpha !== void 0 ? s.alpha : !1; let h = null, f = null; const p = [], g = []; this.domElement = e, this.debug = { checkShaderErrors: !0 }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputEncoding = En, this.physicallyCorrectLights = !1, this.toneMapping = Yt, this.toneMappingExposure = 1, Object.defineProperties(this, { gammaFactor: { get: function () { return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."), 2 }, set: function () { console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.") } } }); const m = this; let d = !1, _ = 0, v = 0, T = null, S = -1, y = null; const C = new ze, D = new ze; let x = null, A = e.width, I = e.height, N = 1, J = null, Z = null; const R = new ze(0, 0, A, I), W = new ze(0, 0, A, I); let B = !1; const Y = new ys; let q = !1, O = !1, V = null; const ee = new He, K = new le, $ = new L, de = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 }; function _e() { return T === null ? N : 1 } let H = t; function Pe(w, F) { for (let U = 0; U < w.length; U++) { const z = w[U], X = e.getContext(z, F); if (X !== null) return X } return null } try { const w = { alpha: !0, depth: n, stencil: i, antialias: r, premultipliedAlpha: o, preserveDrawingBuffer: a, powerPreference: c, failIfMajorPerformanceCaveat: l }; if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${gs}`), e.addEventListener("webglcontextlost", ge, !1), e.addEventListener("webglcontextrestored", Ee, !1), e.addEventListener("webglcontextcreationerror", Oe, !1), H === null) { const F = ["webgl2", "webgl", "experimental-webgl"]; if (m.isWebGL1Renderer === !0 && F.shift(), H = Pe(F, w), H === null) throw Pe(F) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.") } H.getShaderPrecisionFormat === void 0 && (H.getShaderPrecisionFormat = function () { return { rangeMin: 1, rangeMax: 1, precision: 1 } }) } catch (w) { throw console.error("THREE.WebGLRenderer: " + w.message), w } let pe, xe, he, Re, Me, fe, We, et, Ye, lt, je, Ie, pt, ct, E, M, k, Q, te, oe, me, b, j, ne; function ae() { pe = new pd(H), xe = new ad(H, pe, s), pe.init(xe), b = new Kf(H, pe, xe), he = new Jf(H, pe, xe), Re = new _d, Me = new zf, fe = new $f(H, pe, he, Me, xe, b, Re), We = new cd(m), et = new fd(m), Ye = new Cc(H, xe), j = new sd(H, pe, Ye, xe), lt = new md(H, Ye, Re, j), je = new Md(H, lt, Ye, Re), te = new yd(H, xe, fe), M = new ld(Me), Ie = new Nf(m, We, et, pe, xe, j, M), pt = new ip(m, Me), ct = new Uf, E = new Wf(pe, xe), Q = new rd(m, We, he, je, u, o), k = new Zf(m, je, xe), ne = new rp(H, Re, xe, he), oe = new od(H, pe, Re, xe), me = new gd(H, pe, Re, xe), Re.programs = Ie.programs, m.capabilities = xe, m.extensions = pe, m.properties = Me, m.renderLists = ct, m.shadowMap = k, m.state = he, m.info = Re } ae(); const se = new np(m, H); this.xr = se, this.getContext = function () { return H }, this.getContextAttributes = function () { return H.getContextAttributes() }, this.forceContextLoss = function () { const w = pe.get("WEBGL_lose_context"); w && w.loseContext() }, this.forceContextRestore = function () { const w = pe.get("WEBGL_lose_context"); w && w.restoreContext() }, this.getPixelRatio = function () { return N }, this.setPixelRatio = function (w) { w !== void 0 && (N = w, this.setSize(A, I, !1)) }, this.getSize = function (w) { return w.set(A, I) }, this.setSize = function (w, F, U) { if (se.isPresenting) { console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."); return } A = w, I = F, e.width = Math.floor(w * N), e.height = Math.floor(F * N), U !== !1 && (e.style.width = w + "px", e.style.height = F + "px"), this.setViewport(0, 0, w, F) }, this.getDrawingBufferSize = function (w) { return w.set(A * N, I * N).floor() }, this.setDrawingBufferSize = function (w, F, U) { A = w, I = F, N = U, e.width = Math.floor(w * U), e.height = Math.floor(F * U), this.setViewport(0, 0, w, F) }, this.getCurrentViewport = function (w) { return w.copy(C) }, this.getViewport = function (w) { return w.copy(R) }, this.setViewport = function (w, F, U, z) { w.isVector4 ? R.set(w.x, w.y, w.z, w.w) : R.set(w, F, U, z), he.viewport(C.copy(R).multiplyScalar(N).floor()) }, this.getScissor = function (w) { return w.copy(W) }, this.setScissor = function (w, F, U, z) { w.isVector4 ? W.set(w.x, w.y, w.z, w.w) : W.set(w, F, U, z), he.scissor(D.copy(W).multiplyScalar(N).floor()) }, this.getScissorTest = function () { return B }, this.setScissorTest = function (w) { he.setScissorTest(B = w) }, this.setOpaqueSort = function (w) { J = w }, this.setTransparentSort = function (w) { Z = w }, this.getClearColor = function (w) { return w.copy(Q.getClearColor()) }, this.setClearColor = function () { Q.setClearColor.apply(Q, arguments) }, this.getClearAlpha = function () { return Q.getClearAlpha() }, this.setClearAlpha = function () { Q.setClearAlpha.apply(Q, arguments) }, this.clear = function (w = !0, F = !0, U = !0) { let z = 0; w && (z |= 16384), F && (z |= 256), U && (z |= 1024), H.clear(z) }, this.clearColor = function () { this.clear(!0, !1, !1) }, this.clearDepth = function () { this.clear(!1, !0, !1) }, this.clearStencil = function () { this.clear(!1, !1, !0) }, this.dispose = function () { e.removeEventListener("webglcontextlost", ge, !1), e.removeEventListener("webglcontextrestored", Ee, !1), e.removeEventListener("webglcontextcreationerror", Oe, !1), ct.dispose(), E.dispose(), Me.dispose(), We.dispose(), et.dispose(), je.dispose(), j.dispose(), ne.dispose(), Ie.dispose(), se.dispose(), se.removeEventListener("sessionstart", Ae), se.removeEventListener("sessionend", $e), V && (V.dispose(), V = null), Ve.stop() }; function ge(w) { w.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), d = !0 } function Ee() { console.log("THREE.WebGLRenderer: Context Restored."), d = !1; const w = Re.autoReset, F = k.enabled, U = k.autoUpdate, z = k.needsUpdate, X = k.type; ae(), Re.autoReset = w, k.enabled = F, k.autoUpdate = U, k.needsUpdate = z, k.type = X } function Oe(w) { console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", w.statusMessage) } function P(w) { const F = w.target; F.removeEventListener("dispose", P), ie(F) } function ie(w) { G(w), Me.remove(w) } function G(w) { const F = Me.get(w).programs; F !== void 0 && (F.forEach(function (U) { Ie.releaseProgram(U) }), w.isShaderMaterial && Ie.releaseShaderCache(w)) } this.renderBufferDirect = function (w, F, U, z, X, ve) { F === null && (F = de); const ye = X.isMesh && X.matrixWorld.determinant() < 0, be = Xa(w, F, U, z, X); he.setMaterial(z, ye); let Se = U.index; const Fe = U.attributes.position; if (Se === null) { if (Fe === void 0 || Fe.count === 0) return } else if (Se.count === 0) return; let Te = 1; z.wireframe === !0 && (Se = lt.getWireframeAttribute(U), Te = 2), j.setup(X, z, be, U, Se); let Ce, Ge = oe; Se !== null && (Ce = Ye.get(Se), Ge = me, Ge.setIndex(Ce)); const un = Se !== null ? Se.count : Fe.count, Rn = U.drawRange.start * Te, In = U.drawRange.count * Te, Pt = ve !== null ? ve.start * Te : 0, De = ve !== null ? ve.count * Te : 1 / 0, Fn = Math.max(Rn, Pt), Xe = Math.min(un, Rn + In, Pt + De) - 1, gt = Math.max(0, Xe - Fn + 1); if (gt !== 0) { if (X.isMesh) z.wireframe === !0 ? (he.setLineWidth(z.wireframeLinewidth * _e()), Ge.setMode(1)) : Ge.setMode(4); else if (X.isLine) { let Zt = z.linewidth; Zt === void 0 && (Zt = 1), he.setLineWidth(Zt * _e()), X.isLineSegments ? Ge.setMode(1) : X.isLineLoop ? Ge.setMode(2) : Ge.setMode(3) } else X.isPoints ? Ge.setMode(0) : X.isSprite && Ge.setMode(4); if (X.isInstancedMesh) Ge.renderInstances(Fn, gt, X.count); else if (U.isInstancedBufferGeometry) { const Zt = Math.min(U.instanceCount, U._maxInstanceCount); Ge.renderInstances(Fn, gt, Zt) } else Ge.render(Fn, gt) } }, this.compile = function (w, F) { f = E.get(w), f.init(), g.push(f), w.traverseVisible(function (U) { U.isLight && U.layers.test(F.layers) && (f.pushLight(U), U.castShadow && f.pushShadow(U)) }), f.setupLights(m.physicallyCorrectLights), w.traverse(function (U) { const z = U.material; if (z) if (Array.isArray(z)) for (let X = 0; X < z.length; X++) { const ve = z[X]; gr(ve, w, U) } else gr(z, w, U) }), g.pop(), f = null }; let ue = null; function ce(w) { ue && ue(w) } function Ae() { Ve.stop() } function $e() { Ve.start() } const Ve = new Ta; Ve.setAnimationLoop(ce), typeof self < "u" && Ve.setContext(self), this.setAnimationLoop = function (w) { ue = w, se.setAnimationLoop(w), w === null ? Ve.stop() : Ve.start() }, se.addEventListener("sessionstart", Ae), se.addEventListener("sessionend", $e), this.render = function (w, F) { if (F !== void 0 && F.isCamera !== !0) { console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."); return } if (d === !0) return; w.autoUpdate === !0 && w.updateMatrixWorld(), F.parent === null && F.updateMatrixWorld(), se.enabled === !0 && se.isPresenting === !0 && (se.cameraAutoUpdate === !0 && se.updateCamera(F), F = se.getCamera()), w.isScene === !0 && w.onBeforeRender(m, w, F, T), f = E.get(w, g.length), f.init(), g.push(f), ee.multiplyMatrices(F.projectionMatrix, F.matrixWorldInverse), Y.setFromProjectionMatrix(ee), O = this.localClippingEnabled, q = M.init(this.clippingPlanes, O, F), h = ct.get(w, p.length), h.init(), p.push(h), jt(w, F, 0, m.sortObjects), h.finish(), m.sortObjects === !0 && h.sort(J, Z), q === !0 && M.beginShadows(); const U = f.state.shadowsArray; if (k.render(U, w, F), q === !0 && M.endShadows(), this.info.autoReset === !0 && this.info.reset(), Q.render(h, w), f.setupLights(m.physicallyCorrectLights), F.isArrayCamera) { const z = F.cameras; for (let X = 0, ve = z.length; X < ve; X++) { const ye = z[X]; Be(h, w, ye, ye.viewport) } } else Be(h, w, F); T !== null && (fe.updateMultisampleRenderTarget(T), fe.updateRenderTargetMipmap(T)), w.isScene === !0 && w.onAfterRender(m, w, F), j.resetDefaultState(), S = -1, y = null, g.pop(), g.length > 0 ? f = g[g.length - 1] : f = null, p.pop(), p.length > 0 ? h = p[p.length - 1] : h = null }; function jt(w, F, U, z) { if (w.visible === !1) return; if (w.layers.test(F.layers)) { if (w.isGroup) U = w.renderOrder; else if (w.isLOD) w.autoUpdate === !0 && w.update(F); else if (w.isLight) f.pushLight(w), w.castShadow && f.pushShadow(w); else if (w.isSprite) { if (!w.frustumCulled || Y.intersectsSprite(w)) { z && $.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ee); const ye = je.update(w), be = w.material; be.visible && h.push(w, ye, be, U, $.z, null) } } else if ((w.isMesh || w.isLine || w.isPoints) && (w.isSkinnedMesh && w.skeleton.frame !== Re.render.frame && (w.skeleton.update(), w.skeleton.frame = Re.render.frame), !w.frustumCulled || Y.intersectsObject(w))) { z && $.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ee); const ye = je.update(w), be = w.material; if (Array.isArray(be)) { const Se = ye.groups; for (let Fe = 0, Te = Se.length; Fe < Te; Fe++) { const Ce = Se[Fe], Ge = be[Ce.materialIndex]; Ge && Ge.visible && h.push(w, ye, Ge, U, $.z, Ce) } } else be.visible && h.push(w, ye, be, U, $.z, null) } } const ve = w.children; for (let ye = 0, be = ve.length; ye < be; ye++)jt(ve[ye], F, U, z) } function Be(w, F, U, z) { const X = w.opaque, ve = w.transmissive, ye = w.transparent; f.setupLightsView(U), ve.length > 0 && Nt(X, F, U), z && he.viewport(C.copy(z)), X.length > 0 && mt(X, F, U), ve.length > 0 && mt(ve, F, U), ye.length > 0 && mt(ye, F, U), he.buffers.depth.setTest(!0), he.buffers.depth.setMask(!0), he.buffers.color.setMask(!0), he.setPolygonOffset(!1) } function Nt(w, F, U) { const z = xe.isWebGL2; V === null && (V = new Tn(1, 1, { generateMipmaps: !0, type: pe.has("EXT_color_buffer_half_float") ? bi : wn, minFilter: hr, samples: z && r === !0 ? 4 : 0 })), m.getDrawingBufferSize(K), z ? V.setSize(K.x, K.y) : V.setSize(or(K.x), or(K.y)); const X = m.getRenderTarget(); m.setRenderTarget(V), m.clear(); const ve = m.toneMapping; m.toneMapping = Yt, mt(w, F, U), m.toneMapping = ve, fe.updateMultisampleRenderTarget(V), fe.updateRenderTargetMipmap(V), m.setRenderTarget(X) } function mt(w, F, U) { const z = F.isScene === !0 ? F.overrideMaterial : null; for (let X = 0, ve = w.length; X < ve; X++) { const ye = w[X], be = ye.object, Se = ye.geometry, Fe = z === null ? ye.material : z, Te = ye.group; be.layers.test(U.layers) && Wa(be, F, U, Se, Fe, Te) } } function Wa(w, F, U, z, X, ve) { w.onBeforeRender(m, F, U, z, X, ve), w.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse, w.matrixWorld), w.normalMatrix.getNormalMatrix(w.modelViewMatrix), X.onBeforeRender(m, F, U, z, w, ve), X.transparent === !0 && X.side === ln ? (X.side = Ct, X.needsUpdate = !0, m.renderBufferDirect(U, F, z, X, w, ve), X.side = Si, X.needsUpdate = !0, m.renderBufferDirect(U, F, z, X, w, ve), X.side = ln) : m.renderBufferDirect(U, F, z, X, w, ve), w.onAfterRender(m, F, U, z, X, ve) } function gr(w, F, U) { F.isScene !== !0 && (F = de); const z = Me.get(w), X = f.state.lights, ve = f.state.shadowsArray, ye = X.state.version, be = Ie.getParameters(w, X.state, ve, F, U), Se = Ie.getProgramCacheKey(be); let Fe = z.programs; z.environment = w.isMeshStandardMaterial ? F.environment : null, z.fog = F.fog, z.envMap = (w.isMeshStandardMaterial ? et : We).get(w.envMap || z.environment), Fe === void 0 && (w.addEventListener("dispose", P), Fe = new Map, z.programs = Fe); let Te = Fe.get(Se); if (Te !== void 0) { if (z.currentProgram === Te && z.lightsStateVersion === ye) return Is(w, be), Te } else be.uniforms = Ie.getUniforms(w), w.onBuild(U, be, m), w.onBeforeCompile(be, m), Te = Ie.acquireProgram(be, Se), Fe.set(Se, Te), z.uniforms = be.uniforms; const Ce = z.uniforms; (!w.isShaderMaterial && !w.isRawShaderMaterial || w.clipping === !0) && (Ce.clippingPlanes = M.uniform), Is(w, be), z.needsLights = Ya(w), z.lightsStateVersion = ye, z.needsLights && (Ce.ambientLightColor.value = X.state.ambient, Ce.lightProbe.value = X.state.probe, Ce.directionalLights.value = X.state.directional, Ce.directionalLightShadows.value = X.state.directionalShadow, Ce.spotLights.value = X.state.spot, Ce.spotLightShadows.value = X.state.spotShadow, Ce.rectAreaLights.value = X.state.rectArea, Ce.ltc_1.value = X.state.rectAreaLTC1, Ce.ltc_2.value = X.state.rectAreaLTC2, Ce.pointLights.value = X.state.point, Ce.pointLightShadows.value = X.state.pointShadow, Ce.hemisphereLights.value = X.state.hemi, Ce.directionalShadowMap.value = X.state.directionalShadowMap, Ce.directionalShadowMatrix.value = X.state.directionalShadowMatrix, Ce.spotShadowMap.value = X.state.spotShadowMap, Ce.spotShadowMatrix.value = X.state.spotShadowMatrix, Ce.pointShadowMap.value = X.state.pointShadowMap, Ce.pointShadowMatrix.value = X.state.pointShadowMatrix); const Ge = Te.getUniforms(), un = ir.seqWithValue(Ge.seq, Ce); return z.currentProgram = Te, z.uniformsList = un, Te } function Is(w, F) { const U = Me.get(w); U.outputEncoding = F.outputEncoding, U.instancing = F.instancing, U.skinning = F.skinning, U.morphTargets = F.morphTargets, U.morphNormals = F.morphNormals, U.morphColors = F.morphColors, U.morphTargetsCount = F.morphTargetsCount, U.numClippingPlanes = F.numClippingPlanes, U.numIntersection = F.numClipIntersection, U.vertexAlphas = F.vertexAlphas, U.vertexTangents = F.vertexTangents, U.toneMapping = F.toneMapping } function Xa(w, F, U, z, X) { F.isScene !== !0 && (F = de), fe.resetTextureUnits(); const ve = F.fog, ye = z.isMeshStandardMaterial ? F.environment : null, be = T === null ? m.outputEncoding : T.isXRRenderTarget === !0 ? T.texture.encoding : En, Se = (z.isMeshStandardMaterial ? et : We).get(z.envMap || ye), Fe = z.vertexColors === !0 && !!U.attributes.color && U.attributes.color.itemSize === 4, Te = !!z.normalMap && !!U.attributes.tangent, Ce = !!U.morphAttributes.position, Ge = !!U.morphAttributes.normal, un = !!U.morphAttributes.color, Rn = z.toneMapped ? m.toneMapping : Yt, In = U.morphAttributes.position || U.morphAttributes.normal || U.morphAttributes.color, Pt = In !== void 0 ? In.length : 0, De = Me.get(z), Fn = f.state.lights; if (q === !0 && (O === !0 || w !== y)) { const ut = w === y && z.id === S; M.setState(z, w, ut) } let Xe = !1; z.version === De.__version ? (De.needsLights && De.lightsStateVersion !== Fn.state.version || De.outputEncoding !== be || X.isInstancedMesh && De.instancing === !1 || !X.isInstancedMesh && De.instancing === !0 || X.isSkinnedMesh && De.skinning === !1 || !X.isSkinnedMesh && De.skinning === !0 || De.envMap !== Se || z.fog === !0 && De.fog !== ve || De.numClippingPlanes !== void 0 && (De.numClippingPlanes !== M.numPlanes || De.numIntersection !== M.numIntersection) || De.vertexAlphas !== Fe || De.vertexTangents !== Te || De.morphTargets !== Ce || De.morphNormals !== Ge || De.morphColors !== un || De.toneMapping !== Rn || xe.isWebGL2 === !0 && De.morphTargetsCount !== Pt) && (Xe = !0) : (Xe = !0, De.__version = z.version); let gt = De.currentProgram; Xe === !0 && (gt = gr(z, F, X)); let Zt = !1, ci = !1, _r = !1; const rt = gt.getUniforms(), ui = De.uniforms; if (he.useProgram(gt.program) && (Zt = !0, ci = !0, _r = !0), z.id !== S && (S = z.id, ci = !0), Zt || y !== w) { if (rt.setValue(H, "projectionMatrix", w.projectionMatrix), xe.logarithmicDepthBuffer && rt.setValue(H, "logDepthBufFC", 2 / (Math.log(w.far + 1) / Math.LN2)), y !== w && (y = w, ci = !0, _r = !0), z.isShaderMaterial || z.isMeshPhongMaterial || z.isMeshToonMaterial || z.isMeshStandardMaterial || z.envMap) { const ut = rt.map.cameraPosition; ut !== void 0 && ut.setValue(H, $.setFromMatrixPosition(w.matrixWorld)) } (z.isMeshPhongMaterial || z.isMeshToonMaterial || z.isMeshLambertMaterial || z.isMeshBasicMaterial || z.isMeshStandardMaterial || z.isShaderMaterial) && rt.setValue(H, "isOrthographic", w.isOrthographicCamera === !0), (z.isMeshPhongMaterial || z.isMeshToonMaterial || z.isMeshLambertMaterial || z.isMeshBasicMaterial || z.isMeshStandardMaterial || z.isShaderMaterial || z.isShadowMaterial || X.isSkinnedMesh) && rt.setValue(H, "viewMatrix", w.matrixWorldInverse) } if (X.isSkinnedMesh) { rt.setOptional(H, X, "bindMatrix"), rt.setOptional(H, X, "bindMatrixInverse"); const ut = X.skeleton; ut && (xe.floatVertexTextures ? (ut.boneTexture === null && ut.computeBoneTexture(), rt.setValue(H, "boneTexture", ut.boneTexture, fe), rt.setValue(H, "boneTextureSize", ut.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required.")) } const xr = U.morphAttributes; if ((xr.position !== void 0 || xr.normal !== void 0 || xr.color !== void 0 && xe.isWebGL2 === !0) && te.update(X, U, z, gt), (ci || De.receiveShadow !== X.receiveShadow) && (De.receiveShadow = X.receiveShadow, rt.setValue(H, "receiveShadow", X.receiveShadow)), ci && (rt.setValue(H, "toneMappingExposure", m.toneMappingExposure), De.needsLights && qa(ui, _r), ve && z.fog === !0 && pt.refreshFogUniforms(ui, ve), pt.refreshMaterialUniforms(ui, z, N, I, V), ir.upload(H, De.uniformsList, ui, fe)), z.isShaderMaterial && z.uniformsNeedUpdate === !0 && (ir.upload(H, De.uniformsList, ui, fe), z.uniformsNeedUpdate = !1), z.isSpriteMaterial && rt.setValue(H, "center", X.center), rt.setValue(H, "modelViewMatrix", X.modelViewMatrix), rt.setValue(H, "normalMatrix", X.normalMatrix), rt.setValue(H, "modelMatrix", X.matrixWorld), z.isShaderMaterial || z.isRawShaderMaterial) { const ut = z.uniformsGroups; for (let vr = 0, ja = ut.length; vr < ja; vr++)if (xe.isWebGL2) { const Fs = ut[vr]; ne.update(Fs, gt), ne.bind(Fs, gt) } else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.") } return gt } function qa(w, F) { w.ambientLightColor.needsUpdate = F, w.lightProbe.needsUpdate = F, w.directionalLights.needsUpdate = F, w.directionalLightShadows.needsUpdate = F, w.pointLights.needsUpdate = F, w.pointLightShadows.needsUpdate = F, w.spotLights.needsUpdate = F, w.spotLightShadows.needsUpdate = F, w.rectAreaLights.needsUpdate = F, w.hemisphereLights.needsUpdate = F } function Ya(w) { return w.isMeshLambertMaterial || w.isMeshToonMaterial || w.isMeshPhongMaterial || w.isMeshStandardMaterial || w.isShadowMaterial || w.isShaderMaterial && w.lights === !0 } this.getActiveCubeFace = function () { return _ }, this.getActiveMipmapLevel = function () { return v }, this.getRenderTarget = function () { return T }, this.setRenderTargetTextures = function (w, F, U) { Me.get(w.texture).__webglTexture = F, Me.get(w.depthTexture).__webglTexture = U; const z = Me.get(w); z.__hasExternalTextures = !0, z.__hasExternalTextures && (z.__autoAllocateDepthBuffer = U === void 0, z.__autoAllocateDepthBuffer || pe.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), z.__useRenderToTexture = !1)) }, this.setRenderTargetFramebuffer = function (w, F) { const U = Me.get(w); U.__webglFramebuffer = F, U.__useDefaultFramebuffer = F === void 0 }, this.setRenderTarget = function (w, F = 0, U = 0) { T = w, _ = F, v = U; let z = !0; if (w) { const Se = Me.get(w); Se.__useDefaultFramebuffer !== void 0 ? (he.bindFramebuffer(36160, null), z = !1) : Se.__webglFramebuffer === void 0 ? fe.setupRenderTarget(w) : Se.__hasExternalTextures && fe.rebindTextures(w, Me.get(w.texture).__webglTexture, Me.get(w.depthTexture).__webglTexture) } let X = null, ve = !1, ye = !1; if (w) { const Se = w.texture; (Se.isData3DTexture || Se.isDataArrayTexture) && (ye = !0); const Fe = Me.get(w).__webglFramebuffer; w.isWebGLCubeRenderTarget ? (X = Fe[F], ve = !0) : xe.isWebGL2 && w.samples > 0 && fe.useMultisampledRTT(w) === !1 ? X = Me.get(w).__webglMultisampledFramebuffer : X = Fe, C.copy(w.viewport), D.copy(w.scissor), x = w.scissorTest } else C.copy(R).multiplyScalar(N).floor(), D.copy(W).multiplyScalar(N).floor(), x = B; if (he.bindFramebuffer(36160, X) && xe.drawBuffers && z && he.drawBuffers(w, X), he.viewport(C), he.scissor(D), he.setScissorTest(x), ve) { const Se = Me.get(w.texture); H.framebufferTexture2D(36160, 36064, 34069 + F, Se.__webglTexture, U) } else if (ye) { const Se = Me.get(w.texture), Fe = F || 0; H.framebufferTextureLayer(36160, 36064, Se.__webglTexture, U || 0, Fe) } S = -1 }, this.readRenderTargetPixels = function (w, F, U, z, X, ve, ye) { if (!(w && w.isWebGLRenderTarget)) { console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."); return } let be = Me.get(w).__webglFramebuffer; if (w.isWebGLCubeRenderTarget && ye !== void 0 && (be = be[ye]), be) { he.bindFramebuffer(36160, be); try { const Se = w.texture, Fe = Se.format, Te = Se.type; if (Fe !== Rt && b.convert(Fe) !== H.getParameter(35739)) { console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."); return } const Ce = Te === bi && (pe.has("EXT_color_buffer_half_float") || xe.isWebGL2 && pe.has("EXT_color_buffer_float")); if (Te !== wn && b.convert(Te) !== H.getParameter(35738) && !(Te === yn && (xe.isWebGL2 || pe.has("OES_texture_float") || pe.has("WEBGL_color_buffer_float"))) && !Ce) { console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."); return } F >= 0 && F <= w.width - z && U >= 0 && U <= w.height - X && H.readPixels(F, U, z, X, b.convert(Fe), b.convert(Te), ve) } finally { const Se = T !== null ? Me.get(T).__webglFramebuffer : null; he.bindFramebuffer(36160, Se) } } }, this.copyFramebufferToTexture = function (w, F, U = 0) { const z = Math.pow(2, -U), X = Math.floor(F.image.width * z), ve = Math.floor(F.image.height * z); fe.setTexture2D(F, 0), H.copyTexSubImage2D(3553, U, 0, 0, w.x, w.y, X, ve), he.unbindTexture() }, this.copyTextureToTexture = function (w, F, U, z = 0) { const X = F.image.width, ve = F.image.height, ye = b.convert(U.format), be = b.convert(U.type); fe.setTexture2D(U, 0), H.pixelStorei(37440, U.flipY), H.pixelStorei(37441, U.premultiplyAlpha), H.pixelStorei(3317, U.unpackAlignment), F.isDataTexture ? H.texSubImage2D(3553, z, w.x, w.y, X, ve, ye, be, F.image.data) : F.isCompressedTexture ? H.compressedTexSubImage2D(3553, z, w.x, w.y, F.mipmaps[0].width, F.mipmaps[0].height, ye, F.mipmaps[0].data) : H.texSubImage2D(3553, z, w.x, w.y, ye, be, F.image), z === 0 && U.generateMipmaps && H.generateMipmap(3553), he.unbindTexture() }, this.copyTextureToTexture3D = function (w, F, U, z, X = 0) { if (m.isWebGL1Renderer) { console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2."); return } const ve = w.max.x - w.min.x + 1, ye = w.max.y - w.min.y + 1, be = w.max.z - w.min.z + 1, Se = b.convert(z.format), Fe = b.convert(z.type); let Te; if (z.isData3DTexture) fe.setTexture3D(z, 0), Te = 32879; else if (z.isDataArrayTexture) fe.setTexture2DArray(z, 0), Te = 35866; else { console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."); return } H.pixelStorei(37440, z.flipY), H.pixelStorei(37441, z.premultiplyAlpha), H.pixelStorei(3317, z.unpackAlignment); const Ce = H.getParameter(3314), Ge = H.getParameter(32878), un = H.getParameter(3316), Rn = H.getParameter(3315), In = H.getParameter(32877), Pt = U.isCompressedTexture ? U.mipmaps[0] : U.image; H.pixelStorei(3314, Pt.width), H.pixelStorei(32878, Pt.height), H.pixelStorei(3316, w.min.x), H.pixelStorei(3315, w.min.y), H.pixelStorei(32877, w.min.z), U.isDataTexture || U.isData3DTexture ? H.texSubImage3D(Te, X, F.x, F.y, F.z, ve, ye, be, Se, Fe, Pt.data) : U.isCompressedTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), H.compressedTexSubImage3D(Te, X, F.x, F.y, F.z, ve, ye, be, Se, Pt.data)) : H.texSubImage3D(Te, X, F.x, F.y, F.z, ve, ye, be, Se, Fe, Pt), H.pixelStorei(3314, Ce), H.pixelStorei(32878, Ge), H.pixelStorei(3316, un), H.pixelStorei(3315, Rn), H.pixelStorei(32877, In), X === 0 && z.generateMipmaps && H.generateMipmap(Te), he.unbindTexture() }, this.initTexture = function (w) { w.isCubeTexture ? fe.setTextureCube(w, 0) : w.isData3DTexture ? fe.setTexture3D(w, 0) : w.isDataArrayTexture ? fe.setTexture2DArray(w, 0) : fe.setTexture2D(w, 0), he.unbindTexture() }, this.resetState = function () { _ = 0, v = 0, T = null, he.reset(), j.reset() }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this })) } class Ra extends op { } Ra.prototype.isWebGL1Renderer = !0; class Ia extends Mt { constructor() { super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this })) } copy(e, t) { return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.autoUpdate = e.autoUpdate, this.matrixAutoUpdate = e.matrixAutoUpdate, this } toJSON(e) { const t = super.toJSON(e); return this.fog !== null && (t.object.fog = this.fog.toJSON()), t } } class Ft { constructor() { this.type = "Curve", this.arcLengthDivisions = 200 } getPoint() { return console.warn("THREE.Curve: .getPoint() not implemented."), null } getPointAt(e, t) { const n = this.getUtoTmapping(e); return this.getPoint(n, t) } getPoints(e = 5) { const t = []; for (let n = 0; n <= e; n++)t.push(this.getPoint(n / e)); return t } getSpacedPoints(e = 5) { const t = []; for (let n = 0; n <= e; n++)t.push(this.getPointAt(n / e)); return t } getLength() { const e = this.getLengths(); return e[e.length - 1] } getLengths(e = this.arcLengthDivisions) { if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) return this.cacheArcLengths; this.needsUpdate = !1; const t = []; let n, i = this.getPoint(0), r = 0; t.push(0); for (let o = 1; o <= e; o++)n = this.getPoint(o / e), r += n.distanceTo(i), t.push(r), i = n; return this.cacheArcLengths = t, t } updateArcLengths() { this.needsUpdate = !0, this.getLengths() } getUtoTmapping(e, t) { const n = this.getLengths(); let i = 0; const r = n.length; let o; t ? o = t : o = e * n[r - 1]; let a = 0, c = r - 1, l; for (; a <= c;)if (i = Math.floor(a + (c - a) / 2), l = n[i] - o, l < 0) a = i + 1; else if (l > 0) c = i - 1; else { c = i; break } if (i = c, n[i] === o) return i / (r - 1); const u = n[i], f = n[i + 1] - u, p = (o - u) / f; return (i + p) / (r - 1) } getTangent(e, t) { let i = e - 1e-4, r = e + 1e-4; i < 0 && (i = 0), r > 1 && (r = 1); const o = this.getPoint(i), a = this.getPoint(r), c = t || (o.isVector2 ? new le : new L); return c.copy(a).sub(o).normalize(), c } getTangentAt(e, t) { const n = this.getUtoTmapping(e); return this.getTangent(n, t) } computeFrenetFrames(e, t) { const n = new L, i = [], r = [], o = [], a = new L, c = new He; for (let p = 0; p <= e; p++) { const g = p / e; i[p] = this.getTangentAt(g, new L) } r[0] = new L, o[0] = new L; let l = Number.MAX_VALUE; const u = Math.abs(i[0].x), h = Math.abs(i[0].y), f = Math.abs(i[0].z); u <= l && (l = u, n.set(1, 0, 0)), h <= l && (l = h, n.set(0, 1, 0)), f <= l && n.set(0, 0, 1), a.crossVectors(i[0], n).normalize(), r[0].crossVectors(i[0], a), o[0].crossVectors(i[0], r[0]); for (let p = 1; p <= e; p++) { if (r[p] = r[p - 1].clone(), o[p] = o[p - 1].clone(), a.crossVectors(i[p - 1], i[p]), a.length() > Number.EPSILON) { a.normalize(); const g = Math.acos(tt(i[p - 1].dot(i[p]), -1, 1)); r[p].applyMatrix4(c.makeRotationAxis(a, g)) } o[p].crossVectors(i[p], r[p]) } if (t === !0) { let p = Math.acos(tt(r[0].dot(r[e]), -1, 1)); p /= e, i[0].dot(a.crossVectors(r[0], r[e])) > 0 && (p = -p); for (let g = 1; g <= e; g++)r[g].applyMatrix4(c.makeRotationAxis(i[g], p * g)), o[g].crossVectors(i[g], r[g]) } return { tangents: i, normals: r, binormals: o } } clone() { return new this.constructor().copy(this) } copy(e) { return this.arcLengthDivisions = e.arcLengthDivisions, this } toJSON() { const e = { metadata: { version: 4.5, type: "Curve", generator: "Curve.toJSON" } }; return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e } fromJSON(e) { return this.arcLengthDivisions = e.arcLengthDivisions, this } } class bs extends Ft { constructor(e = 0, t = 0, n = 1, i = 1, r = 0, o = Math.PI * 2, a = !1, c = 0) { super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = e, this.aY = t, this.xRadius = n, this.yRadius = i, this.aStartAngle = r, this.aEndAngle = o, this.aClockwise = a, this.aRotation = c } getPoint(e, t) { const n = t || new le, i = Math.PI * 2; let r = this.aEndAngle - this.aStartAngle; const o = Math.abs(r) < Number.EPSILON; for (; r < 0;)r += i; for (; r > i;)r -= i; r < Number.EPSILON && (o ? r = 0 : r = i), this.aClockwise === !0 && !o && (r === i ? r = -i : r = r - i); const a = this.aStartAngle + e * r; let c = this.aX + this.xRadius * Math.cos(a), l = this.aY + this.yRadius * Math.sin(a); if (this.aRotation !== 0) { const u = Math.cos(this.aRotation), h = Math.sin(this.aRotation), f = c - this.aX, p = l - this.aY; c = f * u - p * h + this.aX, l = f * h + p * u + this.aY } return n.set(c, l) } copy(e) { return super.copy(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this } toJSON() { const e = super.toJSON(); return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e } fromJSON(e) { return super.fromJSON(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this } } class ap extends bs { constructor(e, t, n, i, r, o) { super(e, t, n, n, i, r, o), this.isArcCurve = !0, this.type = "ArcCurve" } } function ws() { let s = 0, e = 0, t = 0, n = 0; function i(r, o, a, c) { s = r, e = a, t = -3 * r + 3 * o - 2 * a - c, n = 2 * r - 2 * o + a + c } return { initCatmullRom: function (r, o, a, c, l) { i(o, a, l * (a - r), l * (c - o)) }, initNonuniformCatmullRom: function (r, o, a, c, l, u, h) { let f = (o - r) / l - (a - r) / (l + u) + (a - o) / u, p = (a - o) / u - (c - o) / (u + h) + (c - a) / h; f *= u, p *= u, i(o, a, f, p) }, calc: function (r) { const o = r * r, a = o * r; return s + e * r + t * o + n * a } } } const Qi = new L, $r = new ws, Kr = new ws, Qr = new ws; class lp extends Ft { constructor(e = [], t = !1, n = "centripetal", i = .5) { super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = n, this.tension = i } getPoint(e, t = new L) { const n = t, i = this.points, r = i.length, o = (r - (this.closed ? 0 : 1)) * e; let a = Math.floor(o), c = o - a; this.closed ? a += a > 0 ? 0 : (Math.floor(Math.abs(a) / r) + 1) * r : c === 0 && a === r - 1 && (a = r - 2, c = 1); let l, u; this.closed || a > 0 ? l = i[(a - 1) % r] : (Qi.subVectors(i[0], i[1]).add(i[0]), l = Qi); const h = i[a % r], f = i[(a + 1) % r]; if (this.closed || a + 2 < r ? u = i[(a + 2) % r] : (Qi.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), u = Qi), this.curveType === "centripetal" || this.curveType === "chordal") { const p = this.curveType === "chordal" ? .5 : .25; let g = Math.pow(l.distanceToSquared(h), p), m = Math.pow(h.distanceToSquared(f), p), d = Math.pow(f.distanceToSquared(u), p); m < 1e-4 && (m = 1), g < 1e-4 && (g = m), d < 1e-4 && (d = m), $r.initNonuniformCatmullRom(l.x, h.x, f.x, u.x, g, m, d), Kr.initNonuniformCatmullRom(l.y, h.y, f.y, u.y, g, m, d), Qr.initNonuniformCatmullRom(l.z, h.z, f.z, u.z, g, m, d) } else this.curveType === "catmullrom" && ($r.initCatmullRom(l.x, h.x, f.x, u.x, this.tension), Kr.initCatmullRom(l.y, h.y, f.y, u.y, this.tension), Qr.initCatmullRom(l.z, h.z, f.z, u.z, this.tension)); return n.set($r.calc(c), Kr.calc(c), Qr.calc(c)), n } copy(e) { super.copy(e), this.points = []; for (let t = 0, n = e.points.length; t < n; t++) { const i = e.points[t]; this.points.push(i.clone()) } return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this } toJSON() { const e = super.toJSON(); e.points = []; for (let t = 0, n = this.points.length; t < n; t++) { const i = this.points[t]; e.points.push(i.toArray()) } return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e } fromJSON(e) { super.fromJSON(e), this.points = []; for (let t = 0, n = e.points.length; t < n; t++) { const i = e.points[t]; this.points.push(new L().fromArray(i)) } return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this } } function Yo(s, e, t, n, i) { const r = (n - e) * .5, o = (i - t) * .5, a = s * s, c = s * a; return (2 * t - 2 * n + r + o) * c + (-3 * t + 3 * n - 2 * r - o) * a + r * s + t } function cp(s, e) { const t = 1 - s; return t * t * e } function up(s, e) { return 2 * (1 - s) * s * e } function hp(s, e) { return s * s * e } function yi(s, e, t, n) { return cp(s, e) + up(s, t) + hp(s, n) } function dp(s, e) { const t = 1 - s; return t * t * t * e } function fp(s, e) { const t = 1 - s; return 3 * t * t * s * e } function pp(s, e) { return 3 * (1 - s) * s * s * e } function mp(s, e) { return s * s * s * e } function Mi(s, e, t, n, i) { return dp(s, e) + fp(s, t) + pp(s, n) + mp(s, i) } class Fa extends Ft { constructor(e = new le, t = new le, n = new le, i = new le) { super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i } getPoint(e, t = new le) { const n = t, i = this.v0, r = this.v1, o = this.v2, a = this.v3; return n.set(Mi(e, i.x, r.x, o.x, a.x), Mi(e, i.y, r.y, o.y, a.y)), n } copy(e) { return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this } toJSON() { const e = super.toJSON(); return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e } fromJSON(e) { return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this } } class gp extends Ft { constructor(e = new L, t = new L, n = new L, i = new L) { super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i } getPoint(e, t = new L) { const n = t, i = this.v0, r = this.v1, o = this.v2, a = this.v3; return n.set(Mi(e, i.x, r.x, o.x, a.x), Mi(e, i.y, r.y, o.y, a.y), Mi(e, i.z, r.z, o.z, a.z)), n } copy(e) { return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this } toJSON() { const e = super.toJSON(); return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e } fromJSON(e) { return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this } } class Es extends Ft { constructor(e = new le, t = new le) { super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = e, this.v2 = t } getPoint(e, t = new le) { const n = t; return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n } getPointAt(e, t) { return this.getPoint(e, t) } getTangent(e, t) { const n = t || new le; return n.copy(this.v2).sub(this.v1).normalize(), n } copy(e) { return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this } toJSON() { const e = super.toJSON(); return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e } fromJSON(e) { return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this } } class _p extends Ft { constructor(e = new L, t = new L) { super(), this.isLineCurve3 = !0, this.type = "LineCurve3", this.v1 = e, this.v2 = t } getPoint(e, t = new L) { const n = t; return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n } getPointAt(e, t) { return this.getPoint(e, t) } copy(e) { return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this } toJSON() { const e = super.toJSON(); return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e } fromJSON(e) { return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this } } class Na extends Ft { constructor(e = new le, t = new le, n = new le) { super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n } getPoint(e, t = new le) { const n = t, i = this.v0, r = this.v1, o = this.v2; return n.set(yi(e, i.x, r.x, o.x), yi(e, i.y, r.y, o.y)), n } copy(e) { return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this } toJSON() { const e = super.toJSON(); return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e } fromJSON(e) { return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this } } class xp extends Ft { constructor(e = new L, t = new L, n = new L) { super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n } getPoint(e, t = new L) { const n = t, i = this.v0, r = this.v1, o = this.v2; return n.set(yi(e, i.x, r.x, o.x), yi(e, i.y, r.y, o.y), yi(e, i.z, r.z, o.z)), n } copy(e) { return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this } toJSON() { const e = super.toJSON(); return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e } fromJSON(e) { return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this } } class za extends Ft { constructor(e = []) { super(), this.isSplineCurve = !0, this.type = "SplineCurve", this.points = e } getPoint(e, t = new le) { const n = t, i = this.points, r = (i.length - 1) * e, o = Math.floor(r), a = r - o, c = i[o === 0 ? o : o - 1], l = i[o], u = i[o > i.length - 2 ? i.length - 1 : o + 1], h = i[o > i.length - 3 ? i.length - 1 : o + 2]; return n.set(Yo(a, c.x, l.x, u.x, h.x), Yo(a, c.y, l.y, u.y, h.y)), n } copy(e) { super.copy(e), this.points = []; for (let t = 0, n = e.points.length; t < n; t++) { const i = e.points[t]; this.points.push(i.clone()) } return this } toJSON() { const e = super.toJSON(); e.points = []; for (let t = 0, n = this.points.length; t < n; t++) { const i = this.points[t]; e.points.push(i.toArray()) } return e } fromJSON(e) { super.fromJSON(e), this.points = []; for (let t = 0, n = e.points.length; t < n; t++) { const i = e.points[t]; this.points.push(new le().fromArray(i)) } return this } } var vp = Object.freeze({ __proto__: null, ArcCurve: ap, CatmullRomCurve3: lp, CubicBezierCurve: Fa, CubicBezierCurve3: gp, EllipseCurve: bs, LineCurve: Es, LineCurve3: _p, QuadraticBezierCurve: Na, QuadraticBezierCurve3: xp, SplineCurve: za }); class yp extends Ft { constructor() { super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1 } add(e) { this.curves.push(e) } closePath() { const e = this.curves[0].getPoint(0), t = this.curves[this.curves.length - 1].getPoint(1); e.equals(t) || this.curves.push(new Es(t, e)) } getPoint(e, t) { const n = e * this.getLength(), i = this.getCurveLengths(); let r = 0; for (; r < i.length;) { if (i[r] >= n) { const o = i[r] - n, a = this.curves[r], c = a.getLength(), l = c === 0 ? 0 : 1 - o / c; return a.getPointAt(l, t) } r++ } return null } getLength() { const e = this.getCurveLengths(); return e[e.length - 1] } updateArcLengths() { this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths() } getCurveLengths() { if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths; const e = []; let t = 0; for (let n = 0, i = this.curves.length; n < i; n++)t += this.curves[n].getLength(), e.push(t); return this.cacheLengths = e, e } getSpacedPoints(e = 40) { const t = []; for (let n = 0; n <= e; n++)t.push(this.getPoint(n / e)); return this.autoClose && t.push(t[0]), t } getPoints(e = 12) { const t = []; let n; for (let i = 0, r = this.curves; i < r.length; i++) { const o = r[i], a = o.isEllipseCurve ? e * 2 : o.isLineCurve || o.isLineCurve3 ? 1 : o.isSplineCurve ? e * o.points.length : e, c = o.getPoints(a); for (let l = 0; l < c.length; l++) { const u = c[l]; n && n.equals(u) || (t.push(u), n = u) } } return this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0]) && t.push(t[0]), t } copy(e) { super.copy(e), this.curves = []; for (let t = 0, n = e.curves.length; t < n; t++) { const i = e.curves[t]; this.curves.push(i.clone()) } return this.autoClose = e.autoClose, this } toJSON() { const e = super.toJSON(); e.autoClose = this.autoClose, e.curves = []; for (let t = 0, n = this.curves.length; t < n; t++) { const i = this.curves[t]; e.curves.push(i.toJSON()) } return e } fromJSON(e) { super.fromJSON(e), this.autoClose = e.autoClose, this.curves = []; for (let t = 0, n = e.curves.length; t < n; t++) { const i = e.curves[t]; this.curves.push(new vp[i.type]().fromJSON(i)) } return this } } class us extends yp { constructor(e) { super(), this.type = "Path", this.currentPoint = new le, e && this.setFromPoints(e) } setFromPoints(e) { this.moveTo(e[0].x, e[0].y); for (let t = 1, n = e.length; t < n; t++)this.lineTo(e[t].x, e[t].y); return this } moveTo(e, t) { return this.currentPoint.set(e, t), this } lineTo(e, t) { const n = new Es(this.currentPoint.clone(), new le(e, t)); return this.curves.push(n), this.currentPoint.set(e, t), this } quadraticCurveTo(e, t, n, i) { const r = new Na(this.currentPoint.clone(), new le(e, t), new le(n, i)); return this.curves.push(r), this.currentPoint.set(n, i), this } bezierCurveTo(e, t, n, i, r, o) { const a = new Fa(this.currentPoint.clone(), new le(e, t), new le(n, i), new le(r, o)); return this.curves.push(a), this.currentPoint.set(r, o), this } splineThru(e) { const t = [this.currentPoint.clone()].concat(e), n = new za(t); return this.curves.push(n), this.currentPoint.copy(e[e.length - 1]), this } arc(e, t, n, i, r, o) { const a = this.currentPoint.x, c = this.currentPoint.y; return this.absarc(e + a, t + c, n, i, r, o), this } absarc(e, t, n, i, r, o) { return this.absellipse(e, t, n, n, i, r, o), this } ellipse(e, t, n, i, r, o, a, c) { const l = this.currentPoint.x, u = this.currentPoint.y; return this.absellipse(e + l, t + u, n, i, r, o, a, c), this } absellipse(e, t, n, i, r, o, a, c) { const l = new bs(e, t, n, i, r, o, a, c); if (this.curves.length > 0) { const h = l.getPoint(0); h.equals(this.currentPoint) || this.lineTo(h.x, h.y) } this.curves.push(l); const u = l.getPoint(1); return this.currentPoint.copy(u), this } copy(e) { return super.copy(e), this.currentPoint.copy(e.currentPoint), this } toJSON() { const e = super.toJSON(); return e.currentPoint = this.currentPoint.toArray(), e } fromJSON(e) { return super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this } } class fr extends Lt { constructor(e = 1, t = 1, n = 1, i = 8, r = 1, o = !1, a = 0, c = Math.PI * 2) { super(), this.type = "CylinderGeometry", this.parameters = { radiusTop: e, radiusBottom: t, height: n, radialSegments: i, heightSegments: r, openEnded: o, thetaStart: a, thetaLength: c }; const l = this; i = Math.floor(i), r = Math.floor(r); const u = [], h = [], f = [], p = []; let g = 0; const m = [], d = n / 2; let _ = 0; v(), o === !1 && (e > 0 && T(!0), t > 0 && T(!1)), this.setIndex(u), this.setAttribute("position", new Je(h, 3)), this.setAttribute("normal", new Je(f, 3)), this.setAttribute("uv", new Je(p, 2)); function v() { const S = new L, y = new L; let C = 0; const D = (t - e) / n; for (let x = 0; x <= r; x++) { const A = [], I = x / r, N = I * (t - e) + e; for (let J = 0; J <= i; J++) { const Z = J / i, R = Z * c + a, W = Math.sin(R), B = Math.cos(R); y.x = N * W, y.y = -I * n + d, y.z = N * B, h.push(y.x, y.y, y.z), S.set(W, D, B).normalize(), f.push(S.x, S.y, S.z), p.push(Z, 1 - I), A.push(g++) } m.push(A) } for (let x = 0; x < i; x++)for (let A = 0; A < r; A++) { const I = m[A][x], N = m[A + 1][x], J = m[A + 1][x + 1], Z = m[A][x + 1]; u.push(I, N, Z), u.push(N, J, Z), C += 6 } l.addGroup(_, C, 0), _ += C } function T(S) { const y = g, C = new le, D = new L; let x = 0; const A = S === !0 ? e : t, I = S === !0 ? 1 : -1; for (let J = 1; J <= i; J++)h.push(0, d * I, 0), f.push(0, I, 0), p.push(.5, .5), g++; const N = g; for (let J = 0; J <= i; J++) { const R = J / i * c + a, W = Math.cos(R), B = Math.sin(R); D.x = A * B, D.y = d * I, D.z = A * W, h.push(D.x, D.y, D.z), f.push(0, I, 0), C.x = W * .5 + .5, C.y = B * .5 * I + .5, p.push(C.x, C.y), g++ } for (let J = 0; J < i; J++) { const Z = y + J, R = N + J; S === !0 ? u.push(R, R + 1, Z) : u.push(R + 1, R, Z), x += 3 } l.addGroup(_, x, S === !0 ? 1 : 2), _ += x } } static fromJSON(e) { return new fr(e.radiusTop, e.radiusBottom, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength) } } class Ts extends fr { constructor(e = 1, t = 1, n = 8, i = 1, r = !1, o = 0, a = Math.PI * 2) { super(0, e, t, n, i, r, o, a), this.type = "ConeGeometry", this.parameters = { radius: e, height: t, radialSegments: n, heightSegments: i, openEnded: r, thetaStart: o, thetaLength: a } } static fromJSON(e) { return new Ts(e.radius, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength) } } class rr extends us { constructor(e) { super(e), this.uuid = Dn(), this.type = "Shape", this.holes = [] } getPointsHoles(e) { const t = []; for (let n = 0, i = this.holes.length; n < i; n++)t[n] = this.holes[n].getPoints(e); return t } extractPoints(e) { return { shape: this.getPoints(e), holes: this.getPointsHoles(e) } } copy(e) { super.copy(e), this.holes = []; for (let t = 0, n = e.holes.length; t < n; t++) { const i = e.holes[t]; this.holes.push(i.clone()) } return this } toJSON() { const e = super.toJSON(); e.uuid = this.uuid, e.holes = []; for (let t = 0, n = this.holes.length; t < n; t++) { const i = this.holes[t]; e.holes.push(i.toJSON()) } return e } fromJSON(e) { super.fromJSON(e), this.uuid = e.uuid, this.holes = []; for (let t = 0, n = e.holes.length; t < n; t++) { const i = e.holes[t]; this.holes.push(new us().fromJSON(i)) } return this } } const Mp = { triangulate: function (s, e, t = 2) { const n = e && e.length, i = n ? e[0] * t : s.length; let r = Oa(s, 0, i, t, !0); const o = []; if (!r || r.next === r.prev) return o; let a, c, l, u, h, f, p; if (n && (r = Tp(s, e, r, t)), s.length > 80 * t) { a = l = s[0], c = u = s[1]; for (let g = t; g < i; g += t)h = s[g], f = s[g + 1], h < a && (a = h), f < c && (c = f), h > l && (l = h), f > u && (u = f); p = Math.max(l - a, u - c), p = p !== 0 ? 1 / p : 0 } return Ei(r, o, t, a, c, p), o } }; function Oa(s, e, t, n, i) { let r, o; if (i === Op(s, e, t, n) > 0) for (r = e; r < t; r += n)o = jo(r, s[r], s[r + 1], o); else for (r = t - n; r >= e; r -= n)o = jo(r, s[r], s[r + 1], o); return o && pr(o, o.next) && (Ai(o), o = o.next), o } function cn(s, e) { if (!s) return s; e || (e = s); let t = s, n; do if (n = !1, !t.steiner && (pr(t, t.next) || Ue(t.prev, t, t.next) === 0)) { if (Ai(t), t = e = t.prev, t === t.next) break; n = !0 } else t = t.next; while (n || t !== e); return e } function Ei(s, e, t, n, i, r, o) { if (!s) return; !o && r && Dp(s, n, i, r); let a = s, c, l; for (; s.prev !== s.next;) { if (c = s.prev, l = s.next, r ? bp(s, n, i, r) : Sp(s)) { e.push(c.i / t), e.push(s.i / t), e.push(l.i / t), Ai(s), s = l.next, a = l.next; continue } if (s = l, s === a) { o ? o === 1 ? (s = wp(cn(s), e, t), Ei(s, e, t, n, i, r, 2)) : o === 2 && Ep(s, e, t, n, i, r) : Ei(cn(s), e, t, n, i, r, 1); break } } } function Sp(s) { const e = s.prev, t = s, n = s.next; if (Ue(e, t, n) >= 0) return !1; let i = s.next.next; for (; i !== s.prev;) { if (Qn(e.x, e.y, t.x, t.y, n.x, n.y, i.x, i.y) && Ue(i.prev, i, i.next) >= 0) return !1; i = i.next } return !0 } function bp(s, e, t, n) { const i = s.prev, r = s, o = s.next; if (Ue(i, r, o) >= 0) return !1; const a = i.x < r.x ? i.x < o.x ? i.x : o.x : r.x < o.x ? r.x : o.x, c = i.y < r.y ? i.y < o.y ? i.y : o.y : r.y < o.y ? r.y : o.y, l = i.x > r.x ? i.x > o.x ? i.x : o.x : r.x > o.x ? r.x : o.x, u = i.y > r.y ? i.y > o.y ? i.y : o.y : r.y > o.y ? r.y : o.y, h = hs(a, c, e, t, n), f = hs(l, u, e, t, n); let p = s.prevZ, g = s.nextZ; for (; p && p.z >= h && g && g.z <= f;) { if (p !== s.prev && p !== s.next && Qn(i.x, i.y, r.x, r.y, o.x, o.y, p.x, p.y) && Ue(p.prev, p, p.next) >= 0 || (p = p.prevZ, g !== s.prev && g !== s.next && Qn(i.x, i.y, r.x, r.y, o.x, o.y, g.x, g.y) && Ue(g.prev, g, g.next) >= 0)) return !1; g = g.nextZ } for (; p && p.z >= h;) { if (p !== s.prev && p !== s.next && Qn(i.x, i.y, r.x, r.y, o.x, o.y, p.x, p.y) && Ue(p.prev, p, p.next) >= 0) return !1; p = p.prevZ } for (; g && g.z <= f;) { if (g !== s.prev && g !== s.next && Qn(i.x, i.y, r.x, r.y, o.x, o.y, g.x, g.y) && Ue(g.prev, g, g.next) >= 0) return !1; g = g.nextZ } return !0 } function wp(s, e, t) { let n = s; do { const i = n.prev, r = n.next.next; !pr(i, r) && Ua(i, n, n.next, r) && Ti(i, r) && Ti(r, i) && (e.push(i.i / t), e.push(n.i / t), e.push(r.i / t), Ai(n), Ai(n.next), n = s = r), n = n.next } while (n !== s); return cn(n) } function Ep(s, e, t, n, i, r) { let o = s; do { let a = o.next.next; for (; a !== o.prev;) { if (o.i !== a.i && Fp(o, a)) { let c = Ba(o, a); o = cn(o, o.next), c = cn(c, c.next), Ei(o, e, t, n, i, r), Ei(c, e, t, n, i, r); return } a = a.next } o = o.next } while (o !== s) } function Tp(s, e, t, n) { const i = []; let r, o, a, c, l; for (r = 0, o = e.length; r < o; r++)a = e[r] * n, c = r < o - 1 ? e[r + 1] * n : s.length, l = Oa(s, a, c, n, !1), l === l.next && (l.steiner = !0), i.push(Ip(l)); for (i.sort(Ap), r = 0; r < i.length; r++)Cp(i[r], t), t = cn(t, t.next); return t } function Ap(s, e) { return s.x - e.x } function Cp(s, e) { if (e = Lp(s, e), e) { const t = Ba(e, s); cn(e, e.next), cn(t, t.next) } } function Lp(s, e) { let t = e; const n = s.x, i = s.y; let r = -1 / 0, o; do { if (i <= t.y && i >= t.next.y && t.next.y !== t.y) { const f = t.x + (i - t.y) * (t.next.x - t.x) / (t.next.y - t.y); if (f <= n && f > r) { if (r = f, f === n) { if (i === t.y) return t; if (i === t.next.y) return t.next } o = t.x < t.next.x ? t : t.next } } t = t.next } while (t !== e); if (!o) return null; if (n === r) return o; const a = o, c = o.x, l = o.y; let u = 1 / 0, h; t = o; do n >= t.x && t.x >= c && n !== t.x && Qn(i < l ? n : r, i, c, l, i < l ? r : n, i, t.x, t.y) && (h = Math.abs(i - t.y) / (n - t.x), Ti(t, s) && (h < u || h === u && (t.x > o.x || t.x === o.x && Pp(o, t))) && (o = t, u = h)), t = t.next; while (t !== a); return o } function Pp(s, e) { return Ue(s.prev, s, e.prev) < 0 && Ue(e.next, s, s.next) < 0 } function Dp(s, e, t, n) { let i = s; do i.z === null && (i.z = hs(i.x, i.y, e, t, n)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next; while (i !== s); i.prevZ.nextZ = null, i.prevZ = null, Rp(i) } function Rp(s) { let e, t, n, i, r, o, a, c, l = 1; do { for (t = s, s = null, r = null, o = 0; t;) { for (o++, n = t, a = 0, e = 0; e < l && (a++, n = n.nextZ, !!n); e++); for (c = l; a > 0 || c > 0 && n;)a !== 0 && (c === 0 || !n || t.z <= n.z) ? (i = t, t = t.nextZ, a--) : (i = n, n = n.nextZ, c--), r ? r.nextZ = i : s = i, i.prevZ = r, r = i; t = n } r.nextZ = null, l *= 2 } while (o > 1); return s } function hs(s, e, t, n, i) { return s = 32767 * (s - t) * i, e = 32767 * (e - n) * i, s = (s | s << 8) & 16711935, s = (s | s << 4) & 252645135, s = (s | s << 2) & 858993459, s = (s | s << 1) & 1431655765, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, s | e << 1 } function Ip(s) { let e = s, t = s; do (e.x < t.x || e.x === t.x && e.y < t.y) && (t = e), e = e.next; while (e !== s); return t } function Qn(s, e, t, n, i, r, o, a) { return (i - o) * (e - a) - (s - o) * (r - a) >= 0 && (s - o) * (n - a) - (t - o) * (e - a) >= 0 && (t - o) * (r - a) - (i - o) * (n - a) >= 0 } function Fp(s, e) { return s.next.i !== e.i && s.prev.i !== e.i && !Np(s, e) && (Ti(s, e) && Ti(e, s) && zp(s, e) && (Ue(s.prev, s, e.prev) || Ue(s, e.prev, e)) || pr(s, e) && Ue(s.prev, s, s.next) > 0 && Ue(e.prev, e, e.next) > 0) } function Ue(s, e, t) { return (e.y - s.y) * (t.x - e.x) - (e.x - s.x) * (t.y - e.y) } function pr(s, e) { return s.x === e.x && s.y === e.y } function Ua(s, e, t, n) { const i = tr(Ue(s, e, t)), r = tr(Ue(s, e, n)), o = tr(Ue(t, n, s)), a = tr(Ue(t, n, e)); return !!(i !== r && o !== a || i === 0 && er(s, t, e) || r === 0 && er(s, n, e) || o === 0 && er(t, s, n) || a === 0 && er(t, e, n)) } function er(s, e, t) { return e.x <= Math.max(s.x, t.x) && e.x >= Math.min(s.x, t.x) && e.y <= Math.max(s.y, t.y) && e.y >= Math.min(s.y, t.y) } function tr(s) { return s > 0 ? 1 : s < 0 ? -1 : 0 } function Np(s, e) { let t = s; do { if (t.i !== s.i && t.next.i !== s.i && t.i !== e.i && t.next.i !== e.i && Ua(t, t.next, s, e)) return !0; t = t.next } while (t !== s); return !1 } function Ti(s, e) { return Ue(s.prev, s, s.next) < 0 ? Ue(s, e, s.next) >= 0 && Ue(s, s.prev, e) >= 0 : Ue(s, e, s.prev) < 0 || Ue(s, s.next, e) < 0 } function zp(s, e) { let t = s, n = !1; const i = (s.x + e.x) / 2, r = (s.y + e.y) / 2; do t.y > r != t.next.y > r && t.next.y !== t.y && i < (t.next.x - t.x) * (r - t.y) / (t.next.y - t.y) + t.x && (n = !n), t = t.next; while (t !== s); return n } function Ba(s, e) { const t = new ds(s.i, s.x, s.y), n = new ds(e.i, e.x, e.y), i = s.next, r = e.prev; return s.next = e, e.prev = s, t.next = i, i.prev = t, n.next = t, t.prev = n, r.next = n, n.prev = r, n } function jo(s, e, t, n) { const i = new ds(s, e, t); return n ? (i.next = n.next, i.prev = n, n.next.prev = i, n.next = i) : (i.prev = i, i.next = i), i } function Ai(s) { s.next.prev = s.prev, s.prev.next = s.next, s.prevZ && (s.prevZ.nextZ = s.nextZ), s.nextZ && (s.nextZ.prevZ = s.prevZ) } function ds(s, e, t) { this.i = s, this.x = e, this.y = t, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1 } function Op(s, e, t, n) { let i = 0; for (let r = e, o = t - n; r < t; r += n)i += (s[o] - s[r]) * (s[r + 1] + s[o + 1]), o = r; return i } class ni { static area(e) { const t = e.length; let n = 0; for (let i = t - 1, r = 0; r < t; i = r++)n += e[i].x * e[r].y - e[r].x * e[i].y; return n * .5 } static isClockWise(e) { return ni.area(e) < 0 } static triangulateShape(e, t) { const n = [], i = [], r = []; Zo(e), Jo(n, e); let o = e.length; t.forEach(Zo); for (let c = 0; c < t.length; c++)i.push(o), o += t[c].length, Jo(n, t[c]); const a = Mp.triangulate(n, i); for (let c = 0; c < a.length; c += 3)r.push(a.slice(c, c + 3)); return r } } function Zo(s) { const e = s.length; e > 2 && s[e - 1].equals(s[0]) && s.pop() } function Jo(s, e) { for (let t = 0; t < e.length; t++)s.push(e[t].x), s.push(e[t].y) } class As extends Lt { constructor(e = .5, t = 1, n = 8, i = 1, r = 0, o = Math.PI * 2) { super(), this.type = "RingGeometry", this.parameters = { innerRadius: e, outerRadius: t, thetaSegments: n, phiSegments: i, thetaStart: r, thetaLength: o }, n = Math.max(3, n), i = Math.max(1, i); const a = [], c = [], l = [], u = []; let h = e; const f = (t - e) / i, p = new L, g = new le; for (let m = 0; m <= i; m++) { for (let d = 0; d <= n; d++) { const _ = r + d / n * o; p.x = h * Math.cos(_), p.y = h * Math.sin(_), c.push(p.x, p.y, p.z), l.push(0, 0, 1), g.x = (p.x / t + 1) / 2, g.y = (p.y / t + 1) / 2, u.push(g.x, g.y) } h += f } for (let m = 0; m < i; m++) { const d = m * (n + 1); for (let _ = 0; _ < n; _++) { const v = _ + d, T = v, S = v + n + 1, y = v + n + 2, C = v + 1; a.push(T, S, C), a.push(S, y, C) } } this.setIndex(a), this.setAttribute("position", new Je(c, 3)), this.setAttribute("normal", new Je(l, 3)), this.setAttribute("uv", new Je(u, 2)) } static fromJSON(e) { return new As(e.innerRadius, e.outerRadius, e.thetaSegments, e.phiSegments, e.thetaStart, e.thetaLength) } } class Cs extends Lt { constructor(e = new rr([new le(0, .5), new le(-.5, -.5), new le(.5, -.5)]), t = 12) { super(), this.type = "ShapeGeometry", this.parameters = { shapes: e, curveSegments: t }; const n = [], i = [], r = [], o = []; let a = 0, c = 0; if (Array.isArray(e) === !1) l(e); else for (let u = 0; u < e.length; u++)l(e[u]), this.addGroup(a, c, u), a += c, c = 0; this.setIndex(n), this.setAttribute("position", new Je(i, 3)), this.setAttribute("normal", new Je(r, 3)), this.setAttribute("uv", new Je(o, 2)); function l(u) { const h = i.length / 3, f = u.extractPoints(t); let p = f.shape; const g = f.holes; ni.isClockWise(p) === !1 && (p = p.reverse()); for (let d = 0, _ = g.length; d < _; d++) { const v = g[d]; ni.isClockWise(v) === !0 && (g[d] = v.reverse()) } const m = ni.triangulateShape(p, g); for (let d = 0, _ = g.length; d < _; d++) { const v = g[d]; p = p.concat(v) } for (let d = 0, _ = p.length; d < _; d++) { const v = p[d]; i.push(v.x, v.y, 0), r.push(0, 0, 1), o.push(v.x, v.y) } for (let d = 0, _ = m.length; d < _; d++) { const v = m[d], T = v[0] + h, S = v[1] + h, y = v[2] + h; n.push(T, S, y), c += 3 } } } toJSON() { const e = super.toJSON(), t = this.parameters.shapes; return Up(t, e) } static fromJSON(e, t) { const n = []; for (let i = 0, r = e.shapes.length; i < r; i++) { const o = t[e.shapes[i]]; n.push(o) } return new Cs(n, e.curveSegments) } } function Up(s, e) { if (e.shapes = [], Array.isArray(s)) for (let t = 0, n = s.length; t < n; t++) { const i = s[t]; e.shapes.push(i.uuid) } else e.shapes.push(s.uuid); return e } class Ln extends Lt { constructor(e = 1, t = 32, n = 16, i = 0, r = Math.PI * 2, o = 0, a = Math.PI) { super(), this.type = "SphereGeometry", this.parameters = { radius: e, widthSegments: t, heightSegments: n, phiStart: i, phiLength: r, thetaStart: o, thetaLength: a }, t = Math.max(3, Math.floor(t)), n = Math.max(2, Math.floor(n)); const c = Math.min(o + a, Math.PI); let l = 0; const u = [], h = new L, f = new L, p = [], g = [], m = [], d = []; for (let _ = 0; _ <= n; _++) { const v = [], T = _ / n; let S = 0; _ == 0 && o == 0 ? S = .5 / t : _ == n && c == Math.PI && (S = -.5 / t); for (let y = 0; y <= t; y++) { const C = y / t; h.x = -e * Math.cos(i + C * r) * Math.sin(o + T * a), h.y = e * Math.cos(o + T * a), h.z = e * Math.sin(i + C * r) * Math.sin(o + T * a), g.push(h.x, h.y, h.z), f.copy(h).normalize(), m.push(f.x, f.y, f.z), d.push(C + S, 1 - T), v.push(l++) } u.push(v) } for (let _ = 0; _ < n; _++)for (let v = 0; v < t; v++) { const T = u[_][v + 1], S = u[_][v], y = u[_ + 1][v], C = u[_ + 1][v + 1]; (_ !== 0 || o > 0) && p.push(T, S, C), (_ !== n - 1 || c < Math.PI) && p.push(S, y, C) } this.setIndex(p), this.setAttribute("position", new Je(g, 3)), this.setAttribute("normal", new Je(m, 3)), this.setAttribute("uv", new Je(d, 2)) } static fromJSON(e) { return new Ln(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength) } } class Ls extends Pi { constructor(e) { super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new Ne(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ne(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ma, this.normalScale = new le(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e) } copy(e) { return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this } } const ar = { enabled: !1, files: {}, add: function (s, e) { this.enabled !== !1 && (this.files[s] = e) }, get: function (s) { if (this.enabled !== !1) return this.files[s] }, remove: function (s) { delete this.files[s] }, clear: function () { this.files = {} } }; class Bp { constructor(e, t, n) { const i = this; let r = !1, o = 0, a = 0, c; const l = []; this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function (u) { a++, r === !1 && i.onStart !== void 0 && i.onStart(u, o, a), r = !0 }, this.itemEnd = function (u) { o++, i.onProgress !== void 0 && i.onProgress(u, o, a), o === a && (r = !1, i.onLoad !== void 0 && i.onLoad()) }, this.itemError = function (u) { i.onError !== void 0 && i.onError(u) }, this.resolveURL = function (u) { return c ? c(u) : u }, this.setURLModifier = function (u) { return c = u, this }, this.addHandler = function (u, h) { return l.push(u, h), this }, this.removeHandler = function (u) { const h = l.indexOf(u); return h !== -1 && l.splice(h, 2), this }, this.getHandler = function (u) { for (let h = 0, f = l.length; h < f; h += 2) { const p = l[h], g = l[h + 1]; if (p.global && (p.lastIndex = 0), p.test(u)) return g } return null } } } const Gp = new Bp; class mr { constructor(e) { this.manager = e !== void 0 ? e : Gp, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {} } load() { } loadAsync(e, t) { const n = this; return new Promise(function (i, r) { n.load(e, i, t, r) }) } parse() { } setCrossOrigin(e) { return this.crossOrigin = e, this } setWithCredentials(e) { return this.withCredentials = e, this } setPath(e) { return this.path = e, this } setResourcePath(e) { return this.resourcePath = e, this } setRequestHeader(e) { return this.requestHeader = e, this } } const kt = {}; class kp extends Error { constructor(e, t) { super(e), this.response = t } } class Vp extends mr { constructor(e) { super(e) } load(e, t, n, i) { e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e); const r = ar.get(e); if (r !== void 0) return this.manager.itemStart(e), setTimeout(() => { t && t(r), this.manager.itemEnd(e) }, 0), r; if (kt[e] !== void 0) { kt[e].push({ onLoad: t, onProgress: n, onError: i }); return } kt[e] = [], kt[e].push({ onLoad: t, onProgress: n, onError: i }); const o = new Request(e, { headers: new Headers(this.requestHeader), credentials: this.withCredentials ? "include" : "same-origin" }), a = this.mimeType, c = this.responseType; fetch(o).then(l => { if (l.status === 200 || l.status === 0) { if (l.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || l.body === void 0 || l.body.getReader === void 0) return l; const u = kt[e], h = l.body.getReader(), f = l.headers.get("Content-Length"), p = f ? parseInt(f) : 0, g = p !== 0; let m = 0; const d = new ReadableStream({ start(_) { v(); function v() { h.read().then(({ done: T, value: S }) => { if (T) _.close(); else { m += S.byteLength; const y = new ProgressEvent("progress", { lengthComputable: g, loaded: m, total: p }); for (let C = 0, D = u.length; C < D; C++) { const x = u[C]; x.onProgress && x.onProgress(y) } _.enqueue(S), v() } }) } } }); return new Response(d) } else throw new kp(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`, l) }).then(l => { switch (c) { case "arraybuffer": return l.arrayBuffer(); case "blob": return l.blob(); case "document": return l.text().then(u => new DOMParser().parseFromString(u, a)); case "json": return l.json(); default: if (a === void 0) return l.text(); { const h = /charset="?([^;"\s]*)"?/i.exec(a), f = h && h[1] ? h[1].toLowerCase() : void 0, p = new TextDecoder(f); return l.arrayBuffer().then(g => p.decode(g)) } } }).then(l => { ar.add(e, l); const u = kt[e]; delete kt[e]; for (let h = 0, f = u.length; h < f; h++) { const p = u[h]; p.onLoad && p.onLoad(l) } }).catch(l => { const u = kt[e]; if (u === void 0) throw this.manager.itemError(e), l; delete kt[e]; for (let h = 0, f = u.length; h < f; h++) { const p = u[h]; p.onError && p.onError(l) } this.manager.itemError(e) }).finally(() => { this.manager.itemEnd(e) }), this.manager.itemStart(e) } setResponseType(e) { return this.responseType = e, this } setMimeType(e) { return this.mimeType = e, this } } class Hp extends mr { constructor(e) { super(e) } load(e, t, n, i) { this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e); const r = this, o = ar.get(e); if (o !== void 0) return r.manager.itemStart(e), setTimeout(function () { t && t(o), r.manager.itemEnd(e) }, 0), o; const a = wi("img"); function c() { u(), ar.add(e, this), t && t(this), r.manager.itemEnd(e) } function l(h) { u(), i && i(h), r.manager.itemError(e), r.manager.itemEnd(e) } function u() { a.removeEventListener("load", c, !1), a.removeEventListener("error", l, !1) } return a.addEventListener("load", c, !1), a.addEventListener("error", l, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), r.manager.itemStart(e), a.src = e, a } } class Di extends mr { constructor(e) { super(e) } load(e, t, n, i) { const r = new yt, o = new Hp(this.manager); return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(e, function (a) { r.image = a, r.needsUpdate = !0, t !== void 0 && t(r) }, n, i), r } } class Ga extends Mt { constructor(e, t = 1) { super(), this.isLight = !0, this.type = "Light", this.color = new Ne(e), this.intensity = t } dispose() { } copy(e, t) { return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this } toJSON(e) { const t = super.toJSON(e); return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t } } const $o = new He, Ko = new L, Qo = new L; class Wp { constructor(e) { this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new le(512, 512), this.map = null, this.mapPass = null, this.matrix = new He, this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new ys, this._frameExtents = new le(1, 1), this._viewportCount = 1, this._viewports = [new ze(0, 0, 1, 1)] } getViewportCount() { return this._viewportCount } getFrustum() { return this._frustum } updateMatrices(e) { const t = this.camera, n = this.matrix; Ko.setFromMatrixPosition(e.matrixWorld), t.position.copy(Ko), Qo.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(Qo), t.updateMatrixWorld(), $o.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix($o), n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), n.multiply(t.projectionMatrix), n.multiply(t.matrixWorldInverse) } getViewport(e) { return this._viewports[e] } getFrameExtents() { return this._frameExtents } dispose() { this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose() } copy(e) { return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this } clone() { return new this.constructor().copy(this) } toJSON() { const e = {}; return this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e } } const ea = new He, pi = new L, es = new L; class Xp extends Wp { constructor() { super(new ft(90, 1, .5, 500)), this.isPointLightShadow = !0, this._frameExtents = new le(4, 2), this._viewportCount = 6, this._viewports = [new ze(2, 1, 1, 1), new ze(0, 1, 1, 1), new ze(3, 1, 1, 1), new ze(1, 1, 1, 1), new ze(3, 0, 1, 1), new ze(1, 0, 1, 1)], this._cubeDirections = [new L(1, 0, 0), new L(-1, 0, 0), new L(0, 0, 1), new L(0, 0, -1), new L(0, 1, 0), new L(0, -1, 0)], this._cubeUps = [new L(0, 1, 0), new L(0, 1, 0), new L(0, 1, 0), new L(0, 1, 0), new L(0, 0, 1), new L(0, 0, -1)] } updateMatrices(e, t = 0) { const n = this.camera, i = this.matrix, r = e.distance || n.far; r !== n.far && (n.far = r, n.updateProjectionMatrix()), pi.setFromMatrixPosition(e.matrixWorld), n.position.copy(pi), es.copy(n.position), es.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(es), n.updateMatrixWorld(), i.makeTranslation(-pi.x, -pi.y, -pi.z), ea.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(ea) } } class qp extends Ga { constructor(e, t, n = 0, i = 1) { super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new Xp } get power() { return this.intensity * 4 * Math.PI } set power(e) { this.intensity = e / (4 * Math.PI) } dispose() { this.shadow.dispose() } copy(e, t) { return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this } } class ka extends Ga { constructor(e, t) { super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight" } } class Yp { constructor(e, t, n = 0, i = 1 / 0) { this.ray = new Ma(e, t), this.near = n, this.far = i, this.camera = null, this.layers = new vs, this.params = { Mesh: {}, Line: { threshold: 1 }, LOD: {}, Points: { threshold: 1 }, Sprite: {} } } set(e, t) { this.ray.set(e, t) } setFromCamera(e, t) { t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, .5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type: " + t.type) } intersectObject(e, t = !0, n = []) { return fs(e, this, n, t), n.sort(ta), n } intersectObjects(e, t = !0, n = []) { for (let i = 0, r = e.length; i < r; i++)fs(e[i], this, n, t); return n.sort(ta), n } } function ta(s, e) { return s.distance - e.distance } function fs(s, e, t, n) { if (s.layers.test(e.layers) && s.raycast(e, t), n === !0) { const i = s.children; for (let r = 0, o = i.length; r < o; r++)fs(i[r], e, t, !0) } } class na { constructor(e = 1, t = 0, n = 0) { return this.radius = e, this.phi = t, this.theta = n, this } set(e, t, n) { return this.radius = e, this.phi = t, this.theta = n, this } copy(e) { return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this } makeSafe() { return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this } setFromVector3(e) { return this.setFromCartesianCoords(e.x, e.y, e.z) } setFromCartesianCoords(e, t, n) { return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(tt(t / this.radius, -1, 1))), this } clone() { return new this.constructor().copy(this) } } class jp { constructor() { this.type = "ShapePath", this.color = new Ne, this.subPaths = [], this.currentPath = null } moveTo(e, t) { return this.currentPath = new us, this.subPaths.push(this.currentPath), this.currentPath.moveTo(e, t), this } lineTo(e, t) { return this.currentPath.lineTo(e, t), this } quadraticCurveTo(e, t, n, i) { return this.currentPath.quadraticCurveTo(e, t, n, i), this } bezierCurveTo(e, t, n, i, r, o) { return this.currentPath.bezierCurveTo(e, t, n, i, r, o), this } splineThru(e) { return this.currentPath.splineThru(e), this } toShapes(e, t) { function n(v) { const T = []; for (let S = 0, y = v.length; S < y; S++) { const C = v[S], D = new rr; D.curves = C.curves, T.push(D) } return T } function i(v, T) { const S = T.length; let y = !1; for (let C = S - 1, D = 0; D < S; C = D++) { let x = T[C], A = T[D], I = A.x - x.x, N = A.y - x.y; if (Math.abs(N) > Number.EPSILON) { if (N < 0 && (x = T[D], I = -I, A = T[C], N = -N), v.y < x.y || v.y > A.y) continue; if (v.y === x.y) { if (v.x === x.x) return !0 } else { const J = N * (v.x - x.x) - I * (v.y - x.y); if (J === 0) return !0; if (J < 0) continue; y = !y } } else { if (v.y !== x.y) continue; if (A.x <= v.x && v.x <= x.x || x.x <= v.x && v.x <= A.x) return !0 } } return y } const r = ni.isClockWise, o = this.subPaths; if (o.length === 0) return []; if (t === !0) return n(o); let a, c, l; const u = []; if (o.length === 1) return c = o[0], l = new rr, l.curves = c.curves, u.push(l), u; let h = !r(o[0].getPoints()); h = e ? !h : h; const f = [], p = []; let g = [], m = 0, d; p[m] = void 0, g[m] = []; for (let v = 0, T = o.length; v < T; v++)c = o[v], d = c.getPoints(), a = r(d), a = e ? !a : a, a ? (!h && p[m] && m++, p[m] = { s: new rr, p: d }, p[m].s.curves = c.curves, h && m++, g[m] = []) : g[m].push({ h: c, p: d[0] }); if (!p[0]) return n(o); if (p.length > 1) { let v = !1, T = 0; for (let S = 0, y = p.length; S < y; S++)f[S] = []; for (let S = 0, y = p.length; S < y; S++) { const C = g[S]; for (let D = 0; D < C.length; D++) { const x = C[D]; let A = !0; for (let I = 0; I < p.length; I++)i(x.p, p[I].p) && (S !== I && T++, A ? (A = !1, f[I].push(x)) : v = !0); A && f[S].push(x) } } T > 0 && v === !1 && (g = f) } let _; for (let v = 0, T = p.length; v < T; v++) { l = p[v].s, u.push(l), _ = g[v]; for (let S = 0, y = _.length; S < y; S++)l.holes.push(_[S].h) } return u } } typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: gs } })); typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = gs); class Zp extends mr { constructor(e) { super(e) } load(e, t, n, i) { const r = this, o = new Vp(this.manager); o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(r.withCredentials), o.load(e, function (a) { let c; try { c = JSON.parse(a) } catch { console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), c = JSON.parse(a.substring(65, a.length - 2)) } const l = r.parse(c); t && t(l) }, n, i) } parse(e) { return new Jp(e) } } class Jp { constructor(e) { this.isFont = !0, this.type = "Font", this.data = e } generateShapes(e, t = 100) { const n = [], i = $p(e, t, this.data); for (let r = 0, o = i.length; r < o; r++)n.push(...i[r].toShapes()); return n } } function $p(s, e, t) {
	const n = Array.from(s), i = e / t.resolution, r = (t.boundingBox.yMax - t.boundingBox.yMin + t.underlineThickness) * i, o = []; let a = 0, c = 0; for (let l = 0; l < n.length; l++) {
		const u = n[l]; if (u === `
`) a = 0, c -= r; else { const h = Kp(u, i, a, c, t); a += h.offsetX, o.push(h.path) }
	} return o
} function Kp(s, e, t, n, i) { const r = i.glyphs[s] || i.glyphs["?"]; if (!r) { console.error('THREE.Font: character "' + s + '" does not exists in font family ' + i.familyName + "."); return } const o = new jp; let a, c, l, u, h, f, p, g; if (r.o) { const m = r._cachedOutline || (r._cachedOutline = r.o.split(" ")); for (let d = 0, _ = m.length; d < _;)switch (m[d++]) { case "m": a = m[d++] * e + t, c = m[d++] * e + n, o.moveTo(a, c); break; case "l": a = m[d++] * e + t, c = m[d++] * e + n, o.lineTo(a, c); break; case "q": l = m[d++] * e + t, u = m[d++] * e + n, h = m[d++] * e + t, f = m[d++] * e + n, o.quadraticCurveTo(h, f, l, u); break; case "b": l = m[d++] * e + t, u = m[d++] * e + n, h = m[d++] * e + t, f = m[d++] * e + n, p = m[d++] * e + t, g = m[d++] * e + n, o.bezierCurveTo(h, f, p, g, l, u); break } } return { offsetX: r.ha * e, path: o } } function ps(s, e, t) { let n = function (i) { let r = 0, o = 0; return typeof window.innerWidth < "u" ? (r = window.innerWidth, o = window.innerHeight) : document.documentElement.clientWidth == 0 ? (r = document.body.clientWidth, o = document.body.clientHeight) : (r = document.documentElement.clientWidth, o = document.documentElement.clientHeight), { width: r - (i ? r - document.body.offsetWidth + 1 : 0), height: o } }; if (s.background) { let i = n(!0), r = e / t / (i.width / i.height); s.background.offset.x = r > 1 ? (1 - 1 / r) / 2 : 0, s.background.offset.y = r > 1 ? 0 : (1 - r) / 2, s.background.repeat.x = r > 1 ? 1 / r : 1, s.background.repeat.y = r > 1 ? 1 : r } } const ia = { type: "change" }, ts = { type: "start" }, ra = { type: "end" }; class Qp extends Pn { constructor(e, t) { super(), t === void 0 && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), t === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), this.object = e, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new L, this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = .05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: Nn.ROTATE, MIDDLE: Nn.DOLLY, RIGHT: Nn.PAN }, this.touches = { ONE: zn.ROTATE, TWO: zn.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function () { return a.phi }, this.getAzimuthalAngle = function () { return a.theta }, this.getDistance = function () { return this.object.position.distanceTo(this.target) }, this.listenToKeyEvents = function (b) { b.addEventListener("keydown", ct), this._domElementKeyEvents = b }, this.saveState = function () { n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom }, this.reset = function () { n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(ia), n.update(), r = i.NONE }, this.update = function () { const b = new L, j = new An().setFromUnitVectors(e.up, new L(0, 1, 0)), ne = j.clone().invert(), ae = new L, se = new An, ge = 2 * Math.PI; return function () { const Oe = n.object.position; b.copy(Oe).sub(n.target), b.applyQuaternion(j), a.setFromVector3(b), n.autoRotate && r === i.NONE && A(D()), n.enableDamping ? (a.theta += c.theta * n.dampingFactor, a.phi += c.phi * n.dampingFactor) : (a.theta += c.theta, a.phi += c.phi); let P = n.minAzimuthAngle, ie = n.maxAzimuthAngle; return isFinite(P) && isFinite(ie) && (P < -Math.PI ? P += ge : P > Math.PI && (P -= ge), ie < -Math.PI ? ie += ge : ie > Math.PI && (ie -= ge), P <= ie ? a.theta = Math.max(P, Math.min(ie, a.theta)) : a.theta = a.theta > (P + ie) / 2 ? Math.max(P, a.theta) : Math.min(ie, a.theta)), a.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, a.phi)), a.makeSafe(), a.radius *= l, a.radius = Math.max(n.minDistance, Math.min(n.maxDistance, a.radius)), n.enableDamping === !0 ? n.target.addScaledVector(u, n.dampingFactor) : n.target.add(u), b.setFromSpherical(a), b.applyQuaternion(ne), Oe.copy(n.target).add(b), n.object.lookAt(n.target), n.enableDamping === !0 ? (c.theta *= 1 - n.dampingFactor, c.phi *= 1 - n.dampingFactor, u.multiplyScalar(1 - n.dampingFactor)) : (c.set(0, 0, 0), u.set(0, 0, 0)), l = 1, h || ae.distanceToSquared(n.object.position) > o || 8 * (1 - se.dot(n.object.quaternion)) > o ? (n.dispatchEvent(ia), ae.copy(n.object.position), se.copy(n.object.quaternion), h = !1, !0) : !1 } }(), this.dispose = function () { n.domElement.removeEventListener("contextmenu", k), n.domElement.removeEventListener("pointerdown", We), n.domElement.removeEventListener("pointercancel", lt), n.domElement.removeEventListener("wheel", pt), n.domElement.removeEventListener("pointermove", et), n.domElement.removeEventListener("pointerup", Ye), n._domElementKeyEvents !== null && n._domElementKeyEvents.removeEventListener("keydown", ct) }; const n = this, i = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_PAN: 4, TOUCH_DOLLY_PAN: 5, TOUCH_DOLLY_ROTATE: 6 }; let r = i.NONE; const o = 1e-6, a = new na, c = new na; let l = 1; const u = new L; let h = !1; const f = new le, p = new le, g = new le, m = new le, d = new le, _ = new le, v = new le, T = new le, S = new le, y = [], C = {}; function D() { return 2 * Math.PI / 60 / 60 * n.autoRotateSpeed } function x() { return Math.pow(.95, n.zoomSpeed) } function A(b) { c.theta -= b } function I(b) { c.phi -= b } const N = function () { const b = new L; return function (ne, ae) { b.setFromMatrixColumn(ae, 0), b.multiplyScalar(-ne), u.add(b) } }(), J = function () { const b = new L; return function (ne, ae) { n.screenSpacePanning === !0 ? b.setFromMatrixColumn(ae, 1) : (b.setFromMatrixColumn(ae, 0), b.crossVectors(n.object.up, b)), b.multiplyScalar(ne), u.add(b) } }(), Z = function () { const b = new L; return function (ne, ae) { const se = n.domElement; if (n.object.isPerspectiveCamera) { const ge = n.object.position; b.copy(ge).sub(n.target); let Ee = b.length(); Ee *= Math.tan(n.object.fov / 2 * Math.PI / 180), N(2 * ne * Ee / se.clientHeight, n.object.matrix), J(2 * ae * Ee / se.clientHeight, n.object.matrix) } else n.object.isOrthographicCamera ? (N(ne * (n.object.right - n.object.left) / n.object.zoom / se.clientWidth, n.object.matrix), J(ae * (n.object.top - n.object.bottom) / n.object.zoom / se.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = !1) } }(); function R(b) { n.object.isPerspectiveCamera ? l /= b : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom * b)), n.object.updateProjectionMatrix(), h = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1) } function W(b) { n.object.isPerspectiveCamera ? l *= b : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / b)), n.object.updateProjectionMatrix(), h = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1) } function B(b) { f.set(b.clientX, b.clientY) } function Y(b) { v.set(b.clientX, b.clientY) } function q(b) { m.set(b.clientX, b.clientY) } function O(b) { p.set(b.clientX, b.clientY), g.subVectors(p, f).multiplyScalar(n.rotateSpeed); const j = n.domElement; A(2 * Math.PI * g.x / j.clientHeight), I(2 * Math.PI * g.y / j.clientHeight), f.copy(p), n.update() } function V(b) { T.set(b.clientX, b.clientY), S.subVectors(T, v), S.y > 0 ? R(x()) : S.y < 0 && W(x()), v.copy(T), n.update() } function ee(b) { d.set(b.clientX, b.clientY), _.subVectors(d, m).multiplyScalar(n.panSpeed), Z(_.x, _.y), m.copy(d), n.update() } function K(b) { b.deltaY < 0 ? W(x()) : b.deltaY > 0 && R(x()), n.update() } function $(b) { let j = !1; switch (b.code) { case n.keys.UP: Z(0, n.keyPanSpeed), j = !0; break; case n.keys.BOTTOM: Z(0, -n.keyPanSpeed), j = !0; break; case n.keys.LEFT: Z(n.keyPanSpeed, 0), j = !0; break; case n.keys.RIGHT: Z(-n.keyPanSpeed, 0), j = !0; break }j && (b.preventDefault(), n.update()) } function de() { if (y.length === 1) f.set(y[0].pageX, y[0].pageY); else { const b = .5 * (y[0].pageX + y[1].pageX), j = .5 * (y[0].pageY + y[1].pageY); f.set(b, j) } } function _e() { if (y.length === 1) m.set(y[0].pageX, y[0].pageY); else { const b = .5 * (y[0].pageX + y[1].pageX), j = .5 * (y[0].pageY + y[1].pageY); m.set(b, j) } } function H() { const b = y[0].pageX - y[1].pageX, j = y[0].pageY - y[1].pageY, ne = Math.sqrt(b * b + j * j); v.set(0, ne) } function Pe() { n.enableZoom && H(), n.enablePan && _e() } function pe() { n.enableZoom && H(), n.enableRotate && de() } function xe(b) { if (y.length == 1) p.set(b.pageX, b.pageY); else { const ne = me(b), ae = .5 * (b.pageX + ne.x), se = .5 * (b.pageY + ne.y); p.set(ae, se) } g.subVectors(p, f).multiplyScalar(n.rotateSpeed); const j = n.domElement; A(2 * Math.PI * g.x / j.clientHeight), I(2 * Math.PI * g.y / j.clientHeight), f.copy(p) } function he(b) { if (y.length === 1) d.set(b.pageX, b.pageY); else { const j = me(b), ne = .5 * (b.pageX + j.x), ae = .5 * (b.pageY + j.y); d.set(ne, ae) } _.subVectors(d, m).multiplyScalar(n.panSpeed), Z(_.x, _.y), m.copy(d) } function Re(b) { const j = me(b), ne = b.pageX - j.x, ae = b.pageY - j.y, se = Math.sqrt(ne * ne + ae * ae); T.set(0, se), S.set(0, Math.pow(T.y / v.y, n.zoomSpeed)), R(S.y), v.copy(T) } function Me(b) { n.enableZoom && Re(b), n.enablePan && he(b) } function fe(b) { n.enableZoom && Re(b), n.enableRotate && xe(b) } function We(b) { n.enabled !== !1 && (y.length === 0 && (n.domElement.setPointerCapture(b.pointerId), n.domElement.addEventListener("pointermove", et), n.domElement.addEventListener("pointerup", Ye)), Q(b), b.pointerType === "touch" ? E(b) : je(b)) } function et(b) { n.enabled !== !1 && (b.pointerType === "touch" ? M(b) : Ie(b)) } function Ye(b) { te(b), y.length === 0 && (n.domElement.releasePointerCapture(b.pointerId), n.domElement.removeEventListener("pointermove", et), n.domElement.removeEventListener("pointerup", Ye)), n.dispatchEvent(ra), r = i.NONE } function lt(b) { te(b) } function je(b) { let j; switch (b.button) { case 0: j = n.mouseButtons.LEFT; break; case 1: j = n.mouseButtons.MIDDLE; break; case 2: j = n.mouseButtons.RIGHT; break; default: j = -1 }switch (j) { case Nn.DOLLY: if (n.enableZoom === !1) return; Y(b), r = i.DOLLY; break; case Nn.ROTATE: if (b.ctrlKey || b.metaKey || b.shiftKey) { if (n.enablePan === !1) return; q(b), r = i.PAN } else { if (n.enableRotate === !1) return; B(b), r = i.ROTATE } break; case Nn.PAN: if (b.ctrlKey || b.metaKey || b.shiftKey) { if (n.enableRotate === !1) return; B(b), r = i.ROTATE } else { if (n.enablePan === !1) return; q(b), r = i.PAN } break; default: r = i.NONE }r !== i.NONE && n.dispatchEvent(ts) } function Ie(b) { switch (r) { case i.ROTATE: if (n.enableRotate === !1) return; O(b); break; case i.DOLLY: if (n.enableZoom === !1) return; V(b); break; case i.PAN: if (n.enablePan === !1) return; ee(b); break } } function pt(b) { n.enabled === !1 || n.enableZoom === !1 || r !== i.NONE || (b.preventDefault(), n.dispatchEvent(ts), K(b), n.dispatchEvent(ra)) } function ct(b) { n.enabled === !1 || n.enablePan === !1 || $(b) } function E(b) { switch (oe(b), y.length) { case 1: switch (n.touches.ONE) { case zn.ROTATE: if (n.enableRotate === !1) return; de(), r = i.TOUCH_ROTATE; break; case zn.PAN: if (n.enablePan === !1) return; _e(), r = i.TOUCH_PAN; break; default: r = i.NONE }break; case 2: switch (n.touches.TWO) { case zn.DOLLY_PAN: if (n.enableZoom === !1 && n.enablePan === !1) return; Pe(), r = i.TOUCH_DOLLY_PAN; break; case zn.DOLLY_ROTATE: if (n.enableZoom === !1 && n.enableRotate === !1) return; pe(), r = i.TOUCH_DOLLY_ROTATE; break; default: r = i.NONE }break; default: r = i.NONE }r !== i.NONE && n.dispatchEvent(ts) } function M(b) { switch (oe(b), r) { case i.TOUCH_ROTATE: if (n.enableRotate === !1) return; xe(b), n.update(); break; case i.TOUCH_PAN: if (n.enablePan === !1) return; he(b), n.update(); break; case i.TOUCH_DOLLY_PAN: if (n.enableZoom === !1 && n.enablePan === !1) return; Me(b), n.update(); break; case i.TOUCH_DOLLY_ROTATE: if (n.enableZoom === !1 && n.enableRotate === !1) return; fe(b), n.update(); break; default: r = i.NONE } } function k(b) { n.enabled !== !1 && b.preventDefault() } function Q(b) { y.push(b) } function te(b) { delete C[b.pointerId]; for (let j = 0; j < y.length; j++)if (y[j].pointerId == b.pointerId) { y.splice(j, 1); return } } function oe(b) { let j = C[b.pointerId]; j === void 0 && (j = new le, C[b.pointerId] = j), j.set(b.pageX, b.pageY) } function me(b) { const j = b.pointerId === y[0].pointerId ? y[1] : y[0]; return C[j.pointerId] } n.domElement.addEventListener("contextmenu", k), n.domElement.addEventListener("pointerdown", We), n.domElement.addEventListener("pointercancel", lt), n.domElement.addEventListener("wheel", pt, { passive: !1 }), this.update() } } const Tt = new Ia, Ps = new Ia, Va = new Ra({ canvas: document.querySelector("#bg") }), ms = new ft(75, window.innerWidth / window.innerHeight, .1, 1e3), em = new Zp, Ds = [], _i = [], tm = new ka(16777215, .3), nm = new qp("#ffffff", 2, 1e3), im = new Qp(ms, Va.domElement), rm = new Yp, sm = new le; Tt.add(new ka(16777215, 1)); function om() { let s = new Image; s.onload = function () { Tt.background = new Di().load(s.src), ps(Tt, s.width, s.height) }, gsap.to(ms.position, { duration: 1.5, z: 75 }), Vt("earth", 1e3, [20, 20, 20]), Vt("venus", 2e3, [20, 20, 20]), Vt("mars", 3e3, [15, 15, 15]), Vt("jupiter", 4e3, [20, 20, 20]), Vt("mercury", 5e3, [20, 20, 20]), Vt("saturn", 6e3, [20, 20, 20]), Vt("neptune", 7e3, [20, 20, 20]), Vt("uranus", 8e3, [20, 20, 20]), Vt("sun", 3500, [75, 75, 75]); let e = lm(); Tt.add(e), _i.push(e); let t = am(); Tt.add(t), _i.push(t); for (let a of _i) a.name === "earth" && a.add(t); pn("me.png", 0, [14, 15, 0]), pn("me2.jpg", 0, [14, 15, 0]), em.load("a.json", function (a) { Ht(a, "Le monde ne tourne pas autour de toi, ha si !", -1, [0, -15, 0]), Ht(a, "- Bellotto Eric", -1, [0, -18, 0]), Ht(a, "Cinematic", -1, [-25, 0, 0]), Ht(a, "Sound on/off", -1, [25, 0, 0]), pn("linkedin.png", 0, [8, 8, 8]), Ht(a, "parcours", 0), pn("github.png", 960, [3, 10, 10], "cone"), Ht(a, "Github", 960), pn("/planetTexture/earth.jpg", 480, [6.5, 64, 32], "sphere"), Ht(a, "xpert-agro.fr", 480), pn("/planetTexture/moon.jpg", 1440, [6.5, 64, 32], "sphere"), Ht(a, "pomatobot.com", 1440), pn("/planetTexture/neptune.jpg", 1920, [8, 8, 5, 3], "cylindre"), Ht(a, "Contact", 1920) }); for (let a = 0; a < 1e3; a++) { const c = new Ln(.08, 6, 6), l = new Ls({ color: 16777215 }), u = new Qe(c, l), [h, f, p] = Array(3).fill().map(() => ac.randFloatSpread(100)); u.position.set(h, f, p), Tt.add(u) } for (var n = -1e3; n < 1e3; n += 3) { var i = new Ln(.5, 32, 32), r = new qt({ color: 16777215 }), o = new Qe(i, r); o.position.x = Math.random() * 1e3 - 500, o.position.y = Math.random() * 1e3 - 500, o.position.z = n, o.scale.x = o.scale.y = 2, Tt.add(o) } return [Tt, Ps, Va, ms, Ds, tm, nm, im, rm, sm, _i] } function am() { const s = new Di().load("/planetTexture/moon.jpg"), e = new Ln(6.5, 64, 32), t = new Ls({ map: s }); let n = new Qe(e, t); return n.name = "moon", n.orderTime = 0, n } function lm() { var e = new Di().load("/planetTexture/saturnRIng.png"); let t = .98; var n = new As(30.4 * t, 60.5 * t, 60 * 32, 120, 0, Math.PI * 2), i = new qt({ map: e, side: ln, transparent: !0, opacity: .7 }); let r = new Qe(n, i); return r.name = "ring", r } function Vt(s, e, t) { const n = new Di().load("/planetTexture/" + s + ".jpg"), i = new Ln(t[0], t[1], t[2]), r = new Ls({ color: 16777215, map: n }), o = new Qe(i, r); o.orderTime = e, o.name = s, s !== "sun" ? Ps.add(o) : Tt.add(o), _i.push(o) } function Ht(s, e, t, n) { const i = new qt({ color: "#ffffff", transparent: !0, opacity: .8, side: ln }); let r; const o = s.generateShapes(e, 3), a = new Cs(o); a.computeBoundingBox(); const c = -.5 * (a.boundingBox.max.x - a.boundingBox.min.x); a.translate(c, 0, 0), r = new Qe(a, i), r.position.x = 50, r.position.y = -10, r.position.z = 0, r.lookAtMe = 1, r.isText = 1, r.orderTime = t, r.name = e, n && (r.position.x = n[0], r.position.y = n[1], r.position.z = n[2]), Ds.push(r), Tt.add(r) } function pn(s, e, t, n) { const i = new Di().load(s); let r; n === "sphere" ? r = new Qe(new Ln(t[0], t[1], t[2]), new qt({ map: i })) : n === "cone" ? r = new Qe(new Ts(t[0], t[1], t[2]), new qt({ map: i })) : n === "cylindre" ? r = new Qe(new fr(t[0], t[1], t[2], t[3]), new qt({ map: i })) : r = new Qe(new ai(t[0], t[1], t[2]), new qt({ map: i })), s !== "me.png" && s !== "me2.jpg" && (r.rotation.x = sa(1, 360), r.rotation.y = sa(1, 360)), r.name = s, r.orderTime = e, s === "me2.jpg" && (r.position.z = -.05), s === "me.png" || s === "me2.jpg" ? Ps.add(r) : (Tt.add(r), Ds.push(r)) } function sa(s, e) { return Math.random() * (e - s) + s } function cm(s, e, t, n, i, r) { document.getElementById("goHome").addEventListener("click", function (a) { document.getElementById("parcours").classList.add("hidden"), document.getElementById("github").classList.add("hidden"), document.getElementById("me").classList.add("hidden"), r.enabled = !1, setTimeout(() => { r.enabled = !0 }, 1500), gsap.to(e.position, { duration: 1.5, z: 75 }) }, !1), window.addEventListener("resize", a => { const c = window.innerWidth, l = window.innerHeight; t.setSize(c, l), e.aspect = c / l, e.updateProjectionMatrix(), ps(n, img.width, img.height), ps(i, img.width, img.height) }), window.addEventListener("pointerdown", a => { s.x = a.clientX / window.innerWidth * 2 - 1, s.y = -(a.clientY / window.innerHeight) * 2 + 1, window.clicked = 1, setTimeout(() => { window.clicked = 0 }, 100) }), window.addEventListener("pointermove", a => { s.x = a.clientX / window.innerWidth * 2 - 1, s.y = -(a.clientY / window.innerHeight) * 2 + 1 }); let o = 0; setTimeout(() => { o ? oa() : o = 1 }, 1e3 * 3), window.addEventListener("load", function (a) { o ? oa() : o = 1 }), document.getElementById("buttonGithub").addEventListener("click", function (a) { toggleGithub() }, !1) } window.toggleGithub = function () { document.getElementById("buttonGithub").classList.toString().includes("active") ? document.getElementById("buttonGithub").classList.remove("active") : document.getElementById("buttonGithub").classList.add("active"), document.getElementById("titleGithub").classList.toString().includes("active") ? document.getElementById("titleGithub").classList.remove("active") : document.getElementById("titleGithub").classList.add("active"), document.getElementById("navGithub").classList.toString().includes("active") ? document.getElementById("navGithub").classList.remove("active") : document.getElementById("navGithub").classList.add("active") }; function oa() { document.getElementById("parentLoader").classList.add("hidden"), document.getElementById("bg").classList.remove("hidden"), setTimeout(() => { localStorage.getItem("cinematicated") || (localStorage.setItem("cinematicated", 1), cinematic()) }, 2e3) } function um() { window.player = void 0; const s = document.createElement("script"), e = document.getElementsByTagName("script")[0]; e.parentNode.insertBefore(s, e), s.src = "https://www.youtube.com/iframe_api", s.onload = function () { setTimeout(() => { window.player = new YT.Player("player", { height: "390", width: "640", videoId: "Qt0-9mO-ZXY", playerVars: { playsinline: 1 }, events: { onReady: n, onStateChange: t } }) }, 1e3) }; function t(i) { } function n(i) { console.log("Player ready"), window.player.playVideo() } } window.clicked = 0; let _n = 1; const [lr, Rs, an, Le, hm, dm, rn, sn, aa, Ha, la] = om(); cm(Ha, Le, an, lr, Rs, sn); um(); an.setPixelRatio(window.devicePixelRatio); an.setSize(window.innerHeight, window.innerHeight); an.render(lr, Le); an.autoClear = !1; rn.position.set(0, 0, 100); Rs.add(rn); setInterval(() => { _n *= -1 }, 1e3 * 15); let cr = 0; setInterval(() => { cr && (cr = 0) }, 200); (function s() { requestAnimationFrame(s); let e = Date.now() * 5e-4, t, n; for (let r of la) r.name === "ring" && (t = r), r.name === "moon" && (n = r); for (let r of la) { if (r.name === "ring" || r.name === "moon") continue; let o = e; r.orderTime && (o = e + r.orderTime), r.position.x = Math.cos(o * 10 / 100) * 50 * 5 + r.orderTime / 100, r.position.y = Math.cos(o * 7 / 100) * 50 * 5 + r.orderTime / 100, r.position.z = Math.cos(o * 8 / 100) * 50 * 5 + r.orderTime / 100, r.rotation.x += .0015, r.rotation.y += .0015, r.name === "saturn" && (t.position.x = r.position.x, t.position.y = r.position.y, t.position.z = r.position.z, t.rotation.x += .005, t.rotation.y += .005), r.name === "earth" && (n.position.set(0, 0, 0), n.rotateY(.01), n.translateX(50), n.rotation.x += .005, n.rotation.y += .005), r.name === "sun" && (rn.position.y = r.position.y, rn.position.x = r.position.x, rn.position.z = r.position.z, rn.rotation.y = r.rotation.y, rn.rotation.x = r.rotation.x) } for (let r of hm) { let o = e; r.orderTime && (o = e + r.orderTime), r.orderTime !== -1 && (r.position.x = Math.sin(o * .15) * 50), r.lookAtMe ? (r.lookAt(Le.position), r.orderTime !== -1 && (r.position.y = Math.cos(o * .15) * 50 - 10)) : (r.rotation.x += 5 / 1e3 * _n, r.rotation.y += 5 / 1e3 * _n, r.position.y = Math.cos(o * .15) * 50) } aa.setFromCamera(Ha, Le); const i = aa.intersectObjects(lr.children); for (let r = 0; r < i.length; r++) { let o = i[r].object.name; o.length && clicked && sn.enabled && (o === "/planetTexture/moon.jpg" ? window.open("https://pomatobot.com") : o === "/planetTexture/earth.jpg" ? window.open("https://xpert-agro.fr") : o === "Cinematic" ? cinematic() : o.includes("on/off") && !cr ? (cr = 1, window.player.isMuted() ? window.player.unMute() : window.player.mute()) : o !== "ring" && o !== "moon" && o !== "sun" && !i[r].object.isText && (sn.enabled = !1, clicked = 0, setTimeout(() => { document.getElementById("presentation").classList.remove("hidden"), o.includes("linkedin") ? document.getElementById("parcours").classList.remove("hidden") : o.includes("github") ? (document.getElementById("github").classList.remove("hidden"), document.getElementById("buttonGithub").classList.remove("active"), document.getElementById("titleGithub").classList.remove("active"), document.getElementById("navGithub").classList.remove("active"), setTimeout(() => { toggleGithub() }, 750)) : o.includes("moon") ? document.getElementById("moon").classList.remove("hidden") : o.includes("neptune") && document.getElementById("me").classList.remove("hidden"), sn.enabled = !0 }, 1e3), sn.enabled = !1, gsap.to(Le.position, { duration: 1.5, z: 1e3 }))) } Le.position.y += .015 * _n, Le.position.x += .015 * _n, Le.position.z -= .015 * _n, rn.position.y += .455 * _n, sn.update(), an.clear(), an.render(lr, Le), an.render(Rs, Le) })(); window.cinematic = async function () { document.querySelector("body").requestFullscreen().then(function () { }).catch(function (s) { }), sn.enabled = !1, await gsap.timeline().to(Le.position, { duration: .8, x: 50, y: 0, z: 0, ease: "none" }).to(Le.position, { duration: .8, x: 50, y: 0, z: -50, ease: "none" }).to(Le.position, { duration: .8, x: 0, y: 0, z: -50, ease: "none" }).to(Le.position, { duration: .8, x: -50, y: 0, z: -50, ease: "none" }).to(Le.position, { duration: .8, x: -50, y: 0, z: 0, ease: "none" }).to(Le.position, { duration: .8, x: -50, y: 0, z: 50, ease: "none" }).to(Le.position, { duration: .8, x: 0, y: 0, z: 50, ease: "none" }).to(Le.position, { duration: .8, x: 100, y: 10, z: 0, ease: "none" }).to(Le.position, { duration: .8, x: 100, y: 20, z: -100, ease: "none" }).to(Le.position, { duration: .8, x: 0, y: 30, z: -100, ease: "none" }).to(Le.position, { duration: .8, x: -100, y: 40, z: -100, ease: "none" }).to(Le.position, { duration: .8, x: -100, y: 50, z: 0, ease: "none" }).to(Le.position, { duration: .8, x: -100, y: 60, z: 100, ease: "none" }).to(Le.position, { duration: .8, x: 0, y: 70, z: 100, ease: "none" }).to(Le.position, { duration: 1.8, x: 200, y: 0, z: 0, ease: "none" }).to(Le.position, { duration: 1.8, x: 200, y: -100, z: -200, ease: "none" }).to(Le.position, { duration: 1.8, x: 0, y: 0, z: -200, ease: "none" }).to(Le.position, { duration: 1.8, x: -200, y: 100, z: -200, ease: "none" }).to(Le.position, { duration: 1.8, x: -200, y: 0, z: 0, ease: "none" }).to(Le.position, { duration: 1.8, x: -200, y: -100, z: 200, ease: "none" }).to(Le.position, { duration: 1.8, x: 0, y: 0, z: 200, ease: "none" }).to(Le.position, { duration: 2, x: 0, y: 0, z: 75, ease: "none" }), sn.enabled = !0, document.exitFullscreen().then(function () { }).catch(function (s) { }) };
