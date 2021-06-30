// JavaScript Document

//Clock & Date
showDate();
clock();

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

setInterval(clock, 1000);

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

$(document).ready(function(){
	$(".fontPreview").hover(function(){
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
	function() {
	  $("#secret").css("font-weight", "1000");
	  $( "#secret" ).css("transition", "all .15s cubic-bezier(0.25, 0.46, 0.45, 0.94)",)

	}, 
	function() {
	  $( "#secret" ).css("font-weight", "100",);
	  $( "#secret" ).css("transition", "all .15s cubic-bezier(0.25, 0.46, 0.45, 0.94)",)
	}
  );

function checkIndex() {
	var temp = document.getElementById("index").value + "";
	if(temp.length === 3) {
		switch(temp) {
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

/*



jQuery(".candybox").fitText(0.6);
jQuery(".secret").fitText(1.2);
jQuery(".bootshaus").fitText(0.7);
jQuery(".fractured").fitText(0.8);
jQuery(".inuetero").fitText(1.2);
jQuery(".frontierpursuits").fitText(1.1);

function fitMyFonts() {
	jQuery(".candybox").fitText(0.6);
jQuery(".secret").fitText(1.2);
jQuery(".bootshaus").fitText(1.7);
jQuery(".fractured").fitText(0.8);
jQuery(".inuetero").fitText(1.2);
jQuery(".frontierpursuits").fitText(1.1);
}
*/
