"use strict";$(function(){function t(t,e){$.ajax({url:"http://mmb.ittun.com/api/getindexmenu",dataType:"jsonp",jsonp:"callback",success:function(e){e=e.result;for(var i="",a=0;a<e.length;a++)i+='<div class="menu-item">',i+='<a href="'+e[a].titlehref+'">',i+=e[a].img,i+="<p>"+e[a].name+"</p>",i+="</a>",i+="</div>";$(t).html(i),$("#menu > .row > .menu-item:nth-last-child(-n+4)").addClass("hide"),n($("#menu > .row > .menu-item:nth-child(8) > a"))}})}function n(t,n){$(t).on("click",function(){$("#menu > .row > .menu-item:nth-last-child(-n+4)").toggleClass("hide")})}function e(t,n,e){$.ajax({url:"http://mmb.ittun.com/api/getmoneyctrl",dataType:"jsonp",jsonp:"callback",success:function(n){var e=template("moneyCtrl",n);t.html(e)}})}t($("#menu > .row")),e($(".product-list"))});