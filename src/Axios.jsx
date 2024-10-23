import axios from 'axios';
import { Base_url } from './constant/Constant';

const instance = axios.create({
    baseURL: Base_url,
    headers: 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTMyZmIyMDk4NDgyNGZlNTAzMTUwMWQ1NWU1ZmNhZiIsInN1YiI6IjY2MjkxZWUyMjI2YzU2MDE3ZTY4MDc1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JTsa9B45feMQ0ZpRl3W5DRtZekpNT_2EvNTKNqSO1I8'
  });



  export default instance;