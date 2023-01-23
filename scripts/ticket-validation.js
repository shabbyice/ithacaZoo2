$("#ticketForm").submit(function() {
  let formValid = true;

  if( $("#userName").prop("validity").valid ) {
    $("#userNameFeedback").addClass("hidden");
  } else  $("#userNameFeedback").removeClass("hidden"); {
  }

  if($("#emailFeedback").submit(function()){
    $("#emailFeedback").addClass("hidden");
  else($("#emailFeedback").removeClass("hidden");)
  });

  if ($("#numTickets").submit(function()){
    $("#numTickets").addClass("hidden");
  else {($("#numTickets").removeClass("hidden");)
  }
});
