
define(['jquery','template','nprogress','cookie'], function($,template,nprogress) {
        //控制左侧的菜单的展开和折叠
    $('.navs ul').prev('a').on('click', function () {
        $(this).next().slideToggle();
    });

    //实现退出功能
    $('#logout').click(function() {
        $.ajax({
            type : 'post',
            url : '/api/logout',
            dataType : 'json',
            success : function(data) {
                //清除cookie
                // $.removeCookie('loginInfo', {path : '/'});
                //退出成功后跳转到登录页
                location.href = '/login';
            }
        });
    });
 
    //获取请求路径
    var pathname = location.pathname;
    //判断用户是否登录要通过PHPSESSID判断，不能通过cookie判断。
    if (pathname != '/login' && !$.cookie('PHPSESSID')) {
        location.href = '/login';
    }
    //获取登录用户的cookie信息
    var loginInfo = $.cookie('loginInfo') && JSON.parse($.cookie('loginInfo'));
    if (loginInfo) {
        var html =template('profileInfoTpl',loginInfo);
        $('#profileInfo').html(html);
        //渲染页面
       // $('.aside .profile').find('img').attr('src',loginInfo.tc_avatar);
       //  //attr('attribute','value'),其中attribute为属性的名称，value为属性的值。
       //  $('.aside .profile').find('h4').text(loginInfo.tc_name); 
    }

    //加载遮罩效果 
    $(document).ajaxStart(function(){
        $('.overlay').show();
    });
    $(document).ajaxStop(function() {
        $('.overlay').slideUp(800);
    })

    //添加进度条处理
    nprogress.start();
    nprogress.done();
    
}); 