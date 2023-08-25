import axios, {
  AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse
} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


type Headers = Readonly<{
  Accept?: 'application/json';
  'Content-Type'?: 'application/json; charset=utf-8';
  'Access-Control-Allow-Credentials'?: boolean,
  'X-Requested-With'?: 'XMLHttpRequest',
}>

const defaultHeaders: Headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
  'Access-Control-Allow-Credentials': true,
  'X-Requested-With': 'XMLHttpRequest',
};

const injectToken = async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
  try {
    const token = await AsyncStorage.getItem('accessToken');

    if (token !== null) {
      config = {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        },
      };
    }

    return config;
  } catch (error) {
    throw new Error(String(error));
  }
};

type MethodRequestConfig<D = undefined> = Omit<AxiosRequestConfig<D>, 'baseURL'>;

export class Http {
  private instance: AxiosInstance;

  private get http(): AxiosInstance {
    return this.instance;
  }

  constructor(config: AxiosRequestConfig & {
    baseURL: string;
    withCredentials: boolean;
    headers?: Headers
  }) {
    const http = axios.create({
      ...config,
      headers: config.headers ?? defaultHeaders,
    });

    if (config.withCredentials) {
      http.interceptors.request.use(injectToken, (error) => Promise.reject(error));
    }

    http.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        return this.handleError(error);
      }
    );

    this.instance = http;
  }

  request<T, R = AxiosResponse<T>>(config: MethodRequestConfig): Promise<R> {
    return this.http.request<T, R>(config);
  }

  get<T, R = AxiosResponse<T>>(url: string, config?: MethodRequestConfig): Promise<R> {
    return this.http.get<T, R>(url, config);
  }

  post<T, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: MethodRequestConfig
  ): Promise<R> {
    return this.http.post<T, R>(url, data, config);
  }

  put<T, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: MethodRequestConfig
  ): Promise<R> {
    return this.http.put<T, R>(url, data, config);
  }

  delete<T, R = AxiosResponse<T>>(url: string, config?: MethodRequestConfig): Promise<R> {
    return this.http.delete<T, R>(url, config);
  }

  private handleError(error: AxiosError) {
    return Promise.reject(error);
  }
}

