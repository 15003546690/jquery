$(function(){
	$(".login_close").on("click",function(){
		$(".user-login").fadeOut(1000)
		var time=null;
		function auto(){
			time=setInterval(function(){
			$("#slider ul").find("li").eq(0).fadeOut(1000)
			$("#slider ul").find("li").eq(0).fadeIn(1000)
			},1000)
		}
		auto()
		$("#slider").hover(function(){
			clearInterval(time)
		},function(){
			auto()
		})
	})
	function int(){
		//首页
		sliderbtn()
		//切换类换页面
		 qiehuan()
		 //划过盒子有蒙层
		 mengcen()
		 //首页完
		 //新闻
		 xw()
		 //关于我们
		 guanyu()
		 //我的产品
		 chanpin()
		 //我的产品点击
		 xiayiye()
	}
	int()
	function sliderbtn(){
		$("#btn").on("click",function(){
			if($(this).hasClass("jiantou")){
				 zuo($(this))
			}else{
				you($(this))
			}
		})
	function zuo(btn){
		$("#content").stop().animate({width:0},1000,function(){
			$("#product-page").stop().animate({"opacity":1},500)
		})
		btn.removeClass().addClass("jiantou-two").stop().animate({"left":169},1000)
		}	
	function you(btn){
		btn.removeClass().addClass("jiantou").stop().animate({"left":966},1000);
		$("#content").stop().animate({width:1000},1000)
		$("#product-page").stop().animate({"opacity":0},500)
		}
	}	
	function qiehuan(){
		$("#pageNo").on("click","span",function(){
		var ind=$(this).index();
		var H=$(".product-pic").outerHeight()
			$(this).addClass("curp").siblings().removeClass("curp")
			$(".scroll").stop().animate({"top":-ind*H},1000)
	})		
	}
	function mengcen(){
	$(".product-pic").on("mouseenter",".full",function(){
		var h=$(this).outerHeight();
		var w=$(this).outerWidth();
		var pp=$("<p><a href='##'>登陆</a><a href='##'>申请使用</a></p>")
		var dv=$("<div class='mask'></div>")
		var dp=dv.append(pp);
		dp.css({"width":w,"height":h});
		$(this).append(dp)
	}).on("mouseleave",function(){
			$(this).find(".mask").remove();
		})
	}
	function xw(){
		var spn=$("#num-info")
		var num=1;
		var len=$("#img-list li").length;
		var W=$("#img-list li").width();
		var ind=0;
		var time=null;
		var list=$("#img-list")
		spn.find("span").eq(0).text("0"+num+"/")
		spn.find("span").eq(1).text("0"+len+"")
		$("#img-list").width((len+1)*W);
		function ert(){
			$("#img-list li:first").clone().appendTo("#img-list")
				$("#img-list").stop().animate({"left":-len*W},1000,function(){
					$("#img-list").css("left",0)
					$("#img-list li:last").remove()
				})
		}
		function aut(){
			time=setInterval(function(){
				ind++
				if(ind>=len){
				ert()
				ind=0;
				}else{
					qwe(ind)
				}
				num++
				if(num>3){
					num=1
				}
				$("#num-info").find("span").eq(0).text("0"+num+"/")
			},2000)
		}
		aut()
		function qwe(i){
			$("#img-list").stop().animate({"left":i*-W},1000)
			
		}
		$("#img-list").hover(function(){
			clearInterval(time)
		},function(){
			aut()
		})
		$("#next").on("click",function(){
			num++;
			if(num>len){
				ert()
				num=1
			}else{
				qwe(num)
			}
			spn.find("span").eq(0).text("0"+num+"/")
			spn.find("span").eq(1).text("0"+len+"")
			
		})
		$("#prev").on("click",function(){
			num--;
			if(num<=0){
				num=len
			}
			spn.find("span").eq(0).text("0"+num+"/")
			spn.find("span").eq(1).text("0"+len+"")
			$("#img-list li").slice(-ind).prependTo("#img-list");
			$("#img-list").css("left",ind*-W)
			$("#img-list").stop().animate({"left":0},1000)	
		})
	}

	function guanyu(){
		//滚动
		var bottombtn=$(".downbtn");
		var tbtn=$(".topbtn");
		var h=$(".icon-group").height()/2
		bottombtn.on("click",function(){
			if($("#icon-scroll").is(":animated"))return false
			if($("#icon-scroll").position().top<=-400)return false
			$("#icon-scroll").stop().animate({"top":"-="+h},700)
		})
		tbtn.on("click",function(){
		if($("#icon-scroll").position().top<0){
			if($("#icon-scroll").is(":animated"))return false
			$("#icon-scroll").stop().animate({"top":"+="+h},700)
		}
	})
		//tab切换
		$("#team").on("mouseenter","a",function(){
			var indd=$(this).index()
			$(this).addClass("curItem").siblings().removeClass("curItem")
			$("#rw_wrap div").eq(indd).show().siblings().hide()
		})
	}
	function chanpin(){

		$("#my-pro-list li").each(function(i){
			var ind=i%6,
				str=""
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
		var hh=$("#myprobox").height()/2;
		var len=$("#my-pro-list").height()-400
		var posihei=$("#my-pro-list");
			$("#downbtn").on("click",function(){
				var pos=Math.abs(posihei.position().top);
				if(pos>=posihei.height()-400)return false
				if(posihei.is(":animated"))return false
				posihei.stop().animate({"top":"-="+hh},600)
			})
			$("#upbtn").on("click",function(){
				var pos=Math.abs(posihei.position().top);
				if(pos<=0)return false
				if(posihei.is(":animated"))return false
				posihei.stop().animate({"top":"+="+hh},600)
			})
			$("#my-pro-list").on("click",".tip",function(){
				var mak=$("<div class='markbg'></div>").appendTo($("body"));
				mak.height($("body").height());
				$("#pro-mask").show();
				$("#select").on("click","li",function(){
					var ind=$(this).index();
					$(this).addClass("checked").siblings().removeClass("checked")
					
					if(ind==0){
						$("#confirm").fadeOut(600)
					}else{
						$("#nobuy li").removeClass()
						$("#confirm").fadeIn(600)
					}
				})
				$("#nobuy").on("click","li",function(){
					$("#select li").removeClass("checked")
					$(this).addClass("checked").siblings().removeClass()
				})
			})
			$("#close-mask").on("click",function(){
				$("#pro-mask").fadeOut();
				$(".markbg").remove()
			})	
	}
	function xiayiye(){
		var w=$("fat-list ul").width(),
			len=$("#fat-list ul").length,
			ind=0,
			spfir=1;
		var span=$("#pic_num span");
		span.eq(0).text("0"+spfir+"/");
		span.eq(1).text("0"+len);
		$("#fat-list").width(len*w);
		
		$("#prev_btn").on("click",function(){
			if($("#prev_btn").hasClass("prev_disabled")) return false;
			$("#next_btn").removeClass().addClass("next_btn");
			ind--;
			if(ind<=0){
				$("#prev_btn").removeClass().addClass("prev_disabled");
			}
			$("#fat-list").stop().animate({"left":-ind*w},600)
			span.eq(0).text("0"+(ind+1)+"/");

		})

		$("#next_btn").on("click",function(){
			if($("#next_btn").hasClass("next_disabled")) return false;
			$("#prev_btn").removeClass().addClass("prev_btn");
			ind++
			if(ind>=len-1){
				$("#next_btn").removeClass().addClass("next_disabled");
			}
			$("#fat-list").stop().animate({"left":-ind*w},600)
			span.eq(0).text("0"+(ind+1)+"/");

		})
	}

	
})