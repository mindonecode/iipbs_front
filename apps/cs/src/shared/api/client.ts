import axios from "axios";
import type { AxiosInstance, InternalAxiosRequestConfig } from "axios";

interface ApiResponse<T = unknown> {
  data: T;
  status: number;
  message?: string;
}

interface RequestData {
  [key: string]: unknown;
}

class Client {
  private static instance: Client;
  private axiosInstance: AxiosInstance;

  private constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  public static getInstance(): Client {
    if (!Client.instance) {
      Client.instance = new Client();
    }
    return Client.instance;
  }

  public async get<T>(
    url: string,
    config?: InternalAxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    const response = await this.axiosInstance.get<ApiResponse<T>>(url, config);
    return response.data;
  }

  public async post<T>(
    url: string,
    data?: RequestData,
    config?: InternalAxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    const response = await this.axiosInstance.post<ApiResponse<T>>(
      url,
      data,
      config,
    );
    return response.data;
  }

  public async put<T>(
    url: string,
    data?: RequestData,
    config?: InternalAxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    const response = await this.axiosInstance.put<ApiResponse<T>>(
      url,
      data,
      config,
    );
    return response.data;
  }

  public async delete<T>(
    url: string,
    config?: InternalAxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    const response = await this.axiosInstance.delete<ApiResponse<T>>(
      url,
      config,
    );
    return response.data;
  }
}

export const client = Client.getInstance();
