$(document).ready(function(){

  // Get the modal
  var modal = $('#imageModal');

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var images = $('.small_images')
  var modalImg = document.getElementById("img01");

  images.each(function(){
    this.onclick = function(){
      modal.modal('show');
      modalImg.src = this.src.replace('bottom_', '');
    }
  })

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close_image")[0];

  // When the user clicks on <span> (x), close the modal
  if(typeof span != 'undefined') {
    span.onclick = function() {
      modal.modal('hide');
    }
  }
})
