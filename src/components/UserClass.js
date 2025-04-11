import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                login: "Dummy Name",
                type: "Default",
                avatar_url: "https://dummyphoto.com"
            }
        };
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/PranavK1997");
        const json = await data.json();
        console.log(json);
        
        this.setState({
            userInfo: json
        })
    }

    render() {
        const { login, type, avatar_url } = this.state.userInfo;

        return <div className="user-card">
            <img className="git-img" src={avatar_url} />
            <h2>Name: {login}</h2>
            <h3>Type: {type}</h3>
            <h4>Contact: @pranav1997</h4>
    </div>
    }
}

export default UserClass;