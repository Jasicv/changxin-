$(function () {
    var createCourseUrl = "/teacgercourse/createcourse";
    var modifyUrl = "/teachercourse/modifycourse";


    let establishCourse = document.getElementById("establish-course");     //创建弹出框
    let inputEstablishCourseName = document.getElementById("input-establish-course-name");//课程名
    let inputEstablishClassName = document.getElementById("input-establish-class-name");//班级名
    let establishCourseYearBox = document.getElementById("establish-course-year-box"); //得到 学年  select
    let establishCourseYearBoxopts = establishCourseYearBox.getElementsByTagName("option");//得到学年数组option
    let establishCourseStudyDataBox = document.getElementById("establish-course-studyData-box"); //得到 学期  select
    let establishCourseStudyDataBoxpts = establishCourseStudyDataBox.getElementsByTagName("option");//得到学期数组option

    $('#establish-course-sure').click(function () {
        let establish = {};
        establish.courseName = $("#input-establish-course-name").val();
        establish.className = $("#input-establish-class-name").val();
        establish.year = $("#establish-course-year-box").find("option:selected").text();
        establish.term = $("#establish-course-studyData-box").find("option:selected").text();
        // let extraInfor = document.getElementsByName("extra-infor"); //额外信息
        // 生成表单对象，用于接收参数并传递给后台
        let formData = new FormData();
        formData.append("establishStr", JSON.stringify(establish));
        $.ajax({
            url: "/teacgercourse/createcourse",
            type: 'POST',
            data: formData,
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
                    window.location.reload();
                    bg.style.position = "";
                    establishCourse.style.display = "none";
                    inputEstablishCourseName.value = "";//课程名
                    inputEstablishClassName.value = "";//班级名
                    establishCourseYearBoxopts[9].selected = true; //学年恢复默认
                    establishCourseStudyDataBoxpts[1].selected = true; //学期恢复默认
                    for (let i = 0; i < extraInfor.length; i++) {  //额外信息恢复默认
                        extraInfor[i].checked = false;
                    }
                    alert('提交成功！');

                } else {
                    alert('提交失败！' + data.errMsg);
                    inputEstablishCourseName.value = "";
                    inputEstablishClassName.value = "";//班级名
                    establishCourseYearBoxopts[9].selected = true; //学年恢复默认
                    establishCourseStudyDataBoxpts[1].selected = true; //学期恢复默认
                    for (let i = 0; i < extraInfor.length; i++) {  //额外信息恢复默认
                        extraInfor[i].checked = false;
                    }
                }
            }
        });
    });

    //编辑课程 修改按钮
    $("#edit-course-sure").click(function () {


        let courseid = $('#edit-course-sure').attr('title');
        let bg = document.getElementById("bg");
        let divContentEdit = document.getElementById("div-content-edit");//点击创建课程
        let editCourse = document.getElementById("edit-course");     //创建弹出框
        // 重置数据
        let inputEditCourseName = document.getElementById("input-edit-course-name");//课程名
        let inputEditClassName = document.getElementById("input-edit-class-name");//班级名
        let editCourseYearBox = document.getElementById("edit-course-year-box"); //得到 学年  select
        let editCourseYearBoxopts = editCourseYearBox.getElementsByTagName("option");//得到学年数组option
        let editCourseStudyDataBox = document.getElementById("edit-course-studyData-box"); //得到 学期  select
        let editCourseStudyDataBoxpts = editCourseStudyDataBox.getElementsByTagName("option");//得到学期数组option
        let editExtraInfor = document.getElementsByName("edit-extra-infor"); //额外信息
        let edit = {};
        edit.courseId = courseid; //课程id
        edit.courseName = $("#input-edit-course-name").val();
        edit.className = $("#input-edit-class-name").val();
        //  edit.year = $("#edit-course-year-box").find("option:selected").text();
        // 生成表单对象，用于接收参数并传递给后台
        let editData = new FormData();
        editData.append("editStr", JSON.stringify(edit));
        $.ajax({
            url: "/teacgercourse/modifycourse",
            type: 'POST',
            data: editData,
            contentType: false,
            processData: false,
            cache: false,
            async: true,
            beforeSend: function (xmlHttp) {
                xmlHttp.setRequestHeader("If-Modified-Since", "0");
                xmlHttp.setRequestHeader("Cache-Control", "no-cache");
            },
            success: function (data) {
                if (data.success) {
                    bg.style.position = "";
                    editCourse.style.display = "none";
                    inputEditCourseName.value = "";//课程名
                    inputEditClassName.value = "";//班级名
                    editCourseYearBoxopts[9].selected = true; //学年恢复默认
                    editCourseStudyDataBoxpts[1].selected = true; //学期恢复默认
                    for (let i = 0; i < editExtraInfor.length; i++) {  //额外信息恢复默认
                        editExtraInfor[i].checked = false;
                    }
                    alert('提交成功！');
                    window.location.reload();

                } else {
                    alert('提交失败！' + data.errMsg);
                    inputEditCourseName.value = "";//课程名
                    inputEditClassName.value = "";//班级名
                    editCourseYearBoxopts[9].selected = true; //学年恢复默认
                    editCourseStudyDataBoxpts[1].selected = true; //学期恢复默认
                    for (let i = 0; i < editExtraInfor.length; i++) {  //额外信息恢复默认
                        editExtraInfor[i].checked = false;
                    }
                }
            }
        });
    })


    let bg = document.getElementById("bg");
    let addCoursePopup = document.getElementById("add-course-popup");
    let addCoursePopupInput = document.getElementById("add-course-popup-input");
    $('#add-course-popup-but-sure').click(function () {
        let extrCode = $('#add-course-popup-input').val(); //获取输入的  课程码
        $.ajax({
            url: "/teacgercourse/joincourse",
            async: true,
            cache: false,
            type: "post",
            dataType: 'json',
            data: {
                extrCode: extrCode
            },
            beforeSend: function (xmlHttp) {
                xmlHttp.setRequestHeader("If-Modified-Since", "0");
                xmlHttp.setRequestHeader("Cache-Control", "no-cache");
            },
            success: function (data) {
                if (data.success) {
                    //  $.toast('登录成功！');
                    //后续操作
                    alert("添加成功");
                    bg.style.position = "";
                    addCoursePopup.style.display = "none";
                    addCoursePopupInput.innerText = "";
                    window.location.reload();
                } else {
                    alert("添加失败，原因是" + data.errMsg);
                }
            }
        })
    });

});

