$(function(){
	    	//$('#wrap img').css('top',$(window).height()+'px');
	    	var arr=[],p=0;
	    	//获取图片的宽并设置宽+20
            var w=$('#wrap .box').width()+$(window).width()*0.01;
            console.log($(window).width())
            //获取window的宽除以w然后向下取整，window的一行能放几张图片
            var nums=Math.floor($(window).width()/w);
            console.log(nums)
            //给大盒子box设置宽度
            /*$('#wrap').width(nums*w);*/
            //遍历所有图片
            function auto(strat,obj){
	            for (var i = strat; i < obj; i++) {
	            	//判断i的值如果小于nums则往arr追加0；
	            	if (i<nums) {
	                    arr.push(0);
	            	}
	            	//获取arr里的最小值
	            	var minz=Math.min.apply(Math,arr);
	            	//获取第i张图片的高
	            	var H=$('#wrap .box').eq(i).height()+10;
	            	//获取最小值在数组的index
	            	var mininx=$.inArray(minz,arr);
	            	//设置最小值加上eq（I）图片的H
	            	arr[mininx]+=H;
	            	//设置图片的left top
	            	$('#wrap .box').eq(i).stop().animate({'left':mininx*w,'top':minz},1000);
	            	//p的起始值为0没循环一次++，即p的值就是当前加载了多少张图片
	            	p++;
	            }
            }
            auto(0,$('#wrap .box').length);
            function all(){
            	//创建一个对象里面是img的src属性；
            	var imgs={'arr':[
	                     {'src':'images/1.jpg'},
	                     {'src':'images/2.jpg'},
	                     {'src':'images/3.jpg'},  
	                     {'src':'images/4.jpg'},
	                     {'src':'images/5.png'}
            		]};
                //获取数组中的最大值；
                var maxh=Math.max.apply(Math,arr);
                //获取最大值的下标；
                var maxinx=$.inArray(maxh,arr);
                //遍历对象取得src赋给创建的img图片并且追加到box的最后；
            	$.each(imgs.arr,function(i,val){
            		var str="<div class='box'><img src='"+val.src+"' /></div>";
            		$(str).css({'left':maxinx*w,'top':maxh}).appendTo('#wrap');
            		//$('<img>').attr('src',val.src).css({'left':maxinx*w,'top':maxh}).appendTo('#box');
            	})
            	//将创建好的图片执行auto函数的操作；
            	auto(p,$('#wrap .box').length);
                
            }
            $(window).on('scroll',function(){
            	//文档的高度与window的高度的差值
                var dval=$(document).height()-$(this).height();
                //如果window的滚动高度大于差值则让页面执行添加图片的操作并且执行auto；
                if ($(this).scrollTop()>=dval) {
                   all();
                }
            })

	    	//$('#div').slideDown(1000,function(){$(this).fadeOut(3000)});

})