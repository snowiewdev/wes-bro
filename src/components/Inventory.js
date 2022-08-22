import React, { Component } from "react";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";

export default class Inventory extends Component {
  render() {
    return (
      <header className="inventory">
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map((key, index) => (
          <EditFishForm
            fish={this.props.fishes[key]}
            key={key}
            index={index}
            updateFish={this.props.updateFish}
          />
        ))}
        {/* {Object.keys(this.props.fishes).map((fish) => (
          <EditFishForm />
        ))} */}
        <AddFishForm addFish={this.props.addFish} />

        <button onClick={this.props.loadSampleFishes}>
          {" "}
          Load Sample Fishes{" "}
        </button>
      </header>
    );
  }
}
