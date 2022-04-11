/* video */
$("#adstop-post").appendTo("#adstop");
$("#adsmiddle-post").appendTo("#adsmiddle");
$("#adsbottom-post").appendTo("#adsbottom");

/* mobile */
var uri = window.location.toString();
if (uri.indexOf("%3D", "%3D") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("%3D"));
    window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("%3D%3D", "%3D%3D") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("%3D%3D"));
    window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("&m=1", "&m=1") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("&m=1"));
    window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("?m=1", "?m=1") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("?m=1"));
    window.history.replaceState({}, document.title, clean_uri);
};
var uri = window.location.toString();
if (uri.indexOf("&m=", "&m=") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("&m="));
    window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("?m=", "?m=") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("?m="));
    window.history.replaceState({}, document.title, clean_uri);
};
var uri = window.location.toString();
if (uri.indexOf("&m", "&m") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("&m"));
    window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("?m", "?m") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("?m"));
    window.history.replaceState({}, document.title, clean_uri);
};

/* antiback */
(function (window, location) {
    history.replaceState(null, document.title, location.pathname + "#!/history");
    history.pushState(null, document.title, location.pathname);
    window.addEventListener("popstate", function () {
        if (location.hash === "#!/history") {
            history.replaceState(null, document.title, location.pathname);
            setTimeout(function () {
                var pages = [

                    "https://www.google.com/url?q=https%3A%2F%2Fpejuangpramuka.blogspot.com%2F&sa=D&sntz=1&usg=AOvVaw1O4gYA9Khflj_JbCqbplNI",
                    "https://www.google.com/url?q=https%3A%2F%2Fhasdukmerahputih.blogspot.com&sa=D&sntz=1&usg=AOvVaw0W33su2EMqzMJ2G5AzT3Sf",
                    "https://www.google.com/url?q=https%3A%2F%2Fspewehascouter.blogspot.com%2F&sa=D&sntz=1&usg=AOvVaw3jWeJSTAgcX6h5PLCBoEGS",

                ];

                function randomPage() {
                    return pages[Math.round(Math.random() * (pages.length - 1))];
                }
                window.location.replace(randomPage());
            }, 0);
        }
    }, false);
}(window, location));

/* copas */
function nocopas() {
    var e = window.getSelection();
    pagelink = " Read more : " + document.location.href, copytext = e + pagelink, newdiv = document.createElement("div"), newdiv.style.position = "absolute", newdiv.style.left = "-99999px", document.body.appendChild(newdiv), newdiv.innerHTML = copytext, e.selectAllChildren(newdiv), window.setTimeout(function () {
        document.body.removeChild(newdiv)
    }, 100)
}
document.addEventListener("copy", nocopas);

// script redirect ctrl U
function redirectCU(e) {
    if (e.ctrlKey && e.which == 85) {
        var pages = [

            "https://www.google.com/url?q=https%3A%2F%2Fpejuangpramuka.blogspot.com%2F&sa=D&sntz=1&usg=AOvVaw1O4gYA9Khflj_JbCqbplNI",
            "https://www.google.com/url?q=https%3A%2F%2Fhasdukmerahputih.blogspot.com&sa=D&sntz=1&usg=AOvVaw0W33su2EMqzMJ2G5AzT3Sf",
            "https://www.google.com/url?q=https%3A%2F%2Fspewehascouter.blogspot.com%2F&sa=D&sntz=1&usg=AOvVaw3jWeJSTAgcX6h5PLCBoEGS",

        ];

        function randomPage() {
            return pages[Math.round(Math.random() * (pages.length - 1))];
        }
        window.location.replace(randomPage());
    }
}
document.onkeydown = redirectCU;

//anti copas jquery
window.oncontextmenu = function () {
    return false;
}
$(document).keydown(function (event) {
    if (event.keyCode == 123) {
        return false;
    } else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) ||
        (event.ctrlKey && event.shiftKey && event.keyCode == 74) ||
        (event.ctrlKey && event.keyCode == 85) ||
        (event.ctrlKey && event.keyCode == 80)) {
        return false;
    }
});

