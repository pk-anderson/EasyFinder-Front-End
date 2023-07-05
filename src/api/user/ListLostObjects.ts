export async function listLostObjects(token: string) {
    try {
      const response = await fetch("https://easy-finder.onrender.com/lostObject", {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `${token}` 
        },
      });
      console.log(response)
  
      const data = await response.json();
      console.log(data)
      return data.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  