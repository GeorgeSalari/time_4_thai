$(document).ready(function(){
  var totalToursPrice = 0;

  function update_total_price() {
    totalToursPrice = 0;
    $('.total-price-container').each(function(){
      totalToursPrice += parseFloat( $(this).find('p span').text() )
    });
    $('#allToursPrice').text(totalToursPrice);
  }

  $('.item-container').each(function(){
    var allClasses = $(this).attr('class').split(' '), itemId = allClasses[allClasses.length - 1],
        adult = parseFloat( $('.'+itemId+' .item-adult-count').val() ),
        child = parseFloat( $('.'+itemId+' .item-child-count').val() ),
        priceAdult = parseFloat( $('.'+itemId+' .price-container .adult').text() ),
        priceChild = parseFloat( $('.'+itemId+' .price-container .child').text() ),
        totalPrice;
        if (child) {
          totalPrice = adult * priceAdult + child * priceChild;
        } else if (adult) {
          totalPrice = adult * priceAdult;
        } else {
          totalPrice = 0;
        }
        var totalAdultPrice = adult * priceAdult,
            totalChildPrice = child * priceChild;

        $('.'+itemId+' .item-adult-count').on("change paste keyup", function(){
          totalPrice = 0;
          totalAdultPrice = $(this).val() * priceAdult;
          if ( isNaN(totalChildPrice) ) {
            totalPrice += totalAdultPrice
          } else {
            totalPrice += totalAdultPrice + totalChildPrice;
          }
          $('.'+itemId+'-total-price').text(totalPrice);
          update_total_price();
        })

        $('.'+itemId+' .item-child-count').on("change paste keyup", function(){
          totalPrice = 0;
          totalChildPrice = $(this).val() * priceChild;
          if ( isNaN(totalAdultPrice) ) {
            totalPrice += totalChildPrice
          } else {
            totalPrice += totalAdultPrice + totalChildPrice;
          }
          totalPrice += totalAdultPrice + totalChildPrice;
          $('.'+itemId+'-total-price').text(totalPrice);
          update_total_price();
        })
    $('.'+itemId+'-total-price').text(totalPrice);
    totalToursPrice += totalPrice;
  });

  $('#allToursPrice').text(totalToursPrice);
})
