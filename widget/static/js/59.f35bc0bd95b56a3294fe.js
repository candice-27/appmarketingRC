webpackJsonp([59],{1106:function(t,n,e){"use strict";n.a={props:["collection"],data:function(){return{ImgUrl:"./static/images/collect.png",text:"加入收藏"}},watch:{collection:function(){this.collection?(this.ImgUrl="./static/images/collected.png",this.text="已收藏"):(this.ImgUrl="./static/images/collect.png",this.text="加入收藏")}}}},1251:function(t,n,e){"use strict";function i(t){e(1252)}var o=e(1106),a=e(1254),c=e(84),r=i,l=c(o.a,a.a,!1,r,"data-v-057c67c9",null);n.a=l.exports},1252:function(t,n,e){var i=e(1253);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(222)("6433397f",i,!0,{})},1253:function(t,n,e){n=t.exports=e(221)(!0),n.push([t.i,"\n.collect[data-v-057c67c9] {\n  width: 20.33vw;\n  height: 8vw;\n  border: 2px solid #ffba00;\n  border-radius: 1.06vw;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.collect img[data-v-057c67c9] {\n    width: 4.26vw;\n    height: 4.26vw;\n    padding-top: 1.6vw;\n}\n.collect span[data-v-057c67c9] {\n    color: #ffba00;\n    font-size: 3.2vw;\n    padding-left: 1.6vw;\n    line-height: 8vw;\n}\n","",{version:3,sources:["E:/project/marketing/src/components/msManage/eggCollectBtn.vue"],names:[],mappings:";AACA;EACE,eAAe;EACf,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;EACtB,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,yBAAyB;MACrB,sBAAsB;UAClB,wBAAwB;CACjC;AACD;IACI,cAAc;IACd,eAAe;IACf,mBAAmB;CACtB;AACD;IACI,eAAe;IACf,iBAAiB;IACjB,oBAAoB;IACpB,iBAAiB;CACpB",file:"eggCollectBtn.vue",sourcesContent:["\n.collect[data-v-057c67c9] {\n  width: 20.33vw;\n  height: 8vw;\n  border: 2px solid #ffba00;\n  border-radius: 1.06vw;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.collect img[data-v-057c67c9] {\n    width: 4.26vw;\n    height: 4.26vw;\n    padding-top: 1.6vw;\n}\n.collect span[data-v-057c67c9] {\n    color: #ffba00;\n    font-size: 3.2vw;\n    padding-left: 1.6vw;\n    line-height: 8vw;\n}\n"],sourceRoot:""}])},1254:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"collect"},[e("img",{attrs:{src:t.ImgUrl,alt:""}}),t._v(" "),e("span",[t._v(t._s(t.text))])])},o=[],a={render:i,staticRenderFns:o};n.a=a},1386:function(t,n,e){"use strict";var i=e(86),o=(e.n(i),e(370)),a=(e.n(o),e(316)),c=e(1251),r=new i.IndexModel;n.a={components:{CollectBtn:c.a,Banner:a.a},data:function(){return{isBegin:!0,articleId:"",collection:!1,myhtml:"",articleDetails:"",top:"",account:"",imgSrc:[]}},created:function(){this.articleId=this.$route.query.articleId,this.account=this._localAjax().account,this.getArticleDetail(),this.isIPhoneX()},mounted:function(){Object(o.waterMark)(".article",1)},methods:{browser:function(){var t=navigator.userAgent.toLowerCase(),n="ipad"==t.match(/ipad/i),e="iphone os"==t.match(/iphone os/i),i="midp"==t.match(/midp/i),o="rv:1.2.3.4"==t.match(/rv:1.2.3.4/i),a="ucweb"==t.match(/ucweb/i),c="android"==t.match(/android/i),r="windows ce"==t.match(/windows ce/i),l="windows mobile"==t.match(/windows mobile/i);return!!(n||e||i||o||a||c||r||l)},showImage:function(t){if(console.log(t.target.nodeName.toLowerCase()),"img"===t.target.nodeName.toLowerCase()&&(console.log(t.target.src),this.imgSrc.length>0)){var n=this.imgSrc.indexOf(t.target.src);if(n>-1){console.log(n);this.browser()}else this.activeImg=0}},getArticleDetail:function(){var t=this,n=this.articleId;r.getArticleDetail(n,this.account).then(function(n){if(t.articleDetails=n.data,n.data.remark){var e=n.data.remark;t.myhtml=Object(o.changeImgStyle)(Object(o.b64DecodeUnicode)(e)),t.myhtml=Object(o.changeVedioStyle)(t.myhtml);var i=/<img.*?(?:>|\/>)/gi,a=/src=[\'\"]?([^\'\"]*)[\'\"]?/i,c=t.myhtml.match(i);if(c)for(var r=0;r<c.length;r++)t.imgSrc.push(c[r].match(a)[1])}t.collection=n.data.collect})},collect:function(){var t=this.articleId;r.collect(1,t,this.account).then(function(t){console.log("res")})},cancelCollect:function(){var t=this.articleId;r.remove(1,t,this.account).then(function(t){console.log("canclecollect")})},changeCollectBtn:function(){this.collection=!this.collection,this.collection?this.collect():this.cancelCollect()},isIPhoneX:function(){var t=this.phoneSize();this.top="iphonex"===t?"11vw":"6vw"}}}},1828:function(t,n,e){var i=e(1829);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(222)("0935620c",i,!0,{})},1829:function(t,n,e){n=t.exports=e(221)(!0),n.push([t.i,"\n.article[data-v-9c53e264] {\n  text-align: center;\n  padding-top: 20vw;\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.article .collentBtn[data-v-9c53e264] {\n    position: fixed;\n    right: 4.26vw;\n    top: 0;\n    z-index: 99;\n}\n.article .titleBar .title[data-v-9c53e264] {\n    color: #353535;\n    font-size: 5.33vw;\n    width: 80vw;\n    text-align: center;\n    margin: 0 auto;\n    font-weight: bold;\n    margin-bottom: 1.4vw;\n}\n.article .titleBar span[data-v-9c53e264] {\n    color: #909090;\n    font-size: 3.73vw;\n}\n.article .content[data-v-9c53e264] {\n    text-align: left;\n    word-wrap: break-word !important;\n    width: 100vw;\n    overflow: hidden;\n    padding: 4.26vw;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n.article .content h2[data-v-9c53e264], .article .content p[data-v-9c53e264] {\n      color: #363636;\n      font-size: 3.73vw;\n}\n","",{version:3,sources:["E:/project/marketing/src/pages/msManage/articleDetails.vue"],names:[],mappings:";AACA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;EACnB,+BAA+B;UACvB,uBAAuB;CAChC;AACD;IACI,gBAAgB;IAChB,cAAc;IACd,OAAO;IACP,YAAY;CACf;AACD;IACI,eAAe;IACf,kBAAkB;IAClB,YAAY;IACZ,mBAAmB;IACnB,eAAe;IACf,kBAAkB;IAClB,qBAAqB;CACxB;AACD;IACI,eAAe;IACf,kBAAkB;CACrB;AACD;IACI,iBAAiB;IACjB,iCAAiC;IACjC,aAAa;IACb,iBAAiB;IACjB,gBAAgB;IAChB,+BAA+B;YACvB,uBAAuB;CAClC;AACD;MACM,eAAe;MACf,kBAAkB;CACvB",file:"articleDetails.vue",sourcesContent:["\n.article[data-v-9c53e264] {\n  text-align: center;\n  padding-top: 20vw;\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.article .collentBtn[data-v-9c53e264] {\n    position: fixed;\n    right: 4.26vw;\n    top: 0;\n    z-index: 99;\n}\n.article .titleBar .title[data-v-9c53e264] {\n    color: #353535;\n    font-size: 5.33vw;\n    width: 80vw;\n    text-align: center;\n    margin: 0 auto;\n    font-weight: bold;\n    margin-bottom: 1.4vw;\n}\n.article .titleBar span[data-v-9c53e264] {\n    color: #909090;\n    font-size: 3.73vw;\n}\n.article .content[data-v-9c53e264] {\n    text-align: left;\n    word-wrap: break-word !important;\n    width: 100vw;\n    overflow: hidden;\n    padding: 4.26vw;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n.article .content h2[data-v-9c53e264], .article .content p[data-v-9c53e264] {\n      color: #363636;\n      font-size: 3.73vw;\n}\n"],sourceRoot:""}])},1830:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"article paddingTop"},[e("banner",{attrs:{title:"文章详情"}}),t._v(" "),e("collect-btn",{staticClass:"collentBtn",style:{top:t.top},attrs:{collection:t.collection},nativeOn:{touchend:function(n){return t.changeCollectBtn(n)}}}),t._v(" "),e("div",{staticClass:"titleBar"},[e("div",{staticClass:"title"},[t._v(t._s(t.articleDetails.title))]),t._v(" "),t.articleDetails.author?e("div",{staticStyle:{color:"#909090","font-size":"14px"}},[t._v("\n      作者："+t._s(t.articleDetails.author)+"  \n      "),t.articleDetails.createTime?e("span",[t._v(t._s(t.articleDetails.createTime.split(" ")[0].split("-").join(".")))]):t._e()]):t._e()]),t._v(" "),e("div",{staticClass:"content",domProps:{innerHTML:t._s(t.myhtml)},on:{click:function(n){return n.stopPropagation(),t.showImage(n)}}})],1)},o=[],a={render:i,staticRenderFns:o};n.a=a},281:function(t,n,e){"use strict";function i(t){e(1828)}Object.defineProperty(n,"__esModule",{value:!0});var o=e(1386),a=e(1830),c=e(84),r=i,l=c(o.a,a.a,!1,r,"data-v-9c53e264",null);n.default=l.exports},308:function(t,n,e){"use strict";var i=e(15);e.n(i),e(50);n.a={name:"routerLink",props:["title","MoreBtn"],data:function(){return{fix:"",top:""}},mounted:function(){this.isIPhoneX()},methods:{cilck:function(){this.$router.back(-1)},isIPhoneX:function(t){!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)&&(812==screen.height&&375==screen.width||896==screen.height&&414==screen.width)&&(this.fix="fix",this.top="6")}}}},313:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAkCAYAAACJ8xqgAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+nhxg7wAAAfJJREFUSIml1k2IjVEcx/HPYIMSslATymZIU966iMaUlWNBqUlKsxALbJBS1hYTC0UpC1mQxdiQnsnGW8gw2EzZKKGZmiQriQ2Lc69ux7lz7/Pc/+qe7zn3+5zT8zy//9NTq9V0WZdxov77/LwuZTcw3DQ+143wFg6msKrwDvZn+NEqwvvYk+GHQgg3ywofYTDDh0IIo5Q78hMMZPi+EMLdxqAT4Vw8x5bMXAghjDWDdsIFeIYNmbldeJjC2YSL8RJ9Cf+DbRjP/amVcCleY3XCf2M7JlrtIidcXr/6yoT/RA2TrWQwJxmvwLuM7Ds2t5OlO1yDF1iSrJmp7+xzO1mzcB1eiXe1uabqsulOZMQj94s3IJV9FB+XjmUN4RjmJ/xB/UJfy8gawt4Mn8SPsrKG8GSGn8aVqsJLOJuZO45rVYQwgjOZ+SNizJcWwkUcy6wZxu0qQriKw5l1B8SkLi2E6zLNR4z9ooqQeMShDN8ttoHSQhjF3gwfFNtBNvpmE8I9MZnTGhBf1/QNayskxvzODF+P8aIoFpYVwlNsFeO/ufrxpiiKf5HXqZCY4jX8SngfJoqiWAY9Fb6+1orNa1HCp7CjzA4b9R6b8C3hvXhcRQgfxPCdSfiqqkL4go341MTedvvBOS326VPiE3ChS9//9RdWbVrN+RusKgAAAABJRU5ErkJggg=="},316:function(t,n,e){"use strict";function i(t){e(317)}var o=e(308),a=e(319),c=e(84),r=i,l=c(o.a,a.a,!1,r,"data-v-69ed4bf7",null);n.a=l.exports},317:function(t,n,e){var i=e(318);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(222)("f0e332f6",i,!0,{})},318:function(t,n,e){var i=e(223);n=t.exports=e(221)(!0),n.push([t.i,"\n.banner[data-v-69ed4bf7] {\n  font-weight: 600;\n  z-index: 99;\n  height: 16.466vw;\n  width: 100vw;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 0;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-bottom: 1px solid #ccc;\n  background: #f8f8f8;\n  padding-top: 5vw;\n}\n.banner .fix[data-v-69ed4bf7] {\n    position: absolute;\n    background: #f8f8f8;\n    left: 0;\n    top: -6vw;\n    height: 7vw;\n    width: 100%;\n    z-index: 99;\n}\n.banner .icon-back[data-v-69ed4bf7] {\n    width: 8vw;\n    height: 6.66vw;\n    padding-left: 4.266vw;\n}\n.banner .icon-back .icon[data-v-69ed4bf7] {\n      background: url("+i(e(313))+") no-repeat center;\n      background-size: 100%;\n      width: 2.66vw;\n      height: 4.66vw;\n      margin-top: 1vw;\n}\n.banner span[data-v-69ed4bf7] {\n    width: 100%;\n    text-align: center;\n    padding-right: 10.4vw;\n    font-size: 5.06vw;\n    letter-spacing: -1px;\n    color: #363636;\n}\n.banner button[data-v-69ed4bf7] {\n    position: absolute;\n    right: 0;\n    font-size: 14px;\n    line-height: 11vw;\n    padding: 0 5vw;\n    text-align: right;\n    color: #007aff;\n    font-weight: bold;\n    z-index: 1000;\n}\n","",{version:3,sources:["E:/project/marketing/src/components/banner.vue"],names:[],mappings:";AACA;EACE,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,+BAA+B;UACvB,uBAAuB;EAC/B,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,gBAAgB;EAChB,OAAO;EACP,QAAQ;EACR,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,8BAA8B;EAC9B,oBAAoB;EACpB,iBAAiB;CAClB;AACD;IACI,mBAAmB;IACnB,oBAAoB;IACpB,QAAQ;IACR,UAAU;IACV,YAAY;IACZ,YAAY;IACZ,YAAY;CACf;AACD;IACI,WAAW;IACX,eAAe;IACf,sBAAsB;CACzB;AACD;MACM,2DAA0D;MAC1D,sBAAsB;MACtB,cAAc;MACd,eAAe;MACf,gBAAgB;CACrB;AACD;IACI,YAAY;IACZ,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,qBAAqB;IACrB,eAAe;CAClB;AACD;IACI,mBAAmB;IACnB,SAAS;IACT,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,cAAc;CACjB",file:"banner.vue",sourcesContent:["\n.banner[data-v-69ed4bf7] {\n  font-weight: 600;\n  z-index: 99;\n  height: 16.466vw;\n  width: 100vw;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 0;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-bottom: 1px solid #ccc;\n  background: #f8f8f8;\n  padding-top: 5vw;\n}\n.banner .fix[data-v-69ed4bf7] {\n    position: absolute;\n    background: #f8f8f8;\n    left: 0;\n    top: -6vw;\n    height: 7vw;\n    width: 100%;\n    z-index: 99;\n}\n.banner .icon-back[data-v-69ed4bf7] {\n    width: 8vw;\n    height: 6.66vw;\n    padding-left: 4.266vw;\n}\n.banner .icon-back .icon[data-v-69ed4bf7] {\n      background: url(../assets/imgs/back.png) no-repeat center;\n      background-size: 100%;\n      width: 2.66vw;\n      height: 4.66vw;\n      margin-top: 1vw;\n}\n.banner span[data-v-69ed4bf7] {\n    width: 100%;\n    text-align: center;\n    padding-right: 10.4vw;\n    font-size: 5.06vw;\n    letter-spacing: -1px;\n    color: #363636;\n}\n.banner button[data-v-69ed4bf7] {\n    position: absolute;\n    right: 0;\n    font-size: 14px;\n    line-height: 11vw;\n    padding: 0 5vw;\n    text-align: right;\n    color: #007aff;\n    font-weight: bold;\n    z-index: 1000;\n}\n"],sourceRoot:""}])},319:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"banner",style:{"margin-top":t.top+"vw"}},[e("div",{class:""+t.fix}),t._v(" "),e("div",{staticClass:"icon-back",on:{click:t.cilck}},[e("div",{staticClass:"icon"})]),t._v(" "),e("span",[t._v(t._s(t.title))]),t._v(" "),t._t("default")],2)},o=[],a={render:i,staticRenderFns:o};n.a=a},370:function(t,n,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t,n){if(t.length){var e=[];if(""===n)e=[];else for(var i=0;i<t.length;i++)null!=t[i].title.match(n)&&e.push(t[i]);return e}}function a(t,n){return t.map(function(e,i){if(n&&n.length>0){var o=new RegExp(n,"g"),a='<span style="color: #ff2d55">'+n+"</span>";t[i].title=e.title.replace(o,a)}}),t}function c(t,n){var e=window.localStorage,i=(0,C.default)(t);e.setItem(n,i)}function r(t){var n=window.localStorage;return JSON.parse(n.getItem(t))}function l(t,n,e){t.push({path:n,query:e})}function A(t,n){var e=[],i=0;for(var o in t)t[o]!=n&&(e.push(t[o]),e[i++]=t[o]);return e}function s(t,n){var e=[],i=0;for(var o in t)t[o]!=n&&(e.push(t[o]),e[i++]=t[o]);return e.length==t.length&&(e=[].concat((0,p.default)(e),[n])),e}function d(t){var n=t.replace(/\--/g,"+");return decodeURIComponent(atob(n).split("").map(function(t){return"%"+("00"+t.charCodeAt(0).toString(16)).slice(-2)}).join(""))}function g(t){return t.replace(/<img[^>]*>/gi,function(t,n){var t=t.replace(/title=\"(.*)\"/gi,'style="width: 100%;height:auto"');return t})}function f(t){return t.replace(/<img[^>]*>/gi,function(t,n){var t=t.replace(/title=\"(.*)\"/gi,'style="width: 100%;height:auto;"');return t})}function u(t){return t.replace(/<embed[^>]*>/gi,function(t,n){var e=t.split(" ")[1].split("=")[1],t="<video src="+e+' style="width: 100%;height:auto" controls></video>';return t})}function h(t,n){var e=JSON.parse(localStorage.getItem("ajaxData")),i=e.account,o=(document.body.clientWidth,document.body.offsetHeight,document.createElement("canvas")),a=new Image;a.src="./static/images/logo.png",a.onload=function(){o.width=200,o.height=200;var e=o.getContext("2d");if(e.font="14px Vedana",e.fillStyle="#ccc",e.globalAlpha=.4,e.save(),e.translate(-120,50),e.rotate(-45*Math.PI/180),e.drawImage(a,0,185,14,15),e.fillText(i,15,200),e.restore(),e.translate(-18,80),e.rotate(-45*Math.PI/180),e.drawImage(a,100,85,14,15),e.fillText(i,115,100),e.save(),1==n)document.querySelector(t).style.backgroundImage="url("+o.toDataURL("image/png")+")",document.querySelector(t).style.backgroundPosition="left top",document.querySelector(t).style.backgroundRepeat="repeat";else for(var c=document.querySelectorAll(t),r=0;r<c.length;r++)c[r].style.backgroundImage="url("+o.toDataURL("image/png")+")",c[r].style.backgroundPosition="left top",c[r].style.backgroundRepeat="repeat"}}Object.defineProperty(n,"__esModule",{value:!0}),n.waterMark=n.changeVedioStyle=n.changeGalleryStyle=n.changeImgStyle=n.b64DecodeUnicode=n.addItem=n.removeItem=n.skipNewPage=n.getLocalStorage=n.setLocalStorage=n.changeColor=n.fuzzyQuery=void 0;var v=e(29),p=i(v),B=e(30),C=i(B);n.fuzzyQuery=o,n.changeColor=a,n.setLocalStorage=c,n.getLocalStorage=r,n.skipNewPage=l,n.removeItem=A,n.addItem=s,n.b64DecodeUnicode=d,n.changeImgStyle=g,n.changeGalleryStyle=f,n.changeVedioStyle=u,n.waterMark=h}});