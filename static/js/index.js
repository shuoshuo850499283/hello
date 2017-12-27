// 关闭广告条开始
$('#ad-top i').click(function(){
	$('#ad-top').hide();
})

// 关闭广告条结束


// 二级菜单部分开始
$('#banner-nav ul li').mouseover(function(){
	var  indexs=$(this).index();
	$('.banner-nav-info').hide();
	$('.banner-nav-info').eq(indexs).show();
}).mouseout(function(){
	$('.banner-nav-info').hide();
})


// 二级菜单部分结束



// 侧边栏选项卡效果实现开始
$('.cu-tit li').click(function(){
	var indexs=$(this).index();
	$('.news-infos').hide();
	$('.news-infos').eq(indexs).show();
})



$('.xuan-tit li').click(function(){
	var indexs=$(this).index();
	$('.freehua').hide();
	$('.freehua').eq(indexs).show();
})

// 侧边栏选项卡效果实现结束





// 获得两位数函数开始
function getTwo(num){
	if(num>=0&&num<10) return '0'+num;
	return num;
}

// 获得两位数函数结束

// 抢购倒计时部分开始
var setTime;

function getCountDown(obj,setTime){
	setInterval(function(){
		var dd=new Date();
		var nowTime=dd.getTime();
		var tt=setTime-nowTime;
		// days=Math.floor(tt/1000/60/60/24);
		hour=Math.floor(tt/1000/60/60%24);
		minute=Math.floor(tt/1000/60%60);
		second=Math.floor(tt/1000%60);
		$(obj).html(getTwo(hour)+':'+getTwo(minute)+':'+getTwo(second));
	}, 1000);
}

getCountDown('#time',1511817788880);
// getCountDown('#time');

// 抢购倒计时部分结束







// banner轮播图开始
function Banner(){
	var i=0;

	var autoPlayTime;

	var firstImg=$('.banner-wrap a').first().clone();

	$('.banner-wrap').append(firstImg).width($('#banner-imga').width()*$('.banner-wrap a').length);




	function moveImg(){
		if(i==$('.banner-wrap a').length){
			$('.banner-wrap').css({
				left:0,
			});
			i=1;
		};

		if(i==-1){
			$('.banner-wrap').css({
				left:-($('.banner-wrap a').length-1)*$('#banner-imga').width(),
			});
		
			i=$('.banner-wrap a').length-2;
		}


		$('.banner-wrap').stop().animate({
			left:-($('#banner-imga').width()*i),
		},1000);
	}


	function autoPlay(){
		autoPlayTime=setInterval(function(){
						i++;
						moveImg()
					},3000);

	}
	autoPlay();


	$('#banner-imga').mouseover(function(){
		clearInterval(autoPlayTime);
		$('.sxbut').show();
	}).mouseout(function(){
		autoPlay();
		$('.sxbut').hide();
	})


	$('.cir li').click(function(){
		i=$(this).index();
		moveImg();
	})


	$('.next').click(function(){
		i++;
		moveImg();
	});
	$('.prev').click(function(){
		i--;
		moveImg();
	});
};

Banner();
// banner轮播图结束



// 会买部分轮播图开始
function huimai(){
	var i=0;

	var autoPlayTime;

	var firstImg=$('.middle .huimai-tu .hui-tu').first().clone();

	$('.middle .huimai-tu').append(firstImg).width($('.middle').width()*$('.middle .huimai-tu .hui-tu').length);




	function moveImg(){
		if(i==$('.middle .huimai-tu .hui-tu').length){
			$('.middle .huimai-tu').css({
				left:0,
			});
			i=1;
		};

		if(i==-1){
			$('.middle .huimai-tu').css({
				left:-($('.middle .huimai-tu .hui-tu').length-1)*$('.middle').width(),
			});
		
			i=$('.middle .huimai-tu .hui-tu').length-2;
		}


		$('.middle .huimai-tu').stop().animate({
			left:-($('.middle').width()*i),
		},1000);
	}


	function autoPlay(){
		autoPlayTime=setInterval(function(){
						i++;
						moveImg()
					},2500);

	}
	autoPlay();


	$('.middle').mouseover(function(){
		clearInterval(autoPlayTime);
		$('.sxbut').show();
	}).mouseout(function(){
		autoPlay();
		$('.sxbut').hide();
	})


	$('.cir li').click(function(){
		i=$(this).index();
		moveImg();
	})


	$('.next').click(function(){
		i++;
		moveImg();
	});
	$('.prev').click(function(){
		i--;
		moveImg();
	});
};

huimai();
// 会买部分轮播图结束


