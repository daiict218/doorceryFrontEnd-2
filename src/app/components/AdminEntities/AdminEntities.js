import React from 'react';
import {
  map as _map,
} from 'lodash';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import AdminHeader from '../adminHeader';
import DataTable from '../../common/DataTable';
import TextCellRenderer from '../../common/DataTable/cells/textCell';

import ENTITY_TYPES from '../../constants/entityTypes';

import entityActions from '../../../actions/entityActions';

const getTableConfig = (entityType, entities) => {
  switch (entityType) {
    case ENTITY_TYPES.category.name:
      return [
        {
          colKey: 'name',
          headerLabel: 'Category Name',
          cellType: 'text',
          columnData: _map(entities, entity => ({
              name: entity.category_name,
            })
          ),
        },
      ];

    default :
      return [];
  }
};

class AdminEntities extends React.Component {
  static propTypes = {
    location: PropTypes.object,
    fetchEntities: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      entityType: this.props.location.pathname.split('/').pop(),
      showAddEntityForm: false,
    };
  }

  componentDidMount() {
    this.props.fetchEntities(ENTITY_TYPES[this.state.entityType].name);
  }

  onAddEntity = () => {
    this.setState({ showAddEntityForm: true });
  };

  onCancel = () => {
    this.setState({ showAddEntityForm: false });
  };

  render() {
    const { props, state } = this;

    return (
      <div>
        <AdminHeader
          title={'Doorcery'}
        />
        <DataTable
          columns={getTableConfig(ENTITY_TYPES[state.entityType].name, props.entities)}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ entitiesState }) => ({
  entities: entitiesState.entities,
});

const mapDispatchToProps = (dispatch) => ({
  fetchEntities: entityType => dispatch(entityActions.fetchEntities(entityType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminEntities);
