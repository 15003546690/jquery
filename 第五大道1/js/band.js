$(function(){
	//top
	$('.htop_right>li').eq(4).hover(function(){
		$('.my5lux').show()
	},function(){
		$('.my5lux').hide()
	})
	$('.htop_right>li').last().hover(function(){
		$('.appload').show()
	},function(){
		$('.appload').hide()
	})
	//二级联动
	$('.list1').hover(function(){
		$('.list2').slideDown(1000)
		$('.list2>li').hover(function(){
			var index=$(this).index()
			$('.list3').show()	
			$('.list3>div').hide().eq(index).show()
		})
	})
	$('.list3').on('mouseleave',function(){
		$('.list3').hide()
		$('.list2').slideUp(1000)
	})
	//手风琴（正品、vip、//）
	$('.navbao>li').hover(function(){
		$(this).stop().animate({'width':120},1000)
	},function(){
		$(this).stop().animate({'width':26},1000)
	})
	//三张图片立即搜索
	$('.brandTop>li').on('mouseover',function(){
		$(this).find('b').stop().animate({'opacity':1},1000)
	})
	$('.brandTop>li').on('mouseout',function(){
		$(this).find('b').stop().animate({'opacity':0},1000)
	})
	//所有品牌、品牌旗舰的切换
	$('.brandBtn>ul>li').hover(function(){
		$(this).css('border-bottom','2px solid #000').siblings().css('border-bottom','none')
		var l=$(this).index()
		if(l==0){
			$('.brandBtn>ul').find('i').stop().animate({'left':22},600)
		}else{
			$('.brandBtn>ul').find('i').stop().animate({'left':140},600)
		}
		
	})
	//点击播放
	/*var len=$('.brandList>ul').length
	var index=0
	var w=220
	$('.More>i').on('click',function(){
		auto()		
	})
	
	function auto(){	
			index++
			console.log($('.brandList>ul').index())
			if(index>1){
					$('.brandList>ul').first().clone().appendTo('.brandList')
					$('.brandList').stop().animate({'margin-top':-w*len},1000,function(){
					$('.brandList>ul').last().remove()
					$('.brandList').css('margin-top',0)	
				})
			}else{
				$('.brandList').stop().animate({'margin-top':-w*index},1000)
			}
		}*/
	//热门品牌
	$('.hotBrand_main>li').on('mouseover',function(){
		$(this).animate({'top':-10},600).css('box-shadow','10px 10px 9px #999')
	})
	$('.hotBrand_main>li').on('mouseout',function(){
		$(this).animate({'top':0},600).css('box-shadow','none')
	})
	//侧边栏
	$('.SideBar>li').hover(function(){
		$(this).find('div').show(1000)
		$(this).find('span').show(1000)
	},function(){
		$(this).find('div').hide(1000)
		$(this).find('span').hide(1000)
	})
	//返回顶部
	$('.SideBar>li:last').on('click',function(){
		$(document.body).animate({'scrollTop':0},1000)
		$(document.documentElement).animate({'scrollTop':0},1000)
	})
})