//計數增加的動畫
function numCountAdd(Attribute) {
    let targetNumber=Attribute.innerText;   //取得Dom原始數字
    let nowNumber = 0;  //變動的數字
    let IntervalID=setInterval(function () {    //每1ms跳動一次
        Attribute.innerHTML=nowNumber;  //改變數字
        nowNumber++;
        if (targetNumber>800) { //數字過大時，調整跳動的快慢
            for (let index = 0; index < parseInt(targetNumber/800); index++) {
                nowNumber++;
            }
        }
        if (nowNumber>targetNumber) {   //超過指定數值時，取消自動跳動，回歸初始設定
            Attribute.innerHTML=targetNumber;
            clearInterval(IntervalID);
        }
    },1);
}

$(function() {
    //Bootstrap的submenu外掛
    $('[data-submenu]').submenupicker();

    //控制Banner輪播圖
    $('#bannerCarousel').carousel({
        interval: 5000

    });

    //控制榜單輪播圖
    const honorRollsCarousel=new Carousel(document.querySelector("#honorRollsCarousel"), {
        Dots: true,
        slidesPerPage:1,
        Autoplay: {
            timeout: 1000,
            hoverPause: true,
        }
    });

    //控制影音輪播圖
    const videoCarousel=new Carousel(document.querySelector("#videoCarousel"), {
        Dots: true,
        slidesPerPage:1,
        Autoplay: {
            timeout: 1200,
            hoverPause: true,
        }
    });

    document.querySelector(".building").addEventListener("click",function(){
        window.alert("建立中");
    });
});
