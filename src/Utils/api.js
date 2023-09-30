import axios from 'axios';
const baseUrl="https://youtube138.p.rapidapi.com";
const options = {
  params: {
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': 'c367b5151amsh2dc13c265f23f8fp1da46djsn6bde368a5e3a',     //process.env.REACT_APP_YOUTUBE_API_KEY
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};



export async function fetchDetailsFromApI(url)
{
    const {data}=await axios.get(`${baseUrl}/${url}`,options);
    return data;
}
