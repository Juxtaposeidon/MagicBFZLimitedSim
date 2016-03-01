var Sealedpool = React.createClass({
  getInitialProps: function(){
    return{
      cards:[]
    }
  },
  getInitialState: function(){
    return{
      cards:this.props.cards
    }
  },
  // addCard:function(index, id, name, color, color2, card){
  //   console.log(card)
  //   card.toggle();
  // },
  render: function(){
    var cardlist = this.state.cards.map(function(item){
      ind = this.state.cards.indexOf(item)
      // var handleclick=this.addCard.bind(this, ind, item.id, item.name, item.color, item.color2, item)
      return <Card key={ind} id={item.id} name={item.name} color1={item.color} color2={item.color2} index={ind}/>
    }, this)

    return(
      <div>
      {cardlist}
      </div>
    )
  }
})

      // <%@pack.each_with_index do |card, index|%>
      //   <%=image_tag("#{card.id}.jpg", :border=>0, id: index, class: [card.color, card.color2, "cardimage"], data: {name: card.name, cardid: card.id}) %>
      // <%end%>

  //       $(".sealedcards").on("click", "img", function(){
  //   var card = $(this).data('name');
  //   var cardlocation = $(this).attr('id');
  //   var cardid = $(this).data('cardid')
  //   var cardcolors = $(this).attr('class')
  //   $(this).toggle();
  //   $('#sealedpool ol').append("<li>" + card + " (-)</li>")
  //   $('li').last().addClass(cardcolors)
  //   $('li').last().attr('id', cardlocation)
  //   $('li').last().data('cardid', cardid)
  // })