#!/usr/bin/env node

/*!
 * Dodai JavaScript Library v0.0.17
 * https://github.com/trysd/npm-dodai#readme
 * Released under the MIT license
 *
 * Date: 2023-01-08T22:36Z
 */
'use strict';

var fs = require('fs-extra');

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var fs__namespace = /*#__PURE__*/_interopNamespace(fs);

// import { MFile } from "./MFile";
var execSync = require('child_process').execSync;
var CommandLine = /** @class */ (function () {
    function CommandLine() {
        // console.log("hello dodai command line tool, argv:", argv);
    }
    CommandLine.prototype.main = function () {
        try {
            this.exec();
        }
        catch (e) {
            var err = e === undefined || e == null ? "" : e.toString();
            console.error("\x1b[31m" + err.replace(/\n\n\n.+?$/s, '')
                .replace(/^Error: /, '')
                .replace(/\$ (npx .+)\n/, "\x1b[36m$ $1\n\x1b[31m")
                + "\x1b[0m");
        }
    };
    CommandLine.prototype.exec = function () {
        var binPath = process.argv[1] || "";
        var path = "";
        if (binPath.match(/\.bin\/dodai$/)) {
            path = binPath.replace(/node_modules\/.+?$/, 'node_modules/') || "";
            path += "dodai/data";
        }
        else {
            path = "./data";
        }
        // const dir = MFile.readDir(path);
        // console.log(dir);
        // console.log("..update");
        if (process.argv.length < 3) {
            throw new Error("A module name must be specified."
                + "\n\n  $ npx dodai@latest YourModuleName\n\nto specify name.");
        }
        var newName = process.argv[2] || "";
        if (!newName.match(/^[a-z][a-z0-9_]+$/)) {
            throw new Error("Module names must be lowercase alphanumeric and begin with an alphabet.");
        }
        fs__namespace.copySync(path + "/zumen", './zumen');
        fs__namespace.copySync(path + "/zumen.json", './zumen.json');
        var str = fs__namespace.readFileSync(path + "/zumen.json").toString();
        var put = str.replace(/xname/g, newName);
        fs__namespace.outputFileSync('./zumen.json', put);
        var stdout = execSync('npx zumen@latest');
        console.log(stdout.toString());
        // return path;
    };
    return CommandLine;
}());

new CommandLine().main();

