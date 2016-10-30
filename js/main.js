$(function () {
	$.ajax({
	  url: "menu.html",
	  context: document.body
	}).done(function(data) {
	  $( '#menu' ).html(data);
	});
});