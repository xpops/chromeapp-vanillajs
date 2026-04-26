# Momentum Clone (Vanilla JS)

A simple Chrome dashboard clone that displays the time, user greetings, a to-do list, random quotes, and local weather information.

## How to Run Locally

To get the weather feature working, you need to set up your own API key from [OpenWeatherMap](https://openweathermap.org/api).

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/chromeapp-vanillajs.git
    ```

2.  **Set up the API Key:**
    - Navigate to the `js/` directory.
    - Copy the `config.example.js` file and rename it to `config.js`.
    - Open `js/config.js` and replace `"YOUR_API_KEY_HERE"` with your actual OpenWeatherMap API key.
    - *Note: `js/config.js` is ignored by Git to keep your API key secure.*

3.  **Launch the App:**
    - Simply open `index.html` in your favorite web browser.

## Features
- Real-time Clock
- Personalized Greeting
- To-Do List (Saved in LocalStorage)
- Random Background & Quotes
- Geolocation-based Weather
