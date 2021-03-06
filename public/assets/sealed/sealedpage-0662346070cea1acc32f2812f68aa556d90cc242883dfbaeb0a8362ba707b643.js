$(document).ready(function(){
  $(".sealedcards").on("click", "img", function(){
    var card = $(this).data('name');
    var placeid = $(this).attr('id');
    var cardid = $(this).data('cardid')
    var cardclass = $(this).attr('class')
    $(this).toggle();
    $('#sealedpool ol').append("<li>" + card + " (-)</li>")
    $('li').last().addClass(cardclass)
    $('li').last().attr('id', placeid)
    $('li').last().data('cardid', cardid)
  })

  $('#sealedpool').on('click', 'li', function(){
    var cardid = $(this).attr('id');
    $(this).remove()
    $("#" + cardid).show();
    $("#cardhighlight").hide();
  })

  $("#sealedpool").on("mouseover", "li", function(){
    $("#cardhighlight").show();
    $("#cardhighlight").html( "<img src=/assets/" + $(this).data("cardid") + ".jpg>")
  })

  $("#sealedpool").on("mouseout", "li", function(){
    $("#cardhighlight").hide();
    $("#cardhighlight").html()
  })
})
