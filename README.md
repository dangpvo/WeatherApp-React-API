# 🌤️ WeatherApp - React + OpenWeatherMap API

A simple and responsive weather application built with **React.js**, using the **OpenWeatherMap API** to fetch real-time weather data for any city in the world.

## 🚀 Features

- 🔍 Search for any city worldwide  
- 📍 Displays temperature, humidity, wind speed, and location  
- 🌙 Dynamic icons based on weather condition  
- 💻 Responsive design, works on desktop and mobile  
- ⚛️ Built with functional React components and hooks  

## 🔧 Technologies Used

- React.js (Create React App)
- OpenWeatherMap API
- `fetch` API for HTTP requests
- CSS for styling

## 📦 Installation

```bash
git clone https://github.com/dangpvo/WeatherApp-React-API.git
cd WeatherApp-React-API
npm install
```

## 🔑 API Key Setup

1. Register at [OpenWeatherMap](https://openweathermap.org/api) to get your API key.
2. Open a `.env` file in the root directory of the project.
3. Update the following line:

```env
VITE_APP_ID=your_api_key_here
```

> Make sure to restart your development server after setting the environment variable.

## ▶️ Run the App

```bash
npm run dev
```

## 📁 Project Structure

```
WeatherApp-React-API/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.js
│   ├── index.js
│   └── App.css
├── .env
├── package.json
└── README.md
```
