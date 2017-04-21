$(function(){
	//move轮播
	var timer=null
		var ins=0
		var w=$('#box1>ul>li').width()
		var len=$('#box1>ul>li').length
		$('#box1>ul').width(w*len)
		console.log($('#box1>ul').width())
		function auto(){
			timer=setInterval(function(){
				ins++
				if(ins>len-1){
					$('#box1>ul').width(w*(len+1))		//重新设置ul的宽+一个图片的宽
					$('#box1>ul>li').first().clone().appendTo('#box1>ul')	//将第一个li复制追加到最后
					$('#box1>ul').stop().animate({'margin-left':-w*len},1000,function(){
						$('#box1>ul>li').last().remove()		//回调函数	将追加的li删除
						$('#box1>ul').css('margin-left',0)	//ul的位置为0
					})				//ul开始移动
					ins=0
					$('#box1>ol>li').eq(0).addClass('bg').siblings().removeClass('bg')	//ol下的第一个li添加样式	
				}else{
					show(ins)
				}
			},2000)
		};
		auto()

		$('#box1').hover(function(){
			clearInterval(timer)
		},function(){
			auto()
		})

		$('#box1>ol>li').on('mouseover',function(){
			ins=$(this).index()
			show(ins)
		})

		function show(ins){
			$('#box1>ul').stop().animate({'margin-left':-w*ins},1000)
			$('#box1>ol>li').eq(ins).addClass('bg').siblings().removeClass('bg')
		}
		$('#right').on('click',function(){
			ins++
			if(ins>len-1){
				ins=0
			}
			show(ins)
		})
		$('#left').on('click',function(){
			ins--
			if(ins<0){
				ins=len-1
			}
			show(ins)
		})
})