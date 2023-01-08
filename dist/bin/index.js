#!/usr/bin/env node

/*!
 * Dodai JavaScript Library v0.0.9
 * https://github.com/trysd/npm-dodai#readme
 * Released under the MIT license
 *
 * Date: 2023-01-08T21:20Z
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
            path = binPath.replace(/node_modules\/.+?$/, 'node_modules') || "";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9NRmlsZS50cyIsIi4uLy4uL3NyYy9jb21tYW5kLWxpbmUudHMiLCIuLi8uLi9zcmMvYmluL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzLWV4dHJhJztcblxuZXhwb3J0IGNsYXNzIE1GaWxlIHtcblxuICAvKipcbiAgICogR2V0IHJlY3Vyc2l2ZSBkaXJlY3Rvcnkgc3RydWN0dXJlXG4gICAqIEBwYXJhbSBkaXJQYXRoIFxuICAgKiBAcGFyYW0gcmVzIFxuICAgKiBAcGFyYW0gcm91dGUgXG4gICAqIEByZXR1cm5zIFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyByZWFkRGlyKGRpclBhdGg6IHN0cmluZywgcmVzOiBzdHJpbmdbXSA9IFtdLCByb3V0ZTogc3RyaW5nW10gPSBbXSk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCByb3V0ZXNTdHIgPSAocm91dGUubGVuZ3RoID8gcm91dGUuam9pbignLycpICsgJy8nIDogJycpO1xuICAgIGNvbnN0IGRpcmVudCA9IGZzLnJlYWRkaXJTeW5jKGRpclBhdGggKyAnLycgKyByb3V0ZXNTdHIsIHsgd2l0aEZpbGVUeXBlczogdHJ1ZSB9KTtcbiAgICBkaXJlbnQuZm9yRWFjaChkID0+IHtcbiAgICAgIGlmIChkLmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgdGhpcy5yZWFkRGlyKGRpclBhdGgsIHJlcywgWy4uLnJvdXRlLCBkLm5hbWVdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcy5wdXNoKHJvdXRlc1N0ciArIGQubmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBNRmlsZSB9IGZyb20gXCIuL01GaWxlXCI7XG5cbmV4cG9ydCBjbGFzcyBDb21tYW5kTGluZSB7XG4gIGNvbnN0cnVjdG9yKGFyZ3Y6IHN0cmluZ1tdKSB7XG4gICAgY29uc29sZS5sb2coXCJoZWxsbyBkb2RhaSBjb21tYW5kIGxpbmUgdG9vbCwgYXJndjpcIiwgYXJndik7XG4gIH1cblxuICBwdWJsaWMgbWFpbigpOiB2b2lkIHtcbiAgICBjb25zdCBkYXRhRGlyID0gdGhpcy5zZWFyY2hEYXRhRGlyKCk7XG4gICAgY29uc29sZS5sb2coXCJyZXM6XCIsIGRhdGFEaXIpXG4gIH1cblxuICBwcml2YXRlIHNlYXJjaERhdGFEaXIoKTogc3RyaW5nIHtcblxuICAgIGNvbnN0IGJpblBhdGggPSBwcm9jZXNzLmFyZ3ZbMV0gfHwgXCJcIjtcblxuICAgIGxldCBwYXRoID0gXCJcIjtcbiAgICBpZiAoYmluUGF0aC5tYXRjaCgvXFwuYmluXFwvZG9kYWkkLykpIHtcbiAgICAgIHBhdGggPSBiaW5QYXRoLnJlcGxhY2UoL25vZGVfbW9kdWxlc1xcLy4rPyQvLCAnbm9kZV9tb2R1bGVzJykgfHwgXCJcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcGF0aCA9IFwiLi9kYXRhXCI7XG4gICAgfVxuXG4gICAgY29uc3QgZGlyID0gTUZpbGUucmVhZERpcihwYXRoKTtcbiAgICBjb25zb2xlLmxvZyhkaXIpO1xuICAgIFxuICAgIHJldHVybiBwYXRoO1xuICB9XG59IiwiaW1wb3J0IHsgQ29tbWFuZExpbmUgfSBmcm9tICcuLi9jb21tYW5kLWxpbmUnO1xubmV3IENvbW1hbmRMaW5lKHByb2Nlc3MuYXJndikubWFpbigpO1xuZXhwb3J0IGRlZmF1bHQgQ29tbWFuZExpbmU7XG4iXSwibmFtZXMiOlsiZnMiLCJfX3NwcmVhZEFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBQSxLQUFBLGtCQUFBLFlBQUE7QUFBQSxJQUFBLFNBQUEsS0FBQSxHQUFBO0tBc0JDO0FBcEJDOzs7Ozs7QUFNRztBQUNXLElBQUEsS0FBQSxDQUFBLE9BQU8sR0FBckIsVUFBc0IsT0FBZSxFQUFFLEdBQWtCLEVBQUUsS0FBb0IsRUFBQTtRQUEvRSxJQVdD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
