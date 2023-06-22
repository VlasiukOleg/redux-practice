import axios from 'axios';

axios.defaults.baseURL = 'https://646f6ba009ff19b120873a61.mockapi.io';

export const addMaterialToApi = async values => {
  const response = await axios.post('/material', values);
  return response.data;
};

export const getMaterials = async () => {
  const response = await axios.get('/material');
  return response.data;
};

export const deleteMaterials = async id => {
  const response = await axios.delete(`/material/${id}`);
  return response.data;
};
