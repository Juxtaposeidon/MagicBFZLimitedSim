var Card = React.createClass({
  getInitialProps: function(){
      return{
        id: undefined,
        image: undefined,
        onClick: undefined
      }
    },

  getInitialState: function(){
    return{
      id: this.props.id,
      image: "/assets/" + this.props.id,
      onClick: this.props.onClick
    }
  },
  render: function(){
    return(
        <img src={this.state.image} className="cardimage" onClick={this.props.onClick}></img>
    )
  }
})