import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { SERVER_API_URL, SITE_ID } from "../config";

class Client {
  private static instance: Client;
  private axiosInstance: AxiosInstance;

  private constructor() {
    this.axiosInstance = axios.create({
      baseURL: SERVER_API_URL,
      headers: {
        "Content-Type": "application/json",
        "X-Site-Id": SITE_ID,
      },
      withCredentials: true,
    });
  }

  public static getInstance(): Client {
    if (!Client.instance) {
      Client.instance = new Client();
    }
    return Client.instance;
  }

  public async get<T = unknown, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    const response = await this.axiosInstance.get<T, R>(url, config);
    return response;
  }

  public async post<T = unknown, R = AxiosResponse<T>, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<R> {
    const response = await this.axiosInstance.post<T, R>(url, data, config);
    return response;
  }

  public async put<T = unknown, R = AxiosResponse<T>, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<R> {
    const response = await this.axiosInstance.put<T, R>(url, data, config);
    return response;
  }

  public async delete<T = unknown, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    const response = await this.axiosInstance.delete<T, R>(url, config);
    return response;
  }
}

export const client = Client.getInstance();
