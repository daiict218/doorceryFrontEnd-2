import React from 'react';

import { withRouter } from 'react-router';

import withStyles from '../../decorators/withStyles';
import styles from './adminPanel.scss';

class AdminPanel extends React.Component {
  onButtonClick = (event) => {
    const dataSet = event.currentTarget.dataset;

    this.props.router.push(`/admin/entities/${dataSet.id}`);
  };

  onAddButtonClick = () => this.props.router.push(`/admin/addentities`);

  render() {
    return (
      <div className={styles.buttonContainer}>
        <button onClick={this.onButtonClick} data-id={'categories'}>{'See Categories'}</button>
        <button onClick={this.onButtonClick} data-id={'subcategories'}>{'See Sub Categories'}</button>
        <button onClick={this.onButtonClick} data-id={'items'}>{'See Items'}</button>
        <button onClick={this.onAddButtonClick} data-id={'addentities'}>{'Add Entities'}</button>
      </div>
    );
  }
}

export default withStyles(withRouter(AdminPanel), styles);