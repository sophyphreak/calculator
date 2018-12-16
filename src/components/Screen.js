import React from 'react';

class Screen extends React.Component {
  render() {
    return(
      <div id="screen-text">{this.props.display}</div>
    );
  }
};

export default Screen;