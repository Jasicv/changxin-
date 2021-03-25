$(function () {
    let Alla = document.getElementById('ul-nav-menu').getElementsByTagName('a');
    let i = 0;
    for (i = 0; i < Alla.length; i++) {
        Alla[i].index = i;
        Alla[i].onclick = function () {
            for (i = 0; i < Alla.length; i++) {
                Alla[i].className = '';
            }
            this.className = 'active';
        };
    }
    studentAddCourse();//教师添加课程、传值
    AddEstablish();//添加/创建课程 显示
    teacherEstablishCourse();// 弹出创建课程 框
});
// 工具 隐藏
let Tool = document.getElementById('tool');
let Ultool = document.getElementById('ul-tool');
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

// 通知隐藏
let Nitice = document.getElementById('notice');
let Divnotice = document.getElementById('divnotice');
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
// 个人信息隐藏
let Info = document.getElementById('info');
let Userinfo = document.getElementById('userinfo');
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

// 添加/创建课程  点击
function AddEstablish() {
    let divContentAddEstablish = document.getElementById("div-content-add-establish");
    let divContentAddEstablishList = document.getElementById("div-content-add-establish-list");
    divContentAddEstablish.onclick = function () {
        if (divContentAddEstablishList.style.display === 'none') {
            divContentAddEstablishList.style.display = 'block';
        } else {
            divContentAddEstablishList.style.display = 'none';
        }
    }
}

// 教师创建课程  弹出框
function teacherEstablishCourse() {
    let bg = document.getElementById("bg");
    let divContentEstablish = document.getElementById("div-content-establish");//点击创建课程
    let establishCourse = document.getElementById("establish-course");     //创建弹出框
    //  创建课程  按钮    被点击时弹出  添加课程框
    divContentEstablish.onclick = function () {
        bg.style.position = "fixed";
        establishCourse.style.display = "block"
    };
// 上层（其他课程）点击 弹出 添加课程框
    let onLevelOtherCourseCreateCourseAdd = document.getElementById("onLevel-otherCourse-create-course-add");
    onLevelOtherCourseCreateCourseAdd.onclick = function () {
        bg.style.position = "fixed";
        establishCourse.style.display = "block"
    };
// 下层（其他课程）点击 弹出 添加课程框
    let lowerLevelOtherCourseCreateCourseAdd = document.getElementById("lowerLevel-otherCourse-create-course-add");
    lowerLevelOtherCourseCreateCourseAdd.onclick = function () {
        bg.style.position = "fixed";
        establishCourse.style.display = "block"
    };

    // 重置数据
    let inputEstablishCourseName = document.getElementById("input-establish-course-name");//课程名
    let inputEstablishClassName = document.getElementById("input-establish-class-name");//班级名
    let establishCourseYearBox = document.getElementById("establish-course-year-box"); //得到 学年  select
    let establishCourseYearBoxopts = establishCourseYearBox.getElementsByTagName("option");//得到学年数组option
    let establishCourseStudyDataBox = document.getElementById("establish-course-studyData-box"); //得到 学期  select
    let establishCourseStudyDataBoxpts = establishCourseStudyDataBox.getElementsByTagName("option");//得到学期数组option
    let extraInfor = document.getElementsByName("extra-infor"); //额外信息

    //  创建课程框  取消按钮
    let establishCourseCancel = document.getElementById("establish-course-cancel")// 取消按钮 关闭弹出框
    establishCourseCancel.onclick = function () {
        bg.style.position = "";
        establishCourse.style.display = "none"
        inputEstablishCourseName.value = "";//课程名
        inputEstablishClassName.value = "";//班级名
        establishCourseYearBoxopts[9].selected = true; //学年恢复默认
        establishCourseStudyDataBoxpts[1].selected = true; //学期恢复默认
        for (let i = 0; i < extraInfor.length; i++) {  //额外信息恢复默认
            extraInfor[i].checked = false;
        }
    };
    //  创建课程框  X 关闭
    let closeEstablishCourse = document.getElementById("close-establish-course")//  X 关闭弹出框
    closeEstablishCourse.onclick = function () {
        bg.style.position = "";
        establishCourse.style.display = "none";
        inputEstablishCourseName.value = "";//课程名
        inputEstablishClassName.value = "";//班级名
        establishCourseYearBoxopts[9].selected = true; //学年恢复默认
        establishCourseStudyDataBoxpts[1].selected = true; //学期恢复默认
        for (let i = 0; i < extraInfor.length; i++) {  //额外信息恢复默认
            extraInfor[i].checked = false;
        }
    };

    // 编辑课程 重置数据
    let inputEditCourseName = document.getElementById("input-edit-course-name");//课程名
    let inputEditClassName = document.getElementById("input-edit-class-name");//班级名
    let editCourseYearBox = document.getElementById("edit-course-year-box"); //得到 学年  select
    let editCourseYearBoxopts = editCourseYearBox.getElementsByTagName("option");//得到学年数组option
    let editCourseStudyDataBox = document.getElementById("edit-course-studyData-box"); //得到 学期  select
    let editCourseStudyDataBoxpts = editCourseStudyDataBox.getElementsByTagName("option");//得到学期数组option
    let editExtraInfor = document.getElementsByName("edit-extra-infor"); //额外信息
    let editCourse = document.getElementById("edit-course");
    //  创建课程框  取消按钮
    let editCourseCancel = document.getElementById("edit-course-cancel")// 取消按钮 关闭弹出框
    editCourseCancel.onclick = function () {
        bg.style.position = "";
        editCourse.style.display = "none";
        inputEditCourseName.value = "";//课程名
        inputEditClassName.value = "";//班级名
        editCourseYearBoxopts[9].selected = true; //学年恢复默认
        editCourseStudyDataBoxpts[1].selected = true; //学期恢复默认
        for (let i = 0; i < editExtraInfor.length; i++) {  //额外信息恢复默认
            editExtraInfor[i].checked = false;
        }
    };
    //  创建课程框  X 关闭
    let closeEditCourse = document.getElementById("close-edit-course")//  X 关闭弹出框
    closeEditCourse.onclick = function () {
        bg.style.position = "";
        editCourse.style.display = "none";
        inputEditCourseName.value = "";//课程名
        inputEditClassName.value = "";//班级名
        editCourseYearBoxopts[9].selected = true; //学年恢复默认
        editCourseStudyDataBoxpts[1].selected = true; //学期恢复默认
        for (let i = 0; i < editExtraInfor.length; i++) {  //额外信息恢复默认
            editExtraInfor[i].checked = false;
        }
    }

    //创建课程 确认按钮

}

