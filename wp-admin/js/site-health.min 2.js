/*! This file is auto-generated */
jQuery(function(o){var a,l=wp.i18n.__,n=wp.i18n._n,r=wp.i18n.sprintf,i=new ClipboardJS(".site-health-copy-buttons .copy-button"),c=o(".health-check-body.health-check-status-tab").length,e=o(".health-check-body.health-check-debug-tab").length,h=o("#health-check-accordion-block-wp-paths-sizes");function d(e){var t,s,a=wp.template("health-check-issue"),i=o("#health-check-issues-"+e.status);!function(e){var t,s,a,i,n={test:"string",label:"string",description:"string"},o=!0;if("object"==typeof e){for(t in n)if("object"==typeof(s=n[t]))for(a in s)i=s[a],void 0!==e[t]&&void 0!==e[t][a]&&i===typeof e[t][a]||(o=!1);else void 0!==e[t]&&s===typeof e[t]||(o=!1);return o}}(e)||(SiteHealth.site_status.issues[e.status]++,s=SiteHealth.site_status.issues[e.status],void 0===e.test&&(e.test=e.status+s),"critical"===e.status?t=r(n("%s critical issue","%s critical issues",s),'<span class="issue-count">'+s+"</span>"):"recommended"===e.status?t=r(n("%s recommended improvement","%s recommended improvements",s),'<span class="issue-count">'+s+"</span>"):"good"===e.status&&(t=r(n("%s item with no issues detected","%s items with no issues detected",s),'<span class="issue-count">'+s+"</span>")),t&&o(".site-health-issue-count-title",i).html(t),o(".issues","#health-check-issues-"+e.status).append(a(e)))}function u(){var e=o(".site-health-progress"),t=e.closest(".site-health-progress-wrapper"),s=o(".site-health-progress-label",t),a=o(".site-health-progress svg #bar"),i=parseInt(SiteHealth.site_status.issues.good,0)+parseInt(SiteHealth.site_status.issues.recommended,0)+1.5*parseInt(SiteHealth.site_status.issues.critical,0),n=.5*parseInt(SiteHealth.site_status.issues.recommended,0)+1.5*parseInt(SiteHealth.site_status.issues.critical,0),n=100-Math.ceil(n/i*100);0===i?e.addClass("hidden"):(t.removeClass("loading"),i=a.attr("r"),e=Math.PI*(2*i),a.css({strokeDashoffset:(100-(n=100<(n=n<0?0:n)?100:n))/100*e+"px"}),parseInt(SiteHealth.site_status.issues.critical,0)<1&&o("#health-check-issues-critical").addClass("hidden"),parseInt(SiteHealth.site_status.issues.recommended,0)<1&&o("#health-check-issues-recommended").addClass("hidden"),80<=n&&0===parseInt(SiteHealth.site_status.issues.critical,0)?(t.addClass("green").removeClass("orange"),s.text(l("Good")),wp.a11y.speak(l("All site health tests have finished running. Your site is looking good, and the results are now available on the page."))):(t.addClass("orange").removeClass("green"),s.text(l("Should be improved")),wp.a11y.speak(l("All site health tests have finished running. There are items that should be addressed, and the results are now available on the page."))),c&&(o.post(ajaxurl,{action:"health-check-site-status-result",_wpnonce:SiteHealth.nonce.site_status_result,counts:SiteHealth.site_status.issues}),100===n&&(o(".site-status-all-clear").removeClass("hide"),o(".site-status-has-issues").addClass("hide"))))}function p(e,t){e={status:"recommended",label:l("A test is unavailable"),badge:{color:"red",label:l("Unavailable")},description:"<p>"+e+"</p><p>"+t+"</p>",actions:""};d(wp.hooks.applyFilters("site_status_test_result",e))}function t(){var t=(new Date).getTime(),s=window.setTimeout(function(){wp.a11y.speak(l("Please wait..."))},3e3);wp.apiRequest({path:"/wp-site-health/v1/directory-sizes"}).done(function(e){var a,s;a=e||{},e=o("button.button.copy-button"),s=e.attr("data-clipboard-text"),o.each(a,function(e,t){t=t.debug||t.size;void 0!==t&&(s=s.replace(e+": loading...",e+": "+t))}),e.attr("data-clipboard-text",s),h.find("td[class]").each(function(e,t){var t=o(t),s=t.attr("class");a.hasOwnProperty(s)&&a[s].size&&t.text(a[s].size)})}).always(function(){var e=(new Date).getTime()-t;o(".health-check-wp-paths-sizes.spinner").css("visibility","hidden"),u(),3e3<e?(e=6e3<e?0:6500-e,window.setTimeout(function(){wp.a11y.speak(l("All site health tests have finished running."))},e)):window.clearTimeout(s),o(document).trigger("site-health-info-dirsizes-done")})}i.on("success",function(e){var t=o(e.trigger),s=o(".success",t.closest("div"));e.clearSelection(),t.trigger("focus"),clearTimeout(a),s.removeClass("hidden"),a=setTimeout(function(){s.addClass("hidden"),i.clipboardAction.fakeElem&&i.clipboardAction.removeFake&&i.clipboardAction.removeFake()},3e3),wp.a11y.speak(l("Site information has been copied to your clipboard."))}),o(".health-check-accordion").on("click",".health-check-accordion-trigger",function(){"true"===o(this).attr("aria-expanded")?(o(this).attr("aria-expanded","false"),o("#"+o(this).attr("aria-controls")).attr("hidden",!0)):(o(this).attr("aria-expanded","true"),o("#"+o(this).attr("aria-controls")).attr("hidden",!1))}),o(".site-health-view-passed").on("click",function(){var e=o("#health-check-issues-good");e.toggleClass("hidden"),o(this).attr("aria-expanded",!e.hasClass("hidden"))}),"undefined"!=typeof SiteHealth&&(0===SiteHealth.site_status.direct.length&&0===SiteHealth.site_status.async.length?u():SiteHealth.site_status.issues={good:0,recommended:0,critical:0},0<SiteHealth.site_status.direct.length&&o.each(SiteHealth.site_status.direct,function(){d(this)}),(0<SiteHealth.site_status.async.length?function t(){var s=!0;1<=SiteHealth.site_status.async.length&&o.each(SiteHealth.site_status.async,function(){var e={action:"health-check-"+this.test.replace("_","-"),_wpnonce:SiteHealth.nonce.site_status};return!!this.completed||(s=!1,this.completed=!0,(void 0!==this.has_rest&&this.has_rest?wp.apiRequest({url:wp.url.addQueryArgs(this.test,{_locale:"user"}),headers:this.headers}).done(function(e){d(wp.hooks.applyFilters("site_status_test_result",e))}).fail(function(e){e=void 0!==e.responseJSON&&void 0!==e.responseJSON.message?e.responseJSON.message:l("No details available"),p(this.url,e)}):o.post(ajaxurl,e).done(function(e){d(wp.hooks.applyFilters("site_status_test_result",e.data))}).fail(function(e){e=void 0!==e.responseJSON&&void 0!==e.responseJSON.message?e.responseJSON.message:l("No details available"),p(this.url,e)})).always(function(){t()}),!1)}),s&&u()}:u)()),e&&(h.length?t:u)(),o(".health-check-offscreen-nav-wrapper").on("click",function(){o(this).toggleClass("visible")})});