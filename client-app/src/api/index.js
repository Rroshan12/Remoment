import axios from 'axios';

const API = axios.create({ baseURL: 'https://localhost:5001/api' });



export const fetchActivities = () => API.get('/activities');
export const createActivities = (newActivities) => API.post('/activities', newActivities);
export const updateActivities = (id, updatedActivities) => API.put(`/activities/${id}`, updatedActivities);
export const deleteActivities = (id) => API.delete(`/activities/${id}`);

