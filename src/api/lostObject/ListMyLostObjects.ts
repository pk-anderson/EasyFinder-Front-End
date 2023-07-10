export async function listMyLostObjects(token: string, id: string) {
    try {
      const response = await fetch(`https://easy-finder.onrender.com/lostObject/${id}`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'authorization': `${token}` 
        },
      });
      const data = await response.json();
      return data.data;
    } catch (error) {
      return null;
    }
  }
  