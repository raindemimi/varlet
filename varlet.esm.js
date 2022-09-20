import { reactive as Ne, ref as E, onMounted as Fe, onUnmounted as xn, onActivated as yi, onDeactivated as bi, getCurrentInstance as Ba, provide as Zo, computed as W, inject as Jo, nextTick as Pe, createApp as Vs, onBeforeUnmount as wi, h as Qo, isVNode as Si, watch as ne, onBeforeMount as Ms, defineComponent as ae, createVNode as ee, Teleport as lt, Transition as je, withDirectives as Ce, vShow as Aa, mergeProps as Te, openBlock as w, createBlock as me, resolveDynamicComponent as st, normalizeClass as m, normalizeStyle as K, resolveComponent as re, resolveDirective as Ge, withCtx as ce, createElementVNode as A, renderSlot as q, toDisplayString as J, createElementBlock as I, Fragment as Oe, renderList as Ie, createCommentVNode as Z, onUpdated as Ci, createTextVNode as he, pushScopeId as xo, popScopeId as _o, withModifiers as Vn, normalizeProps as el, guardReactiveProps as Is, vModelText as Ns, toRefs as Ds, withKeys as Hi, toRaw as ji, TransitionGroup as Bs, Comment as As } from "vue";
var nl = {
  locks: {},
  zIndex: 2e3,
  touchmoveForbid: !0
};
Ne(nl);
const on = Ne(nl), _e = (e) => typeof e == "string", Bt = (e) => typeof e == "boolean", Qe = (e) => typeof e == "number", ki = (e) => Object.prototype.toString.call(e) === "[object Object]", zs = (e) => typeof e == "object" && e !== null, Se = (e) => Array.isArray(e), Fs = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Un = (e) => e == null || e === "" || Array.isArray(e) && !e.length, L = (e) => e == null ? 0 : _e(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : Bt(e) ? Number(e) : e, ut = (e, n) => {
  if (e.length) {
    const r = e.indexOf(n);
    if (r > -1)
      return e.splice(r, 1);
  }
}, $i = (e, n = 200) => {
  let r, a = 0;
  return function t(...i) {
    const o = Date.now(), l = o - a;
    a || (a = o), r && window.clearTimeout(r), l >= n ? (e.apply(this, i), a = o) : r = window.setTimeout(() => {
      t.apply(this, i);
    }, n - l);
  };
}, Ti = () => typeof window < "u", Gi = (e) => [...new Set(e)], Ls = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase();
function qi(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Rs(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        qi(i, a, t, o, l, "next", s);
      }
      function l(s) {
        qi(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
function Us(e) {
  var {
    left: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function dt(e) {
  var n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function Oi(e) {
  var n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function Ys(e) {
  return At.apply(this, arguments);
}
function At() {
  return At = Rs(function* (e) {
    yield Mn();
    var {
      top: n,
      bottom: r,
      left: a,
      right: t
    } = e.getBoundingClientRect(), {
      innerWidth: i,
      innerHeight: o
    } = window, l = a <= i && t >= 0, s = n <= o && r >= 0;
    return l && s;
  }), At.apply(this, arguments);
}
function Pt(e) {
  var {
    transform: n
  } = window.getComputedStyle(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function wa(e) {
  for (var n = e; n && !(!n.parentNode || (n = n.parentNode, n === document.body || n === document.documentElement)); ) {
    var r = /(scroll|auto)/, {
      overflowY: a,
      overflow: t
    } = window.getComputedStyle(n);
    if (r.test(a) || r.test(t))
      return n;
  }
  return window;
}
function Ws(e) {
  for (var n = [], r = e; r !== window; )
    r = wa(r), n.push(r);
  return n;
}
var rl = (e) => _e(e) && e.endsWith("rem"), Hs = (e) => _e(e) && e.endsWith("px") || Qe(e), js = (e) => _e(e) && e.endsWith("%"), al = (e) => _e(e) && e.endsWith("vw"), tl = (e) => _e(e) && e.endsWith("vh"), Me = (e) => {
  if (Qe(e))
    return e;
  if (Hs(e))
    return +e.replace("px", "");
  if (al(e))
    return +e.replace("vw", "") * window.innerWidth / 100;
  if (tl(e))
    return +e.replace("vh", "") * window.innerHeight / 100;
  if (rl(e)) {
    var n = +e.replace("rem", ""), r = window.getComputedStyle(document.documentElement).fontSize;
    return n * parseFloat(r);
  }
  return _e(e) ? L(e) : 0;
}, Ve = (e) => {
  if (e != null)
    return js(e) || al(e) || tl(e) || rl(e) ? e : Me(e) + "px";
}, He = function(e, n) {
  if (n === void 0 && (n = 1), e != null) {
    var r = Ve(e), a = r.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(r) * n + a;
  }
};
function kn(e) {
  return globalThis.requestAnimationFrame ? globalThis.requestAnimationFrame(e) : globalThis.setTimeout(e, 16);
}
function Gs(e) {
  globalThis.cancelAnimationFrame ? globalThis.cancelAnimationFrame(e) : globalThis.clearTimeout(e);
}
function vt(e) {
  kn(() => {
    kn(e);
  });
}
function Mn() {
  return new Promise((e) => {
    kn(() => {
      kn(e);
    });
  });
}
function Qa(e, n) {
  var {
    top: r = 0,
    left: a = 0,
    duration: t = 300,
    animation: i
  } = n, o = Date.now(), l = dt(e), s = Oi(e);
  return new Promise((u) => {
    var d = () => {
      var v = (Date.now() - o) / t;
      if (v < 1) {
        var f = l + (r - l) * i(v), c = s + (a - s) * i(v);
        e.scrollTo(c, f), kn(d);
      } else
        e.scrollTo(a, r), u();
    };
    kn(d);
  });
}
function il(e) {
  return Object.entries(e != null ? e : {}).reduce((n, r) => {
    var [a, t] = r, i = a.startsWith("--") ? a : "--" + Ls(a);
    return n[i] = t, n;
  }, {});
}
function qs() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
var Ks = ["collect", "clear"];
function Ki(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Xi(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        Ki(i, a, t, o, l, "next", s);
      }
      function l(s) {
        Ki(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
function Xs(e, n) {
  if (e == null)
    return {};
  var r = {}, a = Object.keys(e), t, i;
  for (i = 0; i < a.length; i++)
    t = a[i], !(n.indexOf(t) >= 0) && (r[t] = e[t]);
  return r;
}
function xa() {
  return xa = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, xa.apply(this, arguments);
}
function Ze(e, n) {
  return Array.isArray(n) ? n.reduce((r, a) => (r[a] = e[a], r), {}) : e[n];
}
function Zs(e) {
  var n = Vs(e), r = document.createElement("div");
  return document.body.appendChild(r), {
    instance: n.mount(r),
    unmount() {
      n.unmount(), document.body.removeChild(r);
    }
  };
}
function za(e, n, r) {
  n === void 0 && (n = {}), r === void 0 && (r = {});
  var a = {
    setup() {
      return () => Qo(e, xa({}, n, r));
    }
  }, {
    unmount: t
  } = Zs(a);
  return {
    unmountInstance: t
  };
}
function Js(e) {
  var n = [], r = (a) => {
    if (a != null && a.component) {
      r(a == null ? void 0 : a.component.subTree);
      return;
    }
    Array.isArray(a == null ? void 0 : a.children) && a.children.forEach((t) => {
      Si(t) && (n.push(t), r(t));
    });
  };
  return r(e), n;
}
function gn(e) {
  var n = Ne([]), r = Ba(), a = () => {
    var l = Js(r.subTree);
    n.sort((s, u) => l.indexOf(s.vnode) - l.indexOf(u.vnode));
  }, t = (l) => {
    n.push(l), a();
  }, i = (l) => {
    ut(n, l);
  };
  Zo(e, {
    collect: t,
    clear: i,
    instances: n
  });
  var o = W(() => n.length);
  return {
    length: o
  };
}
function yn(e) {
  if (!ol(e))
    return {
      index: null
    };
  var n = Jo(e), {
    collect: r,
    clear: a,
    instances: t
  } = n, i = Ba();
  Fe(() => {
    Pe().then(() => r(i));
  }), xn(() => {
    Pe().then(() => a(i));
  });
  var o = W(() => t.indexOf(i));
  return {
    index: o
  };
}
function un(e) {
  var n = [], r = (i) => {
    n.push(i);
  }, a = (i) => {
    ut(n, i);
  }, t = (i) => {
    Zo(e, xa({
      collect: r,
      clear: a
    }, i));
  };
  return {
    childProviders: n,
    bindChildren: t
  };
}
function dn(e) {
  if (!ol(e))
    return {
      parentProvider: null,
      bindParent: null
    };
  var n = Jo(e), {
    collect: r,
    clear: a
  } = n, t = Xs(n, Ks), i = (o) => {
    Fe(() => r(o)), wi(() => a(o));
  };
  return {
    parentProvider: t,
    bindParent: i
  };
}
function ol(e) {
  var n = Ba();
  return e in n.provides;
}
function bn() {
  var e = E(""), n = /* @__PURE__ */ function() {
    var t = Xi(function* (i, o, l) {
      if (!Se(i) || !i.length)
        return !0;
      var s = yield Promise.all(i.map((u) => u(o, l)));
      return !s.some((u) => u !== !0 ? (e.value = String(u), !0) : !1);
    });
    return function(o, l, s) {
      return t.apply(this, arguments);
    };
  }(), r = () => {
    e.value = "";
  }, a = /* @__PURE__ */ function() {
    var t = Xi(function* (i, o, l, s, u) {
      i.includes(o) && (yield n(l, s, u)) && (e.value = "");
    });
    return function(o, l, s, u, d) {
      return t.apply(this, arguments);
    };
  }();
  return {
    errorMessage: e,
    validate: n,
    resetValidation: r,
    validateWithTrigger: a
  };
}
function Qs(e) {
  Fe(() => {
    window.addEventListener("hashchange", e), window.addEventListener("popstate", e);
  }), xn(() => {
    window.removeEventListener("hashchange", e), window.removeEventListener("popstate", e);
  });
}
function ll() {
  var e = E(!1);
  return yi(() => {
    e.value = !1;
  }), bi(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
function _(e) {
  var n = "var-" + e, r = (t) => t ? t.startsWith("--") ? "" + n + t : n + "__" + t : n, a = function() {
    for (var t = arguments.length, i = new Array(t), o = 0; o < t; o++)
      i[o] = arguments[o];
    return i.map((l) => {
      if (Se(l)) {
        var [s, u, d = null] = l;
        return s ? u : d;
      }
      return l;
    });
  };
  return {
    n: r,
    classes: a
  };
}
function N(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  if (e)
    return e(...r);
}
function _a() {
  return _a = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, _a.apply(this, arguments);
}
var {
  n: sl
} = _("ripple"), Zi = 250;
function xs(e) {
  var {
    zIndex: n,
    position: r
  } = window.getComputedStyle(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function _s(e, n) {
  var {
    top: r,
    left: a
  } = e.getBoundingClientRect(), {
    clientWidth: t,
    clientHeight: i
  } = e, o = Math.sqrt(Math.pow(t, 2) + Math.pow(i, 2)) / 2, l = o * 2, s = n.touches[0].clientX - a, u = n.touches[0].clientY - r, d = (t - o * 2) / 2, v = (i - o * 2) / 2, f = s - o, c = u - o;
  return {
    x: f,
    y: c,
    centerX: d,
    centerY: v,
    size: l
  };
}
function ul(e) {
  var n = this._ripple;
  if (n.removeRipple(), !(n.disabled || n.tasker)) {
    var r = () => {
      n.tasker = null;
      var {
        x: a,
        y: t,
        centerX: i,
        centerY: o,
        size: l
      } = _s(this, e), s = document.createElement("div");
      s.classList.add(sl()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = l + "px", s.style.height = l + "px", n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), xs(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + i + "px, " + o + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    n.tasker = window.setTimeout(r, 60);
  }
}
function zt() {
  var e = this._ripple, n = () => {
    var r = this.querySelectorAll("." + sl());
    if (!!r.length) {
      var a = r[r.length - 1], t = Zi - performance.now() + Number(a.dataset.createdAt);
      setTimeout(() => {
        a.style.opacity = "0", setTimeout(() => {
          var i;
          return (i = a.parentNode) == null ? void 0 : i.removeChild(a);
        }, Zi);
      }, t);
    }
  };
  e.tasker ? setTimeout(n, 60) : n();
}
function dl() {
  var e = this._ripple;
  !qs() || !e.touchmoveForbid || (e.tasker && window.clearTimeout(e.tasker), e.tasker = null);
}
function eu(e, n) {
  var r, a, t;
  e._ripple = _a({
    tasker: null
  }, (r = n.value) != null ? r : {}, {
    touchmoveForbid: (a = (t = n.value) == null ? void 0 : t.touchmoveForbid) != null ? a : on.touchmoveForbid,
    removeRipple: zt.bind(e)
  }), e.addEventListener("touchstart", ul, {
    passive: !0
  }), e.addEventListener("touchmove", dl, {
    passive: !0
  }), e.addEventListener("dragstart", zt, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function nu(e) {
  e.removeEventListener("touchstart", ul), e.removeEventListener("touchmove", dl), e.removeEventListener("dragstart", zt), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function ru(e, n) {
  var r, a, t, i, o, l, s, u = {
    touchmoveForbid: (r = (a = n.value) == null ? void 0 : a.touchmoveForbid) != null ? r : on.touchmoveForbid,
    color: (t = n.value) == null ? void 0 : t.color,
    disabled: (i = n.value) == null ? void 0 : i.disabled
  }, d = u.touchmoveForbid !== ((o = e._ripple) == null ? void 0 : o.touchmoveForbid) || u.color !== ((l = e._ripple) == null ? void 0 : l.color) || u.disabled !== ((s = e._ripple) == null ? void 0 : s.disabled);
  if (d) {
    var v, f;
    e._ripple = _a({
      tasker: u.disabled ? null : (v = e._ripple) == null ? void 0 : v.tasker,
      removeRipple: (f = e._ripple) == null ? void 0 : f.removeRipple
    }, u);
  }
}
var Le = {
  mounted: eu,
  unmounted: nu,
  updated: ru,
  install(e) {
    e.directive("ripple", this);
  }
};
function au(e) {
  return ["top", "bottom", "right", "left", "center"].includes(e);
}
var Fa = {
  show: {
    type: Boolean,
    default: !1
  },
  position: {
    type: String,
    default: "center",
    validator: au
  },
  transition: {
    type: String
  },
  overlay: {
    type: Boolean,
    default: !0
  },
  overlayClass: {
    type: String
  },
  overlayStyle: {
    type: Object
  },
  lockScroll: {
    type: Boolean,
    default: !0
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: !0
  },
  teleport: {
    type: String
  },
  onOpen: {
    type: Function
  },
  onOpened: {
    type: Function
  },
  onClose: {
    type: Function
  },
  onClosed: {
    type: Function
  },
  onClickOverlay: {
    type: Function
  },
  onRouteChange: {
    type: Function
  },
  "onUpdate:show": {
    type: Function
  }
};
function vl() {
  var e = Object.keys(on.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function Ra(e) {
  on.locks[e] = 1, vl();
}
function Ua(e) {
  delete on.locks[e], vl();
}
function Pi(e, n) {
  var {
    uid: r
  } = Ba();
  n && ne(n, (a) => {
    a === !1 ? Ua(r) : a === !0 && e() === !0 && Ra(r);
  }), ne(e, (a) => {
    n && n() === !1 || (a === !0 ? Ra(r) : Ua(r));
  }), Ms(() => {
    n && n() === !1 || e() === !0 && Ra(r);
  }), xn(() => {
    n && n() === !1 || e() === !0 && Ua(r);
  }), yi(() => {
    n && n() === !1 || e() === !0 && Ra(r);
  }), bi(() => {
    n && n() === !1 || e() === !0 && Ua(r);
  });
}
function ft(e, n) {
  var r = E(on.zIndex);
  return ne(e, (a) => {
    a && (on.zIndex += n, r.value = on.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: r
  };
}
function Ft() {
  return Ft = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ft.apply(this, arguments);
}
function tu(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Si(e);
}
var {
  n: Ya,
  classes: Et
} = _("popup");
const mn = ae({
  name: "VarPopup",
  inheritAttrs: !1,
  props: Fa,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = ft(() => e.show, 3), {
      disabled: i
    } = ll(), o = () => {
      var d, {
        closeOnClickOverlay: v,
        onClickOverlay: f
      } = e;
      f == null || f(), v && ((d = e["onUpdate:show"]) == null || d.call(e, !1));
    };
    Pi(() => e.show, () => e.lockScroll), ne(() => e.show, (d) => {
      var {
        onOpen: v,
        onClose: f
      } = e;
      d ? v == null || v() : f == null || f();
    }), Qs(() => e.onRouteChange == null ? void 0 : e.onRouteChange());
    var l = () => {
      var {
        overlayClass: d = "",
        overlayStyle: v
      } = e;
      return ee("div", {
        class: Et(Ya("overlay"), d),
        style: Ft({
          zIndex: t.value - 1
        }, v),
        onClick: o
      }, null);
    }, s = () => ee("div", Te({
      class: Et(Ya("content"), "var-elevation--3", Ya("--" + e.position)),
      style: {
        zIndex: t.value
      }
    }, a), [r.default == null ? void 0 : r.default()]), u = () => {
      var {
        onOpened: d,
        onClosed: v,
        show: f,
        overlay: c,
        transition: p,
        position: b
      } = e;
      return ee(je, {
        name: "var-fade",
        onAfterEnter: d,
        onAfterLeave: v
      }, {
        default: () => [Ce(ee("div", {
          class: Et("var--box", Ya()),
          style: {
            zIndex: t.value - 2
          }
        }, [c && l(), ee(je, {
          name: p || "var-pop-" + b
        }, {
          default: () => [f && s()]
        })]), [[Aa, f]])]
      });
    };
    return () => {
      var {
        teleport: d
      } = e;
      if (d) {
        var v;
        return ee(lt, {
          to: d,
          disabled: i.value
        }, tu(v = u()) ? v : {
          default: () => [v]
        });
      }
      return u();
    };
  }
});
mn.install = function(e) {
  e.component(mn.name, mn);
};
var fl = {
  name: {
    type: String
  },
  size: {
    type: [Number, String]
  },
  color: {
    type: String
  },
  namespace: {
    type: String,
    default: "var-icon"
  },
  transition: {
    type: [Number, String],
    default: 0
  },
  onClick: {
    type: Function
  }
};
function Ji(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function iu(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        Ji(i, a, t, o, l, "next", s);
      }
      function l(s) {
        Ji(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: ou,
  classes: lu
} = _("icon");
function su(e, n) {
  return w(), me(
    st(e.isURL(e.name) ? "img" : "i"),
    {
      class: m(e.classes(e.n(), e.namespace + "--set", [e.isURL(e.name), e.n("image"), e.namespace + "-" + e.nextName], [e.shrinking, e.n("--shrinking")])),
      style: K({
        color: e.color,
        transition: "transform " + e.toNumber(e.transition) + "ms",
        width: e.isURL(e.name) ? e.toSizeUnit(e.size) : null,
        height: e.isURL(e.name) ? e.toSizeUnit(e.size) : null,
        fontSize: e.toSizeUnit(e.size)
      }),
      src: e.isURL(e.name) ? e.nextName : null,
      onClick: e.onClick
    },
    null,
    8,
    ["class", "style", "src", "onClick"]
  );
}
const $e = ae({
  render: su,
  name: "VarIcon",
  props: fl,
  setup(e) {
    var n = E(""), r = E(!1), a = /* @__PURE__ */ function() {
      var t = iu(function* (i, o) {
        var {
          transition: l
        } = e;
        if (o == null || L(l) === 0) {
          n.value = i;
          return;
        }
        r.value = !0, yield Pe(), setTimeout(() => {
          o != null && (n.value = i), r.value = !1;
        }, L(l));
      });
      return function(o, l) {
        return t.apply(this, arguments);
      };
    }();
    return ne(() => e.name, a, {
      immediate: !0
    }), {
      n: ou,
      classes: lu,
      nextName: n,
      shrinking: r,
      isURL: Fs,
      toNumber: L,
      toSizeUnit: Ve
    };
  }
});
$e.install = function(e) {
  e.component($e.name, $e);
};
function Lt() {
  return Lt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Lt.apply(this, arguments);
}
var uu = Lt({
  show: {
    type: Boolean,
    default: !1
  },
  actions: {
    type: Array,
    default: () => []
  },
  title: {
    type: String
  },
  closeOnClickAction: {
    type: Boolean,
    default: !0
  },
  onSelect: {
    type: Function
  },
  "onUpdate:show": {
    type: Function
  }
}, Ze(Fa, [
  "overlay",
  "overlayClass",
  "overlayStyle",
  "lockScroll",
  "closeOnClickOverlay",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onClickOverlay",
  "onRouteChange"
])), Qi = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), xi = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), du = (e) => {
  var n = [];
  return {
    cache: n,
    has(r) {
      return this.cache.includes(r);
    },
    add(r) {
      this.has(r) || (this.cache.length === e && n.shift(), this.cache.push(r));
    },
    remove(r) {
      this.has(r) && ut(this.cache, r);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, _i = (e) => e, eo = (e) => Math.pow(e, 3), cl = (e) => e < 0.5 ? eo(e * 2) / 2 : 1 - eo((1 - e) * 2) / 2, ct = (e, n) => e == null ? n : e;
const ml = {
  dialogTitle: "\u63D0\u793A",
  dialogConfirmButtonText: "\u786E\u8BA4",
  dialogCancelButtonText: "\u53D6\u6D88",
  actionSheetTitle: "\u8BF7\u9009\u62E9",
  listLoadingText: "\u52A0\u8F7D\u4E2D",
  listFinishedText: "\u6CA1\u6709\u66F4\u591A\u4E86",
  listErrorText: "\u52A0\u8F7D\u5931\u8D25",
  pickerTitle: "\u8BF7\u9009\u62E9",
  pickerConfirmButtonText: "\u786E\u8BA4",
  pickerCancelButtonText: "\u53D6\u6D88",
  datePickerMonthDict: {
    "01": {
      name: "\u4E00\u6708",
      abbr: "\u4E00\u6708"
    },
    "02": {
      name: "\u4E8C\u6708",
      abbr: "\u4E8C\u6708"
    },
    "03": {
      name: "\u4E09\u6708",
      abbr: "\u4E09\u6708"
    },
    "04": {
      name: "\u56DB\u6708",
      abbr: "\u56DB\u6708"
    },
    "05": {
      name: "\u4E94\u6708",
      abbr: "\u4E94\u6708"
    },
    "06": {
      name: "\u516D\u6708",
      abbr: "\u516D\u6708"
    },
    "07": {
      name: "\u4E03\u6708",
      abbr: "\u4E03\u6708"
    },
    "08": {
      name: "\u516B\u6708",
      abbr: "\u516B\u6708"
    },
    "09": {
      name: "\u4E5D\u6708",
      abbr: "\u4E5D\u6708"
    },
    10: {
      name: "\u5341\u6708",
      abbr: "\u5341\u6708"
    },
    11: {
      name: "\u5341\u4E00\u6708",
      abbr: "\u5341\u4E00\u6708"
    },
    12: {
      name: "\u5341\u4E8C\u6708",
      abbr: "\u5341\u4E8C\u6708"
    }
  },
  datePickerWeekDict: {
    0: {
      name: "\u661F\u671F\u65E5",
      abbr: "\u65E5"
    },
    1: {
      name: "\u661F\u671F\u4E00",
      abbr: "\u4E00"
    },
    2: {
      name: "\u661F\u671F\u4E8C",
      abbr: "\u4E8C"
    },
    3: {
      name: "\u661F\u671F\u4E09",
      abbr: "\u4E09"
    },
    4: {
      name: "\u661F\u671F\u56DB",
      abbr: "\u56DB"
    },
    5: {
      name: "\u661F\u671F\u4E94",
      abbr: "\u4E94"
    },
    6: {
      name: "\u661F\u671F\u516D",
      abbr: "\u516D"
    }
  },
  datePickerSelected: "\u4E2A\u88AB\u9009\u62E9",
  paginationItem: "\u6761",
  paginationPage: "\u9875",
  paginationJump: "\u524D\u5F80"
}, vu = {
  dialogTitle: "Hint",
  dialogConfirmButtonText: "Confirm",
  dialogCancelButtonText: "Cancel",
  actionSheetTitle: "Select One",
  listLoadingText: "Loading",
  listFinishedText: "No more",
  listErrorText: "Load fail",
  pickerTitle: "Pick it",
  pickerConfirmButtonText: "Confirm",
  pickerCancelButtonText: "Cancel",
  datePickerMonthDict: {
    "01": {
      name: "January",
      abbr: "JAN"
    },
    "02": {
      name: "February",
      abbr: "FEB"
    },
    "03": {
      name: "March",
      abbr: "MAR"
    },
    "04": {
      name: "April",
      abbr: "APR"
    },
    "05": {
      name: "May",
      abbr: "MAY"
    },
    "06": {
      name: "June",
      abbr: "JUN"
    },
    "07": {
      name: "July",
      abbr: "JUL"
    },
    "08": {
      name: "August",
      abbr: "AUG"
    },
    "09": {
      name: "September",
      abbr: "SEP"
    },
    10: {
      name: "October",
      abbr: "OCT"
    },
    11: {
      name: "November",
      abbr: "NOV"
    },
    12: {
      name: "December",
      abbr: "DEC"
    }
  },
  datePickerWeekDict: {
    0: {
      name: "Sunday",
      abbr: "S"
    },
    1: {
      name: "Monday",
      abbr: "M"
    },
    2: {
      name: "Tuesday",
      abbr: "T"
    },
    3: {
      name: "Wednesday",
      abbr: "W"
    },
    4: {
      name: "Thursday",
      abbr: "T"
    },
    5: {
      name: "Friday",
      abbr: "F"
    },
    6: {
      name: "Saturday",
      abbr: "S"
    }
  },
  datePickerSelected: " selected",
  paginationItem: "",
  paginationPage: "page",
  paginationJump: "Go to"
};
function Rt() {
  return Rt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Rt.apply(this, arguments);
}
function pl() {
  var e = {}, n = E({}), r = (i, o) => {
    o.lang = i, e[i] = o;
  }, a = (i) => {
    if (!e[i])
      return console.warn("The " + i + " does not exist. You can mount a language package using the add method"), {};
    n.value = e[i];
  }, t = (i, o) => {
    if (!e[i]) {
      console.warn("The " + i + " does not exist. You can mount a language package using the add method");
      return;
    }
    e[i] = Rt({}, e[i], o), a(i);
  };
  return {
    packs: e,
    pack: n,
    add: r,
    use: a,
    merge: t
  };
}
var {
  packs: fu,
  pack: Ue,
  add: hl,
  use: gl,
  merge: cu
} = pl();
hl("zh-CN", ml);
gl("zh-CN");
const Ut = {
  zhCN: ml,
  enUS: vu,
  packs: fu,
  pack: Ue,
  add: hl,
  use: gl,
  merge: cu,
  useLocale: pl
};
var {
  n: mu,
  classes: pu
} = _("action-sheet"), hu = ["onClick"];
function gu(e, n) {
  var r = re("var-icon"), a = re("var-popup"), t = Ge("ripple");
  return w(), me(
    a,
    Te({
      class: e.n("popup-radius"),
      position: "bottom",
      overlay: e.overlay,
      "overlay-class": e.overlayClass,
      "overlay-style": e.overlayStyle,
      "lock-scroll": e.lockScroll,
      "close-on-click-overlay": e.closeOnClickOverlay,
      teleport: e.teleport,
      show: e.popupShow
    }, {
      "onUpdate:show": e.handlePopupUpdateShow
    }, {
      onOpen: e.onOpen,
      onClose: e.onClose,
      onClosed: e.onClosed,
      onOpened: e.onOpened,
      onRouteChange: e.onRouteChange
    }),
    {
      default: ce(() => [A(
        "div",
        Te({
          class: e.classes(e.n(), "var--box")
        }, e.$attrs),
        [q(e.$slots, "title", {}, () => [A(
          "div",
          {
            class: m(e.n("title"))
          },
          J(e.dt(e.title, e.pack.actionSheetTitle)),
          3
        )]), q(e.$slots, "actions", {}, () => [(w(!0), I(
          Oe,
          null,
          Ie(e.actions, (i) => Ce((w(), I(
            "div",
            {
              class: m(e.classes(e.n("action-item"), i.className, [i.disabled, e.n("--disabled")])),
              key: i.name,
              style: K({
                color: i.color
              }),
              onClick: (o) => e.handleSelect(i)
            },
            [i.icon ? (w(), me(
              r,
              {
                key: 0,
                class: m(e.n("action-icon")),
                "var-action-sheet-cover": "",
                name: i.icon,
                size: i.iconSize
              },
              null,
              8,
              ["class", "name", "size"]
            )) : Z("v-if", !0), A(
              "div",
              {
                class: m(e.n("action-name"))
              },
              J(i.name),
              3
            )],
            14,
            hu
          )), [[t, {
            disabled: i.disabled
          }]])),
          128
        ))])],
        16
      )]),
      _: 3
    },
    16,
    ["class", "overlay", "overlay-class", "overlay-style", "lock-scroll", "close-on-click-overlay", "teleport", "show", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange"]
  );
}
const rr = ae({
  render: gu,
  name: "VarActionSheet",
  directives: {
    Ripple: Le
  },
  components: {
    VarPopup: mn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: uu,
  setup(e) {
    var n = E(!1), r = (t) => {
      if (!t.disabled) {
        var {
          closeOnClickAction: i,
          onSelect: o
        } = e;
        N(o, t), i && N(e["onUpdate:show"], !1);
      }
    }, a = (t) => N(e["onUpdate:show"], t);
    return ne(() => e.show, (t) => {
      n.value = t;
    }, {
      immediate: !0
    }), {
      n: mu,
      classes: pu,
      handlePopupUpdateShow: a,
      popupShow: n,
      pack: Ue,
      dt: ct,
      handleSelect: r
    };
  }
});
var Fn;
function fr(e) {
  return Ti() ? new Promise((n) => {
    fr.close();
    var r = Ne(e);
    r.teleport = "body", Fn = r;
    var {
      unmountInstance: a
    } = za(rr, r, {
      onSelect: (t) => {
        r.onSelect == null || r.onSelect(t), n(t);
      },
      onClose: () => {
        r.onClose == null || r.onClose(), n("close");
      },
      onClosed: () => {
        r.onClosed == null || r.onClosed(), a(), Fn === r && (Fn = null);
      },
      onRouteChange: () => {
        a(), Fn === r && (Fn = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }) : Promise.resolve();
}
fr.Component = rr;
rr.install = function(e) {
  e.component(rr.name, rr);
};
fr.close = () => {
  if (Fn != null) {
    var e = Fn;
    Fn = null, Pe().then(() => {
      e.show = !1;
    });
  }
};
fr.install = function(e) {
  e.component(rr.name, rr);
};
function yu(e) {
  var n = ["left", "center", "right"];
  return n.includes(e);
}
var bu = {
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  title: {
    type: String
  },
  titlePosition: {
    type: String,
    default: "left",
    validator: yu
  },
  elevation: {
    type: Boolean,
    default: !0
  }
}, {
  n: wu,
  classes: Su
} = _("app-bar");
function Cu(e, n) {
  return w(), I(
    "div",
    {
      class: m(e.classes(e.n(), [e.elevation, "var-elevation--3"])),
      style: K({
        background: e.color,
        color: e.textColor
      })
    },
    [A(
      "div",
      {
        class: m(e.n("left"))
      },
      [q(e.$slots, "left"), e.titlePosition === "left" ? (w(), I(
        "div",
        {
          key: 0,
          class: m(e.n("title")),
          style: K({
            paddingLeft: e.paddingLeft
          })
        },
        [q(e.$slots, "default", {}, () => [he(
          J(e.title),
          1
        )])],
        6
      )) : Z("v-if", !0)],
      2
    ), e.titlePosition === "center" ? (w(), I(
      "div",
      {
        key: 0,
        class: m(e.n("title"))
      },
      [q(e.$slots, "default", {}, () => [he(
        J(e.title),
        1
      )])],
      2
    )) : Z("v-if", !0), A(
      "div",
      {
        class: m(e.n("right"))
      },
      [e.titlePosition === "right" ? (w(), I(
        "div",
        {
          key: 0,
          class: m(e.n("title")),
          style: K({
            paddingRight: e.paddingRight
          })
        },
        [q(e.$slots, "default", {}, () => [he(
          J(e.title),
          1
        )])],
        6
      )) : Z("v-if", !0), q(e.$slots, "right")],
      2
    )],
    6
  );
}
const Or = ae({
  render: Cu,
  name: "VarAppBar",
  props: bu,
  setup(e, n) {
    var {
      slots: r
    } = n, a = E(), t = E(), i = () => {
      a.value = r.left ? 0 : void 0, t.value = r.right ? 0 : void 0;
    };
    return Fe(i), Ci(i), {
      n: wu,
      classes: Su,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
Or.install = function(e) {
  e.component(Or.name, Or);
};
function ku(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function $u(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var Yn = {
  type: {
    type: String,
    default: "circle",
    validator: ku
  },
  radius: {
    type: [String, Number]
  },
  size: {
    type: String,
    default: "normal",
    validator: $u
  },
  color: {
    type: String
  },
  description: {
    type: String
  },
  loading: {
    type: Boolean,
    default: !1
  }
}, {
  n: Tu,
  classes: Ou
} = _("loading"), Pu = (e) => (xo(""), e = e(), _o(), e), Eu = /* @__PURE__ */ Pu(() => /* @__PURE__ */ A(
  "svg",
  {
    viewBox: "25 25 50 50"
  },
  [/* @__PURE__ */ A("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none"
  })],
  -1
)), Vu = [Eu];
function Mu(e, n) {
  return w(), I(
    "div",
    {
      class: m(e.n())
    },
    [e.$slots.default ? (w(), I(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
      },
      [q(e.$slots, "default"), e.loading ? (w(), I(
        "div",
        {
          key: 0,
          class: m(e.n("content-mask"))
        },
        null,
        2
      )) : Z("v-if", !0)],
      2
    )) : Z("v-if", !0), e.isShow ? (w(), I(
      "div",
      {
        key: 1,
        class: m(e.classes("var--box", e.n("body"), [e.$slots.default, e.n("inside")]))
      },
      [e.type === "circle" ? (w(), I(
        "div",
        {
          key: 0,
          class: m(e.n("circle"))
        },
        [A(
          "span",
          {
            class: m(e.classes(e.n("circle-block"), e.n("circle-block--" + e.size))),
            style: K({
              width: e.multiplySizeUnit(e.radius, 2),
              height: e.multiplySizeUnit(e.radius, 2),
              color: e.color
            })
          },
          Vu,
          6
        )],
        2
      )) : Z("v-if", !0), (w(!0), I(
        Oe,
        null,
        Ie(e.loadingTypeDict, (r, a) => (w(), I(
          Oe,
          {
            key: a
          },
          [e.type === a ? (w(), I(
            "div",
            {
              key: 0,
              class: m(e.classes(e.n(a), e.n(a + "--" + e.size)))
            },
            [(w(!0), I(
              Oe,
              null,
              Ie(r, (t) => (w(), I(
                "div",
                {
                  key: t + a,
                  style: K({
                    backgroundColor: e.color
                  }),
                  class: m(e.classes(e.n(a + "-item"), e.n(a + "-item--" + e.size)))
                },
                null,
                6
              ))),
              128
            ))],
            2
          )) : Z("v-if", !0)],
          64
        ))),
        128
      )), e.$slots.description || e.description ? (w(), I(
        "div",
        {
          key: 1,
          class: m(e.classes(e.n("description"), e.n("description--" + e.size))),
          style: K({
            color: e.color
          })
        },
        [q(e.$slots, "description", {}, () => [he(
          J(e.description),
          1
        )])],
        6
      )) : Z("v-if", !0)],
      2
    )) : Z("v-if", !0)],
    2
  );
}
const Cn = ae({
  render: Mu,
  name: "VarLoading",
  props: Yn,
  setup(e, n) {
    var {
      slots: r
    } = n, a = {
      wave: 5,
      cube: 4,
      rect: 8,
      disappear: 3
    }, t = W(() => N(r.default) ? e.loading : !0);
    return {
      n: Tu,
      classes: Ou,
      multiplySizeUnit: He,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
Cn.install = function(e) {
  e.component(Cn.name, Cn);
};
function Yt() {
  return Yt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Yt.apply(this, arguments);
}
function Iu(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Nu(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var Du = {
  type: {
    type: String,
    default: "default",
    validator: Iu
  },
  size: {
    type: String,
    default: "normal",
    validator: Nu
  },
  loading: {
    type: Boolean,
    default: !1
  },
  round: {
    type: Boolean,
    default: !1
  },
  block: {
    type: Boolean,
    default: !1
  },
  text: {
    type: Boolean,
    default: !1
  },
  outline: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  autoLoading: {
    type: Boolean,
    default: !1
  },
  loadingRadius: {
    type: [Number, String],
    default: 12
  },
  loadingType: Ze(Yn, "type"),
  loadingSize: Ze(Yn, "size"),
  loadingColor: Yt({}, Ze(Yn, "color"), {
    default: "currentColor"
  }),
  onClick: {
    type: Function
  },
  onTouchstart: {
    type: Function
  }
}, {
  n: Bu,
  classes: Au
} = _("button"), zu = ["disabled"];
function Fu(e, n) {
  var r = re("var-loading"), a = Ge("ripple");
  return Ce((w(), I(
    "button",
    {
      class: m(e.classes(e.n(), "var--box", e.n("--" + e.size), [e.block, "var--flex " + e.n("--block"), "var--inline-flex"], [e.disabled, e.n("--disabled")], [e.text, e.n("--text-" + e.type) + " " + e.n("--text"), e.n("--" + e.type) + " var-elevation--2"], [e.text && e.disabled, e.n("--text-disabled")], [e.round, e.n("--round")], [e.outline, e.n("--outline")])),
      style: K({
        color: e.textColor,
        background: e.color
      }),
      disabled: e.disabled,
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      }),
      onTouchstart: n[1] || (n[1] = function() {
        return e.handleTouchstart && e.handleTouchstart(...arguments);
      })
    },
    [e.loading || e.pending ? (w(), me(
      r,
      {
        key: 0,
        class: m(e.n("loading")),
        "var-button-cover": "",
        color: e.loadingColor,
        type: e.loadingType,
        size: e.loadingSize,
        radius: e.loadingRadius
      },
      null,
      8,
      ["class", "color", "type", "size", "radius"]
    )) : Z("v-if", !0), A(
      "div",
      {
        class: m(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [q(e.$slots, "default")],
      2
    )],
    46,
    zu
  )), [[a, {
    disabled: e.disabled || !e.ripple
  }]]);
}
const xe = ae({
  render: Fu,
  name: "VarButton",
  components: {
    VarLoading: Cn
  },
  directives: {
    Ripple: Le
  },
  props: Du,
  setup(e) {
    var n = E(!1), r = (i) => {
      e.autoLoading && (n.value = !0, Promise.resolve(i).finally(() => {
        n.value = !1;
      }));
    }, a = (i) => {
      var {
        loading: o,
        disabled: l,
        onClick: s
      } = e;
      !s || o || l || n.value || r(s(i));
    }, t = (i) => {
      var {
        loading: o,
        disabled: l,
        onTouchstart: s
      } = e;
      !s || o || l || n.value || r(s(i));
    };
    return {
      n: Bu,
      classes: Au,
      pending: n,
      handleClick: a,
      handleTouchstart: t
    };
  }
});
xe.install = function(e) {
  e.component(xe.name, xe);
};
var Lu = {
  visibilityHeight: {
    type: [Number, String],
    default: 200
  },
  duration: {
    type: Number,
    default: 300
  },
  right: {
    type: [Number, String]
  },
  bottom: {
    type: [Number, String]
  },
  target: {
    type: [String, Object]
  },
  onClick: {
    type: Function
  }
}, {
  n: Ru,
  classes: Uu
} = _("back-top");
function Yu(e, n) {
  var r = re("var-icon"), a = re("var-button");
  return w(), me(
    lt,
    {
      to: "body",
      disabled: e.disabled
    },
    [A(
      "div",
      Te({
        class: e.classes(e.n(), [e.show, e.n("--active")]),
        ref: "backTopEl",
        style: {
          right: e.toSizeUnit(e.right),
          bottom: e.toSizeUnit(e.bottom)
        }
      }, e.$attrs, {
        onClick: n[0] || (n[0] = Vn(function() {
          return e.click && e.click(...arguments);
        }, ["stop"]))
      }),
      [q(e.$slots, "default", {}, () => [ee(a, {
        type: "primary",
        round: "",
        "var-back-top-cover": ""
      }, {
        default: ce(() => [ee(r, {
          name: "chevron-up"
        })]),
        _: 1
      })])],
      16
    )],
    8,
    ["disabled"]
  );
}
const Pr = ae({
  render: Yu,
  name: "VarBackTop",
  components: {
    VarButton: xe,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Lu,
  setup(e) {
    var n = E(!1), r = E(null), a = E(!0), t, i = (u) => {
      N(e.onClick, u);
      var d = Oi(t);
      Qa(t, {
        left: d,
        duration: e.duration,
        animation: cl
      });
    }, o = () => {
      n.value = dt(t) >= Me(e.visibilityHeight);
    }, l = $i(o, 200), s = () => {
      var {
        target: u
      } = e;
      if (_e(u)) {
        var d = document.querySelector(e.target);
        if (!d)
          throw Error("[Varlet] BackTop: target element cannot found");
        return d;
      }
      if (zs(u))
        return u;
      throw Error('[Varlet] BackTop: type of prop "target" should be a selector or an element object');
    };
    return Fe(() => {
      t = e.target ? s() : wa(r.value), t.addEventListener("scroll", l), a.value = !1;
    }), wi(() => {
      t.removeEventListener("scroll", l);
    }), {
      disabled: a,
      show: n,
      backTopEl: r,
      toSizeUnit: Ve,
      n: Ru,
      classes: Uu,
      click: i
    };
  }
});
Pr.install = function(e) {
  e.component(Pr.name, Pr);
};
function Wu(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Hu(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var ju = {
  type: {
    type: String,
    default: "default",
    validator: Wu
  },
  hidden: {
    type: Boolean,
    default: !1
  },
  dot: {
    type: Boolean,
    default: !1
  },
  value: {
    type: [String, Number],
    default: 0
  },
  maxValue: {
    type: [String, Number]
  },
  color: {
    type: String
  },
  position: {
    type: String,
    default: "right-top",
    validator: Hu
  },
  icon: {
    type: String
  }
}, {
  n: Nn,
  classes: Gu
} = _("badge"), qu = {
  key: 1
};
function Ku(e, n) {
  var r = re("var-icon");
  return w(), I(
    "div",
    {
      class: m(e.classes(e.n(), "var--box"))
    },
    [ee(je, {
      name: "var-badge-fade"
    }, {
      default: ce(() => [Ce(A(
        "span",
        Te(e.$attrs, {
          class: e.classes(e.n("content"), ...e.contentClass),
          style: {
            background: e.color
          }
        }),
        [e.icon && !e.dot ? (w(), me(
          r,
          {
            key: 0,
            name: e.icon,
            size: "10px"
          },
          null,
          8,
          ["name"]
        )) : (w(), I(
          "span",
          qu,
          J(e.values),
          1
        ))],
        16
      ), [[Aa, !e.hidden]])]),
      _: 1
    }), q(e.$slots, "default")],
    2
  );
}
const ar = ae({
  render: Ku,
  name: "VarBadge",
  components: {
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: ju,
  setup(e, n) {
    var {
      slots: r
    } = n, a = W(() => {
      var {
        type: o,
        position: l,
        dot: s,
        icon: u
      } = e, d = r.default && Nn("position") + " " + Nn("--" + l), v = s ? Nn("dot") : null, f = i(), c = u ? Nn("icon") : null;
      return [Nn("--" + o), d, v, f, c];
    }), t = W(() => {
      var {
        dot: o,
        value: l,
        maxValue: s
      } = e;
      return o ? "" : l !== void 0 && s !== void 0 && L(l) > s ? s + "+" : l;
    }), i = () => {
      var {
        position: o,
        dot: l
      } = e;
      if (l && o.includes("right"))
        return Nn("dot--right");
      if (l && o.includes("left"))
        return Nn("dot--left");
    };
    return {
      n: Nn,
      classes: Gu,
      values: t,
      contentClass: a
    };
  }
});
ar.install = function(e) {
  e.component(ar.name, ar);
};
var Xu = {
  active: {
    type: [Number, String],
    default: 0
  },
  fixed: {
    type: Boolean,
    default: !1
  },
  border: {
    type: Boolean,
    default: !1
  },
  safeArea: {
    type: Boolean,
    default: !1
  },
  zIndex: {
    type: [Number, String],
    default: 1
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onChange: {
    type: Function
  },
  "onUpdate:active": {
    type: Function
  },
  onBeforeChange: {
    type: Function
  },
  onFabClick: {
    type: Function
  },
  fabProps: {
    type: Object
  }
}, yl = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"), bl = Symbol("BOTTOM_NAVIGATION_COUNT_BOTTOM_NAVIGATION_ITEM_KEY");
function Zu() {
  var {
    childProviders: e,
    bindChildren: n
  } = un(yl), {
    length: r
  } = gn(bl);
  return {
    length: r,
    bottomNavigationItems: e,
    bindBottomNavigationItem: n
  };
}
function Wt() {
  return Wt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Wt.apply(this, arguments);
}
var {
  n: Ju,
  classes: Qu
} = _("bottom-navigation"), {
  n: mt
} = _("bottom-navigation-item"), no = mt("--right-half-space"), ro = mt("--left-half-space"), ao = mt("--right-space"), xu = {
  type: "primary"
};
function _u(e, n) {
  var r = re("var-button");
  return w(), I(
    "div",
    {
      class: m(e.classes(e.n(), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: K("z-index:" + e.zIndex)
    },
    [q(e.$slots, "default"), e.$slots.fab ? (w(), me(
      r,
      Te({
        key: 0,
        class: e.classes(e.n("fab"), [e.length % 2, e.n("--fab-right"), e.n("--fab-center")]),
        "var-bottom-navigation__fab": "",
        onClick: e.handleFabClick
      }, e.fabProps, {
        round: ""
      }),
      {
        default: ce(() => [q(e.$slots, "fab")]),
        _: 3
      },
      16,
      ["class", "onClick"]
    )) : Z("v-if", !0)],
    6
  );
}
const Er = ae({
  render: _u,
  name: "VarBottomNavigation",
  components: {
    VarButton: xe
  },
  props: Xu,
  setup(e, n) {
    var {
      slots: r
    } = n, a = E(null), t = W(() => e.active), i = W(() => e.activeColor), o = W(() => e.inactiveColor), l = E({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = Zu(), v = () => {
      s.value === 0 || f() || c() || p();
    }, f = () => u.find((C) => {
      var {
        name: D
      } = C;
      return t.value === D.value;
    }), c = () => u.find((C) => {
      var {
        index: D
      } = C;
      return t.value === D.value;
    }), p = () => {
      !Qe(t.value) || (t.value < 0 ? N(e["onUpdate:active"], 0) : t.value > s.value - 1 && N(e["onUpdate:active"], s.value - 1));
    }, b = (C) => {
      e.onBeforeChange ? y(C) : T(C);
    }, y = (C) => {
      Promise.resolve(N(e.onBeforeChange, C)).then((D) => D && T(C));
    }, T = (C) => {
      N(e["onUpdate:active"], C), N(e.onChange, C);
    }, S = () => {
      var C = M();
      C.forEach((D) => {
        D.classList.remove(no, ro, ao);
      });
    }, h = (C) => {
      var D = M(), P = D.length, k = C % 2 === 0;
      D.forEach((O, R) => {
        g(k, O, R, P);
      });
    }, g = (C, D, P, k) => {
      var O = P === k - 1;
      if (!C && O) {
        D.classList.add(ao);
        return;
      }
      var R = P === k / 2 - 1, Y = P === k / 2;
      R ? D.classList.add(no) : Y && D.classList.add(ro);
    }, M = () => Array.from(a.value.querySelectorAll("." + mt())), $ = () => {
      N(e.onFabClick);
    }, B = {
      active: t,
      activeColor: i,
      inactiveColor: o,
      onToggle: b
    };
    return d(B), ne(() => s.value, v), ne(() => e.fabProps, (C) => {
      l.value = Wt({}, xu, C);
    }, {
      immediate: !0,
      deep: !0
    }), Fe(() => {
      !r.fab || h(s.value);
    }), Ci(() => {
      S(), r.fab && h(s.value);
    }), {
      n: Ju,
      classes: Qu,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: $,
      fabProps: l
    };
  }
});
Er.install = function(e) {
  e.component(Er.name, Er);
};
var ed = {
  name: {
    type: String
  },
  icon: {
    type: String
  },
  label: {
    type: String
  },
  namespace: {
    type: String,
    default: "var-icon"
  },
  badge: {
    type: [Boolean, Object],
    default: !1
  },
  onClick: {
    type: Function
  }
};
function nd() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(yl), {
    index: r
  } = yn(bl);
  if (!e || !n || !r)
    throw Error("<var-bottom-navigation-item/> must in <var-bottom-navigation/>");
  return {
    index: r,
    bottomNavigation: e,
    bindBottomNavigation: n
  };
}
var {
  n: rd,
  classes: ad
} = _("bottom-navigation-item"), td = {
  type: "danger",
  dot: !0
};
function id(e, n) {
  var r = re("var-icon"), a = re("var-badge"), t = Ge("ripple");
  return Ce((w(), I(
    "button",
    {
      class: m(e.classes(e.n(), [e.active === e.index || e.active === e.name, e.n("--active")])),
      style: K({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [e.icon && !e.$slots.icon ? (w(), me(
      r,
      {
        key: 0,
        name: e.icon,
        namespace: e.namespace,
        class: m(e.n("icon")),
        "var-bottom-navigation-item-cover": ""
      },
      null,
      8,
      ["name", "namespace", "class"]
    )) : Z("v-if", !0), q(e.$slots, "icon", {
      active: e.active === e.index || e.active === e.name
    }), e.badge ? (w(), me(
      a,
      Te({
        key: 1
      }, e.badgeProps, {
        class: e.n("badge"),
        "var-bottom-navigation-item-cover": ""
      }),
      null,
      16,
      ["class"]
    )) : Z("v-if", !0), A(
      "span",
      {
        class: m(e.n("label"))
      },
      [e.$slots.default ? Z("v-if", !0) : (w(), I(
        Oe,
        {
          key: 0
        },
        [he(
          J(e.label),
          1
        )],
        2112
      )), q(e.$slots, "default")],
      2
    )],
    6
  )), [[t]]);
}
const Vr = ae({
  render: id,
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: ar,
    VarIcon: $e
  },
  directives: {
    Ripple: Le
  },
  props: ed,
  setup(e) {
    var n = W(() => e.name), r = W(() => e.badge), a = E({}), {
      index: t,
      bottomNavigation: i,
      bindBottomNavigation: o
    } = nd(), {
      active: l,
      activeColor: s,
      inactiveColor: u
    } = i, d = {
      name: n,
      index: t
    }, v = () => l.value === n.value || l.value === t.value ? s.value : u.value, f = () => {
      var c, p = (c = n.value) != null ? c : t.value;
      N(e.onClick, p), N(i.onToggle, p);
    };
    return o(d), ne(() => r.value, (c) => {
      a.value = c === !0 ? td : r.value;
    }, {
      immediate: !0
    }), {
      n: rd,
      classes: ad,
      index: t,
      active: l,
      badge: r,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
Vr.install = function(e) {
  e.component(Vr.name, Vr);
};
function od(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var ld = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: od,
    default: "cover"
  },
  imageHeight: {
    type: [String, Number]
  },
  imageWidth: {
    type: [String, Number]
  },
  layout: {
    type: String,
    default: "column"
  },
  floating: {
    type: Boolean,
    default: !1
  },
  "onUpdate:floating": {
    type: Function
  },
  floatingDuration: {
    type: Number,
    default: 250
  },
  alt: {
    type: String
  },
  title: {
    type: String
  },
  subtitle: {
    type: String
  },
  description: {
    type: String
  },
  elevation: {
    type: [Number, String]
  },
  ripple: {
    type: Boolean,
    default: !1
  },
  onClick: {
    type: Function
  }
};
function to(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function io(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        to(i, a, t, o, l, "next", s);
      }
      function l(s) {
        to(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: sd,
  classes: ud
} = _("card"), dd = 500, vd = ["src", "alt"];
function fd(e, n) {
  var r = re("var-icon"), a = re("var-button"), t = Ge("ripple");
  return Ce((w(), I(
    "div",
    {
      ref: "card",
      class: m(e.classes(e.n(), [e.isRow, e.n("--layout-row")], [e.elevation, "var-elevation--" + e.elevation, "var-elevation--1"])),
      style: K({
        zIndex: e.floated ? e.zIndex : void 0
      }),
      onClick: n[0] || (n[0] = function() {
        return e.onClick && e.onClick(...arguments);
      })
    },
    [A(
      "div",
      {
        ref: "cardFloater",
        class: m(e.classes(e.n("floater"))),
        style: K({
          width: e.floaterWidth,
          height: e.floaterHeight,
          top: e.floaterTop,
          left: e.floaterLeft,
          overflow: e.floaterOverflow,
          position: e.floaterPosition,
          transition: e.floated ? "background-color " + e.floatingDuration + "ms, color " + e.floatingDuration + "ms, width " + e.floatingDuration + "ms, height " + e.floatingDuration + "ms, top " + e.floatingDuration + "ms, left " + e.floatingDuration + "ms" : void 0
        })
      },
      [q(e.$slots, "image", {}, () => [e.src ? (w(), I(
        "img",
        {
          key: 0,
          class: m(e.n("image")),
          style: K({
            objectFit: e.fit,
            height: e.toSizeUnit(e.imageHeight),
            width: e.toSizeUnit(e.imageWidth)
          }),
          src: e.src,
          alt: e.alt
        },
        null,
        14,
        vd
      )) : Z("v-if", !0)]), A(
        "div",
        {
          class: m(e.n("container"))
        },
        [q(e.$slots, "title", {}, () => [e.title ? (w(), I(
          "div",
          {
            key: 0,
            class: m(e.n("title"))
          },
          J(e.title),
          3
        )) : Z("v-if", !0)]), q(e.$slots, "subtitle", {}, () => [e.subtitle ? (w(), I(
          "div",
          {
            key: 0,
            class: m(e.n("subtitle"))
          },
          J(e.subtitle),
          3
        )) : Z("v-if", !0)]), q(e.$slots, "description", {}, () => [e.description ? (w(), I(
          "div",
          {
            key: 0,
            class: m(e.n("description"))
          },
          J(e.description),
          3
        )) : Z("v-if", !0)]), e.$slots.extra ? (w(), I(
          "div",
          {
            key: 0,
            class: m(e.n("footer"))
          },
          [q(e.$slots, "extra")],
          2
        )) : Z("v-if", !0), e.$slots.content && !e.isRow ? (w(), I(
          "div",
          {
            key: 1,
            class: m(e.n("content")),
            style: K({
              height: e.contentHeight,
              opacity: e.opacity,
              transition: "opacity " + e.floatingDuration * 2 + "ms"
            })
          },
          [q(e.$slots, "content")],
          6
        )) : Z("v-if", !0)],
        2
      ), e.showFloatingButtons ? (w(), I(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("floating-buttons"), "var--box")),
          style: K({
            zIndex: e.zIndex,
            opacity: e.opacity,
            transition: "opacity " + e.floatingDuration * 2 + "ms"
          })
        },
        [q(e.$slots, "close-button", {}, () => [ee(
          a,
          {
            "var-card-cover": "",
            round: "",
            class: m(e.classes(e.n("close-button"), "var-elevation--6")),
            onClick: Vn(e.close, ["stop"])
          },
          {
            default: ce(() => [ee(
              r,
              {
                "var-card-cover": "",
                name: "window-close",
                class: m(e.n("close-button-icon"))
              },
              null,
              8,
              ["class"]
            )]),
            _: 1
          },
          8,
          ["class", "onClick"]
        )])],
        6
      )) : Z("v-if", !0)],
      6
    ), A(
      "div",
      {
        class: m(e.n("holder")),
        style: K({
          width: e.holderWidth,
          height: e.holderHeight
        })
      },
      null,
      6
    )],
    6
  )), [[t, {
    disabled: !e.ripple || e.floater
  }]]);
}
const Mr = ae({
  render: fd,
  name: "VarCard",
  directives: {
    Ripple: Le
  },
  components: {
    VarIcon: $e,
    VarButton: xe
  },
  props: ld,
  setup(e) {
    var n = E(null), r = E(null), a = E("auto"), t = E("auto"), i = E("100%"), o = E("100%"), l = E("auto"), s = E("auto"), u = E(void 0), d = E("hidden"), v = E("0px"), f = E("0"), c = W(() => e.layout === "row"), p = E(!1), b = E(!1), {
      zIndex: y
    } = ft(() => e.floating, 1);
    Pi(() => e.floating, () => !c.value);
    var T = "auto", S = "auto", h = null, g = E(null), M = /* @__PURE__ */ function() {
      var C = io(function* () {
        clearTimeout(g.value), clearTimeout(h), g.value = null, g.value = setTimeout(/* @__PURE__ */ io(function* () {
          var {
            width: D,
            height: P,
            left: k,
            top: O
          } = n.value.getBoundingClientRect();
          a.value = Ve(D), t.value = Ve(P), i.value = a.value, o.value = t.value, l.value = Ve(O), s.value = Ve(k), u.value = "fixed", T = l.value, S = s.value, p.value = !0, yield Mn(), l.value = "0", s.value = "0", i.value = "100vw", o.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", b.value = !0;
        }), e.ripple ? dd : 0);
      });
      return function() {
        return C.apply(this, arguments);
      };
    }(), $ = () => {
      clearTimeout(h), clearTimeout(g.value), g.value = null, i.value = a.value, o.value = t.value, l.value = T, s.value = S, v.value = "0px", f.value = "0", p.value = !1, h = setTimeout(() => {
        a.value = "auto", t.value = "auto", i.value = "100%", o.value = "100%", l.value = "auto", s.value = "auto", T = "auto", S = "auto", d.value = "hidden", u.value = void 0, b.value = !1;
      }, e.floatingDuration);
    }, B = () => {
      N(e["onUpdate:floating"], !1);
    };
    return ne(() => e.floating, (C) => {
      c.value || Pe(() => {
        C ? M() : $();
      });
    }, {
      immediate: !0
    }), {
      n: sd,
      classes: ud,
      toSizeUnit: Ve,
      card: n,
      cardFloater: r,
      holderWidth: a,
      holderHeight: t,
      floater: g,
      floaterWidth: i,
      floaterHeight: o,
      floaterTop: l,
      floaterLeft: s,
      floaterPosition: u,
      floaterOverflow: d,
      contentHeight: v,
      opacity: f,
      zIndex: y,
      isRow: c,
      close: B,
      showFloatingButtons: p,
      floated: b
    };
  }
});
Mr.install = function(e) {
  e.component(Mr.name, Mr);
};
var cd = {
  title: {
    type: [Number, String]
  },
  icon: {
    type: String
  },
  description: {
    type: String
  },
  border: {
    type: Boolean,
    default: !1
  },
  iconClass: {
    type: String
  },
  titleClass: {
    type: String
  },
  descriptionClass: {
    type: String
  },
  extraClass: {
    type: String
  }
}, {
  n: md,
  classes: pd
} = _("cell");
function hd(e, n) {
  var r = re("var-icon");
  return w(), I(
    "div",
    {
      class: m(e.classes(e.n(), [e.border, e.n("--border")]))
    },
    [e.$slots.icon || e.icon ? (w(), I(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("icon"), [e.iconClass, e.iconClass]))
      },
      [q(e.$slots, "icon", {}, () => [ee(
        r,
        {
          class: "var--flex",
          name: e.icon
        },
        null,
        8,
        ["name"]
      )])],
      2
    )) : Z("v-if", !0), A(
      "div",
      {
        class: m(e.n("content"))
      },
      [A(
        "div",
        {
          class: m(e.classes(e.n("title"), [e.titleClass, e.titleClass]))
        },
        [q(e.$slots, "default", {}, () => [he(
          J(e.title),
          1
        )])],
        2
      ), e.$slots.description || e.description ? (w(), I(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("description"), [e.descriptionClass, e.descriptionClass]))
        },
        [q(e.$slots, "description", {}, () => [he(
          J(e.description),
          1
        )])],
        2
      )) : Z("v-if", !0)],
      2
    ), e.$slots.extra ? (w(), I(
      "div",
      {
        key: 1,
        class: m(e.classes(e.n("extra"), [e.extraClass, e.extraClass]))
      },
      [q(e.$slots, "extra")],
      2
    )) : Z("v-if", !0)],
    2
  );
}
const tr = ae({
  render: hd,
  name: "VarCell",
  components: {
    VarIcon: $e
  },
  props: cd,
  setup() {
    return {
      n: md,
      classes: pd
    };
  }
});
tr.install = function(e) {
  e.component(tr.name, tr);
};
var gd = {
  errorMessage: {
    type: String,
    default: ""
  },
  maxlengthText: {
    type: String,
    default: ""
  }
}, {
  n: yd
} = _("form-details");
function bd(e, n) {
  return w(), me(
    je,
    {
      name: e.n()
    },
    {
      default: ce(() => [e.errorMessage || e.maxlengthText ? (w(), I(
        "div",
        {
          key: 0,
          class: m(e.n())
        },
        [A(
          "div",
          {
            class: m(e.n("message"))
          },
          J(e.errorMessage),
          3
        ), A(
          "div",
          {
            class: m(e.n("length"))
          },
          J(e.maxlengthText),
          3
        )],
        2
      )) : Z("v-if", !0)]),
      _: 1
    },
    8,
    ["name"]
  );
}
const We = ae({
  render: bd,
  name: "VarFormDetails",
  props: gd,
  setup: () => ({
    n: yd
  })
});
We.install = function(e) {
  e.component(We.name, We);
};
var wd = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  checkedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !0
  },
  uncheckedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  checkedColor: {
    type: String
  },
  uncheckedColor: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  iconSize: {
    type: [String, Number]
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: ["onChange"]
  },
  rules: {
    type: Array
  },
  onClick: {
    type: Function
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, wl = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY"), Sl = Symbol("CHECKBOX_GROUP_COUNT_CHECKBOX_KEY");
function Sd() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(wl), {
    length: r
  } = gn(Sl);
  return {
    length: r,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function Cd() {
  var {
    bindParent: e,
    parentProvider: n
  } = dn(wl), {
    index: r
  } = yn(Sl);
  return {
    index: r,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
var Cl = Symbol("FORM_BIND_FORM_ITEM_KEY");
function wn() {
  var {
    bindParent: e,
    parentProvider: n
  } = dn(Cl);
  return {
    bindForm: e,
    form: n
  };
}
function kd() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(Cl);
  return {
    formItems: n,
    bindFormItems: e
  };
}
var {
  n: $d,
  classes: Td
} = _("checkbox");
function Od(e, n) {
  var r = re("var-icon"), a = re("var-form-details"), t = Ge("ripple");
  return w(), I(
    "div",
    {
      class: m(e.n("wrap")),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [A(
      "div",
      {
        class: m(e.n())
      },
      [Ce((w(), I(
        "div",
        {
          class: m(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: K({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? q(e.$slots, "checked-icon", {
          key: 0
        }, () => [ee(
          r,
          {
            class: m(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            name: "checkbox-marked",
            size: e.iconSize,
            "var-checkbox-cover": ""
          },
          null,
          8,
          ["class", "size"]
        )]) : q(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [ee(
          r,
          {
            class: m(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            name: "checkbox-blank-outline",
            size: e.iconSize,
            "var-checkbox-cover": ""
          },
          null,
          8,
          ["class", "size"]
        )])],
        6
      )), [[t, {
        disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
      }]]), A(
        "div",
        {
          class: m(e.classes(e.n("text"), [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")]))
        },
        [q(e.$slots, "default")],
        2
      )],
      2
    ), ee(
      a,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
  );
}
const ir = ae({
  render: Od,
  name: "VarCheckbox",
  directives: {
    Ripple: Le
  },
  components: {
    VarIcon: $e,
    VarFormDetails: We
  },
  props: wd,
  setup(e) {
    var n = E(!1), r = W(() => n.value === e.checkedValue), a = W(() => e.checkedValue), t = E(!1), {
      checkboxGroup: i,
      bindCheckboxGroup: o
    } = Cd(), {
      form: l,
      bindForm: s
    } = wn(), {
      errorMessage: u,
      validateWithTrigger: d,
      validate: v,
      resetValidation: f
    } = bn(), c = ($) => {
      Pe(() => {
        var {
          validateTrigger: B,
          rules: C,
          modelValue: D
        } = e;
        d(B, $, C, D);
      });
    }, p = ($) => {
      n.value = $;
      var {
        checkedValue: B,
        onChange: C
      } = e;
      N(e["onUpdate:modelValue"], n.value), N(C, n.value), c("onChange"), $ === B ? i == null || i.onChecked(B) : i == null || i.onUnchecked(B);
    }, b = ($) => {
      var {
        disabled: B,
        readonly: C,
        checkedValue: D,
        uncheckedValue: P,
        onClick: k
      } = e;
      if (!(l != null && l.disabled.value || B) && (N(k, $), !(l != null && l.readonly.value || C))) {
        t.value = !0;
        var O = i ? i.checkedCount.value >= Number(i.max.value) : !1;
        !r.value && O || p(r.value ? P : D);
      }
    }, y = ($) => {
      var {
        checkedValue: B,
        uncheckedValue: C
      } = e;
      n.value = $.includes(B) ? B : C;
    }, T = () => {
      t.value = !1;
    }, S = () => {
      N(e["onUpdate:modelValue"], e.uncheckedValue), f();
    }, h = ($) => {
      var {
        checkedValue: B,
        uncheckedValue: C
      } = e, D = ![B, C].includes($);
      D && ($ = r.value ? C : B), p($);
    }, g = () => v(e.rules, e.modelValue);
    ne(() => e.modelValue, ($) => {
      n.value = $;
    }, {
      immediate: !0
    });
    var M = {
      checkedValue: a,
      checked: r,
      sync: y,
      validate: g,
      resetValidation: f,
      reset: S,
      resetWithAnimation: T
    };
    return N(o, M), N(s, M), {
      withAnimation: t,
      checked: r,
      errorMessage: u,
      checkboxGroupErrorMessage: i == null ? void 0 : i.errorMessage,
      formDisabled: l == null ? void 0 : l.disabled,
      formReadonly: l == null ? void 0 : l.readonly,
      n: $d,
      classes: Td,
      handleClick: b,
      toggle: h,
      reset: S,
      validate: g,
      resetValidation: f
    };
  }
});
ir.install = function(e) {
  e.component(ir.name, ir);
};
function Pd(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Ed = {
  modelValue: {
    type: Array,
    default: () => []
  },
  max: {
    type: [String, Number]
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: Pd
  },
  validateTrigger: {
    type: Array,
    default: ["onChange"]
  },
  rules: {
    type: Array
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, {
  n: Vd,
  classes: Md
} = _("checkbox-group");
function Id(e, n) {
  var r = re("var-form-details");
  return w(), I(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [q(e.$slots, "default")],
      2
    ), ee(
      r,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
  );
}
const Ir = ae({
  render: Id,
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: We
  },
  props: Ed,
  setup(e) {
    var n = W(() => e.max), r = W(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: i
    } = Sd(), {
      bindForm: o
    } = wn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      resetValidation: d
    } = bn(), v = W(() => l.value), f = (B) => {
      Pe(() => {
        var {
          validateTrigger: C,
          rules: D,
          modelValue: P
        } = e;
        s(C, B, D, P);
      });
    }, c = (B) => {
      N(e["onUpdate:modelValue"], B), N(e.onChange, B), f("onChange");
    }, p = (B) => {
      var {
        modelValue: C
      } = e;
      C.includes(B) || c([...C, B]);
    }, b = (B) => {
      var {
        modelValue: C
      } = e;
      !C.includes(B) || c(C.filter((D) => D !== B));
    }, y = () => t.forEach((B) => {
      var {
        sync: C
      } = B;
      return C(e.modelValue);
    }), T = () => {
      t.forEach((B) => B.resetWithAnimation());
    }, S = () => {
      var B = t.map((D) => {
        var {
          checkedValue: P
        } = D;
        return P.value;
      }), C = Gi(B);
      return T(), N(e["onUpdate:modelValue"], C), C;
    }, h = () => {
      var B = t.filter((D) => {
        var {
          checked: P
        } = D;
        return !P.value;
      }).map((D) => {
        var {
          checkedValue: P
        } = D;
        return P.value;
      }), C = Gi(B);
      return T(), N(e["onUpdate:modelValue"], C), C;
    }, g = () => {
      N(e["onUpdate:modelValue"], []), d();
    }, M = () => u(e.rules, e.modelValue);
    ne(() => e.modelValue, y, {
      deep: !0
    }), ne(() => a.value, y);
    var $ = {
      max: n,
      checkedCount: r,
      onChecked: p,
      onUnchecked: b,
      validate: M,
      resetValidation: d,
      reset: g,
      errorMessage: v
    };
    return i($), N(o, $), {
      errorMessage: l,
      n: Vd,
      classes: Md,
      checkAll: S,
      inverseAll: h,
      reset: g,
      validate: M,
      resetValidation: d
    };
  }
});
Ir.install = function(e) {
  e.component(Ir.name, Ir);
};
function Nd(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Dd(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var Bd = {
  type: {
    type: String,
    default: "default",
    validator: Nd
  },
  size: {
    type: String,
    default: "normal",
    validator: Dd
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: Ze(fl, "name"),
  plain: {
    type: Boolean,
    default: !1
  },
  round: {
    type: Boolean,
    default: !0
  },
  block: {
    type: Boolean,
    default: !1
  },
  closable: {
    type: Boolean,
    default: !1
  },
  onClose: {
    type: Function
  }
}, {
  n: yr,
  classes: Ad
} = _("chip");
function zd(e, n) {
  var r = re("var-icon");
  return w(), me(je, {
    name: "var-fade"
  }, {
    default: ce(() => [A(
      "span",
      Te({
        class: e.classes(e.n(), "var--box", ...e.contentClass),
        style: e.chipStyles
      }, e.$attrs),
      [q(e.$slots, "left"), A(
        "span",
        {
          class: m(e.n("text-" + e.size))
        },
        [q(e.$slots, "default")],
        2
      ), q(e.$slots, "right"), e.closable ? (w(), I(
        "span",
        {
          key: 0,
          class: m(e.n("--close")),
          onClick: n[0] || (n[0] = function() {
            return e.onClose && e.onClose(...arguments);
          })
        },
        [ee(
          r,
          {
            name: "" + (e.iconName ? e.iconName : "close-circle")
          },
          null,
          8,
          ["name"]
        )],
        2
      )) : Z("v-if", !0)],
      16
    )]),
    _: 3
  });
}
const or = ae({
  render: zd,
  name: "VarChip",
  components: {
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Bd,
  setup(e) {
    var n = W(() => {
      var {
        plain: a,
        textColor: t,
        color: i
      } = e;
      return a ? {
        color: t || i,
        borderColor: i
      } : {
        color: t,
        background: i
      };
    }), r = W(() => {
      var {
        size: a,
        block: t,
        type: i,
        plain: o,
        round: l
      } = e, s = t ? "var--flex" : "var--inline-flex", u = o ? yr("plain") + " " + yr("plain-" + i) : yr("--" + i), d = l ? yr("--round") : null;
      return [yr("--" + a), s, u, d];
    });
    return {
      n: yr,
      classes: Ad,
      chipStyles: n,
      contentClass: r
    };
  }
});
or.install = function(e) {
  e.component(or.name, or);
};
var Fd = {
  span: {
    type: [String, Number],
    default: 24
  },
  offset: {
    type: [String, Number],
    default: 0
  },
  onClick: {
    type: Function
  },
  xs: {
    type: [Object, Number, String]
  },
  sm: {
    type: [Object, Number, String]
  },
  md: {
    type: [Object, Number, String]
  },
  lg: {
    type: [Object, Number, String]
  },
  xl: {
    type: [Object, Number, String]
  }
}, kl = Symbol("ROW_BIND_COL_KEY"), $l = Symbol("ROW_COUNT_COL_KEY");
function Ld() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(kl), {
    length: r
  } = gn($l);
  return {
    length: r,
    cols: n,
    bindCols: e
  };
}
function Rd() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(kl), {
    index: r
  } = yn($l);
  return (!e || !n || !r) && console.warn("col must in row"), {
    index: r,
    row: e,
    bindRow: n
  };
}
var {
  n: Wa,
  classes: Ud
} = _("col");
function Yd(e, n) {
  return w(), I(
    "div",
    {
      class: m(e.classes(e.n(), "var--box", [e.span >= 0, e.n("--span-" + e.span)], [e.offset, e.n("--offset-" + e.offset)], ...e.getSize("xs", e.xs), ...e.getSize("sm", e.sm), ...e.getSize("md", e.md), ...e.getSize("lg", e.lg), ...e.getSize("xl", e.xl))),
      style: K({
        paddingLeft: e.toSizeUnit(e.padding.left),
        paddingRight: e.toSizeUnit(e.padding.right)
      }),
      onClick: n[0] || (n[0] = function() {
        return e.onClick && e.onClick(...arguments);
      })
    },
    [q(e.$slots, "default")],
    6
  );
}
const Nr = ae({
  render: Yd,
  name: "VarCol",
  props: Fd,
  setup(e) {
    var n = E({
      left: 0,
      right: 0
    }), r = W(() => L(e.span)), a = W(() => L(e.offset)), {
      row: t,
      bindRow: i
    } = Rd(), o = {
      setPadding(s) {
        n.value = s;
      }
    }, l = (s, u) => {
      var d = [];
      if (u == null)
        return d;
      if (ki(u)) {
        var {
          offset: v,
          span: f
        } = u;
        Number(f) >= 0 && d.push(Wa("--span-" + s + "-" + f)), v && d.push(Wa("--offset-" + s + "-" + v));
      } else
        Number(u) >= 0 && d.push(Wa("--span-" + s + "-" + u));
      return d;
    };
    return ne([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), N(i, o), {
      n: Wa,
      classes: Ud,
      padding: n,
      toNumber: L,
      toSizeUnit: Ve,
      getSize: l,
      span: r,
      offset: a
    };
  }
});
Nr.install = function(e) {
  e.component(Nr.name, Nr);
};
var Tl = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY"), Ol = Symbol("COLLAPSE_COUNT_COLLAPSE_ITEM_KEY");
function Wd() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(Tl), {
    length: r
  } = gn(Ol);
  return {
    length: r,
    collapseItem: n,
    bindCollapseItem: e
  };
}
var Hd = {
  modelValue: {
    type: [Array, String, Number]
  },
  accordion: {
    type: Boolean,
    default: !1
  },
  offset: {
    type: Boolean,
    default: !0
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, {
  n: jd
} = _("collapse");
function Gd(e, n) {
  return w(), I(
    "div",
    {
      class: m(e.n())
    },
    [q(e.$slots, "default")],
    2
  );
}
const Dr = ae({
  render: Gd,
  name: "VarCollapse",
  props: Hd,
  setup(e) {
    var {
      length: n,
      collapseItem: r,
      bindCollapseItem: a
    } = Wd(), t = W(() => e.modelValue), i = W(() => e.offset), o = () => !e.accordion && !Se(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && Se(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, l = (c, p) => o() ? p ? e.accordion ? c : [...e.modelValue, c] : e.accordion ? null : e.modelValue.filter((b) => b !== c) : null, s = (c, p) => {
      var b = l(c, p);
      N(e["onUpdate:modelValue"], b), N(e.onChange, b);
    }, u = () => {
      if (e.accordion)
        return r.find((p) => {
          var {
            name: b
          } = p;
          return e.modelValue === b.value;
        });
      var c = r.filter((p) => {
        var {
          name: b
        } = p;
        return b.value === void 0 ? !1 : e.modelValue.includes(b.value);
      });
      return c.length ? c : void 0;
    }, d = () => e.accordion ? r.find((c) => {
      var {
        index: p,
        name: b
      } = c;
      return b.value === void 0 ? e.modelValue === p.value : !1;
    }) : r.filter((c) => {
      var {
        index: p,
        name: b
      } = c;
      return b.value === void 0 ? e.modelValue.includes(p.value) : !1;
    }), v = () => {
      if (!!o()) {
        var c = u() || d();
        if (e.accordion && !c || !e.accordion && !c.length) {
          r.forEach((p) => {
            p.init(e.accordion, !1);
          });
          return;
        }
        r.forEach((p) => {
          var b = e.accordion ? c === p : c.includes(p);
          p.init(e.accordion, b);
        });
      }
    }, f = {
      active: t,
      offset: i,
      updateItem: s
    };
    return a(f), ne(() => n.value, () => Pe().then(v)), ne(() => e.modelValue, () => Pe().then(v)), {
      n: jd
    };
  }
});
Dr.install = function(e) {
  e.component(Dr.name, Dr);
};
function qd() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(Tl), {
    index: r
  } = yn(Ol);
  if (!e || !n || !r)
    throw Error("[Varlet] Collapse: <var-collapse-item/> must in <var-collapse>");
  return {
    index: r,
    collapse: e,
    bindCollapse: n
  };
}
var Kd = {
  name: {
    type: [String, Number]
  },
  title: {
    type: String
  },
  icon: {
    type: String,
    default: "chevron-down"
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, {
  n: Xd,
  classes: Zd
} = _("collapse-item");
function Jd(e, n) {
  var r = re("var-icon");
  return w(), I(
    "div",
    {
      class: m(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")]))
    },
    [A(
      "div",
      {
        class: m(e.n("header")),
        onClick: n[0] || (n[0] = (a) => e.toggle())
      },
      [A(
        "div",
        {
          class: m(e.n("header-title"))
        },
        [q(e.$slots, "title", {}, () => [he(
          J(e.title),
          1
        )])],
        2
      ), A(
        "div",
        {
          class: m(e.n("header-icon"))
        },
        [q(e.$slots, "icon", {}, () => [ee(
          r,
          {
            name: e.icon,
            transition: 250,
            class: m(e.classes(e.n("header-icon"), [e.isShow && e.icon === "chevron-down", e.n("header-open")], [e.disabled, e.n("header--disable")]))
          },
          null,
          8,
          ["name", "class"]
        )])],
        2
      )],
      2
    ), Ce(A(
      "div",
      {
        class: m(e.n("content")),
        ref: "contentEl",
        onTransitionend: n[1] || (n[1] = function() {
          return e.transitionend && e.transitionend(...arguments);
        }),
        onTransitionstart: n[2] || (n[2] = function() {
          return e.start && e.start(...arguments);
        })
      },
      [A(
        "div",
        {
          class: m(e.n("content-wrap"))
        },
        [q(e.$slots, "default")],
        2
      )],
      34
    ), [[Aa, e.show]])],
    2
  );
}
const Br = ae({
  render: Jd,
  name: "VarCollapseItem",
  components: {
    VarIcon: $e
  },
  props: Kd,
  setup(e) {
    var {
      index: n,
      collapse: r,
      bindCollapse: a
    } = qd(), t = !0, i = E(null), o = E(!1), l = E(!1), {
      active: s,
      offset: u,
      updateItem: d
    } = r, v = W(() => e.name), f = (h, g) => {
      s.value === void 0 || h && Se(s.value) || g === l.value || (l.value = g, c(!0));
    }, c = (h) => {
      e.disabled || h || d(e.name || n.value, !l.value);
    }, p = () => {
      !i.value || (i.value.style.height = "", o.value = !0, Pe(() => {
        var {
          offsetHeight: h
        } = i.value;
        i.value.style.height = 0 + "px", kn(() => {
          i.value.style.height = h + "px", t && vt(() => {
            t && T();
          });
        });
      }));
    }, b = () => {
      t = !1;
    }, y = () => {
      if (!!i.value) {
        var {
          offsetHeight: h
        } = i.value;
        i.value.style.height = h + "px", kn(() => {
          i.value.style.height = 0 + "px";
        });
      }
    }, T = () => {
      l.value || (o.value = !1), i.value.style.height = "";
    }, S = {
      index: n,
      name: v,
      init: f
    };
    return a(S), ne(l, (h) => {
      h ? p() : y();
    }), {
      n: Xd,
      start: b,
      classes: Zd,
      show: o,
      isShow: l,
      offset: u,
      toggle: c,
      contentEl: i,
      transitionend: T
    };
  }
});
Br.install = function(e) {
  e.component(Br.name, Br);
};
var Qd = {
  time: {
    type: [String, Number],
    default: 0
  },
  format: {
    type: String,
    default: "HH : mm : ss"
  },
  autoStart: {
    type: Boolean,
    default: !0
  },
  onEnd: {
    type: Function
  },
  onChange: {
    type: Function
  }
}, {
  n: xd
} = _("countdown"), Ht = 1e3, jt = 60 * Ht, Gt = 60 * jt, oo = 24 * Gt;
function _d(e, n) {
  return w(), I(
    "div",
    {
      class: m(e.n())
    },
    [q(e.$slots, "default", el(Is(e.timeData)), () => [he(
      J(e.showTime),
      1
    )])],
    2
  );
}
const Ar = ae({
  render: _d,
  name: "VarCountdown",
  props: Qd,
  setup(e) {
    var n = E(0), r = E(!1), a = E(""), t = E(0), i = E(0), o = E({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), l = (c, p) => {
      var b = Object.values(p), y = ["DD", "HH", "mm", "ss"], T = [24, 60, 60, 1e3];
      if (y.forEach((h, g) => {
        c.includes(h) ? c = c.replace(h, String(b[g]).padStart(2, "0")) : b[g + 1] += b[g] * T[g];
      }), c.includes("S")) {
        var S = String(b[b.length - 1]).padStart(3, "0");
        c.includes("SSS") ? c = c.replace("SSS", S) : c.includes("SS") ? c = c.replace("SS", S.slice(0, 2)) : c = c.replace("S", S.slice(0, 1));
      }
      return c;
    }, s = (c) => {
      var p = Math.floor(c / oo), b = Math.floor(c % oo / Gt), y = Math.floor(c % Gt / jt), T = Math.floor(c % jt / Ht), S = Math.floor(c % Ht), h = {
        days: p,
        hours: b,
        minutes: y,
        seconds: T,
        milliseconds: S
      };
      o.value = h, N(e.onChange, o.value), a.value = l(e.format, h);
    }, u = () => {
      var {
        time: c,
        onEnd: p,
        autoStart: b
      } = e, y = Date.now();
      n.value || (n.value = y + L(c));
      var T = n.value - y;
      if (T < 0 && (T = 0), i.value = T, s(T), T === 0) {
        N(p);
        return;
      }
      (b || r.value) && (t.value = kn(u));
    }, d = () => {
      r.value || (r.value = !0, n.value = Date.now() + (i.value || L(e.time)), u());
    }, v = () => {
      r.value = !1;
    }, f = () => {
      n.value = 0, r.value = !1, Gs(t.value), u();
    };
    return ne(() => e.time, () => f(), {
      immediate: !0
    }), {
      showTime: a,
      timeData: o,
      n: xd,
      start: d,
      pause: v,
      reset: f
    };
  }
});
Ar.install = function(e) {
  e.component(Ar.name, Ar);
};
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var wr = 9e15, _n = 1e9, qt = "0123456789abcdef", et = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", nt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Kt = {
  precision: 20,
  rounding: 4,
  modulo: 1,
  toExpNeg: -7,
  toExpPos: 21,
  minE: -wr,
  maxE: wr,
  crypto: !1
}, Pl, On, de = !0, pt = "[DecimalError] ", Zn = pt + "Invalid argument: ", El = pt + "Precision limit exceeded", Vl = pt + "crypto unavailable", Ml = "[object Decimal]", qe = Math.floor, ze = Math.pow, ev = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, nv = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, rv = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Il = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, pn = 1e7, ue = 7, av = 9007199254740991, tv = et.length - 1, Xt = nt.length - 1, j = { toStringTag: Ml };
j.absoluteValue = j.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), le(e);
};
j.ceil = function() {
  return le(new this.constructor(this), this.e + 1, 2);
};
j.clampedTo = j.clamp = function(e, n) {
  var r, a = this, t = a.constructor;
  if (e = new t(e), n = new t(n), !e.s || !n.s)
    return new t(NaN);
  if (e.gt(n))
    throw Error(Zn + n);
  return r = a.cmp(e), r < 0 ? e : a.cmp(n) > 0 ? n : new t(a);
};
j.comparedTo = j.cmp = function(e) {
  var n, r, a, t, i = this, o = i.d, l = (e = new i.constructor(e)).d, s = i.s, u = e.s;
  if (!o || !l)
    return !s || !u ? NaN : s !== u ? s : o === l ? 0 : !o ^ s < 0 ? 1 : -1;
  if (!o[0] || !l[0])
    return o[0] ? s : l[0] ? -u : 0;
  if (s !== u)
    return s;
  if (i.e !== e.e)
    return i.e > e.e ^ s < 0 ? 1 : -1;
  for (a = o.length, t = l.length, n = 0, r = a < t ? a : t; n < r; ++n)
    if (o[n] !== l[n])
      return o[n] > l[n] ^ s < 0 ? 1 : -1;
  return a === t ? 0 : a > t ^ s < 0 ? 1 : -1;
};
j.cosine = j.cos = function() {
  var e, n, r = this, a = r.constructor;
  return r.d ? r.d[0] ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + ue, a.rounding = 1, r = iv(a, zl(a, r)), a.precision = e, a.rounding = n, le(On == 2 || On == 3 ? r.neg() : r, e, n, !0)) : new a(1) : new a(NaN);
};
j.cubeRoot = j.cbrt = function() {
  var e, n, r, a, t, i, o, l, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (de = !1, i = d.s * ze(d.s * d, 1 / 3), !i || Math.abs(i) == 1 / 0 ? (r = Ye(d.d), e = d.e, (i = (e - r.length + 1) % 3) && (r += i == 1 || i == -2 ? "0" : "00"), i = ze(r, 1 / 3), e = qe((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), i == 1 / 0 ? r = "5e" + e : (r = i.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), a = new v(r), a.s = d.s) : a = new v(i.toString()), o = (e = v.precision) + 3; ; )
    if (l = a, s = l.times(l).times(l), u = s.plus(d), a = ke(u.plus(d).times(l), u.plus(s), o + 2, 1), Ye(l.d).slice(0, o) === (r = Ye(a.d)).slice(0, o))
      if (r = r.slice(o - 3, o + 1), r == "9999" || !t && r == "4999") {
        if (!t && (le(l, e + 1, 0), l.times(l).times(l).eq(d))) {
          a = l;
          break;
        }
        o += 4, t = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (le(a, e + 1, 1), n = !a.times(a).times(a).eq(d));
        break;
      }
  return de = !0, le(a, e, v.rounding, n);
};
j.decimalPlaces = j.dp = function() {
  var e, n = this.d, r = NaN;
  if (n) {
    if (e = n.length - 1, r = (e - qe(this.e / ue)) * ue, e = n[e], e)
      for (; e % 10 == 0; e /= 10)
        r--;
    r < 0 && (r = 0);
  }
  return r;
};
j.dividedBy = j.div = function(e) {
  return ke(this, new this.constructor(e));
};
j.dividedToIntegerBy = j.divToInt = function(e) {
  var n = this, r = n.constructor;
  return le(ke(n, new r(e), 0, 1, 1), r.precision, r.rounding);
};
j.equals = j.eq = function(e) {
  return this.cmp(e) === 0;
};
j.floor = function() {
  return le(new this.constructor(this), this.e + 1, 3);
};
j.greaterThan = j.gt = function(e) {
  return this.cmp(e) > 0;
};
j.greaterThanOrEqualTo = j.gte = function(e) {
  var n = this.cmp(e);
  return n == 1 || n === 0;
};
j.hyperbolicCosine = j.cosh = function() {
  var e, n, r, a, t, i = this, o = i.constructor, l = new o(1);
  if (!i.isFinite())
    return new o(i.s ? 1 / 0 : NaN);
  if (i.isZero())
    return l;
  r = o.precision, a = o.rounding, o.precision = r + Math.max(i.e, i.sd()) + 4, o.rounding = 1, t = i.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / gt(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), i = ma(o, 1, i.times(n), new o(1), !0);
  for (var s, u = e, d = new o(8); u--; )
    s = i.times(i), i = l.minus(s.times(d.minus(s.times(d))));
  return le(i, o.precision = r, o.rounding = a, !0);
};
j.hyperbolicSine = j.sinh = function() {
  var e, n, r, a, t = this, i = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new i(t);
  if (n = i.precision, r = i.rounding, i.precision = n + Math.max(t.e, t.sd()) + 4, i.rounding = 1, a = t.d.length, a < 3)
    t = ma(i, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / gt(5, e)), t = ma(i, 2, t, t, !0);
    for (var o, l = new i(5), s = new i(16), u = new i(20); e--; )
      o = t.times(t), t = t.times(l.plus(o.times(s.times(o).plus(u))));
  }
  return i.precision = n, i.rounding = r, le(t, n, r, !0);
};
j.hyperbolicTangent = j.tanh = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 7, a.rounding = 1, ke(r.sinh(), r.cosh(), a.precision = e, a.rounding = n)) : new a(r.s);
};
j.inverseCosine = j.acos = function() {
  var e, n = this, r = n.constructor, a = n.abs().cmp(1), t = r.precision, i = r.rounding;
  return a !== -1 ? a === 0 ? n.isNeg() ? cn(r, t, i) : new r(0) : new r(NaN) : n.isZero() ? cn(r, t + 4, i).times(0.5) : (r.precision = t + 6, r.rounding = 1, n = n.asin(), e = cn(r, t + 4, i).times(0.5), r.precision = t, r.rounding = i, e.minus(n));
};
j.inverseHyperbolicCosine = j.acosh = function() {
  var e, n, r = this, a = r.constructor;
  return r.lte(1) ? new a(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, a.rounding = 1, de = !1, r = r.times(r).minus(1).sqrt().plus(r), de = !0, a.precision = e, a.rounding = n, r.ln()) : new a(r);
};
j.inverseHyperbolicSine = j.asinh = function() {
  var e, n, r = this, a = r.constructor;
  return !r.isFinite() || r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, a.rounding = 1, de = !1, r = r.times(r).plus(1).sqrt().plus(r), de = !0, a.precision = e, a.rounding = n, r.ln());
};
j.inverseHyperbolicTangent = j.atanh = function() {
  var e, n, r, a, t = this, i = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new i(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = i.precision, n = i.rounding, a = t.sd(), Math.max(a, e) < 2 * -t.e - 1 ? le(new i(t), e, n, !0) : (i.precision = r = a - t.e, t = ke(t.plus(1), new i(1).minus(t), r + e, 1), i.precision = e + 4, i.rounding = 1, t = t.ln(), i.precision = e, i.rounding = n, t.times(0.5))) : new i(NaN);
};
j.inverseSine = j.asin = function() {
  var e, n, r, a, t = this, i = t.constructor;
  return t.isZero() ? new i(t) : (n = t.abs().cmp(1), r = i.precision, a = i.rounding, n !== -1 ? n === 0 ? (e = cn(i, r + 4, a).times(0.5), e.s = t.s, e) : new i(NaN) : (i.precision = r + 6, i.rounding = 1, t = t.div(new i(1).minus(t.times(t)).sqrt().plus(1)).atan(), i.precision = r, i.rounding = a, t.times(2)));
};
j.inverseTangent = j.atan = function() {
  var e, n, r, a, t, i, o, l, s, u = this, d = u.constructor, v = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && v + 4 <= Xt)
      return o = cn(d, v + 4, f).times(0.25), o.s = u.s, o;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= Xt)
      return o = cn(d, v + 4, f).times(0.5), o.s = u.s, o;
  }
  for (d.precision = l = v + 10, d.rounding = 1, r = Math.min(28, l / ue + 2 | 0), e = r; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (de = !1, n = Math.ceil(l / ue), a = 1, s = u.times(u), o = new d(u), t = u; e !== -1; )
    if (t = t.times(s), i = o.minus(t.div(a += 2)), t = t.times(s), o = i.plus(t.div(a += 2)), o.d[n] !== void 0)
      for (e = n; o.d[e] === i.d[e] && e--; )
        ;
  return r && (o = o.times(2 << r - 1)), de = !0, le(o, d.precision = v, d.rounding = f, !0);
};
j.isFinite = function() {
  return !!this.d;
};
j.isInteger = j.isInt = function() {
  return !!this.d && qe(this.e / ue) > this.d.length - 2;
};
j.isNaN = function() {
  return !this.s;
};
j.isNegative = j.isNeg = function() {
  return this.s < 0;
};
j.isPositive = j.isPos = function() {
  return this.s > 0;
};
j.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
j.lessThan = j.lt = function(e) {
  return this.cmp(e) < 0;
};
j.lessThanOrEqualTo = j.lte = function(e) {
  return this.cmp(e) < 1;
};
j.logarithm = j.log = function(e) {
  var n, r, a, t, i, o, l, s, u = this, d = u.constructor, v = d.precision, f = d.rounding, c = 5;
  if (e == null)
    e = new d(10), n = !0;
  else {
    if (e = new d(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1))
      return new d(NaN);
    n = e.eq(10);
  }
  if (r = u.d, u.s < 0 || !r || !r[0] || u.eq(1))
    return new d(r && !r[0] ? -1 / 0 : u.s != 1 ? NaN : r ? 0 : 1 / 0);
  if (n)
    if (r.length > 1)
      i = !0;
    else {
      for (t = r[0]; t % 10 === 0; )
        t /= 10;
      i = t !== 1;
    }
  if (de = !1, l = v + c, o = Wn(u, l), a = n ? rt(d, l + 10) : Wn(e, l), s = ke(o, a, l, 1), Va(s.d, t = v, f))
    do
      if (l += 10, o = Wn(u, l), a = n ? rt(d, l + 10) : Wn(e, l), s = ke(o, a, l, 1), !i) {
        +Ye(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = le(s, v + 1, 0));
        break;
      }
    while (Va(s.d, t += 10, f));
  return de = !0, le(s, v, f);
};
j.minus = j.sub = function(e) {
  var n, r, a, t, i, o, l, s, u, d, v, f, c = this, p = c.constructor;
  if (e = new p(e), !c.d || !e.d)
    return !c.s || !e.s ? e = new p(NaN) : c.d ? e.s = -e.s : e = new p(e.d || c.s !== e.s ? c : NaN), e;
  if (c.s != e.s)
    return e.s = -e.s, c.plus(e);
  if (u = c.d, f = e.d, l = p.precision, s = p.rounding, !u[0] || !f[0]) {
    if (f[0])
      e.s = -e.s;
    else if (u[0])
      e = new p(c);
    else
      return new p(s === 3 ? -0 : 0);
    return de ? le(e, l, s) : e;
  }
  if (r = qe(e.e / ue), d = qe(c.e / ue), u = u.slice(), i = d - r, i) {
    for (v = i < 0, v ? (n = u, i = -i, o = f.length) : (n = f, r = d, o = u.length), a = Math.max(Math.ceil(l / ue), o) + 2, i > a && (i = a, n.length = 1), n.reverse(), a = i; a--; )
      n.push(0);
    n.reverse();
  } else {
    for (a = u.length, o = f.length, v = a < o, v && (o = a), a = 0; a < o; a++)
      if (u[a] != f[a]) {
        v = u[a] < f[a];
        break;
      }
    i = 0;
  }
  for (v && (n = u, u = f, f = n, e.s = -e.s), o = u.length, a = f.length - o; a > 0; --a)
    u[o++] = 0;
  for (a = f.length; a > i; ) {
    if (u[--a] < f[a]) {
      for (t = a; t && u[--t] === 0; )
        u[t] = pn - 1;
      --u[t], u[a] += pn;
    }
    u[a] -= f[a];
  }
  for (; u[--o] === 0; )
    u.pop();
  for (; u[0] === 0; u.shift())
    --r;
  return u[0] ? (e.d = u, e.e = ht(u, r), de ? le(e, l, s) : e) : new p(s === 3 ? -0 : 0);
};
j.modulo = j.mod = function(e) {
  var n, r = this, a = r.constructor;
  return e = new a(e), !r.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || r.d && !r.d[0] ? le(new a(r), a.precision, a.rounding) : (de = !1, a.modulo == 9 ? (n = ke(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = ke(r, e, 0, a.modulo, 1), n = n.times(e), de = !0, r.minus(n));
};
j.naturalExponential = j.exp = function() {
  return Zt(this);
};
j.naturalLogarithm = j.ln = function() {
  return Wn(this);
};
j.negated = j.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, le(e);
};
j.plus = j.add = function(e) {
  var n, r, a, t, i, o, l, s, u, d, v = this, f = v.constructor;
  if (e = new f(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new f(NaN) : v.d || (e = new f(e.d || v.s === e.s ? v : NaN)), e;
  if (v.s != e.s)
    return e.s = -e.s, v.minus(e);
  if (u = v.d, d = e.d, l = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(v)), de ? le(e, l, s) : e;
  if (i = qe(v.e / ue), a = qe(e.e / ue), u = u.slice(), t = i - a, t) {
    for (t < 0 ? (r = u, t = -t, o = d.length) : (r = d, a = i, o = u.length), i = Math.ceil(l / ue), o = i > o ? i + 1 : o + 1, t > o && (t = o, r.length = 1), r.reverse(); t--; )
      r.push(0);
    r.reverse();
  }
  for (o = u.length, t = d.length, o - t < 0 && (t = o, r = d, d = u, u = r), n = 0; t; )
    n = (u[--t] = u[t] + d[t] + n) / pn | 0, u[t] %= pn;
  for (n && (u.unshift(n), ++a), o = u.length; u[--o] == 0; )
    u.pop();
  return e.d = u, e.e = ht(u, a), de ? le(e, l, s) : e;
};
j.precision = j.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(Zn + e);
  return r.d ? (n = Nl(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
j.round = function() {
  var e = this, n = e.constructor;
  return le(new n(e), e.e + 1, n.rounding);
};
j.sine = j.sin = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + ue, a.rounding = 1, r = lv(a, zl(a, r)), a.precision = e, a.rounding = n, le(On > 2 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
j.squareRoot = j.sqrt = function() {
  var e, n, r, a, t, i, o = this, l = o.d, s = o.e, u = o.s, d = o.constructor;
  if (u !== 1 || !l || !l[0])
    return new d(!u || u < 0 && (!l || l[0]) ? NaN : l ? o : 1 / 0);
  for (de = !1, u = Math.sqrt(+o), u == 0 || u == 1 / 0 ? (n = Ye(l), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = qe((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), a = new d(n)) : a = new d(u.toString()), r = (s = d.precision) + 3; ; )
    if (i = a, a = i.plus(ke(o, i, r + 2, 1)).times(0.5), Ye(i.d).slice(0, r) === (n = Ye(a.d)).slice(0, r))
      if (n = n.slice(r - 3, r + 1), n == "9999" || !t && n == "4999") {
        if (!t && (le(i, s + 1, 0), i.times(i).eq(o))) {
          a = i;
          break;
        }
        r += 4, t = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (le(a, s + 1, 1), e = !a.times(a).eq(o));
        break;
      }
  return de = !0, le(a, s, d.rounding, e);
};
j.tangent = j.tan = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 10, a.rounding = 1, r = r.sin(), r.s = 1, r = ke(r, new a(1).minus(r.times(r)).sqrt(), e + 10, 0), a.precision = e, a.rounding = n, le(On == 2 || On == 4 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
j.times = j.mul = function(e) {
  var n, r, a, t, i, o, l, s, u, d = this, v = d.constructor, f = d.d, c = (e = new v(e)).d;
  if (e.s *= d.s, !f || !f[0] || !c || !c[0])
    return new v(!e.s || f && !f[0] && !c || c && !c[0] && !f ? NaN : !f || !c ? e.s / 0 : e.s * 0);
  for (r = qe(d.e / ue) + qe(e.e / ue), s = f.length, u = c.length, s < u && (i = f, f = c, c = i, o = s, s = u, u = o), i = [], o = s + u, a = o; a--; )
    i.push(0);
  for (a = u; --a >= 0; ) {
    for (n = 0, t = s + a; t > a; )
      l = i[t] + c[a] * f[t - a - 1] + n, i[t--] = l % pn | 0, n = l / pn | 0;
    i[t] = (i[t] + n) % pn | 0;
  }
  for (; !i[--o]; )
    i.pop();
  return n ? ++r : i.shift(), e.d = i, e.e = ht(i, r), de ? le(e, v.precision, v.rounding) : e;
};
j.toBinary = function(e, n) {
  return Ei(this, 2, e, n);
};
j.toDecimalPlaces = j.toDP = function(e, n) {
  var r = this, a = r.constructor;
  return r = new a(r), e === void 0 ? r : (en(e, 0, _n), n === void 0 ? n = a.rounding : en(n, 0, 8), le(r, e + r.e + 1, n));
};
j.toExponential = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = $n(a, !0) : (en(e, 0, _n), n === void 0 ? n = t.rounding : en(n, 0, 8), a = le(new t(a), e + 1, n), r = $n(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
j.toFixed = function(e, n) {
  var r, a, t = this, i = t.constructor;
  return e === void 0 ? r = $n(t) : (en(e, 0, _n), n === void 0 ? n = i.rounding : en(n, 0, 8), a = le(new i(t), e + t.e + 1, n), r = $n(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
j.toFraction = function(e) {
  var n, r, a, t, i, o, l, s, u, d, v, f, c = this, p = c.d, b = c.constructor;
  if (!p)
    return new b(c);
  if (u = r = new b(1), a = s = new b(0), n = new b(a), i = n.e = Nl(p) - c.e - 1, o = i % ue, n.d[0] = ze(10, o < 0 ? ue + o : o), e == null)
    e = i > 0 ? n : u;
  else {
    if (l = new b(e), !l.isInt() || l.lt(u))
      throw Error(Zn + l);
    e = l.gt(n) ? i > 0 ? n : u : l;
  }
  for (de = !1, l = new b(Ye(p)), d = b.precision, b.precision = i = p.length * ue * 2; v = ke(l, n, 0, 1, 1), t = r.plus(v.times(a)), t.cmp(e) != 1; )
    r = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = n, n = l.minus(v.times(t)), l = t;
  return t = ke(e.minus(r), a, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(a)), s.s = u.s = c.s, f = ke(u, a, i, 1).minus(c).abs().cmp(ke(s, r, i, 1).minus(c).abs()) < 1 ? [u, a] : [s, r], b.precision = d, de = !0, f;
};
j.toHexadecimal = j.toHex = function(e, n) {
  return Ei(this, 16, e, n);
};
j.toNearest = function(e, n) {
  var r = this, a = r.constructor;
  if (r = new a(r), e == null) {
    if (!r.d)
      return r;
    e = new a(1), n = a.rounding;
  } else {
    if (e = new a(e), n === void 0 ? n = a.rounding : en(n, 0, 8), !r.d)
      return e.s ? r : e;
    if (!e.d)
      return e.s && (e.s = r.s), e;
  }
  return e.d[0] ? (de = !1, r = ke(r, e, 0, n, 1).times(e), de = !0, le(r)) : (e.s = r.s, r = e), r;
};
j.toNumber = function() {
  return +this;
};
j.toOctal = function(e, n) {
  return Ei(this, 8, e, n);
};
j.toPower = j.pow = function(e) {
  var n, r, a, t, i, o, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0])
    return new s(ze(+l, u));
  if (l = new s(l), l.eq(1))
    return l;
  if (a = s.precision, i = s.rounding, e.eq(1))
    return le(l, a, i);
  if (n = qe(e.e / ue), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= av)
    return t = Dl(s, l, r, a), e.s < 0 ? new s(1).div(t) : le(t, a, i);
  if (o = l.s, o < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if ((e.d[n] & 1) == 0 && (o = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = o, l;
  }
  return r = ze(+l, u), n = r == 0 || !isFinite(r) ? qe(u * (Math.log("0." + Ye(l.d)) / Math.LN10 + l.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? o / 0 : 0) : (de = !1, s.rounding = l.s = 1, r = Math.min(12, (n + "").length), t = Zt(e.times(Wn(l, a + r)), a), t.d && (t = le(t, a + 5, 1), Va(t.d, a, i) && (n = a + 10, t = le(Zt(e.times(Wn(l, n + r)), n), n + 5, 1), +Ye(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = le(t, a + 1, 0)))), t.s = o, de = !0, s.rounding = i, le(t, a, i));
};
j.toPrecision = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = $n(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (en(e, 1, _n), n === void 0 ? n = t.rounding : en(n, 0, 8), a = le(new t(a), e, n), r = $n(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
j.toSignificantDigits = j.toSD = function(e, n) {
  var r = this, a = r.constructor;
  return e === void 0 ? (e = a.precision, n = a.rounding) : (en(e, 1, _n), n === void 0 ? n = a.rounding : en(n, 0, 8)), le(new a(r), e, n);
};
j.toString = function() {
  var e = this, n = e.constructor, r = $n(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
j.truncated = j.trunc = function() {
  return le(new this.constructor(this), this.e + 1, 1);
};
j.valueOf = j.toJSON = function() {
  var e = this, n = e.constructor, r = $n(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function Ye(e) {
  var n, r, a, t = e.length - 1, i = "", o = e[0];
  if (t > 0) {
    for (i += o, n = 1; n < t; n++)
      a = e[n] + "", r = ue - a.length, r && (i += Bn(r)), i += a;
    o = e[n], a = o + "", r = ue - a.length, r && (i += Bn(r));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; )
    o /= 10;
  return i + o;
}
function en(e, n, r) {
  if (e !== ~~e || e < n || e > r)
    throw Error(Zn + e);
}
function Va(e, n, r, a) {
  var t, i, o, l;
  for (i = e[0]; i >= 10; i /= 10)
    --n;
  return --n < 0 ? (n += ue, t = 0) : (t = Math.ceil((n + 1) / ue), n %= ue), i = ze(10, ue - n), l = e[t] % i | 0, a == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), o = r < 4 && l == 99999 || r > 3 && l == 49999 || l == 5e4 || l == 0) : o = (r < 4 && l + 1 == i || r > 3 && l + 1 == i / 2) && (e[t + 1] / i / 100 | 0) == ze(10, n - 2) - 1 || (l == i / 2 || l == 0) && (e[t + 1] / i / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), o = (a || r < 4) && l == 9999 || !a && r > 3 && l == 4999) : o = ((a || r < 4) && l + 1 == i || !a && r > 3 && l + 1 == i / 2) && (e[t + 1] / i / 1e3 | 0) == ze(10, n - 3) - 1, o;
}
function Ka(e, n, r) {
  for (var a, t = [0], i, o = 0, l = e.length; o < l; ) {
    for (i = t.length; i--; )
      t[i] *= n;
    for (t[0] += qt.indexOf(e.charAt(o++)), a = 0; a < t.length; a++)
      t[a] > r - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / r | 0, t[a] %= r);
  }
  return t.reverse();
}
function iv(e, n) {
  var r, a, t;
  if (n.isZero())
    return n;
  a = n.d.length, a < 32 ? (r = Math.ceil(a / 3), t = (1 / gt(4, r)).toString()) : (r = 16, t = "2.3283064365386962890625e-10"), e.precision += r, n = ma(e, 1, n.times(t), new e(1));
  for (var i = r; i--; ) {
    var o = n.times(n);
    n = o.times(o).minus(o).times(8).plus(1);
  }
  return e.precision -= r, n;
}
var ke = function() {
  function e(a, t, i) {
    var o, l = 0, s = a.length;
    for (a = a.slice(); s--; )
      o = a[s] * t + l, a[s] = o % i | 0, l = o / i | 0;
    return l && a.unshift(l), a;
  }
  function n(a, t, i, o) {
    var l, s;
    if (i != o)
      s = i > o ? 1 : -1;
    else
      for (l = s = 0; l < i; l++)
        if (a[l] != t[l]) {
          s = a[l] > t[l] ? 1 : -1;
          break;
        }
    return s;
  }
  function r(a, t, i, o) {
    for (var l = 0; i--; )
      a[i] -= l, l = a[i] < t[i] ? 1 : 0, a[i] = l * o + a[i] - t[i];
    for (; !a[0] && a.length > 1; )
      a.shift();
  }
  return function(a, t, i, o, l, s) {
    var u, d, v, f, c, p, b, y, T, S, h, g, M, $, B, C, D, P, k, O, R = a.constructor, Y = a.s == t.s ? 1 : -1, G = a.d, V = t.d;
    if (!G || !G[0] || !V || !V[0])
      return new R(
        !a.s || !t.s || (G ? V && G[0] == V[0] : !V) ? NaN : G && G[0] == 0 || !V ? Y * 0 : Y / 0
      );
    for (s ? (c = 1, d = a.e - t.e) : (s = pn, c = ue, d = qe(a.e / c) - qe(t.e / c)), k = V.length, D = G.length, T = new R(Y), S = T.d = [], v = 0; V[v] == (G[v] || 0); v++)
      ;
    if (V[v] > (G[v] || 0) && d--, i == null ? ($ = i = R.precision, o = R.rounding) : l ? $ = i + (a.e - t.e) + 1 : $ = i, $ < 0)
      S.push(1), p = !0;
    else {
      if ($ = $ / c + 2 | 0, v = 0, k == 1) {
        for (f = 0, V = V[0], $++; (v < D || f) && $--; v++)
          B = f * s + (G[v] || 0), S[v] = B / V | 0, f = B % V | 0;
        p = f || v < D;
      } else {
        for (f = s / (V[0] + 1) | 0, f > 1 && (V = e(V, f, s), G = e(G, f, s), k = V.length, D = G.length), C = k, h = G.slice(0, k), g = h.length; g < k; )
          h[g++] = 0;
        O = V.slice(), O.unshift(0), P = V[0], V[1] >= s / 2 && ++P;
        do
          f = 0, u = n(V, h, k, g), u < 0 ? (M = h[0], k != g && (M = M * s + (h[1] || 0)), f = M / P | 0, f > 1 ? (f >= s && (f = s - 1), b = e(V, f, s), y = b.length, g = h.length, u = n(b, h, y, g), u == 1 && (f--, r(b, k < y ? O : V, y, s))) : (f == 0 && (u = f = 1), b = V.slice()), y = b.length, y < g && b.unshift(0), r(h, b, g, s), u == -1 && (g = h.length, u = n(V, h, k, g), u < 1 && (f++, r(h, k < g ? O : V, g, s))), g = h.length) : u === 0 && (f++, h = [0]), S[v++] = f, u && h[0] ? h[g++] = G[C] || 0 : (h = [G[C]], g = 1);
        while ((C++ < D || h[0] !== void 0) && $--);
        p = h[0] !== void 0;
      }
      S[0] || S.shift();
    }
    if (c == 1)
      T.e = d, Pl = p;
    else {
      for (v = 1, f = S[0]; f >= 10; f /= 10)
        v++;
      T.e = v + d * c - 1, le(T, l ? i + T.e + 1 : i, o, p);
    }
    return T;
  };
}();
function le(e, n, r, a) {
  var t, i, o, l, s, u, d, v, f, c = e.constructor;
  e:
    if (n != null) {
      if (v = e.d, !v)
        return e;
      for (t = 1, l = v[0]; l >= 10; l /= 10)
        t++;
      if (i = n - t, i < 0)
        i += ue, o = n, d = v[f = 0], s = d / ze(10, t - o - 1) % 10 | 0;
      else if (f = Math.ceil((i + 1) / ue), l = v.length, f >= l)
        if (a) {
          for (; l++ <= f; )
            v.push(0);
          d = s = 0, t = 1, i %= ue, o = i - ue + 1;
        } else
          break e;
      else {
        for (d = l = v[f], t = 1; l >= 10; l /= 10)
          t++;
        i %= ue, o = i - ue + t, s = o < 0 ? 0 : d / ze(10, t - o - 1) % 10 | 0;
      }
      if (a = a || n < 0 || v[f + 1] !== void 0 || (o < 0 ? d : d % ze(10, t - o - 1)), u = r < 4 ? (s || a) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || a || r == 6 && (i > 0 ? o > 0 ? d / ze(10, t - o) : 0 : v[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), n < 1 || !v[0])
        return v.length = 0, u ? (n -= e.e + 1, v[0] = ze(10, (ue - n % ue) % ue), e.e = -n || 0) : v[0] = e.e = 0, e;
      if (i == 0 ? (v.length = f, l = 1, f--) : (v.length = f + 1, l = ze(10, ue - i), v[f] = o > 0 ? (d / ze(10, t - o) % ze(10, o) | 0) * l : 0), u)
        for (; ; )
          if (f == 0) {
            for (i = 1, o = v[0]; o >= 10; o /= 10)
              i++;
            for (o = v[0] += l, l = 1; o >= 10; o /= 10)
              l++;
            i != l && (e.e++, v[0] == pn && (v[0] = 1));
            break;
          } else {
            if (v[f] += l, v[f] != pn)
              break;
            v[f--] = 0, l = 1;
          }
      for (i = v.length; v[--i] === 0; )
        v.pop();
    }
  return de && (e.e > c.maxE ? (e.d = null, e.e = NaN) : e.e < c.minE && (e.e = 0, e.d = [0])), e;
}
function $n(e, n, r) {
  if (!e.isFinite())
    return Al(e);
  var a, t = e.e, i = Ye(e.d), o = i.length;
  return n ? (r && (a = r - o) > 0 ? i = i.charAt(0) + "." + i.slice(1) + Bn(a) : o > 1 && (i = i.charAt(0) + "." + i.slice(1)), i = i + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (i = "0." + Bn(-t - 1) + i, r && (a = r - o) > 0 && (i += Bn(a))) : t >= o ? (i += Bn(t + 1 - o), r && (a = r - t - 1) > 0 && (i = i + "." + Bn(a))) : ((a = t + 1) < o && (i = i.slice(0, a) + "." + i.slice(a)), r && (a = r - o) > 0 && (t + 1 === o && (i += "."), i += Bn(a))), i;
}
function ht(e, n) {
  var r = e[0];
  for (n *= ue; r >= 10; r /= 10)
    n++;
  return n;
}
function rt(e, n, r) {
  if (n > tv)
    throw de = !0, r && (e.precision = r), Error(El);
  return le(new e(et), n, 1, !0);
}
function cn(e, n, r) {
  if (n > Xt)
    throw Error(El);
  return le(new e(nt), n, r, !0);
}
function Nl(e) {
  var n = e.length - 1, r = n * ue + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10)
      r--;
    for (n = e[0]; n >= 10; n /= 10)
      r++;
  }
  return r;
}
function Bn(e) {
  for (var n = ""; e--; )
    n += "0";
  return n;
}
function Dl(e, n, r, a) {
  var t, i = new e(1), o = Math.ceil(a / ue + 4);
  for (de = !1; ; ) {
    if (r % 2 && (i = i.times(n), so(i.d, o) && (t = !0)), r = qe(r / 2), r === 0) {
      r = i.d.length - 1, t && i.d[r] === 0 && ++i.d[r];
      break;
    }
    n = n.times(n), so(n.d, o);
  }
  return de = !0, i;
}
function lo(e) {
  return e.d[e.d.length - 1] & 1;
}
function Bl(e, n, r) {
  for (var a, t = new e(n[0]), i = 0; ++i < n.length; )
    if (a = new e(n[i]), a.s)
      t[r](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function Zt(e, n) {
  var r, a, t, i, o, l, s, u = 0, d = 0, v = 0, f = e.constructor, c = f.rounding, p = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (de = !1, s = p) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), v += 5;
  for (a = Math.log(ze(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, r = i = o = new f(1), f.precision = s; ; ) {
    if (i = le(i.times(e), s, 1), r = r.times(++d), l = o.plus(ke(i, r, s, 1)), Ye(l.d).slice(0, s) === Ye(o.d).slice(0, s)) {
      for (t = v; t--; )
        o = le(o.times(o), s, 1);
      if (n == null)
        if (u < 3 && Va(o.d, s - a, c, u))
          f.precision = s += 10, r = i = l = new f(1), d = 0, u++;
        else
          return le(o, f.precision = p, c, de = !0);
      else
        return f.precision = p, o;
    }
    o = l;
  }
}
function Wn(e, n) {
  var r, a, t, i, o, l, s, u, d, v, f, c = 1, p = 10, b = e, y = b.d, T = b.constructor, S = T.rounding, h = T.precision;
  if (b.s < 0 || !y || !y[0] || !b.e && y[0] == 1 && y.length == 1)
    return new T(y && !y[0] ? -1 / 0 : b.s != 1 ? NaN : y ? 0 : b);
  if (n == null ? (de = !1, d = h) : d = n, T.precision = d += p, r = Ye(y), a = r.charAt(0), Math.abs(i = b.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && r.charAt(1) > 3; )
      b = b.times(e), r = Ye(b.d), a = r.charAt(0), c++;
    i = b.e, a > 1 ? (b = new T("0." + r), i++) : b = new T(a + "." + r.slice(1));
  } else
    return u = rt(T, d + 2, h).times(i + ""), b = Wn(new T(a + "." + r.slice(1)), d - p).plus(u), T.precision = h, n == null ? le(b, h, S, de = !0) : b;
  for (v = b, s = o = b = ke(b.minus(1), b.plus(1), d, 1), f = le(b.times(b), d, 1), t = 3; ; ) {
    if (o = le(o.times(f), d, 1), u = s.plus(ke(o, new T(t), d, 1)), Ye(u.d).slice(0, d) === Ye(s.d).slice(0, d))
      if (s = s.times(2), i !== 0 && (s = s.plus(rt(T, d + 2, h).times(i + ""))), s = ke(s, new T(c), d, 1), n == null)
        if (Va(s.d, d - p, S, l))
          T.precision = d += p, u = o = b = ke(v.minus(1), v.plus(1), d, 1), f = le(b.times(b), d, 1), t = l = 1;
        else
          return le(s, T.precision = h, S, de = !0);
      else
        return T.precision = h, s;
    s = u, t += 2;
  }
}
function Al(e) {
  return String(e.s * e.s / 0);
}
function Jt(e, n) {
  var r, a, t;
  for ((r = n.indexOf(".")) > -1 && (n = n.replace(".", "")), (a = n.search(/e/i)) > 0 ? (r < 0 && (r = a), r += +n.slice(a + 1), n = n.substring(0, a)) : r < 0 && (r = n.length), a = 0; n.charCodeAt(a) === 48; a++)
    ;
  for (t = n.length; n.charCodeAt(t - 1) === 48; --t)
    ;
  if (n = n.slice(a, t), n) {
    if (t -= a, e.e = r = r - a - 1, e.d = [], a = (r + 1) % ue, r < 0 && (a += ue), a < t) {
      for (a && e.d.push(+n.slice(0, a)), t -= ue; a < t; )
        e.d.push(+n.slice(a, a += ue));
      n = n.slice(a), a = ue - n.length;
    } else
      a -= t;
    for (; a--; )
      n += "0";
    e.d.push(+n), de && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function ov(e, n) {
  var r, a, t, i, o, l, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), Il.test(n))
      return Jt(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (nv.test(n))
    r = 16, n = n.toLowerCase();
  else if (ev.test(n))
    r = 2;
  else if (rv.test(n))
    r = 8;
  else
    throw Error(Zn + n);
  for (i = n.search(/p/i), i > 0 ? (s = +n.slice(i + 1), n = n.substring(2, i)) : n = n.slice(2), i = n.indexOf("."), o = i >= 0, a = e.constructor, o && (n = n.replace(".", ""), l = n.length, i = l - i, t = Dl(a, new a(r), i, i * 2)), u = Ka(n, r, pn), d = u.length - 1, i = d; u[i] === 0; --i)
    u.pop();
  return i < 0 ? new a(e.s * 0) : (e.e = ht(u, d), e.d = u, de = !1, o && (e = ke(e, t, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? ze(2, s) : Hn.pow(2, s))), de = !0, e);
}
function lv(e, n) {
  var r, a = n.d.length;
  if (a < 3)
    return n.isZero() ? n : ma(e, 2, n, n);
  r = 1.4 * Math.sqrt(a), r = r > 16 ? 16 : r | 0, n = n.times(1 / gt(5, r)), n = ma(e, 2, n, n);
  for (var t, i = new e(5), o = new e(16), l = new e(20); r--; )
    t = n.times(n), n = n.times(i.plus(t.times(o.times(t).minus(l))));
  return n;
}
function ma(e, n, r, a, t) {
  var i, o, l, s, u = e.precision, d = Math.ceil(u / ue);
  for (de = !1, s = r.times(r), l = new e(a); ; ) {
    if (o = ke(l.times(s), new e(n++ * n++), u, 1), l = t ? a.plus(o) : a.minus(o), a = ke(o.times(s), new e(n++ * n++), u, 1), o = l.plus(a), o.d[d] !== void 0) {
      for (i = d; o.d[i] === l.d[i] && i--; )
        ;
      if (i == -1)
        break;
    }
    i = l, l = a, a = o, o = i;
  }
  return de = !0, o.d.length = d + 1, o;
}
function gt(e, n) {
  for (var r = e; --n; )
    r *= e;
  return r;
}
function zl(e, n) {
  var r, a = n.s < 0, t = cn(e, e.precision, 1), i = t.times(0.5);
  if (n = n.abs(), n.lte(i))
    return On = a ? 4 : 1, n;
  if (r = n.divToInt(t), r.isZero())
    On = a ? 3 : 2;
  else {
    if (n = n.minus(r.times(t)), n.lte(i))
      return On = lo(r) ? a ? 2 : 3 : a ? 4 : 1, n;
    On = lo(r) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return n.minus(t).abs();
}
function Ei(e, n, r, a) {
  var t, i, o, l, s, u, d, v, f, c = e.constructor, p = r !== void 0;
  if (p ? (en(r, 1, _n), a === void 0 ? a = c.rounding : en(a, 0, 8)) : (r = c.precision, a = c.rounding), !e.isFinite())
    d = Al(e);
  else {
    for (d = $n(e), o = d.indexOf("."), p ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, o >= 0 && (d = d.replace(".", ""), f = new c(1), f.e = d.length - o, f.d = Ka($n(f), 10, t), f.e = f.d.length), v = Ka(d, 10, t), i = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = p ? "0p+0" : "0";
    else {
      if (o < 0 ? i-- : (e = new c(e), e.d = v, e.e = i, e = ke(e, f, r, a, 0, t), v = e.d, i = e.e, u = Pl), o = v[r], l = t / 2, u = u || v[r + 1] !== void 0, u = a < 4 ? (o !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : o > l || o === l && (a === 4 || u || a === 6 && v[r - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = r, u)
        for (; ++v[--r] > t - 1; )
          v[r] = 0, r || (++i, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (o = 0, d = ""; o < s; o++)
        d += qt.charAt(v[o]);
      if (p) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (o = n == 16 ? 4 : 3, --s; s % o; s++)
              d += "0";
            for (v = Ka(d, t, n), s = v.length; !v[s - 1]; --s)
              ;
            for (o = 1, d = "1."; o < s; o++)
              d += qt.charAt(v[o]);
          } else
            d = d.charAt(0) + "." + d.slice(1);
        d = d + (i < 0 ? "p" : "p+") + i;
      } else if (i < 0) {
        for (; ++i; )
          d = "0" + d;
        d = "0." + d;
      } else if (++i > s)
        for (i -= s; i--; )
          d += "0";
      else
        i < s && (d = d.slice(0, i) + "." + d.slice(i));
    }
    d = (n == 16 ? "0x" : n == 2 ? "0b" : n == 8 ? "0o" : "") + d;
  }
  return e.s < 0 ? "-" + d : d;
}
function so(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function sv(e) {
  return new this(e).abs();
}
function uv(e) {
  return new this(e).acos();
}
function dv(e) {
  return new this(e).acosh();
}
function vv(e, n) {
  return new this(e).plus(n);
}
function fv(e) {
  return new this(e).asin();
}
function cv(e) {
  return new this(e).asinh();
}
function mv(e) {
  return new this(e).atan();
}
function pv(e) {
  return new this(e).atanh();
}
function hv(e, n) {
  e = new this(e), n = new this(n);
  var r, a = this.precision, t = this.rounding, i = a + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = cn(this, i, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? cn(this, a, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = cn(this, i, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = i, this.rounding = 1, r = this.atan(ke(e, n, i, 1)), n = cn(this, i, 1), this.precision = a, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(ke(e, n, i, 1)), r;
}
function gv(e) {
  return new this(e).cbrt();
}
function yv(e) {
  return le(e = new this(e), e.e + 1, 2);
}
function bv(e, n, r) {
  return new this(e).clamp(n, r);
}
function wv(e) {
  if (!e || typeof e != "object")
    throw Error(pt + "Object expected");
  var n, r, a, t = e.defaults === !0, i = [
    "precision",
    1,
    _n,
    "rounding",
    0,
    8,
    "toExpNeg",
    -wr,
    0,
    "toExpPos",
    0,
    wr,
    "maxE",
    0,
    wr,
    "minE",
    -wr,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < i.length; n += 3)
    if (r = i[n], t && (this[r] = Kt[r]), (a = e[r]) !== void 0)
      if (qe(a) === a && a >= i[n + 1] && a <= i[n + 2])
        this[r] = a;
      else
        throw Error(Zn + r + ": " + a);
  if (r = "crypto", t && (this[r] = Kt[r]), (a = e[r]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else
          throw Error(Vl);
      else
        this[r] = !1;
    else
      throw Error(Zn + r + ": " + a);
  return this;
}
function Sv(e) {
  return new this(e).cos();
}
function Cv(e) {
  return new this(e).cosh();
}
function Fl(e) {
  var n, r, a;
  function t(i) {
    var o, l, s, u = this;
    if (!(u instanceof t))
      return new t(i);
    if (u.constructor = t, uo(i)) {
      u.s = i.s, de ? !i.d || i.e > t.maxE ? (u.e = NaN, u.d = null) : i.e < t.minE ? (u.e = 0, u.d = [0]) : (u.e = i.e, u.d = i.d.slice()) : (u.e = i.e, u.d = i.d ? i.d.slice() : i.d);
      return;
    }
    if (s = typeof i, s === "number") {
      if (i === 0) {
        u.s = 1 / i < 0 ? -1 : 1, u.e = 0, u.d = [0];
        return;
      }
      if (i < 0 ? (i = -i, u.s = -1) : u.s = 1, i === ~~i && i < 1e7) {
        for (o = 0, l = i; l >= 10; l /= 10)
          o++;
        de ? o > t.maxE ? (u.e = NaN, u.d = null) : o < t.minE ? (u.e = 0, u.d = [0]) : (u.e = o, u.d = [i]) : (u.e = o, u.d = [i]);
        return;
      } else if (i * 0 !== 0) {
        i || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return Jt(u, i.toString());
    } else if (s !== "string")
      throw Error(Zn + i);
    return (l = i.charCodeAt(0)) === 45 ? (i = i.slice(1), u.s = -1) : (l === 43 && (i = i.slice(1)), u.s = 1), Il.test(i) ? Jt(u, i) : ov(u, i);
  }
  if (t.prototype = j, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = wv, t.clone = Fl, t.isDecimal = uo, t.abs = sv, t.acos = uv, t.acosh = dv, t.add = vv, t.asin = fv, t.asinh = cv, t.atan = mv, t.atanh = pv, t.atan2 = hv, t.cbrt = gv, t.ceil = yv, t.clamp = bv, t.cos = Sv, t.cosh = Cv, t.div = kv, t.exp = $v, t.floor = Tv, t.hypot = Ov, t.ln = Pv, t.log = Ev, t.log10 = Mv, t.log2 = Vv, t.max = Iv, t.min = Nv, t.mod = Dv, t.mul = Bv, t.pow = Av, t.random = zv, t.round = Fv, t.sign = Lv, t.sin = Rv, t.sinh = Uv, t.sqrt = Yv, t.sub = Wv, t.sum = Hv, t.tan = jv, t.tanh = Gv, t.trunc = qv, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < a.length; )
      e.hasOwnProperty(r = a[n++]) || (e[r] = this[r]);
  return t.config(e), t;
}
function kv(e, n) {
  return new this(e).div(n);
}
function $v(e) {
  return new this(e).exp();
}
function Tv(e) {
  return le(e = new this(e), e.e + 1, 3);
}
function Ov() {
  var e, n, r = new this(0);
  for (de = !1, e = 0; e < arguments.length; )
    if (n = new this(arguments[e++]), n.d)
      r.d && (r = r.plus(n.times(n)));
    else {
      if (n.s)
        return de = !0, new this(1 / 0);
      r = n;
    }
  return de = !0, r.sqrt();
}
function uo(e) {
  return e instanceof Hn || e && e.toStringTag === Ml || !1;
}
function Pv(e) {
  return new this(e).ln();
}
function Ev(e, n) {
  return new this(e).log(n);
}
function Vv(e) {
  return new this(e).log(2);
}
function Mv(e) {
  return new this(e).log(10);
}
function Iv() {
  return Bl(this, arguments, "lt");
}
function Nv() {
  return Bl(this, arguments, "gt");
}
function Dv(e, n) {
  return new this(e).mod(n);
}
function Bv(e, n) {
  return new this(e).mul(n);
}
function Av(e, n) {
  return new this(e).pow(n);
}
function zv(e) {
  var n, r, a, t, i = 0, o = new this(1), l = [];
  if (e === void 0 ? e = this.precision : en(e, 1, _n), a = Math.ceil(e / ue), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(a)); i < a; )
        t = n[i], t >= 429e7 ? n[i] = crypto.getRandomValues(new Uint32Array(1))[0] : l[i++] = t % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(a *= 4); i < a; )
        t = n[i] + (n[i + 1] << 8) + (n[i + 2] << 16) + ((n[i + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(n, i) : (l.push(t % 1e7), i += 4);
      i = a / 4;
    } else
      throw Error(Vl);
  else
    for (; i < a; )
      l[i++] = Math.random() * 1e7 | 0;
  for (a = l[--i], e %= ue, a && e && (t = ze(10, ue - e), l[i] = (a / t | 0) * t); l[i] === 0; i--)
    l.pop();
  if (i < 0)
    r = 0, l = [0];
  else {
    for (r = -1; l[0] === 0; r -= ue)
      l.shift();
    for (a = 1, t = l[0]; t >= 10; t /= 10)
      a++;
    a < ue && (r -= ue - a);
  }
  return o.e = r, o.d = l, o;
}
function Fv(e) {
  return le(e = new this(e), e.e + 1, this.rounding);
}
function Lv(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function Rv(e) {
  return new this(e).sin();
}
function Uv(e) {
  return new this(e).sinh();
}
function Yv(e) {
  return new this(e).sqrt();
}
function Wv(e, n) {
  return new this(e).sub(n);
}
function Hv() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (de = !1; r.s && ++e < n.length; )
    r = r.plus(n[e]);
  return de = !0, le(r, this.precision, this.rounding);
}
function jv(e) {
  return new this(e).tan();
}
function Gv(e) {
  return new this(e).tanh();
}
function qv(e) {
  return le(e = new this(e), e.e + 1, 1);
}
j[Symbol.for("nodejs.util.inspect.custom")] = j.toString;
j[Symbol.toStringTag] = "Decimal";
var Hn = j.constructor = Fl(Kt);
et = new Hn(et);
nt = new Hn(nt);
var Kv = {
  modelValue: {
    type: [String, Number],
    default: 0
  },
  min: {
    type: [String, Number]
  },
  max: {
    type: [String, Number]
  },
  step: {
    type: [String, Number],
    default: 1
  },
  color: {
    type: String
  },
  inputWidth: {
    type: [String, Number]
  },
  inputTextSize: {
    type: [String, Number]
  },
  buttonSize: {
    type: [String, Number]
  },
  decimalLength: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  disableIncrement: {
    type: Boolean,
    default: !1
  },
  disableDecrement: {
    type: Boolean,
    default: !1
  },
  disableInput: {
    type: Boolean,
    default: !1
  },
  lazyChange: {
    type: Boolean,
    default: !1
  },
  incrementButton: {
    type: Boolean,
    default: !0
  },
  decrementButton: {
    type: Boolean,
    default: !0
  },
  press: {
    type: Boolean,
    default: !0
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onInputChange", "onLazyChange", "onIncrement", "onDecrement"]
  },
  rules: {
    type: Array
  },
  onBeforeChange: {
    type: Function
  },
  onChange: {
    type: Function
  },
  onIncrement: {
    type: Function
  },
  onDecrement: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, {
  n: Xv,
  classes: Zv
} = _("counter"), vo = 100, fo = 600, Jv = ["inputmode", "readonly", "disabled"];
function Qv(e, n) {
  var r = re("var-icon"), a = re("var-form-details"), t = Ge("ripple");
  return w(), I(
    "div",
    {
      class: m(e.classes(e.n(), "var--box"))
    },
    [A(
      "div",
      Te({
        class: e.classes(e.n("controller"), "var-elevation--2", [e.disabled || e.formDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")]),
        style: {
          background: e.color ? e.color : void 0
        }
      }, e.$attrs),
      [Ce(ee(
        r,
        {
          "var-counter-cover": "",
          name: "minus",
          class: m(e.classes(e.n("decrement-button"), [!e.decrementButton, e.n("--hidden")])),
          style: K({
            width: e.toSizeUnit(e.buttonSize),
            height: e.toSizeUnit(e.buttonSize)
          }),
          onClick: e.decrement,
          onTouchstart: e.pressDecrement,
          onTouchend: e.releaseDecrement,
          onTouchcancel: e.releaseDecrement
        },
        null,
        8,
        ["class", "style", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]
      ), [[t, {
        disabled: !e.ripple || e.disabled || e.readonly || e.disableDecrement || !e.decrementButton || e.isMin
      }]]), Ce(A(
        "input",
        {
          class: m(e.n("input")),
          style: K({
            width: e.toSizeUnit(e.inputWidth),
            fontSize: e.toSizeUnit(e.inputTextSize)
          }),
          inputmode: e.toNumber(e.decimalLength) === 0 ? "numeric" : "decimal",
          readonly: e.readonly || e.formReadonly,
          disabled: e.disabled || e.formDisabled || e.disableInput,
          "onUpdate:modelValue": n[0] || (n[0] = (i) => e.inputValue = i),
          onChange: n[1] || (n[1] = function() {
            return e.handleChange && e.handleChange(...arguments);
          })
        },
        null,
        46,
        Jv
      ), [[Ns, e.inputValue]]), Ce(ee(
        r,
        {
          "var-counter-cover": "",
          name: "plus",
          class: m(e.classes(e.n("increment-button"), [!e.incrementButton, e.n("--hidden")])),
          style: K({
            width: e.toSizeUnit(e.buttonSize),
            height: e.toSizeUnit(e.buttonSize)
          }),
          onClick: e.increment,
          onTouchstart: e.pressIncrement,
          onTouchend: e.releaseIncrement,
          onTouchcancel: e.releaseIncrement
        },
        null,
        8,
        ["class", "style", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]
      ), [[t, {
        disabled: !e.ripple || e.disabled || e.readonly || e.disableIncrement || !e.incrementButton || e.isMax
      }]])],
      16
    ), ee(
      a,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
  );
}
const zr = ae({
  render: Qv,
  name: "VarCounter",
  components: {
    VarIcon: $e,
    VarFormDetails: We
  },
  directives: {
    Ripple: Le
  },
  inheritAttrs: !1,
  props: Kv,
  setup(e) {
    var n = E(""), r, a, t, i, {
      bindForm: o,
      form: l
    } = wn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      resetValidation: v
    } = bn(), {
      readonly: f,
      disabled: c
    } = l != null ? l : {}, p = () => d(e.rules, e.modelValue), b = (V) => {
      Pe(() => {
        var {
          validateTrigger: z,
          rules: X,
          modelValue: se
        } = e;
        u(z, V, X, se);
      });
    }, y = () => {
      var {
        min: V
      } = e;
      N(e["onUpdate:modelValue"], V != null ? L(V) : 0), v();
    }, T = {
      reset: y,
      validate: p,
      resetValidation: v
    }, S = W(() => {
      var {
        max: V,
        modelValue: z
      } = e;
      return V != null && L(z) >= L(V);
    }), h = W(() => {
      var {
        min: V,
        modelValue: z
      } = e;
      return V != null && L(z) <= L(V);
    }), g = (V) => {
      var {
        decimalLength: z,
        max: X,
        min: se
      } = e, F = L(V);
      return X != null && F > L(X) && (F = L(X)), se != null && F < L(se) && (F = L(se)), V = String(F), z != null && (V = F.toFixed(L(z))), V;
    }, M = (V) => {
      var {
        lazyChange: z,
        onBeforeChange: X
      } = e, {
        value: se
      } = V.target, F = g(se);
      z ? N(X, L(F), G) : Y(F), b("onInputChange");
    }, $ = () => {
      var {
        disabled: V,
        readonly: z,
        disableDecrement: X,
        decrementButton: se,
        lazyChange: F,
        step: U,
        modelValue: H,
        onDecrement: Q,
        onBeforeChange: ie
      } = e;
      if (!(c != null && c.value || f != null && f.value || V || z || X || !se) && !h.value) {
        var oe = new Hn(L(H)).minus(new Hn(L(U))).toString(), ve = g(oe), be = L(ve);
        N(Q, be), F ? N(ie, be, G) : (Y(ve), b("onDecrement"));
      }
    }, B = () => {
      var {
        disabled: V,
        readonly: z,
        disableIncrement: X,
        incrementButton: se,
        lazyChange: F,
        step: U,
        modelValue: H,
        onIncrement: Q,
        onBeforeChange: ie
      } = e;
      if (!(c != null && c.value || f != null && f.value || V || z || X || !se) && !S.value) {
        var oe = new Hn(L(H)).plus(new Hn(L(U))).toString(), ve = g(oe), be = L(ve);
        N(Q, be), F ? N(ie, be, G) : (Y(ve), b("onIncrement"));
      }
    }, C = () => {
      var {
        press: V,
        lazyChange: z
      } = e;
      !V || z || (i = window.setTimeout(() => {
        R();
      }, fo));
    }, D = () => {
      var {
        press: V,
        lazyChange: z
      } = e;
      !V || z || (t = window.setTimeout(() => {
        O();
      }, fo));
    }, P = () => {
      a && clearTimeout(a), i && clearTimeout(i);
    }, k = () => {
      r && clearTimeout(r), t && clearTimeout(t);
    }, O = () => {
      r = window.setTimeout(() => {
        B(), O();
      }, vo);
    }, R = () => {
      a = window.setTimeout(() => {
        $(), R();
      }, vo);
    }, Y = (V) => {
      n.value = V;
      var z = L(V);
      N(e["onUpdate:modelValue"], z);
    }, G = (V) => {
      Y(g(String(V))), b("onLazyChange");
    };
    return N(o, T), ne(() => e.modelValue, (V) => {
      Y(g(String(V))), N(e.onChange, L(V));
    }), Y(g(String(e.modelValue))), {
      n: Xv,
      classes: Zv,
      inputValue: n,
      errorMessage: s,
      formDisabled: c,
      formReadonly: f,
      isMax: S,
      isMin: h,
      validate: p,
      reset: y,
      resetValidation: v,
      handleChange: M,
      decrement: $,
      increment: B,
      pressDecrement: C,
      pressIncrement: D,
      releaseDecrement: P,
      releaseIncrement: k,
      toSizeUnit: Ve,
      toNumber: L
    };
  }
});
zr.install = function(e) {
  e.component(zr.name, zr);
};
var Ll = 60, Rl = Ll * 60, Ul = Rl * 24, xv = Ul * 7, pa = 1e3, Vt = Ll * pa, co = Rl * pa, _v = Ul * pa, ef = xv * pa, Vi = "millisecond", Sr = "second", Cr = "minute", kr = "hour", An = "day", Xa = "week", fn = "month", Yl = "quarter", zn = "year", $r = "date", nf = "YYYY-MM-DDTHH:mm:ssZ", mo = "Invalid Date", rf = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, af = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const tf = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var Qt = function(n, r, a) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(a) + n;
}, of = function(n) {
  var r = -n.utcOffset(), a = Math.abs(r), t = Math.floor(a / 60), i = a % 60;
  return (r <= 0 ? "+" : "-") + Qt(t, 2, "0") + ":" + Qt(i, 2, "0");
}, lf = function e(n, r) {
  if (n.date() < r.date())
    return -e(r, n);
  var a = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(a, fn), i = r - t < 0, o = n.clone().add(a + (i ? -1 : 1), fn);
  return +(-(a + (r - t) / (i ? t - o : o - t)) || 0);
}, sf = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, uf = function(n) {
  var r = {
    M: fn,
    y: zn,
    w: Xa,
    d: An,
    D: $r,
    h: kr,
    m: Cr,
    s: Sr,
    ms: Vi,
    Q: Yl
  };
  return r[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, df = function(n) {
  return n === void 0;
};
const vf = {
  s: Qt,
  z: of,
  m: lf,
  a: sf,
  p: uf,
  u: df
};
var Oa = "en", lr = {};
lr[Oa] = tf;
var Mi = function(n) {
  return n instanceof yt;
}, at = function e(n, r, a) {
  var t;
  if (!n)
    return Oa;
  if (typeof n == "string") {
    var i = n.toLowerCase();
    lr[i] && (t = i), r && (lr[i] = r, t = i);
    var o = n.split("-");
    if (!t && o.length > 1)
      return e(o[0]);
  } else {
    var l = n.name;
    lr[l] = n, t = l;
  }
  return !a && t && (Oa = t), t || !a && Oa;
}, x = function(n, r) {
  if (Mi(n))
    return n.clone();
  var a = typeof r == "object" ? r : {};
  return a.date = n, a.args = arguments, new yt(a);
}, ff = function(n, r) {
  return x(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
  });
}, we = vf;
we.l = at;
we.i = Mi;
we.w = ff;
var cf = function(n) {
  var r = n.date, a = n.utc;
  if (r === null)
    return new Date(NaN);
  if (we.u(r))
    return new Date();
  if (r instanceof Date)
    return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var t = r.match(rf);
    if (t) {
      var i = t[2] - 1 || 0, o = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], i, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, o)) : new Date(t[1], i, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, o);
    }
  }
  return new Date(r);
}, yt = /* @__PURE__ */ function() {
  function e(r) {
    this.$L = at(r.locale, null, !0), this.parse(r);
  }
  var n = e.prototype;
  return n.parse = function(a) {
    this.$d = cf(a), this.$x = a.x || {}, this.init();
  }, n.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, n.$utils = function() {
    return we;
  }, n.isValid = function() {
    return this.$d.toString() !== mo;
  }, n.isSame = function(a, t) {
    var i = x(a);
    return this.startOf(t) <= i && i <= this.endOf(t);
  }, n.isAfter = function(a, t) {
    return x(a) < this.startOf(t);
  }, n.isBefore = function(a, t) {
    return this.endOf(t) < x(a);
  }, n.$g = function(a, t, i) {
    return we.u(a) ? this[t] : this.set(i, a);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(a, t) {
    var i = this, o = we.u(t) ? !0 : t, l = we.p(a), s = function(T, S) {
      var h = we.w(i.$u ? Date.UTC(i.$y, S, T) : new Date(i.$y, S, T), i);
      return o ? h : h.endOf(An);
    }, u = function(T, S) {
      var h = [0, 0, 0, 0], g = [23, 59, 59, 999];
      return we.w(i.toDate()[T].apply(
        i.toDate("s"),
        (o ? h : g).slice(S)
      ), i);
    }, d = this.$W, v = this.$M, f = this.$D, c = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case zn:
        return o ? s(1, 0) : s(31, 11);
      case fn:
        return o ? s(1, v) : s(0, v + 1);
      case Xa: {
        var p = this.$locale().weekStart || 0, b = (d < p ? d + 7 : d) - p;
        return s(o ? f - b : f + (6 - b), v);
      }
      case An:
      case $r:
        return u(c + "Hours", 0);
      case kr:
        return u(c + "Minutes", 1);
      case Cr:
        return u(c + "Seconds", 2);
      case Sr:
        return u(c + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(a) {
    return this.startOf(a, !1);
  }, n.$set = function(a, t) {
    var i, o = we.p(a), l = "set" + (this.$u ? "UTC" : ""), s = (i = {}, i[An] = l + "Date", i[$r] = l + "Date", i[fn] = l + "Month", i[zn] = l + "FullYear", i[kr] = l + "Hours", i[Cr] = l + "Minutes", i[Sr] = l + "Seconds", i[Vi] = l + "Milliseconds", i)[o], u = o === An ? this.$D + (t - this.$W) : t;
    if (o === fn || o === zn) {
      var d = this.clone().set($r, 1);
      d.$d[s](u), d.init(), this.$d = d.set($r, Math.min(this.$D, d.daysInMonth())).$d;
    } else
      s && this.$d[s](u);
    return this.init(), this;
  }, n.set = function(a, t) {
    return this.clone().$set(a, t);
  }, n.get = function(a) {
    return this[we.p(a)]();
  }, n.add = function(a, t) {
    var i = this, o;
    a = Number(a);
    var l = we.p(t), s = function(f) {
      var c = x(i);
      return we.w(c.date(c.date() + Math.round(f * a)), i);
    };
    if (l === fn)
      return this.set(fn, this.$M + a);
    if (l === zn)
      return this.set(zn, this.$y + a);
    if (l === An)
      return s(1);
    if (l === Xa)
      return s(7);
    var u = (o = {}, o[Cr] = Vt, o[kr] = co, o[Sr] = pa, o)[l] || 1, d = this.$d.getTime() + a * u;
    return we.w(d, this);
  }, n.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, n.format = function(a) {
    var t = this, i = this.$locale();
    if (!this.isValid())
      return i.invalidDate || mo;
    var o = a || nf, l = we.z(this), s = this.$H, u = this.$m, d = this.$M, v = i.weekdays, f = i.months, c = i.meridiem, p = function(h, g, M, $) {
      return h && (h[g] || h(t, o)) || M[g].slice(0, $);
    }, b = function(h) {
      return we.s(s % 12 || 12, h, "0");
    }, y = c || function(S, h, g) {
      var M = S < 12 ? "AM" : "PM";
      return g ? M.toLowerCase() : M;
    }, T = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: d + 1,
      MM: we.s(d + 1, 2, "0"),
      MMM: p(i.monthsShort, d, f, 3),
      MMMM: p(f, d),
      D: this.$D,
      DD: we.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: p(i.weekdaysMin, this.$W, v, 2),
      ddd: p(i.weekdaysShort, this.$W, v, 3),
      dddd: v[this.$W],
      H: String(s),
      HH: we.s(s, 2, "0"),
      h: b(1),
      hh: b(2),
      a: y(s, u, !0),
      A: y(s, u, !1),
      m: String(u),
      mm: we.s(u, 2, "0"),
      s: String(this.$s),
      ss: we.s(this.$s, 2, "0"),
      SSS: we.s(this.$ms, 3, "0"),
      Z: l
    };
    return o.replace(af, function(S, h) {
      return h || T[S] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(a, t, i) {
    var o, l = we.p(t), s = x(a), u = (s.utcOffset() - this.utcOffset()) * Vt, d = this - s, v = we.m(this, s);
    return v = (o = {}, o[zn] = v / 12, o[fn] = v, o[Yl] = v / 3, o[Xa] = (d - u) / ef, o[An] = (d - u) / _v, o[kr] = d / co, o[Cr] = d / Vt, o[Sr] = d / pa, o)[l] || d, i ? v : we.a(v);
  }, n.daysInMonth = function() {
    return this.endOf(fn).$D;
  }, n.$locale = function() {
    return lr[this.$L];
  }, n.locale = function(a, t) {
    if (!a)
      return this.$L;
    var i = this.clone(), o = at(a, t, !0);
    return o && (i.$L = o), i;
  }, n.clone = function() {
    return we.w(this.$d, this);
  }, n.toDate = function() {
    return new Date(this.valueOf());
  }, n.toJSON = function() {
    return this.isValid() ? this.toISOString() : null;
  }, n.toISOString = function() {
    return this.$d.toISOString();
  }, n.toString = function() {
    return this.$d.toUTCString();
  }, e;
}(), Wl = yt.prototype;
x.prototype = Wl;
[["$ms", Vi], ["$s", Sr], ["$m", Cr], ["$H", kr], ["$W", An], ["$M", fn], ["$y", zn], ["$D", $r]].forEach(function(e) {
  Wl[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
x.extend = function(e, n) {
  return e.$i || (e(n, yt, x), e.$i = !0), x;
};
x.locale = at;
x.isDayjs = Mi;
x.unix = function(e) {
  return x(e * 1e3);
};
x.en = lr[Oa];
x.Ls = lr;
x.p = {};
const Hl = function(e, n) {
  n.prototype.isSameOrBefore = function(r, a) {
    return this.isSame(r, a) || this.isBefore(r, a);
  };
}, jl = function(e, n) {
  n.prototype.isSameOrAfter = function(r, a) {
    return this.isSame(r, a) || this.isAfter(r, a);
  };
};
function mf(e) {
  return ["date", "month"].includes(e);
}
var Za = [{
  index: "01"
}, {
  index: "02"
}, {
  index: "03"
}, {
  index: "04"
}, {
  index: "05"
}, {
  index: "06"
}, {
  index: "07"
}, {
  index: "08"
}, {
  index: "09"
}, {
  index: "10"
}, {
  index: "11"
}, {
  index: "12"
}], Ta = [{
  index: "0"
}, {
  index: "1"
}, {
  index: "2"
}, {
  index: "3"
}, {
  index: "4"
}, {
  index: "5"
}, {
  index: "6"
}], pf = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: mf
  },
  allowedDates: {
    type: Function
  },
  color: {
    type: String
  },
  headerColor: {
    type: String
  },
  elevation: {
    type: Boolean,
    default: !1
  },
  firstDayOfWeek: {
    type: [String, Number],
    default: 0
  },
  min: {
    type: String
  },
  max: {
    type: String
  },
  showCurrent: {
    type: Boolean,
    default: !0
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  multiple: {
    type: Boolean,
    default: !1
  },
  range: {
    type: Boolean,
    default: !1
  },
  touchable: {
    type: Boolean,
    default: !0
  },
  onPreview: {
    type: Function
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, {
  n: hf
} = _("picker-header");
function gf(e, n) {
  var r = re("var-icon"), a = re("var-button");
  return w(), I(
    "div",
    {
      class: m(e.n())
    },
    [ee(
      a,
      {
        round: "",
        text: "",
        style: {
          filter: "opacity(0.54)"
        },
        disabled: e.disabled.left,
        onClick: n[0] || (n[0] = (t) => e.checkDate("prev"))
      },
      {
        default: ce(() => [ee(r, {
          name: "chevron-left"
        })]),
        _: 1
      },
      8,
      ["disabled"]
    ), A(
      "div",
      {
        class: m(e.n("value")),
        onClick: n[1] || (n[1] = (t) => e.$emit("check-panel"))
      },
      [ee(
        je,
        {
          name: "var-date-picker" + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ce(() => [(w(), I(
            "div",
            {
              key: e.showDate
            },
            J(e.showDate),
            1
          ))]),
          _: 1
        },
        8,
        ["name"]
      )],
      2
    ), ee(
      a,
      {
        round: "",
        text: "",
        style: {
          filter: "opacity(0.54)"
        },
        disabled: e.disabled.right,
        onClick: n[2] || (n[2] = (t) => e.checkDate("next"))
      },
      {
        default: ce(() => [ee(r, {
          name: "chevron-right"
        })]),
        _: 1
      },
      8,
      ["disabled"]
    )],
    2
  );
}
const Gl = ae({
  render: gf,
  name: "PanelHeader",
  components: {
    VarButton: xe,
    VarIcon: $e
  },
  props: {
    date: {
      type: Object,
      required: !0
    },
    type: {
      type: String,
      default: "date"
    },
    disabled: {
      type: Object,
      required: !0
    }
  },
  emits: ["check-panel", "check-date"],
  setup(e, n) {
    var {
      emit: r
    } = n, a = E(!1), t = E(0), i = W(() => {
      var l, {
        date: s,
        type: u
      } = e, {
        previewMonth: d,
        previewYear: v
      } = s;
      if (u === "month")
        return L(v) + t.value;
      var f = (l = Ue.value.datePickerMonthDict) == null ? void 0 : l[d.index].name;
      return Ue.value.lang === "zh-CN" ? v + " " + f : f + " " + v;
    }), o = (l) => {
      l === "prev" && e.disabled.left || l === "next" && e.disabled.right || (r("check-date", l), a.value = l === "prev", t.value += l === "prev" ? -1 : 1);
    };
    return ne(() => e.date, () => {
      t.value = 0;
    }), {
      n: hf,
      reverse: a,
      showDate: i,
      checkDate: o
    };
  }
});
function xt() {
  return xt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, xt.apply(this, arguments);
}
x.extend(Hl);
x.extend(jl);
var {
  n: Ha,
  classes: yf
} = _("month-picker"), {
  n: ja
} = _("date-picker");
function bf(e, n) {
  var r = re("panel-header"), a = re("var-button");
  return w(), I(
    "div",
    {
      class: m(e.n())
    },
    [A(
      "div",
      {
        class: m(e.n("content"))
      },
      [ee(
        r,
        {
          ref: "headerEl",
          type: "month",
          date: e.preview,
          disabled: e.panelBtnDisabled,
          onCheckPanel: e.clickYear,
          onCheckDate: e.checkDate
        },
        null,
        8,
        ["date", "disabled", "onCheckPanel", "onCheckDate"]
      ), ee(
        je,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ce(() => [(w(), I("ul", {
            key: e.panelKey
          }, [(w(!0), I(
            Oe,
            null,
            Ie(e.MONTH_LIST, (t) => (w(), I("li", {
              key: t.index
            }, [ee(
              a,
              Te({
                type: "primary",
                "var-month-picker-cover": "",
                ripple: !1
              }, xt({}, e.buttonProps(t.index)), {
                onClick: (i) => e.chooseMonth(t, i)
              }),
              {
                default: ce(() => [he(
                  J(e.getMonthAbbr(t.index)),
                  1
                )]),
                _: 2
              },
              1040,
              ["onClick"]
            )]))),
            128
          ))]))]),
          _: 1
        },
        8,
        ["name"]
      )],
      2
    )],
    2
  );
}
const wf = ae({
  render: bf,
  name: "MonthPickerPanel",
  components: {
    VarButton: xe,
    PanelHeader: Gl
  },
  props: {
    choose: {
      type: Object,
      required: !0
    },
    preview: {
      type: Object,
      required: !0
    },
    current: {
      type: String,
      required: !0
    },
    clickYear: {
      type: Function,
      required: !0
    },
    componentProps: {
      type: Object,
      required: !0
    }
  },
  emits: ["check-preview", "choose-month"],
  setup(e, n) {
    var {
      emit: r
    } = n, [a, t] = e.current.split("-"), i = E(!1), o = E(0), l = E(null), s = Ne({
      left: !1,
      right: !1
    }), u = W(() => e.choose.chooseYear === e.preview.previewYear), d = W(() => e.preview.previewYear === a), v = (S) => {
      var h, g;
      return (h = (g = Ue.value.datePickerMonthDict) == null ? void 0 : g[S].abbr) != null ? h : "";
    }, f = (S) => {
      var {
        preview: {
          previewYear: h
        },
        componentProps: {
          min: g,
          max: M
        }
      } = e, $ = !0, B = !0, C = h + "-" + S;
      return M && ($ = x(C).isSameOrBefore(x(M), "month")), g && (B = x(C).isSameOrAfter(x(g), "month")), $ && B;
    }, c = (S) => {
      var {
        choose: {
          chooseMonths: h,
          chooseDays: g,
          chooseRangeMonth: M
        },
        componentProps: {
          type: $,
          range: B
        }
      } = e;
      if (B) {
        if (!M.length)
          return !1;
        var C = x(S).isSameOrBefore(x(M[1]), "month"), D = x(S).isSameOrAfter(x(M[0]), "month");
        return C && D;
      }
      return $ === "month" ? h.includes(S) : g.some((P) => P.includes(S));
    }, p = (S) => {
      var {
        choose: {
          chooseMonth: h
        },
        preview: {
          previewYear: g
        },
        componentProps: {
          allowedDates: M,
          color: $,
          multiple: B,
          range: C
        }
      } = e, D = g + "-" + S, P = () => C || B ? c(D) : (h == null ? void 0 : h.index) === S && u.value, k = () => f(S) ? M ? !M(D) : !1 : !0, O = k(), R = () => O ? !0 : C || B ? !c(D) : !u.value || (h == null ? void 0 : h.index) !== S, Y = () => d.value && t === S && e.componentProps.showCurrent ? (C || B || u.value) && O ? !0 : C || B ? !c(D) : u.value ? (h == null ? void 0 : h.index) !== t : !0 : !1, G = () => O ? "" : Y() ? $ != null ? $ : "" : P() ? "" : ja() + "-color-cover", V = G().startsWith(ja());
      return {
        outline: Y(),
        text: R(),
        color: R() ? "" : $,
        textColor: V ? "" : G(),
        [ja() + "-color-cover"]: V,
        class: yf(Ha("button"), [O, Ha("button--disabled")])
      };
    }, b = (S, h) => {
      var g = h.currentTarget;
      g.classList.contains(Ha("button--disabled")) || r("choose-month", S);
    }, y = (S) => {
      i.value = S === "prev", o.value += S === "prev" ? -1 : 1, r("check-preview", "year", S);
    }, T = (S) => {
      l.value.checkDate(S);
    };
    return ne(() => e.preview.previewYear, (S) => {
      var {
        componentProps: {
          min: h,
          max: g
        }
      } = e;
      g && (s.right = !x("" + (L(S) + 1)).isSameOrBefore(x(g), "year")), h && (s.left = !x("" + (L(S) - 1)).isSameOrAfter(x(h), "year"));
    }, {
      immediate: !0
    }), {
      n: Ha,
      nDate: ja,
      pack: Ue,
      MONTH_LIST: Za,
      headerEl: l,
      reverse: i,
      panelKey: o,
      panelBtnDisabled: s,
      forwardRef: T,
      buttonProps: p,
      getMonthAbbr: v,
      chooseMonth: b,
      checkDate: y
    };
  }
});
var {
  n: po,
  classes: Sf
} = _("year-picker"), Cf = ["onClick"];
function kf(e, n) {
  return w(), I(
    "ul",
    {
      class: m(e.n())
    },
    [(w(!0), I(
      Oe,
      null,
      Ie(e.yearList, (r) => (w(), I(
        "li",
        {
          key: r,
          class: m(e.classes(e.n("item"), [r === e.toNumber(e.preview), e.n("item--active")])),
          style: K({
            color: r === e.toNumber(e.preview) ? e.componentProps.color : ""
          }),
          onClick: (a) => e.chooseYear(r)
        },
        J(r),
        15,
        Cf
      ))),
      128
    ))],
    2
  );
}
const $f = ae({
  render: kf,
  name: "YearPickerPanel",
  props: {
    preview: {
      type: String
    },
    componentProps: {
      type: Object,
      required: !0
    }
  },
  emits: ["choose-year"],
  setup(e, n) {
    var {
      emit: r
    } = n, a = W(() => {
      var i = [], {
        preview: o,
        componentProps: {
          max: l,
          min: s
        }
      } = e;
      if (!o)
        return i;
      var u = [L(o) + 100, L(o) - 100];
      if (l) {
        var d = x(l).format("YYYY-MM-D"), v = L(d.split("-")[0]);
        if (v < u[0] && v > u[1] && (u = [v, u[1]]), v <= u[1])
          return [v];
      }
      if (s) {
        var f = x(s).format("YYYY-MM-D"), c = L(f.split("-")[0]);
        if (c < u[0] && c > u[1] && (u = [u[0], c]), c >= u[0])
          return [c];
      }
      for (var p = u[0]; p >= u[1]; p--)
        i.push(p);
      return i;
    }), t = (i) => {
      r("choose-year", i);
    };
    return Fe(() => {
      var i = document.querySelector("." + po("item--active"));
      i == null || i.scrollIntoView({
        block: "center"
      });
    }), {
      n: po,
      classes: Sf,
      yearList: a,
      chooseYear: t,
      toNumber: L
    };
  }
});
function _t() {
  return _t = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, _t.apply(this, arguments);
}
x.extend(Hl);
x.extend(jl);
var {
  n: br,
  classes: Tf
} = _("day-picker"), {
  n: Ga
} = _("date-picker");
function Of(e, n) {
  var r = re("panel-header"), a = re("var-button");
  return w(), I(
    "div",
    {
      class: m(e.n())
    },
    [A(
      "div",
      {
        class: m(e.n("content"))
      },
      [ee(
        r,
        {
          ref: "headerEl",
          type: "day",
          date: e.preview,
          disabled: e.panelBtnDisabled,
          onCheckPanel: e.clickMonth,
          onCheckDate: e.checkDate
        },
        null,
        8,
        ["date", "disabled", "onCheckPanel", "onCheckDate"]
      ), ee(
        je,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ce(() => [(w(), I("div", {
            key: e.panelKey
          }, [A(
            "ul",
            {
              class: m(e.n("head"))
            },
            [(w(!0), I(
              Oe,
              null,
              Ie(e.sortWeekList, (t) => (w(), I(
                "li",
                {
                  key: t.index
                },
                J(e.getDayAbbr(t.index)),
                1
              ))),
              128
            ))],
            2
          ), A(
            "ul",
            {
              class: m(e.n("body"))
            },
            [(w(!0), I(
              Oe,
              null,
              Ie(e.days, (t, i) => (w(), I("li", {
                key: i
              }, [ee(
                a,
                Te({
                  type: "primary",
                  "var-day-picker-cover": "",
                  round: "",
                  ripple: !1
                }, _t({}, e.buttonProps(t)), {
                  onClick: (o) => e.chooseDay(t, o)
                }),
                {
                  default: ce(() => [he(
                    J(e.filterDay(t)),
                    1
                  )]),
                  _: 2
                },
                1040,
                ["onClick"]
              )]))),
              128
            ))],
            2
          )]))]),
          _: 1
        },
        8,
        ["name"]
      )],
      2
    )],
    2
  );
}
const Pf = ae({
  render: Of,
  name: "DayPickerPanel",
  components: {
    VarButton: xe,
    PanelHeader: Gl
  },
  props: {
    choose: {
      type: Object,
      required: !0
    },
    preview: {
      type: Object,
      required: !0
    },
    current: {
      type: String,
      required: !0
    },
    clickMonth: {
      type: Function,
      required: !0
    },
    componentProps: {
      type: Object,
      required: !0
    }
  },
  emits: ["check-preview", "choose-day"],
  setup(e, n) {
    var {
      emit: r
    } = n, [a, t, i] = e.current.split("-"), o = E([]), l = E(!1), s = E(0), u = E(null), d = Ne({
      left: !1,
      right: !1
    }), v = W(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = W(() => {
      var C;
      return e.choose.chooseYear === e.preview.previewYear && ((C = e.choose.chooseMonth) == null ? void 0 : C.index) === e.preview.previewMonth.index;
    }), c = W(() => {
      var C = Ta.findIndex((D) => D.index === e.componentProps.firstDayOfWeek);
      return C === -1 || C === 0 ? Ta : Ta.slice(C).concat(Ta.slice(0, C));
    }), p = (C) => {
      var D, P;
      return (D = (P = Ue.value.datePickerWeekDict) == null ? void 0 : P[C].abbr) != null ? D : "";
    }, b = (C) => C > 0 ? C : "", y = () => {
      var {
        preview: {
          previewMonth: C,
          previewYear: D
        }
      } = e, P = x(D + "-" + C.index).daysInMonth(), k = x(D + "-" + C.index + "-01").day(), O = c.value.findIndex((R) => R.index === "" + k);
      o.value = [...Array(O).fill(-1), ...Array.from(Array(P + 1).keys())].filter((R) => R);
    }, T = () => {
      var {
        preview: {
          previewYear: C,
          previewMonth: D
        },
        componentProps: {
          max: P,
          min: k
        }
      } = e;
      if (P) {
        var O = C + "-" + (L(D.index) + 1);
        d.right = !x(O).isSameOrBefore(x(P), "month");
      }
      if (k) {
        var R = C + "-" + (L(D.index) - 1);
        d.left = !x(R).isSameOrAfter(x(k), "month");
      }
    }, S = (C) => {
      var {
        preview: {
          previewYear: D,
          previewMonth: P
        },
        componentProps: {
          min: k,
          max: O
        }
      } = e, R = !0, Y = !0, G = D + "-" + P.index + "-" + C;
      return O && (R = x(G).isSameOrBefore(x(O), "day")), k && (Y = x(G).isSameOrAfter(x(k), "day")), R && Y;
    }, h = (C) => {
      var {
        choose: {
          chooseDays: D,
          chooseRangeDay: P
        },
        componentProps: {
          range: k
        }
      } = e;
      if (k) {
        if (!P.length)
          return !1;
        var O = x(C).isSameOrBefore(x(P[1]), "day"), R = x(C).isSameOrAfter(x(P[0]), "day");
        return O && R;
      }
      return D.includes(C);
    }, g = (C) => {
      if (C < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: br("button")
        };
      var {
        choose: {
          chooseDay: D
        },
        preview: {
          previewYear: P,
          previewMonth: k
        },
        componentProps: {
          allowedDates: O,
          color: R,
          multiple: Y,
          range: G
        }
      } = e, V = P + "-" + k.index + "-" + C, z = () => G || Y ? h(V) : L(D) === C && f.value, X = () => S(C) ? O ? !O(V) : !1 : !0, se = X(), F = () => se ? !0 : G || Y ? !h(V) : !f.value || L(D) !== C, U = () => v.value && L(i) === C && e.componentProps.showCurrent ? (G || Y || f.value) && se ? !0 : G || Y ? !h(V) : f.value ? D !== i : !0 : !1, H = () => se ? "" : U() ? R != null ? R : "" : z() ? "" : Ga() + "-color-cover", Q = H().startsWith(Ga());
      return {
        text: F(),
        outline: U(),
        textColor: Q ? "" : H(),
        [Ga() + "-color-cover"]: Q,
        class: Tf(br("button"), br("button--usable"), [se, br("button--disabled")])
      };
    }, M = (C) => {
      l.value = C === "prev", s.value += C === "prev" ? -1 : 1, r("check-preview", "month", C);
    }, $ = (C, D) => {
      var P = D.currentTarget;
      P.classList.contains(br("button--disabled")) || r("choose-day", C);
    }, B = (C) => {
      u.value.checkDate(C);
    };
    return Fe(() => {
      y(), T();
    }), ne(() => e.preview, () => {
      y(), T();
    }), {
      n: br,
      nDate: Ga,
      days: o,
      reverse: l,
      headerEl: u,
      panelKey: s,
      sortWeekList: c,
      panelBtnDisabled: d,
      forwardRef: B,
      filterDay: b,
      getDayAbbr: p,
      checkDate: M,
      chooseDay: $,
      buttonProps: g
    };
  }
});
var {
  n: Ef,
  classes: Vf
} = _("date-picker");
function Mf(e, n) {
  var r = re("year-picker-panel"), a = re("month-picker-panel"), t = re("day-picker-panel");
  return w(), I(
    "div",
    {
      class: m(e.classes(e.n(), [e.elevation, "var-elevation--2"]))
    },
    [A(
      "div",
      {
        class: m(e.n("title")),
        style: K({
          background: e.headerColor || e.color
        })
      },
      [A(
        "div",
        {
          class: m(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
          onClick: n[0] || (n[0] = (i) => e.clickEl("year"))
        },
        [q(e.$slots, "year", {
          year: e.chooseYear
        }, () => [he(
          J(e.chooseYear),
          1
        )])],
        2
      ), A(
        "div",
        {
          class: m(e.classes(e.n("title-date"), [!e.isYearPanel, e.n("title-date--active")], [e.range, e.n("title-date--range")])),
          onClick: n[1] || (n[1] = (i) => e.clickEl("date"))
        },
        [ee(
          je,
          {
            name: e.multiple ? "" : "" + e.n() + (e.reverse ? "-reverse" : "") + "-translatey"
          },
          {
            default: ce(() => {
              var i, o, l;
              return [e.type === "month" ? (w(), I("div", {
                key: "" + e.chooseYear + ((i = e.chooseMonth) == null ? void 0 : i.index)
              }, [e.range ? q(e.$slots, "range", {
                key: 0,
                choose: e.getChoose.chooseRangeMonth
              }, () => [he(
                J(e.getMonthTitle),
                1
              )]) : e.multiple ? q(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseMonths
              }, () => [he(
                J(e.getMonthTitle),
                1
              )]) : q(e.$slots, "month", {
                key: 2,
                month: (o = e.chooseMonth) == null ? void 0 : o.index,
                year: e.chooseYear
              }, () => [he(
                J(e.getMonthTitle),
                1
              )])])) : (w(), I("div", {
                key: "" + e.chooseYear + ((l = e.chooseMonth) == null ? void 0 : l.index) + e.chooseDay
              }, [e.range ? q(e.$slots, "range", {
                key: 0,
                choose: e.formatRange
              }, () => [he(
                J(e.getDateTitle),
                1
              )]) : e.multiple ? q(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseDays
              }, () => [he(
                J(e.getDateTitle),
                1
              )]) : q(e.$slots, "date", el(Te({
                key: 2
              }, e.slotProps)), () => [he(
                J(e.getDateTitle),
                1
              )])]))];
            }),
            _: 3
          },
          8,
          ["name"]
        )],
        2
      )],
      6
    ), A(
      "div",
      {
        class: m(e.n("body")),
        onTouchstart: n[2] || (n[2] = function() {
          return e.handleTouchstart && e.handleTouchstart(...arguments);
        }),
        onTouchmove: n[3] || (n[3] = function() {
          return e.handleTouchmove && e.handleTouchmove(...arguments);
        }),
        onTouchend: n[4] || (n[4] = function() {
          return e.handleTouchend && e.handleTouchend(...arguments);
        })
      },
      [ee(
        je,
        {
          name: e.n() + "-panel-fade"
        },
        {
          default: ce(() => [e.getPanelType === "year" ? (w(), me(
            r,
            {
              key: 0,
              "component-props": e.componentProps,
              preview: e.previewYear,
              onChooseYear: e.getChooseYear
            },
            null,
            8,
            ["component-props", "preview", "onChooseYear"]
          )) : e.getPanelType === "month" ? (w(), me(
            a,
            {
              key: 1,
              ref: "monthPanelEl",
              current: e.currentDate,
              choose: e.getChoose,
              preview: e.getPreview,
              "click-year": () => e.clickEl("year"),
              "component-props": e.componentProps,
              onChooseMonth: e.getChooseMonth,
              onCheckPreview: e.checkPreview
            },
            null,
            8,
            ["current", "choose", "preview", "click-year", "component-props", "onChooseMonth", "onCheckPreview"]
          )) : e.getPanelType === "date" ? (w(), me(
            t,
            {
              key: 2,
              ref: "dayPanelEl",
              current: e.currentDate,
              choose: e.getChoose,
              preview: e.getPreview,
              "component-props": e.componentProps,
              "click-month": () => e.clickEl("month"),
              onChooseDay: e.getChooseDay,
              onCheckPreview: e.checkPreview
            },
            null,
            8,
            ["current", "choose", "preview", "component-props", "click-month", "onChooseDay", "onCheckPreview"]
          )) : Z("v-if", !0)]),
          _: 1
        },
        8,
        ["name"]
      )],
      34
    )],
    2
  );
}
const Fr = ae({
  render: Mf,
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: wf,
    YearPickerPanel: $f,
    DayPickerPanel: Pf
  },
  props: pf,
  setup(e) {
    var n = 0, r = 0, a = "", t, i = x().format("YYYY-MM-D"), [o, l] = i.split("-"), s = Za.find((te) => te.index === l), u = E(!1), d = E(!1), v = E(!0), f = E(), c = E(), p = E(), b = E(s), y = E(o), T = E(!1), S = E([]), h = E([]), g = E([]), M = E([]), $ = E(null), B = E(null), C = Ne({
      allowedDates: e.allowedDates,
      type: e.type,
      color: e.color,
      firstDayOfWeek: e.firstDayOfWeek,
      min: e.min,
      max: e.max,
      showCurrent: e.showCurrent,
      multiple: e.multiple,
      range: e.range
    }), D = W(() => ({
      chooseMonth: f.value,
      chooseYear: c.value,
      chooseDay: p.value,
      chooseMonths: S.value,
      chooseDays: h.value,
      chooseRangeMonth: g.value,
      chooseRangeDay: M.value
    })), P = W(() => ({
      previewMonth: b.value,
      previewYear: y.value
    })), k = W(() => {
      var {
        multiple: te,
        range: pe
      } = e;
      if (pe)
        return g.value.length ? g.value[0] + " ~ " + g.value[1] : "";
      var fe = "";
      if (f.value) {
        var ge, ye;
        fe = (ge = (ye = Ue.value.datePickerMonthDict) == null ? void 0 : ye[f.value.index].name) != null ? ge : "";
      }
      return te ? "" + S.value.length + Ue.value.datePickerSelected : fe;
    }), O = W(() => {
      var te, pe, fe, ge, {
        multiple: ye,
        range: Be
      } = e;
      if (Be) {
        var Re = M.value.map((Ot) => x(Ot).format("YYYY-MM-DD"));
        return Re.length ? Re[0] + " ~ " + Re[1] : "";
      }
      if (ye)
        return "" + h.value.length + Ue.value.datePickerSelected;
      if (!c.value || !f.value || !p.value)
        return "";
      var an = x(c.value + "-" + f.value.index + "-" + p.value).day(), gr = Ta.find((Ot) => Ot.index === "" + an), Wi = (te = (pe = Ue.value.datePickerWeekDict) == null ? void 0 : pe[gr.index].name) != null ? te : "", Ps = (fe = (ge = Ue.value.datePickerMonthDict) == null ? void 0 : ge[f.value.index].name) != null ? fe : "", Es = p.value.padStart(2, "0");
      return Ue.value.lang === "zh-CN" ? f.value.index + "-" + Es + " " + Wi.slice(0, 3) : Wi.slice(0, 3) + ", " + Ps.slice(0, 3) + " " + p.value;
    }), R = W(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), Y = W(() => !e.touchable || ["", "year"].includes(R.value)), G = W(() => {
      var te, pe, fe, ge, ye, Be = x(c.value + "-" + ((te = f.value) == null ? void 0 : te.index) + "-" + p.value).day(), Re = p.value ? (pe = p.value) == null ? void 0 : pe.padStart(2, "0") : "";
      return {
        week: "" + Be,
        year: (fe = c.value) != null ? fe : "",
        month: (ge = (ye = f.value) == null ? void 0 : ye.index) != null ? ge : "",
        date: Re
      };
    }), V = W(() => D.value.chooseRangeDay.map((te) => x(te).format("YYYY-MM-DD"))), z = W(() => c.value === y.value), X = W(() => {
      var te;
      return ((te = f.value) == null ? void 0 : te.index) === b.value.index;
    }), se = (te) => {
      te === "year" ? u.value = !0 : te === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, F = (te) => {
      if (!Y.value) {
        var {
          clientX: pe,
          clientY: fe
        } = te.touches[0];
        n = pe, r = fe;
      }
    }, U = (te, pe) => te >= pe && te > 20 ? "x" : "y", H = (te) => {
      if (!Y.value) {
        var {
          clientX: pe,
          clientY: fe
        } = te.touches[0], ge = pe - n, ye = fe - r;
        t = U(Math.abs(ge), Math.abs(ye)), a = ge > 0 ? "prev" : "next";
      }
    }, Q = () => {
      if (!(Y.value || t !== "x")) {
        var te = R.value === "month" ? $ : B;
        vt(() => {
          te.value.forwardRef(a), Yi();
        });
      }
    }, ie = (te, pe) => {
      var fe = pe === "month" ? g : M;
      if (fe.value = v.value ? [te, te] : [fe.value[0], te], v.value = !v.value, v.value) {
        var ge = x(fe.value[0]).isAfter(fe.value[1]), ye = ge ? [fe.value[1], fe.value[0]] : [...fe.value];
        N(e["onUpdate:modelValue"], ye), N(e.onChange, ye);
      }
    }, oe = (te, pe) => {
      var fe = pe === "month" ? S : h, ge = pe === "month" ? "YYYY-MM" : "YYYY-MM-DD", ye = fe.value.map((Re) => x(Re).format(ge)), Be = ye.findIndex((Re) => Re === te);
      Be === -1 ? ye.push(te) : ye.splice(Be, 1), N(e["onUpdate:modelValue"], ye), N(e.onChange, ye);
    }, ve = (te, pe) => !c.value || !f.value ? !1 : z.value ? te === "month" ? pe.index < f.value.index : X.value ? pe < L(p.value) : f.value.index > b.value.index : c.value > y.value, be = (te) => {
      var {
        readonly: pe,
        range: fe,
        multiple: ge,
        onChange: ye,
        "onUpdate:modelValue": Be
      } = e;
      if (!(te < 0 || pe)) {
        T.value = ve("day", te);
        var Re = y.value + "-" + b.value.index + "-" + te, an = x(Re).format("YYYY-MM-DD");
        fe ? ie(an, "day") : ge ? oe(an, "day") : (N(Be, an), N(ye, an));
      }
    }, nn = (te) => {
      var {
        type: pe,
        readonly: fe,
        range: ge,
        multiple: ye,
        onChange: Be,
        onPreview: Re,
        "onUpdate:modelValue": an
      } = e;
      if (T.value = ve("month", te), pe === "month" && !fe) {
        var gr = y.value + "-" + te.index;
        ge ? ie(gr, "month") : ye ? oe(gr, "month") : (N(an, gr), N(Be, gr));
      } else
        b.value = te, N(Re, L(y.value), L(b.value.index));
      d.value = !1;
    }, rn = (te) => {
      y.value = "" + te, u.value = !1, d.value = !0, N(e.onPreview, L(y.value), L(b.value.index));
    }, De = (te, pe) => {
      var fe = pe === "prev" ? -1 : 1;
      if (te === "year")
        y.value = "" + (L(y.value) + fe);
      else {
        var ge = L(b.value.index) + fe;
        ge < 1 && (y.value = "" + (L(y.value) - 1), ge = 12), ge > 12 && (y.value = "" + (L(y.value) + 1), ge = 1), b.value = Za.find((ye) => L(ye.index) === ge);
      }
      N(e.onPreview, L(y.value), L(b.value.index));
    }, Sn = () => (e.multiple || e.range) && !Se(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Se(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, Tt = (te) => Se(te) ? !1 : te === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, $s = (te, pe) => {
      var fe = pe === "month" ? g : M, ge = pe === "month" ? "YYYY-MM" : "YYYY-MM-D", ye = te.map((an) => x(an).format(ge)).slice(0, 2), Be = fe.value.some((an) => Tt(an));
      if (!Be) {
        fe.value = ye;
        var Re = x(fe.value[0]).isAfter(fe.value[1]);
        fe.value.length === 2 && Re && (fe.value = [fe.value[1], fe.value[0]]);
      }
    }, Ts = (te, pe) => {
      var fe = pe === "month" ? S : h, ge = pe === "month" ? "YYYY-MM" : "YYYY-MM-D", ye = Array.from(new Set(te.map((Be) => x(Be).format(ge))));
      fe.value = ye.filter((Be) => Be !== "Invalid Date");
    }, Os = (te) => {
      var pe = x(te).format("YYYY-MM-D");
      if (!Tt(pe)) {
        var [fe, ge, ye] = pe.split("-"), Be = Za.find((Re) => Re.index === ge);
        f.value = Be, c.value = fe, p.value = ye, b.value = Be, y.value = fe;
      }
    }, Yi = () => {
      r = 0, n = 0, a = "", t = void 0;
    };
    return ne(() => e.modelValue, (te) => {
      if (!(!Sn() || Tt(te) || !te))
        if (e.range) {
          if (!Se(te))
            return;
          v.value = te.length !== 1, $s(te, e.type);
        } else if (e.multiple) {
          if (!Se(te))
            return;
          Ts(te, e.type);
        } else
          Os(te);
    }, {
      immediate: !0
    }), ne(R, Yi), {
      n: Ef,
      classes: Vf,
      monthPanelEl: $,
      dayPanelEl: B,
      reverse: T,
      currentDate: i,
      chooseMonth: f,
      chooseYear: c,
      chooseDay: p,
      previewYear: y,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: k,
      getDateTitle: O,
      getPanelType: R,
      getChoose: D,
      getPreview: P,
      componentProps: C,
      slotProps: G,
      formatRange: V,
      clickEl: se,
      handleTouchstart: F,
      handleTouchmove: H,
      handleTouchend: Q,
      getChooseDay: be,
      getChooseMonth: nn,
      getChooseYear: rn,
      checkPreview: De
    };
  }
});
Fr.install = function(e) {
  e.component(Fr.name, Fr);
};
function ei() {
  return ei = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ei.apply(this, arguments);
}
function If(e) {
  return ["left", "center", "right"].includes(e);
}
var Nf = ei({
  show: {
    type: Boolean,
    default: !1
  },
  title: {
    type: String
  },
  message: {
    type: String
  },
  messageAlign: {
    type: String,
    default: "left",
    validator: If
  },
  confirmButton: {
    type: Boolean,
    default: !0
  },
  cancelButton: {
    type: Boolean,
    default: !0
  },
  confirmButtonText: {
    type: String
  },
  cancelButtonText: {
    type: String
  },
  confirmButtonTextColor: {
    type: String
  },
  cancelButtonTextColor: {
    type: String
  },
  confirmButtonColor: {
    type: String
  },
  cancelButtonColor: {
    type: String
  },
  onBeforeClose: {
    type: Function
  },
  onConfirm: {
    type: Function
  },
  onCancel: {
    type: Function
  },
  "onUpdate:show": {
    type: Function
  },
  dialogClass: {
    type: String
  },
  dialogStyle: {
    type: Object
  }
}, Ze(Fa, [
  "overlay",
  "overlayClass",
  "overlayStyle",
  "lockScroll",
  "closeOnClickOverlay",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onClickOverlay",
  "onRouteChange"
])), {
  n: Df,
  classes: Bf
} = _("dialog");
function Af(e, n) {
  var r = re("var-button"), a = re("var-popup");
  return w(), me(
    a,
    {
      class: m(e.n("popup")),
      "var-dialog-cover": "",
      show: e.popupShow,
      overlay: e.overlay,
      "overlay-class": e.overlayClass,
      "overlay-style": e.overlayStyle,
      "lock-scroll": e.lockScroll,
      "close-on-click-overlay": e.popupCloseOnClickOverlay,
      teleport: e.teleport,
      onOpen: e.onOpen,
      onClose: e.onClose,
      onClosed: e.onClosed,
      onOpened: e.onOpened,
      onRouteChange: e.onRouteChange,
      onClickOverlay: e.handleClickOverlay
    },
    {
      default: ce(() => [A(
        "div",
        Te({
          class: e.classes("var--box", e.n(), e.dialogClass),
          style: e.dialogStyle
        }, e.$attrs),
        [A(
          "div",
          {
            class: m(e.n("title"))
          },
          [q(e.$slots, "title", {}, () => [he(
            J(e.dt(e.title, e.pack.dialogTitle)),
            1
          )])],
          2
        ), A(
          "div",
          {
            class: m(e.n("message")),
            style: K({
              textAlign: e.messageAlign
            })
          },
          [q(e.$slots, "default", {}, () => [he(
            J(e.message),
            1
          )])],
          6
        ), A(
          "div",
          {
            class: m(e.n("actions"))
          },
          [e.cancelButton ? (w(), me(
            r,
            {
              key: 0,
              class: m(e.classes(e.n("button"), e.n("cancel-button"))),
              "var-dialog-cover": "",
              text: "",
              "text-color": e.cancelButtonTextColor,
              color: e.cancelButtonColor,
              onClick: e.cancel
            },
            {
              default: ce(() => [he(
                J(e.dt(e.cancelButtonText, e.pack.dialogCancelButtonText)),
                1
              )]),
              _: 1
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : Z("v-if", !0), e.confirmButton ? (w(), me(
            r,
            {
              key: 1,
              class: m(e.classes(e.n("button"), e.n("confirm-button"))),
              "var-dialog-cover": "",
              text: "",
              "text-color": e.confirmButtonTextColor,
              color: e.confirmButtonColor,
              onClick: e.confirm
            },
            {
              default: ce(() => [he(
                J(e.dt(e.confirmButtonText, e.pack.dialogConfirmButtonText)),
                1
              )]),
              _: 1
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : Z("v-if", !0)],
          2
        )],
        16
      )]),
      _: 3
    },
    8,
    ["class", "show", "overlay", "overlay-class", "overlay-style", "lock-scroll", "close-on-click-overlay", "teleport", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange", "onClickOverlay"]
  );
}
const sr = ae({
  render: Af,
  name: "VarDialog",
  components: {
    VarPopup: mn,
    VarButton: xe
  },
  inheritAttrs: !1,
  props: Nf,
  setup(e) {
    var n = E(!1), r = E(!1), a = () => N(e["onUpdate:show"], !1), t = () => {
      var {
        closeOnClickOverlay: l,
        onClickOverlay: s,
        onBeforeClose: u
      } = e;
      if (N(s), !!l) {
        if (u != null) {
          u("close", a);
          return;
        }
        N(e["onUpdate:show"], !1);
      }
    }, i = () => {
      var {
        onBeforeClose: l,
        onConfirm: s
      } = e;
      if (N(s), l != null) {
        l("confirm", a);
        return;
      }
      N(e["onUpdate:show"], !1);
    }, o = () => {
      var {
        onBeforeClose: l,
        onCancel: s
      } = e;
      if (N(s), l != null) {
        l("cancel", a);
        return;
      }
      N(e["onUpdate:show"], !1);
    };
    return ne(() => e.show, (l) => {
      n.value = l;
    }, {
      immediate: !0
    }), ne(() => e.closeOnClickOverlay, (l) => {
      if (e.onBeforeClose != null) {
        r.value = !1;
        return;
      }
      r.value = l;
    }, {
      immediate: !0
    }), {
      n: Df,
      classes: Bf,
      pack: Ue,
      dt: ct,
      popupShow: n,
      popupCloseOnClickOverlay: r,
      handleClickOverlay: t,
      confirm: i,
      cancel: o
    };
  }
});
var Ln;
function cr(e) {
  return Ti() ? new Promise((n) => {
    cr.close();
    var r = _e(e) || Qe(e) ? {
      message: String(e)
    } : e, a = Ne(r);
    a.teleport = "body", Ln = a;
    var {
      unmountInstance: t
    } = za(sr, a, {
      onConfirm: () => {
        a.onConfirm == null || a.onConfirm(), n("confirm");
      },
      onCancel: () => {
        a.onCancel == null || a.onCancel(), n("cancel");
      },
      onClose: () => {
        a.onClose == null || a.onClose(), n("close");
      },
      onClosed: () => {
        a.onClosed == null || a.onClosed(), t(), Ln === a && (Ln = null);
      },
      onRouteChange: () => {
        t(), Ln === a && (Ln = null);
      },
      "onUpdate:show": (i) => {
        a.show = i;
      }
    });
    a.show = !0;
  }) : Promise.resolve();
}
sr.install = function(e) {
  e.component(sr.name, sr);
};
cr.install = function(e) {
  e.component(sr.name, sr);
};
cr.close = () => {
  if (Ln != null) {
    var e = Ln;
    Ln = null, Pe().then(() => {
      e.show = !1;
    });
  }
};
cr.Component = sr;
var zf = {
  inset: {
    type: [Boolean, Number, String],
    default: !1
  },
  vertical: {
    type: Boolean,
    default: !1
  },
  description: {
    type: String
  },
  margin: {
    type: String
  },
  dashed: {
    type: Boolean,
    default: !1
  }
};
function Tr() {
  return Tr = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Tr.apply(this, arguments);
}
var {
  n: Ff,
  classes: Lf
} = _("divider");
function Rf(e, n) {
  return w(), I(
    "div",
    {
      class: m(e.classes(e.n(), "var--box", [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.isInset, e.n("--inset")], [e.dashed, e.n("--dashed")])),
      style: K(e.style)
    },
    [q(e.$slots, "default", {}, () => [e.description ? (w(), I(
      "span",
      {
        key: 0,
        class: m(e.n("text"))
      },
      J(e.description),
      3
    )) : Z("v-if", !0)])],
    6
  );
}
const Lr = ae({
  render: Rf,
  name: "VarDivider",
  props: zf,
  setup(e, n) {
    var {
      slots: r
    } = n, a = Ne({
      withText: !1
    }), t = W(() => Bt(e.inset) ? e.inset : !0), i = W(() => {
      var {
        inset: l,
        vertical: s,
        margin: u
      } = e, d = {
        margin: u
      };
      if (Bt(l) || l === 0)
        return Tr({}, d);
      var v = L(l), f = Math.abs(v) + (l + "").replace(v + "", "");
      return s ? Tr({}, d, {
        height: "calc(80% - " + Ve(f) + ")"
      }) : Tr({}, d, {
        width: "calc(100% - " + Ve(f) + ")",
        left: v > 0 ? Ve(f) : Ve(0)
      });
    }), o = () => {
      a.withText = Boolean(r.default) || Boolean(e.description);
    };
    return Fe(() => {
      o();
    }), Ci(() => {
      o();
    }), Tr({
      n: Ff,
      classes: Lf
    }, Ds(a), {
      style: i,
      isInset: t
    });
  }
});
Lr.install = function(e) {
  e.component(Lr.name, Lr);
};
var Uf = {
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  }
};
function ho(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Yf(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        ho(i, a, t, o, l, "next", s);
      }
      function l(s) {
        ho(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Wf
} = _("form");
function Hf(e, n) {
  return w(), I(
    "div",
    {
      class: m(e.n())
    },
    [q(e.$slots, "default")],
    2
  );
}
const Rr = ae({
  render: Hf,
  name: "VarForm",
  props: Uf,
  setup(e) {
    var n = W(() => e.disabled), r = W(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = kd(), i = /* @__PURE__ */ function() {
      var u = Yf(function* () {
        var d = yield Promise.all(a.map((v) => {
          var {
            validate: f
          } = v;
          return f();
        }));
        return d.every((v) => v === !0);
      });
      return function() {
        return u.apply(this, arguments);
      };
    }(), o = () => a.forEach((u) => {
      var {
        reset: d
      } = u;
      return d();
    }), l = () => a.forEach((u) => {
      var {
        resetValidation: d
      } = u;
      return d();
    }), s = {
      disabled: n,
      readonly: r
    };
    return t(s), {
      n: Wf,
      validate: i,
      reset: o,
      resetValidation: l
    };
  }
});
Rr.install = function(e) {
  e.component(Rr.name, Rr);
};
function go(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function bt(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        go(i, a, t, o, l, "next", s);
      }
      function l(s) {
        go(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
function ni() {
  return ni = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ni.apply(this, arguments);
}
var jf = "background-image", Gf = "lazy-loading", qf = "lazy-error", yo = "lazy-attempt", Kf = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], ri = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", ha = [], tt = [], ql = du(100), Ae = {
  loading: ri,
  error: ri,
  attempt: 3,
  throttleWait: 300,
  events: Kf
}, Ii = $i(La, Ae.throttleWait);
function wt(e, n) {
  e._lazy.arg === jf ? e.style.backgroundImage = "url(" + n + ")" : e.setAttribute("src", n);
}
function Xf(e) {
  e._lazy.loading && wt(e, e._lazy.loading), La();
}
function Zf(e) {
  e._lazy.error && wt(e, e._lazy.error), e._lazy.state = "error", Di(e), La();
}
function Kl(e, n) {
  wt(e, n), e._lazy.state = "success", Di(e), La();
}
function Jf(e) {
  var n;
  tt.includes(e) || (tt.push(e), (n = Ae.events) == null || n.forEach((r) => {
    e.addEventListener(r, Ii, {
      passive: !0
    });
  }));
}
function Qf() {
  tt.forEach((e) => {
    var n;
    (n = Ae.events) == null || n.forEach((r) => {
      e.removeEventListener(r, Ii);
    });
  }), tt.length = 0;
}
function xf(e, n) {
  var r, a, t = {
    loading: (r = e.getAttribute(Gf)) != null ? r : Ae.loading,
    error: (a = e.getAttribute(qf)) != null ? a : Ae.error,
    attempt: e.getAttribute(yo) ? Number(e.getAttribute(yo)) : Ae.attempt
  };
  e._lazy = ni({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), wt(e, ri), N(Ae.filter, e._lazy);
}
function _f(e, n) {
  var r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, ql.add(n), Kl(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? Zf(e) : Xl(e);
  });
}
function Xl(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: n
    } = e._lazy;
    if (ql.has(n)) {
      Kl(e, n), e._lazy.attemptLock = !1;
      return;
    }
    Xf(e), _f(e, n);
  }
}
function Ni(e) {
  return ai.apply(this, arguments);
}
function ai() {
  return ai = bt(function* (e) {
    (yield Ys(e)) && Xl(e);
  }), ai.apply(this, arguments);
}
function La() {
  ha.forEach((e) => Ni(e));
}
function ec(e) {
  return ti.apply(this, arguments);
}
function ti() {
  return ti = bt(function* (e) {
    !ha.includes(e) && ha.push(e), Ws(e).forEach(Jf), yield Ni(e);
  }), ti.apply(this, arguments);
}
function Di(e) {
  ut(ha, e), ha.length === 0 && Qf();
}
function nc(e, n) {
  var {
    src: r,
    arg: a
  } = e._lazy;
  return r !== n.value || a !== n.arg;
}
function Zl(e, n) {
  return ii.apply(this, arguments);
}
function ii() {
  return ii = bt(function* (e, n) {
    xf(e, n), yield ec(e);
  }), ii.apply(this, arguments);
}
function rc(e, n) {
  return oi.apply(this, arguments);
}
function oi() {
  return oi = bt(function* (e, n) {
    if (!nc(e, n)) {
      ha.includes(e) && (yield Ni(e));
      return;
    }
    yield Zl(e, n);
  }), oi.apply(this, arguments);
}
function ac(e) {
  e === void 0 && (e = {});
  var {
    events: n,
    loading: r,
    error: a,
    attempt: t,
    throttleWait: i,
    filter: o
  } = e;
  Ae.events = n != null ? n : Ae.events, Ae.loading = r != null ? r : Ae.loading, Ae.error = a != null ? a : Ae.error, Ae.attempt = t != null ? t : Ae.attempt, Ae.throttleWait = i != null ? i : Ae.throttleWait, Ae.filter = o;
}
var it = {
  mounted: Zl,
  unmounted: Di,
  updated: rc,
  install(e, n) {
    ac(n), Ii = $i(La, Ae.throttleWait), e.directive("lazy", this);
  }
};
function tc(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var ic = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: tc,
    default: "fill"
  },
  alt: {
    type: String
  },
  width: {
    type: [String, Number]
  },
  height: {
    type: [String, Number]
  },
  radius: {
    type: [String, Number],
    default: 0
  },
  loading: {
    type: String
  },
  error: {
    type: String
  },
  lazy: {
    type: Boolean,
    default: !1
  },
  ripple: {
    type: Boolean,
    default: !1
  },
  block: {
    type: Boolean,
    default: !0
  },
  onClick: {
    type: Function
  },
  onLoad: {
    type: Function
  },
  onError: {
    type: Function
  }
}, {
  n: oc,
  classes: lc
} = _("image"), sc = ["alt", "lazy-error", "lazy-loading"], uc = ["alt", "src"];
function dc(e, n) {
  var r = Ge("lazy"), a = Ge("ripple");
  return Ce((w(), I(
    "div",
    {
      class: m(e.classes(e.n(), "var--box", [!e.block, "var--inline-block"])),
      style: K({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      })
    },
    [e.lazy ? Ce((w(), I(
      "img",
      {
        key: 0,
        class: m(e.n("image")),
        alt: e.alt,
        "lazy-error": e.error,
        "lazy-loading": e.loading,
        style: K({
          objectFit: e.fit
        }),
        onLoad: n[0] || (n[0] = function() {
          return e.handleLoad && e.handleLoad(...arguments);
        }),
        onError: n[1] || (n[1] = function() {
          return e.handleError && e.handleError(...arguments);
        }),
        onClick: n[2] || (n[2] = function() {
          return e.onClick && e.onClick(...arguments);
        })
      },
      null,
      46,
      sc
    )), [[r, e.src]]) : (w(), I(
      "img",
      {
        key: 1,
        class: m(e.n("image")),
        alt: e.alt,
        style: K({
          objectFit: e.fit
        }),
        src: e.src,
        onLoad: n[3] || (n[3] = function() {
          return e.handleLoad && e.handleLoad(...arguments);
        }),
        onError: n[4] || (n[4] = function() {
          return e.handleError && e.handleError(...arguments);
        }),
        onClick: n[5] || (n[5] = function() {
          return e.onClick && e.onClick(...arguments);
        })
      },
      null,
      46,
      uc
    ))],
    6
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
const Ur = ae({
  render: dc,
  name: "VarImage",
  directives: {
    Lazy: it,
    Ripple: Le
  },
  props: ic,
  setup(e) {
    var n = (a) => {
      var t = a.currentTarget, {
        lazy: i,
        onLoad: o,
        onError: l
      } = e;
      i ? (t._lazy.state === "success" && N(o, a), t._lazy.state === "error" && N(l, a)) : N(o, a);
    }, r = (a) => {
      var {
        lazy: t,
        onError: i
      } = e;
      !t && N(i, a);
    };
    return {
      n: oc,
      classes: lc,
      toSizeUnit: Ve,
      handleLoad: n,
      handleError: r
    };
  }
});
Ur.install = function(e) {
  e.component(Ur.name, Ur);
};
var Jl = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY"), Ql = Symbol("SWIPE_COUNT_SWIPE_ITEM_KEY");
function vc() {
  var {
    childProviders: e,
    bindChildren: n
  } = un(Jl), {
    length: r
  } = gn(Ql);
  return {
    length: r,
    swipeItems: e,
    bindSwipeItems: n
  };
}
var xl = {
  loop: {
    type: Boolean,
    default: !0
  },
  autoplay: {
    type: [String, Number]
  },
  duration: {
    type: [String, Number],
    default: 300
  },
  initialIndex: {
    type: [String, Number],
    default: 0
  },
  indicator: {
    type: Boolean,
    default: !0
  },
  indicatorColor: {
    type: String
  },
  vertical: {
    type: Boolean,
    default: !1
  },
  touchable: {
    type: Boolean,
    default: !0
  },
  onChange: {
    type: Function
  }
};
function bo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function fc(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        bo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        bo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var cc = 250, mc = 20, {
  n: pc,
  classes: hc
} = _("swipe"), gc = ["onClick"];
function yc(e, n) {
  return w(), I(
    "div",
    {
      class: m(e.n()),
      ref: "swipeEl"
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n("track"), [e.vertical, e.n("--vertical")])),
        style: K({
          width: e.vertical ? void 0 : e.trackSize + "px",
          height: e.vertical ? e.trackSize + "px" : void 0,
          transform: "translate" + (e.vertical ? "Y" : "X") + "(" + e.translate + "px)",
          transitionDuration: e.lockDuration ? "0ms" : e.toNumber(e.duration) + "ms"
        }),
        onTouchstart: n[0] || (n[0] = function() {
          return e.handleTouchstart && e.handleTouchstart(...arguments);
        }),
        onTouchmove: n[1] || (n[1] = function() {
          return e.handleTouchmove && e.handleTouchmove(...arguments);
        }),
        onTouchend: n[2] || (n[2] = function() {
          return e.handleTouchend && e.handleTouchend(...arguments);
        })
      },
      [q(e.$slots, "default")],
      38
    ), q(e.$slots, "indicator", {
      index: e.index,
      length: e.length
    }, () => [e.indicator && e.length ? (w(), I(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
      },
      [(w(!0), I(
        Oe,
        null,
        Ie(e.length, (r, a) => (w(), I(
          "div",
          {
            class: m(e.classes(e.n("indicator"), [e.index === a, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])),
            style: K({
              background: e.indicatorColor
            }),
            key: r,
            onClick: (t) => e.to(a)
          },
          null,
          14,
          gc
        ))),
        128
      ))],
      2
    )) : Z("v-if", !0)])],
    2
  );
}
const jn = ae({
  render: yc,
  name: "VarSwipe",
  props: xl,
  setup(e) {
    var n = E(null), r = E(0), a = W(() => e.vertical), t = E(0), i = E(0), o = E(!1), l = E(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = vc(), v = !1, f = -1, c, p, b, y, T, S = (F) => s.find((U) => {
      var {
        index: H
      } = U;
      return H.value === F;
    }), h = () => {
      !e.loop || (i.value >= 0 && S(d.value - 1).setTranslate(-t.value), i.value <= -(t.value - r.value) && S(0).setTranslate(t.value), i.value > -(t.value - r.value) && i.value < 0 && (S(d.value - 1).setTranslate(0), S(0).setTranslate(0)));
    }, g = (F) => {
      var U = Qe(F) ? F : Math.floor((i.value - r.value / 2) / -r.value), {
        loop: H
      } = e;
      return U <= -1 ? H ? -1 : 0 : U >= d.value ? H ? d.value : d.value - 1 : U;
    }, M = (F) => {
      var {
        loop: U
      } = e;
      return F === -1 ? U ? d.value - 1 : 0 : F === d.value ? U ? 0 : d.value - 1 : F;
    }, $ = (F) => {
      var {
        loop: U
      } = e;
      return F < 0 ? U ? d.value - 1 : 0 : F > d.value - 1 ? U ? 0 : d.value - 1 : F;
    }, B = (F) => {
      var U = i.value >= r.value, H = i.value <= -t.value, Q = 0, ie = -(t.value - r.value);
      o.value = !0, (U || H) && (o.value = !0, i.value = H ? Q : ie, S(0).setTranslate(0), S(d.value - 1).setTranslate(0)), vt(() => {
        o.value = !1, N(F);
      });
    }, C = () => {
      l.value = $(L(e.initialIndex));
    }, D = () => {
      var {
        autoplay: F
      } = e;
      !F || d.value <= 1 || (P(), f = window.setTimeout(() => {
        V(), D();
      }, L(F)));
    }, P = () => {
      f && clearTimeout(f);
    }, k = (F, U) => {
      if (F > U && F > 10)
        return "horizontal";
      if (U > F && U > 10)
        return "vertical";
    }, O = (F) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: U,
          clientY: H
        } = F.touches[0];
        c = U, p = H, b = performance.now(), v = !0, P(), B(() => {
          o.value = !0;
        });
      }
    }, R = (F) => {
      var {
        touchable: U,
        vertical: H
      } = e;
      if (!(!v || !U)) {
        var {
          clientX: Q,
          clientY: ie
        } = F.touches[0], oe = Math.abs(Q - c), ve = Math.abs(ie - p), be = k(oe, ve), nn = H ? "vertical" : "horizontal";
        if (be === nn) {
          F.preventDefault();
          var rn = y !== void 0 ? Q - y : 0, De = T !== void 0 ? ie - T : 0;
          y = Q, T = ie, i.value += H ? De : rn, h();
        }
      }
    }, Y = () => {
      if (!!v) {
        var {
          vertical: F,
          onChange: U
        } = e, H = F ? T < p : y < c, Q = Math.abs(F ? p - T : c - y), ie = performance.now() - b <= cc && Q >= mc, oe = ie ? g(H ? l.value + 1 : l.value - 1) : g();
        v = !1, o.value = !1, y = void 0, T = void 0, i.value = oe * -r.value;
        var ve = l.value;
        l.value = M(oe), D(), ve !== l.value && N(U, l.value);
      }
    }, G = () => {
      o.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, t.value = r.value * d.value, i.value = l.value * -r.value, s.forEach((F) => {
        F.setTranslate(0);
      }), D(), setTimeout(() => {
        o.value = !1;
      });
    }, V = () => {
      if (!(d.value <= 1)) {
        var {
          loop: F,
          onChange: U
        } = e, H = l.value;
        l.value = $(H + 1), N(U, l.value), B(() => {
          if (H === d.value - 1 && F) {
            S(0).setTranslate(t.value), i.value = d.value * -r.value;
            return;
          }
          H !== d.value - 1 && (i.value = l.value * -r.value);
        });
      }
    }, z = () => {
      if (!(d.value <= 1)) {
        var {
          loop: F,
          onChange: U
        } = e, H = l.value;
        l.value = $(H - 1), N(U, l.value), B(() => {
          if (H === 0 && F) {
            S(d.value - 1).setTranslate(-t.value), i.value = r.value;
            return;
          }
          H !== 0 && (i.value = l.value * -r.value);
        });
      }
    }, X = (F) => {
      if (!(d.value <= 1 || F === l.value)) {
        F = F < 0 ? 0 : F, F = F >= d.value ? d.value : F;
        var U = F > l.value ? V : z;
        Array.from({
          length: Math.abs(F - l.value)
        }).forEach(U);
      }
    }, se = {
      size: r,
      vertical: a
    };
    return u(se), ne(() => d.value, /* @__PURE__ */ fc(function* () {
      yield Mn(), C(), G();
    })), Fe(() => {
      window.addEventListener("resize", G);
    }), xn(() => {
      window.removeEventListener("resize", G), P();
    }), {
      n: pc,
      classes: hc,
      length: d,
      index: l,
      swipeEl: n,
      trackSize: t,
      translate: i,
      lockDuration: o,
      handleTouchstart: O,
      handleTouchmove: R,
      handleTouchend: Y,
      next: V,
      prev: z,
      to: X,
      resize: G,
      toNumber: L
    };
  }
});
jn.install = function(e) {
  e.component(jn.name, jn);
};
function bc() {
  var {
    bindParent: e,
    parentProvider: n
  } = dn(Jl), {
    index: r
  } = yn(Ql);
  if (!e || !n || !r)
    throw Error("<var-swipe-item/> must in <var-swipe/>");
  return {
    index: r,
    swipe: n,
    bindSwipe: e
  };
}
var {
  n: wc
} = _("swipe-item");
function Sc(e, n) {
  return w(), I(
    "div",
    {
      class: m(e.n()),
      style: K({
        width: e.vertical ? void 0 : e.size + "px",
        height: e.vertical ? e.size + "px" : void 0,
        transform: "translate" + (e.vertical ? "Y" : "X") + "(" + e.translate + "px)"
      })
    },
    [q(e.$slots, "default")],
    6
  );
}
const Gn = ae({
  render: Sc,
  name: "VarSwipeItem",
  setup() {
    var e = E(0), {
      swipe: n,
      bindSwipe: r,
      index: a
    } = bc(), {
      size: t,
      vertical: i
    } = n, o = (s) => {
      e.value = s;
    }, l = {
      index: a,
      setTranslate: o
    };
    return r(l), {
      n: wc,
      size: t,
      vertical: i,
      translate: e
    };
  }
});
Gn.install = function(e) {
  e.component(Gn.name, Gn);
};
function li() {
  return li = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, li.apply(this, arguments);
}
var Cc = li({
  show: {
    type: Boolean,
    default: !1
  },
  images: {
    type: Array,
    default: () => []
  },
  current: {
    type: String
  },
  zoom: {
    type: [String, Number],
    default: 2
  },
  closeable: {
    type: Boolean,
    default: !1
  },
  "onUpdate:show": {
    type: Function
  }
}, Ze(xl, ["loop", "indicator", "onChange"]), Ze(Fa, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onRouteChange"
])), {
  n: kc,
  classes: $c
} = _("image-preview"), wo = 12, So = 200, Tc = 350, Co = 200, Oc = ["src", "alt"];
function Pc(e, n) {
  var r = re("var-swipe-item"), a = re("var-swipe"), t = re("var-icon"), i = re("var-popup");
  return w(), me(
    i,
    {
      class: m(e.n("popup")),
      "var-image-preview-cover": "",
      transition: "var-fade",
      show: e.popupShow,
      overlay: !1,
      "close-on-click-overlay": !1,
      "lock-scroll": e.lockScroll,
      teleport: e.teleport,
      onOpen: e.onOpen,
      onClose: e.onClose,
      onClosed: e.onClosed,
      onOpened: e.onOpened,
      onRouteChange: e.onRouteChange
    },
    {
      default: ce(() => [ee(
        a,
        Te({
          class: e.n("swipe"),
          "var-image-preview-cover": "",
          touchable: e.canSwipe,
          indicator: e.indicator && e.images.length > 1,
          "initial-index": e.initialIndex,
          loop: e.loop,
          onChange: e.onChange
        }, e.$attrs),
        {
          default: ce(() => [(w(!0), I(
            Oe,
            null,
            Ie(e.images, (o) => (w(), me(
              r,
              {
                class: m(e.n("swipe-item")),
                "var-image-preview-cover": "",
                key: o
              },
              {
                default: ce(() => [A(
                  "div",
                  {
                    class: m(e.n("zoom-container")),
                    style: K({
                      transform: "scale(" + e.scale + ") translate(" + e.translateX + "px, " + e.translateY + "px)",
                      transitionTimingFunction: e.transitionTimingFunction,
                      transitionDuration: e.transitionDuration
                    }),
                    onTouchstart: n[0] || (n[0] = function() {
                      return e.handleTouchstart && e.handleTouchstart(...arguments);
                    }),
                    onTouchmove: n[1] || (n[1] = function() {
                      return e.handleTouchmove && e.handleTouchmove(...arguments);
                    }),
                    onTouchend: n[2] || (n[2] = function() {
                      return e.handleTouchend && e.handleTouchend(...arguments);
                    })
                  },
                  [A(
                    "img",
                    {
                      class: m(e.n("image")),
                      src: o,
                      alt: o
                    },
                    null,
                    10,
                    Oc
                  )],
                  38
                )]),
                _: 2
              },
              1032,
              ["class"]
            ))),
            128
          ))]),
          indicator: ce((o) => {
            var {
              index: l,
              length: s
            } = o;
            return [q(e.$slots, "indicator", {
              index: l,
              length: s
            }, () => [e.indicator && e.images.length > 1 ? (w(), I(
              "div",
              {
                key: 0,
                class: m(e.n("indicators"))
              },
              J(l + 1) + " / " + J(s),
              3
            )) : Z("v-if", !0)])];
          }),
          _: 3
        },
        16,
        ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]
      ), q(e.$slots, "close-icon", {}, () => [e.closeable ? (w(), me(
        t,
        {
          key: 0,
          class: m(e.n("close-icon")),
          name: "close-circle",
          "var-image-preview-cover": "",
          onClick: e.close
        },
        null,
        8,
        ["class", "onClick"]
      )) : Z("v-if", !0)]), A(
        "div",
        {
          class: m(e.n("extra"))
        },
        [q(e.$slots, "extra")],
        2
      )]),
      _: 3
    },
    8,
    ["class", "show", "lock-scroll", "teleport", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange"]
  );
}
const ur = ae({
  render: Pc,
  name: "VarImagePreview",
  components: {
    VarSwipe: jn,
    VarSwipeItem: Gn,
    VarPopup: mn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Cc,
  setup(e) {
    var n = E(!1), r = W(() => {
      var {
        images: P,
        current: k
      } = e, O = P.findIndex((R) => R === k);
      return O >= 0 ? O : 0;
    }), a = E(1), t = E(0), i = E(0), o = E(void 0), l = E(void 0), s = E(!0), u = null, d = null, v = null, f = (P, k) => {
      var {
        clientX: O,
        clientY: R
      } = P, {
        clientX: Y,
        clientY: G
      } = k;
      return Math.abs(Math.sqrt(Math.pow(Y - O, 2) + Math.pow(G - R, 2)));
    }, c = (P, k) => ({
      clientX: P.clientX,
      clientY: P.clientY,
      timestamp: Date.now(),
      target: k
    }), p = () => {
      a.value = L(e.zoom), s.value = !1, d = null, window.setTimeout(() => {
        o.value = "linear", l.value = "0s";
      }, Co);
    }, b = () => {
      a.value = 1, t.value = 0, i.value = 0, s.value = !0, d = null, o.value = void 0, l.value = void 0;
    }, y = (P) => d ? f(d, P) <= wo && P.timestamp - d.timestamp <= So && d.target === P.target : !1, T = (P) => !P || !u || !d ? !1 : f(u, d) <= wo && Date.now() - d.timestamp < Tc && (P === u.target || P.parentNode === u.target), S = (P) => {
      v = window.setTimeout(() => {
        T(P.target) && D(), u = null;
      }, So);
    }, h = (P) => {
      v && window.clearTimeout(v);
      var {
        touches: k
      } = P, O = c(k[0], P.currentTarget);
      if (u = O, y(O)) {
        a.value > 1 ? b() : p();
        return;
      }
      d = O;
    }, g = (P) => {
      var {
        offsetWidth: k,
        offsetHeight: O
      } = P, {
        naturalWidth: R,
        naturalHeight: Y
      } = P.querySelector(".var-image-preview__image");
      return {
        width: k,
        height: O,
        imageRadio: Y / R,
        rootRadio: O / k,
        zoom: L(e.zoom)
      };
    }, M = (P) => {
      var {
        zoom: k,
        imageRadio: O,
        rootRadio: R,
        width: Y,
        height: G
      } = g(P);
      if (!O)
        return 0;
      var V = O > R ? G / O : Y;
      return Math.max(0, (k * V - Y) / 2) / k;
    }, $ = (P) => {
      var {
        zoom: k,
        imageRadio: O,
        rootRadio: R,
        width: Y,
        height: G
      } = g(P);
      if (!O)
        return 0;
      var V = O > R ? G : Y * O;
      return Math.max(0, (k * V - G) / 2) / k;
    }, B = (P, k, O) => P + k >= O ? O : P + k <= -O ? -O : P + k, C = (P) => {
      if (!!d) {
        var k = P.currentTarget, {
          touches: O
        } = P, R = c(O[0], k);
        if (a.value > 1) {
          var Y = R.clientX - d.clientX, G = R.clientY - d.clientY, V = M(k), z = $(k);
          t.value = B(t.value, Y, V), i.value = B(i.value, G, z);
        }
        d = R;
      }
    }, D = () => {
      if (a.value > 1) {
        b(), setTimeout(() => N(e["onUpdate:show"], !1), Co);
        return;
      }
      N(e["onUpdate:show"], !1);
    };
    return ne(() => e.show, (P) => {
      n.value = P;
    }, {
      immediate: !0
    }), {
      n: kc,
      classes: $c,
      initialIndex: r,
      popupShow: n,
      scale: a,
      translateX: t,
      translateY: i,
      canSwipe: s,
      transitionTimingFunction: o,
      transitionDuration: l,
      handleTouchstart: h,
      handleTouchmove: C,
      handleTouchend: S,
      close: D
    };
  }
});
var Rn;
function Jn(e) {
  if (!!Ti()) {
    Jn.close();
    var n = _e(e) ? {
      images: [e]
    } : Se(e) ? {
      images: e
    } : e, r = Ne(n);
    r.teleport = "body", Rn = r;
    var {
      unmountInstance: a
    } = za(ur, r, {
      onClose: () => r.onClose == null ? void 0 : r.onClose(),
      onClosed: () => {
        r.onClosed == null || r.onClosed(), a(), Rn === r && (Rn = null);
      },
      onRouteChange: () => {
        a(), Rn === r && (Rn = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }
}
Jn.close = () => {
  if (Rn != null) {
    var e = Rn;
    Rn = null, Pe().then(() => {
      e.show = !1;
    });
  }
};
ur.install = function(e) {
  e.component(ur.name, ur);
};
Jn.install = function(e) {
  e.component(ur.name, ur);
};
Jn.Component = ur;
var _l = {
  offsetTop: {
    type: [String, Number],
    default: 0
  },
  zIndex: {
    type: [String, Number],
    default: 10
  },
  cssMode: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onScroll: {
    type: Function
  }
};
function ko(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Ec(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        ko(i, a, t, o, l, "next", s);
      }
      function l(s) {
        ko(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Vc,
  classes: Mc
} = _("sticky");
function Ic(e, n) {
  return w(), I(
    "div",
    {
      class: m(e.classes(e.n(), [e.enableCSSMode, e.n("--css-mode")])),
      ref: "stickyEl",
      style: K({
        zIndex: e.toNumber(e.zIndex),
        top: e.enableCSSMode ? e.offsetTop + "px" : void 0,
        width: e.enableFixedMode ? e.fixedWidth : void 0,
        height: e.enableFixedMode ? e.fixedHeight : void 0
      })
    },
    [A(
      "div",
      {
        class: m(e.n("wrapper")),
        ref: "wrapperEl",
        style: K({
          zIndex: e.toNumber(e.zIndex),
          position: e.enableFixedMode ? "fixed" : void 0,
          width: e.enableFixedMode ? e.fixedWrapperWidth : void 0,
          height: e.enableFixedMode ? e.fixedWrapperHeight : void 0,
          left: e.enableFixedMode ? e.fixedLeft : void 0,
          top: e.enableFixedMode ? e.fixedTop : void 0
        })
      },
      [q(e.$slots, "default")],
      6
    )],
    6
  );
}
const qn = ae({
  render: Ic,
  name: "VarSticky",
  props: _l,
  setup(e) {
    var n = E(null), r = E(null), a = E(!1), t = E("0px"), i = E("0px"), o = E("auto"), l = E("auto"), s = E("auto"), u = E("auto"), d = W(() => !e.disabled && e.cssMode), v = W(() => !e.disabled && a.value), f = W(() => Me(e.offsetTop)), c, p = () => {
      var {
        onScroll: T,
        cssMode: S,
        disabled: h
      } = e;
      if (!h) {
        var g = 0;
        if (c !== window) {
          var {
            top: M
          } = c.getBoundingClientRect();
          g = M;
        }
        var $ = r.value, B = n.value, {
          top: C,
          left: D
        } = B.getBoundingClientRect(), P = C - g;
        P <= f.value ? (S || (o.value = B.offsetWidth + "px", l.value = B.offsetHeight + "px", t.value = g + f.value + "px", i.value = D + "px", s.value = $.offsetWidth + "px", u.value = $.offsetHeight + "px", a.value = !0), N(T, f.value, !0)) : (a.value = !1, N(T, P, !1));
      }
    }, b = /* @__PURE__ */ function() {
      var T = Ec(function* () {
        yield Mn(), c = wa(n.value), c !== window && c.addEventListener("scroll", p), window.addEventListener("scroll", p), p();
      });
      return function() {
        return T.apply(this, arguments);
      };
    }(), y = () => {
      c !== window && c.removeEventListener("scroll", p), window.removeEventListener("scroll", p);
    };
    return ne(() => e.disabled, p), yi(b), bi(y), Fe(b), xn(y), {
      n: Vc,
      classes: Mc,
      stickyEl: n,
      wrapperEl: r,
      isFixed: a,
      offsetTop: f,
      fixedTop: t,
      fixedLeft: i,
      fixedWidth: o,
      fixedHeight: l,
      fixedWrapperWidth: s,
      fixedWrapperHeight: u,
      enableCSSMode: d,
      enableFixedMode: v,
      toNumber: L
    };
  }
});
qn.install = function(e) {
  e.component(qn.name, qn);
};
var es = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY"), ns = Symbol("INDEX_BAR_COUNT_INDEX_ANCHOR_KEY");
function Nc() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(es), {
    length: r
  } = gn(ns);
  return {
    length: r,
    indexAnchors: n,
    bindIndexAnchors: e
  };
}
function Dc() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(es), {
    index: r
  } = yn(ns);
  if (!e || !n)
    throw Error('[Varlet] IndexAnchor: You should use this component in "IndexBar"');
  return {
    index: r,
    indexBar: e,
    bindIndexBar: n
  };
}
var Bc = {
  index: {
    type: [Number, String]
  }
}, {
  n: Ac,
  classes: zc
} = _("index-anchor");
function Fc(e, n) {
  return w(), me(
    st(e.sticky ? "var-sticky" : e.Transition),
    {
      "offset-top": e.sticky ? e.stickyOffsetTop : null,
      "z-index": e.sticky ? e.zIndex : null,
      disabled: e.disabled && !e.cssMode,
      "css-mode": e.cssMode,
      ref: "anchorEl"
    },
    {
      default: ce(() => [A(
        "div",
        Te({
          class: e.n()
        }, e.$attrs),
        [q(e.$slots, "default", {}, () => [he(
          J(e.name),
          1
        )])],
        16
      )]),
      _: 3
    },
    8,
    ["offset-top", "z-index", "disabled", "css-mode"]
  );
}
const Yr = ae({
  render: Fc,
  name: "VarIndexAnchor",
  components: {
    VarSticky: qn
  },
  inheritAttrs: !1,
  props: Bc,
  setup(e) {
    var {
      index: n,
      indexBar: r,
      bindIndexBar: a
    } = Dc(), t = E(0), i = E(!1), o = W(() => e.index), l = E(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = r, c = () => {
      !l.value || (t.value = l.value.$el ? l.value.$el.offsetTop : l.value.offsetTop);
    }, p = (y) => {
      i.value = y;
    }, b = {
      index: n,
      name: o,
      ownTop: t,
      setOwnTop: c,
      setDisabled: p
    };
    return a(b), {
      n: Ac,
      classes: zc,
      name: o,
      anchorEl: l,
      active: s,
      sticky: u,
      zIndex: f,
      disabled: i,
      cssMode: d,
      stickyOffsetTop: v,
      Transition: je
    };
  }
});
Yr.install = function(e) {
  e.component(Yr.name, Yr);
};
var Lc = {
  sticky: {
    type: Boolean,
    default: !0
  },
  stickyOffsetTop: {
    type: [String, Number],
    default: 0
  },
  cssMode: {
    type: Boolean,
    default: !1
  },
  hideList: {
    type: Boolean,
    default: !1
  },
  zIndex: {
    type: [Number, String],
    default: 1
  },
  highlightColor: {
    type: String
  },
  duration: {
    type: [Number, String],
    default: 0
  },
  onClick: {
    type: Function
  },
  onChange: {
    type: Function
  }
};
function $o(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Mt(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        $o(i, a, t, o, l, "next", s);
      }
      function l(s) {
        $o(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Rc,
  classes: Uc
} = _("index-bar"), Yc = ["onClick"];
function Wc(e, n) {
  return w(), I(
    "div",
    {
      class: m(e.n()),
      ref: "barEl"
    },
    [q(e.$slots, "default"), A(
      "ul",
      {
        class: m(e.n("anchor-list")),
        style: K({
          zIndex: e.toNumber(e.zIndex) + 2,
          display: e.hideList ? "none" : "block"
        })
      },
      [(w(!0), I(
        Oe,
        null,
        Ie(e.anchorNameList, (r) => (w(), I(
          "li",
          {
            key: r,
            class: m(e.classes(e.n("anchor-item"), [e.active === r, e.n("anchor-item--active")])),
            style: K({
              color: e.active === r && e.highlightColor ? e.highlightColor : ""
            }),
            onClick: (a) => e.anchorClick(r, !0)
          },
          J(r),
          15,
          Yc
        ))),
        128
      ))],
      6
    )],
    2
  );
}
const Wr = ae({
  render: Wc,
  name: "VarIndexBar",
  props: Lc,
  setup(e) {
    var {
      length: n,
      indexAnchors: r,
      bindIndexAnchors: a
    } = Nc(), t = E(""), i = E(null), o = E(null), l = E([]), s = E(), u = W(() => e.sticky), d = W(() => e.cssMode), v = W(() => Me(e.stickyOffsetTop)), f = W(() => e.zIndex), c = {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    };
    a(c);
    var p = (S) => {
      var h = ki(S) ? S.name.value : S;
      h === s.value || h === void 0 || (s.value = h, N(e.onChange, h));
    }, b = () => {
      var S = dt(i.value), h = i.value === window ? document.body.scrollHeight : i.value.scrollHeight, {
        offsetTop: g
      } = o.value;
      r.forEach((M, $) => {
        var B = M.ownTop.value, C = S - B + v.value - g, D = $ === r.length - 1 ? h : r[$ + 1].ownTop.value - M.ownTop.value;
        C >= 0 && C < D && !t.value && ($ && !e.cssMode && r[$ - 1].setDisabled(!0), M.setDisabled(!1), p(M));
      });
    }, y = /* @__PURE__ */ function() {
      var S = Mt(function* (h, g) {
        var {
          offsetTop: M
        } = o.value;
        if (g && N(e.onClick, h), h !== s.value) {
          var $ = r.find((D) => {
            var {
              name: P
            } = D;
            return h === P.value;
          });
          if (!!$) {
            var B = $.ownTop.value - v.value + M, C = Oi(i.value);
            t.value = h, p(h), yield Qa(i.value, {
              left: C,
              top: B,
              animation: cl,
              duration: L(e.duration)
            }), vt(() => {
              t.value = "";
            });
          }
        }
      });
      return function(g, M) {
        return S.apply(this, arguments);
      };
    }(), T = (S) => {
      kn(() => y(S));
    };
    return ne(() => n.value, /* @__PURE__ */ Mt(function* () {
      yield Mn(), r.forEach((S) => {
        var {
          name: h,
          setOwnTop: g
        } = S;
        h.value && l.value.push(h.value), g();
      });
    })), Fe(/* @__PURE__ */ Mt(function* () {
      yield Mn(), i.value = wa(o.value), i.value.addEventListener("scroll", b);
    })), wi(() => {
      N(i.value.removeEventListener, "scroll", b);
    }), {
      n: Rc,
      classes: Uc,
      barEl: o,
      active: s,
      zIndex: f,
      anchorNameList: l,
      toNumber: L,
      scrollTo: T,
      anchorClick: y
    };
  }
});
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
function Hc(e) {
  return ["text", "password", "number"].includes(e);
}
var jc = {
  modelValue: {
    type: String
  },
  modelModifiers: {
    type: Object,
    default: () => ({})
  },
  type: {
    type: String,
    default: "text",
    validator: Hc
  },
  textarea: {
    type: Boolean,
    default: !1
  },
  rows: {
    type: [String, Number],
    default: 8
  },
  placeholder: {
    type: String
  },
  line: {
    type: Boolean,
    default: !0
  },
  hint: {
    type: Boolean,
    default: !0
  },
  textColor: {
    type: String
  },
  focusColor: {
    type: String
  },
  blurColor: {
    type: String
  },
  maxlength: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  clearable: {
    type: Boolean,
    default: !1
  },
  resize: {
    type: Boolean,
    default: !1
  },
  autofocus: {
    type: Boolean,
    default: !1
  },
  validateTrigger: {
    type: Array,
    default: () => ["onInput", "onClear"]
  },
  rules: {
    type: Array
  },
  onFocus: {
    type: Function
  },
  onBlur: {
    type: Function
  },
  onClick: {
    type: Function
  },
  onClear: {
    type: Function
  },
  onInput: {
    type: Function
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, {
  n: It,
  classes: Gc
} = _("input"), qc = ["id", "disabled", "type", "value", "maxlength", "rows"], Kc = ["id", "disabled", "type", "value", "maxlength"], Xc = ["for"];
function Zc(e, n) {
  var r = re("var-icon"), a = re("var-form-details");
  return w(), I(
    "div",
    {
      class: m(e.classes(e.n(), "var--box", [e.disabled, e.n("--disabled")])),
      onClick: n[10] || (n[10] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: K({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [A(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [q(e.$slots, "prepend-icon")],
        2
      ), A(
        "div",
        {
          class: m(e.classes(e.n("wrap"), [!e.hint, e.n("--non-hint")]))
        },
        [e.type === "password" ? (w(), I(
          "input",
          {
            key: 0,
            class: m(e.n("autocomplete"))
          },
          null,
          2
        )) : Z("v-if", !0), e.textarea ? (w(), I(
          "textarea",
          {
            key: 1,
            class: m(e.classes(e.n("input"), e.n("--textarea"), [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--caret-error")])),
            ref: "el",
            autocomplete: "new-password",
            id: e.id,
            disabled: e.formDisabled || e.disabled || e.formReadonly || e.readonly,
            type: e.type,
            value: e.modelValue,
            maxlength: e.maxlength,
            rows: e.rows,
            style: K({
              color: e.textColor,
              caretColor: e.errorMessage ? void 0 : e.focusColor,
              resize: e.resize ? "vertical" : "none"
            }),
            onFocus: n[0] || (n[0] = function() {
              return e.handleFocus && e.handleFocus(...arguments);
            }),
            onBlur: n[1] || (n[1] = function() {
              return e.handleBlur && e.handleBlur(...arguments);
            }),
            onInput: n[2] || (n[2] = function() {
              return e.handleInput && e.handleInput(...arguments);
            }),
            onChange: n[3] || (n[3] = function() {
              return e.handleChange && e.handleChange(...arguments);
            }),
            onTouchstart: n[4] || (n[4] = function() {
              return e.handleTouchstart && e.handleTouchstart(...arguments);
            })
          },
          `
        `,
          46,
          qc
        )) : (w(), I(
          "input",
          {
            key: 2,
            class: m(e.classes(e.n("input"), [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--caret-error")])),
            ref: "el",
            autocomplete: "new-password",
            id: e.id,
            disabled: e.formDisabled || e.disabled || e.formReadonly || e.readonly,
            type: e.type,
            value: e.modelValue,
            maxlength: e.maxlength,
            style: K({
              color: e.textColor,
              caretColor: e.errorMessage ? void 0 : e.focusColor
            }),
            onFocus: n[5] || (n[5] = function() {
              return e.handleFocus && e.handleFocus(...arguments);
            }),
            onBlur: n[6] || (n[6] = function() {
              return e.handleBlur && e.handleBlur(...arguments);
            }),
            onInput: n[7] || (n[7] = function() {
              return e.handleInput && e.handleInput(...arguments);
            }),
            onChange: n[8] || (n[8] = function() {
              return e.handleChange && e.handleChange(...arguments);
            }),
            onTouchstart: n[9] || (n[9] = function() {
              return e.handleTouchstart && e.handleTouchstart(...arguments);
            })
          },
          null,
          46,
          Kc
        )), A(
          "label",
          {
            class: m(e.classes("var--ellipsis", [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.textarea, e.n("textarea-placeholder"), e.n("placeholder")], e.computePlaceholderState(), [!e.hint, e.n("--placeholder-non-hint")])),
            style: K({
              color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
            }),
            for: e.id
          },
          J(e.placeholder),
          15,
          Xc
        )],
        2
      ), A(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [q(e.$slots, "append-icon", {}, () => [e.clearable && !e.isEmpty(e.modelValue) ? (w(), me(
          r,
          {
            key: 0,
            class: m(e.n("clear-icon")),
            "var-input-cover": "",
            name: "close-circle",
            size: "14px",
            onClick: e.handleClear
          },
          null,
          8,
          ["class", "onClick"]
        )) : Z("v-if", !0)])],
        2
      )],
      6
    ), e.line ? (w(), I(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
        style: K({
          background: e.errorMessage ? void 0 : e.blurColor
        })
      },
      [A(
        "div",
        {
          class: m(e.classes(e.n("dot"), [e.isFocus, e.n("--spread")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
          style: K({
            background: e.errorMessage ? void 0 : e.focusColor
          })
        },
        null,
        6
      )],
      6
    )) : Z("v-if", !0), ee(
      a,
      {
        "error-message": e.errorMessage,
        "maxlength-text": e.maxlengthText
      },
      null,
      8,
      ["error-message", "maxlength-text"]
    )],
    2
  );
}
const dr = ae({
  render: Zc,
  name: "VarInput",
  components: {
    VarIcon: $e,
    VarFormDetails: We
  },
  props: jc,
  setup(e) {
    var n = E("var-input-" + Ba().uid), r = E(null), a = E(!1), t = W(() => {
      var {
        maxlength: P,
        modelValue: k
      } = e;
      return P ? Un(k) ? "0 / " + P : String(k).length + "/" + P : "";
    }), {
      bindForm: i,
      form: o
    } = wn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      resetValidation: d
    } = bn(), v = (P) => {
      Pe(() => {
        var {
          validateTrigger: k,
          rules: O,
          modelValue: R
        } = e;
        s(k, P, O, R);
      });
    }, f = () => {
      var {
        hint: P,
        modelValue: k
      } = e;
      if (!P && !Un(k))
        return It("--placeholder-hidden");
      if (P && (!Un(k) || a.value))
        return It("--placeholder-hint");
    }, c = (P) => {
      a.value = !0, N(e.onFocus, P), v("onFocus");
    }, p = (P) => {
      a.value = !1, N(e.onBlur, P), v("onBlur");
    }, b = (P) => {
      var {
        value: k
      } = P.target;
      k = h(k), N(e["onUpdate:modelValue"], k), N(e.onInput, k, P), v("onInput");
    }, y = (P) => {
      var {
        value: k
      } = P.target;
      N(e.onChange, h(k), P), v("onChange");
    }, T = () => {
      var {
        disabled: P,
        readonly: k,
        clearable: O,
        onClear: R
      } = e;
      o != null && o.disabled.value || o != null && o.readonly.value || P || k || !O || (N(e["onUpdate:modelValue"], ""), N(R, ""), v("onClear"));
    }, S = (P) => {
      var {
        disabled: k,
        onClick: O
      } = e;
      o != null && o.disabled.value || k || (N(O, P), v("onClick"));
    }, h = (P) => e.modelModifiers.trim ? P.trim() : P, g = (P) => {
      var {
        disabled: k,
        readonly: O
      } = e;
      o != null && o.disabled.value || o != null && o.readonly.value || k || O || P.stopPropagation();
    }, M = () => {
      N(e["onUpdate:modelValue"], ""), d();
    }, $ = () => u(e.rules, e.modelValue), B = () => {
      var P;
      (P = r.value) == null || P.focus();
    }, C = () => {
      r.value.blur();
    }, D = {
      reset: M,
      validate: $,
      resetValidation: d
    };
    return N(i, D), Fe(() => {
      e.autofocus && B();
    }), {
      el: r,
      id: n,
      isFocus: a,
      errorMessage: l,
      maxlengthText: t,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      n: It,
      classes: Gc,
      isEmpty: Un,
      computePlaceholderState: f,
      handleFocus: c,
      handleBlur: p,
      handleInput: b,
      handleChange: y,
      handleClear: T,
      handleClick: S,
      handleTouchstart: g,
      validate: $,
      resetValidation: d,
      reset: M,
      focus: B,
      blur: C
    };
  }
});
dr.install = function(e) {
  e.component(dr.name, dr);
};
var Jc = {
  loading: {
    type: Boolean,
    default: !1
  },
  immediateCheck: {
    type: Boolean,
    default: !0
  },
  finished: {
    type: Boolean,
    default: !1
  },
  error: {
    type: Boolean,
    default: !1
  },
  offset: {
    type: [String, Number],
    default: 0
  },
  loadingText: {
    type: String
  },
  finishedText: {
    type: String
  },
  errorText: {
    type: String
  },
  onLoad: {
    type: Function
  },
  "onUpdate:loading": {
    type: Function
  },
  "onUpdate:error": {
    type: Function
  }
};
function To(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Qc(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        To(i, a, t, o, l, "next", s);
      }
      function l(s) {
        To(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: xc,
  classes: _c
} = _("list");
function em(e, n) {
  var r = re("var-loading"), a = Ge("ripple");
  return w(), I(
    "div",
    {
      class: m(e.classes(e.n(), "var--box")),
      ref: "listEl"
    },
    [q(e.$slots, "default"), e.loading ? q(e.$slots, "loading", {
      key: 0
    }, () => [A(
      "div",
      {
        class: m(e.n("loading"))
      },
      [A(
        "div",
        {
          class: m(e.n("loading-text"))
        },
        J(e.dt(e.loadingText, e.pack.listLoadingText)),
        3
      ), ee(r, {
        size: "mini",
        radius: 10
      })],
      2
    )]) : Z("v-if", !0), e.finished ? q(e.$slots, "finished", {
      key: 1
    }, () => [A(
      "div",
      {
        class: m(e.n("finished"))
      },
      J(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
    )]) : Z("v-if", !0), e.error ? q(e.$slots, "error", {
      key: 2
    }, () => [Ce((w(), I(
      "div",
      {
        class: m(e.n("error")),
        onClick: n[0] || (n[0] = function() {
          return e.load && e.load(...arguments);
        })
      },
      [he(
        J(e.dt(e.errorText, e.pack.listErrorText)),
        1
      )],
      2
    )), [[a]])]) : Z("v-if", !0), A(
      "div",
      {
        class: m(e.n("detector")),
        ref: "detectorEl"
      },
      null,
      2
    )],
    2
  );
}
const Hr = ae({
  render: em,
  name: "VarList",
  directives: {
    Ripple: Le
  },
  components: {
    VarLoading: Cn
  },
  props: Jc,
  setup(e) {
    var n = E(null), r = E(null), a, t = () => {
      N(e["onUpdate:error"], !1), N(e["onUpdate:loading"], !0), N(e.onLoad);
    }, i = () => {
      var l = a === window ? window.innerHeight : a.getBoundingClientRect().bottom, {
        bottom: s
      } = r.value.getBoundingClientRect();
      return Math.floor(s) - Me(e.offset) <= l;
    }, o = /* @__PURE__ */ function() {
      var l = Qc(function* () {
        yield Pe();
        var {
          loading: s,
          finished: u,
          error: d
        } = e;
        !s && !u && !d && i() && t();
      });
      return function() {
        return l.apply(this, arguments);
      };
    }();
    return Fe(() => {
      a = wa(n.value), e.immediateCheck && o(), a.addEventListener("scroll", o);
    }), xn(() => {
      a.removeEventListener("scroll", o);
    }), {
      pack: Ue,
      listEl: n,
      detectorEl: r,
      dt: ct,
      isNumber: Qe,
      load: t,
      check: o,
      n: xc,
      classes: _c
    };
  }
});
Hr.install = function(e) {
  e.component(Hr.name, Hr);
};
var nm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ja(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return nm[n];
  });
}
var Pn = "top", Qn = "bottom", mr = "right", Kn = "left", St = "auto", Ct = [Pn, Qn, mr, Kn], kt = "start", Ma = "end", rm = "clippingParents", rs = "viewport", Sa = "popper", am = "reference", Oo = /* @__PURE__ */ Ct.reduce(function(e, n) {
  return e.concat([n + "-" + kt, n + "-" + Ma]);
}, []), as = /* @__PURE__ */ [].concat(Ct, [St]).reduce(function(e, n) {
  return e.concat([n, n + "-" + kt, n + "-" + Ma]);
}, []), tm = "beforeRead", im = "read", om = "afterRead", lm = "beforeMain", sm = "main", um = "afterMain", dm = "beforeWrite", vm = "write", fm = "afterWrite", si = [tm, im, om, lm, sm, um, dm, vm, fm];
function En(e) {
  return e.split("-")[0];
}
var cm = {
  start: "end",
  end: "start"
};
function Po(e) {
  return e.replace(/start|end/g, function(n) {
    return cm[n];
  });
}
function vn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function pr(e) {
  var n = vn(e).Element;
  return e instanceof n || e instanceof Element;
}
function ln(e) {
  var n = vn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function Bi(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = vn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function er(e) {
  return ((pr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
var Pa = Math.max, Eo = Math.min, ga = Math.round;
function ui() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function ts() {
  return !/^((?!chrome|android).)*safari/i.test(ui());
}
function ya(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), t = 1, i = 1;
  n && ln(e) && (t = e.offsetWidth > 0 && ga(a.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && ga(a.height) / e.offsetHeight || 1);
  var o = pr(e) ? vn(e) : window, l = o.visualViewport, s = !ts() && r, u = (a.left + (s && l ? l.offsetLeft : 0)) / t, d = (a.top + (s && l ? l.offsetTop : 0)) / i, v = a.width / t, f = a.height / i;
  return {
    width: v,
    height: f,
    top: d,
    right: u + v,
    bottom: d + f,
    left: u,
    x: u,
    y: d
  };
}
function Ai(e) {
  var n = vn(e), r = n.pageXOffset, a = n.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: a
  };
}
function zi(e) {
  return ya(er(e)).left + Ai(e).scrollLeft;
}
function mm(e, n) {
  var r = vn(e), a = er(e), t = r.visualViewport, i = a.clientWidth, o = a.clientHeight, l = 0, s = 0;
  if (t) {
    i = t.width, o = t.height;
    var u = ts();
    (u || !u && n === "fixed") && (l = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: i,
    height: o,
    x: l + zi(e),
    y: s
  };
}
function hn(e) {
  return vn(e).getComputedStyle(e);
}
function pm(e) {
  var n, r = er(e), a = Ai(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, i = Pa(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), o = Pa(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), l = -a.scrollLeft + zi(e), s = -a.scrollTop;
  return hn(t || r).direction === "rtl" && (l += Pa(r.clientWidth, t ? t.clientWidth : 0) - i), {
    width: i,
    height: o,
    x: l,
    y: s
  };
}
function Tn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function $t(e) {
  return Tn(e) === "html" ? e : e.assignedSlot || e.parentNode || (Bi(e) ? e.host : null) || er(e);
}
function Fi(e) {
  var n = hn(e), r = n.overflow, a = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + a);
}
function is(e) {
  return ["html", "body", "#document"].indexOf(Tn(e)) >= 0 ? e.ownerDocument.body : ln(e) && Fi(e) ? e : is($t(e));
}
function Ea(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = is(e), t = a === ((r = e.ownerDocument) == null ? void 0 : r.body), i = vn(a), o = t ? [i].concat(i.visualViewport || [], Fi(a) ? a : []) : a, l = n.concat(o);
  return t ? l : l.concat(Ea($t(o)));
}
function hm(e) {
  return ["table", "td", "th"].indexOf(Tn(e)) >= 0;
}
function Vo(e) {
  return !ln(e) || hn(e).position === "fixed" ? null : e.offsetParent;
}
function gm(e) {
  var n = /firefox/i.test(ui()), r = /Trident/i.test(ui());
  if (r && ln(e)) {
    var a = hn(e);
    if (a.position === "fixed")
      return null;
  }
  var t = $t(e);
  for (Bi(t) && (t = t.host); ln(t) && ["html", "body"].indexOf(Tn(t)) < 0; ) {
    var i = hn(t);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || n && i.willChange === "filter" || n && i.filter && i.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function Li(e) {
  for (var n = vn(e), r = Vo(e); r && hm(r) && hn(r).position === "static"; )
    r = Vo(r);
  return r && (Tn(r) === "html" || Tn(r) === "body" && hn(r).position === "static") ? n : r || gm(e) || n;
}
function ym(e, n) {
  var r = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (r && Bi(r)) {
    var a = n;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function di(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function bm(e, n) {
  var r = ya(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Mo(e, n, r) {
  return n === rs ? di(mm(e, r)) : pr(n) ? bm(n, r) : di(pm(er(e)));
}
function wm(e) {
  var n = Ea($t(e)), r = ["absolute", "fixed"].indexOf(hn(e).position) >= 0, a = r && ln(e) ? Li(e) : e;
  return pr(a) ? n.filter(function(t) {
    return pr(t) && ym(t, a) && Tn(t) !== "body";
  }) : [];
}
function Sm(e, n, r, a) {
  var t = n === "clippingParents" ? wm(e) : [].concat(n), i = [].concat(t, [r]), o = i[0], l = i.reduce(function(s, u) {
    var d = Mo(e, u, a);
    return s.top = Pa(d.top, s.top), s.right = Eo(d.right, s.right), s.bottom = Eo(d.bottom, s.bottom), s.left = Pa(d.left, s.left), s;
  }, Mo(e, o, a));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Ia(e) {
  return e.split("-")[1];
}
function Cm(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function os(e) {
  var n = e.reference, r = e.element, a = e.placement, t = a ? En(a) : null, i = a ? Ia(a) : null, o = n.x + n.width / 2 - r.width / 2, l = n.y + n.height / 2 - r.height / 2, s;
  switch (t) {
    case Pn:
      s = {
        x: o,
        y: n.y - r.height
      };
      break;
    case Qn:
      s = {
        x: o,
        y: n.y + n.height
      };
      break;
    case mr:
      s = {
        x: n.x + n.width,
        y: l
      };
      break;
    case Kn:
      s = {
        x: n.x - r.width,
        y: l
      };
      break;
    default:
      s = {
        x: n.x,
        y: n.y
      };
  }
  var u = t ? Cm(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (i) {
      case kt:
        s[u] = s[u] - (n[d] / 2 - r[d] / 2);
        break;
      case Ma:
        s[u] = s[u] + (n[d] / 2 - r[d] / 2);
        break;
    }
  }
  return s;
}
function km() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function $m(e) {
  return Object.assign({}, km(), e);
}
function Tm(e, n) {
  return n.reduce(function(r, a) {
    return r[a] = e, r;
  }, {});
}
function ls(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = a === void 0 ? e.placement : a, i = r.strategy, o = i === void 0 ? e.strategy : i, l = r.boundary, s = l === void 0 ? rm : l, u = r.rootBoundary, d = u === void 0 ? rs : u, v = r.elementContext, f = v === void 0 ? Sa : v, c = r.altBoundary, p = c === void 0 ? !1 : c, b = r.padding, y = b === void 0 ? 0 : b, T = $m(typeof y != "number" ? y : Tm(y, Ct)), S = f === Sa ? am : Sa, h = e.rects.popper, g = e.elements[p ? S : f], M = Sm(pr(g) ? g : g.contextElement || er(e.elements.popper), s, d, o), $ = ya(e.elements.reference), B = os({
    reference: $,
    element: h,
    strategy: "absolute",
    placement: t
  }), C = di(Object.assign({}, h, B)), D = f === Sa ? C : $, P = {
    top: M.top - D.top + T.top,
    bottom: D.bottom - M.bottom + T.bottom,
    left: M.left - D.left + T.left,
    right: D.right - M.right + T.right
  }, k = e.modifiersData.offset;
  if (f === Sa && k) {
    var O = k[t];
    Object.keys(P).forEach(function(R) {
      var Y = [mr, Qn].indexOf(R) >= 0 ? 1 : -1, G = [Pn, Qn].indexOf(R) >= 0 ? "y" : "x";
      P[R] += O[G] * Y;
    });
  }
  return P;
}
function Om(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = r.boundary, i = r.rootBoundary, o = r.padding, l = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? as : s, d = Ia(a), v = d ? l ? Oo : Oo.filter(function(p) {
    return Ia(p) === d;
  }) : Ct, f = v.filter(function(p) {
    return u.indexOf(p) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var c = f.reduce(function(p, b) {
    return p[b] = ls(e, {
      placement: b,
      boundary: t,
      rootBoundary: i,
      padding: o
    })[En(b)], p;
  }, {});
  return Object.keys(c).sort(function(p, b) {
    return c[p] - c[b];
  });
}
function Pm(e) {
  if (En(e) === St)
    return [];
  var n = Ja(e);
  return [Po(e), n, Po(n)];
}
function Em(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = r.mainAxis, i = t === void 0 ? !0 : t, o = r.altAxis, l = o === void 0 ? !0 : o, s = r.fallbackPlacements, u = r.padding, d = r.boundary, v = r.rootBoundary, f = r.altBoundary, c = r.flipVariations, p = c === void 0 ? !0 : c, b = r.allowedAutoPlacements, y = n.options.placement, T = En(y), S = T === y, h = s || (S || !p ? [Ja(y)] : Pm(y)), g = [y].concat(h).reduce(function(ie, oe) {
      return ie.concat(En(oe) === St ? Om(n, {
        placement: oe,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: p,
        allowedAutoPlacements: b
      }) : oe);
    }, []), M = n.rects.reference, $ = n.rects.popper, B = /* @__PURE__ */ new Map(), C = !0, D = g[0], P = 0; P < g.length; P++) {
      var k = g[P], O = En(k), R = Ia(k) === kt, Y = [Pn, Qn].indexOf(O) >= 0, G = Y ? "width" : "height", V = ls(n, {
        placement: k,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), z = Y ? R ? mr : Kn : R ? Qn : Pn;
      M[G] > $[G] && (z = Ja(z));
      var X = Ja(z), se = [];
      if (i && se.push(V[O] <= 0), l && se.push(V[z] <= 0, V[X] <= 0), se.every(function(ie) {
        return ie;
      })) {
        D = k, C = !1;
        break;
      }
      B.set(k, se);
    }
    if (C)
      for (var F = p ? 3 : 1, U = function(oe) {
        var ve = g.find(function(be) {
          var nn = B.get(be);
          if (nn)
            return nn.slice(0, oe).every(function(rn) {
              return rn;
            });
        });
        if (ve)
          return D = ve, "break";
      }, H = F; H > 0; H--) {
        var Q = U(H);
        if (Q === "break")
          break;
      }
    n.placement !== D && (n.modifiersData[a]._skip = !0, n.placement = D, n.reset = !0);
  }
}
const Vm = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Em,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Mm(e, n, r) {
  var a = En(e), t = [Kn, Pn].indexOf(a) >= 0 ? -1 : 1, i = typeof r == "function" ? r(Object.assign({}, n, {
    placement: e
  })) : r, o = i[0], l = i[1];
  return o = o || 0, l = (l || 0) * t, [Kn, mr].indexOf(a) >= 0 ? {
    x: l,
    y: o
  } : {
    x: o,
    y: l
  };
}
function Im(e) {
  var n = e.state, r = e.options, a = e.name, t = r.offset, i = t === void 0 ? [0, 0] : t, o = as.reduce(function(d, v) {
    return d[v] = Mm(v, n.rects, i), d;
  }, {}), l = o[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[a] = o;
}
const Nm = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Im
};
function Dm(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Bm(e) {
  return e === vn(e) || !ln(e) ? Ai(e) : Dm(e);
}
function Am(e) {
  var n = e.getBoundingClientRect(), r = ga(n.width) / e.offsetWidth || 1, a = ga(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function zm(e, n, r) {
  r === void 0 && (r = !1);
  var a = ln(n), t = ln(n) && Am(n), i = er(n), o = ya(e, t, r), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((Tn(n) !== "body" || Fi(i)) && (l = Bm(n)), ln(n) ? (s = ya(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : i && (s.x = zi(i))), {
    x: o.left + l.scrollLeft - s.x,
    y: o.top + l.scrollTop - s.y,
    width: o.width,
    height: o.height
  };
}
function Fm(e) {
  var n = ya(e), r = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - a) <= 1 && (a = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: a
  };
}
function Lm(e) {
  var n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), a = [];
  e.forEach(function(i) {
    n.set(i.name, i);
  });
  function t(i) {
    r.add(i.name);
    var o = [].concat(i.requires || [], i.requiresIfExists || []);
    o.forEach(function(l) {
      if (!r.has(l)) {
        var s = n.get(l);
        s && t(s);
      }
    }), a.push(i);
  }
  return e.forEach(function(i) {
    r.has(i.name) || t(i);
  }), a;
}
function Rm(e) {
  var n = Lm(e);
  return si.reduce(function(r, a) {
    return r.concat(n.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function Um(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(r) {
      Promise.resolve().then(function() {
        n = void 0, r(e());
      });
    })), n;
  };
}
function Dn(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  return [].concat(r).reduce(function(t, i) {
    return t.replace(/%s/, i);
  }, e);
}
var nr = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Ym = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Io = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Wm(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), Io).filter(function(r, a, t) {
      return t.indexOf(r) === a;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof n.name != "string" && console.error(Dn(nr, String(n.name), '"name"', '"string"', '"' + String(n.name) + '"'));
          break;
        case "enabled":
          typeof n.enabled != "boolean" && console.error(Dn(nr, n.name, '"enabled"', '"boolean"', '"' + String(n.enabled) + '"'));
          break;
        case "phase":
          si.indexOf(n.phase) < 0 && console.error(Dn(nr, n.name, '"phase"', "either " + si.join(", "), '"' + String(n.phase) + '"'));
          break;
        case "fn":
          typeof n.fn != "function" && console.error(Dn(nr, n.name, '"fn"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "effect":
          n.effect != null && typeof n.effect != "function" && console.error(Dn(nr, n.name, '"effect"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "requires":
          n.requires != null && !Array.isArray(n.requires) && console.error(Dn(nr, n.name, '"requires"', '"array"', '"' + String(n.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(n.requiresIfExists) || console.error(Dn(nr, n.name, '"requiresIfExists"', '"array"', '"' + String(n.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + n.name + '" modifier, valid properties are ' + Io.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      n.requires && n.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(Dn(Ym, String(n.name), a, a));
      });
    });
  });
}
function Hm(e, n) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = n(a);
    if (!r.has(t))
      return r.add(t), !0;
  });
}
function jm(e) {
  var n = e.reduce(function(r, a) {
    var t = r[a.name];
    return r[a.name] = t ? Object.assign({}, t, a, {
      options: Object.assign({}, t.options, a.options),
      data: Object.assign({}, t.data, a.data)
    }) : a, r;
  }, {});
  return Object.keys(n).map(function(r) {
    return n[r];
  });
}
var No = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Gm = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Do = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Bo() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return !n.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function qm(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, a = r === void 0 ? [] : r, t = n.defaultOptions, i = t === void 0 ? Do : t;
  return function(l, s, u) {
    u === void 0 && (u = i);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Do, i),
      modifiersData: {},
      elements: {
        reference: l,
        popper: s
      },
      attributes: {},
      styles: {}
    }, v = [], f = !1, c = {
      state: d,
      setOptions: function(T) {
        var S = typeof T == "function" ? T(d.options) : T;
        b(), d.options = Object.assign({}, i, d.options, S), d.scrollParents = {
          reference: pr(l) ? Ea(l) : l.contextElement ? Ea(l.contextElement) : [],
          popper: Ea(s)
        };
        var h = Rm(jm([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = h.filter(function(k) {
          return k.enabled;
        }), process.env.NODE_ENV !== "production") {
          var g = Hm([].concat(h, d.options.modifiers), function(k) {
            var O = k.name;
            return O;
          });
          if (Wm(g), En(d.options.placement) === St) {
            var M = d.orderedModifiers.find(function(k) {
              var O = k.name;
              return O === "flip";
            });
            M || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var $ = hn(s), B = $.marginTop, C = $.marginRight, D = $.marginBottom, P = $.marginLeft;
          [B, C, D, P].some(function(k) {
            return parseFloat(k);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return p(), c.update();
      },
      forceUpdate: function() {
        if (!f) {
          var T = d.elements, S = T.reference, h = T.popper;
          if (!Bo(S, h)) {
            process.env.NODE_ENV !== "production" && console.error(No);
            return;
          }
          d.rects = {
            reference: zm(S, Li(h), d.options.strategy === "fixed"),
            popper: Fm(h)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(k) {
            return d.modifiersData[k.name] = Object.assign({}, k.data);
          });
          for (var g = 0, M = 0; M < d.orderedModifiers.length; M++) {
            if (process.env.NODE_ENV !== "production" && (g += 1, g > 100)) {
              console.error(Gm);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, M = -1;
              continue;
            }
            var $ = d.orderedModifiers[M], B = $.fn, C = $.options, D = C === void 0 ? {} : C, P = $.name;
            typeof B == "function" && (d = B({
              state: d,
              options: D,
              name: P,
              instance: c
            }) || d);
          }
        }
      },
      update: Um(function() {
        return new Promise(function(y) {
          c.forceUpdate(), y(d);
        });
      }),
      destroy: function() {
        b(), f = !0;
      }
    };
    if (!Bo(l, s))
      return process.env.NODE_ENV !== "production" && console.error(No), c;
    c.setOptions(u).then(function(y) {
      !f && u.onFirstUpdate && u.onFirstUpdate(y);
    });
    function p() {
      d.orderedModifiers.forEach(function(y) {
        var T = y.name, S = y.options, h = S === void 0 ? {} : S, g = y.effect;
        if (typeof g == "function") {
          var M = g({
            state: d,
            name: T,
            instance: c,
            options: h
          }), $ = function() {
          };
          v.push(M || $);
        }
      });
    }
    function b() {
      v.forEach(function(y) {
        return y();
      }), v = [];
    }
    return c;
  };
}
var qa = {
  passive: !0
};
function Km(e) {
  var n = e.state, r = e.instance, a = e.options, t = a.scroll, i = t === void 0 ? !0 : t, o = a.resize, l = o === void 0 ? !0 : o, s = vn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return i && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, qa);
  }), l && s.addEventListener("resize", r.update, qa), function() {
    i && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, qa);
    }), l && s.removeEventListener("resize", r.update, qa);
  };
}
const Xm = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Km,
  data: {}
};
function Zm(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = os({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const Jm = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Zm,
  data: {}
};
var Qm = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function xm(e) {
  var n = e.x, r = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: ga(n * t) / t || 0,
    y: ga(r * t) / t || 0
  };
}
function Ao(e) {
  var n, r = e.popper, a = e.popperRect, t = e.placement, i = e.variation, o = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = o.x, c = f === void 0 ? 0 : f, p = o.y, b = p === void 0 ? 0 : p, y = typeof d == "function" ? d({
    x: c,
    y: b
  }) : {
    x: c,
    y: b
  };
  c = y.x, b = y.y;
  var T = o.hasOwnProperty("x"), S = o.hasOwnProperty("y"), h = Kn, g = Pn, M = window;
  if (u) {
    var $ = Li(r), B = "clientHeight", C = "clientWidth";
    if ($ === vn(r) && ($ = er(r), hn($).position !== "static" && l === "absolute" && (B = "scrollHeight", C = "scrollWidth")), $ = $, t === Pn || (t === Kn || t === mr) && i === Ma) {
      g = Qn;
      var D = v && $ === M && M.visualViewport ? M.visualViewport.height : $[B];
      b -= D - a.height, b *= s ? 1 : -1;
    }
    if (t === Kn || (t === Pn || t === Qn) && i === Ma) {
      h = mr;
      var P = v && $ === M && M.visualViewport ? M.visualViewport.width : $[C];
      c -= P - a.width, c *= s ? 1 : -1;
    }
  }
  var k = Object.assign({
    position: l
  }, u && Qm), O = d === !0 ? xm({
    x: c,
    y: b
  }) : {
    x: c,
    y: b
  };
  if (c = O.x, b = O.y, s) {
    var R;
    return Object.assign({}, k, (R = {}, R[g] = S ? "0" : "", R[h] = T ? "0" : "", R.transform = (M.devicePixelRatio || 1) <= 1 ? "translate(" + c + "px, " + b + "px)" : "translate3d(" + c + "px, " + b + "px, 0)", R));
  }
  return Object.assign({}, k, (n = {}, n[g] = S ? b + "px" : "", n[h] = T ? c + "px" : "", n.transform = "", n));
}
function _m(e) {
  var n = e.state, r = e.options, a = r.gpuAcceleration, t = a === void 0 ? !0 : a, i = r.adaptive, o = i === void 0 ? !0 : i, l = r.roundOffsets, s = l === void 0 ? !0 : l;
  if (process.env.NODE_ENV !== "production") {
    var u = hn(n.elements.popper).transitionProperty || "";
    o && ["transform", "top", "right", "bottom", "left"].some(function(v) {
      return u.indexOf(v) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var d = {
    placement: En(n.placement),
    variation: Ia(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: t,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, Ao(Object.assign({}, d, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: o,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, Ao(Object.assign({}, d, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const ep = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: _m,
  data: {}
};
function np(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var a = n.styles[r] || {}, t = n.attributes[r] || {}, i = n.elements[r];
    !ln(i) || !Tn(i) || (Object.assign(i.style, a), Object.keys(t).forEach(function(o) {
      var l = t[o];
      l === !1 ? i.removeAttribute(o) : i.setAttribute(o, l === !0 ? "" : l);
    }));
  });
}
function rp(e) {
  var n = e.state, r = {
    popper: {
      position: n.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(n.elements.popper.style, r.popper), n.styles = r, n.elements.arrow && Object.assign(n.elements.arrow.style, r.arrow), function() {
    Object.keys(n.elements).forEach(function(a) {
      var t = n.elements[a], i = n.attributes[a] || {}, o = Object.keys(n.styles.hasOwnProperty(a) ? n.styles[a] : r[a]), l = o.reduce(function(s, u) {
        return s[u] = "", s;
      }, {});
      !ln(t) || !Tn(t) || (Object.assign(t.style, l), Object.keys(i).forEach(function(s) {
        t.removeAttribute(s);
      }));
    });
  };
}
const ap = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: np,
  effect: rp,
  requires: ["computeStyles"]
};
var tp = [Xm, Jm, ep, ap], ip = /* @__PURE__ */ qm({
  defaultModifiers: tp
});
function op(e) {
  return ["click", "hover"].includes(e);
}
function lp(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var sp = {
  show: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  trigger: {
    type: String,
    default: "click",
    validator: op
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: lp
  },
  offsetX: {
    type: [Number, String],
    default: 0
  },
  offsetY: {
    type: [Number, String],
    default: 0
  },
  teleport: {
    type: [String, Object],
    default: "body"
  },
  defaultStyle: {
    type: Boolean,
    default: !0
  },
  onOpen: {
    type: Function
  },
  onOpened: {
    type: Function
  },
  onClose: {
    type: Function
  },
  onClosed: {
    type: Function
  },
  "onUpdate:show": {
    type: Function
  }
};
function ot() {
  return ot = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ot.apply(this, arguments);
}
function zo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Fo(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        zo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        zo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: up,
  classes: dp
} = _("menu");
function vp(e, n) {
  return w(), I(
    "div",
    {
      ref: "host",
      class: m(e.n()),
      onClick: n[3] || (n[3] = function() {
        return e.handleClick && e.handleClick(...arguments);
      }),
      onMouseenter: n[4] || (n[4] = function() {
        return e.handleMouseenter && e.handleMouseenter(...arguments);
      }),
      onMouseleave: n[5] || (n[5] = function() {
        return e.handleMouseleave && e.handleMouseleave(...arguments);
      })
    },
    [q(e.$slots, "default"), (w(), me(
      lt,
      {
        to: e.teleport
      },
      [ee(
        je,
        {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        },
        {
          default: ce(() => [Ce(A(
            "div",
            {
              ref: "menu",
              style: K({
                zIndex: e.zIndex
              }),
              class: m(e.classes(e.n("menu"), [e.defaultStyle, e.n("--menu-background-color") + " var-elevation--3"])),
              onClick: n[0] || (n[0] = Vn(() => {
              }, ["stop"])),
              onMouseenter: n[1] || (n[1] = function() {
                return e.handleMenuMouseenter && e.handleMenuMouseenter(...arguments);
              }),
              onMouseleave: n[2] || (n[2] = function() {
                return e.handleMenuMouseleave && e.handleMenuMouseleave(...arguments);
              })
            },
            [q(e.$slots, "menu")],
            38
          ), [[Aa, e.show]])]),
          _: 3
        },
        8,
        ["name", "onAfterEnter", "onAfterLeave"]
      )],
      8,
      ["to"]
    ))],
    34
  );
}
const Xn = ae({
  render: vp,
  name: "VarMenu",
  props: sp,
  setup(e) {
    var n = E(null), r = E(null), a = E(!1), {
      zIndex: t
    } = ft(() => a.value, 1), i = null, o = !1, l = !1, s = !1, u = {
      width: 0,
      height: 0
    }, d = () => {
      var {
        width: $,
        height: B
      } = getComputedStyle(n.value);
      u = {
        width: Me($),
        height: Me(B)
      };
    }, v = () => {
      e.trigger === "hover" && (s = !0, g());
    }, f = /* @__PURE__ */ function() {
      var $ = Fo(function* () {
        e.trigger === "hover" && (s = !1, yield Mn(), !l && M());
      });
      return function() {
        return $.apply(this, arguments);
      };
    }(), c = () => {
      e.trigger === "hover" && (l = !0);
    }, p = /* @__PURE__ */ function() {
      var $ = Fo(function* () {
        e.trigger === "hover" && (l = !1, yield Mn(), !s && M());
      });
      return function() {
        return $.apply(this, arguments);
      };
    }(), b = () => {
      g(), o = !0;
    }, y = () => {
      if (o) {
        o = !1;
        return;
      }
      a.value = !1, N(e["onUpdate:show"], !1);
    }, T = () => {
      d();
      var $ = {
        x: Me(e.offsetX),
        y: Me(e.offsetY)
      };
      switch (e.placement) {
        case "cover-top":
          return {
            placement: "bottom",
            skidding: $.x,
            distance: $.y - u.height
          };
        case "cover-top-start":
          return {
            placement: "bottom-start",
            skidding: $.x,
            distance: $.y - u.height
          };
        case "cover-top-end":
          return {
            placement: "bottom-end",
            skidding: $.x,
            distance: $.y - u.height
          };
        case "cover-bottom":
          return {
            placement: "top",
            skidding: $.x,
            distance: -$.y - u.height
          };
        case "cover-bottom-start":
          return {
            placement: "top-start",
            skidding: $.x,
            distance: -$.y - u.height
          };
        case "cover-bottom-end":
          return {
            placement: "top-end",
            skidding: $.x,
            distance: -$.y - u.height
          };
        case "cover-left":
          return {
            placement: "right",
            skidding: $.y,
            distance: $.x - u.width
          };
        case "cover-right":
          return {
            placement: "left",
            skidding: $.y,
            distance: -$.x - u.width
          };
        case "left":
        case "left-start":
        case "left-end":
          return {
            placement: e.placement,
            skidding: $.y,
            distance: -$.x
          };
        case "top":
        case "top-start":
        case "top-end":
          return {
            placement: e.placement,
            skidding: $.x,
            distance: -$.y
          };
        case "bottom":
        case "bottom-start":
        case "bottom-end":
          return {
            placement: e.placement,
            skidding: $.x,
            distance: $.y
          };
        case "right":
        case "right-start":
        case "right-end":
          return {
            placement: e.placement,
            skidding: $.y,
            distance: $.x
          };
      }
    }, S = () => {
      var {
        placement: $,
        skidding: B,
        distance: C
      } = T();
      return {
        placement: $,
        modifiers: [ot({}, Vm, {
          enabled: a.value
        }), ot({}, Nm, {
          options: {
            offset: [B, C]
          }
        })]
      };
    }, h = () => {
      i.setOptions(S());
    }, g = () => {
      var {
        disabled: $
      } = e;
      $ || (a.value = !0, N(e["onUpdate:show"], !0));
    }, M = () => {
      a.value = !1, N(e["onUpdate:show"], !1);
    };
    return ne(() => e.show, ($) => {
      a.value = $ != null ? $ : !1;
    }, {
      immediate: !0
    }), ne(() => e.offsetX, h), ne(() => e.offsetY, h), ne(() => e.placement, h), ne(() => a.value, ($) => {
      $ ? (h(), N(e.onOpen)) : N(e.onClose);
    }), ne(() => e.trigger, ($) => {
      $ === "click" ? document.addEventListener("click", y) : document.removeEventListener("click", y);
    }), ne(() => e.disabled, M), Fe(() => {
      i = ip(n.value, r.value, S()), e.trigger === "click" && document.addEventListener("click", y);
    }), xn(() => {
      document.removeEventListener("click", y), i.destroy();
    }), {
      menu: r,
      host: n,
      hostSize: u,
      show: a,
      zIndex: t,
      n: up,
      classes: dp,
      handleClick: b,
      handleMenuClose: y,
      handleMouseenter: v,
      handleMouseleave: f,
      handleMenuMouseenter: c,
      handleMenuMouseleave: p,
      resize: h,
      open: g,
      close: M
    };
  }
});
Xn.install = function(e) {
  e.component(Xn.name, Xn);
};
var ss = Symbol("SELECT_BIND_OPTION_KEY"), us = Symbol("SELECT_COUNT_OPTION_KEY");
function fp() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(ss), {
    length: r
  } = gn(us);
  return {
    length: r,
    options: n,
    bindOptions: e
  };
}
function cp() {
  var {
    bindParent: e,
    parentProvider: n
  } = dn(ss), {
    index: r
  } = yn(us);
  if (!e || !n)
    throw Error("<var-option/> must in <var-select/>");
  return {
    index: r,
    select: n,
    bindSelect: e
  };
}
var mp = {
  label: {},
  value: {}
}, {
  n: pp,
  classes: hp
} = _("option");
function gp(e, n) {
  var r = re("var-checkbox"), a = Ge("ripple");
  return Ce((w(), I(
    "div",
    {
      class: m(e.classes(e.n(), "var--box", [e.optionSelected, e.n("--selected-color")])),
      style: K({
        width: e.wrapWidth,
        color: e.optionSelected ? e.focusColor : void 0
      }),
      onClick: n[2] || (n[2] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")])),
        style: K({
          background: e.optionSelected ? e.focusColor : void 0
        })
      },
      null,
      6
    ), e.multiple ? (w(), me(
      r,
      {
        key: 0,
        ref: "checkbox",
        "checked-color": e.focusColor,
        modelValue: e.optionSelected,
        "onUpdate:modelValue": n[0] || (n[0] = (t) => e.optionSelected = t),
        onClick: n[1] || (n[1] = Vn(() => {
        }, ["stop"])),
        onChange: e.handleSelect
      },
      null,
      8,
      ["checked-color", "modelValue", "onChange"]
    )) : Z("v-if", !0), A(
      "div",
      {
        class: m(e.classes(e.n("text"), "var--ellipsis"))
      },
      [q(e.$slots, "default", {}, () => [he(
        J(e.label),
        1
      )])],
      2
    )],
    6
  )), [[a]]);
}
const jr = ae({
  render: gp,
  name: "VarOption",
  directives: {
    Ripple: Le
  },
  components: {
    VarCheckbox: ir
  },
  props: mp,
  setup(e) {
    var n = E(!1), r = W(() => n.value), a = W(() => e.label), t = W(() => e.value), {
      select: i,
      bindSelect: o
    } = cp(), {
      wrapWidth: l,
      multiple: s,
      focusColor: u,
      onSelect: d
    } = i, v = () => {
      n.value = !n.value, d(p);
    }, f = () => d(p), c = (b) => {
      n.value = b;
    }, p = {
      label: a,
      value: t,
      selected: r,
      sync: c
    };
    return ne([() => e.label, () => e.value], () => {
      if (e.label == null && e.value == null)
        throw Error(`Props label and value can't both be undefined
`);
    }, {
      immediate: !0
    }), o(p), {
      n: pp,
      classes: hp,
      optionSelected: n,
      wrapWidth: l,
      multiple: s,
      focusColor: u,
      handleClick: v,
      handleSelect: f
    };
  }
});
jr.install = function(e) {
  e.component(jr.name, jr);
};
var yp = {
  current: {
    type: [Number, String]
  },
  size: {
    type: [Number, String],
    default: 10
  },
  total: {
    type: [Number, String],
    default: 0
  },
  maxPagerCount: {
    type: Number,
    default: 3
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  simple: {
    type: Boolean,
    default: !0
  },
  showSizeChanger: {
    type: Boolean,
    default: !0
  },
  showQuickJumper: {
    type: Boolean,
    default: !1
  },
  sizeOption: {
    type: Array,
    default: () => [10, 20, 50, 100]
  },
  showTotal: {
    type: Function
  },
  onChange: {
    type: Function
  },
  "onUpdate:current": {
    type: Function
  },
  "onUpdate:size": {
    type: Function
  }
}, {
  n: bp,
  classes: wp
} = _("pagination"), Sp = ["item-mode", "onClick"];
function Cp(e, n) {
  var r = re("var-icon"), a = re("var-input"), t = re("var-cell"), i = re("var-menu"), o = Ge("ripple");
  return w(), I(
    "ul",
    {
      class: m(e.n())
    },
    [Ce((w(), I(
      "li",
      {
        class: m(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--hover"), "var-elevation--2"])),
        onClick: n[0] || (n[0] = (l) => e.clickItem("prev"))
      },
      [q(e.$slots, "prev", {}, () => [ee(r, {
        name: "chevron-left"
      })])],
      2
    )), [[o, {
      disabled: e.current <= 1 || e.disabled
    }]]), e.simple ? (w(), I(
      "li",
      {
        key: 0,
        class: m(e.classes(e.n("simple"), [e.disabled, e.n("item--disabled")]))
      },
      [ee(
        a,
        {
          modelValue: e.simpleValue,
          "onUpdate:modelValue": n[1] || (n[1] = (l) => e.simpleValue = l),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: n[2] || (n[2] = (l) => e.setPage("simple", e.simpleValue, l)),
          onKeydown: n[3] || (n[3] = Hi((l) => e.setPage("simple", e.simpleValue, l), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      ), A("span", null, [he(
        " / " + J(e.pageCount) + " ",
        1
      ), A(
        "div",
        {
          class: m(e.n("simple-line"))
        },
        null,
        2
      )])],
      2
    )) : (w(!0), I(
      Oe,
      {
        key: 1
      },
      Ie(e.pageList, (l, s) => Ce((w(), I(
        "li",
        {
          key: e.toNumber(l) + s,
          "item-mode": e.getMode(l, s),
          class: m(e.classes(e.n("item"), "var-elevation--2", [l === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(l, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [l === e.current && e.disabled, e.n("item--disabled--active")])),
          onClick: (u) => e.clickItem(l, s)
        },
        [he(
          J(l),
          1
        )],
        10,
        Sp
      )), [[o, {
        disabled: e.disabled
      }]])),
      128
    )), Ce((w(), I(
      "li",
      {
        class: m(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--hover"), "var-elevation--2"])),
        onClick: n[4] || (n[4] = (l) => e.clickItem("next"))
      },
      [q(e.$slots, "next", {}, () => [ee(r, {
        name: "chevron-right"
      })])],
      2
    )), [[o, {
      disabled: e.current >= e.pageCount || e.disabled
    }]]), e.showSizeChanger ? (w(), I(
      "li",
      {
        key: 2,
        class: m(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")]))
      },
      [ee(
        i,
        {
          show: e.menuVisible,
          "onUpdate:show": n[6] || (n[6] = (l) => e.menuVisible = l),
          "offset-x": -4
        },
        {
          menu: ce(() => [(w(!0), I(
            Oe,
            null,
            Ie(e.sizeOption, (l, s) => Ce((w(), me(
              t,
              {
                class: m(e.classes(e.n("list"), [e.size === l, e.n("list--active")])),
                key: s,
                onClick: (u) => e.clickSize(l)
              },
              {
                default: ce(() => [he(
                  J(l) + J(e.pack.paginationItem) + " / " + J(e.pack.paginationPage),
                  1
                )]),
                _: 2
              },
              1032,
              ["class", "onClick"]
            )), [[o]])),
            128
          ))]),
          default: ce(() => [A(
            "div",
            {
              class: m(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])),
              onClick: n[5] || (n[5] = function() {
                return e.showMenu && e.showMenu(...arguments);
              })
            },
            [A(
              "span",
              null,
              J(e.size) + J(e.pack.paginationItem) + " / " + J(e.pack.paginationPage),
              1
            ), ee(
              r,
              {
                class: m(e.n("size--open-icon")),
                "var-pagination-cover": "",
                name: "menu-down"
              },
              null,
              8,
              ["class"]
            )],
            2
          )]),
          _: 1
        },
        8,
        ["show"]
      )],
      2
    )) : Z("v-if", !0), e.showQuickJumper && !e.simple ? (w(), I(
      "li",
      {
        key: 3,
        class: m(e.classes(e.n("quickly"), [e.disabled, "item--disabled"]))
      },
      [he(
        J(e.pack.paginationJump) + " ",
        1
      ), ee(
        a,
        {
          modelValue: e.inputValue,
          "onUpdate:modelValue": n[7] || (n[7] = (l) => e.inputValue = l),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: n[8] || (n[8] = (l) => e.setPage("quick", e.inputValue, l)),
          onKeydown: n[9] || (n[9] = Hi((l) => e.setPage("quick", e.inputValue, l), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      )],
      2
    )) : Z("v-if", !0), e.totalText ? (w(), I(
      "li",
      {
        key: 4,
        class: m(e.n("total"))
      },
      J(e.totalText),
      3
    )) : Z("v-if", !0)],
    2
  );
}
const Gr = ae({
  render: Cp,
  name: "VarPagination",
  components: {
    VarMenu: Xn,
    VarIcon: $e,
    VarCell: tr,
    VarInput: dr
  },
  directives: {
    Ripple: Le
  },
  props: yp,
  setup(e) {
    var n = E(!1), r = E(""), a = E("1"), t = E(!1), i = E(!1), o = E(L(e.current) || 1), l = E(L(e.size) || 10), s = E([]), u = W(() => Math.ceil(e.maxPagerCount / 2)), d = W(() => Math.ceil(L(e.total) / L(l.value))), v = W(() => {
      var g = l.value * (o.value - 1) + 1, M = Math.min(l.value * o.value, L(e.total));
      return [g, M];
    }), f = W(() => e.showTotal ? e.showTotal(L(e.total), v.value) : ""), c = (g, M) => Qe(g) ? !1 : M === 1 ? t.value : i.value, p = (g, M) => Qe(g) ? "basic" : M === 1 ? "head" : "tail", b = (g, M) => {
      g === o.value || e.disabled || (Qe(g) ? o.value = g : g === "prev" ? o.value > 1 && (o.value -= 1) : g === "next" ? o.value < d.value && (o.value += 1) : g === "..." && (M === 1 ? o.value = Math.max(o.value - e.maxPagerCount, 1) : o.value = Math.min(o.value + e.maxPagerCount, d.value)));
    }, y = () => {
      e.disabled || (n.value = !0);
    }, T = (g) => {
      l.value = g, n.value = !1;
    }, S = (g) => {
      var M = /^[1-9][0-9]*$/;
      return M.test(g);
    }, h = (g, M, $) => {
      if ($.target.blur(), S(M)) {
        var B = L(M);
        B > d.value && (B = d.value, a.value = "" + B), B !== o.value && (o.value = B);
      }
      g === "quick" && (r.value = ""), g === "simple" && !S(M) && (a.value = "" + o.value);
    };
    return ne([() => e.current, () => e.size], (g) => {
      var [M, $] = g;
      o.value = L(M) || 1, l.value = L($ || 10);
    }), ne([o, l], (g, M) => {
      var $, B, [C, D] = g, [P, k] = M;
      if (C > d.value) {
        o.value = d.value;
        return;
      }
      var O = [], {
        maxPagerCount: R,
        total: Y,
        onChange: G
      } = e, V = Math.ceil(L(Y) / L(k)), z = d.value - (R - u.value) - 1;
      if (a.value = "" + C, d.value - 2 > R) {
        if (P === void 0 || d.value !== V)
          for (var X = 2; X < R + 2; X++)
            O.push(X);
        if (C <= R && C < z) {
          O = [];
          for (var se = 1; se < R + 1; se++)
            O.push(se + 1);
          t.value = !0, i.value = !1;
        }
        if (C > R && C < z) {
          O = [];
          for (var F = 1; F < R + 1; F++)
            O.push(C + F - u.value);
          t.value = C === 2 && R === 1, i.value = !1;
        }
        if (C >= z) {
          O = [];
          for (var U = 1; U < R + 1; U++)
            O.push(d.value - (R - U) - 1);
          t.value = !1, i.value = !0;
        }
        O = [1, "...", ...O, "...", d.value];
      } else
        for (var H = 1; H <= d.value; H++)
          O.push(H);
      s.value = O, P !== void 0 && d.value > 0 && (G == null || G(C, D)), ($ = e["onUpdate:current"]) == null || $.call(e, C), (B = e["onUpdate:size"]) == null || B.call(e, D);
    }, {
      immediate: !0
    }), {
      n: bp,
      classes: wp,
      pack: Ue,
      current: o,
      menuVisible: n,
      size: l,
      pageCount: d,
      pageList: s,
      inputValue: r,
      simpleValue: a,
      totalText: f,
      getMode: p,
      isHideEllipsis: c,
      clickItem: b,
      showMenu: y,
      clickSize: T,
      setPage: h,
      toNumber: L
    };
  }
});
Gr.install = function(e) {
  e.component(Gr.name, Gr);
};
function vi() {
  return vi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, vi.apply(this, arguments);
}
var kp = vi({
  columns: {
    type: Array,
    default: () => []
  },
  title: {
    type: String
  },
  textKey: {
    type: String,
    default: "text"
  },
  toolbar: {
    type: Boolean,
    default: !0
  },
  cascade: {
    type: Boolean,
    default: !1
  },
  cascadeInitialIndexes: {
    type: Array,
    default: () => []
  },
  optionHeight: {
    type: [Number, String],
    default: 44
  },
  optionCount: {
    type: [Number, String],
    default: 6
  },
  confirmButtonText: {
    type: String
  },
  cancelButtonText: {
    type: String
  },
  confirmButtonTextColor: {
    type: String
  },
  cancelButtonTextColor: {
    type: String
  },
  dynamic: {
    type: Boolean,
    default: !1
  },
  onChange: {
    type: Function
  },
  onConfirm: {
    type: Function
  },
  onCancel: {
    type: Function
  },
  textFormatter: {
    type: Function,
    default: (e) => e
  }
}, Ze(Fa, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: $p,
  classes: Tp
} = _("picker"), Lo = 300, Op = 15, Ro = 0, Pp = ["onTouchstart", "onTouchmove", "onTouchend"], Ep = ["onTransitionend"];
function Vp(e, n) {
  var r = re("var-button");
  return w(), me(
    st(e.dynamic ? "var-popup" : e.Transition),
    Te(e.dynamic ? {
      onOpen: e.onOpen,
      onOpened: e.onOpened,
      onClose: e.onClose,
      onClosed: e.onClosed,
      onClickOverlay: e.onClickOverlay,
      onRouteChange: e.onRouteChange,
      closeOnClickOverlay: e.closeOnClickOverlay,
      teleport: e.teleport,
      show: e.show,
      "onUpdate:show": e.handlePopupUpdateShow,
      position: "bottom",
      class: e.n("popup")
    } : null, {
      "var-picker-cover": ""
    }),
    {
      default: ce(() => [A(
        "div",
        Te({
          class: e.n()
        }, e.$attrs),
        [A(
          "div",
          {
            class: m(e.n("toolbar"))
          },
          [q(e.$slots, "cancel", {}, () => [ee(
            r,
            {
              class: m(e.n("cancel-button")),
              "var-picker-cover": "",
              text: "",
              "text-color": e.cancelButtonTextColor,
              onClick: e.cancel
            },
            {
              default: ce(() => [he(
                J(e.dt(e.cancelButtonText, e.pack.pickerCancelButtonText)),
                1
              )]),
              _: 1
            },
            8,
            ["class", "text-color", "onClick"]
          )]), q(e.$slots, "title", {}, () => [A(
            "div",
            {
              class: m(e.n("title"))
            },
            J(e.dt(e.title, e.pack.pickerTitle)),
            3
          )]), q(e.$slots, "confirm", {}, () => [ee(
            r,
            {
              class: m(e.n("confirm-button")),
              text: "",
              "var-picker-cover": "",
              "text-color": e.confirmButtonTextColor,
              onClick: e.confirm
            },
            {
              default: ce(() => [he(
                J(e.dt(e.confirmButtonText, e.pack.pickerConfirmButtonText)),
                1
              )]),
              _: 1
            },
            8,
            ["class", "text-color", "onClick"]
          )])],
          2
        ), A(
          "div",
          {
            class: m(e.n("columns")),
            style: K({
              height: e.columnHeight + "px"
            })
          },
          [(w(!0), I(
            Oe,
            null,
            Ie(e.scrollColumns, (a) => (w(), I(
              "div",
              {
                class: m(e.n("column")),
                key: a.id,
                onTouchstart: (t) => e.handleTouchstart(t, a),
                onTouchmove: Vn((t) => e.handleTouchmove(t, a), ["prevent"]),
                onTouchend: (t) => e.handleTouchend(t, a)
              },
              [A(
                "div",
                {
                  class: m(e.n("scroller")),
                  ref_for: !0,
                  ref: (t) => e.getScrollEl(t, a),
                  style: K({
                    transform: "translateY(" + a.translate + "px)",
                    transitionDuration: a.duration + "ms",
                    transitionProperty: a.duration ? "transform" : "none"
                  }),
                  onTransitionend: (t) => e.handleTransitionend(a)
                },
                [(w(!0), I(
                  Oe,
                  null,
                  Ie(a.column.texts, (t) => (w(), I(
                    "div",
                    {
                      class: m(e.n("option")),
                      style: K({
                        height: e.optionHeight + "px"
                      }),
                      key: t
                    },
                    [A(
                      "div",
                      {
                        class: m(e.n("text"))
                      },
                      J(e.textFormatter(t, a.columnIndex)),
                      3
                    )],
                    6
                  ))),
                  128
                ))],
                46,
                Ep
              )],
              42,
              Pp
            ))),
            128
          )), A(
            "div",
            {
              class: m(e.n("picked")),
              style: K({
                top: e.center + "px",
                height: e.optionHeight + "px"
              })
            },
            null,
            6
          ), A(
            "div",
            {
              class: m(e.n("mask")),
              style: K({
                backgroundSize: "100% " + (e.columnHeight - e.optionHeight) / 2 + "px"
              })
            },
            null,
            6
          )],
          6
        )],
        16
      )]),
      _: 3
    },
    16
  );
}
const vr = ae({
  render: Vp,
  name: "VarPicker",
  components: {
    VarButton: xe,
    VarPopup: mn
  },
  inheritAttrs: !1,
  props: kp,
  setup(e) {
    var n = E([]), r = W(() => Me(e.optionHeight)), a = W(() => Me(e.optionCount)), t = W(() => a.value * r.value / 2 - r.value / 2), i = W(() => a.value * r.value), o = [], l = (k, O) => {
      O.scrollEl = k;
    }, s = (k) => {
      N(e["onUpdate:show"], k);
    }, u = (k) => {
      var O = r.value + t.value, R = t.value - k.column.texts.length * r.value;
      k.translate >= O && (k.translate = O), k.translate <= R && (k.translate = R);
    }, d = (k, O) => {
      var {
        length: R
      } = k.column.texts;
      return O = O >= R ? R - 1 : O, O = O <= 0 ? 0 : O, O;
    }, v = (k) => {
      var O = Math.round((t.value - k.translate) / r.value);
      return d(k, O);
    }, f = () => {
      var k = n.value.map((R) => R.column.texts[R.index]), O = n.value.map((R) => R.index);
      return {
        texts: k,
        indexes: O
      };
    }, c = function(k, O, R, Y) {
      Y === void 0 && (Y = !1);
      var G = t.value - d(k, O) * r.value;
      G === k.translate && (k.scrolling = !1, !Y && B(k)), k.translate = G, k.duration = R;
    }, p = (k, O, R) => {
      k.translate += Math.abs(O / R) / 3e-3 * (O < 0 ? -1 : 1);
    }, b = (k, O) => {
      O.touching = !0, O.scrolling = !1, O.duration = 0, O.translate = Pt(O.scrollEl);
    }, y = (k, O) => {
      if (!!O.touching) {
        var {
          clientY: R
        } = k.touches[0], Y = O.prevY !== void 0 ? R - O.prevY : 0;
        O.prevY = R, O.translate += Y, u(O);
        var G = performance.now();
        G - O.momentumTime > Lo && (O.momentumTime = G, O.momentumPrevY = O.translate);
      }
    }, T = (k, O) => {
      O.touching = !1, O.scrolling = !0, O.prevY = void 0;
      var R = O.translate - O.momentumPrevY, Y = performance.now() - O.momentumTime, G = Math.abs(R) >= Op && Y <= Lo;
      G && p(O, R, Y), O.index = v(O), c(O, O.index, G ? 1e3 : 200);
    }, S = (k) => {
      k.scrolling = !1, B(k);
    }, h = (k) => k.map((O, R) => {
      var Y, G = Se(O) ? {
        texts: O
      } : O, V = {
        id: Ro++,
        prevY: void 0,
        momentumPrevY: void 0,
        touching: !1,
        translate: t.value,
        index: (Y = G.initialIndex) != null ? Y : 0,
        columnIndex: R,
        duration: 0,
        momentumTime: 0,
        column: G,
        scrollEl: null,
        scrolling: !1
      };
      return c(V, V.index, 0, !0), V;
    }), g = (k) => {
      var O = [];
      return M(O, k, 0, !0), O;
    }, M = function(k, O, R, Y) {
      if (Y === void 0 && (Y = !1), Se(O) && O.length) {
        var G, V = Y && (G = e.cascadeInitialIndexes[k.length]) != null ? G : 0, z = {
          id: Ro++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: V,
          columnIndex: R,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: O.map((X) => X[e.textKey])
          },
          columns: O,
          scrollEl: null,
          scrolling: !1
        };
        k.push(z), c(z, z.index, 0, !0), M(k, z.columns[z.index].children, R + 1, Y);
      }
    }, $ = (k) => {
      n.value.splice(n.value.indexOf(k) + 1), M(n.value, k.columns[k.index].children, k.columnIndex + 1);
    }, B = (k) => {
      var {
        cascade: O,
        onChange: R
      } = e;
      O && $(k);
      var Y = n.value.some((X) => X.scrolling);
      if (!Y) {
        var {
          texts: G,
          indexes: V
        } = f(), z = V.every((X, se) => X === o[se]);
        z || (o = [...V], N(R, G, V));
      }
    }, C = () => {
      if (e.cascade) {
        var k = n.value.find((O) => O.scrolling);
        k && (k.translate = Pt(k.scrollEl), k.index = v(k), c(k, k.index, 0, !0), k.scrolling = !1, $(k));
      } else
        n.value.forEach((O) => {
          O.translate = Pt(O.scrollEl), O.index = v(O), c(O, O.index, 0);
        });
    }, D = () => {
      C();
      var {
        texts: k,
        indexes: O
      } = f();
      o = [...O], N(e.onConfirm, k, O);
    }, P = () => {
      C();
      var {
        texts: k,
        indexes: O
      } = f();
      o = [...O], N(e.onCancel, k, O);
    };
    return ne(() => e.columns, (k) => {
      n.value = e.cascade ? g(ji(k)) : h(ji(k));
      var {
        indexes: O
      } = f();
      o = [...O];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: $p,
      classes: Tp,
      pack: Ue,
      optionHeight: r,
      optionCount: a,
      scrollColumns: n,
      columnHeight: i,
      center: t,
      Transition: je,
      getScrollEl: l,
      handlePopupUpdateShow: s,
      handleTouchstart: b,
      handleTouchmove: y,
      handleTouchend: T,
      handleTransitionend: S,
      confirm: D,
      cancel: P,
      dt: ct
    };
  }
});
var Xe;
function hr(e) {
  return new Promise((n) => {
    hr.close();
    var r = Se(e) ? {
      columns: e
    } : e, a = Ne(r);
    a.dynamic = !0, a.teleport = "body", Xe = a;
    var {
      unmountInstance: t
    } = za(vr, a, {
      onConfirm: (i, o) => {
        a.onConfirm == null || a.onConfirm(i, o), n({
          state: "confirm",
          texts: i,
          indexes: o
        }), a.show = !1, Xe === a && (Xe = null);
      },
      onCancel: (i, o) => {
        a.onCancel == null || a.onCancel(i, o), n({
          state: "cancel",
          texts: i,
          indexes: o
        }), a.show = !1, Xe === a && (Xe = null);
      },
      onClose: () => {
        a.onClose == null || a.onClose(), n({
          state: "close"
        }), Xe === a && (Xe = null);
      },
      onClosed: () => {
        a.onClosed == null || a.onClosed(), t(), Xe === a && (Xe = null);
      },
      onRouteChange: () => {
        t(), Xe === a && (Xe = null);
      },
      "onUpdate:show": (i) => {
        a.show = i;
      }
    });
    a.show = !0;
  });
}
vr.install = function(e) {
  e.component(vr.name, vr);
};
hr.Component = vr;
hr.install = function(e) {
  e.component(vr.name, vr);
};
hr.close = () => {
  if (Xe != null) {
    var e = Xe;
    Xe = null, Pe().then(() => {
      e.show = !1;
    });
  }
};
function Mp(e) {
  return ["linear", "circle"].includes(e);
}
var Ip = {
  mode: {
    type: String,
    default: "linear",
    validator: Mp
  },
  lineWidth: {
    type: [Number, String],
    default: 4
  },
  color: {
    type: String
  },
  trackColor: {
    type: String
  },
  ripple: {
    type: Boolean,
    default: !1
  },
  value: {
    type: [Number, String],
    default: 0
  },
  label: {
    type: Boolean,
    default: !1
  },
  size: {
    type: [Number, String],
    default: 40
  },
  rotate: {
    type: Number,
    default: 0
  },
  track: {
    type: Boolean,
    default: !0
  }
}, {
  n: Np,
  classes: Dp
} = _("progress"), Bp = ["viewBox"], Ap = ["cx", "cy", "r", "stroke-width"], zp = ["cx", "cy", "r", "stroke-width"];
function Fp(e, n) {
  return w(), I(
    "div",
    {
      class: m(e.n())
    },
    [e.mode === "linear" ? (w(), I(
      "div",
      {
        key: 0,
        class: m(e.n("linear"))
      },
      [A(
        "div",
        Te({
          class: e.n("linear-block"),
          style: {
            height: e.toSizeUnit(e.lineWidth)
          }
        }, e.$attrs),
        [e.track ? (w(), I(
          "div",
          {
            key: 0,
            class: m(e.n("linear-background")),
            style: K({
              background: e.trackColor
            })
          },
          null,
          6
        )) : Z("v-if", !0), A(
          "div",
          {
            class: m(e.classes(e.n("linear-certain"), [e.ripple, e.n("linear-ripple")])),
            style: K({
              background: e.color,
              width: e.linearProps.width
            })
          },
          null,
          6
        )],
        16
      ), e.label ? (w(), I(
        "div",
        Te({
          key: 0,
          class: e.n("linear-label")
        }, e.$attrs),
        [q(e.$slots, "default", {}, () => [he(
          J(e.linearProps.roundValue),
          1
        )])],
        16
      )) : Z("v-if", !0)],
      2
    )) : Z("v-if", !0), e.mode === "circle" ? (w(), I(
      "div",
      {
        key: 1,
        class: m(e.n("circle")),
        style: K({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(w(), I(
        "svg",
        {
          class: m(e.n("circle-svg")),
          style: K({
            transform: "rotate(" + (e.rotate - 90) + "deg)"
          }),
          viewBox: e.circleProps.viewBox
        },
        [e.track ? (w(), I(
          "circle",
          {
            key: 0,
            class: m(e.n("circle-background")),
            cx: e.multiplySizeUnit(e.size, 0.5),
            cy: e.multiplySizeUnit(e.size, 0.5),
            r: e.circleProps.radius,
            fill: "transparent",
            "stroke-width": e.toSizeUnit(e.lineWidth),
            style: K({
              strokeDasharray: e.circleProps.perimeter,
              stroke: e.trackColor
            })
          },
          null,
          14,
          Ap
        )) : Z("v-if", !0), A(
          "circle",
          {
            class: m(e.n("circle-certain")),
            cx: e.multiplySizeUnit(e.size, 0.5),
            cy: e.multiplySizeUnit(e.size, 0.5),
            r: e.circleProps.radius,
            fill: "transparent",
            "stroke-width": e.toSizeUnit(e.lineWidth),
            style: K({
              strokeDasharray: e.circleProps.strokeDasharray,
              stroke: e.color
            })
          },
          null,
          14,
          zp
        )],
        14,
        Bp
      )), e.label ? (w(), I(
        "div",
        Te({
          key: 0,
          class: e.n("circle-label")
        }, e.$attrs),
        [q(e.$slots, "default", {}, () => [he(
          J(e.circleProps.roundValue),
          1
        )])],
        16
      )) : Z("v-if", !0)],
      6
    )) : Z("v-if", !0)],
    2
  );
}
const qr = ae({
  render: Fp,
  name: "VarProgress",
  inheritAttrs: !1,
  props: Ip,
  setup(e) {
    var n = W(() => {
      var a = L(e.value), t = a > 100 ? 100 : a, i = a > 100 ? 100 : Math.round(a);
      return {
        width: t + "%",
        roundValue: i + "%"
      };
    }), r = W(() => {
      var {
        size: a,
        lineWidth: t,
        value: i
      } = e, o = "0 0 " + Me(a) + " " + Me(a), l = L(i) > 100 ? 100 : Math.round(L(i)), s = (Me(a) - Me(t)) / 2, u = 2 * Math.PI * s, d = l / 100 * u + ", " + u;
      return {
        viewBox: o,
        radius: s,
        strokeDasharray: d,
        perimeter: u,
        roundValue: l + "%"
      };
    });
    return {
      n: Np,
      classes: Dp,
      toSizeUnit: Ve,
      multiplySizeUnit: He,
      linearProps: n,
      circleProps: r
    };
  }
});
qr.install = function(e) {
  e.component(qr.name, qr);
};
var Lp = {
  modelValue: {
    type: Boolean
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  animationDuration: {
    type: [Number, String],
    default: 300
  },
  successDuration: {
    type: [Number, String],
    default: 2e3
  },
  bgColor: {
    type: String
  },
  successBgColor: {
    type: String
  },
  color: {
    type: String
  },
  successColor: {
    type: String
  },
  onRefresh: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
};
function Uo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Rp(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        Uo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        Uo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Up,
  classes: Yp
} = _("pull-refresh"), Ca = 100, ka = -50, Yo = 150;
function Wp(e, n) {
  var r = re("var-icon");
  return w(), I(
    "div",
    {
      ref: "freshNode",
      class: m(e.n()),
      onTouchstart: n[0] || (n[0] = function() {
        return e.touchStart && e.touchStart(...arguments);
      }),
      onTouchmove: n[1] || (n[1] = function() {
        return e.touchMove && e.touchMove(...arguments);
      }),
      onTouchend: n[2] || (n[2] = function() {
        return e.touchEnd && e.touchEnd(...arguments);
      }),
      onTouchcancel: n[3] || (n[3] = function() {
        return e.touchEnd && e.touchEnd(...arguments);
      })
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n("control"), "var-elevation--2", [e.isSuccess, e.n("control-success")])),
        style: K(e.controlStyle)
      },
      [ee(
        r,
        {
          name: e.iconName,
          transition: e.ICON_TRANSITION,
          class: m(e.classes(e.n("icon"), [e.refreshStatus === "loading" && e.iconHasChanged, e.n("animation")])),
          "var-pull-refresh-cover": ""
        },
        null,
        8,
        ["name", "transition", "class"]
      )],
      6
    ), q(e.$slots, "default")],
    34
  );
}
const Kr = ae({
  render: Wp,
  name: "VarPullRefresh",
  components: {
    VarIcon: $e
  },
  props: Lp,
  setup(e) {
    var n, r, a = E(null), t = E(0), i = E(ka), o = E("arrow-down"), l = E("default"), s = E(!1), u = E(!0), d = W(() => l.value !== "loading" && l.value !== "success" && !e.disabled), v = W(() => ({
      transform: "translate3d(0px, " + i.value + "px, 0px) translate(-50%, 0)",
      transition: s.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: f.value ? e.successBgColor : e.bgColor,
      color: f.value ? e.successColor : e.color
    })), f = W(() => l.value === "success"), c = () => new Promise((S) => {
      window.setTimeout(() => {
        u.value = !0, S();
      }, Yo);
    }), p = (S) => {
      !d.value || (l.value = "pulling", t.value = S.touches[0].clientY);
    }, b = (S) => {
      var h = dt(n);
      if (!(h > 0 || !d.value)) {
        h === 0 && i.value > ka && S.cancelable && S.preventDefault();
        var g = (S.touches[0].clientY - t.value) / 2 + ka;
        i.value = g >= Ca ? Ca : g, i.value >= Ca * 0.2 ? (u.value = !1, o.value = "refresh", r = c()) : o.value = "arrow-down";
      }
    }, y = /* @__PURE__ */ function() {
      var S = Rp(function* () {
        if (!!d.value)
          if (s.value = !0, i.value >= Ca * 0.2) {
            var h;
            yield r, l.value = "loading", i.value = Ca * 0.3, (h = e["onUpdate:modelValue"]) == null || h.call(e, !0), e.onRefresh == null || e.onRefresh();
          } else
            l.value = "loosing", o.value = "arrow-down", i.value = ka, setTimeout(() => {
              s.value = !1;
            }, L(e.animationDuration));
      });
      return function() {
        return S.apply(this, arguments);
      };
    }(), T = () => {
      setTimeout(() => {
        l.value = "default", o.value = "arrow-down", s.value = !1;
      }, L(e.animationDuration));
    };
    return ne(() => e.modelValue, (S) => {
      S === !1 && (s.value = !0, l.value = "success", o.value = "checkbox-marked-circle", setTimeout(() => {
        i.value = ka, T();
      }, L(e.successDuration)));
    }), Fe(() => {
      n = wa(a.value);
    }), {
      n: Up,
      classes: Yp,
      iconHasChanged: u,
      ICON_TRANSITION: Yo,
      refreshStatus: l,
      freshNode: a,
      touchStart: p,
      touchMove: b,
      touchEnd: y,
      iconName: o,
      controlStyle: v,
      isSuccess: f
    };
  }
});
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var Hp = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  checkedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !0
  },
  uncheckedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  checkedColor: {
    type: String
  },
  uncheckedColor: {
    type: String
  },
  iconSize: {
    type: [String, Number]
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: {
    type: Array
  },
  onClick: {
    type: Function
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, ds = Symbol("RADIO_GROUP_BIND_RADIO_KEY"), vs = Symbol("RADIO_GROUP_COUNT_RADIO_KEY");
function jp() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(ds), {
    length: r
  } = gn(vs);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function Gp() {
  var {
    bindParent: e,
    parentProvider: n
  } = dn(ds), {
    index: r
  } = yn(vs);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var {
  n: qp,
  classes: Kp
} = _("radio");
function Xp(e, n) {
  var r = re("var-icon"), a = re("var-form-details"), t = Ge("ripple");
  return w(), I(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [A(
      "div",
      Te({
        class: e.n(),
        onClick: n[0] || (n[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      }, e.$attrs),
      [Ce((w(), I(
        "div",
        {
          class: m(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: K({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? q(e.$slots, "checked-icon", {
          key: 0
        }, () => [ee(
          r,
          {
            class: m(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            "var-radio-cover": "",
            name: "radio-marked",
            size: e.iconSize
          },
          null,
          8,
          ["class", "size"]
        )]) : q(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [ee(
          r,
          {
            class: m(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            "var-radio-cover": "",
            name: "radio-blank",
            size: e.iconSize
          },
          null,
          8,
          ["class", "size"]
        )])],
        6
      )), [[t, {
        disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
      }]]), A(
        "div",
        {
          class: m(e.classes(e.n("text"), [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")]))
        },
        [q(e.$slots, "default")],
        2
      )],
      16
    ), ee(
      a,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
  );
}
const Xr = ae({
  render: Xp,
  name: "VarRadio",
  directives: {
    Ripple: Le
  },
  components: {
    VarIcon: $e,
    VarFormDetails: We
  },
  inheritAttrs: !1,
  props: Hp,
  setup(e) {
    var n = E(!1), r = W(() => n.value === e.checkedValue), a = E(!1), {
      radioGroup: t,
      bindRadioGroup: i
    } = Gp(), {
      form: o,
      bindForm: l
    } = wn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      resetValidation: v
    } = bn(), f = (g) => {
      Pe(() => {
        var {
          validateTrigger: M,
          rules: $,
          modelValue: B
        } = e;
        u(M, g, $, B);
      });
    }, c = (g) => {
      var {
        checkedValue: M,
        onChange: $
      } = e;
      t && n.value === M || (n.value = g, N(e["onUpdate:modelValue"], n.value), N($, n.value), t == null || t.onToggle(M), f("onChange"));
    }, p = (g) => {
      var {
        disabled: M,
        readonly: $,
        uncheckedValue: B,
        checkedValue: C,
        onClick: D
      } = e;
      o != null && o.disabled.value || M || (N(D, g), !(o != null && o.readonly.value || $) && (a.value = !0, c(r.value ? B : C)));
    }, b = (g) => {
      var {
        checkedValue: M,
        uncheckedValue: $
      } = e;
      n.value = g === M ? M : $;
    }, y = () => {
      N(e["onUpdate:modelValue"], e.uncheckedValue), v();
    }, T = () => d(e.rules, e.modelValue), S = (g) => {
      var {
        uncheckedValue: M,
        checkedValue: $
      } = e, B = ![M, $].includes(g);
      B && (g = r.value ? M : $), c(g);
    };
    ne(() => e.modelValue, (g) => {
      n.value = g;
    }, {
      immediate: !0
    });
    var h = {
      sync: b,
      validate: T,
      resetValidation: v,
      reset: y
    };
    return N(i, h), N(l, h), {
      withAnimation: a,
      checked: r,
      errorMessage: s,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      n: qp,
      classes: Kp,
      handleClick: p,
      toggle: S,
      reset: y,
      validate: T,
      resetValidation: v
    };
  }
});
Xr.install = function(e) {
  e.component(Xr.name, Xr);
};
function Zp(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Jp = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: Zp
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: {
    type: Array
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, {
  n: Qp,
  classes: xp
} = _("radio-group");
function _p(e, n) {
  var r = re("var-form-details");
  return w(), I(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [q(e.$slots, "default")],
      2
    ), ee(
      r,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
  );
}
const Zr = ae({
  render: _p,
  name: "VarRadioGroup",
  components: {
    VarFormDetails: We
  },
  props: Jp,
  setup(e) {
    var {
      length: n,
      radios: r,
      bindRadios: a
    } = jp(), {
      bindForm: t
    } = wn(), {
      errorMessage: i,
      validateWithTrigger: o,
      validate: l,
      resetValidation: s
    } = bn(), u = W(() => i.value), d = (y) => {
      Pe(() => {
        var {
          validateTrigger: T,
          rules: S,
          modelValue: h
        } = e;
        o(T, y, S, h);
      });
    }, v = () => r.forEach((y) => {
      var {
        sync: T
      } = y;
      return T(e.modelValue);
    }), f = (y) => {
      N(e["onUpdate:modelValue"], y), N(e.onChange, y), d("onChange");
    }, c = () => l(e.rules, e.modelValue), p = () => {
      N(e["onUpdate:modelValue"], void 0), s();
    };
    ne(() => e.modelValue, v), ne(() => n.value, v);
    var b = {
      onToggle: f,
      validate: c,
      reset: p,
      resetValidation: s,
      errorMessage: u
    };
    return N(t, b), a(b), {
      errorMessage: i,
      n: Qp,
      classes: xp,
      reset: p,
      validate: c,
      resetValidation: s
    };
  }
});
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
var eh = {
  modelValue: {
    type: [String, Number],
    default: 0
  },
  count: {
    type: [String, Number],
    default: 5
  },
  color: {
    type: String
  },
  icon: {
    type: String,
    default: "star"
  },
  emptyColor: {
    type: String
  },
  emptyIcon: {
    type: String,
    default: "star-outline"
  },
  size: {
    type: [String, Number]
  },
  gap: {
    type: [String, Number]
  },
  namespace: {
    type: String
  },
  half: {
    type: Boolean,
    default: !1
  },
  halfIcon: {
    type: String,
    default: "star-half-full"
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  disabledColor: {
    type: String
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  rules: {
    type: Array
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, {
  n: $a
} = _("rate"), nh = ["onClick"];
function rh(e, n) {
  var r = re("var-icon"), a = re("var-form-details"), t = Ge("ripple");
  return w(), I(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [A(
      "div",
      {
        class: m(e.n())
      },
      [(w(!0), I(
        Oe,
        null,
        Ie(e.toNumber(e.count), (i) => Ce((w(), I(
          "div",
          {
            key: i,
            style: K(e.getStyle(i)),
            class: m(e.getClass(i)),
            onClick: (o) => e.handleClick(i, o)
          },
          [ee(
            r,
            {
              class: m(e.n("content-icon")),
              "var-rate-cover": "",
              transition: 0,
              namespace: e.namespace,
              name: e.getCurrentState(i).name,
              style: K({
                fontSize: e.toSizeUnit(e.size)
              })
            },
            null,
            8,
            ["class", "namespace", "name", "style"]
          )],
          14,
          nh
        )), [[t, {
          disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
        }]])),
        128
      ))],
      2
    ), ee(
      a,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
  );
}
const Jr = ae({
  render: rh,
  name: "VarRate",
  components: {
    VarIcon: $e,
    VarFormDetails: We
  },
  directives: {
    Ripple: Le
  },
  props: eh,
  setup(e) {
    var {
      form: n,
      bindForm: r
    } = wn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: i,
      resetValidation: o
    } = bn(), l = (y) => {
      var {
        count: T,
        gap: S
      } = e;
      return {
        color: u(y).color,
        marginRight: y !== L(T) ? Ve(S) : 0
      };
    }, s = (y) => {
      var {
        name: T,
        color: S
      } = u(y);
      return {
        [$a("content")]: !0,
        [$a("--disabled")]: (n == null ? void 0 : n.disabled.value) || e.disabled,
        [$a("--error")]: a.value,
        [$a("--primary")]: T !== e.emptyIcon && !S
      };
    }, u = (y) => {
      var {
        modelValue: T,
        disabled: S,
        disabledColor: h,
        color: g,
        half: M,
        emptyColor: $,
        icon: B,
        halfIcon: C,
        emptyIcon: D
      } = e, P = g;
      return (S || n != null && n.disabled.value) && (P = h), y <= L(T) ? {
        color: P,
        name: B
      } : M && y <= L(T) + 0.5 ? {
        color: P,
        name: C
      } : {
        color: S || n != null && n.disabled.value ? h : $,
        name: D
      };
    }, d = (y, T) => {
      if (e.half) {
        var {
          offsetWidth: S
        } = T.target;
        T.offsetX <= Math.floor(S / 2) && (y -= 0.5);
      }
      N(e["onUpdate:modelValue"], y);
    }, v = () => i(e.rules, L(e.modelValue)), f = () => Pe(() => t(["onChange"], "onChange", e.rules, e.modelValue)), c = (y, T) => {
      var {
        readonly: S,
        disabled: h,
        onChange: g
      } = e;
      S || h || n != null && n.disabled.value || n != null && n.readonly.value || (d(y, T), N(g, y), f());
    }, p = () => {
      N(e["onUpdate:modelValue"], 0), o();
    }, b = {
      reset: p,
      validate: v,
      resetValidation: o
    };
    return N(r, b), {
      errorMessage: a,
      formDisabled: n == null ? void 0 : n.disabled,
      formReadonly: n == null ? void 0 : n.readonly,
      getStyle: l,
      getClass: s,
      getCurrentState: u,
      handleClick: c,
      reset: p,
      validate: v,
      resetValidation: o,
      toSizeUnit: Ve,
      toNumber: L,
      n: $a
    };
  }
});
Jr.install = function(e) {
  e.component(Jr.name, Jr);
};
function ah(e) {
  return ["flex-start", "flex-end", "center", "space-between", "space-around"].includes(e);
}
function th(e) {
  return ["flex-start", "center", "flex-end"].includes(e);
}
var ih = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: ah
  },
  align: {
    type: String,
    default: "flex-start",
    validator: th
  },
  onClick: {
    type: Function
  }
}, {
  n: oh,
  classes: lh
} = _("row");
function sh(e, n) {
  return w(), I(
    "div",
    {
      class: m(e.classes(e.n(), "var--box")),
      style: K({
        justifyContent: e.justify,
        alignItems: e.align,
        margin: e.average ? "0 -" + e.average + "px" : void 0
      }),
      onClick: n[0] || (n[0] = function() {
        return e.onClick && e.onClick(...arguments);
      })
    },
    [q(e.$slots, "default")],
    6
  );
}
const Qr = ae({
  render: sh,
  name: "VarRow",
  props: ih,
  setup(e) {
    var {
      cols: n,
      bindCols: r,
      length: a
    } = Ld(), t = W(() => {
      var l = Me(e.gutter);
      return l / 2;
    }), i = () => {
      n.forEach((l) => {
        l.setPadding({
          left: t.value,
          right: t.value
        });
      });
    }, o = {
      computePadding: i
    };
    return ne(() => a.value, i), ne(() => e.gutter, i), r(o), {
      n: oh,
      classes: lh,
      average: t
    };
  }
});
Qr.install = function(e) {
  e.component(Qr.name, Qr);
};
function uh(e) {
  return ["left", "right", "center"].includes(e);
}
var dh = {
  modelValue: {
    default: void 0
  },
  placeholder: {
    type: String
  },
  multiple: {
    type: Boolean,
    default: !1
  },
  offsetY: {
    type: [String, Number],
    default: 0
  },
  chip: {
    type: Boolean,
    default: !1
  },
  line: {
    type: Boolean,
    default: !0
  },
  hint: {
    type: Boolean,
    default: !0
  },
  textColor: {
    type: String
  },
  focusColor: {
    type: String
  },
  blurColor: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  clearable: {
    type: Boolean,
    default: !1
  },
  separator: {
    type: String,
    default: ","
  },
  textAlign: {
    type: String,
    default: "left",
    validator: uh
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange", "onClear", "onClose"]
  },
  rules: {
    type: Array
  },
  onFocus: {
    type: Function
  },
  onBlur: {
    type: Function
  },
  onClick: {
    type: Function
  },
  onClear: {
    type: Function
  },
  onClose: {
    type: Function
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, {
  n: Nt,
  classes: vh
} = _("select"), fh = {
  key: 0
}, ch = {
  key: 1
};
function mh(e, n) {
  var r = re("var-chip"), a = re("var-icon"), t = re("var-menu"), i = re("var-form-details");
  return w(), I(
    "div",
    {
      class: m(e.classes(e.n(), "var--box", [e.formDisabled || e.disabled, e.n("--disabled")])),
      onClick: n[3] || (n[3] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: K({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [A(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [q(e.$slots, "prepend-icon")],
        2
      ), A(
        "div",
        {
          class: m(e.classes(e.n("wrap"), [!e.hint, e.n("--non-hint")])),
          ref: "wrapEl",
          onClick: n[2] || (n[2] = function() {
            return e.handleFocus && e.handleFocus(...arguments);
          })
        },
        [ee(
          t,
          {
            "var-select-cover": "",
            class: m(e.classes(e.n("menu"))),
            "offset-y": e.offsetY,
            disabled: e.readonly || e.disabled,
            "default-style": !1,
            show: e.isFocus,
            "onUpdate:show": n[1] || (n[1] = (o) => e.isFocus = o),
            onClose: e.handleBlur
          },
          {
            menu: ce(() => [A(
              "div",
              {
                ref: "menuEl",
                class: m(e.classes(e.n("scroller"), "var-elevation--3"))
              },
              [q(e.$slots, "default")],
              2
            )]),
            default: ce(() => [A(
              "div",
              {
                class: m(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
                style: K({
                  textAlign: e.textAlign,
                  color: e.textColor
                })
              },
              [e.multiple ? (w(), I("div", fh, [e.chip ? (w(), I(
                "div",
                {
                  key: 0,
                  class: m(e.n("chips"))
                },
                [(w(!0), I(
                  Oe,
                  null,
                  Ie(e.labels, (o) => (w(), me(
                    r,
                    {
                      class: m(e.n("chip")),
                      "var-select-cover": "",
                      closable: "",
                      size: "small",
                      type: e.errorMessage ? "danger" : void 0,
                      key: o,
                      onClick: n[0] || (n[0] = Vn(() => {
                      }, ["stop"])),
                      onClose: () => e.handleClose(o)
                    },
                    {
                      default: ce(() => [he(
                        J(o),
                        1
                      )]),
                      _: 2
                    },
                    1032,
                    ["class", "type", "onClose"]
                  ))),
                  128
                ))],
                2
              )) : (w(), I(
                "div",
                {
                  key: 1,
                  class: m(e.n("values"))
                },
                J(e.labels.join(e.separator)),
                3
              ))])) : (w(), I(
                "span",
                ch,
                J(e.label),
                1
              )), ee(
                a,
                {
                  class: m(e.classes(e.n("arrow"), [e.isFocus, e.n("--arrow-rotate")])),
                  "var-select-cover": "",
                  name: "menu-down",
                  transition: 300
                },
                null,
                8,
                ["class"]
              )],
              6
            ), A(
              "label",
              {
                class: m(e.classes(e.n("placeholder"), "var--ellipsis", [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")], e.computePlaceholderState(), [!e.hint, e.n("--placeholder-non-hint")])),
                style: K({
                  color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
                })
              },
              J(e.placeholder),
              7
            )]),
            _: 3
          },
          8,
          ["class", "offset-y", "disabled", "show", "onClose"]
        )],
        2
      ), A(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [q(e.$slots, "append-icon", {}, () => [e.clearable ? (w(), me(
          a,
          {
            key: 0,
            class: m(e.n("clear-icon")),
            name: "close-circle",
            size: "14px",
            onClick: e.handleClear
          },
          null,
          8,
          ["class", "onClick"]
        )) : Z("v-if", !0)])],
        2
      )],
      6
    ), e.line ? (w(), I(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
        style: K({
          background: e.errorMessage ? void 0 : e.blurColor
        })
      },
      [A(
        "div",
        {
          class: m(e.classes(e.n("dot"), [e.isFocus, e.n("--spread")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
          style: K({
            background: e.errorMessage ? void 0 : e.focusColor
          })
        },
        null,
        6
      )],
      6
    )) : Z("v-if", !0), ee(
      i,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
  );
}
const xr = ae({
  render: mh,
  name: "VarSelect",
  components: {
    VarIcon: $e,
    VarMenu: Xn,
    VarChip: or,
    VarFormDetails: We
  },
  props: dh,
  setup(e) {
    var n = E(null), r = E(!1), a = W(() => e.multiple), t = W(() => e.focusColor), i = E(""), o = E([]), l = E("0px"), s = E(0), {
      bindForm: u,
      form: d
    } = wn(), {
      length: v,
      options: f,
      bindOptions: c
    } = fp(), {
      errorMessage: p,
      validateWithTrigger: b,
      validate: y,
      resetValidation: T
    } = bn(), S = E(null), h = () => {
      var {
        multiple: U,
        modelValue: H
      } = e;
      if (U) {
        var Q = H;
        o.value = Q.map($);
      }
      !U && !Un(H) && (i.value = $(H)), !U && Un(H) && (i.value = "");
    }, g = (U) => {
      Pe(() => {
        var {
          validateTrigger: H,
          rules: Q,
          modelValue: ie
        } = e;
        b(H, U, Q, ie);
      });
    }, M = (U) => {
      var {
        value: H,
        label: Q
      } = U;
      return H.value != null ? H.value : Q.value;
    }, $ = (U) => {
      var H, Q, ie = f.find((oe) => {
        var {
          value: ve
        } = oe;
        return ve.value === U;
      });
      return ie || (ie = f.find((oe) => {
        var {
          label: ve
        } = oe;
        return ve.value === U;
      })), (H = (Q = ie) == null ? void 0 : Q.label.value) != null ? H : "";
    }, B = () => {
      var {
        hint: U,
        modelValue: H
      } = e;
      if (!U && !Un(H))
        return Nt("--placeholder-hidden");
      if (U && (!Un(H) || r.value))
        return Nt("--placeholder-hint");
    }, C = () => n.value && window.getComputedStyle(n.value).width || "0px", D = () => {
      var {
        disabled: U,
        readonly: H,
        onFocus: Q
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || U || H || (l.value = C(), s.value = Me(e.offsetY), r.value = !0, N(Q), g("onFocus"));
    }, P = () => {
      var {
        disabled: U,
        readonly: H,
        onBlur: Q
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || U || H || (N(Q), g("onBlur"));
    }, k = (U) => {
      var {
        disabled: H,
        readonly: Q,
        multiple: ie,
        onChange: oe
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || H || Q)) {
        var ve = ie ? f.filter((be) => {
          var {
            selected: nn
          } = be;
          return nn.value;
        }).map(M) : M(U);
        N(e["onUpdate:modelValue"], ve), N(oe, ve), g("onChange"), !ie && (r.value = !1);
      }
    }, O = () => {
      var {
        disabled: U,
        readonly: H,
        multiple: Q,
        clearable: ie,
        onClear: oe
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || U || H || !ie)) {
        var ve = Q ? [] : void 0;
        N(e["onUpdate:modelValue"], ve), N(oe, ve), g("onClear");
      }
    }, R = (U) => {
      var {
        disabled: H,
        onClick: Q
      } = e;
      d != null && d.disabled.value || H || (N(Q, U), g("onClick"));
    }, Y = (U) => {
      var {
        disabled: H,
        readonly: Q,
        modelValue: ie,
        onClose: oe
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || H || Q)) {
        var ve = ie, be = f.find((rn) => {
          var {
            label: De
          } = rn;
          return De.value === U;
        }), nn = ve.filter((rn) => {
          var De;
          return rn !== ((De = be.value.value) != null ? De : be.label.value);
        });
        N(e["onUpdate:modelValue"], nn), N(oe, nn), g("onClose");
      }
    }, G = () => {
      var {
        multiple: U,
        modelValue: H
      } = e;
      if (U) {
        var Q = H;
        f.forEach((ie) => ie.sync(Q.includes(M(ie))));
      } else
        f.forEach((ie) => ie.sync(H === M(ie)));
      h();
    }, V = () => {
      l.value = C(), s.value = Me(e.offsetY), r.value = !0;
    }, z = () => {
      r.value = !1;
    }, X = () => y(e.rules, e.modelValue), se = () => {
      N(e["onUpdate:modelValue"], e.multiple ? [] : void 0), T();
    };
    ne(() => e.multiple, () => {
      var {
        multiple: U,
        modelValue: H
      } = e;
      if (U && !Se(H))
        throw Error("The modelValue must be an array when multiple is true");
    }), ne(() => e.modelValue, G, {
      deep: !0
    }), ne(() => v.value, G);
    var F = {
      wrapWidth: W(() => l.value),
      multiple: a,
      focusColor: t,
      onSelect: k,
      reset: se,
      validate: X,
      resetValidation: T
    };
    return c(F), N(u, F), {
      wrapEl: n,
      offsetY: s,
      isFocus: r,
      errorMessage: p,
      formDisabled: d == null ? void 0 : d.disabled,
      label: i,
      labels: o,
      menuEl: S,
      n: Nt,
      classes: vh,
      computePlaceholderState: B,
      handleFocus: D,
      handleBlur: P,
      handleClear: O,
      handleClick: R,
      handleClose: Y,
      reset: se,
      validate: X,
      resetValidation: T,
      focus: V,
      blur: z
    };
  }
});
xr.install = function(e) {
  e.component(xr.name, xr);
};
var ph = {
  loading: {
    type: Boolean,
    default: !0
  },
  title: {
    type: Boolean,
    default: !1
  },
  card: {
    type: Boolean,
    default: !1
  },
  avatar: {
    type: Boolean,
    default: !1
  },
  fullscreen: {
    type: Boolean,
    default: !1
  },
  fullscreenZIndex: {
    type: [Number, String],
    default: 100
  },
  titleWidth: {
    type: [Number, String]
  },
  cardHeight: {
    type: [Number, String]
  },
  avatarSize: {
    type: [Number, String]
  },
  rows: {
    type: [Number, String],
    default: 3
  },
  rowsWidth: {
    type: Array,
    default: () => []
  }
}, {
  n: hh,
  classes: gh
} = _("skeleton");
function yh(e, n) {
  return w(), I(
    "div",
    {
      class: m(e.classes("var--box", e.n()))
    },
    [e.loading ? Z("v-if", !0) : (w(), I(
      "div",
      {
        key: 0,
        class: m(e.n("data"))
      },
      [q(e.$slots, "default")],
      2
    )), e.loading && !e.fullscreen ? (w(), I(
      "div",
      {
        key: 1,
        class: m(e.n("content"))
      },
      [e.card ? (w(), I(
        "div",
        {
          key: 0,
          class: m(e.n("card")),
          style: K({
            height: e.toSizeUnit(e.cardHeight)
          })
        },
        [A(
          "div",
          {
            class: m(e.n("--animation"))
          },
          null,
          2
        )],
        6
      )) : Z("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (w(), I(
        "div",
        {
          key: 1,
          class: m(e.n("article"))
        },
        [e.avatar ? (w(), I(
          "div",
          {
            key: 0,
            class: m(e.n("avatar")),
            style: K({
              width: e.toSizeUnit(e.avatarSize),
              height: e.toSizeUnit(e.avatarSize)
            })
          },
          [A(
            "div",
            {
              class: m(e.n("--animation"))
            },
            null,
            2
          )],
          6
        )) : Z("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (w(), I(
          "div",
          {
            key: 1,
            class: m(e.n("section"))
          },
          [e.title ? (w(), I(
            "div",
            {
              key: 0,
              class: m(e.n("title")),
              style: K({
                width: e.toSizeUnit(e.titleWidth)
              })
            },
            [A(
              "div",
              {
                class: m(e.n("--animation"))
              },
              null,
              2
            )],
            6
          )) : Z("v-if", !0), (w(!0), I(
            Oe,
            null,
            Ie(e.toNumber(e.rows), (r, a) => (w(), I(
              "div",
              {
                class: m(e.n("row")),
                key: r,
                style: K({
                  width: e.toSizeUnit(e.rowsWidth[a])
                })
              },
              [A(
                "div",
                {
                  class: m(e.n("--animation"))
                },
                null,
                2
              )],
              6
            ))),
            128
          ))],
          2
        )) : Z("v-if", !0)],
        2
      )) : Z("v-if", !0)],
      2
    )) : Z("v-if", !0), e.loading && e.fullscreen ? (w(), I(
      "div",
      {
        key: 2,
        class: m(e.n("fullscreen")),
        style: K({
          zIndex: e.toNumber(e.fullscreenZIndex)
        })
      },
      [A(
        "div",
        {
          class: m(e.n("--animation"))
        },
        null,
        2
      )],
      6
    )) : Z("v-if", !0)],
    2
  );
}
const _r = ae({
  render: yh,
  name: "VarSkeleton",
  props: ph,
  setup() {
    return {
      n: hh,
      classes: gh,
      toSizeUnit: Ve,
      toNumber: L
    };
  }
});
_r.install = function(e) {
  e.component(_r.name, _r);
};
function bh(e) {
  return ["always", "normal", "never"].includes(e);
}
var wh = {
  modelValue: {
    type: [Number, Array],
    default: 0
  },
  step: {
    type: [Number, String],
    default: 1
  },
  range: {
    type: Boolean,
    default: !1
  },
  labelVisible: {
    type: String,
    default: "normal",
    validator: bh
  },
  activeColor: {
    type: String
  },
  trackColor: {
    type: String
  },
  thumbColor: {
    type: String
  },
  labelColor: {
    type: String
  },
  labelTextColor: {
    type: String
  },
  trackHeight: {
    type: [String, Number]
  },
  thumbSize: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  rules: {
    type: Array
  },
  onChange: {
    type: Function
  },
  onStart: {
    type: Function
  },
  onEnd: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
};
function fi() {
  return fi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, fi.apply(this, arguments);
}
var {
  n: Sh,
  classes: Ch
} = _("slider"), Ee;
(function(e) {
  e.First = "1", e.Second = "2";
})(Ee || (Ee = {}));
var kh = ["onTouchstart", "onTouchmove", "onTouchend", "onTouchcancel"];
function $h(e, n) {
  var r = re("var-form-details");
  return w(), I(
    "div",
    {
      class: m(e.n())
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n("block"), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")])),
        style: K({
          height: e.thumbSize === void 0 ? e.thumbSize : e.multiplySizeUnit(e.thumbSize, 3),
          margin: e.thumbSize === void 0 ? e.thumbSize : "0 " + e.multiplySizeUnit(e.thumbSize, 0.5)
        }),
        ref: "sliderEl",
        onClick: n[0] || (n[0] = function() {
          return e.click && e.click(...arguments);
        })
      },
      [A(
        "div",
        {
          class: m(e.n("track"))
        },
        [A(
          "div",
          {
            class: m(e.n("track-background")),
            style: K({
              background: e.trackColor,
              height: e.multiplySizeUnit(e.trackHeight)
            })
          },
          null,
          6
        ), A(
          "div",
          {
            class: m(e.n("track-fill")),
            style: K(e.getFillStyle)
          },
          null,
          6
        )],
        2
      ), (w(!0), I(
        Oe,
        null,
        Ie(e.thumbList, (a) => (w(), I(
          "div",
          {
            class: m(e.n("thumb")),
            key: a.enumValue,
            style: K({
              left: a.value + "%",
              zIndex: e.thumbsProps[a.enumValue].active ? 1 : void 0
            }),
            onTouchstart: Vn((t) => e.start(t, a.enumValue), ["stop"]),
            onTouchmove: Vn((t) => e.move(t, a.enumValue), ["stop"]),
            onTouchend: (t) => e.end(a.enumValue),
            onTouchcancel: (t) => e.end(a.enumValue)
          },
          [q(e.$slots, "button", {
            currentValue: a.value
          }, () => [A(
            "div",
            {
              class: m(e.n("thumb-block")),
              style: K({
                background: e.thumbColor,
                height: e.multiplySizeUnit(e.thumbSize),
                width: e.multiplySizeUnit(e.thumbSize)
              })
            },
            null,
            6
          ), A(
            "div",
            {
              class: m(e.classes(e.n("thumb-ripple"), [e.thumbsProps[a.enumValue].active, e.n("thumb-ripple--active")])),
              style: K(fi({
                background: e.thumbColor
              }, e.getRippleSize(a)))
            },
            null,
            6
          ), A(
            "div",
            {
              class: m(e.classes(e.n("thumb-label"), [e.showLabel(a.enumValue), e.n("thumb-label--active")])),
              style: K({
                background: e.labelColor,
                color: e.labelTextColor,
                height: e.thumbSize === void 0 ? e.thumbSize : e.multiplySizeUnit(e.thumbSize, 2),
                width: e.thumbSize === void 0 ? e.thumbSize : e.multiplySizeUnit(e.thumbSize, 2)
              })
            },
            [A(
              "span",
              null,
              J(a.value),
              1
            )],
            6
          )])],
          46,
          kh
        ))),
        128
      ))],
      6
    ), ee(
      r,
      {
        "error-message": e.errorMessage,
        class: m(e.n("form")),
        "var-slider-cover": ""
      },
      null,
      8,
      ["error-message", "class"]
    )],
    2
  );
}
const ea = ae({
  render: $h,
  name: "VarSlider",
  components: {
    VarFormDetails: We
  },
  props: wh,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = wn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: i,
      resetValidation: o
    } = bn(), l = () => i(e.rules, e.modelValue), s = () => ({
      startPosition: 0,
      currentLeft: 0,
      active: !1,
      percentValue: 0
    }), u = () => Pe(() => t(["onChange"], "onChange", e.rules, e.modelValue)), d = E(null), v = E(0), f = E(!1), c = Ne({
      [Ee.First]: s(),
      [Ee.Second]: s()
    }), p = W(() => v.value / 100 * L(e.step)), b = W(() => {
      var V = [{
        value: e.modelValue,
        enumValue: Ee.First
      }];
      return e.range && Se(e.modelValue) && (V = [{
        value: e.modelValue[0],
        enumValue: Ee.First
      }, {
        value: e.modelValue[1],
        enumValue: Ee.Second
      }]), V;
    }), y = (V) => {
      var z;
      return e.thumbSize !== void 0 && (z = c[V.enumValue].active ? He(e.thumbSize, 3) : "0px"), {
        height: z,
        width: z
      };
    }, T = (V) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : c[V].active, S = W(() => {
      var {
        activeColor: V,
        range: z,
        modelValue: X
      } = e, se = z && Se(X) ? Math.abs(X[0] - X[1]) : X, F = z && Se(X) ? Math.min(X[0], X[1]) : 0;
      return {
        width: se + "%",
        left: F + "%",
        background: V
      };
    }), h = W(() => e.disabled || (r == null ? void 0 : r.disabled.value)), g = W(() => e.readonly || (r == null ? void 0 : r.readonly.value)), M = (V, z) => {
      var X = [], {
        step: se,
        range: F,
        modelValue: U,
        onChange: H
      } = e, Q = L(se), ie = Math.round(V / p.value), oe = ie * Q, ve = c[z].percentValue;
      if (c[z].percentValue = oe / Q, F && Se(U) && (X = z === Ee.First ? [oe, U[1]] : [U[0], oe]), ve !== oe) {
        var be = F ? X : oe;
        N(H, be), N(e["onUpdate:modelValue"], be), u();
      }
    }, $ = (V) => {
      if (!e.range)
        return Ee.First;
      var z = c[Ee.First].percentValue * p.value, X = c[Ee.Second].percentValue * p.value, se = Math.abs(V - z), F = Math.abs(V - X);
      return se <= F ? Ee.First : Ee.Second;
    }, B = (V, z) => {
      v.value || (v.value = d.value.offsetWidth), !(h.value || g.value) && (N(e.onStart), f.value = !0, c[z].startPosition = V.touches[0].clientX);
    }, C = (V, z) => {
      if (!(h.value || g.value || !f.value)) {
        var X = V.touches[0].clientX - c[z].startPosition + c[z].currentLeft;
        c[z].active = !0, X <= 0 ? X = 0 : X >= v.value && (X = v.value), M(X, z);
      }
    }, D = (V) => {
      var {
        range: z,
        modelValue: X,
        onEnd: se
      } = e;
      if (!(h.value || g.value)) {
        var F = [];
        c[V].currentLeft = c[V].percentValue * p.value, c[V].active = !1;
        var U = c[V].percentValue;
        z && Se(X) && (F = V === Ee.First ? [U, X[1]] : [X[0], U]), N(se, z ? F : U), f.value = !1;
      }
    }, P = (V) => {
      if (!(h.value || g.value) && !V.target.closest(".var-slider__thumb")) {
        var z = V.clientX - Us(V.currentTarget), X = $(z);
        M(z, X), D(X);
      }
    }, k = () => {
      var V = L(e.step);
      return isNaN(V) ? (console.warn('[Varlet] Slider: type of prop "step" should be Number'), !1) : V < 1 || V > 100 ? (console.warn('[Varlet] Slider: "step" should be >= 0 and <= 100'), !1) : parseInt("" + e.step, 10) !== V ? (console.warn('[Varlet] Slider: "step" should be an Integer'), !1) : !0;
    }, O = () => {
      var {
        range: V,
        modelValue: z
      } = e;
      return V && !Se(z) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !V && Se(z) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : V && Se(z) && z.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, R = function(V, z) {
      V === void 0 && (V = e.modelValue), z === void 0 && (z = L(e.step)), e.range && Se(V) ? (c[Ee.First].percentValue = V[0] / z, c[Ee.First].currentLeft = c[Ee.First].percentValue * p.value, c[Ee.Second].percentValue = V[1] / z, c[Ee.Second].currentLeft = c[Ee.Second].percentValue * p.value) : Qe(V) && (c[Ee.First].currentLeft = V / z * p.value);
    };
    ne([() => e.modelValue, () => e.step], (V) => {
      var [z, X] = V;
      !k() || !O() || f.value || R(z, L(X));
    }), ne(v, () => R()), Fe(() => {
      !k() || !O() || (v.value = d.value.offsetWidth);
    });
    var Y = () => {
      var V = e.range ? [0, 0] : 0;
      N(e["onUpdate:modelValue"], V), o();
    }, G = {
      reset: Y,
      validate: l,
      resetValidation: o
    };
    return N(n, G), {
      n: Sh,
      classes: Ch,
      Thumbs: Ee,
      sliderEl: d,
      getFillStyle: S,
      isDisabled: h,
      errorMessage: a,
      thumbsProps: c,
      thumbList: b,
      multiplySizeUnit: He,
      toNumber: L,
      getRippleSize: y,
      showLabel: T,
      start: B,
      move: C,
      end: D,
      click: P
    };
  }
});
ea.install = function(e) {
  e.component(ea.name, ea);
};
function ci() {
  return ci = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ci.apply(this, arguments);
}
function Th(e) {
  var n = ["top", "center", "bottom"];
  return n.includes(e);
}
function Oh(e) {
  return Ri.includes(e);
}
var fs = {
  type: {
    type: String,
    validator: Oh
  },
  position: {
    type: String,
    default: "top",
    validator: Th
  },
  content: {
    type: String
  },
  contentClass: {
    type: String
  },
  duration: {
    type: Number,
    default: 3e3
  },
  vertical: {
    type: Boolean,
    default: !1
  },
  loadingType: Ze(Yn, "type"),
  loadingSize: Ze(Yn, "size"),
  loadingRadius: Ze(Yn, "radius"),
  loadingColor: ci({}, Ze(Yn, "color"), {
    default: "currentColor"
  }),
  lockScroll: {
    type: Boolean,
    default: !1
  },
  show: {
    type: Boolean,
    default: !1
  },
  teleport: {
    type: String,
    default: "body"
  },
  forbidClick: {
    type: Boolean,
    default: !1
  },
  onOpen: {
    type: Function,
    default: () => {
    }
  },
  onOpened: {
    type: Function,
    default: () => {
    }
  },
  onClose: {
    type: Function,
    default: () => {
    }
  },
  onClosed: {
    type: Function,
    default: () => {
    }
  },
  "onUpdate:show": {
    type: Function
  },
  _update: {
    type: String
  }
}, {
  n: Ph,
  classes: Eh
} = _("snackbar"), Vh = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function Mh(e, n) {
  var r = re("var-icon"), a = re("var-loading");
  return Ce((w(), I(
    "div",
    {
      class: m(e.n()),
      style: K({
        pointerEvents: e.isForbidClick ? "auto" : "none",
        zIndex: e.zIndex
      })
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n("wrapper"), e.n("wrapper-" + e.position), "var-elevation--4", [e.vertical, e.n("vertical")], [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n("wrapper-" + e.type)])),
        style: K({
          zIndex: e.zIndex
        })
      },
      [A(
        "div",
        {
          class: m([e.n("content"), e.contentClass])
        },
        [q(e.$slots, "default", {}, () => [he(
          J(e.content),
          1
        )])],
        2
      ), A(
        "div",
        {
          class: m(e.n("action"))
        },
        [e.iconName ? (w(), me(
          r,
          {
            key: 0,
            name: e.iconName
          },
          null,
          8,
          ["name"]
        )) : Z("v-if", !0), e.type === "loading" ? (w(), me(
          a,
          {
            key: 1,
            type: e.loadingType,
            size: e.loadingSize,
            color: e.loadingColor,
            radius: e.loadingRadius
          },
          null,
          8,
          ["type", "size", "color", "radius"]
        )) : Z("v-if", !0), q(e.$slots, "action")],
        2
      )],
      6
    )],
    6
  )), [[Aa, e.show]]);
}
const cs = ae({
  render: Mh,
  name: "VarSnackbarCore",
  components: {
    VarLoading: Cn,
    VarIcon: $e
  },
  props: fs,
  setup(e) {
    var n = E(null), {
      zIndex: r
    } = ft(() => e.show, 1);
    Pi(() => e.show, () => e.lockScroll);
    var a = W(() => e.type === "loading" || e.forbidClick), t = W(() => e.type ? Vh[e.type] : ""), i = () => {
      n.value = setTimeout(() => {
        var o;
        e.type !== "loading" && ((o = e["onUpdate:show"]) == null || o.call(e, !1));
      }, e.duration);
    };
    return ne(() => e.show, (o) => {
      o ? (e.onOpen == null || e.onOpen(), i()) : o === !1 && (clearTimeout(n.value), e.onClose == null || e.onClose());
    }), ne(() => e._update, () => {
      clearTimeout(n.value), i();
    }), Fe(() => {
      e.show && (e.onOpen == null || e.onOpen(), i());
    }), {
      SNACKBAR_TYPE: Ri,
      n: Ph,
      classes: Eh,
      zIndex: r,
      iconName: t,
      isForbidClick: a
    };
  }
});
var {
  n: Ih
} = _("snackbar");
function Nh(e, n) {
  var r = re("var-snackbar-core");
  return w(), me(
    lt,
    {
      to: e.teleport,
      disabled: e.disabled
    },
    [ee(
      je,
      {
        name: e.n() + "-fade",
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      },
      {
        default: ce(() => [ee(
          r,
          Te(e.$props, {
            class: e.n("transition")
          }),
          {
            action: ce(() => [q(e.$slots, "action")]),
            default: ce(() => [q(e.$slots, "default", {}, () => [he(
              J(e.content),
              1
            )])]),
            _: 3
          },
          16,
          ["class"]
        )]),
        _: 3
      },
      8,
      ["name", "onAfterEnter", "onAfterLeave"]
    )],
    8,
    ["to", "disabled"]
  );
}
const na = ae({
  render: Nh,
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: cs
  },
  props: fs,
  setup() {
    var {
      disabled: e
    } = ll();
    return {
      n: Ih,
      disabled: e
    };
  }
});
function Na() {
  return Na = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Na.apply(this, arguments);
}
function Dh(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Si(e);
}
var Ri = ["loading", "success", "warning", "info", "error"], Wo = 0, mi = !1, pi, ba = !1, sn = Ne([]), Bh = {
  type: void 0,
  content: "",
  position: "top",
  duration: 3e3,
  vertical: !1,
  contentClass: void 0,
  loadingType: "circle",
  loadingSize: "normal",
  lockScroll: !1,
  teleport: "body",
  forbidClick: !1,
  onOpen: () => {
  },
  onOpened: () => {
  },
  onClose: () => {
  },
  onClosed: () => {
  }
}, Ah = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, zh = {
  setup() {
    return () => {
      var e = sn.map((r) => {
        var {
          id: a,
          reactiveSnackOptions: t,
          _update: i
        } = r, o = document.querySelector(".var-transition-group");
        t.forbidClick || t.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), ba && (t.position = "top");
        var l = ba ? "relative" : "absolute", s = Na({
          position: l
        }, Yh(t.position));
        return ee(cs, Te(t, {
          key: a,
          style: s,
          "data-id": a,
          _update: i,
          show: t.show,
          "onUpdate:show": (u) => t.show = u
        }), null);
      }), n = on.zIndex;
      return ee(Bs, Te(Ah, {
        style: {
          zIndex: n
        },
        onAfterEnter: Fh,
        onAfterLeave: Lh
      }), Dh(e) ? e : {
        default: () => [e]
      });
    };
  }
}, In = function(e) {
  var n = _e(e) || Qe(e) ? {
    content: String(e)
  } : e, r = Ne(Na({}, Bh, n));
  r.show = !0, mi || (mi = !0, pi = za(zh).unmountInstance);
  var {
    length: a
  } = sn, t = {
    id: Wo++,
    reactiveSnackOptions: r
  };
  if (a === 0 || ba)
    Rh(t);
  else {
    var i = "update-" + Wo;
    Uh(r, i);
  }
  return {
    clear() {
      !ba && sn.length ? sn[0].reactiveSnackOptions.show = !1 : r.show = !1;
    }
  };
};
Ri.forEach((e) => {
  In[e] = (n) => (ki(n) ? n.type = e : n = {
    content: n,
    type: e
  }, In(n));
});
In.install = function(e) {
  e.component(na.name, na);
};
In.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== ba && (sn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), ba = e);
};
In.clear = function() {
  sn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
In.Component = na;
function Fh(e) {
  var n = e.getAttribute("data-id"), r = sn.find((a) => a.id === L(n));
  r && (r.reactiveSnackOptions.onOpened == null || r.reactiveSnackOptions.onOpened());
}
function Lh(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var n = e.getAttribute("data-id"), r = sn.find((t) => t.id === L(n));
  r && (r.animationEnd = !0, r.reactiveSnackOptions.onClosed == null || r.reactiveSnackOptions.onClosed());
  var a = sn.every((t) => t.animationEnd);
  a && (pi == null || pi(), sn = Ne([]), mi = !1);
}
function Rh(e) {
  sn.push(e);
}
function Uh(e, n) {
  var [r] = sn;
  r.reactiveSnackOptions = Na({}, r.reactiveSnackOptions, e), r._update = n;
}
function Yh(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
na.install = function(e) {
  e.component(na.name, na);
};
var ms = (e) => ["mini", "small", "normal", "large"].includes(e), Wh = (e) => ms(e) || Se(e) || Qe(e) || _e(e), Hh = (e) => ["start", "end", "center", "space-around", "space-between"].includes(e), jh = {
  align: {
    type: String
  },
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: Wh
  },
  wrap: {
    type: Boolean,
    default: !0
  },
  direction: {
    type: String,
    default: "row"
  },
  justify: {
    type: String,
    default: "start",
    validator: Hh
  },
  inline: {
    type: Boolean,
    default: !1
  }
}, {
  n: Ho,
  classes: Gh
} = _("space"), qh = {
  mini: [4, 4],
  small: [6, 6],
  normal: [8, 12],
  large: [12, 20]
};
const ra = ae({
  name: "VarSpace",
  props: jh,
  setup(e, n) {
    var {
      slots: r
    } = n, a = (t, i) => i ? qh[t] : Se(t) ? t.map(Me) : [Me(t), Me(t)];
    return () => {
      var t, {
        inline: i,
        justify: o,
        align: l,
        wrap: s,
        direction: u,
        size: d
      } = e, v = (t = N(r.default)) != null ? t : [], f = ms(d), [c, p] = a(d, f), b = (S) => {
        var h = [];
        return S.forEach((g) => {
          if (g.type !== As) {
            if (g.type === Oe && Se(g.children)) {
              g.children.forEach((M) => {
                h.push(M);
              });
              return;
            }
            h.push(g);
          }
        }), h;
      };
      v = b(v);
      var y = v.length - 1, T = v.map((S, h) => {
        var g = u === "row" ? void 0 : "100%", M = "0";
        return u === "row" && (o === "start" || o === "center" || o === "end" ? h !== y ? M = c / 2 + "px " + p + "px " + c / 2 + "px 0" : M = c / 2 + "px 0" : o === "space-around" ? M = c / 2 + "px " + p / 2 + "px" : o === "space-between" && (h === 0 ? M = c / 2 + "px " + p / 2 + "px " + c / 2 + "px 0" : h === y ? M = c / 2 + "px 0 " + c / 2 + "px " + p / 2 + "px" : M = c / 2 + "px " + p / 2 + "px")), u === "column" && h !== y && (M = "0 0 " + c + "px 0"), ee("div", {
          style: {
            margin: M,
            width: g
          }
        }, [S]);
      });
      return ee("div", {
        class: Gh(Ho(), "var--box", [i, Ho("--inline")]),
        style: {
          flexDirection: u,
          justifyContent: o,
          alignItems: l,
          flexWrap: s ? "wrap" : "nowrap",
          margin: u === "row" ? "-" + c / 2 + "px 0" : void 0
        }
      }, [T]);
    };
  }
});
ra.install = function(e) {
  e.component(ra.name, ra);
};
var Kh = {
  activeIcon: {
    type: String,
    default: "check"
  },
  currentIcon: {
    type: String
  },
  inactiveIcon: {
    type: String
  }
}, ps = Symbol("STEPS_BIND_STEP_KEY"), hs = Symbol("STEPS_COUNT_STEP_KEY");
function Xh() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(ps), {
    length: r
  } = gn(hs);
  return {
    length: r,
    step: n,
    bindStep: e
  };
}
function Zh() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(ps), {
    index: r
  } = yn(hs);
  if (!e || !n || !r)
    throw Error("[Varlet] Steps: <step/> must in <steps>");
  return {
    index: r,
    steps: e,
    bindSteps: n
  };
}
var {
  n: Jh,
  classes: Qh
} = _("step"), xh = {
  key: 3
};
function _h(e, n) {
  var r = re("var-icon");
  return w(), I(
    "div",
    {
      class: m(e.n())
    },
    [A(
      "div",
      {
        class: m(e.n(e.direction))
      },
      [A(
        "div",
        {
          class: m(e.n(e.direction + "-main")),
          ref: e.getRef
        },
        [A(
          "div",
          {
            class: m(e.classes(e.n(e.direction + "-tag"), [e.isActive || e.isCurrent, e.n(e.direction + "-tag--active")])),
            style: K({
              backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor
            }),
            onClick: n[0] || (n[0] = function() {
              return e.click && e.click(...arguments);
            })
          },
          [e.isActive ? (w(), me(
            r,
            {
              key: 0,
              class: m(e.n("icon")),
              "var-step-cover": "",
              name: e.activeIcon
            },
            null,
            8,
            ["class", "name"]
          )) : e.isCurrent && e.currentIcon ? (w(), me(
            r,
            {
              key: 1,
              class: m(e.n("icon")),
              "var-step-cover": "",
              name: e.currentIcon
            },
            null,
            8,
            ["class", "name"]
          )) : e.inactiveIcon ? (w(), me(
            r,
            {
              key: 2,
              class: m(e.n("icon")),
              "var-step-cover": "",
              name: e.inactiveIcon
            },
            null,
            8,
            ["class", "name"]
          )) : (w(), I(
            "span",
            xh,
            J(e.index + 1),
            1
          ))],
          6
        ), A(
          "div",
          {
            class: m(e.classes(e.n(e.direction + "-content"), [e.isActive || e.isCurrent, e.n(e.direction + "-content--active")])),
            onClick: n[1] || (n[1] = function() {
              return e.click && e.click(...arguments);
            })
          },
          [q(e.$slots, "default")],
          2
        )],
        2
      ), e.isLastChild ? Z("v-if", !0) : (w(), I(
        "div",
        {
          key: 0,
          class: m(e.n(e.direction + "-line")),
          style: K({
            margin: e.lineMargin
          })
        },
        null,
        6
      ))],
      2
    )],
    2
  );
}
const aa = ae({
  render: _h,
  name: "VarStep",
  components: {
    VarIcon: $e
  },
  props: Kh,
  setup() {
    var e = E(null), n = E(""), r = E(!1), {
      index: a,
      steps: t,
      bindSteps: i
    } = Zh(), {
      active: o,
      length: l,
      activeColor: s,
      inactiveColor: u,
      direction: d,
      clickStep: v
    } = t, f = W(() => o.value === a.value), c = W(() => a.value !== -1 && o.value > a.value), p = {
      index: a
    }, b = () => v(a.value), y = (T) => {
      d.value === "horizontal" && (e.value = T);
    };
    return i(p), ne(l, (T) => {
      if (r.value = T - 1 === a.value, e.value) {
        var S = e.value.offsetWidth / 2 - 14;
        n.value = "0 -" + S + "px";
      }
    }), {
      n: Jh,
      classes: Qh,
      main: e,
      index: a,
      isActive: c,
      isCurrent: f,
      direction: d,
      lineMargin: n,
      activeColor: s,
      inactiveColor: u,
      isLastChild: r,
      click: b,
      getRef: y
    };
  }
});
aa.install = function(e) {
  e.component(aa.name, aa);
};
function eg(e) {
  return ["horizontal", "vertical"].includes(e);
}
var ng = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: eg
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: {
    type: Function
  }
}, {
  n: rg
} = _("steps");
function ag(e, n) {
  return w(), I(
    "div",
    {
      class: m(e.n()),
      style: K({
        flexDirection: e.direction === "horizontal" ? "row" : "column"
      })
    },
    [q(e.$slots, "default")],
    6
  );
}
const ta = ae({
  render: ag,
  name: "VarSteps",
  props: ng,
  setup(e) {
    var n = W(() => e.active), r = W(() => e.activeColor), a = W(() => e.inactiveColor), t = W(() => e.direction), {
      length: i,
      bindStep: o
    } = Xh(), l = (u) => {
      N(e.onClickStep, u);
    }, s = {
      active: n,
      length: i,
      direction: t,
      activeColor: r,
      inactiveColor: a,
      clickStep: l
    };
    return o(s), {
      n: rg
    };
  }
});
ta.install = function(e) {
  e.component(ta.name, ta);
};
var {
  n: tg
} = _("style-provider");
const ia = ae({
  name: "VarStyleProvider",
  props: {
    styleVars: {
      type: Object,
      default: () => ({})
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(e, n) {
    var {
      slots: r
    } = n;
    return () => Qo(e.tag, {
      class: tg(),
      style: il(e.styleVars)
    }, N(r.default));
  }
});
var Dt = [];
function Da(e) {
  Dt.forEach((r) => document.documentElement.style.removeProperty(r)), Dt.length = 0;
  var n = il(e != null ? e : {});
  Object.entries(n).forEach((r) => {
    var [a, t] = r;
    document.documentElement.style.setProperty(a, t), Dt.push(a);
  });
}
Da.Component = ia;
ia.install = function(e) {
  e.component(ia.name, ia);
};
Da.install = function(e) {
  e.component(ia.name, ia);
};
var ig = {
  modelValue: {
    default: !1
  },
  activeValue: {
    default: !0
  },
  inactiveValue: {
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  loading: {
    type: Boolean,
    default: !1
  },
  color: {
    type: String
  },
  loadingColor: {
    type: String
  },
  closeColor: {
    type: String
  },
  size: {
    type: [String, Number]
  },
  rules: {
    type: Array
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  onClick: {
    type: Function
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, {
  n: og,
  classes: lg
} = _("switch");
function sg(e, n) {
  var r = re("var-loading"), a = re("var-form-details"), t = Ge("ripple");
  return w(), I(
    "div",
    {
      class: m(e.n())
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disable")])),
        onClick: n[0] || (n[0] = function() {
          return e.switchActive && e.switchActive(...arguments);
        }),
        style: K(e.styleComputed.switch)
      },
      [A(
        "div",
        {
          style: K(e.styleComputed.track),
          class: m(e.classes(e.n("track"), [e.modelValue === e.activeValue, e.n("track--active")], [e.errorMessage, e.n("track--error")]))
        },
        null,
        6
      ), Ce((w(), I(
        "div",
        {
          class: m(e.classes(e.n("ripple"), [e.modelValue === e.activeValue, e.n("ripple--active")])),
          style: K(e.styleComputed.ripple)
        },
        [A(
          "div",
          {
            style: K(e.styleComputed.handle),
            class: m(e.classes(e.n("handle"), "var-elevation--2", [e.modelValue === e.activeValue, e.n("handle--active")], [e.errorMessage, e.n("handle--error")]))
          },
          [e.loading ? (w(), me(
            r,
            {
              key: 0,
              radius: e.radius,
              color: "currentColor"
            },
            null,
            8,
            ["radius"]
          )) : Z("v-if", !0)],
          6
        )],
        6
      )), [[t, {
        disabled: !e.ripple || e.disabled || e.loading || e.formDisabled
      }]])],
      6
    ), ee(
      a,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
  );
}
const oa = ae({
  render: sg,
  name: "VarSwitch",
  components: {
    VarLoading: Cn,
    VarFormDetails: We
  },
  directives: {
    Ripple: Le
  },
  props: ig,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = wn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: i,
      resetValidation: o
    } = bn(), l = () => i(e.rules, e.modelValue), s = () => Pe(() => t(["onChange"], "onChange", e.rules, e.modelValue)), u = W(() => {
      var {
        size: p,
        modelValue: b,
        color: y,
        closeColor: T,
        loadingColor: S,
        activeValue: h
      } = e;
      return {
        handle: {
          width: He(p),
          height: He(p),
          backgroundColor: b === h ? y : T,
          color: S
        },
        ripple: {
          left: b === h ? He(p, 0.5) : "-" + He(p, 0.5),
          color: b === h ? y : T || "#999",
          width: He(p, 2),
          height: He(p, 2)
        },
        track: {
          height: He(p, 0.72),
          width: He(p, 1.9),
          borderRadius: He(p, 2 / 3),
          filter: b === h || a != null && a.value ? "opacity(.6)" : "brightness(.6)",
          backgroundColor: b === h ? y : T
        },
        switch: {
          height: He(p, 1.2),
          width: He(p, 2)
        }
      };
    }), d = W(() => {
      var {
        size: p = "5.333vw"
      } = e;
      return He(p, 0.4);
    }), v = (p) => {
      var {
        onClick: b,
        onChange: y,
        disabled: T,
        loading: S,
        readonly: h,
        modelValue: g,
        activeValue: M,
        inactiveValue: $,
        "onUpdate:modelValue": B
      } = e;
      if (N(b, p), !(T || S || h || r != null && r.disabled.value || r != null && r.readonly.value)) {
        var C = g === M ? $ : M;
        N(y, C), N(B, C), s();
      }
    }, f = () => {
      N(e["onUpdate:modelValue"], e.inactiveValue), o();
    }, c = {
      reset: f,
      validate: l,
      resetValidation: o
    };
    return N(n, c), {
      n: og,
      classes: lg,
      switchActive: v,
      radius: d,
      styleComputed: u,
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly
    };
  }
});
oa.install = function(e) {
  e.component(oa.name, oa);
};
var ug = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: {
    type: Function
  }
}, gs = Symbol("TABS_BIND_TAB_KEY"), ys = Symbol("TABS_COUNT_TAB_KEY");
function dg() {
  var {
    childProviders: e,
    bindChildren: n
  } = un(gs), {
    length: r
  } = gn(ys);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function vg() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(gs), {
    index: r
  } = yn(ys);
  if (!e || !n || !r)
    throw Error("<var-tab/> must in <var-tabs/>");
  return {
    index: r,
    tabs: e,
    bindTabs: n
  };
}
var {
  n: fg,
  classes: cg
} = _("tab");
function mg(e, n) {
  var r = Ge("ripple");
  return Ce((w(), I(
    "div",
    {
      class: m(e.classes(e.n(), "var--box", e.computeColorClass(), e.n("--" + e.itemDirection))),
      ref: "tabEl",
      style: K({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [q(e.$slots, "default")],
    6
  )), [[r, {
    disabled: e.disabled
  }]]);
}
const la = ae({
  render: mg,
  name: "VarTab",
  directives: {
    Ripple: Le
  },
  props: ug,
  setup(e) {
    var n = E(null), r = W(() => e.name), a = W(() => e.disabled), t = W(() => n.value), {
      index: i,
      tabs: o,
      bindTabs: l
    } = vg(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: v,
      disabledColor: f,
      itemDirection: c,
      resize: p
    } = o, b = {
      name: r,
      index: i,
      disabled: a,
      element: t
    };
    l(b);
    var y = () => {
      var {
        disabled: h,
        name: g
      } = e;
      return h ? f.value : u.value === g || u.value === (i == null ? void 0 : i.value) ? d.value : v.value;
    }, T = () => {
      var {
        disabled: h,
        name: g
      } = e;
      return h ? "var-tab--disabled" : u.value === g || u.value === (i == null ? void 0 : i.value) ? "var-tab--active" : "var-tab--inactive";
    }, S = (h) => {
      var {
        disabled: g,
        name: M,
        onClick: $
      } = e;
      g || ($ == null || $(M != null ? M : i.value, h), s(b));
    };
    return ne(() => e.name, p), ne(() => e.disabled, p), {
      n: fg,
      classes: cg,
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: c,
      computeColorStyle: y,
      computeColorClass: T,
      handleClick: S
    };
  }
});
la.install = function(e) {
  e.component(la.name, la);
};
var bs = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY"), ws = Symbol("TABS_ITEMS_COUNT_TAB_ITEM_KEY");
function pg() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(bs), {
    length: r
  } = gn(ws);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
function hg() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(bs), {
    index: r
  } = yn(ws);
  if (!e || !n || !r)
    throw Error("<var-tab-item/> must in <var-tabs-items/>");
  return {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
var gg = {
  name: {
    type: [String, Number]
  }
}, {
  n: yg,
  classes: bg
} = _("tab-item");
function wg(e, n) {
  var r = re("var-swipe-item");
  return w(), me(
    r,
    {
      class: m(e.classes(e.n(), [!e.current, e.n("--inactive")])),
      "var-tab-item-cover": ""
    },
    {
      default: ce(() => [e.initSlot ? q(e.$slots, "default", {
        key: 0
      }) : Z("v-if", !0)]),
      _: 3
    },
    8,
    ["class"]
  );
}
const sa = ae({
  render: wg,
  name: "VarTabItem",
  components: {
    VarSwipeItem: Gn
  },
  props: gg,
  setup(e) {
    var n = E(!1), r = E(!1), a = W(() => e.name), {
      index: t,
      bindTabsItems: i
    } = hg(), o = (s) => {
      !r.value && s && (r.value = !0), n.value = s;
    }, l = {
      index: t,
      name: a,
      setCurrent: o
    };
    return i(l), {
      n: yg,
      classes: bg,
      current: n,
      initSlot: r
    };
  }
});
sa.install = function(e) {
  e.component(sa.name, sa);
};
var {
  n: Sg,
  classes: Cg
} = _("table");
function kg(e, n) {
  return w(), I(
    "div",
    {
      class: m(e.classes(e.n(), "var-elevation--1 var--box"))
    },
    [A(
      "div",
      {
        class: m(e.n("main"))
      },
      [A(
        "table",
        {
          class: m(e.n("table")),
          style: K({
            width: e.toSizeUnit(e.fullWidth)
          })
        },
        [q(e.$slots, "default")],
        6
      )],
      2
    ), e.$slots.footer ? (w(), I(
      "div",
      {
        key: 0,
        class: m(e.n("footer"))
      },
      [q(e.$slots, "footer")],
      2
    )) : Z("v-if", !0)],
    2
  );
}
const ua = ae({
  render: kg,
  name: "VarTable",
  props: {
    fullWidth: {
      type: [Number, String],
      default: "100%"
    }
  },
  setup() {
    return {
      toSizeUnit: Ve,
      n: Sg,
      classes: Cg
    };
  }
});
ua.install = function(e) {
  e.component(ua.name, ua);
};
function jo(e) {
  return ["horizontal", "vertical"].includes(e);
}
var $g = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal",
    validator: jo
  },
  itemDirection: {
    type: String,
    default: "horizontal",
    validator: jo
  },
  fixedBottom: {
    type: Boolean,
    default: !1
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  disabledColor: {
    type: String
  },
  color: {
    type: String
  },
  indicatorColor: {
    type: String
  },
  indicatorSize: {
    type: [String, Number]
  },
  elevation: {
    type: Boolean,
    default: !1
  },
  sticky: {
    type: Boolean,
    default: !1
  },
  safeArea: {
    type: Boolean,
    default: !1
  },
  offsetTop: Ze(_l, "offsetTop"),
  onClick: {
    type: Function
  },
  onChange: {
    type: Function
  },
  "onUpdate:active": {
    type: Function
  }
};
function Go(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Tg(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        Go(i, a, t, o, l, "next", s);
      }
      function l(s) {
        Go(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Og,
  classes: Pg
} = _("tabs");
function Eg(e, n) {
  return w(), me(
    st(e.sticky ? "var-sticky" : e.Transition),
    {
      "offset-top": e.sticky ? e.offsetTop : null
    },
    {
      default: ce(() => [A(
        "div",
        Te({
          class: e.classes(e.n(), "var--box", e.n("--item-" + e.itemDirection), e.n("--layout-" + e.layoutDirection + "-padding"), [e.elevation, "var-elevation--4"], [e.fixedBottom, e.n("--fixed-bottom")], [e.safeArea, e.n("--safe-area")]),
          style: {
            background: e.color
          }
        }, e.$attrs),
        [A(
          "div",
          {
            ref: "scrollerEl",
            class: m(e.classes(e.n("tab-wrap"), [e.scrollable, e.n("--layout-" + e.layoutDirection + "-scrollable")], e.n("--layout-" + e.layoutDirection)))
          },
          [q(e.$slots, "default"), A(
            "div",
            {
              class: m(e.classes(e.n("indicator"), e.n("--layout-" + e.layoutDirection + "-indicator"))),
              style: K({
                width: e.layoutDirection === "horizontal" ? e.indicatorWidth : e.toSizeUnit(e.indicatorSize),
                height: e.layoutDirection === "horizontal" ? e.toSizeUnit(e.indicatorSize) : e.indicatorHeight,
                transform: e.layoutDirection === "horizontal" ? "translateX(" + e.indicatorX + ")" : "translateY(" + e.indicatorY + ")",
                background: e.indicatorColor || e.activeColor
              })
            },
            null,
            6
          )],
          2
        )],
        16
      )]),
      _: 3
    },
    8,
    ["offset-top"]
  );
}
const da = ae({
  render: Eg,
  name: "VarTabs",
  components: {
    VarSticky: qn
  },
  inheritAttrs: !1,
  props: $g,
  setup(e) {
    var n = E("0px"), r = E("0px"), a = E("0px"), t = E("0px"), i = E(!1), o = E(null), l = W(() => e.active), s = W(() => e.activeColor), u = W(() => e.inactiveColor), d = W(() => e.disabledColor), v = W(() => e.itemDirection), {
      tabList: f,
      bindTabList: c,
      length: p
    } = dg(), b = (C) => {
      var D, P = (D = C.name.value) != null ? D : C.index.value, {
        active: k,
        onChange: O,
        onClick: R
      } = e;
      N(e["onUpdate:active"], P), N(R, P), P !== k && N(O, P);
    }, y = () => f.find((C) => {
      var {
        name: D
      } = C;
      return e.active === D.value;
    }), T = (C) => f.find((D) => {
      var {
        index: P
      } = D;
      return (C != null ? C : e.active) === P.value;
    }), S = () => {
      if (p.value !== 0) {
        var {
          active: C
        } = e;
        if (Qe(C)) {
          var D = C > p.value - 1 ? p.value - 1 : 0;
          return N(e["onUpdate:active"], D), T(D);
        }
      }
    }, h = () => {
      i.value = f.length >= 5;
    }, g = (C) => {
      var {
        element: D
      } = C, P = D.value;
      e.layoutDirection === "horizontal" ? (n.value = (P == null ? void 0 : P.offsetWidth) + "px", a.value = (P == null ? void 0 : P.offsetLeft) + "px") : (r.value = (P == null ? void 0 : P.offsetHeight) + "px", t.value = (P == null ? void 0 : P.offsetTop) + "px");
    }, M = (C) => {
      var {
        element: D
      } = C;
      if (!!i.value) {
        var P = o.value, k = D.value;
        if (e.layoutDirection === "horizontal") {
          var O = k.offsetLeft + k.offsetWidth / 2 - P.offsetWidth / 2;
          Qa(P, {
            left: O,
            animation: _i
          });
        } else {
          var R = k.offsetTop + k.offsetHeight / 2 - P.offsetHeight / 2;
          Qa(P, {
            top: R,
            animation: _i
          });
        }
      }
    }, $ = () => {
      var C = y() || T() || S();
      !C || C.disabled.value || (h(), g(C), M(C));
    }, B = {
      active: l,
      activeColor: s,
      inactiveColor: u,
      disabledColor: d,
      itemDirection: v,
      resize: $,
      onTabClick: b
    };
    return c(B), ne(() => p.value, /* @__PURE__ */ Tg(function* () {
      yield Mn(), $();
    })), ne(() => e.active, $), Fe(() => window.addEventListener("resize", $)), xn(() => window.removeEventListener("resize", $)), {
      indicatorWidth: n,
      indicatorHeight: r,
      indicatorX: a,
      indicatorY: t,
      scrollable: i,
      scrollerEl: o,
      Transition: je,
      toSizeUnit: Ve,
      n: Og,
      classes: Pg,
      resize: $
    };
  }
});
da.install = function(e) {
  e.component(da.name, da);
};
var Vg = {
  active: {
    type: [String, Number],
    default: 0
  },
  canSwipe: {
    type: Boolean,
    default: !0
  },
  loop: {
    type: Boolean,
    default: !1
  },
  "onUpdate:active": {
    type: Function
  }
}, {
  n: Mg
} = _("tabs-items");
function Ig(e, n) {
  var r = re("var-swipe");
  return w(), me(
    r,
    {
      class: m(e.n()),
      ref: "swipe",
      loop: e.loop,
      touchable: e.canSwipe,
      indicator: !1,
      onChange: e.handleSwipeChange
    },
    {
      default: ce(() => [q(e.$slots, "default")]),
      _: 3
    },
    8,
    ["class", "loop", "touchable", "onChange"]
  );
}
const va = ae({
  render: Ig,
  name: "VarTabsItems",
  components: {
    VarSwipe: jn
  },
  props: Vg,
  setup(e) {
    var n = E(null), {
      tabItemList: r,
      bindTabItem: a,
      length: t
    } = pg(), i = (f) => r.find((c) => {
      var {
        name: p
      } = c;
      return f === p.value;
    }), o = (f) => r.find((c) => {
      var {
        index: p
      } = c;
      return f === p.value;
    }), l = (f) => i(f) || o(f), s = (f) => {
      var c, p = l(f);
      !p || (r.forEach((b) => {
        var {
          setCurrent: y
        } = b;
        return y(!1);
      }), p.setCurrent(!0), (c = n.value) == null || c.to(p.index.value));
    }, u = (f) => {
      var c, p = r.find((y) => {
        var {
          index: T
        } = y;
        return T.value === f;
      }), b = (c = p.name.value) != null ? c : p.index.value;
      N(e["onUpdate:active"], b);
    }, d = () => n.value, v = {};
    return a(v), ne(() => e.active, s), ne(() => t.value, () => s(e.active)), {
      swipe: n,
      n: Mg,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
va.install = function(e) {
  e.component(va.name, va);
};
const Ng = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, Dg = {
  "--badge-default-color": "#555"
}, Bg = {
  "--button-default-color": "#303030"
}, Ag = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, zg = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, Fg = {
  "--checkbox-unchecked-color": "#fff"
}, Lg = {
  "--chip-default-color": "#555"
}, Rg = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, Ug = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa"
}, Yg = {
  "--dialog-background": "#1e1e1e",
  "--dialog-message-color": "#bbb"
}, Wg = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, Hg = {
  "--input-input-text-color": "#fff",
  "--input-blur-color": "rgb(255, 255, 255, .7)"
}, jg = {
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "#25293a",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, Gg = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, qg = {
  "--popup-content-background-color": "#1e1e1e"
}, Kg = {
  "--pull-refresh-background": "#303030"
}, Xg = {
  "--radio-unchecked-color": "#fff"
}, Zg = {
  "--select-select-text-color": "#fff",
  "--select-blur-color": "rgb(255, 255, 255, .7)",
  "--select-scroller-background": "#303030"
}, Jg = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, Qg = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, xg = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, _g = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, ey = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)"
}, ny = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa"
}, ry = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, ay = {
  "--tabs-background": "#1e1e1e"
}, ty = {
  "--app-bar-color": "#272727"
}, iy = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, oy = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, ly = {
  "--menu-background-color": "#272727"
};
function hi() {
  return hi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, hi.apply(this, arguments);
}
const sy = hi({
  "--color-body": "#1e1e1e",
  "--color-text": "#fff",
  "--color-primary": "#4a7afe",
  "--color-info": "#10afef",
  "--color-success": "#10c48f",
  "--color-warning": "#ff8800",
  "--color-danger": "#ef5350",
  "--color-disabled": "#404040",
  "--color-text-disabled": "#757575"
}, Bg, zg, Ag, ny, Ug, Jg, ay, _g, qg, Yg, Ng, Lg, Dg, ry, Rg, Kg, xg, Qg, jg, ey, Hg, Zg, Xg, Fg, Wg, Gg, ty, iy, oy, ly), gi = {
  dark: sy
};
var tn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], Ke = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], qo = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function uy(e) {
  return ["ampm", "24hr"].includes(e);
}
var dy = {
  modelValue: {
    type: String
  },
  elevation: {
    type: Boolean,
    default: !1
  },
  color: {
    type: String
  },
  headerColor: {
    type: String
  },
  format: {
    type: String,
    default: "ampm",
    validator: uy
  },
  allowedTime: {
    type: Object
  },
  min: {
    type: String
  },
  max: {
    type: String
  },
  useSeconds: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  "onUpdate:modelValue": {
    type: Function
  },
  onChange: {
    type: Function
  }
}, Ss = (e, n) => e === "24hr" || n === "am", Ui = (e, n, r) => {
  var a = tn.findIndex((i) => L(i) === L(r)), t = Ss(e, n) ? r : Ke[a];
  return {
    hourStr: t,
    hourNum: L(t)
  };
}, Je = (e) => {
  var [n, r, a] = e.split(":");
  return {
    hour: L(n),
    minute: L(r),
    second: L(a)
  };
}, Cs = (e) => {
  var n, r, {
    time: a,
    format: t,
    ampm: i,
    hour: o,
    max: l,
    min: s,
    disableHour: u
  } = e, {
    hourStr: d,
    hourNum: v
  } = Ui(t, i, o), f = !1, c = !1;
  if (u.includes(d))
    return !0;
  if (l && !s) {
    var {
      hour: p,
      minute: b
    } = Je(l);
    f = p === v && a > b;
  }
  if (!l && s) {
    var {
      hour: y,
      minute: T
    } = Je(s);
    f = y === v && a < T;
  }
  if (l && s) {
    var {
      hour: S,
      minute: h
    } = Je(l), {
      hour: g,
      minute: M
    } = Je(s);
    f = g === v && a < M || S === v && a > h;
  }
  return (n = e.allowedTime) != null && n.minutes && (c = (r = e.allowedTime) == null ? void 0 : r.minutes(a)), f || c;
}, ks = (e) => {
  var n, r, {
    time: a,
    format: t,
    ampm: i,
    hour: o,
    minute: l,
    max: s,
    min: u,
    disableHour: d
  } = e, {
    hourStr: v,
    hourNum: f
  } = Ui(t, i, o), c = !1, p = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: b,
      minute: y,
      second: T
    } = Je(s);
    c = b === f && y < l || y === l && a > T;
  }
  if (!s && u) {
    var {
      hour: S,
      minute: h,
      second: g
    } = Je(u);
    c = S === f && h > l || h === l && a > g;
  }
  if (s && u) {
    var {
      hour: M,
      minute: $,
      second: B
    } = Je(s), {
      hour: C,
      minute: D,
      second: P
    } = Je(u);
    c = M === f && $ < l || C === f && D > l || M === f && $ === l && a > B || C === f && D === l && a < P;
  }
  return (n = e.allowedTime) != null && n.seconds && (p = (r = e.allowedTime) == null ? void 0 : r.seconds(a)), c || p;
}, {
  n: vy,
  classes: fy
} = _("time-picker");
function cy(e, n) {
  return w(), I(
    "div",
    {
      class: m(e.n("clock"))
    },
    [A(
      "div",
      {
        class: m(e.n("clock-hand")),
        style: K(e.handStyle)
      },
      null,
      6
    ), (w(!0), I(
      Oe,
      null,
      Ie(e.timeScales, (r, a) => (w(), I(
        "div",
        {
          class: m(e.classes(e.n("clock-item"), [e.isActive(a, !1), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
          key: r,
          style: K(e.getStyle(a, r, !1))
        },
        J(r),
        7
      ))),
      128
    )), e.format === "24hr" && e.type === "hour" ? (w(), I(
      "div",
      {
        key: 0,
        class: m(e.n("clock-inner")),
        ref: "inner"
      },
      [(w(!0), I(
        Oe,
        null,
        Ie(e.hours24, (r, a) => (w(), I(
          "div",
          {
            class: m(e.classes(e.n("clock-item"), [e.isActive(a, !0), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
            key: r,
            style: K(e.getStyle(a, r, !0))
          },
          J(r),
          7
        ))),
        128
      ))],
      2
    )) : Z("v-if", !0)],
    2
  );
}
const my = ae({
  render: cy,
  name: "Clock",
  props: {
    isInner: {
      type: Boolean,
      required: !0
    },
    rad: {
      type: Number
    },
    format: {
      type: String,
      default: "ampm"
    },
    allowedTime: {
      type: Object
    },
    time: {
      type: Object,
      required: !0
    },
    useSeconds: {
      type: Boolean,
      default: !1
    },
    preventNextUpdate: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: "hour"
    },
    ampm: {
      type: String,
      default: "am"
    },
    color: {
      type: String
    },
    min: {
      type: String
    },
    max: {
      type: String
    }
  },
  emits: ["update", "change-prevent-update"],
  setup(e, n) {
    var {
      emit: r
    } = n, a = E(null), t = E([]), i = E([]), o = W(() => ({
      transform: "rotate(" + L(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), l = W(() => {
      if (e.rad !== void 0) {
        var y = e.rad / 30;
        return y >= 0 ? y : y + 12;
      }
    }), s = W(() => e.type === "hour" ? tn : qo), u = (y, T) => {
      var S;
      y = (S = y) != null ? S : e.type === "minute" ? e.time.minute : e.time.second;
      var h = e.type === "minute" ? Cs : ks, g = {
        time: L(y),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: L(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: t.value
      };
      return T && e.type === "minute" && Reflect.deleteProperty(g, "minute"), h(g);
    }, d = () => {
      if (l.value === void 0)
        return e.color;
      var y = e.isInner ? Ke[l.value] : s.value[l.value];
      return s.value === qo ? u() ? "#bdbdbd" : e.color : f(y) ? "#bdbdbd" : e.color;
    }, v = (y, T) => T ? l.value === y && e.isInner : l.value === y && (!e.isInner || e.type !== "hour"), f = (y) => {
      if (e.type === "hour") {
        if (Ss(e.format, e.ampm))
          return t.value.includes(y);
        var T = tn.findIndex((S) => S === y);
        return i.value.includes(T);
      }
      return u(y, !0);
    }, c = (y, T, S) => {
      var h = 2 * Math.PI / 12 * y - Math.PI / 2, g = 50 * (1 + Math.cos(h)), M = 50 * (1 + Math.sin(h)), $ = () => v(y, S) ? f(T) ? {
        backgroundColor: "#bdbdbd",
        color: "#fff"
      } : {
        backgroundColor: e.color,
        color: void 0
      } : {
        backgroundColor: void 0,
        color: void 0
      }, {
        backgroundColor: B,
        color: C
      } = $();
      return {
        left: g + "%",
        top: M + "%",
        backgroundColor: B,
        color: C
      };
    }, p = () => {
      var {
        width: y,
        height: T
      } = a.value.getBoundingClientRect();
      return {
        width: y,
        height: T
      };
    }, b = () => {
      if (l.value !== void 0) {
        var y = e.ampm === "am" ? tn : Ke;
        return y[l.value].padStart(2, "0");
      }
    };
    return ne([l, () => e.isInner], (y, T) => {
      var [S, h] = y, [g, M] = T, $ = S === g && h === M;
      if (!($ || e.type !== "hour" || l.value === void 0)) {
        var B = h ? Ke[l.value] : b(), C = e.useSeconds ? ":" + e.time.second : "", D = B + ":" + e.time.minute + C;
        e.preventNextUpdate || r("update", D), r("change-prevent-update");
      }
    }), ne(() => e.rad, (y, T) => {
      if (!(e.type === "hour" || y === void 0 || T === void 0)) {
        var S = y / 6 >= 0 ? y / 6 : y / 6 + 60, h = T / 6 >= 0 ? T / 6 : T / 6 + 60;
        if (S !== h) {
          var g, {
            hourStr: M
          } = Ui(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var $ = x().minute(S).format("mm"), B = e.useSeconds ? ":" + e.time.second : "";
            g = M + ":" + $ + B;
          }
          if (e.type === "second") {
            var C = x().second(S).format("ss"), D = e.useSeconds ? ":" + C : "";
            g = M + ":" + e.time.minute + D;
          }
          r("update", g);
        }
      }
    }), ne([() => e.max, () => e.min, () => e.allowedTime], (y) => {
      var [T, S, h] = y;
      if (t.value = [], T && !S) {
        var {
          hour: g
        } = Je(T), M = tn.filter((z) => L(z) > g), $ = Ke.filter((z) => L(z) > g);
        t.value = [...M, ...$];
      }
      if (!T && S) {
        var {
          hour: B
        } = Je(S), C = tn.filter((z) => L(z) < B), D = Ke.filter((z) => L(z) < B);
        t.value = [...C, ...D];
      }
      if (T && S) {
        var {
          hour: P
        } = Je(T), {
          hour: k
        } = Je(S), O = tn.filter((z) => L(z) < k || L(z) > P), R = Ke.filter((z) => L(z) < k || L(z) > P);
        t.value = [...O, ...R];
      }
      if (h != null && h.hours) {
        var {
          hours: Y
        } = h, G = tn.filter((z) => !Y(L(z))), V = Ke.filter((z) => !Y(L(z)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...G, ...V])];
      }
      i.value = t.value.map((z) => Ke.findIndex((X) => z === X)).filter((z) => z >= 0);
    }, {
      immediate: !0
    }), {
      n: vy,
      classes: fy,
      hours24: Ke,
      timeScales: s,
      inner: a,
      handStyle: o,
      disableHour: t,
      isActive: v,
      isDisable: f,
      getSize: p,
      getStyle: c,
      activeItemIndex: l
    };
  }
});
var {
  n: py,
  classes: hy
} = _("time-picker"), gy = (e) => (xo(""), e = e(), _o(), e), yy = /* @__PURE__ */ gy(() => /* @__PURE__ */ A(
  "span",
  null,
  ":",
  -1
)), by = {
  key: 0
};
function wy(e, n) {
  var r = re("clock");
  return w(), I(
    "div",
    {
      class: m(e.classes(e.n(), [e.elevation, "var-elevation--2"])),
      ref: "picker"
    },
    [A(
      "div",
      {
        class: m(e.n("title")),
        style: K({
          background: e.headerColor || e.color
        })
      },
      [A(
        "div",
        {
          class: m(e.n("title-time"))
        },
        [A(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.type === "hour", e.n("title-btn--active")])),
            onClick: n[0] || (n[0] = (a) => e.checkPanel("hour"))
          },
          J(e.time.hour),
          3
        ), yy, A(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
          },
          J(e.time.minute),
          3
        ), e.useSeconds ? (w(), I("span", by, ":")) : Z("v-if", !0), e.useSeconds ? (w(), I(
          "div",
          {
            key: 1,
            class: m(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
            onClick: n[2] || (n[2] = (a) => e.checkPanel("second"))
          },
          J(e.time.second),
          3
        )) : Z("v-if", !0)],
        2
      ), e.format === "ampm" ? (w(), I(
        "div",
        {
          key: 0,
          class: m(e.n("title-ampm"))
        },
        [A(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
            onClick: n[3] || (n[3] = (a) => e.checkAmpm("am"))
          },
          "AM",
          2
        ), A(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.ampm === "pm", e.n("title-btn--active")])),
            onClick: n[4] || (n[4] = (a) => e.checkAmpm("pm"))
          },
          "PM",
          2
        )],
        2
      )) : Z("v-if", !0)],
      6
    ), A(
      "div",
      {
        class: m(e.n("body"))
      },
      [A(
        "div",
        {
          class: m(e.n("clock-container")),
          onTouchstart: n[5] || (n[5] = function() {
            return e.moveHand && e.moveHand(...arguments);
          }),
          onTouchmove: n[6] || (n[6] = function() {
            return e.moveHand && e.moveHand(...arguments);
          }),
          onTouchend: n[7] || (n[7] = function() {
            return e.end && e.end(...arguments);
          }),
          ref: "container"
        },
        [ee(
          je,
          {
            name: e.n() + "-panel-fade"
          },
          {
            default: ce(() => [(w(), me(
              r,
              {
                key: e.type,
                ref: "inner",
                type: e.type,
                ampm: e.ampm,
                color: e.color,
                "is-inner": e.isInner,
                format: e.format,
                "allowed-time": e.allowedTime,
                rad: e.getRad,
                time: e.time,
                "prevent-next-update": e.isPreventNextUpdate,
                "use-seconds": e.useSeconds,
                max: e.max,
                min: e.min,
                onUpdate: e.update,
                onChangePreventUpdate: e.changePreventUpdate
              },
              null,
              8,
              ["type", "ampm", "color", "is-inner", "format", "allowed-time", "rad", "time", "prevent-next-update", "use-seconds", "max", "min", "onUpdate", "onChangePreventUpdate"]
            ))]),
            _: 1
          },
          8,
          ["name"]
        )],
        34
      )],
      2
    )],
    2
  );
}
const fa = ae({
  render: wy,
  name: "VarTimePicker",
  components: {
    Clock: my
  },
  props: dy,
  setup(e) {
    var n = E(null), r = E(null), a = E(null), t = E(!1), i = E(!1), o = E(!1), l = E(!1), s = E(!1), u = E(void 0), d = E(0), v = E(0), f = E("hour"), c = E("am"), p = E(!1), b = E(!1), y = E({
      hour: "00",
      minute: "00",
      second: "00"
    }), T = Ne({
      x: 0,
      y: 0
    }), S = Ne({
      x: [],
      y: []
    }), h = W(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), g = (F) => {
      N(e["onUpdate:modelValue"], F), N(e.onChange, F);
    }, M = (F) => F * 57.29577951308232, $ = (F) => {
      l.value = !1, b.value = !1, f.value = F;
    }, B = (F) => {
      var {
        disableHour: U
      } = a.value, H = tn.findIndex((oe) => L(oe) === L(y.value.hour)), Q = F === "am" ? tn : Ke, ie = [...Q.slice(H), ...Q.slice(0, H)];
      return ie.find((oe, ve) => (i.value = ve !== 0, !U.includes(oe)));
    }, C = (F) => {
      if (!e.readonly) {
        c.value = F;
        var U = B(F);
        if (!!U) {
          var H = e.useSeconds ? ":" + y.value.second : "", Q = U.padStart(2, "0") + ":" + y.value.minute + H;
          g(Q);
        }
      }
    }, D = (F, U) => {
      var H = F >= S.x[0] && F <= S.x[1], Q = U >= S.y[0] && U <= S.y[1];
      return H && Q;
    }, P = (F) => {
      var U = e.format === "24hr" ? "HH" : "hh", {
        hour: H,
        minute: Q,
        second: ie
      } = Je(F);
      return {
        hour: x().hour(H).format(U),
        minute: x().minute(Q).format("mm"),
        second: x().second(ie).format("ss")
      };
    }, k = (F) => {
      var U = F / 30;
      return U >= 0 ? U : U + 12;
    }, O = () => {
      var {
        width: F,
        height: U
      } = a.value.getSize(), H = T.x - F / 2 - 8, Q = T.x + F / 2 + 8, ie = T.y - U / 2 - 8, oe = T.y + U / 2 + 8;
      return {
        rangeXMin: H,
        rangeXMax: Q,
        rangeYMin: ie,
        rangeYMax: oe
      };
    }, R = (F, U, H) => {
      var {
        disableHour: Q
      } = a.value;
      o.value = D(F, U);
      var ie = Math.round(H / 30) * 30 + 90, oe = k(ie), ve = t.value ? tn[oe] : Ke[oe];
      if (Q.includes(ve) || (t.value = e.format === "24hr" ? D(F, U) : !1), t.value === o.value) {
        var be = t.value || c.value === "pm" ? Ke[oe] : tn[oe];
        p.value = Q.includes(be), !p.value && (u.value = ie, l.value = !0);
      }
    }, Y = (F) => {
      var {
        disableHour: U
      } = a.value, H = Math.round(F / 6) * 6 + 90, Q = H / 6 >= 0 ? H / 6 : H / 6 + 60, ie = {
        time: Q,
        format: e.format,
        ampm: c.value,
        hour: y.value.hour,
        max: e.max,
        min: e.min,
        disableHour: U,
        allowedTime: e.allowedTime
      };
      b.value = Cs(ie), !b.value && (d.value = H, s.value = !0);
    }, G = (F) => {
      var {
        disableHour: U
      } = a.value, H = Math.round(F / 6) * 6 + 90, Q = H / 6 >= 0 ? H / 6 : H / 6 + 60, ie = {
        time: Q,
        format: e.format,
        ampm: c.value,
        hour: y.value.hour,
        minute: L(y.value.minute),
        max: e.max,
        min: e.min,
        disableHour: U,
        allowedTime: e.allowedTime
      };
      ks(ie) || (v.value = H);
    }, V = () => {
      var {
        left: F,
        top: U,
        width: H,
        height: Q
      } = n.value.getBoundingClientRect();
      if (T.x = F + H / 2, T.y = U + Q / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: ie,
          rangeXMax: oe,
          rangeYMin: ve,
          rangeYMax: be
        } = O();
        S.x = [ie, oe], S.y = [ve, be];
      }
    }, z = (F) => {
      if (F.preventDefault(), !e.readonly) {
        V();
        var {
          clientX: U,
          clientY: H
        } = F.touches[0], Q = U - T.x, ie = H - T.y, oe = Math.round(M(Math.atan2(ie, Q)));
        f.value === "hour" ? R(U, H, oe) : f.value === "minute" ? Y(oe) : G(oe);
      }
    }, X = () => {
      if (!e.readonly) {
        if (f.value === "hour" && l.value) {
          f.value = "minute";
          return;
        }
        f.value === "minute" && e.useSeconds && s.value && (f.value = "second");
      }
    }, se = () => {
      i.value = !1;
    };
    return ne(() => e.modelValue, (F) => {
      if (F) {
        var {
          hour: U,
          minute: H,
          second: Q
        } = Je(F), ie = x().hour(U).format("hh"), oe = x().hour(U).format("HH"), ve = x().minute(H).format("mm"), be = x().second(Q).format("ss");
        u.value = (ie === "12" ? 0 : L(ie)) * 30, d.value = L(ve) * 6, v.value = L(be) * 6, y.value = P(F), e.format !== "24hr" && (c.value = ("" + U).padStart(2, "0") === oe && Ke.includes(oe) ? "pm" : "am"), t.value = e.format === "24hr" && Ke.includes(oe);
      }
    }, {
      immediate: !0
    }), {
      n: py,
      classes: hy,
      getRad: h,
      time: y,
      container: n,
      inner: a,
      picker: r,
      isInner: t,
      type: f,
      ampm: c,
      isPreventNextUpdate: i,
      moveHand: z,
      checkPanel: $,
      checkAmpm: C,
      end: X,
      update: g,
      changePreventUpdate: se
    };
  }
});
fa.install = function(e) {
  e.component(fa.name, fa);
};
var Sy = {
  modelValue: {
    type: Array,
    default: () => []
  },
  accept: {
    type: String,
    default: "image/*"
  },
  capture: {
    type: [String, Boolean],
    default: void 0
  },
  multiple: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  removable: {
    type: Boolean,
    default: !0
  },
  maxlength: {
    type: [Number, String]
  },
  maxsize: {
    type: [Number, String]
  },
  previewed: {
    type: Boolean,
    default: !0
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange", "onRemove"]
  },
  rules: {
    type: Array
  },
  hideList: {
    type: Boolean,
    default: !1
  },
  onBeforeRead: {
    type: Function
  },
  onAfterRead: {
    type: Function
  },
  onBeforeRemove: {
    type: Function
  },
  onRemove: {
    type: Function
  },
  onOversize: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
};
function Ko(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Xo(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        Ko(i, a, t, o, l, "next", s);
      }
      function l(s) {
        Ko(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Cy,
  classes: ky
} = _("uploader"), $y = 0, Ty = ["onClick"], Oy = ["onClick"], Py = ["src", "alt"], Ey = ["multiple", "accept", "capture", "disabled"], Vy = ["src"];
function My(e, n) {
  var r = re("var-icon"), a = re("var-form-details"), t = re("var-popup"), i = Ge("ripple");
  return w(), I(
    "div",
    {
      class: m(e.classes(e.n(), "var--box"))
    },
    [A(
      "div",
      {
        class: m(e.n("file-list"))
      },
      [(w(!0), I(
        Oe,
        null,
        Ie(e.files, (o) => Ce((w(), I(
          "div",
          {
            class: m(e.classes(e.n("file"), "var-elevation--2", [o.state === "loading", e.n("--loading")])),
            key: o.id,
            onClick: (l) => e.preview(o)
          },
          [A(
            "div",
            {
              class: m(e.n("file-name"))
            },
            J(o.name || o.url),
            3
          ), e.removable ? (w(), I(
            "div",
            {
              key: 0,
              class: m(e.n("file-close")),
              onClick: Vn((l) => e.handleRemove(o), ["stop"])
            },
            [ee(
              r,
              {
                class: m(e.n("file-close-icon")),
                "var-uploader-cover": "",
                name: "delete"
              },
              null,
              8,
              ["class"]
            )],
            10,
            Oy
          )) : Z("v-if", !0), o.cover ? (w(), I(
            "img",
            {
              key: 1,
              class: m(e.n("file-cover")),
              style: K({
                objectFit: o.fit
              }),
              src: o.cover,
              alt: o.name
            },
            null,
            14,
            Py
          )) : Z("v-if", !0), A(
            "div",
            {
              class: m(e.classes(e.n("file-indicator"), [o.state === "success", e.n("--success")], [o.state === "error", e.n("--error")]))
            },
            null,
            2
          )],
          10,
          Ty
        )), [[i, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
      )), !e.maxlength || e.modelValue.length < e.maxlength ? Ce((w(), I(
        "div",
        {
          key: 0,
          class: m(e.classes([!e.$slots.default, e.n("action") + " var-elevation--2"], [e.disabled || e.formDisabled, e.n("--disabled")])),
          onClick: n[1] || (n[1] = function() {
            return e.triggerAction && e.triggerAction(...arguments);
          })
        },
        [A(
          "input",
          {
            ref: "input",
            class: m(e.n("action-input")),
            type: "file",
            multiple: e.multiple,
            accept: e.accept,
            capture: e.capture,
            disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly,
            onChange: n[0] || (n[0] = function() {
              return e.handleChange && e.handleChange(...arguments);
            })
          },
          null,
          42,
          Ey
        ), q(e.$slots, "default", {}, () => [ee(
          r,
          {
            class: m(e.n("action-icon")),
            "var-uploader-cover": "",
            name: "plus"
          },
          null,
          8,
          ["class"]
        )])],
        2
      )), [[i, {
        disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple || e.$slots.default
      }]]) : Z("v-if", !0)],
      2
    ), ee(
      a,
      {
        "error-message": e.errorMessage,
        "maxlength-text": e.maxlengthText
      },
      null,
      8,
      ["error-message", "maxlength-text"]
    ), ee(
      t,
      {
        class: m(e.n("preview")),
        "var-uploader-cover": "",
        position: "center",
        show: e.showPreview,
        "onUpdate:show": n[2] || (n[2] = (o) => e.showPreview = o),
        onClosed: n[3] || (n[3] = (o) => e.currentPreview = null)
      },
      {
        default: ce(() => {
          var o, l;
          return [e.currentPreview && e.isHTMLSupportVideo((o = e.currentPreview) == null ? void 0 : o.url) ? (w(), I(
            "video",
            {
              key: 0,
              class: m(e.n("preview-video")),
              playsinline: "true",
              "webkit-playsinline": "true",
              "x5-playsinline": "true",
              "x5-video-player-type": "h5",
              "x5-video-player-fullscreen": "false",
              controls: "",
              src: (l = e.currentPreview) == null ? void 0 : l.url
            },
            null,
            10,
            Vy
          )) : Z("v-if", !0)];
        }),
        _: 1
      },
      8,
      ["class", "show"]
    )],
    2
  );
}
const ca = ae({
  render: My,
  name: "VarUploader",
  directives: {
    Ripple: Le
  },
  components: {
    VarIcon: $e,
    VarPopup: mn,
    VarFormDetails: We
  },
  props: Sy,
  setup(e) {
    var n = E(null), r = E(!1), a = E(null), t = W(() => {
      var {
        maxlength: Y,
        modelValue: {
          length: G
        }
      } = e;
      return Qe(Y) ? G + " / " + Y : "";
    }), {
      form: i,
      bindForm: o
    } = wn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      resetValidation: d
    } = bn(), v = W(() => {
      var {
        modelValue: Y,
        hideList: G
      } = e;
      return G ? [] : Y;
    }), f = () => {
      n.value.click();
    }, c = (Y) => {
      var {
        disabled: G,
        readonly: V,
        previewed: z
      } = e;
      if (!(i != null && i.disabled.value || i != null && i.readonly.value || G || V || !z)) {
        var {
          url: X
        } = Y;
        if (_e(X) && Qi(X)) {
          Jn(X);
          return;
        }
        _e(X) && xi(X) && (a.value = Y, r.value = !0);
      }
    }, p = (Y) => ({
      id: $y++,
      url: "",
      cover: "",
      name: Y.name,
      file: Y
    }), b = (Y) => {
      var G = Y.target, {
        files: V
      } = G;
      return Array.from(V);
    }, y = (Y) => new Promise((G) => {
      var V = new FileReader();
      V.onload = () => {
        var z = V.result;
        Y.file.type.startsWith("image") && (Y.cover = z), Y.url = z, G(Y);
      }, V.readAsDataURL(Y.file);
    }), T = (Y) => Y.map(y), S = (Y) => {
      var {
        onBeforeRead: G
      } = e;
      return Y.map((V) => new Promise((z) => {
        var X = G ? G(Ne(V)) : !0;
        Promise.resolve(X).then((se) => z({
          valid: se,
          varFile: V
        }));
      }));
    }, h = /* @__PURE__ */ function() {
      var Y = Xo(function* (G) {
        var {
          maxsize: V,
          maxlength: z,
          modelValue: X,
          onOversize: se,
          onAfterRead: F,
          readonly: U,
          disabled: H
        } = e;
        if (!(i != null && i.disabled.value || i != null && i.readonly.value || H || U)) {
          var Q = (De) => De.filter((Sn) => Sn.file.size > L(V) ? (N(se, Ne(Sn)), !1) : !0), ie = (De) => {
            var Sn = Math.min(De.length, L(z) - X.length);
            return De.slice(0, Sn);
          }, oe = b(G), ve = oe.map(p);
          ve = V != null ? Q(ve) : ve, ve = z != null ? ie(ve) : ve;
          var be = yield Promise.all(T(ve)), nn = yield Promise.all(S(be)), rn = nn.filter((De) => {
            var {
              valid: Sn
            } = De;
            return Sn;
          }).map((De) => {
            var {
              varFile: Sn
            } = De;
            return Sn;
          });
          N(e["onUpdate:modelValue"], [...X, ...rn]), G.target.value = "", rn.forEach((De) => N(F, Ne(De)));
        }
      });
      return function(V) {
        return Y.apply(this, arguments);
      };
    }(), g = /* @__PURE__ */ function() {
      var Y = Xo(function* (G) {
        var {
          disabled: V,
          readonly: z,
          modelValue: X,
          onBeforeRemove: se,
          onRemove: F
        } = e;
        if (!(i != null && i.disabled.value || i != null && i.readonly.value || V || z) && !(se && !(yield se(G)))) {
          var U = X.filter((H) => H !== G);
          N(F, G), D("onRemove"), N(e["onUpdate:modelValue"], U);
        }
      });
      return function(V) {
        return Y.apply(this, arguments);
      };
    }(), M = () => e.modelValue.filter((Y) => Y.state === "success"), $ = () => e.modelValue.filter((Y) => Y.state === "error"), B = () => e.modelValue.filter((Y) => Y.state === "loading"), C = {
      getSuccess: M,
      getError: $,
      getLoading: B
    }, D = (Y) => {
      Pe(() => {
        var {
          validateTrigger: G,
          rules: V,
          modelValue: z
        } = e;
        s(G, Y, V, z, C);
      });
    }, P = !1, k = () => u(e.rules, e.modelValue, C), O = () => {
      P = !0, N(e["onUpdate:modelValue"], []), d();
    }, R = {
      validate: k,
      resetValidation: d,
      reset: O
    };
    return N(o, R), ne(() => e.modelValue, () => {
      !P && D("onChange"), P = !1;
    }, {
      deep: !0
    }), {
      n: Cy,
      classes: ky,
      input: n,
      files: v,
      showPreview: r,
      currentPreview: a,
      errorMessage: l,
      maxlengthText: t,
      isHTMLSupportVideo: xi,
      isHTMLSupportImage: Qi,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      preview: c,
      triggerAction: f,
      handleChange: h,
      handleRemove: g,
      getSuccess: M,
      getError: $,
      getLoading: B,
      validate: k,
      resetValidation: d,
      reset: O
    };
  }
});
ca.install = function(e) {
  e.component(ca.name, ca);
};
function Iy(e) {
  fr.install && e.use(fr), Or.install && e.use(Or), Pr.install && e.use(Pr), ar.install && e.use(ar), Er.install && e.use(Er), Vr.install && e.use(Vr), xe.install && e.use(xe), Mr.install && e.use(Mr), tr.install && e.use(tr), ir.install && e.use(ir), Ir.install && e.use(Ir), or.install && e.use(or), Nr.install && e.use(Nr), Dr.install && e.use(Dr), Br.install && e.use(Br), on.install && e.use(on), Ar.install && e.use(Ar), zr.install && e.use(zr), Fr.install && e.use(Fr), cr.install && e.use(cr), Lr.install && e.use(Lr), Rr.install && e.use(Rr), We.install && e.use(We), $e.install && e.use($e), Ur.install && e.use(Ur), Jn.install && e.use(Jn), Yr.install && e.use(Yr), Wr.install && e.use(Wr), dr.install && e.use(dr), it.install && e.use(it), Hr.install && e.use(Hr), Cn.install && e.use(Cn), Ut.install && e.use(Ut), Xn.install && e.use(Xn), jr.install && e.use(jr), Gr.install && e.use(Gr), hr.install && e.use(hr), mn.install && e.use(mn), qr.install && e.use(qr), Kr.install && e.use(Kr), Xr.install && e.use(Xr), Zr.install && e.use(Zr), Jr.install && e.use(Jr), Le.install && e.use(Le), Qr.install && e.use(Qr), xr.install && e.use(xr), _r.install && e.use(_r), ea.install && e.use(ea), In.install && e.use(In), ra.install && e.use(ra), aa.install && e.use(aa), ta.install && e.use(ta), qn.install && e.use(qn), Da.install && e.use(Da), jn.install && e.use(jn), Gn.install && e.use(Gn), oa.install && e.use(oa), la.install && e.use(la), sa.install && e.use(sa), ua.install && e.use(ua), da.install && e.use(da), va.install && e.use(va), gi.install && e.use(gi), fa.install && e.use(fa), ca.install && e.use(ca);
}
const Dy = {
  install: Iy,
  ActionSheet: fr,
  AppBar: Or,
  BackTop: Pr,
  Badge: ar,
  BottomNavigation: Er,
  BottomNavigationItem: Vr,
  Button: xe,
  Card: Mr,
  Cell: tr,
  Checkbox: ir,
  CheckboxGroup: Ir,
  Chip: or,
  Col: Nr,
  Collapse: Dr,
  CollapseItem: Br,
  Context: on,
  Countdown: Ar,
  Counter: zr,
  DatePicker: Fr,
  Dialog: cr,
  Divider: Lr,
  Form: Rr,
  FormDetails: We,
  Icon: $e,
  Image: Ur,
  ImagePreview: Jn,
  IndexAnchor: Yr,
  IndexBar: Wr,
  Input: dr,
  Lazy: it,
  List: Hr,
  Loading: Cn,
  Locale: Ut,
  Menu: Xn,
  Option: jr,
  Pagination: Gr,
  Picker: hr,
  Popup: mn,
  Progress: qr,
  PullRefresh: Kr,
  Radio: Xr,
  RadioGroup: Zr,
  Rate: Jr,
  Ripple: Le,
  Row: Qr,
  Select: xr,
  Skeleton: _r,
  Slider: ea,
  Snackbar: In,
  Space: ra,
  Step: aa,
  Steps: ta,
  Sticky: qn,
  StyleProvider: Da,
  Swipe: jn,
  SwipeItem: Gn,
  Switch: oa,
  Tab: la,
  TabItem: sa,
  Table: ua,
  Tabs: da,
  TabsItems: va,
  Themes: gi,
  TimePicker: fa,
  Uploader: ca
};
export {
  fr as ActionSheet,
  Or as AppBar,
  Pr as BackTop,
  ar as Badge,
  Er as BottomNavigation,
  Vr as BottomNavigationItem,
  xe as Button,
  Mr as Card,
  tr as Cell,
  ir as Checkbox,
  Ir as CheckboxGroup,
  or as Chip,
  Nr as Col,
  Dr as Collapse,
  Br as CollapseItem,
  on as Context,
  Ar as Countdown,
  zr as Counter,
  Fr as DatePicker,
  cr as Dialog,
  Lr as Divider,
  Rr as Form,
  We as FormDetails,
  $e as Icon,
  Ur as Image,
  Jn as ImagePreview,
  Yr as IndexAnchor,
  Wr as IndexBar,
  dr as Input,
  it as Lazy,
  Hr as List,
  Cn as Loading,
  Ut as Locale,
  Xn as Menu,
  jr as Option,
  Gr as Pagination,
  hr as Picker,
  mn as Popup,
  qr as Progress,
  Kr as PullRefresh,
  Xr as Radio,
  Zr as RadioGroup,
  Jr as Rate,
  Le as Ripple,
  Qr as Row,
  xr as Select,
  _r as Skeleton,
  ea as Slider,
  In as Snackbar,
  ra as Space,
  aa as Step,
  ta as Steps,
  qn as Sticky,
  Da as StyleProvider,
  jn as Swipe,
  Gn as SwipeItem,
  oa as Switch,
  la as Tab,
  sa as TabItem,
  ua as Table,
  da as Tabs,
  va as TabsItems,
  gi as Themes,
  fa as TimePicker,
  ca as Uploader,
  Dy as default,
  Iy as install
};
