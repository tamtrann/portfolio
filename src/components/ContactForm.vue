<template lang="pug">
  form.form(action="/")
    .form__group.to-appear.to-appear--gray
      label.form__label my name is
      input.form__input(type="text" placeholder="..." v-model="name")
    .form__group.to-appear.to-appear--gray
      label.form__label email
      input.form__input(type="email" placeholder="..." v-model="email")
    .form__group.to-appear.to-appear--gray
      label.form__label message
      input.form__input(type="text" placeholder="Tell us something..." v-model="message")
    button.btn.btn--icon.form__btn.to-appear.to-appear--theme(type="submit")
      span.btn__text send
      svg(width='60px', height='46px', viewbox='0 0 60 42', version='1.1', xmlns='http://www.w3.org/2000/svg', xmlns:xlink='http://www.w3.org/1999/xlink')
        defs
        g.arrow(stroke='none', stroke-width='1', fill='none', fill-rule='evenodd')
          polygon.triangle(fill-rule='nonzero', points='42 20.5 37 17 37 24')
          polyline.head(fill-rule='nonzero', points='18 24 22 20.5 18 17')
          path.shaft(d='M0.5,20.5 L36.5,20.5', stroke-linecap='square')
          path.circle(d='M19,20.0973666 C19.0770616,31.0770889 28.0016183,40 38.9994972,40 C50.0451922,40 58.9994972,31.045695 58.9994972,20 C58.9994972,8.954305 50.0451922,0 38.9994972,0 C28.0079803,0 19.0873876,8.97377831 19.0001426,19.9447153')
</template>

<script>
export default {
  data() {
    return {
      name: 'Micheal Adam',
      email: 'mcdaadam@gmail.com',
      message: '',
    };
  },
};
</script>

<style lang="scss">
.form {
  padding-top: 200px;
  position: relative;

  &__btn {
    margin-top: rem(60);
  }

  &__group {
    display: flex;
    align-items: center;
    margin-bottom: rem(60);

    @include media(">=md") {
      &:nth-child(1) {
        margin-left: 15vw;
      }

      &:nth-child(2) {
        margin-left: 10vw;
      }

      &:nth-child(3) {
        margin-left: 5vw;
      }
    }
  }

  &__input {
    background-color: transparent;
    border: none;
    color: var(--color-text);
    font-size: rem(16);
    font-weight: $font-weight-medium;
    letter-spacing: 1px;

    @include placeholder {
      color: var(--color-text);
      font-size: rem(16);
      font-style: italic;
      font-weight: $font-weight-medium;
      opacity: var(--color-transparency);
      letter-spacing: 1px;
    }
  }

  &__label {
    color: var(--color-text);
    font-weight: $font-weight-medium;
    opacity: var(--color-transparency);
    letter-spacing: var(--text-letter-spacing);
    line-height: 1;
    text-transform: uppercase;
    width: 200px;
  }
}
</style>
