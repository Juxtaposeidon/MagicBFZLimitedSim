var counter = 0
var DraftpoolContainer = React.createClass({
  getInitialState: function () {
    return {
      cards: this.props.cards,
      pool: []
    }
  },

  getCards: function (pick) {
    var component = this
    var nospam = 0
    if (nospam==0) {
      nospam = 1
      $.ajax({
        url: '/drafts/update',
        method: 'PUT',
        data: {'cardid': pick.id}
      })
      .done(function () {
        $.ajax({
          url: '/drafts',
          method: "GET"
        })
        .done(function (result) {
          nospam = 0
          component.setState({
            cards: result['pack'],
            pool: component.state.pool.concat(result['pick'])
          })
          counter++;
          if (counter == 42) {
            $(".cardpacksection").html("<H3>The draft is now over</H3>")
          }
        })
      })
    }
  },

  render: function () {
    return (
      <Draftpool
        cards={this.state.cards}
        pool={this.state.pool}
        picking={this.getCards}
      />
    )
  }
})

var Draftpool = React.createClass({
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

  render: function () {
    var cards = this.props.cards.map(function (item) {
      return (
        <Card
          onClick={this.props.picking}
          key={item.id}
          id={item.id}
          image={"/assets/" + item.id}
        />
      )
    }, this)
    var wholepool = this.props.pool.map(function (item) {
      return (
        <CardPick
          id={item.id}
          name={item.name}
          colors={item.color + " card " + item.color2}
          onMouseEnter={this.highlightCard}
          onMouseLeave={this.hideCard}
        />
      )
    }, this)
    var pool1 = wholepool.slice(0,14)
    var pool2 = wholepool.slice(14,28)
    var pool3 = wholepool.slice(28,42)

    if (this.state.highlightedcard) {
      var highlighted= this.state.highlightedcard
    }
    return (
      <div>
        <div className = "cards">
        <div id = "highlightedcard"><img src={highlighted}/></div>
          <h3>Battle for Zendikar Draft</h3>
          <br />
          <div className = "cardpacksection">
            {cards}
          </div>
        </div>
        <div id="pool">
          <table id ="cardpooltable">
          <tbody>
            <tr>
              <td className = "pooltd">
                <h3 id='pooltitle'>Card pool</h3>
                <h4>Pack 1</h4>
                {pool1}
              </td>
            </tr>
            <tr>
              <td className = "pooltd">
                <h4>Pack 2</h4>
                {pool2}
              </td>
            </tr>
            <tr>
              <td className = "pooltd">
                <div>
                  <h4>Pack 3</h4>
                  {pool3}
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
