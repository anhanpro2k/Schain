!function(E){(!E.ui.FloatPanel.zIndex||E.ui.FloatPanel.zIndex<100100)&&(E.ui.FloatPanel.zIndex=100100),E.PluginManager.add("wordpress",function(p){var a,t,C=E.DOM,m=E.each,u=p.editorManager.i18n.translate,i=window.jQuery,o=window.wp,r=o&&o.editor&&o.editor.autop&&p.getParam("wpautop",!0),s=!1;function e(n){var e,t,o=0,i=E.$(".block-library-classic__toolbar");"hide"===n?e=!0:i.length&&!i.hasClass("has-advanced-toolbar")&&(i.addClass("has-advanced-toolbar"),n="show"),(t=p.theme.panel?p.theme.panel.find(".toolbar:not(.menubar)"):t)&&1<t.length&&(!n&&t[1].visible()&&(n="hide"),m(t,function(e,t){0<t&&("hide"===n?(e.hide(),o+=34):(e.show(),o-=34))})),o&&!E.Env.iOS&&p.iframeElement&&p.iframeElement.clientHeight&&50<(i=p.iframeElement.clientHeight+o)&&C.setStyle(p.iframeElement,"height",i),e||("hide"===n?(setUserSetting("hidetb","0"),a&&a.active(!1)):(setUserSetting("hidetb","1"),a&&a.active(!0))),p.fire("wp-toolbar-toggle")}function d(e){var t,o,i,n=p.translate(e);return s||(o="Shift+Alt+",i="Ctrl+",s={},E.Env.mac&&(o="\u2303\u2325",i="\u2318"),p.settings.wp_shortcut_labels&&m(p.settings.wp_shortcut_labels,function(e,t){var n=p.translate(t);e=e.replace("access",o).replace("meta",i),s[t]=e,t!==n&&(s[n]=e)})),s.hasOwnProperty(n)?t=s[n]:s.hasOwnProperty(e)&&(t=s[e]),t?n+" ("+t+")":n}function n(){}return i&&i(document).triggerHandler("tinymce-editor-setup",[p]),p.addButton("wp_adv",{tooltip:"Toolbar Toggle",cmd:"WP_Adv",onPostRender:function(){(a=this).active("1"===getUserSetting("hidetb"))}}),p.on("PostRender",function(){p.getParam("wordpress_adv_hidden",!0)&&"0"===getUserSetting("hidetb","0")?e("hide"):E.$(".block-library-classic__toolbar").addClass("has-advanced-toolbar")}),p.addCommand("WP_Adv",function(){e()}),p.on("focus",function(){window.wpActiveEditor=p.id}),p.on("BeforeSetContent",function(e){var n;e.content&&(-1!==e.content.indexOf("\x3c!--more")&&(n=u("Read more..."),e.content=e.content.replace(/<!--more(.*?)-->/g,function(e,t){return'<img src="'+E.Env.transparentSrc+'" data-wp-more="more" data-wp-more-text="'+t+'" class="wp-more-tag mce-wp-more" alt="" title="'+n+'" data-mce-resize="false" data-mce-placeholder="1" />'})),-1!==e.content.indexOf("\x3c!--nextpage--\x3e")&&(n=u("Page break"),e.content=e.content.replace(/<!--nextpage-->/g,'<img src="'+E.Env.transparentSrc+'" data-wp-more="nextpage" class="wp-more-tag mce-wp-nextpage" alt="" title="'+n+'" data-mce-resize="false" data-mce-placeholder="1" />')),e.load&&"raw"!==e.format&&(e.content=r?o.editor.autop(e.content):e.content.replace(/-->\s+<!--/g,"--\x3e\x3c!--")),-1===e.content.indexOf("<script")&&-1===e.content.indexOf("<style")||(e.content=e.content.replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/g,function(e,t){return'<img src="'+E.Env.transparentSrc+'" data-wp-preserve="'+encodeURIComponent(e)+'" data-mce-resize="false" data-mce-placeholder="1" class="mce-object" width="20" height="20" alt="&lt;'+t+'&gt;" title="&lt;'+t+'&gt;" />'})))}),p.on("setcontent",function(){p.$("p").each(function(e,t){var n;t.innerHTML&&t.innerHTML.length<10&&((n=E.trim(t.innerHTML))&&"&nbsp;"!==n||(t.innerHTML=E.Env.ie&&E.Env.ie<11?"":'<br data-mce-bogus="1">'))})}),p.on("PostProcess",function(e){e.get&&(e.content=e.content.replace(/<img[^>]+>/g,function(e){var t,n,o="";return-1!==e.indexOf('data-wp-more="more"')?n="\x3c!--more"+(o=(t=e.match(/data-wp-more-text="([^"]+)"/))?t[1]:o)+"--\x3e":-1!==e.indexOf('data-wp-more="nextpage"')?n="\x3c!--nextpage--\x3e":-1!==e.indexOf("data-wp-preserve")&&(t=e.match(/ data-wp-preserve="([^"]+)"/))&&(n=decodeURIComponent(t[1])),n||e}))}),p.on("ResolveName",function(e){var t;"IMG"===e.target.nodeName&&(t=p.dom.getAttrib(e.target,"data-wp-more"))&&(e.name=t)}),p.addCommand("WP_More",function(e){var t,n="wp-more-tag",o=p.dom,i=p.selection.getNode(),a=p.getBody();n+=" mce-wp-"+(e=e||"more"),t=u("more"===e?"Read more...":"Next page"),t='<img src="'+E.Env.transparentSrc+'" alt="" title="'+t+'" class="'+n+'" data-wp-more="'+e+'" data-mce-resize="false" data-mce-placeholder="1" />',i===a||"P"===i.nodeName&&i.parentNode===a?p.insertContent(t):(n=o.getParent(i,function(e){return!(!e.parentNode||e.parentNode!==a)},p.getBody()))&&("P"===n.nodeName?n.appendChild(o.create("p",null,t).firstChild):o.insertAfter(o.create("p",null,t),n),p.nodeChanged())}),p.addCommand("WP_Code",function(){p.formatter.toggle("code")}),p.addCommand("WP_Page",function(){p.execCommand("WP_More","nextpage")}),p.addCommand("WP_Help",function(){var e,t=E.Env.mac?u("Ctrl + Alt + letter:"):u("Shift + Alt + letter:"),n=E.Env.mac?u("\u2318 + letter:"):u("Ctrl + letter:"),o=[],i=[],a={},r={},s=0,d=0,l=p.settings.wp_shortcut_labels;function c(e,t){var n="<tr>",o=0;for(t=t||1,m(e,function(e,t){n+="<td><kbd>"+t+"</kbd></td><td>"+u(e)+"</td>",o++});o<t;)n+="<td></td><td></td>",o++;return n+"</tr>"}l&&(m(l,function(e,t){var n;-1!==e.indexOf("meta")?(s++,(n=e.replace("meta","").toLowerCase())&&(a[n]=t,s%2==0&&(o.push(c(a,2)),a={}))):-1!==e.indexOf("access")&&(d++,(n=e.replace("access","").toLowerCase())&&(r[n]=t,d%2==0&&(i.push(c(r,2)),r={})))}),0<s%2&&o.push(c(a,2)),0<d%2&&i.push(c(r,2)),l="<tr><th>"+(l=[u("Letter"),u("Action"),u("Letter"),u("Action")]).join("</th><th>")+"</th></tr>",e=(e='<div class="wp-editor-help">')+"<h2>"+u("Default shortcuts,")+" "+n+'</h2><table class="wp-help-th-center fixed">'+l+o.join("")+"</table><h2>"+u("Additional shortcuts,")+" "+t+'</h2><table class="wp-help-th-center fixed">'+l+i.join("")+"</table>",e=(e=p.plugins.wptextpattern&&(!E.Env.ie||8<E.Env.ie)?(e=e+"<h2>"+u("When starting a new paragraph with one of these formatting shortcuts followed by a space, the formatting will be applied automatically. Press Backspace or Escape to undo.")+'</h2><table class="wp-help-th-center fixed">'+c({"*":"Bullet list","1.":"Numbered list"})+c({"-":"Bullet list","1)":"Numbered list"})+"</table>")+"<h2>"+u("The following formatting shortcuts are replaced when pressing Enter. Press Escape or the Undo button to undo.")+'</h2><table class="wp-help-single">'+c({">":"Blockquote"})+c({"##":"Heading 2"})+c({"###":"Heading 3"})+c({"####":"Heading 4"})+c({"#####":"Heading 5"})+c({"######":"Heading 6"})+c({"---":"Horizontal line"})+"</table>":e)+"<h2>"+u("Focus shortcuts:")+'</h2><table class="wp-help-single">'+c({"Alt + F8":"Inline toolbar (when an image, link or preview is selected)"})+c({"Alt + F9":"Editor menu (when enabled)"})+c({"Alt + F10":"Editor toolbar"})+c({"Alt + F11":"Elements path"})+"</table><p>"+u("To move focus to other buttons use Tab or the arrow keys. To return focus to the editor press Escape or use one of the buttons.")+"</p>",(n=p.windowManager.open({title:p.settings.classic_block_editor?"Classic Block Keyboard Shortcuts":"Keyboard Shortcuts",items:{type:"container",classes:"wp-help",html:e+="</div>"},buttons:{text:"Close",onclick:"close"}})).$el&&(n.$el.find('div[role="application"]').attr("role","document"),(t=n.$el.find(".mce-wp-help"))[0]&&(t.attr("tabindex","0"),t[0].focus(),t.on("keydown",function(e){33<=e.keyCode&&e.keyCode<=40&&e.stopPropagation()}))))}),p.addCommand("WP_Medialib",function(){o&&o.media&&o.media.editor&&o.media.editor.open(p.id)}),p.addButton("wp_more",{tooltip:"Insert Read More tag",onclick:function(){p.execCommand("WP_More","more")}}),p.addButton("wp_page",{tooltip:"Page break",onclick:function(){p.execCommand("WP_More","nextpage")}}),p.addButton("wp_help",{tooltip:"Keyboard Shortcuts",cmd:"WP_Help"}),p.addButton("wp_code",{tooltip:"Code",cmd:"WP_Code",stateSelector:"code"}),o&&o.media&&o.media.editor&&(p.addButton("wp_add_media",{tooltip:"Add Media",icon:"dashicon dashicons-admin-media",cmd:"WP_Medialib"}),p.addMenuItem("add_media",{text:"Add Media",icon:"wp-media-library",context:"insert",cmd:"WP_Medialib"})),p.addMenuItem("wp_more",{text:"Insert Read More tag",icon:"wp_more",context:"insert",onclick:function(){p.execCommand("WP_More","more")}}),p.addMenuItem("wp_page",{text:"Page break",icon:"wp_page",context:"insert",onclick:function(){p.execCommand("WP_More","nextpage")}}),p.on("BeforeExecCommand",function(e){!E.Env.webkit||"InsertUnorderedList"!==e.command&&"InsertOrderedList"!==e.command||(t=t||p.dom.create("style",{type:"text/css"},"#tinymce,#tinymce span,#tinymce li,#tinymce li>span,#tinymce p,#tinymce p>span{font:medium sans-serif;color:#000;line-height:normal;}"),p.getDoc().head.appendChild(t))}),p.on("ExecCommand",function(e){E.Env.webkit&&t&&("InsertUnorderedList"===e.command||"InsertOrderedList"===e.command)&&p.dom.remove(t)}),p.on("init",function(){var e=E.Env,t=["mceContentBody"],n=p.getDoc(),o=p.dom;e.iOS&&o.addClass(n.documentElement,"ios"),"rtl"===p.getParam("directionality")&&(t.push("rtl"),o.setAttrib(n.documentElement,"dir","rtl")),o.setAttrib(n.documentElement,"lang",p.getParam("wp_lang_attr")),e.ie?9===parseInt(e.ie,10)?t.push("ie9"):8===parseInt(e.ie,10)?t.push("ie8"):e.ie<8&&t.push("ie7"):e.webkit&&t.push("webkit"),t.push("wp-editor"),m(t,function(e){e&&o.addClass(n.body,e)}),p.on("BeforeSetContent",function(e){e.content&&(e.content=e.content.replace(/<p>\s*<(p|div|ul|ol|dl|table|blockquote|h[1-6]|fieldset|pre)( [^>]*)?>/gi,"<$1$2>").replace(/<\/(p|div|ul|ol|dl|table|blockquote|h[1-6]|fieldset|pre)>\s*<\/p>/gi,"</$1>"))}),i&&i(function(){i(document).triggerHandler("tinymce-editor-init",[p])}),window.tinyMCEPreInit&&window.tinyMCEPreInit.dragDropUpload&&o.bind(n,"dragstart dragend dragover drop",function(e){i&&i(document).trigger(new i.Event(e))}),p.getParam("wp_paste_filters",!0)&&(p.on("PastePreProcess",function(e){e.content=e.content.replace(/<br class="?Apple-interchange-newline"?>/gi,""),E.Env.webkit||(e.content=e.content.replace(/(<[^>]+) style="[^"]*"([^>]*>)/gi,"$1$2"),e.content=e.content.replace(/(<[^>]+) data-mce-style=([^>]+>)/gi,"$1 style=$2"))}),p.on("PastePostProcess",function(e){p.$("p",e.node).each(function(e,t){o.isEmpty(t)&&o.remove(t)}),E.isIE&&p.$("a",e.node).find("font, u").each(function(e,t){o.remove(t,!0)})}))}),p.on("SaveContent",function(e){!p.inline&&p.isHidden()?e.content=e.element.value:(e.content=e.content.replace(/<p>(?:<br ?\/?>|\u00a0|\uFEFF| )*<\/p>/g,"<p>&nbsp;</p>"),e.content=r?o.editor.removep(e.content):e.content.replace(/-->\s*<!-- wp:/g,"--\x3e\n\n\x3c!-- wp:"))}),p.on("preInit",function(){p.schema.addValidElements("@[id|accesskey|class|dir|lang|style|tabindex|title|contenteditable|draggable|dropzone|hidden|spellcheck|translate],i,b,script[src|async|defer|type|charset|crossorigin|integrity]"),E.Env.iOS&&(p.settings.height=300),m({c:"JustifyCenter",r:"JustifyRight",l:"JustifyLeft",j:"JustifyFull",q:"mceBlockQuote",u:"InsertUnorderedList",o:"InsertOrderedList",m:"WP_Medialib",t:"WP_More",d:"Strikethrough",p:"WP_Page",x:"WP_Code"},function(e,t){p.shortcuts.add("access+"+t,"",e)}),p.addShortcut("meta+s","",function(){o&&o.autosave&&o.autosave.server.triggerSave()}),p.settings.classic_block_editor||p.addShortcut("access+z","","WP_Adv"),p.on("keydown",function(e){var t=E.Env.mac?e.ctrlKey&&e.altKey&&"KeyH"===e.code:e.shiftKey&&e.altKey&&"KeyH"===e.code;return!t||(p.execCommand("WP_Help"),e.stopPropagation(),e.stopImmediatePropagation(),!1)}),1<window.getUserSetting("editor_plain_text_paste_warning")&&(p.settings.paste_plaintext_inform=!1),E.Env.mac&&E.$(p.iframeElement).attr("title",u("Rich Text Area. Press Control-Option-H for help."))}),p.on("PastePlainTextToggle",function(e){!0===e.state&&(e=parseInt(window.getUserSetting("editor_plain_text_paste_warning"),10)||0)<2&&window.setUserSetting("editor_plain_text_paste_warning",++e)}),p.on("beforerenderui",function(){p.theme.panel&&(m(["button","colorbutton","splitbutton"],function(e){(e=p.theme.panel.find(e))&&m(e,function(e){var t;e&&e.settings.tooltip&&(t=d(e.settings.tooltip),e.settings.tooltip=t,e._aria&&e._aria.label&&(e._aria.label=t))})}),m(p.theme.panel.find("listbox"),function(e){e&&"Paragraph"===e.settings.text&&m(e.settings.values,function(e){e.text&&s.hasOwnProperty(e.text)&&(e.shortcut="("+s[e.text]+")")})}))}),p.on("preinit",function(){var n,b,t,v,_,y,o,r=E.ui.Factory,s=p.settings,e=p.getContainer(),P=document.getElementById("wpadminbar"),x=document.getElementById(p.id+"_ifr");function i(e){if(n)if(n.tempHide||"hide"===e.type||"blur"===e.type)n.hide(),n=!1;else if(("resizewindow"===e.type||"scrollwindow"===e.type||"resize"===e.type||"scroll"===e.type)&&!n.blockHide){if("resize"===e.type||"resizewindow"===e.type){if(e=(e=p.getWin()).innerHeight+e.innerWidth,!(o=o&&2e3<(new Date).getTime()-o.timestamp?null:o))return void(o={timestamp:(new Date).getTime(),size:e});if(e&&Math.abs(e-o.size)<2)return}clearTimeout(t),t=setTimeout(function(){n&&"function"==typeof n.show&&(n.scrolling=!1,n.show())},250),n.scrolling=!0,n.hide()}}e&&(v=E.$(".mce-toolbar-grp",e)[0],_=E.$(".mce-statusbar",e)[0]),"content"===p.id&&(y=document.getElementById("post-status-info")),p.shortcuts.add("alt+119","",function(){var e;n&&(e=n.find("toolbar")[0])&&e.focus(!0)}),p.on("nodechange",function(e){var t=p.selection.isCollapsed(),e={element:e.element,parents:e.parents,collapsed:t};p.fire("wptoolbar",e),b=e.selection||e.element,n&&n!==e.toolbar&&n.hide(),e.toolbar?(n=e.toolbar).visible()?n.reposition():n.show():n=!1}),p.on("focus",function(){n&&n.show()}),p.inline?(p.on("resizewindow",i),document.addEventListener("scroll",i,!0)):(p.dom.bind(p.getWin(),"resize scroll",i),p.on("resizewindow scrollwindow",i)),p.on("remove",function(){document.removeEventListener("scroll",i,!0),p.off("resizewindow scrollwindow",i),p.dom.unbind(p.getWin(),"resize scroll",i)}),p.on("blur hide",i),p.wp=p.wp||{},p.wp._createToolbar=function(e,t){var n,o,a=[];return m(e,function(i){var t,e;function n(){var e=p.selection;"bullist"===t&&e.selectorChanged("ul > li",function(e,t){for(var n,o=t.parents.length;o--&&"OL"!==(n=t.parents[o].nodeName)&&"UL"!=n;);i.active(e&&"UL"===n)}),"numlist"===t&&e.selectorChanged("ol > li",function(e,t){for(var n,o=t.parents.length;o--&&"OL"!==(n=t.parents[o].nodeName)&&"UL"!==n;);i.active(e&&"OL"===n)}),i.settings.stateSelector&&e.selectorChanged(i.settings.stateSelector,function(e){i.active(e)},!0),i.settings.disabledStateSelector&&e.selectorChanged(i.settings.disabledStateSelector,function(e){i.disabled(e)})}"|"===i?o=null:r.has(i)?(i={type:i},s.toolbar_items_size&&(i.size=s.toolbar_items_size),a.push(i),o=null):(o||(o={type:"buttongroup",items:[]},a.push(o)),p.buttons[i]&&(t=i,(i="function"==typeof(i=p.buttons[t])?i():i).type=i.type||"button",s.toolbar_items_size&&(i.size=s.toolbar_items_size),(e=i.tooltip||i.title)&&(i.tooltip=d(e)),i=r.create(i),o.items.push(i),p.initialized?n():p.on("init",n)))}),(n=r.create({type:"panel",layout:"stack",classes:"toolbar-grp inline-toolbar-grp",ariaRoot:!0,ariaRemember:!0,items:[{type:"toolbar",layout:"flow",items:a}]})).bottom=t,n.on("show",function(){this.reposition()}),n.on("keydown",function(e){27===e.keyCode&&(this.hide(),p.focus())}),p.on("remove",function(){n.remove()}),n.reposition=function(){if(!b)return this;var e,t=window.pageXOffset||document.documentElement.scrollLeft,n=window.pageYOffset||document.documentElement.scrollTop,o=window.innerWidth,i=window.innerHeight,a=x?x.getBoundingClientRect():{top:0,right:o,bottom:i,left:0,width:o,height:i},r=this.getEl(),s=r.offsetWidth,d=r.clientHeight,l=b.getBoundingClientRect(),c=(l.left+l.right)/2,p=d+5,m=P?P.getBoundingClientRect().bottom:0,u=v?v.getBoundingClientRect().bottom:0,g=_?i-_.getBoundingClientRect().top:0,h=y?i-y.getBoundingClientRect().top:0,m=Math.max(0,m,u,a.top),u=Math.max(0,g,h,i-a.bottom),g=l.top+a.top-m,h=i-a.top-l.bottom-u,i=i-m-u,u="",f=0,w=0;return i<=g||i<=h?(this.scrolling=!0,this.hide(),this.scrolling=!1):(E.Env.iOS&&"IMG"===b.nodeName&&(f=54,w=46),this.bottom?p<=h?(u=" mce-arrow-up",e=l.bottom+a.top+n-w):p<=g&&(u=" mce-arrow-down",e=l.top+a.top+n-d+f):p<=g?(u=" mce-arrow-down",e=l.top+a.top+n-d+f):p<=h&&i/2>l.bottom+a.top-m&&(u=" mce-arrow-up",e=l.bottom+a.top+n-w),void 0===e&&(e=n+m+5+w),g=c-s/2+a.left+t,l.left<0||l.right>a.width?g=a.left+t+(a.width-s)/2:o<=s?(u+=" mce-arrow-full",g=0):g<0&&l.left+s>o||o<g+s&&l.right-s<0?g=(o-s)/2:g<a.left+t?(u+=" mce-arrow-left",g=l.left+a.left+t):g+s>a.width+a.left+t&&(u+=" mce-arrow-right",g=l.right-s+a.left+t),E.Env.iOS&&"IMG"===b.nodeName&&(u=u.replace(/ ?mce-arrow-(up|down)/g,"")),r.className=r.className.replace(/ ?mce-arrow-[\w]+/g,"")+u,C.setStyles(r,{left:g,top:e})),this},n.hide().renderTo(document.body),n}},!0),{_showButtons:n,_hideButtons:n,_setEmbed:n,_getEmbed:n}})}(window.tinymce);