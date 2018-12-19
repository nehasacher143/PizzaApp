/* Author: 
Neha Sacher
*/
jQuery(function() {

function loadJSON(callback) {   
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'assets/json/pizzas.json', true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      //console.log(typeof(xobj));
      callback((JSON.parse(xobj.responseText)));
      //console.log(((xobj.responseText)));
    }
  };
  xobj.send(null);  
}
loadJSON(function(json) {
  // console.log(json);
 $('#resultData').html('');
  $.each(json.pizzas, function(key,value){
    console.log(key+1);
      $('#resultData').append('<tr><td>'+value.pizza+'</td><td>'+value.crust+'</td><td>'+value.toppings+'</td><td>'+value.price+'</td><td>'+'<button class="btn btn-danger my-cart-btn" data-id="' +(key+1)+ '" data-name="'+
        value.pizza+'" data-price="'+ value.price +'" data-quantity="1">Add to Cart</button>'+'</td></tr>');
  });

});




var goToCartIcon = function($addTocartBtn){
    var $cartIcon = $(".my-cart-icon");
    var $image = $('<img width="30px" height="30px" src="' + $addTocartBtn.data("image") + '"/>').css({"position": "fixed", "z-index": "999"});
    $addTocartBtn.prepend($image);
    var position = $cartIcon.position();
    $image.animate({
      top: position.top,
      left: position.left
    }, 500 , "linear", function() {
      $image.remove();
    });
  }

  $('.my-cart-btn').myCart({
    classCartIcon: 'my-cart-icon',
    classCartBadge: 'my-cart-badge',
    affixCartIcon: true,
    checkoutCart: function(products) {
      $.each(products, function(){
        console.log(this);
      });
    },
    clickOnAddToCart: function($addTocart){
      goToCartIcon($addTocart);
    },
    getDiscountPrice: function(products) {
      var total = 0;
      $.each(products, function(){
        total += this.quantity * this.price;
      });
      return total;
    }
  });
});






















