/*! This file is auto-generated */
!function(e){function t(){var e=document.getElementById("post-revisions"),n=e?e.getElementsByTagName("input"):[];e.onclick=function(){for(var e,t=0,i=0;i<n.length;i++)t+=n[i].checked?1:0,e=n[i].getAttribute("name"),n[i].checked||!("left"==e&&t<1||"right"==e&&1<t&&(!n[i-1]||!n[i-1].checked))||n[i+1]&&n[i+1].checked&&"right"==n[i+1].getAttribute("name")?"left"!=e&&"right"!=e||(n[i].style.visibility="visible"):n[i].style.visibility="hidden"},e.onclick()}e&&e.addEventListener?e.addEventListener("load",t,!1):e&&e.attachEvent&&e.attachEvent("onload",t)}(window);