(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{403:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(1),s=a.n(o),c=a(521),l=a.n(c),i=a(129),m="http://resources.jetbrains.com/storage/products/research/devecosystem-2019/img/meta/preview.png";function u(e){var t=e.i18n,a=e.pagePath,n=e.description,o=e.meta,s=e.keywords,c=e.title,i=t.language.substr(0,2),u=n||t._({id:"Almost 7,000 developers share their insights on modern technologies, programming languages, frameworks, and tools of choice for software development."}),d=t._({id:"The state of Developer Ecosystem in 2019 Infographic"}),p=c?"".concat(c," 2019 - ").concat(d):d,w="https://jetbrains.com".concat(a);return r.a.createElement(l.a,{htmlAttributes:{lang:i},title:p,meta:[{name:"description",content:u},{name:"image",content:m},{itemprop:"name",content:p},{itemprop:"description",content:u},{itemprop:"image",content:m},{property:"og:title",content:p},{property:"og:image",content:m},{property:"og:description",content:u},{property:"og:site_name",content:"JetBrains"},{property:"og:type",content:"website"},{property:"og:url",content:w},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:site",content:"@jetbrains"},{name:"twitter:title",content:p},{name:"twitter:description",content:u},{name:"twitter:creator",content:"@jetbrains"},{name:"twitter:image:src",content:m}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(o)},r.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),r.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),r.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),r.a.createElement("script",null,"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','GTM-5P98')"))}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string},t.a=Object(i.withI18n)()(u)},404:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(1),s=a.n(o),c=(a(357),a(129)),l=(a(407),a(130),a(96),a(217),a(218),a(18)),i=a(19),m=a(20),u=a(21),d=a(54),p=a(22),w=a(35),h=a(148),f=a(402),b=a(532),g=a(408),v=a(80),j=(a(362),a(438)),y=function(e){function t(e){var a;return Object(l.a)(this,t),a=Object(m.a)(this,Object(u.a)(t).call(this,e)),Object(w.a)(Object(d.a)(a),"handleShowPopup",function(){return a.setState({showPopup:!0})}),Object(w.a)(Object(d.a)(a),"handleHidePopup",function(){return a.setState({showPopup:!1})}),Object(w.a)(Object(d.a)(a),"handleChangeLanguage",function(){var e=a.state.language.value,t=a.props,n=t.currentLanguageCode,r=t.location;n===e?a.handleHidePopup():r.pathname.includes("/".concat(n,"/"))?window.location="en-us"===e?"".concat(r.origin,"/").concat(r.pathname.replace("/".concat(n,"/"),"")):"".concat(r.origin).concat(r.pathname.replace("/".concat(n,"/"),"/".concat(e,"/"))):window.location="".concat(r.origin,"/").concat(e).concat(r.pathname)}),Object(w.a)(Object(d.a)(a),"handleSelectChange",function(e){return a.setState({language:e})}),Object(w.a)(Object(d.a)(a),"getLanguagesOptions",function(){return a.props.languages.map(function(e){return{label:Object(v.getPrettyLanguageNameByCode)(e),value:e}})}),a.state={showPopup:!1,language:{label:Object(v.getPrettyLanguageNameByCode)(e.currentLanguageCode),value:e.currentLanguageCode}},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.language,t=this.props.currentLanguageCode;return r.a.createElement(c.I18nProvider,{language:e.value,catalogs:v.catalogs},r.a.createElement(f.a,{className:"wt-col-inline",mode:"nude",size:"s",theme:"dark",icon:r.a.createElement(h.a,null),onClick:this.handleShowPopup},Object(v.getPrettyLanguageNameByCode)(t)),r.a.createElement(b.b,{isOpen:this.state.showPopup,onRequestClose:this.handleHidePopup},r.a.createElement(g.a,{className:"language-picker-popup"},r.a.createElement("h3",{className:"wt-h3 wt-offset-top-24 wt-row wt-row_align-items_center wt-row_justify_between"},r.a.createElement(c.Trans,{id:"Choose a language"}),r.a.createElement(b.a,null)),r.a.createElement(j.a,{className:"wt-offset-top-24 language-picker-select",options:this.getLanguagesOptions(),value:e,onChange:this.handleSelectChange}),r.a.createElement(f.a,{onClick:this.handleChangeLanguage,className:"wt-offset-top-24 language-picker-button"},r.a.createElement(c.Trans,{id:"Choose"})))))}}]),t}(n.Component),E=Object(c.withI18n)()(function(e){var t=e.i18n,a=e.location;return r.a.createElement("header",{className:"header wt-section_bg_dark wt-section_theme_dark"},r.a.createElement("div",{className:"wt-container"},r.a.createElement("div",{className:"wt-row wt-row_size_m wt-row_justify_between wt-row_align-items_center"},r.a.createElement("div",{className:"wt-col-2"},r.a.createElement("a",{href:"/"},r.a.createElement("div",{className:"jetbrains-logo _size-3 _logo-jetbrains-square"}))),r.a.createElement("div",{className:"wt-col-inline"},r.a.createElement("div",{className:"wt-row wt-row_size_s wt-row_align-items_center wt-text-2 wt-text-2_theme_dark"},r.a.createElement("div",{className:"wt-col-inline"},r.a.createElement("a",{className:"wt-link wt-link_theme_dark wt-link_hardness_average",href:"https://www.jetbrains.com/research/devecosystem-2017/"},"2017")),r.a.createElement("div",{className:"wt-col-inline"},"|"),r.a.createElement("div",{className:"wt-col-inline"},r.a.createElement("a",{className:"wt-link wt-link_theme_dark wt-link_hardness_average",href:"https://www.jetbrains.com/research/devecosystem-2018/"},"2018")),r.a.createElement(y,{currentLanguageCode:t._language,location:a,languages:v.languages}))))))}),O=(a(363),a(364),a(533),a(365),a(46)),_=a(3),k=a.n(_),N=a(483),C=a.n(N),T=a(24),S=(a(431),a(484)),P=a(2),B=a(4),R=(a(146),a(95),a(147),a(440)),x=a(529),L=a(530),I=a(439),z=function(e){var t=e.error,a=e.onFocus,o=e.onBlur,s=e.size,c=Object(B.a)(e,["error","onFocus","onBlur","size"]),l=Object(n.useState)(!1),i=Object(O.a)(l,2),m=i[0],u=i[1],d=Object(n.useState)(!1),p=Object(O.a)(d,2),w=p[0],h=p[1];return r.a.createElement(I.a,{size:s,placement:"top-end",isVisible:(m||w)&&!!t,content:t},r.a.createElement("div",null,r.a.createElement(L.a,Object(P.a)({size:s,error:!!t,onBlur:function(e){u(!1),o&&o(e)},onFocus:function(e){u(!0),a&&a(e)},onMouseEnter:function(){return h(!0)},onMouseLeave:function(){return h(!1)}},c))))},A=a(531),D=function(e){var t=e.error,a=Object(B.a)(e,["error"]),o=Object(n.useState)(!1),s=Object(O.a)(o,2),c=s[0],l=s[1];return r.a.createElement(I.a,{size:"s",placement:"top-start",isVisible:c&&!!t,content:t},r.a.createElement("div",null,r.a.createElement(A.a,Object(P.a)({error:!!t,onMouseEnter:function(){return l(!0)},onMouseLeave:function(){return l(!1)}},a))))},H=Object(c.withI18n)()(function(e){var t=e.consentId,a=e.i18n,o=(e.i18nHash,Object(B.a)(e,["consentId","i18n","i18nHash"])),s=Object(n.useState)(a._({id:'By submitting this form I agree to <a href="https://www.jetbrains.com/company/privacy.html">JetBrains Privacy Policy</a>'})),c=Object(O.a)(s,2),l=c[0],i=c[1];return Object(n.useEffect)(function(){var e=a.language.substr(3).toUpperCase();R.a.getConsentOptions(t,e).then(function(e){var t=e.text;return i(t)})},[t]),r.a.createElement(D,o,r.a.createElement("span",{dangerouslySetInnerHTML:{__html:l}}))}),J=a(43),M=a.n(J),q=(a(216),a(493)),F=a.n(q),V="https://app-lon02.marketo.com/index.php/leadCapture/save2",W="426-QVD-114";function G(e){var t=e,a=t.formid;if(!a)throw new Error("`formid` should be specified");t.munchkinId=W,"formVid"in t==!1&&(t.formVid=a);var n=F.a.parse(document.cookie)._mkto_trk;n&&(t._mkt_trk=n);var r=new FormData;return M()(t).forEach(function(e){r.append(e,t[e])}),fetch(V,{method:"POST",body:r})}var U,K=function(e){var t=e.className,a=e.handleChange,o=e.handleBlur,s=e.values,l=e.touched,i=e.errors,m=e.isValid,u=e.isSubmitting,d=e.i18n,p=l.sendCommunityNewsletter||l.surveyResults||l.surveyPanel;return r.a.createElement(n.Fragment,null,r.a.createElement("h4",{className:"wt-h4 wt-h4_theme_dark",id:"panel"},r.a.createElement(c.Trans,{id:"Participate in future surveys:"})),r.a.createElement(x.a,{className:t},r.a.createElement(z,{theme:"dark",type:"email",className:"wt-offset-top-12",name:"email",autoComplete:"email",onChange:a,onBlur:o,value:s.email,placeholder:d._({id:"Email"}),error:l.email&&i.email}),r.a.createElement(D,{theme:"dark",className:"wt-offset-top-12",name:"surveyPanel",onChange:a,onBlur:o,checked:s.surveyPanel,error:p&&i.surveyPanel},r.a.createElement(c.Trans,{id:"I want to participate in future JetBrains surveys"})),r.a.createElement(D,{theme:"dark",name:"surveyResults",onChange:a,onBlur:o,checked:s.surveyResults,error:p&&i.surveyResults},r.a.createElement(c.Trans,{id:"I want to receive future JetBrains research results"})),r.a.createElement(D,{theme:"dark",name:"sendCommunityNewsletter",onChange:a,onBlur:o,checked:s.sendCommunityNewsletter,error:p&&i.sendCommunityNewsletter},r.a.createElement(c.Trans,{id:"I want to receive emails about JetBrains company news, products and services"})),r.a.createElement(H,{theme:"dark",name:"privacyConsent",consentId:"mkt.survey.panel",onChange:a,onBlur:o,checked:s.privacyConsent,error:l.privacyConsent&&i.privacyConsent}),r.a.createElement(f.a,{className:"wt-offset-top-12",mode:"outline",theme:"dark",disabled:!m||u,busy:u,type:"submit"},r.a.createElement(c.Trans,{id:"Submit"}))))},Q=function(e){return function(t){var a=t.email,n=t.privacyConsent,r=t.surveyPanel,o=t.surveyResults,s=t.sendCommunityNewsletter,c={};if(a||(c.email=e._({id:"Email is required"})),n||(c.privacyConsent=e._({id:"This field is required"})),!r&&!o&&!s){var l=e._({id:"Please select at least one subscription"});c.surveyPanel=l,c.surveyResults=l,c.sendCommunityNewsletter=l}return c}},X=Object(c.withI18n)()(function(e){var t=e.i18n,a=e.onSubmit,n=Object(B.a)(e,["i18n","onSubmit"]);return r.a.createElement(x.b,{onSubmit:Y(a),initialValues:{firstName:"",lastName:"",email:""},validate:Q(t),render:function(e){return r.a.createElement(K,Object(P.a)({i18n:t},e,n))}})}),Y=function(e){return function(){var t=Object(S.a)(C.a.mark(function t(a,n){var r,o,s;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.email,o=Object(B.a)(a,["email"]),n.setSubmitting(!0),t.next=4,R.a.sendAcceptance("mkt.survey.panel",r);case 4:return s=Object(T.a)({},o,{Email:r,formid:3551,subId:62}),t.next=7,G(s);case 7:n.setSubmitting(!1),e&&e();case 9:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}()},Z=X,$=a(405),ee=a(196),te=a(506),ae=a.n(te),ne=(a(395),"IntelliJ IDEA"),re="PyCharm",oe="WebStorm",se="PhpStorm",ce="ReSharper",le="Rider",ie="CLion",me="RubyMine",ue="AppCode",de="GoLand",pe="TeamCity",we="Upsource",he="dotPeek",fe="dotTrace",be="dotMemory",ge="dotCover",ve="Kotlin",je="ReSharper C++",ye="Datalore",Ee="DataGrip",Oe="PyCharm Edu",_e=(U={},Object(w.a)(U,ne,"https://www.jetbrains.com/idea/download/"),Object(w.a)(U,re,"https://www.jetbrains.com/pycharm/download/"),Object(w.a)(U,oe,"https://www.jetbrains.com/webstorm/download/"),Object(w.a)(U,se,"https://www.jetbrains.com/phpstorm/download/"),Object(w.a)(U,ce,"https://www.jetbrains.com/resharper/download/"),Object(w.a)(U,le,"https://www.jetbrains.com/rider/download/"),Object(w.a)(U,ie,"https://www.jetbrains.com/clion/download/"),Object(w.a)(U,me,"https://www.jetbrains.com/ruby/download/"),Object(w.a)(U,ue,"https://www.jetbrains.com/objc/download/"),Object(w.a)(U,de,"https://www.jetbrains.com/go/download/"),Object(w.a)(U,pe,"https://www.jetbrains.com/teamcity/download/"),Object(w.a)(U,we,"https://www.jetbrains.com/upsource/download/"),Object(w.a)(U,he,"https://www.jetbrains.com/decompiler/download/"),Object(w.a)(U,fe,"https://www.jetbrains.com/profiler/download/"),Object(w.a)(U,be,"https://www.jetbrains.com/dotmemory/download/"),Object(w.a)(U,ge,"https://www.jetbrains.com/dotcover/download/"),Object(w.a)(U,ve,"https://kotlinlang.org/"),Object(w.a)(U,je,"https://www.jetbrains.com/resharper-cpp/download/"),Object(w.a)(U,ye,"https://datalore.io/"),Object(w.a)(U,Ee,"https://www.jetbrains.com/datagrip/download/"),Object(w.a)(U,Oe,"https://www.jetbrains.com/pycharm-edu/download/"),U),ke=[{name:"JavaScript",url:"#lang=js",supportedTools:[ne,re,oe,se,ce,le,ie,me,ue,de,pe,we]},{name:".NET",url:"#tech=dotnet",supportedTools:[ce,le,he,fe,be,ge,pe]},{name:"Java",url:"#lang=java",supportedTools:[ne,pe,we,ve]},{name:"C++",url:"#lang=cpp",supportedTools:[ie,ue,je]},{name:"PHP",url:"#lang=php-lang",supportedTools:[ne,se,pe,we]},{name:"Ruby & Rails",url:"#lang=ruby",supportedTools:[ne,me,pe]},{name:"Android",url:"#tech=android",supportedTools:[ne,ve]},{name:"macOS & iOS",url:"#tech=ios",supportedTools:[ue]},{name:"Python & Django",url:"#lang=python",supportedTools:[ne,re,le,ie,ye,Ee,de,pe,Oe]}],Ne=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r))),Object(w.a)(Object(d.a)(a),"state",{selectedTech:null,selectedTool:null}),Object(w.a)(Object(d.a)(a),"getTechOptions",function(){return ke.map(function(e){return{label:e.name,value:e.name,supportedTools:e.supportedTools,url:e.url}})}),Object(w.a)(Object(d.a)(a),"handleSelectTech",function(e){var t=a.state.selectedTool;if(a.setState({selectedTech:e}),t&&e){var n=!1;e.supportedTools.forEach(function(e){e===t.value&&(n=!0)}),n||a.handleSelectTool(null)}}),Object(w.a)(Object(d.a)(a),"getToolsOptions",function(){var e=a.state.selectedTech;if(e)return e.supportedTools.map(function(e){return{label:e,value:e}});var t=new ae.a;return ke.forEach(function(e){e.supportedTools.forEach(function(e){t.add(e)})}),Object(ee.a)(t).map(function(e){return{label:e,value:e}})}),Object(w.a)(Object(d.a)(a),"handleSelectTool",function(e){a.setState({selectedTool:e})}),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.selectedTech,a=e.selectedTool;return r.a.createElement(n.Fragment,null,r.a.createElement("h3",{className:"wt-h3 wt-h3_theme_dark"},r.a.createElement(c.Trans,{id:"Whichever technologies you use, there's a JetBrains tool to match."})),r.a.createElement("h4",{className:"wt-h4 wt-h4_theme_dark wt-offset-top-48"},r.a.createElement(c.Trans,{id:"Choose your technology"})),r.a.createElement(j.a,{isClearable:!0,theme:"dark",className:"wt-offset-top-12",options:this.getTechOptions(),value:t,onChange:this.handleSelectTech}),r.a.createElement("div",{className:"wt-offset-top-24"},r.a.createElement("a",{className:"wt-link wt-text-2 wt-text-2_hardness_primary wt-text-2_theme_dark",href:"https://www.jetbrains.com/products.html".concat(t?t.url:""),target:"_blank",rel:"noopener noreferrer"},r.a.createElement(c.Trans,{id:"See All {0} Tools",values:{0:t?t.label:""}}))),r.a.createElement("h4",{className:"wt-h4 wt-h4_theme_dark wt-offset-top-48"},r.a.createElement(c.Trans,{id:"Download the tool you need"})),r.a.createElement(j.a,{isClearable:!0,theme:"dark",className:"wt-offset-top-12",options:this.getToolsOptions(),value:a,onChange:this.handleSelectTool}),r.a.createElement(f.a,{className:"wt-offset-top-24",mode:"outline",theme:"dark",disabled:!a,href:"".concat(a?_e[a.value]:""),rel:"noopener noreferrer",target:"_blank"},r.a.createElement(c.Trans,{id:"Try now"})))}}]),t}(n.Component),Ce=function(e){var t=e.pageName,a=Object(n.useState)(!1),o=Object(O.a)(a,2),s=o[0],l=o[1];return r.a.createElement("section",{className:"wt-section wt-section_bg_gray-dark wt-section_theme_dark section-footer"},r.a.createElement("div",{className:"wt-container wt-offset-top-96"},r.a.createElement("div",{className:"wt-row  wt-row_size_m"},t&&r.a.createElement("div",{className:"wt-col-4 wt-col-md-10"},r.a.createElement(Ne,null)),r.a.createElement("div",{className:k()("wt-col-7 wt-col-md-10 wt-offset-left-md-0 wt-offset-top-md-48",{"wt-offset-left-1":t})},r.a.createElement("h2",{className:"wt-h3 wt-h3_theme_dark"},r.a.createElement(c.Trans,{id:"Thank you for your time!<0/>We hope you found our report useful.",components:[r.a.createElement("br",null)]})),r.a.createElement($.b,{options:Object($.c)({urlHash:"urlHash"}),className:"wt-row wt-offset-top-12 wt-row_size_s wt-row_justify_start"}),r.a.createElement("div",{className:"wt-offset-top-48"},s?r.a.createElement("p",{className:"wt-offset-top-12 wt-text-1 wt-text-1_theme_dark"},r.a.createElement(c.Trans,{id:"Thanks for your request!"})):r.a.createElement(Z,{onSubmit:function(){return l(!0)}})),r.a.createElement("p",{className:"wt-text-2 wt-text-2_flow"},r.a.createElement(c.Trans,{id:"If you have any questions or suggestions, please contact us at <0>surveys@jetbrains.com</0>.",components:[r.a.createElement("a",{className:"wt-link",href:"mailto:surveys@jetbrains.com"})]}))))))},Te=function(e){var t=e.children,a=e.location,n=e.pageName;return r.a.createElement("div",{className:"devecosystem-2019_primary-colors"},r.a.createElement(E,{location:a}),r.a.createElement("main",null,t),r.a.createElement(Ce,{pageName:n}))};Te.propTypes={children:s.a.node.isRequired};t.a=Te},405:function(e,t,a){"use strict";var n=a(18),r=a(19),o=a(20),s=a(21),c=a(54),l=a(22),i=a(35),m=a(24),u=a(4),d=a(0),p=a.n(d),w=a(1),h=a.n(w),f=a(3),b=a.n(f),g=a(494),v=a.n(g),j=(a(370),a(2)),y=function(e){return p.a.createElement(d.Fragment,null,p.a.createElement("svg",Object(j.a)({viewBox:"0 0 24 24"},e,{className:e.className}),p.a.createElement("path",{fillRule:"nonzero",d:"M8.764 10.637l3.209-1.76a2.39 2.39 0 0 1-.08-.577 2.352 2.352 0 1 1 2.353 2.351h-.001c-.676 0-1.28-.288-1.707-.743l-3.21 1.76c.048.186.08.377.08.577 0 .2-.032.392-.08.576l3.21 1.761a2.337 2.337 0 0 1 1.707-.742 2.35 2.35 0 1 1-2.352 2.35c0-.2.034-.39.08-.576l-3.209-1.76a2.341 2.341 0 0 1-1.707.743 2.353 2.353 0 0 1 0-4.703c.674 0 1.28.288 1.707.743M11.755.49C5.263.49 0 5.753 0 12.245 0 18.738 5.263 24 11.755 24c6.493 0 11.755-5.262 11.755-11.755C23.51 5.753 18.248.49 11.755.49m-.33 8.128l-2.587 1.42a2.8 2.8 0 0 0-1.781-.634 2.845 2.845 0 0 0-2.842 2.84 2.846 2.846 0 0 0 2.842 2.843 2.8 2.8 0 0 0 1.78-.634l2.588 1.42a2.367 2.367 0 0 0-.022.317 2.844 2.844 0 0 0 2.842 2.84 2.843 2.843 0 0 0 2.84-2.84 2.843 2.843 0 0 0-2.84-2.84 2.8 2.8 0 0 0-1.783.634l-2.585-1.42a2.685 2.685 0 0 0 0-.637l2.585-1.42a2.802 2.802 0 0 0 1.783.634 2.844 2.844 0 0 0 2.84-2.84 2.844 2.844 0 0 0-2.84-2.842A2.844 2.844 0 0 0 11.403 8.3c0 .104.007.21.022.318m.33-7.638c6.213 0 11.265 5.053 11.265 11.265 0 6.211-5.052 11.265-11.265 11.265C5.544 23.51.49 18.456.49 12.245.49 6.033 5.544.98 11.755.98"})))};a(402),a(151);a.d(t,"c",function(){return _}),a.d(t,"b",function(){return k}),a.d(t,"a",function(){return N});var E="";"undefined"!=typeof window&&(E=window.location.href);var O={url:E,data:{via:"jetbrains"},title:"Almost 7,000 developers share their insights on modern technologies, programming languages, frameworks, and tools of choice for software development #DevEcosystem19",counters:!1},_=function(e){var t=e.urlHash,a=Object(u.a)(e,["urlHash"]);return Object(m.a)({},O,a,{url:O.url+(t?"#"+t:"")})},k=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),m=0;m<r;m++)l[m]=arguments[m];return a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l))),Object(i.a)(Object(c.a)(a),"handleRef",function(e){return a.shareButtonsWrapperRef=e}),Object(i.a)(Object(c.a)(a),"trackingShare",function(e){var t=_(a.props.options);"undefined"!=typeof window&&(window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"GASocial",socialNetwork:e,socialAction:"share",socialTarget:t.url}))}),a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.forRef,t=this.props.options;if(e){var a=e.current.textContent,n=a.length>100?a.substr(0,100)+"... #DevEcosystem19":a+" #DevEcosystem19";t=Object(m.a)({title:n},t)}this.initShareButtons(t)}},{key:"initShareButtons",value:function(e){this.shareButtonsWrapperRef&&(this.shareInstance=v()(this.shareButtonsWrapperRef,_(e)))}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,n=t.children;return p.a.createElement("div",{ref:this.handleRef,className:b()("share",a)},n&&p.a.createElement("div",{className:"wt-col-inline share__pre-text"},n),p.a.createElement("div",{className:"wt-col-inline share__button _twitter twitter",onClick:function(){return e.trackingShare("twitter")}}),p.a.createElement("div",{className:"wt-col-inline share__button _facebook facebook",onClick:function(){return e.trackingShare("facebook")}}))}}]),t}(d.Component);Object(i.a)(k,"propTypes",{options:h.a.object});var N=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),m=0;m<r;m++)l[m]=arguments[m];return a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l))),Object(i.a)(Object(c.a)(a),"state",{active:!1}),Object(i.a)(Object(c.a)(a),"handleClick",function(){return a.setState({active:!a.state.active})}),a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.options,a=void 0===t?{}:t,n=e.forRef,r=this.state.active,o=a.position?"_stick-"+a.position:"";return p.a.createElement("div",{className:"wt-row wt-row_align-items_center wt-row_size_0 wt-offset-top-24 wt-offset-top-sm-12"},p.a.createElement("div",{className:"wt-col-inline"},p.a.createElement(y,{className:"dev-ecosystem__icon-share",onClick:this.handleClick})),r&&p.a.createElement("div",{className:"wt-col-inline"},p.a.createElement(k,{forRef:n,className:b()(!r&&"share-buttons_hidden","wt-row wt-row_size_s")+o,options:a})))}}]),t}(d.Component);N.propTypes={options:h.a.any}}}]);
//# sourceMappingURL=2-0b1d09a0ea91fa69f774.js.map