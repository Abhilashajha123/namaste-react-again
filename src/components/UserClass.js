import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Abhilasha",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    console.log("Parent comonent Did mount");
    const data = await fetch("https://api.github.com/users/Abhilashajha123");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log("Component did update");
  }

  componentWillUnmount() {
    console.log("component unmount");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>contact: 8595578903</h4>
      </div>
    );
  }
}

export default UserClass;
