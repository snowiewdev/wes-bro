import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  // old way
  //   constructor() {
  //     super();
  //     this.goToStore = this.goToStore.bind(this);
  //   }

  // use arrow fumction to bind
  goToStore = (event) => {
    event.preventDefault();
    const storeName = this.myInput.current.value;
    // console.log(this.myInput.current.value);
    this.props.history.push(`/store/${storeName}`);
  };

  //   componentDidMount() {
  //     console.log("Mounted");
  //     console.log(this);
  //   }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        {/* Hi */}
        <h2> Please Enter A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
