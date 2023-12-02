import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            count2: 2,
        }
        console.log(this.props.name+"Child Constructor");
    }
    componentDidMount(){
        console.log(this.props.name+"Child componentDidMount");
    }
    render() {
        const { name, location, contact } = this.props;
        const { count} = this.state;

        console.log(this.props.name+"Child Render");
        return (
            <div className="user-card">
                <h1>User Details</h1>
                <h2>count: {count}</h2>
                <button onClick={() => {
                    //never update state variables directly
                    this.setState({
                        count:this.state.count+1,
                    });
                }}>increase count</button>
                <h4>Name: {name}  (class based component)</h4>
                <h4>Location: {location} (class based component)</h4>
                <h4>contact: {contact} (class based component)</h4>
            </div>
        )
    }
};
export default UserClass;