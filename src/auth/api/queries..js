import axios from "axios";

export const login = async (email, password) => {
    return await axios.post(`http://localhost:8000/token`, {
        username: email,
        password: password,
    }, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
};