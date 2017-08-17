
$(document).ready(function() {

	reset();

	
});

function reset() {
	var size = 10;
	$("#grid div").remove();
	for (var i = 1; i <= Math.pow(size, 2); i++) {
		$("#grid").append("<div></div>");
	};
	$("#grid div").height(500/size);
	$("#grid div").width(340/size);
};



$(document.body).on('mouseenter', '#grid div' ,function(){
	$(this).css("background-color", "#ecb613");
});

