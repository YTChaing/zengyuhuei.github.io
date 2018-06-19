
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
			/*effect: "explode",*/
			duration: 0
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
var myVar;

$(function(){
	$("#shake_cola").click(function() {
      $( "#dialog" ).dialog( "close" );
	 // $( ".shake_p" ).effect( "shake" );
	  $(".shake_p").effect( "shake", { direction: "up", times: 10, distance: 50}, 2000 );
	  myVar=setTimeout(shake_after, 2200);
	});
})
function shake_after()
{	
	document.getElementById("pic_people3").src="./img/cola.png";
	var sound = document.getElementById("cola_sound");
	sound.play();
	sound.currentTime=0;
	myVar=setTimeout(win, 500);
}
function win()
{
	$("#win").dialog("open");
}
function dropimage(event)
{
	//console.log(event.srcElement.style.top);
	var x = event.clientX;
	var y = event.clientY;

	event.srcElement.style.top = (parseInt(y)-300)+"px";
	event.srcElement.style.left = (parseInt(x)-100)+"px";

	
}

function dropword(event)
{
	console.log(event);
	var x = event.clientX;
	var y = event.clientY;
	event.srcElement.style.top = (parseInt(y)-event.srcElement.getBoundingClientRect().height/2-document.getElementsByClassName("game-text")[0].getBoundingClientRect().top)+"px";
	event.srcElement.style.left = (parseInt(x)-event.srcElement.getBoundingClientRect().width/2-document.getElementsByClassName("game-text")[0].getBoundingClientRect().left)+"px";

}

function allowDrop(event) {
    event.preventDefault();
}


