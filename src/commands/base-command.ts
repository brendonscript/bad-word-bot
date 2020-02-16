import Command from '../models/command';
import logger from '../util/logger';

export default class BaseCommand {
  public readonly command: Command;

  constructor(command: Command) {
    this.command = command;
  }

  run(): void {
    logger.warn('default base command implementation');
  }
}
