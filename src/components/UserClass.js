import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        login: "Dummy Name",
        type: "Default",
        avatar_url: "https://dummyphoto.com",
      },
    };
  }

  static contextType = UserContext;

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/PranavK1997");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { login, type, avatar_url } = this.state.userInfo;
    const { loggedInUser } = this.context;

    return (
      <div className="user-card">
        <img className="git-img" src={avatar_url} />
        <h2>Name: {login}</h2>
        <h3>Logged in as: {loggedInUser}</h3>
        <h4>Type: {type}</h4>
        <h4>Contact: @pranav1997</h4>
      </div>
    );
  }
}

export default UserClass;
