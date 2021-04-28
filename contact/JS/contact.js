// window.scroll({
//   top: 2500,
//   left: 0,
//   behavior: 'smooth'
// });



// init controller
var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

// build scenes
new ScrollMagic.Scene({triggerElement: "#parallax1"})
        .setTween("#parallax1 > div", {y: "100%", ease: Linear.easeNone})
        // .addIndicators()
        .addTo(controller);
