// import { MFile } from "./MFile";
import * as fs from 'fs-extra';
const { execSync } = require('child_process');

export class CommandLine {
  constructor() {
    // console.log("hello dodai command line tool, argv:", argv);
  }

  public main(): void {

    try {
      this.exec();
    } catch (e) {
      const err = e === undefined || e == null ? "" : e.toString();
      console.error(
        "\x1b[31m" + err.replace(/\n\n\n.+?$/s, '')
          .replace(/^Error: /, '')
          .replace(/\$ (npx .+)\n/, "\x1b[36m$ $1\n\x1b[31m")
        + "\x1b[0m"
      );
    }

  }

  private exec(): void {

    const binPath = process.argv[1] || "";

    let path = "";
    if (binPath.match(/\.bin\/dodai$/)) {
      path = binPath.replace(/node_modules\/.+?$/, 'node_modules/') || "";
      path += "dodai/data";
    } else {
      path = "./data";
    }

    if (process.argv.length < 3) {
      throw new Error(
        "A module name must be specified."
        + `\n\n  $ npx dodai@latest YourModuleName\n`
      );
    }

    const newName = process.argv[2] || "";

    if (!newName.match(/^[a-z][a-z0-9_]+$/)) {
      throw new Error(
        "Module names must be lowercase alphanumeric and begin with an alphabet."
      );
    }

    fs.copySync(path + "/zumen", './zumen');
    fs.copySync(path + "/zumen.json", './zumen.json');

    const str = fs.readFileSync(path + "/zumen.json").toString();
    const put = str.replace(/xname/g, newName);
    fs.outputFileSync('./zumen.json', put);

    const stdout = execSync('npx zumen@latest');
    console.log(stdout.toString());

    execSync('rm -rf zumen');
    execSync('rm zumen.json');

    // return path;
  }
}