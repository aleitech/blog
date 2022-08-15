(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{428:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("blockquote",[t("p",[s._v("数据库调优，但是AWR无法正常使用")])]),s._v(" "),t("h2",{attrs:{id:"查看awr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看awr"}},[s._v("#")]),s._v(" 查看AWR")]),s._v(" "),t("ul",[t("li",[s._v("使用Oracle sql developer")]),s._v(" "),t("li",[s._v("打开dba窗口，菜单栏-View-DBA")]),s._v(" "),t("li",[s._v("新建连接，要求用户具有DBA权限")]),s._v(" "),t("li",[s._v("Connections-Connection-Performance-AWR-AWR Report View")]),s._v(" "),t("li",[s._v("选择snapshot id，显示空白，无法正常使用\n"),t("img",{attrs:{src:"/blog/img/in-post/20180109-snapshot-no-results.png",alt:"无法选择snapshot"}})])]),s._v(" "),t("h2",{attrs:{id:"检查信息统计的级别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检查信息统计的级别"}},[s._v("#")]),s._v(" 检查信息统计的级别")]),s._v(" "),t("ul",[t("li",[s._v("查看")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" PARAMETER STATISTICS_LEVEL \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("如果STATISTICS_LEVEL的值为TYPICAL或者 ALL，表示启用AWR")]),s._v(" "),t("li",[s._v("如果STATISTICS_LEVEL的值为BASIC，表示禁用AWR")]),s._v(" "),t("li",[s._v("检查结果是，VALUE为ALL，启用了AWR")]),s._v(" "),t("li",[s._v("那么，是其他原因导致AWR无法使用")])]),s._v(" "),t("h2",{attrs:{id:"排查相关的主要视图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#排查相关的主要视图"}},[s._v("#")]),s._v(" 排查相关的主要视图")]),s._v(" "),t("ul",[t("li",[s._v("快照历史，查询为空，说明视图已失效，无法使用")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" dba_hist_snapshot"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("会话历史，查询有结果")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" dba_hist_active_sess_history"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"检查快照"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检查快照"}},[s._v("#")]),s._v(" 检查快照")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("查询\n"),t("img",{attrs:{src:"/blog/img/in-post/20180109-snapshot-not-work.png",alt:"查询快照"}})])]),s._v(" "),t("li",[t("p",[s._v("快照的sample_time，远远落后于当前日期2018-01-03，说明快照已经多日未生成")])])]),s._v(" "),t("h2",{attrs:{id:"检查表空间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检查表空间"}},[s._v("#")]),s._v(" 检查表空间")]),s._v(" "),t("ul",[t("li",[s._v("查询表空间使用情况（包含已用尽的表空间）")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("file_id 文件ID号"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tablespace_name 表空间名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("file_name 表空间文件"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bytes"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'M'")]),s._v("字节数"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("round")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bytes"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nvl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bytes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'M'")]),s._v(" 已使用"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("round")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nvl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bytes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'M'")]),s._v(" 剩余空间"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("round")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nvl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bytes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bytes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 占用百分比\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" dba_free_space a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("dba_data_files b\n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("file_id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("file_id\n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tablespace_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("file_id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bytes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("FILE_NAME \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tablespace_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("file_id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[t("img",{attrs:{src:"/blog/img/in-post/20180109-datafiles-no-free.png",alt:"查询表空间"}})]),s._v(" "),t("ul",[t("li",[s._v("SYSAUX表空间，是快照存储的表空间，已经耗尽，导致快照备份功能停止")]),s._v(" "),t("li",[s._v("查询SYSAUX表空间的使用情况")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" occupant_name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Item"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n      space_usage_kbytes "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1048576")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Space Used (GB)"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n      schema_name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Schema"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n      move_procedure "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Move Procedure"')]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" v$sysaux_occupants \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("ul",[t("li",[s._v("SYSTEM表空间，用于存储整个数据库的数据字典、程序结构(包括过程、函数、包、触发器)")]),s._v(" "),t("li",[s._v("10g以后，Oracle默认打开数据库审计功能，记录所有DML操作，储存在SYSTEM表空间")]),s._v(" "),t("li",[s._v("如果关闭审计功能，SYSTEM表空间大小一般不会超过2G")])]),s._v(" "),t("h2",{attrs:{id:"修改统计信息保存时间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改统计信息保存时间"}},[s._v("#")]),s._v(" 修改统计信息保存时间")]),s._v(" "),t("ul",[t("li",[s._v("由默认的31天改成7天，过期的统计信息会自动被删除")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" dbms_stats"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get_stats_history_retention "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" dual"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exec")]),s._v(" dbms_stats"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("alter_stats_history_retention"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" dbms_stats"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get_stats_history_retention "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" dual"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"清理或扩展表空间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#清理或扩展表空间"}},[s._v("#")]),s._v(" 清理或扩展表空间")]),s._v(" "),t("ul",[t("li",[s._v("生成清理SYSAUX表空间语句，然后使用sysdba登录执行，清除所有快照")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("distinct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'truncate  table  '")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v("segment_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("';'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bytes"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" dba_segments s\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("segment_name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'WRH$%'")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" segment_type "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'TABLE PARTITION'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'TABLE'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bytes"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bytes"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("desc")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("ul",[t("li",[s._v("另一种清理过期快照的方法，比较慢，实际调用delete")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("begin")]),s._v(" \n     dbms_workload_repository"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("drop_snapshot_range"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" \n      low_snap_id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n      high_snap_id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("36768")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n      dbid "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1148453265")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("ul",[t("li",[s._v("扩展表空间之前，务必要检查磁盘剩余空间是否足够")]),s._v(" "),t("li",[s._v("扩展SYSTEM表空间")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("database")]),s._v(" datafile "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'E:\\APP\\ADMINISTRATOR\\ORADATA\\ORCL\\SYSTEM01.DBF'")]),s._v(" resize "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v("G"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);