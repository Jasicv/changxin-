$(function() {

    teaLoseFocus();   //教师注册失去焦点
    teaSetFocus();   //教师注册获取焦点
    // 教职工注册获取焦点事件提示
    function teaSetFocus() {
// 文本框
        var Phone = document.getElementById("Phone");
        var Password = document.getElementById("Password");
        var Password1 = document.getElementById("Password1");
        var Name = document.getElementById("Name");
        var School = document.getElementById("School");
        var No = document.getElementById("No");
        var Verify = document.getElementById("Verify");
// 提示
        var phonetips = document.getElementById("Phone-tips");
        var Passwordtips = document.getElementById("Password-tips");
        var Password1tips = document.getElementById("Password1-tips");
        var Nametips = document.getElementById("Name-tips");
        var Schooltips = document.getElementById("School-tips");
        var Notips = document.getElementById("No-tips");
        var Verifytips = document.getElementById("Verify-tips");
        // 正则验证
        var EMailReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;  //邮箱格式
        var PhoneReg = /^1\d{10}$/;                                       //手机号格式
        var PasswordReg = /^(?![0-9]+$)(?![a-zA-Z]+$)|[0-9A-Za-z]{6,12}$/;//密码 6-12位字母或数字
        var NameReg = /^[\u4e00-\u9fa5]{2,4}$/;                          //姓名 2-4位中文
        var SchoolReg = /^[\u4e00-\u9fa5]{2,15}$/;                       //学校 2-15位中文
        var NoReg = /[0-9][0-9]{9,13}/;                                 //学号 10-14位数字
        // 手机号获取焦点
        Phone.onfocus = function(){
            if(PhoneReg.test(Phone.value) && EMailReg.test(Phone.value)){
                phonetips.innerText = "";
            }
        }
        // 密码获取焦点
        Password.onfocus = function(){
            if(PasswordReg.test(Password.value)){
                Passwordtips.innerText = "";
            }
        }
        // 再次输入密码获取焦点
        Password1.onfocus = function(){
            if(Password1.value == Password.value){
                Password1tips.innerText = "";
            }
        }
        // 手姓名获取焦点
        Name.onfocus = function(){
            if(NameReg.test(Name.value)){
                Nametips.innerText = "";
            }
        }
        // 学校获取焦点
        School.onfocus = function(){
            if(SchoolReg.test(School.value)){
                Schooltips.innerText = "";
            }
        }
        // 学号获取焦点
        No.onfocus = function(){
            if(NoReg.test(No.value)){
                Notips.innerText = "";
            }
        }
    }
    // 教师注册获失去焦点事件提示
    function teaLoseFocus() {
// 文本框
        var Phone = document.getElementById("Phone");
        var Password = document.getElementById("Password");
        var Password1 = document.getElementById("Password1");
        var Name = document.getElementById("Name");
        var School = document.getElementById("School");
        var No = document.getElementById("No");
        var Verify = document.getElementById("Verify");
// 提示
        var phonetips = document.getElementById("Phone-tips");
        var Passwordtips = document.getElementById("Password-tips");
        var Password1tips = document.getElementById("Password1-tips");
        var Nametips = document.getElementById("Name-tips");
        var Schooltips = document.getElementById("School-tips");
        var Notips = document.getElementById("No-tips");
        var Verifytips = document.getElementById("Verify-tips");
        // 正则验证
        var EMailReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;  //邮箱格式
        var PhoneReg = /^1\d{10}$/;                                       //手机号格式
        var PasswordReg = /^(?![0-9]+$)(?![a-zA-Z]+$)|[0-9A-Za-z]{6,12}$/;//密码 6-12位字母或数字
        var NameReg = /^[\u4e00-\u9fa5]{2,4}$/;                          //姓名 2-4位中文
        var SchoolReg = /^[\u4e00-\u9fa5]{2,15}$/;                       //学校 2-15位中文
        var NoReg = /[0-9][0-9]{9,13}/;                                 //学号 10-14位数字
        // 手机号失去焦点
        Phone.onblur = function(){
            if(!PhoneReg.test(Phone.value) && !EMailReg.test(Phone.value)){
                phonetips.innerText = "请输入正确的邮箱/手机格式";
            }else {
                phonetips.innerText = "";
            }
        }
        // 密码失去焦点
        Password.onblur = function(){
            if(!PasswordReg.test(Password.value) && Password.value == ""){
                Passwordtips.innerText = "密码有效长度是6到30个字符";
            }else {
                Passwordtips.innerText = "";
            }
        }
        // 再次输入密码失去焦点
        Password1.onblur = function(){
            if(Password1.value != Password.value && Password1.value == ""){
                Password1tips.innerText = "两次输入的密码不相同";
            }else {
                Password1tips.innerText = "";
            }
        }
        // 手姓名失去焦点
        Name.onblur = function(){
            if(!NameReg.test(Name.value)){
                Nametips.innerText = "请输入正确的姓名格式";
            }else {
                Nametips.innerText = "";
            }
        }
        // 学校失去焦点
        School.onblur = function(){
            if(!SchoolReg.test(School.value)){
                Schooltips.innerText = "请输入正确的学校格式";
            }else {
                Schooltips.innerText = "";
            }
        }
        // 学号失去焦点
        No.onblur = function(){
            if(!NoReg.test(No.value)){
                Notips.innerText = "请输入正确的教职工号格式";
            }else {
                Notips.innerText = "";
            }
        }
    }


    $("#Btn-TeacherRegister").click(function () {
        var user = {};
        user.userId = $("#No").val();
        user.account = $("#Phone").val();
        user.password = $("#Password").val();
        let password1 = $("#Password").val();
        let password2 = $("#Password1").val();
        user.username = $("#Name").val();
        user.schoolName = $("#School").val();
        user.roleId = 1;
        if (password1 !== password2) {
            alert("确认两次密码输入相同");
        }
        // 生成表单对象，用于接收参数并传递给后台
        var formData = new FormData();
        formData.append("userStr",JSON.stringify(user));
        var verifyCodeActual = $('#j_captcha').val();
        if (!verifyCodeActual) {
            $.toast('请输入验证码！');
            return;
        }
        formData.append('verifyCodeActual', verifyCodeActual);
        $.ajax({
            url: "/index/user/registeruser",
            type: 'POST',
            data: formData,
            contentType: false,
            processData: false,
            cache: false,
            success: function (data) {
                if (data.success) {
                    alert('注册成功！');
                    window.location.href = "/login/";
                } else {
                    alert('注册失败！' + data.errMsg);
                }
                // 点击验证码图片的时候，注册码会改变
                $('#captcha_img').click();
            }
        });
    })
})