const reveal = (el) => {
  // requestAnimationFrame(reveal);
  if (typeof (el) === 'object') {
    el.classList.add('appear');
    el.addEventListener('animationend', () => {
      el.classList.remove('appear', 'to-appear');
      el.classList.add('to-disappear');
    });
    requestAnimationFrame(reveal);
  }
};

const hide = (el) => {
  // requestAnimationFrame(hide);
  if (typeof (el) === 'object') {
    el.classList.add('disappear');
    el.addEventListener('animationend', () => {
      el.classList.remove('disappear', 'to-disappear');
      el.classList.add('to-appear');
    });
    requestAnimationFrame(hide);
  }
};

export default {
  methods: {
    revealElements(context) {
      const els = context.querySelectorAll('.to-appear');
      els.forEach((el, index) => {
        setTimeout(() => {
          requestAnimationFrame(reveal);
          reveal(el);
        }, 200 * index);
      });
    },

    hideElements(context) {
      const els = context.querySelectorAll('.to-disappear');
      els.forEach((el, index) => {
        setTimeout(() => {
          requestAnimationFrame(hide);
          hide(el);
        }, 200 * index);
      });
    },
  },
};
