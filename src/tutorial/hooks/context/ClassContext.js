import React, { Component } from 'react';
import { ThemeContext } from './Component';

export default class ClassContext extends Component {
  themeStyle(darkTheme) {
    return {
      backgroundColor: darkTheme ? '#333333' : '#ffffff',
      padding: '2em',
    };
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {(darkTheme) => {
          return <div style={this.themeStyle(darkTheme)}>ClassContext</div>;
        }}
      </ThemeContext.Consumer>
    );
  }
}
