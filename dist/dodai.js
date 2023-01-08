/*!
 * Dodai JavaScript Library v0.0.8
 * https://github.com/trysd/npm-dodai#readme
 * Released under the MIT license
 *
 * Date: 2023-01-08T19:48Z
 */
var Dodai = (function (require$$0$2, require$$0, require$$0$1, require$$4, require$$5, require$$1) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var require$$0__default$2 = /*#__PURE__*/_interopDefaultLegacy(require$$0$2);
  var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);
  var require$$0__default$1 = /*#__PURE__*/_interopDefaultLegacy(require$$0$1);
  var require$$4__default = /*#__PURE__*/_interopDefaultLegacy(require$$4);
  var require$$5__default = /*#__PURE__*/_interopDefaultLegacy(require$$5);
  var require$$1__default = /*#__PURE__*/_interopDefaultLegacy(require$$1);

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
      to[j] = from[i];
    }

    return to;
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  var fs$h = {};

  var universalify$1 = {};

  universalify$1.fromCallback = function (fn) {
    return Object.defineProperty(function () {
      var _this = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (typeof args[args.length - 1] === 'function') fn.apply(this, args);else {
        return new Promise(function (resolve, reject) {
          fn.call.apply(fn, [_this].concat(args, [function (err, res) {
            return err != null ? reject(err) : resolve(res);
          }]));
        });
      }
    }, 'name', {
      value: fn.name
    });
  };

  universalify$1.fromPromise = function (fn) {
    return Object.defineProperty(function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var cb = args[args.length - 1];
      if (typeof cb !== 'function') return fn.apply(this, args);else fn.apply(this, args.slice(0, -1)).then(function (r) {
        return cb(null, r);
      }, cb);
    }, 'name', {
      value: fn.name
    });
  };

  var constants = require$$0__default["default"];
  var origCwd = process.cwd;
  var cwd = null;
  var platform = process.env.GRACEFUL_FS_PLATFORM || process.platform;

  process.cwd = function () {
    if (!cwd) cwd = origCwd.call(process);
    return cwd;
  };

  try {
    process.cwd();
  } catch (er) {} // This check is needed until node.js 12 is required


  if (typeof process.chdir === 'function') {
    var chdir = process.chdir;

    process.chdir = function (d) {
      cwd = null;
      chdir.call(process, d);
    };

    if (Object.setPrototypeOf) Object.setPrototypeOf(process.chdir, chdir);
  }

  var polyfills$1 = patch$1;

  function patch$1(fs) {
    // (re-)implement some things that are known busted or missing.
    // lchmod, broken prior to 0.6.2
    // back-port the fix here.
    if (constants.hasOwnProperty('O_SYMLINK') && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)) {
      patchLchmod(fs);
    } // lutimes implementation, or no-op


    if (!fs.lutimes) {
      patchLutimes(fs);
    } // https://github.com/isaacs/node-graceful-fs/issues/4
    // Chown should not fail on einval or eperm if non-root.
    // It should not fail on enosys ever, as this just indicates
    // that a fs doesn't support the intended operation.


    fs.chown = chownFix(fs.chown);
    fs.fchown = chownFix(fs.fchown);
    fs.lchown = chownFix(fs.lchown);
    fs.chmod = chmodFix(fs.chmod);
    fs.fchmod = chmodFix(fs.fchmod);
    fs.lchmod = chmodFix(fs.lchmod);
    fs.chownSync = chownFixSync(fs.chownSync);
    fs.fchownSync = chownFixSync(fs.fchownSync);
    fs.lchownSync = chownFixSync(fs.lchownSync);
    fs.chmodSync = chmodFixSync(fs.chmodSync);
    fs.fchmodSync = chmodFixSync(fs.fchmodSync);
    fs.lchmodSync = chmodFixSync(fs.lchmodSync);
    fs.stat = statFix(fs.stat);
    fs.fstat = statFix(fs.fstat);
    fs.lstat = statFix(fs.lstat);
    fs.statSync = statFixSync(fs.statSync);
    fs.fstatSync = statFixSync(fs.fstatSync);
    fs.lstatSync = statFixSync(fs.lstatSync); // if lchmod/lchown do not exist, then make them no-ops

    if (fs.chmod && !fs.lchmod) {
      fs.lchmod = function (path, mode, cb) {
        if (cb) process.nextTick(cb);
      };

      fs.lchmodSync = function () {};
    }

    if (fs.chown && !fs.lchown) {
      fs.lchown = function (path, uid, gid, cb) {
        if (cb) process.nextTick(cb);
      };

      fs.lchownSync = function () {};
    } // on Windows, A/V software can lock the directory, causing this
    // to fail with an EACCES or EPERM if the directory contains newly
    // created files.  Try again on failure, for up to 60 seconds.
    // Set the timeout this long because some Windows Anti-Virus, such as Parity
    // bit9, may lock files for up to a minute, causing npm package install
    // failures. Also, take care to yield the scheduler. Windows scheduling gives
    // CPU to a busy looping process, which can cause the program causing the lock
    // contention to be starved of CPU by node, so the contention doesn't resolve.


    if (platform === "win32") {
      fs.rename = typeof fs.rename !== 'function' ? fs.rename : function (fs$rename) {
        function rename(from, to, cb) {
          var start = Date.now();
          var backoff = 0;
          fs$rename(from, to, function CB(er) {
            if (er && (er.code === "EACCES" || er.code === "EPERM") && Date.now() - start < 60000) {
              setTimeout(function () {
                fs.stat(to, function (stater, st) {
                  if (stater && stater.code === "ENOENT") fs$rename(from, to, CB);else cb(er);
                });
              }, backoff);
              if (backoff < 100) backoff += 10;
              return;
            }

            if (cb) cb(er);
          });
        }

        if (Object.setPrototypeOf) Object.setPrototypeOf(rename, fs$rename);
        return rename;
      }(fs.rename);
    } // if read() returns EAGAIN, then just try it again.


    fs.read = typeof fs.read !== 'function' ? fs.read : function (fs$read) {
      function read(fd, buffer, offset, length, position, callback_) {
        var _callback;

        if (callback_ && typeof callback_ === 'function') {
          var eagCounter = 0;

          _callback = function callback(er, _, __) {
            if (er && er.code === 'EAGAIN' && eagCounter < 10) {
              eagCounter++;
              return fs$read.call(fs, fd, buffer, offset, length, position, _callback);
            }

            callback_.apply(this, arguments);
          };
        }

        return fs$read.call(fs, fd, buffer, offset, length, position, _callback);
      } // This ensures `util.promisify` works as it does for native `fs.read`.


      if (Object.setPrototypeOf) Object.setPrototypeOf(read, fs$read);
      return read;
    }(fs.read);
    fs.readSync = typeof fs.readSync !== 'function' ? fs.readSync : function (fs$readSync) {
      return function (fd, buffer, offset, length, position) {
        var eagCounter = 0;

        while (true) {
          try {
            return fs$readSync.call(fs, fd, buffer, offset, length, position);
          } catch (er) {
            if (er.code === 'EAGAIN' && eagCounter < 10) {
              eagCounter++;
              continue;
            }

            throw er;
          }
        }
      };
    }(fs.readSync);

    function patchLchmod(fs) {
      fs.lchmod = function (path, mode, callback) {
        fs.open(path, constants.O_WRONLY | constants.O_SYMLINK, mode, function (err, fd) {
          if (err) {
            if (callback) callback(err);
            return;
          } // prefer to return the chmod error, if one occurs,
          // but still try to close, and report closing errors if they occur.


          fs.fchmod(fd, mode, function (err) {
            fs.close(fd, function (err2) {
              if (callback) callback(err || err2);
            });
          });
        });
      };

      fs.lchmodSync = function (path, mode) {
        var fd = fs.openSync(path, constants.O_WRONLY | constants.O_SYMLINK, mode); // prefer to return the chmod error, if one occurs,
        // but still try to close, and report closing errors if they occur.

        var threw = true;
        var ret;

        try {
          ret = fs.fchmodSync(fd, mode);
          threw = false;
        } finally {
          if (threw) {
            try {
              fs.closeSync(fd);
            } catch (er) {}
          } else {
            fs.closeSync(fd);
          }
        }

        return ret;
      };
    }

    function patchLutimes(fs) {
      if (constants.hasOwnProperty("O_SYMLINK") && fs.futimes) {
        fs.lutimes = function (path, at, mt, cb) {
          fs.open(path, constants.O_SYMLINK, function (er, fd) {
            if (er) {
              if (cb) cb(er);
              return;
            }

            fs.futimes(fd, at, mt, function (er) {
              fs.close(fd, function (er2) {
                if (cb) cb(er || er2);
              });
            });
          });
        };

        fs.lutimesSync = function (path, at, mt) {
          var fd = fs.openSync(path, constants.O_SYMLINK);
          var ret;
          var threw = true;

          try {
            ret = fs.futimesSync(fd, at, mt);
            threw = false;
          } finally {
            if (threw) {
              try {
                fs.closeSync(fd);
              } catch (er) {}
            } else {
              fs.closeSync(fd);
            }
          }

          return ret;
        };
      } else if (fs.futimes) {
        fs.lutimes = function (_a, _b, _c, cb) {
          if (cb) process.nextTick(cb);
        };

        fs.lutimesSync = function () {};
      }
    }

    function chmodFix(orig) {
      if (!orig) return orig;
      return function (target, mode, cb) {
        return orig.call(fs, target, mode, function (er) {
          if (chownErOk(er)) er = null;
          if (cb) cb.apply(this, arguments);
        });
      };
    }

    function chmodFixSync(orig) {
      if (!orig) return orig;
      return function (target, mode) {
        try {
          return orig.call(fs, target, mode);
        } catch (er) {
          if (!chownErOk(er)) throw er;
        }
      };
    }

    function chownFix(orig) {
      if (!orig) return orig;
      return function (target, uid, gid, cb) {
        return orig.call(fs, target, uid, gid, function (er) {
          if (chownErOk(er)) er = null;
          if (cb) cb.apply(this, arguments);
        });
      };
    }

    function chownFixSync(orig) {
      if (!orig) return orig;
      return function (target, uid, gid) {
        try {
          return orig.call(fs, target, uid, gid);
        } catch (er) {
          if (!chownErOk(er)) throw er;
        }
      };
    }

    function statFix(orig) {
      if (!orig) return orig; // Older versions of Node erroneously returned signed integers for
      // uid + gid.

      return function (target, options, cb) {
        if (typeof options === 'function') {
          cb = options;
          options = null;
        }

        function callback(er, stats) {
          if (stats) {
            if (stats.uid < 0) stats.uid += 0x100000000;
            if (stats.gid < 0) stats.gid += 0x100000000;
          }

          if (cb) cb.apply(this, arguments);
        }

        return options ? orig.call(fs, target, options, callback) : orig.call(fs, target, callback);
      };
    }

    function statFixSync(orig) {
      if (!orig) return orig; // Older versions of Node erroneously returned signed integers for
      // uid + gid.

      return function (target, options) {
        var stats = options ? orig.call(fs, target, options) : orig.call(fs, target);

        if (stats) {
          if (stats.uid < 0) stats.uid += 0x100000000;
          if (stats.gid < 0) stats.gid += 0x100000000;
        }

        return stats;
      };
    } // ENOSYS means that the fs doesn't support the op. Just ignore
    // that, because it doesn't matter.
    //
    // if there's no getuid, or if getuid() is something other
    // than 0, and the error is EINVAL or EPERM, then just ignore
    // it.
    //
    // This specific case is a silent failure in cp, install, tar,
    // and most other unix tools that manage permissions.
    //
    // When running as root, or if other types of errors are
    // encountered, then it's strict.


    function chownErOk(er) {
      if (!er) return true;
      if (er.code === "ENOSYS") return true;
      var nonroot = !process.getuid || process.getuid() !== 0;

      if (nonroot) {
        if (er.code === "EINVAL" || er.code === "EPERM") return true;
      }

      return false;
    }
  }

  var Stream = require$$0__default$1["default"].Stream;
  var legacyStreams = legacy$1;

  function legacy$1(fs) {
    return {
      ReadStream: ReadStream,
      WriteStream: WriteStream
    };

    function ReadStream(path, options) {
      if (!(this instanceof ReadStream)) return new ReadStream(path, options);
      Stream.call(this);
      var self = this;
      this.path = path;
      this.fd = null;
      this.readable = true;
      this.paused = false;
      this.flags = 'r';
      this.mode = 438;
      /*=0666*/

      this.bufferSize = 64 * 1024;
      options = options || {}; // Mixin options into this

      var keys = Object.keys(options);

      for (var index = 0, length = keys.length; index < length; index++) {
        var key = keys[index];
        this[key] = options[key];
      }

      if (this.encoding) this.setEncoding(this.encoding);

      if (this.start !== undefined) {
        if ('number' !== typeof this.start) {
          throw TypeError('start must be a Number');
        }

        if (this.end === undefined) {
          this.end = Infinity;
        } else if ('number' !== typeof this.end) {
          throw TypeError('end must be a Number');
        }

        if (this.start > this.end) {
          throw new Error('start must be <= end');
        }

        this.pos = this.start;
      }

      if (this.fd !== null) {
        process.nextTick(function () {
          self._read();
        });
        return;
      }

      fs.open(this.path, this.flags, this.mode, function (err, fd) {
        if (err) {
          self.emit('error', err);
          self.readable = false;
          return;
        }

        self.fd = fd;
        self.emit('open', fd);

        self._read();
      });
    }

    function WriteStream(path, options) {
      if (!(this instanceof WriteStream)) return new WriteStream(path, options);
      Stream.call(this);
      this.path = path;
      this.fd = null;
      this.writable = true;
      this.flags = 'w';
      this.encoding = 'binary';
      this.mode = 438;
      /*=0666*/

      this.bytesWritten = 0;
      options = options || {}; // Mixin options into this

      var keys = Object.keys(options);

      for (var index = 0, length = keys.length; index < length; index++) {
        var key = keys[index];
        this[key] = options[key];
      }

      if (this.start !== undefined) {
        if ('number' !== typeof this.start) {
          throw TypeError('start must be a Number');
        }

        if (this.start < 0) {
          throw new Error('start must be >= zero');
        }

        this.pos = this.start;
      }

      this.busy = false;
      this._queue = [];

      if (this.fd === null) {
        this._open = fs.open;

        this._queue.push([this._open, this.path, this.flags, this.mode, undefined]);

        this.flush();
      }
    }
  }

  var clone_1 = clone$1;

  var getPrototypeOf = Object.getPrototypeOf || function (obj) {
    return obj.__proto__;
  };

  function clone$1(obj) {
    if (obj === null || _typeof(obj) !== 'object') return obj;
    if (obj instanceof Object) var copy = {
      __proto__: getPrototypeOf(obj)
    };else var copy = Object.create(null);
    Object.getOwnPropertyNames(obj).forEach(function (key) {
      Object.defineProperty(copy, key, Object.getOwnPropertyDescriptor(obj, key));
    });
    return copy;
  }

  var fs$g = require$$0__default$2["default"];
  var polyfills = polyfills$1;
  var legacy = legacyStreams;
  var clone = clone_1;
  var util$1 = require$$4__default["default"];
  /* istanbul ignore next - node 0.x polyfill */

  var gracefulQueue;
  var previousSymbol;
  /* istanbul ignore else - node 0.x polyfill */

  if (typeof Symbol === 'function' && typeof Symbol["for"] === 'function') {
    gracefulQueue = Symbol["for"]('graceful-fs.queue'); // This is used in testing by future versions

    previousSymbol = Symbol["for"]('graceful-fs.previous');
  } else {
    gracefulQueue = '___graceful-fs.queue';
    previousSymbol = '___graceful-fs.previous';
  }

  function noop() {}

  function publishQueue(context, queue) {
    Object.defineProperty(context, gracefulQueue, {
      get: function get() {
        return queue;
      }
    });
  }

  var debug = noop;
  if (util$1.debuglog) debug = util$1.debuglog('gfs4');else if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || '')) debug = function debug() {
    var m = util$1.format.apply(util$1, arguments);
    m = 'GFS4: ' + m.split(/\n/).join('\nGFS4: ');
    console.error(m);
  }; // Once time initialization

  if (!fs$g[gracefulQueue]) {
    // This queue can be shared by multiple loaded instances
    var queue = commonjsGlobal[gracefulQueue] || [];
    publishQueue(fs$g, queue); // Patch fs.close/closeSync to shared queue version, because we need
    // to retry() whenever a close happens *anywhere* in the program.
    // This is essential when multiple graceful-fs instances are
    // in play at the same time.

    fs$g.close = function (fs$close) {
      function close(fd, cb) {
        return fs$close.call(fs$g, fd, function (err) {
          // This function uses the graceful-fs shared queue
          if (!err) {
            resetQueue();
          }

          if (typeof cb === 'function') cb.apply(this, arguments);
        });
      }

      Object.defineProperty(close, previousSymbol, {
        value: fs$close
      });
      return close;
    }(fs$g.close);

    fs$g.closeSync = function (fs$closeSync) {
      function closeSync(fd) {
        // This function uses the graceful-fs shared queue
        fs$closeSync.apply(fs$g, arguments);
        resetQueue();
      }

      Object.defineProperty(closeSync, previousSymbol, {
        value: fs$closeSync
      });
      return closeSync;
    }(fs$g.closeSync);

    if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || '')) {
      process.on('exit', function () {
        debug(fs$g[gracefulQueue]);
        require$$5__default["default"].equal(fs$g[gracefulQueue].length, 0);
      });
    }
  }

  if (!commonjsGlobal[gracefulQueue]) {
    publishQueue(commonjsGlobal, fs$g[gracefulQueue]);
  }

  var gracefulFs = patch(clone(fs$g));

  if (process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !fs$g.__patched) {
    gracefulFs = patch(fs$g);
    fs$g.__patched = true;
  }

  function patch(fs) {
    // Everything that references the open() function needs to be in here
    polyfills(fs);
    fs.gracefulify = patch;
    fs.createReadStream = createReadStream;
    fs.createWriteStream = createWriteStream;
    var fs$readFile = fs.readFile;
    fs.readFile = readFile;

    function readFile(path, options, cb) {
      if (typeof options === 'function') cb = options, options = null;
      return go$readFile(path, options, cb);

      function go$readFile(path, options, cb, startTime) {
        return fs$readFile(path, options, function (err) {
          if (err && (err.code === 'EMFILE' || err.code === 'ENFILE')) enqueue([go$readFile, [path, options, cb], err, startTime || Date.now(), Date.now()]);else {
            if (typeof cb === 'function') cb.apply(this, arguments);
          }
        });
      }
    }

    var fs$writeFile = fs.writeFile;
    fs.writeFile = writeFile;

    function writeFile(path, data, options, cb) {
      if (typeof options === 'function') cb = options, options = null;
      return go$writeFile(path, data, options, cb);

      function go$writeFile(path, data, options, cb, startTime) {
        return fs$writeFile(path, data, options, function (err) {
          if (err && (err.code === 'EMFILE' || err.code === 'ENFILE')) enqueue([go$writeFile, [path, data, options, cb], err, startTime || Date.now(), Date.now()]);else {
            if (typeof cb === 'function') cb.apply(this, arguments);
          }
        });
      }
    }

    var fs$appendFile = fs.appendFile;
    if (fs$appendFile) fs.appendFile = appendFile;

    function appendFile(path, data, options, cb) {
      if (typeof options === 'function') cb = options, options = null;
      return go$appendFile(path, data, options, cb);

      function go$appendFile(path, data, options, cb, startTime) {
        return fs$appendFile(path, data, options, function (err) {
          if (err && (err.code === 'EMFILE' || err.code === 'ENFILE')) enqueue([go$appendFile, [path, data, options, cb], err, startTime || Date.now(), Date.now()]);else {
            if (typeof cb === 'function') cb.apply(this, arguments);
          }
        });
      }
    }

    var fs$copyFile = fs.copyFile;
    if (fs$copyFile) fs.copyFile = copyFile;

    function copyFile(src, dest, flags, cb) {
      if (typeof flags === 'function') {
        cb = flags;
        flags = 0;
      }

      return go$copyFile(src, dest, flags, cb);

      function go$copyFile(src, dest, flags, cb, startTime) {
        return fs$copyFile(src, dest, flags, function (err) {
          if (err && (err.code === 'EMFILE' || err.code === 'ENFILE')) enqueue([go$copyFile, [src, dest, flags, cb], err, startTime || Date.now(), Date.now()]);else {
            if (typeof cb === 'function') cb.apply(this, arguments);
          }
        });
      }
    }

    var fs$readdir = fs.readdir;
    fs.readdir = readdir;
    var noReaddirOptionVersions = /^v[0-5]\./;

    function readdir(path, options, cb) {
      if (typeof options === 'function') cb = options, options = null;
      var go$readdir = noReaddirOptionVersions.test(process.version) ? function go$readdir(path, options, cb, startTime) {
        return fs$readdir(path, fs$readdirCallback(path, options, cb, startTime));
      } : function go$readdir(path, options, cb, startTime) {
        return fs$readdir(path, options, fs$readdirCallback(path, options, cb, startTime));
      };
      return go$readdir(path, options, cb);

      function fs$readdirCallback(path, options, cb, startTime) {
        return function (err, files) {
          if (err && (err.code === 'EMFILE' || err.code === 'ENFILE')) enqueue([go$readdir, [path, options, cb], err, startTime || Date.now(), Date.now()]);else {
            if (files && files.sort) files.sort();
            if (typeof cb === 'function') cb.call(this, err, files);
          }
        };
      }
    }

    if (process.version.substr(0, 4) === 'v0.8') {
      var legStreams = legacy(fs);
      ReadStream = legStreams.ReadStream;
      WriteStream = legStreams.WriteStream;
    }

    var fs$ReadStream = fs.ReadStream;

    if (fs$ReadStream) {
      ReadStream.prototype = Object.create(fs$ReadStream.prototype);
      ReadStream.prototype.open = ReadStream$open;
    }

    var fs$WriteStream = fs.WriteStream;

    if (fs$WriteStream) {
      WriteStream.prototype = Object.create(fs$WriteStream.prototype);
      WriteStream.prototype.open = WriteStream$open;
    }

    Object.defineProperty(fs, 'ReadStream', {
      get: function get() {
        return ReadStream;
      },
      set: function set(val) {
        ReadStream = val;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(fs, 'WriteStream', {
      get: function get() {
        return WriteStream;
      },
      set: function set(val) {
        WriteStream = val;
      },
      enumerable: true,
      configurable: true
    }); // legacy names

    var FileReadStream = ReadStream;
    Object.defineProperty(fs, 'FileReadStream', {
      get: function get() {
        return FileReadStream;
      },
      set: function set(val) {
        FileReadStream = val;
      },
      enumerable: true,
      configurable: true
    });
    var FileWriteStream = WriteStream;
    Object.defineProperty(fs, 'FileWriteStream', {
      get: function get() {
        return FileWriteStream;
      },
      set: function set(val) {
        FileWriteStream = val;
      },
      enumerable: true,
      configurable: true
    });

    function ReadStream(path, options) {
      if (this instanceof ReadStream) return fs$ReadStream.apply(this, arguments), this;else return ReadStream.apply(Object.create(ReadStream.prototype), arguments);
    }

    function ReadStream$open() {
      var that = this;
      open(that.path, that.flags, that.mode, function (err, fd) {
        if (err) {
          if (that.autoClose) that.destroy();
          that.emit('error', err);
        } else {
          that.fd = fd;
          that.emit('open', fd);
          that.read();
        }
      });
    }

    function WriteStream(path, options) {
      if (this instanceof WriteStream) return fs$WriteStream.apply(this, arguments), this;else return WriteStream.apply(Object.create(WriteStream.prototype), arguments);
    }

    function WriteStream$open() {
      var that = this;
      open(that.path, that.flags, that.mode, function (err, fd) {
        if (err) {
          that.destroy();
          that.emit('error', err);
        } else {
          that.fd = fd;
          that.emit('open', fd);
        }
      });
    }

    function createReadStream(path, options) {
      return new fs.ReadStream(path, options);
    }

    function createWriteStream(path, options) {
      return new fs.WriteStream(path, options);
    }

    var fs$open = fs.open;
    fs.open = open;

    function open(path, flags, mode, cb) {
      if (typeof mode === 'function') cb = mode, mode = null;
      return go$open(path, flags, mode, cb);

      function go$open(path, flags, mode, cb, startTime) {
        return fs$open(path, flags, mode, function (err, fd) {
          if (err && (err.code === 'EMFILE' || err.code === 'ENFILE')) enqueue([go$open, [path, flags, mode, cb], err, startTime || Date.now(), Date.now()]);else {
            if (typeof cb === 'function') cb.apply(this, arguments);
          }
        });
      }
    }

    return fs;
  }

  function enqueue(elem) {
    debug('ENQUEUE', elem[0].name, elem[1]);
    fs$g[gracefulQueue].push(elem);
    retry();
  } // keep track of the timeout between retry() calls


  var retryTimer; // reset the startTime and lastTime to now
  // this resets the start of the 60 second overall timeout as well as the
  // delay between attempts so that we'll retry these jobs sooner

  function resetQueue() {
    var now = Date.now();

    for (var i = 0; i < fs$g[gracefulQueue].length; ++i) {
      // entries that are only a length of 2 are from an older version, don't
      // bother modifying those since they'll be retried anyway.
      if (fs$g[gracefulQueue][i].length > 2) {
        fs$g[gracefulQueue][i][3] = now; // startTime

        fs$g[gracefulQueue][i][4] = now; // lastTime
      }
    } // call retry to make sure we're actively processing the queue


    retry();
  }

  function retry() {
    // clear the timer and remove it to help prevent unintended concurrency
    clearTimeout(retryTimer);
    retryTimer = undefined;
    if (fs$g[gracefulQueue].length === 0) return;
    var elem = fs$g[gracefulQueue].shift();
    var fn = elem[0];
    var args = elem[1]; // these items may be unset if they were added by an older graceful-fs

    var err = elem[2];
    var startTime = elem[3];
    var lastTime = elem[4]; // if we don't have a startTime we have no way of knowing if we've waited
    // long enough, so go ahead and retry this item now

    if (startTime === undefined) {
      debug('RETRY', fn.name, args);
      fn.apply(null, args);
    } else if (Date.now() - startTime >= 60000) {
      // it's been more than 60 seconds total, bail now
      debug('TIMEOUT', fn.name, args);
      var cb = args.pop();
      if (typeof cb === 'function') cb.call(null, err);
    } else {
      // the amount of time between the last attempt and right now
      var sinceAttempt = Date.now() - lastTime; // the amount of time between when we first tried, and when we last tried
      // rounded up to at least 1

      var sinceStart = Math.max(lastTime - startTime, 1); // backoff. wait longer than the total time we've been retrying, but only
      // up to a maximum of 100ms

      var desiredDelay = Math.min(sinceStart * 1.2, 100); // it's been long enough since the last retry, do it again

      if (sinceAttempt >= desiredDelay) {
        debug('RETRY', fn.name, args);
        fn.apply(null, args.concat([startTime]));
      } else {
        // if we can't do this job yet, push it to the end of the queue
        // and let the next iteration check again
        fs$g[gracefulQueue].push(elem);
      }
    } // schedule our next run if one isn't already scheduled


    if (retryTimer === undefined) {
      retryTimer = setTimeout(retry, 0);
    }
  }

  (function (exports) {
    // Copyright (c) 2014-2016 Jonathan Ong me@jongleberry.com and Contributors

    var u = universalify$1.fromCallback;
    var fs = gracefulFs;
    var api = ['access', 'appendFile', 'chmod', 'chown', 'close', 'copyFile', 'fchmod', 'fchown', 'fdatasync', 'fstat', 'fsync', 'ftruncate', 'futimes', 'lchmod', 'lchown', 'link', 'lstat', 'mkdir', 'mkdtemp', 'open', 'opendir', 'readdir', 'readFile', 'readlink', 'realpath', 'rename', 'rm', 'rmdir', 'stat', 'symlink', 'truncate', 'unlink', 'utimes', 'writeFile'].filter(function (key) {
      // Some commands are not available on some systems. Ex:
      // fs.cp was added in Node.js v16.7.0
      // fs.lchown is not available on at least some Linux
      return typeof fs[key] === 'function';
    }); // Export cloned fs:

    Object.assign(exports, fs); // Universalify async methods:

    api.forEach(function (method) {
      exports[method] = u(fs[method]);
    }); // We differ from mz/fs in that we still ship the old, broken, fs.exists()
    // since we are a drop-in replacement for the native module

    exports.exists = function (filename, callback) {
      if (typeof callback === 'function') {
        return fs.exists(filename, callback);
      }

      return new Promise(function (resolve) {
        return fs.exists(filename, resolve);
      });
    }; // fs.read(), fs.write(), fs.readv(), & fs.writev() need special treatment due to multiple callback args


    exports.read = function (fd, buffer, offset, length, position, callback) {
      if (typeof callback === 'function') {
        return fs.read(fd, buffer, offset, length, position, callback);
      }

      return new Promise(function (resolve, reject) {
        fs.read(fd, buffer, offset, length, position, function (err, bytesRead, buffer) {
          if (err) return reject(err);
          resolve({
            bytesRead: bytesRead,
            buffer: buffer
          });
        });
      });
    }; // Function signature can be
    // fs.write(fd, buffer[, offset[, length[, position]]], callback)
    // OR
    // fs.write(fd, string[, position[, encoding]], callback)
    // We need to handle both cases, so we use ...args


    exports.write = function (fd, buffer) {
      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }

      if (typeof args[args.length - 1] === 'function') {
        return fs.write.apply(fs, [fd, buffer].concat(args));
      }

      return new Promise(function (resolve, reject) {
        fs.write.apply(fs, [fd, buffer].concat(args, [function (err, bytesWritten, buffer) {
          if (err) return reject(err);
          resolve({
            bytesWritten: bytesWritten,
            buffer: buffer
          });
        }]));
      });
    }; // Function signature is
    // s.readv(fd, buffers[, position], callback)
    // We need to handle the optional arg, so we use ...args


    exports.readv = function (fd, buffers) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      if (typeof args[args.length - 1] === 'function') {
        return fs.readv.apply(fs, [fd, buffers].concat(args));
      }

      return new Promise(function (resolve, reject) {
        fs.readv.apply(fs, [fd, buffers].concat(args, [function (err, bytesRead, buffers) {
          if (err) return reject(err);
          resolve({
            bytesRead: bytesRead,
            buffers: buffers
          });
        }]));
      });
    }; // Function signature is
    // s.writev(fd, buffers[, position], callback)
    // We need to handle the optional arg, so we use ...args


    exports.writev = function (fd, buffers) {
      for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        args[_key3 - 2] = arguments[_key3];
      }

      if (typeof args[args.length - 1] === 'function') {
        return fs.writev.apply(fs, [fd, buffers].concat(args));
      }

      return new Promise(function (resolve, reject) {
        fs.writev.apply(fs, [fd, buffers].concat(args, [function (err, bytesWritten, buffers) {
          if (err) return reject(err);
          resolve({
            bytesWritten: bytesWritten,
            buffers: buffers
          });
        }]));
      });
    }; // fs.realpath.native sometimes not available if fs is monkey-patched


    if (typeof fs.realpath["native"] === 'function') {
      exports.realpath["native"] = u(fs.realpath["native"]);
    } else {
      process.emitWarning('fs.realpath.native is not a function. Is fs being monkey-patched?', 'Warning', 'fs-extra-WARN0003');
    }
  })(fs$h);

  var makeDir$1 = {};

  var utils$1 = {};

  var path$b = require$$1__default["default"]; // https://github.com/nodejs/node/issues/8987
  // https://github.com/libuv/libuv/pull/1088

  utils$1.checkPath = function checkPath(pth) {
    if (process.platform === 'win32') {
      var pathHasInvalidWinCharacters = /[<>:"|?*]/.test(pth.replace(path$b.parse(pth).root, ''));

      if (pathHasInvalidWinCharacters) {
        var error = new Error("Path contains invalid characters: ".concat(pth));
        error.code = 'EINVAL';
        throw error;
      }
    }
  };

  var fs$f = fs$h;
  var checkPath = utils$1.checkPath;

  var getMode = function getMode(options) {
    var defaults = {
      mode: 511
    };
    if (typeof options === 'number') return options;
    return _objectSpread2(_objectSpread2({}, defaults), options).mode;
  };

  makeDir$1.makeDir = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dir, options) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              checkPath(dir);
              return _context.abrupt("return", fs$f.mkdir(dir, {
                mode: getMode(options),
                recursive: true
              }));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  makeDir$1.makeDirSync = function (dir, options) {
    checkPath(dir);
    return fs$f.mkdirSync(dir, {
      mode: getMode(options),
      recursive: true
    });
  };

  var u$a = universalify$1.fromPromise;
  var _makeDir = makeDir$1.makeDir,
      makeDirSync = makeDir$1.makeDirSync;
  var makeDir = u$a(_makeDir);
  var mkdirs$2 = {
    mkdirs: makeDir,
    mkdirsSync: makeDirSync,
    // alias
    mkdirp: makeDir,
    mkdirpSync: makeDirSync,
    ensureDir: makeDir,
    ensureDirSync: makeDirSync
  };

  var u$9 = universalify$1.fromPromise;
  var fs$e = fs$h;

  function pathExists$6(path) {
    return fs$e.access(path).then(function () {
      return true;
    })["catch"](function () {
      return false;
    });
  }

  var pathExists_1 = {
    pathExists: u$9(pathExists$6),
    pathExistsSync: fs$e.existsSync
  };

  var fs$d = gracefulFs;

  function utimesMillis$1(path, atime, mtime, callback) {
    // if (!HAS_MILLIS_RES) return fs.utimes(path, atime, mtime, callback)
    fs$d.open(path, 'r+', function (err, fd) {
      if (err) return callback(err);
      fs$d.futimes(fd, atime, mtime, function (futimesErr) {
        fs$d.close(fd, function (closeErr) {
          if (callback) callback(futimesErr || closeErr);
        });
      });
    });
  }

  function utimesMillisSync$1(path, atime, mtime) {
    var fd = fs$d.openSync(path, 'r+');
    fs$d.futimesSync(fd, atime, mtime);
    return fs$d.closeSync(fd);
  }

  var utimes = {
    utimesMillis: utimesMillis$1,
    utimesMillisSync: utimesMillisSync$1
  };

  var fs$c = fs$h;
  var path$a = require$$1__default["default"];
  var util = require$$4__default["default"];

  function getStats$2(src, dest, opts) {
    var statFunc = opts.dereference ? function (file) {
      return fs$c.stat(file, {
        bigint: true
      });
    } : function (file) {
      return fs$c.lstat(file, {
        bigint: true
      });
    };
    return Promise.all([statFunc(src), statFunc(dest)["catch"](function (err) {
      if (err.code === 'ENOENT') return null;
      throw err;
    })]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          srcStat = _ref2[0],
          destStat = _ref2[1];

      return {
        srcStat: srcStat,
        destStat: destStat
      };
    });
  }

  function getStatsSync(src, dest, opts) {
    var destStat;
    var statFunc = opts.dereference ? function (file) {
      return fs$c.statSync(file, {
        bigint: true
      });
    } : function (file) {
      return fs$c.lstatSync(file, {
        bigint: true
      });
    };
    var srcStat = statFunc(src);

    try {
      destStat = statFunc(dest);
    } catch (err) {
      if (err.code === 'ENOENT') return {
        srcStat: srcStat,
        destStat: null
      };
      throw err;
    }

    return {
      srcStat: srcStat,
      destStat: destStat
    };
  }

  function checkPaths(src, dest, funcName, opts, cb) {
    util.callbackify(getStats$2)(src, dest, opts, function (err, stats) {
      if (err) return cb(err);
      var srcStat = stats.srcStat,
          destStat = stats.destStat;

      if (destStat) {
        if (areIdentical$2(srcStat, destStat)) {
          var srcBaseName = path$a.basename(src);
          var destBaseName = path$a.basename(dest);

          if (funcName === 'move' && srcBaseName !== destBaseName && srcBaseName.toLowerCase() === destBaseName.toLowerCase()) {
            return cb(null, {
              srcStat: srcStat,
              destStat: destStat,
              isChangingCase: true
            });
          }

          return cb(new Error('Source and destination must not be the same.'));
        }

        if (srcStat.isDirectory() && !destStat.isDirectory()) {
          return cb(new Error("Cannot overwrite non-directory '".concat(dest, "' with directory '").concat(src, "'.")));
        }

        if (!srcStat.isDirectory() && destStat.isDirectory()) {
          return cb(new Error("Cannot overwrite directory '".concat(dest, "' with non-directory '").concat(src, "'.")));
        }
      }

      if (srcStat.isDirectory() && isSrcSubdir(src, dest)) {
        return cb(new Error(errMsg(src, dest, funcName)));
      }

      return cb(null, {
        srcStat: srcStat,
        destStat: destStat
      });
    });
  }

  function checkPathsSync(src, dest, funcName, opts) {
    var _getStatsSync = getStatsSync(src, dest, opts),
        srcStat = _getStatsSync.srcStat,
        destStat = _getStatsSync.destStat;

    if (destStat) {
      if (areIdentical$2(srcStat, destStat)) {
        var srcBaseName = path$a.basename(src);
        var destBaseName = path$a.basename(dest);

        if (funcName === 'move' && srcBaseName !== destBaseName && srcBaseName.toLowerCase() === destBaseName.toLowerCase()) {
          return {
            srcStat: srcStat,
            destStat: destStat,
            isChangingCase: true
          };
        }

        throw new Error('Source and destination must not be the same.');
      }

      if (srcStat.isDirectory() && !destStat.isDirectory()) {
        throw new Error("Cannot overwrite non-directory '".concat(dest, "' with directory '").concat(src, "'."));
      }

      if (!srcStat.isDirectory() && destStat.isDirectory()) {
        throw new Error("Cannot overwrite directory '".concat(dest, "' with non-directory '").concat(src, "'."));
      }
    }

    if (srcStat.isDirectory() && isSrcSubdir(src, dest)) {
      throw new Error(errMsg(src, dest, funcName));
    }

    return {
      srcStat: srcStat,
      destStat: destStat
    };
  } // recursively check if dest parent is a subdirectory of src.
  // It works for all file types including symlinks since it
  // checks the src and dest inodes. It starts from the deepest
  // parent and stops once it reaches the src parent or the root path.


  function checkParentPaths(src, srcStat, dest, funcName, cb) {
    var srcParent = path$a.resolve(path$a.dirname(src));
    var destParent = path$a.resolve(path$a.dirname(dest));
    if (destParent === srcParent || destParent === path$a.parse(destParent).root) return cb();
    fs$c.stat(destParent, {
      bigint: true
    }, function (err, destStat) {
      if (err) {
        if (err.code === 'ENOENT') return cb();
        return cb(err);
      }

      if (areIdentical$2(srcStat, destStat)) {
        return cb(new Error(errMsg(src, dest, funcName)));
      }

      return checkParentPaths(src, srcStat, destParent, funcName, cb);
    });
  }

  function checkParentPathsSync(src, srcStat, dest, funcName) {
    var srcParent = path$a.resolve(path$a.dirname(src));
    var destParent = path$a.resolve(path$a.dirname(dest));
    if (destParent === srcParent || destParent === path$a.parse(destParent).root) return;
    var destStat;

    try {
      destStat = fs$c.statSync(destParent, {
        bigint: true
      });
    } catch (err) {
      if (err.code === 'ENOENT') return;
      throw err;
    }

    if (areIdentical$2(srcStat, destStat)) {
      throw new Error(errMsg(src, dest, funcName));
    }

    return checkParentPathsSync(src, srcStat, destParent, funcName);
  }

  function areIdentical$2(srcStat, destStat) {
    return destStat.ino && destStat.dev && destStat.ino === srcStat.ino && destStat.dev === srcStat.dev;
  } // return true if dest is a subdir of src, otherwise false.
  // It only checks the path strings.


  function isSrcSubdir(src, dest) {
    var srcArr = path$a.resolve(src).split(path$a.sep).filter(function (i) {
      return i;
    });
    var destArr = path$a.resolve(dest).split(path$a.sep).filter(function (i) {
      return i;
    });
    return srcArr.reduce(function (acc, cur, i) {
      return acc && destArr[i] === cur;
    }, true);
  }

  function errMsg(src, dest, funcName) {
    return "Cannot ".concat(funcName, " '").concat(src, "' to a subdirectory of itself, '").concat(dest, "'.");
  }

  var stat$4 = {
    checkPaths: checkPaths,
    checkPathsSync: checkPathsSync,
    checkParentPaths: checkParentPaths,
    checkParentPathsSync: checkParentPathsSync,
    isSrcSubdir: isSrcSubdir,
    areIdentical: areIdentical$2
  };

  var fs$b = gracefulFs;
  var path$9 = require$$1__default["default"];
  var mkdirs$1 = mkdirs$2.mkdirs;
  var pathExists$5 = pathExists_1.pathExists;
  var utimesMillis = utimes.utimesMillis;
  var stat$3 = stat$4;

  function copy$2(src, dest, opts, cb) {
    if (typeof opts === 'function' && !cb) {
      cb = opts;
      opts = {};
    } else if (typeof opts === 'function') {
      opts = {
        filter: opts
      };
    }

    cb = cb || function () {};

    opts = opts || {};
    opts.clobber = 'clobber' in opts ? !!opts.clobber : true; // default to true for now

    opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber; // overwrite falls back to clobber
    // Warn about using preserveTimestamps on 32-bit node

    if (opts.preserveTimestamps && process.arch === 'ia32') {
      process.emitWarning('Using the preserveTimestamps option in 32-bit node is not recommended;\n\n' + '\tsee https://github.com/jprichardson/node-fs-extra/issues/269', 'Warning', 'fs-extra-WARN0001');
    }

    stat$3.checkPaths(src, dest, 'copy', opts, function (err, stats) {
      if (err) return cb(err);
      var srcStat = stats.srcStat,
          destStat = stats.destStat;
      stat$3.checkParentPaths(src, srcStat, dest, 'copy', function (err) {
        if (err) return cb(err);
        runFilter(src, dest, opts, function (err, include) {
          if (err) return cb(err);
          if (!include) return cb();
          checkParentDir(destStat, src, dest, opts, cb);
        });
      });
    });
  }

  function checkParentDir(destStat, src, dest, opts, cb) {
    var destParent = path$9.dirname(dest);
    pathExists$5(destParent, function (err, dirExists) {
      if (err) return cb(err);
      if (dirExists) return getStats$1(destStat, src, dest, opts, cb);
      mkdirs$1(destParent, function (err) {
        if (err) return cb(err);
        return getStats$1(destStat, src, dest, opts, cb);
      });
    });
  }

  function runFilter(src, dest, opts, cb) {
    if (!opts.filter) return cb(null, true);
    Promise.resolve(opts.filter(src, dest)).then(function (include) {
      return cb(null, include);
    }, function (error) {
      return cb(error);
    });
  }

  function getStats$1(destStat, src, dest, opts, cb) {
    var stat = opts.dereference ? fs$b.stat : fs$b.lstat;
    stat(src, function (err, srcStat) {
      if (err) return cb(err);
      if (srcStat.isDirectory()) return onDir$1(srcStat, destStat, src, dest, opts, cb);else if (srcStat.isFile() || srcStat.isCharacterDevice() || srcStat.isBlockDevice()) return onFile$1(srcStat, destStat, src, dest, opts, cb);else if (srcStat.isSymbolicLink()) return onLink$1(destStat, src, dest, opts, cb);else if (srcStat.isSocket()) return cb(new Error("Cannot copy a socket file: ".concat(src)));else if (srcStat.isFIFO()) return cb(new Error("Cannot copy a FIFO pipe: ".concat(src)));
      return cb(new Error("Unknown file: ".concat(src)));
    });
  }

  function onFile$1(srcStat, destStat, src, dest, opts, cb) {
    if (!destStat) return copyFile$1(srcStat, src, dest, opts, cb);
    return mayCopyFile$1(srcStat, src, dest, opts, cb);
  }

  function mayCopyFile$1(srcStat, src, dest, opts, cb) {
    if (opts.overwrite) {
      fs$b.unlink(dest, function (err) {
        if (err) return cb(err);
        return copyFile$1(srcStat, src, dest, opts, cb);
      });
    } else if (opts.errorOnExist) {
      return cb(new Error("'".concat(dest, "' already exists")));
    } else return cb();
  }

  function copyFile$1(srcStat, src, dest, opts, cb) {
    fs$b.copyFile(src, dest, function (err) {
      if (err) return cb(err);
      if (opts.preserveTimestamps) return handleTimestampsAndMode(srcStat.mode, src, dest, cb);
      return setDestMode$1(dest, srcStat.mode, cb);
    });
  }

  function handleTimestampsAndMode(srcMode, src, dest, cb) {
    // Make sure the file is writable before setting the timestamp
    // otherwise open fails with EPERM when invoked with 'r+'
    // (through utimes call)
    if (fileIsNotWritable$1(srcMode)) {
      return makeFileWritable$1(dest, srcMode, function (err) {
        if (err) return cb(err);
        return setDestTimestampsAndMode(srcMode, src, dest, cb);
      });
    }

    return setDestTimestampsAndMode(srcMode, src, dest, cb);
  }

  function fileIsNotWritable$1(srcMode) {
    return (srcMode & 128) === 0;
  }

  function makeFileWritable$1(dest, srcMode, cb) {
    return setDestMode$1(dest, srcMode | 128, cb);
  }

  function setDestTimestampsAndMode(srcMode, src, dest, cb) {
    setDestTimestamps$1(src, dest, function (err) {
      if (err) return cb(err);
      return setDestMode$1(dest, srcMode, cb);
    });
  }

  function setDestMode$1(dest, srcMode, cb) {
    return fs$b.chmod(dest, srcMode, cb);
  }

  function setDestTimestamps$1(src, dest, cb) {
    // The initial srcStat.atime cannot be trusted
    // because it is modified by the read(2) system call
    // (See https://nodejs.org/api/fs.html#fs_stat_time_values)
    fs$b.stat(src, function (err, updatedSrcStat) {
      if (err) return cb(err);
      return utimesMillis(dest, updatedSrcStat.atime, updatedSrcStat.mtime, cb);
    });
  }

  function onDir$1(srcStat, destStat, src, dest, opts, cb) {
    if (!destStat) return mkDirAndCopy$1(srcStat.mode, src, dest, opts, cb);
    return copyDir$1(src, dest, opts, cb);
  }

  function mkDirAndCopy$1(srcMode, src, dest, opts, cb) {
    fs$b.mkdir(dest, function (err) {
      if (err) return cb(err);
      copyDir$1(src, dest, opts, function (err) {
        if (err) return cb(err);
        return setDestMode$1(dest, srcMode, cb);
      });
    });
  }

  function copyDir$1(src, dest, opts, cb) {
    fs$b.readdir(src, function (err, items) {
      if (err) return cb(err);
      return copyDirItems(items, src, dest, opts, cb);
    });
  }

  function copyDirItems(items, src, dest, opts, cb) {
    var item = items.pop();
    if (!item) return cb();
    return copyDirItem$1(items, item, src, dest, opts, cb);
  }

  function copyDirItem$1(items, item, src, dest, opts, cb) {
    var srcItem = path$9.join(src, item);
    var destItem = path$9.join(dest, item);
    runFilter(srcItem, destItem, opts, function (err, include) {
      if (err) return cb(err);
      if (!include) return copyDirItems(items, src, dest, opts, cb);
      stat$3.checkPaths(srcItem, destItem, 'copy', opts, function (err, stats) {
        if (err) return cb(err);
        var destStat = stats.destStat;
        getStats$1(destStat, srcItem, destItem, opts, function (err) {
          if (err) return cb(err);
          return copyDirItems(items, src, dest, opts, cb);
        });
      });
    });
  }

  function onLink$1(destStat, src, dest, opts, cb) {
    fs$b.readlink(src, function (err, resolvedSrc) {
      if (err) return cb(err);

      if (opts.dereference) {
        resolvedSrc = path$9.resolve(process.cwd(), resolvedSrc);
      }

      if (!destStat) {
        return fs$b.symlink(resolvedSrc, dest, cb);
      } else {
        fs$b.readlink(dest, function (err, resolvedDest) {
          if (err) {
            // dest exists and is a regular file or directory,
            // Windows may throw UNKNOWN error. If dest already exists,
            // fs throws error anyway, so no need to guard against it here.
            if (err.code === 'EINVAL' || err.code === 'UNKNOWN') return fs$b.symlink(resolvedSrc, dest, cb);
            return cb(err);
          }

          if (opts.dereference) {
            resolvedDest = path$9.resolve(process.cwd(), resolvedDest);
          }

          if (stat$3.isSrcSubdir(resolvedSrc, resolvedDest)) {
            return cb(new Error("Cannot copy '".concat(resolvedSrc, "' to a subdirectory of itself, '").concat(resolvedDest, "'.")));
          } // do not copy if src is a subdir of dest since unlinking
          // dest in this case would result in removing src contents
          // and therefore a broken symlink would be created.


          if (stat$3.isSrcSubdir(resolvedDest, resolvedSrc)) {
            return cb(new Error("Cannot overwrite '".concat(resolvedDest, "' with '").concat(resolvedSrc, "'.")));
          }

          return copyLink$1(resolvedSrc, dest, cb);
        });
      }
    });
  }

  function copyLink$1(resolvedSrc, dest, cb) {
    fs$b.unlink(dest, function (err) {
      if (err) return cb(err);
      return fs$b.symlink(resolvedSrc, dest, cb);
    });
  }

  var copy_1 = copy$2;

  var fs$a = gracefulFs;
  var path$8 = require$$1__default["default"];
  var mkdirsSync$1 = mkdirs$2.mkdirsSync;
  var utimesMillisSync = utimes.utimesMillisSync;
  var stat$2 = stat$4;

  function copySync$1(src, dest, opts) {
    if (typeof opts === 'function') {
      opts = {
        filter: opts
      };
    }

    opts = opts || {};
    opts.clobber = 'clobber' in opts ? !!opts.clobber : true; // default to true for now

    opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber; // overwrite falls back to clobber
    // Warn about using preserveTimestamps on 32-bit node

    if (opts.preserveTimestamps && process.arch === 'ia32') {
      process.emitWarning('Using the preserveTimestamps option in 32-bit node is not recommended;\n\n' + '\tsee https://github.com/jprichardson/node-fs-extra/issues/269', 'Warning', 'fs-extra-WARN0002');
    }

    var _stat$checkPathsSync = stat$2.checkPathsSync(src, dest, 'copy', opts),
        srcStat = _stat$checkPathsSync.srcStat,
        destStat = _stat$checkPathsSync.destStat;

    stat$2.checkParentPathsSync(src, srcStat, dest, 'copy');
    if (opts.filter && !opts.filter(src, dest)) return;
    var destParent = path$8.dirname(dest);
    if (!fs$a.existsSync(destParent)) mkdirsSync$1(destParent);
    return getStats(destStat, src, dest, opts);
  }

  function getStats(destStat, src, dest, opts) {
    var statSync = opts.dereference ? fs$a.statSync : fs$a.lstatSync;
    var srcStat = statSync(src);
    if (srcStat.isDirectory()) return onDir(srcStat, destStat, src, dest, opts);else if (srcStat.isFile() || srcStat.isCharacterDevice() || srcStat.isBlockDevice()) return onFile(srcStat, destStat, src, dest, opts);else if (srcStat.isSymbolicLink()) return onLink(destStat, src, dest, opts);else if (srcStat.isSocket()) throw new Error("Cannot copy a socket file: ".concat(src));else if (srcStat.isFIFO()) throw new Error("Cannot copy a FIFO pipe: ".concat(src));
    throw new Error("Unknown file: ".concat(src));
  }

  function onFile(srcStat, destStat, src, dest, opts) {
    if (!destStat) return copyFile(srcStat, src, dest, opts);
    return mayCopyFile(srcStat, src, dest, opts);
  }

  function mayCopyFile(srcStat, src, dest, opts) {
    if (opts.overwrite) {
      fs$a.unlinkSync(dest);
      return copyFile(srcStat, src, dest, opts);
    } else if (opts.errorOnExist) {
      throw new Error("'".concat(dest, "' already exists"));
    }
  }

  function copyFile(srcStat, src, dest, opts) {
    fs$a.copyFileSync(src, dest);
    if (opts.preserveTimestamps) handleTimestamps(srcStat.mode, src, dest);
    return setDestMode(dest, srcStat.mode);
  }

  function handleTimestamps(srcMode, src, dest) {
    // Make sure the file is writable before setting the timestamp
    // otherwise open fails with EPERM when invoked with 'r+'
    // (through utimes call)
    if (fileIsNotWritable(srcMode)) makeFileWritable(dest, srcMode);
    return setDestTimestamps(src, dest);
  }

  function fileIsNotWritable(srcMode) {
    return (srcMode & 128) === 0;
  }

  function makeFileWritable(dest, srcMode) {
    return setDestMode(dest, srcMode | 128);
  }

  function setDestMode(dest, srcMode) {
    return fs$a.chmodSync(dest, srcMode);
  }

  function setDestTimestamps(src, dest) {
    // The initial srcStat.atime cannot be trusted
    // because it is modified by the read(2) system call
    // (See https://nodejs.org/api/fs.html#fs_stat_time_values)
    var updatedSrcStat = fs$a.statSync(src);
    return utimesMillisSync(dest, updatedSrcStat.atime, updatedSrcStat.mtime);
  }

  function onDir(srcStat, destStat, src, dest, opts) {
    if (!destStat) return mkDirAndCopy(srcStat.mode, src, dest, opts);
    return copyDir(src, dest, opts);
  }

  function mkDirAndCopy(srcMode, src, dest, opts) {
    fs$a.mkdirSync(dest);
    copyDir(src, dest, opts);
    return setDestMode(dest, srcMode);
  }

  function copyDir(src, dest, opts) {
    fs$a.readdirSync(src).forEach(function (item) {
      return copyDirItem(item, src, dest, opts);
    });
  }

  function copyDirItem(item, src, dest, opts) {
    var srcItem = path$8.join(src, item);
    var destItem = path$8.join(dest, item);
    if (opts.filter && !opts.filter(srcItem, destItem)) return;

    var _stat$checkPathsSync2 = stat$2.checkPathsSync(srcItem, destItem, 'copy', opts),
        destStat = _stat$checkPathsSync2.destStat;

    return getStats(destStat, srcItem, destItem, opts);
  }

  function onLink(destStat, src, dest, opts) {
    var resolvedSrc = fs$a.readlinkSync(src);

    if (opts.dereference) {
      resolvedSrc = path$8.resolve(process.cwd(), resolvedSrc);
    }

    if (!destStat) {
      return fs$a.symlinkSync(resolvedSrc, dest);
    } else {
      var resolvedDest;

      try {
        resolvedDest = fs$a.readlinkSync(dest);
      } catch (err) {
        // dest exists and is a regular file or directory,
        // Windows may throw UNKNOWN error. If dest already exists,
        // fs throws error anyway, so no need to guard against it here.
        if (err.code === 'EINVAL' || err.code === 'UNKNOWN') return fs$a.symlinkSync(resolvedSrc, dest);
        throw err;
      }

      if (opts.dereference) {
        resolvedDest = path$8.resolve(process.cwd(), resolvedDest);
      }

      if (stat$2.isSrcSubdir(resolvedSrc, resolvedDest)) {
        throw new Error("Cannot copy '".concat(resolvedSrc, "' to a subdirectory of itself, '").concat(resolvedDest, "'."));
      } // prevent copy if src is a subdir of dest since unlinking
      // dest in this case would result in removing src contents
      // and therefore a broken symlink would be created.


      if (stat$2.isSrcSubdir(resolvedDest, resolvedSrc)) {
        throw new Error("Cannot overwrite '".concat(resolvedDest, "' with '").concat(resolvedSrc, "'."));
      }

      return copyLink(resolvedSrc, dest);
    }
  }

  function copyLink(resolvedSrc, dest) {
    fs$a.unlinkSync(dest);
    return fs$a.symlinkSync(resolvedSrc, dest);
  }

  var copySync_1 = copySync$1;

  var u$8 = universalify$1.fromCallback;
  var copy$1 = {
    copy: u$8(copy_1),
    copySync: copySync_1
  };

  var fs$9 = gracefulFs;
  var u$7 = universalify$1.fromCallback;

  function remove$2(path, callback) {
    fs$9.rm(path, {
      recursive: true,
      force: true
    }, callback);
  }

  function removeSync$1(path) {
    fs$9.rmSync(path, {
      recursive: true,
      force: true
    });
  }

  var remove_1 = {
    remove: u$7(remove$2),
    removeSync: removeSync$1
  };

  var u$6 = universalify$1.fromPromise;
  var fs$8 = fs$h;
  var path$7 = require$$1__default["default"];
  var mkdir$3 = mkdirs$2;
  var remove$1 = remove_1;
  var emptyDir = u$6( /*#__PURE__*/function () {
    var _emptyDir = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dir) {
      var items;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fs$8.readdir(dir);

            case 3:
              items = _context.sent;
              _context.next = 9;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", mkdir$3.mkdirs(dir));

            case 9:
              return _context.abrupt("return", Promise.all(items.map(function (item) {
                return remove$1.remove(path$7.join(dir, item));
              })));

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 6]]);
    }));

    function emptyDir(_x) {
      return _emptyDir.apply(this, arguments);
    }

    return emptyDir;
  }());

  function emptyDirSync(dir) {
    var items;

    try {
      items = fs$8.readdirSync(dir);
    } catch (_unused2) {
      return mkdir$3.mkdirsSync(dir);
    }

    items.forEach(function (item) {
      item = path$7.join(dir, item);
      remove$1.removeSync(item);
    });
  }

  var empty = {
    emptyDirSync: emptyDirSync,
    emptydirSync: emptyDirSync,
    emptyDir: emptyDir,
    emptydir: emptyDir
  };

  var u$5 = universalify$1.fromCallback;
  var path$6 = require$$1__default["default"];
  var fs$7 = gracefulFs;
  var mkdir$2 = mkdirs$2;

  function createFile$1(file, callback) {
    function makeFile() {
      fs$7.writeFile(file, '', function (err) {
        if (err) return callback(err);
        callback();
      });
    }

    fs$7.stat(file, function (err, stats) {
      // eslint-disable-line handle-callback-err
      if (!err && stats.isFile()) return callback();
      var dir = path$6.dirname(file);
      fs$7.stat(dir, function (err, stats) {
        if (err) {
          // if the directory doesn't exist, make it
          if (err.code === 'ENOENT') {
            return mkdir$2.mkdirs(dir, function (err) {
              if (err) return callback(err);
              makeFile();
            });
          }

          return callback(err);
        }

        if (stats.isDirectory()) makeFile();else {
          // parent is not a directory
          // This is just to cause an internal ENOTDIR error to be thrown
          fs$7.readdir(dir, function (err) {
            if (err) return callback(err);
          });
        }
      });
    });
  }

  function createFileSync$1(file) {
    var stats;

    try {
      stats = fs$7.statSync(file);
    } catch (_unused) {}

    if (stats && stats.isFile()) return;
    var dir = path$6.dirname(file);

    try {
      if (!fs$7.statSync(dir).isDirectory()) {
        // parent is not a directory
        // This is just to cause an internal ENOTDIR error to be thrown
        fs$7.readdirSync(dir);
      }
    } catch (err) {
      // If the stat call above failed because the directory doesn't exist, create it
      if (err && err.code === 'ENOENT') mkdir$2.mkdirsSync(dir);else throw err;
    }

    fs$7.writeFileSync(file, '');
  }

  var file = {
    createFile: u$5(createFile$1),
    createFileSync: createFileSync$1
  };

  var u$4 = universalify$1.fromCallback;
  var path$5 = require$$1__default["default"];
  var fs$6 = gracefulFs;
  var mkdir$1 = mkdirs$2;
  var pathExists$4 = pathExists_1.pathExists;
  var areIdentical$1 = stat$4.areIdentical;

  function createLink$1(srcpath, dstpath, callback) {
    function makeLink(srcpath, dstpath) {
      fs$6.link(srcpath, dstpath, function (err) {
        if (err) return callback(err);
        callback(null);
      });
    }

    fs$6.lstat(dstpath, function (_, dstStat) {
      fs$6.lstat(srcpath, function (err, srcStat) {
        if (err) {
          err.message = err.message.replace('lstat', 'ensureLink');
          return callback(err);
        }

        if (dstStat && areIdentical$1(srcStat, dstStat)) return callback(null);
        var dir = path$5.dirname(dstpath);
        pathExists$4(dir, function (err, dirExists) {
          if (err) return callback(err);
          if (dirExists) return makeLink(srcpath, dstpath);
          mkdir$1.mkdirs(dir, function (err) {
            if (err) return callback(err);
            makeLink(srcpath, dstpath);
          });
        });
      });
    });
  }

  function createLinkSync$1(srcpath, dstpath) {
    var dstStat;

    try {
      dstStat = fs$6.lstatSync(dstpath);
    } catch (_unused) {}

    try {
      var srcStat = fs$6.lstatSync(srcpath);
      if (dstStat && areIdentical$1(srcStat, dstStat)) return;
    } catch (err) {
      err.message = err.message.replace('lstat', 'ensureLink');
      throw err;
    }

    var dir = path$5.dirname(dstpath);
    var dirExists = fs$6.existsSync(dir);
    if (dirExists) return fs$6.linkSync(srcpath, dstpath);
    mkdir$1.mkdirsSync(dir);
    return fs$6.linkSync(srcpath, dstpath);
  }

  var link = {
    createLink: u$4(createLink$1),
    createLinkSync: createLinkSync$1
  };

  var path$4 = require$$1__default["default"];
  var fs$5 = gracefulFs;
  var pathExists$3 = pathExists_1.pathExists;
  /**
   * Function that returns two types of paths, one relative to symlink, and one
   * relative to the current working directory. Checks if path is absolute or
   * relative. If the path is relative, this function checks if the path is
   * relative to symlink or relative to current working directory. This is an
   * initiative to find a smarter `srcpath` to supply when building symlinks.
   * This allows you to determine which path to use out of one of three possible
   * types of source paths. The first is an absolute path. This is detected by
   * `path.isAbsolute()`. When an absolute path is provided, it is checked to
   * see if it exists. If it does it's used, if not an error is returned
   * (callback)/ thrown (sync). The other two options for `srcpath` are a
   * relative url. By default Node's `fs.symlink` works by creating a symlink
   * using `dstpath` and expects the `srcpath` to be relative to the newly
   * created symlink. If you provide a `srcpath` that does not exist on the file
   * system it results in a broken symlink. To minimize this, the function
   * checks to see if the 'relative to symlink' source file exists, and if it
   * does it will use it. If it does not, it checks if there's a file that
   * exists that is relative to the current working directory, if does its used.
   * This preserves the expectations of the original fs.symlink spec and adds
   * the ability to pass in `relative to current working direcotry` paths.
   */

  function symlinkPaths$1(srcpath, dstpath, callback) {
    if (path$4.isAbsolute(srcpath)) {
      return fs$5.lstat(srcpath, function (err) {
        if (err) {
          err.message = err.message.replace('lstat', 'ensureSymlink');
          return callback(err);
        }

        return callback(null, {
          toCwd: srcpath,
          toDst: srcpath
        });
      });
    } else {
      var dstdir = path$4.dirname(dstpath);
      var relativeToDst = path$4.join(dstdir, srcpath);
      return pathExists$3(relativeToDst, function (err, exists) {
        if (err) return callback(err);

        if (exists) {
          return callback(null, {
            toCwd: relativeToDst,
            toDst: srcpath
          });
        } else {
          return fs$5.lstat(srcpath, function (err) {
            if (err) {
              err.message = err.message.replace('lstat', 'ensureSymlink');
              return callback(err);
            }

            return callback(null, {
              toCwd: srcpath,
              toDst: path$4.relative(dstdir, srcpath)
            });
          });
        }
      });
    }
  }

  function symlinkPathsSync$1(srcpath, dstpath) {
    var exists;

    if (path$4.isAbsolute(srcpath)) {
      exists = fs$5.existsSync(srcpath);
      if (!exists) throw new Error('absolute srcpath does not exist');
      return {
        toCwd: srcpath,
        toDst: srcpath
      };
    } else {
      var dstdir = path$4.dirname(dstpath);
      var relativeToDst = path$4.join(dstdir, srcpath);
      exists = fs$5.existsSync(relativeToDst);

      if (exists) {
        return {
          toCwd: relativeToDst,
          toDst: srcpath
        };
      } else {
        exists = fs$5.existsSync(srcpath);
        if (!exists) throw new Error('relative srcpath does not exist');
        return {
          toCwd: srcpath,
          toDst: path$4.relative(dstdir, srcpath)
        };
      }
    }
  }

  var symlinkPaths_1 = {
    symlinkPaths: symlinkPaths$1,
    symlinkPathsSync: symlinkPathsSync$1
  };

  var fs$4 = gracefulFs;

  function symlinkType$1(srcpath, type, callback) {
    callback = typeof type === 'function' ? type : callback;
    type = typeof type === 'function' ? false : type;
    if (type) return callback(null, type);
    fs$4.lstat(srcpath, function (err, stats) {
      if (err) return callback(null, 'file');
      type = stats && stats.isDirectory() ? 'dir' : 'file';
      callback(null, type);
    });
  }

  function symlinkTypeSync$1(srcpath, type) {
    var stats;
    if (type) return type;

    try {
      stats = fs$4.lstatSync(srcpath);
    } catch (_unused) {
      return 'file';
    }

    return stats && stats.isDirectory() ? 'dir' : 'file';
  }

  var symlinkType_1 = {
    symlinkType: symlinkType$1,
    symlinkTypeSync: symlinkTypeSync$1
  };

  var u$3 = universalify$1.fromCallback;
  var path$3 = require$$1__default["default"];
  var fs$3 = fs$h;
  var _mkdirs = mkdirs$2;
  var mkdirs = _mkdirs.mkdirs;
  var mkdirsSync = _mkdirs.mkdirsSync;
  var _symlinkPaths = symlinkPaths_1;
  var symlinkPaths = _symlinkPaths.symlinkPaths;
  var symlinkPathsSync = _symlinkPaths.symlinkPathsSync;
  var _symlinkType = symlinkType_1;
  var symlinkType = _symlinkType.symlinkType;
  var symlinkTypeSync = _symlinkType.symlinkTypeSync;
  var pathExists$2 = pathExists_1.pathExists;
  var areIdentical = stat$4.areIdentical;

  function createSymlink$1(srcpath, dstpath, type, callback) {
    callback = typeof type === 'function' ? type : callback;
    type = typeof type === 'function' ? false : type;
    fs$3.lstat(dstpath, function (err, stats) {
      if (!err && stats.isSymbolicLink()) {
        Promise.all([fs$3.stat(srcpath), fs$3.stat(dstpath)]).then(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              srcStat = _ref2[0],
              dstStat = _ref2[1];

          if (areIdentical(srcStat, dstStat)) return callback(null);

          _createSymlink(srcpath, dstpath, type, callback);
        });
      } else _createSymlink(srcpath, dstpath, type, callback);
    });
  }

  function _createSymlink(srcpath, dstpath, type, callback) {
    symlinkPaths(srcpath, dstpath, function (err, relative) {
      if (err) return callback(err);
      srcpath = relative.toDst;
      symlinkType(relative.toCwd, type, function (err, type) {
        if (err) return callback(err);
        var dir = path$3.dirname(dstpath);
        pathExists$2(dir, function (err, dirExists) {
          if (err) return callback(err);
          if (dirExists) return fs$3.symlink(srcpath, dstpath, type, callback);
          mkdirs(dir, function (err) {
            if (err) return callback(err);
            fs$3.symlink(srcpath, dstpath, type, callback);
          });
        });
      });
    });
  }

  function createSymlinkSync$1(srcpath, dstpath, type) {
    var stats;

    try {
      stats = fs$3.lstatSync(dstpath);
    } catch (_unused) {}

    if (stats && stats.isSymbolicLink()) {
      var srcStat = fs$3.statSync(srcpath);
      var dstStat = fs$3.statSync(dstpath);
      if (areIdentical(srcStat, dstStat)) return;
    }

    var relative = symlinkPathsSync(srcpath, dstpath);
    srcpath = relative.toDst;
    type = symlinkTypeSync(relative.toCwd, type);
    var dir = path$3.dirname(dstpath);
    var exists = fs$3.existsSync(dir);
    if (exists) return fs$3.symlinkSync(srcpath, dstpath, type);
    mkdirsSync(dir);
    return fs$3.symlinkSync(srcpath, dstpath, type);
  }

  var symlink = {
    createSymlink: u$3(createSymlink$1),
    createSymlinkSync: createSymlinkSync$1
  };

  var createFile = file.createFile,
      createFileSync = file.createFileSync;
  var createLink = link.createLink,
      createLinkSync = link.createLinkSync;
  var createSymlink = symlink.createSymlink,
      createSymlinkSync = symlink.createSymlinkSync;
  var ensure = {
    // file
    createFile: createFile,
    createFileSync: createFileSync,
    ensureFile: createFile,
    ensureFileSync: createFileSync,
    // link
    createLink: createLink,
    createLinkSync: createLinkSync,
    ensureLink: createLink,
    ensureLinkSync: createLinkSync,
    // symlink
    createSymlink: createSymlink,
    createSymlinkSync: createSymlinkSync,
    ensureSymlink: createSymlink,
    ensureSymlinkSync: createSymlinkSync
  };

  function stringify$3(obj) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$EOL = _ref.EOL,
        EOL = _ref$EOL === void 0 ? '\n' : _ref$EOL,
        _ref$finalEOL = _ref.finalEOL,
        finalEOL = _ref$finalEOL === void 0 ? true : _ref$finalEOL,
        _ref$replacer = _ref.replacer,
        replacer = _ref$replacer === void 0 ? null : _ref$replacer,
        spaces = _ref.spaces;

    var EOF = finalEOL ? EOL : '';
    var str = JSON.stringify(obj, replacer, spaces);
    return str.replace(/\n/g, EOL) + EOF;
  }

  function stripBom$1(content) {
    // we do this because JSON.parse would convert it to a utf8 string if encoding wasn't specified
    if (Buffer.isBuffer(content)) content = content.toString('utf8');
    return content.replace(/^\uFEFF/, '');
  }

  var utils = {
    stringify: stringify$3,
    stripBom: stripBom$1
  };

  var _fs;

  try {
    _fs = gracefulFs;
  } catch (_) {
    _fs = require$$0__default$2["default"];
  }

  var universalify = universalify$1;
  var stringify$2 = utils.stringify,
      stripBom = utils.stripBom;

  function _readFile(_x) {
    return _readFile2.apply(this, arguments);
  }

  function _readFile2() {
    _readFile2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(file) {
      var options,
          fs,
          shouldThrow,
          data,
          obj,
          _args = arguments;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};

              if (typeof options === 'string') {
                options = {
                  encoding: options
                };
              }

              fs = options.fs || _fs;
              shouldThrow = 'throws' in options ? options["throws"] : true;
              _context.next = 6;
              return universalify.fromCallback(fs.readFile)(file, options);

            case 6:
              data = _context.sent;
              data = stripBom(data);
              _context.prev = 8;
              obj = JSON.parse(data, options ? options.reviver : null);
              _context.next = 20;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](8);

              if (!shouldThrow) {
                _context.next = 19;
                break;
              }

              _context.t0.message = "".concat(file, ": ").concat(_context.t0.message);
              throw _context.t0;

            case 19:
              return _context.abrupt("return", null);

            case 20:
              return _context.abrupt("return", obj);

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[8, 12]]);
    }));
    return _readFile2.apply(this, arguments);
  }

  var readFile = universalify.fromPromise(_readFile);

  function readFileSync(file) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (typeof options === 'string') {
      options = {
        encoding: options
      };
    }

    var fs = options.fs || _fs;
    var shouldThrow = 'throws' in options ? options["throws"] : true;

    try {
      var content = fs.readFileSync(file, options);
      content = stripBom(content);
      return JSON.parse(content, options.reviver);
    } catch (err) {
      if (shouldThrow) {
        err.message = "".concat(file, ": ").concat(err.message);
        throw err;
      } else {
        return null;
      }
    }
  }

  function _writeFile(_x2, _x3) {
    return _writeFile2.apply(this, arguments);
  }

  function _writeFile2() {
    _writeFile2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(file, obj) {
      var options,
          fs,
          str,
          _args2 = arguments;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              options = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : {};
              fs = options.fs || _fs;
              str = stringify$2(obj, options);
              _context2.next = 5;
              return universalify.fromCallback(fs.writeFile)(file, str, options);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _writeFile2.apply(this, arguments);
  }

  var writeFile = universalify.fromPromise(_writeFile);

  function writeFileSync(file, obj) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var fs = options.fs || _fs;
    var str = stringify$2(obj, options); // not sure if fs.writeFileSync returns anything, but just in case

    return fs.writeFileSync(file, str, options);
  }

  var jsonfile$1 = {
    readFile: readFile,
    readFileSync: readFileSync,
    writeFile: writeFile,
    writeFileSync: writeFileSync
  };
  var jsonfile_1 = jsonfile$1;

  var jsonFile$1 = jsonfile_1;
  var jsonfile = {
    // jsonfile exports
    readJson: jsonFile$1.readFile,
    readJsonSync: jsonFile$1.readFileSync,
    writeJson: jsonFile$1.writeFile,
    writeJsonSync: jsonFile$1.writeFileSync
  };

  var u$2 = universalify$1.fromCallback;
  var fs$2 = gracefulFs;
  var path$2 = require$$1__default["default"];
  var mkdir = mkdirs$2;
  var pathExists$1 = pathExists_1.pathExists;

  function outputFile$1(file, data, encoding, callback) {
    if (typeof encoding === 'function') {
      callback = encoding;
      encoding = 'utf8';
    }

    var dir = path$2.dirname(file);
    pathExists$1(dir, function (err, itDoes) {
      if (err) return callback(err);
      if (itDoes) return fs$2.writeFile(file, data, encoding, callback);
      mkdir.mkdirs(dir, function (err) {
        if (err) return callback(err);
        fs$2.writeFile(file, data, encoding, callback);
      });
    });
  }

  function outputFileSync$1(file) {
    var dir = path$2.dirname(file);

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (fs$2.existsSync(dir)) {
      return fs$2.writeFileSync.apply(fs$2, [file].concat(args));
    }

    mkdir.mkdirsSync(dir);
    fs$2.writeFileSync.apply(fs$2, [file].concat(args));
  }

  var outputFile_1 = {
    outputFile: u$2(outputFile$1),
    outputFileSync: outputFileSync$1
  };

  var stringify$1 = utils.stringify;
  var outputFile = outputFile_1.outputFile;

  function outputJson(_x, _x2) {
    return _outputJson.apply(this, arguments);
  }

  function _outputJson() {
    _outputJson = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(file, data) {
      var options,
          str,
          _args = arguments;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              options = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
              str = stringify$1(data, options);
              _context.next = 4;
              return outputFile(file, str, options);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _outputJson.apply(this, arguments);
  }

  var outputJson_1 = outputJson;

  var stringify = utils.stringify;
  var outputFileSync = outputFile_1.outputFileSync;

  function outputJsonSync(file, data, options) {
    var str = stringify(data, options);
    outputFileSync(file, str, options);
  }

  var outputJsonSync_1 = outputJsonSync;

  var u$1 = universalify$1.fromPromise;
  var jsonFile = jsonfile;
  jsonFile.outputJson = u$1(outputJson_1);
  jsonFile.outputJsonSync = outputJsonSync_1; // aliases

  jsonFile.outputJSON = jsonFile.outputJson;
  jsonFile.outputJSONSync = jsonFile.outputJsonSync;
  jsonFile.writeJSON = jsonFile.writeJson;
  jsonFile.writeJSONSync = jsonFile.writeJsonSync;
  jsonFile.readJSON = jsonFile.readJson;
  jsonFile.readJSONSync = jsonFile.readJsonSync;
  var json = jsonFile;

  var fs$1 = gracefulFs;
  var path$1 = require$$1__default["default"];
  var copy = copy$1.copy;
  var remove = remove_1.remove;
  var mkdirp = mkdirs$2.mkdirp;
  var pathExists = pathExists_1.pathExists;
  var stat$1 = stat$4;

  function move$1(src, dest, opts, cb) {
    if (typeof opts === 'function') {
      cb = opts;
      opts = {};
    }

    opts = opts || {};
    var overwrite = opts.overwrite || opts.clobber || false;
    stat$1.checkPaths(src, dest, 'move', opts, function (err, stats) {
      if (err) return cb(err);
      var srcStat = stats.srcStat,
          _stats$isChangingCase = stats.isChangingCase,
          isChangingCase = _stats$isChangingCase === void 0 ? false : _stats$isChangingCase;
      stat$1.checkParentPaths(src, srcStat, dest, 'move', function (err) {
        if (err) return cb(err);
        if (isParentRoot$1(dest)) return doRename$1(src, dest, overwrite, isChangingCase, cb);
        mkdirp(path$1.dirname(dest), function (err) {
          if (err) return cb(err);
          return doRename$1(src, dest, overwrite, isChangingCase, cb);
        });
      });
    });
  }

  function isParentRoot$1(dest) {
    var parent = path$1.dirname(dest);
    var parsedPath = path$1.parse(parent);
    return parsedPath.root === parent;
  }

  function doRename$1(src, dest, overwrite, isChangingCase, cb) {
    if (isChangingCase) return rename$1(src, dest, overwrite, cb);

    if (overwrite) {
      return remove(dest, function (err) {
        if (err) return cb(err);
        return rename$1(src, dest, overwrite, cb);
      });
    }

    pathExists(dest, function (err, destExists) {
      if (err) return cb(err);
      if (destExists) return cb(new Error('dest already exists.'));
      return rename$1(src, dest, overwrite, cb);
    });
  }

  function rename$1(src, dest, overwrite, cb) {
    fs$1.rename(src, dest, function (err) {
      if (!err) return cb();
      if (err.code !== 'EXDEV') return cb(err);
      return moveAcrossDevice$1(src, dest, overwrite, cb);
    });
  }

  function moveAcrossDevice$1(src, dest, overwrite, cb) {
    var opts = {
      overwrite: overwrite,
      errorOnExist: true
    };
    copy(src, dest, opts, function (err) {
      if (err) return cb(err);
      return remove(src, cb);
    });
  }

  var move_1 = move$1;

  var fs = gracefulFs;
  var path = require$$1__default["default"];
  var copySync = copy$1.copySync;
  var removeSync = remove_1.removeSync;
  var mkdirpSync = mkdirs$2.mkdirpSync;
  var stat = stat$4;

  function moveSync(src, dest, opts) {
    opts = opts || {};
    var overwrite = opts.overwrite || opts.clobber || false;

    var _stat$checkPathsSync = stat.checkPathsSync(src, dest, 'move', opts),
        srcStat = _stat$checkPathsSync.srcStat,
        _stat$checkPathsSync$ = _stat$checkPathsSync.isChangingCase,
        isChangingCase = _stat$checkPathsSync$ === void 0 ? false : _stat$checkPathsSync$;

    stat.checkParentPathsSync(src, srcStat, dest, 'move');
    if (!isParentRoot(dest)) mkdirpSync(path.dirname(dest));
    return doRename(src, dest, overwrite, isChangingCase);
  }

  function isParentRoot(dest) {
    var parent = path.dirname(dest);
    var parsedPath = path.parse(parent);
    return parsedPath.root === parent;
  }

  function doRename(src, dest, overwrite, isChangingCase) {
    if (isChangingCase) return rename(src, dest, overwrite);

    if (overwrite) {
      removeSync(dest);
      return rename(src, dest, overwrite);
    }

    if (fs.existsSync(dest)) throw new Error('dest already exists.');
    return rename(src, dest, overwrite);
  }

  function rename(src, dest, overwrite) {
    try {
      fs.renameSync(src, dest);
    } catch (err) {
      if (err.code !== 'EXDEV') throw err;
      return moveAcrossDevice(src, dest, overwrite);
    }
  }

  function moveAcrossDevice(src, dest, overwrite) {
    var opts = {
      overwrite: overwrite,
      errorOnExist: true
    };
    copySync(src, dest, opts);
    return removeSync(src);
  }

  var moveSync_1 = moveSync;

  var u = universalify$1.fromCallback;
  var move = {
    move: u(move_1),
    moveSync: moveSync_1
  };

  var lib = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, fs$h), copy$1), empty), ensure), json), mkdirs$2), move), outputFile_1), pathExists_1), remove_1);

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
          var dirent = lib.readdirSync(dirPath + '/' + routesStr, { withFileTypes: true });
          dirent.forEach(function (d) {
              if (d.isDirectory()) {
                  _this.readDir(dirPath, res, __spreadArray(__spreadArray([], route, true), [d.name]));
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

  // import * as path from 'path';
  var Dodai = /** @class */ (function () {
      function Dodai() {
          console.log("this is Dodai", process.argv);
          new CommandLine(process.argv).main();
      }
      return Dodai;
  }());

  new Dodai();

  return Dodai;

})(require$$0$2, require$$0, require$$0$1, require$$4, require$$5, require$$1);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9kYWkuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCIuLi9ub2RlX21vZHVsZXMvdW5pdmVyc2FsaWZ5L2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2dyYWNlZnVsLWZzL3BvbHlmaWxscy5qcyIsIi4uL25vZGVfbW9kdWxlcy9ncmFjZWZ1bC1mcy9sZWdhY3ktc3RyZWFtcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9ncmFjZWZ1bC1mcy9jbG9uZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9ncmFjZWZ1bC1mcy9ncmFjZWZ1bC1mcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9mcy1leHRyYS9saWIvZnMvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZnMtZXh0cmEvbGliL21rZGlycy91dGlscy5qcyIsIi4uL25vZGVfbW9kdWxlcy9mcy1leHRyYS9saWIvbWtkaXJzL21ha2UtZGlyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZzLWV4dHJhL2xpYi9ta2RpcnMvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZnMtZXh0cmEvbGliL3BhdGgtZXhpc3RzL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZzLWV4dHJhL2xpYi91dGlsL3V0aW1lcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9mcy1leHRyYS9saWIvdXRpbC9zdGF0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZzLWV4dHJhL2xpYi9jb3B5L2NvcHkuanMiLCIuLi9ub2RlX21vZHVsZXMvZnMtZXh0cmEvbGliL2NvcHkvY29weS1zeW5jLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZzLWV4dHJhL2xpYi9jb3B5L2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZzLWV4dHJhL2xpYi9yZW1vdmUvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZnMtZXh0cmEvbGliL2VtcHR5L2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZzLWV4dHJhL2xpYi9lbnN1cmUvZmlsZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9mcy1leHRyYS9saWIvZW5zdXJlL2xpbmsuanMiLCIuLi9ub2RlX21vZHVsZXMvZnMtZXh0cmEvbGliL2Vuc3VyZS9zeW1saW5rLXBhdGhzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZzLWV4dHJhL2xpYi9lbnN1cmUvc3ltbGluay10eXBlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZzLWV4dHJhL2xpYi9lbnN1cmUvc3ltbGluay5qcyIsIi4uL25vZGVfbW9kdWxlcy9mcy1leHRyYS9saWIvZW5zdXJlL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2pzb25maWxlL3V0aWxzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2pzb25maWxlL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZzLWV4dHJhL2xpYi9qc29uL2pzb25maWxlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZzLWV4dHJhL2xpYi9vdXRwdXQtZmlsZS9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9mcy1leHRyYS9saWIvanNvbi9vdXRwdXQtanNvbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9mcy1leHRyYS9saWIvanNvbi9vdXRwdXQtanNvbi1zeW5jLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZzLWV4dHJhL2xpYi9qc29uL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZzLWV4dHJhL2xpYi9tb3ZlL21vdmUuanMiLCIuLi9ub2RlX21vZHVsZXMvZnMtZXh0cmEvbGliL21vdmUvbW92ZS1zeW5jLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZzLWV4dHJhL2xpYi9tb3ZlL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZzLWV4dHJhL2xpYi9pbmRleC5qcyIsIi4uL3NyYy9NRmlsZS50cyIsIi4uL3NyYy9jb21tYW5kLWxpbmUudHMiLCIuLi9zcmMvZG9kYWkudHMiLCIuLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20pIHtcclxuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IGZyb20ubGVuZ3RoLCBqID0gdG8ubGVuZ3RoOyBpIDwgaWw7IGkrKywgaisrKVxyXG4gICAgICAgIHRvW2pdID0gZnJvbVtpXTtcclxuICAgIHJldHVybiB0bztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcbiIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnRzLmZyb21DYWxsYmFjayA9IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgaWYgKHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPT09ICdmdW5jdGlvbicpIGZuLmFwcGx5KHRoaXMsIGFyZ3MpXG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBmbi5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgLi4uYXJncyxcbiAgICAgICAgICAoZXJyLCByZXMpID0+IChlcnIgIT0gbnVsbCkgPyByZWplY3QoZXJyKSA6IHJlc29sdmUocmVzKVxuICAgICAgICApXG4gICAgICB9KVxuICAgIH1cbiAgfSwgJ25hbWUnLCB7IHZhbHVlOiBmbi5uYW1lIH0pXG59XG5cbmV4cG9ydHMuZnJvbVByb21pc2UgPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoLi4uYXJncykge1xuICAgIGNvbnN0IGNiID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdXG4gICAgaWYgKHR5cGVvZiBjYiAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3MpXG4gICAgZWxzZSBmbi5hcHBseSh0aGlzLCBhcmdzLnNsaWNlKDAsIC0xKSkudGhlbihyID0+IGNiKG51bGwsIHIpLCBjYilcbiAgfSwgJ25hbWUnLCB7IHZhbHVlOiBmbi5uYW1lIH0pXG59XG4iLCJ2YXIgY29uc3RhbnRzID0gcmVxdWlyZSgnY29uc3RhbnRzJylcblxudmFyIG9yaWdDd2QgPSBwcm9jZXNzLmN3ZFxudmFyIGN3ZCA9IG51bGxcblxudmFyIHBsYXRmb3JtID0gcHJvY2Vzcy5lbnYuR1JBQ0VGVUxfRlNfUExBVEZPUk0gfHwgcHJvY2Vzcy5wbGF0Zm9ybVxuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIWN3ZClcbiAgICBjd2QgPSBvcmlnQ3dkLmNhbGwocHJvY2VzcylcbiAgcmV0dXJuIGN3ZFxufVxudHJ5IHtcbiAgcHJvY2Vzcy5jd2QoKVxufSBjYXRjaCAoZXIpIHt9XG5cbi8vIFRoaXMgY2hlY2sgaXMgbmVlZGVkIHVudGlsIG5vZGUuanMgMTIgaXMgcmVxdWlyZWRcbmlmICh0eXBlb2YgcHJvY2Vzcy5jaGRpciA9PT0gJ2Z1bmN0aW9uJykge1xuICB2YXIgY2hkaXIgPSBwcm9jZXNzLmNoZGlyXG4gIHByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZCkge1xuICAgIGN3ZCA9IG51bGxcbiAgICBjaGRpci5jYWxsKHByb2Nlc3MsIGQpXG4gIH1cbiAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikgT2JqZWN0LnNldFByb3RvdHlwZU9mKHByb2Nlc3MuY2hkaXIsIGNoZGlyKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGNoXG5cbmZ1bmN0aW9uIHBhdGNoIChmcykge1xuICAvLyAocmUtKWltcGxlbWVudCBzb21lIHRoaW5ncyB0aGF0IGFyZSBrbm93biBidXN0ZWQgb3IgbWlzc2luZy5cblxuICAvLyBsY2htb2QsIGJyb2tlbiBwcmlvciB0byAwLjYuMlxuICAvLyBiYWNrLXBvcnQgdGhlIGZpeCBoZXJlLlxuICBpZiAoY29uc3RhbnRzLmhhc093blByb3BlcnR5KCdPX1NZTUxJTksnKSAmJlxuICAgICAgcHJvY2Vzcy52ZXJzaW9uLm1hdGNoKC9edjBcXC42XFwuWzAtMl18XnYwXFwuNVxcLi8pKSB7XG4gICAgcGF0Y2hMY2htb2QoZnMpXG4gIH1cblxuICAvLyBsdXRpbWVzIGltcGxlbWVudGF0aW9uLCBvciBuby1vcFxuICBpZiAoIWZzLmx1dGltZXMpIHtcbiAgICBwYXRjaEx1dGltZXMoZnMpXG4gIH1cblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vaXNhYWNzL25vZGUtZ3JhY2VmdWwtZnMvaXNzdWVzLzRcbiAgLy8gQ2hvd24gc2hvdWxkIG5vdCBmYWlsIG9uIGVpbnZhbCBvciBlcGVybSBpZiBub24tcm9vdC5cbiAgLy8gSXQgc2hvdWxkIG5vdCBmYWlsIG9uIGVub3N5cyBldmVyLCBhcyB0aGlzIGp1c3QgaW5kaWNhdGVzXG4gIC8vIHRoYXQgYSBmcyBkb2Vzbid0IHN1cHBvcnQgdGhlIGludGVuZGVkIG9wZXJhdGlvbi5cblxuICBmcy5jaG93biA9IGNob3duRml4KGZzLmNob3duKVxuICBmcy5mY2hvd24gPSBjaG93bkZpeChmcy5mY2hvd24pXG4gIGZzLmxjaG93biA9IGNob3duRml4KGZzLmxjaG93bilcblxuICBmcy5jaG1vZCA9IGNobW9kRml4KGZzLmNobW9kKVxuICBmcy5mY2htb2QgPSBjaG1vZEZpeChmcy5mY2htb2QpXG4gIGZzLmxjaG1vZCA9IGNobW9kRml4KGZzLmxjaG1vZClcblxuICBmcy5jaG93blN5bmMgPSBjaG93bkZpeFN5bmMoZnMuY2hvd25TeW5jKVxuICBmcy5mY2hvd25TeW5jID0gY2hvd25GaXhTeW5jKGZzLmZjaG93blN5bmMpXG4gIGZzLmxjaG93blN5bmMgPSBjaG93bkZpeFN5bmMoZnMubGNob3duU3luYylcblxuICBmcy5jaG1vZFN5bmMgPSBjaG1vZEZpeFN5bmMoZnMuY2htb2RTeW5jKVxuICBmcy5mY2htb2RTeW5jID0gY2htb2RGaXhTeW5jKGZzLmZjaG1vZFN5bmMpXG4gIGZzLmxjaG1vZFN5bmMgPSBjaG1vZEZpeFN5bmMoZnMubGNobW9kU3luYylcblxuICBmcy5zdGF0ID0gc3RhdEZpeChmcy5zdGF0KVxuICBmcy5mc3RhdCA9IHN0YXRGaXgoZnMuZnN0YXQpXG4gIGZzLmxzdGF0ID0gc3RhdEZpeChmcy5sc3RhdClcblxuICBmcy5zdGF0U3luYyA9IHN0YXRGaXhTeW5jKGZzLnN0YXRTeW5jKVxuICBmcy5mc3RhdFN5bmMgPSBzdGF0Rml4U3luYyhmcy5mc3RhdFN5bmMpXG4gIGZzLmxzdGF0U3luYyA9IHN0YXRGaXhTeW5jKGZzLmxzdGF0U3luYylcblxuICAvLyBpZiBsY2htb2QvbGNob3duIGRvIG5vdCBleGlzdCwgdGhlbiBtYWtlIHRoZW0gbm8tb3BzXG4gIGlmIChmcy5jaG1vZCAmJiAhZnMubGNobW9kKSB7XG4gICAgZnMubGNobW9kID0gZnVuY3Rpb24gKHBhdGgsIG1vZGUsIGNiKSB7XG4gICAgICBpZiAoY2IpIHByb2Nlc3MubmV4dFRpY2soY2IpXG4gICAgfVxuICAgIGZzLmxjaG1vZFN5bmMgPSBmdW5jdGlvbiAoKSB7fVxuICB9XG4gIGlmIChmcy5jaG93biAmJiAhZnMubGNob3duKSB7XG4gICAgZnMubGNob3duID0gZnVuY3Rpb24gKHBhdGgsIHVpZCwgZ2lkLCBjYikge1xuICAgICAgaWYgKGNiKSBwcm9jZXNzLm5leHRUaWNrKGNiKVxuICAgIH1cbiAgICBmcy5sY2hvd25TeW5jID0gZnVuY3Rpb24gKCkge31cbiAgfVxuXG4gIC8vIG9uIFdpbmRvd3MsIEEvViBzb2Z0d2FyZSBjYW4gbG9jayB0aGUgZGlyZWN0b3J5LCBjYXVzaW5nIHRoaXNcbiAgLy8gdG8gZmFpbCB3aXRoIGFuIEVBQ0NFUyBvciBFUEVSTSBpZiB0aGUgZGlyZWN0b3J5IGNvbnRhaW5zIG5ld2x5XG4gIC8vIGNyZWF0ZWQgZmlsZXMuICBUcnkgYWdhaW4gb24gZmFpbHVyZSwgZm9yIHVwIHRvIDYwIHNlY29uZHMuXG5cbiAgLy8gU2V0IHRoZSB0aW1lb3V0IHRoaXMgbG9uZyBiZWNhdXNlIHNvbWUgV2luZG93cyBBbnRpLVZpcnVzLCBzdWNoIGFzIFBhcml0eVxuICAvLyBiaXQ5LCBtYXkgbG9jayBmaWxlcyBmb3IgdXAgdG8gYSBtaW51dGUsIGNhdXNpbmcgbnBtIHBhY2thZ2UgaW5zdGFsbFxuICAvLyBmYWlsdXJlcy4gQWxzbywgdGFrZSBjYXJlIHRvIHlpZWxkIHRoZSBzY2hlZHVsZXIuIFdpbmRvd3Mgc2NoZWR1bGluZyBnaXZlc1xuICAvLyBDUFUgdG8gYSBidXN5IGxvb3BpbmcgcHJvY2Vzcywgd2hpY2ggY2FuIGNhdXNlIHRoZSBwcm9ncmFtIGNhdXNpbmcgdGhlIGxvY2tcbiAgLy8gY29udGVudGlvbiB0byBiZSBzdGFydmVkIG9mIENQVSBieSBub2RlLCBzbyB0aGUgY29udGVudGlvbiBkb2Vzbid0IHJlc29sdmUuXG4gIGlmIChwbGF0Zm9ybSA9PT0gXCJ3aW4zMlwiKSB7XG4gICAgZnMucmVuYW1lID0gdHlwZW9mIGZzLnJlbmFtZSAhPT0gJ2Z1bmN0aW9uJyA/IGZzLnJlbmFtZVxuICAgIDogKGZ1bmN0aW9uIChmcyRyZW5hbWUpIHtcbiAgICAgIGZ1bmN0aW9uIHJlbmFtZSAoZnJvbSwgdG8sIGNiKSB7XG4gICAgICAgIHZhciBzdGFydCA9IERhdGUubm93KClcbiAgICAgICAgdmFyIGJhY2tvZmYgPSAwO1xuICAgICAgICBmcyRyZW5hbWUoZnJvbSwgdG8sIGZ1bmN0aW9uIENCIChlcikge1xuICAgICAgICAgIGlmIChlclxuICAgICAgICAgICAgICAmJiAoZXIuY29kZSA9PT0gXCJFQUNDRVNcIiB8fCBlci5jb2RlID09PSBcIkVQRVJNXCIpXG4gICAgICAgICAgICAgICYmIERhdGUubm93KCkgLSBzdGFydCA8IDYwMDAwKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBmcy5zdGF0KHRvLCBmdW5jdGlvbiAoc3RhdGVyLCBzdCkge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZXIgJiYgc3RhdGVyLmNvZGUgPT09IFwiRU5PRU5UXCIpXG4gICAgICAgICAgICAgICAgICBmcyRyZW5hbWUoZnJvbSwgdG8sIENCKTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICBjYihlcilcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sIGJhY2tvZmYpXG4gICAgICAgICAgICBpZiAoYmFja29mZiA8IDEwMClcbiAgICAgICAgICAgICAgYmFja29mZiArPSAxMDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGNiKSBjYihlcilcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIE9iamVjdC5zZXRQcm90b3R5cGVPZihyZW5hbWUsIGZzJHJlbmFtZSlcbiAgICAgIHJldHVybiByZW5hbWVcbiAgICB9KShmcy5yZW5hbWUpXG4gIH1cblxuICAvLyBpZiByZWFkKCkgcmV0dXJucyBFQUdBSU4sIHRoZW4ganVzdCB0cnkgaXQgYWdhaW4uXG4gIGZzLnJlYWQgPSB0eXBlb2YgZnMucmVhZCAhPT0gJ2Z1bmN0aW9uJyA/IGZzLnJlYWRcbiAgOiAoZnVuY3Rpb24gKGZzJHJlYWQpIHtcbiAgICBmdW5jdGlvbiByZWFkIChmZCwgYnVmZmVyLCBvZmZzZXQsIGxlbmd0aCwgcG9zaXRpb24sIGNhbGxiYWNrXykge1xuICAgICAgdmFyIGNhbGxiYWNrXG4gICAgICBpZiAoY2FsbGJhY2tfICYmIHR5cGVvZiBjYWxsYmFja18gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFyIGVhZ0NvdW50ZXIgPSAwXG4gICAgICAgIGNhbGxiYWNrID0gZnVuY3Rpb24gKGVyLCBfLCBfXykge1xuICAgICAgICAgIGlmIChlciAmJiBlci5jb2RlID09PSAnRUFHQUlOJyAmJiBlYWdDb3VudGVyIDwgMTApIHtcbiAgICAgICAgICAgIGVhZ0NvdW50ZXIgKytcbiAgICAgICAgICAgIHJldHVybiBmcyRyZWFkLmNhbGwoZnMsIGZkLCBidWZmZXIsIG9mZnNldCwgbGVuZ3RoLCBwb3NpdGlvbiwgY2FsbGJhY2spXG4gICAgICAgICAgfVxuICAgICAgICAgIGNhbGxiYWNrXy5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmcyRyZWFkLmNhbGwoZnMsIGZkLCBidWZmZXIsIG9mZnNldCwgbGVuZ3RoLCBwb3NpdGlvbiwgY2FsbGJhY2spXG4gICAgfVxuXG4gICAgLy8gVGhpcyBlbnN1cmVzIGB1dGlsLnByb21pc2lmeWAgd29ya3MgYXMgaXQgZG9lcyBmb3IgbmF0aXZlIGBmcy5yZWFkYC5cbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSBPYmplY3Quc2V0UHJvdG90eXBlT2YocmVhZCwgZnMkcmVhZClcbiAgICByZXR1cm4gcmVhZFxuICB9KShmcy5yZWFkKVxuXG4gIGZzLnJlYWRTeW5jID0gdHlwZW9mIGZzLnJlYWRTeW5jICE9PSAnZnVuY3Rpb24nID8gZnMucmVhZFN5bmNcbiAgOiAoZnVuY3Rpb24gKGZzJHJlYWRTeW5jKSB7IHJldHVybiBmdW5jdGlvbiAoZmQsIGJ1ZmZlciwgb2Zmc2V0LCBsZW5ndGgsIHBvc2l0aW9uKSB7XG4gICAgdmFyIGVhZ0NvdW50ZXIgPSAwXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBmcyRyZWFkU3luYy5jYWxsKGZzLCBmZCwgYnVmZmVyLCBvZmZzZXQsIGxlbmd0aCwgcG9zaXRpb24pXG4gICAgICB9IGNhdGNoIChlcikge1xuICAgICAgICBpZiAoZXIuY29kZSA9PT0gJ0VBR0FJTicgJiYgZWFnQ291bnRlciA8IDEwKSB7XG4gICAgICAgICAgZWFnQ291bnRlciArK1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJcbiAgICAgIH1cbiAgICB9XG4gIH19KShmcy5yZWFkU3luYylcblxuICBmdW5jdGlvbiBwYXRjaExjaG1vZCAoZnMpIHtcbiAgICBmcy5sY2htb2QgPSBmdW5jdGlvbiAocGF0aCwgbW9kZSwgY2FsbGJhY2spIHtcbiAgICAgIGZzLm9wZW4oIHBhdGhcbiAgICAgICAgICAgICAsIGNvbnN0YW50cy5PX1dST05MWSB8IGNvbnN0YW50cy5PX1NZTUxJTktcbiAgICAgICAgICAgICAsIG1vZGVcbiAgICAgICAgICAgICAsIGZ1bmN0aW9uIChlcnIsIGZkKSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycilcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICAvLyBwcmVmZXIgdG8gcmV0dXJuIHRoZSBjaG1vZCBlcnJvciwgaWYgb25lIG9jY3VycyxcbiAgICAgICAgLy8gYnV0IHN0aWxsIHRyeSB0byBjbG9zZSwgYW5kIHJlcG9ydCBjbG9zaW5nIGVycm9ycyBpZiB0aGV5IG9jY3VyLlxuICAgICAgICBmcy5mY2htb2QoZmQsIG1vZGUsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICBmcy5jbG9zZShmZCwgZnVuY3Rpb24oZXJyMikge1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnIgfHwgZXJyMilcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBmcy5sY2htb2RTeW5jID0gZnVuY3Rpb24gKHBhdGgsIG1vZGUpIHtcbiAgICAgIHZhciBmZCA9IGZzLm9wZW5TeW5jKHBhdGgsIGNvbnN0YW50cy5PX1dST05MWSB8IGNvbnN0YW50cy5PX1NZTUxJTkssIG1vZGUpXG5cbiAgICAgIC8vIHByZWZlciB0byByZXR1cm4gdGhlIGNobW9kIGVycm9yLCBpZiBvbmUgb2NjdXJzLFxuICAgICAgLy8gYnV0IHN0aWxsIHRyeSB0byBjbG9zZSwgYW5kIHJlcG9ydCBjbG9zaW5nIGVycm9ycyBpZiB0aGV5IG9jY3VyLlxuICAgICAgdmFyIHRocmV3ID0gdHJ1ZVxuICAgICAgdmFyIHJldFxuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0ID0gZnMuZmNobW9kU3luYyhmZCwgbW9kZSlcbiAgICAgICAgdGhyZXcgPSBmYWxzZVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHRocmV3KSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZzLmNsb3NlU3luYyhmZClcbiAgICAgICAgICB9IGNhdGNoIChlcikge31cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmcy5jbG9zZVN5bmMoZmQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXRcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwYXRjaEx1dGltZXMgKGZzKSB7XG4gICAgaWYgKGNvbnN0YW50cy5oYXNPd25Qcm9wZXJ0eShcIk9fU1lNTElOS1wiKSAmJiBmcy5mdXRpbWVzKSB7XG4gICAgICBmcy5sdXRpbWVzID0gZnVuY3Rpb24gKHBhdGgsIGF0LCBtdCwgY2IpIHtcbiAgICAgICAgZnMub3BlbihwYXRoLCBjb25zdGFudHMuT19TWU1MSU5LLCBmdW5jdGlvbiAoZXIsIGZkKSB7XG4gICAgICAgICAgaWYgKGVyKSB7XG4gICAgICAgICAgICBpZiAoY2IpIGNiKGVyKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIGZzLmZ1dGltZXMoZmQsIGF0LCBtdCwgZnVuY3Rpb24gKGVyKSB7XG4gICAgICAgICAgICBmcy5jbG9zZShmZCwgZnVuY3Rpb24gKGVyMikge1xuICAgICAgICAgICAgICBpZiAoY2IpIGNiKGVyIHx8IGVyMilcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgZnMubHV0aW1lc1N5bmMgPSBmdW5jdGlvbiAocGF0aCwgYXQsIG10KSB7XG4gICAgICAgIHZhciBmZCA9IGZzLm9wZW5TeW5jKHBhdGgsIGNvbnN0YW50cy5PX1NZTUxJTkspXG4gICAgICAgIHZhciByZXRcbiAgICAgICAgdmFyIHRocmV3ID0gdHJ1ZVxuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldCA9IGZzLmZ1dGltZXNTeW5jKGZkLCBhdCwgbXQpXG4gICAgICAgICAgdGhyZXcgPSBmYWxzZVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmICh0aHJldykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgZnMuY2xvc2VTeW5jKGZkKVxuICAgICAgICAgICAgfSBjYXRjaCAoZXIpIHt9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZzLmNsb3NlU3luYyhmZClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldFxuICAgICAgfVxuXG4gICAgfSBlbHNlIGlmIChmcy5mdXRpbWVzKSB7XG4gICAgICBmcy5sdXRpbWVzID0gZnVuY3Rpb24gKF9hLCBfYiwgX2MsIGNiKSB7IGlmIChjYikgcHJvY2Vzcy5uZXh0VGljayhjYikgfVxuICAgICAgZnMubHV0aW1lc1N5bmMgPSBmdW5jdGlvbiAoKSB7fVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNobW9kRml4IChvcmlnKSB7XG4gICAgaWYgKCFvcmlnKSByZXR1cm4gb3JpZ1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBtb2RlLCBjYikge1xuICAgICAgcmV0dXJuIG9yaWcuY2FsbChmcywgdGFyZ2V0LCBtb2RlLCBmdW5jdGlvbiAoZXIpIHtcbiAgICAgICAgaWYgKGNob3duRXJPayhlcikpIGVyID0gbnVsbFxuICAgICAgICBpZiAoY2IpIGNiLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2htb2RGaXhTeW5jIChvcmlnKSB7XG4gICAgaWYgKCFvcmlnKSByZXR1cm4gb3JpZ1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBtb2RlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gb3JpZy5jYWxsKGZzLCB0YXJnZXQsIG1vZGUpXG4gICAgICB9IGNhdGNoIChlcikge1xuICAgICAgICBpZiAoIWNob3duRXJPayhlcikpIHRocm93IGVyXG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICBmdW5jdGlvbiBjaG93bkZpeCAob3JpZykge1xuICAgIGlmICghb3JpZykgcmV0dXJuIG9yaWdcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwgdWlkLCBnaWQsIGNiKSB7XG4gICAgICByZXR1cm4gb3JpZy5jYWxsKGZzLCB0YXJnZXQsIHVpZCwgZ2lkLCBmdW5jdGlvbiAoZXIpIHtcbiAgICAgICAgaWYgKGNob3duRXJPayhlcikpIGVyID0gbnVsbFxuICAgICAgICBpZiAoY2IpIGNiLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2hvd25GaXhTeW5jIChvcmlnKSB7XG4gICAgaWYgKCFvcmlnKSByZXR1cm4gb3JpZ1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCB1aWQsIGdpZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIG9yaWcuY2FsbChmcywgdGFyZ2V0LCB1aWQsIGdpZClcbiAgICAgIH0gY2F0Y2ggKGVyKSB7XG4gICAgICAgIGlmICghY2hvd25Fck9rKGVyKSkgdGhyb3cgZXJcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzdGF0Rml4IChvcmlnKSB7XG4gICAgaWYgKCFvcmlnKSByZXR1cm4gb3JpZ1xuICAgIC8vIE9sZGVyIHZlcnNpb25zIG9mIE5vZGUgZXJyb25lb3VzbHkgcmV0dXJuZWQgc2lnbmVkIGludGVnZXJzIGZvclxuICAgIC8vIHVpZCArIGdpZC5cbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwgb3B0aW9ucywgY2IpIHtcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYiA9IG9wdGlvbnNcbiAgICAgICAgb3B0aW9ucyA9IG51bGxcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGNhbGxiYWNrIChlciwgc3RhdHMpIHtcbiAgICAgICAgaWYgKHN0YXRzKSB7XG4gICAgICAgICAgaWYgKHN0YXRzLnVpZCA8IDApIHN0YXRzLnVpZCArPSAweDEwMDAwMDAwMFxuICAgICAgICAgIGlmIChzdGF0cy5naWQgPCAwKSBzdGF0cy5naWQgKz0gMHgxMDAwMDAwMDBcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2IpIGNiLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25zID8gb3JpZy5jYWxsKGZzLCB0YXJnZXQsIG9wdGlvbnMsIGNhbGxiYWNrKVxuICAgICAgICA6IG9yaWcuY2FsbChmcywgdGFyZ2V0LCBjYWxsYmFjaylcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzdGF0Rml4U3luYyAob3JpZykge1xuICAgIGlmICghb3JpZykgcmV0dXJuIG9yaWdcbiAgICAvLyBPbGRlciB2ZXJzaW9ucyBvZiBOb2RlIGVycm9uZW91c2x5IHJldHVybmVkIHNpZ25lZCBpbnRlZ2VycyBmb3JcbiAgICAvLyB1aWQgKyBnaWQuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICAgIHZhciBzdGF0cyA9IG9wdGlvbnMgPyBvcmlnLmNhbGwoZnMsIHRhcmdldCwgb3B0aW9ucylcbiAgICAgICAgOiBvcmlnLmNhbGwoZnMsIHRhcmdldClcbiAgICAgIGlmIChzdGF0cykge1xuICAgICAgICBpZiAoc3RhdHMudWlkIDwgMCkgc3RhdHMudWlkICs9IDB4MTAwMDAwMDAwXG4gICAgICAgIGlmIChzdGF0cy5naWQgPCAwKSBzdGF0cy5naWQgKz0gMHgxMDAwMDAwMDBcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdGF0cztcbiAgICB9XG4gIH1cblxuICAvLyBFTk9TWVMgbWVhbnMgdGhhdCB0aGUgZnMgZG9lc24ndCBzdXBwb3J0IHRoZSBvcC4gSnVzdCBpZ25vcmVcbiAgLy8gdGhhdCwgYmVjYXVzZSBpdCBkb2Vzbid0IG1hdHRlci5cbiAgLy9cbiAgLy8gaWYgdGhlcmUncyBubyBnZXR1aWQsIG9yIGlmIGdldHVpZCgpIGlzIHNvbWV0aGluZyBvdGhlclxuICAvLyB0aGFuIDAsIGFuZCB0aGUgZXJyb3IgaXMgRUlOVkFMIG9yIEVQRVJNLCB0aGVuIGp1c3QgaWdub3JlXG4gIC8vIGl0LlxuICAvL1xuICAvLyBUaGlzIHNwZWNpZmljIGNhc2UgaXMgYSBzaWxlbnQgZmFpbHVyZSBpbiBjcCwgaW5zdGFsbCwgdGFyLFxuICAvLyBhbmQgbW9zdCBvdGhlciB1bml4IHRvb2xzIHRoYXQgbWFuYWdlIHBlcm1pc3Npb25zLlxuICAvL1xuICAvLyBXaGVuIHJ1bm5pbmcgYXMgcm9vdCwgb3IgaWYgb3RoZXIgdHlwZXMgb2YgZXJyb3JzIGFyZVxuICAvLyBlbmNvdW50ZXJlZCwgdGhlbiBpdCdzIHN0cmljdC5cbiAgZnVuY3Rpb24gY2hvd25Fck9rIChlcikge1xuICAgIGlmICghZXIpXG4gICAgICByZXR1cm4gdHJ1ZVxuXG4gICAgaWYgKGVyLmNvZGUgPT09IFwiRU5PU1lTXCIpXG4gICAgICByZXR1cm4gdHJ1ZVxuXG4gICAgdmFyIG5vbnJvb3QgPSAhcHJvY2Vzcy5nZXR1aWQgfHwgcHJvY2Vzcy5nZXR1aWQoKSAhPT0gMFxuICAgIGlmIChub25yb290KSB7XG4gICAgICBpZiAoZXIuY29kZSA9PT0gXCJFSU5WQUxcIiB8fCBlci5jb2RlID09PSBcIkVQRVJNXCIpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cbiIsInZhciBTdHJlYW0gPSByZXF1aXJlKCdzdHJlYW0nKS5TdHJlYW1cblxubW9kdWxlLmV4cG9ydHMgPSBsZWdhY3lcblxuZnVuY3Rpb24gbGVnYWN5IChmcykge1xuICByZXR1cm4ge1xuICAgIFJlYWRTdHJlYW06IFJlYWRTdHJlYW0sXG4gICAgV3JpdGVTdHJlYW06IFdyaXRlU3RyZWFtXG4gIH1cblxuICBmdW5jdGlvbiBSZWFkU3RyZWFtIChwYXRoLCBvcHRpb25zKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJlYWRTdHJlYW0pKSByZXR1cm4gbmV3IFJlYWRTdHJlYW0ocGF0aCwgb3B0aW9ucyk7XG5cbiAgICBTdHJlYW0uY2FsbCh0aGlzKTtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgdGhpcy5mZCA9IG51bGw7XG4gICAgdGhpcy5yZWFkYWJsZSA9IHRydWU7XG4gICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuZmxhZ3MgPSAncic7XG4gICAgdGhpcy5tb2RlID0gNDM4OyAvKj0wNjY2Ki9cbiAgICB0aGlzLmJ1ZmZlclNpemUgPSA2NCAqIDEwMjQ7XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIC8vIE1peGluIG9wdGlvbnMgaW50byB0aGlzXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvcHRpb25zKTtcbiAgICBmb3IgKHZhciBpbmRleCA9IDAsIGxlbmd0aCA9IGtleXMubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaW5kZXhdO1xuICAgICAgdGhpc1trZXldID0gb3B0aW9uc1trZXldO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmVuY29kaW5nKSB0aGlzLnNldEVuY29kaW5nKHRoaXMuZW5jb2RpbmcpO1xuXG4gICAgaWYgKHRoaXMuc3RhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKCdudW1iZXInICE9PSB0eXBlb2YgdGhpcy5zdGFydCkge1xuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoJ3N0YXJ0IG11c3QgYmUgYSBOdW1iZXInKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmVuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuZW5kID0gSW5maW5pdHk7XG4gICAgICB9IGVsc2UgaWYgKCdudW1iZXInICE9PSB0eXBlb2YgdGhpcy5lbmQpIHtcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKCdlbmQgbXVzdCBiZSBhIE51bWJlcicpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5zdGFydCA+IHRoaXMuZW5kKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignc3RhcnQgbXVzdCBiZSA8PSBlbmQnKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wb3MgPSB0aGlzLnN0YXJ0O1xuICAgIH1cblxuICAgIGlmICh0aGlzLmZkICE9PSBudWxsKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICBzZWxmLl9yZWFkKCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmcy5vcGVuKHRoaXMucGF0aCwgdGhpcy5mbGFncywgdGhpcy5tb2RlLCBmdW5jdGlvbiAoZXJyLCBmZCkge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBzZWxmLmVtaXQoJ2Vycm9yJywgZXJyKTtcbiAgICAgICAgc2VsZi5yZWFkYWJsZSA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNlbGYuZmQgPSBmZDtcbiAgICAgIHNlbGYuZW1pdCgnb3BlbicsIGZkKTtcbiAgICAgIHNlbGYuX3JlYWQoKTtcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gV3JpdGVTdHJlYW0gKHBhdGgsIG9wdGlvbnMpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgV3JpdGVTdHJlYW0pKSByZXR1cm4gbmV3IFdyaXRlU3RyZWFtKHBhdGgsIG9wdGlvbnMpO1xuXG4gICAgU3RyZWFtLmNhbGwodGhpcyk7XG5cbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgIHRoaXMuZmQgPSBudWxsO1xuICAgIHRoaXMud3JpdGFibGUgPSB0cnVlO1xuXG4gICAgdGhpcy5mbGFncyA9ICd3JztcbiAgICB0aGlzLmVuY29kaW5nID0gJ2JpbmFyeSc7XG4gICAgdGhpcy5tb2RlID0gNDM4OyAvKj0wNjY2Ki9cbiAgICB0aGlzLmJ5dGVzV3JpdHRlbiA9IDA7XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIC8vIE1peGluIG9wdGlvbnMgaW50byB0aGlzXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvcHRpb25zKTtcbiAgICBmb3IgKHZhciBpbmRleCA9IDAsIGxlbmd0aCA9IGtleXMubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaW5kZXhdO1xuICAgICAgdGhpc1trZXldID0gb3B0aW9uc1trZXldO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICgnbnVtYmVyJyAhPT0gdHlwZW9mIHRoaXMuc3RhcnQpIHtcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKCdzdGFydCBtdXN0IGJlIGEgTnVtYmVyJyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zdGFydCA8IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdzdGFydCBtdXN0IGJlID49IHplcm8nKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wb3MgPSB0aGlzLnN0YXJ0O1xuICAgIH1cblxuICAgIHRoaXMuYnVzeSA9IGZhbHNlO1xuICAgIHRoaXMuX3F1ZXVlID0gW107XG5cbiAgICBpZiAodGhpcy5mZCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5fb3BlbiA9IGZzLm9wZW47XG4gICAgICB0aGlzLl9xdWV1ZS5wdXNoKFt0aGlzLl9vcGVuLCB0aGlzLnBhdGgsIHRoaXMuZmxhZ3MsIHRoaXMubW9kZSwgdW5kZWZpbmVkXSk7XG4gICAgICB0aGlzLmZsdXNoKCk7XG4gICAgfVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZVxuXG52YXIgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqLl9fcHJvdG9fX1xufVxuXG5mdW5jdGlvbiBjbG9uZSAob2JqKSB7XG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpXG4gICAgcmV0dXJuIG9ialxuXG4gIGlmIChvYmogaW5zdGFuY2VvZiBPYmplY3QpXG4gICAgdmFyIGNvcHkgPSB7IF9fcHJvdG9fXzogZ2V0UHJvdG90eXBlT2Yob2JqKSB9XG4gIGVsc2VcbiAgICB2YXIgY29weSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb3B5LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpKVxuICB9KVxuXG4gIHJldHVybiBjb3B5XG59XG4iLCJ2YXIgZnMgPSByZXF1aXJlKCdmcycpXG52YXIgcG9seWZpbGxzID0gcmVxdWlyZSgnLi9wb2x5ZmlsbHMuanMnKVxudmFyIGxlZ2FjeSA9IHJlcXVpcmUoJy4vbGVnYWN5LXN0cmVhbXMuanMnKVxudmFyIGNsb25lID0gcmVxdWlyZSgnLi9jbG9uZS5qcycpXG5cbnZhciB1dGlsID0gcmVxdWlyZSgndXRpbCcpXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0IC0gbm9kZSAwLnggcG9seWZpbGwgKi9cbnZhciBncmFjZWZ1bFF1ZXVlXG52YXIgcHJldmlvdXNTeW1ib2xcblxuLyogaXN0YW5idWwgaWdub3JlIGVsc2UgLSBub2RlIDAueCBwb2x5ZmlsbCAqL1xuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC5mb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgZ3JhY2VmdWxRdWV1ZSA9IFN5bWJvbC5mb3IoJ2dyYWNlZnVsLWZzLnF1ZXVlJylcbiAgLy8gVGhpcyBpcyB1c2VkIGluIHRlc3RpbmcgYnkgZnV0dXJlIHZlcnNpb25zXG4gIHByZXZpb3VzU3ltYm9sID0gU3ltYm9sLmZvcignZ3JhY2VmdWwtZnMucHJldmlvdXMnKVxufSBlbHNlIHtcbiAgZ3JhY2VmdWxRdWV1ZSA9ICdfX19ncmFjZWZ1bC1mcy5xdWV1ZSdcbiAgcHJldmlvdXNTeW1ib2wgPSAnX19fZ3JhY2VmdWwtZnMucHJldmlvdXMnXG59XG5cbmZ1bmN0aW9uIG5vb3AgKCkge31cblxuZnVuY3Rpb24gcHVibGlzaFF1ZXVlKGNvbnRleHQsIHF1ZXVlKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb250ZXh0LCBncmFjZWZ1bFF1ZXVlLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBxdWV1ZVxuICAgIH1cbiAgfSlcbn1cblxudmFyIGRlYnVnID0gbm9vcFxuaWYgKHV0aWwuZGVidWdsb2cpXG4gIGRlYnVnID0gdXRpbC5kZWJ1Z2xvZygnZ2ZzNCcpXG5lbHNlIGlmICgvXFxiZ2ZzNFxcYi9pLnRlc3QocHJvY2Vzcy5lbnYuTk9ERV9ERUJVRyB8fCAnJykpXG4gIGRlYnVnID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG0gPSB1dGlsLmZvcm1hdC5hcHBseSh1dGlsLCBhcmd1bWVudHMpXG4gICAgbSA9ICdHRlM0OiAnICsgbS5zcGxpdCgvXFxuLykuam9pbignXFxuR0ZTNDogJylcbiAgICBjb25zb2xlLmVycm9yKG0pXG4gIH1cblxuLy8gT25jZSB0aW1lIGluaXRpYWxpemF0aW9uXG5pZiAoIWZzW2dyYWNlZnVsUXVldWVdKSB7XG4gIC8vIFRoaXMgcXVldWUgY2FuIGJlIHNoYXJlZCBieSBtdWx0aXBsZSBsb2FkZWQgaW5zdGFuY2VzXG4gIHZhciBxdWV1ZSA9IGdsb2JhbFtncmFjZWZ1bFF1ZXVlXSB8fCBbXVxuICBwdWJsaXNoUXVldWUoZnMsIHF1ZXVlKVxuXG4gIC8vIFBhdGNoIGZzLmNsb3NlL2Nsb3NlU3luYyB0byBzaGFyZWQgcXVldWUgdmVyc2lvbiwgYmVjYXVzZSB3ZSBuZWVkXG4gIC8vIHRvIHJldHJ5KCkgd2hlbmV2ZXIgYSBjbG9zZSBoYXBwZW5zICphbnl3aGVyZSogaW4gdGhlIHByb2dyYW0uXG4gIC8vIFRoaXMgaXMgZXNzZW50aWFsIHdoZW4gbXVsdGlwbGUgZ3JhY2VmdWwtZnMgaW5zdGFuY2VzIGFyZVxuICAvLyBpbiBwbGF5IGF0IHRoZSBzYW1lIHRpbWUuXG4gIGZzLmNsb3NlID0gKGZ1bmN0aW9uIChmcyRjbG9zZSkge1xuICAgIGZ1bmN0aW9uIGNsb3NlIChmZCwgY2IpIHtcbiAgICAgIHJldHVybiBmcyRjbG9zZS5jYWxsKGZzLCBmZCwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIHVzZXMgdGhlIGdyYWNlZnVsLWZzIHNoYXJlZCBxdWV1ZVxuICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgIHJlc2V0UXVldWUoKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICBjYi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgICB9KVxuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbG9zZSwgcHJldmlvdXNTeW1ib2wsIHtcbiAgICAgIHZhbHVlOiBmcyRjbG9zZVxuICAgIH0pXG4gICAgcmV0dXJuIGNsb3NlXG4gIH0pKGZzLmNsb3NlKVxuXG4gIGZzLmNsb3NlU3luYyA9IChmdW5jdGlvbiAoZnMkY2xvc2VTeW5jKSB7XG4gICAgZnVuY3Rpb24gY2xvc2VTeW5jIChmZCkge1xuICAgICAgLy8gVGhpcyBmdW5jdGlvbiB1c2VzIHRoZSBncmFjZWZ1bC1mcyBzaGFyZWQgcXVldWVcbiAgICAgIGZzJGNsb3NlU3luYy5hcHBseShmcywgYXJndW1lbnRzKVxuICAgICAgcmVzZXRRdWV1ZSgpXG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsb3NlU3luYywgcHJldmlvdXNTeW1ib2wsIHtcbiAgICAgIHZhbHVlOiBmcyRjbG9zZVN5bmNcbiAgICB9KVxuICAgIHJldHVybiBjbG9zZVN5bmNcbiAgfSkoZnMuY2xvc2VTeW5jKVxuXG4gIGlmICgvXFxiZ2ZzNFxcYi9pLnRlc3QocHJvY2Vzcy5lbnYuTk9ERV9ERUJVRyB8fCAnJykpIHtcbiAgICBwcm9jZXNzLm9uKCdleGl0JywgZnVuY3Rpb24oKSB7XG4gICAgICBkZWJ1Zyhmc1tncmFjZWZ1bFF1ZXVlXSlcbiAgICAgIHJlcXVpcmUoJ2Fzc2VydCcpLmVxdWFsKGZzW2dyYWNlZnVsUXVldWVdLmxlbmd0aCwgMClcbiAgICB9KVxuICB9XG59XG5cbmlmICghZ2xvYmFsW2dyYWNlZnVsUXVldWVdKSB7XG4gIHB1Ymxpc2hRdWV1ZShnbG9iYWwsIGZzW2dyYWNlZnVsUXVldWVdKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXRjaChjbG9uZShmcykpXG5pZiAocHJvY2Vzcy5lbnYuVEVTVF9HUkFDRUZVTF9GU19HTE9CQUxfUEFUQ0ggJiYgIWZzLl9fcGF0Y2hlZCkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gcGF0Y2goZnMpXG4gICAgZnMuX19wYXRjaGVkID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gcGF0Y2ggKGZzKSB7XG4gIC8vIEV2ZXJ5dGhpbmcgdGhhdCByZWZlcmVuY2VzIHRoZSBvcGVuKCkgZnVuY3Rpb24gbmVlZHMgdG8gYmUgaW4gaGVyZVxuICBwb2x5ZmlsbHMoZnMpXG4gIGZzLmdyYWNlZnVsaWZ5ID0gcGF0Y2hcblxuICBmcy5jcmVhdGVSZWFkU3RyZWFtID0gY3JlYXRlUmVhZFN0cmVhbVxuICBmcy5jcmVhdGVXcml0ZVN0cmVhbSA9IGNyZWF0ZVdyaXRlU3RyZWFtXG4gIHZhciBmcyRyZWFkRmlsZSA9IGZzLnJlYWRGaWxlXG4gIGZzLnJlYWRGaWxlID0gcmVhZEZpbGVcbiAgZnVuY3Rpb24gcmVhZEZpbGUgKHBhdGgsIG9wdGlvbnMsIGNiKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKVxuICAgICAgY2IgPSBvcHRpb25zLCBvcHRpb25zID0gbnVsbFxuXG4gICAgcmV0dXJuIGdvJHJlYWRGaWxlKHBhdGgsIG9wdGlvbnMsIGNiKVxuXG4gICAgZnVuY3Rpb24gZ28kcmVhZEZpbGUgKHBhdGgsIG9wdGlvbnMsIGNiLCBzdGFydFRpbWUpIHtcbiAgICAgIHJldHVybiBmcyRyZWFkRmlsZShwYXRoLCBvcHRpb25zLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGlmIChlcnIgJiYgKGVyci5jb2RlID09PSAnRU1GSUxFJyB8fCBlcnIuY29kZSA9PT0gJ0VORklMRScpKVxuICAgICAgICAgIGVucXVldWUoW2dvJHJlYWRGaWxlLCBbcGF0aCwgb3B0aW9ucywgY2JdLCBlcnIsIHN0YXJ0VGltZSB8fCBEYXRlLm5vdygpLCBEYXRlLm5vdygpXSlcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgIGNiLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICB2YXIgZnMkd3JpdGVGaWxlID0gZnMud3JpdGVGaWxlXG4gIGZzLndyaXRlRmlsZSA9IHdyaXRlRmlsZVxuICBmdW5jdGlvbiB3cml0ZUZpbGUgKHBhdGgsIGRhdGEsIG9wdGlvbnMsIGNiKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKVxuICAgICAgY2IgPSBvcHRpb25zLCBvcHRpb25zID0gbnVsbFxuXG4gICAgcmV0dXJuIGdvJHdyaXRlRmlsZShwYXRoLCBkYXRhLCBvcHRpb25zLCBjYilcblxuICAgIGZ1bmN0aW9uIGdvJHdyaXRlRmlsZSAocGF0aCwgZGF0YSwgb3B0aW9ucywgY2IsIHN0YXJ0VGltZSkge1xuICAgICAgcmV0dXJuIGZzJHdyaXRlRmlsZShwYXRoLCBkYXRhLCBvcHRpb25zLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGlmIChlcnIgJiYgKGVyci5jb2RlID09PSAnRU1GSUxFJyB8fCBlcnIuY29kZSA9PT0gJ0VORklMRScpKVxuICAgICAgICAgIGVucXVldWUoW2dvJHdyaXRlRmlsZSwgW3BhdGgsIGRhdGEsIG9wdGlvbnMsIGNiXSwgZXJyLCBzdGFydFRpbWUgfHwgRGF0ZS5ub3coKSwgRGF0ZS5ub3coKV0pXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICBjYi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgdmFyIGZzJGFwcGVuZEZpbGUgPSBmcy5hcHBlbmRGaWxlXG4gIGlmIChmcyRhcHBlbmRGaWxlKVxuICAgIGZzLmFwcGVuZEZpbGUgPSBhcHBlbmRGaWxlXG4gIGZ1bmN0aW9uIGFwcGVuZEZpbGUgKHBhdGgsIGRhdGEsIG9wdGlvbnMsIGNiKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKVxuICAgICAgY2IgPSBvcHRpb25zLCBvcHRpb25zID0gbnVsbFxuXG4gICAgcmV0dXJuIGdvJGFwcGVuZEZpbGUocGF0aCwgZGF0YSwgb3B0aW9ucywgY2IpXG5cbiAgICBmdW5jdGlvbiBnbyRhcHBlbmRGaWxlIChwYXRoLCBkYXRhLCBvcHRpb25zLCBjYiwgc3RhcnRUaW1lKSB7XG4gICAgICByZXR1cm4gZnMkYXBwZW5kRmlsZShwYXRoLCBkYXRhLCBvcHRpb25zLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGlmIChlcnIgJiYgKGVyci5jb2RlID09PSAnRU1GSUxFJyB8fCBlcnIuY29kZSA9PT0gJ0VORklMRScpKVxuICAgICAgICAgIGVucXVldWUoW2dvJGFwcGVuZEZpbGUsIFtwYXRoLCBkYXRhLCBvcHRpb25zLCBjYl0sIGVyciwgc3RhcnRUaW1lIHx8IERhdGUubm93KCksIERhdGUubm93KCldKVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgY2IuYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHZhciBmcyRjb3B5RmlsZSA9IGZzLmNvcHlGaWxlXG4gIGlmIChmcyRjb3B5RmlsZSlcbiAgICBmcy5jb3B5RmlsZSA9IGNvcHlGaWxlXG4gIGZ1bmN0aW9uIGNvcHlGaWxlIChzcmMsIGRlc3QsIGZsYWdzLCBjYikge1xuICAgIGlmICh0eXBlb2YgZmxhZ3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNiID0gZmxhZ3NcbiAgICAgIGZsYWdzID0gMFxuICAgIH1cbiAgICByZXR1cm4gZ28kY29weUZpbGUoc3JjLCBkZXN0LCBmbGFncywgY2IpXG5cbiAgICBmdW5jdGlvbiBnbyRjb3B5RmlsZSAoc3JjLCBkZXN0LCBmbGFncywgY2IsIHN0YXJ0VGltZSkge1xuICAgICAgcmV0dXJuIGZzJGNvcHlGaWxlKHNyYywgZGVzdCwgZmxhZ3MsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgaWYgKGVyciAmJiAoZXJyLmNvZGUgPT09ICdFTUZJTEUnIHx8IGVyci5jb2RlID09PSAnRU5GSUxFJykpXG4gICAgICAgICAgZW5xdWV1ZShbZ28kY29weUZpbGUsIFtzcmMsIGRlc3QsIGZsYWdzLCBjYl0sIGVyciwgc3RhcnRUaW1lIHx8IERhdGUubm93KCksIERhdGUubm93KCldKVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgY2IuYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHZhciBmcyRyZWFkZGlyID0gZnMucmVhZGRpclxuICBmcy5yZWFkZGlyID0gcmVhZGRpclxuICB2YXIgbm9SZWFkZGlyT3B0aW9uVmVyc2lvbnMgPSAvXnZbMC01XVxcLi9cbiAgZnVuY3Rpb24gcmVhZGRpciAocGF0aCwgb3B0aW9ucywgY2IpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpXG4gICAgICBjYiA9IG9wdGlvbnMsIG9wdGlvbnMgPSBudWxsXG5cbiAgICB2YXIgZ28kcmVhZGRpciA9IG5vUmVhZGRpck9wdGlvblZlcnNpb25zLnRlc3QocHJvY2Vzcy52ZXJzaW9uKVxuICAgICAgPyBmdW5jdGlvbiBnbyRyZWFkZGlyIChwYXRoLCBvcHRpb25zLCBjYiwgc3RhcnRUaW1lKSB7XG4gICAgICAgIHJldHVybiBmcyRyZWFkZGlyKHBhdGgsIGZzJHJlYWRkaXJDYWxsYmFjayhcbiAgICAgICAgICBwYXRoLCBvcHRpb25zLCBjYiwgc3RhcnRUaW1lXG4gICAgICAgICkpXG4gICAgICB9XG4gICAgICA6IGZ1bmN0aW9uIGdvJHJlYWRkaXIgKHBhdGgsIG9wdGlvbnMsIGNiLCBzdGFydFRpbWUpIHtcbiAgICAgICAgcmV0dXJuIGZzJHJlYWRkaXIocGF0aCwgb3B0aW9ucywgZnMkcmVhZGRpckNhbGxiYWNrKFxuICAgICAgICAgIHBhdGgsIG9wdGlvbnMsIGNiLCBzdGFydFRpbWVcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgIHJldHVybiBnbyRyZWFkZGlyKHBhdGgsIG9wdGlvbnMsIGNiKVxuXG4gICAgZnVuY3Rpb24gZnMkcmVhZGRpckNhbGxiYWNrIChwYXRoLCBvcHRpb25zLCBjYiwgc3RhcnRUaW1lKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGVyciwgZmlsZXMpIHtcbiAgICAgICAgaWYgKGVyciAmJiAoZXJyLmNvZGUgPT09ICdFTUZJTEUnIHx8IGVyci5jb2RlID09PSAnRU5GSUxFJykpXG4gICAgICAgICAgZW5xdWV1ZShbXG4gICAgICAgICAgICBnbyRyZWFkZGlyLFxuICAgICAgICAgICAgW3BhdGgsIG9wdGlvbnMsIGNiXSxcbiAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgIHN0YXJ0VGltZSB8fCBEYXRlLm5vdygpLFxuICAgICAgICAgICAgRGF0ZS5ub3coKVxuICAgICAgICAgIF0pXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGlmIChmaWxlcyAmJiBmaWxlcy5zb3J0KVxuICAgICAgICAgICAgZmlsZXMuc29ydCgpXG5cbiAgICAgICAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgY2IuY2FsbCh0aGlzLCBlcnIsIGZpbGVzKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHByb2Nlc3MudmVyc2lvbi5zdWJzdHIoMCwgNCkgPT09ICd2MC44Jykge1xuICAgIHZhciBsZWdTdHJlYW1zID0gbGVnYWN5KGZzKVxuICAgIFJlYWRTdHJlYW0gPSBsZWdTdHJlYW1zLlJlYWRTdHJlYW1cbiAgICBXcml0ZVN0cmVhbSA9IGxlZ1N0cmVhbXMuV3JpdGVTdHJlYW1cbiAgfVxuXG4gIHZhciBmcyRSZWFkU3RyZWFtID0gZnMuUmVhZFN0cmVhbVxuICBpZiAoZnMkUmVhZFN0cmVhbSkge1xuICAgIFJlYWRTdHJlYW0ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShmcyRSZWFkU3RyZWFtLnByb3RvdHlwZSlcbiAgICBSZWFkU3RyZWFtLnByb3RvdHlwZS5vcGVuID0gUmVhZFN0cmVhbSRvcGVuXG4gIH1cblxuICB2YXIgZnMkV3JpdGVTdHJlYW0gPSBmcy5Xcml0ZVN0cmVhbVxuICBpZiAoZnMkV3JpdGVTdHJlYW0pIHtcbiAgICBXcml0ZVN0cmVhbS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKGZzJFdyaXRlU3RyZWFtLnByb3RvdHlwZSlcbiAgICBXcml0ZVN0cmVhbS5wcm90b3R5cGUub3BlbiA9IFdyaXRlU3RyZWFtJG9wZW5cbiAgfVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmcywgJ1JlYWRTdHJlYW0nLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gUmVhZFN0cmVhbVxuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICBSZWFkU3RyZWFtID0gdmFsXG4gICAgfSxcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZnMsICdXcml0ZVN0cmVhbScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBXcml0ZVN0cmVhbVxuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICBXcml0ZVN0cmVhbSA9IHZhbFxuICAgIH0sXG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSlcblxuICAvLyBsZWdhY3kgbmFtZXNcbiAgdmFyIEZpbGVSZWFkU3RyZWFtID0gUmVhZFN0cmVhbVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZnMsICdGaWxlUmVhZFN0cmVhbScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBGaWxlUmVhZFN0cmVhbVxuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICBGaWxlUmVhZFN0cmVhbSA9IHZhbFxuICAgIH0sXG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSlcbiAgdmFyIEZpbGVXcml0ZVN0cmVhbSA9IFdyaXRlU3RyZWFtXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmcywgJ0ZpbGVXcml0ZVN0cmVhbScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBGaWxlV3JpdGVTdHJlYW1cbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gKHZhbCkge1xuICAgICAgRmlsZVdyaXRlU3RyZWFtID0gdmFsXG4gICAgfSxcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KVxuXG4gIGZ1bmN0aW9uIFJlYWRTdHJlYW0gKHBhdGgsIG9wdGlvbnMpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mIFJlYWRTdHJlYW0pXG4gICAgICByZXR1cm4gZnMkUmVhZFN0cmVhbS5hcHBseSh0aGlzLCBhcmd1bWVudHMpLCB0aGlzXG4gICAgZWxzZVxuICAgICAgcmV0dXJuIFJlYWRTdHJlYW0uYXBwbHkoT2JqZWN0LmNyZWF0ZShSZWFkU3RyZWFtLnByb3RvdHlwZSksIGFyZ3VtZW50cylcbiAgfVxuXG4gIGZ1bmN0aW9uIFJlYWRTdHJlYW0kb3BlbiAoKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzXG4gICAgb3Blbih0aGF0LnBhdGgsIHRoYXQuZmxhZ3MsIHRoYXQubW9kZSwgZnVuY3Rpb24gKGVyciwgZmQpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgaWYgKHRoYXQuYXV0b0Nsb3NlKVxuICAgICAgICAgIHRoYXQuZGVzdHJveSgpXG5cbiAgICAgICAgdGhhdC5lbWl0KCdlcnJvcicsIGVycilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoYXQuZmQgPSBmZFxuICAgICAgICB0aGF0LmVtaXQoJ29wZW4nLCBmZClcbiAgICAgICAgdGhhdC5yZWFkKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gV3JpdGVTdHJlYW0gKHBhdGgsIG9wdGlvbnMpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mIFdyaXRlU3RyZWFtKVxuICAgICAgcmV0dXJuIGZzJFdyaXRlU3RyZWFtLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIHRoaXNcbiAgICBlbHNlXG4gICAgICByZXR1cm4gV3JpdGVTdHJlYW0uYXBwbHkoT2JqZWN0LmNyZWF0ZShXcml0ZVN0cmVhbS5wcm90b3R5cGUpLCBhcmd1bWVudHMpXG4gIH1cblxuICBmdW5jdGlvbiBXcml0ZVN0cmVhbSRvcGVuICgpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXNcbiAgICBvcGVuKHRoYXQucGF0aCwgdGhhdC5mbGFncywgdGhhdC5tb2RlLCBmdW5jdGlvbiAoZXJyLCBmZCkge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICB0aGF0LmRlc3Ryb3koKVxuICAgICAgICB0aGF0LmVtaXQoJ2Vycm9yJywgZXJyKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhhdC5mZCA9IGZkXG4gICAgICAgIHRoYXQuZW1pdCgnb3BlbicsIGZkKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVSZWFkU3RyZWFtIChwYXRoLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBmcy5SZWFkU3RyZWFtKHBhdGgsIG9wdGlvbnMpXG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVXcml0ZVN0cmVhbSAocGF0aCwgb3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgZnMuV3JpdGVTdHJlYW0ocGF0aCwgb3B0aW9ucylcbiAgfVxuXG4gIHZhciBmcyRvcGVuID0gZnMub3BlblxuICBmcy5vcGVuID0gb3BlblxuICBmdW5jdGlvbiBvcGVuIChwYXRoLCBmbGFncywgbW9kZSwgY2IpIHtcbiAgICBpZiAodHlwZW9mIG1vZGUgPT09ICdmdW5jdGlvbicpXG4gICAgICBjYiA9IG1vZGUsIG1vZGUgPSBudWxsXG5cbiAgICByZXR1cm4gZ28kb3BlbihwYXRoLCBmbGFncywgbW9kZSwgY2IpXG5cbiAgICBmdW5jdGlvbiBnbyRvcGVuIChwYXRoLCBmbGFncywgbW9kZSwgY2IsIHN0YXJ0VGltZSkge1xuICAgICAgcmV0dXJuIGZzJG9wZW4ocGF0aCwgZmxhZ3MsIG1vZGUsIGZ1bmN0aW9uIChlcnIsIGZkKSB7XG4gICAgICAgIGlmIChlcnIgJiYgKGVyci5jb2RlID09PSAnRU1GSUxFJyB8fCBlcnIuY29kZSA9PT0gJ0VORklMRScpKVxuICAgICAgICAgIGVucXVldWUoW2dvJG9wZW4sIFtwYXRoLCBmbGFncywgbW9kZSwgY2JdLCBlcnIsIHN0YXJ0VGltZSB8fCBEYXRlLm5vdygpLCBEYXRlLm5vdygpXSlcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgIGNiLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnNcbn1cblxuZnVuY3Rpb24gZW5xdWV1ZSAoZWxlbSkge1xuICBkZWJ1ZygnRU5RVUVVRScsIGVsZW1bMF0ubmFtZSwgZWxlbVsxXSlcbiAgZnNbZ3JhY2VmdWxRdWV1ZV0ucHVzaChlbGVtKVxuICByZXRyeSgpXG59XG5cbi8vIGtlZXAgdHJhY2sgb2YgdGhlIHRpbWVvdXQgYmV0d2VlbiByZXRyeSgpIGNhbGxzXG52YXIgcmV0cnlUaW1lclxuXG4vLyByZXNldCB0aGUgc3RhcnRUaW1lIGFuZCBsYXN0VGltZSB0byBub3dcbi8vIHRoaXMgcmVzZXRzIHRoZSBzdGFydCBvZiB0aGUgNjAgc2Vjb25kIG92ZXJhbGwgdGltZW91dCBhcyB3ZWxsIGFzIHRoZVxuLy8gZGVsYXkgYmV0d2VlbiBhdHRlbXB0cyBzbyB0aGF0IHdlJ2xsIHJldHJ5IHRoZXNlIGpvYnMgc29vbmVyXG5mdW5jdGlvbiByZXNldFF1ZXVlICgpIHtcbiAgdmFyIG5vdyA9IERhdGUubm93KClcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBmc1tncmFjZWZ1bFF1ZXVlXS5sZW5ndGg7ICsraSkge1xuICAgIC8vIGVudHJpZXMgdGhhdCBhcmUgb25seSBhIGxlbmd0aCBvZiAyIGFyZSBmcm9tIGFuIG9sZGVyIHZlcnNpb24sIGRvbid0XG4gICAgLy8gYm90aGVyIG1vZGlmeWluZyB0aG9zZSBzaW5jZSB0aGV5J2xsIGJlIHJldHJpZWQgYW55d2F5LlxuICAgIGlmIChmc1tncmFjZWZ1bFF1ZXVlXVtpXS5sZW5ndGggPiAyKSB7XG4gICAgICBmc1tncmFjZWZ1bFF1ZXVlXVtpXVszXSA9IG5vdyAvLyBzdGFydFRpbWVcbiAgICAgIGZzW2dyYWNlZnVsUXVldWVdW2ldWzRdID0gbm93IC8vIGxhc3RUaW1lXG4gICAgfVxuICB9XG4gIC8vIGNhbGwgcmV0cnkgdG8gbWFrZSBzdXJlIHdlJ3JlIGFjdGl2ZWx5IHByb2Nlc3NpbmcgdGhlIHF1ZXVlXG4gIHJldHJ5KClcbn1cblxuZnVuY3Rpb24gcmV0cnkgKCkge1xuICAvLyBjbGVhciB0aGUgdGltZXIgYW5kIHJlbW92ZSBpdCB0byBoZWxwIHByZXZlbnQgdW5pbnRlbmRlZCBjb25jdXJyZW5jeVxuICBjbGVhclRpbWVvdXQocmV0cnlUaW1lcilcbiAgcmV0cnlUaW1lciA9IHVuZGVmaW5lZFxuXG4gIGlmIChmc1tncmFjZWZ1bFF1ZXVlXS5sZW5ndGggPT09IDApXG4gICAgcmV0dXJuXG5cbiAgdmFyIGVsZW0gPSBmc1tncmFjZWZ1bFF1ZXVlXS5zaGlmdCgpXG4gIHZhciBmbiA9IGVsZW1bMF1cbiAgdmFyIGFyZ3MgPSBlbGVtWzFdXG4gIC8vIHRoZXNlIGl0ZW1zIG1heSBiZSB1bnNldCBpZiB0aGV5IHdlcmUgYWRkZWQgYnkgYW4gb2xkZXIgZ3JhY2VmdWwtZnNcbiAgdmFyIGVyciA9IGVsZW1bMl1cbiAgdmFyIHN0YXJ0VGltZSA9IGVsZW1bM11cbiAgdmFyIGxhc3RUaW1lID0gZWxlbVs0XVxuXG4gIC8vIGlmIHdlIGRvbid0IGhhdmUgYSBzdGFydFRpbWUgd2UgaGF2ZSBubyB3YXkgb2Yga25vd2luZyBpZiB3ZSd2ZSB3YWl0ZWRcbiAgLy8gbG9uZyBlbm91Z2gsIHNvIGdvIGFoZWFkIGFuZCByZXRyeSB0aGlzIGl0ZW0gbm93XG4gIGlmIChzdGFydFRpbWUgPT09IHVuZGVmaW5lZCkge1xuICAgIGRlYnVnKCdSRVRSWScsIGZuLm5hbWUsIGFyZ3MpXG4gICAgZm4uYXBwbHkobnVsbCwgYXJncylcbiAgfSBlbHNlIGlmIChEYXRlLm5vdygpIC0gc3RhcnRUaW1lID49IDYwMDAwKSB7XG4gICAgLy8gaXQncyBiZWVuIG1vcmUgdGhhbiA2MCBzZWNvbmRzIHRvdGFsLCBiYWlsIG5vd1xuICAgIGRlYnVnKCdUSU1FT1VUJywgZm4ubmFtZSwgYXJncylcbiAgICB2YXIgY2IgPSBhcmdzLnBvcCgpXG4gICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgIGNiLmNhbGwobnVsbCwgZXJyKVxuICB9IGVsc2Uge1xuICAgIC8vIHRoZSBhbW91bnQgb2YgdGltZSBiZXR3ZWVuIHRoZSBsYXN0IGF0dGVtcHQgYW5kIHJpZ2h0IG5vd1xuICAgIHZhciBzaW5jZUF0dGVtcHQgPSBEYXRlLm5vdygpIC0gbGFzdFRpbWVcbiAgICAvLyB0aGUgYW1vdW50IG9mIHRpbWUgYmV0d2VlbiB3aGVuIHdlIGZpcnN0IHRyaWVkLCBhbmQgd2hlbiB3ZSBsYXN0IHRyaWVkXG4gICAgLy8gcm91bmRlZCB1cCB0byBhdCBsZWFzdCAxXG4gICAgdmFyIHNpbmNlU3RhcnQgPSBNYXRoLm1heChsYXN0VGltZSAtIHN0YXJ0VGltZSwgMSlcbiAgICAvLyBiYWNrb2ZmLiB3YWl0IGxvbmdlciB0aGFuIHRoZSB0b3RhbCB0aW1lIHdlJ3ZlIGJlZW4gcmV0cnlpbmcsIGJ1dCBvbmx5XG4gICAgLy8gdXAgdG8gYSBtYXhpbXVtIG9mIDEwMG1zXG4gICAgdmFyIGRlc2lyZWREZWxheSA9IE1hdGgubWluKHNpbmNlU3RhcnQgKiAxLjIsIDEwMClcbiAgICAvLyBpdCdzIGJlZW4gbG9uZyBlbm91Z2ggc2luY2UgdGhlIGxhc3QgcmV0cnksIGRvIGl0IGFnYWluXG4gICAgaWYgKHNpbmNlQXR0ZW1wdCA+PSBkZXNpcmVkRGVsYXkpIHtcbiAgICAgIGRlYnVnKCdSRVRSWScsIGZuLm5hbWUsIGFyZ3MpXG4gICAgICBmbi5hcHBseShudWxsLCBhcmdzLmNvbmNhdChbc3RhcnRUaW1lXSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIHdlIGNhbid0IGRvIHRoaXMgam9iIHlldCwgcHVzaCBpdCB0byB0aGUgZW5kIG9mIHRoZSBxdWV1ZVxuICAgICAgLy8gYW5kIGxldCB0aGUgbmV4dCBpdGVyYXRpb24gY2hlY2sgYWdhaW5cbiAgICAgIGZzW2dyYWNlZnVsUXVldWVdLnB1c2goZWxlbSlcbiAgICB9XG4gIH1cblxuICAvLyBzY2hlZHVsZSBvdXIgbmV4dCBydW4gaWYgb25lIGlzbid0IGFscmVhZHkgc2NoZWR1bGVkXG4gIGlmIChyZXRyeVRpbWVyID09PSB1bmRlZmluZWQpIHtcbiAgICByZXRyeVRpbWVyID0gc2V0VGltZW91dChyZXRyeSwgMClcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG4vLyBUaGlzIGlzIGFkYXB0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vbm9ybWFsaXplL216XG4vLyBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxNiBKb25hdGhhbiBPbmcgbWVAam9uZ2xlYmVycnkuY29tIGFuZCBDb250cmlidXRvcnNcbmNvbnN0IHUgPSByZXF1aXJlKCd1bml2ZXJzYWxpZnknKS5mcm9tQ2FsbGJhY2tcbmNvbnN0IGZzID0gcmVxdWlyZSgnZ3JhY2VmdWwtZnMnKVxuXG5jb25zdCBhcGkgPSBbXG4gICdhY2Nlc3MnLFxuICAnYXBwZW5kRmlsZScsXG4gICdjaG1vZCcsXG4gICdjaG93bicsXG4gICdjbG9zZScsXG4gICdjb3B5RmlsZScsXG4gICdmY2htb2QnLFxuICAnZmNob3duJyxcbiAgJ2ZkYXRhc3luYycsXG4gICdmc3RhdCcsXG4gICdmc3luYycsXG4gICdmdHJ1bmNhdGUnLFxuICAnZnV0aW1lcycsXG4gICdsY2htb2QnLFxuICAnbGNob3duJyxcbiAgJ2xpbmsnLFxuICAnbHN0YXQnLFxuICAnbWtkaXInLFxuICAnbWtkdGVtcCcsXG4gICdvcGVuJyxcbiAgJ29wZW5kaXInLFxuICAncmVhZGRpcicsXG4gICdyZWFkRmlsZScsXG4gICdyZWFkbGluaycsXG4gICdyZWFscGF0aCcsXG4gICdyZW5hbWUnLFxuICAncm0nLFxuICAncm1kaXInLFxuICAnc3RhdCcsXG4gICdzeW1saW5rJyxcbiAgJ3RydW5jYXRlJyxcbiAgJ3VubGluaycsXG4gICd1dGltZXMnLFxuICAnd3JpdGVGaWxlJ1xuXS5maWx0ZXIoa2V5ID0+IHtcbiAgLy8gU29tZSBjb21tYW5kcyBhcmUgbm90IGF2YWlsYWJsZSBvbiBzb21lIHN5c3RlbXMuIEV4OlxuICAvLyBmcy5jcCB3YXMgYWRkZWQgaW4gTm9kZS5qcyB2MTYuNy4wXG4gIC8vIGZzLmxjaG93biBpcyBub3QgYXZhaWxhYmxlIG9uIGF0IGxlYXN0IHNvbWUgTGludXhcbiAgcmV0dXJuIHR5cGVvZiBmc1trZXldID09PSAnZnVuY3Rpb24nXG59KVxuXG4vLyBFeHBvcnQgY2xvbmVkIGZzOlxuT2JqZWN0LmFzc2lnbihleHBvcnRzLCBmcylcblxuLy8gVW5pdmVyc2FsaWZ5IGFzeW5jIG1ldGhvZHM6XG5hcGkuZm9yRWFjaChtZXRob2QgPT4ge1xuICBleHBvcnRzW21ldGhvZF0gPSB1KGZzW21ldGhvZF0pXG59KVxuXG4vLyBXZSBkaWZmZXIgZnJvbSBtei9mcyBpbiB0aGF0IHdlIHN0aWxsIHNoaXAgdGhlIG9sZCwgYnJva2VuLCBmcy5leGlzdHMoKVxuLy8gc2luY2Ugd2UgYXJlIGEgZHJvcC1pbiByZXBsYWNlbWVudCBmb3IgdGhlIG5hdGl2ZSBtb2R1bGVcbmV4cG9ydHMuZXhpc3RzID0gZnVuY3Rpb24gKGZpbGVuYW1lLCBjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGZzLmV4aXN0cyhmaWxlbmFtZSwgY2FsbGJhY2spXG4gIH1cbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIHJldHVybiBmcy5leGlzdHMoZmlsZW5hbWUsIHJlc29sdmUpXG4gIH0pXG59XG5cbi8vIGZzLnJlYWQoKSwgZnMud3JpdGUoKSwgZnMucmVhZHYoKSwgJiBmcy53cml0ZXYoKSBuZWVkIHNwZWNpYWwgdHJlYXRtZW50IGR1ZSB0byBtdWx0aXBsZSBjYWxsYmFjayBhcmdzXG5cbmV4cG9ydHMucmVhZCA9IGZ1bmN0aW9uIChmZCwgYnVmZmVyLCBvZmZzZXQsIGxlbmd0aCwgcG9zaXRpb24sIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZnMucmVhZChmZCwgYnVmZmVyLCBvZmZzZXQsIGxlbmd0aCwgcG9zaXRpb24sIGNhbGxiYWNrKVxuICB9XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgZnMucmVhZChmZCwgYnVmZmVyLCBvZmZzZXQsIGxlbmd0aCwgcG9zaXRpb24sIChlcnIsIGJ5dGVzUmVhZCwgYnVmZmVyKSA9PiB7XG4gICAgICBpZiAoZXJyKSByZXR1cm4gcmVqZWN0KGVycilcbiAgICAgIHJlc29sdmUoeyBieXRlc1JlYWQsIGJ1ZmZlciB9KVxuICAgIH0pXG4gIH0pXG59XG5cbi8vIEZ1bmN0aW9uIHNpZ25hdHVyZSBjYW4gYmVcbi8vIGZzLndyaXRlKGZkLCBidWZmZXJbLCBvZmZzZXRbLCBsZW5ndGhbLCBwb3NpdGlvbl1dXSwgY2FsbGJhY2spXG4vLyBPUlxuLy8gZnMud3JpdGUoZmQsIHN0cmluZ1ssIHBvc2l0aW9uWywgZW5jb2RpbmddXSwgY2FsbGJhY2spXG4vLyBXZSBuZWVkIHRvIGhhbmRsZSBib3RoIGNhc2VzLCBzbyB3ZSB1c2UgLi4uYXJnc1xuZXhwb3J0cy53cml0ZSA9IGZ1bmN0aW9uIChmZCwgYnVmZmVyLCAuLi5hcmdzKSB7XG4gIGlmICh0eXBlb2YgYXJnc1thcmdzLmxlbmd0aCAtIDFdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGZzLndyaXRlKGZkLCBidWZmZXIsIC4uLmFyZ3MpXG4gIH1cblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGZzLndyaXRlKGZkLCBidWZmZXIsIC4uLmFyZ3MsIChlcnIsIGJ5dGVzV3JpdHRlbiwgYnVmZmVyKSA9PiB7XG4gICAgICBpZiAoZXJyKSByZXR1cm4gcmVqZWN0KGVycilcbiAgICAgIHJlc29sdmUoeyBieXRlc1dyaXR0ZW4sIGJ1ZmZlciB9KVxuICAgIH0pXG4gIH0pXG59XG5cbi8vIEZ1bmN0aW9uIHNpZ25hdHVyZSBpc1xuLy8gcy5yZWFkdihmZCwgYnVmZmVyc1ssIHBvc2l0aW9uXSwgY2FsbGJhY2spXG4vLyBXZSBuZWVkIHRvIGhhbmRsZSB0aGUgb3B0aW9uYWwgYXJnLCBzbyB3ZSB1c2UgLi4uYXJnc1xuZXhwb3J0cy5yZWFkdiA9IGZ1bmN0aW9uIChmZCwgYnVmZmVycywgLi4uYXJncykge1xuICBpZiAodHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBmcy5yZWFkdihmZCwgYnVmZmVycywgLi4uYXJncylcbiAgfVxuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgZnMucmVhZHYoZmQsIGJ1ZmZlcnMsIC4uLmFyZ3MsIChlcnIsIGJ5dGVzUmVhZCwgYnVmZmVycykgPT4ge1xuICAgICAgaWYgKGVycikgcmV0dXJuIHJlamVjdChlcnIpXG4gICAgICByZXNvbHZlKHsgYnl0ZXNSZWFkLCBidWZmZXJzIH0pXG4gICAgfSlcbiAgfSlcbn1cblxuLy8gRnVuY3Rpb24gc2lnbmF0dXJlIGlzXG4vLyBzLndyaXRldihmZCwgYnVmZmVyc1ssIHBvc2l0aW9uXSwgY2FsbGJhY2spXG4vLyBXZSBuZWVkIHRvIGhhbmRsZSB0aGUgb3B0aW9uYWwgYXJnLCBzbyB3ZSB1c2UgLi4uYXJnc1xuZXhwb3J0cy53cml0ZXYgPSBmdW5jdGlvbiAoZmQsIGJ1ZmZlcnMsIC4uLmFyZ3MpIHtcbiAgaWYgKHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZnMud3JpdGV2KGZkLCBidWZmZXJzLCAuLi5hcmdzKVxuICB9XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBmcy53cml0ZXYoZmQsIGJ1ZmZlcnMsIC4uLmFyZ3MsIChlcnIsIGJ5dGVzV3JpdHRlbiwgYnVmZmVycykgPT4ge1xuICAgICAgaWYgKGVycikgcmV0dXJuIHJlamVjdChlcnIpXG4gICAgICByZXNvbHZlKHsgYnl0ZXNXcml0dGVuLCBidWZmZXJzIH0pXG4gICAgfSlcbiAgfSlcbn1cblxuLy8gZnMucmVhbHBhdGgubmF0aXZlIHNvbWV0aW1lcyBub3QgYXZhaWxhYmxlIGlmIGZzIGlzIG1vbmtleS1wYXRjaGVkXG5pZiAodHlwZW9mIGZzLnJlYWxwYXRoLm5hdGl2ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICBleHBvcnRzLnJlYWxwYXRoLm5hdGl2ZSA9IHUoZnMucmVhbHBhdGgubmF0aXZlKVxufSBlbHNlIHtcbiAgcHJvY2Vzcy5lbWl0V2FybmluZyhcbiAgICAnZnMucmVhbHBhdGgubmF0aXZlIGlzIG5vdCBhIGZ1bmN0aW9uLiBJcyBmcyBiZWluZyBtb25rZXktcGF0Y2hlZD8nLFxuICAgICdXYXJuaW5nJywgJ2ZzLWV4dHJhLVdBUk4wMDAzJ1xuICApXG59XG4iLCIvLyBBZGFwdGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9tYWtlLWRpclxuLy8gQ29weXJpZ2h0IChjKSBTaW5kcmUgU29yaHVzIDxzaW5kcmVzb3JodXNAZ21haWwuY29tPiAoc2luZHJlc29yaHVzLmNvbSlcbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuJ3VzZSBzdHJpY3QnXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9pc3N1ZXMvODk4N1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL2xpYnV2L2xpYnV2L3B1bGwvMTA4OFxubW9kdWxlLmV4cG9ydHMuY2hlY2tQYXRoID0gZnVuY3Rpb24gY2hlY2tQYXRoIChwdGgpIHtcbiAgaWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicpIHtcbiAgICBjb25zdCBwYXRoSGFzSW52YWxpZFdpbkNoYXJhY3RlcnMgPSAvWzw+OlwifD8qXS8udGVzdChwdGgucmVwbGFjZShwYXRoLnBhcnNlKHB0aCkucm9vdCwgJycpKVxuXG4gICAgaWYgKHBhdGhIYXNJbnZhbGlkV2luQ2hhcmFjdGVycykge1xuICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYFBhdGggY29udGFpbnMgaW52YWxpZCBjaGFyYWN0ZXJzOiAke3B0aH1gKVxuICAgICAgZXJyb3IuY29kZSA9ICdFSU5WQUwnXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5jb25zdCBmcyA9IHJlcXVpcmUoJy4uL2ZzJylcbmNvbnN0IHsgY2hlY2tQYXRoIH0gPSByZXF1aXJlKCcuL3V0aWxzJylcblxuY29uc3QgZ2V0TW9kZSA9IG9wdGlvbnMgPT4ge1xuICBjb25zdCBkZWZhdWx0cyA9IHsgbW9kZTogMG83NzcgfVxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdudW1iZXInKSByZXR1cm4gb3B0aW9uc1xuICByZXR1cm4gKHsgLi4uZGVmYXVsdHMsIC4uLm9wdGlvbnMgfSkubW9kZVxufVxuXG5tb2R1bGUuZXhwb3J0cy5tYWtlRGlyID0gYXN5bmMgKGRpciwgb3B0aW9ucykgPT4ge1xuICBjaGVja1BhdGgoZGlyKVxuXG4gIHJldHVybiBmcy5ta2RpcihkaXIsIHtcbiAgICBtb2RlOiBnZXRNb2RlKG9wdGlvbnMpLFxuICAgIHJlY3Vyc2l2ZTogdHJ1ZVxuICB9KVxufVxuXG5tb2R1bGUuZXhwb3J0cy5tYWtlRGlyU3luYyA9IChkaXIsIG9wdGlvbnMpID0+IHtcbiAgY2hlY2tQYXRoKGRpcilcblxuICByZXR1cm4gZnMubWtkaXJTeW5jKGRpciwge1xuICAgIG1vZGU6IGdldE1vZGUob3B0aW9ucyksXG4gICAgcmVjdXJzaXZlOiB0cnVlXG4gIH0pXG59XG4iLCIndXNlIHN0cmljdCdcbmNvbnN0IHUgPSByZXF1aXJlKCd1bml2ZXJzYWxpZnknKS5mcm9tUHJvbWlzZVxuY29uc3QgeyBtYWtlRGlyOiBfbWFrZURpciwgbWFrZURpclN5bmMgfSA9IHJlcXVpcmUoJy4vbWFrZS1kaXInKVxuY29uc3QgbWFrZURpciA9IHUoX21ha2VEaXIpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBta2RpcnM6IG1ha2VEaXIsXG4gIG1rZGlyc1N5bmM6IG1ha2VEaXJTeW5jLFxuICAvLyBhbGlhc1xuICBta2RpcnA6IG1ha2VEaXIsXG4gIG1rZGlycFN5bmM6IG1ha2VEaXJTeW5jLFxuICBlbnN1cmVEaXI6IG1ha2VEaXIsXG4gIGVuc3VyZURpclN5bmM6IG1ha2VEaXJTeW5jXG59XG4iLCIndXNlIHN0cmljdCdcbmNvbnN0IHUgPSByZXF1aXJlKCd1bml2ZXJzYWxpZnknKS5mcm9tUHJvbWlzZVxuY29uc3QgZnMgPSByZXF1aXJlKCcuLi9mcycpXG5cbmZ1bmN0aW9uIHBhdGhFeGlzdHMgKHBhdGgpIHtcbiAgcmV0dXJuIGZzLmFjY2VzcyhwYXRoKS50aGVuKCgpID0+IHRydWUpLmNhdGNoKCgpID0+IGZhbHNlKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGF0aEV4aXN0czogdShwYXRoRXhpc3RzKSxcbiAgcGF0aEV4aXN0c1N5bmM6IGZzLmV4aXN0c1N5bmNcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2dyYWNlZnVsLWZzJylcblxuZnVuY3Rpb24gdXRpbWVzTWlsbGlzIChwYXRoLCBhdGltZSwgbXRpbWUsIGNhbGxiYWNrKSB7XG4gIC8vIGlmICghSEFTX01JTExJU19SRVMpIHJldHVybiBmcy51dGltZXMocGF0aCwgYXRpbWUsIG10aW1lLCBjYWxsYmFjaylcbiAgZnMub3BlbihwYXRoLCAncisnLCAoZXJyLCBmZCkgPT4ge1xuICAgIGlmIChlcnIpIHJldHVybiBjYWxsYmFjayhlcnIpXG4gICAgZnMuZnV0aW1lcyhmZCwgYXRpbWUsIG10aW1lLCBmdXRpbWVzRXJyID0+IHtcbiAgICAgIGZzLmNsb3NlKGZkLCBjbG9zZUVyciA9PiB7XG4gICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soZnV0aW1lc0VyciB8fCBjbG9zZUVycilcbiAgICAgIH0pXG4gICAgfSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gdXRpbWVzTWlsbGlzU3luYyAocGF0aCwgYXRpbWUsIG10aW1lKSB7XG4gIGNvbnN0IGZkID0gZnMub3BlblN5bmMocGF0aCwgJ3IrJylcbiAgZnMuZnV0aW1lc1N5bmMoZmQsIGF0aW1lLCBtdGltZSlcbiAgcmV0dXJuIGZzLmNsb3NlU3luYyhmZClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHV0aW1lc01pbGxpcyxcbiAgdXRpbWVzTWlsbGlzU3luY1xufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGZzID0gcmVxdWlyZSgnLi4vZnMnKVxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuY29uc3QgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKVxuXG5mdW5jdGlvbiBnZXRTdGF0cyAoc3JjLCBkZXN0LCBvcHRzKSB7XG4gIGNvbnN0IHN0YXRGdW5jID0gb3B0cy5kZXJlZmVyZW5jZVxuICAgID8gKGZpbGUpID0+IGZzLnN0YXQoZmlsZSwgeyBiaWdpbnQ6IHRydWUgfSlcbiAgICA6IChmaWxlKSA9PiBmcy5sc3RhdChmaWxlLCB7IGJpZ2ludDogdHJ1ZSB9KVxuICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgIHN0YXRGdW5jKHNyYyksXG4gICAgc3RhdEZ1bmMoZGVzdCkuY2F0Y2goZXJyID0+IHtcbiAgICAgIGlmIChlcnIuY29kZSA9PT0gJ0VOT0VOVCcpIHJldHVybiBudWxsXG4gICAgICB0aHJvdyBlcnJcbiAgICB9KVxuICBdKS50aGVuKChbc3JjU3RhdCwgZGVzdFN0YXRdKSA9PiAoeyBzcmNTdGF0LCBkZXN0U3RhdCB9KSlcbn1cblxuZnVuY3Rpb24gZ2V0U3RhdHNTeW5jIChzcmMsIGRlc3QsIG9wdHMpIHtcbiAgbGV0IGRlc3RTdGF0XG4gIGNvbnN0IHN0YXRGdW5jID0gb3B0cy5kZXJlZmVyZW5jZVxuICAgID8gKGZpbGUpID0+IGZzLnN0YXRTeW5jKGZpbGUsIHsgYmlnaW50OiB0cnVlIH0pXG4gICAgOiAoZmlsZSkgPT4gZnMubHN0YXRTeW5jKGZpbGUsIHsgYmlnaW50OiB0cnVlIH0pXG4gIGNvbnN0IHNyY1N0YXQgPSBzdGF0RnVuYyhzcmMpXG4gIHRyeSB7XG4gICAgZGVzdFN0YXQgPSBzdGF0RnVuYyhkZXN0KVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLmNvZGUgPT09ICdFTk9FTlQnKSByZXR1cm4geyBzcmNTdGF0LCBkZXN0U3RhdDogbnVsbCB9XG4gICAgdGhyb3cgZXJyXG4gIH1cbiAgcmV0dXJuIHsgc3JjU3RhdCwgZGVzdFN0YXQgfVxufVxuXG5mdW5jdGlvbiBjaGVja1BhdGhzIChzcmMsIGRlc3QsIGZ1bmNOYW1lLCBvcHRzLCBjYikge1xuICB1dGlsLmNhbGxiYWNraWZ5KGdldFN0YXRzKShzcmMsIGRlc3QsIG9wdHMsIChlcnIsIHN0YXRzKSA9PiB7XG4gICAgaWYgKGVycikgcmV0dXJuIGNiKGVycilcbiAgICBjb25zdCB7IHNyY1N0YXQsIGRlc3RTdGF0IH0gPSBzdGF0c1xuXG4gICAgaWYgKGRlc3RTdGF0KSB7XG4gICAgICBpZiAoYXJlSWRlbnRpY2FsKHNyY1N0YXQsIGRlc3RTdGF0KSkge1xuICAgICAgICBjb25zdCBzcmNCYXNlTmFtZSA9IHBhdGguYmFzZW5hbWUoc3JjKVxuICAgICAgICBjb25zdCBkZXN0QmFzZU5hbWUgPSBwYXRoLmJhc2VuYW1lKGRlc3QpXG4gICAgICAgIGlmIChmdW5jTmFtZSA9PT0gJ21vdmUnICYmXG4gICAgICAgICAgc3JjQmFzZU5hbWUgIT09IGRlc3RCYXNlTmFtZSAmJlxuICAgICAgICAgIHNyY0Jhc2VOYW1lLnRvTG93ZXJDYXNlKCkgPT09IGRlc3RCYXNlTmFtZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgcmV0dXJuIGNiKG51bGwsIHsgc3JjU3RhdCwgZGVzdFN0YXQsIGlzQ2hhbmdpbmdDYXNlOiB0cnVlIH0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNiKG5ldyBFcnJvcignU291cmNlIGFuZCBkZXN0aW5hdGlvbiBtdXN0IG5vdCBiZSB0aGUgc2FtZS4nKSlcbiAgICAgIH1cbiAgICAgIGlmIChzcmNTdGF0LmlzRGlyZWN0b3J5KCkgJiYgIWRlc3RTdGF0LmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgcmV0dXJuIGNiKG5ldyBFcnJvcihgQ2Fubm90IG92ZXJ3cml0ZSBub24tZGlyZWN0b3J5ICcke2Rlc3R9JyB3aXRoIGRpcmVjdG9yeSAnJHtzcmN9Jy5gKSlcbiAgICAgIH1cbiAgICAgIGlmICghc3JjU3RhdC5pc0RpcmVjdG9yeSgpICYmIGRlc3RTdGF0LmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgcmV0dXJuIGNiKG5ldyBFcnJvcihgQ2Fubm90IG92ZXJ3cml0ZSBkaXJlY3RvcnkgJyR7ZGVzdH0nIHdpdGggbm9uLWRpcmVjdG9yeSAnJHtzcmN9Jy5gKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3JjU3RhdC5pc0RpcmVjdG9yeSgpICYmIGlzU3JjU3ViZGlyKHNyYywgZGVzdCkpIHtcbiAgICAgIHJldHVybiBjYihuZXcgRXJyb3IoZXJyTXNnKHNyYywgZGVzdCwgZnVuY05hbWUpKSlcbiAgICB9XG4gICAgcmV0dXJuIGNiKG51bGwsIHsgc3JjU3RhdCwgZGVzdFN0YXQgfSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gY2hlY2tQYXRoc1N5bmMgKHNyYywgZGVzdCwgZnVuY05hbWUsIG9wdHMpIHtcbiAgY29uc3QgeyBzcmNTdGF0LCBkZXN0U3RhdCB9ID0gZ2V0U3RhdHNTeW5jKHNyYywgZGVzdCwgb3B0cylcblxuICBpZiAoZGVzdFN0YXQpIHtcbiAgICBpZiAoYXJlSWRlbnRpY2FsKHNyY1N0YXQsIGRlc3RTdGF0KSkge1xuICAgICAgY29uc3Qgc3JjQmFzZU5hbWUgPSBwYXRoLmJhc2VuYW1lKHNyYylcbiAgICAgIGNvbnN0IGRlc3RCYXNlTmFtZSA9IHBhdGguYmFzZW5hbWUoZGVzdClcbiAgICAgIGlmIChmdW5jTmFtZSA9PT0gJ21vdmUnICYmXG4gICAgICAgIHNyY0Jhc2VOYW1lICE9PSBkZXN0QmFzZU5hbWUgJiZcbiAgICAgICAgc3JjQmFzZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gZGVzdEJhc2VOYW1lLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3JjU3RhdCwgZGVzdFN0YXQsIGlzQ2hhbmdpbmdDYXNlOiB0cnVlIH1cbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcignU291cmNlIGFuZCBkZXN0aW5hdGlvbiBtdXN0IG5vdCBiZSB0aGUgc2FtZS4nKVxuICAgIH1cbiAgICBpZiAoc3JjU3RhdC5pc0RpcmVjdG9yeSgpICYmICFkZXN0U3RhdC5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBvdmVyd3JpdGUgbm9uLWRpcmVjdG9yeSAnJHtkZXN0fScgd2l0aCBkaXJlY3RvcnkgJyR7c3JjfScuYClcbiAgICB9XG4gICAgaWYgKCFzcmNTdGF0LmlzRGlyZWN0b3J5KCkgJiYgZGVzdFN0YXQuaXNEaXJlY3RvcnkoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3Qgb3ZlcndyaXRlIGRpcmVjdG9yeSAnJHtkZXN0fScgd2l0aCBub24tZGlyZWN0b3J5ICcke3NyY30nLmApXG4gICAgfVxuICB9XG5cbiAgaWYgKHNyY1N0YXQuaXNEaXJlY3RvcnkoKSAmJiBpc1NyY1N1YmRpcihzcmMsIGRlc3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGVyck1zZyhzcmMsIGRlc3QsIGZ1bmNOYW1lKSlcbiAgfVxuICByZXR1cm4geyBzcmNTdGF0LCBkZXN0U3RhdCB9XG59XG5cbi8vIHJlY3Vyc2l2ZWx5IGNoZWNrIGlmIGRlc3QgcGFyZW50IGlzIGEgc3ViZGlyZWN0b3J5IG9mIHNyYy5cbi8vIEl0IHdvcmtzIGZvciBhbGwgZmlsZSB0eXBlcyBpbmNsdWRpbmcgc3ltbGlua3Mgc2luY2UgaXRcbi8vIGNoZWNrcyB0aGUgc3JjIGFuZCBkZXN0IGlub2Rlcy4gSXQgc3RhcnRzIGZyb20gdGhlIGRlZXBlc3Rcbi8vIHBhcmVudCBhbmQgc3RvcHMgb25jZSBpdCByZWFjaGVzIHRoZSBzcmMgcGFyZW50IG9yIHRoZSByb290IHBhdGguXG5mdW5jdGlvbiBjaGVja1BhcmVudFBhdGhzIChzcmMsIHNyY1N0YXQsIGRlc3QsIGZ1bmNOYW1lLCBjYikge1xuICBjb25zdCBzcmNQYXJlbnQgPSBwYXRoLnJlc29sdmUocGF0aC5kaXJuYW1lKHNyYykpXG4gIGNvbnN0IGRlc3RQYXJlbnQgPSBwYXRoLnJlc29sdmUocGF0aC5kaXJuYW1lKGRlc3QpKVxuICBpZiAoZGVzdFBhcmVudCA9PT0gc3JjUGFyZW50IHx8IGRlc3RQYXJlbnQgPT09IHBhdGgucGFyc2UoZGVzdFBhcmVudCkucm9vdCkgcmV0dXJuIGNiKClcbiAgZnMuc3RhdChkZXN0UGFyZW50LCB7IGJpZ2ludDogdHJ1ZSB9LCAoZXJyLCBkZXN0U3RhdCkgPT4ge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY29kZSA9PT0gJ0VOT0VOVCcpIHJldHVybiBjYigpXG4gICAgICByZXR1cm4gY2IoZXJyKVxuICAgIH1cbiAgICBpZiAoYXJlSWRlbnRpY2FsKHNyY1N0YXQsIGRlc3RTdGF0KSkge1xuICAgICAgcmV0dXJuIGNiKG5ldyBFcnJvcihlcnJNc2coc3JjLCBkZXN0LCBmdW5jTmFtZSkpKVxuICAgIH1cbiAgICByZXR1cm4gY2hlY2tQYXJlbnRQYXRocyhzcmMsIHNyY1N0YXQsIGRlc3RQYXJlbnQsIGZ1bmNOYW1lLCBjYilcbiAgfSlcbn1cblxuZnVuY3Rpb24gY2hlY2tQYXJlbnRQYXRoc1N5bmMgKHNyYywgc3JjU3RhdCwgZGVzdCwgZnVuY05hbWUpIHtcbiAgY29uc3Qgc3JjUGFyZW50ID0gcGF0aC5yZXNvbHZlKHBhdGguZGlybmFtZShzcmMpKVxuICBjb25zdCBkZXN0UGFyZW50ID0gcGF0aC5yZXNvbHZlKHBhdGguZGlybmFtZShkZXN0KSlcbiAgaWYgKGRlc3RQYXJlbnQgPT09IHNyY1BhcmVudCB8fCBkZXN0UGFyZW50ID09PSBwYXRoLnBhcnNlKGRlc3RQYXJlbnQpLnJvb3QpIHJldHVyblxuICBsZXQgZGVzdFN0YXRcbiAgdHJ5IHtcbiAgICBkZXN0U3RhdCA9IGZzLnN0YXRTeW5jKGRlc3RQYXJlbnQsIHsgYmlnaW50OiB0cnVlIH0pXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIuY29kZSA9PT0gJ0VOT0VOVCcpIHJldHVyblxuICAgIHRocm93IGVyclxuICB9XG4gIGlmIChhcmVJZGVudGljYWwoc3JjU3RhdCwgZGVzdFN0YXQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGVyck1zZyhzcmMsIGRlc3QsIGZ1bmNOYW1lKSlcbiAgfVxuICByZXR1cm4gY2hlY2tQYXJlbnRQYXRoc1N5bmMoc3JjLCBzcmNTdGF0LCBkZXN0UGFyZW50LCBmdW5jTmFtZSlcbn1cblxuZnVuY3Rpb24gYXJlSWRlbnRpY2FsIChzcmNTdGF0LCBkZXN0U3RhdCkge1xuICByZXR1cm4gZGVzdFN0YXQuaW5vICYmIGRlc3RTdGF0LmRldiAmJiBkZXN0U3RhdC5pbm8gPT09IHNyY1N0YXQuaW5vICYmIGRlc3RTdGF0LmRldiA9PT0gc3JjU3RhdC5kZXZcbn1cblxuLy8gcmV0dXJuIHRydWUgaWYgZGVzdCBpcyBhIHN1YmRpciBvZiBzcmMsIG90aGVyd2lzZSBmYWxzZS5cbi8vIEl0IG9ubHkgY2hlY2tzIHRoZSBwYXRoIHN0cmluZ3MuXG5mdW5jdGlvbiBpc1NyY1N1YmRpciAoc3JjLCBkZXN0KSB7XG4gIGNvbnN0IHNyY0FyciA9IHBhdGgucmVzb2x2ZShzcmMpLnNwbGl0KHBhdGguc2VwKS5maWx0ZXIoaSA9PiBpKVxuICBjb25zdCBkZXN0QXJyID0gcGF0aC5yZXNvbHZlKGRlc3QpLnNwbGl0KHBhdGguc2VwKS5maWx0ZXIoaSA9PiBpKVxuICByZXR1cm4gc3JjQXJyLnJlZHVjZSgoYWNjLCBjdXIsIGkpID0+IGFjYyAmJiBkZXN0QXJyW2ldID09PSBjdXIsIHRydWUpXG59XG5cbmZ1bmN0aW9uIGVyck1zZyAoc3JjLCBkZXN0LCBmdW5jTmFtZSkge1xuICByZXR1cm4gYENhbm5vdCAke2Z1bmNOYW1lfSAnJHtzcmN9JyB0byBhIHN1YmRpcmVjdG9yeSBvZiBpdHNlbGYsICcke2Rlc3R9Jy5gXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjaGVja1BhdGhzLFxuICBjaGVja1BhdGhzU3luYyxcbiAgY2hlY2tQYXJlbnRQYXRocyxcbiAgY2hlY2tQYXJlbnRQYXRoc1N5bmMsXG4gIGlzU3JjU3ViZGlyLFxuICBhcmVJZGVudGljYWxcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2dyYWNlZnVsLWZzJylcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcbmNvbnN0IG1rZGlycyA9IHJlcXVpcmUoJy4uL21rZGlycycpLm1rZGlyc1xuY29uc3QgcGF0aEV4aXN0cyA9IHJlcXVpcmUoJy4uL3BhdGgtZXhpc3RzJykucGF0aEV4aXN0c1xuY29uc3QgdXRpbWVzTWlsbGlzID0gcmVxdWlyZSgnLi4vdXRpbC91dGltZXMnKS51dGltZXNNaWxsaXNcbmNvbnN0IHN0YXQgPSByZXF1aXJlKCcuLi91dGlsL3N0YXQnKVxuXG5mdW5jdGlvbiBjb3B5IChzcmMsIGRlc3QsIG9wdHMsIGNiKSB7XG4gIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJyAmJiAhY2IpIHtcbiAgICBjYiA9IG9wdHNcbiAgICBvcHRzID0ge31cbiAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdHMgPSB7IGZpbHRlcjogb3B0cyB9XG4gIH1cblxuICBjYiA9IGNiIHx8IGZ1bmN0aW9uICgpIHt9XG4gIG9wdHMgPSBvcHRzIHx8IHt9XG5cbiAgb3B0cy5jbG9iYmVyID0gJ2Nsb2JiZXInIGluIG9wdHMgPyAhIW9wdHMuY2xvYmJlciA6IHRydWUgLy8gZGVmYXVsdCB0byB0cnVlIGZvciBub3dcbiAgb3B0cy5vdmVyd3JpdGUgPSAnb3ZlcndyaXRlJyBpbiBvcHRzID8gISFvcHRzLm92ZXJ3cml0ZSA6IG9wdHMuY2xvYmJlciAvLyBvdmVyd3JpdGUgZmFsbHMgYmFjayB0byBjbG9iYmVyXG5cbiAgLy8gV2FybiBhYm91dCB1c2luZyBwcmVzZXJ2ZVRpbWVzdGFtcHMgb24gMzItYml0IG5vZGVcbiAgaWYgKG9wdHMucHJlc2VydmVUaW1lc3RhbXBzICYmIHByb2Nlc3MuYXJjaCA9PT0gJ2lhMzInKSB7XG4gICAgcHJvY2Vzcy5lbWl0V2FybmluZyhcbiAgICAgICdVc2luZyB0aGUgcHJlc2VydmVUaW1lc3RhbXBzIG9wdGlvbiBpbiAzMi1iaXQgbm9kZSBpcyBub3QgcmVjb21tZW5kZWQ7XFxuXFxuJyArXG4gICAgICAnXFx0c2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qcHJpY2hhcmRzb24vbm9kZS1mcy1leHRyYS9pc3N1ZXMvMjY5JyxcbiAgICAgICdXYXJuaW5nJywgJ2ZzLWV4dHJhLVdBUk4wMDAxJ1xuICAgIClcbiAgfVxuXG4gIHN0YXQuY2hlY2tQYXRocyhzcmMsIGRlc3QsICdjb3B5Jywgb3B0cywgKGVyciwgc3RhdHMpID0+IHtcbiAgICBpZiAoZXJyKSByZXR1cm4gY2IoZXJyKVxuICAgIGNvbnN0IHsgc3JjU3RhdCwgZGVzdFN0YXQgfSA9IHN0YXRzXG4gICAgc3RhdC5jaGVja1BhcmVudFBhdGhzKHNyYywgc3JjU3RhdCwgZGVzdCwgJ2NvcHknLCBlcnIgPT4ge1xuICAgICAgaWYgKGVycikgcmV0dXJuIGNiKGVycilcbiAgICAgIHJ1bkZpbHRlcihzcmMsIGRlc3QsIG9wdHMsIChlcnIsIGluY2x1ZGUpID0+IHtcbiAgICAgICAgaWYgKGVycikgcmV0dXJuIGNiKGVycilcbiAgICAgICAgaWYgKCFpbmNsdWRlKSByZXR1cm4gY2IoKVxuXG4gICAgICAgIGNoZWNrUGFyZW50RGlyKGRlc3RTdGF0LCBzcmMsIGRlc3QsIG9wdHMsIGNiKVxuICAgICAgfSlcbiAgICB9KVxuICB9KVxufVxuXG5mdW5jdGlvbiBjaGVja1BhcmVudERpciAoZGVzdFN0YXQsIHNyYywgZGVzdCwgb3B0cywgY2IpIHtcbiAgY29uc3QgZGVzdFBhcmVudCA9IHBhdGguZGlybmFtZShkZXN0KVxuICBwYXRoRXhpc3RzKGRlc3RQYXJlbnQsIChlcnIsIGRpckV4aXN0cykgPT4ge1xuICAgIGlmIChlcnIpIHJldHVybiBjYihlcnIpXG4gICAgaWYgKGRpckV4aXN0cykgcmV0dXJuIGdldFN0YXRzKGRlc3RTdGF0LCBzcmMsIGRlc3QsIG9wdHMsIGNiKVxuICAgIG1rZGlycyhkZXN0UGFyZW50LCBlcnIgPT4ge1xuICAgICAgaWYgKGVycikgcmV0dXJuIGNiKGVycilcbiAgICAgIHJldHVybiBnZXRTdGF0cyhkZXN0U3RhdCwgc3JjLCBkZXN0LCBvcHRzLCBjYilcbiAgICB9KVxuICB9KVxufVxuXG5mdW5jdGlvbiBydW5GaWx0ZXIgKHNyYywgZGVzdCwgb3B0cywgY2IpIHtcbiAgaWYgKCFvcHRzLmZpbHRlcikgcmV0dXJuIGNiKG51bGwsIHRydWUpXG4gIFByb21pc2UucmVzb2x2ZShvcHRzLmZpbHRlcihzcmMsIGRlc3QpKVxuICAgIC50aGVuKGluY2x1ZGUgPT4gY2IobnVsbCwgaW5jbHVkZSksIGVycm9yID0+IGNiKGVycm9yKSlcbn1cblxuZnVuY3Rpb24gZ2V0U3RhdHMgKGRlc3RTdGF0LCBzcmMsIGRlc3QsIG9wdHMsIGNiKSB7XG4gIGNvbnN0IHN0YXQgPSBvcHRzLmRlcmVmZXJlbmNlID8gZnMuc3RhdCA6IGZzLmxzdGF0XG4gIHN0YXQoc3JjLCAoZXJyLCBzcmNTdGF0KSA9PiB7XG4gICAgaWYgKGVycikgcmV0dXJuIGNiKGVycilcblxuICAgIGlmIChzcmNTdGF0LmlzRGlyZWN0b3J5KCkpIHJldHVybiBvbkRpcihzcmNTdGF0LCBkZXN0U3RhdCwgc3JjLCBkZXN0LCBvcHRzLCBjYilcbiAgICBlbHNlIGlmIChzcmNTdGF0LmlzRmlsZSgpIHx8XG4gICAgICAgICAgICAgc3JjU3RhdC5pc0NoYXJhY3RlckRldmljZSgpIHx8XG4gICAgICAgICAgICAgc3JjU3RhdC5pc0Jsb2NrRGV2aWNlKCkpIHJldHVybiBvbkZpbGUoc3JjU3RhdCwgZGVzdFN0YXQsIHNyYywgZGVzdCwgb3B0cywgY2IpXG4gICAgZWxzZSBpZiAoc3JjU3RhdC5pc1N5bWJvbGljTGluaygpKSByZXR1cm4gb25MaW5rKGRlc3RTdGF0LCBzcmMsIGRlc3QsIG9wdHMsIGNiKVxuICAgIGVsc2UgaWYgKHNyY1N0YXQuaXNTb2NrZXQoKSkgcmV0dXJuIGNiKG5ldyBFcnJvcihgQ2Fubm90IGNvcHkgYSBzb2NrZXQgZmlsZTogJHtzcmN9YCkpXG4gICAgZWxzZSBpZiAoc3JjU3RhdC5pc0ZJRk8oKSkgcmV0dXJuIGNiKG5ldyBFcnJvcihgQ2Fubm90IGNvcHkgYSBGSUZPIHBpcGU6ICR7c3JjfWApKVxuICAgIHJldHVybiBjYihuZXcgRXJyb3IoYFVua25vd24gZmlsZTogJHtzcmN9YCkpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIG9uRmlsZSAoc3JjU3RhdCwgZGVzdFN0YXQsIHNyYywgZGVzdCwgb3B0cywgY2IpIHtcbiAgaWYgKCFkZXN0U3RhdCkgcmV0dXJuIGNvcHlGaWxlKHNyY1N0YXQsIHNyYywgZGVzdCwgb3B0cywgY2IpXG4gIHJldHVybiBtYXlDb3B5RmlsZShzcmNTdGF0LCBzcmMsIGRlc3QsIG9wdHMsIGNiKVxufVxuXG5mdW5jdGlvbiBtYXlDb3B5RmlsZSAoc3JjU3RhdCwgc3JjLCBkZXN0LCBvcHRzLCBjYikge1xuICBpZiAob3B0cy5vdmVyd3JpdGUpIHtcbiAgICBmcy51bmxpbmsoZGVzdCwgZXJyID0+IHtcbiAgICAgIGlmIChlcnIpIHJldHVybiBjYihlcnIpXG4gICAgICByZXR1cm4gY29weUZpbGUoc3JjU3RhdCwgc3JjLCBkZXN0LCBvcHRzLCBjYilcbiAgICB9KVxuICB9IGVsc2UgaWYgKG9wdHMuZXJyb3JPbkV4aXN0KSB7XG4gICAgcmV0dXJuIGNiKG5ldyBFcnJvcihgJyR7ZGVzdH0nIGFscmVhZHkgZXhpc3RzYCkpXG4gIH0gZWxzZSByZXR1cm4gY2IoKVxufVxuXG5mdW5jdGlvbiBjb3B5RmlsZSAoc3JjU3RhdCwgc3JjLCBkZXN0LCBvcHRzLCBjYikge1xuICBmcy5jb3B5RmlsZShzcmMsIGRlc3QsIGVyciA9PiB7XG4gICAgaWYgKGVycikgcmV0dXJuIGNiKGVycilcbiAgICBpZiAob3B0cy5wcmVzZXJ2ZVRpbWVzdGFtcHMpIHJldHVybiBoYW5kbGVUaW1lc3RhbXBzQW5kTW9kZShzcmNTdGF0Lm1vZGUsIHNyYywgZGVzdCwgY2IpXG4gICAgcmV0dXJuIHNldERlc3RNb2RlKGRlc3QsIHNyY1N0YXQubW9kZSwgY2IpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGhhbmRsZVRpbWVzdGFtcHNBbmRNb2RlIChzcmNNb2RlLCBzcmMsIGRlc3QsIGNiKSB7XG4gIC8vIE1ha2Ugc3VyZSB0aGUgZmlsZSBpcyB3cml0YWJsZSBiZWZvcmUgc2V0dGluZyB0aGUgdGltZXN0YW1wXG4gIC8vIG90aGVyd2lzZSBvcGVuIGZhaWxzIHdpdGggRVBFUk0gd2hlbiBpbnZva2VkIHdpdGggJ3IrJ1xuICAvLyAodGhyb3VnaCB1dGltZXMgY2FsbClcbiAgaWYgKGZpbGVJc05vdFdyaXRhYmxlKHNyY01vZGUpKSB7XG4gICAgcmV0dXJuIG1ha2VGaWxlV3JpdGFibGUoZGVzdCwgc3JjTW9kZSwgZXJyID0+IHtcbiAgICAgIGlmIChlcnIpIHJldHVybiBjYihlcnIpXG4gICAgICByZXR1cm4gc2V0RGVzdFRpbWVzdGFtcHNBbmRNb2RlKHNyY01vZGUsIHNyYywgZGVzdCwgY2IpXG4gICAgfSlcbiAgfVxuICByZXR1cm4gc2V0RGVzdFRpbWVzdGFtcHNBbmRNb2RlKHNyY01vZGUsIHNyYywgZGVzdCwgY2IpXG59XG5cbmZ1bmN0aW9uIGZpbGVJc05vdFdyaXRhYmxlIChzcmNNb2RlKSB7XG4gIHJldHVybiAoc3JjTW9kZSAmIDBvMjAwKSA9PT0gMFxufVxuXG5mdW5jdGlvbiBtYWtlRmlsZVdyaXRhYmxlIChkZXN0LCBzcmNNb2RlLCBjYikge1xuICByZXR1cm4gc2V0RGVzdE1vZGUoZGVzdCwgc3JjTW9kZSB8IDBvMjAwLCBjYilcbn1cblxuZnVuY3Rpb24gc2V0RGVzdFRpbWVzdGFtcHNBbmRNb2RlIChzcmNNb2RlLCBzcmMsIGRlc3QsIGNiKSB7XG4gIHNldERlc3RUaW1lc3RhbXBzKHNyYywgZGVzdCwgZXJyID0+IHtcbiAgICBpZiAoZXJyKSByZXR1cm4gY2IoZXJyKVxuICAgIHJldHVybiBzZXREZXN0TW9kZShkZXN0LCBzcmNNb2RlLCBjYilcbiAgfSlcbn1cblxuZnVuY3Rpb24gc2V0RGVzdE1vZGUgKGRlc3QsIHNyY01vZGUsIGNiKSB7XG4gIHJldHVybiBmcy5jaG1vZChkZXN0LCBzcmNNb2RlLCBjYilcbn1cblxuZnVuY3Rpb24gc2V0RGVzdFRpbWVzdGFtcHMgKHNyYywgZGVzdCwgY2IpIHtcbiAgLy8gVGhlIGluaXRpYWwgc3JjU3RhdC5hdGltZSBjYW5ub3QgYmUgdHJ1c3RlZFxuICAvLyBiZWNhdXNlIGl0IGlzIG1vZGlmaWVkIGJ5IHRoZSByZWFkKDIpIHN5c3RlbSBjYWxsXG4gIC8vIChTZWUgaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9mcy5odG1sI2ZzX3N0YXRfdGltZV92YWx1ZXMpXG4gIGZzLnN0YXQoc3JjLCAoZXJyLCB1cGRhdGVkU3JjU3RhdCkgPT4ge1xuICAgIGlmIChlcnIpIHJldHVybiBjYihlcnIpXG4gICAgcmV0dXJuIHV0aW1lc01pbGxpcyhkZXN0LCB1cGRhdGVkU3JjU3RhdC5hdGltZSwgdXBkYXRlZFNyY1N0YXQubXRpbWUsIGNiKVxuICB9KVxufVxuXG5mdW5jdGlvbiBvbkRpciAoc3JjU3RhdCwgZGVzdFN0YXQsIHNyYywgZGVzdCwgb3B0cywgY2IpIHtcbiAgaWYgKCFkZXN0U3RhdCkgcmV0dXJuIG1rRGlyQW5kQ29weShzcmNTdGF0Lm1vZGUsIHNyYywgZGVzdCwgb3B0cywgY2IpXG4gIHJldHVybiBjb3B5RGlyKHNyYywgZGVzdCwgb3B0cywgY2IpXG59XG5cbmZ1bmN0aW9uIG1rRGlyQW5kQ29weSAoc3JjTW9kZSwgc3JjLCBkZXN0LCBvcHRzLCBjYikge1xuICBmcy5ta2RpcihkZXN0LCBlcnIgPT4ge1xuICAgIGlmIChlcnIpIHJldHVybiBjYihlcnIpXG4gICAgY29weURpcihzcmMsIGRlc3QsIG9wdHMsIGVyciA9PiB7XG4gICAgICBpZiAoZXJyKSByZXR1cm4gY2IoZXJyKVxuICAgICAgcmV0dXJuIHNldERlc3RNb2RlKGRlc3QsIHNyY01vZGUsIGNiKVxuICAgIH0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNvcHlEaXIgKHNyYywgZGVzdCwgb3B0cywgY2IpIHtcbiAgZnMucmVhZGRpcihzcmMsIChlcnIsIGl0ZW1zKSA9PiB7XG4gICAgaWYgKGVycikgcmV0dXJuIGNiKGVycilcbiAgICByZXR1cm4gY29weURpckl0ZW1zKGl0ZW1zLCBzcmMsIGRlc3QsIG9wdHMsIGNiKVxuICB9KVxufVxuXG5mdW5jdGlvbiBjb3B5RGlySXRlbXMgKGl0ZW1zLCBzcmMsIGRlc3QsIG9wdHMsIGNiKSB7XG4gIGNvbnN0IGl0ZW0gPSBpdGVtcy5wb3AoKVxuICBpZiAoIWl0ZW0pIHJldHVybiBjYigpXG4gIHJldHVybiBjb3B5RGlySXRlbShpdGVtcywgaXRlbSwgc3JjLCBkZXN0LCBvcHRzLCBjYilcbn1cblxuZnVuY3Rpb24gY29weURpckl0ZW0gKGl0ZW1zLCBpdGVtLCBzcmMsIGRlc3QsIG9wdHMsIGNiKSB7XG4gIGNvbnN0IHNyY0l0ZW0gPSBwYXRoLmpvaW4oc3JjLCBpdGVtKVxuICBjb25zdCBkZXN0SXRlbSA9IHBhdGguam9pbihkZXN0LCBpdGVtKVxuICBydW5GaWx0ZXIoc3JjSXRlbSwgZGVzdEl0ZW0sIG9wdHMsIChlcnIsIGluY2x1ZGUpID0+IHtcbiAgICBpZiAoZXJyKSByZXR1cm4gY2IoZXJyKVxuICAgIGlmICghaW5jbHVkZSkgcmV0dXJuIGNvcHlEaXJJdGVtcyhpdGVtcywgc3JjLCBkZXN0LCBvcHRzLCBjYilcblxuICAgIHN0YXQuY2hlY2tQYXRocyhzcmNJdGVtLCBkZXN0SXRlbSwgJ2NvcHknLCBvcHRzLCAoZXJyLCBzdGF0cykgPT4ge1xuICAgICAgaWYgKGVycikgcmV0dXJuIGNiKGVycilcbiAgICAgIGNvbnN0IHsgZGVzdFN0YXQgfSA9IHN0YXRzXG4gICAgICBnZXRTdGF0cyhkZXN0U3RhdCwgc3JjSXRlbSwgZGVzdEl0ZW0sIG9wdHMsIGVyciA9PiB7XG4gICAgICAgIGlmIChlcnIpIHJldHVybiBjYihlcnIpXG4gICAgICAgIHJldHVybiBjb3B5RGlySXRlbXMoaXRlbXMsIHNyYywgZGVzdCwgb3B0cywgY2IpXG4gICAgICB9KVxuICAgIH0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIG9uTGluayAoZGVzdFN0YXQsIHNyYywgZGVzdCwgb3B0cywgY2IpIHtcbiAgZnMucmVhZGxpbmsoc3JjLCAoZXJyLCByZXNvbHZlZFNyYykgPT4ge1xuICAgIGlmIChlcnIpIHJldHVybiBjYihlcnIpXG4gICAgaWYgKG9wdHMuZGVyZWZlcmVuY2UpIHtcbiAgICAgIHJlc29sdmVkU3JjID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksIHJlc29sdmVkU3JjKVxuICAgIH1cblxuICAgIGlmICghZGVzdFN0YXQpIHtcbiAgICAgIHJldHVybiBmcy5zeW1saW5rKHJlc29sdmVkU3JjLCBkZXN0LCBjYilcbiAgICB9IGVsc2Uge1xuICAgICAgZnMucmVhZGxpbmsoZGVzdCwgKGVyciwgcmVzb2x2ZWREZXN0KSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAvLyBkZXN0IGV4aXN0cyBhbmQgaXMgYSByZWd1bGFyIGZpbGUgb3IgZGlyZWN0b3J5LFxuICAgICAgICAgIC8vIFdpbmRvd3MgbWF5IHRocm93IFVOS05PV04gZXJyb3IuIElmIGRlc3QgYWxyZWFkeSBleGlzdHMsXG4gICAgICAgICAgLy8gZnMgdGhyb3dzIGVycm9yIGFueXdheSwgc28gbm8gbmVlZCB0byBndWFyZCBhZ2FpbnN0IGl0IGhlcmUuXG4gICAgICAgICAgaWYgKGVyci5jb2RlID09PSAnRUlOVkFMJyB8fCBlcnIuY29kZSA9PT0gJ1VOS05PV04nKSByZXR1cm4gZnMuc3ltbGluayhyZXNvbHZlZFNyYywgZGVzdCwgY2IpXG4gICAgICAgICAgcmV0dXJuIGNiKGVycilcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0cy5kZXJlZmVyZW5jZSkge1xuICAgICAgICAgIHJlc29sdmVkRGVzdCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCByZXNvbHZlZERlc3QpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXQuaXNTcmNTdWJkaXIocmVzb2x2ZWRTcmMsIHJlc29sdmVkRGVzdCkpIHtcbiAgICAgICAgICByZXR1cm4gY2IobmV3IEVycm9yKGBDYW5ub3QgY29weSAnJHtyZXNvbHZlZFNyY30nIHRvIGEgc3ViZGlyZWN0b3J5IG9mIGl0c2VsZiwgJyR7cmVzb2x2ZWREZXN0fScuYCkpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBkbyBub3QgY29weSBpZiBzcmMgaXMgYSBzdWJkaXIgb2YgZGVzdCBzaW5jZSB1bmxpbmtpbmdcbiAgICAgICAgLy8gZGVzdCBpbiB0aGlzIGNhc2Ugd291bGQgcmVzdWx0IGluIHJlbW92aW5nIHNyYyBjb250ZW50c1xuICAgICAgICAvLyBhbmQgdGhlcmVmb3JlIGEgYnJva2VuIHN5bWxpbmsgd291bGQgYmUgY3JlYXRlZC5cbiAgICAgICAgaWYgKHN0YXQuaXNTcmNTdWJkaXIocmVzb2x2ZWREZXN0LCByZXNvbHZlZFNyYykpIHtcbiAgICAgICAgICByZXR1cm4gY2IobmV3IEVycm9yKGBDYW5ub3Qgb3ZlcndyaXRlICcke3Jlc29sdmVkRGVzdH0nIHdpdGggJyR7cmVzb2x2ZWRTcmN9Jy5gKSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29weUxpbmsocmVzb2x2ZWRTcmMsIGRlc3QsIGNiKVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNvcHlMaW5rIChyZXNvbHZlZFNyYywgZGVzdCwgY2IpIHtcbiAgZnMudW5saW5rKGRlc3QsIGVyciA9PiB7XG4gICAgaWYgKGVycikgcmV0dXJuIGNiKGVycilcbiAgICByZXR1cm4gZnMuc3ltbGluayhyZXNvbHZlZFNyYywgZGVzdCwgY2IpXG4gIH0pXG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGZzID0gcmVxdWlyZSgnZ3JhY2VmdWwtZnMnKVxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuY29uc3QgbWtkaXJzU3luYyA9IHJlcXVpcmUoJy4uL21rZGlycycpLm1rZGlyc1N5bmNcbmNvbnN0IHV0aW1lc01pbGxpc1N5bmMgPSByZXF1aXJlKCcuLi91dGlsL3V0aW1lcycpLnV0aW1lc01pbGxpc1N5bmNcbmNvbnN0IHN0YXQgPSByZXF1aXJlKCcuLi91dGlsL3N0YXQnKVxuXG5mdW5jdGlvbiBjb3B5U3luYyAoc3JjLCBkZXN0LCBvcHRzKSB7XG4gIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdHMgPSB7IGZpbHRlcjogb3B0cyB9XG4gIH1cblxuICBvcHRzID0gb3B0cyB8fCB7fVxuICBvcHRzLmNsb2JiZXIgPSAnY2xvYmJlcicgaW4gb3B0cyA/ICEhb3B0cy5jbG9iYmVyIDogdHJ1ZSAvLyBkZWZhdWx0IHRvIHRydWUgZm9yIG5vd1xuICBvcHRzLm92ZXJ3cml0ZSA9ICdvdmVyd3JpdGUnIGluIG9wdHMgPyAhIW9wdHMub3ZlcndyaXRlIDogb3B0cy5jbG9iYmVyIC8vIG92ZXJ3cml0ZSBmYWxscyBiYWNrIHRvIGNsb2JiZXJcblxuICAvLyBXYXJuIGFib3V0IHVzaW5nIHByZXNlcnZlVGltZXN0YW1wcyBvbiAzMi1iaXQgbm9kZVxuICBpZiAob3B0cy5wcmVzZXJ2ZVRpbWVzdGFtcHMgJiYgcHJvY2Vzcy5hcmNoID09PSAnaWEzMicpIHtcbiAgICBwcm9jZXNzLmVtaXRXYXJuaW5nKFxuICAgICAgJ1VzaW5nIHRoZSBwcmVzZXJ2ZVRpbWVzdGFtcHMgb3B0aW9uIGluIDMyLWJpdCBub2RlIGlzIG5vdCByZWNvbW1lbmRlZDtcXG5cXG4nICtcbiAgICAgICdcXHRzZWUgaHR0cHM6Ly9naXRodWIuY29tL2pwcmljaGFyZHNvbi9ub2RlLWZzLWV4dHJhL2lzc3Vlcy8yNjknLFxuICAgICAgJ1dhcm5pbmcnLCAnZnMtZXh0cmEtV0FSTjAwMDInXG4gICAgKVxuICB9XG5cbiAgY29uc3QgeyBzcmNTdGF0LCBkZXN0U3RhdCB9ID0gc3RhdC5jaGVja1BhdGhzU3luYyhzcmMsIGRlc3QsICdjb3B5Jywgb3B0cylcbiAgc3RhdC5jaGVja1BhcmVudFBhdGhzU3luYyhzcmMsIHNyY1N0YXQsIGRlc3QsICdjb3B5JylcbiAgaWYgKG9wdHMuZmlsdGVyICYmICFvcHRzLmZpbHRlcihzcmMsIGRlc3QpKSByZXR1cm5cbiAgY29uc3QgZGVzdFBhcmVudCA9IHBhdGguZGlybmFtZShkZXN0KVxuICBpZiAoIWZzLmV4aXN0c1N5bmMoZGVzdFBhcmVudCkpIG1rZGlyc1N5bmMoZGVzdFBhcmVudClcbiAgcmV0dXJuIGdldFN0YXRzKGRlc3RTdGF0LCBzcmMsIGRlc3QsIG9wdHMpXG59XG5cbmZ1bmN0aW9uIGdldFN0YXRzIChkZXN0U3RhdCwgc3JjLCBkZXN0LCBvcHRzKSB7XG4gIGNvbnN0IHN0YXRTeW5jID0gb3B0cy5kZXJlZmVyZW5jZSA/IGZzLnN0YXRTeW5jIDogZnMubHN0YXRTeW5jXG4gIGNvbnN0IHNyY1N0YXQgPSBzdGF0U3luYyhzcmMpXG5cbiAgaWYgKHNyY1N0YXQuaXNEaXJlY3RvcnkoKSkgcmV0dXJuIG9uRGlyKHNyY1N0YXQsIGRlc3RTdGF0LCBzcmMsIGRlc3QsIG9wdHMpXG4gIGVsc2UgaWYgKHNyY1N0YXQuaXNGaWxlKCkgfHxcbiAgICAgICAgICAgc3JjU3RhdC5pc0NoYXJhY3RlckRldmljZSgpIHx8XG4gICAgICAgICAgIHNyY1N0YXQuaXNCbG9ja0RldmljZSgpKSByZXR1cm4gb25GaWxlKHNyY1N0YXQsIGRlc3RTdGF0LCBzcmMsIGRlc3QsIG9wdHMpXG4gIGVsc2UgaWYgKHNyY1N0YXQuaXNTeW1ib2xpY0xpbmsoKSkgcmV0dXJuIG9uTGluayhkZXN0U3RhdCwgc3JjLCBkZXN0LCBvcHRzKVxuICBlbHNlIGlmIChzcmNTdGF0LmlzU29ja2V0KCkpIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGNvcHkgYSBzb2NrZXQgZmlsZTogJHtzcmN9YClcbiAgZWxzZSBpZiAoc3JjU3RhdC5pc0ZJRk8oKSkgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgY29weSBhIEZJRk8gcGlwZTogJHtzcmN9YClcbiAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGZpbGU6ICR7c3JjfWApXG59XG5cbmZ1bmN0aW9uIG9uRmlsZSAoc3JjU3RhdCwgZGVzdFN0YXQsIHNyYywgZGVzdCwgb3B0cykge1xuICBpZiAoIWRlc3RTdGF0KSByZXR1cm4gY29weUZpbGUoc3JjU3RhdCwgc3JjLCBkZXN0LCBvcHRzKVxuICByZXR1cm4gbWF5Q29weUZpbGUoc3JjU3RhdCwgc3JjLCBkZXN0LCBvcHRzKVxufVxuXG5mdW5jdGlvbiBtYXlDb3B5RmlsZSAoc3JjU3RhdCwgc3JjLCBkZXN0LCBvcHRzKSB7XG4gIGlmIChvcHRzLm92ZXJ3cml0ZSkge1xuICAgIGZzLnVubGlua1N5bmMoZGVzdClcbiAgICByZXR1cm4gY29weUZpbGUoc3JjU3RhdCwgc3JjLCBkZXN0LCBvcHRzKVxuICB9IGVsc2UgaWYgKG9wdHMuZXJyb3JPbkV4aXN0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGAnJHtkZXN0fScgYWxyZWFkeSBleGlzdHNgKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNvcHlGaWxlIChzcmNTdGF0LCBzcmMsIGRlc3QsIG9wdHMpIHtcbiAgZnMuY29weUZpbGVTeW5jKHNyYywgZGVzdClcbiAgaWYgKG9wdHMucHJlc2VydmVUaW1lc3RhbXBzKSBoYW5kbGVUaW1lc3RhbXBzKHNyY1N0YXQubW9kZSwgc3JjLCBkZXN0KVxuICByZXR1cm4gc2V0RGVzdE1vZGUoZGVzdCwgc3JjU3RhdC5tb2RlKVxufVxuXG5mdW5jdGlvbiBoYW5kbGVUaW1lc3RhbXBzIChzcmNNb2RlLCBzcmMsIGRlc3QpIHtcbiAgLy8gTWFrZSBzdXJlIHRoZSBmaWxlIGlzIHdyaXRhYmxlIGJlZm9yZSBzZXR0aW5nIHRoZSB0aW1lc3RhbXBcbiAgLy8gb3RoZXJ3aXNlIG9wZW4gZmFpbHMgd2l0aCBFUEVSTSB3aGVuIGludm9rZWQgd2l0aCAncisnXG4gIC8vICh0aHJvdWdoIHV0aW1lcyBjYWxsKVxuICBpZiAoZmlsZUlzTm90V3JpdGFibGUoc3JjTW9kZSkpIG1ha2VGaWxlV3JpdGFibGUoZGVzdCwgc3JjTW9kZSlcbiAgcmV0dXJuIHNldERlc3RUaW1lc3RhbXBzKHNyYywgZGVzdClcbn1cblxuZnVuY3Rpb24gZmlsZUlzTm90V3JpdGFibGUgKHNyY01vZGUpIHtcbiAgcmV0dXJuIChzcmNNb2RlICYgMG8yMDApID09PSAwXG59XG5cbmZ1bmN0aW9uIG1ha2VGaWxlV3JpdGFibGUgKGRlc3QsIHNyY01vZGUpIHtcbiAgcmV0dXJuIHNldERlc3RNb2RlKGRlc3QsIHNyY01vZGUgfCAwbzIwMClcbn1cblxuZnVuY3Rpb24gc2V0RGVzdE1vZGUgKGRlc3QsIHNyY01vZGUpIHtcbiAgcmV0dXJuIGZzLmNobW9kU3luYyhkZXN0LCBzcmNNb2RlKVxufVxuXG5mdW5jdGlvbiBzZXREZXN0VGltZXN0YW1wcyAoc3JjLCBkZXN0KSB7XG4gIC8vIFRoZSBpbml0aWFsIHNyY1N0YXQuYXRpbWUgY2Fubm90IGJlIHRydXN0ZWRcbiAgLy8gYmVjYXVzZSBpdCBpcyBtb2RpZmllZCBieSB0aGUgcmVhZCgyKSBzeXN0ZW0gY2FsbFxuICAvLyAoU2VlIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvZnMuaHRtbCNmc19zdGF0X3RpbWVfdmFsdWVzKVxuICBjb25zdCB1cGRhdGVkU3JjU3RhdCA9IGZzLnN0YXRTeW5jKHNyYylcbiAgcmV0dXJuIHV0aW1lc01pbGxpc1N5bmMoZGVzdCwgdXBkYXRlZFNyY1N0YXQuYXRpbWUsIHVwZGF0ZWRTcmNTdGF0Lm10aW1lKVxufVxuXG5mdW5jdGlvbiBvbkRpciAoc3JjU3RhdCwgZGVzdFN0YXQsIHNyYywgZGVzdCwgb3B0cykge1xuICBpZiAoIWRlc3RTdGF0KSByZXR1cm4gbWtEaXJBbmRDb3B5KHNyY1N0YXQubW9kZSwgc3JjLCBkZXN0LCBvcHRzKVxuICByZXR1cm4gY29weURpcihzcmMsIGRlc3QsIG9wdHMpXG59XG5cbmZ1bmN0aW9uIG1rRGlyQW5kQ29weSAoc3JjTW9kZSwgc3JjLCBkZXN0LCBvcHRzKSB7XG4gIGZzLm1rZGlyU3luYyhkZXN0KVxuICBjb3B5RGlyKHNyYywgZGVzdCwgb3B0cylcbiAgcmV0dXJuIHNldERlc3RNb2RlKGRlc3QsIHNyY01vZGUpXG59XG5cbmZ1bmN0aW9uIGNvcHlEaXIgKHNyYywgZGVzdCwgb3B0cykge1xuICBmcy5yZWFkZGlyU3luYyhzcmMpLmZvckVhY2goaXRlbSA9PiBjb3B5RGlySXRlbShpdGVtLCBzcmMsIGRlc3QsIG9wdHMpKVxufVxuXG5mdW5jdGlvbiBjb3B5RGlySXRlbSAoaXRlbSwgc3JjLCBkZXN0LCBvcHRzKSB7XG4gIGNvbnN0IHNyY0l0ZW0gPSBwYXRoLmpvaW4oc3JjLCBpdGVtKVxuICBjb25zdCBkZXN0SXRlbSA9IHBhdGguam9pbihkZXN0LCBpdGVtKVxuICBpZiAob3B0cy5maWx0ZXIgJiYgIW9wdHMuZmlsdGVyKHNyY0l0ZW0sIGRlc3RJdGVtKSkgcmV0dXJuXG4gIGNvbnN0IHsgZGVzdFN0YXQgfSA9IHN0YXQuY2hlY2tQYXRoc1N5bmMoc3JjSXRlbSwgZGVzdEl0ZW0sICdjb3B5Jywgb3B0cylcbiAgcmV0dXJuIGdldFN0YXRzKGRlc3RTdGF0LCBzcmNJdGVtLCBkZXN0SXRlbSwgb3B0cylcbn1cblxuZnVuY3Rpb24gb25MaW5rIChkZXN0U3RhdCwgc3JjLCBkZXN0LCBvcHRzKSB7XG4gIGxldCByZXNvbHZlZFNyYyA9IGZzLnJlYWRsaW5rU3luYyhzcmMpXG4gIGlmIChvcHRzLmRlcmVmZXJlbmNlKSB7XG4gICAgcmVzb2x2ZWRTcmMgPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgcmVzb2x2ZWRTcmMpXG4gIH1cblxuICBpZiAoIWRlc3RTdGF0KSB7XG4gICAgcmV0dXJuIGZzLnN5bWxpbmtTeW5jKHJlc29sdmVkU3JjLCBkZXN0KVxuICB9IGVsc2Uge1xuICAgIGxldCByZXNvbHZlZERlc3RcbiAgICB0cnkge1xuICAgICAgcmVzb2x2ZWREZXN0ID0gZnMucmVhZGxpbmtTeW5jKGRlc3QpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBkZXN0IGV4aXN0cyBhbmQgaXMgYSByZWd1bGFyIGZpbGUgb3IgZGlyZWN0b3J5LFxuICAgICAgLy8gV2luZG93cyBtYXkgdGhyb3cgVU5LTk9XTiBlcnJvci4gSWYgZGVzdCBhbHJlYWR5IGV4aXN0cyxcbiAgICAgIC8vIGZzIHRocm93cyBlcnJvciBhbnl3YXksIHNvIG5vIG5lZWQgdG8gZ3VhcmQgYWdhaW5zdCBpdCBoZXJlLlxuICAgICAgaWYgKGVyci5jb2RlID09PSAnRUlOVkFMJyB8fCBlcnIuY29kZSA9PT0gJ1VOS05PV04nKSByZXR1cm4gZnMuc3ltbGlua1N5bmMocmVzb2x2ZWRTcmMsIGRlc3QpXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gICAgaWYgKG9wdHMuZGVyZWZlcmVuY2UpIHtcbiAgICAgIHJlc29sdmVkRGVzdCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCByZXNvbHZlZERlc3QpXG4gICAgfVxuICAgIGlmIChzdGF0LmlzU3JjU3ViZGlyKHJlc29sdmVkU3JjLCByZXNvbHZlZERlc3QpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBjb3B5ICcke3Jlc29sdmVkU3JjfScgdG8gYSBzdWJkaXJlY3Rvcnkgb2YgaXRzZWxmLCAnJHtyZXNvbHZlZERlc3R9Jy5gKVxuICAgIH1cblxuICAgIC8vIHByZXZlbnQgY29weSBpZiBzcmMgaXMgYSBzdWJkaXIgb2YgZGVzdCBzaW5jZSB1bmxpbmtpbmdcbiAgICAvLyBkZXN0IGluIHRoaXMgY2FzZSB3b3VsZCByZXN1bHQgaW4gcmVtb3Zpbmcgc3JjIGNvbnRlbnRzXG4gICAgLy8gYW5kIHRoZXJlZm9yZSBhIGJyb2tlbiBzeW1saW5rIHdvdWxkIGJlIGNyZWF0ZWQuXG4gICAgaWYgKHN0YXQuaXNTcmNTdWJkaXIocmVzb2x2ZWREZXN0LCByZXNvbHZlZFNyYykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IG92ZXJ3cml0ZSAnJHtyZXNvbHZlZERlc3R9JyB3aXRoICcke3Jlc29sdmVkU3JjfScuYClcbiAgICB9XG4gICAgcmV0dXJuIGNvcHlMaW5rKHJlc29sdmVkU3JjLCBkZXN0KVxuICB9XG59XG5cbmZ1bmN0aW9uIGNvcHlMaW5rIChyZXNvbHZlZFNyYywgZGVzdCkge1xuICBmcy51bmxpbmtTeW5jKGRlc3QpXG4gIHJldHVybiBmcy5zeW1saW5rU3luYyhyZXNvbHZlZFNyYywgZGVzdClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5U3luY1xuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHUgPSByZXF1aXJlKCd1bml2ZXJzYWxpZnknKS5mcm9tQ2FsbGJhY2tcbm1vZHVsZS5leHBvcnRzID0ge1xuICBjb3B5OiB1KHJlcXVpcmUoJy4vY29weScpKSxcbiAgY29weVN5bmM6IHJlcXVpcmUoJy4vY29weS1zeW5jJylcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2dyYWNlZnVsLWZzJylcbmNvbnN0IHUgPSByZXF1aXJlKCd1bml2ZXJzYWxpZnknKS5mcm9tQ2FsbGJhY2tcblxuZnVuY3Rpb24gcmVtb3ZlIChwYXRoLCBjYWxsYmFjaykge1xuICBmcy5ybShwYXRoLCB7IHJlY3Vyc2l2ZTogdHJ1ZSwgZm9yY2U6IHRydWUgfSwgY2FsbGJhY2spXG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN5bmMgKHBhdGgpIHtcbiAgZnMucm1TeW5jKHBhdGgsIHsgcmVjdXJzaXZlOiB0cnVlLCBmb3JjZTogdHJ1ZSB9KVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcmVtb3ZlOiB1KHJlbW92ZSksXG4gIHJlbW92ZVN5bmNcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCB1ID0gcmVxdWlyZSgndW5pdmVyc2FsaWZ5JykuZnJvbVByb21pc2VcbmNvbnN0IGZzID0gcmVxdWlyZSgnLi4vZnMnKVxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuY29uc3QgbWtkaXIgPSByZXF1aXJlKCcuLi9ta2RpcnMnKVxuY29uc3QgcmVtb3ZlID0gcmVxdWlyZSgnLi4vcmVtb3ZlJylcblxuY29uc3QgZW1wdHlEaXIgPSB1KGFzeW5jIGZ1bmN0aW9uIGVtcHR5RGlyIChkaXIpIHtcbiAgbGV0IGl0ZW1zXG4gIHRyeSB7XG4gICAgaXRlbXMgPSBhd2FpdCBmcy5yZWFkZGlyKGRpcilcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIG1rZGlyLm1rZGlycyhkaXIpXG4gIH1cblxuICByZXR1cm4gUHJvbWlzZS5hbGwoaXRlbXMubWFwKGl0ZW0gPT4gcmVtb3ZlLnJlbW92ZShwYXRoLmpvaW4oZGlyLCBpdGVtKSkpKVxufSlcblxuZnVuY3Rpb24gZW1wdHlEaXJTeW5jIChkaXIpIHtcbiAgbGV0IGl0ZW1zXG4gIHRyeSB7XG4gICAgaXRlbXMgPSBmcy5yZWFkZGlyU3luYyhkaXIpXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBta2Rpci5ta2RpcnNTeW5jKGRpcilcbiAgfVxuXG4gIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbSA9IHBhdGguam9pbihkaXIsIGl0ZW0pXG4gICAgcmVtb3ZlLnJlbW92ZVN5bmMoaXRlbSlcbiAgfSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGVtcHR5RGlyU3luYyxcbiAgZW1wdHlkaXJTeW5jOiBlbXB0eURpclN5bmMsXG4gIGVtcHR5RGlyLFxuICBlbXB0eWRpcjogZW1wdHlEaXJcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCB1ID0gcmVxdWlyZSgndW5pdmVyc2FsaWZ5JykuZnJvbUNhbGxiYWNrXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2dyYWNlZnVsLWZzJylcbmNvbnN0IG1rZGlyID0gcmVxdWlyZSgnLi4vbWtkaXJzJylcblxuZnVuY3Rpb24gY3JlYXRlRmlsZSAoZmlsZSwgY2FsbGJhY2spIHtcbiAgZnVuY3Rpb24gbWFrZUZpbGUgKCkge1xuICAgIGZzLndyaXRlRmlsZShmaWxlLCAnJywgZXJyID0+IHtcbiAgICAgIGlmIChlcnIpIHJldHVybiBjYWxsYmFjayhlcnIpXG4gICAgICBjYWxsYmFjaygpXG4gICAgfSlcbiAgfVxuXG4gIGZzLnN0YXQoZmlsZSwgKGVyciwgc3RhdHMpID0+IHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBoYW5kbGUtY2FsbGJhY2stZXJyXG4gICAgaWYgKCFlcnIgJiYgc3RhdHMuaXNGaWxlKCkpIHJldHVybiBjYWxsYmFjaygpXG4gICAgY29uc3QgZGlyID0gcGF0aC5kaXJuYW1lKGZpbGUpXG4gICAgZnMuc3RhdChkaXIsIChlcnIsIHN0YXRzKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIC8vIGlmIHRoZSBkaXJlY3RvcnkgZG9lc24ndCBleGlzdCwgbWFrZSBpdFxuICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdFTk9FTlQnKSB7XG4gICAgICAgICAgcmV0dXJuIG1rZGlyLm1rZGlycyhkaXIsIGVyciA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKVxuICAgICAgICAgICAgbWFrZUZpbGUoKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycilcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRzLmlzRGlyZWN0b3J5KCkpIG1ha2VGaWxlKClcbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBwYXJlbnQgaXMgbm90IGEgZGlyZWN0b3J5XG4gICAgICAgIC8vIFRoaXMgaXMganVzdCB0byBjYXVzZSBhbiBpbnRlcm5hbCBFTk9URElSIGVycm9yIHRvIGJlIHRocm93blxuICAgICAgICBmcy5yZWFkZGlyKGRpciwgZXJyID0+IHtcbiAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZpbGVTeW5jIChmaWxlKSB7XG4gIGxldCBzdGF0c1xuICB0cnkge1xuICAgIHN0YXRzID0gZnMuc3RhdFN5bmMoZmlsZSlcbiAgfSBjYXRjaCB7fVxuICBpZiAoc3RhdHMgJiYgc3RhdHMuaXNGaWxlKCkpIHJldHVyblxuXG4gIGNvbnN0IGRpciA9IHBhdGguZGlybmFtZShmaWxlKVxuICB0cnkge1xuICAgIGlmICghZnMuc3RhdFN5bmMoZGlyKS5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICAvLyBwYXJlbnQgaXMgbm90IGEgZGlyZWN0b3J5XG4gICAgICAvLyBUaGlzIGlzIGp1c3QgdG8gY2F1c2UgYW4gaW50ZXJuYWwgRU5PVERJUiBlcnJvciB0byBiZSB0aHJvd25cbiAgICAgIGZzLnJlYWRkaXJTeW5jKGRpcilcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIElmIHRoZSBzdGF0IGNhbGwgYWJvdmUgZmFpbGVkIGJlY2F1c2UgdGhlIGRpcmVjdG9yeSBkb2Vzbid0IGV4aXN0LCBjcmVhdGUgaXRcbiAgICBpZiAoZXJyICYmIGVyci5jb2RlID09PSAnRU5PRU5UJykgbWtkaXIubWtkaXJzU3luYyhkaXIpXG4gICAgZWxzZSB0aHJvdyBlcnJcbiAgfVxuXG4gIGZzLndyaXRlRmlsZVN5bmMoZmlsZSwgJycpXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGVGaWxlOiB1KGNyZWF0ZUZpbGUpLFxuICBjcmVhdGVGaWxlU3luY1xufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHUgPSByZXF1aXJlKCd1bml2ZXJzYWxpZnknKS5mcm9tQ2FsbGJhY2tcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcbmNvbnN0IGZzID0gcmVxdWlyZSgnZ3JhY2VmdWwtZnMnKVxuY29uc3QgbWtkaXIgPSByZXF1aXJlKCcuLi9ta2RpcnMnKVxuY29uc3QgcGF0aEV4aXN0cyA9IHJlcXVpcmUoJy4uL3BhdGgtZXhpc3RzJykucGF0aEV4aXN0c1xuY29uc3QgeyBhcmVJZGVudGljYWwgfSA9IHJlcXVpcmUoJy4uL3V0aWwvc3RhdCcpXG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmsgKHNyY3BhdGgsIGRzdHBhdGgsIGNhbGxiYWNrKSB7XG4gIGZ1bmN0aW9uIG1ha2VMaW5rIChzcmNwYXRoLCBkc3RwYXRoKSB7XG4gICAgZnMubGluayhzcmNwYXRoLCBkc3RwYXRoLCBlcnIgPT4ge1xuICAgICAgaWYgKGVycikgcmV0dXJuIGNhbGxiYWNrKGVycilcbiAgICAgIGNhbGxiYWNrKG51bGwpXG4gICAgfSlcbiAgfVxuXG4gIGZzLmxzdGF0KGRzdHBhdGgsIChfLCBkc3RTdGF0KSA9PiB7XG4gICAgZnMubHN0YXQoc3JjcGF0aCwgKGVyciwgc3JjU3RhdCkgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBlcnIubWVzc2FnZSA9IGVyci5tZXNzYWdlLnJlcGxhY2UoJ2xzdGF0JywgJ2Vuc3VyZUxpbmsnKVxuICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyKVxuICAgICAgfVxuICAgICAgaWYgKGRzdFN0YXQgJiYgYXJlSWRlbnRpY2FsKHNyY1N0YXQsIGRzdFN0YXQpKSByZXR1cm4gY2FsbGJhY2sobnVsbClcblxuICAgICAgY29uc3QgZGlyID0gcGF0aC5kaXJuYW1lKGRzdHBhdGgpXG4gICAgICBwYXRoRXhpc3RzKGRpciwgKGVyciwgZGlyRXhpc3RzKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHJldHVybiBjYWxsYmFjayhlcnIpXG4gICAgICAgIGlmIChkaXJFeGlzdHMpIHJldHVybiBtYWtlTGluayhzcmNwYXRoLCBkc3RwYXRoKVxuICAgICAgICBta2Rpci5ta2RpcnMoZGlyLCBlcnIgPT4ge1xuICAgICAgICAgIGlmIChlcnIpIHJldHVybiBjYWxsYmFjayhlcnIpXG4gICAgICAgICAgbWFrZUxpbmsoc3JjcGF0aCwgZHN0cGF0aClcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua1N5bmMgKHNyY3BhdGgsIGRzdHBhdGgpIHtcbiAgbGV0IGRzdFN0YXRcbiAgdHJ5IHtcbiAgICBkc3RTdGF0ID0gZnMubHN0YXRTeW5jKGRzdHBhdGgpXG4gIH0gY2F0Y2gge31cblxuICB0cnkge1xuICAgIGNvbnN0IHNyY1N0YXQgPSBmcy5sc3RhdFN5bmMoc3JjcGF0aClcbiAgICBpZiAoZHN0U3RhdCAmJiBhcmVJZGVudGljYWwoc3JjU3RhdCwgZHN0U3RhdCkpIHJldHVyblxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBlcnIubWVzc2FnZSA9IGVyci5tZXNzYWdlLnJlcGxhY2UoJ2xzdGF0JywgJ2Vuc3VyZUxpbmsnKVxuICAgIHRocm93IGVyclxuICB9XG5cbiAgY29uc3QgZGlyID0gcGF0aC5kaXJuYW1lKGRzdHBhdGgpXG4gIGNvbnN0IGRpckV4aXN0cyA9IGZzLmV4aXN0c1N5bmMoZGlyKVxuICBpZiAoZGlyRXhpc3RzKSByZXR1cm4gZnMubGlua1N5bmMoc3JjcGF0aCwgZHN0cGF0aClcbiAgbWtkaXIubWtkaXJzU3luYyhkaXIpXG5cbiAgcmV0dXJuIGZzLmxpbmtTeW5jKHNyY3BhdGgsIGRzdHBhdGgpXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGVMaW5rOiB1KGNyZWF0ZUxpbmspLFxuICBjcmVhdGVMaW5rU3luY1xufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcbmNvbnN0IGZzID0gcmVxdWlyZSgnZ3JhY2VmdWwtZnMnKVxuY29uc3QgcGF0aEV4aXN0cyA9IHJlcXVpcmUoJy4uL3BhdGgtZXhpc3RzJykucGF0aEV4aXN0c1xuXG4vKipcbiAqIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0d28gdHlwZXMgb2YgcGF0aHMsIG9uZSByZWxhdGl2ZSB0byBzeW1saW5rLCBhbmQgb25lXG4gKiByZWxhdGl2ZSB0byB0aGUgY3VycmVudCB3b3JraW5nIGRpcmVjdG9yeS4gQ2hlY2tzIGlmIHBhdGggaXMgYWJzb2x1dGUgb3JcbiAqIHJlbGF0aXZlLiBJZiB0aGUgcGF0aCBpcyByZWxhdGl2ZSwgdGhpcyBmdW5jdGlvbiBjaGVja3MgaWYgdGhlIHBhdGggaXNcbiAqIHJlbGF0aXZlIHRvIHN5bWxpbmsgb3IgcmVsYXRpdmUgdG8gY3VycmVudCB3b3JraW5nIGRpcmVjdG9yeS4gVGhpcyBpcyBhblxuICogaW5pdGlhdGl2ZSB0byBmaW5kIGEgc21hcnRlciBgc3JjcGF0aGAgdG8gc3VwcGx5IHdoZW4gYnVpbGRpbmcgc3ltbGlua3MuXG4gKiBUaGlzIGFsbG93cyB5b3UgdG8gZGV0ZXJtaW5lIHdoaWNoIHBhdGggdG8gdXNlIG91dCBvZiBvbmUgb2YgdGhyZWUgcG9zc2libGVcbiAqIHR5cGVzIG9mIHNvdXJjZSBwYXRocy4gVGhlIGZpcnN0IGlzIGFuIGFic29sdXRlIHBhdGguIFRoaXMgaXMgZGV0ZWN0ZWQgYnlcbiAqIGBwYXRoLmlzQWJzb2x1dGUoKWAuIFdoZW4gYW4gYWJzb2x1dGUgcGF0aCBpcyBwcm92aWRlZCwgaXQgaXMgY2hlY2tlZCB0b1xuICogc2VlIGlmIGl0IGV4aXN0cy4gSWYgaXQgZG9lcyBpdCdzIHVzZWQsIGlmIG5vdCBhbiBlcnJvciBpcyByZXR1cm5lZFxuICogKGNhbGxiYWNrKS8gdGhyb3duIChzeW5jKS4gVGhlIG90aGVyIHR3byBvcHRpb25zIGZvciBgc3JjcGF0aGAgYXJlIGFcbiAqIHJlbGF0aXZlIHVybC4gQnkgZGVmYXVsdCBOb2RlJ3MgYGZzLnN5bWxpbmtgIHdvcmtzIGJ5IGNyZWF0aW5nIGEgc3ltbGlua1xuICogdXNpbmcgYGRzdHBhdGhgIGFuZCBleHBlY3RzIHRoZSBgc3JjcGF0aGAgdG8gYmUgcmVsYXRpdmUgdG8gdGhlIG5ld2x5XG4gKiBjcmVhdGVkIHN5bWxpbmsuIElmIHlvdSBwcm92aWRlIGEgYHNyY3BhdGhgIHRoYXQgZG9lcyBub3QgZXhpc3Qgb24gdGhlIGZpbGVcbiAqIHN5c3RlbSBpdCByZXN1bHRzIGluIGEgYnJva2VuIHN5bWxpbmsuIFRvIG1pbmltaXplIHRoaXMsIHRoZSBmdW5jdGlvblxuICogY2hlY2tzIHRvIHNlZSBpZiB0aGUgJ3JlbGF0aXZlIHRvIHN5bWxpbmsnIHNvdXJjZSBmaWxlIGV4aXN0cywgYW5kIGlmIGl0XG4gKiBkb2VzIGl0IHdpbGwgdXNlIGl0LiBJZiBpdCBkb2VzIG5vdCwgaXQgY2hlY2tzIGlmIHRoZXJlJ3MgYSBmaWxlIHRoYXRcbiAqIGV4aXN0cyB0aGF0IGlzIHJlbGF0aXZlIHRvIHRoZSBjdXJyZW50IHdvcmtpbmcgZGlyZWN0b3J5LCBpZiBkb2VzIGl0cyB1c2VkLlxuICogVGhpcyBwcmVzZXJ2ZXMgdGhlIGV4cGVjdGF0aW9ucyBvZiB0aGUgb3JpZ2luYWwgZnMuc3ltbGluayBzcGVjIGFuZCBhZGRzXG4gKiB0aGUgYWJpbGl0eSB0byBwYXNzIGluIGByZWxhdGl2ZSB0byBjdXJyZW50IHdvcmtpbmcgZGlyZWNvdHJ5YCBwYXRocy5cbiAqL1xuXG5mdW5jdGlvbiBzeW1saW5rUGF0aHMgKHNyY3BhdGgsIGRzdHBhdGgsIGNhbGxiYWNrKSB7XG4gIGlmIChwYXRoLmlzQWJzb2x1dGUoc3JjcGF0aCkpIHtcbiAgICByZXR1cm4gZnMubHN0YXQoc3JjcGF0aCwgKGVycikgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBlcnIubWVzc2FnZSA9IGVyci5tZXNzYWdlLnJlcGxhY2UoJ2xzdGF0JywgJ2Vuc3VyZVN5bWxpbmsnKVxuICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIHtcbiAgICAgICAgdG9Dd2Q6IHNyY3BhdGgsXG4gICAgICAgIHRvRHN0OiBzcmNwYXRoXG4gICAgICB9KVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZHN0ZGlyID0gcGF0aC5kaXJuYW1lKGRzdHBhdGgpXG4gICAgY29uc3QgcmVsYXRpdmVUb0RzdCA9IHBhdGguam9pbihkc3RkaXIsIHNyY3BhdGgpXG4gICAgcmV0dXJuIHBhdGhFeGlzdHMocmVsYXRpdmVUb0RzdCwgKGVyciwgZXhpc3RzKSA9PiB7XG4gICAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKVxuICAgICAgaWYgKGV4aXN0cykge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCwge1xuICAgICAgICAgIHRvQ3dkOiByZWxhdGl2ZVRvRHN0LFxuICAgICAgICAgIHRvRHN0OiBzcmNwYXRoXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZnMubHN0YXQoc3JjcGF0aCwgKGVycikgPT4ge1xuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGVyci5tZXNzYWdlID0gZXJyLm1lc3NhZ2UucmVwbGFjZSgnbHN0YXQnLCAnZW5zdXJlU3ltbGluaycpXG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCwge1xuICAgICAgICAgICAgdG9Dd2Q6IHNyY3BhdGgsXG4gICAgICAgICAgICB0b0RzdDogcGF0aC5yZWxhdGl2ZShkc3RkaXIsIHNyY3BhdGgpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIHN5bWxpbmtQYXRoc1N5bmMgKHNyY3BhdGgsIGRzdHBhdGgpIHtcbiAgbGV0IGV4aXN0c1xuICBpZiAocGF0aC5pc0Fic29sdXRlKHNyY3BhdGgpKSB7XG4gICAgZXhpc3RzID0gZnMuZXhpc3RzU3luYyhzcmNwYXRoKVxuICAgIGlmICghZXhpc3RzKSB0aHJvdyBuZXcgRXJyb3IoJ2Fic29sdXRlIHNyY3BhdGggZG9lcyBub3QgZXhpc3QnKVxuICAgIHJldHVybiB7XG4gICAgICB0b0N3ZDogc3JjcGF0aCxcbiAgICAgIHRvRHN0OiBzcmNwYXRoXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IGRzdGRpciA9IHBhdGguZGlybmFtZShkc3RwYXRoKVxuICAgIGNvbnN0IHJlbGF0aXZlVG9Ec3QgPSBwYXRoLmpvaW4oZHN0ZGlyLCBzcmNwYXRoKVxuICAgIGV4aXN0cyA9IGZzLmV4aXN0c1N5bmMocmVsYXRpdmVUb0RzdClcbiAgICBpZiAoZXhpc3RzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b0N3ZDogcmVsYXRpdmVUb0RzdCxcbiAgICAgICAgdG9Ec3Q6IHNyY3BhdGhcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZXhpc3RzID0gZnMuZXhpc3RzU3luYyhzcmNwYXRoKVxuICAgICAgaWYgKCFleGlzdHMpIHRocm93IG5ldyBFcnJvcigncmVsYXRpdmUgc3JjcGF0aCBkb2VzIG5vdCBleGlzdCcpXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b0N3ZDogc3JjcGF0aCxcbiAgICAgICAgdG9Ec3Q6IHBhdGgucmVsYXRpdmUoZHN0ZGlyLCBzcmNwYXRoKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc3ltbGlua1BhdGhzLFxuICBzeW1saW5rUGF0aHNTeW5jXG59XG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgZnMgPSByZXF1aXJlKCdncmFjZWZ1bC1mcycpXG5cbmZ1bmN0aW9uIHN5bWxpbmtUeXBlIChzcmNwYXRoLCB0eXBlLCBjYWxsYmFjaykge1xuICBjYWxsYmFjayA9ICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykgPyB0eXBlIDogY2FsbGJhY2tcbiAgdHlwZSA9ICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykgPyBmYWxzZSA6IHR5cGVcbiAgaWYgKHR5cGUpIHJldHVybiBjYWxsYmFjayhudWxsLCB0eXBlKVxuICBmcy5sc3RhdChzcmNwYXRoLCAoZXJyLCBzdGF0cykgPT4ge1xuICAgIGlmIChlcnIpIHJldHVybiBjYWxsYmFjayhudWxsLCAnZmlsZScpXG4gICAgdHlwZSA9IChzdGF0cyAmJiBzdGF0cy5pc0RpcmVjdG9yeSgpKSA/ICdkaXInIDogJ2ZpbGUnXG4gICAgY2FsbGJhY2sobnVsbCwgdHlwZSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gc3ltbGlua1R5cGVTeW5jIChzcmNwYXRoLCB0eXBlKSB7XG4gIGxldCBzdGF0c1xuXG4gIGlmICh0eXBlKSByZXR1cm4gdHlwZVxuICB0cnkge1xuICAgIHN0YXRzID0gZnMubHN0YXRTeW5jKHNyY3BhdGgpXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiAnZmlsZSdcbiAgfVxuICByZXR1cm4gKHN0YXRzICYmIHN0YXRzLmlzRGlyZWN0b3J5KCkpID8gJ2RpcicgOiAnZmlsZSdcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHN5bWxpbmtUeXBlLFxuICBzeW1saW5rVHlwZVN5bmNcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCB1ID0gcmVxdWlyZSgndW5pdmVyc2FsaWZ5JykuZnJvbUNhbGxiYWNrXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG5jb25zdCBmcyA9IHJlcXVpcmUoJy4uL2ZzJylcbmNvbnN0IF9ta2RpcnMgPSByZXF1aXJlKCcuLi9ta2RpcnMnKVxuY29uc3QgbWtkaXJzID0gX21rZGlycy5ta2RpcnNcbmNvbnN0IG1rZGlyc1N5bmMgPSBfbWtkaXJzLm1rZGlyc1N5bmNcblxuY29uc3QgX3N5bWxpbmtQYXRocyA9IHJlcXVpcmUoJy4vc3ltbGluay1wYXRocycpXG5jb25zdCBzeW1saW5rUGF0aHMgPSBfc3ltbGlua1BhdGhzLnN5bWxpbmtQYXRoc1xuY29uc3Qgc3ltbGlua1BhdGhzU3luYyA9IF9zeW1saW5rUGF0aHMuc3ltbGlua1BhdGhzU3luY1xuXG5jb25zdCBfc3ltbGlua1R5cGUgPSByZXF1aXJlKCcuL3N5bWxpbmstdHlwZScpXG5jb25zdCBzeW1saW5rVHlwZSA9IF9zeW1saW5rVHlwZS5zeW1saW5rVHlwZVxuY29uc3Qgc3ltbGlua1R5cGVTeW5jID0gX3N5bWxpbmtUeXBlLnN5bWxpbmtUeXBlU3luY1xuXG5jb25zdCBwYXRoRXhpc3RzID0gcmVxdWlyZSgnLi4vcGF0aC1leGlzdHMnKS5wYXRoRXhpc3RzXG5cbmNvbnN0IHsgYXJlSWRlbnRpY2FsIH0gPSByZXF1aXJlKCcuLi91dGlsL3N0YXQnKVxuXG5mdW5jdGlvbiBjcmVhdGVTeW1saW5rIChzcmNwYXRoLCBkc3RwYXRoLCB0eXBlLCBjYWxsYmFjaykge1xuICBjYWxsYmFjayA9ICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykgPyB0eXBlIDogY2FsbGJhY2tcbiAgdHlwZSA9ICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykgPyBmYWxzZSA6IHR5cGVcblxuICBmcy5sc3RhdChkc3RwYXRoLCAoZXJyLCBzdGF0cykgPT4ge1xuICAgIGlmICghZXJyICYmIHN0YXRzLmlzU3ltYm9saWNMaW5rKCkpIHtcbiAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgZnMuc3RhdChzcmNwYXRoKSxcbiAgICAgICAgZnMuc3RhdChkc3RwYXRoKVxuICAgICAgXSkudGhlbigoW3NyY1N0YXQsIGRzdFN0YXRdKSA9PiB7XG4gICAgICAgIGlmIChhcmVJZGVudGljYWwoc3JjU3RhdCwgZHN0U3RhdCkpIHJldHVybiBjYWxsYmFjayhudWxsKVxuICAgICAgICBfY3JlYXRlU3ltbGluayhzcmNwYXRoLCBkc3RwYXRoLCB0eXBlLCBjYWxsYmFjaylcbiAgICAgIH0pXG4gICAgfSBlbHNlIF9jcmVhdGVTeW1saW5rKHNyY3BhdGgsIGRzdHBhdGgsIHR5cGUsIGNhbGxiYWNrKVxuICB9KVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlU3ltbGluayAoc3JjcGF0aCwgZHN0cGF0aCwgdHlwZSwgY2FsbGJhY2spIHtcbiAgc3ltbGlua1BhdGhzKHNyY3BhdGgsIGRzdHBhdGgsIChlcnIsIHJlbGF0aXZlKSA9PiB7XG4gICAgaWYgKGVycikgcmV0dXJuIGNhbGxiYWNrKGVycilcbiAgICBzcmNwYXRoID0gcmVsYXRpdmUudG9Ec3RcbiAgICBzeW1saW5rVHlwZShyZWxhdGl2ZS50b0N3ZCwgdHlwZSwgKGVyciwgdHlwZSkgPT4ge1xuICAgICAgaWYgKGVycikgcmV0dXJuIGNhbGxiYWNrKGVycilcbiAgICAgIGNvbnN0IGRpciA9IHBhdGguZGlybmFtZShkc3RwYXRoKVxuICAgICAgcGF0aEV4aXN0cyhkaXIsIChlcnIsIGRpckV4aXN0cykgPT4ge1xuICAgICAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKVxuICAgICAgICBpZiAoZGlyRXhpc3RzKSByZXR1cm4gZnMuc3ltbGluayhzcmNwYXRoLCBkc3RwYXRoLCB0eXBlLCBjYWxsYmFjaylcbiAgICAgICAgbWtkaXJzKGRpciwgZXJyID0+IHtcbiAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKVxuICAgICAgICAgIGZzLnN5bWxpbmsoc3JjcGF0aCwgZHN0cGF0aCwgdHlwZSwgY2FsbGJhY2spXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN5bWxpbmtTeW5jIChzcmNwYXRoLCBkc3RwYXRoLCB0eXBlKSB7XG4gIGxldCBzdGF0c1xuICB0cnkge1xuICAgIHN0YXRzID0gZnMubHN0YXRTeW5jKGRzdHBhdGgpXG4gIH0gY2F0Y2gge31cbiAgaWYgKHN0YXRzICYmIHN0YXRzLmlzU3ltYm9saWNMaW5rKCkpIHtcbiAgICBjb25zdCBzcmNTdGF0ID0gZnMuc3RhdFN5bmMoc3JjcGF0aClcbiAgICBjb25zdCBkc3RTdGF0ID0gZnMuc3RhdFN5bmMoZHN0cGF0aClcbiAgICBpZiAoYXJlSWRlbnRpY2FsKHNyY1N0YXQsIGRzdFN0YXQpKSByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IHJlbGF0aXZlID0gc3ltbGlua1BhdGhzU3luYyhzcmNwYXRoLCBkc3RwYXRoKVxuICBzcmNwYXRoID0gcmVsYXRpdmUudG9Ec3RcbiAgdHlwZSA9IHN5bWxpbmtUeXBlU3luYyhyZWxhdGl2ZS50b0N3ZCwgdHlwZSlcbiAgY29uc3QgZGlyID0gcGF0aC5kaXJuYW1lKGRzdHBhdGgpXG4gIGNvbnN0IGV4aXN0cyA9IGZzLmV4aXN0c1N5bmMoZGlyKVxuICBpZiAoZXhpc3RzKSByZXR1cm4gZnMuc3ltbGlua1N5bmMoc3JjcGF0aCwgZHN0cGF0aCwgdHlwZSlcbiAgbWtkaXJzU3luYyhkaXIpXG4gIHJldHVybiBmcy5zeW1saW5rU3luYyhzcmNwYXRoLCBkc3RwYXRoLCB0eXBlKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlU3ltbGluazogdShjcmVhdGVTeW1saW5rKSxcbiAgY3JlYXRlU3ltbGlua1N5bmNcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCB7IGNyZWF0ZUZpbGUsIGNyZWF0ZUZpbGVTeW5jIH0gPSByZXF1aXJlKCcuL2ZpbGUnKVxuY29uc3QgeyBjcmVhdGVMaW5rLCBjcmVhdGVMaW5rU3luYyB9ID0gcmVxdWlyZSgnLi9saW5rJylcbmNvbnN0IHsgY3JlYXRlU3ltbGluaywgY3JlYXRlU3ltbGlua1N5bmMgfSA9IHJlcXVpcmUoJy4vc3ltbGluaycpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBmaWxlXG4gIGNyZWF0ZUZpbGUsXG4gIGNyZWF0ZUZpbGVTeW5jLFxuICBlbnN1cmVGaWxlOiBjcmVhdGVGaWxlLFxuICBlbnN1cmVGaWxlU3luYzogY3JlYXRlRmlsZVN5bmMsXG4gIC8vIGxpbmtcbiAgY3JlYXRlTGluayxcbiAgY3JlYXRlTGlua1N5bmMsXG4gIGVuc3VyZUxpbms6IGNyZWF0ZUxpbmssXG4gIGVuc3VyZUxpbmtTeW5jOiBjcmVhdGVMaW5rU3luYyxcbiAgLy8gc3ltbGlua1xuICBjcmVhdGVTeW1saW5rLFxuICBjcmVhdGVTeW1saW5rU3luYyxcbiAgZW5zdXJlU3ltbGluazogY3JlYXRlU3ltbGluayxcbiAgZW5zdXJlU3ltbGlua1N5bmM6IGNyZWF0ZVN5bWxpbmtTeW5jXG59XG4iLCJmdW5jdGlvbiBzdHJpbmdpZnkgKG9iaiwgeyBFT0wgPSAnXFxuJywgZmluYWxFT0wgPSB0cnVlLCByZXBsYWNlciA9IG51bGwsIHNwYWNlcyB9ID0ge30pIHtcbiAgY29uc3QgRU9GID0gZmluYWxFT0wgPyBFT0wgOiAnJ1xuICBjb25zdCBzdHIgPSBKU09OLnN0cmluZ2lmeShvYmosIHJlcGxhY2VyLCBzcGFjZXMpXG5cbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXG4vZywgRU9MKSArIEVPRlxufVxuXG5mdW5jdGlvbiBzdHJpcEJvbSAoY29udGVudCkge1xuICAvLyB3ZSBkbyB0aGlzIGJlY2F1c2UgSlNPTi5wYXJzZSB3b3VsZCBjb252ZXJ0IGl0IHRvIGEgdXRmOCBzdHJpbmcgaWYgZW5jb2Rpbmcgd2Fzbid0IHNwZWNpZmllZFxuICBpZiAoQnVmZmVyLmlzQnVmZmVyKGNvbnRlbnQpKSBjb250ZW50ID0gY29udGVudC50b1N0cmluZygndXRmOCcpXG4gIHJldHVybiBjb250ZW50LnJlcGxhY2UoL15cXHVGRUZGLywgJycpXG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBzdHJpbmdpZnksIHN0cmlwQm9tIH1cbiIsImxldCBfZnNcbnRyeSB7XG4gIF9mcyA9IHJlcXVpcmUoJ2dyYWNlZnVsLWZzJylcbn0gY2F0Y2ggKF8pIHtcbiAgX2ZzID0gcmVxdWlyZSgnZnMnKVxufVxuY29uc3QgdW5pdmVyc2FsaWZ5ID0gcmVxdWlyZSgndW5pdmVyc2FsaWZ5JylcbmNvbnN0IHsgc3RyaW5naWZ5LCBzdHJpcEJvbSB9ID0gcmVxdWlyZSgnLi91dGlscycpXG5cbmFzeW5jIGZ1bmN0aW9uIF9yZWFkRmlsZSAoZmlsZSwgb3B0aW9ucyA9IHt9KSB7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIHtcbiAgICBvcHRpb25zID0geyBlbmNvZGluZzogb3B0aW9ucyB9XG4gIH1cblxuICBjb25zdCBmcyA9IG9wdGlvbnMuZnMgfHwgX2ZzXG5cbiAgY29uc3Qgc2hvdWxkVGhyb3cgPSAndGhyb3dzJyBpbiBvcHRpb25zID8gb3B0aW9ucy50aHJvd3MgOiB0cnVlXG5cbiAgbGV0IGRhdGEgPSBhd2FpdCB1bml2ZXJzYWxpZnkuZnJvbUNhbGxiYWNrKGZzLnJlYWRGaWxlKShmaWxlLCBvcHRpb25zKVxuXG4gIGRhdGEgPSBzdHJpcEJvbShkYXRhKVxuXG4gIGxldCBvYmpcbiAgdHJ5IHtcbiAgICBvYmogPSBKU09OLnBhcnNlKGRhdGEsIG9wdGlvbnMgPyBvcHRpb25zLnJldml2ZXIgOiBudWxsKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoc2hvdWxkVGhyb3cpIHtcbiAgICAgIGVyci5tZXNzYWdlID0gYCR7ZmlsZX06ICR7ZXJyLm1lc3NhZ2V9YFxuICAgICAgdGhyb3cgZXJyXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9ialxufVxuXG5jb25zdCByZWFkRmlsZSA9IHVuaXZlcnNhbGlmeS5mcm9tUHJvbWlzZShfcmVhZEZpbGUpXG5cbmZ1bmN0aW9uIHJlYWRGaWxlU3luYyAoZmlsZSwgb3B0aW9ucyA9IHt9KSB7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIHtcbiAgICBvcHRpb25zID0geyBlbmNvZGluZzogb3B0aW9ucyB9XG4gIH1cblxuICBjb25zdCBmcyA9IG9wdGlvbnMuZnMgfHwgX2ZzXG5cbiAgY29uc3Qgc2hvdWxkVGhyb3cgPSAndGhyb3dzJyBpbiBvcHRpb25zID8gb3B0aW9ucy50aHJvd3MgOiB0cnVlXG5cbiAgdHJ5IHtcbiAgICBsZXQgY29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhmaWxlLCBvcHRpb25zKVxuICAgIGNvbnRlbnQgPSBzdHJpcEJvbShjb250ZW50KVxuICAgIHJldHVybiBKU09OLnBhcnNlKGNvbnRlbnQsIG9wdGlvbnMucmV2aXZlcilcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKHNob3VsZFRocm93KSB7XG4gICAgICBlcnIubWVzc2FnZSA9IGAke2ZpbGV9OiAke2Vyci5tZXNzYWdlfWBcbiAgICAgIHRocm93IGVyclxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBfd3JpdGVGaWxlIChmaWxlLCBvYmosIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCBmcyA9IG9wdGlvbnMuZnMgfHwgX2ZzXG5cbiAgY29uc3Qgc3RyID0gc3RyaW5naWZ5KG9iaiwgb3B0aW9ucylcblxuICBhd2FpdCB1bml2ZXJzYWxpZnkuZnJvbUNhbGxiYWNrKGZzLndyaXRlRmlsZSkoZmlsZSwgc3RyLCBvcHRpb25zKVxufVxuXG5jb25zdCB3cml0ZUZpbGUgPSB1bml2ZXJzYWxpZnkuZnJvbVByb21pc2UoX3dyaXRlRmlsZSlcblxuZnVuY3Rpb24gd3JpdGVGaWxlU3luYyAoZmlsZSwgb2JqLCBvcHRpb25zID0ge30pIHtcbiAgY29uc3QgZnMgPSBvcHRpb25zLmZzIHx8IF9mc1xuXG4gIGNvbnN0IHN0ciA9IHN0cmluZ2lmeShvYmosIG9wdGlvbnMpXG4gIC8vIG5vdCBzdXJlIGlmIGZzLndyaXRlRmlsZVN5bmMgcmV0dXJucyBhbnl0aGluZywgYnV0IGp1c3QgaW4gY2FzZVxuICByZXR1cm4gZnMud3JpdGVGaWxlU3luYyhmaWxlLCBzdHIsIG9wdGlvbnMpXG59XG5cbmNvbnN0IGpzb25maWxlID0ge1xuICByZWFkRmlsZSxcbiAgcmVhZEZpbGVTeW5jLFxuICB3cml0ZUZpbGUsXG4gIHdyaXRlRmlsZVN5bmNcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBqc29uZmlsZVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGpzb25GaWxlID0gcmVxdWlyZSgnanNvbmZpbGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8ganNvbmZpbGUgZXhwb3J0c1xuICByZWFkSnNvbjoganNvbkZpbGUucmVhZEZpbGUsXG4gIHJlYWRKc29uU3luYzoganNvbkZpbGUucmVhZEZpbGVTeW5jLFxuICB3cml0ZUpzb246IGpzb25GaWxlLndyaXRlRmlsZSxcbiAgd3JpdGVKc29uU3luYzoganNvbkZpbGUud3JpdGVGaWxlU3luY1xufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHUgPSByZXF1aXJlKCd1bml2ZXJzYWxpZnknKS5mcm9tQ2FsbGJhY2tcbmNvbnN0IGZzID0gcmVxdWlyZSgnZ3JhY2VmdWwtZnMnKVxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuY29uc3QgbWtkaXIgPSByZXF1aXJlKCcuLi9ta2RpcnMnKVxuY29uc3QgcGF0aEV4aXN0cyA9IHJlcXVpcmUoJy4uL3BhdGgtZXhpc3RzJykucGF0aEV4aXN0c1xuXG5mdW5jdGlvbiBvdXRwdXRGaWxlIChmaWxlLCBkYXRhLCBlbmNvZGluZywgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBlbmNvZGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNhbGxiYWNrID0gZW5jb2RpbmdcbiAgICBlbmNvZGluZyA9ICd1dGY4J1xuICB9XG5cbiAgY29uc3QgZGlyID0gcGF0aC5kaXJuYW1lKGZpbGUpXG4gIHBhdGhFeGlzdHMoZGlyLCAoZXJyLCBpdERvZXMpID0+IHtcbiAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKVxuICAgIGlmIChpdERvZXMpIHJldHVybiBmcy53cml0ZUZpbGUoZmlsZSwgZGF0YSwgZW5jb2RpbmcsIGNhbGxiYWNrKVxuXG4gICAgbWtkaXIubWtkaXJzKGRpciwgZXJyID0+IHtcbiAgICAgIGlmIChlcnIpIHJldHVybiBjYWxsYmFjayhlcnIpXG5cbiAgICAgIGZzLndyaXRlRmlsZShmaWxlLCBkYXRhLCBlbmNvZGluZywgY2FsbGJhY2spXG4gICAgfSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gb3V0cHV0RmlsZVN5bmMgKGZpbGUsIC4uLmFyZ3MpIHtcbiAgY29uc3QgZGlyID0gcGF0aC5kaXJuYW1lKGZpbGUpXG4gIGlmIChmcy5leGlzdHNTeW5jKGRpcikpIHtcbiAgICByZXR1cm4gZnMud3JpdGVGaWxlU3luYyhmaWxlLCAuLi5hcmdzKVxuICB9XG4gIG1rZGlyLm1rZGlyc1N5bmMoZGlyKVxuICBmcy53cml0ZUZpbGVTeW5jKGZpbGUsIC4uLmFyZ3MpXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBvdXRwdXRGaWxlOiB1KG91dHB1dEZpbGUpLFxuICBvdXRwdXRGaWxlU3luY1xufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHsgc3RyaW5naWZ5IH0gPSByZXF1aXJlKCdqc29uZmlsZS91dGlscycpXG5jb25zdCB7IG91dHB1dEZpbGUgfSA9IHJlcXVpcmUoJy4uL291dHB1dC1maWxlJylcblxuYXN5bmMgZnVuY3Rpb24gb3V0cHV0SnNvbiAoZmlsZSwgZGF0YSwgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHN0ciA9IHN0cmluZ2lmeShkYXRhLCBvcHRpb25zKVxuXG4gIGF3YWl0IG91dHB1dEZpbGUoZmlsZSwgc3RyLCBvcHRpb25zKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG91dHB1dEpzb25cbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCB7IHN0cmluZ2lmeSB9ID0gcmVxdWlyZSgnanNvbmZpbGUvdXRpbHMnKVxuY29uc3QgeyBvdXRwdXRGaWxlU3luYyB9ID0gcmVxdWlyZSgnLi4vb3V0cHV0LWZpbGUnKVxuXG5mdW5jdGlvbiBvdXRwdXRKc29uU3luYyAoZmlsZSwgZGF0YSwgb3B0aW9ucykge1xuICBjb25zdCBzdHIgPSBzdHJpbmdpZnkoZGF0YSwgb3B0aW9ucylcblxuICBvdXRwdXRGaWxlU3luYyhmaWxlLCBzdHIsIG9wdGlvbnMpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gb3V0cHV0SnNvblN5bmNcbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCB1ID0gcmVxdWlyZSgndW5pdmVyc2FsaWZ5JykuZnJvbVByb21pc2VcbmNvbnN0IGpzb25GaWxlID0gcmVxdWlyZSgnLi9qc29uZmlsZScpXG5cbmpzb25GaWxlLm91dHB1dEpzb24gPSB1KHJlcXVpcmUoJy4vb3V0cHV0LWpzb24nKSlcbmpzb25GaWxlLm91dHB1dEpzb25TeW5jID0gcmVxdWlyZSgnLi9vdXRwdXQtanNvbi1zeW5jJylcbi8vIGFsaWFzZXNcbmpzb25GaWxlLm91dHB1dEpTT04gPSBqc29uRmlsZS5vdXRwdXRKc29uXG5qc29uRmlsZS5vdXRwdXRKU09OU3luYyA9IGpzb25GaWxlLm91dHB1dEpzb25TeW5jXG5qc29uRmlsZS53cml0ZUpTT04gPSBqc29uRmlsZS53cml0ZUpzb25cbmpzb25GaWxlLndyaXRlSlNPTlN5bmMgPSBqc29uRmlsZS53cml0ZUpzb25TeW5jXG5qc29uRmlsZS5yZWFkSlNPTiA9IGpzb25GaWxlLnJlYWRKc29uXG5qc29uRmlsZS5yZWFkSlNPTlN5bmMgPSBqc29uRmlsZS5yZWFkSnNvblN5bmNcblxubW9kdWxlLmV4cG9ydHMgPSBqc29uRmlsZVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGZzID0gcmVxdWlyZSgnZ3JhY2VmdWwtZnMnKVxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuY29uc3QgY29weSA9IHJlcXVpcmUoJy4uL2NvcHknKS5jb3B5XG5jb25zdCByZW1vdmUgPSByZXF1aXJlKCcuLi9yZW1vdmUnKS5yZW1vdmVcbmNvbnN0IG1rZGlycCA9IHJlcXVpcmUoJy4uL21rZGlycycpLm1rZGlycFxuY29uc3QgcGF0aEV4aXN0cyA9IHJlcXVpcmUoJy4uL3BhdGgtZXhpc3RzJykucGF0aEV4aXN0c1xuY29uc3Qgc3RhdCA9IHJlcXVpcmUoJy4uL3V0aWwvc3RhdCcpXG5cbmZ1bmN0aW9uIG1vdmUgKHNyYywgZGVzdCwgb3B0cywgY2IpIHtcbiAgaWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2IgPSBvcHRzXG4gICAgb3B0cyA9IHt9XG4gIH1cblxuICBvcHRzID0gb3B0cyB8fCB7fVxuXG4gIGNvbnN0IG92ZXJ3cml0ZSA9IG9wdHMub3ZlcndyaXRlIHx8IG9wdHMuY2xvYmJlciB8fCBmYWxzZVxuXG4gIHN0YXQuY2hlY2tQYXRocyhzcmMsIGRlc3QsICdtb3ZlJywgb3B0cywgKGVyciwgc3RhdHMpID0+IHtcbiAgICBpZiAoZXJyKSByZXR1cm4gY2IoZXJyKVxuICAgIGNvbnN0IHsgc3JjU3RhdCwgaXNDaGFuZ2luZ0Nhc2UgPSBmYWxzZSB9ID0gc3RhdHNcbiAgICBzdGF0LmNoZWNrUGFyZW50UGF0aHMoc3JjLCBzcmNTdGF0LCBkZXN0LCAnbW92ZScsIGVyciA9PiB7XG4gICAgICBpZiAoZXJyKSByZXR1cm4gY2IoZXJyKVxuICAgICAgaWYgKGlzUGFyZW50Um9vdChkZXN0KSkgcmV0dXJuIGRvUmVuYW1lKHNyYywgZGVzdCwgb3ZlcndyaXRlLCBpc0NoYW5naW5nQ2FzZSwgY2IpXG4gICAgICBta2RpcnAocGF0aC5kaXJuYW1lKGRlc3QpLCBlcnIgPT4ge1xuICAgICAgICBpZiAoZXJyKSByZXR1cm4gY2IoZXJyKVxuICAgICAgICByZXR1cm4gZG9SZW5hbWUoc3JjLCBkZXN0LCBvdmVyd3JpdGUsIGlzQ2hhbmdpbmdDYXNlLCBjYilcbiAgICAgIH0pXG4gICAgfSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gaXNQYXJlbnRSb290IChkZXN0KSB7XG4gIGNvbnN0IHBhcmVudCA9IHBhdGguZGlybmFtZShkZXN0KVxuICBjb25zdCBwYXJzZWRQYXRoID0gcGF0aC5wYXJzZShwYXJlbnQpXG4gIHJldHVybiBwYXJzZWRQYXRoLnJvb3QgPT09IHBhcmVudFxufVxuXG5mdW5jdGlvbiBkb1JlbmFtZSAoc3JjLCBkZXN0LCBvdmVyd3JpdGUsIGlzQ2hhbmdpbmdDYXNlLCBjYikge1xuICBpZiAoaXNDaGFuZ2luZ0Nhc2UpIHJldHVybiByZW5hbWUoc3JjLCBkZXN0LCBvdmVyd3JpdGUsIGNiKVxuICBpZiAob3ZlcndyaXRlKSB7XG4gICAgcmV0dXJuIHJlbW92ZShkZXN0LCBlcnIgPT4ge1xuICAgICAgaWYgKGVycikgcmV0dXJuIGNiKGVycilcbiAgICAgIHJldHVybiByZW5hbWUoc3JjLCBkZXN0LCBvdmVyd3JpdGUsIGNiKVxuICAgIH0pXG4gIH1cbiAgcGF0aEV4aXN0cyhkZXN0LCAoZXJyLCBkZXN0RXhpc3RzKSA9PiB7XG4gICAgaWYgKGVycikgcmV0dXJuIGNiKGVycilcbiAgICBpZiAoZGVzdEV4aXN0cykgcmV0dXJuIGNiKG5ldyBFcnJvcignZGVzdCBhbHJlYWR5IGV4aXN0cy4nKSlcbiAgICByZXR1cm4gcmVuYW1lKHNyYywgZGVzdCwgb3ZlcndyaXRlLCBjYilcbiAgfSlcbn1cblxuZnVuY3Rpb24gcmVuYW1lIChzcmMsIGRlc3QsIG92ZXJ3cml0ZSwgY2IpIHtcbiAgZnMucmVuYW1lKHNyYywgZGVzdCwgZXJyID0+IHtcbiAgICBpZiAoIWVycikgcmV0dXJuIGNiKClcbiAgICBpZiAoZXJyLmNvZGUgIT09ICdFWERFVicpIHJldHVybiBjYihlcnIpXG4gICAgcmV0dXJuIG1vdmVBY3Jvc3NEZXZpY2Uoc3JjLCBkZXN0LCBvdmVyd3JpdGUsIGNiKVxuICB9KVxufVxuXG5mdW5jdGlvbiBtb3ZlQWNyb3NzRGV2aWNlIChzcmMsIGRlc3QsIG92ZXJ3cml0ZSwgY2IpIHtcbiAgY29uc3Qgb3B0cyA9IHtcbiAgICBvdmVyd3JpdGUsXG4gICAgZXJyb3JPbkV4aXN0OiB0cnVlXG4gIH1cbiAgY29weShzcmMsIGRlc3QsIG9wdHMsIGVyciA9PiB7XG4gICAgaWYgKGVycikgcmV0dXJuIGNiKGVycilcbiAgICByZXR1cm4gcmVtb3ZlKHNyYywgY2IpXG4gIH0pXG59XG5cbm1vZHVsZS5leHBvcnRzID0gbW92ZVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGZzID0gcmVxdWlyZSgnZ3JhY2VmdWwtZnMnKVxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuY29uc3QgY29weVN5bmMgPSByZXF1aXJlKCcuLi9jb3B5JykuY29weVN5bmNcbmNvbnN0IHJlbW92ZVN5bmMgPSByZXF1aXJlKCcuLi9yZW1vdmUnKS5yZW1vdmVTeW5jXG5jb25zdCBta2RpcnBTeW5jID0gcmVxdWlyZSgnLi4vbWtkaXJzJykubWtkaXJwU3luY1xuY29uc3Qgc3RhdCA9IHJlcXVpcmUoJy4uL3V0aWwvc3RhdCcpXG5cbmZ1bmN0aW9uIG1vdmVTeW5jIChzcmMsIGRlc3QsIG9wdHMpIHtcbiAgb3B0cyA9IG9wdHMgfHwge31cbiAgY29uc3Qgb3ZlcndyaXRlID0gb3B0cy5vdmVyd3JpdGUgfHwgb3B0cy5jbG9iYmVyIHx8IGZhbHNlXG5cbiAgY29uc3QgeyBzcmNTdGF0LCBpc0NoYW5naW5nQ2FzZSA9IGZhbHNlIH0gPSBzdGF0LmNoZWNrUGF0aHNTeW5jKHNyYywgZGVzdCwgJ21vdmUnLCBvcHRzKVxuICBzdGF0LmNoZWNrUGFyZW50UGF0aHNTeW5jKHNyYywgc3JjU3RhdCwgZGVzdCwgJ21vdmUnKVxuICBpZiAoIWlzUGFyZW50Um9vdChkZXN0KSkgbWtkaXJwU3luYyhwYXRoLmRpcm5hbWUoZGVzdCkpXG4gIHJldHVybiBkb1JlbmFtZShzcmMsIGRlc3QsIG92ZXJ3cml0ZSwgaXNDaGFuZ2luZ0Nhc2UpXG59XG5cbmZ1bmN0aW9uIGlzUGFyZW50Um9vdCAoZGVzdCkge1xuICBjb25zdCBwYXJlbnQgPSBwYXRoLmRpcm5hbWUoZGVzdClcbiAgY29uc3QgcGFyc2VkUGF0aCA9IHBhdGgucGFyc2UocGFyZW50KVxuICByZXR1cm4gcGFyc2VkUGF0aC5yb290ID09PSBwYXJlbnRcbn1cblxuZnVuY3Rpb24gZG9SZW5hbWUgKHNyYywgZGVzdCwgb3ZlcndyaXRlLCBpc0NoYW5naW5nQ2FzZSkge1xuICBpZiAoaXNDaGFuZ2luZ0Nhc2UpIHJldHVybiByZW5hbWUoc3JjLCBkZXN0LCBvdmVyd3JpdGUpXG4gIGlmIChvdmVyd3JpdGUpIHtcbiAgICByZW1vdmVTeW5jKGRlc3QpXG4gICAgcmV0dXJuIHJlbmFtZShzcmMsIGRlc3QsIG92ZXJ3cml0ZSlcbiAgfVxuICBpZiAoZnMuZXhpc3RzU3luYyhkZXN0KSkgdGhyb3cgbmV3IEVycm9yKCdkZXN0IGFscmVhZHkgZXhpc3RzLicpXG4gIHJldHVybiByZW5hbWUoc3JjLCBkZXN0LCBvdmVyd3JpdGUpXG59XG5cbmZ1bmN0aW9uIHJlbmFtZSAoc3JjLCBkZXN0LCBvdmVyd3JpdGUpIHtcbiAgdHJ5IHtcbiAgICBmcy5yZW5hbWVTeW5jKHNyYywgZGVzdClcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5jb2RlICE9PSAnRVhERVYnKSB0aHJvdyBlcnJcbiAgICByZXR1cm4gbW92ZUFjcm9zc0RldmljZShzcmMsIGRlc3QsIG92ZXJ3cml0ZSlcbiAgfVxufVxuXG5mdW5jdGlvbiBtb3ZlQWNyb3NzRGV2aWNlIChzcmMsIGRlc3QsIG92ZXJ3cml0ZSkge1xuICBjb25zdCBvcHRzID0ge1xuICAgIG92ZXJ3cml0ZSxcbiAgICBlcnJvck9uRXhpc3Q6IHRydWVcbiAgfVxuICBjb3B5U3luYyhzcmMsIGRlc3QsIG9wdHMpXG4gIHJldHVybiByZW1vdmVTeW5jKHNyYylcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtb3ZlU3luY1xuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHUgPSByZXF1aXJlKCd1bml2ZXJzYWxpZnknKS5mcm9tQ2FsbGJhY2tcbm1vZHVsZS5leHBvcnRzID0ge1xuICBtb3ZlOiB1KHJlcXVpcmUoJy4vbW92ZScpKSxcbiAgbW92ZVN5bmM6IHJlcXVpcmUoJy4vbW92ZS1zeW5jJylcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gRXhwb3J0IHByb21pc2VpZmllZCBncmFjZWZ1bC1mczpcbiAgLi4ucmVxdWlyZSgnLi9mcycpLFxuICAvLyBFeHBvcnQgZXh0cmEgbWV0aG9kczpcbiAgLi4ucmVxdWlyZSgnLi9jb3B5JyksXG4gIC4uLnJlcXVpcmUoJy4vZW1wdHknKSxcbiAgLi4ucmVxdWlyZSgnLi9lbnN1cmUnKSxcbiAgLi4ucmVxdWlyZSgnLi9qc29uJyksXG4gIC4uLnJlcXVpcmUoJy4vbWtkaXJzJyksXG4gIC4uLnJlcXVpcmUoJy4vbW92ZScpLFxuICAuLi5yZXF1aXJlKCcuL291dHB1dC1maWxlJyksXG4gIC4uLnJlcXVpcmUoJy4vcGF0aC1leGlzdHMnKSxcbiAgLi4ucmVxdWlyZSgnLi9yZW1vdmUnKVxufVxuIiwiaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMtZXh0cmEnO1xuXG5leHBvcnQgY2xhc3MgTUZpbGUge1xuXG4gIC8qKlxuICAgKiBHZXQgcmVjdXJzaXZlIGRpcmVjdG9yeSBzdHJ1Y3R1cmVcbiAgICogQHBhcmFtIGRpclBhdGggXG4gICAqIEBwYXJhbSByZXMgXG4gICAqIEBwYXJhbSByb3V0ZSBcbiAgICogQHJldHVybnMgXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHJlYWREaXIoZGlyUGF0aDogc3RyaW5nLCByZXM6IHN0cmluZ1tdID0gW10sIHJvdXRlOiBzdHJpbmdbXSA9IFtdKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHJvdXRlc1N0ciA9IChyb3V0ZS5sZW5ndGggPyByb3V0ZS5qb2luKCcvJykgKyAnLycgOiAnJyk7XG4gICAgY29uc3QgZGlyZW50ID0gZnMucmVhZGRpclN5bmMoZGlyUGF0aCArICcvJyArIHJvdXRlc1N0ciwgeyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0pO1xuICAgIGRpcmVudC5mb3JFYWNoKGQgPT4ge1xuICAgICAgaWYgKGQuaXNEaXJlY3RvcnkoKSkge1xuICAgICAgICB0aGlzLnJlYWREaXIoZGlyUGF0aCwgcmVzLCBbLi4ucm91dGUsIGQubmFtZV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzLnB1c2gocm91dGVzU3RyICsgZC5uYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE1GaWxlIH0gZnJvbSBcIi4vTUZpbGVcIjtcblxuZXhwb3J0IGNsYXNzIENvbW1hbmRMaW5lIHtcbiAgY29uc3RydWN0b3IoYXJndjogc3RyaW5nW10pIHtcbiAgICBjb25zb2xlLmxvZyhcImhlbGxvIGRvZGFpIGNvbW1hbmQgbGluZSB0b29sLCBhcmd2OlwiLCBhcmd2KTtcbiAgfVxuXG4gIHB1YmxpYyBtYWluKCk6IHZvaWQge1xuICAgIGNvbnN0IGRhdGFEaXIgPSB0aGlzLnNlYXJjaERhdGFEaXIoKTtcbiAgICBjb25zb2xlLmxvZyhcInJlczpcIiwgZGF0YURpcilcbiAgfVxuXG4gIHByaXZhdGUgc2VhcmNoRGF0YURpcigpOiBzdHJpbmcge1xuXG4gICAgY29uc3QgYmluUGF0aCA9IHByb2Nlc3MuYXJndlsxXSB8fCBcIlwiO1xuXG4gICAgbGV0IHBhdGggPSBcIlwiO1xuICAgIGlmIChiaW5QYXRoLm1hdGNoKC9cXC5iaW5cXC9kb2RhaSQvKSkge1xuICAgICAgcGF0aCA9IGJpblBhdGgucmVwbGFjZSgvbm9kZV9tb2R1bGVzXFwvLis/JC8sICdub2RlX21vZHVsZXMnKSB8fCBcIlwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXRoID0gXCIuL2RhdGFcIjtcbiAgICB9XG5cbiAgICBjb25zdCBkaXIgPSBNRmlsZS5yZWFkRGlyKHBhdGgpO1xuICAgIGNvbnNvbGUubG9nKGRpcik7XG4gICAgXG4gICAgcmV0dXJuIHBhdGg7XG4gIH1cbn0iLCIvLyBpbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuLy8gaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMtZXh0cmEnO1xuXG5pbXBvcnQgeyBDb21tYW5kTGluZSB9IGZyb20gJy4vY29tbWFuZC1saW5lJztcblxuZXhwb3J0IGNsYXNzIERvZGFpIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgRG9kYWlcIiwgcHJvY2Vzcy5hcmd2KTtcbiAgICBuZXcgQ29tbWFuZExpbmUocHJvY2Vzcy5hcmd2KS5tYWluKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IERvZGFpIH0gZnJvbSAnLi9kb2RhaSc7XG5cbm5ldyBEb2RhaSgpO1xuXG5leHBvcnQgZGVmYXVsdCBEb2RhaTtcbiJdLCJuYW1lcyI6WyJfX3NwcmVhZEFycmF5IiwidG8iLCJmcm9tIiwiaSIsImlsIiwibGVuZ3RoIiwiaiIsInVuaXZlcnNhbGlmeSIsImZyb21DYWxsYmFjayIsImZuIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJhcmdzIiwiYXBwbHkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImNhbGwiLCJlcnIiLCJyZXMiLCJ2YWx1ZSIsIm5hbWUiLCJmcm9tUHJvbWlzZSIsImNiIiwic2xpY2UiLCJ0aGVuIiwiciIsImNvbnN0YW50cyIsInJlcXVpcmUkJDAiLCJvcmlnQ3dkIiwicHJvY2VzcyIsImN3ZCIsInBsYXRmb3JtIiwiZW52IiwiR1JBQ0VGVUxfRlNfUExBVEZPUk0iLCJlciIsImNoZGlyIiwiZCIsInNldFByb3RvdHlwZU9mIiwicG9seWZpbGxzIiwicGF0Y2giLCJmcyIsImhhc093blByb3BlcnR5IiwidmVyc2lvbiIsIm1hdGNoIiwicGF0Y2hMY2htb2QiLCJsdXRpbWVzIiwicGF0Y2hMdXRpbWVzIiwiY2hvd24iLCJjaG93bkZpeCIsImZjaG93biIsImxjaG93biIsImNobW9kIiwiY2htb2RGaXgiLCJmY2htb2QiLCJsY2htb2QiLCJjaG93blN5bmMiLCJjaG93bkZpeFN5bmMiLCJmY2hvd25TeW5jIiwibGNob3duU3luYyIsImNobW9kU3luYyIsImNobW9kRml4U3luYyIsImZjaG1vZFN5bmMiLCJsY2htb2RTeW5jIiwic3RhdCIsInN0YXRGaXgiLCJmc3RhdCIsImxzdGF0Iiwic3RhdFN5bmMiLCJzdGF0Rml4U3luYyIsImZzdGF0U3luYyIsImxzdGF0U3luYyIsInBhdGgiLCJtb2RlIiwibmV4dFRpY2siLCJ1aWQiLCJnaWQiLCJyZW5hbWUiLCJmcyRyZW5hbWUiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJiYWNrb2ZmIiwiQ0IiLCJjb2RlIiwic2V0VGltZW91dCIsInN0YXRlciIsInN0IiwicmVhZCIsImZzJHJlYWQiLCJmZCIsImJ1ZmZlciIsIm9mZnNldCIsInBvc2l0aW9uIiwiY2FsbGJhY2tfIiwiY2FsbGJhY2siLCJlYWdDb3VudGVyIiwiXyIsIl9fIiwiYXJndW1lbnRzIiwicmVhZFN5bmMiLCJmcyRyZWFkU3luYyIsIm9wZW4iLCJPX1dST05MWSIsIk9fU1lNTElOSyIsImNsb3NlIiwiZXJyMiIsIm9wZW5TeW5jIiwidGhyZXciLCJyZXQiLCJjbG9zZVN5bmMiLCJmdXRpbWVzIiwiYXQiLCJtdCIsImVyMiIsImx1dGltZXNTeW5jIiwiZnV0aW1lc1N5bmMiLCJfYSIsIl9iIiwiX2MiLCJvcmlnIiwidGFyZ2V0IiwiY2hvd25Fck9rIiwib3B0aW9ucyIsInN0YXRzIiwibm9ucm9vdCIsImdldHVpZCIsIlN0cmVhbSIsImxlZ2FjeVN0cmVhbXMiLCJsZWdhY3kiLCJSZWFkU3RyZWFtIiwiV3JpdGVTdHJlYW0iLCJzZWxmIiwicmVhZGFibGUiLCJwYXVzZWQiLCJmbGFncyIsImJ1ZmZlclNpemUiLCJrZXlzIiwiaW5kZXgiLCJrZXkiLCJlbmNvZGluZyIsInNldEVuY29kaW5nIiwidW5kZWZpbmVkIiwiVHlwZUVycm9yIiwiZW5kIiwiSW5maW5pdHkiLCJFcnJvciIsInBvcyIsIl9yZWFkIiwiZW1pdCIsIndyaXRhYmxlIiwiYnl0ZXNXcml0dGVuIiwiYnVzeSIsIl9xdWV1ZSIsIl9vcGVuIiwicHVzaCIsImZsdXNoIiwiY2xvbmVfMSIsImNsb25lIiwiZ2V0UHJvdG90eXBlT2YiLCJvYmoiLCJfX3Byb3RvX18iLCJjb3B5IiwiY3JlYXRlIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImZvckVhY2giLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJyZXF1aXJlJCQxIiwicmVxdWlyZSQkMiIsInJlcXVpcmUkJDMiLCJ1dGlsIiwicmVxdWlyZSQkNCIsImdyYWNlZnVsUXVldWUiLCJwcmV2aW91c1N5bWJvbCIsIlN5bWJvbCIsIm5vb3AiLCJwdWJsaXNoUXVldWUiLCJjb250ZXh0IiwicXVldWUiLCJnZXQiLCJkZWJ1ZyIsImRlYnVnbG9nIiwidGVzdCIsIk5PREVfREVCVUciLCJtIiwiZm9ybWF0Iiwic3BsaXQiLCJqb2luIiwiY29uc29sZSIsImVycm9yIiwiZ2xvYmFsIiwiZnMkY2xvc2UiLCJyZXNldFF1ZXVlIiwiZnMkY2xvc2VTeW5jIiwib24iLCJyZXF1aXJlJCQ1IiwiZXF1YWwiLCJncmFjZWZ1bEZzIiwiVEVTVF9HUkFDRUZVTF9GU19HTE9CQUxfUEFUQ0giLCJfX3BhdGNoZWQiLCJncmFjZWZ1bGlmeSIsImNyZWF0ZVJlYWRTdHJlYW0iLCJjcmVhdGVXcml0ZVN0cmVhbSIsImZzJHJlYWRGaWxlIiwicmVhZEZpbGUiLCJnbyRyZWFkRmlsZSIsInN0YXJ0VGltZSIsImVucXVldWUiLCJmcyR3cml0ZUZpbGUiLCJ3cml0ZUZpbGUiLCJkYXRhIiwiZ28kd3JpdGVGaWxlIiwiZnMkYXBwZW5kRmlsZSIsImFwcGVuZEZpbGUiLCJnbyRhcHBlbmRGaWxlIiwiZnMkY29weUZpbGUiLCJjb3B5RmlsZSIsInNyYyIsImRlc3QiLCJnbyRjb3B5RmlsZSIsImZzJHJlYWRkaXIiLCJyZWFkZGlyIiwibm9SZWFkZGlyT3B0aW9uVmVyc2lvbnMiLCJnbyRyZWFkZGlyIiwiZnMkcmVhZGRpckNhbGxiYWNrIiwiZmlsZXMiLCJzb3J0Iiwic3Vic3RyIiwibGVnU3RyZWFtcyIsImZzJFJlYWRTdHJlYW0iLCJwcm90b3R5cGUiLCJSZWFkU3RyZWFtJG9wZW4iLCJmcyRXcml0ZVN0cmVhbSIsIldyaXRlU3RyZWFtJG9wZW4iLCJzZXQiLCJ2YWwiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiRmlsZVJlYWRTdHJlYW0iLCJGaWxlV3JpdGVTdHJlYW0iLCJ0aGF0IiwiYXV0b0Nsb3NlIiwiZGVzdHJveSIsImZzJG9wZW4iLCJnbyRvcGVuIiwiZWxlbSIsInJldHJ5IiwicmV0cnlUaW1lciIsImNsZWFyVGltZW91dCIsInNoaWZ0IiwibGFzdFRpbWUiLCJwb3AiLCJzaW5jZUF0dGVtcHQiLCJzaW5jZVN0YXJ0IiwiTWF0aCIsIm1heCIsImRlc2lyZWREZWxheSIsIm1pbiIsImNvbmNhdCIsInUiLCJhcGkiLCJmaWx0ZXIiLCJhc3NpZ24iLCJleHBvcnRzIiwibWV0aG9kIiwiZXhpc3RzIiwiZmlsZW5hbWUiLCJieXRlc1JlYWQiLCJ3cml0ZSIsInJlYWR2IiwiYnVmZmVycyIsIndyaXRldiIsInJlYWxwYXRoIiwiZW1pdFdhcm5pbmciLCJ1dGlscyIsImNoZWNrUGF0aCIsInB0aCIsInBhdGhIYXNJbnZhbGlkV2luQ2hhcmFjdGVycyIsInJlcGxhY2UiLCJwYXJzZSIsInJvb3QiLCJnZXRNb2RlIiwiZGVmYXVsdHMiLCJfb2JqZWN0U3ByZWFkIiwibWFrZURpciIsImRpciIsIm1rZGlyIiwicmVjdXJzaXZlIiwibWFrZURpclN5bmMiLCJta2RpclN5bmMiLCJfbWFrZURpciIsIm1rZGlycyIsIm1rZGlyc1N5bmMiLCJta2RpcnAiLCJta2RpcnBTeW5jIiwiZW5zdXJlRGlyIiwiZW5zdXJlRGlyU3luYyIsInBhdGhFeGlzdHMiLCJhY2Nlc3MiLCJwYXRoRXhpc3RzXzEiLCJwYXRoRXhpc3RzU3luYyIsImV4aXN0c1N5bmMiLCJ1dGltZXNNaWxsaXMiLCJhdGltZSIsIm10aW1lIiwiZnV0aW1lc0VyciIsImNsb3NlRXJyIiwidXRpbWVzTWlsbGlzU3luYyIsInV0aW1lcyIsImdldFN0YXRzIiwib3B0cyIsInN0YXRGdW5jIiwiZGVyZWZlcmVuY2UiLCJmaWxlIiwiYmlnaW50IiwiYWxsIiwic3JjU3RhdCIsImRlc3RTdGF0IiwiZ2V0U3RhdHNTeW5jIiwiY2hlY2tQYXRocyIsImZ1bmNOYW1lIiwiY2FsbGJhY2tpZnkiLCJhcmVJZGVudGljYWwiLCJzcmNCYXNlTmFtZSIsImJhc2VuYW1lIiwiZGVzdEJhc2VOYW1lIiwidG9Mb3dlckNhc2UiLCJpc0NoYW5naW5nQ2FzZSIsImlzRGlyZWN0b3J5IiwiaXNTcmNTdWJkaXIiLCJlcnJNc2ciLCJjaGVja1BhdGhzU3luYyIsImNoZWNrUGFyZW50UGF0aHMiLCJzcmNQYXJlbnQiLCJkaXJuYW1lIiwiZGVzdFBhcmVudCIsImNoZWNrUGFyZW50UGF0aHNTeW5jIiwiaW5vIiwiZGV2Iiwic3JjQXJyIiwic2VwIiwiZGVzdEFyciIsInJlZHVjZSIsImFjYyIsImN1ciIsImNsb2JiZXIiLCJvdmVyd3JpdGUiLCJwcmVzZXJ2ZVRpbWVzdGFtcHMiLCJhcmNoIiwicnVuRmlsdGVyIiwiaW5jbHVkZSIsImNoZWNrUGFyZW50RGlyIiwiZGlyRXhpc3RzIiwib25EaXIiLCJpc0ZpbGUiLCJpc0NoYXJhY3RlckRldmljZSIsImlzQmxvY2tEZXZpY2UiLCJvbkZpbGUiLCJpc1N5bWJvbGljTGluayIsIm9uTGluayIsImlzU29ja2V0IiwiaXNGSUZPIiwibWF5Q29weUZpbGUiLCJ1bmxpbmsiLCJlcnJvck9uRXhpc3QiLCJoYW5kbGVUaW1lc3RhbXBzQW5kTW9kZSIsInNldERlc3RNb2RlIiwic3JjTW9kZSIsImZpbGVJc05vdFdyaXRhYmxlIiwibWFrZUZpbGVXcml0YWJsZSIsInNldERlc3RUaW1lc3RhbXBzQW5kTW9kZSIsInNldERlc3RUaW1lc3RhbXBzIiwidXBkYXRlZFNyY1N0YXQiLCJta0RpckFuZENvcHkiLCJjb3B5RGlyIiwiaXRlbXMiLCJjb3B5RGlySXRlbXMiLCJpdGVtIiwiY29weURpckl0ZW0iLCJzcmNJdGVtIiwiZGVzdEl0ZW0iLCJyZWFkbGluayIsInJlc29sdmVkU3JjIiwic3ltbGluayIsInJlc29sdmVkRGVzdCIsImNvcHlMaW5rIiwiY29weV8xIiwiY29weVN5bmMiLCJ1bmxpbmtTeW5jIiwiY29weUZpbGVTeW5jIiwiaGFuZGxlVGltZXN0YW1wcyIsInJlYWRkaXJTeW5jIiwicmVhZGxpbmtTeW5jIiwic3ltbGlua1N5bmMiLCJjb3B5U3luY18xIiwicmVtb3ZlIiwicm0iLCJmb3JjZSIsInJlbW92ZVN5bmMiLCJybVN5bmMiLCJyZW1vdmVfMSIsImVtcHR5RGlyIiwibWFwIiwiZW1wdHlEaXJTeW5jIiwiZW1wdHkiLCJlbXB0eWRpclN5bmMiLCJlbXB0eWRpciIsImNyZWF0ZUZpbGUiLCJtYWtlRmlsZSIsImNyZWF0ZUZpbGVTeW5jIiwid3JpdGVGaWxlU3luYyIsImNyZWF0ZUxpbmsiLCJzcmNwYXRoIiwiZHN0cGF0aCIsIm1ha2VMaW5rIiwibGluayIsImRzdFN0YXQiLCJtZXNzYWdlIiwiY3JlYXRlTGlua1N5bmMiLCJsaW5rU3luYyIsInN5bWxpbmtQYXRocyIsImlzQWJzb2x1dGUiLCJ0b0N3ZCIsInRvRHN0IiwiZHN0ZGlyIiwicmVsYXRpdmVUb0RzdCIsInJlbGF0aXZlIiwic3ltbGlua1BhdGhzU3luYyIsInN5bWxpbmtQYXRoc18xIiwic3ltbGlua1R5cGUiLCJ0eXBlIiwic3ltbGlua1R5cGVTeW5jIiwic3ltbGlua1R5cGVfMSIsIl9ta2RpcnMiLCJfc3ltbGlua1BhdGhzIiwiX3N5bWxpbmtUeXBlIiwicmVxdWlyZSQkNiIsInJlcXVpcmUkJDciLCJjcmVhdGVTeW1saW5rIiwiX2NyZWF0ZVN5bWxpbmsiLCJjcmVhdGVTeW1saW5rU3luYyIsImVuc3VyZSIsImVuc3VyZUZpbGUiLCJlbnN1cmVGaWxlU3luYyIsImVuc3VyZUxpbmsiLCJlbnN1cmVMaW5rU3luYyIsImVuc3VyZVN5bWxpbmsiLCJlbnN1cmVTeW1saW5rU3luYyIsInN0cmluZ2lmeSIsIkVPTCIsImZpbmFsRU9MIiwicmVwbGFjZXIiLCJzcGFjZXMiLCJFT0YiLCJzdHIiLCJKU09OIiwic3RyaXBCb20iLCJjb250ZW50IiwiQnVmZmVyIiwiaXNCdWZmZXIiLCJ0b1N0cmluZyIsIl9mcyIsIl9yZWFkRmlsZSIsInNob3VsZFRocm93IiwicmV2aXZlciIsInJlYWRGaWxlU3luYyIsIl93cml0ZUZpbGUiLCJqc29uZmlsZSIsImpzb25maWxlXzEiLCJqc29uRmlsZSIsInJlYWRKc29uIiwicmVhZEpzb25TeW5jIiwid3JpdGVKc29uIiwid3JpdGVKc29uU3luYyIsIm91dHB1dEZpbGUiLCJpdERvZXMiLCJvdXRwdXRGaWxlU3luYyIsIm91dHB1dEZpbGVfMSIsIm91dHB1dEpzb24iLCJvdXRwdXRKc29uXzEiLCJvdXRwdXRKc29uU3luYyIsIm91dHB1dEpzb25TeW5jXzEiLCJvdXRwdXRKU09OIiwib3V0cHV0SlNPTlN5bmMiLCJ3cml0ZUpTT04iLCJ3cml0ZUpTT05TeW5jIiwicmVhZEpTT04iLCJyZWFkSlNPTlN5bmMiLCJqc29uIiwibW92ZSIsImlzUGFyZW50Um9vdCIsImRvUmVuYW1lIiwicGFyZW50IiwicGFyc2VkUGF0aCIsImRlc3RFeGlzdHMiLCJtb3ZlQWNyb3NzRGV2aWNlIiwibW92ZV8xIiwibW92ZVN5bmMiLCJyZW5hbWVTeW5jIiwibW92ZVN5bmNfMSIsImxpYiIsInJlcXVpcmUkJDgiLCJyZXF1aXJlJCQ5IiwiZnMucmVhZGRpclN5bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBb0tPLFNBQVNBLGFBQVQsQ0FBdUJDLEVBQXZCLEVBQTJCQyxJQUEzQixFQUFpQztFQUNwQyxFQUFLLEtBQUEsSUFBSUMsQ0FBQyxHQUFHLENBQVIsRUFBV0MsRUFBRSxHQUFHRixJQUFJLENBQUNHLE1BQXJCLEVBQTZCQyxDQUFDLEdBQUdMLEVBQUUsQ0FBQ0ksTUFBekMsRUFBaURGLENBQUMsR0FBR0MsRUFBckQsRUFBeURELENBQUMsRUFBSUcsRUFBQUEsQ0FBQyxFQUEvRCxFQUFBO0VBQ0lMLElBQUFBLEVBQUUsQ0FBQ0ssQ0FBRCxDQUFGLEdBQVFKLElBQUksQ0FBQ0MsQ0FBRCxDQUFaLENBQUE7RUFESixHQUFBOztFQUVBLEVBQUEsT0FBT0YsRUFBUCxDQUFBO0VBQ0g7Ozs7Ozs7O0FDdEttQk0sZ0JBQUEsQ0FBQUMsWUFBQSxHQUFHLFVBQVVDLEVBQVYsRUFBYztFQUNuQyxFQUFBLE9BQU9DLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQixZQUFtQjtFQUFBLElBQUEsSUFBQSxLQUFB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
