import axios from "axios"
import React from 'react'


const BASE_URL = "http://localhost:4000";


export const getAllTasks = () => {
    return axios.get(`${BASE_URL}/tasks`);
}



export const addTask = (task) => {
    return axios.post(`${BASE_URL}/tasks`,task);
}


export const deleteTask = (id) => {
    return axios.delete(`${BASE_URL}/tasks/${id}`);
}