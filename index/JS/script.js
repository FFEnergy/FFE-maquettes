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
        .setTween(tl)
        .addTo(controller);


var scene2 = new ScrollMagic.Scene({
          triggerElement: "#trigerBird"
        })
        .setTween(".oiseau", 0.5, {marginLeft: -200})
        .addTo(controller);


var scene3 = new ScrollMagic.Scene({
          triggerElement: "#triggerBullPourquoi",
          duration: 400
        })
        .setTween(".bullPourquoi", 0.5, {scale: 3})
        .addTo(controller);

var scene4 = new ScrollMagic.Scene({
            triggerElement: "#triggerBullMoyen",
            duration: 400
          })
          .setTween(".bullMoyen", 0.5, {scale: 3}) // trigger a TweenMax.to tween
          .addTo(controller);

var scene5 = new ScrollMagic.Scene({
            triggerElement: "#triggerBullWindy",
            duration: 400
          })
          .setTween(".bullWindy", 0.5, {scale: 3}) // trigger a TweenMax.to tween
          .addTo(controller);
