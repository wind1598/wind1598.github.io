<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>曙光教育事業機構</title>
		<?php include("_link_script.html");?>

		<style id="css">
			/* 測試用，隨時可刪 */
			.carousel__slide{
				display: flex;
				flex-direction: column;
				align-items: center;
			}

		</style>
	</head>
	<body class="home">
		<?php include("_header.html");?>

		<div class="content">
		
			<!-- 最新消息 -->
			<!-- <div class="newsTicker">
				<p class="test">最新消息</p>	
			</div> -->
			
			<!-- Banner -->
			<div class="banner img-fluid">
				<img src="image/5_2.jpg" alt="">
				<!-- <p class="test">輪播圖位置圖</p> -->
				<!-- <a href="javascript:void(0)">
					<img src="image/01.png" alt="Banner輪播廣告圖">
				</a> -->
			</div>

			<!-- 曙光據點、服務成果(人數) -->
			<div class="digital row padding_3">
				<div class="historyDigital col-md-5 row">
					<div class="since col">
						<div>  創始86年  </div>
					</div>
					<div class="salesPoints col">
						<div>  18間據點  </div>
					</div>
				</div>
				<div class="numberOfPeople col-md-7 row">
					<div class="elementary col">
						<div>考上衛曉明<br>3123人</div>
					</div>
					<div class="juniorHigh col">
						<div>5A10+菁英<br>2456人</div>	
					</div>
					<div class="seniorHigh col">
						<div>台清交成醫<br>1789人</div>	
					</div>
				</div>
			</div>
			
			<!-- 課程介紹、考情資訊 -->
			<div class="subject row padding_3">
				<div class="grade col">
					<div class="title"> 課程介紹 </div>
					<a href="subject_elementary.php" class="">國小</a>
					<a href="subject_junior.php" class="">國中</a>
					<a href="subject_senior.php" class="">高中</a>
					<a href="subject_tutorial.php" class="">柏克個別指導</a>
					<a href="subject_language.php" class="">多益/全民英檢<br>歐語制英文</a>
					<a href="subject_studyCenter.php" class="">K書中心</a>
				</div>
				<div class="testInformation col">
					<div class="title"> 重要考試倒計時 </div>
					<div class="testDate CAP">
						<div>國中會考<br>剩123天</div>
					</div>
					<div class="testDate GSAT">
						<div>高中學測<br>剩254天</div>
					</div>
					<div class="testDate AST">
						<div>分科測驗<br>剩300天</div>
					</div>
					<div class="testDate GEPT_primary">
						<div>英檢初級初試(聽讀)<br>剩28天</div>
					</div>
					<div class="testDate GEPT_intermediate">
						<div>英檢中級初試(聽讀)<br>剩54天</div>
					</div>
				</div>
			</div>

			<!-- 榜單專區 -->
			<div class="title"> 榜單專區 </div>
			<div id="honorRollsCarousel" class="carousel">
				<a href="http://www.xn--54q983c.tw/_testWeb/web/image/list/001.jpg" class="carousel__slide" data-fancybox="indexHonorRolls"><img src="http://www.xn--54q983c.tw/_testWeb/web/image/list/m/m_001.jpg" alt=""></a>
				<a href="http://www.xn--54q983c.tw/_testWeb/web/image/list/002.jpg" class="carousel__slide" data-fancybox="indexHonorRolls"><img src="http://www.xn--54q983c.tw/_testWeb/web/image/list/m/m_002.jpg" alt=""></a>
				<a href="http://www.xn--54q983c.tw/_testWeb/web/image/list/003.jpg" class="carousel__slide" data-fancybox="indexHonorRolls"><img src="http://www.xn--54q983c.tw/_testWeb/web/image/list/m/m_003.jpg" alt=""></a>
				<a href="http://www.xn--54q983c.tw/_testWeb/web/image/list/004.jpg" class="carousel__slide" data-fancybox="indexHonorRolls"><img src="http://www.xn--54q983c.tw/_testWeb/web/image/list/m/m_004.jpg" alt=""></a>
				<a href="http://www.xn--54q983c.tw/_testWeb/web/image/list/005.jpg" class="carousel__slide" data-fancybox="indexHonorRolls"><img src="http://www.xn--54q983c.tw/_testWeb/web/image/list/m/m_005.jpg" alt=""></a>
				<a href="http://www.xn--54q983c.tw/_testWeb/web/image/list/006.jpg" class="carousel__slide" data-fancybox="indexHonorRolls"><img src="http://www.xn--54q983c.tw/_testWeb/web/image/list/m/m_006.jpg" alt=""></a>
				<a href="http://www.xn--54q983c.tw/_testWeb/web/image/list/007.jpg" class="carousel__slide" data-fancybox="indexHonorRolls"><img src="http://www.xn--54q983c.tw/_testWeb/web/image/list/m/m_007.jpg" alt=""></a>
				<a href="http://www.xn--54q983c.tw/_testWeb/web/image/list/008.jpg" class="carousel__slide" data-fancybox="indexHonorRolls"><img src="http://www.xn--54q983c.tw/_testWeb/web/image/list/m/m_008.jpg" alt=""></a>
				<a href="http://www.xn--54q983c.tw/_testWeb/web/image/list/009.jpg" class="carousel__slide" data-fancybox="indexHonorRolls"><img src="http://www.xn--54q983c.tw/_testWeb/web/image/list/m/m_009.jpg" alt=""></a>
				<a href="http://www.xn--54q983c.tw/_testWeb/web/image/list/010.jpg" class="carousel__slide" data-fancybox="indexHonorRolls"><img src="http://www.xn--54q983c.tw/_testWeb/web/image/list/m/m_010.jpg" alt=""></a>
				<a href="http://www.xn--54q983c.tw/_testWeb/web/image/list/011.jpg" class="carousel__slide" data-fancybox="indexHonorRolls"><img src="http://www.xn--54q983c.tw/_testWeb/web/image/list/m/m_011.jpg" alt=""></a>
				<a href="http://www.xn--54q983c.tw/_testWeb/web/image/list/012.jpg" class="carousel__slide" data-fancybox="indexHonorRolls"><img src="http://www.xn--54q983c.tw/_testWeb/web/image/list/m/m_012.jpg" alt=""></a>
				<a href="http://www.xn--54q983c.tw/_testWeb/web/image/list/013.jpg" class="carousel__slide" data-fancybox="indexHonorRolls"><img src="http://www.xn--54q983c.tw/_testWeb/web/image/list/m/m_013.jpg" alt=""></a>
				<a href="http://www.xn--54q983c.tw/_testWeb/web/image/list/014.jpg" class="carousel__slide" data-fancybox="indexHonorRolls"><img src="http://www.xn--54q983c.tw/_testWeb/web/image/list/m/m_014.jpg" alt=""></a>
				<a href="http://www.xn--54q983c.tw/_testWeb/web/image/list/015.jpg" class="carousel__slide" data-fancybox="indexHonorRolls"><img src="http://www.xn--54q983c.tw/_testWeb/web/image/list/m/m_015.jpg" alt=""></a>
				<a href="http://www.xn--54q983c.tw/_testWeb/web/image/list/016.jpg" class="carousel__slide" data-fancybox="indexHonorRolls"><img src="http://www.xn--54q983c.tw/_testWeb/web/image/list/m/m_016.jpg" alt=""></a>
				<a href="http://www.xn--54q983c.tw/_testWeb/web/image/list/017.jpg" class="carousel__slide" data-fancybox="indexHonorRolls"><img src="http://www.xn--54q983c.tw/_testWeb/web/image/list/m/m_017.jpg" alt=""></a>
				<a href="http://www.xn--54q983c.tw/_testWeb/web/image/list/018.jpg" class="carousel__slide" data-fancybox="indexHonorRolls"><img src="http://www.xn--54q983c.tw/_testWeb/web/image/list/m/m_018.jpg" alt=""></a>
				<a href="http://www.xn--54q983c.tw/_testWeb/web/image/list/019.jpg" class="carousel__slide" data-fancybox="indexHonorRolls"><img src="http://www.xn--54q983c.tw/_testWeb/web/image/list/m/m_019.jpg" alt=""></a>
				<a href="http://www.xn--54q983c.tw/_testWeb/web/image/list/020.jpg" class="carousel__slide" data-fancybox="indexHonorRolls"><img src="http://www.xn--54q983c.tw/_testWeb/web/image/list/m/m_020.jpg" alt=""></a>
				<a href="http://www.xn--54q983c.tw/_testWeb/web/image/list/021.jpg" class="carousel__slide" data-fancybox="indexHonorRolls"><img src="http://www.xn--54q983c.tw/_testWeb/web/image/list/m/m_021.jpg" alt=""></a>
				<a href="http://www.xn--54q983c.tw/_testWeb/web/image/list/022.jpg" class="carousel__slide" data-fancybox="indexHonorRolls"><img src="http://www.xn--54q983c.tw/_testWeb/web/image/list/m/m_022.jpg" alt=""></a>
				<a href="http://www.xn--54q983c.tw/_testWeb/web/image/list/023.jpg" class="carousel__slide" data-fancybox="indexHonorRolls"><img src="image/list/m/m_023.jpg" alt=""></a>
			</div>

			<!-- 影音導覽 -->
			<div class="title"> 影音導覽 </div>
			<div id="videoCarousel" class="carousel">
				<a class="carousel__slide test" data-fancybox="video-gallery" data-src="https://www.youtube.com/embed/GzbOG4MU140"><img src="https://i.ytimg.com/vi/GzbOG4MU140/hqdefault.jpg"/><div >曙光K館</div></a>
				<a class="carousel__slide test" data-fancybox="video-gallery" data-src="https://www.youtube.com/embed/useWdrICTno"><img src="https://i.ytimg.com/vi/useWdrICTno/hqdefault.jpg"/><div >李揚國文</div></a>
				<a class="carousel__slide test" data-fancybox="video-gallery" data-src="https://www.youtube.com/embed/1fPRZyd0uu4"><img src="https://i.ytimg.com/vi/1fPRZyd0uu4/hqdefault.jpg"/><div >曙光教育機構_從心出發</div></a>
				<a class="carousel__slide test" data-fancybox="video-gallery" data-src="https://www.youtube.com/embed/SCVTxmwJR08"><img src="https://i.ytimg.com/vi/SCVTxmwJR08/hqdefault.jpg"/><div >~哈士奇豪可愛~</div></a>
				<a class="carousel__slide test" data-fancybox="video-gallery" data-src="https://www.youtube.com/embed/SCVTxmwJR08"><img src="https://i.ytimg.com/vi/SCVTxmwJR08/hqdefault.jpg"/><div >~哈士奇豪可愛~</div></a>
				<a class="carousel__slide test" data-fancybox="video-gallery" data-src="https://www.youtube.com/embed/SCVTxmwJR08"><img src="https://i.ytimg.com/vi/SCVTxmwJR08/hqdefault.jpg"/><div >~哈士奇豪可愛~</div></a>
			</div>
			
			<!-- 分校照片，和課程介紹合在一起 -->
			<!-- <div class="picture">
				<img src="image/11.jpg" alt="">
				<img src="image/12-1090514.jpg" alt="">
			</div> -->

		</div>
		<?php include("_footer.html");?>
	</body>
</html>