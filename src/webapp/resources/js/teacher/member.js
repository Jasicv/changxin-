/* 全选和取消全选 */
$(function () {
    show();/*  点击显示页面*/
    seleAll();// 全选
})
/*表格中checkBox点击事件*/
$('.tableCheck').click(function () {
    let flag2 = $(this).prop("checked");
    if (flag2){
        $('#deleteMember').css('backgroundColor','#32baf0');
        $('#sendMessage').css('backgroundColor','#FFFFFF');
        $('#sendMessage').css('color','#32baf0');
        $('#sendMessage').css('border','1px solid #32baf0');
    }else{
        $('#deleteMember').css('backgroundColor','#D2D2D2');
        $('#sendMessage').css('backgroundColor','#D2D2D2');
        $('#sendMessage').css('color','#FFFFFF');
        $('#sendMessage').css('border','0px');
    }
})
// 全选
function seleAll() {
    var naozhong=document.getElementById("naozhong");
    var news=document.getElementById("news");
    naozhong.onclick=toggle;
    var touxiang=document.getElementById("touxiang");
    var people=document.getElementById("people");
    touxiang.onclick=toggle1;//弹出框

    var selectAll = document.getElementById("selectAll");// 获取全选元素
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
    selectAll.onclick = function () {
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