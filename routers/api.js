var express=require('express');
var router=express.Router();

//用户注册逻辑
	//用户名不能为空
	//密码不能为空
	//两次密码一致
//查询数据库
	//用户是否被注册

//统一返回格式
var responseData;
router.use(function(req,res,next){
	responseData={
		code:'',
		message:''
	}
	next();
})


router.post('/user/register',function(req,res,next){
	//console.log(req.body);
	var username=req.body.username;
	var password=req.body.password;
	var repassword=req.body.repassword;

	if(username==''){
		responseData.code=0;
		responseData.message='用户名不能为空';
		res.json(responseData);//把这个对象转成json返给前端 res.json()方法
		return;
	}
	if(password==''){
		responseData.code=1;
		responseData.message='密码不能为空';
		res.json(responseData);
		return;
	}
	if(password!=repassword){
		responseData.code=2;
		responseData.message='两次密码输入不一致';
		res.json(responseData);
		return;
	}
	//注册成功
	responseData.message='注册成功';
	res.json(responseData);

});

module.exports=router;