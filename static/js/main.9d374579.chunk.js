(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,a){"use strict";a.r(t);a(63),a(88);var n=a(0),l=a.n(n),r=a(33),c=a.n(r),o=a(18),i=a.n(o),s=a(57),u=a(58),m=a(60),d=a(59),p=a(61),E=a(1),f=(a(110),function(e){var t=e.id,a=e.go;e.props;return l.a.createElement(E.Panel,{id:t},l.a.createElement(E.PanelHeader,null,"Release"),l.a.createElement(E.Group,{title:"Release | Critical Ops"},l.a.createElement(E.Cell,{size:"l",description:"\u041d\u0430\u0448\u0430 \u0433\u0440\u0443\u043f\u043f\u0430",before:l.a.createElement(E.Avatar,{src:"https://pp.userapi.com/c855528/v855528996/44fe4/nwqX72dtUuE.jpg"}),bottomContent:l.a.createElement(E.Button,{component:"a",href:"https://vk.me/release_cops"},"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c")},"Release | Critical Ops")),l.a.createElement(E.Group,{title:"\u041c\u0435\u043d\u044e"},l.a.createElement(E.List,null,l.a.createElement(E.Cell,{onClick:a,"data-to":"clans"},"\u041a\u043b\u0430\u043d\u044b"),l.a.createElement(E.Cell,{onClick:a,"data-to":"persik"},"\u0412 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435"))))}),h=(a(56),a(23)),b=a.n(h),v=a(17),g=a.n(v),k=Object(E.platform)(),C=function(e){return l.a.createElement(E.Panel,{id:e.id},l.a.createElement(E.PanelHeader,{left:l.a.createElement(E.HeaderButton,{onClick:e.go,"data-to":"home"},k===E.IOS?l.a.createElement(b.a,null):l.a.createElement(g.a,null))},"\u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435"),l.a.createElement(E.Group,null,l.a.createElement(E.Div,null,"\u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435")))},O=Object(E.platform)(),P=function(e){return l.a.createElement(E.Panel,{id:e.id},l.a.createElement(E.PanelHeader,{left:l.a.createElement(E.HeaderButton,{onClick:e.go,"data-to":"home"},O===E.IOS?l.a.createElement(b.a,null):l.a.createElement(g.a,null))},"\u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435"),l.a.createElement(E.Group,null,l.a.createElement(E.Div,null,"\u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435")))},w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.state={activePanel:"home",fetchedUser:null},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;i.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;default:console.log(t.detail.type)}}),i.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return l.a.createElement(E.View,{activePanel:this.state.activePanel},l.a.createElement(f,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go}),l.a.createElement(C,{id:"persik",go:this.go}),l.a.createElement(P,{id:"clans",go:this.go}))}}]),t}(l.a.Component);i.a.send("VKWebAppInit",{}),c.a.render(l.a.createElement(w,null),document.getElementById("root"))},56:function(e,t,a){},62:function(e,t,a){e.exports=a(111)}},[[62,1,2]]]);
//# sourceMappingURL=main.9d374579.chunk.js.map