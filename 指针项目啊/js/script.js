$(function(){

	int();
	function  int(){
		$(".login_close").on("click",function(){
			$(this).parents(".user-login").hide();
		})
		/*首页焦点图*/
		sliderimg();
		/*首页切换按钮*/
		sliderbtn();
		/*首页创建mark*/
		creatmark();
		/*首页侧边切换*/
		htoggle();

		/*新闻资讯焦点图*/
		newsimg();

		/*关于我们点击高度运动*/
		topheight();

		/*我的产品*/
		meprodut();

		/*我的收藏*/
		medshouc();


	}

	function  sliderimg(){
		var timer=null,ind=0,len=$("#slider>ul li").length;
		var zindx=2;
		$("#slider").hover(function(){
			clearInterval(timer);
		},function(){
			timer=setInterval(function(){
				ind++;
				if(ind>len-1){
					ind=0;
				}
				showimg(ind);
			},1500)
		});

		function  showimg(ind){
			var  curpic=$("#slider>ul li").eq(ind);
			curpic.css("z-index",zindx++);
			curpic.hide();
			curpic.fadeIn(1000);
		}
	}

	function  sliderbtn(){
		$("#btn").on("click",function(){
			if($(this).is(".jiantou")){
				sliderleft($(this));
			}else{
				slideright($(this));
			}
		})

		function  sliderleft(btn){
			$("#content").stop().animate({"width":0},600,function(){
				$("#product-page").stop().animate({"opacity":1},600);
			})
			btn.removeClass().addClass("jiantou-two").stop().animate({"left":165},600);
		}

		function  slideright(btn){
			$("#product-page").stop().animate({"opacity":0},600,function(){
				$("#content").stop().animate({"width":1000},600);
				btn.removeClass().addClass("jiantou").stop().animate({"left":966},600);
			})
		}
	}

	function  creatmark(){
		$(".product-pic").on("mouseenter",".full",function(){
			var  w=$(this).outerWidth();
			var  h=$(this).outerHeight();
			var strp=$("<p><a href='##'>登录</a><a href='##'>申请试用</a></p>");
			var mask=$("<div class='mask'></div>").html(strp);
			mask.css({"width":w,"height":h});
			$(this).append(mask);
		}).on("mouseleave",function(){
			$(this).find(".mask").remove();
		})
	}

	function  htoggle(){
		$("#pageNo").on("click","span",function(){
			var  ind=$(this).index();
			var  h=$(".product-pic").outerHeight();
			$("#scroll").stop().animate({"top":-h*ind},600);
			$(this).addClass("curp").siblings().removeClass("curp");
		})
	}


	function  newsimg(){
		var timer=null,ind=0,timind=1;
		var len=$("#page-slider>ul>li").length;
		var w=$("#page-slider>ul>li").width();
		var spans=$("#num-info span");
		spans.eq(0).text("0"+timind);
		spans.eq(1).text("/0"+len);

		$("#page-slider>ul").width((len+1)*w);

		$("#page-slider").hover(function(){
			clearInterval(timer);
		},function(){
			autoplay();
		})

		function autoplay(){
			timer=setInterval(function(){
				ind++;
				if(ind>len-1){
					firstimg();
					ind=0;
				}else{
					showimg();
				}

			},1500)
		}
		autoplay();

		function  showimg(){
			timind=ind+1;
			$("#page-slider>ul").stop().animate({"left":-ind*w},600);
			spans.eq(0).text("0"+timind);
		}

		function  firstimg(){
			$("#page-slider>ul>li").first().clone().appendTo("#page-slider>ul");
			$("#page-slider>ul").stop().animate({"left":-w*len},600,function(){
				$("#page-slider>ul>li").last().remove();
				$("#page-slider>ul").css("left",0);
			})
			spans.eq(0).text("0"+1);
		}

		$("#next").on("click",function(){
			    ind++;
				if(ind>len-1){
					firstimg();
					ind=0;
				}else{
					showimg();
				}
		})

		$("#prev").on("click",function(){
			    ind--;
				if(ind<0){
					ind=len-1;
				}
				showimg();
		})

	}

	function  topheight(){

	    var topbtn=$(".topbtn"),downbtn=$(".downbtn");
	    var positop=$("#icon-scroll");
	    var h=positop.parent().height()/2;
	    topbtn.on("click",function(){
	    	var  pos=Math.abs(positop.position().top);
	    	if(pos<=0)return false;
	    	if(positop.is(":animated"))return false;
	    	positop.stop().animate({"top":"+="+h});

	    })

	    downbtn.on("click",function(){
	    	var  pos=Math.abs(positop.position().top);
	    	if(pos>=positop.height()-400)return false;
	    	if(positop.is(":animated"))return false;
	    	positop.stop().animate({"top":"-="+h});
	    })

	}

	function  meprodut(){
		$("#my-pro-list li").each(function(i){
			var  ind=i%6,str="";
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

			$(this).addClass(str);
		})

		var topbtn=$("#up"),downbtn=$("#down");
	    var positop=$("#my-pro-list");
	    var h=positop.parent().height()/2;
	    topbtn.on("click",function(){
	    	var  pos=Math.abs(positop.position().top);
	    	if(pos<=0)return false;
	    	if(positop.is(":animated"))return false;
	    	positop.stop().animate({"top":"+="+h});

	    })

	    downbtn.on("click",function(){
	    	var  pos=Math.abs(positop.position().top);
	    	if(pos>=positop.height()-400)return false;
	    	if(positop.is(":animated"))return false;
	    	positop.stop().animate({"top":"-="+h});
	    })


	    $("#my-pro-list").on("click",".tip",function(){
	    	var mark=$("<div class='markbg'></div>").appendTo("body");
	    	mark.height($("body").height());
	    	$("#pro-mask").css("display","block");
	    })

	    $("#close-mask").on("click",function(){
	    	$(this).parents("#pro-mask").hide();
	    	$(".markbg").remove();
	    })

	    $("#select").on("click","li",function(){
	    	var  ind=$(this).index();
	    	$(this).addClass("checked").siblings().removeClass("checked");
	    	 $("#nobuy li").removeClass();
	    	if(ind==0){
	    		$("#confirm").fadeOut();
	    	}else{
	    		$("#confirm").fadeIn();
	    	}
	    })

	    $("#nobuy").on("click","li",function(){
	    	$("#select li").removeClass();
	    	$(this).addClass("checked").siblings().removeClass("checked");
	    })
	}


	function  medshouc(){
		var  next=$("#next_btn"),prev=$("#prev_btn");
		var  len=$("#fat-list ul").length;
		var  w=$("#fat-list ul").width();
		var  ind=0;
		$("#fat-list").width(len*w);
		next.on("click",slideL);
		function  slideL(){
			if(next.hasClass("next_disabled"))return false;
			next.off("click");
			prev.removeClass().addClass("prev_btn");
			ind++;
			if(ind>=len-1){
				next.removeClass().addClass("next_disabled");
			}
			$("#fat-list").stop().animate({"left":-ind*w},600,function(){
				next.on("click",slideL);
			});
			$("#pic_num span").eq(0).text("0"+(ind+1));
			$("#pic_num span").eq(1).text("/0"+len);
		}

		prev.on("click",slideR);
		function slideR(){
			if(prev.hasClass("prev_disabled"))return false;
			prev.off("click");
			next.removeClass().addClass("next_btn");
			ind--;
			if(ind<=0){
				prev.removeClass().addClass("prev_disabled");
			}
			$("#fat-list").stop().animate({"left":-ind*w},600,function(){
				prev.on("click",slideR);
			});
			$("#pic_num span").eq(0).text("0"+(ind+1));
			$("#pic_num span").eq(1).text("/0"+len);
		}
	}
})