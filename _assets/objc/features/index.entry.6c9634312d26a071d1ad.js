(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{"/5Ja":function(e,t,a){"use strict";var r=a("KI45");a("hfKm")(t,"__esModule",{value:!0}),t.default=t.Events=void 0;var n=r(a("/HRN")),u=r(a("WaGi")),i=r(a("ZDA2")),d=r(a("/+P4")),o=r(a("K47E")),l=r(a("N9n2")),f=r(a("xHqa")),c=r(a("FxFC")),v=a("4ZJ8"),s={READY:"ready",QUALITY_CHANGE:"quality_change",END:"end",PLAY:"play",PAUSE:"pause",BUFFERING:"buffering",CUED:"cued"};t.Events=s;var h=function(e){function t(e,a){var r;return(0,n.default)(this,t),r=(0,i.default)(this,(0,d.default)(t).call(this,e,a)),void 0===window.YT?(r.throwError("YouTube Iframe API is not loaded, make sure component created via VideoPlayer.create"),(0,i.default)(r,(0,o.default)(r))):(r._player=r._createYouTubePlayer(),r)}return(0,l.default)(t,e),(0,u.default)(t,[{key:"_createYouTubePlayer",value:function(){var e=this.node,t=this.config,a=this._emitter.emit,r=(0,v.createYouTubePlayerConfig)(t),n=new YT.Player(e,r);n.addEventListener("onReady",(function(e){a(s.READY,e)})),n.addEventListener("onPlaybackQualityChange",(function(e){a(s.QUALITY_CHANGE,e)}));var u=YT.PlayerState;return n.addEventListener("onStateChange",(function(e){switch(e.data){case u.ENDED:a(s.END,e);break;case u.PLAYING:a(s.PLAY,e);break;case u.PAUSED:a(s.PAUSE,e);break;case u.BUFFERING:a(s.BUFFERING,e);break;case u.CUED:a(s.CUED,e)}})),n}},{key:"loadVideoById",value:function(e){this._player.cueVideoById(e)}},{key:"loadVideoByUrl",value:function(e){var t=(0,v.getVideoId)(e);t?this.loadVideoByUrl(t):this.throwError("Invalid video URL")}}],[{key:"create",value:function(e,a){return(0,v.loadYouTubePlayerApi)().then((function(){return new t(e,a)}))}}]),t}(c.default);t.default=h,(0,f.default)(h,"defaultConfig",{width:"640",height:"480",videoId:null,videoUrl:null,autoPlay:!1,showRelativeVideos:!1})},"0VM1":function(e,t,a){"use strict";var r=a("KI45"),n=a("hfKm");n(t,"__esModule",{value:!0}),n(t,"default",{enumerable:!0,get:function(){return u.default}});var u=r(a("/5Ja"))},257:function(e,t,a){a("ctTR"),e.exports=a("MdQK")},"4ZJ8":function(e,t,a){"use strict";var r=a("KI45");a("hfKm")(t,"__esModule",{value:!0}),t.getVideoId=l,t.getThumbUrl=function(e){var t=l(e);return o.replace("{video_id}",t).replace("{thumb_id}","0")},t.createYouTubePlayerConfig=function(e){var t=function(e){return!0===e?1:0},a=e.startTime,r=e.videoId;if("videoUrl"in e){r=l(e.videoUrl);var n=e.videoUrl.split("?")[1];if(n){var i=u.default.parse(n);i.t&&(a=i.t)}}return{width:e.width,height:e.height,videoId:r,playerVars:{rel:t(e.showRelatedVideos),autoplay:t(e.autoPlay),start:void 0!==a?a:0,html5:1}}},t.loadExternalScript=f,t.waitForYouTubePlayerApi=c,t.loadYouTubePlayerApi=function(){if(v)return n.default.resolve();return f(i).then((function(){return c()})).then((function(){return v=!0}))},t.THUMB_URL_PATTERN=t.VIDEO_ID_REGEXP=t.API_URL=void 0;var n=r(a("eVuF"));a("KKXr"),a("pIFo"),a("SRfc");var u=r(a("hhHN")),i="https://www.youtube.com/player_api";t.API_URL=i;var d=/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;t.VIDEO_ID_REGEXP=d;var o="https://img.youtube.com/vi/{video_id}/{thumb_id}.jpg";function l(e){var t=null;if(!e)return null;var a=e.match(d);return null!==a&&void 0!==a[7]&&(t=a[7]),t}function f(e){return new n.default((function(t,a){var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=t,r.onerror=a,document.head.appendChild(r)}))}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;return new n.default((function(t,a){return function t(a){void 0===window.YT||void 0===window.YT.Player?setTimeout(t.bind(null,a),e):a()}(t)}))}t.THUMB_URL_PATTERN=o;var v=!1},MdQK:function(e,t,a){var r=a("KI45"),n=r(a("EVdn")),u=r(a("OQRv")),i=r(a("Am66")),d=r(a("h9hA"));i.default.domReady((function(){(0,n.default)(".js-carousel-dots").each((function(e,t){(0,d.default)(t,{dots:!0,innerArrows:!0})})),new u.default(".js-video")}))},OQRv:function(e,t,a){"use strict";var r=a("KI45"),n=a("hfKm");n(t,"__esModule",{value:!0}),n(t,"default",{enumerable:!0,get:function(){return u.default}});var u=r(a("p44T"))},"TC+S":function(e,t,a){},p44T:function(e,t,a){"use strict";var r=a("KI45");a("hfKm")(t,"__esModule",{value:!0}),t.default=void 0,a("dRSK");var n=r(a("/HRN")),u=r(a("WaGi")),i=r(a("ZDA2")),d=r(a("/+P4")),o=r(a("K47E")),l=r(a("N9n2")),f=r(a("EVdn")),c=r(a("FxFC")),v=r(a("0VM1")),s=a("4ZJ8");a("TC+S");var h=function(e){function t(e,a){var r;(0,n.default)(this,t),r=(0,i.default)(this,(0,d.default)(t).call(this,e,a));var u=(0,f.default)(r.node);r.$node=u;var l=r.videoUrl;if(!l)return r.throwError("Video URL should be provided as `href` attribute of <a> tag"),(0,i.default)(r,(0,o.default)(r));var c=u.find("img");return 1===c.length||(c=r.createThumb((0,s.getThumbUrl)(l)),u.find("a").append(c)),r.$thumb=c,u.on("click",(function(e){e.preventDefault(),r.createPlayer()})),r}return(0,l.default)(t,e),(0,u.default)(t,[{key:"createThumb",value:function(e){return(0,f.default)('<img src="'.concat(e,'" class="embedded-video__thumb">'))}},{key:"createPlayer",value:function(){var e=this.$node,t={videoUrl:this.videoUrl,autoPlay:!0},a=(0,f.default)('<div class="embedded-video__player-wrap"></div>');return e.append(a),v.default.create(a.get(0),t)}},{key:"videoUrl",get:function(){return this.$node.find("a").attr("href")||null}}]),t}(c.default);t.default=h}},[[257,0]]]);
//# sourceMappingURL=index.entry.6ff0bc558f1ab6287219.js.map