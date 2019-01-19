<template lang="pug">
  main
    section.section.section--contact
      .section__content
        .container
          .row
            .col-sm-6
              .social-info
                h1.section__title.to-appear.to-appear--theme drop
                  br
                  | us
                  br
                  | a line.
                ul.social-info__list.to-appear.to-appear--gray
                  li.social-info__list__item mcdaadam@gmail.com
                  li.social-info__list__item +84 1672 837 282
                  li.social-info__list__item 9879 Senger Cliff Suite 629
              .social__nav.to-appear.to-appear--gray
                router-link.social__nav__item(v-for="(item, index) in socialLinks" :key="index" :to="item.url")
                  fa-icon(:icon="['fab', item.icon]")
            .col-sm-6
              contact-form
</template>

<script>
import ContactForm from '@/components/ContactForm.vue';
import fxMixin from '@/mixins';

export default {
  components: {
    ContactForm,
  },
  mixins: [fxMixin],
  data() {
    return {
      socialLinks: [{
        provider: 'dribbble',
        url: '/',
        icon: 'dribbble-square',
      }, {
        provider: 'codepen',
        url: '/',
        icon: 'codepen',
      }, {
        provider: 'github',
        url: '/',
        icon: 'github',
      }, {
        provider: 'facebook',
        url: '/',
        icon: 'facebook',
      }],
    };
  },
  mounted() {
    this.revealElements(this.$el);
  },
  beforeRouteLeave(to, from, next) {
    this.hideElements(this.$el);
    setTimeout(() => {
      next();
    }, 1800);
  },
};
</script>

<style lang="scss">
.social {
  &-info {
    display: flex;
    align-items: flex-end;
    margin-bottom: rem(40);

    .section__title {
      margin-right: rem(80);
      margin-bottom: 0;
    }

    &__list {
      transition: none;

      &__item {
        font-style: italic;
        font-weight: $font-weight-heavy;
        letter-spacing: 1px;
        margin-bottom: rem(20);

        &::before {
          content: "";
          background: url("~/assets/images/x.svg") center center no-repeat;
          display: inline-block;
          margin-right: 10px;
          width: 10px;
          height: 10px;
        }
      }
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
}
</style>
