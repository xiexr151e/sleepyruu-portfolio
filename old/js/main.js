// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "Hello!" +
    			"\nIf you're here, you're probably wondering who made this site." +
    			"\nI am but a simple friend of Ruu's. Possibly her brother." + 
    			"\nHave a nice day!"
   				);

    /* Modified modal code so clicking outside the modal closes it */
    $('.modal-dialog').on('click tap', function(e){
  		if ($(e.target).hasClass('modal-dialog')) {
    		$('.modal').modal('hide');
  		}
	});
});
