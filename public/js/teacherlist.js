define(['jquery','template'],function($,template) {
    //实现讲师信息显示功能
    $.ajax({
        type : 'get',
        url : '/api/teacher',
        datatype: 'json',
        success : function(data) {
            console.log(data.result)
            var html = template('teacherInfoTpl',{list:data.result});
            $('#teacherInfo').html(html);
            // console.log(html) 

        }
    });

});