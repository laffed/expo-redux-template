import { Http } from '../api/creator';


const regresTestClient = new Http({
  baseURL: 'https://reqres.in/api',
  withCredentials: false,
});

export type GetBazzTestRes = {
  data: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  };
  support: {
    url: string;
    text: string;
  }
}

export const getBarTestUser = (userId: number) => {
  return regresTestClient.get<GetBazzTestRes>(`/user/${userId}`);
};
