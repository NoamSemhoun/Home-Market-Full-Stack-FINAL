// import * as axios from 'axios' 
import axios from 'axios';


export async function postData(url, instance, dataType,extra={}) {

    try {
      
      const body = {[dataType]:instance,...extra};
      const {data} = await axios.post(url,body);

      console.log(data);
      return data;
    } catch (error) {
      return {error:error}
    }
};

 