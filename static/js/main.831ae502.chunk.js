(this["webpackJsonpintl-translations"]=this["webpackJsonpintl-translations"]||[]).push([[0],{303:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n(0),r=n.n(i),s=n(10),o=n.n(s),c=n(39),l=n.n(c),d=n(82),u=n(52),b=n(42),g=n(18),m=n(28),j=n(362),p=n(361),h=n(360),O=n(366),x=n(370),f=n(364),v=n(77),y=n.n(v),w=n(363),L=n(305),S=n(368),R=n(79),C=n.n(R),k=n(306),N=n(56),T=n.n(N),D=n(80),I=n.n(D),B=n(81),A=n.n(B),E=n(78),H=n.n(E),P=n(365),_=n(367),W=n(359),M=n(349),q=n(14),z=n(64),F=n.n(z),J=n(83),G=n(353),U=n(371),K=n(70),V=n.n(K),Y=n(71),X=n.n(Y),Q=n(69),$=n.n(Q),Z=n(352),ee=n(35),te=n.n(ee),ne=Object(M.a)((function(e){return{root:{color:e.palette.text.secondary},content:{color:e.palette.text.secondary,borderTopRightRadius:e.spacing(2),borderBottomRightRadius:e.spacing(2),paddingRight:e.spacing(1),fontWeight:e.typography.fontWeightMedium,"$expanded > &":{fontWeight:e.typography.fontWeightRegular}},group:{marginLeft:0,"& $content":{paddingLeft:e.spacing(2)}},expanded:{},selected:{},label:{fontWeight:"inherit",color:"inherit"},labelRoot:{display:"flex",alignItems:"center",padding:e.spacing(.5,0)},labelIcon:{marginRight:e.spacing(1)},labelText:{fontWeight:"inherit",flexGrow:1}}}));function ae(e){var t=ne(),n=e.labelText,i=e.labelIcon,r=e.labelInfo,s=e.color,o=e.bgColor,c=e.badge,l=Object(J.a)(e,["labelText","labelIcon","labelInfo","color","bgColor","badge"]);return Object(a.jsx)(U.a,Object(g.a)({label:Object(a.jsxs)("div",{className:t.labelRoot,children:[Object(a.jsx)(Z.a,{variant:"dot",color:"error",invisible:!c,anchorOrigin:{vertical:"top",horizontal:"left"},children:Object(a.jsx)(i,{color:"inherit",className:t.labelIcon})}),Object(a.jsx)(L.a,{variant:"body2",className:t.labelText,children:n}),Object(a.jsx)(L.a,{variant:"caption",color:"inherit",children:r})]}),style:{"--tree-view-color":s,"--tree-view-bg-color":o},classes:{root:t.root,content:t.content,expanded:t.expanded,selected:t.selected,group:t.group,label:t.label}},l))}var ie=Object(M.a)({root:{height:264,flexGrow:1,maxWidth:400}});function re(e){var t=e.values,n=e.data,i=void 0===n?[]:n,r=e.onSelect,s=e.selected,o=Object.keys(t),c=ie(),l=function(e){return Object(a.jsx)(ae,{nodeId:e.id,badge:!o.every((function(n){return Object.keys(t[n]).filter((function(t){return e.id.includes(t)||t.includes(e.id)})).filter((function(e){return!te.a.get(i,"".concat(n,".").concat(e,".children"))})).every((function(e){return t[n][e]}))})),labelText:e.name,labelIcon:Array.isArray(e.children)?$.a:T.a,children:d(e.children)},e.id)},d=function(e){return Array.isArray(e)?e.map((function(e){return l(e)})):null};return Object(a.jsx)(G.a,{className:c.root,onNodeSelect:function(e,t){(function(e,t,n){var a;return e.some((function e(i){return i[t]===n?(a=i,!0):Array.isArray(i.children)&&i.children.some(e)})),a})(i,"id",t).children||r(t)},selected:s,defaultCollapseIcon:Object(a.jsx)(V.a,{}),defaultExpandIcon:Object(a.jsx)(X.a,{}),defaultEndIcon:Object(a.jsx)("div",{style:{width:24}}),children:d(i)})}var se=n(72),oe=n(73),ce=n.n(oe);function le(e){return(0,e.children)(Object(g.a)(Object(g.a)({},e),{},{download:function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,a,i,r,s=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:{},n=new ce.a,a=new Date,i=[a.getMonth()+1,a.getDate(),a.getFullYear()].join("/")+" "+[a.getHours(),a.getMinutes(),a.getSeconds()].join(":"),Object.keys(t).forEach((function(e){n.file("".concat(e,".json"),JSON.stringify(t[e]))})),e.next=7,n.generateAsync({type:"blob"});case 7:r=e.sent,Object(se.saveAs)(r,"".concat(i,".zip"));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}))}var de=n(354),ue=n(358),be=n(357),ge=n(355),me=n(356),je=Object(M.a)((function(e){return{rowDone:{background:"rgba(0, 220, 0, 0.1)"},rowUndone:{background:"rgba(220, 0, 0, 0.1)"},rowHeader:{background:"rgba(200, 200, 200, 0.2)"}}}));function pe(e){var t=e.data,n=je(),i=Object.keys(t).map((function(e){var n=Object.keys(t[e]),a=n.length,i=n.filter((function(n){return t[e][n]})).length;return{id:e,name:e,numberOfKeys:a,numberOfTranslations:i}}));return Object(a.jsxs)(de.a,{size:"small","aria-label":"a dense table",children:[Object(a.jsx)(ge.a,{children:Object(a.jsxs)(me.a,{className:n.rowHeader,children:[Object(a.jsx)(be.a,{children:"Langs"}),Object(a.jsx)(be.a,{align:"right",children:"Number Of Keys"}),Object(a.jsx)(be.a,{align:"right",children:"Number Of Translations"}),Object(a.jsx)(be.a,{align:"right",children:"Translated"})]})}),Object(a.jsx)(ue.a,{children:i.map((function(e){var t=e.numberOfTranslations/e.numberOfKeys===1;return Object(a.jsxs)(me.a,{className:t?n.rowDone:n.rowUndone,children:[Object(a.jsx)(be.a,{component:"th",scope:"row",children:Object(a.jsx)("b",{children:e.name})}),Object(a.jsx)(be.a,{align:"right",children:e.numberOfKeys}),Object(a.jsx)(be.a,{align:"right",children:e.numberOfTranslations}),Object(a.jsxs)(be.a,{align:"right",children:[Math.round(e.numberOfTranslations/e.numberOfKeys*100)," ","%"]})]},"stats-lang-data-".concat(e.id))}))})]})}var he=Object(M.a)((function(e){return{rowDone:{background:"rgba(0, 220, 0, 0.1)"},rowUndone:{background:"rgba(220, 0, 0, 0.1)"},rowHeader:{background:"rgba(200, 200, 200, 0.2)"}}}));function Oe(e){var t=e.data,n=e.setSelected,i=he(),r=Object.keys(t[Object.keys(t)[0]]),s=Object.keys(t);return Object(a.jsxs)(de.a,{size:"small","aria-label":"a dense table",children:[Object(a.jsx)(ge.a,{children:Object(a.jsxs)(me.a,{className:i.rowHeader,children:[Object(a.jsx)(be.a,{children:"Keys"}),s.map((function(e){return Object(a.jsx)(be.a,{children:e})}))]})}),Object(a.jsx)(ue.a,{children:r.map((function(e){return Object(a.jsxs)(me.a,{children:[Object(a.jsx)(be.a,{align:"left",style:{verticalAlign:"top"},onClick:function(){n(e)},children:Object(a.jsx)("b",{children:e})}),s.map((function(n){return Object(a.jsx)(be.a,{align:"left",children:t[n][e]})}))]},"preview-lang-data-".concat(e))}))})]})}function xe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={};Object.keys(e).forEach((function(n){te.a.set(t,n,e[n])}));var n=function e(t,n){return"string"===typeof t?{children:null,value:t}:{children:Object.keys(t).map((function(a){var i=n?"".concat(n,".").concat(a):a;return Object(g.a)({id:i,name:a},e(t[a],i))})),value:null}},a=n(t);return a.children}var fe=function(){return window.scrollTo(0,0)},ve=n(74),ye=n(75),we=n(76),Le=240,Se=Object(M.a)((function(e){return{root:{display:"flex"},drawer:Object(m.a)({},e.breakpoints.up("sm"),{width:Le,flexShrink:0}),appBarWithDrawer:Object(m.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(Le,"px)"),marginLeft:Le}),appBarWithoutDrawer:Object(m.a)({},e.breakpoints.up("sm"),{width:"100%",marginLeft:0}),menuButton:Object(m.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:Object(g.a)(Object(g.a)({},e.mixins.toolbar),{},{display:"flex",justifyContent:"center",alignItems:"center"}),drawerPaper:{width:Le},content:{flexGrow:1,padding:e.spacing(3)},title:{flexGrow:1}}}));var Re=function(e){var t=e.window,n=Se(),i=Object(q.a)(),s=r.a.useState(!1),o=Object(b.a)(s,2),c=o[0],v=o[1],R=r.a.useState("en"),N=Object(b.a)(R,2),D=N[0],B=N[1],E=r.a.useState(),M=Object(b.a)(E,2),z=M[0],J=M[1],G=r.a.useState({}),U=Object(b.a)(G,2),K=U[0],V=U[1],Y=r.a.useState(!1),X=Object(b.a)(Y,2),Q=X[0],$=X[1],Z=Object(W.a)(i.breakpoints.up("sm"));r.a.useEffect((function(){Z&&!c&&K&&K[D]&&v(!0)}),[Z,c,K,D]);var ee=function(){v(!c)},ne=Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:n.toolbar,children:Object.keys(K).toString()}),Object(a.jsx)(h.a,{}),K&&K[D]?Object(a.jsx)(re,{values:K,data:xe(K[D]),onSelect:function(e){J(e),fe()},selected:z}):null]}),ae=void 0!==t?function(){return t().document.body}:void 0;return Object(a.jsxs)("div",{className:n.root,children:[Object(a.jsx)(p.a,{}),Object(a.jsx)(j.a,{position:"fixed",className:c?n.appBarWithDrawer:n.appBarWithoutDrawer,children:Object(a.jsxs)(w.a,{children:[Object(a.jsx)(f.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:ee,className:n.menuButton,children:Object(a.jsx)(y.a,{})}),Object(a.jsxs)(L.a,{variant:"h6",noWrap:!0,className:n.title,children:[Object(a.jsx)(T.a,{})," intl-translations"]}),Object(a.jsx)(f.a,{color:"inherit","aria-label":"GitHub",href:"https://github.com/lybo/intl-translations",target:"_blank",children:Object(a.jsx)(H.a,{})})]})}),c?Object(a.jsx)("nav",{className:n.drawer,"aria-label":"mailbox folders",children:Z?Object(a.jsx)(x.a,{classes:{paper:n.drawerPaper},variant:"permanent",open:c,children:ne}):Object(a.jsx)(x.a,{container:ae,variant:"temporary",anchor:"rtl"===i.direction?"right":"left",open:c,onClose:ee,classes:{paper:n.drawerPaper},ModalProps:{keepMounted:!0},children:ne})}):null,Object(a.jsxs)("main",{className:n.content,children:[Object(a.jsx)("div",{className:n.toolbar}),z?Object(a.jsx)(k.a,{style:{padding:20,marginBottom:20},children:Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{style:{textAlign:"center"},children:Object(a.jsx)("b",{children:z})}),Object.keys(K).map((function(e){return Object(a.jsx)("div",{children:Object(a.jsx)(S.a,{id:"outlined-basic",label:e,variant:"outlined",size:"small",helperText:"translate in ".concat(e),margin:"normal",fullWidth:!0,multiline:!0,value:te.a.get(K[e],z),onChange:function(t,n){var a=JSON.parse(JSON.stringify(K));a[e][z]=t.target.value,V(a)}})},"lang-field-".concat(e))}))]})}):null,Object(a.jsxs)(k.a,{style:{padding:20,marginBottom:20},children:[K&&K[D]?Object(a.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:Object(a.jsx)(O.a,{color:"secondary",variant:"contained",size:"small",onClick:function(){B(null),V({}),v(!1),J(null),fe()},children:"Cancel the translation"})}):Object(a.jsxs)(P.a,{container:!0,spacing:10,children:[Object(a.jsxs)(P.a,{item:!0,xs:6,children:[Object(a.jsx)(L.a,{variant:"h6",component:"h2",gutterBottom:!0,align:"center",children:"Import languages"}),Object(a.jsx)(L.a,{style:{minHeight:100},variant:"body1",component:"div",gutterBottom:!0,align:"center",children:"Select the generated json files"}),Object(a.jsx)("br",{}),Object(a.jsxs)(O.a,{fullWidth:!0,color:"primary",variant:"contained",component:"label",children:["Upload JSON Files",Object(a.jsx)("input",{name:"files",type:"file",multiple:!0,hidden:!0,onChange:function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target,e.next=3,Promise.all(Object(d.a)(n.files).map((function(e){return new Promise((function(t,n){var a=new FileReader;a.onloadend=function(){try{console.log(e);var n=e.name.replace(".json","");t({lang:n,data:JSON.parse(a.result)})}catch(i){console.log("Please use .json!"),t()}},a.readAsText(e)}))})));case 3:a=e.sent,i=a.reduce((function(e,t){return Object(g.a)(Object(g.a)({},e),{},Object(m.a)({},t.lang,t.data))}),{}),console.log(a,i),B(Object.keys(i)[0]),V(i),v(!0);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()})]})]}),Object(a.jsxs)(P.a,{item:!0,xs:6,children:[Object(a.jsx)(L.a,{variant:"h6",component:"h2",gutterBottom:!0,align:"center",children:"Demo"}),Object(a.jsx)(L.a,{style:{minHeight:100},variant:"body1",component:"div",gutterBottom:!0,align:"center",children:"You can try out with 3 languages 'en', 'el' and 'es'"}),Object(a.jsx)("br",{}),Object(a.jsx)(O.a,{onClick:function(){var e={en:ve,el:ye,es:we};B("en"),V(e),v(!0),fe()},fullWidth:!0,color:"primary",variant:"contained",component:"label",children:"Try the sample"})]})]}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),K&&K[D]?Object(a.jsxs)(r.a.Fragment,{children:[Object(a.jsx)(pe,{data:K}),Object(a.jsx)("br",{}),Object(a.jsxs)(P.a,{container:!0,spacing:3,children:[Object(a.jsx)(P.a,{item:!0,xs:6,children:Object(a.jsx)(le,{children:function(e){var t=e.download;return Object(a.jsx)(O.a,{variant:"contained",color:"primary",size:"small",startIcon:Object(a.jsx)(C.a,{}),onClick:function(){t(K)},children:"Download"})}})}),Object(a.jsx)(P.a,{item:!0,xs:6,style:{display:"flex",justifyContent:"flex-end"},children:Object(a.jsxs)(O.a,{variant:"contained",color:"primary",size:"small",startIcon:Q?Object(a.jsx)(A.a,{}):Object(a.jsx)(I.a,{}),onClick:function(){$(!Q)},children:[Q?"Hide":"Show"," Preview"]})})]}),Object(a.jsx)("br",{}),Q?Object(a.jsx)(Oe,{data:K,setSelected:J}):null]}):null]}),Object(a.jsx)(L.a,{variant:"h4",component:"h1",align:"center",gutterBottom:!0,children:"intl-translations"}),Object(a.jsxs)(k.a,{style:{padding:20,marginBottom:20},children:[Object(a.jsx)(L.a,{variant:"h6",component:"h2",gutterBottom:!0,align:"center",children:"Translation editor for apps"}),Object(a.jsx)(P.a,{container:!0,spacing:2,children:Object(a.jsx)(P.a,{item:!0,xs:12,children:Object(a.jsxs)(P.a,{container:!0,justify:"center",spacing:2,children:[Object(a.jsx)(P.a,{item:!0,children:Object(a.jsxs)(k.a,{style:{padding:20},children:[Object(a.jsx)(L.a,{align:"center",gutterBottom:!0,paragraph:!0,children:"react-intl"}),Object(a.jsx)(O.a,{size:"small",variant:"contained",color:"primary",target:"_blank",href:"https://formatjs.io/docs/react-intl",children:"Details"})]})}),Object(a.jsx)(P.a,{item:!0,children:Object(a.jsxs)(k.a,{style:{padding:20},children:[Object(a.jsx)(L.a,{align:"center",gutterBottom:!0,paragraph:!0,children:"vue-intl"}),Object(a.jsx)(O.a,{size:"small",variant:"contained",color:"primary",target:"_blank",href:"https://formatjs.io/docs/vue-intl",children:"Details"})]})}),Object(a.jsx)(P.a,{item:!0,children:Object(a.jsxs)(k.a,{style:{padding:20},children:[Object(a.jsx)(L.a,{align:"center",gutterBottom:!0,paragraph:!0,children:"formatjs"}),Object(a.jsx)(O.a,{size:"small",variant:"contained",color:"primary",target:"_blank",href:"https://formatjs.io/docs/intl",children:"Details"})]})})]})})}),Object(a.jsx)("br",{}),Object(a.jsxs)(L.a,{variant:"body1",component:"div",gutterBottom:!0,align:"center",children:["This tool is meant to help developers who use"," ",Object(a.jsx)(_.a,{href:"https://www.npmjs.com/package/babel-plugin-react-intl-auto",target:"_blank",children:"babel-plugin-react-intl-auto"})," ","and"," ",Object(a.jsx)(_.a,{href:"https://www.npmjs.com/package/extract-react-intl-messages",target:"_blank",children:"extract-react-intl-messages"})]}),Object(a.jsx)("br",{})]}),Object(a.jsxs)(k.a,{style:{padding:20,marginBottom:20},children:[Object(a.jsx)(L.a,{variant:"h6",component:"h2",gutterBottom:!0,align:"center",children:"JSON format"}),Object(a.jsx)(L.a,{h3:!0,children:"english (en.json)"}),Object(a.jsx)(F.a,{language:"js",children:'\n{\n  "ComponentName.error": "Error",\n  "ComponentName.Success": "Success",\n  "ComponentName.SubComponentName.error": "Error",\n  "ComponentName.SubComponentName.Success": "Success"\n}\n            '}),Object(a.jsx)(L.a,{h3:!0,children:"greek (el.json)"}),Object(a.jsx)(F.a,{language:"js",children:'\n{\n  "ComponentName.error": "",\n  "ComponentName.Success": "",\n  "ComponentName.SubComponentName.error": "",\n  "ComponentName.SubComponentName.Success": ""\n}\n            '})]}),Object(a.jsxs)(k.a,{style:{padding:20,marginBottom:20},children:[Object(a.jsx)(L.a,{variant:"h6",component:"h2",gutterBottom:!0,align:"center",children:"Implemented with"}),Object(a.jsx)(L.a,{paragraph:!0,children:Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:[Object(a.jsx)(_.a,{href:"https://reactjs.org/",target:"_blank",children:"reactjs"})," "]}),Object(a.jsxs)("li",{children:[Object(a.jsx)(_.a,{href:"https://create-react-app.dev/",target:"_blank",children:"create-react-app"})," "]}),Object(a.jsxs)("li",{children:[Object(a.jsx)(_.a,{href:"https://material-ui.com/",target:"_blank",children:"material-ui"})," "]})]})})]})]})]})},Ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,373)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),r(e),s(e)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(Re,{})}),document.getElementById("root")),Ce()},74:function(e){e.exports=JSON.parse('{"Header.dashboard":"DashBoard","Header.login":"Log in","Header.logout":"Log out","Header.Drodown.myAccount":"My account","Header.Drodown.myActions":"My actions","Login.EMAIL_NOT_EXIST":"Email does not exist","Login.WRONG_PASSWORD":"Wrong password","Login.emailLabel":"Email address","Login.forgotPasswordLink":"Forgot password?","Login.passwordLabel":"Password","Login.signinButton":"Sign up","Login.signupLink":"Don\'t have an account? Sign Up","Login.title":"Sign in","Registration.EMAIL_IS_USED":"This email is already used","Registration.emailLabel":"Email address","Registration.forgotPassword":"Forgot password?","Registration.login":"Login","Registration.passwordLabel":"Password","Registration.signupButton":"Sign up","Registration.termConditionsError":"You have to read and agree to the terms and conditions","Registration.termConditionsHelpText":"Read all of it if you want to agree","Registration.termConditionsLabel":"Yes, I agree to terms and conditions","Registration.termConditionsText":"\\n                <p>\\n                Let Google help apps determine location. This means sending anonymous location data to Google, even when\\n                no apps are running.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non dictum sem, in\\n                efficitur tortor. Fusce semper convallis turpis, eget suscipit libero blandit ut. Vestibulum consectetur\\n                ex ac turpis egestas, sit amet ultrices lectus feugiat. Donec fringilla nisi scelerisque interdum\\n                pellentesque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer ac nibh sit amet\\n                urna finibus blandit a vitae erat. Cras ultrices rutrum magna efficitur dignissim. Quisque faucibus nec\\n                risus et imperdiet. Duis at ligula ac nibh vehicula rutrum. Vestibulum id lectus in nibh sagittis\\n                elementum. Sed porttitor massa erat, nec placerat diam viverra et. Class aptent taciti sociosqu ad\\n                </p>\\n                <p>\\n                litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse vel magna arcu. Pellentesque ac\\n                leo vel magna dictum sagittis. Vestibulum semper gravida iaculis. Maecenas nec elit fermentum, elementum\\n                odio vel, facilisis risus. Maecenas at ultricies nunc. Sed enim est, bibendum id semper vel, euismod et\\n                eros. Donec sollicitudin a urna et mattis. Nunc luctus suscipit leo nec ullamcorper. Phasellus vel nisi\\n                at augue cursus tristique nec sit amet dui. Nunc ac ligula mattis, feugiat urna id, mollis ante. Sed\\n                maximus lacus lacus, dignissim ultrices odio tempus in. Donec nec consectetur libero, et aliquet est. In\\n                in ullamcorper tellus, sed porta metus. Phasellus tristique, mauris vel volutpat bibendum, erat risus\\n                interdum libero, in interdum nibh lacus in lorem. Lorem ipsum dolor sit amet, consectetur adipiscing\\n                elit. Proin interdum suscipit augue non feugiat. Morbi sollicitudin lacus in nunc sodales aliquet.\\n                </p>\\n                <p>\\n                Vestibulum id purus diam. Nam elementum tincidunt augue in sollicitudin. Lorem ipsum dolor sit amet,\\n                consectetur adipiscing elit. Quisque mattis leo felis, ut pretium ante placerat ut. In hac habitasse\\n                platea dictumst. Nunc lobortis vel ipsum et tempor. Proin vitae enim mauris. Nunc sit amet molestie\\n                magna. Nunc vitae felis eleifend, ultricies nisi vitae, blandit nisi. Etiam consequat et sem vel\\n                volutpat. Curabitur id cursus tellus. Sed varius sit amet ipsum at viverra. Cras lobortis vel sem ut\\n                viverra. Duis maximus nisl tempus elementum sagittis. Maecenas ultrices purus at commodo eleifend.\\n                Maecenas non sodales purus. Sed id est vehicula, egestas massa quis, consectetur velit. Donec bibendum\\n                magna vel augue consequat, ultrices feugiat leo pharetra. Donec molestie ultrices tellus quis semper.\\n                Aenean non lorem leo. Phasellus purus risus, gravida et varius nec, pellentesque non neque. Nullam\\n                condimentum aliquet erat ac porttitor. Cras molestie faucibus ante, ac imperdiet nulla eleifend vel.\\n                Etiam rhoncus euismod erat non rutrum. Ut id velit ut est imperdiet aliquet vel ut orci. Nunc mattis mi\\n                sollicitudin, egestas augue et, hendrerit nibh.\\n                </p>\\n    ","Registration.termConditionsTextAgree":"Agree","Registration.termConditionsTextDisagree":"Disagree","Registration.termConditionsTitle":"Terms and conditions","Registration.title":"Sign up"}')},75:function(e){e.exports=JSON.parse('{"Header.dashboard":"","Header.login":"\u0395\u03af\u03c3\u03bf\u03b4\u03bf\u03c2","Header.logout":"\u0388\u03be\u03bf\u03b4\u03bf\u03c2","Header.Drodown.myAccount":"","Header.Drodown.myActions":"","Login.EMAIL_NOT_EXIST":"","Login.WRONG_PASSWORD":"","Login.emailLabel":"","Login.forgotPasswordLink":"","Login.passwordLabel":"","Login.signinButton":"","Login.signupLink":"","Login.title":"","Registration.EMAIL_IS_USED":"","Registration.emailLabel":"","Registration.forgotPassword":"","Registration.login":"","Registration.passwordLabel":"","Registration.signupButton":"","Registration.termConditionsError":"","Registration.termConditionsHelpText":"","Registration.termConditionsLabel":"","Registration.termConditionsText":"","Registration.termConditionsTextAgree":"","Registration.termConditionsTextDisagree":"","Registration.termConditionsTitle":""}')},76:function(e){e.exports=JSON.parse('{"Header.dashboard":"","Header.login":"","Header.logout":"","Header.Drodown.myAccount":"","Header.Drodown.myActions":"","Login.EMAIL_NOT_EXIST":"","Login.WRONG_PASSWORD":"","Login.emailLabel":"","Login.forgotPasswordLink":"","Login.passwordLabel":"","Login.signinButton":"","Login.signupLink":"","Login.title":"","Registration.EMAIL_IS_USED":"","Registration.emailLabel":"","Registration.forgotPassword":"","Registration.login":"","Registration.passwordLabel":"","Registration.signupButton":"","Registration.termConditionsError":"","Registration.termConditionsHelpText":"","Registration.termConditionsLabel":"","Registration.termConditionsText":"","Registration.termConditionsTextAgree":"","Registration.termConditionsTextDisagree":"","Registration.termConditionsTitle":""}')}},[[303,1,2]]]);
//# sourceMappingURL=main.831ae502.chunk.js.map