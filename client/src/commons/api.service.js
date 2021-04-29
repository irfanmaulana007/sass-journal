import axios from 'axios';
import _ from 'lodash';

import { API_URL } from './config';
import { createErrorObject } from 'Components/utilities/createErrorObject/createErrorObject';
import { createNotification } from 'Components/utilities/Notifications/Notifications';

axios.defaults.baseURL = API_URL;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.interceptors.request.use(
    config => {
        let token = localStorage.getItem('token')
  
        if (token) {
            config.headers['Authorization'] = `Bearer ${ token }`
        }
	
        return config
    },
    error => {
        return Promise.reject(error);
    }
)

const apiService = {
    get (resource) {
        return axios
            .get(resource)
            .then((res) => {
                return res
            })
            .catch((err) => {
                createNotification('error', 'Kontak IT Support untuk mengetahui kendala.', 'Terjadi kesalahan');
                createErrorObject(err.response.status);

                throw err;
            })
    },

    put (resource, params) {
        return axios
            .put(resource, params)
            .catch((err) => {
                createNotification('error', 'Kontak IT Support untuk mengetahui kendala.', 'Terjadi kesalahan');
                createErrorObject(err.response.status);

                throw err;
            })
    },

    post (resource, params) {
        return axios
            .post(resource, params)
            .catch((err) => {
                console.error(err.response);
                createNotification('error', _.get(err, 'response.data.message', 'Kontak IT Support untuk mengetahui kendala.'), 'Terjadi kesalahan');
                createErrorObject(err.response.status);

                throw err;
            })
    },

    delete (resource) {
        return axios
            .delete(resource)
            .catch((err) => {
                createNotification('error', 'Kontak IT Support untuk mengetahui kendala.', 'Terjadi kesalahan');
                createErrorObject(err.response.status);

                throw err;
            })
    }
}

export const JournalService = {
    get () {
        return apiService
            .get('journals')
    },
    
    detail (id) {
        return apiService
            .get('journals/' + id)
    },
    
    create (payload) {
        return apiService
            .post('journals', payload)
    },
    
    update (id, payload) {
        return apiService
            .put('journals/' + id, payload)
    },
    
    delete (id) {
        return apiService
            .delete('journals/' + id)
    },
}