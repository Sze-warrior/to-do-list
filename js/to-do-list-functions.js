$(document).ready(function(){

	var ToDolist = $('.list-of-things');
	var addButton = $('.add');

	$(addButton).click(function(){

    	var toAdd = $('input[name=ListItem]').val();    
		$(ToDolist).append('<li>' + toAdd + '</li>');
	});

	$('.delete').click(function(){

		$('li').hide();

	});
});