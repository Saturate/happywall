$(function() {
	var flippers = [{
	    color: '#84BF6B',
	    height: 12,
	    width: 17,
	}, {
	    color: '#F1E96C',
	    height: 12,
	    width: 18,
	},
	{
	    color: '#F1E96C',
	    height: 12,
	    width: 18,
	},
	{
	    color: '#F1E96C',
	    height: 12,
	    width: 18,
	},
	{
	    color: '#F1E96C',
	    height: 12,
	    width: 18,
	},
	{
	    color: '#F1E96C',
	    height: 12,
	    width: 18,
	},
	{
	    color: '#F1E96C',
	    height: 12,
	    width: 18,
	},
	{
	    color: '#F1E96C',
	    height: 12,
	    width: 17,
	}]

	$.each(flippers, function(index,group) {
	   console.log(index,group,  group.width * group.height);
	    var i = 0;
	    var tiltes =  group.width * group.height;

	  for (i = 0; i < tiltes; i++) {
	    $('.ws-' + (index+1))
	        .append('<div class="wall-plate" id="'+(index+1) + '-'+ i+'"></div>');
	  }
	});

	/*$('.wall-plate').each(function () {
	    if (!Math.floor(Math.random() * 5)) {
	        $(this).addClass('flipped');
	    }
	})*/

  var isDown = false;   // Tracks status of mouse button

	$(document).mousedown(function() {
		isDown = true;      // When mouse goes down, set isDown to true
	})
	.mouseup(function() {
		isDown = false;    // When mouse goes up, set isDown to false
	});

	$('.wall-plate').on('mousedown', function () {
	    console.log('hehe', $(this).hasClass('flipped'));
	    isDown = true; 
	    if ($(this).hasClass('flipped')) {
	        $(this).removeClass('flipped');
	    } else {
	        $(this).addClass('flipped');
	    }
	}).on('mouseup', function () {
		isDown = false;
	}).on('mouseover', function () {
		if(isDown) {        // Only change css if mouse is down
			if ($(this).hasClass('flipped')) {
		        $(this).removeClass('flipped');
		    } else {
		        $(this).addClass('flipped');
		    }
		}
	});

	$('.js-make-preview').on('mousedown', function () {
	    html2canvas($('#happywall')[0]).then(function(canvas) {
		    $('.preview').html(canvas);
		});
	});

	$('.js-make-screen').on('mousedown', function () {
	    html2canvas($('#happywall')[0]).then(function(canvas) {
		    $('.full-size').html(canvas);
		});
	});

	socket.on('connectedCount', function(msg){
		$('.onlineUsers').text(msg);
	});
});
