<?php 
    //$_SETVER 就是当前这个页面的数组
    // echo  123;
    // var_dump($_SERVER);
    //路径
    $path = 'index';
    //文件名称
    $filename = 'index';
    //判断数组中是否包含对应的key(PATH_INFO),这个键是不是存在，因为这个键存在的条件是：存在他就是存在多层路径，才会有这个键出现。
    if (array_key_exists('PATH_INFO', $_SERVER)) {
        //获取URL中的路径
        $url = $_SERVER['PATH_INFO']; // /index/login
        // substr 截取字符串
        // substr(string, start) 从哪个东西截取，这个start的值表示的是索引。
        $str = substr($url, 1);  // index/login
        $pathinfo = explode('/', $str); // 根据 / 分割字符串，结果就是数组
        //两侧路径 /index/index
        if (count($pathinfo) == 2) { //获取路径的长度。
            $path = $pathinfo[0];
            $filename = $pathinfo[1];
        }else {
            //一层路径 /login  则访问登录页面，就算输入别的也要登录才可以
            $filename = 'login';
        }
    }
    //在当前页面嵌入另一个页面（目的就是加载一个页面嵌进来）这块拼的是绝对路径
    include('./view/'.$path.'./'.$filename.'.html');


    //后端路由
 ?>