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
//= require bootstrap-sprockets
//= require rails-ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){

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
    })
  })

  $('#adult_count').on("change paste keyup", function(){
    totalAdultPrice = $(this).val() * adultPrice;
    $('#finalTotalPrice').text( totalAdultPrice + totalChildPrice + ' ฿');
  })

  $('#child_count').on("change paste keyup", function(){
    totalChildPrice = $(this).val() * childPrice;
    $('#finalTotalPrice').text( totalAdultPrice + totalChildPrice + ' ฿')
  })

  $("#mainHeaderImd").bind('load', function() {

    $('.asana-banner .main-container').height( $('#mainHeaderImd').height() );
    $('.asana-banner').height( $('#mainHeaderImd').height() );
    $('#second-menu.main-menu').css('padding-top', $('#mainHeaderImd').height() );
    console.log($('#mainHeaderImd').height());

  });

  $('.dropdown').click(function(e){
    var clicked_menu_class = $(this).attr('class')
    e.preventDefault();
    $.each($('.dropdown-menu'), function( index, value ) {
      if ($(this).attr('class').includes('display-dropdown-menu') && $(this).parent().attr('class') != clicked_menu_class) {
        $(value).removeClass('display-dropdown-menu')
      }
    });
    $($(this).find('.dropdown-menu')[0]).toggleClass('display-dropdown-menu');
  })

  $('button.cart').click(function(){
    debugger
  })

})

var mySlidesId

function openModal(modalId) {
  mySlidesId = modalId.id.substr(modalId.id.length - 1);
  document.getElementById(modalId.id).style.display = "block";
  $('.header-17 .sticky-wrapper.is-sticky .total-header-area').hide();
}

function closeModal(modalId) {
  document.getElementById(modalId.id).style.display = "none";
  $('.header-17 .sticky-wrapper.is-sticky .total-header-area').show();
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides_"+mySlidesId);
  var dots = document.getElementsByClassName("demo_"+mySlidesId);
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
