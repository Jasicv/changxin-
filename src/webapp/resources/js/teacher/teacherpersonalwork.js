$(function () {
    tool();// 工具
    notice();// 通知
    info();// 个人信息
    showScores();// 批量给分框
    giveScores();// 下载框
    downLoad();// 下载框
    JQcorrected();// 不限遍历已批
    JQnotDone();// 不限遍历未批
    JQunpaid();// 不限遍历未交
    doneJQcorrected();//遍历已批
    notDoneJQcorrected();//遍历未批
    unSubmitJQcorrected();//遍历未交
    homeWorkTitle();//输出作业名
    ajaxHomeworkId();//向ajax传递homeworkId
})

// 工具
function tool() {
    var Tool = document.getElementById('tool');
    var Ultool = document.getElementById('ul-tool');
    $('#tool').click(function () {
        $('#ul-tool').css('display','block');
        if (Ultool.style.display == 'block'){
            $('#tool').click(function(event) {
                event.stopPropagation();
            })
            $(document).click(function(){
                $('#ul-tool').css('display','none');
            })
            $('#ul-tool').click(function(event) {
                event.stopPropagation();
            })
        }
    });
}

// 通知
function notice() {
    var Nitice = document.getElementById('notice');
    var Divnotice = document.getElementById('divnotice');
    $('#notice').click(function () {
        $('#divnotice').css('display','block');
        if (Divnotice.style.display == 'block'){
            $('#notice').click(function(event) {
                event.stopPropagation();
            })
            $(document).click(function(){
                $('#divnotice').css('display','none');
            })
            $('#divnotice').click(function(event) {
                event.stopPropagation();
            })
        }
    });
}

// 个人信息
function info() {
    var Info = document.getElementById('info');
    var Userinfo = document.getElementById('userinfo');
    $('#info').click(function () {
        $('#userinfo').css('display','block');
        if (Userinfo.style.display == 'block'){
            $('#info').click(function(event) {
                event.stopPropagation();
            })
            $(document).click(function(){
                $('#userinfo').css('display','none');
            })
            $('#userinfo').click(function(event) {
                event.stopPropagation();
            })
        }
    });
}

// 对学生显示成绩
function showScores() {
    var ShowScores = document.getElementById('showScores');
    var ShowBox = document.getElementById('showBox');
    ShowScores.onclick = function (ccc) {
        if (ShowBox.style.display == 'none') {
            ShowBox.style.display = 'block';
        } else {
            ShowBox.style.display = 'none';
        }
    }
}

// 批量给分框
function giveScores() {
    var GiveScores = document.getElementById('giveScores');
    var DivgiveScores = document.getElementById('div-giveScores');
    GiveScores.onclick = function (ccc) {
        if (DivgiveScores.style.display == 'none') {
            DivgiveScores.style.display = 'block';
        } else {
            DivgiveScores.style.display = 'none';
        }
    }
}

// 下载框
function downLoad() {
    var Download = document.getElementById('download');
    var Divdownload = document.getElementById('div-download');
    Download.onclick = function (ccc) {
        if (Divdownload.style.display == 'none') {
            Divdownload.style.display = 'block';
        } else {
            Divdownload.style.display = 'none';
        }
    }
}

