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
				console.log(result)
			}
		})
	})

})