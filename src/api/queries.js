import axios from "axios";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";

export const getProfiles = async (authHeader) => {
    return await axios.get(`${import.meta.env.VITE_URL_API}/profiles/me`, {
        headers: {
            Authorization: authHeader
        },
    });
};

export const getProfile = async (profileId, authHeader) => {
    return await axios.get(`${import.meta.env.VITE_URL_API}/profiles/me/${profileId}`, {
        headers: {
            Authorization: authHeader
        },
    });
};

export const getCursorGameData = async (profileId, authHeader) => {
    return await axios.get(`${import.meta.env.VITE_URL_API}/profiles/${profileId}/game-data/cursor`, {
        headers: {
            Authorization: authHeader
        },
    });
};

export const getClickGameData = async (profileId, authHeader) => {
    return await axios.get(`${import.meta.env.VITE_URL_API}/profiles/${profileId}/game-data/click`, {
        headers: {
            Authorization: authHeader
        },
    });
};