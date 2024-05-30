const getDadJoke = async () => {
    const config = {headers: {Accept: 'application/json'}}
    const response = await axios.get('https://icanhazdadjoke.com/')
    console.log(response)
}

getDadJoke();

