import * as dotenv from 'dotenv';
import Client from './config/Client';

dotenv.config();

let client: Client;

const init = async () => {
  client = new Client();

  return { client };
};

(async () => {
  const { client } = await init();

  client.start();
})();

export const getClient = () => client;
