import React from 'react';
import TitleBar from './TitleBar';
import Calculator from './Calculator';

class App extends React.Component {
  render() {
    return (
      <div>
        <TitleBar />
        <Calculator />
      </div>
    );
  }
};

export default App;
