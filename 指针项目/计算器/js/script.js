;(function($){
	var lastClick=null;
	var arr=[];
	arr[0]='*';
	arr[1]='-';
	arr[2]='+';
	arr[3]='/';
	arr[4]='=';
    function num(obj){
       if($.inArray(lastClick,arr)!=-1 && $('#bottom').val()==''){
          $('#bottom').val($(obj).val())
       }
    }

    $('.num').click(function(){
    	alert(11)
    	num(this);
    })
   











})(jQuery)