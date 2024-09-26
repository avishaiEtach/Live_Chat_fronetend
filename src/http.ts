import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const BASE_URL =
  process.env.NODE_ENV === "production" ? "/api" : "//localhost:8080";

const axios: AxiosInstance = Axios.create({
  withCredentials: true,
});

export const http = {
  get(endpoint: string, data?: any): Promise<any> {
    return ajax(endpoint, "GET", data);
  },
  post(endpoint: string, data: any): Promise<any> {
    return ajax(endpoint, "POST", data);
  },
  put(endpoint: string, data: any): Promise<any> {
    return ajax(endpoint, "PUT", data);
  },
  delete(endpoint: string, data?: any): Promise<any> {
    return ajax(endpoint, "DELETE", data);
  },
};

async function ajax(
  endpoint: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  data: any = null
): Promise<any> {
  try {
    const config: AxiosRequestConfig = {
      url: `${BASE_URL}${endpoint}`,
      method,
      data,
      params: method === "GET" ? data : null,
    };
    const res: AxiosResponse<any> = await axios(config);
    return res.data;
  } catch (err: any) {
    console.log(
      `Had Issues ${method}ing to the backend, endpoint: ${endpoint}, ${
        process.env.NODE_ENV === "production"
          ? ""
          : `with data: ${JSON.stringify(data)}`
      }`
    );
    throw err;
  }
}
