var Card = React.createClass({
  onClickSubmit: function(){
    if(this.props.onClick!= undefined){
      this.props.onClick(this.props)
    }
  },

  render: function(){
    return(
      <img
        src={this.props.image}
        className="cardimage"
        onClick={this.onClickSubmit}
        data-name={this.props.name}
        data-color={this.props.color1}
        data-color2={this.props.color2}
        data-cardid={this.props.id}
        id={this.props.index}
      />
    )
  }
})
