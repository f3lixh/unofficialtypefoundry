showDate();
clock();
setInterval(clock, 1000);

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
