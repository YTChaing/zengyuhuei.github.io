
$(document).ready(function() {
	$(".answer").mouseover(function() {
		$("#mylight").attr("src", "./img/hover_light.jpg");
		
	})
	$(".answer").click(function() {
		var sound = document.getElementById("audio");
		sound.play();
		
		sound.currentTime=0;
	})
	$(".btn").mouseover(function() {
		
		var sound = document.getElementById("buttom");
         sound.play();
		
		
	})
	
	$(".answer").mouseout(function() {
		$("#mylight").attr("src", "./img/light.png");
	})
});
let check = [0,0,0,0,0,0,0,0,0,0];
function clickCandle(x) {
	console.log(check);
	if(x.getAttribute("src")[6] === "b")
	{
		var sound = document.getElementById("candle");
		sound.play();
	    x.setAttribute("src", "./img/a" + x.id + ".png");
		check[x.getAttribute("id")] = 1;
    }
	else if(x.getAttribute("src")[6] === "a")
	{
		
		x.setAttribute("src", "./img/b" + x.id + ".png");
		check[x.getAttribute("id")] = 0;
	}
	console.log(check);
	console.log(checkWin());
	
	setTimeout(checkWin(), 300);
	
}

function checkWin()
{
	if(check[0]===1 && check[1]===0 && check[2]===0 && check[3]===1 && check[4]===0 && check[5]===0 && check[6]===0 && check[7]===0 && check[8]===0 && check[9]===0)
	{
		var sound = document.getElementById("happybirthday");
		sound.play();
		$("#win").dialog("open");
	}
}

$(function() {
	$("#card").dialog({
		draggable: false,
		resizable: false,
		autoOpen: false,
		show: {
			effect: "blind",
			duration: 1000
		},
		hide: {
			effect: "fade",
			duration: 1000
		},
		
		modal: true,
		width: 900,
		height: 400
	});
	
	$("#win").dialog({
		closeOnEscape: false,
		open: function(event, ui) {
			$(".ui-dialog-titlebar-close", ui.dialog | ui).hide();
		},
		draggable: false,
		resizable: false,
		autoOpen: false,
		show: {
			effect: "blind",
			duration: 4000
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
		/*buttons: {
			"關閉": function() {
				$(this).dialog("close");
			}
		},*/
		modal: true,
		width: 400
	});

	$("#prompt").on("click", function() {
		$("#dialog").dialog("open");
	});
});
