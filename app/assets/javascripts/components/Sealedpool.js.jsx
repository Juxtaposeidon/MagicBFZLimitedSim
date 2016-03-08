var Sealedpool = React.createClass({
  getInitialState: function(){
    return{
      cards:this.props.cards,
      cardpicks: [],
      highlightedcard: this.props.highlightedcard,
    }
  },

  pickCard: function(card){
    var getcard = this.state.cards.findIndex(function(item){
      return item.id == card.id
    })
    var updatedpool = this.state.cards
    updatedpool.splice(getcard, 1)
    this.setState({
      cardpicks: this.state.cardpicks.concat(card),
      cards: updatedpool
    })
  },

  removePick: function(card){
    var getcard = this.state.cardpicks.findIndex(function(item){
      return item.id == card.id
    })
    var updatedpicks = this.state.cardpicks
    updatedpicks.splice(getcard, 1)
    updatedpool = this.state.cards
    updatedpool.splice(card.index, 0, card)
    this.setState({
      cards: updatedpool,
      cardpicks: updatedpicks,
      highlightedcard: undefined
    })
  },

  highlightCard: function(card){
    this.setState({highlightedcard: "/assets/" + card})
  },

  hideCard: function(thing){
    this.setState({highlightedcard: undefined})
  },

  render: function(){
    var cardlist = this.state.cards.map(function(item){
      var index = this.state.cards.indexOf(item)
      return <Card
                index={index}
                key={Math.random()}
                id={item.id}
                name={item.name}
                color={item.color}
                color2={item.color2}
                onClick={this.pickCard}
             />
    }, this)
    var pickedcards = this.state.cardpicks.map(function(item){
      return(
            <li>
              <CardPick
                index={item.index}
                id={item.id}
                name={item.name}
                colors={item.color + " card " + item.color2}
                onMouseEnter={this.highlightCard}
                onMouseLeave={this.hideCard}
                key={Math.random()}
                onClick={this.removePick}
              />
            </li>
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
            {cardlist}
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
