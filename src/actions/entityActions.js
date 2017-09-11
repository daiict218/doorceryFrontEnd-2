import entityUtils from '../utils/entityUtils';
import {
  get as _get,
} from 'lodash';

const EMPTY_READ_ONLY_OBJECT = Object.freeze({});

export default {
  fetchEntities: type => dispatch => entityUtils.fetchEntities(type)
    .then(({ data }) => {
      dispatch({ type: 'FETCH_ENTITIES', data: _get(data, 'entities', EMPTY_READ_ONLY_OBJECT) });
    }),
};
