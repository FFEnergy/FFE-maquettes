var d1 = $(".nuage:nth-child(2)").css("left").split('p')[0];

$(window).scroll(function(){
  $(".nuage:nth-child(1)").css({"marginLeft": ($(window).scrollTop()) + "px"});
  $(".nuage:nth-child(2)").css({"left": (d1 - $(window).scrollTop()) + "px"});
  $(".nuage:nth-child(3)").css({"marginLeft": ($(window).scrollTop()) + "px"});
});

console.clear();
TweenLite.defaultEase = Linear.easeNone;
var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();
var motionPath = MorphSVGPlugin.pathDataToBezier("#motionPath", {align:"#motionCircleSVG"});
var h = document.querySelector("#linesvg").getBoundingClientRect().height;

TweenMax.set("#motionCircleSVG", {transformOrigin:"center center", xPercent:-50, yPercent:-50})

tl.from('#motionPath', 2,{drawSVG:0});
tl.to("#motionCircleSVG", 2, {bezier:{type:"cubic", values:motionPath}}, 0);

var scene = new ScrollMagic.Scene({
  duration: h,
  triggerHook: 0.2
})
.addIndicators()
.setTween(tl)
.addTo(controller);
