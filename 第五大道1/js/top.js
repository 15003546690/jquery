$(function(){
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
	/*$('.list1').on('mouseover',function(){
		$('.list2').show()
	})
	$('.list2>li').on('mouseover',function(){
		ins=$(this).index()
		$('.list3').show()
		$('.list3>div').eq(ins).show().siblings().hide()
	})
	$('.list2').on('mouseover',function(){
		$(this).show()
	})
	$('.list3').on('mouseover',function(){
		$(this).show()
		$('.list2').show()
	})
	$('.list3').on('mouseleave',function(){
		$(this).hide()
		$('.list2').hide()
	})*/
	$(".list1").on("mouseenter",function(){
	$(".list2").slideDown(1000);
	$(".list2 li").hover(function(){
		var index=$(this).index();
		$(this).addClass("active")
		$(".list3").show()
		$(this).show();
		$(".list3 div").hide().eq(index).show();


		},function(){
			$(this).removeClass("active");
		})
	})


	$(".bannerbox").on("mouseenter",function(){
		$(".list3").fadeOut(100);
		 $(".list2").slideUp(1000);
	})
	//手风琴（正品、vip、//）
	/*$('.navbao>li').on('mouseover',function(){
		$(this).width(120)
		$(this).siblings().width(26)
	})
	$('.navbao>li').on('mouseout',function(){
		$(this).width(26)
	})*/
	$('.navbao>li').hover(function(){
		$(this).stop().animate({'width':120},1000)
	},function(){
		$(this).stop().animate({'width':26},1000)
	})
	//轮播
	var timer=null
		var ins=0
		var w=$('.banner ul>li').width()
		var len=$('.banner ul>li').length
		$('.banner>ul').width(w*len)
		console.log(-w*len)
		function auto(){
			timer=setInterval(function(){
				ins++
				if(ins>len-1){
					$('.banner>ul').width(w*(len+1))		//重新设置ul的宽+一个图片的宽
					$('.banner>ul>li').first().clone().appendTo('.banner>ul')	//将第一个li复制追加到最后
					$('.banner>ul').stop().animate({'margin-left':-w*len},1000,function(){
						$('.banner>ul>li').last().remove()		//回调函数	将追加的li删除
						$('.banner>ul').css('margin-left',0)	//ul的位置为0
					})				//ul开始移动
					ins=0
					$('.banner>ol>li').eq(0).addClass('selected').siblings().removeClass('selected')	//ol下的第一个li添加样式	
				}else{
					show(ins)
				}
			},2000)
		};
		auto()

		$('.banner').hover(function(){
			clearInterval(timer)
		},function(){
			auto()
		})

		$('ol>li').on('mouseover',function(){
			ins=$(this).index()
			show(ins)
		})

		function show(ins){
			$('.bannerpic').stop().animate({'margin-left':-w*ins},1000)
			$('ol>li').eq(ins).addClass('selected').siblings().removeClass('selected')
		}
		$('.ibtn_right').on('click',function(){
			ins++
			if(ins>len-1){
				ins=0
			}
			show(ins)
		})
		$('.ibtn_left').on('click',function(){
			ins--
			if(ins<0){
				ins=len-1
			}
			show(ins)
		})
		//热门旗舰店
		$('.main2ul>li').on('mouseover',function(){
			$(this).find('b').stop().animate({'opacity':1},700)
		})
		$('.main2ul>li').on('mouseout',function(){
			$(this).find('b').stop().animate({'opacity':0},700)
		})
		//商场同款tab切换
		$('.m3cul>li').on('click',function(){
			var isn=$(this).index()
			var w=$('.m3cmain div').width()
			var len=$('.m3cmain div').length
			$(this).addClass('hover').siblings().removeClass('hover')
			$('.m3cmain').stop().animate({'margin-left':-w*isn},1000)
		})
		//经典箱包TAB切换
		$('.main4list>a>div').hover(function(){
			$(this).stop().animate({'top':-50},1000)
		},function(){
			$(this).stop().animate({'top':0},1000)
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