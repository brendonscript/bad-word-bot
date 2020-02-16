import { Message } from 'discord.js';

export default class Command {
  private args: string[];
  public readonly message: Message;
  constructor(message: Message) {
    this.args = message.content.substring(1).split(' ');
    this.message = message;
  }

  getArguments(): string[] {
    return this.args;
  }

  getMainCommand(): string {
    return this.args[0];
  }

  getSecondaryCommand(): string {
    return this.args[1];
  }

  getMessage(): Message {
    return this.message;
  }
}
