(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{612:function(s,a,n){"use strict";n.r(a);var e=n(6),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#场景"}},[s._v("#")]),s._v(" 场景")]),s._v(" "),n("blockquote",[n("p",[s._v("参考https://blog.csdn.net/tyyking/article/details/83008533")])]),s._v(" "),n("ul",[n("li",[s._v("确认对maven最终生效的settings.xml的地址")])]),s._v(" "),n("h2",{attrs:{id:"mvn命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mvn命令"}},[s._v("#")]),s._v(" mvn命令")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" mvn\n输出：\n/usr/bin/mvn\n\nmvn -version\n输出：\nApache Maven "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.3")]),s._v(".9\nMaven home: /usr/share/maven\nJava version: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.8")]),s._v(".0_181, vendor: Oracle Corporation\nJava home: /usr/lib/jvm/java-8-openjdk-amd64/jre\nDefault locale: en_US, platform encoding: UTF-8\nOS name: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"linux"')]),s._v(", version: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"4.15.0-30deepin-generic"')]),s._v(", arch: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"amd64"')]),s._v(", family: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"unix"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h2",{attrs:{id:"settings-xml地址"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#settings-xml地址"}},[s._v("#")]),s._v(" settings.xml地址")]),s._v(" "),n("ul",[n("li",[s._v("方法一：利用插件查找")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("mvn help:evaluate -Dexpression"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("settings.localRepository "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -v "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\[INFO\\]'")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("方法二：debug中的using local repository")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("mvn -X\n输出：\nApache Maven "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.3")]),s._v(".9\nMaven home: /usr/share/maven\nJava version: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.8")]),s._v(".0_181, vendor: Oracle Corporation\nJava home: /usr/lib/jvm/java-8-openjdk-amd64/jre\nDefault locale: en_US, platform encoding: UTF-8\nOS name: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"linux"')]),s._v(", version: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"4.15.0-30deepin-generic"')]),s._v(", arch: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"amd64"')]),s._v(", family: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"unix"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("DEBUG"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Created new class realm maven.api\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("DEBUG"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Reading global settings from /usr/share/maven/conf/settings.xml\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("DEBUG"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Reading user settings from /home/alei/.m2/settings.xml\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("DEBUG"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Reading global toolchains from /usr/share/maven/conf/toolchains.xml\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("DEBUG"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Reading user toolchains from /home/alei/.m2/toolchains.xml\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("DEBUG"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Using "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" repository at /home/alei/.m2/repository\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("DEBUG"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Using manager EnhancedLocalRepositoryManager with priority "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" /home/alei/.m2/repository\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("ul",[n("li",[s._v("方法三：查看生效的settings.xml地址和内容")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mvn help:effective-settings\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"其他常用命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#其他常用命令"}},[s._v("#")]),s._v(" 其他常用命令")]),s._v(" "),n("ul",[n("li",[s._v("检查环境")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("mvn help:system\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("当前项目路径下，查看pom配置（包含所有依赖）")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("mvn help:effective-pom\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("指定配置执行maven命令")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("mvn -s "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("settings.xml文件路径"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("goal"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n例：\nmvn -s ~/.m2/settings.xml clean "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("ul",[n("li",[s._v("查看生效的profile")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("mvn help:active-profiles\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"配置优先级"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置优先级"}},[s._v("#")]),s._v(" 配置优先级")]),s._v(" "),n("ul",[n("li",[s._v("局部配置优先于全局配置")]),s._v(" "),n("li",[s._v("配置优先级从高到低：pom.xml> user settings > global settings")]),s._v(" "),n("li",[s._v("如果这些文件同时存在，应用配置时会合并它们的内容，如果有重复的配置，优先级高的配置会覆盖优先级低的")])])])}),[],!1,null,null,null);a.default=t.exports}}]);