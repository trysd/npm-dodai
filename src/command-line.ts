import * as fs from 'fs-extra';
const { execSync } = require('child_process');

export class CommandLine {
  constructor() {}

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

    // console.log(__filename, __dirname, process.argv)

    let path = "";
    if (binPath.match(/bin\/dodai$/)) {
      path = __dirname.replace(/node_modules\/.+?$/, 'node_modules/') || "";
      path += "dodai/data";
    } else if (binPath.match(/\.bin\/dodai$/)) {
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

    let newName = (process.argv[2] || "");
    newName = newName
      .replace(/^[A-Z]/, function(a) { return a.toLowerCase(); })

    if (!newName.match(/^[a-z][A-Za-z0-9_]+$/)) {
      throw new Error(
        "Specify the module name with a character string that can be used as a class name."
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
  }
}