$(function(){
	$(".login_close").on("click",function(){
		$(".user-login").fadeOut(1000);
		time=setInterval(function(){
			$("#slider ul").find("li").eq(0).fadeOut(1000)
			$("#slider ul").find("li").eq(0).fadeIn(1000)
		},1000)
		
	})
	int()
	function int(){
		//首页
		sliderbtn()
		change()
		htoggle()
		 newslider()
		 //关于我们
		 topheight()

		 tab()
		 meproder()

	}
	function sliderbtn(){
		$("#btn").on("click",function(){
			if($(this).is(".jiantou")){
				sliderleft($(this))
			}else{
				sliderright($(this))
			}
		})
		function sliderleft(btn){
			$("#content").stop().animate({"width":0},600,function(){
				$("#product-page").stop().animate({"opacity":1},600)
			})
			btn.removeClass().addClass("jiantou-two").stop().animate({"left":165},600)
		}
		function sliderright(btn){
			$("#product-page").stop().animate({"opacity":0},600,function(){
				$("#content").stop().animate({"width":1000},600)
			})
			btn.removeClass().addClass("jiantou").stop().animate({"left":966},600)
		}
	}

	function change(){
		$(".product-pic").on("mouseenter",".full",function(){
			var w=$(this).outerWidth();
			var h=$(this).outerHeight();
			var act=$("<p><a href='#'>登陆</a><a href='#'>申请使用</a></p>")
			var mask=$("<div class='mask'></div>").html(act);
			mask.css({"width":w,"height":h});
			$(this).append(mask)
		}).on("mouseleave",function(){
			$(this).find(".mask").remove();
		})
	}

	function htoggle(){
		$("#pageNo").on("click","span",function(){
			var ind=$(this).index();
			var h=$(".product-pic").outerHeight();
			$("#scroll").stop().animate({"top":-h*ind},600);
			$(this).addClass("curp").siblings().removeClass("curp")
		})
	}

	function newslider(){
		var time=null,ind=0,spnum=1,w=$("#page-slider>ul li").width()
		var len=$("#page-slider>ul li").length;
		var sptet=$("#num-info span");
		$("#img-list").width(w*len);
		sptet.eq(0).text("0"+spnum+"/");
		sptet.eq(1).text("0"+len);
		$("#page-slider").hover(function(){
			clearInterval(time)
		},function(){
			autoplay()
		})
		function autoplay(){
			time=setInterval(function(){
				ind++;
				if(ind>len-1){
					ind=0;
				}
				newing(ind)
			},1000)
		}
		autoplay()
		function newing(inds){
			spnum=inds+1
			$("#ing-list").stop().animate({"left":-w*inds},600)
			sptet.eq(0).text("0"+spnum+"/");
		}
		function nuwfirstimg(){
			$("#page-slider>ul li").first().clone().appendTo("#page-slider>ul")
			$("#page-slider>ul").stop().animate({"left":-w*len},600,function(){
				$("#page-slider>ul li").last().remove();
				$("#page-slider>ul").css("left",0)
			})
			sptet.eq(0).text("0"+1+"/")
		}
	}	
	function topheight(){
		var topbtn=$(".topbtn");
		var bombtn=$(".downbtn");
		var posihei=$("#icon-scroll");
		
		var h=posihei.parent().height()/2;
		topbtn.on("click",function(){
			var pos=Math.abs(posihei.position().top);
			if(pos<=0)return false;
			if(posihei.is(":animated"))return false
			posihei.stop().animate({"top":"+="+h},600)
		 })
		bombtn.on("click",function(){
			var pos=Math.abs(posihei.position().top);
			if(pos>=posihei.height()-400)return false;
			if(posihei.is(":animated"))return false
			posihei.stop().animate({"top":"-="+h},600)
		 })
	}

	function tab(){
		$.each($("#team>a"),function(i){
			$(this).hover(function () {
				$(this).children("p").css("display","block")
				$(this).children("div").css("display","block");
				$("#rw_wrap div").eq(i).show().siblings().hide()

			},function () {
				$(this).children("p").css("display","none")
				$(this).children("div").css("display","none")
			})

		})
	}

	function meproder(){
		$("#my-pro-list li").each(function(i){
			var ind=i%6;
			var str="";
			switch(ind){
				case 0:
				case 5:
				str="gray";
				break;
				case 1:
				str="red";
				break;
				case 2:
				case 3:
				str="orange";
				break;
				case 4:
				str="gray-2";
				break;
			}
			$(this).addClass(str)
		})
		var topbtn=$("#up");
		var bombtn=$("#down");
		var posihei=$("#my-pro-list");
		
		var h=posihei.parent().height()/2;
		topbtn.on("click",function(){
			var pos=Math.abs(posihei.position().top);
			if(pos<=0)return false;
			if(posihei.is(":animated"))return false
			posihei.stop().animate({"top":"+="+h},600)
		 })
		bombtn.on("click",function(){
			var pos=Math.abs(posihei.position().top);
			if(pos>=posihei.height()-400)return false;
			if(posihei.is(":animated"))return false
			posihei.stop().animate({"top":"-="+h},600)
		 })
		$("#my-pro-list").on("click",".tip",function(){
			var mak=$("<div class='markbg'></div>").appendTo($("body"));
			mak.height($("body").height());
			$("#pro-mask").css("display","block")
		})
		$("#close-mask").on("click",function(){
			$(this).parents("#pro-mask").hide()
			$(".markbg").hide()
		})
		$("#select").on("click","li",function(){
			var ind=$(this).index();
			$(this).addClass("checked").siblings().removeClass("checked")
			$("#nobuy li").removeClass()
			if(ind==0){
				$("#confirm").fadeOut()
			}else{
				$("#confirm").fadeIn()
			}
		})
		$("#nobuy").on("click","li",function(){
			$("#select li").removeClass();
			$(this).addClass("checked").siblings().removeClass("checked")
		})


		var prev=$("#prev_btn"),next=$("#next_btn");
		var len=$("#fat-list ul").length;
		var w=$("#fat-list ul").width();
		var ind=0;
		$("#fat-list").width(w*len)
		next.on("click",slideL)
		function slideL(){
			//如果当前的样式有这个类则什么也不干变暗
			if(next.hasClass("next_disabled"))return false;

				next.off("click")
			//添加这个类
			//变亮
			prev.removeClass().addClass("prev_btn")
			ind++;

			if(ind>=len-1){
				next.removeClass().addClass("next_disabled")
			}

			$("#fat-list").stop().animate({"left":-w*ind},600,function(){
				next.on("click",slideL)
			})
			
			$("#pic_num span").eq(0).text("0"+(ind+1));
			$("#pic_num span").eq(1).text("/0"+len)
		}

		prev.on("click",slide)
		function slide(){
			if(prev.hasClass("next_disabled"))return false
				prev.off("click")
			next.removeClass().addClass("prev_btn")
			ind--;
			if(ind<=0){
				prev.removeClass().addClass("next_disabled")
			}
			$("#fat-list").stop().animate({"left":-w*ind},600,function(){
				prev.on("click",slide)
			})
			$("#pic_num span").eq(0).text("0"+(ind+1));
			$("#pic_num span").eq(1).text("/0"+len)
		}
	}


})