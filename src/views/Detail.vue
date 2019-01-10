<template lang="pug">
  main
    section.section.section--about
      .section__content
        .container
          .row
            profile(:profile="profile" ref="profile")
            .col-md-6
              h2.profile__more__heading about
              profile-more(ref="more")
            .profile__line(ref="line")
</template>

<script>
// import {
//   TimelineMax, Expo, Power3,
// } from 'gsap';

import Profile from '@/components/Profile.vue';
import ProfileMore from '@/components/ProfileMore.vue';
import fxMixin from '@/mixins';

export default {
  components: {
    Profile,
    ProfileMore,
  },
  mixins: [fxMixin],
  data() {
    return {
      profile: {
        name: 'Ganymedes',
        bio: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour…',
        titles: ['UI/UX Design', 'UI/UX Design'],
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
        direction: 'left',
      },
    };
  },
  mounted() {
    this.revealElements(this.$el);
  },
  beforeRouteLeave(to, from, next) {
    this.hideElements(this.$el);
    setTimeout(() => {
      next();
    }, 800);
  },
};
</script>

<style lang="scss">
.section {
  &--about {
    height: auto;
    padding: rem(150) 0;

    @include media(">=sm") {
      height: 100vh;
      padding: 0;
    }
  }
}
</style>
