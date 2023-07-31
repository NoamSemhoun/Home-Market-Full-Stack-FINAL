// import * as axios from 'axios' 
import axios from 'axios';

const methods = {
  'POST': axios.post,
  'GET': axios.get,
  'PUT': axios.put,
  'DELETE': axios.delete
}

export async function callServer(url,method, instance, dataType, ContentType, extra={}) {

    try {
      
      const body = {[dataType]:instance,...extra};
      const {data} = await methods[method](url,  body , {headers:{'Content-Type':ContentType}} );

      console.log(data);
      return data;
    } catch (error) {
      return {error:error}
    }
};

export async function postData(url, data, dataType) {

  try {
    //url = new URL(url);

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({[dataType]:data})
    });
    return await response.json();
  } catch (error) {
    return {error:error}
  }
}