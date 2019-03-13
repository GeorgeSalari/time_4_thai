$(document).ready(function(){
  var totalToursPrice = 0,
      submit_count = 0,
      last = false;

  $('.cart-favorit-switching button').click(function(){
    if ($(this).attr('id') == "cart-favorites") {
      $('#favorites-block').removeClass('hidden');
      $('#cart-block').addClass('hidden');
      $('.cart-favorit-switching button').removeClass('active');
      $(this).addClass('active');
    } else {
      $('#favorites-block').addClass('hidden');
      $('#cart-block').removeClass('hidden');
      $('.cart-favorit-switching button').removeClass('active');
      $(this).addClass('active');
    }
  })

  function update_all_items() {
    var item_count = 0;
    $('.item-container.cart-item').each(function(){
      var productId = $(this).attr('class').split(' ')[2].split('-')[1],
          productType = $(this).attr('class').split(' ').pop(),
          adultCount = $(this).find('#adult_count').val(),
          childCount = $(this).find('#child_count').val(),
          bookingDate = $(this).find('.date-container input').val();

      item_count += 1;

      if ($('.item-container.cart-item').length == item_count) {
        last = true;
      }

      if (submit_count == 0) {
        $.ajax({
          url: '/cart_items/'+productId,
          method: 'put',
          data: jQuery.param({
            product_type: productType,
            adult_count: adultCount,
            child_count: childCount,
            booking_date: bookingDate
          }),
          contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
          success: function(data){
            console.log('success')
          }
        })
      }
    })
    return last
  }

  $('.orderAllContainer form').on('submit', function(e){
    if (!last) {
      e.preventDefault();

      if ( update_all_items() ) {
        $(e.currentTarget).trigger('submit');
      }
    }

  })

})
