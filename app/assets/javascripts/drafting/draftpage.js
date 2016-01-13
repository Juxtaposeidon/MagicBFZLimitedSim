$(document).ready(function(){
  var counter = 0
  $(".cards").on("click", "img", function(event){
    var card = {
      cardid: $(this).attr("id")
    };
    $.ajax({
      url: '/draft/update',
      method: "PUT",
      data: card
    })
    .done(function(){
      $.ajax({
        url: '/draft',
        method: "GET"
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
