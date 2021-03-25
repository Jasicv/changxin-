$(function () {
    // upFile();//点击上传文件
    // homeworkPage();//输出页面数据

    $('#handup-button').click(function () {
        console.log($('#upfile')[0].files[0]);
        ajaxUpFile();//上传文件 向Ajax传文件
    });
    fileName();//输出上传文件名
    // seleAll();
    show();
    // console.log(GetRequest());
    // let a = GetRequest();
    // let courseId = a['courseId'];
    // console.log(courseId);
});
//点击 提交 上传文件
// function upFile() {
//     if ($('#upfile').val() != ""){

//     }
// }
// 全选
function seleAll() {
    var naozhong=document.getElementById("naozhong");
    var news=document.getElementById("news");
    naozhong.onclick=toggle;
    var touxiang=document.getElementById("touxiang");
    var people=document.getElementById("people");
    touxiang.onclick=toggle1;//弹出框

    var selectAl = document.getElementById("selectAll");// 获取全选元素
    var deleteMember = document.getElementById("deleteMember");// 获取删除成员
    var sendMessage = document.getElementById("sendMessage");// 获取发送信息
    var ggs = document.getElementsByName("gg");//获取input标签里的checkbox相同名字的集合
    // 全选或者不选的时候 调用此函数
    function ff(flag) {
        //勾选时flag=true,取消勾选时flag=false
        //创建 i < input 的条件进行for循环获取input的索引，在条件内i++,不满足条件就结束代码
        for (var i = 0; i < ggs.length; i++) {
            ggs[i].checked = flag;//获取 i 当前条，然后等于传过来的参数
        }
    }
    //全选的点击事件，根据点击的状态调用上面函数
    selectAl.onclick = function () {
        if (selectAll.checked) {
            //if(selectAll.checked)判断是否勾选
            document.getElementById("pp").innerHTML = '取消全选';
            ff(true);//调用ff(flag)函数，把判断勾选的参数true传过去
            deleteMember.style.backgroundColor="#32baf0";
            sendMessage.style.backgroundColor="#FFFFFF";
            sendMessage.style.color="#32baf0";
            sendMessage.style.border="1px solid #32baf0";
        } else {
            document.getElementById("pp").innerHTML = '本页全选';
            ff(false)//调用ff(flag)函数，把判断勾选的参数false传过去
            deleteMember.style.backgroundColor="#D2D2D2";
            sendMessage.style.backgroundColor="#D2D2D2";
            sendMessage.style.color="#FFFFFF";
            sendMessage.style.border="0px";
        }
    }
}
//返回上页传值
$('#span').click(function () {
    let a = GetRequest();
    let courseId = a['courseId'];
    window.location.href = "/studenthomework?courseId=" + courseId + "";
})
/*  点击显示页面*/
function show() {
    //获取点击事件的对象
    $(".navigation li").click(function(){
        //获取要显示或隐藏的对象
        var divShow = $(".contentMainRight").children('.list2');
        //判断当前对象是否被选中，如果没选中的话进入if循环
        if (!$(this).hasClass('choose')) {
            //获取当前对象的索引
            var index = $(this).index();
            //当前对象添加选中样式并且其同胞移除选中样式；
            $(this).addClass('choose').siblings('li').removeClass('choose');
            //索引对应的div块显示
            $(divShow[index]).show();
            //索引对应的div块的同胞隐藏
            $(divShow[index]).siblings('.list2').hide();
        }
    });
}
/* 信息弹出框点击事件
   */
function toggle(){
    if(news.style.display=="block"){
        news.style.display="none";

    }
    else{
        news.style.display="block";

    }
}

/* 个人中心弹出框点击事件 */
function toggle1(){
    if(people.style.display=="block"){
        people.style.display="none";

    }
    else{
        people.style.display="block";

    }

}
//上传文件 向Ajax传文件
function ajaxUpFile() {
    let a = GetRequest();
    let homeworkId = a['homeworkId'];
    console.log(homeworkId);
    // let homeworkId = '1245';
    var homework = {};
    homework.homeworkId = homeworkId;
    var formData = new FormData();
    formData.append("homeworkStr",JSON.stringify(homework));
    var file = $('#upfile')[0].files[0];
    formData.append('file', file); // 固定格式
    console.log(formData);
    $.ajax({
        url: '/studenthomework/submithomework',
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        cache: false,
        success: function (data) {
            if (data.success) {
                alert("上传成功");
                window.location.reload();


            } else {
                alert('上传失败！' + data.errMsg);
            }

        }
    })
}
//获取 作业Id
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
//输出页面数据
// function homeworkPage() {
//     $.getJSON('',function (data) {
//         if (data.success){
//             let homework = data.a;
//             console.log(homework);
//             $('#student-team-num').html(homework[0]);
//             $('#content-introduce').html(homework[0]);
//             $('#endDate').html(homework[0]);
//         }
//     })
// }
//输出上传文件名
function fileName() {
    $.getJSON('/studenthomework/getfilename',function (data) {
        if (data.success){
            let fileNameCount = data.fileName;
            console.log(fileNameCount);
            if (fileNameCount != null)
                $('#up-after').show();
                $('#file-name').html(fileNameCount.substring(1,fileNameCount.length));
            }
    })
}
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