(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{14:function(e,a,t){e.exports={container:"MovieItem_container__3ZqUh"}},26:function(e,a,t){},3:function(e,a,t){e.exports={input_div:"SearchInput_input_div__1WI0d",form:"SearchInput_form__3XNTm",label:"SearchInput_label__14FA3",input:"SearchInput_input__a8Nu5"}},31:function(e,a,t){"use strict";t.r(a);var r=t(13),n=t.n(r),c=(t(26),t(0)),i=t.n(c),o=t(4),s=t.n(o),d=t(1);var l=function(){return Object(d.jsx)("div",{className:s.a.nav,children:Object(d.jsx)("div",{className:s.a.logo_text_div,children:Object(d.jsx)("p",{className:s.a.logo_text,children:"MyTestApp"})})})},u=t(5),j=t.n(u),h=t.p+"static/media/banner.513c48b4.jpg";var _=function(){return Object(d.jsx)("div",{style:{backgroundImage:"url(".concat(h,")")},className:j.a.banner,children:Object(d.jsx)("div",{className:j.a.hero_text,children:Object(d.jsx)("h1",{className:j.a.hero_text,children:"Watch something incredible."})})})},m=t(3),b=t.n(m);var p=function(){return Object(d.jsx)("div",{className:b.a.input_div,children:Object(d.jsxs)("form",{className:b.a.form,children:[Object(d.jsx)("p",{className:b.a.label,children:"Search"}),Object(d.jsx)("input",{className:b.a.input})]})})},x=t(6),f=t.n(x),v=t(9),O=t(14),g=t.n(O),y=t(18);var N=function(e){var a=e.year,t=e.categorie,r=Object(c.useState)({}),n=Object(v.a)(r,2),i=n[0],o=n[1],s=Object(c.useState)(!0),l=Object(v.a)(s,2),u=l[0],j=l[1];return Object(c.useEffect)((function(){try{fetch("https://www.omdbapi.com/?t=".concat(t,"&y=").concat(a,"&apikey=2ce95ed4")).then((function(e){return e.json()})).then((function(e){o(e),j(!1)}))}catch(e){console.log(e)}}),[a,t]),Object(d.jsx)("div",{className:g.a.container,children:u?Object(d.jsx)(y.a,{height:"80",width:"80",radius:"9",color:"#ffffff",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0}):Object(d.jsx)("p",{children:i.Title})})};var M=function(e){var a=e.categorie,t=[{id:Math.random(),year:2e3},{id:Math.random(),year:2001},{id:Math.random(),year:2002},{id:Math.random(),year:2003},{id:Math.random(),year:2004},{id:Math.random(),year:2005},{id:Math.random(),year:2006},{id:Math.random(),year:2007},{id:Math.random(),year:2008},{id:Math.random(),year:2009},{id:Math.random(),year:2010},{id:Math.random(),year:2011}];return Object(d.jsxs)("div",{className:f.a.parent,children:[Object(d.jsx)("h3",{className:f.a.categorie_text,children:a}),Object(d.jsx)("div",{className:f.a.carousel,children:t.map((function(e){return Object(d.jsx)(N,{year:e.year,categorie:a},e.id)}))})]})};var I=function(){var e=[{id:Math.random(),categorie:"Action"},{id:Math.random(),categorie:"Comedy"}];return Object(d.jsxs)("div",{children:[Object(d.jsx)(l,{}),Object(d.jsx)(_,{}),Object(d.jsx)(p,{}),e.map((function(e){return Object(d.jsx)(M,{categorie:e.categorie},e.id)}))]})};var S=function(){return Object(d.jsx)(i.a.Fragment,{children:Object(d.jsx)(I,{})})};n.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(S,{}))},4:function(e,a,t){e.exports={nav:"NavBar_nav__3EIqe",logo_text:"NavBar_logo_text__3dtGr"}},5:function(e,a,t){e.exports={banner:"Hero_banner__1_WrJ",hero_text:"Hero_hero_text__2Hy1Y"}},6:function(e,a,t){e.exports={parent:"Carousel_parent__3KT1S",carousel:"Carousel_carousel__C6HIp",categorie_text:"Carousel_categorie_text__1uoG6"}}},[[31,1,2]]]);
//# sourceMappingURL=main.4ee3b4a7.chunk.js.map