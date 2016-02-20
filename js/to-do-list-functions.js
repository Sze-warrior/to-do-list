$(document).ready(function(){

	var ToDolist = $('.list');
	var addButton = $('.add');

	$(addButton).click(function(e){

		$(ToDolist).append("<li>Hi there</li>");

	});

});