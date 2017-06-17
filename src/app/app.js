import React from 'react';
import PropTypes from 'prop-types';
import {
  isEmpty as _isEmpty,
  isArray as _isArray,
  isFunction as _isFunction,
  forEach as _forEach
} from 'lodash';

import styles from './app.scss';
//import withStyles from './decorators/withStyles';
import HomePage from './components/HomePage';
import commonStyles from './common/common.scss';

class App extends React.Component {
  static childContextTypes = {
    insertCss: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.removeCommonStyles = commonStyles._insertCss();
  }

  componentWillUnmount() {
    this.removeCommonStyles();
  }

  getChildContext() {
    return {
      insertCss: styles => styles._insertCss()
    };
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
