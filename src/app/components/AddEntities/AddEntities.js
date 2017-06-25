import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import update from 'immutability-helper';
import {
  isUndefined as _isUndefined,
} from 'lodash';

import FIELD_TYPES from '../../constants/fieldTypes';
import entityTypes from '../../constants/entityTypes';
import formField  from '../../common/formField';

import entityUtils from '../../../utils/entityUtils';

const CATEGORY_NAME_FIELD = {
  id: 'categoryName',
  placeholder: 'Add Category Name',
  type: FIELD_TYPES.TEXT.type,
};

class AddEntities extends React.Component {
  static propTypes = {
    router: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      fieldValueMap: {
        categoryName: '',
      },
      fieldValidationMap: {},
    };
  }

  onAddCategory = () => {
    const fieldValueMap = this.state.fieldValueMap;

    if (fieldValueMap.categoryName) {
      entityUtils.addEntity({
        entityType: entityTypes.Category.name,
        entity: { category_name: fieldValueMap.categoryName },
      }).then((res) => {
        console.log(res);
        this.props.router.push('/admin/addentities/added');
      });
    }
  };

  onChange = (fieldValue, fieldId, validationObject) => {
    const { state } = this;

    this.setState({
      fieldValidationMap: update(state.fieldValidationMap, {
        $merge: {
          [fieldId]: { ...validationObject },
        },
      }),
      fieldValueMap: update(state.fieldValueMap, {
        $merge: {
          [fieldId]: _isUndefined(fieldValue) ? '' : fieldValue,
        },
      }),
    });
  };

  renderCategoryAdder() {
    return (
      <div>
        <div>{'Category Name'}</div>
        {formField.getFormField(CATEGORY_NAME_FIELD, {
          onChange: this.onChange,
        })}
        <button onClick={this.onAddCategory}>{'Add Category'}</button>
      </div>
    );
  }

  renderSubCategoryAdder() {
    return (
      <div>
        <div>{'Sub Category'}</div>
        <div>{'Add Sub Categoruy'}</div>
      </div>
    );
  }

  renderItemAdder() {
    return (
      <div>
        <div>{'Items'}</div>
        <div>{'Add items'}</div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderCategoryAdder()}
        {this.renderSubCategoryAdder()}
        {this.renderItemAdder()}
        {'Hello World'}
      </div>
    );
  }
}

export default withRouter(AddEntities);