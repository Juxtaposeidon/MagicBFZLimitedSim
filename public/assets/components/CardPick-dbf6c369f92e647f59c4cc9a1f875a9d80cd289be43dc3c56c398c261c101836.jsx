var CardPick = React.createClass({
  getInitialState: function(){
    return{
      name: this.props.name,
      id: this.props.id,
      index: this.props.index,
      onMouseEnter: this.props.onMouseEnter,
      onMouseLeave: this.props.onMouseLeave,
      onClick: this.props.onClick,
      colors: this.props.color + " card " + this.props.color2,
    }
  },

  _onEnter: function(){
    this.state.onMouseEnter(this.state.id)
  },

  _onClick: function(){
    if(this.props.onClick!= undefined){
      this.props.onClick(this.props)
    }
  },

  render: function(){
    return(
      <span className={this.state.colors} id={this.state.id} onClick={this._onClick} onMouseEnter={this._onEnter} onMouseLeave={this.state.onMouseLeave}>[{this.state.name}]</span>
    )
  }
})