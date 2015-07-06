var dest = './build';
var src = './src';
var uikit = './bower_components/dev_uikit';

module.exports = {
  babelBrowser: {
    src: './node_modules/babel-core/browser.min.js',
    dest: dest
  },
  browserSync: {
    server: {
      baseDir: [dest, src]
    },
    files: [
      dest + '/**'
    ]
  },
  less: {
    src: src + '/less/main.less',
    watch: [
      src + '/less/**'
    ],
    dest: dest
  },
  markup: {
    src: src + "/www/**",
    dest: dest
  },
  fontIcons: {
    src: [uikit + "/src/fonts/**"],
    dest: dest + '/fonts'
  },
  svgs: {
    src: [src + '/images/**'],
    dest: dest + '/images'
  },
  browserify: {
    // Enable source maps
    debug: true,
    extensions: [ '.jsx' ],
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/app/app.jsx',
      dest: dest,
      outputName: 'app.js'
    }]
  }
};
