module.exports = {
  default: {
    require: [
      'features/support/*.js',
      'features/**/*.js',
    ],
    publishQuiet: true,
    format: ['progress', 'html:reports/test-report.html'],
    paths: ['features/**/*.feature'],
  },
};
