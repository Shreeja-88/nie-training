import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/";

export const LoginApi = async (username, password) => {
    const response = await axios.post(`${BASE_URL}token/`, {
        username,
        password,
    });
    return response.data;
};

export const AuthToken = () => {
    const token = localStorage.getItem("access");
    return token ? { Authorization: `Bearer ${token}` } : {};
};

export const addTrainer = async (trainer) => {
    const response = await axios.post(`${BASE_URL}trainer/`, trainer, {
        headers: AuthToken(),
    });
    return response.data;
};

export const searchTrainer = async (filter = {}) => {
    const params = new URLSearchParams(filter).toString();
    const response = await axios.get(`${BASE_URL}trainer/?${params}`, {
        headers: AuthToken(),
    });
    return response.data;
};

export const updateTrainer = async (id, trainer) => {
    const response = await axios.put(`${BASE_URL}trainer/${id}/`, trainer, {
        headers: AuthToken(),
    });
    return response.data;
};

export const deleteTrainer = async (id) => {
    const response = await axios.delete(`${BASE_URL}trainer/${id}/`, {
        headers: AuthToken(),
    });
    return response.data;
};
