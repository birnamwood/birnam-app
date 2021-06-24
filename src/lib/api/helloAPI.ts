import apiCall from './baseAPI'

const getLog = apiCall<null , any>("/api/test");

const helloAPI = {
  getLog,
};


export default helloAPI;