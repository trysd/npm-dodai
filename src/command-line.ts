import { MFile } from "./MFile";
import * as fs from 'fs-extra';
const { execSync } = require('child_process');

export class CommandLine {
  constructor(argv: string[]) {
    // console.log("hello dodai command line tool, argv:", argv);
  }

  public main(): void {
    const dataDir = this.searchDataDir();
    // console.log("res:", dataDir)
  }

  private searchDataDir(): string {

    const binPath = process.argv[1] || "";

    let path = "";
    if (binPath.match(/\.bin\/dodai$/)) {
      path = binPath.replace(/node_modules\/.+?$/, 'node_modules/') || "";
      path += "dodai/data";
    } else {
      path = "./data";
    }

    // const dir = MFile.readDir(path);
    // console.log(dir);
    // console.log("..update");
    
    fs.copySync(path + "/zumen", './zumen');
    fs.copySync(path + "/zumen.json", './zumen.json');

    const stdout = execSync('npx zumen@latest');
    console.log(stdout.toString());

    return path;
  }
}