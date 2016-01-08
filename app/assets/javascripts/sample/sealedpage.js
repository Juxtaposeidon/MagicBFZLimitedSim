$(document).ready(function(){
  $(".sealedcards").on("click", "a", function(event){
    event.preventDefault();
    var card = $(this).data('name');
    var cardid = $(this).attr('id');
    var cardclass = $(this).attr('class')
    $(this).toggle();
    $('#sealedpool ol').append("<li><span class='"+ cardclass + " poolcard' id='" + cardid + "'>" + card + "</span></li>")
  })

  $('#sealedpool').on('click', '.poolcard', function(){
    var card = $(this).text();
    var cardid = $(this).attr('id');
    console.log(card)
    $(this).closest("li").remove()
    $("#" + cardid).show();
  })
})