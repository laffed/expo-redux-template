import { AxiosRequestConfig } from 'axios';
import {
  create,
  HEADERS,
  ApiResponse,
  ApisauceInstance
} from 'apisauce';
import { get as _get } from 'lodash';

import { ResponseError } from './responseError';


export type TUnknownObject = Record<string, unknown>
export type THandlerType<R, E = unknown> = R | undefined | ResponseError<E>;
export type TResponseErrorData = {
  message: string;
}
export type TApiResponse<R> = Promise<THandlerType<R>>

export type TRetryOptions = {
  retries?: number,
  delay?: number,
  timeout?: number
}

export type TApi = {
  instance: ApisauceInstance,
  get: <R, P = TUnknownObject>(path: string, params?: P, config?: AxiosRequestConfig) => TApiResponse<R>,
  del: <R, P = TUnknownObject>(path: string, params?: P, config?: AxiosRequestConfig) => TApiResponse<R>,
  post: <R, D = TUnknownObject>(path: string, data?: D, config?: AxiosRequestConfig) => TApiResponse<R>,
  put: <R, D = TUnknownObject>(path: string, data?: D, config?: AxiosRequestConfig) => TApiResponse<R>,
  patch: <R, P = TUnknownObject>(path: string, params?: P, config?: AxiosRequestConfig) => TApiResponse<R>
}

export interface ICreateAPIParam { baseURL: string, headers?: HEADERS}

export type TCreateAPI = (props: ICreateAPIParam) => TApi;

const DEFAULT_RETRY_OPTIONS = {
  retries: 3,
  delay: 0,
  timeout: 0,
};


/**
 * Function create API instance with provided parameters.
 * @param {Object} obj - createAPI configuration object
 * @param {Object} obj.baseURL - base API url for all requests
 * @param {Object} obj.headers - common headers for all requests
 * @param {Object} obj.config - retry/network config default to { retries: 3, delay: 0, timeout: 0 }
 *
 * Also possible to pass config per request. It will not affect general API configuration
 *
 * Example:
 * api.get<TResponse>('/your_awesome_path', params, {
 *  timeout: 7000,
 *  'axios-retry': { retries: 2 },
 * });
 */
export const createAPI: TCreateAPI = ({ baseURL, headers }) => {
  const handler = <R, E>(res: ApiResponse<R, E>): THandlerType<R, E> => {
    if (res.ok) return res.data;
    const errorMessage = _get(res, 'data.errorMessage', 'unknown network error');
    throw new ResponseError<E>(errorMessage, res.status, res.problem, res.data);
  };

  const api = create({ baseURL, headers });

  return {
    instance: api,
    get: <R, P = TUnknownObject>(path: string, params?: P): TApiResponse<R> =>
      api.get<R, TResponseErrorData>(path, params).then(handler),
    del: <R, P = TUnknownObject>(path: string, params?: P): TApiResponse<R> =>
      api.delete<R>(path, params).then(handler),
    post: <R, D = TUnknownObject>(path: string, data?: D): TApiResponse<R> =>
      api.post<R>(path, data).then(handler),
    put: <R, D = TUnknownObject>(path: string, data?: D): TApiResponse<R> =>
      api.put<R>(path, data).then(handler),
    patch: <R, P = TUnknownObject>(path: string, params?: P): TApiResponse<R> =>
      api.patch<R>(path, params).then(handler),
  };
};
