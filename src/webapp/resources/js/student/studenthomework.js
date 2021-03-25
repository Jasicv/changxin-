$(function () {
    if(location.href.indexOf("#reloaded")==-1){
        location.href=location.href+"#reloaded";
        location.reload();
    }
    onC();//作业导航  点击切换板块
    tool();// 工具 点击事件
    notice();// 通知 点击事件
    info();// 通知 点击事件
    leftMenu();//左滑出菜单
    courseList();// JQuery 左侧滑动 课程遍历
    ajaxTransmitCourseId();//向ajax传递courseId
    JQergodichomework();//JQuery遍历  个人作业
    homeWorkTitle();//输出头部

    // homeWorkTitle();//输出头部
    ajaxTransmitcourseCourseId();//用ajax向课程界面传递courseId
})
//输出头部
function homeWorkTitle() {
    $.getJSON("/teacgercourse/getcoursedetail", function(data) {
        if (data.success) {
            let course = data.course;
            // console.log(course.courseName);
            // console.log(course.className);
            // console.log(course.courseId);
            $('#courseName').html(" > " +course.courseName);//课程名
            $('#title-courseName').html(course.courseName);//课程名
            $('#title-courseId').html(course.courseId);//课程码
            /*   $('#teacher-member').html(homeWorkTitleList.studentCount);//学生人数
               $('#hy-dong-ge-shu').html(homeWorkTitleList.interactionNum);//互动个数
               $('#fa-bu-zuo-ye').html(homeWorkTitleList.releaseWork);//发布作业
               $('#fa-bu-ce-shi').html(homeWorkTitleList.releaseTest);//发布测试*/
        }
    });
}
//作业导航  点击切换板块
function onC() {
    var Alla = document.getElementById('banner1-nav').getElementsByTagName('a');
    var i = 0;
    for (i = 0; i < Alla.length; i++) {
        Alla[i].index = i;
        Alla[i].onclick = function () {
            for (i = 0; i < Alla.length; i++) {
                Alla[i].className = '';
            }
            this.className = 'active';
        }
    }
}
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
//左滑出菜单
function leftMenu() {
    var divLeftMenu = document.getElementById("div-left-menu")//获取菜单div
    var liNavItem = document.getElementById("li-nav-item")//获取点击按钮
    $('#li-nav-item').click(function () {
        $('#div-left-menu').css('display','block');
        if (divLeftMenu.style.display == 'block'){
            $('#li-nav-item').click(function(event) {
                event.stopPropagation();
            })
            $(document).click(function(){
                $('#div-left-menu').css('display','none');
            })
            $('#div-left-menu').click(function(event) {
                event.stopPropagation();
            })
        }
    });
}


//用ajax传递courseId
function ajaxTransmitCourseId() {
    let a = GetRequest();
    let courseId = a['courseId'];
    // console.log("courseId:" + courseId);
    $.ajax({
        url: "/studenthomework/getcourseid",
        async: true,
        cache: false,
        type: "GET",
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

//JQuery 遍历作业界面  标题
function title() {
    $.getJSON("/studenthomework/getcourse", function(data) {
        if (data.success) {
            let titleList = data.stuCount;
            $('#title-courseName').html(titleList.courseName);//课程名
            $('#title-courseClass').html(titleList.courseClass);//班级
            $('#title-courseId').html(titleList.courseId);//课程码
            $('#courseStudent').html(titleList.studentCount);//学生人数
        }
    });
}
// JQuery 左侧滑动 课程遍历
function courseList() {
    $.getJSON("/studentcourse/getcourselist", function(data) {
        if (data.success) {
            let leftCourseList = data.courseList;
            var tempHtml = '';

            $.each(leftCourseList,function (n,value) {
                tempHtml += '<a href="/studenthomework?courseId=' + value.courseId + '">' + value.courseName + '';
                tempHtml += '</a>';
            });
            // 遍历形式 在div中 向前遍历
            $("#courseList").prepend(tempHtml);
        }
    });

}
//JQuery遍历  个人作业
function JQergodichomework() {
    let a = GetRequest();
    let courseId = a['courseId'];
    $.getJSON("studenthomework/homeworkList", function(data) {
        if (data.success) {
            let studenthomeworkList = data.homeworkList;
            var tempHtml = '';
            console.log(studenthomeworkList);
            $.each(studenthomeworkList,function (n,value) {
                tempHtml += '<div class="homework-box">';
                tempHtml += '<div class="homework-box-mian">';
                tempHtml += '<div class="homework-box-header">'
                    + '<span class="homework-title-work">个人作业</span>'
                    + '<span id="homework-release-data">'+ value.modifyDate +'</span>'
                    + '<span id="homework-release-time">'+  +'</span>';
                tempHtml += '</div>';
                tempHtml += '<div class="homework-box-body">'
                    + '<div class="homework-body">'
                    + '<h3>'
                    + '<a href="/studentuphomework?courseId=' + courseId + '&&title=' + value.title + '&&homeworkId=' + value.homeworkId + '" id="homework-body-title">'+ value.title +'</a>'
                    + '</h3>'
                    + '<div class="homework-body-content">'
                    + '<div class="homework-body-content-p" id="homework-body-content-p">'+ value.detail +''
                    +'<a href="/studentuphomework?courseId=' + courseId + '&&title=' + value.title + '&&homeworkId=' + value.homeworkId + '" id="view-text">查看全文></a>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '<div class="homework-body-but">'
                    + '<a href="/studentuphomework?courseId=' + courseId + '&&title=' + value.title + '&&homeworkId=' + value.homeworkId + '" class="upload-work" id="upload-work" >上传作业</a>'
                    + '</div>';
                tempHtml += '</div>';
                tempHtml += '<div class="foot">'
                    + '<img src="../resources/img/assets/ic_card_time@2x.png">'
                    + '<p class="end-da">截止日期：</p>'
                    + '<span class="end-data">'+ value.deadline +'</span>'
                    + '<b class="end-time">'+  +'</b>'
                    + '<a href="#">'
                    + '<p class="discuss-num">'+  +'</p>'
                    + '<p class="discuss-tit">条讨论</p>'
                    + '</a>';
                tempHtml += '</div>';
                tempHtml += '</div>';
                tempHtml += '</div>';
            });

            // 遍历形式 在div中 向前遍历
            $("#div-homework").append(tempHtml);
        }
    });
}

//用ajax向课程界面传递courseId
function ajaxTransmitcourseCourseId() {
    let a = GetRequest();
    let courseId = a['courseId'];
    $.ajax({
        url: "/teacgercourse/getcoursebyid",
        async: true,
        cache: false,
        type: "get",
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