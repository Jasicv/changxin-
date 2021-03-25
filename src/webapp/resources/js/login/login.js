$(function () {
    let loginUrl = "";
    $("#Btn-Login").click(function () {
        var username = $("#account-number").val();  //获取账号
        var passwprd = $("#account-password").val();//获取密码
        console.log("账号:" + username.value + "\n" + "密码:" + passwprd.value);
        loginUrl = "/index/user/auth";
        $.ajax({
            url: loginUrl,
            async: true,
            cache: false,
            type: "post",
            dataType: 'json',
            data: {
                username: username,
                password: passwprd,
            },
            success: function (data) {
                if (data.success) {
                    //  $.toast('登录成功！');
                    if (data.user_role === 2) {
                        console.log(data.user_role);
                        window.location.href = "/studentcourse";
                    } else {
                        console.log(data.user_role);
                        window.location.href = "/teachercourse";
                    }
                } else {
                    alert("登录失败: " + data.errMsg);
                }
            }
        })
    });

    // 手机号验证登录
    function SMSLogin() {
        var PhoneReg = /^1\d{10}$/;                                       //手机号格式
        var SMSPhone = document.getElementById("SMS-Phone");          //获取手机号
        var SMSPhoneTips = document.getElementById("SMS-Phone-tips");  //获取手机号提示
        if (!PhoneReg.test(SMSPhone.value))       //判断账号密码格式是否正确，不正确即结束事件
        {
            SMSPhoneTips.innerText = "手机格式错误";
            console.log("手机格式错误");
            return;
        }
        console.log("手机号:" + SMSPhone.value);
        var xmlHttp = null;

    }
});
