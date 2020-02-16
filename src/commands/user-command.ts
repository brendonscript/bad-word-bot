import Command from '../models/command';
import BaseCommand from './base-command';
import logger from '../util/logger';
import { TextChannel } from 'discord.js';

export default class UserCommand extends BaseCommand {
  constructor(command: Command) {
    super(command);
  }

  async run(): Promise<void> {
    try {
      const channels = this.command.message.guild.channels;
      // const channels = msg.guild.channels;

      channels.forEach(async channel => {
        if (channel.type === 'text') {
          const textChannel = channel as TextChannel;
          const messages = await textChannel.fetchMessages();
          const user = await this.command.message.guild.fetchMember(
            this.command.getSecondaryCommand().replace(/\D/g, '')
          );
          console.log(messages);
          // messages.filter(message => message.author)
          console.log('User: ' + user);
          // messages.filter(msg => msg.author)
        }
      });
      return Promise.resolve();
    } catch (err) {
      logger.error(err);
    }
  }
}
