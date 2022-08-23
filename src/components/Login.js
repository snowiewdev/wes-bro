import React from "react";
import PropTypes from "prop-types";

const Login = ({ authenticate }) => (
  <nav className="login">
    <h2>Inventory Login</h2>
    <p>Sign in to manage your store's inventory.</p>
    <button className="github" onClick={() => authenticate("Github")}>
      Login In With Github
    </button>
    {/* TODO: need to apply for higher access in Twitter */}
    {/* <button className="twitter" onClick={() => authenticate("Twitter")}>
      Login In With Twitter
    </button> */}
    <button className="facebook" onClick={() => authenticate("Facebook")}>
      Login In With Facebook
    </button>
  </nav>
);

Login.prototypes = {
  authenticate: PropTypes.func.isRequired,
};

export default Login;
