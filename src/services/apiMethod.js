import axios from 'axios';
import {URL_BASE} from '../helpers/config'
import {getTokenAuth} from './storeSession'

export const apiPOST = (url, params, token = false) => {
    let config;
    if (token) {
        config = {
            Authorization: `Bearer ${getTokenAuth().token}`
        };
    }
    return axios.post(`${URL_BASE}${url}`, params, {headers: config})
};

export const apiGET = (url, token = false) => {
    let config;
    if (token) {
        config = {
            Authorization: `Bearer ${getTokenAuth().token}`,
        };
    }
    return axios.get(`${URL_BASE}${url}`, {headers: config});
};

export const apiDELETE = (url, token = false) => {
    let config;
    if (token) {
        config = {
            Authorization: `Bearer ${getTokenAuth().token}`,
        };
    }
    return axios.delete(`${URL_BASE}${url}`, {headers: config});
};
export const apiUPDATE = (url, params, token = false) => {
    let config;
    if (token) {
        config = {
            Authorization: `Bearer ${getTokenAuth().token}`,
        };
    }
    return axios.put(`${URL_BASE}${url}`, params, {headers: config});
};