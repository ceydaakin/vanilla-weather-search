# Vanilla Weather Search

A simple, elegant weather application that allows users to search for current weather conditions in any city around the world.

## 🌤️ Features

- **City Search**: Search for weather information by city name
- **Real-time Data**: Get current weather conditions using the SheCodes Weather API
- **Detailed Information**: View temperature, weather conditions, humidity, and wind speed
- **Responsive Design**: Clean and modern UI that works on all devices
- **Live Updates**: Dynamic weather icon based on current conditions

## 🚀 Live Demo

[View Live Demo](https://meteo-shecodes-app.netlify.app/)

## 🛠️ Technologies Used

- **HTML5**: Structure and semantic markup
- **CSS3**: Styling with custom properties and modern layout techniques
- **Vanilla JavaScript**: Dynamic functionality without frameworks
- **Axios**: HTTP client for API requests
- **SheCodes Weather API**: Real-time weather data

## 📋 Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for API requests
- SheCodes Weather API key (included in the project)

## 💻 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ceydaakin/vanilla-weather-search.git
   ```

2. Navigate to the project directory:
   ```bash
   cd vanilla-weather-search
   ```

3. Open `index.html` in your browser:
   ```bash
   open index.html
   ```
   Or simply double-click the `index.html` file.

## 📁 Project Structure

```
vanilla-weather-search/
├── index.html          # Main HTML file
├── src/
│   ├── style.css       # Styles for the application
│   └── index.js        # JavaScript functionality
└── README.md           # Project documentation
```

## 🎨 Usage

1. Open the application in your browser
2. Enter a city name in the search box
3. Click the "Search" button or press Enter
4. View the current weather information:
   - Temperature in Celsius
   - Weather condition description
   - Humidity percentage
   - Wind speed in km/h
   - Current day and time

## 🔑 API Configuration

The application uses the SheCodes Weather API. The API key is already configured in `src/index.js`:

```javascript
let apiKey = "b2a5adcct04b33178913oc335f405433";
```

If you need to use your own API key:
1. Sign up at [SheCodes Weather API](https://www.shecodes.io/learn/apis/weather)
2. Replace the `apiKey` value in `src/index.js` with your own key

## 🌐 Deployment

This project is deployed on Netlify. To deploy your own version:

### Option 1: Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify deploy
```

### Option 2: Netlify Dashboard
1. Push your code to GitHub
2. Log in to [Netlify](https://www.netlify.com/)
3. Click "New site from Git"
4. Select your repository
5. Configure build settings (leave blank for static site)
6. Click "Deploy site"

### Option 3: Drag & Drop
1. Zip your project folder
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag and drop your folder

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 📝 License

This project is open source and available for personal and educational use.

## 👩‍💻 Author

**Ceyda Akın**
- GitHub: [@ceydaakin](https://github.com/ceydaakin)
- Project Repository: [vanilla-weather-search](https://github.com/ceydaakin/vanilla-weather-search)

## 🙏 Acknowledgments

- Weather data provided by [SheCodes Weather API](https://www.shecodes.io/learn/apis/weather)
- Font from [Google Fonts](https://fonts.google.com/) (Roboto)
- Hosted on [Netlify](https://www.netlify.com/)

---

Made with ❤️ by Ceyda Akın
