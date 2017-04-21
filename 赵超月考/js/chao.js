(function($){
	//点击品牌并且渲染数据;
	$('.analog-select-text').first().on('click',function(){
		//$('#s_brand_id').html('')
		if($(this).hasClass('analog-select-text')){
			$(this).attr('class','bg');
			$('#s_brand_id').show();
		}else{
			$(this).attr('class','analog-select-text');
			$('#s_brand_id').hide();
		};

		$('#s_brand_id').append('<div>A</div>');
		for(var i in data.A){
			var op=$('<p>'+data.A[i].brand+'</p>');
			$('#s_brand_id').append(op);
		}
		$('#s_brand_id').append('<div>B</div>');

		for(var i in data.B){
			var op=$('<p>'+data.B[i].brand+'</p>');
			$('#s_brand_id').append(op);
		};
	});

	//点击渲染的品牌;
	$('#s_brand_id').on('click','p',function(){
		$('#down').attr('class','bg')
		//$('#s_serie_id').html('');
		var txt=$(this).text();
		$('.analog-select-text').first().find('p').text(txt);
		for(var i in data.A){
			if(txt==data.A[i].brand){
				for(var n in data.A[i].types)
				$('#s_serie_id').append('<p>'+data.A[i].types[n].name+'</p>');
			}
		}
		for(var q in data.B){
			if(txt==data.B[q].brand){
				for(var m in data.B[q].types)
				$('#s_serie_id').append('<p>'+data.B[q].types[m].name+'</p>');
			}
		}
	});

	//点击车系;
	$('analog-select').first().on('click',function(){
		$('.analog-select-text').first().find('p').text('品牌');
		$('.analog-select').first().find('p').text('车系');
		$('#s_serie_id').html('');
		$(this).attr('class','analog-select-text');
	});
	//点击渲染的车系;
	$('#s_serie_id').on('click','p',function(){
		var TXT=$(this).text();
		$('#pp').text(TXT);
	});

	//滑过p改背景;
	function hover(DOM){
		DOM.on('mouseover','p',function(){
		$(this).css('background','orange')
		}).on('mouseout','p',function(){
			$(this).css('background','#f5f5f5')
		});
	}
	hover($('#s_brand_id'));
	hover($('#s_serie_id'));

	//点击请求ajax;
	$('#search_serie').on('click',function(){
		$.ajax({
			type:'post',
			url:'http://www.qichezhijia.com/select.php',
			async:true,
			data:$('.analog-select-text').first().find('p').text()+$('#pp').text(),
			dataType:'php',
			success:function(data){

			}
		})
	})
})(jQuery)