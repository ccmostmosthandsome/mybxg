define(['jquery','template','bootstrap'],function($,template) {
    //实现讲师信息显示功能
    $.ajax({
        type : 'get',
        url : '/api/teacher',
        datatype: 'json',
        success : function(data) {
            var html = template('teacherInfoTpl',{list:data.result});
            $('#teacherInfo').html(html);

            //实现导师信息查看功能
            previewTeacher();

            //实现启用和注销功能
            enableOrDisableTeacher();
            
        }
    });
    //实现导师信息查看功能
    function previewTeacher() {
        //实现查看导师信息功能
        $('#teacherInfo').find('.preview').click(function() {
            var tcId = $(this).closest('td').attr('data-id');
            $.ajax({
                type : 'get',
                url : '/api/teacher/view',
                data : {tc_id : tcId},
                datatype : 'json',
                success : function(data) {
                    // data.result.tc_hometown = data.result.tc_hometown.replace(/\|/g, ' ');
                    // data.result.tc_hometown = data.result.tc_hometown.split('|').join(' ');
                    data.result.tc_hometown = data.result.tc_hometown.replace(/[|]/g, ' ');
                    var html = template('teacherModalInfoTpl',data.result);
                    $('#teacherModalInfo').html(html);

                    //显示摸态框
                    $('#teacherModal').modal();
                }
            })
        });
    }
    //实现启用和注销功能
    function enableOrDisableTeacher() {
        $('#teacherInfo').find('.edTeacher').click(function() {
            var that = this;
            var td = $(this).closest('td');
            var tcId = td.attr('data-id');
            var tcStatus = td.attr('data-status');
            $.ajax({
                type : 'post',
                url : '/api/teacher/handle',
                data : {tc_id : tcId, tc_status : tcStatus},
                datatype : 'json',
                success : function(data) {
                    if(data.code == 200) {
                        td.attr('data-status', data.result.tc_status);
                        if(data.result.tc_status == 0) {
                            $(that).text('注 销');
                        }else {
                            $(that).text('启 用');
                        }
                    }
                }
            })
        });
    }
});