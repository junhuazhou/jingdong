$(function () {
    var index = 0;
    var inverval = 1500;
    var timer;
    $("#next").click(function () {
        index ++;
        if (index ==4){
            $(".ad").find("img").eq(index).fadeIn()
                .siblings().fadeOut();
            index = -1;
        }
        else {
            $(".ad").find("img").eq(index).fadeIn()
                .siblings().fadeOut();
        }
        showButtons();
    })
    $("#prev").click(function () {
        index --;
        if (index ==-1){
            $(".ad").find("img").eq(index+5).fadeIn()
                .siblings().fadeOut();
            index = 4;
        }
        else {
            $(".ad").find("img").eq(index).fadeIn()
                .siblings().fadeOut();
        }
        showButtons();
    })
    $("#num span").click(function () {
        index = parseInt($(this).attr('index'));
        $(".ad").find("img").eq(index).fadeIn()
            .siblings().fadeOut();
        showButtons();
    })
    play();
    $('.container').hover(stop,play);

    //左侧目录
    $(".list li").mousemove(function () {

            $(".children_list").show();


    })
    $(".list li").mouseleave(function () {
            $(".children_list").delay(2000).hide();
    })
    $("#shut_down").click(function () {
        $("header").slideUp();
    })
    //封装函数
    function play() {
        timer = setTimeout(function () {
            $("#next").trigger("click");
            play();
        },inverval);
    }
    function showButtons() {
        $("#num span").eq(index).addClass("on").siblings().removeClass();
    }
    function stop() {
        clearTimeout(timer);
    }
})