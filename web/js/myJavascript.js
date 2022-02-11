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