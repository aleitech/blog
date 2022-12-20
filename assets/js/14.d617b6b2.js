(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{398:function(a,t,_){a.exports=_.p+"assets/img/201707111559_oracle_listener.ac97d53d.png"},435:function(a,t,_){"use strict";_.r(t);var r=_(0),v=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("blockquote",[t("p",[a._v("Oracle监听使用1521端口，但这不是全部")])]),a._v(" "),t("p",[t("img",{attrs:{src:_(398),alt:"Oracle监听网络图"}})]),a._v(" "),t("h2",{attrs:{id:"问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[a._v("#")]),a._v(" 问题")]),a._v(" "),t("p",[a._v("两台Windows服务器。")]),a._v(" "),t("p",[a._v("服务器A上安装了Oracle数据库，服务器B上安装java应用。")]),a._v(" "),t("p",[a._v("服务器B不开防火墙，java与Oracle连接正常。开启防火墙后，java应用访问Oracle不通。")]),a._v(" "),t("p",[a._v("服务器B防火墙放开1521端口，仍然不通。")]),a._v(" "),t("h2",{attrs:{id:"原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原因"}},[a._v("#")]),a._v(" 原因")]),a._v(" "),t("p",[a._v("Oracle监听使用1521端口，客户端程序与监听建立连接之后，监听程序会请求oracle实例，衍生一个新的数据库连接，这个连接使用新的端口，监听程序将新的端口返回给客户端，之后，客户端和数据库实例之间使用这个新的端口通讯。")]),a._v(" "),t("p",[a._v("新的端口是是随机的，或者说根据与连接相关的规则随机的，所以无法在服务器B的防火墙中设置放开某个固定端口来解决这个问题。")]),a._v(" "),t("h2",{attrs:{id:"解决办法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决办法"}},[a._v("#")]),a._v(" 解决办法")]),a._v(" "),t("p",[a._v("Windows Socket2规范有一个特性，共享套接字Shared Socket。")]),a._v(" "),t("p",[a._v("共享套接字是指一个进程共享另一个进程的套接字。")]),a._v(" "),t("p",[a._v("如果让Oracle监听程序与数据库服务进程共享套接字，那么连接端口可以都是1521。")]),a._v(" "),t("h2",{attrs:{id:"如何设置共享套接字"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何设置共享套接字"}},[a._v("#")]),a._v(" 如何设置共享套接字")]),a._v(" "),t("p",[a._v("打开服务器A的注册表，在HKEY_LOCAL_MACHINE\\SOFTWARE\\ORACLE\\HOME0上新建一个键值对：USE_SHARED_SOCKET=true。")]),a._v(" "),t("p",[a._v("如果安装了多个目录，则每个类似的目录都要设置：HKEY_LOCAL_MACHINE\\SOFTWARE\\ORACLE\\HOMEx (x目录编号）")]),a._v(" "),t("p",[a._v("设置后要求重新启动实例")])])}),[],!1,null,null,null);t.default=v.exports}}]);