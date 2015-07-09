var dest = {development: './build', production: './dist'};
var src = './src';
var uikit = './bower_components/dev_uikit';

module.exports = {
  babelBrowser: {
    src: './node_modules/babel-core/browser.min.js',
    dest: dest.development
  },
  browserSync: {
    server: {
      baseDir: [dest, src],
     // middleware: [require('connect-history-api-fallback')]
    },
    files: [
      dest.development + '/**'
    ]
  },
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
  },
  browserify: {
    // Enable source maps
    debug: true,
    extensions: [ '.js' ],
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/app/app.js',
      dest: dest,
      outputName: 'app.js'
    }]
  }
};
