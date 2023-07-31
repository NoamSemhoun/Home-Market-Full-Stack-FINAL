// import * as axios from 'axios' 
import axios from 'axios';

const methods = {
  'POST': axios.post,
  'GET': axios.get,
  'PUT': axios.put,
  'DELETE': axios.delete
}


export async function callServer(url,method, instance, dataType, ContentType = 'application/json', extra = {}) {
    try {
    
      const body = {[dataType]:instance, ...extra};
      const {data} = await methods[method.toUpperCase()](url,  body , {headers:{'Content-Type':ContentType}} );

      return data;
    } catch (error) {
      return {error:error}
    }
};