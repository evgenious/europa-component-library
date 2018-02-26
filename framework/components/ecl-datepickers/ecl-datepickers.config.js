module.exports = {
  title: 'Datepickers',
  label: 'Datepickers',
  status: 'ready',
  tags: ['molecule'],
  context: {
    value: '04/01/2017',
    _demo: {
      scripts: `
        document.addEventListener('DOMContentLoaded', function () {
          var d = ECL.datepickers({
            field: document.getElementById('datepicker'),
            firstDay: 1,
            maxDate: new Date(2020, 12, 31),
            yearRange: [2000, 2020],
          });
        });
      `,
    },
  },
};
