let timer;
let timer_div;
let isSpeaking = false;
let array_text = [];
let array_url = ["file:///Users/macbookpro/Desktop/index.html", "https://nso.go.th/", "https://www.nso.go.th/nsoweb/index", "https://www.nso.go.th/nsoweb/category/T", "https://www.nso.go.th/nsoweb/main/summano/aE", "https://www.nso.go.th/nsoweb/main/summano/P7", "https://www.nso.go.th/nsoweb/main/summano/Pf", "https://www.nso.go.th/nsoweb/category/7", "https://www.nso.go.th/nsoweb/main/contact"];

$(document).ready(function () {
  $("p, a, b, s, u, strong, span, label, h1, h2, h3, h4, h5, h6").hover(
    function () {
      let url = window.location.href;
      if (array_url.includes(url.split("?")[0])) {
      clearTimeout(timer_div);
      if (!isSpeaking) {
        timer = setTimeout(() => {
          speakText($(this).text());
          clearTimeout(timer);
        }, 1000);
      }
    }
    },
    function () {
      clearTimeout(timer);
      stopSpeak();
    }
  ); 
  $("div").hover(
    function () {
      let url = window.location.href;
      if (array_url.includes(url.split("?")[0])) {
      if (!isSpeaking && $(this).text().length < 200 && !$(this).text().trim().includes("\n")) {
        clearTimeout(timer);
        timer_div = setTimeout(() => {
          speakText($(this).text());
          clearTimeout(timer_div);
        }, 1000);
      } 
    }
    },
    function () {
      clearTimeout(timer_div);
      stopSpeak();
    }
  );
});
function speakText(text) {
  if ("speechSynthesis" in window) {
    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = /[ก-๙]/.test(text) ? "th-TH" : "en-US";
    speech.onstart = function () {
      isSpeaking = true;
    };
    speech.onend = function () {
      isSpeaking = false;
    };
    speech.onerror = function (event) {
      isSpeaking = false;
    };
    window.speechSynthesis.speak(speech);
  } else {
    console.warning("Your browser does not support text-to-speech.");
  }
}

function stopSpeak() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}
