import entityUtils from '../utils/entityUtils';

export default {
  fetchEntities: (type) => {
    return (dispatch) => {
      return entityUtils.fetchEntities(type)
        .then(({data}) => {
          dispatch({ type: 'FETCH_ENTITIES', data: data });
        });
    };
  },
};
