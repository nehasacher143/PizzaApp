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
     jQuery('#resultData').append('<tr class="sc-product-item"><td data-name="product_name">'+value.pizza+'</td><td>'+value.crust+'</td><td data-name="product_desc">'+value.toppings+'</td><td> '+value.price+'</td><td>'+'<input name="product_price" value="'+value.price+'" type="hidden" /><input name="product_id" value="'+(key+1)+'" type="hidden" /><button class="btn btn-primary sc-add-to-cart">Add to Cart</button>'+'</td></tr>');
  });

});
jQuery(document).ready(function(){
jQuery('#smartcart').smartCart();
});
});
