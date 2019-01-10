<template lang="pug">
  canvas.section__canvas#bgView
</template>

<script>
import * as PIXI from 'pixi.js';
import mask from '@/assets/images/mask.jpg';
import background from '@/assets/images/bg.png';

export default {
  mounted() {
    this.backgroundInit();
  },
  methods: {
    backgroundInit() {
      const app = new PIXI.Application(1920, 1080, {
        view: document.getElementById('bgView'),
        transparent: true,
      });

      app.stage.interactive = true;

      const container = new PIXI.Container();
      app.stage.addChild(container);

      const displacementSprite = PIXI.Sprite.fromImage(mask);
      const displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);

      app.stage.addChild(displacementSprite);

      container.filters = [displacementFilter];

      displacementFilter.scale.x = 200;
      displacementFilter.scale.y = 200;
      displacementSprite.anchor.set(0.5);

      const bg = PIXI.Sprite.fromImage(background);
      bg.width = app.renderer.width;
      bg.height = app.renderer.height;
      bg.alpha = 1;
      container.addChild(bg);

      app.ticker.add((delta) => {
        displacementSprite.rotation += 0.0001 * delta;
      });
    },
  },
};
</script>
