$(function(){
	var ins=0
	var timer=null
	var len=$('.banner>a').length
	$('.menu-item').on('mouseover',function(){
		ins=$(this).index()
		$('.hide').show()
		$('.inner-box').eq(ins).show().siblings().hide()
	})
	$('.menu-item').on('mouseout',function(){
		$('.hide').hide()
	})
	$('.hide').on('mouseover',function(){
		$('.hide').show()
	})
	$('.hide').on('mouseout',function(){
		$('.hide').hide()
	})
	//轮播
	function auto(){
		timer=setInterval(function(){
			ins++
			if(ins>len-1) ins=0
			show()
			},4000)
		}
		auto()
		//淡入淡出
		function show(){
			$("#banner a").eq(ins).find("div").stop().fadeIn(1000).end().siblings().find("div").stop().fadeOut(1000);
			$("#dots span").eq(ins).attr("class","active").siblings().removeClass()
		}
		//划过停止
		$('#banner').on('mouseover',function(){
			clearInterval(timer)
		})
		//离开继续
		$('#banner').on('mouseout',function(){
			auto()
		})
		//滑过ol下的li时
		$('#dots>span').on('mouseover',function(){
			ins=$(this).index()
			show()
		})
		//点击右的时候
		$("#next").on('click',function(){
			ins++
			if(ins>len-1){
				ins=0
			}
			show()
		})
		//点击左的时候
		$('#prev').on('click',function(){
			ins--
			if(ins<0){
				ins=len-1
			}
			show()
		})
})