module.exports = CommandLine;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kLWxpbmUudHMiLCIuLi8uLi9zcmMvYmluL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IE1GaWxlIH0gZnJvbSBcIi4vTUZpbGVcIjtcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzLWV4dHJhJztcbmNvbnN0IHsgZXhlY1N5bmMgfSA9IHJlcXVpcmUoJ2NoaWxkX3Byb2Nlc3MnKTtcblxuZXhwb3J0IGNsYXNzIENvbW1hbmRMaW5lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJoZWxsbyBkb2RhaSBjb21tYW5kIGxpbmUgdG9vbCwgYXJndjpcIiwgYXJndik7XG4gIH1cblxuICBwdWJsaWMgbWFpbigpOiB2b2lkIHtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5leGVjKCk7XG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgY29uc3QgZXJyID0gZSA9PT0gdW5kZWZpbmVkIHx8IGUgPT0gbnVsbCA/IFwiXCIgOiBlLnRvU3RyaW5nKCk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgXCJcXHgxYlszMW1cIiArIGVyci5yZXBsYWNlKC9cXG5cXG5cXG4uKz8kL3MsICcnKVxuICAgICAgICAgIC5yZXBsYWNlKC9eRXJyb3I6IC8sICcnKVxuICAgICAgICAgIC5yZXBsYWNlKC9cXCQgKG5weCAuKylcXG4vLCBcIlxceDFiWzM2bSQgJDFcXG5cXHgxYlszMW1cIikgXG4gICAgICAgICAgKyBcIlxceDFiWzBtXCJcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICB9XG5cbiAgcHJpdmF0ZSBleGVjKCk6IHZvaWQge1xuXG4gICAgY29uc3QgYmluUGF0aCA9IHByb2Nlc3MuYXJndlsxXSB8fCBcIlwiO1xuXG4gICAgbGV0IHBhdGggPSBcIlwiO1xuICAgIGlmIChiaW5QYXRoLm1hdGNoKC9cXC5iaW5cXC9kb2RhaSQvKSkge1xuICAgICAgcGF0aCA9IGJpblBhdGgucmVwbGFjZSgvbm9kZV9tb2R1bGVzXFwvLis/JC8sICdub2RlX21vZHVsZXMvJykgfHwgXCJcIjtcbiAgICAgIHBhdGggKz0gXCJkb2RhaS9kYXRhXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhdGggPSBcIi4vZGF0YVwiO1xuICAgIH1cblxuICAgIC8vIGNvbnN0IGRpciA9IE1GaWxlLnJlYWREaXIocGF0aCk7XG4gICAgLy8gY29uc29sZS5sb2coZGlyKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIi4udXBkYXRlXCIpO1xuICAgIFxuICAgIGlmIChwcm9jZXNzLmFyZ3YubGVuZ3RoIDwgMykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkEgbW9kdWxlIG5hbWUgbXVzdCBiZSBzcGVjaWZpZWQuXCJcbiAgICAgICAgKyBgXFxuXFxuICAkIG5weCBkb2RhaUBsYXRlc3QgWW91ck1vZHVsZU5hbWVcXG5cXG50byBzcGVjaWZ5IG5hbWUuYFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdOYW1lID0gcHJvY2Vzcy5hcmd2WzJdIHx8IFwiXCI7XG5cbiAgICBpZiAoIW5ld05hbWUubWF0Y2goL15bYS16XVthLXowLTlfXSskLykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJNb2R1bGUgbmFtZXMgbXVzdCBiZSBsb3dlcmNhc2UgYWxwaGFudW1lcmljIGFuZCBiZWdpbiB3aXRoIGFuIGFscGhhYmV0LlwiXG4gICAgICApO1xuICAgIH1cblxuICAgIGZzLmNvcHlTeW5jKHBhdGggKyBcIi96dW1lblwiLCAnLi96dW1lbicpO1xuICAgIGZzLmNvcHlTeW5jKHBhdGggKyBcIi96dW1lbi5qc29uXCIsICcuL3p1bWVuLmpzb24nKTtcblxuICAgIGNvbnN0IHN0ciA9IGZzLnJlYWRGaWxlU3luYyhwYXRoICsgXCIvenVtZW4uanNvblwiKS50b1N0cmluZygpO1xuICAgIGNvbnN0IHB1dCA9IHN0ci5yZXBsYWNlKC94bmFtZS9nLCBuZXdOYW1lKTtcbiAgICBmcy5vdXRwdXRGaWxlU3luYygnLi96dW1lbi5qc29uJywgcHV0KTtcblxuICAgIGNvbnN0IHN0ZG91dCA9IGV4ZWNTeW5jKCducHggenVtZW5AbGF0ZXN0Jyk7XG4gICAgY29uc29sZS5sb2coc3Rkb3V0LnRvU3RyaW5nKCkpO1xuXG4gICAgLy8gcmV0dXJuIHBhdGg7XG4gIH1cbn0iLCJpbXBvcnQgeyBDb21tYW5kTGluZSB9IGZyb20gJy4uL2NvbW1hbmQtbGluZSc7XG5uZXcgQ29tbWFuZExpbmUoKS5tYWluKCk7XG5leHBvcnQgZGVmYXVsdCBDb21tYW5kTGluZTtcbiJdLCJuYW1lcyI6WyJmcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFUSxJQUFBLFFBQVEsR0FBSyxPQUFPLENBQUMsZUFBZSxDQUFDLFNBQTdCLENBQThCO0FBRTlDLElBQUEsV0FBQSxrQkFBQSxZQUFBO0FBQ0UsSUFBQSxTQUFBLFdBQUEsR0FBQTs7S0FFQztBQUVNLElBQUEsV0FBQSxDQUFBLFNBQUEsQ0FBQSxJQUFJLEdBQVgsWUFBQTtRQUVJLElBQUk7WUFDRixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDYixTQUFBO0FBQUMsUUFBQSxPQUFNLENBQUMsRUFBRTtZQUNULElBQU0sR0FBRyxHQUFHLENBQUMsS0FBSyxTQUFTLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzdELFlBQUEsT0FBTyxDQUFDLEtBQUssQ0FDWCxVQUFVLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDO0FBQzFDLGlCQUFBLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDO0FBQ3ZCLGlCQUFBLE9BQU8sQ0FBQyxlQUFlLEVBQUUsd0JBQXdCLENBQUM7QUFDakQsa0JBQUEsU0FBUyxDQUNaLENBQUM7QUFDSCxTQUFBO0tBRUosQ0FBQTtBQUVPLElBQUEsV0FBQSxDQUFBLFNBQUEsQ0FBQSxJQUFJLEdBQVosWUFBQTtRQUVFLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXRDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNkLFFBQUEsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQ2xDLElBQUksR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNwRSxJQUFJLElBQUksWUFBWSxDQUFDO0FBQ3RCLFNBQUE7QUFBTSxhQUFBO1lBQ0wsSUFBSSxHQUFHLFFBQVEsQ0FBQztBQUNqQixTQUFBOzs7O0FBTUQsUUFBQSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMzQixNQUFNLElBQUksS0FBSyxDQUNiLGtDQUFrQztBQUNoQyxrQkFBQSw2REFBNkQsQ0FDaEUsQ0FBQztBQUNILFNBQUE7UUFFRCxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUV0QyxRQUFBLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLEVBQUU7QUFDdkMsWUFBQSxNQUFNLElBQUksS0FBSyxDQUNiLHlFQUF5RSxDQUMxRSxDQUFDO0FBQ0gsU0FBQTtRQUVEQSxhQUFFLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDeENBLGFBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLGFBQWEsRUFBRSxjQUFjLENBQUMsQ0FBQztBQUVsRCxRQUFBLElBQU0sR0FBRyxHQUFHQSxhQUFFLENBQUMsWUFBWSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM3RCxJQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMzQyxRQUFBQSxhQUFFLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUV2QyxRQUFBLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7O0tBR2hDLENBQUE7SUFDSCxPQUFDLFdBQUEsQ0FBQTtBQUFELENBQUMsRUFBQTs7QUNuRUQsSUFBSSxXQUFXLEVBQUUsQ0FBQyxJQUFJLEVBQUU7Ozs7In0=
