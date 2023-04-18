/*! This file is auto-generated */
!function(){var e={4403:function(e,t){var n;
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var i={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var o=r.apply(null,n);o&&e.push(o)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var s in n)i.call(n,s)&&n[s]&&e.push(s);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,n),a.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};!function(){"use strict";n.r(i),n.d(i,{MoveToWidgetArea:function(){return J},addWidgetIdToBlock:function(){return K},getWidgetIdFromBlock:function(){return q},registerLegacyWidgetBlock:function(){return ee},registerLegacyWidgetVariations:function(){return Y},registerWidgetGroupBlock:function(){return te}});var e={};n.r(e),n.d(e,{metadata:function(){return W},name:function(){return O},settings:function(){return j}});var t={};n.r(t),n.d(t,{metadata:function(){return $},name:function(){return Z},settings:function(){return U}});var r=window.wp.blocks,a=window.wp.element,o=window.wp.primitives;var s=(0,a.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(o.Path,{d:"M6 3H8V5H16V3H18V5C19.1046 5 20 5.89543 20 7V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V7C4 5.89543 4.89543 5 6 5V3ZM18 6.5H6C5.72386 6.5 5.5 6.72386 5.5 7V8H18.5V7C18.5 6.72386 18.2761 6.5 18 6.5ZM18.5 9.5H5.5V19C5.5 19.2761 5.72386 19.5 6 19.5H18C18.2761 19.5 18.5 19.2761 18.5 19V9.5ZM11 11H13V13H11V11ZM7 11V13H9V11H7ZM15 13V11H17V13H15Z"})),l=n(4403),c=n.n(l),d=window.wp.blockEditor,u=window.wp.components;var m=(0,a.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(o.Path,{d:"M4 20h8v-1.5H4V20zM18.9 3.5c-.6-.6-1.5-.6-2.1 0l-7.2 7.2c-.4-.1-.7 0-1.1.1-.5.2-1.5.7-1.9 2.2-.4 1.7-.8 2.2-1.1 2.7-.1.1-.2.3-.3.4l-.6 1.1H6c2 0 3.4-.4 4.7-1.4.8-.6 1.2-1.4 1.3-2.3 0-.3 0-.5-.1-.7L19 5.7c.5-.6.5-1.6-.1-2.2zM9.7 14.7c-.7.5-1.5.8-2.4 1 .2-.5.5-1.2.8-2.3.2-.6.4-1 .8-1.1.5-.1 1 .1 1.3.3.2.2.3.5.2.8 0 .3-.1.9-.7 1.3z"})),h=window.wp.i18n,w=window.wp.data,g=window.wp.coreData;function p(e){let{selectedId:t,onSelect:n}=e;const i=(0,w.useSelect)((e=>{var t,n,i;const r=null!==(t=null===(n=e(d.store).getSettings())||void 0===n?void 0:n.widgetTypesToHideFromLegacyWidgetBlock)&&void 0!==t?t:[];return null===(i=e(g.store).getWidgetTypes({per_page:-1}))||void 0===i?void 0:i.filter((e=>!r.includes(e.id)))}),[]);return i?0===i.length?(0,h.__)("There are no widgets available."):(0,a.createElement)(u.SelectControl,{label:(0,h.__)("Select a legacy widget to display:"),value:null!=t?t:"",options:[{value:"",label:(0,h.__)("Select widget")},...i.map((e=>({value:e.id,label:e.name})))],onChange:e=>{if(e){const t=i.find((t=>t.id===e));n({selectedId:t.id,isMulti:t.is_multi})}else n({selectedId:null})}}):(0,a.createElement)(u.Spinner,null)}function f(e){let{name:t,description:n}=e;return(0,a.createElement)("div",{className:"wp-block-legacy-widget-inspector-card"},(0,a.createElement)("h3",{className:"wp-block-legacy-widget-inspector-card__name"},t),(0,a.createElement)("span",null,n))}var v=window.wp.notices,b=window.wp.compose,y=window.lodash,_=window.wp.apiFetch,E=n.n(_);class k{constructor(e){let{id:t,idBase:n,instance:i,onChangeInstance:r,onChangeHasPreview:a,onError:o}=e;this.id=t,this.idBase=n,this._instance=i,this._hasPreview=null,this.onChangeInstance=r,this.onChangeHasPreview=a,this.onError=o,this.number=++B,this.handleFormChange=(0,y.debounce)(this.handleFormChange.bind(this),200),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.initDOM(),this.bindEvents(),this.loadContent()}destroy(){this.unbindEvents(),this.element.remove()}initDOM(){var e,t;this.element=C("div",{class:"widget open"},[C("div",{class:"widget-inside"},[this.form=C("form",{class:"form",method:"post"},[C("input",{class:"widget-id",type:"hidden",name:"widget-id",value:null!==(e=this.id)&&void 0!==e?e:`${this.idBase}-${this.number}`}),C("input",{class:"id_base",type:"hidden",name:"id_base",value:null!==(t=this.idBase)&&void 0!==t?t:this.id}),C("input",{class:"widget-width",type:"hidden",name:"widget-width",value:"250"}),C("input",{class:"widget-height",type:"hidden",name:"widget-height",value:"200"}),C("input",{class:"widget_number",type:"hidden",name:"widget_number",value:this.idBase?this.number.toString():""}),this.content=C("div",{class:"widget-content"}),this.id&&C("button",{class:"button is-primary",type:"submit"},(0,h.__)("Save"))])])])}bindEvents(){if(window.jQuery){const{jQuery:e}=window;e(this.form).on("change",null,this.handleFormChange),e(this.form).on("input",null,this.handleFormChange),e(this.form).on("submit",this.handleFormSubmit)}else this.form.addEventListener("change",this.handleFormChange),this.form.addEventListener("input",this.handleFormChange),this.form.addEventListener("submit",this.handleFormSubmit)}unbindEvents(){if(window.jQuery){const{jQuery:e}=window;e(this.form).off("change",null,this.handleFormChange),e(this.form).off("input",null,this.handleFormChange),e(this.form).off("submit",this.handleFormSubmit)}else this.form.removeEventListener("change",this.handleFormChange),this.form.removeEventListener("input",this.handleFormChange),this.form.removeEventListener("submit",this.handleFormSubmit)}async loadContent(){try{if(this.id){const{form:e}=await S(this.id);this.content.innerHTML=e}else if(this.idBase){const{form:e,preview:t}=await T({idBase:this.idBase,instance:this.instance,number:this.number});if(this.content.innerHTML=e,this.hasPreview=!M(t),!this.instance.hash){const{instance:e}=await T({idBase:this.idBase,instance:this.instance,number:this.number,formData:I(this.form)});this.instance=e}}if(window.jQuery){const{jQuery:e}=window;e(document).trigger("widget-added",[e(this.element)])}}catch(e){this.onError(e)}}handleFormChange(){this.idBase&&this.saveForm()}handleFormSubmit(e){e.preventDefault(),this.saveForm()}async saveForm(){const e=I(this.form);try{if(this.id){const{form:t}=await S(this.id,e);if(this.content.innerHTML=t,window.jQuery){const{jQuery:e}=window;e(document).trigger("widget-updated",[e(this.element)])}}else if(this.idBase){const{instance:t,preview:n}=await T({idBase:this.idBase,instance:this.instance,number:this.number,formData:e});this.instance=t,this.hasPreview=!M(n)}}catch(e){this.onError(e)}}get instance(){return this._instance}set instance(e){this._instance!==e&&(this._instance=e,this.onChangeInstance(e))}get hasPreview(){return this._hasPreview}set hasPreview(e){this._hasPreview!==e&&(this._hasPreview=e,this.onChangeHasPreview(e))}}let B=0;function C(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const i=document.createElement(e);for(const[e,n]of Object.entries(t))i.setAttribute(e,n);if(Array.isArray(n))for(const e of n)e&&i.appendChild(e);else"string"==typeof n&&(i.innerText=n);return i}async function S(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return t=n?await E()({path:`/wp/v2/widgets/${e}?context=edit`,method:"PUT",data:{form_data:n}}):await E()({path:`/wp/v2/widgets/${e}?context=edit`,method:"GET"}),{form:t.rendered_form}}async function T(e){let{idBase:t,instance:n,number:i,formData:r=null}=e;const a=await E()({path:`/wp/v2/widget-types/${t}/encode`,method:"POST",data:{instance:n,number:i,form_data:r}});return{instance:a.instance,form:a.form,preview:a.preview}}function M(e){const t=document.createElement("div");return t.innerHTML=e,H(t)}function H(e){switch(e.nodeType){case e.TEXT_NODE:return""===e.nodeValue.trim();case e.ELEMENT_NODE:return!["AUDIO","CANVAS","EMBED","IFRAME","IMG","MATH","OBJECT","SVG","VIDEO"].includes(e.tagName)&&(!e.hasChildNodes()||Array.from(e.childNodes).every(H));default:return!0}}function I(e){return new window.URLSearchParams(Array.from(new window.FormData(e))).toString()}function P(e){let{title:t,isVisible:n,id:i,idBase:r,instance:o,isWide:s,onChangeInstance:l,onChangeHasPreview:d}=e;const m=(0,a.useRef)(),g=(0,b.useViewportMatch)("small"),p=(0,a.useRef)(new Set),f=(0,a.useRef)(new Set),{createNotice:y}=(0,w.useDispatch)(v.store);return(0,a.useEffect)((()=>{if(f.current.has(o))return void f.current.delete(o);const e=new k({id:i,idBase:r,instance:o,onChangeInstance(e){p.current.add(o),f.current.add(e),l(e)},onChangeHasPreview:d,onError(e){window.console.error(e),y("error",(0,h.sprintf)((0,h.__)('The "%s" block was affected by errors and may not function properly. Check the developer tools for more details.'),r||i))}});return m.current.appendChild(e.element),()=>{p.current.has(o)?p.current.delete(o):e.destroy()}}),[i,r,o,l,d,g]),s&&g?(0,a.createElement)("div",{className:c()({"wp-block-legacy-widget__container":n})},n&&(0,a.createElement)("h3",{className:"wp-block-legacy-widget__edit-form-title"},t),(0,a.createElement)(u.Popover,{focusOnMount:!1,position:"middle right",__unstableForceXAlignment:!0},(0,a.createElement)("div",{ref:m,className:"wp-block-legacy-widget__edit-form",hidden:!n}))):(0,a.createElement)("div",{ref:m,className:"wp-block-legacy-widget__edit-form",hidden:!n},(0,a.createElement)("h3",{className:"wp-block-legacy-widget__edit-form-title"},t))}function V(e){let{idBase:t,instance:n,isVisible:i}=e;const[r,o]=(0,a.useState)(!1),[s,l]=(0,a.useState)("");(0,a.useEffect)((()=>{const e=void 0===window.AbortController?void 0:new window.AbortController;return async function(){const i=`/wp/v2/widget-types/${t}/render`;return await E()({path:i,method:"POST",signal:null==e?void 0:e.signal,data:n?{instance:n}:{}})}().then((e=>{l(e.preview)})).catch((e=>{if("AbortError"!==e.name)throw e})),()=>null==e?void 0:e.abort()}),[t,n]);const d=(0,b.useRefEffect)((e=>{if(!r)return;function t(){const t=Math.max(e.contentDocument.documentElement.offsetHeight,e.contentDocument.body.offsetHeight);e.style.height=`${t}px`}const{IntersectionObserver:n}=e.ownerDocument.defaultView,i=new n((e=>{let[n]=e;n.isIntersecting&&t()}),{threshold:1});return i.observe(e),e.addEventListener("load",t),()=>{i.disconnect(),e.removeEventListener("load",t)}}),[r]);return(0,a.createElement)(a.Fragment,null,i&&!r&&(0,a.createElement)(u.Placeholder,null,(0,a.createElement)(u.Spinner,null)),(0,a.createElement)("div",{className:c()("wp-block-legacy-widget__edit-preview",{"is-offscreen":!i||!r})},(0,a.createElement)(u.Disabled,null,(0,a.createElement)("iframe",{ref:d,className:"wp-block-legacy-widget__edit-preview-iframe",tabIndex:"-1",title:(0,h.__)("Legacy Widget Preview"),srcDoc:s,onLoad:e=>{e.target.contentDocument.body.style.overflow="hidden",o(!0)},height:100}))))}function F(e){let{name:t}=e;return(0,a.createElement)("div",{className:"wp-block-legacy-widget__edit-no-preview"},t&&(0,a.createElement)("h3",null,t),(0,a.createElement)("p",null,(0,h.__)("No preview available.")))}function x(e){let{clientId:t,rawInstance:n}=e;const{replaceBlocks:i}=(0,w.useDispatch)(d.store);return(0,a.createElement)(u.ToolbarButton,{onClick:()=>{n.title?i(t,[(0,r.createBlock)("core/heading",{content:n.title}),...(0,r.rawHandler)({HTML:n.text})]):i(t,(0,r.rawHandler)({HTML:n.text}))}},(0,h.__)("Convert to blocks"))}function N(e){let{attributes:{id:t,idBase:n},setAttributes:i}=e;return(0,a.createElement)(u.Placeholder,{icon:(0,a.createElement)(d.BlockIcon,{icon:m}),label:(0,h.__)("Legacy Widget")},(0,a.createElement)(p,{selectedId:null!=t?t:n,onSelect:e=>{let{selectedId:t,isMulti:n}=e;i(t?n?{id:null,idBase:t,instance:{}}:{id:t,idBase:null,instance:null}:{id:null,idBase:null,instance:null})}}))}function L(e){let{attributes:{id:t,idBase:n,instance:i},setAttributes:r,clientId:o,isSelected:s,isWide:l=!1}=e;const[c,p]=(0,a.useState)(null),v=null!=t?t:n,{record:b,hasResolved:y}=(0,g.__experimentalUseEntityRecord)("root","widgetType",v),_=(0,w.useSelect)((e=>e(d.store).isNavigationMode()),[]),E=(0,a.useCallback)((e=>{r({instance:e})}),[]);if(!b&&y)return(0,a.createElement)(u.Placeholder,{icon:(0,a.createElement)(d.BlockIcon,{icon:m}),label:(0,h.__)("Legacy Widget")},(0,h.__)("Widget is missing."));if(!y)return(0,a.createElement)(u.Placeholder,null,(0,a.createElement)(u.Spinner,null));const k=!n||!_&&s?"edit":"preview";return(0,a.createElement)(a.Fragment,null,"text"===n&&(0,a.createElement)(d.BlockControls,{group:"other"},(0,a.createElement)(x,{clientId:o,rawInstance:i.raw})),(0,a.createElement)(d.InspectorControls,null,(0,a.createElement)(f,{name:b.name,description:b.description})),(0,a.createElement)(P,{title:b.name,isVisible:"edit"===k,id:t,idBase:n,instance:i,isWide:l,onChangeInstance:E,onChangeHasPreview:p}),n&&(0,a.createElement)(a.Fragment,null,null===c&&"preview"===k&&(0,a.createElement)(u.Placeholder,null,(0,a.createElement)(u.Spinner,null)),!0===c&&(0,a.createElement)(V,{idBase:n,instance:i,isVisible:"preview"===k}),!1===c&&"preview"===k&&(0,a.createElement)(F,{name:b.name})))}const D=[{block:"core/calendar",widget:"calendar"},{block:"core/search",widget:"search"},{block:"core/html",widget:"custom_html",transform:e=>{let{content:t}=e;return{content:t}}},{block:"core/archives",widget:"archives",transform:e=>{let{count:t,dropdown:n}=e;return{displayAsDropdown:!!n,showPostCounts:!!t}}},{block:"core/latest-posts",widget:"recent-posts",transform:e=>{let{show_date:t,number:n}=e;return{displayPostDate:!!t,postsToShow:n}}},{block:"core/latest-comments",widget:"recent-comments",transform:e=>{let{number:t}=e;return{commentsToShow:t}}},{block:"core/tag-cloud",widget:"tag_cloud",transform:e=>{let{taxonomy:t,count:n}=e;return{showTagCounts:!!n,taxonomy:t}}},{block:"core/categories",widget:"categories",transform:e=>{let{count:t,dropdown:n,hierarchical:i}=e;return{displayAsDropdown:!!n,showPostCounts:!!t,showHierarchy:!!i}}},{block:"core/audio",widget:"media_audio",transform:e=>{let{url:t,preload:n,loop:i,attachment_id:r}=e;return{src:t,id:r,preload:n,loop:i}}},{block:"core/video",widget:"media_video",transform:e=>{let{url:t,preload:n,loop:i,attachment_id:r}=e;return{src:t,id:r,preload:n,loop:i}}},{block:"core/image",widget:"media_image",transform:e=>{let{alt:t,attachment_id:n,caption:i,height:r,link_classes:a,link_rel:o,link_target_blank:s,link_type:l,link_url:c,size:d,url:u,width:m}=e;return{alt:t,caption:i,height:r,id:n,link:c,linkClass:a,linkDestination:l,linkTarget:s?"_blank":void 0,rel:o,sizeSlug:d,url:u,width:m}}},{block:"core/gallery",widget:"media_gallery",transform:e=>{let{ids:t,link_type:n,size:i,number:r}=e;return{ids:t,columns:r,linkTo:n,sizeSlug:i,images:t.map((e=>({id:e})))}}},{block:"core/rss",widget:"rss",transform:e=>{let{url:t,show_author:n,show_date:i,show_summary:r,items:a}=e;return{feedURL:t,displayAuthor:!!n,displayDate:!!i,displayExcerpt:!!r,itemsToShow:a}}}].map((e=>{let{block:t,widget:n,transform:i}=e;return{type:"block",blocks:[t],isMatch:e=>{let{idBase:t,instance:i}=e;return t===n&&!(null==i||!i.raw)},transform:e=>{var n;let{instance:a}=e;const o=(0,r.createBlock)(t,i?i(a.raw):void 0);return null!==(n=a.raw)&&void 0!==n&&n.title?[(0,r.createBlock)("core/heading",{content:a.raw.title}),o]:o}}}));var A={to:D};const W={apiVersion:2,name:"core/legacy-widget",title:"Legacy Widget",category:"widgets",description:"Display a legacy widget.",textdomain:"default",attributes:{id:{type:"string",default:null},idBase:{type:"string",default:null},instance:{type:"object",default:null}},supports:{html:!1,customClassName:!1,reusable:!1},editorStyle:"wp-block-legacy-widget-editor"},{name:O}=W,j={icon:s,edit:function(e){const{id:t,idBase:n}=e.attributes,{isWide:i=!1}=e,r=(0,d.useBlockProps)({className:c()({"is-wide-widget":i})});return(0,a.createElement)("div",r,t||n?(0,a.createElement)(L,e):(0,a.createElement)(N,e))},transforms:A};var z=(0,a.createElement)(o.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,a.createElement)(o.Path,{d:"M18 4h-7c-1.1 0-2 .9-2 2v3H6c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-3h3c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-4.5 14c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h3V13c0 1.1.9 2 2 2h2.5v3zm0-4.5H11c-.3 0-.5-.2-.5-.5v-2.5H13c.3 0 .5.2.5.5v2.5zm5-.5c0 .3-.2.5-.5.5h-3V11c0-1.1-.9-2-2-2h-2.5V6c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5v7z"}));function G(e){let{clientId:t}=e;return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(u.Placeholder,{className:"wp-block-widget-group__placeholder",icon:(0,a.createElement)(d.BlockIcon,{icon:z}),label:(0,h.__)("Widget Group")},(0,a.createElement)(d.ButtonBlockAppender,{rootClientId:t})),(0,a.createElement)(d.InnerBlocks,{renderAppender:!1}))}function R(e){var t;let{attributes:n,setAttributes:i}=e;return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(d.RichText,{tagName:"h2",className:"widget-title",allowedFormats:[],placeholder:(0,h.__)("Title"),value:null!==(t=n.title)&&void 0!==t?t:"",onChange:e=>i({title:e})}),(0,a.createElement)(d.InnerBlocks,null))}var Q=[{attributes:{title:{type:"string"}},supports:{html:!1,inserter:!0,customClassName:!0,reusable:!1},save(e){let{attributes:t}=e;return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(d.RichText.Content,{tagName:"h2",className:"widget-title",value:t.title}),(0,a.createElement)(d.InnerBlocks.Content,null))}}];const $={apiVersion:2,name:"core/widget-group",category:"widgets",attributes:{title:{type:"string"}},supports:{html:!1,inserter:!0,customClassName:!0,reusable:!1},editorStyle:"wp-block-widget-group-editor",style:"wp-block-widget-group"},{name:Z}=$,U={title:(0,h.__)("Widget Group"),description:(0,h.__)("Create a classic widget layout with a title that’s styled by your theme for your widget areas."),icon:z,__experimentalLabel:e=>{let{name:t}=e;return t},edit:function(e){const{clientId:t}=e,{innerBlocks:n}=(0,w.useSelect)((e=>e(d.store).getBlock(t)),[t]);return(0,a.createElement)("div",(0,d.useBlockProps)({className:"widget"}),0===n.length?(0,a.createElement)(G,e):(0,a.createElement)(R,e))},save:function(e){let{attributes:t}=e;return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(d.RichText.Content,{tagName:"h2",className:"widget-title",value:t.title}),(0,a.createElement)("div",{className:"wp-widget-group__inner-blocks"},(0,a.createElement)(d.InnerBlocks.Content,null)))},transforms:{from:[{type:"block",isMultiBlock:!0,blocks:["*"],isMatch:(e,t)=>!t.some((e=>"core/widget-group"===e.name)),__experimentalConvert(e){let t=[...e.map((e=>(0,r.createBlock)(e.name,e.attributes,e.innerBlocks)))];const n="core/heading"===t[0].name?t[0]:null;return t=t.filter((e=>e!==n)),(0,r.createBlock)("core/widget-group",{...n&&{title:n.attributes.content}},t)}}]},deprecated:Q};var X=(0,a.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(o.Path,{d:"M19.75 9c0-1.257-.565-2.197-1.39-2.858-.797-.64-1.827-1.017-2.815-1.247-1.802-.42-3.703-.403-4.383-.396L11 4.5V6l.177-.001c.696-.006 2.416-.02 4.028.356.887.207 1.67.518 2.216.957.52.416.829.945.829 1.688 0 .592-.167.966-.407 1.23-.255.281-.656.508-1.236.674-1.19.34-2.82.346-4.607.346h-.077c-1.692 0-3.527 0-4.942.404-.732.209-1.424.545-1.935 1.108-.526.579-.796 1.33-.796 2.238 0 1.257.565 2.197 1.39 2.858.797.64 1.827 1.017 2.815 1.247 1.802.42 3.703.403 4.383.396L13 19.5h.714V22L18 18.5 13.714 15v3H13l-.177.001c-.696.006-2.416.02-4.028-.356-.887-.207-1.67-.518-2.216-.957-.52-.416-.829-.945-.829-1.688 0-.592.167-.966.407-1.23.255-.281.656-.508 1.237-.674 1.189-.34 2.819-.346 4.606-.346h.077c1.692 0 3.527 0 4.941-.404.732-.209 1.425-.545 1.936-1.108.526-.579.796-1.33.796-2.238z"}));function J(e){let{currentWidgetAreaId:t,widgetAreas:n,onSelect:i}=e;return(0,a.createElement)(u.ToolbarGroup,null,(0,a.createElement)(u.ToolbarItem,null,(e=>(0,a.createElement)(u.DropdownMenu,{icon:X,label:(0,h.__)("Move to widget area"),toggleProps:e},(e=>{let{onClose:r}=e;return(0,a.createElement)(u.MenuGroup,{label:(0,h.__)("Move to")},(0,a.createElement)(u.MenuItemsChoice,{choices:n.map((e=>({value:e.id,label:e.name,info:e.description}))),value:t,onSelect:e=>{i(e),r()}}))})))))}function q(e){return e.attributes.__internalWidgetId}function K(e,t){return{...e,attributes:{...e.attributes||{},__internalWidgetId:t}}}function Y(e){const t=(0,w.subscribe)((()=>{var n,i;const a=null!==(n=null==e?void 0:e.widgetTypesToHideFromLegacyWidgetBlock)&&void 0!==n?n:[],o=null===(i=(0,w.select)(g.store).getWidgetTypes({per_page:-1}))||void 0===i?void 0:i.filter((e=>!a.includes(e.id)));o&&(t(),(0,w.dispatch)(r.store).addBlockVariations("core/legacy-widget",o.map((e=>({name:e.id,title:e.name,description:e.description,attributes:e.is_multi?{idBase:e.id,instance:{}}:{id:e.id}})))))}))}function ee(){const{metadata:t,settings:n,name:i}=e;(0,r.registerBlockType)({name:i,...t},n)}function te(){const{metadata:e,settings:n,name:i}=t;(0,r.registerBlockType)({name:i,...e},n)}}(),(window.wp=window.wp||{}).widgets=i}();