// 教师添加课程
function studentAddCourse() {
    let bg = document.getElementById("bg");            //获取 背景
    let addCoursePopup = document.getElementById("add-course-popup");     //获取  添加课程弹出框
    //  加入课程  按钮    被点击时弹出  添加课程框
    let divContentAdd = document.getElementById("div-content-add");
    divContentAdd.onclick = function () {
        bg.style.position = "fixed";
        addCoursePopup.style.display = "block"
    };

//  添加课程框  取消按钮
    let addCoursePopupButCancel = document.getElementById("add-course-popup-but-cancel");
    addCoursePopupButCancel.onclick = function () {
        bg.style.position = "";
        addCoursePopup.style.display = "none"
    }

    // 添加课程框   确认按钮

}

// 课程  点击更多  显示
function more(id) {
    $('#more-bg' + id + '').css('display','block');
    if ($('#more-bg' + id + '').is(':visible')){
        console.log("aa:"+id);
        $('#more' + id + '').click(function(event) {
            event.stopPropagation();
        })
        $(document).click(function(){
            $('#more-bg' + id + '').css('display','none');
        })
        $('#more-bg' + id + '').click(function(event) {
            event.stopPropagation();
        })
    }
}
//更多  点击编辑
function moreEditA(courseId,courseName,className,year,term) {
    $('#bg').css('position','fixed');
    $('#edit-course').css('display','block');
    $('#edit-course-sure').attr('title',courseId);
    $('#input-edit-course-name').val(courseName);
    $('#input-edit-class-name').val(className);
    $('#edit-course-year-box').attr('value',year);
    $('#edit-course-studyData-box').attr('value',term);
}

