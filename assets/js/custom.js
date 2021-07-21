// header scroll  
AOS.init({
    duration: 600
});

$(window).on("scroll", function() {
    if ($(window).scrollTop() > 50) {
        $("#header-sticky-wrapper").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
        $("#header-sticky-wrapper").removeClass("active");
    }
});

$("#v-pills-tab_seeMoreWork").removeClass("flex-column");

// <!-- script for new menu btn -->
function myFunction(x) {
    x.classList.toggle("change");
}

// init js for lozad
const observer = lozad();
observer.observe();
// init js for lozad

//Our Quality Work on hover working
$('#v-pills-tab_seeMoreWork > a').hover(function() {
    $(this).tab('show');
});