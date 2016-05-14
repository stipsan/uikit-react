/* eslint import/no-extraneous-dependencies: "off" */

import fallback from 'express-history-spa-fallback'

const webpackToAssets = config =>
  Object.keys(config.entry).reduce(
    (prev, curr) => Object.assign(
      prev,
      { [curr]: { js: `${config.devServer.publicPath}${curr}.js?${new Date().getTime()}` } }
    ),
    {}
  )

const getAnalyticsSnippet = TrackingID => `
<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', '${TrackingID}', 'auto');
ga('send', 'pageview');

</script>
`

module.exports = function htmlMiddleware() {
  let assets
  let html


  return fallback((req, res) => {
    if (!assets) {
      /* eslint global-require: "off"*/
      /* eslint import/no-unresolved: "off" */
      assets = 'production' === process.env.NODE_ENV ?
        require('../../../assets.json') :
        webpackToAssets(require('../../../webpack.config.js'))

      const css = []
      const js = []
      Object.keys(assets).forEach(key => {
        const bundle = assets[key]
        if (bundle.hasOwnProperty('css')) css.push(bundle.css)
        if (bundle.hasOwnProperty('js')) js.push(bundle.js)
      })
      const scripts = js.map(script => `<script async src="${script}"></script>`).join('')
      const stylesheets = css.map((href, index) => `
      var l${index} = document.createElement('link'); l${index}.rel = 'stylesheet';
      l${index}.href = '${href}';
      h.appendChild(l${index});`).join('')
      const loadCSS = stylesheets && `
      <script>
        var cb = function() {
          var h = document.getElementsByTagName('head')[0];
          ${stylesheets}
        };
        var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
        if (raf) raf(cb);
        else window.addEventListener('load', cb);
      </script>
      ` || ''

      const analytics = process.env.TRACKING_ID ? getAnalyticsSnippet(process.env.TRACKING_ID) : ''

      html = `<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />

    <title>UIkit for React</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <div id="app">Loading…</div>
    ${analytics}
    ${scripts}
    ${loadCSS}
  </body>
</html>`
    }

    res.set('Cache-Control', 'max-age=60')

    return res.send(html)
  })
}
