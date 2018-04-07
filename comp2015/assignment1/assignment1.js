/*js fiele for the comp 2015 assignment 1 */


function changeFontColorRed() {
    this.style.color = "red";
}

/*
Each paragraph in the DIVs with class "change" will turn their font colour to red when the mouse is on them, and change back to black when the mouse is off.
*/
function requirement1() {
    var divs = document.getElementsByClassName("change");

    for (var i = 0; i < divs.length; i++) {
        var div = divs[i];
        div.onmousemove = changeFontColorRed; //call back function way

        //on-site call bakc function
        div.onmouseout = function () {
            this.style.color = "black";
        }
    }
}

function clickOnParagraph() {
    if (this.style.borderWidth != "2px") {
        this.style.border = "dashed 2px black"
    } else {
        this.style.border = "none";
    }
}

/*
Each paragraph on the the page gets a black dashed border when it gets clicked; the border goes away when clicked again. This should work any number of times the paragraph is clicked.
*/
function requirement2() {
    var paras = document.getElementsByTagName("p");

    for (let i = 0; i < paras.length; ++i) {
        paras[i].onclick = clickOnParagraph;
    }
}

function doubleClickOnImg() {
    this.style.display = "none";
}

/*
Each image in a DIV whose id is "top" or "middle" gets its display style set to "none" when double clicked.
*/
function requirement3() {
    var imgs = document.querySelectorAll("div#top>img , div#middle>img");
    for (let i = 0; i < imgs.length; ++i) {
        imgs[i].ondblclick = doubleClickOnImg;
    }
}

function countLinkOk(div) {
    var adds = div.getElementsByTagName("a");

    let total = 0;

    for (let lnk of adds) {
        if (containsLink(lnk, "http://nhl.com")) {
            total += 1;
        }

    }
    return total > 0;
}

/*
Each DIV must contain at least one hyperlink linking to "http://nhl.com".
*/
function requirement4() {
    var divs = document.getElementsByTagName("div");

    for (let i = 0; i < divs.length; ++i) {
        if (countLinkOk(divs[i])) {
            //alert(divs[i].getAttribute("id") + " has at least one nhl link");
        } else {
            //alert(divs[i].getAttribute("id") + " DOES NO have at least on nhl link");
        }
    }
}

function containsLink(a, linkStr) {
    if (a == null || linkStr == null) {
        return false;
    }
    return a.href.indexOf(linkStr) != -1
}

/*
Each hyperlink in the DIV with id "bottom" should not work if they contain the string "nhl" in their href attribute. There are a few ways to accomplish this, but for this assignment, use **event.preventDefault()**
*/
function requirement5() {
    var links = document.querySelectorAll("div#bottom>a");
    for (let i = 0; i < links.length; ++i) {
        if (containsLink(links[i], "http://nhl.com")) {

            links[i].onclick = function (event) {
                event.preventDefault();
            }
        }
    }
}


window.onload = function () {
    requirement1();
    requirement2();
    requirement3();
    requirement4();
    requirement5();
}
