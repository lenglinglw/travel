<template>
  <div class="swiper-container">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide><img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1805/d4/d41d77b6ba8aca02.jpg_750x200_ac3d9a73.jpg" alt=""></swiper-slide>
      <swiper-slide><img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1805/f1/e57bc93226317102.jpg_750x200_9ab37bd0.jpg" alt=""></swiper-slide>
      <swiper-slide><img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1804/c4/1cdd28811593b802.jpg_750x200_5fbb7c91.jpg" alt=""></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'carrousel',
  data () {
    return {
      swiperOptions: {
        // 分页器配置
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets'
        },
        // 设定初始化时slide的索引
        initialSlide: 0,
        // Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)
        direction: 'horizontal',
        // 自动切换图配置
        // autoplay: {
        //   delay: 5000,
        //   // stopOnLastSlide: false,
        //   // 用户操作swpier是否停止滚动
        //   disableOnInteraction: false
        // },
        autoplay: 2000,
        speed: 1000,
        // 箭头配置
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev'
        // },
        // 环状轮播
        loop: true,
        // slidesPerView: 'auto',
        loopedSlides: 3000,
        loopAdditionalSlides: 0,
        // 一个屏幕展示的数量
        // slidesPerView: 1,
        // 间距
        // spaceBetween: 26,
        // 修改swiper自己或子元素时，自动初始化swiper
        observer: true,
        // 修改swiper的父元素时，自动初始化swiper
        observeParents: true
        // Some Swiper option/callback...
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted () {

  }
}
</script>

<style lang="stylus">
  .swiper-container
    --swiper-theme-color #ff6600
    --swiper-pagination-color: #00ff33
    overflow hidden
    width 100%
    height 0
    padding-bottom 31.25%
    .swiper-img
      width 100%
</style>
