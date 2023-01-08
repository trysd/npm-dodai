// import * as path from 'path';
// import * as fs from 'fs-extra';

import { CommandLine } from './command-line';

export class Dodai {

  constructor() {
    console.log("this is Dodai", process.argv);
    new CommandLine(process.argv).main();
  }
}
