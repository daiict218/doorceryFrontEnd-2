import React from 'react';

import styles from './app.scss';
import withStyles from './decorators/withStyles';
import HomePage from './components/HomePage';



@withStyles(styles)
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
          {this.props.children}
      </div>
    );
  }
}

export default App;
