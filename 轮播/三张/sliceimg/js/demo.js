


$(function(){


	var  arr=[];


	//添加元素
	$("#add").on("click",function(){

		var   len=$("#all").find(":input:checked");

		if(len.length==0)  return  false;

		len.each(function(){
			var valss=$(this).val();
			var ttext=$(this).parent().text();
			if ($.inArray(valss,arr)==-1){//检测元素是否存在数组中  如果存在返回索引  不存在则返回-1    确定第一个参数在数组中的位置(如果没有找到则返回 -1 )。
				//value:用于在数组中查找是否存在
				//array:待处理数组。

				//var newLi=$('<li><input type="checkbox" value="'+valss+'">'+ttext+'</li>');
				//添加到右列
				//newLi.appendTo("#yet");
				//将添加的值存入数组

				$("#yet").append($(this).parent().clone());
				arr.push(valss);
				console.log(arr);

				$("#yet :checked").prop("checked",false);
			}

		});


		//删除元素

		$("#del").on("click",function(){
			var  dels=$("#yet").find(":input:checked");

			if(dels.length==0) return false;
			dels.each(function(){
				var  delval=$(this).val();
				//找到复选框的父元素LI，删除
				$(this).parent().remove();

				//删除对应数组中的值;
				arr.splice($.inArray(delval,arr),1)

				//打印arr的数值是否删除
				console.log(arr);


			});


		});








	});


});




































$/*(function(){
 var arr=[];
 $("#add").click(function(){
 //提高脚本性能
 var $cek=$("#all").find("input:checked");
 if($cek.length==0) return false;
 //获取左列中所有选中复选框
 $cek.each(function(){
 //得到它对应的文字及值   text()   val()
 var $txt=$(this).parent().text(),//文字
 $val=$(this).val();//值
 //检测是否已经被添加过
 if($.inArray($val,arr)==-1){//检测元素是否存在于数组中，如果存在返回索引，不存在返回-1
 //创建LI
 var newLi=$('<li><input type="checkbox" value="'+$val+'">'+$txt+'</li>');
 //添加到右列
 newLi.appendTo("#yet");
 //将添加的值存入数组
 arr.push($val);
 console.log(arr);
 }
 })
 $(':checkbox').prop("checked",false);
 })
 //删除
 $("#del").click(function(){
 //找到右列所有的选中项
 var $cek2=$("#yet").find("input:checked");
 if($cek2.length==0) return false;
 $cek2.each(function(){
 var val=$(this).val();//值    $.inArray(ele,arr)
 //找到复选框的父元素LI，删除
 $(this).parent().remove();
 //将对应的值从数组中删除
 //console.log($.inArray(val,arr))
 arr.splice($.inArray(val,arr),1);
 console.log(arr)
 })
 })
 })*/