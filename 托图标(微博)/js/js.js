$(document).ready(function(){
	// 点击隐藏区域的徽章，将点击的徽章添加到显示区域
	$('ul[node-type=medalOfHidden]>li').live('click',addToShow);

	function addToShow(){
      var content=$(this).html();   // 字符串
      $('ul[node-type=medalOfShow]>li.empty:first').html(content).removeClass('empty');
	    $(this).remove();
	}

	// 点击关闭按钮将徽章添加到隐藏区域

	$('.ico_closeZ>a').live('click',addToHide);

	function addToHide(){
	  //$('<li>').html().
	  var content=$(this).parents('li').html();
	  $('<li>').html(content).appendTo($('ul[node-type=medalOfHidden]'));
	  $(this).parents('li').remove();
	  $('<li>').attr('node-type','showMedal').addClass('empty').appendTo($('ul[node-type=medalOfShow]'));
	}

  // 拖动
  $('ul[node-type=medalOfHidden]>li').live('mousedown',fnDown);

  function fnDown(ev){
    ev=ev || window.event;
    var disX=ev.pageX-$(this).offset().left;
    var disY=ev.pageY-$(this).offset().top;
    var curLi=$(this);
    $(this).css('cursor','move');
    $(document).bind('mousemove',function(ev){
      ev=ev || window.event;
      var l=ev.pageX-disX;
      var t=ev.pageY-disY;
      curLi.css({'position':'absolute'}).
      offset({'left':l,'top':t});
    })

    $(document).mouseup(function(){
    	$(document).unbind('mousemove');
    })
  }

})