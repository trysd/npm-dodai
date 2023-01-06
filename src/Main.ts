
export default class Main {

  public main(): void {
    this.core();
    // try {
    //   this.core();
    // } catch (e) {
    //   const en: string = (e + "").toString().replace(/^(.+?)\n\n\n.+$/s, "$1");
    //   console.error(
    //     "\x1b[31m" + en
    //       .replace(/^Error: /, '')
    //       .replace(/\$ (npx .+)\n/, "\x1b[36m$ $1\n\x1b[31m")
    //     + "\x1b[0m"
    //   );
    // }
  }

  public core(): void {
    //
    console.log("aaa2")
  }
}
