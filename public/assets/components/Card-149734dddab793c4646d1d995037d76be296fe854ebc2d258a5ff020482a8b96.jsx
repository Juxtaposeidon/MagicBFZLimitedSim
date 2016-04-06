var Card = React.createClass({
  onClickSubmit: function () {
    if (this.props.onClick!= undefined) {
      this.props.onClick(this.props)
    }
  },

  render: function () {
    return (
      <img
        src={this.props.image}
        className="cardimage"
        onClick={this.onClickSubmit}
        id={this.props.index}
      />
    )
  }
})
