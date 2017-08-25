import Http from './http';

export const getAll = () => {
  return Http.get('/travels');
};

export const getId = (id) => {
  return Http.get(`/travels/${id}`);
};
