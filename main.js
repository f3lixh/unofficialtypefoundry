// JavaScript Document

//Clock & Date

/* deBugCopyFontPanel();
deBugCopyFontPanel();
deBugCopyFontPanel();
deBugCopyFontPanel();
deBugCopyFontPanel();
deBugCopyFontPanel();
changeFonts(); */

/* $(".ton").parents(".con").find(".son").toggleClass("bg-red"); */

/* Silders */

/*
 */
/* $('.fonts-slider-leading').each(function(){	
  this.oninput = function( ) {
    $(this).parent().parent().next("div").css("letter-spacing", this.value +"px");	
  }}); */
//DEBUG
function deBugCopyFontPanel() {
  var itm = document.getElementsByClassName("fonts-listitem")[0];
  console.log(itm);
  var cln = itm.cloneNode(true);
  document.getElementById("fonts-section").appendChild(cln);
}

/* $('.fonts-listitem').hover(function() {
	
  $(this).children(".fonts-li-metadata").children().toggleClass("hide");
  $(this).children(".fonts-hr").toggleClass("hide");
}) */

/*
 */
/* $(document).ready(function () {
  $(".fontPreview").hover(function () {
    var tempColorID = Math.floor(Math.random() * 5);
    switch (tempColorID) {
      case 0:
        $(this).css("border-color", "red");
        break;
      case 1:
        $(this).css("border-color", "blue");
        break;
      case 2:
        $(this).css("border-color", "lime");
        break;
      case 3:
        $(this).css("border-color", "yellow");
        break;
      default:
        $(this).css("border-color", "cyan");
    }
  });
});

$(".secret").hover(
  function () {
    $("#secret").css("font-weight", "1000");
    $("#secret").css(
      "transition",
      "all .15s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
    );
  },
  function () {
    $("#secret").css("font-weight", "100");
    $("#secret").css(
      "transition",
      "all .15s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
    );
  }
);
 */
function checkIndex() {
  var temp = document.getElementById("index").value + "";
  if (temp.length === 3) {
    switch (temp) {
      case "100":
        location.replace("http://127.0.0.1:5500/index.html");
        break;
      case "200":
        location.replace("http://127.0.0.1:5500/fonts.html");
        break;
      case "900":
        location.replace("http://127.0.0.1:5500/imprint.html");
        break;
      default:
        console.log("Dumb");
    }
  }
}

function changeBurgerCharacter() {
  const navbarContainer = document.getElementsByClassName("nav-container")[0];
  const navButtons = document.getElementsByClassName("set-left")[0];
  navbarContainer.classList.toggle("active");
  navButtons.classList.toggle("active");

  const navIcon = document.getElementById("nav-button").innerHTML;
  switch (navIcon) {
    case "\u2630":
      $("#nav-button").text("\u2612");
      break;
    case "\u2612":
      $("#nav-button").text("\u2630");
      break;
    default:
      $("#nav-button").text("\u2612");
  }
}

/* setInterval(seedPageIndex, 100);
function seedPageIndex() {
  $("#nav-index").text(Math.floor(Math.random() * (999 - 100 + 1) + 100));
} */
shufflePageIndex();

function shufflePageIndex() {
  var oldPageIndex = Math.floor(Math.random() * (901 - 101 + 1) + 101);
  var newPageIndex = Math.floor(Math.random() * (901 - 101 + 1) + 101);

  var difference = Math.abs(oldPageIndex - newPageIndex);

  var pageSteps = [];

  for (var i = 0; i < Math.floor(Math.random() * (30 - 6 + 1) + 6); i++) {
    pageSteps.push(
      Math.floor(
        Math.random() * (newPageIndex - oldPageIndex + 1) + oldPageIndex
      )
    );
  }

  var tempLength = pageSteps.length;

  if (oldPageIndex < newPageIndex) {
    pageSteps.sort();
  } else {
    pageSteps.sort();
    pageSteps.reverse();
  }

  var interval = setInterval(test, 200);

  function test() {
    if (pageSteps.length != 0) {
      $("#nav-index").text(pageSteps[0]);
      pageSteps.shift();
    } else {
      clearInterval(interval);
      $("#nav-index").text(newPageIndex);
    }
  }
}
