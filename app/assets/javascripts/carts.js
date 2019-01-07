$(document).ready(function(){
  var totalToursPrice = 0,
      submit_count = 0,
      last = false;

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

  $('.item-container').each(function(){
    var allClasses = $(this).attr('class').split(' '), itemId = allClasses[allClasses.length - 2],
        itemType = allClasses[allClasses.length - 1],
        adult = parseFloat( $('.'+itemId+' .item-adult-count.item-'+itemType+'-adult-count').val() ),
        child = parseFloat( $('.'+itemId+' .item-child-count.item-'+itemType+'-child-count').val() ),
        priceAdult = parseFloat( $('.'+itemId+'.'+itemType+' .price-container .adult').text() ),
        priceChild = parseFloat( $('.'+itemId+'.'+itemType+' .price-container .child').text() ),
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


  $('.orderAllContainer form').on('submit', function(e){
    if (!last) {
      e.preventDefault();

      if ( update_all_items() ) {
        $(e.currentTarget).trigger('submit');
      }
    }

  })

})
