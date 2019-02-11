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

  function update_total_price() {
    totalToursPrice = 0;
    $('.total-price-container').each(function(){
      totalToursPrice += parseFloat( $(this).find('p span').text() )
    });
    $('#allToursPrice').text(totalToursPrice);
  }

  function update_all_items() {
    var item_count = 0;
    $('.item-SeaTour-adult-count').each(function(){
      var productId = $(this).parent().parent().parent().parent().attr('class').split('-').pop(),
          productType = $(this).attr('class').split(' ').pop().split('-')[1],
          adultCount = $(this).val(),
          childCount = $(this).parent().parent().parent().find('.item-child-count').val(),
          bookingDate = $(this).parent().parent().parent().parent().find('.date-container input').val();

      item_count += 1;

      if ($('.item-SeaTour-adult-count').length == item_count) {
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