//更多  点击归档
function moreArchiveA(id) {

}

// 排序滚动条
function sortMainScrollBar() {
    let sortMain = $('#sort-main');//可视区域
    let sortMainFile = $('#sort-main-sort');//内容区域
    let sortMainBar = $('#sort-main-bar');//滚动条混动区域
    let sortMainScroll = $('#sort-main-scroll');//滚动条
    if (sortMainFile.height() >= sortMain.height()){
        sortMainBar.show();
        let sortMainScrollHeight = sortMainBar.height() * sortMain.height() / sortMainFile.height();
        sortMainScroll.height(parseInt(sortMainScrollHeight));
        $('#sort-main-scroll').draggable({
            axis:'y',
            containment:'parent',
            drag:function() {
                p = $(this).position();
                offset = p.top*(sortMainFile.height() - sortMain.height())/(sortMainBar.height() - sortMainScroll.height()-29)*-1;
                console.log(offset);
                sortMainFile.css("top",offset);
            }
        });
    }

}
// 归档滚动条
function fileMainScrollBar() {
    let fileMain = $('#file-main');//可视区域
    let fileMainFile = $('#file-main-file');//内容区域
    let fileMainBar = $('#file-main-bar');//滚动条混动区域
    let fileMainScroll = $('#file-main-scroll');//滚动条
    if (fileMainFile.height() >= fileMain.height()){
        fileMainBar.show();
        let fileMainScrollHeight = fileMainBar.height() * fileMain.height() / fileMainFile.height();
        fileMainScroll.height(parseInt(fileMainScrollHeight));
        $('#file-main-scroll').draggable({
            axis:'y',
            containment:'parent',
            drag:function() {
                p = $(this).position();
                offset = p.top*(fileMainFile.height() - fileMain.height())/(fileMainBar.height() - fileMainScroll.height()-29)*-1;
                console.log(offset);
                fileMainFile.css("top",offset);
            }
        });
    }

}

// 归档  点击更多  显示
function fileMore(courseId) {
    console.log("归档 显示更多");
    if ($('#file-more-box' + courseId + '').is(':hidden')){
        $('#file-more-box' + courseId + '').show();
    }else {
        $('#file-more-box' + courseId + '').hide();
    }
}

