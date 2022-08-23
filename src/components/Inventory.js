import React, { Component } from "react";
import PropTypes from "prop-types";

import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import Login from "./Login";
import firebase from "firebase";
import base, { firebaseApp } from "../base";

export default class Inventory extends Component {
  static propTypes = {
    fishes: PropTypes.object,
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func,
    addFish: PropTypes.func,
    loadSampleFishes: PropTypes.func,
  };

  state = {
    uid: null,
    owner: null,
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }

  authHandler = async (authData) => {
    // look up current store in the firebase db
    const store = await base.fetch(this.props.storeId, { context: this });
    // console.log(store);

    // claim it if there is no owner
    if (!store.owner) {
      await base.post(`${this.props.storeId}/owner`, {
        data: authData.user.uid,
      });
    }

    // set the state of the inventory component to reflect the current user & the actual store owner
    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid,
    });

    console.log(authData);
  };

  authenticate = (provider) => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
  };

  logout = async () => {
    console.log("Logging out!");
    await firebase.auth().signOut();
    this.setState({ uid: null });
  };

  render() {
    const logout = <button onClick={this.logout}>Logout</button>;

    // 1. user not login
    if (!this.state.uid) {
      return <Login authenticate={this.authenticate} />;
    }

    // 2. user is not the owner of the store {
    if (this.state.uid !== this.state.owner) {
      return (
        <div>
          <p>Sorry you are not the owner!</p>
          {logout}
        </div>
      );
    }

    // 3. user is the owner of the store
    return (
      <header className="inventory">
        <h2>Inventory</h2>
        {logout}
        {Object.keys(this.props.fishes).map((key) => (
          <EditFishForm
            fish={this.props.fishes[key]}
            key={key}
            index={key}
            updateFish={this.props.updateFish}
            deleteFish={this.props.deleteFish}
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
