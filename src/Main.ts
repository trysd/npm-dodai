
export default class Main {

  public main(): void {
    try {
      this.core();
    } catch (e) {
      console.error(
        "\x1b[31m" + (e + "").split(/\n\n\n/)[0]
          .replace(/^Error: /, '')
          .replace(/\$ (npx .+)\n/, "\x1b[36m$ $1\n\x1b[31m")
        + "\x1b[0m"
      );
    }
  }

  public core(): void {
    //
  }
}
