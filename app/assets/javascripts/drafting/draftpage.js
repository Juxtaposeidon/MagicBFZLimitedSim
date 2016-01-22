$(document).ready(function(){
  var counter = 0
  var nospam = 0
  $(".cards").on("click", "img", function(event){
    if(nospam==0){
      nospam = 1
      $.ajax({
        url: '/drafts/update',
        method: "PUT",
        data: {cardid: $(this).attr("id")}
      })
      .done(function(){
        $.ajax({
          url: '/drafts',
          method: "GET"
        })
        .done(function(result){
          nospam = 0
          $('.cardpacksection').html(result['partial'])
          if(counter < 14){
            $("#draftedcards").append('[' + result['cardname'] + ']  ')
          }
          else if(counter < 28){
            $("#draftedcards2").append('[' + result['cardname'] + ']  ')
          }
          else{
            $("#draftedcards3").append('[' + result['cardname'] + ']  ')
          }
          counter++;
          if(counter == 42){
            $('.cardpacksection').html("<H3>The draft is now over</H3>")
          }
        })
      })
      }
    })

  $("#pool").on("mouseover", ".card", function(){
    $("#highlightedcard").toggle();
    $("#highlightedcard").html( "<img src=/assets/" + $(this).attr("id") + ".jpg>")
  })

  $("#pool").on("mouseout", ".card", function(){
    $("#highlightedcard").toggle();
    $("#highlightedcard").html()
  })

})
