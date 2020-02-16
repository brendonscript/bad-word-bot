import badWords from './settings/badWordsSettings.json';
import Discord from 'discord.js';

const client = new Discord.Client();

const main = async () => {
  try {
    console.log('test');
    await client.login(process.env.DISCORD_API_KEY);

    client.on('ready', () => {
      console.log(`Logged in as ${client.user.tag}!`);
    });

    // msg.guild.channels
    // channel.fetchMessages
    client.on('message', msg => {
      if (msg.content.startsWith(badWords.prefix)) {
        const args = msg.content.substring(1).split(' ');

        if (args[0] == badWords.command) {
          const mainCommand = args[1];

          if (mainCommand.includes('help')) {
            console.debug('Help');
          } else if (mainCommand.includes('<@!')) {
            const channels = msg.guild.channels;

            channels.forEach(async channel => {
              if (channel.type == 'text') {
                const textChannel = channel as Discord.TextChannel;
                const messages = await textChannel.fetchMessages();
                const user = await msg.guild.fetchMember(
                  mainCommand.replace(/\D/g, '')
                );
                console.log(messages);
                // messages.filter(message => message.author)
                console.log('User: ' + user);
                // messages.filter(msg => msg.author)
              }
            });
            console.debug('User command');
          }
          // } else if (mainCommand.includes('test')) {
          //   const channels = msg.guild.channels;
          //   const channel = msg.channel;

          //   channels.forEach(async channel => {
          //     if (channel.type == 'text') {
          //       const textChannel = channel as Discord.TextChannel;
          //       const messages = await textChannel.fetchMessages({ limit: 10 });
          //       console.log(messages);
          //     }
          //   });
          // }
          // console.debug(args);
        }
      }
    });
  } catch (err) {
    console.log(err.message);
  }
};

export default main;
