! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Sweetalert2 = t()
}(this, function() {
    "use strict";
    const l = Object.freeze({
            cancel: "cancel",
            backdrop: "backdrop",
            close: "close",
            esc: "esc",
            timer: "timer"
        }),
        t = "SweetAlert2:",
        o = e => e.charAt(0).toUpperCase() + e.slice(1),
        a = e => Array.prototype.slice.call(e),
        s = e => {
            console.warn("".concat(t, " ").concat("object" == typeof e ? e.join(" ") : e))
        },
        r = e => {
            console.error("".concat(t, " ").concat(e))
        },
        n = [],
        i = (e, t) => {
            t = '"'.concat(e, '" is deprecated and will be removed in the next major release. Please use "').concat(t, '" instead.'), n.includes(t) || (n.push(t), s(t))
        },
        c = (e, t) => {
            "function" == typeof e && e(t)
        },
        u = e => "function" == typeof e ? e() : e,
        d = e => e && "function" == typeof e.toPromise,
        p = e => d(e) ? e.toPromise() : Promise.resolve(e),
        m = e => e && Promise.resolve(e) === e,
        h = e => e instanceof Element || (e => "object" == typeof e && e.jquery)(e);
    var e = e => {
        const t = {};
        for (const n in e) t[e[n]] = "swal2-" + e[n];
        return t
    };
    const g = e(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error"]),
        b = e(["success", "warning", "info", "question", "error"]),
        f = () => document.body.querySelector(".".concat(g.container)),
        y = e => {
            const t = f();
            return t ? t.querySelector(e) : null
        },
        v = e => y(".".concat(e)),
        w = () => v(g.popup),
        C = () => v(g.icon),
        k = () => v(g.title),
        A = () => v(g["html-container"]),
        B = () => v(g.image),
        x = () => v(g["progress-steps"]),
        P = () => v(g["validation-message"]),
        E = () => y(".".concat(g.actions, " .").concat(g.confirm)),
        S = () => y(".".concat(g.actions, " .").concat(g.deny));
    const T = () => y(".".concat(g.loader)),
        L = () => y(".".concat(g.actions, " .").concat(g.cancel)),
        O = () => v(g.actions),
        j = () => v(g.footer),
        I = () => v(g["timer-progress-bar"]),
        M = () => v(g.close),
        D = () => {
            const e = a(w().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((e, t) => (e = parseInt(e.getAttribute("tabindex")), (t = parseInt(t.getAttribute("tabindex"))) < e ? 1 : e < t ? -1 : 0));
            var t = a(w().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter(e => "-1" !== e.getAttribute("tabindex"));
            return (t => {
                const n = [];
                for (let e = 0; e < t.length; e++) - 1 === n.indexOf(t[e]) && n.push(t[e]);
                return n
            })(e.concat(t)).filter(e => Q(e))
        },
        q = () => !H() && !document.body.classList.contains(g["no-backdrop"]),
        H = () => document.body.classList.contains(g["toast-shown"]);
    const V = {
            previousBodyPadding: null
        },
        N = (t, e) => {
            if (t.textContent = "", e) {
                const n = new DOMParser,
                    o = n.parseFromString(e, "text/html");
                a(o.querySelector("head").childNodes).forEach(e => {
                    t.appendChild(e)
                }), a(o.querySelector("body").childNodes).forEach(e => {
                    t.appendChild(e)
                })
            }
        },
        U = (t, e) => {
            if (!e) return !1;
            var n = e.split(/\s+/);
            for (let e = 0; e < n.length; e++)
                if (!t.classList.contains(n[e])) return !1;
            return !0
        },
        F = (e, t, n) => {
            var o, i;
            if (o = e, i = t, a(o.classList).forEach(e => {
                    Object.values(g).includes(e) || Object.values(b).includes(e) || Object.values(i.showClass).includes(e) || o.classList.remove(e)
                }), t.customClass && t.customClass[n]) {
                if ("string" != typeof t.customClass[n] && !t.customClass[n].forEach) return s("Invalid type of customClass.".concat(n, '! Expected string or iterable object, got "').concat(typeof t.customClass[n], '"'));
                _(e, t.customClass[n])
            }
        },
        R = (e, t) => {
            if (!t) return null;
            switch (t) {
                case "select":
                case "textarea":
                case "file":
                    return Y(e, g[t]);
                case "checkbox":
                    return e.querySelector(".".concat(g.checkbox, " input"));
                case "radio":
                    return e.querySelector(".".concat(g.radio, " input:checked")) || e.querySelector(".".concat(g.radio, " input:first-child"));
                case "range":
                    return e.querySelector(".".concat(g.range, " input"));
                default:
                    return Y(e, g.input)
            }
        },
        z = e => {
            var t;
            e.focus(), "file" !== e.type && (t = e.value, e.value = "", e.value = t)
        },
        W = (e, t, n) => {
            e && t && (t = "string" == typeof t ? t.split(/\s+/).filter(Boolean) : t).forEach(t => {
                e.forEach ? e.forEach(e => {
                    n ? e.classList.add(t) : e.classList.remove(t)
                }) : n ? e.classList.add(t) : e.classList.remove(t)
            })
        },
        _ = (e, t) => {
            W(e, t, !0)
        },
        K = (e, t) => {
            W(e, t, !1)
        },
        Y = (t, n) => {
            for (let e = 0; e < t.childNodes.length; e++)
                if (U(t.childNodes[e], n)) return t.childNodes[e]
        },
        Z = (e, t, n) => {
            (n = n === "".concat(parseInt(n)) ? parseInt(n) : n) || 0 === parseInt(n) ? e.style[t] = "number" == typeof n ? "".concat(n, "px") : n : e.style.removeProperty(t)
        },
        J = (e, t = "flex") => {
            e.style.display = t
        },
        $ = e => {
            e.style.display = "none"
        },
        X = (e, t, n, o) => {
            const i = e.querySelector(t);
            i && (i.style[n] = o)
        },
        G = (e, t, n) => {
            t ? J(e, n) : $(e)
        },
        Q = e => !(!e || !(e.offsetWidth || e.offsetHeight || e.getClientRects().length)),
        ee = () => !Q(E()) && !Q(S()) && !Q(L()),
        te = e => !!(e.scrollHeight > e.clientHeight),
        ne = e => {
            const t = window.getComputedStyle(e);
            var n = parseFloat(t.getPropertyValue("animation-duration") || "0"),
                e = parseFloat(t.getPropertyValue("transition-duration") || "0");
            return 0 < n || 0 < e
        },
        oe = (e, t = !1) => {
            const n = I();
            Q(n) && (t && (n.style.transition = "none", n.style.width = "100%"), setTimeout(() => {
                n.style.transition = "width ".concat(e / 1e3, "s linear"), n.style.width = "0%"
            }, 10))
        },
        ie = () => "undefined" == typeof window || "undefined" == typeof document,
        ae = '\n <div aria-labelledby="'.concat(g.title, '" aria-describedby="').concat(g["html-container"], '" class="').concat(g.popup, '" tabindex="-1">\n   <button type="button" class="').concat(g.close, '"></button>\n   <ul class="').concat(g["progress-steps"], '"></ul>\n   <div class="').concat(g.icon, '"></div>\n   <img class="').concat(g.image, '" />\n   <h2 class="').concat(g.title, '" id="').concat(g.title, '"></h2>\n   <div class="').concat(g["html-container"], '"></div>\n   <input class="').concat(g.input, '" />\n   <input type="file" class="').concat(g.file, '" />\n   <div class="').concat(g.range, '">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="').concat(g.select, '"></select>\n   <div class="').concat(g.radio, '"></div>\n   <label for="').concat(g.checkbox, '" class="').concat(g.checkbox, '">\n     <input type="checkbox" />\n     <span class="').concat(g.label, '"></span>\n   </label>\n   <textarea class="').concat(g.textarea, '"></textarea>\n   <div class="').concat(g["validation-message"], '" id="').concat(g["validation-message"], '"></div>\n   <div class="').concat(g.actions, '">\n     <div class="').concat(g.loader, '"></div>\n     <button type="button" class="').concat(g.confirm, '"></button>\n     <button type="button" class="').concat(g.deny, '"></button>\n     <button type="button" class="').concat(g.cancel, '"></button>\n   </div>\n   <div class="').concat(g.footer, '"></div>\n   <div class="').concat(g["timer-progress-bar-container"], '">\n     <div class="').concat(g["timer-progress-bar"], '"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, ""),
        se = () => {
            ln.isVisible() && ln.resetValidationMessage()
        },
        re = e => {
            var t = (() => {
                const e = f();
                return !!e && (e.remove(), K([document.documentElement, document.body], [g["no-backdrop"], g["toast-shown"], g["has-column"]]), !0)
            })();
            if (ie()) r("SweetAlert2 requires document to initialize");
            else {
                const n = document.createElement("div");
                n.className = g.container, t && _(n, g["no-transition"]), N(n, ae);
                const o = "string" == typeof(t = e.target) ? document.querySelector(t) : t;
                o.appendChild(n), (e => {
                    const t = w();
                    t.setAttribute("role", e.toast ? "alert" : "dialog"), t.setAttribute("aria-live", e.toast ? "polite" : "assertive"), e.toast || t.setAttribute("aria-modal", "true")
                })(e), e = o, "rtl" === window.getComputedStyle(e).direction && _(f(), g.rtl), (() => {
                    const e = w(),
                        t = Y(e, g.input),
                        n = Y(e, g.file),
                        o = e.querySelector(".".concat(g.range, " input")),
                        i = e.querySelector(".".concat(g.range, " output")),
                        a = Y(e, g.select),
                        s = e.querySelector(".".concat(g.checkbox, " input")),
                        r = Y(e, g.textarea);
                    t.oninput = se, n.onchange = se, a.onchange = se, s.onchange = se, r.oninput = se, o.oninput = () => {
                        se(), i.value = o.value
                    }, o.onchange = () => {
                        se(), o.nextSibling.value = o.value
                    }
                })()
            }
        },
        ce = (e, t) => {
            e instanceof HTMLElement ? t.appendChild(e) : "object" == typeof e ? le(e, t) : e && N(t, e)
        },
        le = (e, t) => {
            e.jquery ? ue(t, e) : N(t, e.toString())
        },
        ue = (t, n) => {
            if (t.textContent = "", 0 in n)
                for (let e = 0; e in n; e++) t.appendChild(n[e].cloneNode(!0));
            else t.appendChild(n.cloneNode(!0))
        },
        de = (() => {
            if (ie()) return !1;
            var e = document.createElement("div"),
                t = {
                    WebkitAnimation: "webkitAnimationEnd",
                    OAnimation: "oAnimationEnd oanimationend",
                    animation: "animationend"
                };
            for (const n in t)
                if (Object.prototype.hasOwnProperty.call(t, n) && void 0 !== e.style[n]) return t[n];
            return !1
        })(),
        pe = (e, t) => {
            const n = O();
            var o = T(),
                i = E(),
                a = S(),
                s = L();
            t.showConfirmButton || t.showDenyButton || t.showCancelButton || $(n), F(n, t, "actions"), me(i, "confirm", t), me(a, "deny", t), me(s, "cancel", t),
                function(e, t, n, o) {
                    if (!o.buttonsStyling) return K([e, t, n], g.styled);
                    _([e, t, n], g.styled), o.confirmButtonColor && (e.style.backgroundColor = o.confirmButtonColor, _(e, g["default-outline"]));
                    o.denyButtonColor && (t.style.backgroundColor = o.denyButtonColor, _(t, g["default-outline"]));
                    o.cancelButtonColor && (n.style.backgroundColor = o.cancelButtonColor, _(n, g["default-outline"]))
                }(i, a, s, t), t.reverseButtons && (n.insertBefore(s, o), n.insertBefore(a, o), n.insertBefore(i, o)), N(o, t.loaderHtml), F(o, t, "loader")
        };

    function me(e, t, n) {
        G(e, n["show".concat(o(t), "Button")], "inline-block"), N(e, n["".concat(t, "ButtonText")]), e.setAttribute("aria-label", n["".concat(t, "ButtonAriaLabel")]), e.className = g[t], F(e, n, "".concat(t, "Button")), _(e, n["".concat(t, "ButtonClass")])
    }
    const he = (e, t) => {
        var n, o, i = f();
        i && (o = i, "string" == typeof(n = t.backdrop) ? o.style.background = n : n || _([document.documentElement, document.body], g["no-backdrop"]), !t.backdrop && t.allowOutsideClick && s('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'), o = i, (n = t.position) in g ? _(o, g[n]) : (s('The "position" parameter is not valid, defaulting to "center"'), _(o, g.center)), n = i, !(o = t.grow) || "string" != typeof o || (o = "grow-".concat(o)) in g && _(n, g[o]), F(i, t, "container"))
    };
    var ge = {
        promise: new WeakMap,
        innerParams: new WeakMap,
        domCache: new WeakMap
    };
    const be = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
        fe = e => {
            if (!Ae[e.input]) return r('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(e.input, '"'));
            var t = ke(e.input);
            const n = Ae[e.input](t, e);
            J(n), setTimeout(() => {
                z(n)
            })
        },
        ye = (e, t) => {
            const n = R(w(), e);
            if (n) {
                (t => {
                    for (let e = 0; e < t.attributes.length; e++) {
                        var n = t.attributes[e].name;
                        ["type", "value", "style"].includes(n) || t.removeAttribute(n)
                    }
                })(n);
                for (const o in t) n.setAttribute(o, t[o])
            }
        },
        ve = e => {
            var t = ke(e.input);
            e.customClass && _(t, e.customClass.input)
        },
        we = (e, t) => {
            e.placeholder && !t.inputPlaceholder || (e.placeholder = t.inputPlaceholder)
        },
        Ce = (e, t, n) => {
            if (n.inputLabel) {
                e.id = g.input;
                const i = document.createElement("label");
                var o = g["input-label"];
                i.setAttribute("for", e.id), i.className = o, _(i, n.customClass.inputLabel), i.innerText = n.inputLabel, t.insertAdjacentElement("beforebegin", i)
            }
        },
        ke = e => {
            e = g[e] || g.input;
            return Y(w(), e)
        },
        Ae = {};
    Ae.text = Ae.email = Ae.password = Ae.number = Ae.tel = Ae.url = (e, t) => ("string" == typeof t.inputValue || "number" == typeof t.inputValue ? e.value = t.inputValue : m(t.inputValue) || s('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof t.inputValue, '"')), Ce(e, e, t), we(e, t), e.type = t.input, e), Ae.file = (e, t) => (Ce(e, e, t), we(e, t), e), Ae.range = (e, t) => {
        const n = e.querySelector("input"),
            o = e.querySelector("output");
        return n.value = t.inputValue, n.type = t.input, o.value = t.inputValue, Ce(n, e, t), e
    }, Ae.select = (e, t) => {
        if (e.textContent = "", t.inputPlaceholder) {
            const n = document.createElement("option");
            N(n, t.inputPlaceholder), n.value = "", n.disabled = !0, n.selected = !0, e.appendChild(n)
        }
        return Ce(e, e, t), e
    }, Ae.radio = e => (e.textContent = "", e), Ae.checkbox = (e, t) => {
        const n = R(w(), "checkbox");
        n.value = 1, n.id = g.checkbox, n.checked = Boolean(t.inputValue);
        var o = e.querySelector("span");
        return N(o, t.inputPlaceholder), e
    }, Ae.textarea = (t, e) => {
        t.value = e.inputValue, we(t, e), Ce(t, t, e);
        if ("MutationObserver" in window) {
            const n = parseInt(window.getComputedStyle(w()).width);
            new MutationObserver(() => {
                var e, e = t.offsetWidth + (e = t, parseInt(window.getComputedStyle(e).marginLeft) + parseInt(window.getComputedStyle(e).marginRight));
                e > n ? w().style.width = "".concat(e, "px") : w().style.width = null
            }).observe(t, {
                attributes: !0,
                attributeFilter: ["style"]
            })
        }
        return t
    };
    const Be = (e, t) => {
            const n = A();
            F(n, t, "htmlContainer"), t.html ? (ce(t.html, n), J(n, "block")) : t.text ? (n.textContent = t.text, J(n, "block")) : $(n), ((e, o) => {
                const i = w();
                e = ge.innerParams.get(e);
                const a = !e || o.input !== e.input;
                be.forEach(e => {
                    var t = g[e];
                    const n = Y(i, t);
                    ye(e, o.inputAttributes), n.className = t, a && $(n)
                }), o.input && (a && fe(o), ve(o))
            })(e, t)
        },
        xe = (e, t) => {
            for (const n in b) t.icon !== n && K(e, b[n]);
            _(e, b[t.icon]), Se(e, t), Pe(), F(e, t, "icon")
        },
        Pe = () => {
            const e = w();
            var t = window.getComputedStyle(e).getPropertyValue("background-color");
            const n = e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
            for (let e = 0; e < n.length; e++) n[e].style.backgroundColor = t
        },
        Ee = (e, t) => {
            var n;
            e.textContent = "", t.iconHtml ? N(e, Te(t.iconHtml)) : "success" === t.icon ? N(e, '\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    ') : "error" === t.icon ? N(e, '\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    ') : (n = {
                question: "?",
                warning: "!",
                info: "i"
            }, N(e, Te(n[t.icon])))
        },
        Se = (e, t) => {
            if (t.iconColor) {
                e.style.color = t.iconColor, e.style.borderColor = t.iconColor;
                for (const n of [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"]) X(e, n, "backgroundColor", t.iconColor);
                X(e, ".swal2-success-ring", "borderColor", t.iconColor)
            }
        },
        Te = e => '<div class="'.concat(g["icon-content"], '">').concat(e, "</div>"),
        Le = (e, o) => {
            const i = x();
            if (!o.progressSteps || 0 === o.progressSteps.length) return $(i);
            J(i), i.textContent = "", o.currentProgressStep >= o.progressSteps.length && s("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), o.progressSteps.forEach((e, t) => {
                var n, e = (n = e, e = document.createElement("li"), _(e, g["progress-step"]), N(e, n), e);
                i.appendChild(e), t === o.currentProgressStep && _(e, g["active-progress-step"]), t !== o.progressSteps.length - 1 && (t = (e => {
                    const t = document.createElement("li");
                    return _(t, g["progress-step-line"]), e.progressStepsDistance && (t.style.width = e.progressStepsDistance), t
                })(o), i.appendChild(t))
            })
        },
        Oe = (e, t) => {
            e.className = "".concat(g.popup, " ").concat(Q(e) ? t.showClass.popup : ""), t.toast ? (_([document.documentElement, document.body], g["toast-shown"]), _(e, g.toast)) : _(e, g.modal), F(e, t, "popup"), "string" == typeof t.customClass && _(e, t.customClass), t.icon && _(e, g["icon-".concat(t.icon)])
        },
        je = (e, t) => {
            var n, o, i;
            (e => {
                var t = f();
                const n = w();
                e.toast ? (Z(t, "width", e.width), n.style.width = "100%", n.insertBefore(T(), C())) : Z(n, "width", e.width), Z(n, "padding", e.padding), e.background && (n.style.background = e.background), $(P()), Oe(n, e)
            })(t), he(0, t), Le(0, t), i = e, n = t, o = ge.innerParams.get(i), i = C(), o && n.icon === o.icon ? (Ee(i, n), xe(i, n)) : n.icon || n.iconHtml ? n.icon && -1 === Object.keys(b).indexOf(n.icon) ? (r('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(n.icon, '"')), $(i)) : (J(i), Ee(i, n), xe(i, n), _(i, n.showClass.icon)) : $(i), (e => {
                const t = B();
                if (!e.imageUrl) return $(t);
                J(t, ""), t.setAttribute("src", e.imageUrl), t.setAttribute("alt", e.imageAlt), Z(t, "width", e.imageWidth), Z(t, "height", e.imageHeight), t.className = g.image, F(t, e, "image")
            })(t), (e => {
                const t = k();
                G(t, e.title || e.titleText, "block"), e.title && ce(e.title, t), e.titleText && (t.innerText = e.titleText), F(t, e, "title")
            })(t), (e => {
                const t = M();
                N(t, e.closeButtonHtml), F(t, e, "closeButton"), G(t, e.showCloseButton), t.setAttribute("aria-label", e.closeButtonAriaLabel)
            })(t), Be(e, t), pe(0, t), i = t, e = j(), G(e, i.footer), i.footer && ce(i.footer, e), F(e, i, "footer"), c(t.didRender, w())
        };
    const Ie = () => E() && E().click();
    const Me = e => {
            let t = w();
            t || ln.fire(), t = w();
            var n = T();
            H() ? $(C()) : De(t, e), J(n), t.setAttribute("data-loading", !0), t.setAttribute("aria-busy", !0), t.focus()
        },
        De = (e, t) => {
            var n = O();
            const o = T();
            !t && Q(E()) && (t = E()), J(n), t && ($(t), o.setAttribute("data-button-to-replace", t.className)), o.parentNode.insertBefore(o, t), _([e, n], g.loading)
        },
        qe = {},
        He = o => new Promise(e => {
            if (!o) return e();
            var t = window.scrollX,
                n = window.scrollY;
            qe.restoreFocusTimeout = setTimeout(() => {
                qe.previousActiveElement && qe.previousActiveElement.focus ? (qe.previousActiveElement.focus(), qe.previousActiveElement = null) : document.body && document.body.focus(), e()
            }, 100), window.scrollTo(t, n)
        });
    const Ve = () => {
            if (qe.timeout) return (() => {
                const e = I();
                var t = parseInt(window.getComputedStyle(e).width);
                e.style.removeProperty("transition"), e.style.width = "100%";
                var n = parseInt(window.getComputedStyle(e).width),
                    n = parseInt(t / n * 100);
                e.style.removeProperty("transition"), e.style.width = "".concat(n, "%")
            })(), qe.timeout.stop()
        },
        Ne = () => {
            if (qe.timeout) {
                var e = qe.timeout.start();
                return oe(e), e
            }
        };
    let Ue = !1;
    const Fe = {};
    const Re = t => {
            for (let e = t.target; e && e !== document; e = e.parentNode)
                for (const o in Fe) {
                    var n = e.getAttribute(o);
                    if (n) return void Fe[o].fire({
                        template: n
                    })
                }
        },
        ze = {
            title: "",
            titleText: "",
            text: "",
            html: "",
            footer: "",
            icon: void 0,
            iconColor: void 0,
            iconHtml: void 0,
            template: void 0,
            toast: !1,
            showClass: {
                popup: "swal2-show",
                backdrop: "swal2-backdrop-show",
                icon: "swal2-icon-show"
            },
            hideClass: {
                popup: "swal2-hide",
                backdrop: "swal2-backdrop-hide",
                icon: "swal2-icon-hide"
            },
            customClass: {},
            target: "body",
            backdrop: !0,
            heightAuto: !0,
            allowOutsideClick: !0,
            allowEscapeKey: !0,
            allowEnterKey: !0,
            stopKeydownPropagation: !0,
            keydownListenerCapture: !1,
            showConfirmButton: !0,
            showDenyButton: !1,
            showCancelButton: !1,
            preConfirm: void 0,
            preDeny: void 0,
            confirmButtonText: "OK",
            confirmButtonAriaLabel: "",
            confirmButtonColor: void 0,
            denyButtonText: "No",
            denyButtonAriaLabel: "",
            denyButtonColor: void 0,
            cancelButtonText: "Cancel",
            cancelButtonAriaLabel: "",
            cancelButtonColor: void 0,
            buttonsStyling: !0,
            reverseButtons: !1,
            focusConfirm: !0,
            focusDeny: !1,
            focusCancel: !1,
            returnFocus: !0,
            showCloseButton: !1,
            closeButtonHtml: "&times;",
            closeButtonAriaLabel: "Close this dialog",
            loaderHtml: "",
            showLoaderOnConfirm: !1,
            showLoaderOnDeny: !1,
            imageUrl: void 0,
            imageWidth: void 0,
            imageHeight: void 0,
            imageAlt: "",
            timer: void 0,
            timerProgressBar: !1,
            width: void 0,
            padding: void 0,
            background: void 0,
            input: void 0,
            inputPlaceholder: "",
            inputLabel: "",
            inputValue: "",
            inputOptions: {},
            inputAutoTrim: !0,
            inputAttributes: {},
            inputValidator: void 0,
            returnInputValueOnDeny: !1,
            validationMessage: void 0,
            grow: !1,
            position: "center",
            progressSteps: [],
            currentProgressStep: void 0,
            progressStepsDistance: void 0,
            willOpen: void 0,
            didOpen: void 0,
            didRender: void 0,
            willClose: void 0,
            didClose: void 0,
            didDestroy: void 0,
            scrollbarPadding: !0
        },
        We = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "footer", "hideClass", "html", "icon", "iconColor", "iconHtml", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "progressSteps", "returnFocus", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "willClose"],
        _e = {},
        Ke = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"],
        Ye = e => Object.prototype.hasOwnProperty.call(ze, e);
    const Ze = e => _e[e],
        Je = e => {
            for (const o in e) n = o, Ye(n) || s('Unknown parameter "'.concat(n, '"')), e.toast && (t = o, Ke.includes(t) && s('The parameter "'.concat(t, '" is incompatible with toasts'))), t = o, Ze(t) && i(t, Ze(t));
            var t, n
        };
    var $e = Object.freeze({
        isValidParameter: Ye,
        isUpdatableParameter: e => -1 !== We.indexOf(e),
        isDeprecatedParameter: Ze,
        argsToParams: n => {
            const o = {};
            return "object" != typeof n[0] || h(n[0]) ? ["title", "html", "icon"].forEach((e, t) => {
                t = n[t];
                "string" == typeof t || h(t) ? o[e] = t : void 0 !== t && r("Unexpected type of ".concat(e, '! Expected "string" or "Element", got ').concat(typeof t))
            }) : Object.assign(o, n[0]), o
        },
        isVisible: () => Q(w()),
        clickConfirm: Ie,
        clickDeny: () => S() && S().click(),
        clickCancel: () => L() && L().click(),
        getContainer: f,
        getPopup: w,
        getTitle: k,
        getHtmlContainer: A,
        getImage: B,
        getIcon: C,
        getInputLabel: () => v(g["input-label"]),
        getCloseButton: M,
        getActions: O,
        getConfirmButton: E,
        getDenyButton: S,
        getCancelButton: L,
        getLoader: T,
        getFooter: j,
        getTimerProgressBar: I,
        getFocusableElements: D,
        getValidationMessage: P,
        isLoading: () => w().hasAttribute("data-loading"),
        fire: function(...e) {
            return new this(...e)
        },
        mixin: function(n) {
            class e extends this {
                _main(e, t) {
                    return super._main(e, Object.assign({}, n, t))
                }
            }
            return e
        },
        showLoading: Me,
        enableLoading: Me,
        getTimerLeft: () => qe.timeout && qe.timeout.getTimerLeft(),
        stopTimer: Ve,
        resumeTimer: Ne,
        toggleTimer: () => {
            var e = qe.timeout;
            return e && (e.running ? Ve : Ne)()
        },
        increaseTimer: e => {
            if (qe.timeout) {
                e = qe.timeout.increase(e);
                return oe(e, !0), e
            }
        },
        isTimerRunning: () => qe.timeout && qe.timeout.isRunning(),
        bindClickHandler: function(e = "data-swal-template") {
            Fe[e] = this, Ue || (document.body.addEventListener("click", Re), Ue = !0)
        }
    });

    function Xe() {
        var e = ge.innerParams.get(this);
        if (e) {
            const t = ge.domCache.get(this);
            $(t.loader), H() ? e.icon && J(C()) : (e => {
                const t = e.popup.getElementsByClassName(e.loader.getAttribute("data-button-to-replace"));
                if (t.length) J(t[0], "inline-block");
                else if (ee()) $(e.actions)
            })(t), K([t.popup, t.actions], g.loading), t.popup.removeAttribute("aria-busy"), t.popup.removeAttribute("data-loading"), t.confirmButton.disabled = !1, t.denyButton.disabled = !1, t.cancelButton.disabled = !1
        }
    }
    const Ge = () => {
            null === V.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (V.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = "".concat(V.previousBodyPadding + (() => {
                const e = document.createElement("div");
                e.className = g["scrollbar-measure"], document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e), t
            })(), "px"))
        },
        Qe = () => {
            navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i) || w().scrollHeight > window.innerHeight - 44 && (f().style.paddingBottom = "".concat(44, "px"))
        },
        et = () => {
            const e = f();
            let t;
            e.ontouchstart = e => {
                t = tt(e)
            }, e.ontouchmove = e => {
                t && (e.preventDefault(), e.stopPropagation())
            }
        },
        tt = e => {
            var t = e.target,
                n = f();
            return !nt(e) && !ot(e) && (t === n || !(te(n) || "INPUT" === t.tagName || te(A()) && A().contains(t)))
        },
        nt = e => e.touches && e.touches.length && "stylus" === e.touches[0].touchType,
        ot = e => e.touches && 1 < e.touches.length;
    var it = {
        swalPromiseResolve: new WeakMap
    };

    function at(e, t, n, o) {
        H() ? ct(e, o) : (He(n).then(() => ct(e, o)), qe.keydownTarget.removeEventListener("keydown", qe.keydownHandler, {
            capture: qe.keydownListenerCapture
        }), qe.keydownHandlerAdded = !1), t.parentNode && t.remove(), q() && (null !== V.previousBodyPadding && (document.body.style.paddingRight = "".concat(V.previousBodyPadding, "px"), V.previousBodyPadding = null), U(document.body, g.iosfix) && (t = parseInt(document.body.style.top, 10), K(document.body, g.iosfix), document.body.style.top = "", document.body.scrollTop = -1 * t), (() => {
            const e = a(document.body.children);
            e.forEach(e => {
                e.hasAttribute("data-previous-aria-hidden") ? (e.setAttribute("aria-hidden", e.getAttribute("data-previous-aria-hidden")), e.removeAttribute("data-previous-aria-hidden")) : e.removeAttribute("aria-hidden")
            })
        })()), K([document.documentElement, document.body], [g.shown, g["height-auto"], g["no-backdrop"], g["toast-shown"]])
    }

    function st(e) {
        var t = w();
        if (t) {
            e = void 0 !== (o = e) ? Object.assign({
                isConfirmed: !1,
                isDenied: !1,
                isDismissed: !1
            }, o) : {
                isConfirmed: !1,
                isDenied: !1,
                isDismissed: !0
            };
            var n = ge.innerParams.get(this);
            if (n && !U(t, n.hideClass.popup)) {
                const i = it.swalPromiseResolve.get(this);
                K(t, n.showClass.popup), _(t, n.hideClass.popup);
                var o = f();
                K(o, n.showClass.backdrop), _(o, n.hideClass.backdrop), ((e, t, n) => {
                    const o = f(),
                        i = de && ne(t);
                    if (c(n.willClose, t), i) rt(e, t, o, n.returnFocus, n.didClose);
                    else at(e, o, n.returnFocus, n.didClose)
                })(this, t, n), i(e)
            }
        }
    }
    const rt = (e, t, n, o, i) => {
            qe.swalCloseEventFinishedCallback = at.bind(null, e, n, o, i), t.addEventListener(de, function(e) {
                e.target === t && (qe.swalCloseEventFinishedCallback(), delete qe.swalCloseEventFinishedCallback)
            })
        },
        ct = (e, t) => {
            setTimeout(() => {
                c(t), e._destroy()
            })
        };

    function lt(e, t, n) {
        const o = ge.domCache.get(e);
        t.forEach(e => {
            o[e].disabled = n
        })
    }

    function ut(e, t) {
        if (!e) return !1;
        if ("radio" === e.type) {
            const n = e.parentNode.parentNode,
                o = n.querySelectorAll("input");
            for (let e = 0; e < o.length; e++) o[e].disabled = t
        } else e.disabled = t
    }
    class dt {
        constructor(e, t) {
            this.callback = e, this.remaining = t, this.running = !1, this.start()
        }
        start() {
            return this.running || (this.running = !0, this.started = new Date, this.id = setTimeout(this.callback, this.remaining)), this.remaining
        }
        stop() {
            return this.running && (this.running = !1, clearTimeout(this.id), this.remaining -= new Date - this.started), this.remaining
        }
        increase(e) {
            var t = this.running;
            return t && this.stop(), this.remaining += e, t && this.start(), this.remaining
        }
        getTimerLeft() {
            return this.running && (this.stop(), this.start()), this.remaining
        }
        isRunning() {
            return this.running
        }
    }
    var pt = {
        email: (e, t) => /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid email address"),
        url: (e, t) => /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid URL")
    };

    function mt(e) {
        var t, n;
        (t = e).inputValidator || Object.keys(pt).forEach(e => {
            t.input === e && (t.inputValidator = pt[e])
        }), e.showLoaderOnConfirm && !e.preConfirm && s("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"), (n = e).target && ("string" != typeof n.target || document.querySelector(n.target)) && ("string" == typeof n.target || n.target.appendChild) || (s('Target parameter is not valid, defaulting to "body"'), n.target = "body"), "string" == typeof e.title && (e.title = e.title.split("\n").join("<br />")), re(e)
    }
    const ht = ["swal-title", "swal-html", "swal-footer"],
        gt = e => {
            e = "string" == typeof e.template ? document.querySelector(e.template) : e.template;
            if (!e) return {};
            e = e.content;
            return kt(e), Object.assign(bt(e), ft(e), yt(e), vt(e), wt(e), Ct(e, ht))
        },
        bt = e => {
            const o = {};
            return a(e.querySelectorAll("swal-param")).forEach(e => {
                At(e, ["name", "value"]);
                var t = e.getAttribute("name");
                let n = e.getAttribute("value");
                "boolean" == typeof ze[t] && "false" === n && (n = !1), "object" == typeof ze[t] && (n = JSON.parse(n)), o[t] = n
            }), o
        },
        ft = e => {
            const n = {};
            return a(e.querySelectorAll("swal-button")).forEach(e => {
                At(e, ["type", "color", "aria-label"]);
                var t = e.getAttribute("type");
                n["".concat(t, "ButtonText")] = e.innerHTML, n["show".concat(o(t), "Button")] = !0, e.hasAttribute("color") && (n["".concat(t, "ButtonColor")] = e.getAttribute("color")), e.hasAttribute("aria-label") && (n["".concat(t, "ButtonAriaLabel")] = e.getAttribute("aria-label"))
            }), n
        },
        yt = e => {
            const t = {},
                n = e.querySelector("swal-image");
            return n && (At(n, ["src", "width", "height", "alt"]), n.hasAttribute("src") && (t.imageUrl = n.getAttribute("src")), n.hasAttribute("width") && (t.imageWidth = n.getAttribute("width")), n.hasAttribute("height") && (t.imageHeight = n.getAttribute("height")), n.hasAttribute("alt") && (t.imageAlt = n.getAttribute("alt"))), t
        },
        vt = e => {
            const t = {},
                n = e.querySelector("swal-icon");
            return n && (At(n, ["type", "color"]), n.hasAttribute("type") && (t.icon = n.getAttribute("type")), n.hasAttribute("color") && (t.iconColor = n.getAttribute("color")), t.iconHtml = n.innerHTML), t
        },
        wt = e => {
            const n = {},
                t = e.querySelector("swal-input");
            t && (At(t, ["type", "label", "placeholder", "value"]), n.input = t.getAttribute("type") || "text", t.hasAttribute("label") && (n.inputLabel = t.getAttribute("label")), t.hasAttribute("placeholder") && (n.inputPlaceholder = t.getAttribute("placeholder")), t.hasAttribute("value") && (n.inputValue = t.getAttribute("value")));
            e = e.querySelectorAll("swal-input-option");
            return e.length && (n.inputOptions = {}, a(e).forEach(e => {
                At(e, ["value"]);
                var t = e.getAttribute("value"),
                    e = e.innerHTML;
                n.inputOptions[t] = e
            })), n
        },
        Ct = (e, t) => {
            const n = {};
            for (const o in t) {
                const i = t[o],
                    a = e.querySelector(i);
                a && (At(a, []), n[i.replace(/^swal-/, "")] = a.innerHTML.trim())
            }
            return n
        },
        kt = e => {
            const t = ht.concat(["swal-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
            a(e.children).forEach(e => {
                e = e.tagName.toLowerCase(); - 1 === t.indexOf(e) && s("Unrecognized element <".concat(e, ">"))
            })
        },
        At = (t, n) => {
            a(t.attributes).forEach(e => {
                -1 === n.indexOf(e.name) && s(['Unrecognized attribute "'.concat(e.name, '" on <').concat(t.tagName.toLowerCase(), ">."), "".concat(n.length ? "Allowed attributes are: ".concat(n.join(", ")) : "To set the value, use HTML within the element.")])
            })
        },
        Bt = e => {
            const t = f(),
                n = w();
            c(e.willOpen, n);
            var o = window.getComputedStyle(document.body).overflowY;
            St(t, n, e), setTimeout(() => {
                Pt(t, n)
            }, 10), q() && (Et(t, e.scrollbarPadding, o), (() => {
                const e = a(document.body.children);
                e.forEach(e => {
                    e === f() || e.contains(f()) || (e.hasAttribute("aria-hidden") && e.setAttribute("data-previous-aria-hidden", e.getAttribute("aria-hidden")), e.setAttribute("aria-hidden", "true"))
                })
            })()), H() || qe.previousActiveElement || (qe.previousActiveElement = document.activeElement), setTimeout(() => c(e.didOpen, n)), K(t, g["no-transition"])
        },
        xt = e => {
            const t = w();
            if (e.target === t) {
                const n = f();
                t.removeEventListener(de, xt), n.style.overflowY = "auto"
            }
        },
        Pt = (e, t) => {
            de && ne(t) ? (e.style.overflowY = "hidden", t.addEventListener(de, xt)) : e.style.overflowY = "auto"
        },
        Et = (e, t, n) => {
            var o;
            (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints) && !U(document.body, g.iosfix) && (o = document.body.scrollTop, document.body.style.top = "".concat(-1 * o, "px"), _(document.body, g.iosfix), et(), Qe()), t && "hidden" !== n && Ge(), setTimeout(() => {
                e.scrollTop = 0
            })
        },
        St = (e, t, n) => {
            _(e, n.showClass.backdrop), t.style.setProperty("opacity", "0", "important"), J(t, "grid"), setTimeout(() => {
                _(t, n.showClass.popup), t.style.removeProperty("opacity")
            }, 10), _([document.documentElement, document.body], g.shown), n.heightAuto && n.backdrop && !n.toast && _([document.documentElement, document.body], g["height-auto"])
        },
        Tt = e => e.checked ? 1 : 0,
        Lt = e => e.checked ? e.value : null,
        Ot = e => e.files.length ? null !== e.getAttribute("multiple") ? e.files : e.files[0] : null,
        jt = (t, n) => {
            const o = w(),
                i = e => Mt[n.input](o, Dt(e), n);
            d(n.inputOptions) || m(n.inputOptions) ? (Me(E()), p(n.inputOptions).then(e => {
                t.hideLoading(), i(e)
            })) : "object" == typeof n.inputOptions ? i(n.inputOptions) : r("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof n.inputOptions))
        },
        It = (t, n) => {
            const o = t.getInput();
            $(o), p(n.inputValue).then(e => {
                o.value = "number" === n.input ? parseFloat(e) || 0 : "".concat(e), J(o), o.focus(), t.hideLoading()
            }).catch(e => {
                r("Error in inputValue promise: ".concat(e)), o.value = "", J(o), o.focus(), t.hideLoading()
            })
        },
        Mt = {
            select: (e, t, i) => {
                const a = Y(e, g.select),
                    s = (e, t, n) => {
                        const o = document.createElement("option");
                        o.value = n, N(o, t), o.selected = qt(n, i.inputValue), e.appendChild(o)
                    };
                t.forEach(e => {
                    var t = e[0];
                    const n = e[1];
                    if (Array.isArray(n)) {
                        const o = document.createElement("optgroup");
                        o.label = t, o.disabled = !1, a.appendChild(o), n.forEach(e => s(o, e[1], e[0]))
                    } else s(a, n, t)
                }), a.focus()
            },
            radio: (e, t, a) => {
                const s = Y(e, g.radio);
                t.forEach(e => {
                    var t = e[0],
                        e = e[1];
                    const n = document.createElement("input"),
                        o = document.createElement("label");
                    n.type = "radio", n.name = g.radio, n.value = t, qt(t, a.inputValue) && (n.checked = !0);
                    const i = document.createElement("span");
                    N(i, e), i.className = g.label, o.appendChild(n), o.appendChild(i), s.appendChild(o)
                });
                const n = s.querySelectorAll("input");
                n.length && n[0].focus()
            }
        },
        Dt = n => {
            const o = [];
            return "undefined" != typeof Map && n instanceof Map ? n.forEach((e, t) => {
                let n = e;
                "object" == typeof n && (n = Dt(n)), o.push([t, n])
            }) : Object.keys(n).forEach(e => {
                let t = n[e];
                "object" == typeof t && (t = Dt(t)), o.push([e, t])
            }), o
        },
        qt = (e, t) => t && t.toString() === e.toString(),
        Ht = (e, t, n) => {
            var o = ((e, t) => {
                const n = e.getInput();
                if (!n) return null;
                switch (t.input) {
                    case "checkbox":
                        return Tt(n);
                    case "radio":
                        return Lt(n);
                    case "file":
                        return Ot(n);
                    default:
                        return t.inputAutoTrim ? n.value.trim() : n.value
                }
            })(e, t);
            t.inputValidator ? Vt(e, t, o, n) : e.getInput().checkValidity() ? ("deny" === n ? Nt : Ft)(e, t, o) : (e.enableButtons(), e.showValidationMessage(t.validationMessage))
        },
        Vt = (t, n, o, i) => {
            t.disableInput();
            const e = Promise.resolve().then(() => p(n.inputValidator(o, n.validationMessage)));
            e.then(e => {
                t.enableButtons(), t.enableInput(), e ? t.showValidationMessage(e) : ("deny" === i ? Nt : Ft)(t, n, o)
            })
        },
        Nt = (t, e, n) => {
            if (e.showLoaderOnDeny && Me(S()), e.preDeny) {
                const o = Promise.resolve().then(() => p(e.preDeny(n, e.validationMessage)));
                o.then(e => {
                    !1 === e ? t.hideLoading() : t.closePopup({
                        isDenied: !0,
                        value: void 0 === e ? n : e
                    })
                })
            } else t.closePopup({
                isDenied: !0,
                value: n
            })
        },
        Ut = (e, t) => {
            e.closePopup({
                isConfirmed: !0,
                value: t
            })
        },
        Ft = (t, e, n) => {
            if (e.showLoaderOnConfirm && Me(), e.preConfirm) {
                t.resetValidationMessage();
                const o = Promise.resolve().then(() => p(e.preConfirm(n, e.validationMessage)));
                o.then(e => {
                    Q(P()) || !1 === e ? t.hideLoading() : Ut(t, void 0 === e ? n : e)
                })
            } else Ut(t, n)
        },
        Rt = (e, t, n) => {
            const o = D();
            if (o.length) return (t += n) === o.length ? t = 0 : -1 === t && (t = o.length - 1), o[t].focus();
            w().focus()
        },
        zt = ["ArrowRight", "ArrowDown"],
        Wt = ["ArrowLeft", "ArrowUp"],
        _t = (e, t, n) => {
            var o = ge.innerParams.get(e);
            o && (o.stopKeydownPropagation && t.stopPropagation(), "Enter" === t.key ? Kt(e, t, o) : "Tab" === t.key ? Yt(t, o) : [...zt, ...Wt].includes(t.key) ? Zt(t.key) : "Escape" === t.key && Jt(t, o, n))
        },
        Kt = (e, t, n) => {
            t.isComposing || t.target && e.getInput() && t.target.outerHTML === e.getInput().outerHTML && (["textarea", "file"].includes(n.input) || (Ie(), t.preventDefault()))
        },
        Yt = (e, t) => {
            var n = e.target,
                o = D();
            let i = -1;
            for (let e = 0; e < o.length; e++)
                if (n === o[e]) {
                    i = e;
                    break
                }
            e.shiftKey ? Rt(0, i, -1) : Rt(0, i, 1), e.stopPropagation(), e.preventDefault()
        },
        Zt = e => {
            const t = E(),
                n = S(),
                o = L();
            if ([t, n, o].includes(document.activeElement)) {
                e = zt.includes(e) ? "nextElementSibling" : "previousElementSibling";
                const i = document.activeElement[e];
                i && i.focus()
            }
        },
        Jt = (e, t, n) => {
            u(t.allowEscapeKey) && (e.preventDefault(), n(l.esc))
        },
        $t = (t, e, n) => {
            e.popup.onclick = () => {
                var e = ge.innerParams.get(t);
                e.showConfirmButton || e.showDenyButton || e.showCancelButton || e.showCloseButton || e.timer || e.input || n(l.close)
            }
        };
    let Xt = !1;
    const Gt = t => {
            t.popup.onmousedown = () => {
                t.container.onmouseup = function(e) {
                    t.container.onmouseup = void 0, e.target === t.container && (Xt = !0)
                }
            }
        },
        Qt = t => {
            t.container.onmousedown = () => {
                t.popup.onmouseup = function(e) {
                    t.popup.onmouseup = void 0, e.target !== t.popup && !t.popup.contains(e.target) || (Xt = !0)
                }
            }
        },
        en = (n, o, i) => {
            o.container.onclick = e => {
                var t = ge.innerParams.get(n);
                Xt ? Xt = !1 : e.target === o.container && u(t.allowOutsideClick) && i(l.backdrop)
            }
        };
    const tn = (e, t, n) => {
            var o = I();
            $(o), t.timer && (e.timeout = new dt(() => {
                n("timer"), delete e.timeout
            }, t.timer), t.timerProgressBar && (J(o), setTimeout(() => {
                e.timeout && e.timeout.running && oe(t.timer)
            })))
        },
        nn = (e, t) => {
            if (!t.toast) return u(t.allowEnterKey) ? void(on(e, t) || Rt(0, -1, 1)) : an()
        },
        on = (e, t) => t.focusDeny && Q(e.denyButton) ? (e.denyButton.focus(), !0) : t.focusCancel && Q(e.cancelButton) ? (e.cancelButton.focus(), !0) : !(!t.focusConfirm || !Q(e.confirmButton)) && (e.confirmButton.focus(), !0),
        an = () => {
            document.activeElement && "function" == typeof document.activeElement.blur && document.activeElement.blur()
        };
    const sn = e => {
        for (const t in e) e[t] = new WeakMap
    };
    e = Object.freeze({
        hideLoading: Xe,
        disableLoading: Xe,
        getInput: function(e) {
            var t = ge.innerParams.get(e || this);
            return (e = ge.domCache.get(e || this)) ? R(e.popup, t.input) : null
        },
        close: st,
        closePopup: st,
        closeModal: st,
        closeToast: st,
        enableButtons: function() {
            lt(this, ["confirmButton", "denyButton", "cancelButton"], !1)
        },
        disableButtons: function() {
            lt(this, ["confirmButton", "denyButton", "cancelButton"], !0)
        },
        enableInput: function() {
            return ut(this.getInput(), !1)
        },
        disableInput: function() {
            return ut(this.getInput(), !0)
        },
        showValidationMessage: function(e) {
            const t = ge.domCache.get(this);
            var n = ge.innerParams.get(this);
            N(t.validationMessage, e), t.validationMessage.className = g["validation-message"], n.customClass && n.customClass.validationMessage && _(t.validationMessage, n.customClass.validationMessage), J(t.validationMessage);
            const o = this.getInput();
            o && (o.setAttribute("aria-invalid", !0), o.setAttribute("aria-describedBy", g["validation-message"]), z(o), _(o, g.inputerror))
        },
        resetValidationMessage: function() {
            var e = ge.domCache.get(this);
            e.validationMessage && $(e.validationMessage);
            const t = this.getInput();
            t && (t.removeAttribute("aria-invalid"), t.removeAttribute("aria-describedBy"), K(t, g.inputerror))
        },
        getProgressSteps: function() {
            return ge.domCache.get(this).progressSteps
        },
        _main: function(e, t = {}) {
            Je(Object.assign({}, t, e)), qe.currentInstance && qe.currentInstance._destroy(), qe.currentInstance = this, mt(e = ((e, t) => {
                const n = gt(e),
                    o = Object.assign({}, ze, t, n, e);
                return o.showClass = Object.assign({}, ze.showClass, o.showClass), o.hideClass = Object.assign({}, ze.hideClass, o.hideClass), o
            })(e, t)), Object.freeze(e), qe.timeout && (qe.timeout.stop(), delete qe.timeout), clearTimeout(qe.restoreFocusTimeout);
            var s, r, c, t = (e => {
                const t = {
                    popup: w(),
                    container: f(),
                    actions: O(),
                    confirmButton: E(),
                    denyButton: S(),
                    cancelButton: L(),
                    loader: T(),
                    closeButton: M(),
                    validationMessage: P(),
                    progressSteps: x()
                };
                return ge.domCache.set(e, t), t
            })(this);
            return je(this, e), ge.innerParams.set(this, e), s = this, r = t, c = e, new Promise(e => {
                const t = e => {
                    s.closePopup({
                        isDismissed: !0,
                        dismiss: e
                    })
                };
                var n, o, i, a;
                it.swalPromiseResolve.set(s, e), r.confirmButton.onclick = () => ((e, t) => {
                    e.disableButtons(), t.input ? Ht(e, t, "confirm") : Ft(e, t, !0)
                })(s, c), r.denyButton.onclick = () => ((e, t) => {
                    e.disableButtons(), t.returnInputValueOnDeny ? Ht(e, t, "deny") : Nt(e, t, !1)
                })(s, c), r.cancelButton.onclick = () => ((e, t) => {
                    e.disableButtons(), t(l.cancel)
                })(s, t), r.closeButton.onclick = () => t(l.close), n = s, a = r, e = t, ge.innerParams.get(n).toast ? $t(n, a, e) : (Gt(a), Qt(a), en(n, a, e)), o = s, a = qe, e = c, i = t, a.keydownTarget && a.keydownHandlerAdded && (a.keydownTarget.removeEventListener("keydown", a.keydownHandler, {
                    capture: a.keydownListenerCapture
                }), a.keydownHandlerAdded = !1), e.toast || (a.keydownHandler = e => _t(o, e, i), a.keydownTarget = e.keydownListenerCapture ? window : w(), a.keydownListenerCapture = e.keydownListenerCapture, a.keydownTarget.addEventListener("keydown", a.keydownHandler, {
                    capture: a.keydownListenerCapture
                }), a.keydownHandlerAdded = !0), e = s, "select" === (a = c).input || "radio" === a.input ? jt(e, a) : ["text", "email", "number", "tel", "textarea"].includes(a.input) && (d(a.inputValue) || m(a.inputValue)) && It(e, a), Bt(c), tn(qe, c, t), nn(r, c), setTimeout(() => {
                    r.container.scrollTop = 0
                })
            })
        },
        update: function(t) {
            var e = w(),
                n = ge.innerParams.get(this);
            if (!e || U(e, n.hideClass.popup)) return s("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
            const o = {};
            Object.keys(t).forEach(e => {
                ln.isUpdatableParameter(e) ? o[e] = t[e] : s('Invalid parameter to update: "'.concat(e, '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md'))
            }), n = Object.assign({}, n, o), je(this, n), ge.innerParams.set(this, n), Object.defineProperties(this, {
                params: {
                    value: Object.assign({}, this.params, t),
                    writable: !1,
                    enumerable: !0
                }
            })
        },
        _destroy: function() {
            var e = ge.domCache.get(this),
                t = ge.innerParams.get(this);
            t && (e.popup && qe.swalCloseEventFinishedCallback && (qe.swalCloseEventFinishedCallback(), delete qe.swalCloseEventFinishedCallback), qe.deferDisposalTimer && (clearTimeout(qe.deferDisposalTimer), delete qe.deferDisposalTimer), c(t.didDestroy), delete this.params, delete qe.keydownHandler, delete qe.keydownTarget, sn(ge), sn(it))
        }
    });
    let rn;
    class cn {
        constructor(...e) {
            "undefined" != typeof window && (rn = this, e = Object.freeze(this.constructor.argsToParams(e)), Object.defineProperties(this, {
                params: {
                    value: e,
                    writable: !1,
                    enumerable: !0,
                    configurable: !0
                }
            }), e = this._main(this.params), ge.promise.set(this, e))
        }
        then(e) {
            const t = ge.promise.get(this);
            return t.then(e)
        } finally(e) {
            const t = ge.promise.get(this);
            return t.finally(e)
        }
    }
    Object.assign(cn.prototype, e), Object.assign(cn, $e), Object.keys(e).forEach(t => {
        cn[t] = function(...e) {
            if (rn) return rn[t](...e)
        }
    }), cn.DismissReason = l, cn.version = "11.0.7";
    const ln = cn;
    return ln.default = ln, ln
}), void 0 !== this && this.Sweetalert2 && (this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2);
"undefined" != typeof document && function(e, t) {
    var n = e.createElement("style");
    if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t);
    else try {
        n.innerHTML = t
    } catch (e) {
        n.innerText = t
    }
}(document, ".swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.3125em;padding:0}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(100,150,200,.5)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\" \"gap gap gap\";grid-template-rows:auto auto auto .625em;height:100%;padding:.625em .625em 0;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container::after{content:\"\";grid-column:1/4;grid-row:4;height:.625em}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7367f0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(115,103,240,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#ea5455;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(234,84,85,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7d88;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,125,136,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;height:.25em;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:0;padding:1em 1.6em .3em;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 0}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 0;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}");