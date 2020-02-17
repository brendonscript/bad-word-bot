import Command from '../models/command';
import BaseCommand from './base-command';
import logger from '../util/logger';

export default class HelpCommand extends BaseCommand {
  constructor(command: Command) {
    super(command, 'help', 'HelpCommand');
  }

  run(): void {
    logger.info('help');
  }
}
