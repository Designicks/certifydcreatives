$(document).ready(function() {
    // $('#rotatescroll').tinycircleslider({
    //     interval: true,
    //     dotsSnap: true,
    //     dotsHide: false,
    //     radius: 240
    // });
    if ($(document).width() < 567 && $(document).width() > 340) {
        $('#rotatescroll').tinycircleslider({
            interval: true,
            dotsSnap: true,
            dotsHide: false,
            radius: 135
        });
    } else {
        $('#rotatescroll').tinycircleslider({
            interval: true,
            dotsSnap: true,
            dotsHide: false,
            radius: 240
        });
    }
});