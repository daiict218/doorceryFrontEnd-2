import axios from 'axios';

export default {
  fetchEntities: (entityType) => {
    console.log(entityType);
    return axios.get('http://localhost:3002/v1/getEntities', {
      params: { entityType },
    });
  },

  addEntity: (entity) => axios.post('http://localhost:3002/v1/addEntity', entity),
};
