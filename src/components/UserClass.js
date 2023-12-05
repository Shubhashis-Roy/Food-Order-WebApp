import React from "react";
import UserContext from "../utills/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // State variable is an big object
    this.state = {
      userInfo: {
        name: "dummy",
        location: "auto",
      },
    };
    console.log(this.props.name + "Child constarctor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Subhashisroy");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(this.props.name + "Child ComponentDidMount");

    // If We use setIntervall in componentDidMount than it called continuesly
    // Even we change the component (like we change user component to about bt still it run)
    // So we have to clear it in componentWillUnmount()
  }

  componentDidUpdate() {
    console.log("Did update");
  }

  // ##  Compare with useEffect()
  componentDidUpdate(preProps, preState) {
    if (this.state.count != preState.count) {
      // Code
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount ");
  }

  render() {
    const { name, type, avatar_url } = this.state.userInfo;
    console.log(this.props.name + "child render");

    return (
      <>
        <div className="user-card">
          <p>From Class</p>
          <img style={{ height: "200px" }} src={avatar_url} />
          <h3>Name: {name}</h3>
          <h3> Address: {type} </h3>
          <h3>Contact: Subhashis</h3>
          <UserContext.Consumer>
            {({ loggInUser }) => <h2 className="font-bold"> {loggInUser} </h2>}
          </UserContext.Consumer>
        </div>
      </>
    );
  }
}

export default UserClass;
