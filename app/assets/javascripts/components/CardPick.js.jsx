var CardPick = React.createClass({
  getInitialState: function(){
    return{
      name: this.props.name,
      id: this.props.id,
      onMouseEnter: this.props.onMouseEnter,
      onMouseLeave: this.props.onMouseLeave,
      colors: this.props.color + " card " + this.props.color2,
    }
  },

  _onEnter: function(){
    this.state.onMouseEnter(this.state.id)
  },

  render: function(){
    return(
      <span className={this.state.colors} id={this.state.id} onMouseEnter={this._onEnter} onMouseLeave={this.state.onMouseLeave}>[{this.state.name}]</span>
    )
  }
})