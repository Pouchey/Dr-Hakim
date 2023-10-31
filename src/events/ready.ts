import { Client } from 'discord.js';
// import cron from 'node-cron';

export default {
  name: 'ready',
  once: true,
  execute: async (client: Client) => {
    console.log(`Ready! Logged in as ${client.user?.tag}`);

    // // every 2 days
    // cron.schedule(' * * 2 * *', async () => {
    //   console.log('Running a job every 2 days');
    // });
  }
};
