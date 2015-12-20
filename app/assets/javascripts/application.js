// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$(document).ready(function(){
  var counter = 0
  $(".cards").on("click", "a", function(event){
    event.preventDefault();
    var card = {id: $(this).attr("id")};
    if(counter < 14){
      $("#draftedcards").after( $(this).attr("id") + '  ')
    }
    else if(counter < 28){
      $("#draftedcards2").after( $(this).attr("id") + '  ')
    }
    else{
      $("#draftedcards3").after( $(this).attr("id") + '  ')
    }
    counter++;

    $.ajax({
      url: '/draft/addcard',
      method: "POST",
      data: card
    })
    .done(function(event){
      $('.selector').html(event['partial'])
      console.log(event['pack'])
      if(counter == 42){
        $('div.selector').html("<H3>The draft is now over</H3>")
      }
    })
  })
})
