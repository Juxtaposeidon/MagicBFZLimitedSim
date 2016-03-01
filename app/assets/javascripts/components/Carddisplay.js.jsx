var Carddisplay = React.createClass({
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
  render: function(){
    var cardlist = this.state.cards.map(function(item){
      console.log(item)
      return <Card key={item.id} id={item.id}/>
    })
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