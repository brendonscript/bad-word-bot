import badWords from './settings/badWordsSettings.json';
import Discord from 'discord.js';
import logger from './util/logger';
import Command from './models/command';
import HelpCommand from './commands/help-command.js';
import UserCommand from './commands/user-command.js';

const client = new Discord.Client();

const main = async () => {
  try {
    client.on('ready', () => {
      logger.info(`Logged in as ${client.user.tag}!`);
    });

    client.on('message', async msg => {
      try {
        if (msg.content.startsWith(badWords.prefix)) {
          const command = new Command(msg);

          if (command.getMainCommand() === badWords.command) {
            const secondaryCommand = command.getSecondaryCommand();

            if (secondaryCommand.includes('help')) {
              const helpCommand = new HelpCommand(command);
              helpCommand.run();
            } else if (secondaryCommand.includes('<@!')) {
              const userCommand = new UserCommand(command);
              await userCommand.run();
            }
          }
        }
      } catch (err) {
        logger.error(err);
      }
    });

    await client.login(process.env.DISCORD_API_KEY);
  } catch (err) {
    logger.error(err);
  }
};

export default main;
