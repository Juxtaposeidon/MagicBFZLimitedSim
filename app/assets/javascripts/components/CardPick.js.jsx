var CardPick = React.createClass({
  onEnterName: function () {
    this.props.onMouseEnter(this.props.id)
  },

  onClickSubmit: function () {
    if (this.props.onClick!= undefined) {
      this.props.onClick(this.props)
    }
  },

  render: function () {
    return (
      <span
        className={this.props.colors}
        id={this.props.id}
        onClick={this.onClickSubmit}
        onMouseEnter={this.onEnterName}
        onMouseLeave={this.props.onMouseLeave}
      >
        [{this.props.name}]{this.props.minus}
      </span>
    )
  }
})