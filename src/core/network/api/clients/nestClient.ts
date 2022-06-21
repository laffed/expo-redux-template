import { Http } from '../creator';


export const nestClientAuth = new Http({
  baseURL: '',
  withCredentials: true,
});

export const nestClient = new Http({
  baseURL: '',
  withCredentials: false,
});
