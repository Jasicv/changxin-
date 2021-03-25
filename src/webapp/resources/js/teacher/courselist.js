$(function () {
    JQergodicOtherCourse();  //JQuery遍历
    JQergodicSort();//JQ排序遍历
    JQergodicfile();//JQ归档遍历
    workMainReleaseChose();// 发布作业 select选择课程遍历
});

//JQuery课程遍历
function JQergodicOtherCourse() {
    $.getJSON("teacgercourse/getcourselist", function (data) {
        if (data.success) {
            studentCourseMap = data.courseList;
            // console.log(studentCourseMap);
            var otherCourseHtml = "";//不置顶
            var selectedCourseHtml = "";//置顶
            var homeworkHtml = "";//置顶
            var fileCourseHtml = "";//归档
            let topNum = 0;//判断置顶个数
            let unpinNum = 0;//判断非置顶个数
            var mm = 0;
            $.each(studentCourseMap, function (n, value) {
                if (value.topStatus == 0 && value.archiveStatus == 0) {
                    //0为不置顶  0为不归档
                    mm++;
                    unpinNum++;//
                    otherCourseHtml += '<dl class="course">';
                    otherCourseHtml += '<dt class="course-title">'
                        + '<div class="course-title-lable">'
                        + '<p class="course-title-lable-identity" id="course-title-lable-identity">教</p>'
                        + '</div>'
                        + '<div class="course-name">'
                        + '<a href="/teacherhomework?courseId=' + value.courseId + '&&teacherId=' + value.teacherId + ' " class="courseName" id="courseName">' + value.courseName + '</a>'
                        + '<span title="' + value.courseName + '" class="courseRemarks" id="courseRemarks">' + value.className + '</span>'
                        + '</div>'
                        + '<div class="add-course-no">'
                        + '<i class="add-course-QR"></i>'
                        + '<p class="add-course-tit" id="add-course-tit">加课码：'
                        + '<i class="add-course-num" id="add-course-num">' + value.courseId + '</i>'
                        + '</p>'
                        + '</div>'
                        + '<span class="course-term">'
                        + '<p class="course-term-year" id="course-term-year">' + value.year + '</p>'
                        + '<p class="course-term-term" id="course-term-term">' + value.term + '</p>'
                        + '</span>';
                    otherCourseHtml += '</dt>';
                    otherCourseHtml += '<dd class="course-main">'
                        + '<ul class="job-list" id="job-list' + value.id + '">'
                        + '<li class="recent-word">近期作业</li>'
                        + '</ul>'
                        + '<div class="course-main-foot">'
                        + '<img class="course-teatherAvatar">'
                        + '<p class="course-main-foot-member">成员<a  href="/teachercoursemember?courseId=' + value.courseId + '" id="course-main-foot-member-num">' + value.id + '</a>人</p>'
                        + '<div class="more" id="more' + value.id + '" onclick="more(' + value.id + ')">'
                        + '<p class="more-text">更多</p>'
                        + '<img class="more-img">'
                        + '</div>'
                        + '<ul class="more-bg" id="more-bg' + value.id + '">'
                        + '<li class="more-edit" onclick="moreEditA(\'' + value.courseId + '\',\'' + value.courseName + '\',\'' + value.className + '\',\'' + value.year + '\',\'' + value.term + '\')"><a class="more-edit-a">编辑</a></li>'
                        + '<li class="more-drop-out" onclick="moreDropOutA(\'' + value.courseId + '\')" title="' + value.courseId + '"><a class="more-drop-out-a">退课</a></li>'
                        + '<li class="more-archive" onclick="moreArchiveA(\'' + value.id + '\')"><a class="more-archive-a">归档</a></li>'
                        + '</ul>'
                        + '<a class="top" id="top" onclick="courseTop(\'' + value.id + '\')">置顶</a>'
                        + '<a class="unpin" id="unpin" style="display: none">取消置顶</a>'
                        + '</div>';
                    otherCourseHtml += '</dd>';
                    otherCourseHtml += '</dl>';
                }
                else if (value.topStatus == 1 && value.archiveStatus == 0) {
                    //1为置顶  0为归档
                    topNum++;
                    selectedCourseHtml += '<dl class="course">';
                    selectedCourseHtml += '<dt class="course-title">'
                        + '<div class="course-title-lable">'
                        + '<p class="course-title-lable-identity" id="course-title-lable-identity">教</p>'
                        + '</div>'
                        + '<div class="course-name">'
                        + '<a href="/teacherhomework?courseId=' + value.courseId + '&&teacherId=' + value.teacherId + '" class="courseName" id="courseName">' + value.courseName + '</a>'
                        + '<span title="' + value.courseName + '" class="courseRemarks" id="courseRemarks">' + value.className + '</span>'
                        + '</div>'
                        + '<div class="add-course-no">'
                        + '<i class="add-course-QR"></i>'
                        + '<p class="add-course-tit" id="add-course-tit">加课码：'
                        + '<i class="add-course-num" id="add-course-num">' + value.courseId + '</i>'
                        + '</p>'
                        + '</div>'
                        + '<span class="course-term">'
                        + '<p class="course-term-year" id="course-term-year">' + value.year + '</p>'
                        + '<p class="course-term-term" id="course-term-term">' + value.term + '</p>'
                        + '</span>';
                    selectedCourseHtml += '</dt>';
                    selectedCourseHtml += '<dd class="course-main">'
                        + '<ul class="job-list" id="job-list' + value.id + '">'
                        + '<li class="recent-word">近期作业</li>'
                        + '</ul>'
                        + '<div class="course-main-foot">'
                        + '<img class="course-teatherAvatar">'
                        + '<p class="course-main-foot-member">成员<a  href="/teachercoursemember?courseId=' + value.courseId + '" id="course-main-foot-member-num">' + value.id + '</a>人</p>'
                        + '<div class="more" id="more' + value.id + '" onclick="more(' + value.id + ')">'
                        + '<p class="more-text">更多</p>'
                        + '<img class="more-img">'
                        + '</div>'
                        + '<ul class="more-bg" id="more-bg' + value.id + '">'
                        + '<li class="more-edit" onclick="moreEditA(\'' + value.courseId + '\',\'' + value.courseName + '\',\'' + value.className + '\',\'' + value.year + '\',\'' + value.term + '\')"><a class="more-edit-a">编辑</a></li>'
                        + '<li class="more-drop-out" onclick="moreDropOutA(\'' + value.courseId + '\')" title="' + value.courseId + '"><a class="more-drop-out-a">退课</a></li>'
                        + '<li class="more-archive" onclick="moreArchiveA(\'' + value.id + '\')"><a class="more-archive-a">归档</a></li>'
                        + '</ul>'
                        + '<a class="top" id="top" style="display: none">置顶</a>'
                        + '<a class="unpin" id="unpin" onclick="courseUnpin(\'' + value.id + '\')">取消置顶</a>'
                        + '</div>';
                    selectedCourseHtml += '</dd>';
                    selectedCourseHtml += '</dl>';
                }
            });
            if (topNum > 0) {
                $('#top-course').show();//上层 置顶课程显示
                $('#unpin-course').hide();//上层 其他课程隐藏
                $('#onLevel-otherCourse-create-course').hide();//上层 添加课程div隐藏
                $('#lowerLevel-other-course').show();//下层 其他课程课程div显示
                //课程遍历
                $("#content-otherCourse").prepend(otherCourseHtml);//在其他课程中遍历
                $("#content-selectedCourse").prepend(selectedCourseHtml);//在置顶课程中遍历
            } else if (topNum === 0 && unpinNum >= 0) {
                $('#top-course').hide();//上层 置顶课程隐藏
                $('#unpin-course').show();//上层 其他课程显示
                $('#onLevel-otherCourse-create-course').show();//上层 添加课程div显示
                $('#lowerLevel-other-course').hide();//下层 其他课程课程div隐藏
                //课程遍历
                $("#content-otherCourse").prepend(otherCourseHtml);//在其他课程中遍历
                $("#content-selectedCourse").prepend(otherCourseHtml);//在置顶课程中遍历
            }
            courseWork(studentCourseMap);
        }
    });
}
//遍历作业
function courseWork(studentCourseMap) {
    $.getJSON("homework/gethomeworklist", function (data) {
        if (data.success) {
            let courseworkList = data.homeworkList;
            // console.log(courseworkList);
            // console.log(studentCourseMap);
            $.each(studentCourseMap,function (s,sva) {
                var tex = 0;
                $.each(courseworkList,function (k,va) {
                    if (va.courseId == sva.courseId && tex <= 1){
                        var courseworkHtml = "";
                        courseworkHtml += '<li class="work-list-first"><a class="work-a-first" href="/teacherpersonalwork?courseId=' + sva.courseId + '&&title=' + va.title + '&&homeworkId=' + va.homeworkId + '">' + va.title + '</a></li>';
                        $('#job-list' + sva.id + '').append(courseworkHtml);//在其他课程中遍历
                        var courseworkHtml = "";
                        // console.log(va.title);
                        // console.log('#job-list' + sva.id + '');
                        tex++;
                    }
                    // console.log('work-a-first' + va.id + '   '+'#job-list' + sva.id + ''+"课程："+sva.courseId +"     所有作业："+va.courseId+" "+va.id+" "+va.title);
                });
            })
        }
    });
}
//JQuery  排序遍历
function JQergodicSort() {
    $.getJSON("teacgercourse/getcourselist", function(data) {
        if (data.success) {
            let sortCourseList = data.courseList;
            var tempHtml = "";
            $.each(sortCourseList,function (n,value) {
                tempHtml += '<li>'
                    + '<i></i>'
                    + '<span>' + value.courseName + '</span>'
                tempHtml += '</li>';
            })
            // 遍历形式 在div中 向前遍历
            $(".sort-main-sort").append(tempHtml);

        }
    })
}

