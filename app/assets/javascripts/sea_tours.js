$(document).ready(function(){
  $('.calc_price').each(function(){
    $(this).click(function(e){
      var total = 0
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
})
