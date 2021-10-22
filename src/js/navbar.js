showDate();
clock();
setInterval(clock, 1000);

/* console.log(localStorage.getItem("pageIndex"));

window.onload = () => {
  var getPageIndex = document.getElementById("nav-index").innerText;
  console.log(getPageIndex + "s");
  localStorage.setItem("pageIndex", getPageIndex);
}; */

function clock() {
  var time = new Date(),
    hours = time.getHours(),
    minutes = time.getMinutes(),
    seconds = time.getSeconds();
  document.getElementById("timeDisplay").innerHTML =
    harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);
}

function harold(standIn) {
  if (standIn < 10) {
    standIn = "0" + standIn;
  }
  return standIn;
}

function monthName(mon) {
  return [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May",
    "Jun.",
    "Jul.",
    "Aug.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dec.",
  ][mon];
}

function showDate() {
  var currentDate = new Date(),
    day = currentDate.getDate(),
    month = currentDate.getMonth(),
    year = currentDate.getFullYear();
  document.getElementById("dateDisplay").innerHTML =
    monthName(month) + " " + day + "th " + year;
}

/* const showNavbar = () => {
  const burger = document.querySelector(".nav-hamburger");
  const navbar = document.querySelector(".nav-ul");

  burger.addEventListener("click", () => {
    navbar.classList.toggle("nav-active");
  });
};

showNavbar();
 */

function toggleNavigation() {
  console.log("as");
  $(".nav-ul").toggleClass("nav-active");
}

$(".nav-button").click(() => {
  $(".nav-ul").toggleClass("nav-active");
});

shufflePageIndex();

function shufflePageIndex() {
  var oldPageIndex = parseInt(localStorage.getItem("pageIndex"));
  var newPageIndex = parseInt(document.getElementById("nav-index").innerText);

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
