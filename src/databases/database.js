const url = "http://localhost:5000/query?url=";
const axios = require('axios');

const DB = class  {
  getUrlResults(userUrl) {
    return axios.get(url + userUrl)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      return error
    })
  }
}

// Initialize the Class
const db = new DB();

// Export the Class
export default db;