// 主界面 点击 课程排序
$('#courseSort').click(function () {
    let bg = document.getElementById("bg");
    let fileMain = document.getElementById("file-main");  //  归档界面
    let sortMain = document.getElementById("sort-main");  //  排序界面
    let sortFile = document.getElementById("sort-file");     //排序 归纳 弹出框
    let sortFileTitleSort = document.getElementById("sort-file-title-sort");//排序
    let sortFileTitleFile = document.getElementById("sort-file-title-file");//归档
    sortFileTitleSort.style.color = "#2d2d2d";
    sortFileTitleSort.style.borderBottom = "3px solid #aaa";
    sortFileTitleFile.style.color = "#818181";
    sortFileTitleFile.style.borderBottom = "3px solid #f8f8f8";
    bg.style.position = "fixed";
    fileMain.style.display = "none";
    sortMain.style.display = "block";
    sortFile.style.display = "block";
});
// 主界面 点击 课程归纳
$('#courseClassify').click(function () {
    let bg = document.getElementById("bg");
    let fileMain = document.getElementById("file-main");  //  归档界面
    let sortMain = document.getElementById("sort-main");  //  排序界面
    let sortFile = document.getElementById("sort-file");     //排序 归纳 弹出框
    let sortFileTitleSort = document.getElementById("sort-file-title-sort");//排序
    let sortFileTitleFile = document.getElementById("sort-file-title-file");//归档
    sortFileTitleSort.style.color = "#818181";
    sortFileTitleSort.style.borderBottom = "3px solid #f8f8f8";
    sortFileTitleFile.style.color = "#2d2d2d";
    sortFileTitleFile.style.borderBottom = "3px solid #aaa";
    bg.style.position = "fixed";
    fileMain.style.display = "block";
    sortMain.style.display = "none";
    sortFile.style.display = "block";
});
//归纳 排序 弹出框 点击 排序
$('#sort-file-title-sort').click(function () {
    let sortFileTitleSort = document.getElementById("sort-file-title-sort");//排序
    let sortFileTitleFile = document.getElementById("sort-file-title-file");//归档
    let fileMain = document.getElementById("file-main");  //  归档界面
    let sortMain = document.getElementById("sort-main");  //  排序界面
    sortFileTitleSort.style.color = "#2d2d2d";
    sortFileTitleSort.style.borderBottom = "3px solid #aaa";
    sortFileTitleFile.style.color = "#818181";
    sortFileTitleFile.style.borderBottom = "3px solid #f8f8f8";
    fileMain.style.display = "none";
    sortMain.style.display = "block";
});
//归纳 排序 弹出框 点击 归纳
$('#sort-file-title-file').click(function () {
    let sortFileTitleSort = document.getElementById("sort-file-title-sort");//排序
    let sortFileTitleFile = document.getElementById("sort-file-title-file");//归档
    let fileMain = document.getElementById("file-main");  //  归档界面
    let sortMain = document.getElementById("sort-main");  //  排序界面
    sortFileTitleSort.style.color = "#818181";
    sortFileTitleSort.style.borderBottom = "3px solid #f8f8f8";
    sortFileTitleFile.style.color = "#2d2d2d";
    sortFileTitleFile.style.borderBottom = "3px solid #aaa";
    fileMain.style.display = "block";
    sortMain.style.display = "none";
});
//归纳 排序 弹出框 点击 X 关闭页面
$('#sort-file-title-X').click(function () {
    let bg = document.getElementById("bg");
    let fileMain = document.getElementById("file-main");  //  归档界面
    let sortMain = document.getElementById("sort-main");  //  排序界面
    let sortFile = document.getElementById("sort-file");     //排序 归纳 弹出框
    bg.style.position = "";
    fileMain.style.display = "none";
    sortMain.style.display = "none";
    sortFile.style.display = "none";
});
//点击 快速发布活动
$('#div-content-release-activity').click(function () {
    let bg = document.getElementById("bg");
    let releaseActivity = document.getElementById("release-activity");
    bg.style.position = "fixed";
    releaseActivity.style.display = "block";
})

//点击 快速发布活动 X 按钮
$('#close-release-activity').click(function () {
    let bg = document.getElementById("bg");
    let releaseActivity = document.getElementById("release-activity");
    bg.style.position = "";
    releaseActivity.style.display = "none";
})

//点击 快速发布活动 作业
$('#release-activity-content-work').click(function () {
    let bg = document.getElementById("bg");
    let releaseActivity = document.getElementById("release-activity");
    let releasePersonalWork = document.getElementById("release-personal-work");
    bg.style.position = "fixed";
    releaseActivity.style.display = "none";
    releasePersonalWork.style.display = "block";
})
//点击 快速发布活动 X 按钮
$('#close-release-personal-work').click(function () {
    $('#input-box-work-name').val("");
    $('#work-editor-txt').val("");
    $('#input-box-end-data-txt').val("");
    $('#release-homework-height-score').val("");
    $('#release-homework-check-warm').val("");
    $('#release-homework-check-highest').val("");
    $('#work-main-release-chose').val("");
    $("#work-main-release-chose").attr("value",'0');
    let bg = document.getElementById("bg");
    let releasePersonalWork = document.getElementById("release-personal-work");
    bg.style.position = "";
    releasePersonalWork.style.display = "none";
})
//点击 快速发布活动 取消 按钮
$('#release-personal-cancel').click(function () {
    $('#input-box-work-name').val("");
    $('#work-editor-txt').val("");
    $('#input-box-end-data-txt').val("");
    $('#release-homework-height-score').val("");
    $('#release-homework-check-warm').val("");
    $('#release-homework-check-highest').val("");
    $('#work-main-release-chose').val("");
    $("#work-main-release-chose").attr("value",'0');
    let bg = document.getElementById("bg");
    let releasePersonalWork = document.getElementById("release-personal-work");
    bg.style.position = "";
    releasePersonalWork.style.display = "none";
})


