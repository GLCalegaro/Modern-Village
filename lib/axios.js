import axios from 'axios';

const headers = {
    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
}

export default axios.create({
    baseURL: "https://bayut.p.rapidapi.com",
    headers: headers
});