// JQuery  归档遍历
function JQergodicfile() {
    $.getJSON("teacgercourse/getcourselist", function (data) {
        if (data.success) {
            let teacherFileList = data.courseList;
            let fileCourseHtml = "";
            $.each(teacherFileList, function (n, value) {
                if (value.archiveStatus == 1) {
                    fileCourseHtml += '<dl>';
                    fileCourseHtml += '<dt>'
                        + '<p class="file-title">' + value.courseName + '</p>'
                        + '<p class="file-role">角色：老师</p>'
                        + '<a class="file-more" onclick="fileMore(\'' + value.courseId + '\')"></a>'
                        + '<ul class="file-more-box" id="file-more-box' + value.courseId + '">'
                        + '<li class="file-more-box-recovery" onclick="fileMoreBoxRecovery(\'' + value.id + '\')"><a href="javascript:;">恢复</a></li>'
                        + '<li class="file-more-box-del" onclick="fileMoreBoxDel(\'' + value.courseId + '\')"><a href="javascript:;">退课</a></li>'
                        + '</ul>'
                    fileCourseHtml += '</dt>';
                    fileCourseHtml += '</dl>';
                }

            });
            // 遍历形式 在div中 向前遍历
            $("#file-main-file").prepend(fileCourseHtml);
        }
    });
}

// 发布作业 select选择课程遍历
function workMainReleaseChose() {
    $.getJSON("teacgercourse/getcourselist", function (data) {
        if (data.success) {
            let selectCourseList = data.courseList;
            var selectCourseHtml = "";
            $.each(selectCourseList, function (n, value) {
                selectCourseHtml += '<option value="\'' + value.courseId + '\'">' + value.courseName + '</option>';
            })
            // 遍历形式 在div中 向前遍历
            $("#work-main-release-chose").append(selectCourseHtml);

        }
    });
}



