(this["webpackJsonprandom-profile"] = this["webpackJsonprandom-profile"] || []).push([
    [0],
    [
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        function (e, a, t) {
            e.exports = t(19);
        },
        ,
        ,
        ,
        ,
        function (e, a, t) {},
        function (e, a, t) {},
        function (e, a, t) {},
        function (e, a, t) {},
        function (e, a, t) {},
        function (e, a, t) {
            "use strict";
            t.r(a);
            var n = t(0),
                i = t.n(n),
                c = t(8),
                o = t.n(c),
                r = (t(14), t(2)),
                s = t(3),
                l = t(5),
                m = t(4),
                d = t(6),
                p =
                    (t(1),
                    t(15),
                    function (e) {
                        var a = e.value,
                            t = e.onChange,
                            n = e.handleGroup;
                        return i.a.createElement(
                            "div",
                            { className: "col-12" },
                            i.a.createElement(
                                "div",
                                { className: "input-group my-3" },
                                i.a.createElement(
                                    "select",
                                    { value: a, onChange: t, class: "custom-select", id: "inputGroupSelect01" },
                                    i.a.createElement("option", { selected: !0, value: "1" }, "1"),
                                    i.a.createElement("option", { value: "2" }, "2"),
                                    i.a.createElement("option", { value: "3" }, "3"),
                                    i.a.createElement("option", { value: "4" }, "4"),
                                    i.a.createElement("option", { value: "5" }, "5"),
                                    i.a.createElement("option", { value: "6" }, "6"),
                                    i.a.createElement("option", { value: "7" }, "7"),
                                    i.a.createElement("option", { value: "8" }, "8"),
                                    i.a.createElement("option", { value: "9" }, "9")
                                ),
                                i.a.createElement("div", { className: "input-group-append" }, i.a.createElement("button", { onClick: n, type: "button", className: "btn btn-generate" }, "Generate !"))
                            )
                        );
                    }),
                u =
                    (t(16),
                    (function (e) {
                        function a() {
                            var e, t;
                            Object(r.a)(this, a);
                            for (var n = arguments.length, i = new Array(n), c = 0; c < n; c++) i[c] = arguments[c];
                            return (
                                ((t = Object(l.a)(this, (e = Object(m.a)(a)).call.apply(e, [this].concat(i)))).state = { isActive: !0 }),
                                (t.handleClick = function (e) {
                                    t.props.handleOnClick(e), t.setState({ isActive: !t.state.isActive });
                                }),
                                t
                            );
                        }
                        return (
                            Object(d.a)(a, e),
                            Object(s.a)(a, [
                                {
                                    key: "render",
                                    value: function () {
                                        var e = this,
                                            a = this.props,
                                            t = (a.className, a.src),
                                            n = a.firstName,
                                            c = a.icon,
                                            o = a.id,
                                            r = this.state.isActive ? "card mb-3 border-0 shadow" : "card mb-3 border-0 shadow bg-danger";
                                        return i.a.createElement(
                                            "div",
                                            { className: "col-4" },
                                            i.a.createElement(
                                                "div",
                                                { className: r },
                                                i.a.createElement(
                                                    "div",
                                                    { className: "row no-gutters" },
                                                    i.a.createElement("div", { className: "col-md-4" }, i.a.createElement("img", { src: t, className: "card-img rounded-circle shadow", alt: "..." })),
                                                    i.a.createElement(
                                                        "div",
                                                        { className: "col-md-8" },
                                                        i.a.createElement(
                                                            "div",
                                                            { className: "card-body float-right" },
                                                            i.a.createElement("p", { className: "card-text" }, n),
                                                            i.a.createElement("img", { className: "icon", src: c }),
                                                            i.a.createElement(
                                                                "button",
                                                                {
                                                                    onClick: function () {
                                                                        return e.handleClick(o);
                                                                    },
                                                                    type: "button",
                                                                    className: this.state.isActive ? "btn btn-success" : "btn btn-danger",
                                                                },
                                                                this.state.isActive ? "Active" : "Inactive"
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        );
                                    },
                                },
                            ]),
                            a
                        );
                    })(i.a.Component)),
                v =
                    (t(17),
                    function (e) {
                        var a = e.groupNum,
                            t = e.newGroup,
                            n = e.children;
                        return i.a.createElement("div", { className: "groupBox row p-3 m-3 shadow" }, i.a.createElement("h2", { className: "col-12 m-3" }, "GROUP ", a), n, t);
                    }),
                g =
                    (t(18),
                    [
                        { id: 1, name: "Aleksandar", image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png", icon: "", active: !0 },
                        { id: 2, name: "Bettina", image: "https://daexie.files.wordpress.com/2016/02/untitled_by_iamjerrytheslime-d8ti066.png?w=640", icon: "", active: !0 },
                        { id: 3, name: "Catalina", image: "https://vignette.wikia.nocookie.net/bob-leponge/images/0/05/Squidward_stock_art.png/revision/latest?cb=20190801142211&path-prefix=fr", icon: "", active: !0 },
                        { id: 4, name: "Christiane", image: "https://vignette.wikia.nocookie.net/bob-leponge/images/7/7b/Krabs_artwork.png/revision/latest?cb=20190725100918&path-prefix=fr", icon: "", active: !0 },
                        { id: 5, name: "Jeremy", image: "https://vignette.wikia.nocookie.net/bob-leponge/images/4/49/Bob_l%27%C3%A9ponge_Sandy.png/revision/latest?cb=20170310013502&path-prefix=fr", icon: "", active: !0 },
                        { id: 6, name: "Milivoje", image: "https://www.netclipart.com/pp/m/346-3468805_plankton-bob-esponja-png-download-sheldon-j-plankton.png", icon: "", active: !0 },
                        { id: 7, name: "Vanessa", image: "https://vignette.wikia.nocookie.net/spongebob/images/9/9e/Gary_looking_up_stock_art.png/revision/latest?cb=20181227162221", icon: "", active: !0 },
                        { id: 8, name: "Anamaria", image: "https://vignette.wikia.nocookie.net/spongebob/images/e/ef/SpongeBob_SquarePants_-_Pearl_Krabs_promo_art.png/revision/latest?cb=20181121020849", icon: "", active: !0 },
                        { id: 9, name: "Balint", image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Mrs._Puff.svg/1200px-Mrs._Puff.svg.png", icon: "", active: !0 },
                        { id: 10, name: "Eri", image: "https://vignette.wikia.nocookie.net/de.simpsons/images/6/65/Bart_Simpson.png/revision/latest/scale-to-width-down/340?cb=20171106184048", icon: "", active: !0 },
                        { id: 11, name: "Gojart", image: "https://cdn.newsapi.com.au/image/v1/669dde048626159aa3eb1f73d5669243?width=1024", icon: "", active: !0 },
                        { id: 12, name: "Hadar", image: "https://byuc.files.wordpress.com/2012/07/avat-2.jpg", icon: "", active: !0 },
                        { id: 13, name: "Jovana", image: "https://pickaface.net/gallery/avatar/unr_randomsuburbguy_170104_0514_qxi74z8.png", icon: "", active: !0 },
                        { id: 14, name: "Lea", image: "https://pickaface.net/gallery/avatar/unr_random_180527_1151_2bcb7h9.png", icon: "", active: !0 },
                        { id: 15, name: "Eva", image: "https://pickaface.net/gallery/avatar/Dorka123551177b601b1e.png", icon: "", active: !0 },
                        {
                            id: 16,
                            name: "Ruba",
                            image:
                                "data:image/png;base64,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",
                            icon: "",
                            active: !0,
                        },
                        {
                            id: 17,
                            name: "Shabnaz",
                            image: "https://tr2.cbsistatic.com/hub/i/r/2014/04/30/03480eee-dd54-4a74-bcf7-f2e0a5a7b524/thumbnail/770x578/ec3691e5421f1cfadcb235370e81428e/githuboctocatlogo043014.jpg",
                            icon: "",
                            active: !0,
                        },
                        { id: 18, name: "Teofil", image: "http://images2.fanpop.com/image/polls/457000/457119_1275508934654_full.jpg?v=1275508943", icon: "", active: !0 },
                    ]),
                h = (function (e) {
                    function a() {
                        var e, t;
                        Object(r.a)(this, a);
                        for (var n = arguments.length, c = new Array(n), o = 0; o < n; o++) c[o] = arguments[o];
                        return (
                            ((t = Object(l.a)(this, (e = Object(m.a)(a)).call.apply(e, [this].concat(c)))).state = { input: 1, memberCard: "", isActive: !0 }),
                            (t.handleClick = function (e) {
                                t.setState({ isActive: !t.state.isActive }),
                                    g.forEach(function (a) {
                                        a.id === e && (a.active = !a.active);
                                    });
                            }),
                            (t.handleInput = function (e) {
                                var a = e.target.value;
                                console.log(a), t.setState({ input: Number(a) });
                            }),
                            (t.handleGroup = function () {
                                (isNaN(t.state.input) || t.state.input === [] || "" === t.state.input) && alert("It's not a number !");
                                var e = [];
                                g.forEach(function (a) {
                                    a.active && e.push(a);
                                });
                                for (var a, n, c = e.length; 0 !== c; ) (n = Math.floor(Math.random() * c)), (a = e[(c -= 1)]), (e[c] = e[n]), (e[n] = a);
                                for (var o = 0, r = [], s = Number(t.state.input); o < e.length; ) r.push(e.slice(o, s + o)), (o += s);
                                for (
                                    var l = [],
                                        m = 1,
                                        d = function (e) {
                                            var a = r[e],
                                                n = a[Math.floor(Math.random() * a.length)],
                                                c = a.map(function (e) {
                                                    var a = n.id === e.id ? "bg-success" : "";
                                                    return i.a.createElement(u, {
                                                        isLeader: a,
                                                        handleOnClick: t.handleClick,
                                                        src: e.image,
                                                        icon: n.id === e.id ? "https://media.glassdoor.com/sqll/1527108/talent-garden-squarelogo-1498220206195.png" : "",
                                                        id: e.id,
                                                        key: e.id,
                                                        firstName: e.name,
                                                    });
                                                });
                                            l.push(i.a.createElement(v, { groupNum: m, newGroup: c })), (m += 1);
                                        },
                                        p = 0;
                                    p < r.length;
                                    p++
                                )
                                    d(p);
                                t.setState({ memberCard: l });
                            }),
                            t
                        );
                    }
                    return (
                        Object(d.a)(a, e),
                        Object(s.a)(a, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    var e = this,
                                        a = g.map(function (a) {
                                            return i.a.createElement(u, { className: "col-4", handleOnClick: e.handleClick, src: a.image, icon: a.icon, id: a.id, key: a.id, firstName: a.name });
                                        });
                                    this.setState({ memberCard: a });
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    return i.a.createElement(
                                        i.a.Fragment,
                                        null,
                                        i.a.createElement(
                                            "div",
                                            { className: "container-fluid" },
                                            i.a.createElement("div", { className: "header row text-center mx-auto" }, i.a.createElement("h1", { className: "col-12 my-4" }, "RANDOM GROUP GENERATOR"))
                                        ),
                                        i.a.createElement(
                                            "div",
                                            { className: "container" },
                                            i.a.createElement("div", { className: "row text-center mx-auto" }, i.a.createElement(p, { value: this.state.input, onChange: this.handleInput, handleGroup: this.handleGroup })),
                                            i.a.createElement("div", { className: "row text-center mx-auto" }, this.state.memberCard)
                                        )
                                    );
                                },
                            },
                        ]),
                        a
                    );
                })(i.a.Component);
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            o.a.render(i.a.createElement(h, null), document.getElementById("root")),
                "serviceWorker" in navigator &&
                    navigator.serviceWorker.ready.then(function (e) {
                        e.unregister();
                    });
        },
    ],
    [[9, 1, 2]],
]);
//# sourceMappingURL=main.157e14ca.chunk.js.map
