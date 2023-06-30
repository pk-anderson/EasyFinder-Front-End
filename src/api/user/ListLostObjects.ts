export async function listLostObjects(token: string) {
    try {
      const response = await fetch("https://easy-finder.onrender.com/lostObject", {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}` 
        },
      });
  
      if (!response.ok) {
        throw new Error('Erro na requisição');
      }
  
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  