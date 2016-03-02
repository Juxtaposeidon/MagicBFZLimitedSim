var SelectedCard = React.createClass({
  getInitialState: function(){
    return{
      name: this.props.name,
      id: this.props.id,
      onMouseOver: this.props.onMouseOver,
      colors: this.props.color1 + " card " + this.props.color2,
    }
  },

  _onEnter: function(){
    this.state.onMouseOver(this.state.id)
  },

  render: function(){
    return(
      <span className={this.state.colors} id={this.state.id} onMouseOver={this._onEnter}>[{this.state.name}]</span>
    )
  }
})