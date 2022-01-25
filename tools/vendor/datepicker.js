//點選時間的UI

$.datepicker.regional['zh-TW'] = {
    dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
    monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    prevText: "上月",
    nextText: "次月",
    weekHeader: "週"
};

$.datepicker.setDefaults($.datepicker.regional["zh-TW"]);

$(document).ready(function() {
    //申印區專用(西元)
    $("#datepicker1").datepicker({
        appendText: "",
        dateFormat: 'yy/mm/dd',
        changeMonth: true,
        changeYear: true,
        onSelect: function(date) {
            //on select事件
            //更新工作天數計算
            //alert("XD");

            var n = new Date();
            var nDay = n.getDay();
            var day_range = 5;
            var end = $('#datepicker1').datepicker('getDate');
            //alert(end);
            var days = (end - n) / 1000 / 60 / 60 / 24;

            //判斷是否跨越星期日，若跨越星期日則工作天數+1
            //判斷條件：(1)今天就是星期日 (2)加5天後會橫跨星期日
            //if(nDay==0 || nDay+5>=7) day_range = 6;

            //alert(days.toFixed());
            //alert(day_range);

            var alertMsg = "";

            alertMsg = "<span style='display:block; background-color:#FF0000; font-size:24px; color:#FFFF00; font-weight:bold;'>" +
                "4.急件申請前，請分校或部門確實填寫原因，再請申印老師 附上主管（該校區最高主管或總班主任 或 總管處辦公室主任 任一人皆可）回傳 (Line、Email等) 急件申請之核可畫面，或紙本簽名之核可單亦可，以作為憑證。<br>" +
                "此部分屬於申印規定，煩請各部門先附上核可憑證，資訊部依照流程盡速申印急件，" +
                "感謝配合。</span>";

            if (days.toFixed() < day_range) {
                if (document.getElementById('wowhaha').value == '急件') {
                    $("#workday").html("<span style='display:block;color:#f00; background-color:#FFCC00; font-size:18px; font-weight:bold;'>工作天數：" + days.toFixed() +
                        "天<br>申印教材講義依規定需至少【5】個工作日（不含星期日）</span><span style='font-size:4px;'>（新生入班─加印講義，不在此限）</span><br>" +
                        "<span style='display:block; background-color:#FFCC00; font-size:18px; color:#FF0000; font-weight:bold;'>※ 申印教材講義依規定需至少【5】個工作日（不含星期日）<br><br>" +
                        "1.新生入班加印講義不在此限（請在申印時，於備註欄位註明「新生入班，加印講義」)<br>" +
                        "2.若需急件處理，請先向教材講義印製之主管單位申請急件，待核可後，印刷部將盡速以急件處理。<br>" +
                        "【教材及講義申印急件核可表】雲端下載：https://tinyurl.com/y8b24ohp  <br>" +
                        "3.請務必附上主管簽名之核可單（或是通訊軟體之相關核可畫面）作為憑證，否則不予受理。</span>" +
                        alertMsg);
                    document.getElementById('errdialog').style.display = 'flex';
                } else if (document.getElementById('wowhaha').value == '非急件') {
                    alert('請注意!!! 上方選項為"非急件"，因此取件日期不能少於五個工作日，如要申請急件，上方請改選急件，並按照流程申請，謝謝您');
                    document.getElementById('datepicker1').value = '';
                }
                //申印天數不合規定

            } else {
                //符合申印規定
                $("#workday").html("<span style='display:block; font-weight:bold; color:#0000FF;'>工作天數：" + days.toFixed() + "天（符合申印規定，請繼續輸入資料）</span>");
            }

        }
    });

    $("#news_date").datepicker({
        appendText: "",
        dateFormat: 'yy/mm/dd',
        changeMonth: true,
        changeYear: true,
        onSelect: function(date) {
            //on select事件
            //更新工作天數計算
            //alert("XD");

            var n = new Date();
            var nDay = n.getDay();
            // var day_range = 5;
            var end = $('#news_date').datepicker('getDate');
            //alert(end);
            var days = (end - n) / 1000 / 60 / 60 / 24;

            //判斷是否跨越星期日，若跨越星期日則工作天數+1
            //判斷條件：(1)今天就是星期日 (2)加5天後會橫跨星期日
            //if(nDay==0 || nDay+5>=7) day_range = 6;

            //alert(days.toFixed());
            //alert(day_range);

            // var alertMsg = "";

            // alertMsg = "<span style='display:block; background-color:#FF0000; font-size:24px; color:#FFFF00; font-weight:bold;'>" +
            //     "4.急件申請前，請分校或部門確實填寫原因，再請申印老師 附上主管（該校區最高主管或總班主任 或 總管處辦公室主任 任一人皆可）回傳 (Line、Email等) 急件申請之核可畫面，或紙本簽名之核可單亦可，以作為憑證。<br>" +
            //     "此部分屬於申印規定，煩請各部門先附上核可憑證，資訊部依照流程盡速申印急件，" +
            //     "感謝配合。</span>";

            // if (days.toFixed() < day_range) {
            //     if (document.getElementById('wowhaha').value == '急件') {
            //         $("#workday").html("<span style='display:block;color:#f00; background-color:#FFCC00; font-size:18px; font-weight:bold;'>工作天數：" + days.toFixed() +
            //             "天<br>申印教材講義依規定需至少【5】個工作日（不含星期日）</span><span style='font-size:4px;'>（新生入班─加印講義，不在此限）</span><br>" +
            //             "<span style='display:block; background-color:#FFCC00; font-size:18px; color:#FF0000; font-weight:bold;'>※ 申印教材講義依規定需至少【5】個工作日（不含星期日）<br><br>" +
            //             "1.新生入班加印講義不在此限（請在申印時，於備註欄位註明「新生入班，加印講義」)<br>" +
            //             "2.若需急件處理，請先向教材講義印製之主管單位申請急件，待核可後，印刷部將盡速以急件處理。<br>" +
            //             "【教材及講義申印急件核可表】雲端下載：https://tinyurl.com/y8b24ohp  <br>" +
            //             "3.請務必附上主管簽名之核可單（或是通訊軟體之相關核可畫面）作為憑證，否則不予受理。</span>" +
            //             alertMsg);
            //         document.getElementById('errdialog').style.display = 'flex';
            //     } else if (document.getElementById('wowhaha').value == '非急件') {
            //         alert('請注意!!! 上方選項為"非急件"，因此取件日期不能少於五個工作日，如要申請急件，上方請改選急件，並按照流程申請，謝謝您');
            //         document.getElementById('datepicker1').value = '';
            //     }
            //     //申印天數不合規定

            // } else {
            //     //符合申印規定
            //     $("#workday").html("<span style='display:block; font-weight:bold; color:#0000FF;'>工作天數：" + days.toFixed() + "天（符合申印規定，請繼續輸入資料）</span>");
            // }

        }
    });
});