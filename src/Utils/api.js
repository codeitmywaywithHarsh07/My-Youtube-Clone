import axios from 'axios';
const baseUrl="https://youtube138.p.rapidapi.com";
const options = {
  params: {
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': '7efcf60317msh97551c5c37b31fcp1f4380jsn9d58a4588c29',     //process.env.REACT_APP_YOUTUBE_API_KEY
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};



export async function fetchDetailsFromApI(url)
{
    const {data}=await axios.get(`${baseUrl}/${url}`,options);
    return data;
}
