$(document).ready(function(){
  "use strict";

  var window_width   = $(window).width(),
  window_height      = window.innerHeight,
  header_height      = $(".default-header").height(),
  header_height_static = $(".site-header.static").outerHeight(),
  fitscreen        = window_height - header_height;



  $(".fullscreen").css("height", window_height)
  $(".fitscreen").css("height", fitscreen);

  // ---------  Sticky Main Menu Active-----------//

  $(".total-header-area").sticky({topSpacing:0});

      //---- Toggle Menu Bar

        $('.toggle-btn').on('click', function(e){
            e.preventDefault();
            $('.side-menubar').toggleClass('open-menubar');
            $("span", this).toggleClass("lnr-menu lnr-cross");
        });
      $('.side-menubar nav ul li a').on('click', function(e){
        e.preventDefault();
        $('.side-menubar').toggleClass('open-menubar');
        $(".toggle-btn span").toggleClass("lnr-menu lnr-cross");
      });

    //------- Add smooth scrolling to all links

         // Add smooth scrolling to all links
         $(".main-menu nav ul li a, .side-menubar nav ul li a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
        } // End if
    });


        var fullPath = location.pathname + location.search + location.hash;
        if (fullPath == '/') {
         //--------- Active menu show ---------//

           $(".main-menu nav ul li a").on("click", function(e) {
              $(".main-menu nav ul li").removeClass("active");
              $(this).addClass("active");
              });

            $(window).on('scroll', function(event){
               var scrollPos = $(document).scrollTop();
               $(".main-menu#main-menu-container nav ul li a, .side-menubar nav ul li a").each(function () {
                 var currLink = $(this);
                 var refElement = $(currLink.attr("href"));

                 if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                   currLink.parent().addClass("active").siblings().removeClass("active");
                   return;
               }
               else{
                   currLink.parent().removeClass("active");
               }
            })
           })
          }

    //----- Accordion Color Change


    $("#accordion .card").on("click", function(e){
        $('#accordion .card').removeClass('color-change');
        $(this).toggleClass("color-change");
    });
   $("#accordion2 .card").on("click", function(e){
        $('#accordion2 .card').removeClass('color-change2');
        $(this).toggleClass("color-change2");
    });

    $('.collapse').on('show.bs.collapse', function (e) {
        $('.collapse').collapse("hide")
    })

     //---- Active Customer Care Carousel
     $('.active-testimonial').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
        animateOut: 'fadeOut'
    })
     $('.active-testimonial-18').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
    })
     $('.active-fullscreen-testimonial').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
        animateOut: 'fadeOut'
    })
  //--------- Accordion Icon Change ---------//

    $('.collapse').on('shown.bs.collapse', function(){
        $(this).parent().find(".lnr-plus-circle").removeClass("lnr-plus-circle").addClass("lnr-circle-minus");
    }).on('hidden.bs.collapse', function(){
        $(this).parent().find(".lnr-circle-minus").removeClass("lnr-circle-minus").addClass("lnr-plus-circle");
    });


    //--------- Accordion Icon Change ---------//

    $('.collapse').on('shown.bs.collapse', function(){
        $(this).parent().find(".lnr-chevron-down").removeClass("lnr-chevron-down").addClass("lnr-chevron-up");

    }).on('hidden.bs.collapse', function(){
        $(this).parent().find(".lnr-chevron-up").removeClass("lnr-chevron-up").addClass("lnr-chevron-down");
    });


    $('.behance-img-popup').magnificPopup({
      type: 'image'
      // other options
    });
    //------ Magnefic Pop Up Youtube video Play  ------//

    $('.video').magnificPopup({
      type: 'iframe',
      iframe: {
        patterns: {
          dailymotion: {

            index: 'dailymotion.com',

            id: function(url) {
                var m = url.match(/^.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/);
                if (m !== null) {
                    if(m[4] !== undefined) {

                        return m[4];
                    }
                    return m[2];
                }
                return null;
            },

            src: 'http://www.dailymotion.com/embed/video/%id%'

          }
        }
      }

    });
});
