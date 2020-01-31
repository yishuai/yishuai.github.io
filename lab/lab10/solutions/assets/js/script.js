$(document).ready(function() {
	const distanceToNextImage = -450;
	let currentImageNumber = 0;

	$("#lightbox").hide();

	$(".item").click(function() {
		currentImageNumber = parseInt($(this).attr("id"), 10);
		let newLeft = distanceToNextImage * currentImageNumber;
		$("#carousel-strip").css("left", newLeft);
		$("#lightbox").show();
	});
	

	// Carousel section
	$("#right").click(function() {
		currentImageNumber = (currentImageNumber + 1) % 9;
		$("#carousel-strip").css("left", currentImageNumber * distanceToNextImage + "px");

	});

	$("#left").click(function() {
		currentImageNumber = currentImageNumber == 0 ? 8 : (currentImageNumber - 1);
		$("#carousel-strip").css("left", currentImageNumber * distanceToNextImage + "px");
	});

	// OTHER CODE
	// This closes the lightbox when you click on the overlay or the x.
	$("#overlay, #close").click(function() {
		$("#lightbox").hide();
	})
});