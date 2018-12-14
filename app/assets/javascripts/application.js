// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require tether
//= require popper
//= require rails-ujs
//= require bootstrap
//= require_tree .

$(document).ready(function(){
  // $('.imagesContainer').click(function(e){
  //   if (e.target.textContent != "Заказать") {
  //     location.href = $(this).find('a')[0].href
  //   }
  // })

  if ( parseInt( $('.layer').text() ) > 9 ) {
    $('.layer').css('right', '6px')
  }

  var tourTitle;
  var adultPrice;
  var childPrice;
  var totalAdultPrice;
  var totalChildPrice;

  $('.calc_price').each(function(){
    $(this).click(function(e){
      var total = 0;
      e.preventDefault();
      var id = this.id.match(/\d+/)[0]
      var adult = $('#adult_'+id).val();
      var child = $('#child_'+id).val();
      var adult_price = $($('#adult_price_'+id)[0]).text().match(/\d+/)[0]
      var child_price = $($('#child_price_'+id)[0]).text().match(/\d+/)[0]
      total = adult * adult_price + child * child_price
      $('#total_price_'+id).val(total)
    })
  })

  $('.orderTourButton').each(function(){
    $(this).click(function(e){
      $('button.cart').removeAttr("disabled");
      totalAdultPrice = 0;
      totalChildPrice = 0;
      tourTitle = $(this).data('title');
      adultPrice = $(this).data('adult');
      childPrice = $(this).data('child');
      productType = $(this).data('producttype');
      productId = $(this).data('productid');
      $('#orderTourTitle').text(tourTitle);
      $('#order_product_type').val(productType)
      $('#order_product_id').val(productId)
      if ( window.location.href.includes('carts') ) {
        bookingDate = $(this).data('date');
        adultCount = $('.item-adult-count.item-'+productId+'-adult-count.item-'+productType+'-adult-count').val();
        childCount = $('.item-child-count.item-'+productId+'-child-count.item-'+productType+'-child-count').val();
        $('#adult_count').val(adultCount);
        $('#child_count').val(childCount);
        $('#order_booking_date').val(bookingDate);
        totalAdultPrice = adultCount * adultPrice;
        totalChildPrice = childCount * childPrice;
        $('#finalTotalPrice').text( totalAdultPrice + totalChildPrice + ' ฿')
      }
    })
  })

  $('.orderTourButtonShow').each(function(){
    $(this).click(function(e){
      totalAdultPrice = 0;
      totalChildPrice = 0;
      tourTitle = $(this).data('title');
      adultPrice = $(this).data('adult');
      childPrice = $(this).data('child');
      $('#orderTourTitle').text(tourTitle);
    })
  })

  $('#adult_count').on("change paste keyup", function(){
    totalAdultPrice = 0;
    totalAdultPrice = $(this).val() * adultPrice;
    $('#finalTotalPrice').text( totalAdultPrice + totalChildPrice + ' ฿');
  })

  $('#child_count').on("change paste keyup", function(){
    totalChildPrice = 0;
    totalChildPrice = $(this).val() * childPrice;
    $('#finalTotalPrice').text( totalAdultPrice + totalChildPrice + ' ฿')
  })

  var onImgLoad = function(selector, callback){
    $(selector).each(function(){
      if (this.complete || /*for IE 10-*/ $(this).height() > 0) {
        callback.apply(this);
      }
      else {
        $(this).on('load', function(){
          callback.apply(this);
        });
      }
    });
  };

  onImgLoad('#mainHeaderImd', function(){
    $('.asana-banner .main-container').height( $('#mainHeaderImd').height() );
    $('.asana-banner').height( $('#mainHeaderImd').height() );
    $('#second-menu.main-menu').css('padding-top', $('#mainHeaderImd').height() );
    console.log($('#mainHeaderImd').height());
  });

  $(document).mouseup(function(e) {
    var container_1 = $(".dropdown");
    var container_2 = $(".dropdown-menu");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container_1.is(e.target) && container_1.has(e.target).length === 0 || !container_2.is(e.target) && container_2.has(e.target).length === 0) {
      $('.dropdown-menu').each(function(){
        $(this).removeClass('display-dropdown-menu');
      })
    }
  });


  $('.dropdown').click(function(e){
    var clicked_menu_class = $(this).attr('class')
    e.preventDefault();
    $(this).find('.dropdown-item').click(function(){
      location.href = $(this).attr('href');
    })
    $('.dropdown-menu').each(function(){
      $(this).removeClass('display-dropdown-menu');
    })
    $($(this).find('.dropdown-menu')[0]).toggleClass('display-dropdown-menu');
  })

  $('button.cart').click(function(){
    var submit_button = $(this), newOrderForm, new_position_top, new_position_left ;
    if ($(this).parent().parent().attr('class') == "fix") {
      newOrderForm = "#new_order.fix"
    } else {
      newOrderForm = "#new_order"
      $(this).attr("disabled", true);
    }

    $.post( "/cart_items", $(newOrderForm).serialize() )
      .done(function(){
        var t = $(newOrderForm+' button.cart'), b = $('.Oval-2');
        t.parent().append("<div id=add_cart>1</div>");
        var e = $('#add_cart');
        if ( newOrderForm.includes('fix') ) {
          new_position_top = $(newOrderForm).offset().top - $('.Oval-2').offset().top - 70
          new_position_left = $('.Oval-2').offset().left - $(newOrderForm).offset().left + 15
        } else {
          $("#new_order.fix #add_cart").remove();
          new_position_top = $('#orderTour .modal-body').offset().top - $('.Oval-2').offset().top
          new_position_left = $('.Oval-2').offset().left - $('#orderTour .modal-body').offset().left
        }

        e.animate({top: -new_position_top, left: new_position_left}, 1000, function(){
          if ( !newOrderForm.includes('fix') ) {
            $('#orderTour').modal('toggle');
          }
          e.remove();
          var itemsCount = parseInt( $('.layer').text() );
          if (itemsCount < 9) {
            $('.layer').text(itemsCount + 1);
          } else {
            $('.layer').css('right', '6px');
            $('.layer').text(itemsCount + 1);
          }

        });
      })
      .fail(function(){
        $('#orderTour').modal('toggle');
        alert( "Что то пошло не так, попробуйте снова!" );
      })
  })

})

