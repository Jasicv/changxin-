function changeVerifyCode(img) {
    img.src = "../Kaptcha?" + Math.floor(Math.random() * 100);
}

/**
 *	组织正则表达式，主要是定位name所在的位置，并截取name=value
 *	如www.baidu.com:8080?a=1&b=2&c=3
 *	若传入b，则获取b=2，并经过后续步骤拆解成2返回
 */
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURIComponent(r[2]);
    }
    return '';

}
$(function() {
    $('#log-out').click(function() {
        // 清除session
        $.ajax({
            url : "/index/user/logout",
            type : "post",
            async : false,
            cache : false,
            dataType : 'json',
            success : function(data) {
                if (data.success) {
                    // 清除成功后退出到登录界面
                    window.location.href = "/login";
                    return false;
                }
            },
            error : function(data, error) {
                alert(error);
            }
        });
    });
});
