<!DOCTYPE html>
<html lang="en">
<head>

                                            
        <!-- Error reporting -->
<script>(function(){
  window.reportError = function(msg, file, line, col, err, isUnhandledRejection){};
  var prevOnError = window.onerror;
  var onError = function(msg, file, line, col, err) {
    reportError(msg, file, line, col, err, false);
    prevOnError && prevOnError.apply(window, arguments);
    return false;
  };
  window.onerror = onError;
  // Setup reporting for unhandled Promise rejection errors
  window.addEventListener("unhandledrejection", function(e) {
    if (!e.reason) return;
    var l = getSrcLocation(e.reason);
    reportError(e.reason.message, l.file, l.line, l.col, e.reason, true);
  });
  // Setup reporting for console.error and console.warn calls
  patchConsole('error');
  patchConsole('warn');
  // Utility functions
  function patchConsole(fnName) {
    var fn = console[fnName];
    console[fnName] = function() {
      fn.apply(console, arguments);
      var l; try {
        throw new Error('_');
      } catch (err) {
        l = getSrcLocation(err, 1);
      }
      var msg = 'console.' + fnName + ': ' + Array.prototype.join.call(arguments, ' ');
      reportError(msg, l.file, l.line, l.col, undefined, false);
    };
  }
  function getSrcLocation(err, sd) {
    var s = err && err.stack;
    var l = s && s.split("\n")[1 + (sd|0)];
    var r = l && (/^\s*at [^(]*\((.*?):(\d+)(:\d+)?\)$/.exec(l) || /^\s*at (.*?):(\d+)(:\d+)?$/.exec(l));
    return r ? {file: r[1], line: r[2], col: r[3]} : {};
  }
})();</script>
<!-- Error reporting -->        <!-- Google Tag Manager -->
<script>(function() {
  // Initialize Tag Manager queue
  window.dataLayer = window.dataLayer || [];
  window.gtmLoaded = false;
  // Setup reporting for errors that occurred before Tag Manager initialized
  var prevReportError = window.reportError;
  var reportError = function(msg, file, line, col, err, isUnhandledRejection) {
    if (!window.gtmLoaded || isUnhandledRejection) {
      // Reproduce the behavior of the Tag Manager error handler
      window.dataLayer.push(makeEvt(msg, file, line));
    }
    prevReportError && prevReportError.apply(window, arguments);
  };
  window.reportError = reportError;
  // Utility functions
  function makeEvt(msg, file, line) {
    return {
      event: "gtm.pageError", "gtm.errorMessage": msg,
      "gtm.errorUrl": file, "gtm.errorLineNumber": line
    };
  }
})();</script>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;j.addEventListener(
    'load', function(){window.gtmLoaded=true});f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5P98');</script>
<!-- End Google Tag Manager -->        <!-- Sentry -->
<script>
    (function() {
        window.sentryLoaded = false;
        window.errorsForSentry = [];
        var prevReportError = window.reportError;
        var reportError = function(
            msg,
            file,
            line,
            col,
            err,
            isUnhandledRejection
        ) {
            if (!window.sentryLoaded) {
                window.errorsForSentry.push(err);
            }
            prevReportError && prevReportError.apply(window, arguments);
        };
        window.reportError = reportError;
    })();
</script>
<script>
    window.sentryLoad = function() {
        window.sentryLoaded = true;
        Sentry.init({
            dsn: 'https://1adb2a61713144eda0786e5af50ddc51@sentry.io/1423069',
            release:
                "jetbrainscom@a6ccaa6ddb",
            beforeSend: function(event) {
                Object.keys(event).forEach(function(key) {
                    var value = event[key];
                    if (isEmail(value)) {
                        delete event[key];
                    }
                });
                return event;
            }
        });
        Sentry.configureScope(function(scope) {
            scope.setTag('page_locale', 'en-us');
            scope.setTag('browser.locale', getPageLocale());

            scope.setTag('http.urlFull', location.href);
            var protocol = location.protocol || '';
            //omit `:` from location.protocol string
            var protocolString = protocol.substring(0, protocol.length - 1);

            scope.setTag('http.protocol', protocolString);

            scope.setTag('http.hostname', location.hostname);

            var search = location.search || '';
            //omit ? from location.search string
            var searchString = search.substr(1);
            if (searchString !== '') {
                scope.setTag('http.query', searchString || '1');
            }
            var hash = location.hash || '';
            //omit # from location.hash string
            var hashString = hash.substr(1);
            if (hashString !== '') {
                scope.setTag('http.fragment', hashString);
            }
        });
        window.errorsForSentry.forEach(Sentry.captureException);

        function getPageLocale() {
            return (
                (navigator.languages && navigator.languages[0]) ||
                navigator.language
            );
        }
        function isEmail(value) {
            var emailRegex = /[\+\-\_\.a-zA-Z0-9]+@[\-\.a-zA-Z0-9]+\.[a-zA-Z0-9]+/g;
            return emailRegex.test(value);
        }
    };
</script>
<script src="https://browser.sentry-cdn.com/5.7.1/bundle.min.js" crossorigin="anonymous" onload="sentryLoad()" async></script>
<!-- End Sentry -->    
                <title>Documentation - IntelliJ IDEA</title>
    
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, maximum-scale=1">

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000">
<meta name="apple-mobile-web-app-title" content="JetBrains">
<meta name="application-name" content="JetBrains">
<meta name="msapplication-TileColor" content="#000000">
<meta name="theme-color" content="#000000">    <link rel="canonical" href="https://www.jetbrains.com/idea/documentation/" />    <!-- .61-->
                            <meta name="description" content="Code-centric IDE, focused on your productivity. Full Java EE support, deep code understanding, best debugger, refactorings, everything right out of the box..."/>
        
                    <meta name="keywords" content="IntelliJ IDEA, Java IDE, Java editor, Java debugger, Java code generator, Java code coverage, Java GUI builder, Java EE, Java programming"/>
        
            
        <link rel="alternate" hreflang="x-default" href="https://www.jetbrains.com/idea/documentation/" />

                        <link rel="alternate" hreflang="en" href="https://www.jetbrains.com/idea/documentation/" />
                                <link rel="alternate" hreflang="de" href="https://www.jetbrains.com/de-de/idea/documentation/" />
                                <link rel="alternate" hreflang="es" href="https://www.jetbrains.com/es-es/idea/documentation/" />
                                <link rel="alternate" hreflang="fr" href="https://www.jetbrains.com/fr-fr/idea/documentation/" />
                                <link rel="alternate" hreflang="ja" href="https://www.jetbrains.com/ja-jp/idea/documentation/" />
                                <link rel="alternate" hreflang="ko" href="https://www.jetbrains.com/ko-kr/idea/documentation/" />
                                <link rel="alternate" hreflang="ru" href="https://www.jetbrains.com/ru-ru/idea/documentation/" />
                                <link rel="alternate" hreflang="zh-CN" href="https://www.jetbrains.com/zh-cn/idea/documentation/" />
                                            <link rel="alternate" hreflang="x-klingon" href="https://www.jetbrains.com/tl-aa/idea/documentation/" />
            
    
    
        
    
    
    <script>
        var current_lang = 'en-us';
                                    var i18n_info = {"current_lang": "en-us", "languages": [{"canonical": "en", "code": "en-us", "label": "English", "page_translated": true, "url": "/idea/documentation/"}, {"canonical": "de", "code": "de-de", "label": "Deutsch", "page_translated": true, "url": "/de-de/idea/documentation/"}, {"canonical": "es", "code": "es-es", "label": "Espa\u00f1ol", "page_translated": true, "url": "/es-es/idea/documentation/"}, {"canonical": "fr", "code": "fr-fr", "label": "Fran\u00e7ais", "page_translated": true, "url": "/fr-fr/idea/documentation/"}, {"canonical": "ja", "code": "ja-jp", "label": "\u65e5\u672c\u8a9e", "page_translated": true, "url": "/ja-jp/idea/documentation/"}, {"canonical": "ko", "code": "ko-kr", "label": "\ud55c\uad6d\uc5b4", "page_translated": true, "url": "/ko-kr/idea/documentation/"}, {"canonical": "ru", "code": "ru-ru", "label": "\u0420\u0443\u0441\u0441\u043a\u0438\u0439", "page_translated": true, "url": "/ru-ru/idea/documentation/"}, {"canonical": "zh-CN", "code": "zh-cn", "label": "\u7b80\u4f53\u4e2d\u6587", "page_translated": true, "url": "/zh-cn/idea/documentation/"}, {"canonical": "pt-BR", "code": "pt-br", "label": "Portugu\u00eas do Brasil", "page_translated": false, "url": "/pt-br/idea/documentation/"}, {"canonical": "x-klingon", "code": "tl-aa", "label": "tlhIngan Hol", "page_translated": true, "url": "/tl-aa/idea/documentation/"}]};
                            var navigationMenu = {"primary": {"id": "main_v2", "items": [{"id": "tools", "title": "Tools", "descriptionTitle": "Toolbox App", "descriptionLogoId": "toolbox", "descriptionLink": "Learn more", "descriptionUrl": "/toolbox-app/", "description": "Manage your tools the easy way", "src": "/img/banners-menu-main/toolbox-vertical.png", "horisontalSrc": "/img/banners-menu-main/toolbox-horisontal.png", "bgColor": "#3E0598", "isVisible": true, "hasCategories": true, "items": [{"title": "IDEs", "items": [{"isActive": false, "id": "appcode", "title": "AppCode", "url": "/objc/", "logoLeftActionId": "appcode", "items": [], "cleaned_url": "/objc/"}, {"isActive": false, "id": "clion", "title": "CLion", "url": "/clion/", "logoLeftActionId": "clion", "items": [], "cleaned_url": "/clion/"}, {"isActive": false, "id": "datalore", "title": "Datalore", "url": "https://datalore.io/", "isExternalLink": true, "logoLeftActionId": "datalore", "items": [], "cleaned_url": "https://datalore.io/"}, {"isActive": false, "id": "datagrip", "title": "DataGrip", "url": "/datagrip/", "logoLeftActionId": "datagrip", "items": [], "cleaned_url": "/datagrip/"}, {"isActive": false, "id": "goland", "title": "GoLand", "url": "/go/", "logoLeftActionId": "goland", "items": [], "cleaned_url": "/go/"}, {"isActive": false, "id": "idea", "title": "IntelliJ IDEA", "url": "/idea/", "logoLeftActionId": "intellij-idea", "items": [], "cleaned_url": "/idea/"}, {"isActive": false, "id": "phpstorm", "title": "PhpStorm", "url": "/phpstorm/", "logoLeftActionId": "phpstorm", "items": [], "cleaned_url": "/phpstorm/"}, {"isActive": false, "id": "pycharm", "title": "PyCharm", "url": "/pycharm/", "logoLeftActionId": "pycharm", "items": [], "cleaned_url": "/pycharm/"}, {"isActive": false, "id": "rider", "title": "Rider", "url": "/rider/", "logoLeftActionId": "rider", "items": [], "cleaned_url": "/rider/"}, {"isActive": false, "id": "rubymine", "title": "RubyMine", "url": "/ruby/", "logoLeftActionId": "rubymine", "items": [], "cleaned_url": "/ruby/"}, {"isActive": false, "id": "webstorm", "title": "WebStorm", "url": "/webstorm/", "logoLeftActionId": "webstorm", "items": [], "cleaned_url": "/webstorm/"}, {"isActive": false, "id": "toolbox", "type": "special", "title": "Toolbox App", "url": "/toolbox-app/", "logoLeftId": "toolbox", "description": "A control panel for your tools and projects", "items": [], "cleaned_url": "/toolbox-app/"}]}, {"title": ".NET & VISUAL STUDIO", "items": [{"isActive": false, "id": "resharper", "title": "ReSharper", "url": "/resharper/", "logoLeftActionId": "resharper", "items": [], "cleaned_url": "/resharper/"}, {"isActive": false, "id": "rider", "title": "Rider", "url": "/rider/", "logoLeftActionId": "rider", "items": [], "cleaned_url": "/rider/"}, {"isActive": false, "id": "resharper-cpp", "title": "ReSharper C++", "url": "/resharper-cpp/", "logoLeftActionId": "resharper-cpp", "items": [], "cleaned_url": "/resharper-cpp/"}, {"isActive": false, "id": "dotcover", "title": "dotCover", "url": "/dotcover/", "logoLeftActionId": "dotcover", "items": [], "cleaned_url": "/dotcover/"}, {"isActive": false, "id": "dotmemory", "title": "dotMemory", "url": "/dotmemory/", "logoLeftActionId": "dotmemory", "items": [], "cleaned_url": "/dotmemory/"}, {"isActive": false, "id": "dotpeek", "title": "dotPeek", "url": "/decompiler/", "logoLeftActionId": "dotpeek", "items": [], "cleaned_url": "/decompiler/"}, {"isActive": false, "id": "dottrace", "title": "dotTrace", "url": "/profiler/", "logoLeftActionId": "dottrace", "items": [], "cleaned_url": "/profiler/"}]}, {"title": "TEAM TOOLS", "items": [{"isActive": false, "id": "teamcity", "title": "TeamCity", "url": "/teamcity/", "logoLeftActionId": "teamcity", "items": [], "cleaned_url": "/teamcity/"}, {"isActive": false, "id": "upsource", "title": "Upsource", "url": "/upsource/", "logoLeftActionId": "upsource", "items": [], "cleaned_url": "/upsource/"}, {"isActive": false, "id": "youtrack", "title": "YouTrack", "url": "/youtrack/", "logoLeftActionId": "youtrack", "items": [], "cleaned_url": "/youtrack/"}, {"isActive": false, "id": "hub", "title": "Hub", "url": "/hub/", "logoLeftActionId": "hub", "items": [], "cleaned_url": "/hub/"}]}, {"title": "PLUGIN MARKETPLACE", "items": [{"isActive": false, "id": "bigdata", "title": "Big Data Tools", "url": "https://plugins.jetbrains.com/plugin/12494-big-data-tools", "isExternalLink": true, "items": [], "cleaned_url": "https://plugins.jetbrains.com/plugin/12494-big-data-tools"}, {"isActive": false, "id": "rustsupport", "title": "Rust", "url": "https://plugins.jetbrains.com/plugin/8182-rust", "isExternalLink": true, "items": [], "cleaned_url": "https://plugins.jetbrains.com/plugin/8182-rust"}, {"isActive": false, "id": "scalaplugin", "title": "Scala", "url": "https://plugins.jetbrains.com/plugin/1347-scala", "isExternalLink": true, "items": [], "cleaned_url": "https://plugins.jetbrains.com/plugin/1347-scala"}, {"isActive": false, "id": "idethemes", "title": "IDE Themes", "url": "https://plugins.jetbrains.com/search?tags=Theme", "isExternalLink": true, "items": [], "cleaned_url": "https://plugins.jetbrains.com/search?tags=Theme"}, {"isActive": false, "id": "plugins", "title": "All Plugins", "url": "https://plugins.jetbrains.com/", "isExternalLink": true, "items": [], "cleaned_url": "https://plugins.jetbrains.com/"}]}, {"title": "EDUCATION", "items": [{"isActive": false, "id": "pycharm-edu", "title": "PyCharm Edu", "url": "/education/", "urlHash": "#lang=python&role=learner", "logoLeftActionId": "pycharm-edu", "items": [], "cleaned_url": "/education/"}, {"isActive": false, "id": "idea-edu", "title": "IntelliJ IDEA Edu", "url": "/education/", "urlHash": "#lang=java&role=learner", "logoLeftActionId": "intellij-idea", "items": [], "cleaned_url": "/education/"}, {"isActive": false, "id": "jb-academy", "title": "JB Academy", "url": "/academy/", "items": [], "cleaned_url": "/academy/"}]}]}, {"id": "languages", "title": "Languages", "descriptionTitle": "Kotlin/Everywhere", "descriptionLogoId": "header-kotlin-everywhere", "descriptionLink": "Join in!", "descriptionUrl": "//everywhere.kotlinlang.org", "description": "A worldwide event series for learning the best Kotlin practices on all platforms", "descriptionBig": true, "src": "/img/banners-menu-main/kotlin-vertical.png", "horisontalSrc": "/img/banners-menu-main/kotlin-horisontal.png", "bgColor": "#D6721C", "isExternalLink": true, "isVisible": true, "hasCategories": false, "items": [{"isActive": false, "id": "kotlin", "title": "Kotlin", "url": "https://kotlinlang.org/", "isExternalLink": true, "logoLeftId": "header-kotlin-grayscale", "logoLeftActionId": "kotlin", "logoLeftSize": "50", "description": "Programming language \n for JVM & Android", "items": [], "cleaned_url": "https://kotlinlang.org/"}, {"isActive": false, "id": "mps", "title": "MPS", "url": "/mps/", "logoLeftId": "header-mps-grayscalse", "logoLeftActionId": "mps", "logoLeftSize": "50", "description": "Create your own domain-specific language", "items": [], "cleaned_url": "/mps/"}]}, {"id": "solutions", "title": "Solutions", "descriptionTitle": "JetBrains Academy", "descriptionLogoId": "academy-logo", "descriptionLink": "Join in!", "descriptionUrl": "/academy", "description": "An educational platform for future professionals", "src": "/img/banners-menu-main/academy-vertical.png", "horisontalSrc": "/img/banners-menu-main/academy-horisontal.png", "bgColor": "#53288E", "hasCategories": false, "isVisible": true, "items": [{"isActive": false, "title": "C++ Tools", "url": "/cpp/", "logoLeftId": "header-cpp-grayscale", "logoLeftActionId": "header-cpp", "description": "Tools for C/C++ development \nfor any platform", "items": [], "cleaned_url": "/cpp/"}, {"isActive": false, "title": "For Business", "url": "/store/business/", "logoLeftId": "header-for-business-grayscale", "logoLeftActionId": "header-for-business", "description": "Wide range of tools. \nAll major technologies covered", "items": [], "cleaned_url": "/store/business/"}, {"isActive": false, "title": "Game Development", "url": "/gamedev/", "logoLeftId": "header-gamedev-grayscale", "logoLeftActionId": "header-gamedev", "description": "Tools for game development \nfor any platform", "items": [], "cleaned_url": "/gamedev/"}, {"isActive": false, "title": "DevOps", "url": "/devops/", "logoLeftId": "header-devops-grayscale", "logoLeftActionId": "header-devops", "description": "Tools and integrations \nfor any infrastructure", "items": [], "cleaned_url": "/devops/"}, {"isActive": false, "title": "Education", "url": "/education/", "logoLeftId": "header-education-grayscale", "logoLeftActionId": "header-education", "description": "Products to learn and teach programming", "items": [], "cleaned_url": "/education/"}]}, {"id": "support", "title": "Support", "description": "Pricing and licensing for businesses and individuals", "descriptionTitle": "JetBrains Store", "descriptionLogoId": "header-store", "descriptionUrl": "/store/?fromMenu#edition=commercial", "descriptionLink": "visit store", "isVisible": true, "hasCategories": true, "items": [{"title": "CUSTOMERS", "items": [{"isActive": false, "title": "Sales Support", "url": "/support/sales/", "description": "Orders, payments", "items": [], "cleaned_url": "/support/sales/"}, {"isActive": false, "title": "Product Support", "url": "/support/", "description": "Tech support, documentation", "items": [], "cleaned_url": "/support/"}]}, {"title": "COMMUNITY PROGRAMS", "items": [{"isActive": false, "title": "Education", "url": "/community/education/", "description": "Students, classrooms, training", "items": [], "cleaned_url": "/community/education/"}, {"isActive": false, "title": "Open Source", "url": "/community/opensource/", "description": "Projects support", "items": [], "cleaned_url": "/community/opensource/"}, {"isActive": false, "title": "Sponsorship", "url": "/community/support/", "description": "User groups, events, technology experts", "items": [], "cleaned_url": "/community/support/"}]}]}, {"id": "company", "title": "Company", "isVisible": true, "hasCategories": true, "items": [{"title": "INITIATIVES", "items": [{"isActive": false, "title": "Open Source", "url": "/opensource/", "description": "Projects, contributions", "items": [], "cleaned_url": "/opensource/"}, {"isActive": false, "title": "Research", "url": "/research/", "description": "Market, Scientific", "items": [], "cleaned_url": "/research/"}]}, {"title": "COMPANY", "items": [{"isActive": false, "title": "About", "url": "/company/", "description": "People, customers, awards", "items": [], "cleaned_url": "/company/"}, {"isActive": false, "title": "Brand Assets", "url": "/company/brand/", "description": "Guidelines, logos", "items": [], "cleaned_url": "/company/brand/"}, {"isActive": false, "title": "Careers", "url": "/careers/apply/", "description": "Jobs, internships", "items": [], "cleaned_url": "/careers/apply/"}, {"isActive": false, "title": "Events", "url": "/company/events/", "description": "Conferences, meetups", "items": [], "cleaned_url": "/company/events/"}, {"isActive": false, "title": "Contacts", "url": "/company/contacts/", "description": "Partners, resellers, Kotlin training", "items": [], "cleaned_url": "/company/contacts/"}]}, {"title": "RESOURCES", "items": [{"isActive": false, "title": "Newsletters", "url": "/resources/newsletters/", "items": [], "cleaned_url": "/resources/newsletters/"}, {"isActive": false, "title": "Webinars", "url": "/resources/webinars/", "items": [], "cleaned_url": "/resources/webinars/"}, {"isActive": false, "title": "Early Access", "url": "/resources/eap/", "items": [], "cleaned_url": "/resources/eap/"}, {"isActive": false, "title": "Blog", "url": "//blog.jetbrains.com/", "isExternalLink": true, "items": [], "cleaned_url": "//blog.jetbrains.com/"}]}]}, {"isActive": false, "id": "store", "url": "/store/?fromNavMenu", "title": "Store", "isVisible": true, "hasCategories": false, "items": [], "cleaned_url": "/store/?fromNavMenu"}]}, "secondary": {"isActive": true, "id": "product_idea", "logoId": "intellij-idea", "url": "/idea/", "title": "IntelliJ IDEA", "items": [{"isActive": false, "title": "What's New", "url": "/idea/whatsnew/", "items": [], "cleaned_url": "/idea/whatsnew/"}, {"isActive": false, "title": "Features", "url": "/idea/features/", "items": [], "cleaned_url": "/idea/features/"}, {"isActive": true, "title": "Learn", "url": "/idea/documentation/", "items": [], "cleaned_url": "/idea/documentation/"}, {"isActive": false, "title": "Buy", "url": "/idea/buy/", "items": [], "cleaned_url": "/idea/buy/"}, {"isActive": false, "title": "Download", "url": "/idea/download/", "type": "button", "items": [], "cleaned_url": "/idea/download/"}], "cleaned_url": "/idea/"}};
        
        var is_layout_adaptive = false;
        
        var disable_language_picker = false;
        
        var english_only_url_prefixes = [];
            </script>
    
            <script></script>
    
        
    
            <link href="/_assets/common.d44d81f300d3bff87efe.css" rel="stylesheet" type="text/css">
<link href="/_assets/default-page.fabf52db4bf34ea78af0.css" rel="stylesheet" type="text/css">
        <script src="/_assets/common.34604685b633d15ae3ed.js" type="text/javascript"></script>
<script src="/_assets/default-page.2e180fc15a6b94fe7fa3.js" type="text/javascript"></script>
<script src="/_assets/idea/documentation/index.entry.22e859bfc8e09ffa1f26.js" type="text/javascript"></script>
<script src="/_assets/idea/inc/social-footer/index.entry.0ff93008ad40c36f6493.js" type="text/javascript"></script>
    
            <!-- Social Media tag Starts -->
    <!-- Open Graph data -->
            <meta property="og:title" content="Documentation - IntelliJ IDEA"/>
    
                    <meta property="og:description" content="Code-centric IDE, focused on your productivity. Full Java EE support, deep code understanding, best debugger, refactorings, everything right out of the box..."/>
    <meta property="og:image" content="http://resources.jetbrains.com/storage/products/intellij-idea/img/meta/intellij-idea_1280x800.png"/>

    <meta property="og:site_name" content="JetBrains"/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content="https://www.jetbrains.com/idea/documentation/"/>
    <!-- Social Media tag Ends -->
</head>

<body class="nojs  ">

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5P98" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<script>
/*! modernizr 3.2.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-flexbox-flexboxtweener !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,i,s,l;for(var f in v)if(v.hasOwnProperty(f)){if(e=[],n=v[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)s=e[i],l=s.split("."),1===l.length?Modernizr[l[0]]=o:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=o),C.push((o?"":"no-")+l.join("-"))}}function i(e,n){return!!~(""+e).indexOf(n)}function s(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function l(e,n){return function(){return e.apply(n,arguments)}}function f(e,n,t){var o;for(var i in e)if(e[i]in n)return t===!1?e[i]:(o=n[e[i]],r(o,"function")?l(o,t||n):o);return!1}function a(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function u(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):b?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function d(){var e=n.body;return e||(e=u(b?"svg":"body"),e.fake=!0),e}function p(e,t,r,o){var i,s,l,f,a="modernizr",p=u("div"),c=d();if(parseInt(r,10))for(;r--;)l=u("div"),l.id=o?o[r]:a+(r+1),p.appendChild(l);return i=u("style"),i.type="text/css",i.id="s"+a,(c.fake?c:p).appendChild(i),c.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),p.id=a,c.fake&&(c.style.background="",c.style.overflow="hidden",f=_.style.overflow,_.style.overflow="hidden",_.appendChild(c)),s=t(p,e),c.fake?(c.parentNode.removeChild(c),_.style.overflow=f,_.offsetHeight):p.parentNode.removeChild(p),!!s}function c(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(a(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+a(n[o])+":"+r+")");return i=i.join(" or "),p("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function m(e,n,o,l){function f(){d&&(delete E.style,delete E.modElem)}if(l=r(l,"undefined")?!1:l,!r(o,"undefined")){var a=c(e,o);if(!r(a,"undefined"))return a}for(var d,p,m,h,y,v=["modernizr","tspan"];!E.style;)d=!0,E.modElem=u(v.shift()),E.style=E.modElem.style;for(m=e.length,p=0;m>p;p++)if(h=e[p],y=E.style[h],i(h,"-")&&(h=s(h)),E.style[h]!==t){if(l||r(o,"undefined"))return f(),"pfx"==n?h:!0;try{E.style[h]=o}catch(g){}if(E.style[h]!=y)return f(),"pfx"==n?h:!0}return f(),!1}function h(e,n,t,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),l=(e+" "+x.join(s+" ")+s).split(" ");return r(n,"string")||r(n,"undefined")?m(l,n,o,i):(l=(e+" "+S.join(s+" ")+s).split(" "),f(l,n,t))}function y(e,n,r){return h(e,t,t,n,r)}var v=[],g={_version:"3.2.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){v.push({name:e,fn:n,options:t})},addAsyncTest:function(e){v.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=g,Modernizr=new Modernizr;var C=[],w="Moz O ms Webkit",x=g._config.usePrefixes?w.split(" "):[];g._cssomPrefixes=x;var S=g._config.usePrefixes?w.toLowerCase().split(" "):[];g._domPrefixes=S;var _=n.documentElement,b="svg"===_.nodeName.toLowerCase(),z={elem:u("modernizr")};Modernizr._q.push(function(){delete z.elem});var E={style:z.elem.style};Modernizr._q.unshift(function(){delete E.style}),g.testAllProps=h,g.testAllProps=y,Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),Modernizr.addTest("flexboxtweener",y("flexAlign","end",!0)),o(),delete g.addTest,delete g.addAsyncTest;for(var P=0;P<Modernizr._q.length;P++)Modernizr._q[P]();e.Modernizr=Modernizr}(window,document);

if (!Modernizr.flexbox && !Modernizr.flexboxtweener) {

  var $body = $('body');

  var nodesClasses = {
    wrapper: 'not-supported-browser',
    container: 'not-supported-browser__container',

    title: 'not-supported-browser__title',
    content: 'not-supported-browser__content',
    logo: 'not-supported-browser__logo'
  };

  var nodes = {
    wrapper: $('<div class="' + nodesClasses.wrapper + '"></div>'),
    title: $('<div class="' + nodesClasses.title + '">Sorry, your browser is not fully supported</div>'),
    content: $('<div class="' + nodesClasses.content + '">There may be some issues with pages layout in your current browser.<br/>Please use an alternate browser until we resolve the issues.<br/>Thank you.</div>'),
    container: $('<div class="' + nodesClasses.container + '"></div>'),
    logo: $('<div class="' + nodesClasses.logo + '"><svg class="sprite-img _jetbrains" xmlns:xlink="http://www.w3.org/1999/xlink"><use xlink:href="#jetbrains"></use></svg></div>')
  };

  $body.addClass('overflow-hidden');


  nodes.content
    .prepend(nodes.title)
    .prepend(nodes.logo);

  nodes.container
    .append(nodes.content);

  nodes.wrapper
    .append(nodes.container)
    .appendTo($body);
}
</script>
<div class="page">
                <div class="page__header">
                <header class="menu-main header"  id="js-menu-main">
    <div class="wt-container">
        <div class="wt-row wt-row_nowrap wt-row_size_s wt-row_align-items_center">
            <div class="wt-col-auto-fill">
                <a href="/" class="menu-main__logo-link"><svg class="_jetbrains-simple sprite-img menu-main__logo" xmlns:xlink="http://www.w3.org/1999/xlink"><use xlink:href="#jetbrains-simple"></use></svg></a>
            </div>
            <div class="wt-col-inline wt-display-md-none menu-main-skeleton-text-1" style="min-width: 69px"></div>
            <div class="wt-col-inline wt-display-md-none menu-main-skeleton-text-1" style="min-width: 81px"></div>
            <div class="wt-col-inline wt-display-md-none menu-main-skeleton-text-1" style="min-width: 46px"></div>
            <div class="wt-col-inline menu-main-skeleton-button"></div>
            <div class="wt-col-inline menu-main-skeleton-button"></div>
        </div>
    </div>
</header>



  <div class="menu-second" id="js-menu-second">
    <div class="wt-container">
        <div id="js-menu-second-mobile-wrapper" class="wt-display-none">
            <div id="js-menu-second-mobile" >
                <div class="menu-second-mobile wt-row wt-row_size_m wt-row_align-items_center wt-row_justify_between">
                    <div class="wt-col-inline menu-second-skeleton-text-2" style="max-width: 120px"></div>
                    <div class="wt-col-inline menu-second-skeleton-button" style="max-width: 80px"></div>
                </div>
            </div>
        </div>

        <div id="js-menu-second-desktop" class="menu-second-desktop
                       wt-row wt-row_size_0 wt-row_align-items_center">
            <div class="wt-col-auto-fill">
                <a class="menu-second-title-box"
                   href="/idea/">
                                            <span class="menu-second-title-box__logo jetbrains-logo">
                            <svg class="_intellij-idea sprite-img" xmlns:xlink="http://www.w3.org/1999/xlink"><use xlink:href="#intellij-idea"></use></svg>
                        </span>
                    
                    <span class="menu-second-title-box__title wt-h3">IntelliJ IDEA</span>
                </a>
            </div>

                            
                                                        <a href="/idea/whatsnew/"
                       class="wt-col-inline wt-text-2 wt-text-2_hardness_average menu-second__link
                                                                ">
                        What&#39;s New
                                            </a>
                                            
                                                        <a href="/idea/features/"
                       class="wt-col-inline wt-text-2 wt-text-2_hardness_average menu-second__link
                                                                ">
                        Features
                                            </a>
                                            
                                                        <a href="/idea/documentation/"
                       class="wt-col-inline wt-text-2 wt-text-2_hardness_average menu-second__link
                                                                wt-text-2_hardness_primary">
                        Learn
                                            </a>
                                            
                                                        <a href="/idea/buy/"
                       class="wt-col-inline wt-text-2 wt-text-2_hardness_average menu-second__link
                                                                ">
                        Buy
                                            </a>
                                            
                            
                                                    
                            <a href="/idea/download/"
                   class="wt-col-inline menu-second__download-button wt-button wt-button_size_s wt-button_mode_primary">
                    Download
                </a>
                    </div>

    </div>
</div>

            </div>
    
    <div class="page__content ">
        <div class="section-content">
<div class="wt-container article-content">
<div class="wt-row wt-row_size_m">
<div class="wt-col-12">
<h1 class="_big">Learn and Support</h1>
</div>
<div class="wt-col-12">
<h2>Video tutorials</h2>
<div class="features-block">
<div id="playlist"></div>
</div>
</div>
<div class="wt-col-6">
<div class="wt-row wt-row_size_m">
<div class="wt-col-12">
<h2>Getting started</h2>
<p class="sub-title">Become a more productive developer by learning the most important IntelliJ
                                IDEA features.</p>
</div>
<div class="wt-col-6">
<p><a href="https://www.jetbrains.com/help/idea/?Installing_and_Launching" target="_blank">Installing and Launching</a></p>
<p><a href="https://www.jetbrains.com/help/idea/?Discover_IntelliJ_IDEA" target="_blank"><strong>Discover IntelliJ IDEA</strong></a></p>
<p><a href="https://youtu.be/eq3KiAH4IBI" target="_blank"><strong>42 IntelliJ IDEA Tips and Tricks</strong></a></p>
<p><a href="https://javaspecialists.teachable.com/p/intellij-wizardry" target="_blank"><strong>IntelliJ Wizardry</strong> Video Course with Heinz Kabutz</a></p>
<p><a href="https://www.jetbrains.com/help/idea/?Pro_Tips" target="_blank">IntelliJ IDEA Pro Tips</a></p>
<p><a href="https://www.jetbrains.com/help/idea/?top" target="_blank">Help</a></p>
<!--<p><a target="_blank" href="https://www.jetbrains.com/help/idea/intellij-idea-help.pdf">Help</a> (PDF)</p>-->
</div>
<div class="wt-col-6">
<p><a href="https://www.jetbrains.com/help/idea/?mastering_keyboard_shortcuts" target="_blank">Mastering IntelliJ IDEA Keyboard Shortcuts</a></p>
<p><a href="https://www.jetbrains.com/help/idea/?Migrating_from_Eclipse_to_IntelliJ_IDEA" target="_blank"><strong>IntelliJ IDEA for Eclipse Users</strong></a></p>
<p><a href="https://www.jetbrains.com/help/idea/?NetBeans" target="_blank">IntelliJ IDEA for NetBeans Users</a></p>
<p><a href="//resources.jetbrains.com/storage/products/intellij-idea/docs/IntelliJIDEA_ReferenceCard.pdf" target="_blank">Keymap for Windows/macOS/Linux</a> (PDF)</p>
</div>
</div>
</div>
<div class="wt-col-6">
<div class="wt-row wt-row_size_m">
<div class="wt-col-12">
<h2>How-tos</h2>
<p class="sub-title">Learn how to use IntelliJ IDEA with your favorite language, platform or framework.</p>
</div>
<div class="wt-col-4">
<p><a href="https://www.jetbrains.com/help/idea/?Creating_and_running_your_first_Java_EE_application" target="_blank"><strong>Java EE</strong></a></p>
<p><a href="https://www.jetbrains.com/help/idea/?IntelliJ.IDEA.Concepts.Java.EE.Development.Spring" target="_blank"><strong>Spring</strong></a></p>
<p><a href="https://www.jetbrains.com/help/idea/?topicId100000077" target="_blank">GWT</a></p>
<p><a href="https://www.jetbrains.com/help/idea/?Getting_Started_with_Vaadin" target="_blank">Vaadin</a></p>
<p><a href="https://www.jetbrains.com/help/idea/?topicId571950" target="_blank">Grails</a></p>
<p><a href="https://www.jetbrains.com/help/idea/?Getting_Started_with_Play_2_x" target="_blank">Play</a></p>
</div>
<div class="wt-col-4">
<p><a href="https://kotlinlang.org/docs/tutorials/getting-started.html" target="_blank"><strong>Kotlin</strong></a></p>
<p><a href="https://www.jetbrains.com/help/idea/?Getting_Started_with_Groovy" target="_blank">Groovy</a></p>
<p><a href="https://www.jetbrains.com/help/idea/?Discover_Intellij_IDEA_for_Scala" target="_blank">Scala</a></p>
<p><a href="https://www.jetbrains.com/help/idea/?Android_Support_Overview" target="_blank"><strong>Android</strong></a></p>
</div>
<div class="wt-col-4">
<p><a href="https://www.jetbrains.com/help/idea/?topicId1000000103" target="_blank"><strong>JavaScript</strong></a></p>
<p><a href="https://www.jetbrains.com/help/idea/?TypeScript_Support" target="_blank">TypeScript</a></p>
<p><a href="https://www.jetbrains.com/help/idea/?Using_AngularJS" target="_blank">AngularJS</a></p>
<p><a href="https://www.jetbrains.com/help/idea/?React_JSX_and_TSX" target="_blank">React</a></p>
<p><a href="https://www.jetbrains.com/help/idea/?Developing_Node_JS_Applications" target="_blank">Node.js</a></p>
<p><a href="https://www.jetbrains.com/help/idea/?Using_PhoneGap_Cordova" target="_blank">PhoneGap</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<section class="section-content _bg-medium _choose-edition">
<div class="wt-container article-content">
<div class="wt-row wt-row_size_m">
<div class="wt-col-6">
<div class="wt-row wt-row_size_m">
<div class="wt-col-12">
<h2>Contribution</h2>
<p class="sub-title">Join our growing community and directly influence the evolution of the world-leading development tool.</p>
</div>
<div class="wt-col-6">
<p><a href="https://github.com/JetBrains/intellij-community" target="_blank"><strong>Fork on GitHub</strong></a></p>
<p><a href="http://www.jetbrains.org/intellij/sdk/docs/basics/checkout_and_build_community.html" target="_blank">Build Community Edition</a></p>
<p><a href="http://www.jetbrains.org/intellij/sdk/docs/basics/getting_started.html" target="_blank">Create Your First Plugin</a></p>
<p><a href="http://www.jetbrains.org/intellij/sdk/docs/tutorials/custom_language_support_tutorial.html" target="_blank"><strong>Custom Language Support</strong></a></p>
<p><a href="http://www.jetbrains.org/intellij/sdk/docs/index.html" target="_blank"><strong>SDK Documentation</strong></a></p>
</div>
<div class="wt-col-6">
<p><a href="http://www.jetbrains.org/display/IJOS/Contributor+Agreement" target="_blank">Contributor Agreement</a></p>
<p><a href="https://intellij-support.jetbrains.com/hc/en-us/community/topics/200366979-IntelliJ-IDEA-Open-API-and-Plugin-Development" target="_blank">Developer Forum</a></p>
<p><a href="https://plugins.jetbrains.com/idea" target="_blank"><strong>Plugin Repository</strong></a></p>
</div>
</div>
</div>
</div>
</div>
</section>
<script src="/idea/inc/social-footer/index.entry.js" type="entry-point"></script><section class="wt-section wt-section_bg_gray-light">
<div id="social-footer"></div>
</section>    </div>

            
<div class="page__footer">
    <footer class="footer" id="footer">
        <div class="wt-container">
            <div class="footer__main wt-row wt-row_size_m wt-row-sm_direction_column-reverse">
                <div class="footer__logo wt-col-inline wt-display-md-none">
                    <div class="jetbrains-logo _size-3 _full-block">
                        <svg class="sprite-img jetbrains">
                            <use xlink:href="#jetbrains" />
                        </svg>
                    </div>
                </div>

                <div class="wt-col-auto-fill wt-col-sm-12">
                    <div class="wt-row wt-row_size_xs wt-row-sm_size_m wt-offset-top-12">
                        <div class="wt-col-inline footer-skeleton-button"></div>
                        <div class="wt-col-inline footer-skeleton-button"></div>
                        <div class="wt-col-inline footer-skeleton-button"></div>
                        <div class="wt-col-inline footer-skeleton-button"></div>
                    </div>

                    <div class="footer-skeleton-text-2 wt-offset-top-24" style="max-width: 45%"></div>
                    <div class="footer-skeleton-text-2 wt-offset-top-12" style="max-width: 70%"></div>
                </div>

                <div class="wt-col-inline wt-col-sm-12 wt-col_align-self_end wt-col-sm_align-self_start">
                    <div class="wt-row wt-row_size_m wt-row_justify_end wt-row-sm_justify_start">
                        <div class="wt-col-inline footer-skeleton-button" style="min-width: 180px"></div>
                        <div class="wt-col-inline footer-skeleton-button" style="min-width: 80px"></div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>
    </div>

<script>
(function () {
  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  function updateQueryStringParameter(uri, key, value) {
    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    var separator = uri.indexOf('?') !== -1 ? "&" : "?";
    if (uri.match(re)) {
      return uri.replace(re, '$1' + key + "=" + value + '$2');
    }
    else {
      return uri + separator + key + "=" + value;
    }
  }

  var downloadLink = document.getElementById("download-link");
  if (downloadLink != null) {
    var platform = getParameterByName('platform');
    platform = platform != null ? platform : "windows";
    var href = downloadLink.getAttribute("href");
    var code = getParameterByName("code");

    if(code != null) {
      href = updateQueryStringParameter(href, "code", code)
    }
    href = updateQueryStringParameter(href, "platform", platform);
    downloadLink.setAttribute("href", href);
  }
})();
</script><script>
(function() {
  var STORAGE_KEY_NAME = 'firefoxDisappearedSVGWorkaround';
  var STORAGE_KEY_VALUE = '1';

  var isFirefox = /firefox/i.test(navigator.userAgent);
  if (!isFirefox || isFirefox && sessionStorage.getItem(STORAGE_KEY_NAME) === STORAGE_KEY_VALUE) {
    return;
  }

  var arrayFrom = function (arrayLike) {
    return Array.prototype.slice.call(arrayLike, 0);
  };

  function workaround() {
    var uses = document.querySelectorAll('.page svg use');
    var badNodesCount = 0;

    arrayFrom(uses).forEach(function (node) {
      var rect = node.getBoundingClientRect();
      if (rect.width === 0 && rect.height === 0)
        badNodesCount++;
    });

    if (badNodesCount === uses.length) {
      sessionStorage.setItem(STORAGE_KEY_NAME, STORAGE_KEY_VALUE);
      if (typeof dataLayer !== 'undefined')
        dataLayer.push({'firefoxDisappearedSVGWorkaround': STORAGE_KEY_VALUE});

      window.location.replace(window.location.href);
    }
  }

  window.addEventListener('DOMContentLoaded', workaround);

})();
</script>      <link href="/_assets/banner-rotator.entry.07ac548a2a68a7922693.css" rel="stylesheet" type="text/css">
      <script src="/_assets/banner-rotator.entry.b9ea3aaba598786010f0.js" type="text/javascript"></script>
      
      
  <script>
(function () {

  'use strict';

  function ImagesSrcReplacer () {

    var attribute = 'data-src';
    var matches = document.querySelectorAll('img[' + attribute + ']');

    for (var i = 0, n = matches.length; i < n; i++) {

      var attrValue = matches[i].getAttribute(attribute);

      if (_isHighDensity ()) {

        var name = attrValue.substring(0, attrValue.lastIndexOf('.'));
        var extention = attrValue.substring(attrValue.lastIndexOf('.'), attrValue.length);

        matches[i].setAttribute('src', name + '@2x' + extention);

      } else {
        matches[i].setAttribute('src', attrValue)
      }
    }

    /**
     * Detect high density
     * @returns {*|boolean}
     */
    function _isHighDensity () {
      return (
      (window.matchMedia &&
      (window.matchMedia('only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)').matches ||
       window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)').matches)) ||
      (window.devicePixelRatio &&
       window.devicePixelRatio > 1.3));
    }
  }

  return new ImagesSrcReplacer()

}(document, window));
</script></body>
</html>