// 课程  点击  置顶
function courseTop(id) {
    $.ajax({
        url: "/teacgercourse/topcourse",
        async: true,
        cache: false,
        type: "get",
        dataType: 'json',
        data: {
            id: id,
        },
        success: function (data) {
            if (data.success) {
                alert('置顶成功！');
                window.location.reload();
            } else {
                alert('置顶失败！' + data.errMsg);
            }
        }
    })
}

// 课程  点击  取消置顶
function courseUnpin(id) {
    $.ajax({
        url: "/teacgercourse/untopcourse",
        async: true,
        cache: false,
        type: "get",
        dataType: 'json',
        data: {
            id: id,
        },
        success: function (data) {
            if (data.success) {
                alert('取消置顶成功！');
                window.location.reload();
            } else {
                alert('取消置顶失败！' + data.errMsg);
            }
        }
    })
}

// 更多  点击归档
function moreArchiveA(id) {
    $.ajax({
        url: '/teacgercourse/archivecourse',
        async: true,
        cache: false,
        type: "get",
        dataType: 'json',
        data: {
           id: id,
        },
        success: function (data) {
            if (data.success) {
                alert('归档成功！');
                window.location.reload();
            } else {
                alert('归档失败！' + data.errMsg);
            }
        }
    })
}

// 更多  点击退课
function moreDropOutA(courseId) {
    let bg = document.getElementById("bg");
    let dropOutSure = document.getElementById("drop-out-sure");
    bg.style.position = "fixed";
    dropOutSure.style.display = "block";
    $('#drop-out-but-sure').click(function () {
        $.ajax({
            url: "/teacgercourse/deletecourse",
            async: true,
            cache: false,
            type: "get",
            dataType: 'json',
            data: {
                courseId: courseId,
            },
            success: function (data) {
                if (data.success) {
                    alert('删除成功！');
                    window.location.reload();
                } else {
                    alert('删除失败！' + data.errMsg);
                    /* window.location.reload();*/
                }
            }
        })
    })
    $('#drop-out-but-cancel').click(function () {
        bg.style.position = "";
        dropOutSure.style.display = "none";
    })

}

