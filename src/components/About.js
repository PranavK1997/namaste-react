import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  render() {
    const { login, type } = this.props;
    return (
      <div>
        Logged In User:{" "}
        <UserContext.Consumer>
          {({ loggedInUser }) => loggedInUser}
        </UserContext.Consumer>
        <h1>About</h1>
        <h2>This is Namaste React web series</h2>
        <UserClass name={login} type={type} />
      </div>
    );
  }
}

export default About;
