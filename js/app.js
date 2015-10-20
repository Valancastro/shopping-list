$(document).ready(function(){
        
    $('form').submit(function(e){
        
       

         var item = $('#add-items').val()
        
          var price = $('#add-price').val()
       
            $('.list-area').prepend(' <div class="no-strikethrough"><i class="fa fa-bomb" style="float: left;"></i><span class="item-list">' + item + '</span><div class="price"><span class="price-list">'+ price +'</span></div><i class="fa fa-check-circle"></i></div>')
 e.preventDefault();
 
    })




});







 