//Nicholas Baldwin
//30 September 2019

clickHandler = function( event ) {
  /*do stuff*/
  //creates dialog when the "order" button has been clicked
         var thankyou = $("<p></p>").text("Thank you! Your order has been placed.");
         var detailsHead = $("<p></p>").text("Order details:");
         //Reads the textArea input
         var specialText = $.trim($("#noteArea").val());
         //Records which radio button is checked
         var checkedButton = $("input[name='flavor']:checked").val();
         //Records the number selected in the dropdown box
         var numCakes = $( "#numCheesecakes option:selected" ).text();
         //displays values from checkedButton and numCakes
         var orderMessage = $("<p></p>").text("You ordered " + numCakes + " " +checkedButton + " cheesecakes.");

         // Show alert if the textArea contains keyword "vegan"
         if(specialText.indexOf("vegan") != -1){
         alert("Warning! Cheesecake contains dairy!");
         }

         //removes the form section and button
         $("#orderTable").remove();
         $("#noteHead").remove();
         $("#noteArea").remove();
         $("#orderButton").remove();

         //displays order details specified in the vars above
         $("body").append(thankyou, detailsHead, orderMessage);
         });
         });
}
$(function () {
  $("button").click(clickHandler);
});
