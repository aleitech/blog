(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{473:function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"i",(function(){return o})),n.d(t,"f",(function(){return c})),n.d(t,"g",(function(){return l})),n.d(t,"h",(function(){return u})),n.d(t,"b",(function(){return h})),n.d(t,"e",(function(){return f})),n.d(t,"k",(function(){return d})),n.d(t,"l",(function(){return p})),n.d(t,"c",(function(){return m})),n.d(t,"j",(function(){return g}));n(28),n(78),n(488),n(106),n(496),n(249),n(80),n(85),n(7),n(86),n(38),n(109),n(140);var i=/#.*$/,r=/\.(md|html)$/,s=/\/$/,o=/^(https?:|mailto:|tel:)/;function a(e){return decodeURI(e).replace(i,"").replace(r,"")}function c(e){return o.test(e)}function l(e){return/^mailto:/.test(e)}function u(e){return/^tel:/.test(e)}function h(e){if(c(e))return e;var t=e.match(i),n=t?t[0]:"",r=a(e);return s.test(r)?e:r+".html"+n}function f(e,t){var n=e.hash,r=function(e){var t=e.match(i);if(t)return t[0]}(t);return(!r||n===r)&&a(e.path)===a(t)}function d(e,t,n){n&&(t=function(e,t,n){var i=e.charAt(0);if("/"===i)return e;if("?"===i||"#"===i)return t+e;var r=t.split("/");n&&r[r.length-1]||r.pop();for(var s=e.replace(/^\//,"").split("/"),o=0;o<s.length;o++){var a=s[o];".."===a?r.pop():"."!==a&&r.push(a)}""!==r[0]&&r.unshift("");return r.join("/")}(t,n));for(var i=a(t),r=0;r<e.length;r++)if(a(e[r].regularPath)===i)return Object.assign({},e[r],{type:"page",path:h(e[r].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(t,'"')),{}}function p(e,t,n,i){var r=n.pages,s=n.themeConfig,o=i&&s.locales&&s.locales[i]||s;if("auto"===(e.frontmatter.sidebar||o.sidebar||s.sidebar))return function(e){var t=m(e.headers||[]);return[{type:"group",collapsable:!1,title:e.title,path:null,children:t.map((function(t){return{type:"auto",title:t.title,basePath:e.path,path:e.path+"#"+t.slug,children:t.children||[]}}))}]}(e);var a=o.sidebar||s.sidebar;if(a){var c=function(e,t){if(Array.isArray(t))return{base:"/",config:t};for(var n in t)if(0===(i=e,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(encodeURI(n)))return{base:n,config:t[n]};var i;return{}}(t,a),l=c.base,u=c.config;return u?u.map((function(e){return function e(t,n,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof t)return d(n,t,i);if(Array.isArray(t))return Object.assign(d(n,t[0],i),{title:t[1]});r>3&&console.error("[vuepress] detected a too deep nested sidebar group.");var s=t.children||[];return 0===s.length&&t.path?Object.assign(d(n,t.path,i),{title:t.title}):{type:"group",path:t.path,title:t.title,sidebarDepth:t.sidebarDepth,children:s.map((function(t){return e(t,n,i,r+1)})),collapsable:!1!==t.collapsable}}(e,r,l)})):[]}return[]}function m(e){var t;return(e=e.map((function(e){return Object.assign({},e)}))).forEach((function(e){2===e.level?t=e:t&&(t.children||(t.children=[])).push(e)})),e.filter((function(e){return 2===e.level}))}function g(e){return Object.assign(e,{type:e.items&&e.items.length?"links":"link"})}},476:function(e,t,n){"use strict";n(38),n(7),n(257),n(241),n(54);t.a={methods:{_tagColor:function(){var e=["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87","#e15b64","#f47e60","#f8b26a","#f26d6d","#67cc86","#fb9b5f","#3498db"];return e[Math.floor(Math.random()*e.length)]},_filterPostData:function(e,t){return e=e.filter((function(e){var n=e.title,i=e.frontmatter,r=i.home,s=i.date,o=i.publish;return!0===t?!(1==r||null==n||void 0===s||!1===o):!(1==r||null==n||!1===o)}))},_sortPostData:function(e){var t=this;e.sort((function(e,n){return t._getTimeNum(n)-t._getTimeNum(e)}))},_getTimeNum:function(e){return parseInt(new Date(e.frontmatter.date).getTime())}}}},486:function(e,t,n){"use strict";n(7),n(30),n(140),n(241),n(487),n(109),n(38),n(28),n(488),n(254),n(255),n(249),n(78),n(493),n(494),n(495),n(250),n(80),n(496),n(106),n(526),n(107);var i=n(256),r=n.n(i),s=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=r()(t,"title","");return r()(t,"frontmatter.tags")&&(i+=" ".concat(t.frontmatter.tags.join(" "))),n&&(i+=" ".concat(n)),o(e,i)},o=function(e,t){var n=function(e){return e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")},i=new RegExp("[^\0-]"),r=e.split(/\s+/g).map((function(e){return e.trim()})).filter((function(e){return!!e}));if(i.test(e))return r.some((function(e){return t.toLowerCase().indexOf(e)>-1}));var s=e.endsWith(" ");return new RegExp(r.map((function(e,t){return r.length!==t+1||s?"(?=.*\\b".concat(n(e),"\\b)"):"(?=.*\\b".concat(n(e),")")})).join("")+".+","gi").test(t)},a={name:"SearchBox",data:function(){return{query:"",focused:!1,focusIndex:0,placeholder:void 0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var e=this.query.trim().toLowerCase();if(e){for(var t=this.$site.pages,n=this.$site.themeConfig.searchMaxSuggestions||5,i=this.$localePath,r=[],o=0;o<t.length&&!(r.length>=n);o++){var a=t[o];if(this.getPageLocalePath(a)===i&&this.isSearchable(a))if(s(e,a))r.push(a);else if(a.headers)for(var c=0;c<a.headers.length&&!(r.length>=n);c++){var l=a.headers[c];l.title&&s(e,a,l.title)&&r.push(Object.assign({},a,{path:a.path+"#"+l.slug,header:l}))}}return r}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted:function(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy:function(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath:function(e){for(var t in this.$site.locales||{})if("/"!==t&&0===e.path.indexOf(t))return t;return"/"},isSearchable:function(e){var t=null;return null===t||(t=Array.isArray(t)?t:new Array(t)).filter((function(t){return e.path.match(t)})).length>0},onHotkey:function(e){e.srcElement===document.body&&["s","/"].includes(e.key)&&(this.$refs.input.focus(),e.preventDefault())},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(e){this.showSuggestions&&(this.$router.push(this.suggestions[e].path),this.query="",this.focusIndex=0)},focus:function(e){this.focusIndex=e},unfocus:function(){this.focusIndex=-1}}},c=(n(527),n(6)),l=Object(c.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:e.focused},attrs:{"aria-label":"Search",placeholder:e.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:e.query},on:{input:function(t){e.query=t.target.value},focus:function(t){e.focused=!0},blur:function(t){e.focused=!1},keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.go(e.focusIndex)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.onUp.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.onDown.apply(null,arguments)}]}}),e._v(" "),e.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":e.alignRight},on:{mouseleave:e.unfocus}},e._l(e.suggestions,(function(t,i){return n("li",{key:i,staticClass:"suggestion",class:{focused:i===e.focusIndex},on:{mousedown:function(t){return e.go(i)},mouseenter:function(t){return e.focus(i)}}},[n("a",{attrs:{href:t.path},on:{click:function(e){e.preventDefault()}}},[n("span",{staticClass:"page-title"},[e._v(e._s(t.title||t.path))]),e._v(" "),t.header?n("span",{staticClass:"header"},[e._v("> "+e._s(t.header.title))]):e._e()])])})),0):e._e()])}),[],!1,null,null,null).exports,u=(n(528),Object(c.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sidebar-button",on:{click:function(t){return e.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports),h=n(58),f=(n(81),n(240),n(529),n(499),n(112),n(491)),d=n(523),p={components:{NavLink:f.a,DropdownTransition:d.a},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}},m=(n(533),Object(c.a)(p,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dropdown-wrapper",class:{open:e.open}},[n("a",{staticClass:"dropdown-title",on:{click:e.toggle}},[n("span",{staticClass:"title"},[n("i",{class:"iconfont "+e.item.icon}),e._v("\n      "+e._s(e.item.text)+"\n    ")]),e._v(" "),n("span",{staticClass:"arrow",class:e.open?"down":"right"})]),e._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"open"}],staticClass:"nav-dropdown"},e._l(e.item.items,(function(t,i){return n("li",{key:t.link||i,staticClass:"dropdown-item"},["links"===t.type?n("h4",[e._v(e._s(t.text))]):e._e(),e._v(" "),"links"===t.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},e._l(t.items,(function(e){return n("li",{key:e.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:e}})],1)})),0):n("NavLink",{attrs:{item:t}})],1)})),0)])],1)}),[],!1,null,null,null).exports),g=n(473),v={components:{NavLink:f.a,DropdownLink:m},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$themeConfig.nav||[]},nav:function(){var e=this,t=this.$site.locales,n=this.userNav;if(t&&Object.keys(t).length>1){var i=this.$page.path,r=this.$router.options.routes,s=this.$themeConfig.locales||{},o={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(t).map((function(n){var o,a=t[n],c=s[n]&&s[n].label||a.lang;return a.lang===e.$lang?o=i:(o=i.replace(e.$localeConfig.path,n),r.some((function(e){return e.path===o}))||(o=n)),{text:c,link:o}}))};return[].concat(Object(h.a)(n),[o])}var a=this.$themeConfig.blogConfig||{},c=n.some((function(e){return!a.category||e.text===(a.category.text||"分类")})),l=n.some((function(e){return!a.tag||e.text===(a.tag.text||"标签")}));if(!c&&Object.hasOwnProperty.call(a,"category")){var u=a.category,f=this.$categories;n.splice(parseInt(u.location||2)-1,0,{items:f.list.map((function(e){return e.link=e.path,e.text=e.name,e})),text:u.text||"分类",type:"links",icon:"reco-category"})}if(!l&&Object.hasOwnProperty.call(a,"tag")){var d=a.tag;n.splice(parseInt(d.location||3)-1,0,{link:"/tag/",text:d.text||"标签",type:"links",icon:"reco-tag"})}return n},userLinks:function(){return(this.nav||[]).map((function(e){return Object.assign(Object(g.j)(e),{items:(e.items||[]).map(g.j)})}))},repoLink:function(){var e=this.$themeConfig.repo;return e?/^https?:/.test(e)?e:"https://github.com/".concat(e):""},repoLabel:function(){if(this.repoLink){if(this.$themeConfig.repoLabel)return this.$themeConfig.repoLabel;for(var e=this.repoLink.match(/^https?:\/\/[^/]+/)[0],t=["GitHub","GitLab","Bitbucket"],n=0;n<t.length;n++){var i=t[n];if(new RegExp(i,"i").test(e))return i}return"Source"}}}},b=(n(534),Object(c.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.userLinks.length||e.repoLink?n("nav",{staticClass:"nav-links"},[e._l(e.userLinks,(function(e){return n("div",{key:e.link,staticClass:"nav-item"},["links"===e.type?n("DropdownLink",{attrs:{item:e}}):n("NavLink",{attrs:{item:e}})],1)})),e._v(" "),e.repoLink?n("a",{staticClass:"repo-link",attrs:{href:e.repoLink,target:"_blank",rel:"noopener noreferrer"}},[e._v("\n    "+e._s(e.repoLabel)+"\n    "),n("OutboundLink")],1):e._e()],2):e._e()}),[],!1,null,null,null).exports),y=n(535),k=n.n(y),_={name:"ThemeOptions",data:function(){return{darkTheme:"false",reco:{}}},computed:{themePicker:function(){return this.$themeConfig.themePicker||{red:"#f26d6d",blue:"#2196f3",green:"#3eaf7c",orange:"#fb9b5f"}}},mounted:function(){var e=localStorage.getItem("reco-theme");e&&this.setTheme(e)},methods:{setTheme:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=document.body.classList,i=Object.keys(this.themePicker).map((function(e){return"reco-theme-".concat(e)}));if(!e)return t&&localStorage.removeItem("reco-theme"),void n.remove.apply(n,Object(h.a)(i));n.remove.apply(n,Object(h.a)(i.filter((function(t){return t!=="reco-theme-".concat(e)})))),t?(n.add("reco-theme-".concat(e)),localStorage.setItem("reco-theme",e)):(localStorage.removeItem("reco-theme"),n.remove("reco-theme-".concat(e)))}}},x=(n(536),Object(c.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"theme-options"},[n("ul",{staticClass:"color-theme-options"},[n("li",[n("a",{staticClass:"default-theme",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.setTheme()}}})]),e._v(" "),e._l(e.themePicker,(function(t,i){return n("li",{key:i},[n("a",{class:i+"-theme",style:{background:t},attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.setTheme(i)}}})])}))],2)])}),[],!1,null,null,null).exports),w={name:"UserSettings",directives:{"click-outside":k.a},components:{ThemeOptions:x},data:function(){return{showMenu:!1}},methods:{hideMenu:function(){this.showMenu=!1}}};n(537);function C(e,t){return e.ownerDocument.defaultView.getComputedStyle(e,null)[t]}var $={components:{SidebarButton:u,NavLinks:b,SearchBox:l,AlgoliaSearchBox:{},Theme:Object(c.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.hideMenu,expression:"hideMenu"}],staticClass:"color-picker"},[n("a",{staticClass:"color-button",on:{click:function(t){t.preventDefault(),e.showMenu=!e.showMenu}}},[n("i",{staticClass:"iconfont reco-color"})]),e._v(" "),n("transition",{attrs:{name:"menu-transition",mode:"out-in"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.showMenu,expression:"showMenu"}],staticClass:"color-picker-menu"},[n("ThemeOptions")],1)])],1)}),[],!1,null,null,null).exports},data:function(){return{linksWrapMaxWidth:null,hasThemes:!1}},mounted:function(){var e=this,t=parseInt(C(this.$el,"paddingLeft"))+parseInt(C(this.$el,"paddingRight")),n=this.$themeConfig.themePicker,i=function(){document.documentElement.clientWidth<719?e.linksWrapMaxWidth=null:e.linksWrapMaxWidth=e.$el.offsetWidth-t-(e.$refs.siteName&&e.$refs.siteName.offsetWidth||0)};i(),window.addEventListener("resize",i,!1),this.hasThemes=void 0===n||n},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},S=(n(538),Object(c.a)($,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(t){return e.$emit("toggle-sidebar")}}}),e._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:e.$localePath}},[e.$themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:e.$withBase(e.$themeConfig.logo),alt:e.$siteTitle}}):e._e(),e._v(" "),e.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name"},[e._v(e._s(e.$siteTitle))]):e._e()]),e._v(" "),n("div",{staticClass:"links",style:e.linksWrapMaxWidth?{"max-width":e.linksWrapMaxWidth+"px"}:{}},[e.hasThemes?n("Theme"):e._e(),e._v(" "),n("Screenfull",{staticClass:"screenfull"}),e._v(" "),e.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:e.algolia}}):!1!==e.$themeConfig.search&&!1!==e.$frontmatter.search?n("SearchBox"):e._e(),e._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null).exports),I={name:"Sidebar",components:{SidebarLinks:n(522).default,NavLinks:b},props:["items"]},O=(n(541),Object(c.a)(I,(function(){var e=this.$createElement,t=this._self._c||e;return t("aside",{staticClass:"sidebar"},[t("NavLinks"),this._v(" "),this._t("top"),this._v(" "),t("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports),T=(n(54),n(55),{mounted:function(){var e=this.$themeConfig.keyPage,t="#424242",n="#424242";e&&(t=e.color||t,n=e.lineColor||n);var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js",document.body.append(i),i.onload=function(){(0,window.particlesJS)("particles-oli-wrapper",{particles:{number:{value:20,density:{enable:!0,value_area:800}},color:{value:t},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5}},opacity:{value:.9,random:!1,anim:{enable:!1,speed:1,opacity_min:.6,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:30,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:250,color:n,opacity:.4,width:1},move:{enable:!0,speed:3,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!0,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:.5}}}},retina_detect:!0})}}}),E=(n(542),{components:{Background:Object(c.a)(T,(function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"particles-oli-wrapper"}})}),[],!1,null,"debc554e",null).exports},props:{isPage:{type:Boolean,default:!1}},name:"Password",data:function(){return{warningText:"Konck! Knock!",key:""}},computed:{year:function(){return(new Date).getFullYear()}},methods:{inter:function(){var e=this.key,t=this.isPage,n=this.isHasPageKey,i=this.isHasKey,r=this.$refs.passwordBtn,s=e.trim(),o="pageKey".concat(window.location.pathname),a=t?o:"key";if(sessionStorage.setItem(a,s),t?n():i()){var c=document.getElementById("box").getClientRects()[0].width;r.style.width="".concat(c-2,"px"),r.style.opacity=1,setTimeout((function(){window.location.reload()}),800)}else this.warningText="Key Error"},inputFocus:function(){this.warningText="Input Your Key"},inputBlur:function(){this.warningText="Konck! Knock!"},isHasKey:function(){var e=this.$themeConfig.keyPage.keys;return e&&e.indexOf(sessionStorage.getItem("key"))>-1},isHasPageKey:function(){var e=this.$frontmatter.keys,t="pageKey".concat(window.location.pathname);return e&&e.indexOf(sessionStorage.getItem(t))>-1}}}),L=(n(543),Object(c.a)(E,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"password-shadow",class:{"is-home":!e.isPage}},[n("Background"),e._v(" "),n("h3",{staticClass:"title"},[e._v(e._s(e.isPage?e.$frontmatter.title:e.$site.title))]),e._v(" "),e.isPage?e._e():n("p",{staticClass:"description"},[e._v(e._s(e.$site.description))]),e._v(" "),n("label",{staticClass:"inputBox",attrs:{id:"box"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.key,expression:"key"}],attrs:{type:"password"},domProps:{value:e.key},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.inter.apply(null,arguments)},focus:e.inputFocus,blur:e.inputBlur,input:function(t){t.target.composing||(e.key=t.target.value)}}}),e._v(" "),n("span",[e._v(e._s(e.warningText))]),e._v(" "),n("button",{ref:"passwordBtn",on:{click:e.inter}},[e._v("OK")])]),e._v(" "),n("div",{staticClass:"footer"},[e._m(0),e._v(" "),n("span",[n("i",{staticClass:"iconfont reco-other"}),e._v(" "),n("a",[e._v(e._s(e.$themeConfig.author||e.$site.title))])]),e._v(" "),n("span",[n("i",{staticClass:"iconfont reco-copyright"}),e._v(" "),n("a",[e._v(e._s(e.year))])])])],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("span",[t("i",{staticClass:"iconfont reco-theme"}),this._v(" "),t("a",{attrs:{target:"blank",href:"https://vuepress-theme-reco.recoluan.com"}},[this._v("vuePress-theme-reco")])])}],!1,null,"65440d87",null).exports),P=n(544),j={components:{Sidebar:O,Navbar:S,Password:L},props:{sidebar:{type:Boolean,default:!0},isComment:{type:Boolean,default:!0}},data:function(){return{isSidebarOpen:!1,isHasKey:!0,isHasPageKey:!0,firstLoad:!0}},computed:{shouldShowComments:function(){var e=this.$frontmatter,t=e.isShowComments,n=e.home;return!(0==this.isComment||0==t||1==n)},shouldShowNavbar:function(){var e=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==e.navbar&&(this.$title||e.logo||e.repo||e.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var e=this.$page.frontmatter;return!1!==this.sidebar&&!e.home&&!1!==e.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(g.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var e=this.$frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},e]}},mounted:function(){var e=this;this.$router.afterEach((function(){e.isSidebarOpen=!1})),this.hasKey(),this.hasPageKey(),this.handleLoading()},methods:{hasKey:function(){var e=this.$themeConfig.keyPage;if(e){var t=e.keys;this.isHasKey=t&&t.indexOf(sessionStorage.getItem("key"))>-1}else this.isHasKey=!0},hasPageKey:function(){var e=this.$frontmatter.keys;this.isHasPageKey=!e||e&&e.indexOf(sessionStorage.getItem("pageKey".concat(window.location.pathname)))>-1},toggleSidebar:function(e){this.isSidebarOpen="boolean"==typeof e?e:!this.isSidebarOpen},onTouchStart:function(e){this.touchStart={x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY}},onTouchEnd:function(e){var t=e.changedTouches[0].clientX-this.touchStart.x,n=e.changedTouches[0].clientY-this.touchStart.y;Math.abs(t)>Math.abs(n)&&Math.abs(t)>40&&(t>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))},handleLoading:function(){var e=this,t=this.$frontmatter.home&&null==sessionStorage.getItem("firstLoad")?1e3:0;Object(P.setTimeout)((function(){e.firstLoad=!1,null==sessionStorage.getItem("firstLoad")&&sessionStorage.setItem("firstLoad",!1)}),t)}},watch:{$frontmatter:function(e,t){this.hasKey(),this.hasPageKey()}}},D=(n(546),Object(c.a)(j,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"theme-container",class:e.pageClasses,on:{touchstart:e.onTouchStart,touchend:e.onTouchEnd}},[n("transition",{attrs:{name:"fade"}},[e.firstLoad?n("LoadingPage"):e.isHasKey?n("div",[e.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":e.toggleSidebar}}):e._e(),e._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(t){return e.toggleSidebar(!1)}}}),e._v(" "),n("Sidebar",{attrs:{items:e.sidebarItems},on:{"toggle-sidebar":e.toggleSidebar}},[e._t("sidebar-top",null,{slot:"top"}),e._v(" "),e._t("sidebar-bottom",null,{slot:"bottom"})],2),e._v(" "),e.isHasPageKey?n("div",[e._t("default"),e._v(" "),n("Comments",{attrs:{isShowComments:e.shouldShowComments}})],2):n("Password",{attrs:{isPage:!0}})],1):n("Password")],1),e._v(" "),n("GA")],1)}),[],!1,null,"2e8297fc",null));t.a=D.exports},487:function(e,t,n){"use strict";var i=n(1),r=n(148).trim;i({target:"String",proto:!0,forced:n(525)("trim")},{trim:function(){return r(this)}})},488:function(e,t,n){"use strict";var i=n(9),r=n(246),s=n(12),o=n(108),a=n(15),c=n(37),l=n(82),u=n(247),h=n(248);r("match",(function(e,t,n){return[function(t){var n=c(this),r=null==t?void 0:l(t,e);return r?i(r,t,n):new RegExp(t)[e](a(n))},function(e){var i=s(this),r=a(e),c=n(t,i,r);if(c.done)return c.value;if(!i.global)return h(i,r);var l=i.unicode;i.lastIndex=0;for(var f,d=[],p=0;null!==(f=h(i,r));){var m=a(f[0]);d[p]=m,""===m&&(i.lastIndex=u(r,o(i.lastIndex),l)),p++}return 0===p?null:d}]}))},491:function(e,t,n){"use strict";n(499),n(107),n(7),n(81);var i=n(473),r={props:{item:{required:!0}},computed:{link:function(){return Object(i.b)(this.item.link)},exact:function(){var e=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(t){return t===e.link})):"/"===this.link}},methods:{isExternal:i.f,isMailto:i.g,isTel:i.h}},s=n(6),o=Object(s.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isExternal(e.link)?n("a",{staticClass:"nav-link external",attrs:{href:e.link,target:e.isMailto(e.link)||e.isTel(e.link)?null:"_blank",rel:e.isMailto(e.link)||e.isTel(e.link)?null:"noopener noreferrer"}},[n("i",{class:"iconfont "+e.item.icon}),e._v("\n  "+e._s(e.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:e.link,exact:e.exact}},[n("i",{class:"iconfont "+e.item.icon}),e._v("\n  "+e._s(e.item.text)+"\n")])}),[],!1,null,null,null);t.a=o.exports},493:function(e,t,n){var i=n(8),r=n(0),s=n(2),o=n(111),a=n(147),c=n(24),l=n(56).f,u=n(31),h=n(244),f=n(15),d=n(258),p=n(242),m=n(253),g=n(14),v=n(3),b=n(10),y=n(45).enforce,k=n(251),_=n(5),x=n(245),w=n(252),C=_("match"),$=r.RegExp,S=$.prototype,I=r.SyntaxError,O=s(S.exec),T=s("".charAt),E=s("".replace),L=s("".indexOf),P=s("".slice),j=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,D=/a/g,M=/a/g,K=new $(D)!==D,N=p.MISSED_STICKY,A=p.UNSUPPORTED_Y,H=i&&(!K||N||x||w||v((function(){return M[C]=!1,$(D)!=D||$(M)==M||"/a/i"!=$(D,"i")})));if(o("RegExp",H)){for(var R=function(e,t){var n,i,r,s,o,l,p=u(S,this),m=h(e),g=void 0===t,v=[],k=e;if(!p&&m&&g&&e.constructor===R)return e;if((m||u(S,e))&&(e=e.source,g&&(t=d(k))),e=void 0===e?"":f(e),t=void 0===t?"":f(t),k=e,x&&"dotAll"in D&&(i=!!t&&L(t,"s")>-1)&&(t=E(t,/s/g,"")),n=t,N&&"sticky"in D&&(r=!!t&&L(t,"y")>-1)&&A&&(t=E(t,/y/g,"")),w&&(e=(s=function(e){for(var t,n=e.length,i=0,r="",s=[],o={},a=!1,c=!1,l=0,u="";i<=n;i++){if("\\"===(t=T(e,i)))t+=T(e,++i);else if("]"===t)a=!1;else if(!a)switch(!0){case"["===t:a=!0;break;case"("===t:O(j,P(e,i+1))&&(i+=2,c=!0),r+=t,l++;continue;case">"===t&&c:if(""===u||b(o,u))throw new I("Invalid capture group name");o[u]=!0,s[s.length]=[u,l],c=!1,u="";continue}c?u+=t:r+=t}return[r,s]}(e))[0],v=s[1]),o=a($(e,t),p?this:S,R),(i||r||v.length)&&(l=y(o),i&&(l.dotAll=!0,l.raw=R(function(e){for(var t,n=e.length,i=0,r="",s=!1;i<=n;i++)"\\"!==(t=T(e,i))?s||"."!==t?("["===t?s=!0:"]"===t&&(s=!1),r+=t):r+="[\\s\\S]":r+=t+T(e,++i);return r}(e),n)),r&&(l.sticky=!0),v.length&&(l.groups=v)),e!==k)try{c(o,"source",""===k?"(?:)":k)}catch(e){}return o},B=l($),W=0;B.length>W;)m(R,$,B[W++]);S.constructor=R,R.prototype=S,g(r,"RegExp",R)}k("RegExp")},494:function(e,t,n){var i=n(0),r=n(8),s=n(245),o=n(29),a=n(13).f,c=n(45).get,l=RegExp.prototype,u=i.TypeError;r&&s&&a(l,"dotAll",{configurable:!0,get:function(){if(this!==l){if("RegExp"===o(this))return!!c(this).dotAll;throw u("Incompatible receiver, RegExp required")}}})},495:function(e,t,n){var i=n(0),r=n(8),s=n(242).MISSED_STICKY,o=n(29),a=n(13).f,c=n(45).get,l=RegExp.prototype,u=i.TypeError;r&&s&&a(l,"sticky",{configurable:!0,get:function(){if(this!==l){if("RegExp"===o(this))return!!c(this).sticky;throw u("Incompatible receiver, RegExp required")}}})},496:function(e,t,n){"use strict";var i=n(44),r=n(9),s=n(2),o=n(246),a=n(244),c=n(12),l=n(37),u=n(142),h=n(247),f=n(108),d=n(15),p=n(82),m=n(146),g=n(248),v=n(113),b=n(242),y=n(3),k=b.UNSUPPORTED_Y,_=Math.min,x=[].push,w=s(/./.exec),C=s(x),$=s("".slice);o("split",(function(e,t,n){var s;return s="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var s=d(l(this)),o=void 0===n?4294967295:n>>>0;if(0===o)return[];if(void 0===e)return[s];if(!a(e))return r(t,s,e,o);for(var c,u,h,f=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),g=0,b=new RegExp(e.source,p+"g");(c=r(v,b,s))&&!((u=b.lastIndex)>g&&(C(f,$(s,g,c.index)),c.length>1&&c.index<s.length&&i(x,f,m(c,1)),h=c[0].length,g=u,f.length>=o));)b.lastIndex===c.index&&b.lastIndex++;return g===s.length?!h&&w(b,"")||C(f,""):C(f,$(s,g)),f.length>o?m(f,0,o):f}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:r(t,this,e,n)}:t,[function(t,n){var i=l(this),o=null==t?void 0:p(t,e);return o?r(o,t,i,n):r(s,d(i),t,n)},function(e,i){var r=c(this),o=d(e),a=n(s,r,o,i,s!==t);if(a.done)return a.value;var l=u(r,RegExp),p=r.unicode,m=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.unicode?"u":"")+(k?"g":"y"),v=new l(k?"^(?:"+r.source+")":r,m),b=void 0===i?4294967295:i>>>0;if(0===b)return[];if(0===o.length)return null===g(v,o)?[o]:[];for(var y=0,x=0,w=[];x<o.length;){v.lastIndex=k?0:x;var S,I=g(v,k?$(o,x):o);if(null===I||(S=_(f(v.lastIndex+(k?x:0)),o.length))===y)x=h(o,x,p);else{if(C(w,$(o,y,x)),w.length===b)return w;for(var O=1;O<=I.length-1;O++)if(C(w,I[O]),w.length===b)return w;x=y=S}}return C(w,$(o,y)),w}]}),!!y((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),k)},497:function(e,t,n){},498:function(e,t,n){},499:function(e,t,n){"use strict";var i=n(1),r=n(530);i({target:"String",proto:!0,forced:n(531)("link")},{link:function(e){return r(this,"a","href",e)}})},500:function(e,t,n){},501:function(e,t,n){},502:function(e,t,n){},503:function(e,t,n){},504:function(e,t,n){},505:function(e,t,n){},506:function(e,t,n){},507:function(e,t,n){},508:function(e,t,n){},509:function(e,t,n){},510:function(e,t,n){},511:function(e,t,n){},522:function(e,t,n){"use strict";n.r(t);n(107),n(7);var i=n(473),r={name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:n(523).a},beforeCreate:function(){this.$options.components.SidebarLinks=n(522).default},methods:{isActive:i.e}},s=(n(539),n(6)),o=Object(s.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"sidebar-group",class:[{collapsable:e.collapsable,"is-sub-group":0!==e.depth},"depth-"+e.depth]},[e.item.path?n("router-link",{staticClass:"sidebar-heading clickable",class:{open:e.open,active:e.isActive(e.$route,e.item.path)},attrs:{to:e.item.path},nativeOn:{click:function(t){return e.$emit("toggle")}}},[n("span",[e._v(e._s(e.item.title))]),e._v(" "),e.collapsable?n("span",{staticClass:"arrow",class:e.open?"down":"right"}):e._e()]):n("p",{staticClass:"sidebar-heading",class:{open:e.open},on:{click:function(t){return e.$emit("toggle")}}},[n("span",[e._v(e._s(e.item.title))]),e._v(" "),e.collapsable?n("span",{staticClass:"arrow",class:e.open?"down":"right"}):e._e()]),e._v(" "),n("DropdownTransition",[e.open||!e.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:e.item.children,sidebarDepth:e.item.sidebarDepth,depth:e.depth+1}}):e._e()],1)],1)}),[],!1,null,null,null).exports;n(28),n(106),n(80);function a(e,t,n,i){return e("router-link",{props:{to:t,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},n)}function c(e,t,n,r,s){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!t||o>s?null:e("ul",{class:"sidebar-sub-headers"},t.map((function(t){var l=Object(i.e)(r,n+"#"+t.slug);return e("li",{class:"sidebar-sub-header"},[a(e,n+"#"+t.slug,t.title,l),c(e,t.children,n,r,s,o+1)])})))}var l={functional:!0,props:["item","sidebarDepth"],render:function(e,t){var n=t.parent,r=n.$page,s=(n.$site,n.$route),o=n.$themeConfig,l=n.$themeLocaleConfig,u=t.props,h=u.item,f=u.sidebarDepth,d=Object(i.e)(s,h.path),p="auto"===h.type?d||h.children.some((function(e){return Object(i.e)(s,h.basePath+"#"+e.slug)})):d,m=a(e,h.path,h.title||h.path,p),g=r.frontmatter.sidebarDepth||f||l.sidebarDepth||o.sidebarDepth,v=null==g?1:g,b=l.displayAllHeaders||o.displayAllHeaders;return"auto"===h.type?[m,c(e,h.children,h.basePath,s,v)]:(p||b)&&h.headers&&!i.d.test(h.path)?[m,c(e,Object(i.c)(h.headers),h.path,s,v)]:m}};n(540);var u={name:"SidebarLinks",components:{SidebarGroup:o,SidebarLink:Object(s.a)(l,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var e=function(e,t){for(var n=0;n<t.length;n++){var r=t[n];if("group"===r.type&&r.children.some((function(t){return"page"===t.type&&Object(i.e)(e,t.path)})))return n}return-1}(this.$route,this.items);e>-1&&(this.openGroupIndex=e)},toggleGroup:function(e){this.openGroupIndex=e===this.openGroupIndex?-1:e},isActive:function(e){return Object(i.e)(this.$route,e.regularPath)}}},h=Object(s.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.items.length?n("ul",{staticClass:"sidebar-links"},e._l(e.items,(function(t,i){return n("li",{key:i},["group"===t.type?n("SidebarGroup",{attrs:{item:t,open:i===e.openGroupIndex,collapsable:t.collapsable||t.collapsible,depth:e.depth},on:{toggle:function(t){return e.toggleGroup(i)}}}):n("SidebarLink",{attrs:{sidebarDepth:e.sidebarDepth,item:t}})],1)})),0):e._e()}),[],!1,null,null,null);t.default=h.exports},523:function(e,t,n){"use strict";var i={name:"DropdownTransition",methods:{setHeight:function(e){e.style.height=e.scrollHeight+"px"},unsetHeight:function(e){e.style.height=""}}},r=(n(532),n(6)),s=Object(r.a)(i,(function(){var e=this.$createElement;return(this._self._c||e)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);t.a=s.exports},525:function(e,t,n){var i=n(83).PROPER,r=n(3),s=n(149);e.exports=function(e){return r((function(){return!!s[e]()||"​᠎"!=="​᠎"[e]()||i&&s[e].name!==e}))}},526:function(e,t,n){"use strict";var i,r=n(1),s=n(2),o=n(32).f,a=n(108),c=n(15),l=n(144),u=n(37),h=n(145),f=n(19),d=s("".endsWith),p=s("".slice),m=Math.min,g=h("endsWith");r({target:"String",proto:!0,forced:!!(f||g||(i=o(String.prototype,"endsWith"),!i||i.writable))&&!g},{endsWith:function(e){var t=c(u(this));l(e);var n=arguments.length>1?arguments[1]:void 0,i=t.length,r=void 0===n?i:m(a(n),i),s=c(e);return d?d(t,s,r):p(t,r-s.length,r)===s}})},527:function(e,t,n){"use strict";n(497)},528:function(e,t,n){"use strict";n(498)},529:function(e,t,n){"use strict";var i=n(1),r=n(0),s=n(110),o=n(79),a=n(23),c=n(18),l=n(143),u=n(57),h=n(84)("splice"),f=r.TypeError,d=Math.max,p=Math.min;i({target:"Array",proto:!0,forced:!h},{splice:function(e,t){var n,i,r,h,m,g,v=c(this),b=a(v),y=s(e,b),k=arguments.length;if(0===k?n=i=0:1===k?(n=0,i=b-y):(n=k-2,i=p(d(o(t),0),b-y)),b+n-i>9007199254740991)throw f("Maximum allowed length exceeded");for(r=l(v,i),h=0;h<i;h++)(m=y+h)in v&&u(r,h,v[m]);if(r.length=i,n<i){for(h=y;h<b-i;h++)g=h+n,(m=h+i)in v?v[g]=v[m]:delete v[g];for(h=b;h>b-i+n;h--)delete v[h-1]}else if(n>i)for(h=b-i;h>y;h--)g=h+n-1,(m=h+i-1)in v?v[g]=v[m]:delete v[g];for(h=0;h<n;h++)v[h+y]=arguments[h+2];return v.length=b-i+n,r}})},530:function(e,t,n){var i=n(2),r=n(37),s=n(15),o=/"/g,a=i("".replace);e.exports=function(e,t,n,i){var c=s(r(e)),l="<"+t;return""!==n&&(l+=" "+n+'="'+a(s(i),o,"&quot;")+'"'),l+">"+c+"</"+t+">"}},531:function(e,t,n){var i=n(3);e.exports=function(e){return i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},532:function(e,t,n){"use strict";n(500)},533:function(e,t,n){"use strict";n(501)},534:function(e,t,n){"use strict";n(502)},535:function(e,t){function n(e){return"function"==typeof e.value||(console.warn("[Vue-click-outside:] provided expression",e.expression,"is not a function."),!1)}function i(e){return void 0!==e.componentInstance&&e.componentInstance.$isServer}e.exports={bind:function(e,t,r){function s(t){if(r.context){var n=t.path||t.composedPath&&t.composedPath();n&&n.length>0&&n.unshift(t.target),e.contains(t.target)||function(e,t){if(!e||!t)return!1;for(var n=0,i=t.length;n<i;n++)try{if(e.contains(t[n]))return!0;if(t[n].contains(e))return!1}catch(e){return!1}return!1}(r.context.popupItem,n)||e.__vueClickOutside__.callback(t)}}n(t)&&(e.__vueClickOutside__={handler:s,callback:t.value},!i(r)&&document.addEventListener("click",s))},update:function(e,t){n(t)&&(e.__vueClickOutside__.callback=t.value)},unbind:function(e,t,n){!i(n)&&document.removeEventListener("click",e.__vueClickOutside__.handler),delete e.__vueClickOutside__}}},536:function(e,t,n){"use strict";n(503)},537:function(e,t,n){"use strict";n(504)},538:function(e,t,n){"use strict";n(505)},539:function(e,t,n){"use strict";n(506)},540:function(e,t,n){"use strict";n(507)},541:function(e,t,n){"use strict";n(508)},542:function(e,t,n){"use strict";n(509)},543:function(e,t,n){"use strict";n(510)},544:function(e,t,n){var i="undefined"!=typeof global&&global||"undefined"!=typeof self&&self||window,r=Function.prototype.apply;function s(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new s(r.call(setTimeout,i,arguments),clearTimeout)},t.setInterval=function(){return new s(r.call(setInterval,i,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},s.prototype.unref=s.prototype.ref=function(){},s.prototype.close=function(){this._clearFn.call(i,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n(545),t.setImmediate="undefined"!=typeof self&&self.setImmediate||"undefined"!=typeof global&&global.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||"undefined"!=typeof global&&global.clearImmediate||this&&this.clearImmediate},545:function(e,t){!function(e,t){"use strict";if(!e.setImmediate){var n,i,r,s,o,a=1,c={},l=!1,u=e.document,h=Object.getPrototypeOf&&Object.getPrototypeOf(e);h=h&&h.setTimeout?h:e,"[object process]"==={}.toString.call(e.process)?n=function(e){process.nextTick((function(){d(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((r=new MessageChannel).port1.onmessage=function(e){d(e.data)},n=function(e){r.port2.postMessage(e)}):u&&"onreadystatechange"in u.createElement("script")?(i=u.documentElement,n=function(e){var t=u.createElement("script");t.onreadystatechange=function(){d(e),t.onreadystatechange=null,i.removeChild(t),t=null},i.appendChild(t)}):n=function(e){setTimeout(d,0,e)}:(s="setImmediate$"+Math.random()+"$",o=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(s)&&d(+t.data.slice(s.length))},e.addEventListener?e.addEventListener("message",o,!1):e.attachEvent("onmessage",o),n=function(t){e.postMessage(s+t,"*")}),h.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),i=0;i<t.length;i++)t[i]=arguments[i+1];var r={callback:e,args:t};return c[a]=r,n(a),a++},h.clearImmediate=f}function f(e){delete c[e]}function d(e){if(l)setTimeout(d,0,e);else{var t=c[e];if(t){l=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{f(e),l=!1}}}}}("undefined"==typeof self?"undefined"==typeof global?this:global:self)},546:function(e,t,n){"use strict";n(511)}}]);