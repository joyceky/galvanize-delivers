"use strict";

$(document).ready(function(){

  $('.parallax').parallax();
  getFoodNamePrice();
  submitListen();
});

var total = 0;
/*******************EVENT LISTENERS**********************/
function getFoodNamePrice() {
  var card = $(".card");

  card.on("click", function() {
    var namePrice = this.innerText.split("\n").filter(String);
    namePrice.pop();
    updateTable(namePrice);
  });
}

// event listener for submit button
function submitListen() {
  $("#submitBtn").on("click", function() {
    if (total === 0) {
      var $toastContentF = $('<span>Please submit an order!</span>');
      Materialize.toast($toastContentF, 5000);
    }
    else if (total > 0) {
      var $toastContentP = $('<span>Your order has been submitted!</span>');
      Materialize.toast($toastContentP, 5000);
    }
   });
}
/*******************EVENT LISTENERS**********************/


/*******************UPDATING TABLE**********************/
var priceArray = [];

//add row to table for each
function updateTable(namePrice) {
  var rowToAdd = `<tr><td>${namePrice[0]}</td><td>${namePrice[1]}</td><tr>`;
  priceArray.push((namePrice[1].replace(/\$/g, '')));
  $('.table-body').append(rowToAdd);
  updateTotals(priceArray);
}

function updateTotals() {
  var subtotal = priceArray.reduce(function(a,b) {
    return parseFloat(a) + parseFloat(b);
  });
  subtotal = parseFloat(subtotal).toFixed(2);
  var tax = parseFloat(subtotal * 0.12).toFixed(2);
  total = parseFloat(subtotal) + parseFloat(tax);
  total = total.toFixed(2);
  $('#subtotal').html(`<td> Subtotal: </td><td>$${subtotal}</td>`);
  $('#tax').html(`<td> Tax: </td><td>$${tax}</td>`);
  $('#total').html(`<td>Total: </td><td>$${total}</td>`);
}

/*******************UPDATING TABLE**********************/

/*******************SUBMIT FORM**********************/


/*******************SUBMIT FORM**********************/
