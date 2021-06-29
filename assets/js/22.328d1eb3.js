(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{496:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#场景"}},[s._v("#")]),s._v(" 场景")]),s._v(" "),a("p",[s._v("在服务器上部署中间件和数据库的时候，经常遇到无法连接的问题，如何判断是部署有问题，还是IP和端口没有开通访问？")]),s._v(" "),a("h2",{attrs:{id:"工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工具"}},[s._v("#")]),s._v(" 工具")]),s._v(" "),a("p",[s._v("telnet命令已经是过去式，因为不安全，Windows系统已经默认不安装。\nnmap是一款好用的工具，可以扫描ip和端口。\n无论是Windows，还是Linux，都可以安装nmap。")]),s._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("ul",[a("li",[s._v("下载地址https://nmap.org/download.html")]),s._v(" "),a("li",[s._v("Windows，可以下载自安装文件，比如nmap-7.50-setup.exe；也可以下载二进制.zip文件，比如nmap-7.50-win32.zip，解压缩后手动添加path")]),s._v(" "),a("li",[s._v("Linux，可以下载新版本安装，也可以直接从仓库安装nmap")])]),s._v(" "),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),a("ul",[a("li",[s._v("检查某个ip，开放了哪些端口")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ nmap "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("111.13")]),s._v(".101.209\n \nStarting Nmap "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.40")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" https://nmap.org "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" at "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),s._v("-07-20 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(":54 China Standard Time\nNmap scan report "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("111.13")]),s._v(".101.209\nHost is up "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".022s latency"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\nNot shown: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("998")]),s._v(" filtered ports\nPORT    STATE SERVICE\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("/tcp  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v("  http\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v("/tcp "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v("  https\n \nNmap done: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" IP address "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" up"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" scanned "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13.25")]),s._v(" seconds\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("ul",[a("li",[s._v("检查某个ip的某个端口是否开放")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ nmap "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("111.13")]),s._v(".101.209 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\n \nStarting Nmap "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.40")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" https://nmap.org "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" at "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),s._v("-07-20 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(":55 China Standard Time\nNmap scan report "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("111.13")]),s._v(".101.209\nHost is up "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".023s latency"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\nPORT     STATE    SERVICE\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("/tcp filtered http-proxy\n \nNmap done: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" IP address "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" up"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" scanned "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.85")]),s._v(" seconds\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[s._v("#")]),s._v(" 说明")]),s._v(" "),a("ul",[a("li",[s._v("端口状态state为filtered，表示被防火墙过滤了")]),s._v(" "),a("li",[s._v("端口状态state为open，表示可以正常访问")]),s._v(" "),a("li",[s._v("端口状态state为closed，表示可以访问，但是服务没启动")])])])}),[],!1,null,null,null);t.default=e.exports}}]);