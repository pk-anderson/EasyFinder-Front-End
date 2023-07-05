export async function createLostObject(
    name:string, 
    isLosted:boolean, 
    description: string,
    location: string,
    owner: string,
    objectImage: string,
    token: string) {
    try {
        let request = await fetch("https://easy-finder.onrender.com/lostObject", {
      method:"POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `${token}`
      },
      body: JSON.stringify({
        name: name,
        isLosted: isLosted,
        description: description,
        location: location,
        owner: "477b67f4-0f75-4e3a-adb1-24ca010a50df",
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