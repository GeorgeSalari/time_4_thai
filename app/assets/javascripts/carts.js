$(document).ready(function(){
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
          totalPrice += totalAdultPrice + totalChildPrice;
          $('.'+itemId+'-total-price').text(totalPrice);
        })

        $('.'+itemId+' .item-child-count').on("change paste keyup", function(){
          totalPrice = 0;
          totalChildPrice = $(this).val() * priceChild;
          totalPrice += totalAdultPrice + totalChildPrice;
          $('.'+itemId+'-total-price').text(totalPrice);
        })
    $('.'+itemId+'-total-price').text(totalPrice);
  })
})
