export async function userLogin(email:string, password:string) {
    try {
        let request = await fetch("https://easy-finder.onrender.com/user/login", {
      method:"POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
    let result = request.json()
    console.log(result)
    return result 
    } catch (error) {
       console.log(error) 
    }
   
}