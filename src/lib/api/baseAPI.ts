import axios, { AxiosInstance, AxiosResponse } from 'axios'

const BASE_URI = process.env.REACT_APP_API_BASE_URL;
const TIMEOUT = process.env.REACT_APP_API_TIMEOUT as unknown as number;

const api: AxiosInstance = axios.create({
  baseURL: BASE_URI,
  timeout: TIMEOUT,
  headers: {
    "Content-Type": "application/json",
    "Authrization": "Bearer token",
  },
  responseType: "json",
});

const apiCall = <P, R>(url: string) => async (param: P): Promise<R> => {
  let res: AxiosResponse<any>  = await api.post(url, param);
  if (res.status === 200) return res.data;
  if (res.status === 204) return null as any;
  if (res.status === 400) throw Error("不正なリクエストです");
  if (res.status === 401) throw Error("認証に失敗しました");
  if (res.status === 403) throw Error("権限がありません");
  if (res.status === 404) throw Error("宛先が見つかりませんでした");
  if (res.status === 405) throw Error("メソッドが許可されていません");

  return res.data;
}

export default apiCall;
