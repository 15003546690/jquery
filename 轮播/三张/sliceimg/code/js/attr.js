$(function(){
	//attr()
	//console.log($("input[type=checkbox]").eq(1).attr('checked'));
	//prop()  获取或设置得到属性值是布尔值
	//console.log($("input[type=checkbox]").eq(1).prop('checked'));

	//checked selected disabled  布尔值  它们的操作一般用prop()方法来实现


	$('#del').click(function(){
		//判断有没有选中项
		var have=false;//变量存放是否有选中项
		$("input:checkbox").each(function(){
			if($(this).prop("checked")) have=true;
		})
		if(have){
			//删除歌曲
			$("input:checked").each(function(){
				$(this).parent().remove();
			})
		}else{
			alert("请先选择要删除的歌曲！");
		}
	})

	$("input:checkbox").eq(2).prop("disabled",true);
})