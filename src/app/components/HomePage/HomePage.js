import React from 'react';

import withStyles from '../../decorators/withStyles';
import styles from './HomePage.scss';

@withStyles(styles)
class HomePage extends React.Component {
  render() {
    return (
      <div>
        {'Hello World'}
      </div>
    );
  }
}

export default HomePage;
