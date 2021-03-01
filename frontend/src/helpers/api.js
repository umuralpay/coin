import axios from 'axios';
import {API_URL} from "./statics";

const api = (() => {

    const getList = async () => {
        return await axios.get(API_URL + '/list');
    }

    const getDetail = async (hash) => {
        return await axios.get(API_URL + `/detail/${hash}`);
    }

    const getTransaction = async (tx) => {
        return await axios.get(API_URL + `/transaction/${tx}`);
    }
    return {
        getList,
        getDetail,
        getTransaction
    }
})();

export default api;
