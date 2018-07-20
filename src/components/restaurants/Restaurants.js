import React, { Component } from "react";
import Restaurant from "./Restaurant";

class Restaurants extends Component {
  render() {
    const restaurants = this.props.store
      .getState()
      .restaurants.map((res, idx) => {
        return (
          <Restaurant key={idx} restaurant={res} store={this.props.store} />
        );
      });
    return <ul>{restaurants}</ul>;
  }
}

export default Restaurants;
