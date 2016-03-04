var Sealedpool = React.createClass({
  getInitialState: function(){
    return{
      cards:this.props.cards.map(function(item){
        return <Card
                  key={Math.random()}
                  tag={Math.random()}
                  id={item.id}
                  name={item.name}
                  color={item.color}
                  color2={item.color2}
                  onClick={this.addPool}
               />
      }, this),
      cardpicks: [],
      highlightedcard: this.props.highlightedcard,
    }
  },
  addPool: function(card){
    var minuscard = this.state.cards.filter(function(item){
      return item.props.tag !== card.tag
    })
    this.setState({
      cardpicks: this.state.cardpicks.concat(card),
      cards: minuscard
    })
  },

  highlightCard: function(card){
    this.setState({highlightedcard: "/assets/" + card})
  },

  hideCard: function(thing){
    this.setState({highlightedcard: undefined})
  },

  render: function(){
    // var cardlist = this.state.cards.map(function(item){
    //   return <Card
    //             key={Math.random()}
    //             id={item.id}
    //             name={item.name}
    //             color={item.color}
    //             color2={item.color2}
    //             onClick={this.addPool}
    //          />
    // }, this)
    var pickedcards = this.state.cardpicks.map(function(item){
      return(
            <li><CardPick
              id={item.id}
              name={item.name}
              color={item.color}
              color2={item.color2}
              onMouseEnter={this.highlightCard}
              onMouseLeave={this.hideCard}
              key={Math.random()}
            /></li>
      )
    }, this)
    if(this.state.highlightedcard){
      var highlighted= this.state.highlightedcard
    }
    return(
    <div>
      <div className = "topmargin">
        <div className = "sealedcards">
          <div id = 'highlightedcard'><img src={highlighted}/></div>
          <h3>Battle for Zendikar Sealed Pool</h3>
          <br/>
          <div className= "carddisplay">
            {this.state.cards}
          </div>
        </div>
      </div>
      <div id="pool">
        <table>
        <tbody>
          <tr>
            <td>
              <div id="sealedpool">
              <ol>
              {pickedcards}
              </ol>
              </div>
            </td>
          </tr>
        </tbody>
        </table>
      </div>
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