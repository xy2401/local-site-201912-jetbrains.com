(window.webpackJsonp=window.webpackJsonp||[]).push([[456],{"2FnB":function(e,t,a){var l=a("5Uuq"),n=a("KI45");a("hfKm")(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("/HRN")),o=n(a("WaGi")),u=n(a("ZDA2")),i=n(a("/+P4")),d=n(a("K47E")),c=n(a("N9n2")),s=n(a("xHqa")),f=l(a("q1tI")),m=n(a("VOtY")),p=n(a("z5Ax")),h=function(e){function t(e){var a;return(0,r.default)(this,t),a=(0,u.default)(this,(0,i.default)(t).call(this,e)),(0,s.default)((0,d.default)(a),"handleChangeBilling",(function(e){a.setState({billingType:e})})),a.state={billingType:"yearly"},a}return(0,c.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.state.billingType;return f.default.createElement(f.Fragment,null,f.default.createElement(m.default,{billingType:e,onBillingTypeChange:this.handleChangeBilling}),f.default.createElement(p.default,{billingType:e,onBillingTypeChange:this.handleChangeBilling}))}}]),t}(f.Component);t.default=h},455:function(e,t,a){a("ctTR"),e.exports=a("uxg4")},"5VOL":function(e,t,a){var l=a("5Uuq"),n=a("KI45");a("hfKm")(t,"__esModule",{value:!0}),t.LicenceTable=void 0;var r=n(a("/HRN")),o=n(a("WaGi")),u=n(a("ZDA2")),i=n(a("/+P4")),d=n(a("K47E")),c=n(a("N9n2")),s=n(a("xHqa")),f=a("ZD0w"),m=l(a("q1tI")),p=a("kM2P"),h=n(a("a45L")),v=a("p78Z");a("WCCh");var _=function(e){function t(e){var a;return(0,r.default)(this,t),a=(0,u.default)(this,(0,i.default)(t).call(this,e)),(0,s.default)((0,d.default)(a),"handleLicenceChange",(function(e){return a.setState({shopToken:e})})),(0,s.default)((0,d.default)(a),"renderLicenceRow",(function(e){var t=e.new,l=e.update,n=e.users,r=a.props.isUpdate;if(r&&"0"===l.renew||"U:U:YTDE"===l.shopToken)return!1;var o=(r?l:t).shopToken,u=r?l.renew:t.license;return m.default.createElement(p.RadioButton,{key:o,className:"youtrack-table__row-wrapper",value:o},m.default.createElement("div",{className:"youtrack-table__row"},m.default.createElement("div",{className:"youtrack-table__cell"},m.default.createElement(f.Trans,{id:"{users, plural, one {# User} other {# Users}}",values:{users:n}})),m.default.createElement("div",{className:"youtrack-table__cell"},(0,v.formatPrice)(+u))))})),a.state={shopToken:e.isUpdate?"U:U:YTD25":"U:N:YTD25"},a}return(0,c.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,t=e.isUpdate,a=e.noHeader,l=this.state.shopToken;return m.default.createElement("div",{className:"wt-row wt-row_size_m"},m.default.createElement("div",{className:"wt-col-6 wt-col-md-8 wt-col-sm-12 wt-offset-top-48"},!a&&m.default.createElement(m.Fragment,null,m.default.createElement("div",{className:"wt-h2"},t?m.default.createElement(f.Trans,{id:"Extend Subscription"}):m.default.createElement(f.Trans,{id:"New YouTrack Standalone License"})),m.default.createElement("div",{className:"wt-text-2 wt-text-2_flow"},t?m.default.createElement(f.Trans,{id:"for 1 more year"}):m.default.createElement(f.Trans,{id:"+1 year of free updates and technical support"}))),m.default.createElement(p.RadioButtonList,{onChange:this.handleLicenceChange,value:l},m.default.createElement("div",{className:"youtrack-table wt-offset-top-24"},m.default.createElement("div",{className:"youtrack-table__header-row-wrapper"},m.default.createElement("div",{className:"youtrack-table__header-row"},m.default.createElement("div",{className:"youtrack-table__cell wt-h4"},m.default.createElement(f.Trans,{id:"Users"})),m.default.createElement("div",{className:"youtrack-table__cell wt-h4"},m.default.createElement(f.Trans,{id:"Price"})))),(0,v.getYoutrackStandaloneLicencePrices)().map(this.renderLicenceRow))),m.default.createElement("div",{className:"wt-row wt-row_size_m wt-offset-top-24"},m.default.createElement(h.default,{href:"U:N:YTD10"===l?"/youtrack/download/get_youtrack.html#section=standalone":"https://www.jetbrains.com/shop/buy?item=".concat(l),className:"wt-col-inline wt-offset-top-24"},"U:N:YTD10"===l?m.default.createElement(f.Trans,{id:"Download"}):t?m.default.createElement(f.Trans,{id:"Extend subscription"}):m.default.createElement(f.Trans,{id:"Buy New license"})),m.default.createElement(h.default,{disabled:"U:N:YTD10"===l,href:"https://www.jetbrains.com/shop/quote?item=".concat(l),className:"wt-col-inline wt-offset-top-24",mode:"outline"},m.default.createElement(f.Trans,{id:"Get quote"})))))}}]),t}(m.Component);t.LicenceTable=_},DX3E:function(e,t,a){},L35e:function(e,t,a){var l=a("KI45");a("hfKm")(t,"__esModule",{value:!0}),t.YoutrackCard=s,t.YoutrackCalcCard=function(e){return r.default.createElement(s,(0,n.default)({},e,{onButtonClick:m,buttonText:d.default._({id:"Calculate your price"})}))};var n=l(a("htGi")),r=l(a("q1tI")),o=a("a+XR"),u=l(a("a45L")),i=l(a("KKN/")),d=l(a("kIaO")),c=a("z5Ax");function s(e){var t=e.title,a=e.description,l=e.price,n=e.priceCaption,i=e.buttonText,d=e.onButtonClick;return r.default.createElement(o.Card,{className:"buy-card"},r.default.createElement(o.CardSection,null,r.default.createElement("div",{className:"wt-h3"},t),r.default.createElement("div",{className:"wt-text-2 wt-offset-top-24"},a),r.default.createElement("div",{className:"wt-offset-top-24 wt-subtitle-2"},l),r.default.createElement("div",{className:"wt-text-3"},n)),r.default.createElement(o.CardSection,{isVerticallyFixed:!0},r.default.createElement(u.default,{onClick:d},i)))}var f=new i.default,m=function(){return f.scrollToElement(document.getElementById(c.YOUTRACK_PRICE_CALCULATOR_ID))}},M4lP:function(e,t,a){var l=a("5Uuq"),n=a("KI45");a("hfKm")(t,"__esModule",{value:!0}),t.default=t.DEFAULT_RANGES=void 0;var r=n(a("/HRN")),o=n(a("WaGi")),u=n(a("ZDA2")),i=n(a("/+P4")),d=n(a("K47E")),c=n(a("N9n2")),s=n(a("xHqa")),f=l(a("q1tI")),m=n(a("TSYQ"));a("cXTp");var p=[{start:0,end:3,proportion:10,endLabel:"3",color:"#5dd33c"},{start:3,end:100,proportion:13,endLabel:"100",color:"#208fd3"},{start:100,end:200,proportion:26,endLabel:"200",color:"#5d28af"},{start:200,end:300,proportion:17,endLabel:"300",color:"#842aad"},{start:300,end:400,proportion:17,endLabel:"400+",color:"#aa2b98"},{start:400,end:1e3,proportion:17,color:"#a53838"}];t.DEFAULT_RANGES=p;var h=function(e){function t(){var e;return(0,r.default)(this,t),e=(0,u.default)(this,(0,i.default)(t).call(this)),(0,s.default)((0,d.default)(e),"getNormalizedRangeProportion",(function(e,t){if(t>e.length||t<0)return 0;var a=e.reduce((function(e,t){return e+t.proportion}),0);return e[t].proportion/a})),(0,s.default)((0,d.default)(e),"getAbsoluteValue",(function(t){for(var a=e.props.ranges,l=0,n=e.getNormalizedRangeProportion(a,l),r=0;n<t;)r+=e.getNormalizedRangeProportion(a,l),l++,n+=e.getNormalizedRangeProportion(a,l);var o=a[l];return(t-r)/e.getNormalizedRangeProportion(a,l)*(o.end-o.start)+o.start})),(0,s.default)((0,d.default)(e),"getMarkOffsetByAbsoluteValue",(function(t){var a=e.props.ranges;if(t<=0)return 0;if(t>=a[a.length-1].end)return 1;for(var l=0,n=a[l].end,r=0;t>n;)r+=e.getNormalizedRangeProportion(a,l),n=a[++l].end;var o=a[l];return r+(t-o.start)/(o.end-o.start)*e.getNormalizedRangeProportion(a,l)})),(0,s.default)((0,d.default)(e),"handleMouseDown",(function(t){0===t.button&&(t.preventDefault(),e.setState({dragging:!0,markOffset:e.getMarkOffsetByClientX(t.clientX)}))})),(0,s.default)((0,d.default)(e),"handleMouseMove",(function(t){if(e.state.dragging){t.preventDefault();var a=e.getMarkOffsetByClientX(t.clientX);e.setState({markOffset:a})}})),(0,s.default)((0,d.default)(e),"handleMouseUp",(function(t){t.preventDefault(),e.setState({dragging:!1})})),(0,s.default)((0,d.default)(e),"handleTouchStart",(function(t){if(!(t.targetTouches.length>1)){t.nativeEvent.cancelable&&t.preventDefault();var a=t.targetTouches.item(0).clientX;e.setState({dragging:!0,markOffset:e.getMarkOffsetByClientX(a)})}})),(0,s.default)((0,d.default)(e),"handleTouchMove",(function(t){if(e.state.dragging){if(t.targetTouches.length>1)return;t.nativeEvent.cancelable&&t.preventDefault();var a=t.targetTouches.item(0).clientX,l=e.getMarkOffsetByClientX(a);e.setState({markOffset:l})}})),(0,s.default)((0,d.default)(e),"handleTouchEnd",(function(t){t.nativeEvent.cancelable&&t.preventDefault(),e.setState({dragging:!1})})),(0,s.default)((0,d.default)(e),"handleSliderRef",(function(t){return e.sliderRef=t})),(0,s.default)((0,d.default)(e),"renderRangeBlock",(function(e){var t=e.color,a=e.endLabel,l=e.proportion,n=e.label,r=e.end;return f.default.createElement("div",{key:r,className:"youtrack-price-slider__block",style:{flexGrow:l}},f.default.createElement("div",{className:"youtrack-price-slider__block-top-label"},a),f.default.createElement("div",{className:"youtrack-price-slider__block-line",style:{backgroundColor:t}}),f.default.createElement("div",{className:"youtrack-price-slider__block-bottom-label"},n))})),e.state={dragging:!1,markOffset:0},e}return(0,c.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){document.addEventListener("mouseup",this.handleMouseUp),document.addEventListener("mouseleave",this.handleMouseUp),document.addEventListener("mousemove",this.handleMouseMove)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mouseup",this.handleMouseUp),document.removeEventListener("mouseleave",this.handleMouseUp),document.removeEventListener("mousemove",this.handleMouseMove)}},{key:"componentDidUpdate",value:function(e,t){t.markOffset!==this.state.markOffset&&this.props.onChange&&this.props.onChange(this.getAbsoluteValue(this.state.markOffset))}},{key:"getMarkOffsetByClientX",value:function(e){var t=this.sliderRef.getBoundingClientRect(),a=t.left,l=t.width,n=e-a;return n<0?n=0:n>l&&(n=l),n/l}},{key:"render",value:function(){var e=this.state,t=e.markOffset,a=e.dragging,l=this.props,n=l.value,r=l.ranges,o=l.theme;return f.default.createElement("div",{className:(0,m.default)("youtrack-price-slider","dark"===o&&"youtrack-price-slider_theme_dark"),onMouseDown:this.handleMouseDown,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd,ref:this.handleSliderRef},r.map(this.renderRangeBlock),f.default.createElement("div",{className:"youtrack-price-slider__mark",style:{left:"".concat(a?100*t:100*this.getMarkOffsetByAbsoluteValue(n),"%"),transition:a?"none":"left 300ms"}}))}}]),t}(f.Component);(0,s.default)(h,"defaultProps",{ranges:p}),h.propTypes={};var v=h;t.default=v},VOtY:function(e,t,a){var l=a("5Uuq"),n=a("KI45");a("hfKm")(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("/HRN")),o=n(a("WaGi")),u=n(a("ZDA2")),i=n(a("/+P4")),d=n(a("K47E")),c=n(a("N9n2")),s=n(a("xHqa")),f=l(a("q1tI")),m=a("UXAq"),p=a("p78Z"),h=n(a("kIaO")),v=a("L35e"),_=n(a("cf7X")),E=function(e){function t(e){var a;return(0,r.default)(this,t),a=(0,u.default)(this,(0,i.default)(t).call(this,e)),(0,s.default)((0,d.default)(a),"handleGetNowClick",(function(){return a.setState({showForm:!0})})),a.state={showForm:!1},a}return(0,c.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,t=e.billingType,a=e.onBillingTypeChange,l=this.state.showForm,n=(0,p.getYoutrackIncloudPriceLevels)(t)[1];return f.default.createElement(f.Fragment,null,f.default.createElement(m.BillingSwitcher,{className:"wt-offset-top-48",yearlyCaptionText:h.default._({id:"Save 2 months"}),yearlyMainText:h.default._({id:"Annual billing"}),value:t,onChange:a}),f.default.createElement("div",{className:"wt-row wt-row_size_m"},f.default.createElement("div",{className:"wt-col-4 wt-col-md-6 wt-col-sm-12 wt-offset-top-48"},l?f.default.createElement(_.default,null):f.default.createElement(v.YoutrackCard,{title:h.default._({id:"1-3 Users"}),description:h.default._({id:"full-featured tracker for small teams"}),price:h.default._({id:"Free"}),buttonText:h.default._({id:"Get now"}),onButtonClick:this.handleGetNowClick})),n&&f.default.createElement("div",{className:"wt-col-4 wt-col-md-6 wt-col-sm-12 wt-offset-top-48"},f.default.createElement(v.YoutrackCalcCard,{title:h.default._({id:"{0}-{1} Users",values:{0:n.min,1:n.max}}),description:h.default._({id:"for medium and growing teams and companies"}),priceCaption:h.default._({id:"per user/month"}),price:(0,p.formatPrice)("yearly"===t?n.price/12:n.price)})),f.default.createElement("div",{className:"wt-col-4 wt-col-md-6 wt-col-sm-12 wt-offset-top-48"},f.default.createElement(v.YoutrackCalcCard,{title:h.default._({id:"101+ Users"}),description:h.default._({id:"for large teams and enterprise companies"}),priceCaption:h.default._({id:"grows with the number of users"}),price:h.default._({id:"Discount"})}))))}}]),t}(f.Component);t.default=E},WCCh:function(e,t,a){},cXTp:function(e,t,a){},cf7X:function(e,t,a){var l=a("5Uuq"),n=a("KI45");a("hfKm")(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("/HRN")),o=n(a("WaGi")),u=n(a("ZDA2")),i=n(a("/+P4")),d=n(a("N9n2")),c=a("ZD0w"),s=l(a("q1tI")),f=n(a("xtvb")),m=a("a+XR"),p=l(a("kIaO"));a("hJqz");var h="js-form-get-youtrack",v=function(e){function t(){return(0,r.default)(this,t),(0,u.default)(this,(0,i.default)(t).apply(this,arguments))}return(0,d.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){this.form=new f.default("#".concat(h))}},{key:"componentWillUnmount",value:function(){this.form&&this.form.destroy()}},{key:"render",value:function(){return s.default.createElement(s.default.Fragment,null,s.default.createElement("form",{id:h,className:"form _label-error-right youtrack-incloud-form-card",action:""},s.default.createElement(m.Card,null,s.default.createElement(m.CardSection,{className:"youtrack-incloud-form-card__card-content"},s.default.createElement("div",{className:"wt-h3"},s.default.createElement(c.Trans,{id:"1-3 Users"})),s.default.createElement("div",{className:"wt-offset-top-24"},s.default.createElement("div",{className:"form__fields-wrapper"},s.default.createElement("div",{className:"form__field "},s.default.createElement("input",{className:"input input-request-type hidden valid",name:"requestType",required:!0,placeholder:p.default._({id:"request type"}),"aria-required":"true","aria-invalid":"false"})),s.default.createElement("div",{className:"form__field youtrack-form__field-domain"},s.default.createElement("div",{className:"youtrack-form__server-message"}),s.default.createElement("input",{name:"domain",className:"input input-text js-input-domain youtrack-incloud-form-card__domain-input",required:!0,placeholder:p.default._({id:"instancename"})}),s.default.createElement("div",{className:"youtrack-incloud-form-card__domain-after"},".myjetbrains.com")),s.default.createElement("div",{className:"form__field"},s.default.createElement("input",{className:"input input-text youtrack-form__input-email",name:"email",type:"email",autoComplete:"email",required:!0,placeholder:p.default._({id:"your email"})})),s.default.createElement("div",{className:"form__field checkbox-list js-privacy-checkbox"},s.default.createElement("label",{className:"checkbox checkbox-list__item"},s.default.createElement("input",{type:"checkbox",name:"privacyTerms",className:"input-privacy",required:!0,"aria-required":"true"}),s.default.createElement("span",{className:"checkbox__icon"}),s.default.createElement("span",{className:"checkbox__label wt-text-3"},s.default.createElement(c.Trans,{id:"I have read and I agree to the JetBrains <0>Privacy Policy</0>, <1>Purchase Terms</1>, <2>JetBrains Account Agreement</2>, and <3>Terms of Service</3>",components:[s.default.createElement("a",{href:(0,p.i18n_href)("/company/privacy.html")}),s.default.createElement("a",{href:(0,p.i18n_href)("/store/terms/")}),s.default.createElement("a",{href:(0,p.i18n_href)("/legal/agreements/jetbrains_account.html")}),s.default.createElement("a",{href:(0,p.i18n_href)("/youtrack/incloud/serviceterms.html")})]}))," ")),s.default.createElement("div",{className:"form__field js-newsletter-checkbox"},s.default.createElement("label",{className:"checkbox"},s.default.createElement("input",{type:"checkbox",name:"privacyConsentNurturing",id:"privacy-notice",className:"js-checkbox-privacy-consent checkbox-privacy-with-tooltip__checkbox"}),s.default.createElement("span",{className:"checkbox__icon checkbox-privacy-with-tooltip__checkbox-icon"}),s.default.createElement("span",{className:"checkbox__label wt-text-3 js-message-from-server"},s.default.createElement(c.Trans,{id:"Send me helpful educational materials during my first month"}),s.default.createElement("span",{className:"js-privacy-tooltip checkbox-privacy-with-tooltip__tooltip"},"?")))),s.default.createElement("div",{className:"form__field hidden"},s.default.createElement("input",{className:"input input-request-type",name:"requestType",defaultValue:"newRequest"}))),s.default.createElement("input",{className:"wt-button wt-button_size_m wt-button_mode_primary youtrack-form__submit-button",type:"submit",defaultValue:p.default._({id:"Get started free"})})),s.default.createElement("div",{className:"form__after-submit youtrack-form__after-submit-block"},s.default.createElement("p",null,s.default.createElement(c.Trans,{id:"Thanks for your request!"})))))),s.default.createElement("form",{className:"js-post-send-form hidden",action:"/youtrack/download/signup_thanks.html#page=signup",method:"post"},s.default.createElement("input",{className:"js-hidden-email",name:"email",type:"email"})))}}]),t}(s.Component);t.default=v},hJqz:function(e,t,a){},uxg4:function(e,t,a){var l=a("KI45"),n=a("ZD0w"),r=l(a("q1tI")),o=a("XHbo"),u=l(a("kIaO")),i=l(a("xF1T"));a("w3VB");var d=[{label:u.default._({id:"InCloud version"}),value:"incloud"},{label:u.default._({id:"Standalone version"}),value:"standalone"}];(0,o.initBuyPage)("youtrack-cards",{hideEditionTabs:!0,PageComponent:i.default,editions:d,title:r.default.createElement(n.Trans,{id:"Productivity Suite<0/>for Your Team",components:[r.default.createElement("br",null)]})})},w3VB:function(e,t,a){},xF1T:function(e,t,a){var l=a("KI45"),n=a("5Uuq");a("hfKm")(t,"__esModule",{value:!0}),t.default=void 0;var r=a("ZD0w"),o=n(a("q1tI")),u=a("eO8H"),i=a("5VOL"),d=a("kIaO"),c=l(a("2FnB")),s=function(e){var t=e.editions;return o.default.createElement(o.Fragment,null,o.default.createElement("div",{className:"wt-hr"}),o.default.createElement("div",{className:"wt-container wt-section"},o.default.createElement("h2",{className:"wt-h2 wt-h2_flow"},"YouTrack"),o.default.createElement("div",{className:"wt-text-2 wt-text-2_flow"},o.default.createElement(r.Trans,{id:"Issue tracking and agile project management tool"})),o.default.createElement("a",{href:(0,d.i18n_href)("/youtrack/"),className:"wt-link wt-offset-top-24"},o.default.createElement(r.Trans,{id:"Learn more"})),o.default.createElement("div",{className:"wt-tabs wt-tabs_theme_light wt-tabs_size_m wt-tabs_mode_short wt-tabs_fill_container"},o.default.createElement("div",{className:"wt-offset-top-24 wt-tabs__tab-list"},t.map((function(e){var t=e.label,a=e.value;return o.default.createElement(u.NavLink,{key:a,to:"/".concat(a),className:"wt-tabs__tab",activeClassName:"wt-tabs__tab_selected"},t)})))),o.default.createElement(u.Route,{path:"/".concat(t[0].value),component:c.default}),o.default.createElement(u.Route,{path:"/".concat(t[1].value),render:function(){return o.default.createElement(i.LicenceTable,{noHeader:!0})}})))};t.default=s},z5Ax:function(e,t,a){var l=a("5Uuq"),n=a("KI45"),r=a("hfKm"),o=a("2Eek"),u=a("XoMD"),i=a("Jo+v"),d=a("4mXO"),c=a("pLtp");r(t,"__esModule",{value:!0}),t.default=t.YOUTRACK_PRICE_CALCULATOR_ID=void 0,a("xfY5");var s=n(a("/HRN")),f=n(a("WaGi")),m=n(a("ZDA2")),p=n(a("/+P4")),h=n(a("K47E")),v=n(a("N9n2")),_=n(a("xHqa"));a("a1Th"),a("Btvt");var E=a("ZD0w"),w=l(a("q1tI")),g=n(a("vZuS")),y=n(a("a45L")),k=n(a("TSYQ")),b=n(a("kIaO")),N=a("p78Z"),T=a("UXAq"),C=l(a("M4lP"));function x(e,t){var a=c(e);if(d){var l=d(e);t&&(l=l.filter((function(t){return i(e,t).enumerable}))),a.push.apply(a,l)}return a}a("DX3E");var U=function(e,t){return"monthly"===e?"/shop/buy?item=U:N:YTIUSG:M&quantity=".concat(t):"/shop/buy?item=U:N:YTIUSGPR&quantity=".concat(t)},L=function(e,t){return"monthly"===e?"/shop/buy?item=U:U:YTIUSG:M&quantity=".concat(t):"/shop/buy?item=U:U:YTIUSGPR&quantity=".concat(t)};t.YOUTRACK_PRICE_CALCULATOR_ID="youtrack-price-calculator";var I=[{proportion:10,endLabel:"3",color:"#5dd33c"},{proportion:13,endLabel:"100",color:"#208fd3"},{proportion:26,endLabel:"200",color:"#5d28af"},{proportion:17,endLabel:"300",color:"#842aad"},{proportion:17,endLabel:"400+",color:"#aa2b98"},{proportion:17,color:"#a53838"}];function S(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],l=e.price,n=e.formattedPrice;if(!l)return w.default.createElement("span",{className:(0,k.default)("wt-text-3",a&&"wt-text-3_theme_dark")},n);var r=t===b.default._({id:"yearly"})?l/12:l;return w.default.createElement(w.Fragment,null,w.default.createElement("span",{className:"wt-text-3 youtrack-price-calculator__price-label"},(0,N.formatPriceShort)(r)),w.default.createElement("span",{className:(0,k.default)("wt-text-3",a&&"wt-text-3_theme_dark")},w.default.createElement(E.Trans,{id:"/User"})))}function q(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=(0,N.getYoutrackIncloudPriceLevels)(e);return a.length<=0?C.DEFAULT_RANGES:a.map((function(a,l,n){var d={};d=l>I.length?I[I.length-1]:I[l];var c="";return l+1<n.length&&!n[l+1].max?c="".concat(a.max,"+"):a.max&&(c=a.max.toString()),function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(a,!0).forEach((function(t){(0,_.default)(e,t,a[t])})):u?o(e,u(a)):x(a).forEach((function(t){r(e,t,i(a,t))}))}return e}({},d,{start:a.min-1,end:a.max||a.min-1+600,endLabel:c,label:S(a,e,t)})}))}var M=function(e){function t(e){var a;return(0,s.default)(this,t),a=(0,m.default)(this,(0,p.default)(t).call(this,e)),(0,_.default)((0,h.default)(a),"handleChangeUsersSlider",(function(e){var t=Math.round(e);a.setState({users:t,usersInputValue:t.toString()})})),(0,_.default)((0,h.default)(a),"handleChangeUsersInput",(function(e){a.setState({users:Number(e.target.value),usersInputValue:e.target.value})})),(0,_.default)((0,h.default)(a),"handleChangeBilling",(function(e){a.setState({billingType:e})})),a.state={users:25,usersInputValue:"25",billingType:b.default._({id:"yearly"}),billingTypeControlled:void 0!==e.billingType},a}return(0,v.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=this.props,t=e.onBillingTypeChange,a=e.noHeader,l=e.onDark,n=this.state,r=n.users,o=n.usersInputValue,u=n.billingTypeControlled,i=(u?this.props:this.state).billingType,d=u?t:this.handleChangeBilling,c=(0,N.getYoutrackCostForAmountOfUsers)(r,i),s=0,f=0;r>0&&(s=(i===b.default._({id:"yearly"})?c/12:c)/r,f=c);return w.default.createElement("div",{className:(0,k.default)("",l&&"youtrack-price-calculator_theme_dark"),id:"youtrack-price-calculator"},!a&&w.default.createElement("div",{className:"wt-h2 wt-h2_flow"},w.default.createElement(E.Trans,{id:"Calculate your price"})),w.default.createElement(T.BillingSwitcher,{theme:l?"dark":"light",className:"wt-offset-top-48",yearlyCaptionText:b.default._({id:"Save 2 months"}),yearlyMainText:b.default._({id:"Annual billing"}),value:i,onChange:d}),w.default.createElement("div",{className:"wt-offset-top-48 wt-col-8"},w.default.createElement(C.default,{theme:l?"dark":"light",ranges:q(i,l),value:r,onChange:this.handleChangeUsersSlider})),w.default.createElement("div",{className:"wt-row wt-row_size_m"},w.default.createElement("div",{className:"wt-col-4 wt-col-lg-5 wt-col-md-12"},w.default.createElement("div",{className:"wt-row wt-row_size_xs"},w.default.createElement("div",{className:"wt-col-inline"},w.default.createElement("span",{className:(0,k.default)("wt-subtitle-2",l&&"wt-subtitle-2_theme_dark")},w.default.createElement(E.Trans,{id:"Users:"}))),w.default.createElement("div",{className:"wt-col-inline"},w.default.createElement(g.default,{min:0,type:"text",value:o,onChange:this.handleChangeUsersInput})))),w.default.createElement("div",{className:"wt-col-auto-fill wt-col-md-12 wt-offset-top-md-24"},w.default.createElement("div",{className:(0,k.default)("wt-subtitle-2",l&&"wt-subtitle-2_theme_dark")},(0,N.formatPrice)(i===b.default._({id:"yearly"})?c/12:c),c>0&&w.default.createElement(E.Trans,{id:"/month"})),i===b.default._({id:"yearly"})&&w.default.createElement(w.Fragment,null,w.default.createElement("div",{className:(0,k.default)("wt-text-2 wt-text-2_hardness_hard",l&&"wt-text-2_theme_dark")},w.default.createElement(E.Trans,{id:"{0} Total Price /Year",values:{0:(0,N.formatPrice)(f)}})),w.default.createElement("div",{className:"wt-offset-top-12"})),w.default.createElement("div",{className:(0,k.default)("wt-text-3",l&&"wt-text-3_theme_dark")},w.default.createElement(E.Trans,{id:"{0} Average Price per User/Month",values:{0:(0,N.formatPrice)(s)}})))),w.default.createElement("div",{className:"wt-row wt-row_size_m wt-offset-top-24"},w.default.createElement("div",{className:"wt-col-inline wt-offset-top-24"},w.default.createElement(y.default,{href:U(i,r),theme:l?"dark":"light"},w.default.createElement(E.Trans,{id:"Buy new"}))),w.default.createElement("div",{className:"wt-col-inline wt-offset-top-24"},w.default.createElement(y.default,{href:L(i,r),mode:"outline",theme:l?"dark":"light"},w.default.createElement(E.Trans,{id:"Upgrade"})))))}}]),t}(w.Component);t.default=M}},[[455,0]]]);
//# sourceMappingURL=index.entry.2bc37aed5683e4e8afb2.js.map