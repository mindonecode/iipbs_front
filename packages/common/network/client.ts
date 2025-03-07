import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

interface ClientConfig {
  baseURL: string;
  siteId: string;
}

class Client {
  private static instance: Client;
  private axiosInstance: AxiosInstance;

  private constructor(config: ClientConfig) {
    this.axiosInstance = axios.create({
      baseURL: config.baseURL,
      headers: {
        "Content-Type": "application/json",
        "X-Site-Id": config.siteId,
      },
      withCredentials: true,
    });
  }

  public static getInstance(config: ClientConfig): Client {
    if (!Client.instance) {
      Client.instance = new Client(config);
    }
    return Client.instance;
  }

  public async get<T = unknown, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    const response = await this.axiosInstance.get<T, R>(url, config);
    return response;
  }

  public async post<T = unknown, R = AxiosResponse<T>, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R> {
    const response = await this.axiosInstance.post<T, R>(url, data, config);
    return response;
  }

  public async put<T = unknown, R = AxiosResponse<T>, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R> {
    const response = await this.axiosInstance.put<T, R>(url, data, config);
    return response;
  }

  public async delete<T = unknown, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    const response = await this.axiosInstance.delete<T, R>(url, config);
    return response;
  }
}

export type { ClientConfig };
export { Client };
