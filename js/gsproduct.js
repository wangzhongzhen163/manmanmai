"use strict";function setShop(t,a){$.ajax({url:"http://mmb.ittun.com/api/getgsshop",success:function(a){var e=template("gsShop",a);t.html(e)}})}function setArea(t,a){$.ajax({url:"http://mmb.ittun.com/api/getgsshoparea",success:function(a){var e=template("gsArea",a);t.html(e)}})}function setProductList(t,a,e){$.ajax({url:"http://mmb.ittun.com/api/getgsproduct",data:{shopid:a.shopid||0,areaid:a.areaid||0},success:function(a){var e=template("gsProductList",a);t.html(e)}})}function setFilter(t,a,e){var a={result:[{selected:"京东",selectName:"shop"},{selected:"华北",selectName:"area"},{selected:"全部价格",selectName:"price"}]},s=template("filter",a);t.html(s)}function SelectShow(t){$("#"+t).toggleClass("on")}function GetShopProduct(t,a,e){$(".shop").html(e+"<i></i>"),$(".shop").attr("data-id",a),$("[data-"+t+"]").parent().removeClass("on"),$("[data-"+t+"="+a+"]").parent().addClass("on"),$("[data-"+t+"="+a+"]").parent().parent().parent().removeClass("on");var s=$(".filter").find(".area").data("id");setProductList($(".gs-product-list"),{shopid:a,areaid:s})}function GetAreaProduct(t,a,e){$(".area").html(e+"<i></i>"),$(".area").attr("data-id",a),$("[data-"+t+"]").parent().removeClass("on"),$("[data-"+t+"="+a+"]").parent().addClass("on"),$("[data-"+t+"="+a+"]").parent().parent().parent().removeClass("on");var s=$(".filter").find(".shop").data("id");setProductList($(".gs-product-list"),{shopid:s,areaid:a})}setShop($(".popsort")),setArea($(".popcat")),setProductList($(".gs-product-list"),{shopid:0,areaid:0}),setFilter($(".filter"));