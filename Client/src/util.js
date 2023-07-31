// import * as axios from 'axios' 
import axios from 'axios';

const methods = {
  'POST': axios.post,
  'GET': axios.get,
  'PUT': axios.put,
  'DELETE': axios.delete
}


export async function callServer(url, method, body, ContentType = 'application/json') {
    try {
      const {data} = await methods[method.toUpperCase()](url, body , {headers:{'Content-Type':ContentType}} );
      return data;
    } catch (error) {
      return {error:error}
    }
};


export function callServerPromise(url, method, body, ContentType = 'application/json'){
  return methods[method.toUpperCase()](url, body , {headers:{'Content-Type':ContentType}} );
}