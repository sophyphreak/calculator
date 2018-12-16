import React from 'react';
import Screen from './Screen';
import ButtonMap from './ButtonMap';

class Calculator extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {
      display: 0,
      currentEq: [0],
      decimal: 1
    };
    this.handleInput = this.handleInput.bind(this);
  }; 
    
  longerNumber(val, last) {
    if (this.state.decimal === 1) {
      let display = last * 10 + val;
      let currentEq = this.state.currentEq;
      currentEq[currentEq.length - 1] = display;
      this.setState({ display, currentEq });
    } else if (this.state.decimal < 1) {
      let decimal = this.state.decimal
      let display = last + val * decimal;
      let currentEq = this.state.currentEq;
      currentEq[currentEq.length - 1] = display;
      decimal *= .1;
      this.setState({ display, currentEq, decimal });
    }
  };
  
  resolveOperator(oldOper, newOper) {
    switch (oldOper) {
      case "+":
        this.addition(this.state.currentEq[0], this.state.currentEq[2], newOper);
        break;
      case "-":
        this.subtraction(this.state.currentEq[0], this.state.currentEq[2], newOper); 
        break;
      case "*":
        this.multiplication(this.state.currentEq[0], this.state.currentEq[2],  newOper);
        break;
      case "/":
        this.division(this.state.currentEq[0], this.state.currentEq[2], newOper);
        break;
      case "=":
        let currentEq = [this.state.currentEq[2], newOper];
        this.setState({ currentEq })
        break;
      default:
        break;
    };
  };
  
  handleInput(val) {
    
    if (val === 'AC') {
      this.setState({ display: 0, currentEq: [0], decimal: 1})
    }
    
    if (val === 'CE') {
      let display = 0;
      if (this.state.currentEq.length <= 2) {
        this.setState({ display, currentEq: [0], decimal: 1 });
      } else if (this.state.currentEq.length === 3) {
        let currentEq = this.state.currentEq.slice(0, 2);
        this.setState({ display, currentEq, decimal: 1})
      }
    }
    
    if (val === '.') {
      this.setState({decimal: .1});
    }
    
    let last = this.state.currentEq[this.state.currentEq.length - 1];
    
    if (this.state.currentEq.length === 1) {
      if (typeof(val) === "number") {
        this.longerNumber(val, last);
        
        
      } else if ("+-*/".indexOf(val) > -1 ) {
        let currentEq = this.state.currentEq;
        currentEq.push(val);
        this.setState({ currentEq });
      }
      
    } else if (this.state.currentEq.length === 2) {
      
      if (typeof(val) === "number") {
        let display = val;
        if (this.state.decimal < 1) {
          display = val * .1
        }
        let currentEq = this.state.currentEq;
        currentEq.push(display);
        this.setState({ display, currentEq });
        
      } else if ("+-*/".indexOf(val) > -1 ) {
        let currentEq = this.state.currentEq.slice(0, this.state.currentEq.length - 1);
        currentEq.push(val);
        this.setState({ currentEq });   
      }
      
    } else if (this.state.currentEq.length === 3) {
      
      if (typeof(val) === "number") {
        this.longerNumber(val, last);
        
      } else if ("+-*/=".indexOf(val) > -1 ) {
        this.resolveOperator(this.state.currentEq[1], val);
      }
    }
  };
  
  addition(first, last, newOper) {
    let sum = first + last;
    let currentEq = [sum, newOper];
    this.setState({ display: sum, currentEq, decimal: 1});
  };
  
  subtraction(first, last, newOper) {
    let difference = first - last;
    let currentEq = [difference, newOper];
    this.setState({ display: difference, currentEq, decimal: 1});
  };
  
  multiplication(first, last, newOper) {
    let product = first * last;
    let currentEq = [product, newOper];
    this.setState({ display: product, currentEq, decimal: 1});
  };
  
  division(first, last, newOper) {
    let quotient = first / last;
    let currentEq = [quotient, newOper];
    this.setState({ display: quotient, currentEq, decimal: 1});
  }
  
  render() {
    return(
      <div id="calculator">
        <div id="screen">
          <Screen display={this.state.display}/>
        </div>
        <ButtonMap handleInput={this.handleInput}/>
      </div>
    );
  }
};

export default Calculator;