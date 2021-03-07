import axios from 'axios';

const base_url = 'http://localhost:3000/api/v1/';

export const getAllCars = () => axios.get(`${base_url}/cars`);
export const getCarById = (id) => axios.get(`${base_url}/cars/${id}`);
export const createCar = (title, carType, color, driversIds) => axios.post(`${base_url}/cars`, { title, car_type: carType, color, drivers_ids: driversIds });
export const getCarDrivers = (id) => axios.get(`${base_url}/cardrivers/${id}`);
export const getSelectCars = () => axios.get(`${base_url}/selectcars`);