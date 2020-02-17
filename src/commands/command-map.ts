const commandMap: Record<string, string> = {
  help: 'HelpCommand',
  user: 'UserCommand'
};

export default class CommandMap {
  private static instance: CommandMap;
  private commands: Map<string, string> = new Map();
  private constructor() {}

  public static getInstance() {
    if (!CommandMap.instance) {
      CommandMap.instance = new CommandMap();
    }

    return CommandMap.instance;
  }

  public addCommand(commandName: string, className: string): void {
    if (!this.commands.has(commandName)) {
      this.commands.set(commandName, className);
    }
  }

  public getCommand(commandName: string) {
    if (this.commands.has(commandName)) {
      return this.commands.get(commandName);
    }
    return null;
  }
}
