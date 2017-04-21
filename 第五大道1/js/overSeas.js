$(function(){
	//top
	$('.htop_right>li').eq(4).hover(function(){
		$('.my5lux').slideDown(1000)
	},function(){
		$('.my5lux').slideUp(1000)
	})
	$('.htop_right>li').last().hover(function(){
		$('.appload').slideDown(1000)
	},function(){
		$('.appload').slideUp(1000)
	})
	//二级联动
	$('.list1').hover(function(){
		$('.list2').slideDown(1000)
		$('.list2>li').hover(function(){
			$('.list3').show()
			var index=$(this).index()
			$('.list3>div').eq(index).show().siblings().hide()
		})
	})
	$('.list3').on('mouseleave',function(){
		$(this).hide()
		$('.list2').slideUp(1000)
	})
	//第一层全球购TAB切换
	$('.global_tit>li').on('mouseover',function(){
		var index=$(this).index()
		$(this).addClass('hover').siblings().removeClass('hover')
		$('.global_main>ul').eq(index).show().siblings().hide()
	})
	//第二层中心放大
	$('.floor_cen>div>img').on('mouseover',function(){
		$(this).animate({'width':360,'height':300,'margin-left':-20,'margin-top':-20},1000)
		//margin-left..margin-top..(变大之后的差值除以2)
	})
	$('.floor_cen>div>img').on('mouseout',function(){
		$(this).animate({'width':320,'height':260,'margin-left':0,'margin-top':0},1000)
	})
	//手风琴（正品、vip、//）
	$('.navbao>li').hover(function(){
		$(this).stop().animate({'width':120},1000)
	},function(){
		$(this).stop().animate({'width':26},1000)
	})
	//楼层
	$(window).on('scroll',function(){
		var h=$('.over_main').offset().top
		if ($(this).scrollTop()>=h) {
			$('.stairs').show(600)
		}else{
			$('.stairs').hide(600)
		}
	})

	var arr=[];
	$('.over_main>div').each(function(){
		var h1=$(this).offset().top
		arr.push(h1)
	})
	$('.stairs li').on('click',function(){
			var index=$(this).index();
			$(document.body).stop().animate({'scrollTop':arr[index]})
	})
})