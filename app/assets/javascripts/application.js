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
      totalAdultPrice = 0,
      totalChildPrice = 0,
      totalToursPrice = 0;

  $('.container-label input').change(function(){
    if ($(this).parent().find('input').is(':checked')) {
      $('#phuket-tour-container .'+$(this).val()).addClass('show')
      $('#phuket-tour-container .'+$(this).val()).removeClass('hidden')
      $('#phuket-tour-container .block-tours-container.show').css('margin-top', '50px')
      $($('#phuket-tour-container .block-tours-container.show')[0]).css('margin-top', '0')
    } else {
      $('#phuket-tour-container .'+$(this).val()).removeClass('show')
      $('#phuket-tour-container .'+$(this).val()).addClass('hidden')
      $('#phuket-tour-container .block-tours-container.show').css('margin-top', '50px')
      $($('#phuket-tour-container .block-tours-container.show')[0]).css('margin-top', '0')
    }
  })

  $('.region-container .active.phuket').click(function(){
    window.location.href = '/phuket'
  })

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
    var input_class = $('#adult_count').attr('class'),
        adult_count,
        child_count;
    
    if (input_class == undefined) {
      adult_count = $('#adult_count').val();
      child_count = $('#child_count').val()
    } else {
      $('.'+input_class.split(' ')[0]).each(function(){
        adult_count = $(this).val();
        adultPrice = $(this).parent().parent().find('span.adult.hidden').text();
        totalAdultPrice = parseInt( adult_count ) * parseInt( adultPrice );
        childPrice = $(this).parent().parent().parent().find('span.child.hidden').text();
        child_count = $(this).parent().parent().parent().find('#child_count').val();
        totalChildPrice = parseInt( child_count ) * parseInt( childPrice );
        $(this).parent().parent().parent().parent().find('.total-price-container p').text(totalAdultPrice + totalChildPrice + ' ฿')
      })
    }

    adultPrice = parseInt( $('#adult-price').text().slice(0,-1) );
    totalAdultPrice = parseInt( adult_count ) * adultPrice;
    childPrice = parseInt( $('#child-price').text().slice(0,-1) );
    totalChildPrice = parseInt( child_count ) * childPrice;
    $('#finalTotalPrice').text( totalAdultPrice + totalChildPrice + ' ฿')
  }

  calc_total_price();
  
  function calc_total_chart_price(){
    totalAdultPrice = 0;
    totalChildPrice = 0;
    totalToursPrice = 0;
    $('#cart-block .item-container').each(function(){
      var allClasses = $(this).attr('class').split(' '), itemId = allClasses[allClasses.length - 2],
          itemType = allClasses[allClasses.length - 1],
          adult = parseFloat( $('.'+itemId+' .item-adult-count.item-'+itemType+'-adult-count').val() ),
          child = parseFloat( $('.'+itemId+' .item-child-count.item-'+itemType+'-child-count').val() ),
          priceAdult = parseFloat( $(this).find('span.adult.hidden').text() ),
          priceChild = parseFloat( $(this).find('span.child.hidden').text() ),
          totalPrice;
          
          if ( !isNaN(child) && !isNaN(adult) ) {
            totalPrice = adult * priceAdult + child * priceChild;
          } else if ( !isNaN(adult) ) {
            totalPrice = adult * priceAdult;
          } else if (!isNaN(child) ) {
            totalPrice = child * priceChild;
          } else {
            totalPrice = 0;
          }
          var totalAdultPrice = adult * priceAdult,
              totalChildPrice = child * priceChild;

          $('.'+itemId+' .item-adult-count.item-'+itemType+'-adult-count').on("change paste keyup", function(){
            totalPrice = 0;
            totalAdultPrice = $(this).val() * priceAdult;
            if ( isNaN(totalChildPrice) ) {
              totalPrice += totalAdultPrice
            } else {
              totalPrice += totalAdultPrice + totalChildPrice;
            }
            $('.'+itemId+'-total-price-'+itemType).text(totalPrice);
            update_total_price();
          })

          $('.'+itemId+' .item-child-count.item-'+itemType+'-child-count').on("change paste keyup", function(){
            totalPrice = 0;
            totalChildPrice = $(this).val() * priceChild;
            if ( isNaN(totalAdultPrice) ) {
              totalPrice += totalChildPrice
            } else {
              totalPrice += totalAdultPrice + totalChildPrice;
            }
            $('.'+itemId+'-total-price-'+itemType).text(totalPrice);
            update_total_price();
          })
      $('.'+itemId+'-total-price-'+itemType).text(totalPrice);
      totalToursPrice += totalPrice;
    });

    $('#allToursPrice').text(totalToursPrice);
  }

  calc_total_chart_price();

  $('.pplsCounter svg').click(function(){
    var input_id = $(this).parent().attr('class').split(' ')[0],
        click_value = $(this).parent().attr('class').split(' ')[1],
        input_value,
        input_class = $(this).parent().parent().find('input').attr('class');

    if (input_class == undefined) {
      input_value = parseInt( $('#'+input_id).val() )
    } else {
      input_value = parseInt( $('#'+input_id + '.' +input_class.split(' ').join(".") ).val() )
    }

    if (click_value == 'plus') {
      if (input_class == undefined) {
        $('#'+input_id).val(input_value + 1)
      } else {
        $('#'+input_id + '.' +input_class.split(' ').join(".") ).val(input_value + 1)
      }
      calc_total_price();
      calc_total_chart_price();
    } else {
      if (input_id == 'adult_count') {
        if (input_value > 1) {
          if (input_class == undefined) {
            $('#'+input_id).val(input_value - 1)
          } else {
            $('#'+input_id + '.' +input_class.split(' ').join(".") ).val(input_value - 1)
          }
          calc_total_price();
          calc_total_chart_price();
        }
      } else {
        if (input_value >= 1) {
          if (input_class == undefined) {
            $('#'+input_id).val(input_value - 1)
          } else {
            $('#'+input_id + '.' +input_class.split(' ').join(".") ).val(input_value - 1)
          }
          calc_total_price();
          calc_total_chart_price();
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
        if ($('#projects').length > 0) {
          $('html, body').animate({
            scrollTop: $("#projects").offset().top
          }, 500);
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
        if ($('#projects').length > 0) {
          $('html, body').animate({
            scrollTop: $("#projects").offset().top
          }, 500);
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
        $('#orderTour').modal('toggle');
        $('.modal-item-title').text( $('#tour-title').text() );
        $('.modal-price-container p').text( $('#finalTotalPrice').text() );
        $('#modal_order_booking_date').val( $('#order_booking_date').val() );
        $('#modal_adult_count').val( $('#adult_count').val() );
        $('#modal_child_count').val( $('#child_count').val() );
        $('#moda-tour-img').attr( 'src', $('.fotorama__loaded--img.fotorama__active').find('.fotorama__img').attr('src') )
        
        var itemsCount = parseInt( $('.layer').text() );
        if (itemsCount < 9) {
          $('.layer').text(itemsCount + 1);
        } else {
          $('.layer').css('right', '4px');
          $('.layer').text(itemsCount + 1);
        }
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
