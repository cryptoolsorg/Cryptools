! function (t, e) {
    "undefined" != typeof module ? module.exports = e() : "function" == typeof define && "object" == typeof define.amd ? define(e) : this.Clusterize = e()
}(0, function () {
    "use strict";
    var t = function () {
            for (var t = 3, e = document.createElement("b"), o = e.all || []; e.innerHTML = "\x3c!--[if gt IE " + ++t + "]><i><![endif]--\x3e", o[0];);
            return t > 4 ? t : document.documentMode
        }(),
        e = navigator.platform.toLowerCase().indexOf("mac") + 1,
        o = function (t) {
            if (!(this instanceof o)) return new o(t);
            var i = this,
                l = {
                    rows_in_block: 50,
                    blocks_in_cluster: 4,
                    tag: null,
                    show_no_data_row: !0,
                    no_data_class: "clusterize-no-data",
                    no_data_text: "No data",
                    keep_parity: !0,
                    callbacks: {}
                };
            i.options = {};
            for (var a, c = ["rows_in_block", "blocks_in_cluster", "show_no_data_row", "no_data_class", "no_data_text", "keep_parity", "tag", "callbacks"], h = 0; a = c[h]; h++) i.options[a] = void 0 !== t[a] && null != t[a] ? t[a] : l[a];
            var u, _ = ["scroll", "content"];
            for (h = 0; u = _[h]; h++)
                if (i[u + "_elem"] = t[u + "Id"] ? document.getElementById(t[u + "Id"]) : t[u + "Elem"], !i[u + "_elem"]) throw new Error("Error! Could not find " + u + " element");
            i.content_elem.hasAttribute("tabindex") || i.content_elem.setAttribute("tabindex", 0);
            var p = s(t.rows) ? t.rows : i.fetchMarkup(),
                m = {},
                d = i.scroll_elem.scrollTop;
            i.insertToDOM(p, m), i.scroll_elem.scrollTop = d;
            var g = !1,
                f = 0,
                v = !1,
                b = function () {
                    e && (v || (i.content_elem.style.pointerEvents = "none"), v = !0, clearTimeout(f), f = setTimeout(function () {
                        i.content_elem.style.pointerEvents = "auto", v = !1
                    }, 50)), g != (g = i.getClusterNum()) && i.insertToDOM(p, m), i.options.callbacks.scrollingProgress && i.options.callbacks.scrollingProgress(i.getScrollProgress())
                },
                w = 0,
                C = function () {
                    clearTimeout(w), w = setTimeout(i.refresh, 100)
                };
            n("scroll", i.scroll_elem, b), n("resize", window, C), i.destroy = function (t) {
                r("scroll", i.scroll_elem, b), r("resize", window, C), i.html((t ? i.generateEmptyRow() : p).join(""))
            }, i.refresh = function (t) {
                (i.getRowsHeight(p) || t) && i.update(p)
            }, i.update = function (t) {
                p = s(t) ? t : [];
                var e = i.scroll_elem.scrollTop;
                p.length * i.options.item_height < e && (i.scroll_elem.scrollTop = 0, g = 0), i.insertToDOM(p, m), i.scroll_elem.scrollTop = e, this.options.callbacks.onUpdate && this.options.callbacks.onUpdate()
            }, i.clear = function () {
                i.update([])
            }, i.getRowsAmount = function () {
                return p.length
            }, i.getScrollProgress = function () {
                return this.options.scroll_top / (p.length * this.options.item_height) * 100 || 0
            };
            var k = function (t, e) {
                var o = s(e) ? e : [];
                o.length && (p = "append" == t ? p.concat(o) : o.concat(p), i.insertToDOM(p, m))
            };
            i.append = function (t) {
                k("append", t)
            }, i.prepend = function (t) {
                k("prepend", t)
            }
        };

    function n(t, e, o) {
        return e.addEventListener ? e.addEventListener(t, o, !1) : e.attachEvent("on" + t, o)
    }

    function r(t, e, o) {
        return e.removeEventListener ? e.removeEventListener(t, o, !1) : e.detachEvent("on" + t, o)
    }

    function s(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }

    function i(t, e) {
        return window.getComputedStyle ? window.getComputedStyle(e)[t] : e.currentStyle[t]
    }
    return o.prototype = {
        constructor: o,
        fetchMarkup: function () {
            for (var t = [], e = this.getChildNodes(this.content_elem); e.length;) t.push(e.shift().outerHTML);
            return t
        },
        exploreEnvironment: function (e, o) {
            var n = this.options;
            n.content_tag = this.content_elem.tagName.toLowerCase(), e.length && (t && t <= 9 && !n.tag && (n.tag = e[0].match(/<([^>\s/]*)/)[1].toLowerCase()), this.content_elem.children.length <= 1 && (o.data = this.html(e[0] + e[0] + e[0])), n.tag || (n.tag = this.content_elem.children[0].tagName.toLowerCase()), this.getRowsHeight(e))
        },
        getRowsHeight: function (t) {
            var e = this.options,
                o = e.item_height;
            if (e.cluster_height = 0, t.length) {
                var n = this.content_elem.children;
                if (n.length) {
                    var r = n[Math.floor(n.length / 2)];
                    if (e.item_height = r.offsetHeight, "tr" == e.tag && "collapse" != i("borderCollapse", this.content_elem) && (e.item_height += parseInt(i("borderSpacing", this.content_elem), 10) || 0), "tr" != e.tag) {
                        var s = parseInt(i("marginTop", r), 10) || 0,
                            l = parseInt(i("marginBottom", r), 10) || 0;
                        e.item_height += Math.max(s, l)
                    }
                    return e.block_height = e.item_height * e.rows_in_block, e.rows_in_cluster = e.blocks_in_cluster * e.rows_in_block, e.cluster_height = e.blocks_in_cluster * e.block_height, o != e.item_height
                }
            }
        },
        getClusterNum: function () {
            return this.options.scroll_top = this.scroll_elem.scrollTop, Math.floor(this.options.scroll_top / (this.options.cluster_height - this.options.block_height)) || 0
        },
        generateEmptyRow: function () {
            var t = this.options;
            if (!t.tag || !t.show_no_data_row) return [];
            var e, o = document.createElement(t.tag),
                n = document.createTextNode(t.no_data_text);
            return o.className = t.no_data_class, "tr" == t.tag && ((e = document.createElement("td")).colSpan = 100, e.appendChild(n)), o.appendChild(e || n), [o.outerHTML]
        },
        generate: function (t, e) {
            var o = this.options,
                n = t.length;
            if (n < o.rows_in_block) return {
                top_offset: 0,
                bottom_offset: 0,
                rows_above: 0,
                rows: n ? t : this.generateEmptyRow()
            };
            var r = Math.max((o.rows_in_cluster - o.rows_in_block) * e, 0),
                s = r + o.rows_in_cluster,
                i = Math.max(r * o.item_height, 0),
                l = Math.max((n - s) * o.item_height, 0),
                a = [],
                c = r;
            i < 1 && c++;
            for (var h = r; h < s; h++) t[h] && a.push(t[h]);
            return {
                top_offset: i,
                bottom_offset: l,
                rows_above: c,
                rows: a
            }
        },
        renderExtraTag: function (t, e) {
            var o = document.createElement(this.options.tag),
                n = "clusterize-";
            return o.className = [n + "extra-row", n + t].join(" "), e && (o.style.height = e + "px"), o.outerHTML
        },
        insertToDOM: function (t, e) {
            this.options.cluster_height || this.exploreEnvironment(t, e);
            var o = this.generate(t, this.getClusterNum()),
                n = o.rows.join(""),
                r = this.checkChanges("data", n, e),
                s = this.checkChanges("top", o.top_offset, e),
                i = this.checkChanges("bottom", o.bottom_offset, e),
                l = this.options.callbacks,
                a = [];
            r || s ? (o.top_offset && (this.options.keep_parity && a.push(this.renderExtraTag("keep-parity")), a.push(this.renderExtraTag("top-space", o.top_offset))), a.push(n), o.bottom_offset && a.push(this.renderExtraTag("bottom-space", o.bottom_offset)), l.clusterWillChange && l.clusterWillChange(), this.html(a.join("")), "ol" == this.options.content_tag && this.content_elem.setAttribute("start", o.rows_above), this.content_elem.style["counter-increment"] = "clusterize-counter " + (o.rows_above - 1), l.clusterChanged && l.clusterChanged()) : i && (this.content_elem.lastChild.style.height = o.bottom_offset + "px")
        },
        html: function (e) {
            var o = this.content_elem;
            if (t && t <= 9 && "tr" == this.options.tag) {
                var n, r = document.createElement("div");
                for (r.innerHTML = "<table><tbody>" + e + "</tbody></table>"; n = o.lastChild;) o.removeChild(n);
                for (var s = this.getChildNodes(r.firstChild.firstChild); s.length;) o.appendChild(s.shift())
            } else o.innerHTML = e
        },
        getChildNodes: function (t) {
            for (var e = t.children, o = [], n = 0, r = e.length; n < r; n++) o.push(e[n]);
            return o
        },
        checkChanges: function (t, e, o) {
            var n = e != o[t];
            return o[t] = e, n
        }
    }, o
});