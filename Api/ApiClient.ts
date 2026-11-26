import { APIRequestContext, expect } from '@playwright/test';

export class ApiClient {
  private token?: string;

  constructor(
    private request: APIRequestContext,
    private baseUrl: string
  ) {}

  setToken(token: string) {
    this.token = token;
  }

  private getAuthHeaders(customHeaders?: Record<string, string>) {
    return {
      ...(this.token ? { Authorization: `Token ${this.token}` } : {}),
      ...customHeaders,
    };
  }

  async post<TResponse = any>(
    endpoint: string,
    data?: unknown,
    expectedStatus = 201
  ): Promise<TResponse> {
    const response = await this.request.post(`${this.baseUrl}${endpoint}`, {
      data,
      headers: this.getAuthHeaders(),
    });
    expect(response.status()).toBe(expectedStatus);
    return (await response.json()) as TResponse;
  }

  async delete(endpoint: string, expectedStatus = 204): Promise<void> {
    const response = await this.request.delete(`${this.baseUrl}${endpoint}`, {
      headers: this.getAuthHeaders(),
    });
    expect(response.status()).toBe(expectedStatus);
  }
}