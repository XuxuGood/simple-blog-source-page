console.log("hexo-theme-stellar:\n"+stellar.github);const util={diffDate:(e,t=!1)=>{const l=new Date,s=new Date(e);var a,n,i=l.getTime()-s.getTime(),o=864e5;let r;return r=t?(a=i/o,n=i/36e5,e=i/6e4,12<(t=i/2592e6)?null:1<=t?parseInt(t)+" "+stellar.config.date_suffix.month:1<=a?parseInt(a)+" "+stellar.config.date_suffix.day:1<=n?parseInt(n)+" "+stellar.config.date_suffix.hour:1<=e?parseInt(e)+" "+stellar.config.date_suffix.min:stellar.config.date_suffix.just):parseInt(i/o),r},copy:(e,t)=>{const l=document.getElementById(e);l&&(l.select(),document.execCommand("Copy"),t&&0<t.length&&hud.toast(t))},toggle:e=>{const t=document.getElementById(e);t&&t.classList.toggle("display")}},hud={toast:(e,t)=>{t=isNaN(t)?2e3:t;var l=document.createElement("div");l.classList.add("toast"),l.innerHTML=e,document.body.appendChild(l),setTimeout(function(){l.style.webkitTransition="-webkit-transform 0.5s ease-in, opacity 0.5s ease-in",l.style.opacity="0",setTimeout(function(){document.body.removeChild(l)},500)},t)}},l_body=document.querySelector(".l_body"),sidebar={toggle:()=>{l_body&&(l_body.classList.add("mobile"),l_body.classList.toggle("sidebar"))}},init={toc:()=>{stellar.jQuery(()=>{var i=[];$("article.md :header").each(function(e,t){i.push(t)}),$(document,window).scroll(function(e){var t,l,s=$(this).scrollTop(),a=null;for(t in i){var n=$(i[t]);n.offset().top>s+32||(!a||n.offset().top>=a.offset().top)&&(a=n)}a&&($("#toc a.toc-link").removeClass("active"),("#undefined"!=(l="#"+a.attr("id"))?$('#toc a.toc-link[href="'+encodeURI(l)+'"]'):$("#toc a.toc-link:first")).addClass("active"))})})},sidebar:()=>{stellar.jQuery(()=>{$("#toc a.toc-link").click(function(e){l_body.classList.remove("sidebar")})})},relativeDate:e=>{e.forEach(e=>{const t=e;e=t.getAttribute("datetime"),e=util.diffDate(e,!0);e&&(t.innerText=e)})},registerTabsTag:function(){document.querySelectorAll(".tabs ul.nav-tabs .tab").forEach(l=>{l.addEventListener("click",e=>{if(e.preventDefault(),!l.classList.contains("active")){[...l.parentNode.children].forEach(e=>{e.classList.toggle("active",e===l)});const t=document.getElementById(l.querySelector("a").getAttribute("href").replace("#",""));[...t.parentNode.children].forEach(e=>{e.classList.toggle("active",e===t)}),t.dispatchEvent(new Event("tabs:click",{bubbles:!0}))}})}),window.dispatchEvent(new Event("tabs:register"))}};if(init.toc(),init.sidebar(),init.relativeDate(document.querySelectorAll("#post-meta time")),init.registerTabsTag(),stellar.plugins.scrollreveal&&stellar.loadScript(stellar.plugins.scrollreveal.js).then(function(){ScrollReveal().reveal("body .reveal",{distance:stellar.plugins.scrollreveal.distance,duration:stellar.plugins.scrollreveal.duration,interval:stellar.plugins.scrollreveal.interval,scale:stellar.plugins.scrollreveal.scale,easing:"ease-out"})}),stellar.plugins.lazyload&&(stellar.loadScript(stellar.plugins.lazyload.js,{defer:!0}),window.lazyLoadOptions={elements_selector:".lazy"},window.addEventListener("LazyLoad::Initialized",function(e){window.lazyLoadInstance=e.detail.instance},!1),document.addEventListener("DOMContentLoaded",function(){lazyLoadInstance.update()})),stellar.plugins.sitesjs){const T=document.getElementById("sites-api");null!=T&&stellar.jQuery(()=>{stellar.loadScript(stellar.plugins.sitesjs,{defer:!0})})}if(stellar.plugins.friendsjs){const U=document.getElementById("friends-api");null!=U&&stellar.jQuery(()=>{stellar.loadScript(stellar.plugins.friendsjs,{defer:!0})})}if(stellar.plugins.swiper){const V=document.getElementById("swiper_container");void 0!==V&&(stellar.loadCSS(stellar.plugins.customSwiperTopArticle.css),stellar.loadScript(stellar.plugins.customSwiperTopArticle.js,{defer:!0}).then(function(){var e=new Swiper(".blog-slider",{passiveListeners:!0,spaceBetween:30,effect:"fade",loop:!0,autoplay:{disableOnInteraction:!0,delay:3e3},mousewheel:!1,pagination:{el:".blog-slider__pagination",clickable:!0}});V.onmouseenter=function(){e.autoplay.stop()},V.onmouseleave=function(){e.autoplay.start()}}));const W=document.getElementById("swiper-api");void 0!==W&&(stellar.loadCSS(stellar.plugins.swiper.css),stellar.loadScript(stellar.plugins.swiper.js,{defer:!0}).then(function(){new Swiper(".swiper-container",{slidesPerView:"auto",spaceBetween:8,centeredSlides:!0,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}))}if(stellar.plugins.fontawesome){const Z=document.getElementsByTagName("i");null!=Z&&0<Z.length&&(stellar.loadCSS(stellar.plugins.fontawesome.animation_css),stellar.loadCSS(stellar.plugins.fontawesome.css))}if(stellar.plugins.poemGet){const _=document.getElementById("poem");null!=_&&stellar.jQuery(()=>{stellar.loadScript(stellar.plugins.poemGet.js,{defer:!0})})}if(stellar.plugins.siteRunDateAndBusuanzi){const aa=document.getElementById("timeDate");null!=aa&&stellar.loadScript(stellar.plugins.siteRunDateAndBusuanzi.time_js,{defer:!0});const ba=document.getElementById("busuanzi_value_site_uv");null!=ba&&stellar.loadScript(stellar.plugins.siteRunDateAndBusuanzi.busuanzi_js,{defer:!0})}if(stellar.plugins.timelife){const ca=document.getElementById("timelife");null!=ca&&stellar.jQuery(()=>{stellar.loadScript(stellar.plugins.timelife.js,{defer:!0})})}stellar.plugins.preload&&("instant_page"==stellar.plugins.preload.service?stellar.loadScript(stellar.plugins.preload.instant_page,{defer:!0,type:"module",integrity:"sha384-OeDn4XE77tdHo8pGtE1apMPmAipjoxUQ++eeJa6EtJCfHlvijigWiJpD7VDPWXV1"}):"flying_pages"==stellar.plugins.preload.service&&(window.FPConfig={delay:0,ignoreKeywords:[],maxRPS:5,hoverDelay:25},stellar.loadScript(stellar.plugins.preload.flying_pages,{defer:!0})));