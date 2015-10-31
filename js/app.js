$(document).ready(function() {

  var total = 0


  $('form').submit(function(e) {

    var item = $('#add-items').val()
    var price = $('#add-price').val()

    if (item == '') {

      // alert('Must enter a Item!')

    } else if (parseFloat(price) < 0) {

      // alert('price cannot be less than Zero')
    } else {

      total += parseFloat(price);

      $('.total-subtotal').text("" + total)

      $('.list-area').prepend(' <div class="no-strikethrough"><i class="fa fa-bomb bomb" style="float: left; cursor:pointer;"></i><span class="item-list">' + item + '</span><div class="price"><span class="price-list">' + price + '</span></div><i class="fa fa-check-circle check" class="check" style="cursor:pointer;"></i></div>')

      $('.bomb').on("click", function(event) {
        event.preventDefault();
        $(this).parent().fadeOut("slow")
      })

      $('.check').parent().on("click",function(e) {
           e.preventDefault();
         $(this).toggleClass('strikethrough');
         

         });

      this.reset()

    }

    e.preventDefault();

  });


  $('.reset').click(function(e) {
    $('.list-area').empty();
    $('.total-subtotal').text('');
    total = 0;



  });



});