// 不限 遍历已批
function JQcorrected() {
    $.getJSON("/teacherhomework/getlist", function (data) {
        if (data.success) {
            let homeworkList = data.homeworkList;
            var correctedHtml = "";
            console.log(homeworkList);
            $.each(homeworkList, function (n, value) {
                if (value.socre != 0){
                    console.log("不为空："+value.socre);
                    correctedHtml += '<dl class="homeworkmanage">'
                        + '<dd class="sequence">'
                        + '<input class="radio" type="checkbox">'
                        + '</dd>'
                        + '<dd class="left">'
                        + '<span class="stu-num text-overflow">' + value.studentId + '</span>'
                        + '</dd>'
                        + '<dd class="usernamegai">'
                        + '<strong class="stu-name text-overflow" title="\'' + value.name + '\'">' + value.studentName + '</strong>'
                        + '</dd>'
                        + '<dd class="colaa-batscore-fraction">'
                        + '<input type="text" class="changgrades" id="changgrades' + value.studentId + '" onchange="changeGrades(\'' + value.studentId + '\',\'' + value.homeworkId + '\')" value="' + value.socre + '">/<i>' + value.maxScore + '</i>'
                        + '</dd>'
                        + '<dd class="colaa-similarity "><span>8.88%</span></dd>'
                        + '<dd class="colaa-ontime">' + value.modifyDate + '</dd>'
                        + '<dd class="colaa-homeworkNumber" data-val="--">'
                        + '<span title="该格式无法提取文字">--</span>'
                        + '</dd>'
                        + '<dd class="colaa-cishu-help-info-tips">批阅<i>' + value.times + '</i>次</dd>'
                        + '<dd class="colaa-piyue">'
                        + '<a href="#" target="_blank">进入批阅</a>'
                        + '</dd>'
                        + '<div class="fn-show">'
                        + '</div>'
                        + '</dl>';
                }
            });
            // 遍历形式 在div中 向前遍历
            $("#approved").prepend(correctedHtml);

        }
    });
}
// 不限 遍历未批
function JQnotDone() {
    $.getJSON("/teacherhomework/getlist", function (data) {
        if (data.success) {
            let homeworkList = data.homeworkList;
            var correctedHtml = "";
            console.log(homeworkList);
            $.each(homeworkList, function (n, value) {
                if (value.socre == 0){
                    console.log("不为空："+value.socre);
                    correctedHtml += '<dl class="homeworkmanage">'
                        + '<dd class="sequence">'
                        + '<input class="radio" type="checkbox">'
                        + '</dd>'
                        + '<dd class="left">'
                        + '<span class="stu-num text-overflow">' + value.studentId + '</span>'
                        + '</dd>'
                        + '<dd class="usernamegai">'
                        + '<strong class="stu-name text-overflow" title="\'' + value.name + '\'">' + value.studentName + '</strong>'
                        + '</dd>'
                        + '<dd class="colaa-batscore-fraction">'
                        + '<input type="text" class="changgrades" id="changgrades' + value.studentId + '" onchange="changeGrades(\'' + value.studentId + '\',\'' + value.homeworkId + '\')" value="' + value.socre + '">/<i>' + value.maxScore + '</i>'
                        + '</dd>'
                        + '<dd class="colaa-similarity "><span>8.88%</span></dd>'
                        + '<dd class="colaa-ontime">' + value.modifyDate + '</dd>'
                        + '<dd class="colaa-homeworkNumber" data-val="--">'
                        + '<span title="该格式无法提取文字">--</span>'
                        + '</dd>'
                        + '<dd class="colaa-cishu-help-info-tips">批阅<i>' + value.times + '</i>次</dd>'
                        + '<dd class="colaa-piyue">'
                        + '<a href="#" target="_blank">进入批阅</a>'
                        + '</dd>'
                        + '<div class="fn-show">'
                        + '</div>'
                        + '</dl>';
                }
            });
            // 遍历形式 在div中 向前遍历
            $("#approved").prepend(correctedHtml);

        }
    });
}
// 不限 遍历未交
function JQunpaid() {
    $.getJSON("/teacherhomework/getlist", function (data) {
        if (data.success) {
            let unpaidList = data.homeworkList;
            var unpaidHtml = "";
            // console.log(unpaidList);
            $.each(unpaidList, function (n, value) {
                if (value.fileLink == ''){
                    // console.log(value.fileLink);
                    unpaidHtml += '<dl class="homeworkmanage">'
                        + '<dd class="sequence">'
                        + '</dd>'
                        + '<dd class="left">'
                        + ' <span class="stu-num text-overflow">' + value.studentId + '</span>'
                        + '</dd>'
                        + '<dd class="usernamegai">'
                        + '<strong class="stu-name text-overflow" title="\'' + value.studentName + '\'">' + value.studentName + '</strong>'
                        + '</dd>'
                        + '<dd class="colaa-batscore-fraction">'
                        + '<p class="un-colaa-batscore-fraction">未交</p>'
                        + '</dd>'
                        + '<dd class="colaa-similarity "><span>--</span></dd>'
                        + '<dd class="colaa-ontime">--</dd>'
                        + '<dd class="colaa-homeworkNumber">'
                        + '<span title="该格式无法提取文字">--</span>'
                        + '</dd>'
                        + '<dd class="colaa-cishu-help-info-tips">--</dd>'
                        + '<dd class="colaa-piyue-time">'
                        + '<a href="javascript:;" onclick="colaaTimes(\'' + value.studentId + '\',\'' + value.times + '\')">已催<i id="colaa-piyue-times">0</i>次</a>'
                        + '</dd>'
                        + '<div class="fn-show">'
                        + '</div>'
                        + '</dl>';
                }
            });
            // 遍历形式 在div中 向前遍历
            $("#approved").append(unpaidHtml);

        }
    });
}
//点击成绩选中
// $('.changgrades').click(function () {
//     $('.changgrades').focus().select();
//     $('.changgrades').selectaionStart = 0;
//     $('.changgrades').selectionEnd = this.val().length;
// });
//更改成绩
function changeGrades(studentId,homeworkId) {
    let changgrades = $('#changgrades' + studentId + '').val();
    console.log(changgrades);
    // console.log(studentId);
    // console.log(homeworkId);
    // $('.changgrades').blur(function () {
    //
    // })
    $.ajax({
        url: "teacherhomework/updatescore",
        type: 'post',
        data: {
            score: changgrades,
            studentId: studentId,
            homeworkId: homeworkId,
        },

        dataType: 'json',
        cache: false,
        async: true,
        success: function (data) {
            if (data.success) {
                alert('修改成功！');
                window.location.reload();
            } else {
                alert('修改失败！' + data.errMsg);
            }
        }
    });
}
//点击催交 向ajax传值
function colaaTimes(studentId,times){
    let approveTimes = $('#colaa-piyue-times').text();
    approveTimes++;
    console.log(approveTimes);
    $.ajax({
        url: "",
        type: 'get',
        data: {
            studentId: studentId,
            times: approveTimes,
        },

        dataType: 'json',
        contentType: false,
        processData: false,
        cache: false,
        success: function (data) {
            if (data.success) {
                alert('催交成功！');
                window.location.href = "/login/";
            } else {
                alert('催交失败！' + data.errMsg);
            }
            // 点击验证码图片的时候，注册码会改变
            $('#captcha_img').click();
        }
    });
}
//返回上页传值
$('#courseName').click(function () {
    let a = GetRequest();
    let courseId = a['courseId'];
    window.location.href = "/teacherhomework?courseId=" + courseId + "";
})

