<template lang="pug">
  main
    section.section.section--work
      .section__content
        .container
          .section__nav.to-appear.to-appear--theme
              router-link.section__nav__item(to="/") Web design
              router-link.section__nav__item(to="/") Photo Retouch
          .row.mb-4
            .col-sm-6.col-md-5
              h1.section__title.to-appear.to-appear--theme(ref="title") Fintual.
              button.btn.btn--icon.d-none.d-inline-flex-sm.to-appear.to-appear--theme
                span.btn__text more detail
                svg(width='60px', height='46px', viewbox='0 0 60 42')
                  defs
                  g.arrow(stroke='none', stroke-width='1', fill='none', fill-rule='evenodd')
                    polygon.triangle(fill-rule='nonzero', points='42 20.5 37 17 37 24')
                    polyline.head(fill-rule='nonzero', points='18 24 22 20.5 18 17')
                    path.shaft(d='M0.5,20.5 L36.5,20.5', stroke-linecap='square')
                    path.circle(d='M19,20.0973666 C19.0770616,31.0770889 28.0016183,40 38.9994972,40 C50.0451922,40 58.9994972,31.045695 58.9994972,20 C58.9994972,8.954305 50.0451922,0 38.9994972,0 C28.0079803,0 19.0873876,8.97377831 19.0001426,19.9447153')
            .col-sm-6
              p.section__lead.to-appear.to-appear--gray But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth.
              button.btn.btn--icon.d-none-sm.to-appear.to-appear--theme
                span.btn__text more detail
                svg(width='60px', height='46px', viewbox='0 0 60 42')
                  defs
                  g.arrow(stroke='none', stroke-width='1', fill='none', fill-rule='evenodd')
                    polygon.triangle(fill-rule='nonzero', points='42 20.5 37 17 37 24')
                    polyline.head(fill-rule='nonzero', points='18 24 22 20.5 18 17')
                    path.shaft(d='M0.5,20.5 L36.5,20.5', stroke-linecap='square')
                    path.circle(d='M19,20.0973666 C19.0770616,31.0770889 28.0016183,40 38.9994972,40 C50.0451922,40 58.9994972,31.045695 58.9994972,20 C58.9994972,8.954305 50.0451922,0 38.9994972,0 C28.0079803,0 19.0873876,8.97377831 19.0001426,19.9447153')
              .progress.to-appear.to-appear--theme
                span.progress__start {{ currentIndex + 1 | zeroPrefix }}
                .progress__bar
                  .progress__bar__inner(:style="{width: progressWidth}")
                span.progress__end {{ projects.length | zeroPrefix }}
        .to-appear#swiper
          project-slider(:projects="projects" @slideChange="onSlideChange")
</template>

<script>
import { TweenMax, Power3 } from 'gsap';

import ProjectSlider from '@/components/ProjectSlider.vue';
import fxMixin from '@/mixins';

export default {
  components: {
    ProjectSlider,
  },
  filters: {
    zeroPrefix: (value) => {
      if (!value) return '';
      const val = value.toString();
      if (val < 10) return `0${val}`;
      return val;
    },
  },
  mixins: [fxMixin],
  data() {
    return {
      currentIndex: 0,
      projects: [{
        name: 'Fintual.',
        desc: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth.',
        img: require('@/assets/images/projects/fintual.jpg'),
      }, {
        name: 'ADC',
        desc: 'I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth.',
        img: require('@/assets/images/projects/adc.jpg'),
      }, {
        name: 'Lipsum.',
        desc: 'I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth.',
        img: require('@/assets/images/projects/fintual.jpg'),
      }, {
        name: 'Fintual.',
        desc: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth.',
        img: require('@/assets/images/projects/fintual.jpg'),
      }, {
        name: 'Lipsum.',
        desc: 'I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth.',
        img: require('@/assets/images/projects/fintual.jpg'),
      }, {
        name: 'Lipsum.',
        desc: 'I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth.',
        img: require('@/assets/images/projects/fintual.jpg'),
      }],
    };
  },
  computed: {
    progressWidth() {
      return `${(this.currentIndex + 1) / this.projects.length * 100}%`;
    },
  },
  watch: {
    currentIndex(newValue) {
      // let { title } = this.$refs;
      console.log(this.projects[newValue].name);
      // TweenLite.to(title, 0.5, { text: { value: this.projects[newValue].name, oldClass: 'a', newClass: 'b' }, ease: Linear.easeNone });
    },
  },
  mounted() {
    TweenMax.staggerFrom('.swiper-slide', 1, {
      scale: 0.9, opacity: 0, delay: 0.5, ease: Power3.easeOut, force3D: true,
    }, 0.1);
    this.revealElements(this.$el);
  },
  beforeRouteLeave(to, from, next) {
    this.hideElements(this.$el);
    setTimeout(() => {
      next();
    }, 800);
  },
  methods: {
    onSlideChange(index) {
      this.currentIndex = index;
    },
  },
};
</script>
