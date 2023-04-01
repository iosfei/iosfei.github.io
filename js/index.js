$(function() {
			
			var swiper = new Swiper(".mySwiper", {
				slidesPerView: 'auto',//重要的
				// spaceBetween: 30,
				loop: true, 
				autoplay:true,//自动切换
				navigation: {
				  nextEl: '.swiper-button-next',
				  prevEl: '.swiper-button-prev',
				},
			});
			
			
			
			var wintop = $(window).scrollTop();
			
			let $fixedheader = $('.navbar-custom'); // fixed容器
			if (wintop > 100) {
				// fixedheader.hide();
				$fixedheader.addClass("showtopface");
			} else {
				// fixedheader.show();
				$fixedheader.removeClass("showtopface");
			}
			
			$(window).on('scroll', () => {
				let $fixedheader = $('.navbar-custom'); // fixed容器
				// console.log(fixedheader);
				var wintop = $(window).scrollTop(); // 已滚动卷去的高度
				//console.log(wintop);
				let winHeight = $(window).height(); // 可视窗口的高度
				//console.log(winHeight);
				// 卷去一个可视窗口高度后执行
				/* if (wintop - winHeight > 0) {
					// fixedheader.hide();
					$fixedheader.addClass("showtopface");
				} else {
					// fixedheader.show();
					$fixedheader.removeClass("showtopface");
				} */
				// 当滚动条离顶部100像素时的条件判断和执行动作
				if (wintop > 100) {
					// fixedheader.hide();
					$fixedheader.addClass("showtopface");
				} else {
					// fixedheader.show();
					$fixedheader.removeClass("showtopface");
				}

			});
		});