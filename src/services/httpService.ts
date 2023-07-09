import { RequestParams } from '../types';
import apiClient from './apiClient';

class HTTPService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll<T>(params?: RequestParams) {
    const controller = new AbortController();

    const request = apiClient.get<T>(this.endpoint, {
      signal: controller.signal,
      params: { ...params }
    });

    return { request, cancel: () => controller.abort() };
  }

  get<T>(id: number) {
    return apiClient.get<T>(`${this.endpoint}/${id}`);
  }
}

const create = (endpoint: string) => new HTTPService(endpoint);

export default create;
