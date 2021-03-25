$(function () {
    leftMenu();
    rightCorner();
    info();
    notice();
    tool();
})
function rightCorner() {
    // var naozhong=document.getElementById("naozhong");
    // var news=document.getElementById("news");
    // naozhong.onclick=toggle;//信息弹出框
    // var touxiang=document.getElementById("touxiang");
    // var people=document.getElementById("people");
    // touxiang.onclick=toggle1;//个人中心弹出框
    var fabu=document.getElementById("fabu");
    var homeWork=document.getElementById("homeWork");
    fabu.onclick=toggle2;//发布作业弹出框
    var kaiguan=document.getElementById("kaiguan");
    var chachong=document.getElementById("chachong");
    kaiguan.onclick=toggle3;//查重开关按钮弹出框
}
/* 信息弹出框点击事件 */
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
/*  点击显示发布作业页面*/
function toggle2(){
  if(homeWork.style.display=="block"){
      fabu.style.backgroundColor="#ffffff";
      fabu.style.color="#32BAF0";
      homeWork.style.display="none";
  } 
  else{
      fabu.style.backgroundColor="#32BAF0";
      fabu.style.color="#ffffff";
      homeWork.style.display="block";
  }
}
/*取消按钮*/
function cancelTask() {
    homeWork.style.display="none";
}
/*  点击显示发布查重页面*/
function toggle3(){
  if(chachong.style.display=="none"){
    chachong.style.display="block";
  } 
  else{
    chachong.style.display="none";
  }

}
//左滑出菜单
function leftMenu() {
    var divLeftMenu = document.getElementById("div-left-menu")//获取菜单div
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
$('#releaseWork').click(function () {
    let workName = $('#textBox2').val();
    let workContent = $('#textBox3').val();

})
function f() {
    define('mod1',[],function(require, exports, module){
        var xvDate = require("xvDate");
    })
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