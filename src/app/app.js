import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';    //todo: remove this

import commonStyles from './common/common.unmod.scss';

class App extends React.Component {
  static childContextTypes = {
    insertCss: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.removeCommonStyles = commonStyles._insertCss();
  }

  getChildContext() {
    return {
      insertCss: styles => styles._insertCss(),
    };
  }

  componentWillUnmount() {
    this.removeCommonStyles();
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
