import apisauce from 'apisauce';

const client = apisauce.create({
  baseURL: 'http://192.168.1.5:3001',
});

client.addResponseTransform((response) => {
  if (response.status >= 400 || !response.ok) {
    const error = new Error(response.status || response.problem);

    error.status = response.status;
    error.message = response.data;

    throw error;
  }
});
// const setToken = async(token)=>{
// client.addAsyncRequestTransform
// }
export default client;
