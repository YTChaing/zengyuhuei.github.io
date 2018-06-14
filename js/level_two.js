
$(document).ready(function() {
		$(".answer").mouseover(function() {
			$("#mylight").attr("src", "./img/hover_light.jpg");
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
		function isWin() {
			$("#win").dialog("open");
			//alert("Win");
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
				modal: true,
				width: 400
			});

			$("#prompt").on("click", function() {
				$("#dialog").dialog("open");
			});
		});