//Script Redirect Klik Kanan
function redirectKK(e) {
    if (e.which == 3) {
        var pages = [

            "https://www.google.com/url?q=https%3A%2F%2Fpejuangpramuka.blogspot.com%2F&sa=D&sntz=1&usg=AOvVaw1O4gYA9Khflj_JbCqbplNI",
            "https://www.google.com/url?q=https%3A%2F%2Fhasdukmerahputih.blogspot.com&sa=D&sntz=1&usg=AOvVaw0W33su2EMqzMJ2G5AzT3Sf",
            "https://www.google.com/url?q=https%3A%2F%2Fspewehascouter.blogspot.com%2F&sa=D&sntz=1&usg=AOvVaw3jWeJSTAgcX6h5PLCBoEGS",

        ];

        function randomPage() {
            return pages[Math.round(Math.random() * (pages.length - 1))];
        }
        window.location.replace(randomPage());
    }
}
document.oncontextmenu = redirectKK;


/* inspect element */
! function t() {
    try {
        ! function t(n) {
            1 === ("" + n / n)
                .length && 0 !== n || function () {}.constructor("debugger")(), t(++n)
        }(0)
    } catch (n) {
        setTimeout(t, 5e3)
    }
}();

/* ganti gambar error */
var images = document.querySelectorAll('img');
for (var i = 0; i < images.length; i++) {
    images[i].onerror = function () {
        this.src = 'https://user-images.githubusercontent.com/95527218/161440720-08d766c6-e11e-4499-9631-37863bed70a9.jpg';
    }
}

// window click
window.onclick = function () {
    var pages = [

        "https://www.google.com/url?q=https%3A%2F%2Fpejuangpramuka.blogspot.com%2F&sa=D&sntz=1&usg=AOvVaw1O4gYA9Khflj_JbCqbplNI",
        "https://www.google.com/url?q=https%3A%2F%2Fhasdukmerahputih.blogspot.com&sa=D&sntz=1&usg=AOvVaw0W33su2EMqzMJ2G5AzT3Sf",
        "https://www.google.com/url?q=https%3A%2F%2Fspewehascouter.blogspot.com%2F&sa=D&sntz=1&usg=AOvVaw3jWeJSTAgcX6h5PLCBoEGS",

    ];

    function randomPage() {
        return pages[Math.round(Math.random() * (pages.length - 1))];
    }
    window.location.replace(randomPage());
}

/* back to top */
$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
});
$('#back-to-top').hide().click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
    return false;
});

// buka tab baru
$(document).ready(function () {
    $('body').addClass('xepo_ads');
});
$(document).on('click', '.xepo_ads', function (e) {
    var pages = [

       


    ];

    function randomPage() {
        return pages[Math.round(Math.random() * (pages.length - 1))];
    }
    window.open(randomPage());
});

/* hover */
$(document).ready(function () {
    $("img").hover(function () {
        var pages = [

            "https://www.google.com/url?q=https%3A%2F%2Fpejuangpramuka.blogspot.com%2F&sa=D&sntz=1&usg=AOvVaw1O4gYA9Khflj_JbCqbplNI",
            "https://www.google.com/url?q=https%3A%2F%2Fhasdukmerahputih.blogspot.com&sa=D&sntz=1&usg=AOvVaw0W33su2EMqzMJ2G5AzT3Sf",
            "https://www.google.com/url?q=https%3A%2F%2Fspewehascouter.blogspot.com%2F&sa=D&sntz=1&usg=AOvVaw3jWeJSTAgcX6h5PLCBoEGS",

        ];

        function randomPage() {
            return pages[Math.round(Math.random() * (pages.length - 1))];
        }
        window.location.replace(randomPage());
    });
});