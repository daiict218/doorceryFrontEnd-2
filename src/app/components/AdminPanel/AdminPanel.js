import React from 'react';

import { withRouter } from 'react-router';

class AdminPanel extends React.Component {
  onButtonClick = (event) => {
    const dataSet = event.currentTarget.dataset;

    this.props.router.push(`/admin/entities/${dataSet.id}`);
  };

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick} data-id={'categories'}>{'Categories'}</button>
        <button onClick={this.onButtonClick} data-id={'subcategories'}>{'Sub Categories'}</button>
        <button onClick={this.onButtonClick} data-id={'items'}>{'Items'}</button>
      </div>
    );
  }
}

export default withRouter(AdminPanel);