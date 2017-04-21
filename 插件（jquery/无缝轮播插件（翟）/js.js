//最外层窗口命名：class=wrap；
//里面ul命名：class=banner；
// <div class="wrap">
// 	<ul class="banner">
// 		<li><img src='img/bg4.jpg'></li>
// 		<li><img src='img/bg1.jpg'></li>
// 		<li><img src='img/bg2.jpg'></li>
// 		<li><img src='img/bg3.jpg'></li>
// 		<li><img src='img/bg4.jpg'></li>
// 		<li><img src='img/bg1.jpg'></li>
// 	</ul>
// </div>


;(function(){
	$.fn.slider=function(opt){

		function getOpt (){

			return $.extend({},{
				w:300,//外层窗口宽度
				h:200,//外层窗口高度
				autoPlay:true,//是否自动轮播
				arrowBtn:true,//是否有左右箭头
				numBtn:true,//是否有焦点
				time:2000,
				speed:400,
				numevent:'click',//绑定的事件
				arrowevent:'click'//绑定的事件
			},opt)
		}
		// 设置需要的变量
		var sets=getOpt(),timer=null,index=1;
		// 获取页面元素
		var wrap=$(this),
			banner=wrap.children('.banner'),
			li=banner.children('li'),
			len=li.length;
		// 设置样式
		wrap.css({
			'width':sets.w,
			'height':sets.h,
			'overflow':'hidden',
			'position':'relative'
		});
		banner.css({
			'position':'absolute',
			'width':sets.w*li.length,
			'left':-sets.w
		});
		li.css({
			'width':sets.w,
			'height':sets.h,
			'list-style':'none',
			'float':'left'
		}).find('img').css({'width':sets.w,'height':sets.h});
		// 添加左右箭头
		if(sets.arrowBtn){
			var left=$('<span class="left"><</span>').appendTo(wrap);
			var right=$('<span class="right">></span>').appendTo(wrap);
			var span_h=left.outerHeight();
			left.css({'position':'absolute','top':sets.h/2-span_h/2,'left':40})
			right.css({'position':'absolute','top':sets.h/2-span_h/2,'right':40})
			// 绑定事件
			left.on(sets.arrowevent,function(){
				if(banner.is(':animated')){
					return false;
				}
				index--;
				if(index<1){
					banner.stop().animate({"left":0},sets.speed,function(){
						banner.css('left',(2-len)*sets.w)
					});
					if(sets.numBtn){
						div.find('a').last().addClass('a').siblings().removeClass('a');
					}

					index=len-2;
				}else{
					change(index)
				}
			});
			right.on(sets.arrowevent,function(){
				if(banner.is(':animated')){
					return false;
				}
				move();
			});
		}
		// 添加焦点
		if(sets.numBtn){
			var div=$('<div class="numBtn"></div>')
			creatNum(li.length-2).appendTo(div);
			div.find('a').first().addClass('a');
			div.appendTo(wrap);
			var div_w=div.outerWidth();
			console.log(div_w)
			div.css({
				'position':'absolute',
			});
			div.children('a').on(sets.numevent,function(){
				index=$(this).index()+1;
				change(index);
			})

		}
		// 创建焦点函数
		function creatNum(i){
			var str='';
			for(var k=1;k<=i;k++){
				str+='<a>'+k+'</a>'
			}
			return $(str);
		}
		// 是否自动播放
		if(sets.autoPlay){
			auto();
		}
		// 自动轮播函数
		function auto(){
			timer=setInterval(move,sets.time);
		}
		// 整体动画函数
		function move(){
			index++;
			if(index>len-2){
				banner.stop().animate({"left":(1-len)*sets.w},sets.speed,function(){
					banner.css('left',-sets.w)
				});
				if(sets.numBtn){
					div.find('a').first().addClass('a').siblings().removeClass('a');
				}

				index=1;
			}else{
				change(index)
			}

		}
		// 单张动画函数
		function change(i){
			banner.stop().animate({"left":-i*sets.w},sets.speed);
			if(sets.numBtn){
				div.find('a').eq(i-1).addClass('a').siblings().removeClass('a');
			}

		}
		// 鼠标移动停止事件
		wrap.hover(function(){
			clearInterval(timer);
		},function(){
			auto();
		})
	}
})($)