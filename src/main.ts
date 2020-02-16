import badWords from './settings/badWordsSettings.json';
import Discord from 'discord.js';

const client = new Discord.Client();

const main = async () => {
  try {
    client.on('ready', () => {
      console.log(`Logged in as ${client.user.tag}!`);
    });

    // msg.guild.channels
    // channel.fetchMessages
    client.on('message', msg => {
      console.log('message');
      if (msg.content.startsWith(badWords.prefix)) {
        const args = msg.content.substring(1).split(' ');

        if (args[0] === badWords.command) {
          const mainCommand = args[1];

          if (mainCommand.includes('help')) {
            console.debug('Help');
          } else if (mainCommand.includes('<@!')) {
            const channels = msg.guild.channels;

            channels.forEach(async channel => {
              if (channel.type === 'text') {
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
        }
      }
    });

    await client.login(process.env.DISCORD_API_KEY);
  } catch (err) {
    console.log(err.message);
  }
};

export default main;
