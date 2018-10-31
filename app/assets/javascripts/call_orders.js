$(document).ready(function(){
  $('#new_call_order').on('submit', function(e){
    var count = 0;
    e.preventDefault();
    $('.input-container.checkbox-container input[type="checkbox"]').each(function(){
      if ( $(this).is(":checked") ) {
        count += 1;
      }
    })
    if (count > 0) {
      this.submit();
    } else {
      $('.small_total').show();
      $('.submit-container').css('margin-top', '50px');
      return false;
    }
  })
})
