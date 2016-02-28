var Draftpack = React.createClass({
  getInitialProps: function(){
    return{
      cards: []
    }
  },

  getInitialState: function(){
    return{
      cards: this.props.cards
    }
  },

  render: function(){
    var cardpack = this.state.cards.map(function(item){
      return <Card
      id={item.id}
      key={item.id}/>
    })
    return(
      <div>
        {cardpack}
      </div>
    )
  }
})

var Card = React.createClass({
  getInitialProps: function(){
      return{
        id: undefined,
        image: undefined
      }
    },

  getInitialState: function(){
    return{
      id: this.props.id,
      image: "/assets/" + this.props.id
    }
  },

  render: function(){
    return(
        <img src={this.state.image} className="cardimage"></img>
    )
  }
})