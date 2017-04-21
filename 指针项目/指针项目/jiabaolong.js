$(document).ready(function(){

      $('.login_close').on('click',function(){
      	   $('.user-login').fadeOut(500);

      	  //轮播
      	  setInterval(function(){
      	  	$('#slider>ul li').eq(0).fadeOut(1000);
      	  	$('#slider>ul li').eq(0).fadeIn(1000);
      	  },2000)
      	   
      })
    //点箭头 显示右边
    
      $('#btn').on('click',function(){
      	  if ($(this).hasClass('jiantou')) {
      	  	 $(this).removeClass().addClass('jiantou-two').stop().animate({'left':166},1000);
      	     $('#product-page').css({'opacity':1},500);
      	     $('#content').stop().animate({'width':0},1000);
      	  }else{
      	  	 $(this).removeClass().addClass('jiantou').stop().animate({'left':966},1000);
      	     $('#product-page').css({'opacity':0},500);
      	     $('#content').stop().animate({'width':'1000px'},1000);
      	  }
      })

       //上下
       $('#pageNo').on('click','span',function(){
       	   var  ind=$(this).index();
           $(this).addClass('curp').siblings().removeClass('curp');
           $('#scroll').stop().animate({'top':-600*ind},1000)
       })	  
      	   
       $('.product-pic').on('mouseenter','.full',function(){
       	    var  w=$(this).outerWidth();
       	    var  h=$(this).outerHeight();
            var  cont=$('<p><a href="">登录</a><a href="">申请使用</a></p>')
       	    $('<div class="mask"></div>').html(cont).css({'width':w,'height':h}).appendTo($(this))

       }).on('mouseleave',function(){
           $(this).find('.mask').remove();
       })












})