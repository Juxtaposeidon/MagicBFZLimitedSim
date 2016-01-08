$(document).ready(function(){
  $(".sealedcards").on("click", "a", function(event){
    event.preventDefault();
    var card = $(this).data('name');
    var cardid = $(this).attr('id');
    var cardclass = $(this).attr('class')
    $(this).toggle();
    $('#sealedpool ol').append("<li>" + card + " (-)</li>")
    $('li').last().addClass(cardclass)
    $('li').last().attr('id', cardid)
  })

  $('#sealedpool').on('click', 'li', function(){
    var cardid = $(this).attr('id');
    $(this).remove()
    $("#" + cardid).show();
  })
})