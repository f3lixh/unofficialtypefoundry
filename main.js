// JavaScript Document

//Clock & Date
showDate();
clock();
deBugCopyFontPanel();
deBugCopyFontPanel();
deBugCopyFontPanel();
deBugCopyFontPanel();
changeFonts();

/* Silders */

$('.fonts-slider-size').each(function(){	
	this.oninput = function( ) {
		$(this).parent().parent().next("div").css("font-size", this.value +"px");	
	}});

$('.fonts-slider-tracking').each(function(){	
	this.oninput = function( ) {
		$(this).parent().parent().next("div").css("line-height", this.value +"%");	
	}});

/* $('.fonts-slider-leading').each(function(){	
	this.oninput = function( ) {
		$(this).parent().parent().next("div").css("letter-spacing", this.value +"px");	
	}}); */
	//DEBUG
	function deBugCopyFontPanel() {
		var itm = document.getElementsByClassName("fonts-listitem")[0];
		console.log(itm);
		var cln = itm.cloneNode(true);
		document.getElementById('fonts-section').appendChild(cln);
		
	}
		
function showFontFeatures(elmnt) 
{
	/* x.classList.toggle("fonts-features"); */
	console.log($(elmnt).parent())
	$(elmnt).parent().parent().children(".fonts-feature-container").toggleClass("box");
}
function changeFonts() {
	//DEBUG
	var i = document.getElementsByClassName("typeface-newaustin");
	i[1].style.fontFamily = "invetero";
	i[2].style.fontFamily = "Secret-VF";
	i[3].style.fontFamily = "Karolin";
	i[4].style.fontFamily = "CaptainLoggins Rocks";
}
function toggleFontFeature(elmnt) 
{
	/* console.log($(elmnt).parent().parent().children(".fonts-li-tester"))
	$(elmnt).parent().parent().children(".fonts-li-tester").toggleClass(elmnt.value); */

	/* var f = $(elmnt).parent().parent().children(".fonts-active-otf").css("font-feature-settings");
	if(f.includes(elmnt.value)){
		console.log("true:" + f);
		var newString2 = f.replaceAll('"' + elmnt.value + '"',"");
		
		newString2 = newString2.replace(', ,', ", ");
		console.log("pas" + newString2)
		$(elmnt).parent().parent().children(".fonts-active-otf").css("font-feature-settings", newString2);
	} else {
		console.log("false:" + f);
		var newString = f.concat(', "' + elmnt.value + '"')
		console.log(newString)
		$(elmnt).parent().parent().children(".fonts-active-otf").css("font-feature-settings", newString);
	} */

	/* 	console.log(f);
	var store = [];
	var features = f.split(', ');
features.forEach(element => {
	if(element.includes(' 0') || element.includes(' 1')) {
		store.push(element.substr(0,6),"fuck")
		console.log(store[0])
	} else {
		
	}
});
 */
	var f = $(elmnt).parent().parent().children(".fonts-active-otf").css("font-feature-settings");
 	/* console.log(f); */
	var store = [];
	var features = f.split(', ');
	features.forEach(element => {
		if(element.length > 6) {
		//With Integer
			store.push(element)
		} else {
			element = element + " 1";
			store.push(element)
		}
	});
	
	var changeIndex = store.findIndex(element => element.includes(elmnt.value))

	if(changeIndex == -1){
		store.push('"' + elmnt.value + '" 1')
	} else {
		if(store[changeIndex].includes(" 0")){
			store[changeIndex] = store[changeIndex].replace(" 0", " 1")
			$(elmnt).css("color", "blue")
		} else {
			store[changeIndex] = store[changeIndex].replace(" 1", " 0")
			$(elmnt).css("color", "black")
		}

	}
	/* store.forEach(element => {
		console.log(element)
	}) */

	
	$(elmnt).parent().parent().children(".fonts-active-otf").css("font-feature-settings", store.join(", "))




}

$('.fonts-listitem').hover(function() {
	
	$(this).children(".fonts-li-metadata").children().toggleClass("hide");
	$(this).children(".fonts-hr").toggleClass("hide");
})
	

/* document.getElementById("homepage-cover").addEventListener('mousemove', function(e) {

	var weight = ((800/(document.getElementById("homepage-cover").offsetWidth))*e.x +100);
	var width = "'wdth' " + ((55/(document.getElementById("homepage-cover").offsetHeight))*e.y +70);
	$("#homepage-var-font").css("font-weight", weight)
	$("#homepage-var-font").css("font-variation-settings", width)

});
 */





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