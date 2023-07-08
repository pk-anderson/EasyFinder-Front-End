export async function detailUserProfile(token: string | null) {
    try {
      const response = await fetch("https://easy-finder.onrender.com/user", {
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
  