import React from 'react';

import { connect } from 'react-redux';
import { fetchEntities } from '../../../actions/entityActions';

const ENTITY_TYPES = {
  'categories': 'Category',
  'subcategories': 'SubCategory',
  'items': 'Items'
};

class Entities extends React.Component {
  componentDidMount() {
    this.props.fetchEntities(ENTITY_TYPES[this.props.location.pathname.split('/').pop()])
  }

  render() {
    return (
      <div>
        {'Hello from AddCategories'}
      </div>
    )
  }
}

const mapStateToProps = ({entitiesState}) => {
  return {
    entities: entitiesState.entities
  };
};

export default connect(mapStateToProps, {
  fetchEntities
})(Entities);
