// import * as axios from 'axios' 
import axios from 'axios';



export async function callServer(url, instance, dataType,extra={}) {

    try {
      
      const body = {[dataType]:instance,...extra};
      const {data} = await axios.post(url,body);

      console.log(data);
      return data;
    } catch (error) {
      return {error:error}
    }
};

export async function postData(url, data, dataType) {

  try {
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
 