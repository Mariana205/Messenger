const url = 'https://api.chucknorris.io/jokes/random';

async function getRandomJoke() {

    const response = await fetch(url);

    const joke = await response.json();
    return joke.value;
}

export { getRandomJoke };