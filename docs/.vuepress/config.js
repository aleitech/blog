module.exports = {
  "title": "Alei's Blog",
  "description": "Keep it simple",
  "base": '/blog/',
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeLine/",
        "icon": "reco-date"
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "NPM",
            "link": "https://www.npmjs.com/~reco_luan",
            "icon": "reco-npm"
          },
          {
            "text": "GitHub",
            "link": "https://github.com/recoluan",
            "icon": "reco-github"
          },
          {
            "text": "简书",
            "link": "https://www.jianshu.com/u/cd674a19515e",
            "icon": "reco-jianshu"
          },
          {
            "text": "CSDN",
            "link": "https://blog.csdn.net/recoluan",
            "icon": "reco-csdn"
          },
          {
            "text": "博客圆",
            "link": "https://www.cnblogs.com/luanhewei/",
            "icon": "reco-bokeyuan"
          },
          {
            "text": "WeChat",
            "link": "https://mp.weixin.qq.com/s/mXFqeUTegdvPliXknAAG_A",
            "icon": "reco-wechat"
          }
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "logo": "/head.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "Last Updated",
    "author": "Alei",
    "record": "xxxx",
    "startYear": "2017"
  },
  "markdown": {
    "lineNumbers": true
  }
}