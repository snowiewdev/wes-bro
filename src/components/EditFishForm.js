import React, { Component } from "react";

export default class EditFishForm extends Component {
  handleChange = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    const updatedFish = {
      ...this.props.fish,
      [e.target.name]: e.target.value,
    };
    this.props.updateFish(this.props.index, updatedFish);
    // console.log(updatedFish);
  };

  render() {
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.props.fish.name}
        />
        <input
          type="text"
          name="price"
          onChange={this.handleChange}
          value={this.props.fish.price}
        />
        <select type="text" name="status" onChange={this.handleChange}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          type="text"
          name="desc"
          onChange={this.handleChange}
          value={this.props.fish.desc}
        >
          {" "}
        </textarea>
        <input
          type="text"
          name="image"
          onChange={this.handleChange}
          value={this.props.fish.image}
        />
      </div>
    );
  }
}
