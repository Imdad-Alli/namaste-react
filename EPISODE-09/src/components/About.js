import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <h1>Welcome to About page</h1>
                <UserClass name="First" location="Bengalore" contact="imdadalli@gmail.com"/>
            </div>
        )
    }
}
export default About;