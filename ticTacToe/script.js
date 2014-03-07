//Need Jquery to place proper moves in proper squares $(square1) change attribute to X or O


$(document).ready(function() {
	var TTT = new window.TTT.Game();
	playGame(TTT);
});


var playGame = function(TTT) {
	boardCreate(9);
	$('.square').on("click", function(event) {
		var text = $(event.currentTarget).text();
		var index = $(".square").index($(event.currentTarget));
		var row = index%3;
		var col = Math.floor(index/3);
		var player = TTT.player;
		TTT.turn([col,row]);
		$(event.currentTarget).text(player);
		$(event.currentTarget).off("click");

		if (TTT.winner()) {
			alert(player + " Won!");
			boardDestroy();
		}
	});
};

var boardCreate = function(num) {
	for(i=0;i<num; i++){
		$('.container').append('<div class="square"></div>');
	}
};

var boardDestroy = function(num) {
	$('.container').empty();
	var TTT = new window.TTT.Game();
	playGame(TTT);
};
//if there is a property of X or O we remove the on click action, so user can only click empty squares

