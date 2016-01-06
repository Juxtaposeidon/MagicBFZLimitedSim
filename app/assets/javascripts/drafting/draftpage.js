$(document).ready(function(){
  var counter = 0
  $(".cards").on("click", "a", function(event){
    event.preventDefault();
    var card = {
      id: $(this).attr("id")
    };
    $.ajax({
      url: '/draft/addcard',
      method: "GET",
      data: card
    })
    .done(function(result){
      $('.selector').html(result['partial'])
      if(counter < 14){
        $("#draftedcards").append(result['cardname'] + '  ')
      }
      else if(counter < 28){
        $("#draftedcards2").append(result['cardname'] + '  ')
      }
      else{
        $("#draftedcards3").append(result['cardname'] + '  ')
      }
      counter++;
      if(counter == 42){
        $('div.selector').html("<H3>The draft is now over</H3>")
      }
    })
  })
  $("#pool").on("mouseover", ".card", function(){
    $("#cardhighlight").toggle();
    $("#cardhighlight").html( "<img src=/assets/" + $(this).attr("id") + ".jpg>")
  })

  $("#pool").on("mouseout", ".card", function(){
    $("#cardhighlight").toggle();
    $("#cardhighlight").html()
  })

})
