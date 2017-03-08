

var express=require('express');
var swig=require('swig');
var app=express();
var mongoose=require('mongoose');

app.engine('html',swig.renderFile);
//设置模板文件存放的目录 第一个参数必须是view 第二个是目录
app.set('views','./views');
//注册模板引擎 html是这个模板引擎的名称，也是文件的后缀名
app.set('view engine','html')
//开发中取消缓存
swig.setDefaults({cache:false});

//路由设置 不同模块加载
app.use('/admin',require('./routers/admin'));
app.use('/api',require('./routers/api'));
app.use('/',require('./routers/main'));

//链接mongoose数据库
mongoose.connect();
//监听3000端口
app.listen(3000);