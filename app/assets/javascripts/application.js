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
  var tourTitle,
      adultPrice,
      childPrice,
      totalAdultPrice,
      totalChildPrice;

  $('.full_content_show').click(function(){
    $(this).hide();
    $('.full-content').show();
  })

  $('.full_content_hide').click(function(){
    $(this).hide();
    $('.full-content').hide();
    $('.full_content_show').show();
  })

  function calc_total_price(){
    adultPrice = parseInt( $('#adult-price').text().slice(0,-1) );
    totalAdultPrice = parseInt( $('#adult_count').val() ) * adultPrice;
    childPrice = parseInt( $('#child-price').text().slice(0,-1) );
    totalChildPrice = parseInt( $('#child_count').val() ) * childPrice;
    $('#finalTotalPrice').text( totalAdultPrice + totalChildPrice + ' ฿')
  }

  calc_total_price();
  

  $('.pplsCounter svg').click(function(){
    var input_id = $(this).parent().attr('class').split(' ')[0],
        click_value = $(this).parent().attr('class').split(' ')[1],
        input_value = parseInt( $('#'+input_id).val() );
    if (click_value == 'plus') {
      $('#'+input_id).val(input_value + 1)
      calc_total_price();
    } else {
      if (input_id == 'adult_count') {
        if (input_value > 1) {
          $('#'+input_id).val(input_value - 1);
          calc_total_price();
        }
      } else {
        if (input_value >= 1) {
          $('#'+input_id).val(input_value - 1);
          calc_total_price();
        }
      }
    }
  })

  fotoramaDefaults = {
    width: '90%',
    maxwidth: '100%',
    swipe: true,
    maxheight: 400,
    thumbmargin: 14,
    thumbwidth: 90,
    thumbheight: 60,
    allowfullscreen: true,
    nav: 'thumbs'
  }

  if (window.location.href.includes('boats') || window.location.href.includes('sea_tours/10') || window.location.href.includes('realty-buy') || window.location.href.includes('transfers') || window.location.href.includes('photoshoot') || window.location.href.includes('wedding') || window.location.href.includes('spa') || window.location.href.includes('individual')|| window.location.href.includes('phuket_tours/4') || window.location.href.includes('realty-rent') ) {
    $($('.price-container').children()[0]).find('p').text('От '+$($('.price-container').children()[0]).find('p').text().trim().split(' ')[1] + " THB");
    $($('.price-container').children()[1]).find('p').hide();
    $($('.price-container').children()[2]).find('button').css('right', '0');
  }

  if (window.location.href.includes('shops') ) {
    $($('.price-container').children()[0]).hide();
    $($('.price-container').children()[1]).hide();
    $($('.price-container').children()[2]).find('button').css('right', '0');
    $($('.price-container').children()[2]).css({'display': 'flex', 'justify-content': 'center'});
    $('.price-container').css({'justify-content': 'center'});
  }

  if ( window.location.href.includes('shops') ) {
    $('.main-price-container').hide();
  }
  if (window.location.href.includes('boats') ) {
    $('.main-price-container').each(function(){
      $(this).text(" От "+$(this).text().trim().split(' ')[1]+" THB" );
    })
  }

  if ($('.header-no-price.check-price td:last-child').length > 0) {
    $('.header-no-price.check-price td:last-child').each(function(){
       $(this).text('От '+$(this).text());
    })
  };

  if ($('.header-no-price td:last-child').length > 0) {
    $('.header-no-price td:last-child').each(function(){
      if ( !$(this).parent().attr('class').includes('check-price') ) {
        $(this).text('Бесплатно');
      }
    })
  };

  function find_preview_review(){
    var array = [], return_value, val_index;
    $('.reviews-block.hidden').each(function(){
      array.push( parseInt($(this).attr('class').split(' ')[1].split('-')[2]) )
    })
    $.each(array, function(index, value){
      if (index != value) {
        val_index = index - 1;
        return false;
      }
    })
    if (val_index == undefined) {
      return_value = array[array.length - 1] + 2
    } else {
      return_value = array[val_index] + 2
    }
    return return_value;
  }


  $('.left-arrow').hide();
  $('.arrow-container-left').each(function(){
    var review_length = $('.reviews-block').length

    $(this).click(function(){
      $('.reviews-block .left-arrow').css('top','100%');
      if ( $(this).attr('class').includes('left-arrow-container') ){
        $('.arrow-container-right svg').show();
        $('.arrow-container-right').addClass('right-arrow-container')

        var review_showing = find_preview_review();
        var first_before_review, second_before_review;

        $('.reviews-block').each(function(){
          $(this).addClass('hidden');
        })
        
        if (parseInt(review_showing) < 2) {
          first_before_review = undefined;
        } else {
          first_before_review = review_showing - 3
        }

        if ( parseInt(review_showing) < 1) {
          second_before_review = undefined;
        } else {
          second_before_review = review_showing - 2
        }

        if (first_before_review != undefined ) {
          $('.reviews-block.reviews-block-'+first_before_review).removeClass('hidden');
        }
        if (second_before_review != undefined) {
          $('.reviews-block.reviews-block-'+second_before_review).removeClass('hidden');
        }

        if (first_before_review <= 1 ) {
          $(this).find('svg').hide();
          $('.arrow-container-left').removeClass('left-arrow-container')
        } else {
          $(this).find('svg').show();
          $('.arrow-container-left').addClass('left-arrow-container')
        }
      }
    })
  })

  function find_next_review() {
    var array = [], return_value;
    $('.reviews-block.hidden').each(function(){
      array.push( parseInt($(this).attr('class').split(' ')[1].split('-')[2]) )
    })
    if (jQuery.inArray( 0, array ) == 0) {
      $.each(array, function(index, value){
        if (index != value) {
          return_value = value - 1;
          return false;
        }
      })
    } else {
      return_value = array[0] - 1
    }
    return return_value;
  }

  $('.right-arrow-container').each(function(){
    var review_length = $('.reviews-block').length

    $(this).click(function(){
      if ( $(this).attr('class').includes('right-arrow-container') ){
        $('.arrow-container-left svg').show();
        $('.arrow-container-left').addClass('left-arrow-container')
        
        var review_showing = find_next_review();
        var first_next_review, second_next_review;
        $('.reviews-block').addClass('hidden');
        if ( parseInt(review_showing) == (review_length - 1) ) {
          first_next_review = undefined
        } else {
          first_next_review = parseInt(review_showing) + 1
        }
        if ( parseInt(review_showing) == (review_length - 2) ) {
          second_next_review = undefined
        } else {
          second_next_review = parseInt(review_showing) + 2
        }

        if (first_next_review != undefined) {
          $('.reviews-block.reviews-block-'+first_next_review).removeClass('hidden');
        }
        if (second_next_review != undefined) {
          $('.reviews-block.reviews-block-'+second_next_review).removeClass('hidden');
        }
        if (first_next_review >= (review_length - 2) ) {
          $(this).find('svg').hide();
          $('.arrow-container-right').removeClass('right-arrow-container')
        } else {
          $(this).find('svg').show();
          $('.arrow-container-right').addClass('right-arrow-container')
        }
      }
    })
  })

  if (window.innerHeight < 655 || window.outerWidth < 1100 ) {
    $('.sun-container').css('display', 'none');
    $('.subscription').css('display', 'none');
  } else {
    $('.sun-container').css('display', 'flex');
    $('.subscription').css('display', 'inherit');
  }

  $('.imagesContainer').click(function(e){
    if (e.target.className == $(this).attr('class')) {
      if (e.target.textContent != "Заказать") {
        location.href = $(this).find('a')[0].href
      }
    }
  })

  if ( parseInt( $('.layer').text() ) > 9 ) {
    $('.layer').css('right', '6px')
  }

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
    $('.asana-banner .main-container').css('min-height', 'fit-content');
    $('.asana-banner').height( $('.asana-banner .main-container').height() );
    $('#second-menu.main-menu').css('padding-top', $('.asana-banner .main-container').height() );
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
      if ($(this).attr('class').includes('new-window')) {
        window.open($(this).attr('href'));
      } else {
        location.href = $(this).attr('href');
      }
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
  var array = modalId.id.split('_')
  mySlidesId = array[array.length - 1]
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

function plusSlides(n, product, review) {
  showSlides( slideIndex += parseInt(n), product, review );
}

function currentSlide(n, product, review) {
  showSlides( slideIndex = parseInt(n), product, review );
}

function showSlides(n, product, review) {
  var i;
  if (review != undefined ) {
    var slides = document.getElementsByClassName("mySlides_review_"+product+"_"+mySlidesId);
    var dots = document.getElementsByClassName("demo_review_"+product+"_"+mySlidesId)
  } else if (product != undefined) {
    var slides = document.getElementsByClassName("mySlides_"+product+"_"+mySlidesId);
    var dots = document.getElementsByClassName("demo_"+product+"_"+mySlidesId);
  } else {
    var slides = document.getElementsByClassName("mySlides_"+mySlidesId);
    var dots = document.getElementsByClassName("demo_"+mySlidesId);
  }
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  if (slides.length > 0) {
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
}
