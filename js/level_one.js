$(document).ready(function() {
	$(".answer").mouseover(function() {
		$("#mylight").attr("src", "./img/hover_light.jpg");
	})
	$(".answer").mouseout(function() {
		$("#mylight").attr("src", "./img/light.png");
	})
});

$(document).ready(function() {
	$(".game").click(function() {
		//console.log($(".game").css("cursor"));
		$(".game").css("cursor", "url('./img/hit.png')50 50,auto");
		//console.log($(".game").css("cursor"));

		setTimeout(function() {
			//console.log($(".game").css("cursor"));
			$(".game").css("cursor", "url('./img/hammer.png')50 50,auto");
		}, 250);


	})
});


let interval = [];

function insertCock() {

	interval[1] = setInterval(function() {

		let left = $("#1").css("left");
		let top = $("#1").css("top");
		run(1);
	}, 100);


	for (let i = 2; i <= 10; i++) {

		let parent = document.getElementById("range");
		let sib = document.getElementById("first");
		let obj = createNewCock(i);
		parent.insertBefore(obj, sib);
		sib = obj;

		interval[i] = setInterval(function() {

			let left = $("#" + i.toString()).css("left");
			let right = $("#" + i.toString()).css("right");
			run(i);

		}, 100);

	}



}

let MoveSize = 10;
let isClicked = 0;

function clickCockroach(x) {
	console.log(x);
	x.setAttribute("src", "./img/cockroach_dead.png");
	x.setAttribute("onclick", "");
	clearInterval(interval[x.id]);
	MoveSize += 5;
	isClicked++;
	console.log(isClicked);
	setTimeout(isWin, 300);

}

function isWin() {
	if (isClicked === 10) {
		$("#win").dialog("open");
	}
	//alert("Win");
}

function createNewCock(i) {

	var newNode = document.createElement("IMG");
	newNode.setAttribute("src", "./img/cockroach.png");
	newNode.setAttribute("class", "cockroach");
	newNode.onclick = function(newNode) {
		clickCockroach(newNode.toElement)
	};
	newNode.setAttribute("id", i);
	//console.log(newNode);
	let allX = $("#range").width() - $("#1").width();
	let allY = $("#range").height() - $("#1").height();
	//console.log(allX, allY);
	newNode.style.left = rand(allX) + 'px';
	newNode.style.top = rand(allY) + 'px';
	return newNode;
}

function rand(q) {
	return Math.floor(Math.random() * (q + 1));
}
let Xstep = 10;
let Ystep = 10;

function run(i) {
	let MoveTop = Math.floor(10 + (Math.random() * MoveSize));
	let MoveLeft = Math.floor(10 + (Math.random() * MoveSize));



	let currentX = parseInt($("#" + i.toString()).css("left").substring(0, $("#" + i.toString()).css("left").length - 2));
	let currentY = parseInt($("#" + i.toString()).css("top").substring(0, $("#" + i.toString()).css("top").length - 2));

	let maxX = $("#range").width() - $("#" + i.toString()).width();
	let maxY = $("#range").height() - $("#" + i.toString()).height();



	if (currentX >= maxX - 10) {
		Xstep = -MoveLeft;
	}
	if (currentX <= 0) {
		Xstep = MoveLeft;
	}


	if (currentY <= 100) {
		Ystep = MoveTop;
	}
	if (currentY >= 350) {
		Ystep = -MoveTop;
	}

	currentX += Xstep;
	currentY += Ystep;

	$("#" + i.toString()).css("left", currentX.toString() + "px");
	$("#" + i.toString()).css("top", currentY.toString() + "px");



}

//setting dialog
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