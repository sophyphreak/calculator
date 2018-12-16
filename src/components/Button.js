import React from 'react';

class Button extends React.Component {
  
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(props) {    
    console.log(this.props.value + ' clicked')
    if ("1234567890".indexOf(this.props.value) > -1) {
      this.props.handleInput(parseInt(this.props.value));
    } else {
      this.props.handleInput(this.props.value);  
    }
  };
  
  render() {
    return (
      <div>
        <button onClick={() => this.handleClick()}> {this.props.value} </button>
      </div>
    );
  }
};

export default Button;