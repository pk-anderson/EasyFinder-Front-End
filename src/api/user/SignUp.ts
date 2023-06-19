export async function userCreate(
    name:string, 
    password:string, 
    email: string,
    phoneNumber: string,
    state: string,
    street: string,
    homeNumber: string) {
    try {
        let request = await fetch("https://easy-finder.onrender.com/user", {
      method:"POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        phoneNumber: phoneNumber,
        state: state,
        street: street,
        homeNumber:homeNumber
      }),
    })
    let result = request.json()
    console.log(result)
    return result 
    } catch (error) {
       console.log(error) 
    }
   
}