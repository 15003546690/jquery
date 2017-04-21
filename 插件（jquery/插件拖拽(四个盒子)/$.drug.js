;(function($){
	$.fn.slider=function(opt){
		var obj={
			width:200,
			height:200,
			bg:'',
			text:'',
			id:'',
			left:'',
			top:'',
			isdrug:true
		}
		var set=$.extend({},obj,opt);
		//单击的时候创建一个div
		$(this).on('click',function(){
			if($("#"+set.id).length>0){
				$("#"+set.id).remove();
			}
			var newdiv=$("<div id="+set.id+">"+set.text+"<span class='close'>X</span></div>");
			newdiv.css({'width':set.width,'height':set.height,'background':set.bg,'position':'absolute','left':set.left,'top':set.top});
			newdiv.appendTo('body').fadeIn(1000);
			//点击span的时候删除创建的div
			$('.close').on('click',function(){
				$(this).parent().fadeOut(1000)
			})
			//拖拽盒子
			if(set.isdrug==true){
				auto();
			}
			function auto(){
				newdiv.on('mousedown',function(e){
					var l=e.pageX-$(this).offset().left;
					var t=e.pageY-$(this).offset().top;
					var that=$(this);
					$(document).on('mousemove',function(e){
						var L=e.pageX-l;
						var T=e.pageY-t;
						newdiv.css({"left":L,"top":T});
					})
					newdiv.on("mouseup",function(){
						$(document).off("mousemove");
					})
				})
				
			}
			
		})
	}
})(jQuery);