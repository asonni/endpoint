import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    // Applay to every request
    axios.defaults.headers.common['Authorization'] = token;
    axios.defaults.headers.common['Content-Type'] = 'application/json';
  } else {
    // Delete auth headers
    delete axios.defaults.headers.common['Authorization'];
    delete axios.defaults.headers.common['Content-Type'];
  }
};

export default setAuthToken;
