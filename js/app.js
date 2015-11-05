$(document).ready(function() {

  var total = 0


  $('form').submit(function(e) {

    var item = $('#add-items').val()
    var price = $('#add-price').val()

    if (item == '') {

      alert('Must enter a Item!')

    } else if (parseFloat(price) < 0) {

      alert('price cannot be less than Zero')
    } else {

      total += parseFloat(price);

      $('.total-subtotal').text("" + total)

      $('.list-area').prepend(' <div class="no-strikethrough"><i class="fa fa-bomb bomb" data-price="' + price + '" style="float: left; cursor:pointer;"></i><span class="item-list">' + item + '</span><div class="price"><span class="price-list">' + price + '</span></div><a class="check-circle"><i class="fa fa-check-circle circle" style="cursor:pointer;"></i></a></div>')

      this.reset()
    }

    $('#add-items').focus();

    e.preventDefault();

  });

  $('.list-area').on('click', 'i.bomb', function(event) {
   event.preventDefault();
   $(this).parent().remove();
   var priceRemove = $(this).data("price")
   total -= parseFloat(priceRemove);
   $('.total-subtotal').text("" + total)
  });

   $('.list-area').on('click', 'i.circle', function(event) {
     event.preventDefault();
      $(this).toggleClass('fa-circle-o fa-circle-check');
      $(this).parent().parent().toggleClass('strikethrough no-strikethrough')
    });


  $('button').click(function(e) {
    $('.list-area').empty();
    $('.total-subtotal').text('');
    total = 0;



  });



});
