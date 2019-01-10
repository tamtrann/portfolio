<template lang="pug">
  footer.footer
    .footer__content
      .footer__link-wrapper
        router-link.footer__link(to="/")
          i.fab.fa-dribbble-square
        router-link.footer__link(to="/")
          i.fab.fa-codepen
        router-link.footer__link(to="/")
          i.fab.fa-github
        router-link.footer__link(to="/")
          i.fab.fa-facebook
      p.footer__text Copiright by DS. Designed by X. Developed by Y
</template>

<script>
export default {

};
</script>

<style lang="scss">
.footer {
  background: transparent;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;

  &__content {
    @include media(">=sm") {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding: rem(36) rem(60);
    }
  }

  &__link {
    color: var(--color-text);
    display: block;
    margin-right: rem(8);

    &:hover {
      color: var(--color-primary);
    }

    & + & {
      margin-left: rem(8);
    }

    &-wrapper {
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;
      margin-top: rem(10);

      @include media(">=sm") {
        margin-top: 0;
      }
    }
  }

  &__text {
    color: var(--color-text);
    letter-spacing: 1px;
    opacity: var(--color-transparency);
  }

  &__heading {
    color: $color-white;
    display: block;
    font-weight: $font-weight-bold;
    text-transform: uppercase;
    margin-top: 14px;

    @include media(">=sm") {
      margin-top: 0;
      margin-bottom: 24px;
    }
  }
}
</style>
