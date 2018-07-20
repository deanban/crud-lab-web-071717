import React, { Component } from "react";

class Restaurant extends Component {
  handleDelete(e) {
    this.props.store.dispatch({
      type: "DELETE_RESTAURANT",
      id: this.props.restaurant.id
    });
  }

  render() {
    console.log("restaurant: ", this.props);

    return (
      <div>
        <li>
          {this.props.restaurant.text}
          <button onClick={e => this.handleDelete(e)}>X</button>
        </li>
      </div>
    );
  }
}

export default Restaurant;