var mySlidesId

function openModal(modalId) {
  mySlidesId = modalId.id.substr(modalId.id.length - 1);
  document.getElementById(modalId.id).style.display = "block";
  $('.header-17 .sticky-wrapper.is-sticky .total-header-area').hide();
  if ( $(window).scrollTop() == 0 ) {
    $('.header-4.header-17.navbar').hide()
  }
}

function closeModal(modalId) {
  document.getElementById(modalId.id).style.display = "none";
  $('.header-4.header-17.navbar').show()
  $('.header-17 .sticky-wrapper.is-sticky .total-header-area').show();
}

var slideIndex = 1;

showSlides( parseInt(slideIndex ) );

function plusSlides(n, product) {
  showSlides( slideIndex += parseInt(n), product );
}

function currentSlide(n, product) {
  showSlides( slideIndex = parseInt(n), product );
}

function showSlides(n, product) {
  var i;
  console.log ('начало i = ' + i)
  var slides = document.getElementsByClassName("mySlides_"+product+mySlidesId);
  console.log ('slide = ' + slide)
  var dots = document.getElementsByClassName("demo_"+product+mySlidesId);
  console.log ('dots = ' + dots)
  console.log ('n = ' + n)
  console.log ('product = ' + product)
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  console.log ('slideIndex = ' + slideIndex)
  console.log ('slides[slideIndex-1] = ' + slides[slideIndex-1])
  console.log ('dots[slideIndex-1] = ' + dots[slideIndex-1])
  if (slides.length > 0) {
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
}
