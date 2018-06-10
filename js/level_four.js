$(document).ready(function() {
$(".answer").mouseover(function() {
	$("#mylight").attr("src", "./img/hover_light.jpg");
})
$(".answer").mouseout(function() {
	$("#mylight").attr("src", "./img/light.png");
})
});
$(function() {
	$("#win").dialog({
		open: function(event, ui) {
			$(".ui-dialog-titlebar-close", ui.dialog | ui).hide();
		},
		draggable: false,
		resizable: false,
		autoOpen: false,
		show: {
			effect: "blind",
			duration: 1000
		},
		hide: {
			effect: "explode",
			duration: 1000
		},
		modal: true,
		width: 400
	});

	$("#dialog").dialog({
		draggable: false,
		resizable: false,
		autoOpen: false,
		show: {
			effect: "blind",
			duration: 1000
		},
		hide: {
			effect: "explode",
			duration: 1000
		},
		modal: true,
		width: 400
	});

	$("#prompt").on("click", function() {
		$("#dialog").dialog("open");
	});
});
var num=0;
function count(x)
{
	console.log(num)
	x.setAttribute('style', 'border-style: solid;');
	x.setAttribute("onclick", "");
	num++;
	if (num == 10) {
		$("#win").dialog("open");
	}
}
var num2=0;
function next_page()
{
	if( num2%2 == 0 )
	  {
		document.getElementById("img1").src="./img/card_back.jpg";
		document.getElementById("card_text2").style.display = "";
		document.getElementById("card_text").style.display = "none";
	  }
	  else
	  {
		document.getElementById("img1").src="./img/card3.jpg";
		document.getElementById("card_text2").style.display = "none";
		document.getElementById("card_text").style.display = "";
	  }
	num2++;
}