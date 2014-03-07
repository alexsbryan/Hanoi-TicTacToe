//Need Jquery to place proper moves in proper squares $(square1) change attribute to X or O

$(document).ready(function() {
	var hanoi = new window.Hanoi.Game();
	playGame(hanoi);
});


var playGame = function(hanoi) {
	boardCreate(3);
	takeTurn(hanoi);
};


var takeTurn = function(hanoi) {
	$('.container').on("click", function(event1) {
	 	var index1 = $(".container").index($(event1.currentTarget));
		$('.container').on("click", function(event2) {
			var index2 = $(".container").index($(event2.currentTarget));
			if(hanoi.move(index1, index2) === true) {
				var diskToMove = $($('.container')[index1]).children().first();
				diskToMove.remove();
				$($('.container')[index2]).prepend(diskToMove);
			}
			else {
				alert("invalid move");
			}
			$('.container').off('click');

			if(hanoi.isWon()===false){
				takeTurn(hanoi);
			} else {
				boardDestroy();
				alert("You Win")
			}

		});
	});
};

var boardCreate = function(num) {
	for(var i=0;i<num; i++){
		$('body').append('<div class="container"></div>');
	}

	$('.container').first().append('<div class="ring small"></div>');
	$('.container').first().append('<div class="ring medium"></div>');
	$('.container').first().append('<div class="ring large"></div>');

};

var boardDestroy = function(num) {
	$('.container').remove();
	var hanoi = new window.Hanoi.Game();
	playGame(hanoi);
};