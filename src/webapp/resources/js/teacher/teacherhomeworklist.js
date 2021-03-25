$(function () {
    if(location.href.indexOf("#reloaded")==-1){
        location.href=location.href+"#reloaded";
        location.reload();
    }
    homeWorkTitle();//输出头部
    ergodicHomeWork();//遍历个人作业
    ajaxTransmitcourseCourseId();//用ajax向课程界面传递courseId
    ajaxTransmitCourseId();//向ajax传递courseId
    divLeftMenu();//遍历左边划块
});
//输出头部
function homeWorkTitle() {
    $.getJSON("/teacgercourse/getcoursedetail", function(data) {
        if (data.success) {
            let course = data.course;
            // console.log(course);
            $('#courseName').html(" > " +course.courseName);//课程名
            $('#teacher-courseName').html(course.courseName);//课程名
            $('#teacher-courseId').html(course.courseId);//课程码
         /*   $('#teacher-member').html(homeWorkTitleList.studentCount);//学生人数
            $('#hy-dong-ge-shu').html(homeWorkTitleList.interactionNum);//互动个数
            $('#fa-bu-zuo-ye').html(homeWorkTitleList.releaseWork);//发布作业
            $('#fa-bu-ce-shi').html(homeWorkTitleList.releaseTest);//发布测试*/
        }
    });
}

//遍历个人作业
function ergodicHomeWork() {
    let a = GetRequest();
    let courseId = a['courseId'];
    // console.log("aaaa");
    $.getJSON('/teacherhomework/getteahomewoeks',function (data) {
        if (data.success) {
            let a = GetRequest();
            let teacherId = a['teacherId'];
            // 遍历教学团队
            let teacherHomeWorkList = data.homeworkList;
            // console.log(teacherHomeWorkList);
            var tempHtml = "";
            // $.getJSON('/teacherhomework/getnosubmitcount',function (data) {
            //     if (data.success){
            //         let revisedCount = data.noSubmitCount;
            //         // console.log(revisedCount);
            //
            //     }
            // });
            $.each(teacherHomeWorkList,function (n,value) {
                tempHtml += '<div class="seeHomework">'
                    + '<span class="personWork"> 个人作业&nbsp; </span>'
                    + '<span class="time"> ' + value.modifyDate + '&nbsp; &nbsp;&nbsp;' + value.time + '</span>'
                    + '<div class="box">'
                    + '<a href="/teacherpersonalwork?course=' + value.courseId + '&&title=' + value.title + '&&homeworkId=' + value.homeworkId + '" class="twoWork">' + value.title + '</a>'//作业名
                    + '</div>'
                    + '<span class="details"> ' + value.detail + ' </span>'//作业内容
                    + '<span class="finnalTime">截止日期：' + value.deadline + ' &nbsp;' + value.endtime + '&nbsp;&nbsp;&nbsp;&nbsp;0条讨论 </span>'
                    + '<div class="status">'
                    + '<div class="revised">';
                // $.getJSON('/teacherhomework/getnosubmitcount',function (data) {
                //     if (data.success){
                //         let revisedCount = data.noSubmitCount;
                //         console.log(revisedCount);
                //         tempHtml += '<a href="/teacherpersonalwork?course=' + value.courseId + '">' + revisedCount + '</a>';
                //     }
                // });
                tempHtml += '<a href="/teacherpersonalwork?course=' + value.courseId + '">0</a>';
                tempHtml += '<p>已批</p>'
                    + '</div>'
                    + '<div class="unrevised">'
                    + '<a href="/teacherpersonalwork?course=' + value.courseId + '">0</a>'
                    + '<p>未批</p>'
                    + '</div>'
                    + '<div class="unturned">'
                    + '<a href="/teacherpersonalwork?course=' + value.courseId + '">0</a>'
                    + '<p>未交</p>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
            })
        }
        // 遍历形式 在div中 向前遍历
        $("#seeHomeworkBox").append(tempHtml);
    })
}

//遍历左边划块
function divLeftMenu(){
    $.getJSON('teacgercourse/getcourselist',function (data) {
        if (data.success) {
            // 遍历教学团队
            let courseListList = data.courseList;
            // console.log(teacherHomeWorkList);
            var tempHtml = "";
            $.each(courseListList,function (n,value) {
                tempHtml += '<div class="courseList" >'
                    + '<img src="../resources/img/29.png"/>'
                    + '<a href="/teacherhomework?courseId=' + value.courseId + '">' + value.courseName + '</a>'
                    + '</div>';
            })
        }
        // 遍历形式 在div中 向前遍历
        $("#courseBox").append(tempHtml);
    })
}

//发布作业内容向后台传输 
$('#release-homework-but').click(function () {
    let a = GetRequest();
    let courseId = a['courseId'];
    // console.log("courseId:" + courseId);
    // console.log("作业名：" + $('#release-homework-title').val());//作业名
    // console.log("作业内容：" + $('#release-homework-content').val());//作业内容
    // console.log("截止日期：" + $('#release-homework-data').val());//截止日期
    // console.log("满分值：" + $('#release-homework-height-score').val());//满分值
    // console.log("查重警告：" + $('#release-homework-check-warm').val());//查重警告
    // console.log("超过查重：" + $('#release-homework-check-highest').val());//超过查重 打回
    var releaseHomework = {};
    releaseHomework.courseId = courseId;
    releaseHomework.title = $("#release-homework-title").val();
    releaseHomework.detail = $("#release-homework-content").val();
    // releaseHomework.deadLine = $("#release-homework-data").val();
    releaseHomework.topScore = $("#release-homework-height-score").val();
  /*  releaseHomework.releaseHomeworkCheckWarm = $("#release-homework-check-warm").val();
    releaseHomework.releaseHomeworkCheckHighest = $("#release-homework-check-highest").val();*/
    var formData = new FormData();
    formData.append("releaseHomeworkStr",JSON.stringify(releaseHomework));
    $.ajax({
        url: "/teacherhomework/addhomework",
        type: 'post',
        data: formData,
        // dataType: JSON,
        contentType: false,
        processData: false,
        async: true,
        cache: false,
        beforeSend: function (xmlHttp) {
            xmlHttp.setRequestHeader("If-Modified-Since", "0");
            xmlHttp.setRequestHeader("Cache-Control", "no-cache");
        },
        success: function (data) {
            if (data.success) {
                alert('提交成功！');
                window.location.reload();

            } else {
                alert('提交失败！' + data.errMsg);
            }
        }
    });
});
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
//用ajax向作业界面传递courseId
function ajaxTransmitCourseId() {
    let a = GetRequest();
    let courseId = a['courseId'];
    $.ajax({
        url: "/teacherhomework/gethomeworkcourseid",
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
