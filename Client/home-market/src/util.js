

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
};

 