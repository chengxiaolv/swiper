var swiperBg = new Swiper('.bg-swiper', {
    //边缘后禁止抵抗无效resistanceRatio: 0,
    effect: 'fade',
    fadeEffect: {
        crossFade: false,
    }
})

var swiperShow = new Swiper('.show-swiper', {
    slidesPerView: 'auto',
    watchSlidesProgress: true,
    slidesOffsetBefore: 37,
    spaceBetween: 17,
    //20
    resistanceRatio: 1,
    controller: {
        control: swiperBg,
    },
    on: {
        progress: function(progress) {
            for (i = 0; i < this.slides.length; i++) {
                slide = this.slides.eq(i);
                slideProgress = this.slides[i].progress
                if (i == 4) {
                    prevIndent = 0.3228;
                } else {
                    prevIndent = 0.0898;
                }

                if (Math.abs(slideProgress + prevIndent) < 1) {
                    scale = (1 - Math.abs(slideProgress + prevIndent)) * 0.1 + 1
                } else {
                    scale = 1;
                }

                slide.find('.goods').transform('scale3d(' + scale + ',' + scale + ',1)');
            }
        },
        setTransition: function(transition) {
            for (var i = 0; i < this.slides.length; i++) {
                var slide = this.slides.eq(i)
                slide.find('.goods').transition(transition);
            }

        },

        //处理左侧拖入时背景图消失
        touchMove: function() {
            if (this.progress < 0.01) {
                this.controller.control = '';
            } else {
                this.controller.control = swiperBg;
            }
        },
        touchEnd: function() {
            if (this.translate < -1515) {
                // alert('跳转');
            }
        }
    },
});