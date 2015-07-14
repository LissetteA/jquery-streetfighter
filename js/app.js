$(document) .ready(function() {
	$('.ryu') .mouseenter(function() {
		$('.ryu-still') .hide();
		$('.ryu-throwing').hide();
		$('.ryu-ready') .show();
		})
		.mouseleave(function() {
			$('.ryu-still') .show();
			$('ryu-throwing').hide();
			$('.ryu-ready') .hide();
		})
		.mousedown(function() {
			playHadouken();
			$('.ryu-ready').hide();
			$('ryu-cool').hide();
			$('.ryu-throwing').show();
			$('.hadouken') .finish() .show() .animate(
				{'left': '1020px'},
				500,
				function() {
					$(this) .hide();
					$(this) .css('left', '520px');
				}
			);
		})
		.mouseup(function() {
			$('.ryu-throwing').hide();
			$('.ryu-ready').show();
			//ryu goes back to his ready position
		});

	$('body').keydown(function(keyinput) {
		if (keyinput.keyCode === 88) {
			console.log("keydown");
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-cool').show();
			}
		})
		.keyup(function(e) {
			if (e.keyCode === 88) {
				console.log("keyup");
				$('.ryu-cool').hide();
				$('.ryu-ready').hide();
				$('.ryu-still').show();
			}
		});

});
	function playHadouken () {
		$('#hadouken-sound') [0] .volume = 0.5;
		$('#hadouken-sound') [0] .load();
		$('#hadouken-sound') [0] .play();
	}