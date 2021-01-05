
(function($){
	function floatLabel(inputType){
		$(inputType).each(function(){
			var $this = $(this);
			// on focus add cladd active to label
			$this.focus(function(){
				$this.next().addClass("active");
			});
			//on blur check field and remove class if needed
			$this.blur(function(){
				if($this.val() === '' || $this.val() === 'blank'){
					$this.next().removeClass();
				}
			});
		});
	}
	// just add a class of "floatLabel to the input field!"
    floatLabel(".floatLabel");
    
    $('.submit').click(function(){
        $('#orgName').val('');
        $('#pName').val('');
        $('#orgType').val('');
        $('#OrgTier').val('');
        $('.controls label.active').css({'top':'12px','color':'#999'})
    });

    $('.tab-item').click(function(){
        $('.nav-tabs').children("li").removeClass("active");
        $(this).addClass("active")
    });
})(jQuery);