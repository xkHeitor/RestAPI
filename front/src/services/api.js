import axios from 'axios';
import auth from '../config/authorization';

const api = axios.create({
	baseURL: "http://localhost:4000/developers",
	headers: {
		Authorization: auth.secret,
    }
});

export default api;