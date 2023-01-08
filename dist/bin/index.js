#!/usr/bin/env node

/*!
 * Dodai JavaScript Library v0.0.11
 * https://github.com/trysd/npm-dodai#readme
 * Released under the MIT license
 *
 * Date: 2023-01-08T21:26Z
 */
'use strict';

var tslib = require('tslib');
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

var MFile = /** @class */ (function () {
    function MFile() {
    }
    /**
     * Get recursive directory structure
     * @param dirPath
     * @param res
     * @param route
     * @returns
     */
    MFile.readDir = function (dirPath, res, route) {
        var _this = this;
        if (res === void 0) { res = []; }
        if (route === void 0) { route = []; }
        var routesStr = (route.length ? route.join('/') + '/' : '');
        var dirent = fs__namespace.readdirSync(dirPath + '/' + routesStr, { withFileTypes: true });
        dirent.forEach(function (d) {
            if (d.isDirectory()) {
                _this.readDir(dirPath, res, tslib.__spreadArray(tslib.__spreadArray([], route, true), [d.name], false));
            }
            else {
                res.push(routesStr + d.name);
            }
        });
        return res;
    };
    return MFile;
}());

var CommandLine = /** @class */ (function () {
    function CommandLine(argv) {
        console.log("hello dodai command line tool, argv:", argv);
    }
    CommandLine.prototype.main = function () {
        var dataDir = this.searchDataDir();
        console.log("res:", dataDir);
    };
    CommandLine.prototype.searchDataDir = function () {
        var binPath = process.argv[1] || "";
        var path = "";
        if (binPath.match(/\.bin\/dodai$/)) {
            path = binPath.replace(/node_modules\/.+?$/, 'node_modules/') || "";
            path += "dodai/data";
        }
        else {
            path = "./data";
        }
        var dir = MFile.readDir(path);
        console.log(dir);
        return path;
    };
    return CommandLine;
}());

new CommandLine(process.argv).main();

module.exports = CommandLine;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9NRmlsZS50cyIsIi4uLy4uL3NyYy9jb21tYW5kLWxpbmUudHMiLCIuLi8uLi9zcmMvYmluL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzLWV4dHJhJztcblxuZXhwb3J0IGNsYXNzIE1GaWxlIHtcblxuICAvKipcbiAgICogR2V0IHJlY3Vyc2l2ZSBkaXJlY3Rvcnkgc3RydWN0dXJlXG4gICAqIEBwYXJhbSBkaXJQYXRoIFxuICAgKiBAcGFyYW0gcmVzIFxuICAgKiBAcGFyYW0gcm91dGUgXG4gICAqIEByZXR1cm5zIFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyByZWFkRGlyKGRpclBhdGg6IHN0cmluZywgcmVzOiBzdHJpbmdbXSA9IFtdLCByb3V0ZTogc3RyaW5nW10gPSBbXSk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCByb3V0ZXNTdHIgPSAocm91dGUubGVuZ3RoID8gcm91dGUuam9pbignLycpICsgJy8nIDogJycpO1xuICAgIGNvbnN0IGRpcmVudCA9IGZzLnJlYWRkaXJTeW5jKGRpclBhdGggKyAnLycgKyByb3V0ZXNTdHIsIHsgd2l0aEZpbGVUeXBlczogdHJ1ZSB9KTtcbiAgICBkaXJlbnQuZm9yRWFjaChkID0+IHtcbiAgICAgIGlmIChkLmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgdGhpcy5yZWFkRGlyKGRpclBhdGgsIHJlcywgWy4uLnJvdXRlLCBkLm5hbWVdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcy5wdXNoKHJvdXRlc1N0ciArIGQubmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBNRmlsZSB9IGZyb20gXCIuL01GaWxlXCI7XG5cbmV4cG9ydCBjbGFzcyBDb21tYW5kTGluZSB7XG4gIGNvbnN0cnVjdG9yKGFyZ3Y6IHN0cmluZ1tdKSB7XG4gICAgY29uc29sZS5sb2coXCJoZWxsbyBkb2RhaSBjb21tYW5kIGxpbmUgdG9vbCwgYXJndjpcIiwgYXJndik7XG4gIH1cblxuICBwdWJsaWMgbWFpbigpOiB2b2lkIHtcbiAgICBjb25zdCBkYXRhRGlyID0gdGhpcy5zZWFyY2hEYXRhRGlyKCk7XG4gICAgY29uc29sZS5sb2coXCJyZXM6XCIsIGRhdGFEaXIpXG4gIH1cblxuICBwcml2YXRlIHNlYXJjaERhdGFEaXIoKTogc3RyaW5nIHtcblxuICAgIGNvbnN0IGJpblBhdGggPSBwcm9jZXNzLmFyZ3ZbMV0gfHwgXCJcIjtcblxuICAgIGxldCBwYXRoID0gXCJcIjtcbiAgICBpZiAoYmluUGF0aC5tYXRjaCgvXFwuYmluXFwvZG9kYWkkLykpIHtcbiAgICAgIHBhdGggPSBiaW5QYXRoLnJlcGxhY2UoL25vZGVfbW9kdWxlc1xcLy4rPyQvLCAnbm9kZV9tb2R1bGVzLycpIHx8IFwiXCI7XG4gICAgICBwYXRoICs9IFwiZG9kYWkvZGF0YVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXRoID0gXCIuL2RhdGFcIjtcbiAgICB9XG5cbiAgICBjb25zdCBkaXIgPSBNRmlsZS5yZWFkRGlyKHBhdGgpO1xuICAgIGNvbnNvbGUubG9nKGRpcik7XG4gICAgXG4gICAgcmV0dXJuIHBhdGg7XG4gIH1cbn0iLCJpbXBvcnQgeyBDb21tYW5kTGluZSB9IGZyb20gJy4uL2NvbW1hbmQtbGluZSc7XG5uZXcgQ29tbWFuZExpbmUocHJvY2Vzcy5hcmd2KS5tYWluKCk7XG5leHBvcnQgZGVmYXVsdCBDb21tYW5kTGluZTtcbiJdLCJuYW1lcyI6WyJmcyIsIl9fc3ByZWFkQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFBLEtBQUEsa0JBQUEsWUFBQTtBQUFBLElBQUEsU0FBQSxLQUFBLEdBQUE7S0FzQkM7QUFwQkM7Ozs7OztBQU1HO0FBQ1csSUFBQSxLQUFBLENBQUEsT0FBTyxHQUFyQixVQUFzQixPQUFlLEVBQUUs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
