const string = `
.skin *{margin: 0;padding: 0;box-sizing: border-box;}
.skin *::after,::before{box-sizing: border-box;}
.skin ul,ol,li{list-style: none;}

.skin{
    background: #d4ecf9;
}
h1{
    display: block;
    font-size: 2em;
    text-align: center;
}

.main{
    width: 600px;
    height: 600px;
    position: relative;
    margin: 5% auto;
    animation: volar 1s linear 2s infinite alternate;
}
@keyframes volar{
    0%{
        top:0px
    }
    25%{
        top:0px
    }
    50%{
        top:50px
    }
    75%{
        top:50px
    }
    100%{
        top:0px
    }
}

.lxj .lxj1{
    border: 2px solid black;
    width: 100px;
    height: 5px;
    position: absolute;
    background: grey;
    left: 50%;
    margin-left: -50px;
    top: 60px;
    z-index: 2;
    animation: rotar 0.1s linear infinite;
}
@keyframes rotar{
    0%{
        transform: rotate3d(0,1,0,0deg);
    }
    100%{
        transform: rotate3d(0,1,0,360deg);
    }
}
.lxj .lxj2{
    border: 2px solid black;
    width: 8px;
    height: 30px;
    position: absolute;
    background: #fcc136;
    top: 50px;
    left: 50%;
    margin-left: -4px;
    z-index: 1;
}
.lxj .yuan{
    border: 2px solid black;
    width: 20px;
    height: 10px;
    position: absolute;
    border-radius: 100px 100px 0 0;
    background: #fcc136;
    top: 50px;
    left: 50%;
    margin-left:-10px ;
    z-index: 3;
}

.duolahead{
    width: 200px;
    height: 200px;
    border: 2px solid black;
    left: 50%;
    position: relative;
    margin-left: -100px;
    top: 75px;
    border-radius: 50%;
    background: #35a1c9;
    overflow: hidden;
    z-index: 10;
}
.duolahead .face{
    width: 170px;
    height: 170px;
    border: 2px solid black;
    position: absolute;
    border-radius: 50%;
    background: white;
    left: 50%;
    margin-left: -85px;
    top: 50%;
    margin-top: -85px;
}
.duolahead .face .eye{
    width: 48px;
    height: 48px;
    border: 1px solid black;
    position: absolute;
    left: 50%;
    margin-left: -24px;
    background: white;
    border-radius: 50%;
}
.face .eye.left{
    transform: translateX(-24px);
}
.face .eye.right{
    transform: translateX(24px);
    overflow: hidden;
}
.face .eye.left .yanren1{
    width: 23px;
    height: 15px;
    background: black;
    border-radius: 100%;
    position: absolute;
    transform: rotate(90deg);
    top: 19px;
    left: 22px;
}
.yanren1::before{
    content: '';
    width: 6px;
    height: 3px;
    border-radius: 100%;
    background: white;
    position: absolute;
    top: 6px;
    left: 9px;
}
.face .eye.right .yanren2{
    width: 23px;
    height: 22px;
    border: 3px solid black;
    border-radius: 100%;
    position: absolute;
    transform: rotate(90deg);
    top: 38px;
    left: 12px;
}

.nose{
    border: 2px solid black;
    width: 34px;
    height: 34px;
    position:absolute;
    left: 50%;
    margin-left: -17px;
    top: 55px;
    border-radius: 50%;
    background: #b11735;
}
.nose::before{
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: white;
    position: absolute;
    top: 6px;
    left: 8px;
}
.xian1{
    width: 2px;
    height: 20px;
    background: black;
    position: absolute;
    left: 50%;
    margin-left: -1px;
    top: 88px;
}
.mouth{
    width: 140px;
    height: 70px;
    background: #b11635;
    position: relative;
    overflow: hidden;
    border-radius: 0 0 140px 140px;
    left: 50%;
    margin-left: -70px;
    top: 106px;
}

.she {
    width: 100px;
    height: 90px;
    left: 50%;
    position: relative;
    margin-left: -50px;
    top: 20px;
}
.she::before{
    content: '';
    width: 50px;
    height: 80px;
    background: #ca2533;
    position: absolute;
    transform: rotate(-45deg);
    border-radius: 50px 50px 0 0;
    left: 13px;
}
.she::after{
    content: '';
    width: 50px;
    height: 80px;
    background: #ca2533;
    position: absolute;
    transform: rotate(45deg);
    border-radius: 50px 50px 0 0;
    left: 38px;
}

.huxu {
    position: relative;
    left: 50%;
    margin-left: -30px;
    top: 100px;
}

.huxu.left{
    position: absolute;
    transform: translateX(-50px);
}
.huxu.right{
    position: absolute;
    transform: translateX(50px);
}
li{
    width: 60px;
    height: 2px;
    background: black;
}
.a1{
    transform-origin: right bottom;
    transform:translateY(-26px) rotate(14deg);
}
.a2{
    transform: translateY(-20px);
}
.a3{
    transform-origin: right bottom;
    transform: translateY(-14px) rotate(-8deg);
}
.b1{
    transform-origin: left bottom;
    transform: translateY(-26px) rotate(-14deg);
}
.b2{
    transform: translateY(-20px);
}
.b3{
    transform-origin: left bottom;
    transform: translateY(-14px) rotate(8deg);
}

.duolabody{
    width: 142px;
    height: 142px;
    position: relative;
    background: #35a1c9;
    border: 2px solid black;
    left: 50%;
    margin-left: -71px;
    border-radius: 50%;
    z-index: 1;
    top: 8px;
}
.duolabody::before{
    content: '';
    position: absolute;
    width: 100px;
    height: 60px;
    background: white;
    border-radius: 100px/60px;
    left: 50%;
    margin-left: -50px;
    top: 61px;
}
.duolabody::after{
    content: '';
    position: absolute;
    width: 60px;
    height: 30px;
    border: 2px solid black;
    background: white;
    left: 50%;
    margin-left: -30px;
    top: 86px;
    border-radius: 0 0 60px 60px;
}
.duolabody .wj{
    width: 100px;
    height: 50px;
    background: #a1172e;
    left: 50%;
    margin-left: -50px;
    top: 21px;
    position: absolute;
    border-radius: 100px/50px;
    z-index: 1;
}
.duolabody .dang{
    width: 36px;
    height: 36px;
    border: 2px solid black;
    border-radius: 100%;
    position: absolute;
    z-index: 3;
    left: 50%;
    margin-left: -18px;
    top: 63px;
    background: #f19629;
}
.dang::before{
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    left: 50%;
    margin-left: -4px;
    top: 16px;
    background-color: black;
}
.dang::after{
    content: '';
    position: absolute;
    width: 16px;
    height: 2px;
    background-color: black;
    left: 50%;
    margin-left: -8px;
    top: 26px;
}
.hand{
    width: 55px;
    height: 77px;
    border:2px solid black;
    border-radius: 55px/85px;
    background: #35a1c9;
    position: absolute;
    left: 50%;
    margin-left: -27px;
    top:-16px;
    z-index: 5;
}
.hand.left{
    transform: translateX(-80px) rotate(-45deg);
}
.hand.right{
    transform: translateX(80px) rotate(45deg);
}
.yuan8{
    width: 56px;
    height: 56px;
    border: 2px solid black;
    background: white;
    border-radius: 50%;
    position: absolute;
    top: -34px;
    left: -4px;
}
.yuan9{
    width: 56px;
    height: 56px;
    border: 2px solid black;
    background: white;
    border-radius: 50%;
    position: absolute;
    top: -34px;
    left: 4px;
}
.foot{
    display: inline-block;
    width: 56px;
    height: 77px;
    border-radius: 56px/77px;
    border: 2px solid black;
    background: white;
    position: relative;
    left: 50%;
    margin-left: -28px;
    top: -43px;
}
.foot.left{
    transform: translateX(-24px);
}
.foot.right{
    transform: translateX(-6px);
}

`;
const demo = document.querySelector("#demo");
const demo2 = document.querySelector("#demo2");
let n = 1;
let time = 100;
let id;

const player = {
  init: () => {
    demo.innerText = string.substr(0, n); //????????????
    demo2.innerHTML = string.substr(0, n);
    player.bindEvents();
    player.play(); //??????
  },
  events: {
    //hashTable?????????event
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast",
  },
  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key]; //value????????????
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: () => {
    n += 1;
    if (n > string.length) {
      window.clearInterval(id);
      return; //??????????????????????????????
    }
    demo.innerText = string.substr(0, n);
    demo2.innerHTML = string.substr(0, n);
    demo.scrollTop = demo.scrollHeight; //demo?????????????????????
  },
  play: () => {
    id = setInterval(player.run, time);
  },
  pause: () => {
    window.clearInterval(id);
  },
  slow: () => {
    player.pause();
    time = 200;
    player.play();
  },
  normal: () => {
    player.pause();
    time = 100;
    player.play();
  },
  fast: () => {
    player.pause();
    time = 0;
    player.play();
  },
};

player.init();
