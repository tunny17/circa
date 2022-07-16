
TweenMax.to('.overlay', 4, {
    delay: 1,
    left: "30%",
    ease: Expo.easeInOut
})


$(document).ready(function() {
    $("#fullPage").fullPage({
        anchors: ["firstPage", "secondPage", "thirdPage"],
        menu: "#menu",
        autoScrolling: false

    });
});

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: "#section2"
})

.setTween("#bg img", 2, {
    maxWidth: "1900px", 
    top: "30%",
    opacity: 0.25
})

.addTo(controller)
