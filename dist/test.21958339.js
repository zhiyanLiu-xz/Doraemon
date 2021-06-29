// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"HdJB":[function(require,module,exports) {
var string = "\n.skin *{margin: 0;padding: 0;box-sizing: border-box;}\n.skin *::after,::before{box-sizing: border-box;}\n.skin ul,ol,li{list-style: none;}\n\n.skin{\n    background: #d4ecf9;\n}\nh1{\n    display: block;\n    font-size: 2em;\n    text-align: center;\n}\n\n.main{\n    width: 600px;\n    height: 600px;\n    position: relative;\n    margin: 5% auto;\n    animation: volar 1s linear 2s infinite alternate;\n}\n@keyframes volar{\n    0%{\n        top:0px\n    }\n    25%{\n        top:0px\n    }\n    50%{\n        top:50px\n    }\n    75%{\n        top:50px\n    }\n    100%{\n        top:0px\n    }\n}\n\n.lxj .lxj1{\n    border: 2px solid black;\n    width: 100px;\n    height: 5px;\n    position: absolute;\n    background: grey;\n    left: 50%;\n    margin-left: -50px;\n    top: 60px;\n    z-index: 2;\n    animation: rotar 0.1s linear infinite;\n}\n@keyframes rotar{\n    0%{\n        transform: rotate3d(0,1,0,0deg);\n    }\n    100%{\n        transform: rotate3d(0,1,0,360deg);\n    }\n}\n.lxj .lxj2{\n    border: 2px solid black;\n    width: 8px;\n    height: 30px;\n    position: absolute;\n    background: #fcc136;\n    top: 50px;\n    left: 50%;\n    margin-left: -4px;\n    z-index: 1;\n}\n.lxj .yuan{\n    border: 2px solid black;\n    width: 20px;\n    height: 10px;\n    position: absolute;\n    border-radius: 100px 100px 0 0;\n    background: #fcc136;\n    top: 50px;\n    left: 50%;\n    margin-left:-10px ;\n    z-index: 3;\n}\n\n.duolahead{\n    width: 200px;\n    height: 200px;\n    border: 2px solid black;\n    left: 50%;\n    position: relative;\n    margin-left: -100px;\n    top: 75px;\n    border-radius: 50%;\n    background: #35a1c9;\n    overflow: hidden;\n    z-index: 10;\n}\n.duolahead .face{\n    width: 170px;\n    height: 170px;\n    border: 2px solid black;\n    position: absolute;\n    border-radius: 50%;\n    background: white;\n    left: 50%;\n    margin-left: -85px;\n    top: 50%;\n    margin-top: -85px;\n}\n.duolahead .face .eye{\n    width: 48px;\n    height: 48px;\n    border: 1px solid black;\n    position: absolute;\n    left: 50%;\n    margin-left: -24px;\n    background: white;\n    border-radius: 50%;\n}\n.face .eye.left{\n    transform: translateX(-24px);\n}\n.face .eye.right{\n    transform: translateX(24px);\n    overflow: hidden;\n}\n.face .eye.left .yanren1{\n    width: 23px;\n    height: 15px;\n    background: black;\n    border-radius: 100%;\n    position: absolute;\n    transform: rotate(90deg);\n    top: 19px;\n    left: 22px;\n}\n.yanren1::before{\n    content: '';\n    width: 6px;\n    height: 3px;\n    border-radius: 100%;\n    background: white;\n    position: absolute;\n    top: 6px;\n    left: 9px;\n}\n.face .eye.right .yanren2{\n    width: 23px;\n    height: 22px;\n    border: 3px solid black;\n    border-radius: 100%;\n    position: absolute;\n    transform: rotate(90deg);\n    top: 38px;\n    left: 12px;\n}\n\n.nose{\n    border: 2px solid black;\n    width: 34px;\n    height: 34px;\n    position:absolute;\n    left: 50%;\n    margin-left: -17px;\n    top: 55px;\n    border-radius: 50%;\n    background: #b11735;\n}\n.nose::before{\n    content: '';\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    background: white;\n    position: absolute;\n    top: 6px;\n    left: 8px;\n}\n.xian1{\n    width: 2px;\n    height: 20px;\n    background: black;\n    position: absolute;\n    left: 50%;\n    margin-left: -1px;\n    top: 88px;\n}\n.mouth{\n    width: 140px;\n    height: 70px;\n    background: #b11635;\n    position: relative;\n    overflow: hidden;\n    border-radius: 0 0 140px 140px;\n    left: 50%;\n    margin-left: -70px;\n    top: 106px;\n}\n\n.she {\n    width: 100px;\n    height: 90px;\n    left: 50%;\n    position: relative;\n    margin-left: -50px;\n    top: 20px;\n}\n.she::before{\n    content: '';\n    width: 50px;\n    height: 80px;\n    background: #ca2533;\n    position: absolute;\n    transform: rotate(-45deg);\n    border-radius: 50px 50px 0 0;\n    left: 13px;\n}\n.she::after{\n    content: '';\n    width: 50px;\n    height: 80px;\n    background: #ca2533;\n    position: absolute;\n    transform: rotate(45deg);\n    border-radius: 50px 50px 0 0;\n    left: 38px;\n}\n\n.huxu {\n    position: relative;\n    left: 50%;\n    margin-left: -30px;\n    top: 100px;\n}\n\n.huxu.left{\n    position: absolute;\n    transform: translateX(-50px);\n}\n.huxu.right{\n    position: absolute;\n    transform: translateX(50px);\n}\nli{\n    width: 60px;\n    height: 2px;\n    background: black;\n}\n.a1{\n    transform-origin: right bottom;\n    transform:translateY(-26px) rotate(14deg);\n}\n.a2{\n    transform: translateY(-20px);\n}\n.a3{\n    transform-origin: right bottom;\n    transform: translateY(-14px) rotate(-8deg);\n}\n.b1{\n    transform-origin: left bottom;\n    transform: translateY(-26px) rotate(-14deg);\n}\n.b2{\n    transform: translateY(-20px);\n}\n.b3{\n    transform-origin: left bottom;\n    transform: translateY(-14px) rotate(8deg);\n}\n\n.duolabody{\n    width: 142px;\n    height: 142px;\n    position: relative;\n    background: #35a1c9;\n    border: 2px solid black;\n    left: 50%;\n    margin-left: -71px;\n    border-radius: 50%;\n    z-index: 1;\n    top: 8px;\n}\n.duolabody::before{\n    content: '';\n    position: absolute;\n    width: 100px;\n    height: 60px;\n    background: white;\n    border-radius: 100px/60px;\n    left: 50%;\n    margin-left: -50px;\n    top: 61px;\n}\n.duolabody::after{\n    content: '';\n    position: absolute;\n    width: 60px;\n    height: 30px;\n    border: 2px solid black;\n    background: white;\n    left: 50%;\n    margin-left: -30px;\n    top: 86px;\n    border-radius: 0 0 60px 60px;\n}\n.duolabody .wj{\n    width: 100px;\n    height: 50px;\n    background: #a1172e;\n    left: 50%;\n    margin-left: -50px;\n    top: 21px;\n    position: absolute;\n    border-radius: 100px/50px;\n    z-index: 1;\n}\n.duolabody .dang{\n    width: 36px;\n    height: 36px;\n    border: 2px solid black;\n    border-radius: 100%;\n    position: absolute;\n    z-index: 3;\n    left: 50%;\n    margin-left: -18px;\n    top: 63px;\n    background: #f19629;\n}\n.dang::before{\n    content: '';\n    position: absolute;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    left: 50%;\n    margin-left: -4px;\n    top: 16px;\n    background-color: black;\n}\n.dang::after{\n    content: '';\n    position: absolute;\n    width: 16px;\n    height: 2px;\n    background-color: black;\n    left: 50%;\n    margin-left: -8px;\n    top: 26px;\n}\n.hand{\n    width: 55px;\n    height: 77px;\n    border:2px solid black;\n    border-radius: 55px/85px;\n    background: #35a1c9;\n    position: absolute;\n    left: 50%;\n    margin-left: -27px;\n    top:-16px;\n    z-index: 5;\n}\n.hand.left{\n    transform: translateX(-80px) rotate(-45deg);\n}\n.hand.right{\n    transform: translateX(80px) rotate(45deg);\n}\n.yuan8{\n    width: 56px;\n    height: 56px;\n    border: 2px solid black;\n    background: white;\n    border-radius: 50%;\n    position: absolute;\n    top: -34px;\n    left: -4px;\n}\n.yuan9{\n    width: 56px;\n    height: 56px;\n    border: 2px solid black;\n    background: white;\n    border-radius: 50%;\n    position: absolute;\n    top: -34px;\n    left: 4px;\n}\n.foot{\n    display: inline-block;\n    width: 56px;\n    height: 77px;\n    border-radius: 56px/77px;\n    border: 2px solid black;\n    background: white;\n    position: relative;\n    left: 50%;\n    margin-left: -28px;\n    top: -43px;\n}\n.foot.left{\n    transform: translateX(-24px);\n}\n.foot.right{\n    transform: translateX(-6px);\n}\n\n";
var demo = document.querySelector("#demo");
var demo2 = document.querySelector("#demo2");
var n = 1;
var time = 100;
var id;
var player = {
  init: function init() {
    demo.innerText = string.substr(0, n); //子字符串

    demo2.innerHTML = string.substr(0, n);
    player.bindEvents();
    player.play(); //播放
  },
  events: {
    //hashTable改名为event
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast"
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key]; //value是字符串

        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    n += 1;

    if (n > string.length) {
      window.clearInterval(id);
      return; //后面的代码就不执行了
    }

    demo.innerText = string.substr(0, n);
    demo2.innerHTML = string.substr(0, n);
    demo.scrollTop = demo.scrollHeight; //demo可以滚动的高度
  },
  play: function play() {
    id = setInterval(player.run, time);
  },
  pause: function pause() {
    window.clearInterval(id);
  },
  slow: function slow() {
    player.pause();
    time = 200;
    player.play();
  },
  normal: function normal() {
    player.pause();
    time = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    time = 0;
    player.play();
  }
};
player.init();
},{}]},{},["HdJB"], null)
//# sourceMappingURL=test.21958339.js.map