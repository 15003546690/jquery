//自定义插件
		/*;(function($){
			$.Df=function(arg){
				var name='nihao';
				this.test=function(){
					alert(arg.title+','+name);
				}
			}
		})(jQuery);*/
		
	//全局插件
		;(function($){
		$.extend({
			'sh':function(){
				$('.list').hover(function(){
					$(this).nextAll().show()
				},function(){
					$(this).parent().children('li:not(.list)').hide()
				})
			},
			'bg':function(){
				$('.list').hover(function(){
					$(this).css('background','blue')
				},function(){
					$(this).css('background','red')
				})
			}
		})
		})(jQuery);
		
		//局部插件
		/*;(function($){
			$.fn.extend({
				'color':function(value){
					if (value=='underfined') {
						return this.css('color')
					}else{
						return this.css('color',value)
					}
				},
				'sh':function(){
				$('.list').hover(function(){
						$(this).nextAll().show()
					},function(){
						$(this).parent().children('li:not(.list)').hide()
					})
				},
				'bg':function(){
					$('.list').hover(function(){
						$(this).css('background','blue')
					},function(){
						$(this).css('background','red')
					})
				}
			})
		})(jQuery);*/
