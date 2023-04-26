import axios from '../../utils/axios';
// ?_sort=likes&order=asc

export const getJob = async() => {
    // let queryString = "";
    // queryString += `_sort=${salary}&order=asc`
    // const response = await axios.get(`/jobs/?${queryString}`);
    const response = await axios.get("/jobs")
    return response.data
};

export const addJob = async(data) => {
    const response = await axios.post("/jobs", data);
    return response.data
}

export const editJob = async(id, data) => {
    const response = await axios.put(`/jobs/${id}`, data);
    return response.data
};

export const deleteJob = async(id) =>{
    const response = await axios.delete(`/jobs/${id}`);
    return response.data
}