jQuery(document).ready(function(a){function b(a){return null!==a.match("/.(jpeg|jpg|gif|png)$/")}jQuery(window).on("resize",function(){jQuery(".fusion-portfolio .fusion-portfolio-wrapper").each(function(){"fixed"===jQuery(this).data("picturesize")&&jQuery(this).find(".fusion-placeholder-image").each(function(){jQuery(this).css({height:jQuery(this).parents(".fusion-portfolio-post").siblings().find("img").first().height(),width:jQuery(this).parents(".fusion-portfolio-post").siblings().find("img").first().width()})})})}),jQuery(".fusion-portfolio .fusion-filters a").click(function(a){var b=jQuery(this).data("filter"),c=[],d=jQuery(this).parents(".fusion-portfolio").data("id");a.preventDefault(),d||(d=""),jQuery(this).parents(".fusion-portfolio").find(".fusion-portfolio-wrapper").isotope({filter:b}),jQuery(this).parents(".fusion-filters").find(".fusion-filter").removeClass("fusion-active"),jQuery(this).parent().addClass("fusion-active"),jQuery(this).parents(".fusion-portfolio").find(".fusion-portfolio-wrapper").find(".fusion-portfolio-post").each(function(){var a,e,f="";"individual"===avadaPortfolioVars.lightbox_behavior&&jQuery(this).find(".fusion-rollover-gallery").length&&(f=jQuery(this).find(".fusion-rollover-gallery").data("id")),b.length>1?(a=b.substr(1),e="iLightbox["+a+f+d+"]"):(a="fusion-portfolio-post",e="iLightbox[gallery"+f+d+"]"),(jQuery(this).hasClass(a)||1==b.length)&&(b.length>1&&-1===jQuery.inArray(a+f+d,c)?c.push(a+f+d):1===b.length&&-1===jQuery.inArray(f+d,c)&&c.push("gallery"+f+d),jQuery(this).find(".fusion-rollover-gallery").attr("data-rel",e),jQuery(this).find(".fusion-portfolio-gallery-hidden a").attr("data-rel",e))}),"created"!==jQuery(this).data("lightbox")&&(jQuery.each(c,function(a,b){window.$ilInstances.push(jQuery('[data-rel="iLightbox['+b+']"], [rel="iLightbox['+b+']"]').iLightBox(window.avadaLightBox.prepare_options("iLightbox["+b+"]")))}),jQuery(this).data("lightbox","created")),window.avadaLightBox.refresh_lightbox()}),Modernizr.mq("only screen and (max-width: 479px)")&&(jQuery(".fusion-portfolio .fusion-rollover-gallery").each(function(){var a=jQuery(this).attr("href");!0===b(a)&&jQuery(this).parents(".fusion-image-wrapper").find("> img").attr("src",a).attr("width","").attr("height",""),jQuery(this).parents(".fusion-portfolio-post").css("width","auto"),jQuery(this).parents(".fusion-portfolio-post").css("height","auto"),jQuery(this).parents(".fusion-portfolio-one:not(.fusion-portfolio-one-text)").find(".fusion-portfolio-post").css("margin","0")}),jQuery(".fusion-portfolio").length&&jQuery(".fusion-portfolio-wrapper").isotope())}),jQuery(window).load(function(){jQuery(".sidebar").is(":visible")&&jQuery(".post-content .fusion-portfolio").each(function(){var a=jQuery(this).data("columns");jQuery(this).addClass("fusion-portfolio-"+a+"-sidebar")}),jQuery().isotope&&jQuery(".fusion-portfolio .fusion-portfolio-wrapper").length&&jQuery(".fusion-portfolio .fusion-portfolio-wrapper").each(function(){var a,b,c,d,e,f,g,h,i,j,k,l,m;jQuery(this).next(".fusion-load-more-button").fadeIn(),"fixed"===jQuery(this).data("picturesize")?jQuery(this).find(".fusion-placeholder-image").each(function(){jQuery(this).css({height:jQuery(this).parents(".fusion-portfolio-post").siblings().find("img").first().height(),width:jQuery(this).parents(".fusion-portfolio-post").siblings().find("img").first().width()})}):jQuery(this).find(".fusion-placeholder-image").each(function(){jQuery(this).css({width:jQuery(this).parents(".fusion-portfolio-post").siblings().first().find("img").width()})}),a="",b=jQuery(this).parents(".fusion-portfolio").find(".fusion-filters"),b.length&&(c=b.find(".fusion-filter"),d=b.find(".fusion-active"),e=d.children("a"),f=e.attr("data-filter").substr(1),g=jQuery(this).find(".fusion-portfolio-post"),h=[],l=!0,c&&c.each(function(){var a=jQuery(this),c=a.children("a").data("filter");g&&(f.length&&g.hide(),jQuery(".fusion-filters").show(),g.each(function(){var g,i=jQuery(this),j=i.find(".fusion-rollover-gallery").data("rel");i.hasClass(c.substr(1))&&a.hasClass("fusion-hidden")&&(a.removeClass("fusion-hidden"),!0===l&&0===b.find(".fusion-filter-all").length&&(b.find(".fusion-filter").removeClass("fusion-active"),a.addClass("fusion-active"),l=!1,d=b.find(".fusion-active"),e=d.children("a"),f=e.attr("data-filter").substr(1))),f.length&&i.hasClass(f)&&(i.show(),j&&(g=j.replace("gallery",f),i.find(".fusion-rollover-gallery").attr("data-rel",g),-1===jQuery.inArray(g,h)&&h.push(g)))}))}),f.length&&(a="."+f,jQuery.each(h,function(a,b){window.$ilInstances.push(jQuery('[data-rel="'+b+'"], [rel="'+b+'"]').iLightBox(window.avadaLightBox.prepare_options(b)))}),window.avadaLightBox.refresh_lightbox(),e.data("lightbox","created"))),jQuery('[data-spy="scroll"]').each(function(){jQuery(this).scrollspy("refresh")}),i=jQuery(this),j=i.attr("id"),j&&(i=jQuery("#"+j)),setTimeout(function(){i.parent().hasClass("fusion-portfolio-one")?(window.$portfolio_isotope=i,window.$portfolio_isotope.isotope({itemSelector:".fusion-portfolio-post",layoutMode:"vertical",transformsEnabled:!1,isOriginLeft:!jQuery(".rtl").length,filter:a})):(window.$portfolio_isotope=i,window.$portfolio_isotope.isotope({itemSelector:".fusion-portfolio-post",resizable:!0,layoutMode:avadaPortfolioVars.isotope_type,transformsEnabled:!1,isOriginLeft:!jQuery(".rtl").length,filter:a}))},1),k=jQuery(this).find(".fusion-portfolio-post .fusion-placeholder-image"),k.each(function(){jQuery(this).parents(".fusion-portfolio-content-wrapper, .fusion-image-wrapper").animate({opacity:1})}),m=jQuery(this).find(".fusion-portfolio-post .fusion-video"),m.each(function(){jQuery(this).animate({opacity:1}),jQuery(this).parents(".fusion-portfolio-content-wrapper").animate({opacity:1})}),m.fitVids(),window.$portfolio_images_index=0,jQuery(this).imagesLoaded().progress(function(a,b){jQuery(b.img).parents(".fusion-portfolio-content-wrapper").length>=1?jQuery(b.img,k).parents(".fusion-portfolio-content-wrapper").delay(100*window.$portfolio_images_index).animate({opacity:1}):jQuery(b.img,k).parents(".fusion-image-wrapper").delay(100*window.$portfolio_images_index).animate({opacity:1}),window.$portfolio_images_index++}),setTimeout(function(){jQuery(window).trigger("resize")},250)}),jQuery(".fusion-portfolio-paging-infinite, .fusion-portfolio-paging-load-more-button").each(function(){var a=jQuery(this),b="."+a.attr("class").replace(/\ /g,".").replace(/.fusion\-portfolio\-[a-zA-Z]+\-sidebar/g,"")+" ";a.children(".fusion-portfolio-wrapper").infinitescroll({navSelector:b+".pagination",nextSelector:b+".pagination-next",itemSelector:b+"div.pagination .current, "+b+" .fusion-portfolio-post",loading:{finishedMsg:avadaPortfolioVars.infinite_finished_msg,msg:jQuery('<div class="fusion-loading-container fusion-clearfix"><div class="fusion-loading-spinner"><div class="fusion-spinner-1"></div><div class="fusion-spinner-2"></div><div class="fusion-spinner-3"></div></div><div class="fusion-loading-msg">'+avadaPortfolioVars.infinite_blog_text+"</div>")},errorCallback:function(){a.find(".fusion-portfolio-wrapper").isotope()}},function(b){var c;jQuery().isotope&&(c=a.find(".fusion-filters").find(".fusion-filter"),b=jQuery(b),b.hide(),imagesLoaded(b,function(){var d,e,f,g,h;d=jQuery(b).find(".fusion-placeholder-image"),d.parents(".fusion-portfolio-content-wrapper, .fusion-image-wrapper").animate({opacity:1}),e=jQuery(b).find(".fusion-video"),e.each(function(){jQuery(this).animate({opacity:1}),jQuery(this).parents(".fusion-portfolio-content-wrapper").animate({opacity:1})}),e.fitVids(),window.$portfolio_images_index=0,jQuery(b).imagesLoaded().progress(function(a,b){jQuery(b.img).parents(".fusion-portfolio-content-wrapper").length>=1?jQuery(b.img,d).parents(".fusion-portfolio-content-wrapper").delay(100*window.$portfolio_images_index).animate({opacity:1}):jQuery(b.img,d).parents(".fusion-image-wrapper").delay(100*window.$portfolio_images_index).animate({opacity:1}),window.$portfolio_images_index++}),c&&c.each(function(){var a,c,d,e=jQuery(this),f=e.children("a").data("filter");b&&b.each(function(){d=jQuery(this),d.hasClass(f.substr(1))&&e.hasClass("fusion-hidden")&&(Modernizr.mq("only screen and (max-width: "+avadaPortfolioVars.content_break_point+"px)")?e.fadeIn(400,function(){e.removeClass("fusion-hidden")}):(a=e.css("width"),c=e.css("margin-right"),e.css("width",0),e.css("margin-right",0),e.removeClass("fusion-hidden"),e.animate({width:a,"margin-right":c},400,function(){e.removeAttr("style")})))})}),a.find(".fusion-filters").length?(f=a.find(".fusion-filters").find(".fusion-filter.fusion-active a"),g=f.attr("data-filter").substr(1),g.length?(b.each(function(){var a=jQuery(this),b=a.find(".fusion-rollover-gallery").data("rel");a.hasClass(g)&&(a.fadeIn(),b&&a.find(".fusion-rollover-gallery").attr("data-rel",b.replace("gallery",g)))}),"created"!==f.data("lightbox")&&(window.$ilInstances.push(jQuery('[data-rel^="iLightbox['+g+']"]').iLightBox(window.avadaLightBox.prepare_options("iLightbox["+g+"]"))),f.data("lightbox","created")),window.avadaLightBox.refresh_lightbox()):b.fadeIn()):b.fadeIn(),a.find(".fusion-portfolio-wrapper").isotope("appended",b),b.each(function(){jQuery(this).find(".full-video, .video-shortcode, .wooslider .slide-content").fitVids()}),jQuery('[data-spy="scroll"]').each(function(){jQuery(this).scrollspy("refresh")}),h=a.find(".current").html(),a.find(".current").remove(),a.data("pages")==h&&(a.find(".fusion-loading-container").hide(),a.find(".fusion-load-more-button").hide())}))}),"1"==a.data("pages")&&(a.find(".fusion-loading-container").hide(),a.find(".fusion-load-more-button").hide()),a.hasClass("fusion-portfolio-paging-load-more-button")&&(a.find(".fusion-portfolio-wrapper").infinitescroll("unbind"),a.find(".fusion-load-more-button").on("click",function(b){b.preventDefault(),a.find(".fusion-portfolio-wrapper").infinitescroll("retrieve"),a.find(".fusion-portfolio-wrapper").isotope()}))})});