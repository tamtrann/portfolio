<template lang="pug">
  article.profile.col-md-6(:class="['profile--' + profile.direction]")
    .profile__container
      //- button.btn.btn--icon.btn--icon--reverse.to-appear.to-appear--theme(@click="loadMore")
      //-   svg(width='60px', height='42px', viewbox='0 0 60 42', version='1.1', xmlns='http://www.w3.org/2000/svg', xmlns:xlink='http://www.w3.org/1999/xlink')
      //-     defs
      //-     g.arrow(stroke='none', stroke-width='1', fill='none', fill-rule='evenodd')
      //-       polygon.triangle(fill-rule='nonzero', points='42 20.5 37 17 37 24')
      //-       polyline.head(fill-rule='nonzero', points='18 24 22 20.5 18 17')
      //-       path.shaft(d='M0.5,20.5 L36.5,20.5', stroke-linecap='square')
      //-   span.btn__text back
      header.profile__header
        .profile__titles.to-appear.to-appear--gray
          span.profile__titles__item(v-for="(title, index) in profile.titles" :key="index") {{ title }}
        h2.profile__name.to-appear.to-appear--theme {{ profile.name }}
        .profile__nav.to-appear
          router-link.profile__nav__item(v-for="(item, index) in profile.socialLinks" :key="index" :to="item.url")
            i.fab(:class="['fa-' + item.icon]")
      p.profile__desc.to-appear.to-appear--gray {{ profile.bio }}
      button.btn.btn--icon.to-appear.to-appear--theme(@click="loadMore")
        span.btn__text read more
        svg(width='60px', height='42px', viewbox='0 0 60 42')
          defs
          g.arrow(stroke='none', stroke-width='1', fill='none', fill-rule='evenodd')
            polygon.triangle(fill-rule='nonzero', points='42 20.5 37 17 37 24')
            polyline.head(fill-rule='nonzero', points='18 24 22 20.5 18 17')
            path.shaft(d='M0.5,20.5 L36.5,20.5', stroke-linecap='square')
            path.circle(d='M19,20.0973666 C19.0770616,31.0770889 28.0016183,40 38.9994972,40 C50.0451922,40 58.9994972,31.045695 58.9994972,20 C58.9994972,8.954305 50.0451922,0 38.9994972,0 C28.0079803,0 19.0873876,8.97377831 19.0001426,19.9447153')
    .profile__img
      .profile__img__inner.to-appear
        img(src="@/assets/images/profile.png")
</template>

<script>
export default {
  props: {
    profile: {
      type: Object,
      required: true,
    },
  },
  methods: {
    loadMore() {
      this.$emit('loadMore');
    },
  },
};
</script>

<style lang="scss">
.profile {
  display: flex;
  justify-content: space-between;
  transition: none;
  position: relative;
  z-index: 1;
  // align-items: flex-start;

  & + & {
    margin-top: rem(60);
  }

  &--right {
    @include media(">=sm") {
      flex-direction: row-reverse;
      transform: translateY(rem(50));
    }
  }

  &--left {
    @include media(">=sm") {
      transform: translateY(rem(-50));
    }
  }

  &__container {
    padding-right: 15px;

    .profile--right & {
      @include media(">=sm") {
        padding-right: 0;
        padding-left: 15px;
      }
    }
  }

  &__name {
    font-family: $font-secondary;
  }

  &__desc {
    color: rgba($color: $color-white, $alpha: 0.5);
    margin-bottom: rem(32);
    max-width: rem(320);
  }

  &__header {
    margin-bottom: rem(56);
  }

  &__img {
    align-self: flex-end;
    background-color: transparent;
    filter: drop-shadow(0 10px 42px rgba(0, 0, 0, 0.5));
    mix-blend-mode: luminosity;
    /* box-shadow: 0 10px 42px 0 rgba(0, 0, 0, 0.5); */
    background-blend-mode: overlay;
    width: 0;
    height: 320px;
    transition: none;

    @include media(">=sm") {
      width: 200px;
    }

    &__inner {
      // background-color: var(--color-primary);
      clip-path: polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px);
      overflow: hidden;
      width: 100%;
      height: 100%;

      // .profile--right & {
      //   transform: scaleX(-1);
      // }

      img {
        width: 100%;
      }
    }
  }

  &__line {
    background-color: $color-white;
    width: 1px;
    height: 150%;
    position: absolute;
    top: 0;
    left: 60%;
    opacity: 0;
    transform: rotate(45deg);
    z-index: 0;
  }

  &__more {
    display: flex;
    align-items: flex-start;
    flex-direction: row-reverse;
    height: 100%;
    transition: none;

    &__column {
      display: flex;
      align-items: flex-start;
      margin-left: rem(-100);

      &:nth-child(1) {
        align-self: flex-start;
      }

      &:nth-child(2) {
        align-self: center;
      }

      &:nth-child(3) {
        align-self: flex-end;
        margin-left: 0;
      }
    }

    &__heading {
      color: #26272a;
      font-size: rem(54);
      font-weight: $font-weight-heavy;
      margin-bottom: rem(32);
      text-align: right;
    }

    &__list {
      transition: none;

      &__item {
        color: var(--color-text);
        // font-size: 14px;
        font-weight: $font-weight-heavy;
        line-height: 1.5;
        letter-spacing: 1px;

        & + & {
          margin-top: rem(12);
        }
      }
    }

    &__title {
      color: rgba($color: $color-white, $alpha: 0.5);
      letter-spacing: var(--text-letter-spacing);
      line-height: 1;
      margin-top: rem(4);
      margin-right: rem(40);
      text-transform: uppercase;
    }
  }

  &__nav {
    display: inline-flex;

    &__item {
      color: var(--color-text);
      margin-right: rem(8);

      & + & {
        margin-left: rem(8);
      }
    }
  }

  &__titles {
    display: inline-flex;
    align-items: center;
    margin-bottom: rem(30);

    &__item {
      color: var(--color-text);
      cursor: default;
      display: flex;
      align-items: center;
      font-family: $font-primary;
      font-size: $font-size-p;
      letter-spacing: var(--text-letter-spacing);
      opacity: var(--color-transparency);
      text-transform: uppercase;
      white-space: nowrap;

      &:hover {
        opacity: 1;
      }

      & + & {
        &::before {
          content: "";
          background-color: var(--color-primary);
          display: inline-block;
          margin: 0 rem(24);
          // opacity: var(--color-transparency);
          transform: rotate(45deg);
          width: 1px;
          height: rem(30);
        }
      }
    }
  }
}
</style>
