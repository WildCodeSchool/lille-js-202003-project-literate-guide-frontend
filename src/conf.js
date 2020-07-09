require('dotenv').config();

const { REACT_APP_BACKEND_ADDRESS } = process.env;

module.exports = { backend: REACT_APP_BACKEND_ADDRESS };
