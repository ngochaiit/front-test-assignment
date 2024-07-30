import axios from 'axios';

const CARD_ENDPOINT = 'http://localhost:8001/cards';

export async function fetchCollectionApi() {
  return axios.get(CARD_ENDPOINT);
}
