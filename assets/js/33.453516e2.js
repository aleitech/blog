(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{481:function(s,e,a){"use strict";a.r(e);var t=a(2),l=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#场景"}},[s._v("#")]),s._v(" 场景")]),s._v(" "),a("ul",[a("li",[s._v("新建的CentOS服务器")]),s._v(" "),a("li",[s._v("出于安全考虑，禁止使用root远程登录")]),s._v(" "),a("li",[s._v("增加sudo用户")])]),s._v(" "),a("h2",{attrs:{id:"增加用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#增加用户"}},[s._v("#")]),s._v(" 增加用户")]),s._v(" "),a("ul",[a("li",[s._v("注意，bash的提示符#, 表示当前用户是root; $, 非root用户")]),s._v(" "),a("li",[s._v("使用root登录之后，创建用户tom")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# adduser tom")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("设置密码")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# passwd tom")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("增加到具有sudo权限的用户组wheel")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# usermod -a -G wheel tom")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"启用wheel用户组的sudo权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启用wheel用户组的sudo权限"}},[s._v("#")]),s._v(" 启用wheel用户组的sudo权限")]),s._v(" "),a("ul",[a("li",[s._v("修改/etc/sudoers文件")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vi /etc/sudoers")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("去掉前面的注释符号#")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("%wheel  "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ALL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ALL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("       ALL\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"禁止root登录ssh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#禁止root登录ssh"}},[s._v("#")]),s._v(" 禁止root登录ssh")]),s._v(" "),a("ul",[a("li",[s._v("修改/etc/ssh/sshd_config")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("PermitRootLogin no\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("重启sshd")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# service sshd restart")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);e.default=l.exports}}]);