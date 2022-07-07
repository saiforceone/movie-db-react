/**
 * Interfaces
 */
export interface APIResponse {
  data: object[];
  error?: string;
  meta?: {
    page: number;
    totalPages: number;
    totalResults: number;
  },
  success: boolean;
}

export interface APIQuery {
  [key: string]: string;
}
