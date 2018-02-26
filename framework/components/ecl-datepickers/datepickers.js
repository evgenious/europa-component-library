import Pikaday from 'pikaday';

/**
 * @param {object} options Config overrides for Pikaday.
 */
export const datepickers = options => {
  if (!options.theme) {
    // eslint-disable-next-line
    options.theme = 'ecl-pika-theme';
  }

  let Picker;

  // DESTROY
  function destroy() {
    Picker.destroy();
  }

  // INIT
  function init() {
    Picker = new Pikaday(options);
  }

  init();

  // REVEAL API
  return {
    init,
    destroy,
    pika: Picker,
  };
};

// module exports
export default datepickers;
