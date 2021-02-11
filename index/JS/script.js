var d1 = $(".nuage:nth-child(2)").css("left").split('p')[0];

$(window).scroll(function(){
  $(".nuage:nth-child(1)").css({"marginLeft": ($(window).scrollTop()) + "px"});
  $(".nuage:nth-child(2)").css({"left": (d1 - $(window).scrollTop()) + "px"});
  $(".nuage:nth-child(3)").css({"marginLeft": ($(window).scrollTop()) + "px"});
});
