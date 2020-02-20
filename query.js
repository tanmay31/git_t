// // Sticky navbar
// // =========================
// $(document).ready(function () {
//     // Custom function which toggles between sticky class (is-sticky)
//     var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
//         var stickyHeight = sticky.outerHeight();
//         var stickyTop = stickyWrapper.offset().top;
//         if (scrollElement.scrollTop() >= stickyTop) {
//             stickyWrapper.height(stickyHeight);
//             sticky.addClass("is-sticky");
//             sticky.removeClass("bg-transparent");
//         }
//         else {
//             sticky.removeClass("bg-transparent");
//             sticky.removeClass("is-sticky");
//             stickyWrapper.height('auto');
//         }
//     };

//     // Find all data-toggle="sticky-onscroll" elements
//     $('[data-toggle="sticky-onscroll"]').each(function () {
//         var sticky = $(this);
//         var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
//         sticky.before(stickyWrapper);
//         sticky.addClass('sticky');

//         // Scroll & resize events
//         $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
//             stickyToggle(sticky, stickyWrapper, $(this));
//         });

//         // On page load
//         stickyToggle(sticky, stickyWrapper, $(window));
//     });
// });



var navbar = document.getElementsByClassName("navbar")[0];



$(window).on('resize',function () {
    var viewportWidth = $(window).width();
    if (viewportWidth < 600 ) {
        navbar.classList.add("fixed-top");
        navbar.classList.remove("nav-trans");
        navbar.classList.add("nav-dark");
    }
    else{
        window.onscroll=function () {
    
            var scroll = this.scrollY;
            if(scroll>=392)
            {
                navbar.classList.add("fixed-top");
                navbar.classList.remove("nav-trans");
                navbar.classList.add("nav-dark");
            }
            else{
                navbar.classList.remove("fixed-top");
                navbar.classList.remove("nav-dark");
                navbar.classList.add("nav-trans");  
            }
        };
    }
});

