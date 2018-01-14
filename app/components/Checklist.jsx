var React = require("react");
var Form = require("Form");

var Checklist = React.createClass({
  getInitialState() {
    return {
      list: {
        items: JSON.parse(localStorage.getItem("checklist")) || []
      }
    }
  },

  handleSubmit(item) {
    var { items } = this.state.list;
    var updatedList = [...items, item];

    this.setState({
      list: {
        items: updatedList
      }
    });
  },

  removeItem(e) {
    var parentListItemId = e.target.getAttribute("data-target-parent");
    var { items } = this.state.list;
    var updatedList = items.filter((item, index) => { return index !== parseInt(parentListItemId); });

    this.setState({
      list: {
        items: updatedList
      }
    });
  },

  render() {
    var { items } = this.state.list;
    var output = [];

    localStorage.setItem("checklist", JSON.stringify(items));
    console.log(JSON.parse(localStorage.getItem("checklist")));

    items.forEach((item, index) => {
      output.push(
        <li className="list-item" key={index} id={index}>
          <span>{item}</span>
          <span onClick={this.removeItem} className="remove-item" data-target-parent={index}>x</span>
        </li>
      );
    });

    return (
      <div className="row">
        <div className="column medium-6 large-4 small-centered">
          <h2 className="text-center">Checklist</h2>
          <Form onSubmit={this.handleSubmit} />
          <ul className="checklist">
            {output}
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Checklist;
