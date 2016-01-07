$(document).ready(function(){
  $(".sealedcards").on("click", "a", function(event){
    event.preventDefault();
    var card = $(this).attr('id');
    var cardclass = $(this).attr('class')
    $(this).toggle();
    $('#sealedpool ol').append("<li><span class='"+ cardclass + "'>" + card + "</span></li>")
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
})