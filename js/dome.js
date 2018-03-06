//购物车
    let gouwu = $(".header_gouwu");
    // let gouwu_box = $(".gouwu_box");
    gouwu.mouseenter(function () {
        $(this).addClass("active");
        $(this).children(".gouwu_box").animate({height:98,overflow:"none"},500)
    });
    gouwu.mouseleave(function () {
        $(this).removeClass("active");
        $(this).children(".gouwu_box").animate({height:0,overflow:"hidden"},500)
    });


//选项卡
    let nav_word = $(".nav_word");
    // let non = $(".nav_xuan");

    nav_word.mouseenter(function () {
        $(this).children(".nav_xuan").animate({height:229,overflow:"none"},500);
    });
    nav_word.mouseleave(function () {
        $(this).children(".nav_xuan").animate({height:0,overflow:"hidden"},500);
    });
    let nav = $(".nav_box");
        nav.mouseenter(function () {
            let index=$(this).index();
            $(this).removeClass("active");
            $(this).parent().children(".nav_xuan").children(".xuan_center").css({"display":"none"});
            $(this).addClass("active");
            $(this).parent().children(".nav_xuan").children(".xuan_center").eq(index).css({"display":"block"});
            // $(this).parent().children(".nav_xuan").children(".xuan_center").eq().css({"display":"block"});
            // nav[5].onmousemove = function () {
            //     animate(non,{height:0,overflow:"none"},200);
            // }
            // nav[8].onmousemove = function () {
            //     animate(non,{height:0,overflow:"none"},200);
            // }
            // nav[9].onmousemove = function () {
            //     animate(non,{height:0,overflow:"none"},200);
            // }
        });


// banner
    let ban = $(".banner");
    let banimg = $("ul.banner_img li");
    let left = $('.banner_left');
    let right = $('.banner_right');
    let banner = $(".baner_nav");
    let btn = $(".banner_button span");
    let t = 0;
    let flag = true;
    function name() {
        t++;
        if (t == banimg.length) {
            t = 0;
        }
        $(banimg).removeClass("active");
        $(btn).removeClass("active");
        $(banimg[t]).addClass("active");
        $(btn[t]).addClass("active");
    }

    let time = setInterval(name, 3000);
    ban.mouseenter(function () {
        clearInterval(time);
    });
    ban.mouseleave(function () {
        time = setInterval(name, 3000);
    });
    right.click(function () {
            name()
    });
    left.click(function () {
        t--;
        if (t < 0) {
            t = banimg.length - 1;
        }
        $(banimg).removeClass("active");
        $(btn).removeClass("active");
        $(banimg[t]).addClass("active");
        $(btn[t]).addClass("active");
    });
//     // 按键
    btn.click(function () {
        let index=$(this).index();
        $(banimg).removeClass("active");
        $(btn).removeClass("active");
        $(banimg).eq(index).addClass("active");
        $(btn).eq(index).addClass("active");
    });
// // banner选项卡
let cc = $(".banner_none");
let cenav= $(".n_w");
cenav.mousemove(function () {
    let index=$(this).index();
    $(cenav).removeClass("active1");
    $(cc).removeClass("active");
    $(cenav).eq(index).addClass("active1");
    $(cc).eq(index).addClass("active");
});
cenav.mouseout(function () {
    $(this).removeClass("active1");
    $(cc).removeClass("active");
});

// // 家电、智能选项卡
$(".title_R .right_title").mousemove(function () {
    $(".title_R .right_title").removeClass("active");
    $(".title_R .right_title").eq($(this).index()).addClass("active");
    $(".jiadian_right").removeClass("active1").eq($(this).index()).addClass("active1")
});

$(".zhineng .right_word").mousemove(function () {
    $(".zhineng .right_word").removeClass("active");
    $(".zhineng .right_word").eq($(this).index()).addClass("active");
    $("#zhineng .shopping_right").removeClass("active1").eq($(this).index()).addClass("active1")
});

$(".dapei .right_word").mousemove(function () {
    $(".dapei .right_word").removeClass("active");
    $(".dapei .right_word").eq($(this).index()).addClass("active");
    $("#dapei .shopping_right").removeClass("active1").eq($(this).index()).addClass("active1")
});

$(".peijian .right_word").mousemove(function () {
    $(".peijian .right_word").removeClass("active");
    $(".peijian .right_word").eq($(this).index()).addClass("active");
    $("#peijian .shopping_right").removeClass("active1").eq($(this).index()).addClass("active1")
});

$(".zhoubian .right_word").mousemove(function () {
    $(".zhoubian .right_word").removeClass("active");
    $(".zhoubian .right_word").eq($(this).index()).addClass("active");
    $("#zhoubian .shopping_right").removeClass("active1").eq($(this).index()).addClass("active1")
});

