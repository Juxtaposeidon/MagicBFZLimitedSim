$(document).ready(function(){
  $(".sealedcards").on("click", "img", function(){
    var card = $(this).data('name');
    var cardlocation = $(this).attr('id');
    var cardid = $(this).data('cardid')
    var cardcolors = $(this).data('color') + " " + $(this).data('color2')
    $(this).toggle();
    $('#sealedpool ol').append("<li>" + card + " (-)</li>")
    $('li').last().addClass(cardcolors)
    $('li').last().attr('id', cardlocation)
    $('li').last().data('cardid', cardid)
  })

  $('#sealedpool').on('click', 'li', function(){
    var cardlocation = $(this).attr('id');
    $(this).remove()
    $("#" + cardlocation).show();
    $("#highlightedcard").hide();
  })

  $("#sealedpool").on("mouseover", "li", function(){
    $("#highlightedcard").show();
    $("#highlightedcard").html( "<img src=/assets/" + $(this).data("cardid") + ".jpg>")
  })

  $("#sealedpool").on("mouseout", "li", function(){
    $("#highlightedcard").hide();
    $("#highlightedcard").html()
  })
})