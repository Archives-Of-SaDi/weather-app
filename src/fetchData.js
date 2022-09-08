import axios from 'axios';
import env from 'react-dotenv';

async function fetchData(query) {
  const API_Key = env.API_KEY;
  const URL = 'https://api.openweathermap.org/data/2.5/weather';

  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: 'metric',
      APPID: API_Key,
    },
  });

  return data;
}

export default fetchData;
