import axios from 'axios'

const success = res => res;
const error = error => error;

axios.interceptors.response.use(success, error);

export default axios