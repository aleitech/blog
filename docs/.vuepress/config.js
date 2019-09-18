module.exports = {
  title: '雷明庆的博客',
  description: '保持简单',
  base: '/blog/',

  theme: '@vuepress/blog',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Technology', link: '/tech/' },
      { text: 'Math', link: '/math/' },
      { text: 'Life', link: '/life/' },      
      { text: 'Tags', link: '/tag/'}
    ],
    sidebar: [
      '/'
    ]
  }
}
