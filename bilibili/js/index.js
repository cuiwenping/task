(function(){
	var len=$(".mian_slider_list li").length;
	console.log(len)
	var w=$(".mian_slider_list").width();
	console.log(w)
	
	var ind=0;
	/*$(".mian_slider_list").on("swipeLeft",function(){

		if (i<len) {
			i++;
			$(this).animate({
				"left":-i*li_wid
			})
		}else{
			
		}
	})*/

	function auto(){
		timer=setInterval(function(){
			if(list.is(':animated'))return false;
				ind++
			 	if(ind>len-1){
			 	//封装一个无缝运动
			 		showimg(ind)
			 	}else{
			 		//封装一个轮播图
			 		show(ind)
			 	}
			},set.time)
	}

	auto()
	function show(info){
		 list.stop().animate({'margin-left':-w*info},800);
	}
	//无缝运动
	function showimg(index){
		list.width(w*(len+1));
		list.stop().animate({'margin-left':-w*index},800,function(){
			list.css('margin-left',0);
		 	list.children('li').last().remove();
		})
		ind=0
		oli.find('li').eq(0).addClass('on').siblings().removeClass('on');
	}
})(0)