<template lang="pug">
  swiper(:options='swiperOption' ref="mySwiper")
    .swiper-slide(v-for='(project, index) in projects' :key='index')
      .swiper-img
        img.swiper-lazy(:src='project.img')
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
  data() {
    const vc = this;
    return {
      hidden: false,
      swiperOption: {
        // autoHeight: true,
        // centeredSlides: true,
        freeMode: true,
        grabCursor: true,
        lazy: true,
        mousewheel: true,
        slidesPerView: 4,
        spaceBetween: 20,
        freeModeSticky: true,
        preloadImages: false,
        slidesOffsetBefore: 100,
        loop: true,
        on: {
          // init () {
          //   let swiper = document.getElementById('swiper')
          //   let swiperHeight = this.$el[0].offsetHeight
          //   swiper.style.height = swiperHeight + 'px'
          // },
          slideChange() {
            vc.onSlideChange(this.realIndex);
          },
          resize() {
            let swiper = document.getElementById('swiper');
            swiper.style.height = `${this.height}px`;
          },
          beforeDestroy() {
            this.removeAllSlides();
          },
        },
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true
        // }
      },
    };
  },
  methods: {
    onSlideChange(index) {
      this.$emit('slideChange', index);
    },
  },
};
</script>

<style lang="scss">
.swiper {
  /* &-container {
    overflow: visible !important;
  } */

  &-img {
    max-width: 100%;
    overflow: hidden;

    img {
      width: 100%;
    }
  }

  &-slide {
    position: relative;
    transform-origin: top left;
    /* transition: none; */

    &::before {
      @include absolute-full;

      content: "";
      background-color: var(--color-secondary);
      display: block;
      opacity: 0.5;
      z-index: 1;
    }

    &::after {
      content: "";
      background-color: var(--color-primary);
      display: block;
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }

    &-active {
      /* margin-right: 100px !important;
      transform: scale(1.2) translate3d(0px, 0px, 0px) !important; */

      &::before {
        opacity: 0;
      }

      &::after {
        opacity: 1;
        transform: translate(6px, 6px);
      }
    }

    &:hover {
      img {
        transform: scale(1.2);
      }
    }
  }

  &-wrapper {
    padding: 6px 0;
  }
}
</style>