//向ajax传递courseId
function ajaxTransmitCourseId() {
    let a = GetRequest();
    let courseId = a['courseId'];
    $.ajax({
        url: "",
        async: true,
        cache: false,
        type: "get",
        dataType: 'json',
        data: {
            courseId: courseId
        },
        beforeSend: function (xmlHttp) {
            xmlHttp.setRequestHeader("If-Modified-Since", "0");
            xmlHttp.setRequestHeader("Cache-Control", "no-cache");
        },
        success: function (data) {
            if (data.success) {
                console.log("success");

            } else {
                alert('传递失败！' + data.errMsg);
            }

        }
    });
}
//向ajax传递homeworkId
function ajaxHomeworkId() {
    let a = GetRequest();
    let homeworkId = a['homeworkId'];
    $.ajax({
        url: "/teacherhomework/getid",
        async: true,
        cache: false,
        type: "get",
        dataType: 'json',
        data: {
            homeworkId: homeworkId
        },
        beforeSend: function (xmlHttp) {
            xmlHttp.setRequestHeader("If-Modified-Since", "0");
            xmlHttp.setRequestHeader("Cache-Control", "no-cache");
        },
        success: function (data) {
            if (data.success) {
                console.log("success");

            } else {
                alert('传递作业ID失败！' + data.errMsg);
            }

        }
    });
}

