	/*---------------------------------------------------- */
	/* Smooth Scrolling
	------------------------------------------------------ */
	$('.smoothscroll').on('click', function(e) {

	    e.preventDefault();

	    var target = this.hash,
	        $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function() {
	        window.location.hash = target;
	    });

	});

	/*---------------------------------------------------- */
	/*	Masonry
	------------------------------------------------------ */
	var containerProjects = $('#folio-wrapper');

	containerProjects.imagesLoaded(function() {

	    containerProjects.masonry({
	        itemSelector: '.folio-item',
	        resize: true
	    });

	});


	/*----------------------------------------------------*/
	/*	Modal Popup
	------------------------------------------------------*/
	$('.item-wrap a').magnificPopup({

	    type: 'inline',
	    fixedContentPos: false,
	    removalDelay: 300,
	    showCloseBtn: false,
	    mainClass: 'mfp-fade'

	});

	$(document).on('click', '.popup-modal-dismiss', function(e) {
	    e.preventDefault();
	    $.magnificPopup.close();
	});

	/*---------------------------------------------------- */
	/* Owl Carousel
	------------------------------------------------------ */
	$("#owl-slider").owlCarousel({
	    navigation: false,
	    pagination: true,
	    itemsCustom: [
	        [0, 1],
	        [700, 2],
	        [960, 3]
	    ],
	    navigationText: false
	});

	$(document).ready(function() {

	    setTimeout(function() {
	        $('body').addClass('loaded');
	        $('h1').css('color', '#222222');
	    }, 3500);

	});

	// add click event
	$('#click-area').on("click", function() {
	    $(this).css("cursor", "auto");

	    $("#graphic").attr("src", "/assets/imgs/transparent_onclick.gif");
	    setTimeout(typing, 3300);

	});

	function typing() {
	    $('#graphic').attr("src", "/assets/imgs/transparent_bird.gif");
	    $('#click-area').css("cursor", "pointer");
	}