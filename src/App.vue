<template lang="pug">
  #app
    background-canvas
    the-navbar
    router-view
    the-footer
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue';
import TheFooter from '@/components/TheFooter.vue';
import BackgroundCanvas from '@/components/BackgroundCanvas.vue';

export default {
  components: {
    TheNavbar,
    TheFooter,
    BackgroundCanvas,
  },
  // mounted() {
  //   const cursor = document.getElementById('cursor');
  //   const mouseX = event => event.clientX;
  //   const mouseY = event => event.clientY;

  //   const positionElement = (event) => {
  //     const mouse = {
  //       x: mouseX(event),
  //       y: mouseY(event),
  //     };
  //     cursor.style.top = `${mouse.y}px`;
  //     cursor.style.left = `${mouse.x}px`;
  //   };

  //   window.onmousemove = (event) => {
  //     positionElement(event);
  //   };
  // },
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";
</style>
