$('#js-flip').bind({
    click: function() {
        $('#js-flip .card').toggleClass('flipped');
    },
    mouseleave: function() {
	    	if ($('#js-flip .card').hasClass('flipped')) {
	    	    $('.card').removeClass('flipped');
	      }
	  }
});

$('#js-flip-1').bind({
    click: function() {
        $('#js-flip-1 .card').toggleClass('flipped');
    },
    mouseleave: function() {
	    	if ($('#js-flip-1 .card').hasClass('flipped')) {
	    	    $('.card').removeClass('flipped');
	      }
	  }
});

$('#js-flip-2').bind({
    click: function() {
        $('#js-flip-2 .card').toggleClass('flipped');
    },
    mouseleave: function() {
	    	if ($('#js-flip-2 .card').hasClass('flipped')) {
	    	    $('.card').removeClass('flipped');
	      }
	  }
});

$('.containerOne').on('click', function () {
  $('.cardOne').toggleClass('flippedOne');
});
