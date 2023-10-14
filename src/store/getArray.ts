import ApiRequest from './ApiRequest';
import { apiPrefix } from './constants';
import { RequestResult } from './types';

const apiRequest = new ApiRequest(apiPrefix);

async function getArray<T>(url: string): Promise<T[]> {
  const requestResult: RequestResult<T> =
    await apiRequest.get<RequestResult<T>>(url);
  return requestResult.data;
}

export default getArray;
