hexo.extend.filter.register('after_generate', function () {
  const page = hexo.route.get('404/index.html');
  if (page) hexo.route.set('404.html', page);
});
