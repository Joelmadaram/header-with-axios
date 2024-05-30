
const jokes = document.querySelector('#jokes')
const button = document.querySelector('button')


const addNewJoke = async () => {
    const jokeText = await getDadJoke()
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI)
}


const getDadJoke = async () => {
    try {
    const config = {headers: {Accept: 'application/json'}}
    const response = await axios.get('https://icanhazdadjoke.com/', config)
    return response.data.joke;
    } catch (e) {
        return "No Jokes available"
    }
}

button.addEventListener('click',addNewJoke)

