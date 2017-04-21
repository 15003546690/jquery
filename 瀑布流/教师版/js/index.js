$(function(){

	var dataJson = {"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"6.jpg"},{"src":"7.jpg"},{"src":"8.jpg"},{"src":"9.jpg"},{"src":"10.jpg"},{"src":"11.jpg"},{"src":"12.jpg"}]};

	$(window).on("load",function(){

		var box_W=$('.box').eq(0).outerWidth();
		var win_W=$(window).width();
		var Comls=Math.floor(win_W/box_W);

		imgLocation();
		function imgLocation(){
			var box=$('.box');
			var arr=[];
			for(var i=0;i<box.length;i++){

				if(i<Comls){
					arr.push(box.eq(i).outerHeight());
				}else{
					var min_h=Math.min.apply(null,arr);
					var min_i=$.inArray(min_h,arr);
					box.eq(i).css({'position':'absolute','left':min_i*box_W,'top':min_h})
					arr[min_i]+=box.eq(i).outerHeight();
				}
			}
		}

		function e(){
			$.each(dataJson.data,function(i,val){
				var _box=$('<div class="box"></div');
				_box.appendTo('#container');
				var __box=$('<div class="content"></div>');
				__box.appendTo(_box);
				$('<img src="img/'+val.src+'">').appendTo(__box);
			})
		}

		function scrol(){
			var a=$(document).height();
			var win_H=$(window).height();
			var win_S=$(window).scrollTop();
			if(a-win_H-win_S<50){
				e();
				imgLocation();
			}
		}

		$(window).on('scroll',function(){
			scrol();
		})

	})












 	// $(window).on("load",function(){

 	// 	 imgLocation();

 	// 	 var dataJson = {"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"}]};

 	// 	 $(window).scroll(function(){

 	// 		 $.each(dataJson.data,function(index,value){

 	// 		 		var boxAp = $("<div>").addClass("box").appendTo("#container");
 	// 		 		var boxCt = $("<div>").addClass("content").appendTo(boxAp);

 	// 		 		// console.log(index);
 	// 		 		$("<img>").attr("src","img/"+$(value).attr("src")).appendTo(boxCt);

 	// 		 })
 	// 		 imgLocation();
 	// 		 // scrollSide();
 	// 	 })


 	// })

 	// function scrollSide(){

 	// 	var c =$(window).scrollTop();
 	// 	var a = $(document).height();
 	// 	var b = $(window).height();

	 // 	var d = a-b-c;

	 // 	if(d<100){
	 // 		imgLocation();
	 // 	}
 	// }


 	// function imgLocation(){

 	// 	var box = $(".box");
 	// 	var boxWidth = box.eq(0).width();
 	// 	var num = parseInt($(window).width()/boxWidth);
 	// 	//图片第一排承载个数
 	// 	var boxArr = [];

 	// 	//第一排全部图片高度
 	// 	box.each(function(index,value){

 	// 		var boxHeight = box.eq(index).height();

  // 			if(index<num){
  // 				boxArr[index] = boxHeight;
  // 				// console.log(boxArr);
		// 	}else{
		// 		var minImg = Math.min.apply(null,boxArr);
		// 		// console.log(minImg)
		// 		//确认第一排最小高度的位置
		// 		var boxIndex = $.inArray(minImg,boxArr);

		// 		$(value).css({"position": "absolute","top":minImg,"left":boxIndex*box.eq(index).width()});

		// 		//把第二排所有图片。放在第一排最小高度的下面

		// 		boxArr[boxIndex]+=box.eq(index).height();

		// 		//依次排开

		// 	}
 	// 	})
 	// }
})