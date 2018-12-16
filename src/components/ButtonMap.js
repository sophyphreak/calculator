import React from 'react';
import Button from './Button';

class ButtonMap extends React.Component {
  render() {
    return(
      <div id="button-map">
        <div className="row">
          <Button value="AC" handleInput={this.props.handleInput}/>
          <Button value="CE" handleInput={this.props.handleInput}/>
          <Button value="/" handleInput={this.props.handleInput}/>
          <Button value="*" handleInput={this.props.handleInput}/>
        </div>
        <div className="row">
          <Button value="7" handleInput={this.props.handleInput}/>
          <Button value="8" handleInput={this.props.handleInput}/>
          <Button value="9" handleInput={this.props.handleInput}/>
          <Button value="-" handleInput={this.props.handleInput}/>
        </div>
        <div className="row">
          <Button value="4" handleInput={this.props.handleInput}/>
          <Button value="5" handleInput={this.props.handleInput}/>
          <Button value="6" handleInput={this.props.handleInput}/>
          <Button value="+" handleInput={this.props.handleInput}/>
        </div>
        <div className="row">
          <Button value="1" handleInput={this.props.handleInput}/>
          <Button value="2" handleInput={this.props.handleInput}/>
          <Button value="3" handleInput={this.props.handleInput}/>
          <Button value="=" handleInput={this.props.handleInput}/>
        </div>
        <div className="row">
          <Button value="0" handleInput={this.props.handleInput}/>
          <Button value="." handleInput={this.props.handleInput}/>
        </div>
      </div>
    );
  }
};

export default ButtonMap;