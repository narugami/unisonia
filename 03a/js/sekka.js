// ホバーで半透明に
$(function(){
	// 透明度をセット
	var transparency = 0.75;
	// 半透明にしたい要素にクラスopをつける
	var op = $('.op');
	op.hover(
		function(){ $(this).animate({'opacity':transparency}, 150); },
		function(){ $(this).animate({'opacity':'1'}, 150); }
	);
});

// 半透明をホバーで不透明に
$(function(){
	// 透明度をセット
	var transparency = 0.5;
	// 半透明にしたい要素にクラスopをつける
	var op = $('.opr').css({'opacity':transparency});
	op.hover(
		function(){ $(this).animate({'opacity':'1'}, 150); },
		function(){ $(this).animate({'opacity':transparency}, 100); }
	);
});

// バナー関係
$(function(){
	var banner = $("#banner");
	var bannerBox = $("#bannerBox");
	var bannerMask = $("#bannerMask");
	var buttonBanner = $("#buttonBanner");

	buttonBanner.click(function(){
		banner.fadeIn(150);
	});

	bannerMask.click(function(){
		banner.fadeOut(150);
	});
});

// メインビジュアルの位置と高さ関係
$(function(){
	var _window = $(window);
	var windowHeight;
	var visual = $("#visual");
	var visualHeight;

	// #visualの高さを設定する
	function visualSectionSizing() {
		windowHeight = _window.height();
		// ウインドウの高さからheader、detailの高さを引く
		visualHeight = windowHeight - 60 - 140;
		visual.css({'height':+visualHeight+'px'});
	}

	// ページ読み込み時とリサイズ時に関数を実行
	_window.on("load resize", function(){
	//	visualSectionSizing();
	});

	// #visualをクリックすると上に迫り上がる
	$(function(){
		var flag = true;
		visual.on("click", function(){
			if(flag){
				$(this).animate({'top':'-385px'},350,'easeOutExpo');
				$('#visual nav').css({'transform':'rotate(-180deg)'});
			} else {
				$(this).animate({'top':'60px'},350,'easeOutExpo');
				$('#visual nav').css({'transform':'rotate(0deg)'});
			} flag = !flag;
		});	
	});

});

$(function(){
	setInterval(function(){
		$('#visual nav').animate({'opacity':'.25'},750,function(){
			$(this).animate({'opacity':'1'}, 750);
		});
	},1500);
});

$(function(){ $('.fancybox').fancybox(); });