var d1 = $(".nuage:nth-child(2)").css("left").split('p')[0];

$(window).scroll(function(){
  $(".nuage:nth-child(1)").css({"marginLeft": ($(window).scrollTop()) + "px"});
  $(".nuage:nth-child(2)").css({"left": (d1 - $(window).scrollTop()) + "px"});
  $(".nuage:nth-child(3)").css({"marginLeft": ($(window).scrollTop()) + "px"});
});

console.clear();
var controller = new ScrollMagic.Controller();

var scene2 = new ScrollMagic.Scene({
          triggerElement: "#trigerBird"
        })
        .setTween(".oiseau", 0.5, {marginLeft: -200})
        .addTo(controller);
