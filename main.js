// JavaScript Document

//Clock & Date
showDate();
clock();

var sliders = document.getElementsByClassName("fonts-slider");
sliders[0].oninput = function() {
	$(".fonts-li-tester").css("font-size", this.value + "px");
}

document.getElementById("homepage-cover").addEventListener('mousemove', function(e) {

	var weight = ((800/(document.getElementById("homepage-cover").offsetWidth))*e.x +100);
	var width = "'wdth' " + ((55/(document.getElementById("homepage-cover").offsetHeight))*e.y +70);
	$("#homepage-var-font").css("font-weight", weight)
	$("#homepage-var-font").css("font-variation-settings", width)

});



function clock() {
	var time = new Date(),
		hours = time.getHours(),
		minutes = time.getMinutes(),
		seconds = time.getSeconds();
	document.getElementById("timeDisplay").innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);
}

function harold(standIn) {
	if (standIn < 10) {
		standIn = '0' + standIn
	}
	return standIn;
}


function monthName(mon) {
	return ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'][mon];
}




function showDate() {
	var currentDate = new Date(),
		day = currentDate.getDate(),
		month = currentDate.getMonth(),
		year = currentDate.getFullYear();
	document.getElementById("dateDisplay").innerHTML = monthName(month) + " " + day + "th " + year;
}

$(document).ready(function () {
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
		$("#secret").css("transition", "all .15s cubic-bezier(0.25, 0.46, 0.45, 0.94)",)

	},
	function () {
		$("#secret").css("font-weight", "100",);
		$("#secret").css("transition", "all .15s cubic-bezier(0.25, 0.46, 0.45, 0.94)",)
	}
);

function checkIndex() {
	var temp = document.getElementById("index").value + "";
	if (temp.length === 3) {
		switch (temp) {
			case "100":
				location.replace("http://127.0.0.1:5500/index.html")
				break;
			case "200":
				location.replace("http://127.0.0.1:5500/fonts.html")
				break;
			case "900":
				location.replace("http://127.0.0.1:5500/imprint.html")
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
		case '\u2630':
			$("#nav-button").text('\u2612');
			break;
		case '\u2612':
			$("#nav-button").text('\u2630');
			break;
		default:
			$("#nav-button").text('\u2612');
	}
}