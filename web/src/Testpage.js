import React, { Component } from "react";
class Testpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: ""
        };
      }
      changeText(event) {
        this.setState({
        name: event.target.value
      });
    }
    clicked(event) {
        this.setState({
        name: "karthi"
      });
    }
    render() {
        return (
          <div>
            <label htmlFor="name">Enter Text here </label>
            <input type="text" id="name" onChange={this.changeText.bind(this)} />
            <h3>{this.state.name}</h3>
            <input type="button" value={"GET"} onClick={this.clicked.bind(this)}/>
          </div>
        );
     }
   
   
} 
  export default Testpage;