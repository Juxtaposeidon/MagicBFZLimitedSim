var SealedpoolContainer = React.createClass({
  getInitialState: function () {
    return {
      cards: this.props.cards,
      cardpicks: []
    }
  },

  pickCard: function (card) {
    if (this.state.cardpicks.length < 35) {
      var getcard = this.state.cards.findIndex(function (item) {
        return item.id == card.id
      })
      var updatedpool = this.state.cards
      updatedpool.splice(getcard, 1)
      this.setState({
        cardpicks: this.state.cardpicks.concat(card),
        cards: updatedpool
      })
    }
    else {
      alert("There is a 35 card limit to your deck.")
    }
  },

  removePick: function (card) {
    var getcard = this.state.cardpicks.findIndex(function (item) {
      return item.id == card.id
    })
    var updatedpicks = this.state.cardpicks
    updatedpicks.splice(getcard, 1)
    updatedpool = this.state.cards
    updatedpool.splice(card.index, 0, card)
    this.setState({
      cards: updatedpool,
      cardpicks: updatedpicks
    })
  },

  render: function () {
    return (
      <div>
        <Sealedpool
          picking= {this.pickCard}
          removing= {this.removePick}
          cards= {this.state.cards}
          cardpicks= {this.state.cardpicks}
        />
      </div>
    )
  }
})

var Sealedpool = React.createClass({
  getInitialState: function () {
    return {
      highlightedcard: undefined
    }
  },

  highlightCard: function (card) {
    this.setState({highlightedcard: "/assets/" + card})
  },

  hideCard: function () {
    this.setState({highlightedcard: undefined})
  },

  removeCard: function (item) {
    this.props.removing(item)
    this.hideCard()
  },

  render: function () {
    var cardlist = this.props.cards.map(function (item) {
      var index = this.props.cards.indexOf(item)
      return (
              <Card
                index={index}
                key={Math.random()}
                id={item.id}
                name={item.name}
                color={item.color}
                color2={item.color2}
                onClick={this.props.picking}
                image={"/assets/" + item.id}
             />
      )
    }, this)
    var pickedcards = this.props.cardpicks.map(function (item) {
      return (
            <li>
              <CardPick
                index={item.index}
                id={item.id}
                name={item.name}
                colors={item.color + " card " + item.color2}
                onMouseEnter={this.highlightCard}
                onMouseLeave={this.hideCard}
                key={Math.random()}
                onClick={this.removeCard}
                minus="(-)"
              />
            </li>
      )
    }, this)
    if (this.state.highlightedcard) {
      var highlighted= this.state.highlightedcard
    }
    return (
      <div>
        <div className = "topmargin">
          <div className = "sealedcards">
            <div id = "highlightedcard"><img src={highlighted}/></div>
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
