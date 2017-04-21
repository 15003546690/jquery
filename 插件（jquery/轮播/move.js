;(function($){
	$.fn.move=function(opt){
		var obj={
			//'type':'',
			'isautoplay':'',
			'id':'',
			'ul':'',
			'ol':'',
			'left':'',
			'right':'',
			'time':'',
			'speed':''
		}
		var set=$.extend({},obj,opt);

		var timer=null,
			index=0;
		var len=$(set.ul).children('li').length
		var w=$(set.ul).children('li').width()
		$(set.ul).width(w*len)
		//自动播
		function autoplay(){
			timer=setInterval(function(){
					leftimg();
				},set.speed)
			}
		//是否自动播
		if(set.isautoplay){
			autoplay()
		}
		//图片运动
		function leftimg(){
			index++;
			if (index>len-1) {
				$(set.ul).width(w*(len+1))
		   	 	$(set.ul).children('li').first().clone().appendTo(set.ul)
				$(set.ul).stop().animate({'margin-left':-w*len},set.time,function(){
			 		$(set.ul).children('li').last().remove();
			 		$(set.ul).css('margin-left',0);
					 })	
					$(set.ol).children('li').eq(0).addClass('bg').siblings().removeClass('bg')
					index=0;
				 }else{
				 	autoimg(index)
				 }
			}
		//划入划出
		$(set.ul).hover(function(){
			clearInterval(timer)
		},function(){
			autoplay()
		})
		//animate
		function autoimg(index){
				$(set.ul).stop().animate({'margin-left':-w*index},set.time)
				$(set.ol).children('li').eq(index).addClass('bg').siblings().removeClass('bg')
			}
		//点击ol切换	
		$(set.ol).children('li').each(function(){
			$(this).on('click',function(){
					index=$(this).index()
					autoimg(index)
				//index=inde
				});
			});
		//点击右的时候
		$(set.right).on('click',function(){
			index++
			if(index>len-1){
				index=0
			}
			autoimg(index)
		})
		//点击左的时候
		$(set.left).on('click',function(){
			index--
			if(index<0){
				index=len-1
			}
			autoimg(index)
		})
	}
})(jQuery)