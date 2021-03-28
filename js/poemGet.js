// 获取诗句
$.get("https://v1.hitokoto.cn?c=i&c=j", function (data, status) {
    if (status === 'success') {
        $('#poem').html(data.hitokoto);
        if (data.from_who != null) {
            $('#info').html(data.from_who + " · " + "《 " + data.from + " 》");
        } else {
            $('#info').html(data.from);
        }
    } else {
        $('#poem').html("获取出错啦");
    }
});