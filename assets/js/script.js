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
  console.log(json);
 $('#resultData').html('');
  $.each(json.pizzas, function(key,value){
      $('#resultData').append('<tr><td>'+value.pizza+'</td><td>'+value.crust+'</td><td>'+value.toppings+'</td><td>'+value.price+'</td><td>'+'<button>Add to Cart</button>'+'</td></tr>');
  });

});
});






