//获取 curseId
function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = {};
    if (url.indexOf("?") !== -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
//输出头部
function homeWorkTitle() {
    let a = GetRequest();
    let title = a['title'];
    // console.log(title);
    $('#homeworkName').html(title);//作业名
    // $.getJSON("/teacherhomework/getteahomewoeks", function(data) {
    //     if (data.success) {
    //         let course = data.homeworkList;
    //         console.log(course);
    //         $('#homeworkName').html(course.title);//作业名
    //     }
    // });
}
//点击不限
$('#tipunlimited').click(function () {
    $('#approved').show();
    $('#done-div').hide();
    $('#notDone-div').hide();
    $('#unSubmit-div').hide();
    $('#tipunlimited').css('background','#32BAF0');
    $('#tipunlimited').css('color','#ffffff');
    $('#done').css('color','#aaaaaa');
    $('#notDone').css('color','#aaaaaa');
    $('#unSubmit').css('color','#aaaaaa');
    // JQcorrected();// 遍历已批
    // JQnotDone();// 遍历未批
    // JQunpaid();// 遍历未交
})
//点击已批
$('#done').click(function () {
    $('#approved').hide();
    $('#done-div').show();
    $('#notDone-div').hide();
    $('#unSubmit-div').hide();
    $('#tipunlimited').css('background','#ffffff');
    $('#tipunlimited').css('color','#aaaaaa');
    $('#done').css('color','#32BAF0');
    $('#notDone').css('color','#aaaaaa');
    $('#unSubmit').css('color','#aaaaaa');

})
//点击未批
$('#notDone').click(function () {
    $('#approved').hide();
    $('#done-div').hide();
    $('#notDone-div').show();
    $('#unSubmit-div').hide();
    $('#tipunlimited').css('background','#ffffff');
    $('#tipunlimited').css('color','#aaaaaa');
    $('#done').css('color','#aaaaaa');
    $('#notDone').css('color','#32BAF0');
    $('#unSubmit').css('color','#aaaaaa');

})
//点击未交
$('#unSubmit').click(function () {
    $('#approved').hide();
    $('#done-div').hide();
    $('#notDone-div').hide();
    $('#unSubmit-div').show();
    $('#tipunlimited').css('background','#ffffff');
    $('#tipunlimited').css('color','#aaaaaa');
    $('#done').css('color','#aaaaaa');
    $('#notDone').css('color','#aaaaaa');
    $('#unSubmit').css('color','#32BAF0');

})

// 遍历已批
function doneJQcorrected() {
    $.getJSON("/teacherhomework/getlist", function (data) {
        if (data.success) {
            let homeworkList = data.homeworkList;
            var correctedHtml = "";
            console.log(homeworkList);
            $.each(homeworkList, function (n, value) {
                if (value.socre != 0){
                    console.log("不为空："+value.socre);
                    correctedHtml += '<dl class="homeworkmanage">'
                        + '<dd class="sequence">'
                        + '<input class="radio" type="checkbox">'
                        + '</dd>'
                        + '<dd class="left">'
                        + '<span class="stu-num text-overflow">' + value.studentId + '</span>'
                        + '</dd>'
                        + '<dd class="usernamegai">'
                        + '<strong class="stu-name text-overflow" title="\'' + value.name + '\'">' + value.studentName + '</strong>'
                        + '</dd>'
                        + '<dd class="colaa-batscore-fraction">'
                        + '<input type="text" class="changgrades" id="changgrades' + value.studentId + '" onchange="changeGrades(\'' + value.studentId + '\',\'' + value.homeworkId + '\')" value="' + value.socre + '">/<i>' + value.maxScore + '</i>'
                        + '</dd>'
                        + '<dd class="colaa-similarity "><span>8.88%</span></dd>'
                        + '<dd class="colaa-ontime">' + value.modifyDate + '</dd>'
                        + '<dd class="colaa-homeworkNumber" data-val="--">'
                        + '<span title="该格式无法提取文字">--</span>'
                        + '</dd>'
                        + '<dd class="colaa-cishu-help-info-tips">批阅<i>' + value.times + '</i>次</dd>'
                        + '<dd class="colaa-piyue">'
                        + '<a href="#" target="_blank">进入批阅</a>'
                        + '</dd>'
                        + '<div class="fn-show">'
                        + '</div>'
                        + '</dl>';
                }
            });
            // 遍历形式 在div中 向前遍历
            $("#done-div").prepend(correctedHtml);

        }
    });
}
// 遍历未批
function notDoneJQcorrected() {
    $.getJSON("/teacherhomework/getlist", function (data) {
        if (data.success) {
            let homeworkList = data.homeworkList;
            var correctedHtml = "";
            console.log(homeworkList);
            $.each(homeworkList, function (n, value) {
                if (value.socre == 0){
                    console.log("不为空："+value.socre);
                    correctedHtml += '<dl class="homeworkmanage">'
                        + '<dd class="sequence">'
                        + '<input class="radio" type="checkbox">'
                        + '</dd>'
                        + '<dd class="left">'
                        + '<span class="stu-num text-overflow">' + value.studentId + '</span>'
                        + '</dd>'
                        + '<dd class="usernamegai">'
                        + '<strong class="stu-name text-overflow" title="\'' + value.name + '\'">' + value.studentName + '</strong>'
                        + '</dd>'
                        + '<dd class="colaa-batscore-fraction">'
                        + '<input type="text" class="changgrades" id="changgrades' + value.studentId + '" onchange="changeGrades(\'' + value.studentId + '\',\'' + value.homeworkId + '\')" value="' + value.socre + '">/<i>' + value.maxScore + '</i>'
                        + '</dd>'
                        + '<dd class="colaa-similarity "><span>8.88%</span></dd>'
                        + '<dd class="colaa-ontime">' + value.modifyDate + '</dd>'
                        + '<dd class="colaa-homeworkNumber" data-val="--">'
                        + '<span title="该格式无法提取文字">--</span>'
                        + '</dd>'
                        + '<dd class="colaa-cishu-help-info-tips">批阅<i>' + value.times + '</i>次</dd>'
                        + '<dd class="colaa-piyue">'
                        + '<a href="#" target="_blank">进入批阅</a>'
                        + '</dd>'
                        + '<div class="fn-show">'
                        + '</div>'
                        + '</dl>';
                }
            });
            // 遍历形式 在div中 向前遍历
            $("#notDone-div").prepend(correctedHtml);

        }
    });
}
// 遍历未交
function unSubmitJQcorrected() {
    $.getJSON("/teacherhomework/getlist", function (data) {
        if (data.success) {
            let unpaidList = data.homeworkList;
            var unpaidHtml = "";
            // console.log(unpaidList);
            $.each(unpaidList, function (n, value) {
                if (value.fileLink == ''){
                    // console.log(value.fileLink);
                    unpaidHtml += '<dl class="homeworkmanage">'
                        + '<dd class="sequence">'
                        + '</dd>'
                        + '<dd class="left">'
                        + ' <span class="stu-num text-overflow">' + value.studentId + '</span>'
                        + '</dd>'
                        + '<dd class="usernamegai">'
                        + '<strong class="stu-name text-overflow" title="\'' + value.studentName + '\'">' + value.studentName + '</strong>'
                        + '</dd>'
                        + '<dd class="colaa-batscore-fraction">'
                        + '<p class="un-colaa-batscore-fraction">未交</p>'
                        + '</dd>'
                        + '<dd class="colaa-similarity "><span>--</span></dd>'
                        + '<dd class="colaa-ontime">--</dd>'
                        + '<dd class="colaa-homeworkNumber">'
                        + '<span title="该格式无法提取文字">--</span>'
                        + '</dd>'
                        + '<dd class="colaa-cishu-help-info-tips">--</dd>'
                        + '<dd class="colaa-piyue-time">'
                        + '<a href="javascript:;" onclick="colaaTimes(\'' + value.studentId + '\',\'' + value.times + '\')">已催<i id="colaa-piyue-times">0</i>次</a>'
                        + '</dd>'
                        + '<div class="fn-show">'
                        + '</div>'
                        + '</dl>';
                }
            });
            // 遍历形式 在div中 向前遍历
            $("#unSubmit-div").append(unpaidHtml);

        }
    });
}





