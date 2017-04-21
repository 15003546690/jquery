;(function ($) {
	$.fn.td=function(opt){
		var obj={
			'istd':true,
			'type':'click',
			'width':'',
			'height':'',
			'id':'',
			'btn':'',
			'bg':'',
			'left':'',
			'top':''
		};

		var set=$.extend({},obj,opt);

		$('#'+set.btn).on(set.type,function(){
			if ($('#'+set.id).length>0) {return false};
			$('<div id="'+set.id+'">this  is  a div</div>').appendTo('body');

			$('#'+set.id).css({"width":set.width,"height":set.height,"background":set.bg,"position":"absolute","left":set.left,"top":set.top});

			if (set.istd) {
				$('#'+set.id).on('mousedown',function(e){
					var l=e.pageX-$(this).offset().left;
					var t=e.pageY-$(this).offset().top;
					var that=$(this);
					$(document).on('mousemove',function(e){
						var movl=e.pageX-l;
						var movt=e.pageY-t;
						that.css({'left':movl,'top':movt})
					}).on('mouseup',function(){
						$(this).off('mousemove');
					});
				});
			};

		});




	};
})(jQuery);