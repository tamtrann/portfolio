<template lang="pug">
  main
    section.section.section--landing
      .section__content
        .intro
          .intro__nav.to-reveal
            router-link.intro__nav__item(to="/") Web design
            router-link.intro__nav__item(to="/") Photo Retouch
          h1.intro__title.to-reveal {{ title }}
          router-link.btn.btn--default(to="/about")
            span.btn__text {{ lead }}
            span.btn__hidden {{ lead }}
          router-link.btn.btn--icon.to-reveal(to="/work")
            span.btn__text check out our work
            svg(width='60px', height='42px', viewbox='0 0 60 42')
              defs
              g.arrow(stroke='none', stroke-width='1', fill='none', fill-rule='evenodd')
                polygon.triangle(fill-rule='nonzero', points='42 20.5 37 17 37 24')
                polyline.head(fill-rule='nonzero', points='18 24 22 20.5 18 17')
                path.shaft(d='M0.5,20.5 L36.5,20.5', stroke-linecap='square')
                path.circle(d='M19,20.0973666 C19.0770616,31.0770889 28.0016183,40 38.9994972,40 C50.0451922,40 58.9994972,31.045695 58.9994972,20 C58.9994972,8.954305 50.0451922,0 38.9994972,0 C28.0079803,0 19.0873876,8.97377831 19.0001426,19.9447153')
      .ball-wrapper
        .ball.ball--md
        .ball.ball--md
        .ball.ball--sm
        .ball.ball--lg
        .ball.ball--sm
</template>

<script>
import {
  TimelineMax, TweenMax, Back, Elastic, Power3, Sine,
} from 'gsap';
import { setTimeout } from 'timers';

export default {
  data() {
    return {
      title: 'DSKN',
      lead: 'Who are we?',
    };
  },
  mounted() {
    this.ballsInit();
    this.circleInit();
  },
  beforeRouteLeave(to, from, next) {
    this.ballsDestroy();
    this.circleDestroy();
    setTimeout(() => {
      next();
    }, 300);
  },
  methods: {
    ballsInit() {
      const balls = document.querySelectorAll('.ball');

      balls.forEach((ball) => {
        const offset = Math.floor((Math.random() * 40) + 1);
        const tlBallBounce = new TimelineMax({ repeat: -1 });
        const tlBallInit = new TimelineMax();
        tlBallBounce
          .to(ball, 4, { y: `-=${offset}`, ease: Sine.easeInOut })
          .to(ball, 4, { y: `+=${offset}`, ease: Sine.easeInOut });
        tlBallInit.set(ball, { transformOrigin: '50% 50%' })
          .from(ball, 2, { scale: 0, ease: Back.easeOut.config(0.5) });
      });
    },
    ballsDestroy() {
      const balls = document.querySelectorAll('.ball');

      balls.forEach((ball) => {
        const offset = 500;
        const tlBallLeave = new TimelineMax();
        tlBallLeave
          .to(ball, 4, { y: `-=${offset}`, ease: Elastic.easeOut });
      });
    },
    circleInit() {
      TweenMax.to('.intro', 1, {
        opacity: 1, scale: 1, y: 0, ease: Power3.easeOut,
      });
    },
    circleDestroy() {
      TweenMax.to('.intro', 1, {
        opacity: 0,
        scale: 0.8,
        y: -20,
        ease: Power3.easeOut,
        onUpdate: () => {
          TweenMax.set('.intro', { webkitFilter: `blur(${10}px)`, filter: `blur(${10}px)` });
        },
      });
    },
  },
};
</script>

<style lang="scss">
.intro {
  @include flex-center;

  flex-direction: column;
  // box-shadow: 0 10px 42px 0 rgba(0, 0, 0, 0.5);
  width: 540px;
  height: 540px;
  max-width: 100%;
  margin: 0 auto;
  opacity: 0;
  position: relative;
  transform: scale(0.8) translateY(-20px);
  transition: none;
  transform-style: preserve-3d;

  @include media(">=sm") {
    background-color: rgba(34, 36, 39, 0.72);
    border-radius: 100%;
    padding: 80px;
  }

  @include media(">=sm") {
    &::before,
    &::after {
      @include absolute-center;

      content: "";
      animation-name: rotate-center;
      animation-duration: 10s;
      animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
      animation-iteration-count: infinite;
      background-color: transparent;
      border: dotted 2px $color-gray;
      border-radius: 100%;
    }

    &::before {
      width: 100%;
      height: 100%;
    }

    // &::after {
    //   width: 120%;
    //   height: 120%;
    //   animation-direction: reverse;
    // }
  }

  &__nav {
    @include flex-center;

    margin-bottom: rem(50);

    &__item {
      color: var(--color-text);
      cursor: default;
      display: flex;
      align-items: center;
      font-family: $font-primary;
      letter-spacing: var(--text-letter-spacing);
      opacity: var(--color-transparency);
      text-transform: uppercase;

      &:hover {
        opacity: 1;
      }

      & + & {
        &::before {
          content: "";
          background-color: var(--color-text);
          display: inline-block;
          margin: 0 rem(24);
          opacity: var(--color-transparency);
          transform: rotate(45deg);
          width: 1px;
          height: rem(30);
        }
      }
    }
  }

  &__title {
    // align-self: flex-end;
    font-size: $font-size-title;
    font-weight: $font-weight-heavy;
    line-height: 1;
    letter-spacing: 0;
    position: relative;

    &::before {
      content: "";
      background-color: var(--color-primary);
      border-radius: 100%;
      display: block;
      position: absolute;
      top: rem(-20);
      left: 0;
      width: rem(18);
      height: rem(18);
    }
  }

  .btn {
    // align-self: flex-end;
    margin-top: rem(10);
    margin-left: rem(120);

    &--icon {
      margin-top: rem(30);
      margin-left: 0;
    }
  }
}

.ball {
  background-image: radial-gradient(circle at 68% 39%, #363a40, #1d1f21);
  backface-visibility: hidden;
  border-radius: 100%;
  box-shadow: 0 10px 42px 0 rgba(0, 0, 0, 0.5);
  position: absolute;
  transition: none;

  &:nth-child(1) {
    top: 15%;
    left: 30%;
  }

  &:nth-child(2) {
    top: 60%;
    left: 25%;
  }

  &:nth-child(3) {
    top: 75%;
    left: 65%;
  }

  &:nth-child(4) {
    top: 40%;
    left: 70%;
  }

  &:nth-child(5) {
    top: 40%;
    left: 75%;
  }

  &--sm {
    width: 44px;
    height: 44px;
  }

  &--md {
    width: 76px;
    height: 76px;
  }

  &--lg {
    width: 100px;
    height: 100px;
  }
}
</style>
