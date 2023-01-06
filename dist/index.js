'use strict';

var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.main = function () {
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
    };
    Main.prototype.core = function () {
        //
        console.log("aaa2");
    };
    return Main;
}());

new Main().main();
