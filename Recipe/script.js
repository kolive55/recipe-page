$(document).ready(function() {
	$("button.btn-hide").click(function(){
		if($.trim($(this).text()) === 'Hide Image'){
			$(this).text('View Image');
		} else {
			$(this).text('Hide Image');
		}
		return false;
	});

	$('.btn-hide').click(function(){
		$('.l-img').slideToggle("slow", function(){
		});	
	});
	$("input:checkbox").click(function(){
		var $this = $(this);
		if (this.checked){
			$this.parent().addClass('completed');
		} else {
			$this.parent().removeClass('completed');
		}	
		});
	$("p").hover(function(){
		$(this).toggleClass('highlight');
	});
	
	
});	


	//});

