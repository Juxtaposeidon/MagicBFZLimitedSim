var counter = 0
var Draftpool = React.createClass({
  getInitialState: function(){
    return{
      cards: this.props.cards,
      pool1: [],
      pool2: [],
      pool3: [],
      highlightedcard: this.props.highlightedcard,
      hover: false
    }
  },

  getCards: function(pick){
    var component = this
    var nospam = 0
    if(nospam==0){
      nospam = 1
      $.ajax({
        url: '/drafts/update',
        method: 'PUT',
        data: {'cardid': pick}
      })
      .done(function(){
        $.ajax({
          url: '/drafts',
          method: "GET"
        })
        .done(function(result){
          nospam = 0
          component.setState({
            cards: result['pack']
          })
          if(counter < 14){
            component.setState({pool1: component.state.pool1.concat(result['pick'])})
          }
          else if(counter < 28){
            component.setState({pool2: component.state.pool2.concat(result['pick'])})
          }
          else{
            component.setState({pool3: component.state.pool3.concat(result['pick'])})
          }
          counter++;
          if(counter == 42){
            $('.cardpacksection').html("<H3>The draft is now over</H3>")
          }
        })
      })
    }
  },

  highlightCard: function(card){
    this.setState({highlightedcard: "/assets/" + card, hover: true})
  },

  hideCard: function(thing){
    this.setState({hover: false})
  },

  render: function(){
    var cards = this.state.cards.map(function(item){
      return <Card
                onClick={this.getCards}
                key={item.id}
                id={item.id}
              />
    }, this)
    var pool1 = this.state.pool1.map(function(item){
      return <SelectedCard
                id={item.id}
                name={item.name}
                color1={item.color}
                color2={item.color2}
                onMouseEnter={this.highlightCard}
                onMouseLeave={this.hideCard}
              />
    }, this)
    var pool2 = this.state.pool2.map(function(item){
      return <SelectedCard
                id={item.id}
                name={item.name}
                color1={item.color}
                color2={item.color2}
                onMouseEnter={this.highlightCard}
                onMouseLeave={this.hideCard}
              />
    }, this)
    var pool3 = this.state.pool3.map(function(item){
      return <SelectedCard
              id={item.id}
              name={item.name}
              color1={item.color}
              color2={item.color2}
              onMouseEnter={this.highlightCard}
              onMouseLeave={this.hideCard}
            />
    }, this)
    if(this.state.hover){
      var highlighted= this.state.highlightedcard
    }
    return (
      <div>
        <div className = 'cards'>
        <div id = 'highlightedcard'><img src={highlighted}/></div>
          <h3>Battle for Zendikar Draft</h3>
          <br />
          <div className = 'cardpacksection'>
            {cards}
          </div>
        </div>
        <div id='pool'>
          <table id ='cardpooltable'>
          <tbody>
            <tr>
              <td className = 'pooltd'>
                <h3 id='pooltitle'>Card pool</h3>
                <h4>Pack 1</h4>
                {pool1}
              </td>
            </tr>
            <tr>
              <td className = 'pooltd'>
                <h4>Pack 2</h4>
                {pool2}
              </td>
            </tr>
            <tr>
              <td className = 'pooltd'>
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
