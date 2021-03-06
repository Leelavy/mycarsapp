import axios from 'axios';

const base_url = 'http://localhost:3000/api/v1/';

//index
export const getAllDrivers = () => axios.get(`${base_url}/drivers`);
//show
export const getDriver = (id) => axios.get(`${base_url}/drivers/${id}`);
//create
export const createDriver = (name, email, dateOfBirth, carsIds) => axios.post(`${base_url}/drivers`, { name, email, date_of_birth: dateOfBirth, cars_ids: carsIds });
//get driver's cars and created at data
export const getDriversCars = (id) => axios.get(`${base_url}/drivercars/${id}`);
