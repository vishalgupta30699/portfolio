(this.webpackJsonppersonalportfolio=this.webpackJsonppersonalportfolio||[]).push([[0],{14:function(e,a,t){},18:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(8),c=t.n(r),o=(t(14),t(1)),s=t(2),i=t(4),m=t(3),u=(t(19),t(17),t(18),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=(this.props.data.occupation,this.props.data.description,this.props.data.address.city,this.props.data.social.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))})));return l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Projects")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"I'm ",e,"."),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},a))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"}))))}}]),t}(n.Component)),d=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}));return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e),l.a.createElement("ul",null,l.a.createElement("li",null,"Thank You to visit my portfolio \u2665\ufe0f")),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"\xa9 Copyright 2020 Vishal Gupta"))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(n.Component),p=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a="images/"+this.props.data.image,t=this.props.data.bio,n=this.props.data.address.street,r=this.props.data.address.city,c=this.props.data.address.state,o=this.props.data.address.zip,s=this.props.data.phone,i=this.props.data.email,m=this.props.data.resumedownload;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:a,alt:"vishal gupta profile Pic"})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,t),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e),l.a.createElement("br",null),l.a.createElement("span",null,n,l.a.createElement("br",null),r," ",c,", ",o),l.a.createElement("br",null),l.a.createElement("span",null,s),l.a.createElement("br",null),l.a.createElement("span",null,i))),l.a.createElement("div",{className:"columns download"},l.a.createElement("p",null,l.a.createElement("a",{href:m,className:"button"},l.a.createElement("i",{className:"fa fa-download"}),"Download Resume")))))))}}]),t}(n.Component),h=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){if(this.props.data){this.props.data.skillmessage;var e=this.props.data.education.map((function(e){return l.a.createElement("div",{key:e.school},l.a.createElement("h3",null,e.school),l.a.createElement("p",{className:"info"},e.degree," ",l.a.createElement("span",null,"\u2022"),l.a.createElement("em",{className:"date"},e.graduated)))})),a=this.props.data.skills.map((function(e){e.name.toLowerCase();return l.a.createElement("li",{key:e.name},l.a.createElement("em",null,e.name))}))}return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},e)))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},a)))))}}]),t}(n.Component),E=t(6),v=function(e){var a=e.data,t=Object(n.useState)("mailto:test@example.com?subject=subject&body=body"),r=Object(E.a)(t,2),c=(r[0],r[1],Object(n.useState)("")),o=Object(E.a)(c,2),s=o[0],i=o[1],m=Object(n.useState)(""),u=Object(E.a)(m,2),d=u[0],p=u[1],h=Object(n.useState)(""),v=Object(E.a)(h,2),f=v[0],g=v[1],b=Object(n.useState)(""),w=Object(E.a)(b,2),N=w[0],y=w[1];console.log(a);return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Get In Touch."))),l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},null===a||void 0===a?void 0:a.message))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"eight columns"},l.a.createElement("form",{id:"contactForm",name:"contactForm"},l.a.createElement("fieldset",null,l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactName"},"Name ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{value:s,type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:function(e){return i(e.target.value)}})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactEmail"},"Email ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{value:f,type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:function(e){return g(e.target.value)}})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactSubject"},"Subject"),l.a.createElement("input",{value:d,type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:function(e){return p(e.target.value)}})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactMessage"},"Message ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("textarea",{value:N,onChange:function(e){return y(e.target.value)},cols:"50",rows:"15",id:"contactMessage",name:"contactMessage"})),l.a.createElement("div",null,l.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault(),window.open("mailto:".concat(f,"?subject=").concat(d,"&body=").concat(s,": ").concat(N))},className:"submit"},"Submit"),l.a.createElement("span",{id:"image-loader"},l.a.createElement("img",{alt:"",src:"images/loader.gif"}))))),l.a.createElement("div",{id:"message-warning"}," Error boy"),l.a.createElement("div",{id:"message-success"},l.a.createElement("i",{className:"fa fa-check"}),"Your message was sent, thank you!",l.a.createElement("br",null))),l.a.createElement("aside",{className:"four columns footer-widgets"},l.a.createElement("div",{className:"widget widget_contact"},l.a.createElement("h4",null,"Address and Phone"),l.a.createElement("p",{className:"address"},null===a||void 0===a?void 0:a.name,l.a.createElement("br",null),null===a||void 0===a?void 0:a.address.street," ",l.a.createElement("br",null),null===a||void 0===a?void 0:a.address.city,", ",null===a||void 0===a?void 0:a.address.state," ",null===a||void 0===a?void 0:a.address.zip,l.a.createElement("br",null),l.a.createElement("span",null,null===a||void 0===a?void 0:a.phone))),l.a.createElement("div",{className:"widget widget_tweets"}))))},f=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var a="images/portfolio/"+e.image;return l.a.createElement("div",{key:e.title,className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:e.url,title:e.title},l.a.createElement("img",{alt:e.title,src:a}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.title),l.a.createElement("p",null,e.category))),l.a.createElement("div",{className:"link-icon"},l.a.createElement("i",{className:"fa fa-link"})))))}));return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Projects."),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e))))}}]),t}(n.Component),g=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={foo:"bar",resumeData:{main:{name:"Vishal Gupta",occupation:"Coding",description:"I am final year student looking for job opportunity",image:"vishal_gupta.jpg",bio:"I am final year student completing B.Tech from Ujjain engineering College,Ujjain in CSE branch.I am looking for company for Job.I have good problem solving skills.I love Competitive Coding too.",contactmessage:"Get in touch with me to receive further details or anything else.",email:"vishalg30699@gmail.com",phone:"+91 7024692684",address:{street:"20/5 Sadar Bazar Porsa",city:"Morena",state:"M.P",zip:"476115"},website:"http://www.timbakerdev.com",resumedownload:"https://drive.google.com/file/d/1U9B_bnUd-LO59MXM-Y8Yz_xk2dXce7y-/view?usp=sharing",social:[{name:"facebook",url:"https://www.facebook.com/profile.php?id=100004466655904",className:"fa fa-facebook"},{name:"linkedin",url:"https://www.linkedin.com/in/vishalgupta30699/",className:"fa fa-linkedin"},{name:"instagram",url:"https://www.instagram.com/vishalgupta9218/",className:"fa fa-instagram"},{name:"github",url:"https://github.com/vishalgupta30699",className:"fa fa-github"}]},resume:{skillmessage:"Here you can create a short write-up of your skills to show off to employers",education:[{school:"Ujjain Engineering College,Ujjain",degree:"Bachelor of Technology(B.Tech)",graduated:"2017-2021",description:"Graduated with Distinction"}],work:[{company:"Clever Programmer",title:"Team Member && React Specialist",years:"April 2020 - Present",description:"Teaching ReactJS to thousands of students."},{company:"Lindar Media",title:"Software Engineer",years:"Nov 2019 - April 2020",description:"Building MrQ, a gambling website."}],skills:[{name:"C"},{name:"C++"},{name:"Java"},{name:"Python"},{name:"HTML"},{name:"CSS"},{name:"JavaScript"},{name:"ReactJS"},{name:"NodeJs"},{name:"MySQL"},{name:"Apache-Derby"},{name:"MongoDB"},{name:"SpringBoot"}]},portfolio:{projects:[{title:"Online Coding Compiler",category:"Coding Compiler Platform built in Java,HTML,CSS,JavaScript,Tomcat,JQuery,Bootstrap",image:"onlinecompiler.jpg",url:"https://youtu.be/C_6xLOwJ6VM"},{title:"IJ GUI Tool",category:"GUI Tool which connects to Apache-Derby database(Java,Swing,AWT and Apache-Derby.)",image:"IJGUITool.jpg",url:"https://youtu.be/FXL4uAAHDXk"},{title:"Web Services",category:"Web application that converts High resolution video to low resolution video,URL to PDF,MySQL to Excel file",image:"webservices.jpg",url:" https://github.com/vishalgupta30699/Web-Services"}]}}},n}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(u,{data:this.state.resumeData.main}),l.a.createElement(p,{data:this.state.resumeData.main}),l.a.createElement(h,{data:this.state.resumeData.resume}),l.a.createElement(f,{data:this.state.resumeData.portfolio}),l.a.createElement(v,{data:this.state.resumeData.main}),l.a.createElement(d,{data:this.state.resumeData.main}))}}]),t}(n.Component),b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(l.a.createElement(g,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/portfolio",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/portfolio","/service-worker.js");b?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):w(e)}))}}()},9:function(e,a,t){e.exports=t(20)}},[[9,1,2]]]);
//# sourceMappingURL=main.5fb68cba.chunk.js.map