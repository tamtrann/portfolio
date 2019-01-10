export default {
  methods: {
    revealElements(context) {
      const els = context.querySelectorAll('.to-appear');
      els.forEach((el) => {
        el.classList.add('appear');
        el.addEventListener('animationend', () => {
          el.classList.remove('appear', 'to-appear');
          el.classList.add('to-disappear');
        });
      });
    },

    hideElements(context) {
      const els = context.querySelectorAll('.to-disappear');
      els.forEach((el) => {
        el.classList.add('disappear');
        el.addEventListener('animationend', () => {
          el.classList.remove('disappear', 'to-disappear');
          el.classList.add('to-appear');
        });
      });
    },
  },
};
