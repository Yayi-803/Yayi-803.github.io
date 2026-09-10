const sass = require('sass');
hexo.extend.renderer.register('scss', 'css', function(data) { return sass.compile(data.path, {style: 'compressed', silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'slash-div']}).css; }, true);
