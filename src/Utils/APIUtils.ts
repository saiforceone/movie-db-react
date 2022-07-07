import axios from 'axios';
import qs from 'qs';
import {APIQuery, APIResponse} from '../types/APITypes';

/**
 * Axios defaults
 */
axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.get['Access-Control-Allow-Original'] = '*';

/**
 * Convenience imports from env variables
 */
const API_KEY = import.meta.env.VITE_MOVIE_DB_API_KEY;
const API_BASE_URI = import.meta.env.VITE_MOVIE_DB_API_BASE_URI;

/**
 * @class APIUtils
 * @description API utility methods
 */
export default class APIUtils {
  static buildAPIResponse(): APIResponse {
    return {
      data: [],
      success: false
    }
  }

  /**
   * @method getData
   * @param endpoint
   * @param queryParams
   * @description General purpose fetch function for retrieving a list of items
   */
  static async getData(endpoint: string, queryParams?: APIQuery): Promise<APIResponse> {

    const response = this.buildAPIResponse();

    try {
      let query = '';
      if (queryParams) query = `&${qs.stringify(queryParams)}`;

      const url = `${API_BASE_URI}${endpoint}?api_key=${API_KEY}${query}`;
      const {data: responseData} = await axios.get(url);

      response.data = responseData['results'];
      response.meta = {
        page: responseData['page'],
        totalPages: responseData['total_pages'],
        totalResults: responseData['total_results'],
      }
      response.success = response.data.length > 0;

      return response;
    } catch (e) {
      response.error = (e as Error).message;
      return response;
    }
  }
}
