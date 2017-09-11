import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import AdminHeader from '../adminHeader';
import DataTable from '../../common/DataTable';

import ENTITY_TYPES from '../../constants/entityTypes';

import entityActions from '../../../actions/entityActions';

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

  renderHeader() {
    return (
      <div>
        <button onClick={this.onAddEntity}>
          {`Add ${ENTITY_TYPES[this.state.entityType]}`}
        </button>
      </div>
    );
  }

  renderBody() {
    return (
      <div>
        {'Hello World'}
      </div>
    );
  }

  renderFooter() {
    return (
      <div>
        {'Render from footer'}
      </div>
    );
  }

  render() {
    const that = this;

    return (
      <div>
        <AdminHeader
          title={'Doorcery'}
        />
        <DataTable

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
