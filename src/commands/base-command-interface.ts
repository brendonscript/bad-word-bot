import Command from '../models/command';

export default interface IBaseCommand {
  command: Command;
  run(): void;
}
