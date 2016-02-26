$(document).ready(function(){

	var ToDolist = $('.list-of-things');
	var addButton = $('.add');

	$(addButton).click(function(){

    	var toAdd = $('input[name=ListItem]').val();    
		$(ToDolist).append('<li class="list-item">' + toAdd + '<button class="delete">Delete</button>' + '</li>');

	$('.delete').click(function(e){

		$(e.currentTarget).hide();
		$('.list-item').hide();

	});


	});
});