//
// // 明星单品选项卡
    let danpin = $(".danpin_bottom");
    let boxx = $(".danpin");
    let left_j = $(".left_jiantou");
    let right_j = $(".right_jiantou");
    let now =0;
    let next = 0;
    // let flag1 = true;
    // let width = parseInt(getComputedStyle(boxx,null).width);
    function dan() {
        next = now +1;
        if (next >= danpin.length) {
            next = 0;
        }
        $(danpin[next]).css({"left":"100%"});
        $(danpin[now]).animate({left: -1200},500);
        $(danpin[next]).animate({left: 0}, 500);
        now =next;
    }
    let sh =setInterval(dan,4000);
    boxx.mouseenter(function () {
        clearInterval(sh)
    });
    boxx.mouseleave(function () {
        sh =setInterval(dan,4000);
    });
    right_j.click(function () {
        dan();
    });
    left_j.click(function () {
        next = now -1;
        if (next < 0) {
            next = danpin.length-1;
        }
        $(danpin[next]).css({"left":"-100%"});
        $(danpin[now]).animate({left: 1200},500);
        $(danpin[next]).animate({left: 0}, 500);
        now =next;
    });
// // 为你推荐
    let tuijian = $(".tuijian_bottom");
    let ttbox = $(".tuijian");
    let left_t = $(".left_tuijiantou");
    let right_t = $(".right_tuijiantou");
    let now1 =0;
    let next1 = 0;
    function tui() {
        next1 = now1 +1;
        if (next1 >= tuijian.length) {
            next1 = 0;
        }
        $(tuijian[next1]).css({"left":"100%"});
        $(tuijian[now1]).animate({left: -1200},500);
        $(tuijian[next1]).animate({left: 0}, 500);
        now1 =next1;
    }
    let shij =setInterval(tui,4000);
    ttbox.mouseenter(function () {
        clearInterval(shij)
    });
    ttbox.mouseleave( function () {
        shij =setInterval(tui,4000);
    });
    right_t.click(function () {
        tui();
    });
    left_t.click(function () {
        next1 = now1 -1;
        if (next1 < 0) {
            next1 = tuijian.length-1;
        }
        $(tuijian[next1]).css({"left":"-100%"});
        $(tuijian[now1]).animate({left: 1200},500);
        $(tuijian[next1]).animate({left: 0}, 500);
        now1 =next1;
    });
//
// //     内容
    let hezi = document.querySelectorAll(".neirong_box");
    function feng(hezi) {
        let neirong = hezi.querySelectorAll(".neirong_bot .neirong_box .neirong_aa");
        let bt = hezi.querySelectorAll(".neirong_box .neirong_button .button_dot");
        let now = 0;
        let next = 0;
        let width = parseInt(getComputedStyle(hezi, null).width);
        let flag = true;
        function move() {
            next = now + 1;
            if (next >= neirong.length) {
                next = 0;
            }
            neirong[next].style.left = "100%";
            animate(neirong[now], {left: -width}, 500);
            animate(neirong[next], {left: 0}, 500,function () {
                flag = true;
            });
            // 按钮
            bt[now].classList.remove("active");
            bt[next].classList.add("active");
            now = next;
        }
        let ll = hezi.querySelector(".neirong_box .n_left");
        let rr = hezi.querySelector(".neirong_box .n_right");
        rr.onclick = function () {
            if(!flag){
                return
            }
            flag = false;
            move();
        }
        ll.onclick = function () {
            if(!flag){
                return
            }
            flag = false;
            next = now - 1;
            if (next < 0) {
                next = neirong.length - 1;
            }
            neirong[next].style.left = "-100%";
            animate(neirong[now],{left:width},500);
            animate(neirong[next], {left: 0}, 500,function () {
                flag = true;
            });
            now = next;
        }
        for(let i =0;i<bt.length;i++){
            bt[i].onclick = function () {
                if(!flag){
                    return
                }
                flag = false;
                if(i<now){
                    next = i;
                    neirong[next].style.left = "-100%";
                    animate(neirong[now], {left: width}, 500);
                    animate(neirong[next], {left: 0}, 500,function () {
                        flag = true;
                    });
                    bt[now].classList.remove("active");
                    bt[next].classList.add("active");
                    now =next;
                }else if(i>now){
                    next = i;
                    neirong[next].style.left = "100%";
                    animate(neirong[now], {left: -width}, 500);
                    animate(neirong[next], {left: 0}, 500,function () {
                        flag = true;
                    });
                    bt[now].classList.remove("active");
                    bt[next].classList.add("active");
                    now =next;
                }

            }
        }
    }
    hezi.forEach(function (vall,indd) {
        feng(vall);
    })
