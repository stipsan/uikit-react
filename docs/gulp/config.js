var dest = {development: './build', production: './dist'};
var src = './src';
var uikit = './bower_components/dev_uikit';

module.exports = {
  less: {
    src: src + '/less/main.less',
    watch: [
      src + '/less/**'
    ],
    folder: '',
    dest: dest
  },
  markup: {
    src: src + "/www/**",
    dest: dest
  },
  fontIcons: {
    src: [uikit + "/src/fonts/**"],
    folder: '/fonts',
    dest: dest
  },
  svgs: {
    src: [src + '/images/**'],
    folder: '/images',
    dest: dest
  }
};
