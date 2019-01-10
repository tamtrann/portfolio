<template lang="pug">
  .navbar-wrapper
    nav.navbar
      .navbar__container
        router-link.navbar__brand(to="/") {{ brand }}
        ul.navbar__nav
          li.nav__item(v-for="(item, index) in links" :key="index")
            router-link.nav__link(:to="item.url") {{ item.name }}
          li.nav__item.nav__item--cta
            router-link.nav__link(to="/contact") Contact

  // button.btn.p-0.d-md-none(uk-toggle="target: #menu" type="button")
  //   .toggler
  // #menu(uk-offcanvas)
  // .uk-offcanvas-bar
  //   ul.navbar-nav
  //     li.nav-item
  //       a.nav-link(href="/") ITEM 1
  //     li.nav-item
  //       a.nav-link(href="/") ITEM 2
  //     li.nav-item
  //       a.nav-link(href="/") ITEM 3
</template>

<script>
export default {
  data() {
    return {
      brand: 'DSKN',
      links: [{
        name: 'welcome',
        url: '/',
      }, {
        name: 'work',
        url: '/work',
      }, {
        name: 'about',
        url: '/about',
      }],
    };
  },
};
</script>

<style lang="scss">
// -----------------------------------------------------------------------------
// This file contains all styles related to the header of the site/application.
// -----------------------------------------------------------------------------

.navbar {
  background-color: transparent;
  height: 60px;
  padding-top: 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1050;

  &__container {
    display: flex;
    justify-content: space-between;
    height: 100%;
    position: relative;
    z-index: 3;
  }

  &__nav {
    display: flex;
    align-items: center;
    margin-left: auto;
    flex-direction: row;
    justify-content: space-between;

    .navbar-container & {
      display: none;

      @include media(">=sm") {
        display: flex;
      }
    }
  }

  &__brand {
    @include flex-center;

    color: rgba($color: $color-white, $alpha: 0.5);
    letter-spacing: var(--text-letter-spacing);
    padding: 1rem rem(54);
    position: relative;

    &::before {
      content: "";
      background-color: var(--color-primary);
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translateX(-92%);
      width: 100%;
      height: 100%;
      z-index: -1;
    }

    &:hover {
      color: $color-white;

      &::before {
        transform: translateX(0);
      }
    }
  }

  &__toggler {
    background-color: transparent;
    border: none;

    @include media(">=sm") {
      display: none;
    }
  }
}

.nav {
  &__item {
    @include flex-center;

    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 0 rem(20);
    position: relative;

    @include media(">=sm") {
      display: inline-flex;
      flex-direction: row;
    }

    &--cta {
      color: rgba($color: $color-white, $alpha: 0.5);
      opacity: 1;
      padding-right: rem(80);

      &::before {
        content: "";
        background-color: var(--color-primary);
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translateX(92%);
        width: 100%;
        height: 100%;
      }

      &:hover {
        &::before {
          transform: translateX(0);
        }
      }
    }
  }

  &__link {
    color: var(--color-text);
    font-weight: $font-weight-heavy;
    letter-spacing: var(--text-letter-spacing);
    opacity: var(--color-transparency);
    padding: rem(16);
    position: relative;
    text-align: center;
    text-transform: uppercase;
    width: 100%;

    &::before,
    &::after {
      content: "";
      background-color: $color-white;
      opacity: 0;
      position: absolute;
      transform: rotate(45deg);
      width: 1px;
      height: rem(30);
      transition: all 500ms ease-out;
    }

    &::before {
      top: 16px;
      right: 8px;
      transform: rotate(45deg) translateY(30px);
    }

    &::after {
      top: 12px;
      right: -4px;
      transform: rotate(45deg) translateY(-30px);
    }

    &:hover {
      color: var(--color-primary);
      opacity: 1;

      &::before,
      &::after {
        opacity: 1;
        transform: rotate(45deg) translateY(0);
      }
    }

    .nav__item--cta & {
      &::before,
      &::after {
        display: none;
      }

      &:hover {
        color: $color-white;
      }
    }
  }
}

.menu {
  @include media(">=sm") {
    display: none !important;
  }
}

.toggler {
  svg {
    height: 60px;
    cursor: pointer;
    transform: translate3d(0, 0, 0);
  }

  &__line {
    fill: none;
    transition: stroke-dashoffset 0.5s cubic-bezier(0.25, -0.25, 0.75, 1.25), stroke-dasharray 0.5s cubic-bezier(0.25, -0.25, 0.75, 1.25);
    stroke-width: 20px;
    stroke-linecap: round;
    stroke: var(--color-primary);
    stroke-dashoffset: 0;

    &.top,
    &.bottom {
      stroke-dasharray: 240px 950px;

      .animate & {
        stroke-dashoffset: -650px;
      }
    }

    &.middle {
      stroke-dasharray: 240px 240px;

      .animate & {
        stroke-dashoffset: -115px;
        stroke-dasharray: 1px 220px;
      }
    }
  }
}
</style>
