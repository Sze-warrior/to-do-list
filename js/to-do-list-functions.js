$(document).ready(function(){

	var ToDolist = $('.list-of-things');
	var addButton = $('.add');

	$(addButton).click(function(){

    	var toAdd = $('input[name=ListItem]').val();    
		$(ToDolist).append('<li>' + toAdd + '<button class="delete">Delete</button>' + '</li>');
		$('li').addClass('list-item');

	$('.delete').click(function(e){
		$(e.currentTarget).parent('.list-item').remove();
	});


	});
});