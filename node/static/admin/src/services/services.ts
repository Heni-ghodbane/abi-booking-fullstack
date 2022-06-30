import axios from 'axios';
import { Vehicle } from '../shared/types';

const getUsers = () => {
    return axios.get(`http://localhost:8080/api/v1/users`)

}
const getUserById = (id: string) => {
   return axios.get(`http://localhost:8080/api/v1/users/${id}`)
}
const findUsersByLastName = (lastName: string) => {
   return axios.get(`http://localhost:8080/api/v1/users/findByName/${lastName}`)
}

const deleteUserById = (id: string) => {
   return axios.get(`http://localhost:8080/api/v1/users/delete/${id}`)
}

const getVehicles = () => {
    return axios.get(`http://localhost:8080/api/v1/vehicles`)
}

const deleteVehicleById = (id: string) => {
    return axios.get(`http://localhost:8080/api/v1/vehicles/delete/${id}`)
}
 
const createVehicle = (vehicle: Vehicle) => {
    return axios.post(`http://localhost:8080/api/v1/vehicles/create`, vehicle)
}

export {
    getUsers, 
    getUserById, 
    deleteUserById,
    findUsersByLastName, 
    getVehicles, 
    createVehicle,
    deleteVehicleById
}