$(document).ready(function() {
	$(".answer").mouseover(function() {
		$("#mylight").attr("src", "./img/hover_light.jpg");
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
	    x.setAttribute("src", "./img/a" + x.id + ".png");
		check[x.getAttribute("id")] = 1;
    }
	else if(x.getAttribute("src")[6] === "a")
	{
		x.setAttribute("src", "./img/b" + x.id + ".png");
		check[x.getAttribute("id")] = 0;
	}
	
	if(checkWin());
	{
		alert("win");
	}
}

function checkWin()
{
	if(check[0]===1 && check[1]===0 && check[2]===0 && check[3]===1 && check[4]===0 && check[5]===0 && check[6]===0 && check[7]===0 && check[8]===0 && check[9]===0)
		return true;
	return false;
}

$(function() {
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
