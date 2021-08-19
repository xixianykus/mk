
// https://discourse.gohugo.io/t/postcss-pipe-makes-styles-content-throw/20158
//
// {{ $style := .Resources.GetMatch "styles.pcss" | resources.PostCSS }}
// <style>{{ $style.Content | safeCSS  }}</style>

module.exports = {
    map: { inline: true }, // enables source map
    plugins: {
      'postcss-cssnext': {} // requires plugin eg. e.g., npm install -g autoprefixer
      // 'precss': {} 
    }
  };