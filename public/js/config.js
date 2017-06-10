requirejs.config({
    baseUrl : '/public/assets',  //设置模块加载的基准路径
    paths : {   //给模块路径起一个别名
        jquery : 'jquery/jquery.min',
        bootstrap : 'bootstrap/js/bootstrap.min',
        cookie : 'jquery-cookie/jquery.cookie',
        common : '../js/common',
        nprogress : 'nprogress/nprogress',
        index :  '../js/index',
        login :  '../js/login',
        util :  '../js/util',
        template : 'artTemplate/template-web',
        'teacher-list' : '../js/teacherlist'
    },
    shim : {   //兼容非标准模块
        bootstrap : {
            deps : ['jquery']  
        }
    }
});