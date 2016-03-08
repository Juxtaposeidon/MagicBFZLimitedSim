var CardPick = React.createClass({

  _onEnter: function(){
    this.props.onMouseEnter(this.props.id)
  },

  _onClick: function(){
    if(this.props.onClick!= undefined){
      this.props.onClick(this.props)
    }
  },

  render: function(){
    return(
      <span className={this.props.colors} id={this.props.id} onClick={this._onClick} onMouseEnter={this._onEnter} onMouseLeave={this.props.onMouseLeave}>[{this.props.name}]</span>
    )
  }
})