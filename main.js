$(document).ready(function(){
  //Show me how to calculate the average price of all items.
  var item_avg_price = items.reduce((total, current) => total + current.price/items.length, 0);

  $("#ans1").html("The average price is $" + item_avg_price);

  //Show me how to get an array of items that cost between $14.00 and $18.00 USD
  var item_btwn14_18 = items.filter((item) => 14 < item.price && item.price < 18).map((item) => `${item.title}`);

  for (var i = 0; i < item_btwn14_18.length; i++) {
    $("#ans2").append(`<p> ${item_btwn14_18[i]} </p>`);
  }



  //  Which item has a "GBP" currency code? Display it's name and price.
  var itemGBP = items.filter((item) => item.currency_code === "GBP").map((item) => `${item.title} costs £${item.price}`);

  for (var i = 0; i < itemGBP.length; i++) {
    $("#ans3").append(`<p> ${itemGBP[i]} </p>`);
  }

  //Display a list of all items who are made of wood.
  var wood_items = items.filter((item) => item.materials.includes("wood")).map((item) => `${item.title}`);
  for (var i = 0; i < wood_items.length; i++) {
    $("#ans4").append(`<p> ${wood_items[i]} is made of wood. </p>`);
  }

  //Which items are made of eight or more materials? Display the name, number of items and the items it is made of.
  var atleast_8materials = items.filter((item) => item.materials.length >= 8).map((item) => `${item.title} has ${item.materials.length} materials:`);
  console.log(atleast_8materials);

  for (var i = 0; i < atleast_8materials.length; i++) {
    $("#ans5").append(`<p> ${atleast_8materials[i]}</p>`);
  }

  //How many items were made by their sellers?
  var madeby_sellers_length = items.filter((item) => item.who_made === "i_did").length;

  $("#ans6").html(madeby_sellers_length + " items were made by their sellers");

/*  data.forEach(function(shirt) {
    var shirt = $(`<a href="#Shirt${shirt.id}">
      <div class="shirt" id=${shirt.id}>
      <img src=${shirt.scr} alt=${shirt.name} />
      <p>
        ${shirt.name}
        <span>$${shirt.price} <i class="fa fa-cart-plus" aria-hidden="true"></i></span>
      </p>
    </div>
    </a>`);
    $(".content").append(shirt);
  }) */
//  gameData.filter( (game) => game.away_team_score > 2)
})
