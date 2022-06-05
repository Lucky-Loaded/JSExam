import axios from "axios";

const url = "http://localhost:4200/";

export const getAll = async (tableName) => {
    return await axios.get(`${url}${tableName}`);
}

export const getById = async (tableName, id) => {
    return await axios.get(`${url}${tableName}/${id}`);
}

export const add = async (tableName, user) => {
    return await axios.post(url+tableName, user);
}

export const edit = async (tableName, id, user) => {
    return await axios.put(`${url}${tableName}/${id}`, user);
}

export const remove = async (tableName, id) => {
    return await axios.delete(`${url}${tableName}/${id}`);
}