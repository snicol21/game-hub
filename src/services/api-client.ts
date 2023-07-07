import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '0dded5a8bb0246c7a199971c580f6df8',
  },
});