// 觅ME部分轮播图开始
function looker(){
	var i=0;

	var autoPlayTime;

	var firstImg=$('.lookFor-infos .lookFor-tu .look-tu').first().clone();

	$('.lookFor-infos .lookFor-tu').append(firstImg).width($('.lookFor-infos').width()*$('.lookFor-infos .lookFor-tu .look-tu').length);




	function moveImg(){
		if(i==$('.lookFor-infos .lookFor-tu .look-tu').length){
			$('.lookFor-infos .lookFor-tu').css({
				left:0,
			});
			i=1;
		};

		if(i==-1){
			$('.lookFor-infos .lookFor-tu').css({
				left:-($('.lookFor-infos .lookFor-tu .look-tu').length-1)*$('.lookFor-infos').width(),
			});
		
			i=$('.lookFor-infos .lookFor-tu .look-tu').length-2;
		}


		$('.lookFor-infos .lookFor-tu').stop().animate({
			left:-($('.lookFor-infos').width()*i),
		},1000);
	}


	function autoPlay(){
		autoPlayTime=setInterval(function(){
						i++;
						moveImg()
					},2000);

	}
	autoPlay();


	$('.lookFor-infos').mouseover(function(){
		clearInterval(autoPlayTime);
		$('.sxbut').show();
	}).mouseout(function(){
		autoPlay();
		$('.sxbut').hide();
	})


	$('.cir li').click(function(){
		i=$(this).index();
		moveImg();
	})


	$('.next').click(function(){
		i++;
		moveImg();
	});
	$('.prev').click(function(){
		i--;
		moveImg();
	});
};

looker();
// 觅ME部分轮播图结束



// 领券图片滑动部分开始


$('.coupon-item').mouseover(function(){
	$(this).find('img').stop().animate({
		right:0,
	},800);
}).mouseout(function(){
	$(this).find('img').stop().animate({
		right:15,
	},800);
})

// 领券图片滑动部分结束



// 享品质部分动画开始


$('.character-info li').mouseover(function(){
	$(this).find($('.bg img')).stop().animate({
		left:-10,
	},900);
}).mouseout(function(){
	$(this).find($('.bg img')).stop().animate({
		left:10,
	},900);
})
// 享品质部分动画结束





// 固定部分导航条开始



window.onscroll=function(){

	var gunTop=$(document).scrollTop();
	
// console.log(gunTop);
	// 滚动后显示固定导航条位置部分开始

	if(gunTop>350){
		$('#guding').show().css({
			position: "fixed",
			top:0,
			left:0
		})
	}else{
		$('#guding').hide();
	}

	// 滚动后显示固定导航条位置部分结束

	// console.log(gunTop);
	// 楼层导航显示开始
	if(gunTop>600){
		$('#fix-list').show();
	}else{
		$('#fix-list').hide();
	}

	if(gunTop>1829&&gunTop<2450){
		$('.fix-lists').css({background:"#918888"});
		$('.fix-list1').css({background:"red"});
	}
	 if(gunTop>2450&&gunTop<3029){
		$('.fix-lists').css({background:"#918888"});
		$('.fix-list2').css({background:"red"});
	}
	 if(gunTop>3029&&gunTop<3530){
		$('.fix-lists').css({background:"#918888"});
		$('.fix-list3').css({background:"red"});
	}
	 if(gunTop>3530&&gunTop<4130){
		$('.fix-lists').css({background:"#918888"});
		$('.fix-list4').css({background:"red"});
	}
	 if(gunTop>4130&&gunTop<4730){
		$('.fix-lists').css({background:"#918888"});
		$('.fix-list5').css({background:"red"});
	}
	 if(gunTop>4730&&gunTop<5230){
		$('.fix-lists').css({background:"#918888"});
		$('.fix-list6').css({background:"red"});
	}
	 if(gunTop>5230&&gunTop<5800){
		$('.fix-lists').css({background:"#918888"});
		$('.fix-list7').css({background:"red"});
	}
	 if(gunTop>5900&&gunTop<6100){
		$('.fix-lists').css({background:"#918888"});
		$('.fix-list8').css({background:"red"});
	}
	if(gunTop>6100){
		$('.fix-lists').css({background:"#918888"});
	}

}

// 点击楼层无过渡效果直接滚动过去开始

// $('.fix-listli').click(function(){
// 	var ind=$(this).index();
// 	var lTop=$('.jump').eq(ind).offset().top;
//     $(document).scrollTop(lTop);

// })

// 点击楼层无过渡效果直接滚动过去结束


// 点击楼层快速方式实现过渡滚过开始

$('.fix-listli').click(function(){
	var lTop=$('.jump').eq($(this).index()).offset().top;
    $('html,body').animate({
    	scrollTop:lTop
    },800); 
})


// 点击楼层快速方式实现过渡滚过结束



// 好笨的方法实现点击楼层快速方式实现过渡滚过结束
// $('.fix-listli').click(function(){
// 	var dTop = document.documentElement.scrollTop;
// 	var lTop=$('.jump').eq($(this).index()).offset().top;

// 	// var i = 0;
// 	function ontop(){
// 		if(lTop < dTop){
// 			dTop--;
// 		}else if(lTop > dTop){
// 			dTop++;
// 		}else {
// 			return;
// 		}
// 		// i+=100;
// 		document.documentElement.scrollTop = dTop;
// 		setTimeout(ontop,1);
// 	}
// 	ontop();
// });
// 好笨的方法实现点击楼层快速方式实现过渡滚过结束





// 回到顶部开始

$('.gotop').click(function(){
    $('html,body').animate({
    	scrollTop:0
    },800); 
})

// 回到顶部结束

	// 楼层导航显示结束


// 固定部分导航条结束




