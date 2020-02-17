import Command from '../models/command';
import logger from '../util/logger';
import IBaseCommand from './base-command-interface';
import CommandMap from './command-map';

export default class BaseCommand implements IBaseCommand {
  public readonly command: Command;

  constructor(command: Command, commandName: string, className: string) {
    this.command = command;
    CommandMap.getInstance().addCommand(commandName, className);
  }

  run(): void {
    logger.warn('default base command implementation');
  }
}
