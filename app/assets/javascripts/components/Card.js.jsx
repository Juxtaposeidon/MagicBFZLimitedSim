var Card = React.createClass({
  getInitialState: function(){
    return{
      id: this.props.id,
      image: "/assets/" + this.props.id,
      onClick: this.props.onClick,
      name: this.props.name,
      index: this.props.index,
      color: this.props.color,
      color2: this.props.color2
    }
  },

  _onClick: function(){
    if(this.props.onClick!= undefined){
      this.props.onClick(this.props)
    }
  },

  render: function(){
    return(
        <img
          src={this.state.image}
          className="cardimage"
          onClick={this._onClick}
          data-name={this.state.name}
          data-color={this.state.color1}
          data-color2={this.state.color2}
          data-cardid={this.state.id}
          id={this.state.index}
        />
    )
  }
})
