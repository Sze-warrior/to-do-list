$(document).ready(function(){

	var ToDolist = $('.list');
	var addButton = $('.add');

	$(addButton).click(function(e){

    	var toAdd = $('input[name=ListItem]').val();    
		$(ToDolist).append('<li>' + toAdd + '</li>');

	});

});

$(document).ready(function(){
    
    $(document).on('click','.item', function(){     
        $(this).remove();
        });
    
});