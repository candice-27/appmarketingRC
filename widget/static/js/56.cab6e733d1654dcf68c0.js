webpackJsonp([56],{1089:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["collection"],data:function(){return{ImgUrl:"./static/images/collect.png",text:"加入收藏"}},watch:{collection:function(){this.collection?(this.ImgUrl="./static/images/collected.png",this.text="已收藏"):(this.ImgUrl="./static/images/collect.png",this.text="加入收藏")}}}},1137:function(n,t,e){t=n.exports=e(222)(),t.push([n.i,"\n.collect[data-v-5fabbdba] {\n  width: 20.33vw;\n  height: 8vw;\n  border: 2px solid #ffba00;\n  border-radius: 1.06vw;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n.collect img[data-v-5fabbdba] {\n    width: 4.26vw;\n    height: 4.26vw;\n    padding-top: 1.6vw;\n}\n.collect span[data-v-5fabbdba] {\n    color: #ffba00;\n    font-size: 3.2vw;\n    padding-left: 1.6vw;\n    line-height: 8vw;\n}\n","",{version:3,sources:["E:/project/marketing/src/components/msManage/eggCollectBtn.vue"],names:[],mappings:";AACA;EACE,eAAe;EACf,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;EACtB,qBAAqB;EACrB,cAAc;EACd,sBAAsB;MAClB,wBAAwB;CAC7B;AACD;IACI,cAAc;IACd,eAAe;IACf,mBAAmB;CACtB;AACD;IACI,eAAe;IACf,iBAAiB;IACjB,oBAAoB;IACpB,iBAAiB;CACpB",file:"eggCollectBtn.vue",sourcesContent:["\n.collect[data-v-5fabbdba] {\n  width: 20.33vw;\n  height: 8vw;\n  border: 2px solid #ffba00;\n  border-radius: 1.06vw;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n.collect img[data-v-5fabbdba] {\n    width: 4.26vw;\n    height: 4.26vw;\n    padding-top: 1.6vw;\n}\n.collect span[data-v-5fabbdba] {\n    color: #ffba00;\n    font-size: 3.2vw;\n    padding-left: 1.6vw;\n    line-height: 8vw;\n}\n"],sourceRoot:""}])},1171:function(n,t,e){var i=e(1137);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e(223)("07ff6337",i,!0)},1202:function(n,t,e){e(1171);var i=e(90)(e(1089),e(1247),"data-v-5fabbdba",null);n.exports=i.exports},1247:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"collect"},[e("img",{attrs:{src:n.ImgUrl,alt:""}}),n._v(" "),e("span",[n._v(n._s(n.text))])])},staticRenderFns:[]}},1375:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(92),a=(e.n(i),e(391)),o=(e.n(a),e(316)),c=e.n(o),r=e(1202),l=e.n(r),A=new i.IndexModel;t.default={components:{CollectBtn:l.a,Banner:c.a},data:function(){return{isBegin:!0,articleId:"",collection:!1,myhtml:"",articleDetails:"",top:"",account:""}},created:function(){this.articleId=this.$route.query.articleId,this.account=this._localAjax().account,this.getArticleDetail(),this.isIPhoneX()},mounted:function(){e.i(a.waterMark)(".article",1)},methods:{getArticleDetail:function(){var n=this,t=this.articleId;A.getArticleDetail(t,this.account).then(function(t){if(n.articleDetails=t.data,t.data.remark){var i=t.data.remark;n.myhtml=e.i(a.changeImgStyle)(e.i(a.b64DecodeUnicode)(i)),n.myhtml=e.i(a.changeVedioStyle)(n.myhtml)}n.collection=t.data.collect})},collect:function(){var n=this.articleId;A.collect(1,n,this.account).then(function(n){console.log("res")})},cancelCollect:function(){var n=this.articleId;A.remove(1,n,this.account).then(function(n){console.log("canclecollect")})},changeCollectBtn:function(){this.collection=!this.collection,this.collection?this.collect():this.cancelCollect()},isIPhoneX:function(){var n=this.phoneSize();this.top="iphonex"===n?"11vw":"6vw"}}}},1454:function(n,t,e){t=n.exports=e(222)(),t.push([n.i,"\n.article[data-v-52dffdd3] {\n  text-align: center;\n  padding-top: 20vw;\n  position: relative;\n  box-sizing: border-box;\n}\n.article .collentBtn[data-v-52dffdd3] {\n    position: fixed;\n    right: 4.26vw;\n    top: 0;\n    z-index: 99;\n}\n.article .titleBar .title[data-v-52dffdd3] {\n    color: #353535;\n    font-size: 5.33vw;\n    width: 80vw;\n    text-align: center;\n    margin: 0 auto;\n    font-weight: bold;\n    margin-bottom: 1.4vw;\n}\n.article .titleBar span[data-v-52dffdd3] {\n    color: #909090;\n    font-size: 3.73vw;\n}\n.article .content[data-v-52dffdd3] {\n    text-align: left;\n    word-wrap: break-word !important;\n    width: 100vw;\n    overflow: hidden;\n    padding: 4.26vw;\n    box-sizing: border-box;\n}\n.article .content h2[data-v-52dffdd3], .article .content p[data-v-52dffdd3] {\n      color: #363636;\n      font-size: 3.73vw;\n}\n","",{version:3,sources:["E:/project/marketing/src/pages/msManage/articleDetails.vue"],names:[],mappings:";AACA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;EACnB,uBAAuB;CACxB;AACD;IACI,gBAAgB;IAChB,cAAc;IACd,OAAO;IACP,YAAY;CACf;AACD;IACI,eAAe;IACf,kBAAkB;IAClB,YAAY;IACZ,mBAAmB;IACnB,eAAe;IACf,kBAAkB;IAClB,qBAAqB;CACxB;AACD;IACI,eAAe;IACf,kBAAkB;CACrB;AACD;IACI,iBAAiB;IACjB,iCAAiC;IACjC,aAAa;IACb,iBAAiB;IACjB,gBAAgB;IAChB,uBAAuB;CAC1B;AACD;MACM,eAAe;MACf,kBAAkB;CACvB",file:"articleDetails.vue",sourcesContent:["\n.article[data-v-52dffdd3] {\n  text-align: center;\n  padding-top: 20vw;\n  position: relative;\n  box-sizing: border-box;\n}\n.article .collentBtn[data-v-52dffdd3] {\n    position: fixed;\n    right: 4.26vw;\n    top: 0;\n    z-index: 99;\n}\n.article .titleBar .title[data-v-52dffdd3] {\n    color: #353535;\n    font-size: 5.33vw;\n    width: 80vw;\n    text-align: center;\n    margin: 0 auto;\n    font-weight: bold;\n    margin-bottom: 1.4vw;\n}\n.article .titleBar span[data-v-52dffdd3] {\n    color: #909090;\n    font-size: 3.73vw;\n}\n.article .content[data-v-52dffdd3] {\n    text-align: left;\n    word-wrap: break-word !important;\n    width: 100vw;\n    overflow: hidden;\n    padding: 4.26vw;\n    box-sizing: border-box;\n}\n.article .content h2[data-v-52dffdd3], .article .content p[data-v-52dffdd3] {\n      color: #363636;\n      font-size: 3.73vw;\n}\n"],sourceRoot:""}])},1583:function(n,t,e){var i=e(1454);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e(223)("2ad9f27e",i,!0)},1823:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"article paddingTop"},[e("banner",{attrs:{title:"文章详情"}}),n._v(" "),e("collect-btn",{staticClass:"collentBtn",style:{top:n.top},attrs:{collection:n.collection},nativeOn:{touchend:function(t){return n.changeCollectBtn(t)}}}),n._v(" "),e("div",{staticClass:"titleBar"},[e("div",{staticClass:"title"},[n._v(n._s(n.articleDetails.title))])]),n._v(" "),e("div",{staticClass:"content",domProps:{innerHTML:n._s(n.myhtml)}})],1)},staticRenderFns:[]}},277:function(n,t,e){e(1583);var i=e(90)(e(1375),e(1823),"data-v-52dffdd3",null);n.exports=i.exports},310:function(n,t){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAkCAYAAACJ8xqgAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+nhxg7wAAAfJJREFUSIml1k2IjVEcx/HPYIMSslATymZIU966iMaUlWNBqUlKsxALbJBS1hYTC0UpC1mQxdiQnsnGW8gw2EzZKKGZmiQriQ2Lc69ux7lz7/Pc/+qe7zn3+5zT8zy//9NTq9V0WZdxov77/LwuZTcw3DQ+143wFg6msKrwDvZn+NEqwvvYk+GHQgg3ywofYTDDh0IIo5Q78hMMZPi+EMLdxqAT4Vw8x5bMXAghjDWDdsIFeIYNmbldeJjC2YSL8RJ9Cf+DbRjP/amVcCleY3XCf2M7JlrtIidcXr/6yoT/RA2TrWQwJxmvwLuM7Ds2t5OlO1yDF1iSrJmp7+xzO1mzcB1eiXe1uabqsulOZMQj94s3IJV9FB+XjmUN4RjmJ/xB/UJfy8gawt4Mn8SPsrKG8GSGn8aVqsJLOJuZO45rVYQwgjOZ+SNizJcWwkUcy6wZxu0qQriKw5l1B8SkLi2E6zLNR4z9ooqQeMShDN8ttoHSQhjF3gwfFNtBNvpmE8I9MZnTGhBf1/QNayskxvzODF+P8aIoFpYVwlNsFeO/ufrxpiiKf5HXqZCY4jX8SngfJoqiWAY9Fb6+1orNa1HCp7CjzA4b9R6b8C3hvXhcRQgfxPCdSfiqqkL4go341MTedvvBOS326VPiE3ChS9//9RdWbVrN+RusKgAAAABJRU5ErkJggg=="},316:function(n,t,e){e(319);var i=e(90)(e(317),e(320),"data-v-2a50e813",null);n.exports=i.exports},317:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(12);e.n(i),e(50);t.default={name:"routerLink",props:["title","MoreBtn"],data:function(){return{fix:"",top:""}},mounted:function(){this.isIPhoneX()},methods:{cilck:function(){this.$router.back(-1)},isIPhoneX:function(n){!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)&&(812==screen.height&&375==screen.width||896==screen.height&&414==screen.width)&&(this.fix="fix",this.top="6")}}}},318:function(n,t,e){t=n.exports=e(222)(),t.push([n.i,"\n.banner[data-v-2a50e813] {\n  font-weight: 600;\n  z-index: 99;\n  height: 16.466vw;\n  width: 100vw;\n  box-sizing: border-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 0;\n  -ms-flex-align: center;\n      align-items: center;\n  border-bottom: 1px solid #ccc;\n  background: #f8f8f8;\n  padding-top: 5vw;\n}\n.banner .fix[data-v-2a50e813] {\n    position: absolute;\n    background: #f8f8f8;\n    left: 0;\n    top: -6vw;\n    height: 7vw;\n    width: 100%;\n    z-index: 99;\n}\n.banner .icon-back[data-v-2a50e813] {\n    width: 8vw;\n    height: 6.66vw;\n    padding-left: 4.266vw;\n}\n.banner .icon-back .icon[data-v-2a50e813] {\n      background: url("+e(310)+") no-repeat center;\n      background-size: 100%;\n      width: 2.66vw;\n      height: 4.66vw;\n      margin-top: 1vw;\n}\n.banner span[data-v-2a50e813] {\n    width: 100%;\n    text-align: center;\n    padding-right: 10.4vw;\n    font-size: 5.06vw;\n    letter-spacing: -1px;\n    color: #363636;\n}\n.banner button[data-v-2a50e813] {\n    position: absolute;\n    right: 0;\n    font-size: 14px;\n    line-height: 11vw;\n    padding: 0 5vw;\n    text-align: right;\n    color: #007aff;\n    font-weight: bold;\n    z-index: 1000;\n}\n","",{version:3,sources:["E:/project/marketing/src/components/banner.vue"],names:[],mappings:";AACA;EACE,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,qBAAqB;EACrB,cAAc;EACd,gBAAgB;EAChB,OAAO;EACP,QAAQ;EACR,uBAAuB;MACnB,oBAAoB;EACxB,8BAA8B;EAC9B,oBAAoB;EACpB,iBAAiB;CAClB;AACD;IACI,mBAAmB;IACnB,oBAAoB;IACpB,QAAQ;IACR,UAAU;IACV,YAAY;IACZ,YAAY;IACZ,YAAY;CACf;AACD;IACI,WAAW;IACX,eAAe;IACf,sBAAsB;CACzB;AACD;MACM,2DAA0D;MAC1D,sBAAsB;MACtB,cAAc;MACd,eAAe;MACf,gBAAgB;CACrB;AACD;IACI,YAAY;IACZ,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,qBAAqB;IACrB,eAAe;CAClB;AACD;IACI,mBAAmB;IACnB,SAAS;IACT,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,cAAc;CACjB",file:"banner.vue",sourcesContent:["\n.banner[data-v-2a50e813] {\n  font-weight: 600;\n  z-index: 99;\n  height: 16.466vw;\n  width: 100vw;\n  box-sizing: border-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 0;\n  -ms-flex-align: center;\n      align-items: center;\n  border-bottom: 1px solid #ccc;\n  background: #f8f8f8;\n  padding-top: 5vw;\n}\n.banner .fix[data-v-2a50e813] {\n    position: absolute;\n    background: #f8f8f8;\n    left: 0;\n    top: -6vw;\n    height: 7vw;\n    width: 100%;\n    z-index: 99;\n}\n.banner .icon-back[data-v-2a50e813] {\n    width: 8vw;\n    height: 6.66vw;\n    padding-left: 4.266vw;\n}\n.banner .icon-back .icon[data-v-2a50e813] {\n      background: url(../assets/imgs/back.png) no-repeat center;\n      background-size: 100%;\n      width: 2.66vw;\n      height: 4.66vw;\n      margin-top: 1vw;\n}\n.banner span[data-v-2a50e813] {\n    width: 100%;\n    text-align: center;\n    padding-right: 10.4vw;\n    font-size: 5.06vw;\n    letter-spacing: -1px;\n    color: #363636;\n}\n.banner button[data-v-2a50e813] {\n    position: absolute;\n    right: 0;\n    font-size: 14px;\n    line-height: 11vw;\n    padding: 0 5vw;\n    text-align: right;\n    color: #007aff;\n    font-weight: bold;\n    z-index: 1000;\n}\n"],sourceRoot:""}])},319:function(n,t,e){var i=e(318);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e(223)("34a363a4",i,!0)},320:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"banner",style:{"margin-top":n.top+"vw"}},[e("div",{class:""+n.fix}),n._v(" "),e("div",{staticClass:"icon-back",on:{click:n.cilck}},[e("div",{staticClass:"icon"})]),n._v(" "),e("span",[n._v(n._s(n.title))]),n._v(" "),n._t("default")],2)},staticRenderFns:[]}},391:function(n,t,e){"use strict";function i(n){return n&&n.__esModule?n:{default:n}}function a(n,t){if(n.length){var e=[];if(""===t)e=[];else for(var i=0;i<n.length;i++)null!=n[i].title.match(t)&&e.push(n[i]);return e}}function o(n,t){return n.map(function(e,i){if(t&&t.length>0){var a=new RegExp(t,"g"),o='<span style="color: #ff2d55">'+t+"</span>";n[i].title=e.title.replace(a,o)}}),n}function c(n,t){var e=window.localStorage,i=(0,C.default)(n);e.setItem(t,i)}function r(n){var t=window.localStorage;return JSON.parse(t.getItem(n))}function l(n,t,e){n.push({path:t,query:e})}function A(n,t){var e=[],i=0;for(var a in n)n[a]!=t&&(e.push(n[a]),e[i++]=n[a]);return e}function s(n,t){var e=[],i=0;for(var a in n)n[a]!=t&&(e.push(n[a]),e[i++]=n[a]);return e.length==n.length&&(e=[].concat((0,h.default)(e),[t])),e}function d(n){return decodeURIComponent(atob(n).split("").map(function(n){return"%"+("00"+n.charCodeAt(0).toString(16)).slice(-2)}).join(""))}function f(n){return n.replace(/<img[^>]*>/gi,function(n,t){var n=n.replace(/title=\"(.*)\"/gi,'style="width: 100%;height:auto"');return n})}function g(n){return n.replace(/<img[^>]*>/gi,function(n,t){var n=n.replace(/title=\"(.*)\"/gi,'style="width: 100%;height:auto;"');return n})}function u(n){return n.replace(/<embed[^>]*>/gi,function(n,t){var e=n.split(" ")[1].split("=")[1],n="<video src="+e+' style="width: 100%;height:auto" controls></video>';return n})}function v(n,t){var e=JSON.parse(localStorage.getItem("ajaxData")),i=e.account,a=(document.body.clientWidth,document.body.offsetHeight,document.createElement("canvas")),o=new Image;o.src="./static/images/logo.png",o.onload=function(){a.width=200,a.height=200;var e=a.getContext("2d");if(e.font="14px Vedana",e.fillStyle="#ccc",e.globalAlpha=.4,e.save(),e.translate(-120,50),e.rotate(-45*Math.PI/180),e.drawImage(o,0,185,14,15),e.fillText(i,15,200),e.restore(),e.translate(-18,80),e.rotate(-45*Math.PI/180),e.drawImage(o,100,85,14,15),e.fillText(i,115,100),e.save(),1==t)document.querySelector(n).style.backgroundImage="url("+a.toDataURL("image/png")+")",document.querySelector(n).style.backgroundPosition="left top",document.querySelector(n).style.backgroundRepeat="repeat";else for(var c=document.querySelectorAll(n),r=0;r<c.length;r++)c[r].style.backgroundImage="url("+a.toDataURL("image/png")+")",c[r].style.backgroundPosition="left top",c[r].style.backgroundRepeat="repeat"}}Object.defineProperty(t,"__esModule",{value:!0}),t.waterMark=t.changeVedioStyle=t.changeGalleryStyle=t.changeImgStyle=t.b64DecodeUnicode=t.addItem=t.removeItem=t.skipNewPage=t.getLocalStorage=t.setLocalStorage=t.changeColor=t.fuzzyQuery=void 0;var p=e(29),h=i(p),B=e(52),C=i(B);t.fuzzyQuery=a,t.changeColor=o,t.setLocalStorage=c,t.getLocalStorage=r,t.skipNewPage=l,t.removeItem=A,t.addItem=s,t.b64DecodeUnicode=d,t.changeImgStyle=f,t.changeGalleryStyle=g,t.changeVedioStyle=u,t.waterMark=v}});