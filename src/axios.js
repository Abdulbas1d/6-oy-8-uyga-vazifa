import axios from "axios";

export const usersData = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
})

export const weatherData = axios.create({
    baseURL: "https://api.openweathermap.org/data/"
})

export const moviesData = axios.create({
    baseURL: "http://www.omdbapi.com/"
})