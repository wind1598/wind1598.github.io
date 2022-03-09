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

//首頁-分校資訊切換行為的函式start
    //選擇事業群的CSS變化、分校選擇器變更
    function selectBrandCSS(chooseBrand) {
        for (let index = 0; index < brandAllDiv.length; index++) {
            if (index==chooseBrand) {
                brandAllDiv[index].style.cssText ="background-size: 100% 2.5px;";
                $(".chooseBrand"+index).show();
            }else{
                brandAllDiv[index].style.cssText ="background-size: 0 2.5px; opacity: 0.5;";
                $(".chooseBrand"+index).hide();
            }
        }
    }
    //選擇分校的CSS變化
    function selectSchoolCSS(chooseBrand,chooseSchool) {
        for (let index = 0; index < schoolAllDiv.length; index++) {
            let departmentlSelectText=".showSchoolBranch.chooseBrand"+chooseBrand+" > ."+schoolName[chooseBrand][index];
            //改變點中的CSS，並show指定分校部別，其他的hide
            if (index==chooseSchool) {
                schoolAllDiv[index].style.cssText ="background-color: var(--darkBlue); color:#fff";
                $(departmentlSelectText).show();
            }else{
                schoolAllDiv[index].style.cssText ="";
                $(departmentlSelectText).hide();
            }
        }
    }
    //選擇部門的CSS變化
    function selectDepartmentCSS(chooseDepartmentClass) {
        for (let index = 0; index < departmentlAllDiv.length; index++) {
            //show指定部別的資訊，其他的hide
            if (departmentlAllDiv[index].className==chooseDepartmentClass) {
                departmentlAllDiv[index].style.cssText="";
            } else {
                departmentlAllDiv[index].style.cssText="display: none;";
            }
        }
    }

    //建立事業群點選的監聽事件
    function selectBrandEvent(chooseBrand) {
        for (let indexForBrand = 0; indexForBrand < brandAllDiv.length; indexForBrand++) {
            brandAllDiv[indexForBrand].addEventListener("click",function(){
                chooseBrand=indexForBrand;
                chooseSchool=0;

                //重設選擇器
                schoolAllDiv=document.querySelectorAll(".school.chooseBrand"+chooseBrand+" > div > div");
                selectBrandCSS(chooseBrand);    
                selectSchoolCSS(chooseBrand,chooseSchool);  
                selectSchoolEvent(chooseBrand,chooseSchool);
                selectDepartmentCSS(schoolName[chooseBrand][chooseSchool]+"_01");
                selectDepartmentEvent(chooseBrand,chooseSchool);
            });
        }
    }
    //建立分校的點選事件
    function selectSchoolEvent(chooseBrand,chooseSchool) {
        for (let indexForSchool = 0; indexForSchool < schoolAllDiv.length; indexForSchool++) {
            schoolAllDiv[indexForSchool].onclick=function(){
                chooseSchool=indexForSchool;
                selectSchoolCSS(chooseBrand,chooseSchool);
                selectDepartmentCSS(schoolName[chooseBrand][chooseSchool]+"_01");
                selectDepartmentEvent(chooseBrand,chooseSchool);
            }
        }
    }
    //建立部門的點選事件
    function selectDepartmentEvent(chooseBrand,chooseSchool) {
        let temp=document.querySelectorAll(".showSchoolBranch.chooseBrand"+chooseBrand+" > ."+schoolName[chooseBrand][chooseSchool]+" [class^=_0]");
        //點選某部門的後續行為
        for (let indexForDepartment = 0; indexForDepartment < temp.length; indexForDepartment++) {
            temp[indexForDepartment].onclick=function(){
                //組合字串後搜尋指定class並show
                if ((indexForDepartment+1)<10) {
                    selectDepartmentCSS(schoolName[chooseBrand][chooseSchool]+"_0"+(indexForDepartment+1));
                } else {
                    selectDepartmentCSS(schoolName[chooseBrand][chooseSchool]+"_"+(indexForDepartment+1));
                }
            }
        }
    }
//首頁分校資訊切換的功能end

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
