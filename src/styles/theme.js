const defaultTheme = require('antd/dist/default-theme');
const merge = require('lodash/merge');

const COLOR_BLACK = '#0e0e0e';

module.exports = merge(defaultTheme, {
  black: COLOR_BLACK,
});
