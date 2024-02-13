import { Axios } from "axios";

export const getDataAPI = async(url, token) => {
    const res = await Axios.get(`/api/${url}`, {
        headers: {Authorization: token}
    })
    return res;
}

export const postDataAPI = async(url, post, token) => {
    const res = await Axios.post(`/api/${url}`, post, {
        headers: {Authorization: token}
    })
    return res;
}

export const putDataAPI = async(url, post, token) => {
    const res = await Axios.put(`/api/${url}`, post, {
        headers: {Authorization: token}
    })
    return res;
}

export const patchDataAPI = async(url, post, token) => {
    const res = await Axios.patch(`/api/${url}`, post, {
        headers: {Authorization: token}
    })
    return res;
}

export const deleteDataAPI = async(url,  token) => {
    const res = await Axios.delete(`/api/${url}`,  {
        headers: {Authorization: token}
    })
    return res;
}