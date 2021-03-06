import axios from 'axios';

const base_url = 'http://localhost:3000/api/v1/';

//index
export const getAllCars = () => axios.get(`${base_url}/cars`);
//show
export const getCarById = (id) => axios.get(`${base_url}/cars/${id}`);
//create
export const createCar = (title, carType, color, driversIds) => axios.post(`${base_url}/cars`, { title, car_type: carType, color, drivers_ids: driversIds });
//get driver's cars and created at data
export const getDriversCars = (id) => axios.get(`${base_url}/drivercars/${id}`);
