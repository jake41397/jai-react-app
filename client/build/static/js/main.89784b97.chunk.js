(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{184:function(e,t,a){e.exports=a(429)},191:function(e,t,a){},192:function(e,t,a){},199:function(e,t){},201:function(e,t){},233:function(e,t){},234:function(e,t){},429:function(e,t,a){"use strict";a.r(t);a(103),a(104),a(185),a(186);var n=a(1),r=a.n(n),o=a(43),l=a.n(o),i=(a(191),a(8)),c=a(7),s=a(15),u=a(14),m=a(16),h=a(4),p=a(434),b=a(435),d=a(436);a(192),a(69);var g,v,E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"jumbotron",Style:"background-color: #1C1616"},r.a.createElement("h1",{className:"text-center",Style:"color: #4482BE"},"Welcome to the JAI-Composer!"),r.a.createElement("h2",{className:"text-center",Style:"color: #4482BE"},"A Senior Design project sponsored by Dr. Richard Leinecker")),r.a.createElement("div",null,r.a.createElement("h2",{className:"text-center",Style:"color: #4482BE"},"Our Vision"),r.a.createElement("p",{className:"text-center"}," The JAI-Composer is an AI that assists in creating electronic dance music. Our goal with the composer was to create a simple and accessible tool to help anyone create music, not just musicians. We started the development of the JAI-Composer with the goal of creating an Application that would help musicians and non-musicians in several ways.")),r.a.createElement("div",null,r.a.createElement("h2",{className:"text-center",Style:"color: #4482BE"},"Music Creation"),r.a.createElement("p",{className:"text-center"}," The JAI-Composer helps anyone create electronic music. Our Magenta powered drum model allows users to create a simple drum pattern, which is then given to the JAI-Composer. The JAI-Composer will then use machine learning to create a longer drum beat that was inspired by what the user created.")))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={login_name:"",login_password:"",login_completed:!1,token:"",signInError:""},a.onChangeLoginname=a.onChangeLoginname.bind(Object(h.a)(Object(h.a)(a))),a.onChangePassword=a.onChangePassword.bind(Object(h.a)(Object(h.a)(a))),a.onSubmit=a.onSubmit.bind(Object(h.a)(Object(h.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"onChangeLoginname",value:function(e){this.setState({login_name:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({login_password:e.target.value})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state.login_name,n=this.state.login_password;this.setState({login_name:"",login_password:"",signInError:""}),fetch("http://localhost:5000/api/account/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a,password:n})}).then(function(e){return e.json()}).then(function(e){e.success?(!function(e,t){e||console.error("Error: Key is missing");try{localStorage.setItem(e,JSON.stringify(t))}catch(a){console.error(a)}}("JAIsessionToken",{token:e.token}),window.appComponent.state.token=e.token,t.setState({signInError:e.message,isLoading:!1,email:"",password:"",token:""}),window.appComponent.componentDidMount(),window.appComponent.render(),t.props.history.push("/")):t.setState({signInError:e.message,isLoading:!1})})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{style:{marginTop:10}},r.a.createElement("h3",null,"Login"),this.state.signInError?r.a.createElement("p",null,this.state.signInError):null,r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email "),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.login_name,onChange:this.onChangeLoginname})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password "),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.login_password,onChange:this.onChangePassword})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Login",className:"btn btn-primary"}))))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={email:"",password:"",isLoading:!1,signUpError:""},a.onChangeEmail=a.onChangeEmail.bind(Object(h.a)(Object(h.a)(a))),a.onChangePassword=a.onChangePassword.bind(Object(h.a)(Object(h.a)(a))),a.onSubmit=a.onSubmit.bind(Object(h.a)(Object(h.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state.email,n=this.state.password;this.setState({email:"",password:"",signUpError:"",isLoading:!0}),fetch("http://localhost:5000/api/account/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a,password:n})}).then(function(e){return e.json()}).then(function(e){e.success?t.setState({signUpError:e.message,isLoading:!1,email:"",password:""}):t.setState({signUpError:e.message,isLoading:!1})})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{style:{marginTop:10}},r.a.createElement("h3",null,"Register"),this.state.signUpError?r.a.createElement("p",null,this.state.signUpError):null,r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email "),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.email,onChange:this.onChangeEmail})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password "),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.password,onChange:this.onChangePassword})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:this.state.isLoading?"Loading...":"Register",className:"btn btn-danger"}))))}}]),t}(n.Component),C=a(100),j=a.n(C),O=a(174),y=a(54),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(h.a)(Object(h.a)(a))),a.state={bgColor:"#1C1616",toggle:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(e){e.preventDefault();var t=this.props.clickCallback;this.state.toggle?this.setState({bgColor:"#1C1616",toggle:!1}):this.setState({bgColor:"#4482BE",toggle:!0}),t(e,"Reporting for duty sir!",this.props.pitch,this.props.QTS,this.props.QTE,this.state.toggle)}},{key:"render",value:function(){return r.a.createElement("div",{className:"btn-group mr-2 mb-2",role:"group","aria-label":"First group"},r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:this.handleClick,"data-toggle":"button",style:{backgroundColor:this.state.bgColor}},"drum pitch: ",this.props.pitch))}}]),t}(r.a.Component),S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleNoteClick=a.handleNoteClick.bind(Object(h.a)(Object(h.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleNoteClick",value:function(e,t,a,n,r,o){e.preventDefault(),(0,this.props.testCallback)(e,t,a,n,r,o)}},{key:"render",value:function(){var e=r.a.createElement(w,{pitch:this.props.pitch,clickCallback:this.handleNoteClick,QTS:0,QTE:1}),t=r.a.createElement(w,{pitch:this.props.pitch,clickCallback:this.handleNoteClick,QTS:2,QTE:3}),a=r.a.createElement(w,{pitch:this.props.pitch,clickCallback:this.handleNoteClick,QTS:4,QTE:5}),n=r.a.createElement(w,{pitch:this.props.pitch,clickCallback:this.handleNoteClick,QTS:6,QTE:7});return r.a.createElement("div",{className:"btn-toolbar",role:"toolbar","aria-label":"Toolbar with button groups"},e,t,a,n)}}]),t}(r.a.Component),N=a(67),T=a(99),I=a.n(T),L=a(179),x=a.n(L),J=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={value:.5},a.handleChange=function(e,t){a.setState({value:t}),(0,a.props.temperatureCallback)(e,t)},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state.value;return r.a.createElement("div",{className:e.root},r.a.createElement(I.a,{id:"label"},"Temperature:"),r.a.createElement(x.a,{classes:{container:e.slider},value:t,"aria-labelledby":"label",onChange:this.handleChange}))}}]),t}(r.a.Component),A=Object(N.withStyles)({root:{width:300},slider:{padding:"22px 0px"}})(J),D=a(102),q=a.n(D),P=a(182),M=a.n(P),Q=a(101),_=a.n(Q),z=a(180),B=a.n(z),R=a(181),U=a.n(R),G=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={value:"2"},a.handleChange=function(e){a.setState({value:e.target.value}),(0,a.props.radioCallback)(e,e.target.value)},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(B.a,{component:"fieldset",className:e.formControl},r.a.createElement(U.a,{component:"legend"},"Generation playback length:"),r.a.createElement(M.a,{"aria-label":"Gender",name:"gender1",className:e.group,value:this.state.value,onChange:this.handleChange},r.a.createElement(_.a,{value:"2",control:r.a.createElement(q.a,null),label:"2 Measures"}),r.a.createElement(_.a,{value:"4",control:r.a.createElement(q.a,null),label:"4 Measures"}))))}}]),t}(r.a.Component),W=Object(N.withStyles)(function(e){return{root:{display:"flex"},formControl:{margin:3*e.spacing.unit},group:{margin:"".concat(e.spacing.unit,"px 0")}}})(G),F=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleSlider=a.handleSlider.bind(Object(h.a)(Object(h.a)(a))),a.handleRadio=a.handleRadio.bind(Object(h.a)(Object(h.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleSlider",value:function(e,t){e.preventDefault(),(0,this.props.tempCallback)(e,t)}},{key:"handleRadio",value:function(e,t){e.preventDefault(),(0,this.props.measureCallback)(e,t)}},{key:"render",value:function(){var e=r.a.createElement(A,{temperatureCallback:this.handleSlider}),t=r.a.createElement(W,{radioCallback:this.handleRadio});return r.a.createElement("div",null,r.a.createElement("div",null,e),r.a.createElement("div",null,t))}}]),t}(r.a.Component),K=new Set,V=.5,$=2;function H(){var e,t=[],a=!0,n=!1,r=void 0;try{for(var o,l=K[Symbol.iterator]();!(a=(o=l.next()).done);a=!0){var i=o.value;e=JSON.parse(i),t.push(e)}}catch(c){n=!0,r=c}finally{try{a||null==l.return||l.return()}finally{if(n)throw r}}return{notes:t,quantizationInfo:{stepsPerQuarter:4},tempos:[{time:0,qpm:120}],totalQuantizedSteps:8}}function X(){return(X=Object(O.a)(j.a.mark(function e(){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return g=new y.MusicRNN("https://storage.googleapis.com/magentadata/js/checkpoints/music_rnn/drum_kit_rnn"),e.next=3,g.initialize();case 3:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var Y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).testSound=a.testSound.bind(Object(h.a)(Object(h.a)(a))),a.changeTemperature=a.changeTemperature.bind(Object(h.a)(Object(h.a)(a))),a.changeMeasures=a.changeMeasures.bind(Object(h.a)(Object(h.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"testSound",value:function(e,t,a,n,r,o){if(e.preventDefault(),!1===o){var l='{ "pitch" : '+a+',"isDrum" : '+!0+', "quantizedStartStep" : '+n+',"quantizedEndStep" : '+r+"}";K.add(l),console.log(K.has(l));var i={notes:[{pitch:a,quantizedStartStep:0,quantizedEndStep:1,isDrum:!0}],quantizationInfo:{stepsPerQuarter:4},tempos:[{time:0,qpm:120}],totalQuantizedSteps:1};v.start(i)}else{l='{ "pitch" : '+a+',"isDrum" : '+!0+', "quantizedStartStep" : '+n+',"quantizedEndStep" : '+r+"}";K.delete(l)}}},{key:"testNoteSequence",value:function(){var e=H();v.start(e);var t=y.sequenceProtoToMidi(e);console.log(t)}},{key:"jaiGenerate",value:function(e){e.preventDefault();var t=H(),a=new y.Player;g.continueSequence(t,16*$,V).then(function(e){return a.start(e)})}},{key:"changeTemperature",value:function(e,t){e.preventDefault(),V=t/60}},{key:"changeMeasures",value:function(e,t){e.preventDefault(),$=t}},{key:"render",value:function(){!function(){X.apply(this,arguments)}(),v=new y.Player;var e=[{pitch:41},{pitch:42},{pitch:43},{pitch:44},{pitch:45},{pitch:46},{pitch:47},{pitch:48}],t=r.a.createElement(S,{pitch:e[0].pitch,testCallback:this.testSound}),a=r.a.createElement(S,{pitch:e[1].pitch,testCallback:this.testSound}),n=r.a.createElement(S,{pitch:e[2].pitch,testCallback:this.testSound}),o=r.a.createElement(S,{pitch:e[3].pitch,testCallback:this.testSound}),l=r.a.createElement(S,{pitch:e[4].pitch,testCallback:this.testSound}),i=r.a.createElement(S,{pitch:e[5].pitch,testCallback:this.testSound}),c=r.a.createElement(S,{pitch:e[6].pitch,testCallback:this.testSound}),s=r.a.createElement(S,{pitch:e[7].pitch,testCallback:this.testSound}),u=r.a.createElement(F,{tempCallback:this.changeTemperature,measureCallback:this.changeMeasures});return r.a.createElement("div",null,r.a.createElement("div",{className:"btn-toolbar",role:"toolbar","aria-label":"Toolbar with button groups"},t),r.a.createElement("div",{className:"btn-toolbar",role:"toolbar","aria-label":"Toolbar with button groups"},a),r.a.createElement("div",{className:"btn-toolbar",role:"toolbar","aria-label":"Toolbar with button groups"},n),r.a.createElement("div",{className:"btn-toolbar",role:"toolbar","aria-label":"Toolbar with button groups"},o),r.a.createElement("div",{className:"btn-toolbar",role:"toolbar","aria-label":"Toolbar with button groups"},l),r.a.createElement("div",{className:"btn-toolbar",role:"toolbar","aria-label":"Toolbar with button groups"},i),r.a.createElement("div",{className:"btn-toolbar",role:"toolbar","aria-label":"Toolbar with button groups"},c),r.a.createElement("div",{className:"btn-toolbar",role:"toolbar","aria-label":"Toolbar with button groups"},s),r.a.createElement("p",null,"Let's make some music!"),r.a.createElement("div",null,u),r.a.createElement("button",{onClick:this.testNoteSequence},"test sequence"),r.a.createElement("button",{onClick:this.jaiGenerate},"Jai generate"))}}]),t}(n.Component),Z=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={isLoading:!0,token:"",signUpError:"",signInError:"",masterError:""},a.render=a.render.bind(Object(h.a)(Object(h.a)(a))),a.logout=a.logout.bind(Object(h.a)(Object(h.a)(a))),window.appComponent=Object(h.a)(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=function(e){if(!e)return null;try{var t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(a){return null}}("JAIsessionToken");if(t&&t.token){var a=t.token;fetch("http://localhost:5000/api/account/verify?token="+a).then(function(e){return e.json()}).then(function(t){t.success?e.setState({token:a,isLoading:!1}):e.setState({isLoading:!1})})}else this.setState({isLoading:!1,token:""})}},{key:"logout",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.token;if(t)return r.a.createElement("div",null,r.a.createElement("p",null,"Loading..."));var n=r.a.createElement("li",{className:"navbar-item",Style:"color:#ffffff"},r.a.createElement("a",{class:"nav-link disabled",Style:"color:#7f7f7f",href:"/"},"         Logged in")),o=[r.a.createElement("li",{className:"navbar-item"},r.a.createElement(p.a,{to:"/login",className:"nav-link",Style:"color: #4482BE"},"Login")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(p.a,{to:"/register",className:"nav-link",Style:"color: #4482BE"},"Register"))];return a?r.a.createElement(b.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light navbar-custom",height:"400",Style:"background-color: #1c1716"},r.a.createElement("a",{className:"navbar-brand",href:"/"},r.a.createElement("img",{src:window.location.origin+"/Images/square.png",width:"120",height:"120",class:"d-inline-block align-top",alt:"JAI Composer Logo"}),r.a.createElement("img",{src:window.location.origin+"/Images/JAI.png",width:"128",height:"128",class:"d-inline-block",alt:"JAI Composer Logo"})),r.a.createElement(p.a,{to:"/",className:"navbar-left"}),r.a.createElement("div",{className:"collpase navbar-collapse"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"navbar-item"},r.a.createElement(p.a,{to:"/compose",className:"nav-link",Style:"color: #4482BE"},"Compose")),n))),r.a.createElement("br",null),r.a.createElement(d.a,{path:"/",exact:!0,component:E}),r.a.createElement(d.a,{path:"/login",component:f}),r.a.createElement(d.a,{path:"/register",component:k}),r.a.createElement(d.a,{path:"/compose",component:Y}))):r.a.createElement(b.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light navbar-custom",height:"400",Style:"background-color: #1c1716"},r.a.createElement("a",{className:"navbar-brand",href:"/"},r.a.createElement("img",{src:window.location.origin+"/Images/square.png",width:"120",height:"120",class:"d-inline-block align-top",alt:"JAI Composer Logo"}),r.a.createElement("img",{src:window.location.origin+"/Images/JAI.png",width:"128",height:"128",class:"d-inline-block",alt:"JAI Composer Logo"})),r.a.createElement(p.a,{to:"/",className:"navbar-left"}),r.a.createElement("div",{className:"collpase navbar-collapse"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},o,r.a.createElement("li",{className:"navbar-item"},r.a.createElement(p.a,{to:"/compose",className:"nav-link",Style:"color: #4482BE"},"Compose"))))),r.a.createElement("br",null),r.a.createElement(d.a,{path:"/",exact:!0,component:E}),r.a.createElement(d.a,{path:"/login",component:f}),r.a.createElement(d.a,{path:"/register",component:k}),r.a.createElement(d.a,{path:"/compose",component:Y})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[184,1,2]]]);
//# sourceMappingURL=main.89784b97.chunk.js.map