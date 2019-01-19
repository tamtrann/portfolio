<template lang="pug">
  main
    section.section.section--about
      .section__content
        .container
          .row
            template(v-for="(item, index) in profiles")
                // transition(mode="out-in" :name="'slide-fade-' + item.direction")
                profile(:profile="item" @loadMore="onLoadMore" v-show="index !== hiddenProfile" ref="profile" :key="index")
            .col-md-6(v-show="showMore")
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
      hiddenProfile: -1,
      showMore: false,
      profiles: [{
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
      }, {
        name: 'Ssantiags',
        bio: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour…',
        titles: ['Web design', 'Develop'],
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
        direction: 'right',
      }],
    };
  },
  mounted() {
    const profiles = document.querySelectorAll('.profile');
    profiles.forEach((profile) => {
      this.revealElements(profile);
    });
  },
  beforeRouteLeave(to, from, next) {
    const profiles = document.querySelectorAll('.profile');
    profiles.forEach((profile) => {
      this.hideElements(profile);
    });
    setTimeout(() => {
      next();
    }, 1800);
  },
  methods: {
    onLoadMore() {
      this.$router.replace('/detail');
    },
    // onLoadMore(index) {
    //   let hiddenIndex = -1;
    //   if (index === 0) {
    //     hiddenIndex = 1;

    //     const start = this.$refs.profile[index].$el;
    //     const end = this.$refs.profile[hiddenIndex].$el;
    //     const more = this.$refs.more.$el;
    //     // const startRect = start.getBoundingClientRect();
    //     // const endRect = end.getBoundingClientRect();
    //     const tlProfile = new TimelineMax();

    //     tlProfile.to(start, 1, {
    //       y: 0,
    //       ease: Expo.easeOut,
    //     }).to(end, 1, {
    //       x: 0,
    //       y: 0,
    //       scale: 0.8,
    //       opacity: 0,
    //       ease: Expo.easeOut,
    //       onComplete: () => {
    //         this.hiddenProfile = hiddenIndex;
    //       },
    //     }, '0').staggerFrom(more.querySelectorAll('.profile__more__list'), 0.5, {
    //       y: 0,
    //       onStart: () => {
    //         this.showMore = true;
    //       },
    //     }, 0);
    //   }
    //   if (index === 1) {
    //     hiddenIndex = 0;

    //     const start = this.$refs.profile[index].$el;
    //     const end = this.$refs.profile[hiddenIndex].$el;
    //     const more = this.$refs.more.$el;
    //     const startRect = start.getBoundingClientRect();
    //     const endRect = end.getBoundingClientRect();
    //     const tlProfile = new TimelineMax();

    //     tlProfile.to(start, 1, {
    //       x: `-${Math.abs(endRect.left - startRect.left)}`,
    //       ease: Power3.easeOut,
    //     }).to(end, 1, {
    //       x: 0,
    //       y: 0,
    //       scale: 0.8,
    //       opacity: 0,
    //       ease: Power3.easeOut,
    //       onComplete: () => {
    //         this.hiddenProfile = hiddenIndex;
    //       },
    //     }, '0').to(start, 0, {
    //       x: 0,
    //     }).to(start, 0.5, {
    //       y: 0,
    //       ease: Power3.easeOut,
    //     }, '0')
    //       .staggerFrom(more.querySelectorAll('.profile__more__list'), 0.5, {
    //         y: 0,
    //         onStart: () => {
    //           this.showMore = true;
    //         },
    //       }, 0);
    //   }
    // },
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
