// import * as path from 'path';
// import * as fs from 'fs-extra';

import { MFile } from "./MFile";

export class Dodai {

  constructor() {
    console.log("this is Dodai", process.argv);

    const dataDir = this.searchDataDir();
    console.log("res:", dataDir)
  }

  private searchDataDir(): string {

    const binPath = process.argv[1] || "";

    let path = "";
    if (binPath.match(/\.bin\/dodai$/)) {
      path = binPath.replace(/node_modules\/.+?$/, 'node_modules') || "";
    } else {
      path = "./data";
    }

    const dir = MFile.readDir(path);
    console.log(dir);
    
    return path;
  }
}
