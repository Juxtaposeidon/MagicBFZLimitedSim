$(document).ready(function(){
  $(".sealedcards").on("click", "a", function(event){
    event.preventDefault();
    var card = {
      id: $(this).attr("id")
    };
    $.ajax({
      data: card,
      method: "GET",
      url: '/sample/addcard'
    })
    .done(function(result){
      $('.carddisplay').html(result['partial'])
    })
  })
})