//归档  点击恢复
function fileMoreBoxRecovery(id) {
    $.ajax({
        url: "/teacgercourse/unarchivecourse",
        async: true,
        cache: false,
        type: "get",
        dataType: 'json',
        data: {
            id: id,
        },
        success: function (data) {
            if (data.success) {
                alert('恢复成功！');
                window.location.reload();
            } else {
                alert('恢复失败！' + data.errMsg);
                window.location.reload();
            }
        }
    })
}

//归档  退课
function fileMoreBoxDel(courseId) {
    $.ajax({
        url: "/teacgercourse/deletecourse",
        async: true,
        cache: false,
        type: "get",
        dataType: 'json',
        data: {
            courseId: courseId,
        },
        success: function (data) {
            if (data.success) {
                alert('删除成功！');
                window.location.reload();
            } else {
                alert('删除失败！' + data.errMsg);
                window.location.reload();
            }
        }
    })
}
//发布作业界面 确定按钮
$('#release-personal-sure').click(function () {
    console.log("作业名：" + $('#input-box-work-name').val());//作业名
    console.log("作业内容：" + $('#work-editor-txt').val());//作业内容
    console.log("截止日期：" + $('#input-box-end-data-txt').val());//截止日期
    console.log("满分值：" + $('#release-homework-height-score').val());//满分值
    console.log("查重警告：" + $('#release-homework-check-warm').val());//查重警告
    console.log("超过查重：" + $('#release-homework-check-highest').val());//超过查重 打回
    console.log("课程id：" + $('#work-main-release-chose').val());//超过查重 打回
    var releaseWork = {};
    releaseWork.inputBoxWorkName = $("#input-box-work-name").val();//作业名
    releaseWork.workEditorTxt = $("#work-editor-txt").val();//作业内容
    releaseWork.inputBoxEndDataTxt = $("#input-box-end-data-txt").val();//截止日期
    releaseWork.releaseHomeworkHeightScore = $("#release-homework-height-score").val();//满分值
    releaseWork.releaseHomeworkCheckWarm = $("#release-homework-check-warm").val();//查重警告值
    releaseWork.releaseHomeworkCheckHighest = $("#release-homework-check-highest").val();//超过查重 打回
    releaseWork.workMainReleaseChose = $("#work-main-release-chose").val();//课程Id
    var formData = new FormData();
    formData.append("releaseWorkStr",JSON.stringify(releaseWork));
    $.ajax({
        url: '/teacherhomework/addhomework',
        type: 'post',
        data: formData,
        dataType: JSON,
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
                alert(111);
                $('#input-box-work-name').html("");
                $('#work-editor-txt').html("");
                $('#input-box-end-data-txt').html("");
                $('#release-homework-height-score').html("");
                $('#release-homework-check-warm').html("");
                $('#release-homework-check-highest').html("");
                $('#work-main-release-chose').html("");
                $("#work-main-release-chose").attr("value",'0');
                let bg = document.getElementById("bg");
                let releaseActivity = document.getElementById("release-activity");
                bg.style.position = "";
                releaseActivity.style.display = "none";
                alert('发布成功！');
                window.location.reload();

            } else {
                alert('发布失败！' + data.errMsg);
            }
        }
    });
});
