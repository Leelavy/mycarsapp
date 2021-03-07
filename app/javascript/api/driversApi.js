import axios from 'axios';

const base_url = 'http://localhost:3000/api/v1/';

export const getAllDrivers = () => axios.get(`${base_url}/drivers`);
export const getDriver = (id) => axios.get(`${base_url}/drivers/${id}`);
export const createDriver = (name, email, dateOfBirth, carsIds) => axios.post(`${base_url}/drivers`, { name, email, date_of_birth: dateOfBirth, cars_ids: carsIds });
export const getDriverCars = (id) => axios.get(`${base_url}/drivercars/${id}`);
export const getSelectDrivers = () => axios.get(`${base_url}/selectdrivers`);