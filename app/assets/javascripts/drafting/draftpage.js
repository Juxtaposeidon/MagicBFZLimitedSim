$(document).ready(function(){

  $("#pool").on("mouseover", ".card", function(){
    $("#highlightedcard").toggle();
    $("#highlightedcard").html( "<img src=/assets/" + $(this).attr("id") + ".jpg>")
  })

  $("#pool").on("mouseout", ".card", function(){
    $("#highlightedcard").toggle();
    $("#highlightedcard").html()
  })

})
