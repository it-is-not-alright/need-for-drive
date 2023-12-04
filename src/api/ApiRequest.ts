import { PostResult } from './types';

class ApiRequest {
  public baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(url: string, init: RequestInit): Promise<T> {
    const fullUrl = this.baseUrl + url;
    const response = await fetch(fullUrl, init);
    const result = await response.json();
    return result as Promise<T>;
  }

  public async get<T>(url: string): Promise<T> {
    const result = await this.request<T>(url, { method: 'GET' });
    return result as Promise<T>;
  }

  public async post<T, U>(url: string, body: T): Promise<U> {
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };
    const result = await this.request<PostResult<U>>(url, init);
    return result.data as Promise<U>;
  }

  public async put(url: string): Promise<Response> {
    return this.request(url, { method: 'PUT' });
  }

  public async remove(url: string): Promise<Response> {
    return this.request(url, { method: 'REMOVE' });
  }
}

export default ApiRequest;
