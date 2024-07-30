import { AxiosRequestConfig, AxiosRequestHeaders } from "axios";
import serviceProvider from "./serviceProvider";

export const Get = (
  path: string,
  // params: AxiosRequestConfig
  headers?: AxiosRequestHeaders
) => serviceProvider.get(path, { ...(headers && { headers }) });

export const Post = (
    path: string,
    params: FormData, // Changed to FormData type
    headers?: AxiosRequestHeaders
) => {
    // Ensure headers contain 'Content-Type': 'multipart/form-data'
    const config: AxiosRequestConfig = {
        headers: {
            'Content-Type': 'multipart/form-data',
            ...headers
        }
    };

    return serviceProvider.post(path, params, config);
};

export const Put = (
  path: string,
  params: AxiosRequestConfig,
  headers?: AxiosRequestHeaders
) => serviceProvider.put(path, params, { ...(headers && { headers }) });

export const Patch = (
  path: string,
  params: AxiosRequestConfig,
  headers?: AxiosRequestHeaders
) => serviceProvider.patch(path, params, { ...(headers && { headers }) });

export const Delete = (
  path: string,
  // params: AxiosRequestConfig,
  headers?: AxiosRequestHeaders
) => serviceProvider.delete(path, { ...(headers && { headers }) });
