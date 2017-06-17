import React from 'react';

import { withRouter } from 'react-router';

import withStyles from '../../decorators/withStyles';
import styles from './adminPanel.scss';

class AdminPanel extends React.Component {
  onButtonClick = (event) => {
    const dataSet = event.currentTarget.dataset;

    this.props.router.push(`/admin/entities/${dataSet.id}`);
  };

  render() {
    return (
      <div className={styles.buttonContainer}>
        <button onClick={this.onButtonClick} data-id={'categories'}>{'Categories'}</button>
        <button onClick={this.onButtonClick} data-id={'subcategories'}>{'Sub Categories'}</button>
        <button onClick={this.onButtonClick} data-id={'items'}>{'Items'}</button>
      </div>
    );
  }
}

export default withStyles(withRouter(AdminPanel), styles);