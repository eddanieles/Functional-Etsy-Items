$(document).ready(function(){
  //Show me how to calculate the average price of all items.
  var item_avg_price = items.reduce((total, current) => total + current.price/items.length, 0);

  $("#ans1"). append("The average price is $" + item_avg_price);

  //Show me how to get an array of items that cost between $14.00 and $18.00 USD
  var item_btwn14_18 = items.filter((item) => 14 < item.price && item.price < 18).map((item) => `${item.title}`);

  item_btwn14_18.forEach(function(thing){
    $("#ans2").append(`<p> ${thing} </p>`);
  })


  //  Which item has a "GBP" currency code? Display it's name and price.
  var itemGBP = items.filter((item) => item.currency_code === "GBP").map((item) => `${item.title} costs £${item.price}`);

  itemGBP.forEach(function(thing){
    $("#ans3").append(`<p> ${thing} </p>`);
  })


  //Display a list of all items who are made of wood.
  var wood_items = items.filter((item) => item.materials.includes("wood")).map((item) => `${item.title}`);

  wood_items.forEach(function(thing){
    $("#ans4").append(`<p>${thing} is made of wood.</p>`)
  })

  //Which items are made of eight or more materials? Display the name, number of items and the items it is made of.
  var atleast_8materials = items.filter((item) => item.materials.length >= 8).map((item) => `${item.title} has ${item.materials.length} materials: <br> ${item.materials.join('<br>')}`);

  atleast_8materials.forEach(function(thing){
    $("#ans5").append(`<p>${thing}</p>`);
  })

  //How many items were made by their sellers?
  var madeby_sellers_length = items.filter((item) => item.who_made === "i_did").length;

  $("#ans6").append(madeby_sellers_length + " items were made by their sellers");

})
