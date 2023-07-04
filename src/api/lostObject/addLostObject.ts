export async function createLostObject(
    name:string, 
    isLosted:boolean, 
    description: string,
    location: string,
    owner: string,
    objectImage: string) {
    try {
        let request = await fetch("https://easy-finder.onrender.com/lostObject", {
      method:"POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        isLosted: isLosted,
        description: description,
        location: location,
        owner: owner,
        objectImage: objectImage
      }),
    })
    let result = request.json()
    console.log(result)
    return result 
    } catch (error) {
       console.log(error) 
    }
   
}