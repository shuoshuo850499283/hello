// 顶部地址转换图标

$('.address-info').mouseover(function(){
	$('.address-info i').removeClass('icon-unfold').addClass('icon-packup');
}).mouseout(function(){
	$('.address-info i').removeClass('icon-packup').addClass('icon-unfold');
});
//顶部导航鼠标移入图标转换
$('.top-naver-rig ul li a').mouseover(function(){
	$(this).children().removeClass('icon-unfold').addClass('icon-packup');
}).mouseout(function(){
	$(this).children().removeClass('icon-packup').addClass('icon-unfold');
});
//全部分类
$('.class').mouseover(function(){
	$('.class a i').removeClass('icon-unfold').addClass('icon-packup');
}).mouseout(function(){
	$('.class a i').removeClass('icon-packup').addClass('icon-unfold');
});







//放大镜部分效果实现开始
var bs=$('.big img').width()/$('.small img').width();
// console.log(bs);
$('.small').mouseover(function(){
	$('.zz').show();
	$('.big').show();
}).mouseout(function(){
	$('.zz').hide();
	$('.big').hide();
}).mousemove(function(e){
	var x=e.pageX-$(this).offset().left-$('.zz').width()/2;
	var y=e.pageY-$(this).offset().top-$('.zz').height()/2;
	if(x<$('.zz').width()/2){
		x=0;
	}else if(x>($('.small').width()-$('.zz').width())){
		x=$('.small').width()-$('.zz').width();
	}
	if(y<$('.zz').height()/2){
		y=0;
	}else if(y>($('.small').height()-$('.zz').height())){
		y=$('.small').height()-$('.zz').height();
	}

	$('.zz').css({top:y,left:x});
	$('.big').scrollTop(y*bs-$('.big').height()/2).scrollLeft(x*bs-$('.big').width()/2);
})

// 放大镜下部各小图部分开始
$('.else-goods li').mouseover(function(){
	$(this).css({borderColor:'#e4393c'});
	var indexs=$(this).index()+1;
	// console.log(indexs);
	$('.small img').attr({src:'static/imgs/da'+indexs+'.jpg'});
	$('.big img').attr({src:'static/imgs/da'+indexs+'.jpg'});


	// 瞎整开始   不手动修改图片名称时
	// console.log($(this).find('img').attr("src"));
	// var strs=$(this).find('img').attr("src");
	// console.log(strs);
	// var x=strs.lastIndexOf('.');
	// console.log(strs.substr(0,x)+'::'+strs.substr(x));

	// $('.small img').attr({src:'$(this).attr("str")'});
	// $('.big img').attr({src:"strs.substr(0,x)+"(1)"+strs.substr(x)"});

	// 瞎整结束

}).mouseout(function(){
	$(this).css({borderColor:'transparent'});
})

// 放大镜下部各小图部分结束

//放大镜部分效果实现结束



//详情地区选择部分选项卡开始
$('.xuan-tit').click(function(){
	$('.xuan-tit').css({
			border: "1px solid #ccc",
	})
	$(this).css({
			border: "2px solid #e4393c",
			borderBottomColor: "#fff" 
	})
	$('.xuan-info').hide();
	$('.xuan-info').eq($(this).index()).show();
})

//详情地区选择部分选项卡结束

//选择款式开始
$('.choose dd ul li').click(function(){
	$('.choose dd ul li').css({
		borderColor:"#ccc"
	})
	$(this).css({
		borderColor:"#e4393c"
	})
})



//选择款式结束



