$(function(){
	
	var tabs=$('.switch a')

	tabs.each(function(index){
		$(tabs[index]).on('click',function(){
			var i=$(this).index()
			$('.loginreg').eq(i).addClass('current').siblings().removeClass('current');
		})
	})



	$('#reg').on('click',function(){
		$.ajax({
			type:'post',
			url:'/api/user/register',
			data:{
				username:$('#user').val(),
				password:$('#passwd').val(),
				repassword:$('#passwd2').val()
			},
			dataType:'json',
			success:function(result){
				//console.log(result)
				$('.resultdata').html(result.message)
				if(result.code==4){
					//alert('注册成功')
					$('#qlogin').removeClass('current');
					$('#web_qr_login').addClass('current');
				}
			}
		})
	})

	$('#denglu').on('click',function(){
		$.ajax({
			type:'post',
			url:'/api/user/login',
			data:{
				username:$('#user').val(),
				password:$('#passwd').val()
			},
			dataType:'json',
			success:function(result){
				
			}
		})
	})

})