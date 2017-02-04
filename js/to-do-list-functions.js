$(document).ready(function(){

	var taskList = $('.task-list');
	var addButton = $('.btn-add');
	var alert = $('.alert');

	$(addButton).click(function(){
    	var taskAdded = $('input[name=ListItem]').val();

    	if(taskAdded.length < 1){
    		$(alert).show();
    	}else{
			$(taskList).append('<li>' + taskAdded + '<div class="delete">Delete</div>' + '</li>');
			$(taskList).children('li').addClass('list-item');
			$(alert).hide();
	    	$('input[name=ListItem]').val("");
    	}

    	$('.delete').click(function(e){
			$(e.currentTarget).parent('.list-item').remove();
		});
	});
});