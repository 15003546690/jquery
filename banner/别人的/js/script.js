$(document).ready(function(){
	var num=0;
	var timer=null;
	timer=setInterval(autoplay,2000)
	function autoplay(){
		// if ($("#banner a").find("div").is(":animated")) {
		// 	return false;
		// };
		num++;
		var len=$("#banner a").length;
		if (num>len-1) {
			num=0;
		};
		$("#banner a").eq(num).find("div").stop().fadeIn(1000).end().siblings().find("div").stop().fadeOut(1000);
		$("#dots span").eq(num).attr("class","active").siblings().removeClass()
	}
	$("#menu-content .menu-item").hover(function(){
		var index=$(this).index();
		$("#sub-menu .inner-box").eq(index).show().siblings().hide().parents("#sub-menu").show()
	},function(){
		$("#sub-menu .inner-box").hover(function(){
			$("#sub-menu").show()
		},function(){
			$("#sub-menu").hide()
		})
		$("#sub-menu").hide()
	})
	$("#banner").hover(function(){
		clearInterval(timer)
	},function(){
		timer=setInterval(autoplay,2000);
	})
	$("#next").hover(function(){
		clearInterval(timer)
	},function(){
		timer=setInterval(autoplay,2000);
	});
	$("#prev").hover(function(){
		clearInterval(timer)
	},function(){
		timer=setInterval(autoplay,2000);
	})
	$("#next").click(function(){
		autoplay()
	});
	$("#prev").click(function(){
		if ($("#banner a").find("div").is(":animated")){
			return false;
		};
		num--;
		var len=$("#banner a").length;
		if (num<0) {
			num=len-1;
		};
		$("#banner a").eq(num).find("div").stop().fadeIn(1000).end().siblings().find("div").stop().fadeOut(1000);
		$("#dots span").eq(num).attr("class","active").siblings().removeClass()
	})
	$("#dots span").hover(function(){
		clearInterval(timer)
		var index=$(this).index();
		num=index;
		$("#banner a").eq(num).find("div").stop().show().end().siblings().find("div").stop().hide();
		$("#dots span").eq(num).attr("class","active").siblings().removeClass()
	},function(){
		timer=setInterval(autoplay,2000);
	})
})