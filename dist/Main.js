"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Main {
    main() {
        try {
            this.core();
        }
        catch (e) {
            console.error("\x1b[31m" + (e + "").split(/\n\n\n/)[0]
                .replace(/^Error: /, '')
                .replace(/\$ (npx .+)\n/, "\x1b[36m$ $1\n\x1b[31m")
                + "\x1b[0m");
        }
    }
    core() {
        //
    }
}
exports.default = Main;
