/**
 * This is HttpService, function that wrap axios package
 * With this function, caller of HttpService does not have to provide token
 * since it is already called here by calling the Store
 */

import axios, { AxiosRequestConfig, Method, AxiosResponse, CancelTokenSource } from 'axios';
import { fetchTimeout, internetConnectionProblem, resTimeout } from '../constants';

interface IExtendedAxiosRequestConfig extends AxiosRequestConfig {
  sourceToken?: CancelTokenSource;
  /**
   * default, false. Used to attach timeout in request
   */
  useBrowserTimeout?: boolean;
}

const getSignedRequestOptions = (method: Method, data: any, headers: Record<string, unknown> | null, reqOptions?: IExtendedAxiosRequestConfig) => {

  let parseHeaders = {};

  if (headers) parseHeaders = { ...parseHeaders, ...headers };

  let requestOptions: IExtendedAxiosRequestConfig = {
    method,
    headers: parseHeaders,
    data,
    timeout: fetchTimeout,
  };

  if (reqOptions) requestOptions = { ...requestOptions, ...reqOptions };

  return requestOptions;
};

const doFetch = async (requestOptions: IExtendedAxiosRequestConfig, url: string) => {
  if (!window.navigator.onLine) throw new Error(internetConnectionProblem);

  const _requestOptions: IExtendedAxiosRequestConfig = {
    ...requestOptions,
  };

  const abort = _requestOptions.sourceToken || axios.CancelToken.source();
  const timeout = _requestOptions.timeout;

  let _setTimeout: NodeJS.Timeout | undefined;

  if (!_requestOptions.useBrowserTimeout) delete _requestOptions.timeout;

  if (timeout !== undefined) {
    _setTimeout = setTimeout(() => {
      abort.cancel(resTimeout);
    }, timeout);
  }

  _requestOptions.cancelToken = abort.token;

  return axios(url, _requestOptions)
    .then(result => {
      if (_setTimeout) clearTimeout(_setTimeout);

      return result;
    })
    .catch(err => {
      if (_setTimeout) clearTimeout(_setTimeout);

      // here all status < 200 && status >= 300 handled
      // here is info about http status code: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
      let errorMessage = err.response && err.response.data ? err.response.data : err.message;
      errorMessage = errorMessage || JSON.stringify(err);

      if (typeof errorMessage !== 'string') errorMessage = JSON.stringify(errorMessage);

      // custom message if request timeout. In order to make the message more user friendly
      if (err.code === 'ECONNABORTED') errorMessage = resTimeout;

      throw new Error(errorMessage);
    });
};

/**
 * Usage:
 *
 * const functionName = async () => {
 *    const headers = {
 *      // put your additional config headers here,
 *    };
 *
 *    const result = await HttpService.get<DataInterface>('api/url', headers);
 *    console.log(result);
 * }
 *
 */

export const HttpService = {
  get<T = any>(url: string, headers: Record<string, unknown> | null = null, reqOptions?: IExtendedAxiosRequestConfig): Promise<AxiosResponse<T>> {
    const requestOptions = getSignedRequestOptions('GET', null, headers, reqOptions);
    return doFetch(requestOptions, url);
  },
  post<T = any>(url: string, data: any, headers: Record<string, unknown> | null = null, reqOptions?: IExtendedAxiosRequestConfig): Promise<AxiosResponse<T>> {
    const requestOptions = getSignedRequestOptions('POST', data, headers, reqOptions);
    return doFetch(requestOptions, url);
  },
  patch<T = any>(url: string, data: any, headers: Record<string, unknown> | null = null, reqOptions?: IExtendedAxiosRequestConfig): Promise<AxiosResponse<T>> {
    const requestOptions = getSignedRequestOptions('PATCH', data, headers, reqOptions);
    return doFetch(requestOptions, url);
  },
  put<T = any>(url: string, data: any, headers: Record<string, unknown> | null = null, reqOptions?: IExtendedAxiosRequestConfig): Promise<AxiosResponse<T>> {
    const requestOptions = getSignedRequestOptions('PUT', data, headers, reqOptions);
    return doFetch(requestOptions, url);
  },
  delete<T = any>(url: string, headers: Record<string, unknown> | null = null, reqOptions?: IExtendedAxiosRequestConfig): Promise<AxiosResponse<T>> {
    const requestOptions = getSignedRequestOptions('DELETE', null, headers, reqOptions);
    return doFetch(requestOptions, url);
  },
};
