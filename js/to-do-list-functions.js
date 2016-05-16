$(document).ready(function(){

	var taskList = $('.task-list');
	var addButton = $('.btn-add');

	$(addButton).click(function(){
    	var taskAdded = $('input[name=ListItem]').val();
		
		$(taskList).append('<li>' + taskAdded + '<button class="delete">Delete</button>' + '</li>');
		$(taskList).children('li').addClass('list-item');

		$('.delete').click(function(e){
			$(e.currentTarget).parent('.list-item').remove();
		});
	});

});