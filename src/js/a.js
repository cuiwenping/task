window.onload=function(){
	
	var sliderUp=true,
			sliderDown=true;
		$("#wrap").on("swipeUp",function(){
			var index=$(this).find(".on").index()+1;
			if (index>$(".slider_page").length) {
				return false;
			}
			//console.log(index)
			if( !sliderUp ) return;
			sliderPic(index)
		})
		$("#wrap").on("swipeDown",function(){
			var index=$(this).find(".on").index()-1;
			if (index<=0) {
				return false;
			}
			if( !sliderDown ) return;
			sliderPic(index)
		})

		/*图片滚动*/
		function sliderPic(ind){
			$('.slider_box').animate({"-webkit-transform":"translateY(-"+100*ind+"%)"},500,"line",function(){
				$(this).find("section").eq(ind).addClass('on').siblings().removeClass("on")
			})
			if ($(".slider_box section").eq(ind).attr("data-upPage")=="false") {
				sliderUp=false;
				$(".slide-tip ").hide()
			}else{
				sliderUp=true;
				$(".slide-tip ").show()
			}
			if ($(".slider_box section").eq(ind).attr("data-downPage")=="false") {
				sliderDown=false;
				$(".slide-tip ").hide()
			}else{
				sliderDown=true;
				$(".slide-tip ").show()
			}
		}

		$(".name_submit").on("tap",function(){
			var val=$(".text-val input").val()
			sliderPic(12)
		})
		$(".name_submit").on("click",function(){	
			var name=$(".text-val input").val();
			console.log(name)	
			$(".result_con .resultName").text(name)
			/*随机数*/
			var randons=parseInt(Math.random()*10)+1;
			$(".result_res").attr("src","image/b"+randons+".png")
		})

		$(".result_btns .share_btn").on("tap",function(){
			sliderPic(13);
			$(".sharePage").css({"background":"#000"})
		})

		$(".result_btns .again_btn").on("tap",function(){
			sliderPic(11);
		})

		$(".result_btns .prize_btn").on("tap",function(){
			sliderPic(14);
		})
	
		$(".prize_btn").on("click",function(){
			$(".prize_border").css({" -webkit-animation":"borders 2s both linear"})
		})
}
