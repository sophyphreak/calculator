var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var App = function (_React$Component) {_inherits(App, _React$Component);function App() {_classCallCheck(this, App);return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));}_createClass(App, [{ key: "render", value: function render()
    {
      return (
        React.createElement("div", null,
          React.createElement(TitleBar, null),
          React.createElement(Calculator, null)));


    } }]);return App;}(React.Component);
;var

TitleBar = function (_React$Component2) {_inherits(TitleBar, _React$Component2);function TitleBar() {_classCallCheck(this, TitleBar);return _possibleConstructorReturn(this, (TitleBar.__proto__ || Object.getPrototypeOf(TitleBar)).apply(this, arguments));}_createClass(TitleBar, [{ key: "render", value: function render()
    {
      return (
        React.createElement("div", { id: "title-bar" },
          React.createElement("h3", null, "Calculator"),
          React.createElement("h6", { id: "subtitle" }, "Created by Andrew Horn")));


    } }]);return TitleBar;}(React.Component);var


Calculator = function (_React$Component3) {_inherits(Calculator, _React$Component3);

  function Calculator(props) {_classCallCheck(this, Calculator);var _this3 = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this,
    props));
    _this3.state = {
      display: 0,
      currentEq: [0],
      decimal: 1 };

    _this3.handleInput = _this3.handleInput.bind(_this3);return _this3;
  }_createClass(Calculator, [{ key: "longerNumber", value: function longerNumber(

    val, last) {
      if (this.state.decimal === 1) {
        var display = last * 10 + val;
        var currentEq = this.state.currentEq;
        currentEq[currentEq.length - 1] = display;
        this.setState({ display: display, currentEq: currentEq });
      } else if (this.state.decimal < 1) {
        var decimal = this.state.decimal;
        var _display = last + val * decimal;
        var _currentEq = this.state.currentEq;
        _currentEq[_currentEq.length - 1] = _display;
        decimal *= .1;
        this.setState({ display: _display, currentEq: _currentEq, decimal: decimal });
      }
    } }, { key: "resolveOperator", value: function resolveOperator(

    oldOper, newOper) {
      switch (oldOper) {
        case "+":
          this.addition(this.state.currentEq[0], this.state.currentEq[2], newOper);
          break;
        case "-":
          this.subtraction(this.state.currentEq[0], this.state.currentEq[2], newOper);
          break;
        case "*":
          this.multiplication(this.state.currentEq[0], this.state.currentEq[2], newOper);
          break;
        case "/":
          this.division(this.state.currentEq[0], this.state.currentEq[2], newOper);
          break;
        case "=":
          var currentEq = [this.state.currentEq[2], newOper];
          this.setState({ currentEq: currentEq });}
      ;
    } }, { key: "handleInput", value: function handleInput(

    val) {

      if (val === 'AC') {
        this.setState({ display: 0, currentEq: [0], decimal: 1 });
      }

      if (val === 'CE') {
        var display = 0;
        if (this.state.currentEq.length <= 2) {
          this.setState({ display: display, currentEq: [0], decimal: 1 });
        } else if (this.state.currentEq.length === 3) {
          var currentEq = this.state.currentEq.slice(0, 2);
          this.setState({ display: display, currentEq: currentEq, decimal: 1 });
        }
      }

      if (val === '.') {
        this.setState({ decimal: .1 });
      }

      var last = this.state.currentEq[this.state.currentEq.length - 1];

      if (this.state.currentEq.length === 1) {
        if (typeof val === "number") {
          this.longerNumber(val, last);


        } else if ("+-*/".indexOf(val) > -1) {
          var _currentEq2 = this.state.currentEq;
          _currentEq2.push(val);
          this.setState({ currentEq: _currentEq2 });
        }

      } else if (this.state.currentEq.length === 2) {

        if (typeof val === "number") {
          var _display2 = val;
          if (this.state.decimal < 1) {
            _display2 = val * .1;
          }
          var _currentEq3 = this.state.currentEq;
          _currentEq3.push(_display2);
          this.setState({ display: _display2, currentEq: _currentEq3 });

        } else if ("+-*/".indexOf(val) > -1) {
          var _currentEq4 = this.state.currentEq.slice(0, this.state.currentEq.length - 1);
          _currentEq4.push(val);
          this.setState({ currentEq: _currentEq4 });
        }

      } else if (this.state.currentEq.length === 3) {

        if (typeof val === "number") {
          this.longerNumber(val, last);

        } else if ("+-*/=".indexOf(val) > -1) {
          this.resolveOperator(this.state.currentEq[1], val);
        }
      }
    } }, { key: "addition", value: function addition(

    first, last, newOper) {
      var sum = first + last;
      var currentEq = [sum, newOper];
      this.setState({ display: sum, currentEq: currentEq, decimal: 1 });
    } }, { key: "subtraction", value: function subtraction(

    first, last, newOper) {
      var difference = first - last;
      var currentEq = [difference, newOper];
      this.setState({ display: difference, currentEq: currentEq, decimal: 1 });
    } }, { key: "multiplication", value: function multiplication(

    first, last, newOper) {
      var product = first * last;
      var currentEq = [product, newOper];
      this.setState({ display: product, currentEq: currentEq, decimal: 1 });
    } }, { key: "division", value: function division(

    first, last, newOper) {
      var quotient = first / last;
      var currentEq = [quotient, newOper];
      this.setState({ display: quotient, currentEq: currentEq, decimal: 1 });
    } }, { key: "render", value: function render()

    {
      return (
        React.createElement("div", { id: "calculator" },
          React.createElement("div", { id: "screen" },
            React.createElement(Screen, { display: this.state.display })),

          React.createElement(ButtonMap, { handleInput: this.handleInput })));


    } }]);return Calculator;}(React.Component);
