webpackJsonp([1],{"/1YI":function(t,n){},"/ulp":function(t,n){},Jk9G:function(t,n){},Mvc1:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("/xf8"),a=e("rVsN"),o=e.n(a),s=(e("OtIi"),e("xxgg")),c=(e("2NJL"),e("wkqG"));r.a.use(s.a).use(c.a);var i={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("van-tabbar",{model:{value:t.active,callback:function(n){t.active=n},expression:"active"}},[e("van-tabbar-item",{attrs:{icon:"home-o",to:"/"}},[t._v("外面")]),t._v(" "),e("van-tabbar-item",{attrs:{icon:"search",dot:"",to:"/search"}},[t._v("搜索")]),t._v(" "),e("van-tabbar-item",{attrs:{icon:"friends-o",info:"5",to:"/order"}},[t._v("订单")]),t._v(" "),e("van-tabbar-item",{attrs:{icon:"setting-o",info:"20",to:"/profile"}},[t._v("我的")])],1)],1)},staticRenderFns:[]};var u={components:{FooterGuide:e("C7Lr")({data:function(){return{active:0}},created:function(){}},i,!1,function(t){e("xZCn")},null,null).exports},created:function(){this.Test().then(function(t){console.log(t)})},methods:{Test:function(){return new o.a(function(t,n){setTimeout(function(){t("时间")})},3e3)}}},f={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("router-view"),this._v(" "),n("FooterGuide")],1)},staticRenderFns:[]};var l=e("C7Lr")(u,f,!1,function(t){e("Jk9G")},null,null).exports,v=e("KGCO"),d=e("a3Yh"),h=e.n(d),m=e("lC5x"),p=e.n(m),_=e("J0Oq"),g=e.n(_),x=e("aozt"),C=e.n(x);function b(t){return!t||200!==t.status&&304!==t.status&&400!==t.status?{status:t.status,msg:"异常"}:t.data}function w(t){return-404===t.status&&alert(t.msg),t.data&&!t.data.success&&alert(t.data.error_msg),t}C.a.defaults.timeout=3e4,C.a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",C.a.interceptors.request.use(function(t){return t},function(t){return o.a.reject(t)}),C.a.interceptors.response.use(function(t){return t},function(t){return o.a.reject(t)});var k,L={get:function(t,n){return C.a.get(t,n).then(function(t){return b(t)}).catch(function(t){return w(t)})},post:function(t,n){return C.a.post(t,n).then(function(t){return b(t)}).catch(function(t){return w(t)})}},R=e("9rMa"),F=(k={name:"Home",data:function(){return{name:"home"}},computed:{},created:function(){var t=this;return g()(p.a.mark(function n(){return p.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$store.dispatch("getConfig");case 2:console.log(t.$store.state.name);case 3:case"end":return n.stop()}},n,t)}))()}},h()(k,"computed",{}),h()(k,"methods",{}),k),$={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"home"},[this._v("\n    "+this._s(this._f("capitalize")(this.name))+"\n")])},staticRenderFns:[]};var E=e("C7Lr")(F,$,!1,function(t){e("Mvc1")},null,null).exports,G={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    search\n")])},staticRenderFns:[]};var q=e("C7Lr")({},G,!1,function(t){e("/1YI")},null,null).exports,J={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    order\n")])},staticRenderFns:[]};var M=e("C7Lr")({},J,!1,function(t){e("nc97")},null,null).exports,z={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    profile\n")])},staticRenderFns:[]};var H=e("C7Lr")({},z,!1,function(t){e("skBl")},null,null).exports;r.a.use(v.a);var N=new v.a({routes:[{path:"/",component:E},{path:"/search",component:q},{path:"/order",component:M},{path:"/profile",component:H}]}),O=(e("D0oh"),h()({},"get_name",function(t,n){t.name=n.name})),j="";j="";var I={getConfig:function(t){var n=this,e=t.commit;t.state;return g()(p.a.mark(function t(){var r;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L.get(j+"/h5/misc/config");case 2:r=t.sent,console.log(r),0==r.code&&e("get_name",r.data);case 5:case"end":return t.stop()}},t,n)}))()}};r.a.use(R.a);var T=new R.a.Store({state:{name:"maile"},mutations:O,actions:I,getters:{}}),X=(e("hn2z"),e("cLQA"));e.n(X).a.mock("/h5/misc/config",{code:0,data:{name:"麦乐","list|1-10":[{"id|+1":1}]}}),r.a.filter("capitalize",function(t){return t?(t=t.toString()).charAt(0).toUpperCase()+t.slice(1):""}),new r.a({el:"#app",render:function(t){return t(l)},router:N,store:T})},RerX:function(t,n){},"f/tl":function(t,n){},nc97:function(t,n){},skBl:function(t,n){},xZCn:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.bf5a79b3c046ec9df5da.js.map