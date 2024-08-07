function _0x5228() {
  const _0x5dde2c = ["https://nso.go.th/", "https://www.nso.go.th/nsoweb/index", "https://www.nso.go.th/nsoweb/category/T", "https://www.nso.go.th/nsoweb/main/summano/aE", "https://www.nso.go.th/nsoweb/main/summano/P7", "https://www.nso.go.th/nsoweb/main/summano/Pf", "https://www.nso.go.th/nsoweb/category/7", "https://www.nso.go.th/nsoweb/main/contact"];
  _0x5228 = function () {
    return _0x5dde2c;
  };
  return _0x5228();
}
const _0x1edc97 = _0x3177;
(function (_0x3167a6, _0x3b3375) {
  const _0x141d1d = _0x3177,
    _0x17a482 = _0x3167a6();
  while (!![]) {
    try {
      const _0x45ce8d = (-parseInt(_0x141d1d(0x157)) / 0x1) * (parseInt(_0x141d1d(0x15e)) / 0x2) + -parseInt(_0x141d1d(0x158)) / 0x3 + (parseInt(_0x141d1d(0x15b)) / 0x4) * (parseInt(_0x141d1d(0x15c)) / 0x5) + (-parseInt(_0x141d1d(0x15a)) / 0x6) * (parseInt(_0x141d1d(0x174)) / 0x7) + (parseInt(_0x141d1d(0x152)) / 0x8) * (parseInt(_0x141d1d(0x154)) / 0x9) + parseInt(_0x141d1d(0x156)) / 0xa + (-parseInt(_0x141d1d(0x178)) / 0xb) * (-parseInt(_0x141d1d(0x16b)) / 0xc);
      if (_0x45ce8d === _0x3b3375) break;
      else _0x17a482["push"](_0x17a482["shift"]());
    } catch (_0x4ceb7b) {
      _0x17a482["push"](_0x17a482["shift"]());
    }
  }
})(_0x5228, 0xc9d96);
let timer,
  timer_div,
  isSpeaking = ![],
  array_text = [],
  array_url = [_0x1edc97(0x167), _0x1edc97(0x160), _0x1edc97(0x179), _0x1edc97(0x173), _0x1edc97(0x15f), _0x1edc97(0x164), _0x1edc97(0x155), _0x1edc97(0x16c), _0x1edc97(0x161)];
$(document)[_0x1edc97(0x172)](function () {
  const _0x19a547 = _0x1edc97;
  $(_0x19a547(0x176))[_0x19a547(0x171)](
    function () {
      const _0x1cac88 = _0x19a547;
      let _0x350776 = window[_0x1cac88(0x177)][_0x1cac88(0x166)];
      array_url["includes"](_0x350776["split"]("?")[0x0]) &&
        (clearTimeout(timer_div),
        !isSpeaking &&
          (timer = setTimeout(() => {
            const _0x39e10a = _0x1cac88;
            speakText($(this)[_0x39e10a(0x169)]()), clearTimeout(timer);
          }, 0x3e8)));
    },
    function () {
      clearTimeout(timer), stopSpeak();
    }
  ),
    $(_0x19a547(0x165))[_0x19a547(0x171)](
      function () {
        const _0x433768 = _0x19a547;
        let _0x1feb07 = window[_0x433768(0x177)][_0x433768(0x166)];
        array_url[_0x433768(0x16e)](_0x1feb07[_0x433768(0x15d)]("?")[0x0]) &&
          !isSpeaking &&
          $(this)[_0x433768(0x169)]()["length"] < 0xc8 &&
          !$(this)["text"]()[_0x433768(0x162)]()["includes"]("\x0a") &&
          (clearTimeout(timer),
          (timer_div = setTimeout(() => {
            speakText($(this)["text"]()), clearTimeout(timer_div);
          }, 0x3e8)));
      },
      function () {
        clearTimeout(timer_div), stopSpeak();
      }
    );
});
function _0x3177(_0x4ad7f4, _0x83e378) {
  const _0x5228f6 = _0x5228();
  return (
    (_0x3177 = function (_0x3177cd, _0x2dddb6) {
      _0x3177cd = _0x3177cd - 0x150;
      let _0x3cb156 = _0x5228f6[_0x3177cd];
      return _0x3cb156;
    }),
    _0x3177(_0x4ad7f4, _0x83e378)
  );
}
function speakText(_0xd447c3) {
  const _0x5d4b4a = _0x1edc97;
  if (_0x5d4b4a(0x153) in window) {
    let _0x4d5c38 = new SpeechSynthesisUtterance(_0xd447c3);
    (_0x4d5c38[_0x5d4b4a(0x151)] = /[ก-๙]/[_0x5d4b4a(0x16d)](_0xd447c3) ? _0x5d4b4a(0x168) : _0x5d4b4a(0x16f)),
      (_0x4d5c38[_0x5d4b4a(0x16a)] = function () {
        isSpeaking = !![];
      }),
      (_0x4d5c38[_0x5d4b4a(0x163)] = function () {
        isSpeaking = ![];
      }),
      (_0x4d5c38[_0x5d4b4a(0x159)] = function (_0x26a51f) {
        isSpeaking = ![];
      }),
      window[_0x5d4b4a(0x153)]["speak"](_0x4d5c38);
  } else console[_0x5d4b4a(0x170)](_0x5d4b4a(0x150));
}
function stopSpeak() {
  const _0x9e34b7 = _0x1edc97;
  _0x9e34b7(0x153) in window && window[_0x9e34b7(0x153)][_0x9e34b7(0x175)]();
}
