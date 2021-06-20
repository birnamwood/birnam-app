import API from './baseAPI'
import { AxiosResponse } from 'axios'


const helloAPI = {
  get,
};
export default helloAPI;

async function get():Promise<any> {
  let res: AxiosResponse<any>  = await API.post("/api/test");
  return res.data;
}