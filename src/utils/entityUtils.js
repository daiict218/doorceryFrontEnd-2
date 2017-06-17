import axios from 'axios';

export default {
  fetchEntities: function (entityType) {
    return axios.get(`http://localhost:3000/v1/getEntities`, {
      params: {
        entityType: entityType
      }
    });
  }
};
