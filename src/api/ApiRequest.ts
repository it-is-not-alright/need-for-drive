class ApiRequest {
  public baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async request(url: string, init: RequestInit): Promise<Response> {
    const fullUrl = this.baseUrl + url;
    const response = await fetch(fullUrl, init);
    return response;
  }

  public async get<T>(url: string): Promise<T> {
    const response = await this.request(url, { method: 'GET' });
    const result = await response.json();
    return result as Promise<T>;
  }

  public async post(url: string): Promise<Response> {
    return this.request(url, { method: 'POST' });
  }

  public async put(url: string): Promise<Response> {
    return this.request(url, { method: 'PUT' });
  }

  public async remove(url: string): Promise<Response> {
    return this.request(url, { method: 'REMOVE' });
  }
}

export default ApiRequest;
