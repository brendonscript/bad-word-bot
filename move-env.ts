import * as shell from 'shelljs';

// Copy the env file
shell.cp('-R', '.env', 'build/');
