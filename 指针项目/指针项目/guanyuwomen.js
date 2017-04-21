$(function(){

	  $('.downbtn').on("click",function(){
			if($("#icon-scroll").is(":animated"))return false;
			if($("#icon-scroll").position().top<=-400)return false
			$("#icon-scroll").stop().animate({"top":"-="+200},700)
		})

		$('.topbtn').on("click",function(){
		if($("#icon-scroll").position().top<0){
			if($("#icon-scroll").is(":animated"))return false
			$("#icon-scroll").stop().animate({"top":"+="+200},700)
		}
        })

       $('#team').on('mouseenter','a',function(){
       	    var  index=$(this).index();
            $(this).addClass('curItem').siblings().removeClass('curItem');
            $('#rw_wrap div').eq(index).show().siblings().hide();
       })

     //我的产品
      $('#my-pro-list li').each(function(i){
      	  var  ind=i%6;
      	  var  str='';
      	  switch(ind){
                case  0:
                case  5:
                str='gray';
                break;
                case  2:
                case  3:
                str='orange';
                break;
                case 1:
                str='red';
                break;
                case 4:
                str='gray-2';
                break;
      	  }

      	  $(this).addClass(str);
      })
       
       
        var hh=$("#myprobox").height()/2;
		var len=$("#my-pro-list").height()-400;
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

      //轮播
      //
       var  w=$('#fat-list').find('ul').width();
       var  ind=0;
       var  leng=$('#fat-list ul').length;
      $('#next_btn').on('click',function(){
      	  if ($('#next_btn').hasClass('next_disabled'))return false;
          $("#prev_btn").removeClass().addClass("prev_btn");
           ind++;
           if (ind>=leng-1) {
           	 $('#next_btn').removeClass().addClass('next_disabled')
           }
      	 
      	  $('#fat-list').stop().animate({'left':-ind*w},600);
      	  $('.cur-grounp').text('0'+(ind+1));
      	  
      })

      $('#prev_btn').on('click',function(){
      	   if ($('#prev_btn').hasClass('prev_disabled'))return false;
      	   $("#next_btn").removeClass().addClass("next_btn");
           ind--;
           if (ind<=0) {
           	 $('#prev_btn').removeClass().addClass('prev_disabled')
           }
      	 
      	  $('#fat-list').stop().animate({'left':-ind*w},600);
      	  $('.cur-grounp').text('0'+(ind+1));
      	  
      })

    //新闻资迅
      
       
      var  ins=0,
           timer=null;
      var  len=$('#img-list li').length;
      var  ww=$('#img-list li').width()

      function lunbo(){
      	  $('#img-list').width(ww*(len+1))
          $('#num-info span').eq(0).text('0'+(ins+1)+'/');
          $('#num-info span').eq(1).text('0'+len);
         timer=setInterval(auto,2000)
           
        }
        function auto(){
           	   ins++;
           	   if (ins>len-1) {
           	   	 ins=0; 
           	   $('#img-list li:first').clone().appendTo('#img-list');
           	   $('#img-list').stop().animate({'left':-len*ww},600,function(){
           	   	   $('#img-list').css('left',0);
           	   	   $('#img-list li:last').remove();
           	   })

           	   $('#num-info span').eq(0).text('0'+1+'/');
           	   }else{
                   show()
           	   }

           }

           function  show(){
                    $('#img-list').stop().animate({'left':-ins*ww},600);
                    $('#num-info span').eq(0).text('0'+(ins+1)+'/');

           	   }
        lunbo();

         //停止
         $('#page-slider').hover(function(){
               clearInterval(timer)
         },function(){
            lunbo() ;
         })  

        $('#next').on('click',function(){
            auto();
        })
        $('#prev').on('click',function(){
             ins--;
             if (ins<0) {
                ins=len-1;
             }
             show()
        })
      
    //点击弹出
     $('.tip').on('click',function(){
     	  var  newdiv=$('<div class="markbg"></div>');
     	   $('.myprocon').append(newdiv);
     	   $('#pro-mask').fadeIn(600);

     	   $('#select li').on('click',function(){
     	   	   if ($(this).attr('data-type')==999) {
     	   	   	   $('#confirm').show();
     	   	   	   $(this).addClass('checked').siblings().removeClass('checked');

                   $('#nobuy').on('click','li',function(){
                   	   $(this).addClass('checked').siblings().removeClass('checked');
                   })

     	   	   }else{
     	   	   	   $(this).addClass('checked').siblings().removeClass('checked');
     	   	   	   $('#confirm').hide();
     	   	   }

            
     	   })


     	   $('#close-mask').on('click',function(){
     	   	    $('#pro-mask').fadeOut(600);
     	   	    $('.markbg').remove();

     	   })



     })

})