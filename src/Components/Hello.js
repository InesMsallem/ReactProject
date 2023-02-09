import { Component } from "react";

class Hello extends Component {
  //classe lezm ikoun fiha render
  //fiha state
  constructor(props) {
    super(props);
    this.state = {
      classe: "4TWIN3",
      value: { value1: "this works too" },
      count: 0,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    console.log('=====================')
    this.setState({
      count: this.state.count+1
    },
    ()=> console.log( this.state.count))
   
  }
  render() {
    return (
      <>
        {/* <h1>
          "Hello" {this.props.name} {this.state.classe}
        </h1>
        <h3>{this.state.count}</h3>
        <button onClick={this.clickHandler}>click</button> */}
      </>
    );
  }
}

export default Hello;
