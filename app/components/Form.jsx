var React = require("react");

var Form = React.createClass({
  onFormSubmit(e) {
    e.preventDefault();
    var newItem = this.refs.newItem.value;

    if (newItem.length > 0) {
      this.props.onSubmit(newItem);
      this.refs.newItem.value = "";
    }
  },

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input ref="newItem" type="text" placeholder="Add an item" />
          <button type="submit" className="button hollow expanded">Add Item</button>
        </form>
      </div>
    );
  }
});

module.exports = Form;
