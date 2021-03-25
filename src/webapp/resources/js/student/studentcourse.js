$(function () {
    alla();//课程页面  导航切换
    ultool();// 工具 隐藏
    bitice();// 通知隐藏
    info();// 个人信息隐藏
    studentAddCourse();// 学生  三处 添加课程 弹出框
    addCourseCancel();//  添加课程框  取消按钮
    sortMainScrollBar();// 排序滚动条
    fileMainScrollBar();// 归档滚动条
})
//课程页面  导航切换
function alla() {
    var Alla = document.getElementById('ul-nav-menu').getElementsByTagName('a');
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
// 工具 隐藏
function ultool() {
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
// 通知隐藏
function bitice() {
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
// 个人信息隐藏
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
// 学生  三处 添加课程 弹出框
function studentAddCourse() {
    var bg = document.getElementById("bg");            //获取 背景
    var addCoursePopup = document.getElementById("add-course-popup");     //获取  添加课程弹出框
    //  +加入课程  按钮    被点击时弹出  添加课程框
    var addCourse = document.getElementById("addCourse");
    addCourse.onclick = function () {
        bg.style.position = "fixed";
        addCoursePopup.style.display = "block"
    }
// 上层（其他课程）点击 弹出 添加课程框
    var onLevelOtherCourseCreateCourseAdd = document.getElementById("onLevel-otherCourse-create-course-add");
    onLevelOtherCourseCreateCourseAdd.onclick = function () {
        bg.style.position = "fixed";
        addCoursePopup.style.display = "block"
    }
// 下层（其他课程）点击 弹出 添加课程框
    var lowerLevelOtherCourseCreateCourseAdd = document.getElementById("lowerLevel-otherCourse-create-course-add");
    lowerLevelOtherCourseCreateCourseAdd.onclick = function () {
        bg.style.position = "fixed";
        addCoursePopup.style.display = "block"
    }
}
//  添加课程框  取消按钮
function addCourseCancel() {
    var bg = document.getElementById("bg");            //获取 背景
    var addCoursePopup = document.getElementById("add-course-popup");     //获取  添加课程弹出框
    var addCoursePopupButCancel = document.getElementById("add-course-popup-but-cancel");
    addCoursePopupButCancel.onclick = function () {
        bg.style.position = "";
        addCoursePopup.style.display = "none"
    }
}
// 课程  点击更多  显示
function more(id) {
    $('#more-bg' + id + '').css('display','block');
    if ($('#more-bg' + id + '').is(':visible')){
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
})
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
})
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
})
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
})
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
})