;

// For debugging:
//                 <p id="debug">
//   <br/>display: {this.state.display} 
//   <br/>currentEq: [{this.state.currentEq[0]}, {this.state.currentEq[1]}, {this.state.currentEq[2]}]
//   <br/>curentEq.length: {this.state.currentEq.length}
//   <br/>decimal: {this.state.decimal}
// </p>
var


Screen = function (_React$Component4) {_inherits(Screen, _React$Component4);function Screen() {_classCallCheck(this, Screen);return _possibleConstructorReturn(this, (Screen.__proto__ || Object.getPrototypeOf(Screen)).apply(this, arguments));}_createClass(Screen, [{ key: "render", value: function render()
    {
      return (
        React.createElement("div", { id: "screen-text" }, this.props.display));

    } }]);return Screen;}(React.Component);
;var

ButtonMap = function (_React$Component5) {_inherits(ButtonMap, _React$Component5);

  function ButtonMap(props) {_classCallCheck(this, ButtonMap);return _possibleConstructorReturn(this, (ButtonMap.__proto__ || Object.getPrototypeOf(ButtonMap)).call(this,
    props));
  }_createClass(ButtonMap, [{ key: "render", value: function render()

    {
      return (
        React.createElement("div", { id: "button-map" },
          React.createElement("div", { className: "row" },
            React.createElement(Button, { value: "AC", handleInput: this.props.handleInput }),
            React.createElement(Button, { value: "CE", handleInput: this.props.handleInput }),
            React.createElement(Button, { value: "/", handleInput: this.props.handleInput }),
            React.createElement(Button, { value: "*", handleInput: this.props.handleInput })),

          React.createElement("div", { className: "row" },
            React.createElement(Button, { value: "7", handleInput: this.props.handleInput }),
            React.createElement(Button, { value: "8", handleInput: this.props.handleInput }),
            React.createElement(Button, { value: "9", handleInput: this.props.handleInput }),
            React.createElement(Button, { value: "-", handleInput: this.props.handleInput })),

          React.createElement("div", { className: "row" },
            React.createElement(Button, { value: "4", handleInput: this.props.handleInput }),
            React.createElement(Button, { value: "5", handleInput: this.props.handleInput }),
            React.createElement(Button, { value: "6", handleInput: this.props.handleInput }),
            React.createElement(Button, { value: "+", handleInput: this.props.handleInput })),

          React.createElement("div", { className: "row" },
            React.createElement(Button, { value: "1", handleInput: this.props.handleInput }),
            React.createElement(Button, { value: "2", handleInput: this.props.handleInput }),
            React.createElement(Button, { value: "3", handleInput: this.props.handleInput }),
            React.createElement(Button, { value: "=", handleInput: this.props.handleInput })),

          React.createElement("div", { className: "row" },
            React.createElement(Button, { value: "0", handleInput: this.props.handleInput }),
            React.createElement(Button, { value: ".", handleInput: this.props.handleInput }))));



    } }]);return ButtonMap;}(React.Component);
;var

Button = function (_React$Component6) {_inherits(Button, _React$Component6);

  function Button(props) {_classCallCheck(this, Button);var _this6 = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this,
    props));
    _this6.handleClick = _this6.handleClick.bind(_this6);return _this6;
  }_createClass(Button, [{ key: "handleClick", value: function handleClick(

    props) {
      console.log(this.props.value + ' clicked');
      if ("1234567890".indexOf(this.props.value) > -1) {
        this.props.handleInput(parseInt(this.props.value));
      } else {
        this.props.handleInput(this.props.value);
      }
    } }, { key: "render", value: function render()

    {var _this7 = this;
      return (
        React.createElement("div", null,
          React.createElement("button", { onClick: function onClick() {return _this7.handleClick();} }, " ", this.props.value, " ")));


    } }]);return Button;}(React.Component);
;



ReactDOM.render(
React.createElement(App, null),
document.getElementById("container"));