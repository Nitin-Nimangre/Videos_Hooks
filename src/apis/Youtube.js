import axios from 'axios';

const KEY = 'AIzaSyAkCYaNHPGE3am0eufuitK7Od9A6vE7TuY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: ' snippet',
    maxResults: 5,
    key: KEY,
    type: 'video',
  },
});
