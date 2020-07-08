---
title:  "Html页面引入Vue"
date:  2018-12-18 19:13:40
categories:
  - 编程语言
tags:
  - Vue
  - Javascript
---

## 说明

* 前后端没有分离的项目中，也想使用vue
* 加载页面时，从后台获取数据并渲染

## 前提

* 后端存在接口，响应路径"/getJsonData"，返回json格式的数据
* 示例数据如下：{"code":"zhangsan","name":"张三"}

## 代码

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Html页面引入Vue</title>
</head>
<body>
<div id="app">
{% raw %}
    <label>code:  </label> {{ jsonData.code }}
    <br/>
    <label>name:  </label> {{ jsonData.name }}
{% endraw %}    
</div>

</body>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue-resource/1.5.1/vue-resource.min.js"></script>
<script>
        var app = new Vue({
            el: '#app',
            data: {
                jsonData: 'Hello Vue!'
            },
            methods: {
                refreshData(resource) {
                    this.$http.get('/getJsonData').then(function(response){
                        this.jsonData = response.body
                    });
                }
            },
            mounted:function () {
                this.refreshData()
            }
        })
</script>
</html>
```
