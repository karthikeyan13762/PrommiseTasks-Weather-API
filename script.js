// Function to fetch weather data for a given city using the OpenWeatherMap API
function getWord(word) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${word}&appid=05fb5304a0c9a6590a286b7f2ca6d923`)
        .then(response => {
            // Check if the response is successful; otherwise, throw an error
            if (!response.ok) {
                throw new Error(`Failed to fetch data. Status: ${response.status}`);
            }
            // Parse the response as JSON and return the data
            return response.json();
        })
        .then(data => {
            // Display temperature and other weather information on the webpage
            console.log(data.main.temp);

            let list = document.createElement('ul');
            list.style.listStyleType = 'none';
            let listItem = document.createElement('li');
            listItem.innerHTML = 
            `<span>City Name:</span> <b>${data.name}</b></br>
            <span>Temperature:</span> <b>${data.main.temp}°C</b></br>
            <span>Weather:</span> <b>${data.weather[0].main}</b>`;
            list.appendChild(listItem);
            // Display the weather information in the HTML element with class 'meaning-forward'
            document.querySelector('.meaning-forward').innerHTML = '';
            document.querySelector('.meaning-forward').appendChild(list);

            // Return the fetched data
            return data;
        })
        .catch(error => {
            // Handle errors during the fetch process
            console.log('Error fetching the meaning', error);
            throw error;
        });
}

// Event listener for the form submission (e.g., pressing Enter key)
document.querySelector('.dict-form').addEventListener('submit', (event) => {
    event.preventDefault();
    // Get the input value (city name) from the user
    let word = document.querySelector('.word-input').value;

    // Call the getWord function to fetch and display weather information
    getWord(word)
        .then((data) => {
            console.log('Data retrieved:', data);
        })
        .catch((error) => {
            console.log('Error fetching the meaning', error);
        });
});

// Event listener for the button click (e.g., clicking a search button)
document.querySelector('.button-search').addEventListener('click', (event) => {
    event.preventDefault();
    // Get the input value (city name) from the user
    let word = document.querySelector('.word-input').value;

    // Call the getWord function to fetch and display weather information
    getWord(word)
        .then((data) => {
            console.log('Data retrieved:', data);
        })
        .catch((error) => {
            console.log('Error fetching the meaning', error);
        });
});