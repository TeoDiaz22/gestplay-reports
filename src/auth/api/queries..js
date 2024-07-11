import axios from "axios";

export const login = async (email, password) => {
    return await axios.post(`${import.meta.env.VITE_URL_API}/token`, {
        username: email,
        password: password,
    }, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
};

export const activateAccount = async (token) => {
    return await axios.get(`${import.meta.env.VITE_URL_API}/confirm-email/${token}`);
};

export const logout = async () => {
    return await axios.post(`${import.meta.env.VITE_URL_API}/logout`);
};