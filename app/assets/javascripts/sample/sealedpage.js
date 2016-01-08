$(document).ready(function(){
  $(".sealedcards").on("click", "a", function(event){
    event.preventDefault();
    var card = $(this).data('name');
    console.log(card)
    var cardclass = $(this).attr('class')
    $(this).toggle();
    $('#sealedpool ol').append("<li><span class='"+ cardclass + " poolcard'>" + card + "</span></li>")
    // var card = {
    //   id: $(this).attr("id")
    // };
    // $.ajax({
    //   data: card,
    //   method: "GET",
    //   url: '/sample/addcard'
    // })
    // .done(function(result){
    //   $('.carddisplay').html(result['partial']);
    //   $('#sealedpool ol').append(result['cardname'])
    // })
  })

  $('#sealedpool').on('click', '.poolcard', function(){
    var card = $(this).text();
    console.log(card)
    $(this).closest("li").remove()
    $("#" + card).show();
  })
})