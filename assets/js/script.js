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
 jQuery('#resultData').html('');
 jQuery.each(json.pizzas, function(key,value){
    console.log(key+1);
     jQuery('#resultData').append('<tr><td class="item-name">'+value.pizza+'</td><td>'+value.crust+'</td><td>'+value.toppings+'</td><td class="item-price"> '+value.price+'</td><td>'+'<button class="btn btn-primary sc-add-to-cart" data-name="'+value.pizza+'" data-price="'+value.price+'" type="submit">Add to Cart</button>'+'</td></tr>');
  });

});
jQuery(document).ready(function(){
$('#cart').simpleCart({
    addtoCartClass: '.sc-add-to-cart',
    cartProductListClass: '.cart-products-list',
    totalCartCountClass: '.total-cart-count',
    totalCartCostClass: '.total-cart-cost',
    showcartID : '#show-cart',
    itemCountClass : '.item-count'
  });
});
});