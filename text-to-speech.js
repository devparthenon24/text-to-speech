const _0x46ade2=_0x14fd;(function(_0x366557,_0x89c878){const _0x51e094=_0x14fd,_0x8ede1f=_0x366557();while(!![]){try{const _0x2cb4e0=parseInt(_0x51e094(0x132))/0x1*(parseInt(_0x51e094(0x115))/0x2)+parseInt(_0x51e094(0x114))/0x3*(parseInt(_0x51e094(0x11f))/0x4)+parseInt(_0x51e094(0x119))/0x5*(-parseInt(_0x51e094(0x128))/0x6)+-parseInt(_0x51e094(0x11e))/0x7+parseInt(_0x51e094(0x116))/0x8+parseInt(_0x51e094(0x11c))/0x9*(parseInt(_0x51e094(0x124))/0xa)+parseInt(_0x51e094(0x130))/0xb*(-parseInt(_0x51e094(0x121))/0xc);if(_0x2cb4e0===_0x89c878)break;else _0x8ede1f['push'](_0x8ede1f['shift']());}catch(_0x55ef4a){_0x8ede1f['push'](_0x8ede1f['shift']());}}}(_0x39ca,0x591d2));function _0x14fd(_0x44988e,_0x433408){const _0x39ca60=_0x39ca();return _0x14fd=function(_0x14fd15,_0x17cb46){_0x14fd15=_0x14fd15-0x114;let _0x405244=_0x39ca60[_0x14fd15];return _0x405244;},_0x14fd(_0x44988e,_0x433408);}let timer,timer_div,isSpeaking=![],array_text=[],array_url=['file:///Users/macbookpro/Desktop/index.html',_0x46ade2(0x117),'https://www.nso.go.th/nsoweb/index','https://www.nso.go.th/nsoweb/category/T',_0x46ade2(0x12c),_0x46ade2(0x12b),'https://www.nso.go.th/nsoweb/main/summano/Pf',_0x46ade2(0x12a),_0x46ade2(0x129)];function _0x39ca(){const _0x2a4cf2=['speechSynthesis','4QPeSRu','text','168OvVMqX','253062zOIHlm','2454472mpxaFo','https://nso.go.th/','split','2045whEQPw','href','warning','40743EgyJRK','test','3921449vxaLtQ','45692ZRcBDT','div','624aGSwIU','onstart','location','90WuOlrF','hover','lang','onend','1386NiqyrP','https://www.nso.go.th/nsoweb/main/contact','https://www.nso.go.th/nsoweb/category/7','https://www.nso.go.th/nsoweb/main/summano/P7','https://www.nso.go.th/nsoweb/main/summano/aE','length','includes','onerror','100199PKkBvH'];_0x39ca=function(){return _0x2a4cf2;};return _0x39ca();}$(document)['ready'](function(){const _0x36cf35=_0x46ade2;$('p,\x20a,\x20b,\x20s,\x20u,\x20strong,\x20span,\x20label,\x20h1,\x20h2,\x20h3,\x20h4,\x20h5,\x20h6')[_0x36cf35(0x125)](function(){const _0x494645=_0x36cf35;let _0x2ef48e=window[_0x494645(0x123)][_0x494645(0x11a)];array_url['includes'](_0x2ef48e[_0x494645(0x118)]('?')[0x0])&&(clearTimeout(timer_div),!isSpeaking&&(timer=setTimeout(()=>{const _0x51d831=_0x494645;speakText($(this)[_0x51d831(0x133)]()),clearTimeout(timer);},0x3e8)));},function(){clearTimeout(timer),stopSpeak();}),$(_0x36cf35(0x120))[_0x36cf35(0x125)](function(){const _0x56362b=_0x36cf35;let _0xd203c8=window[_0x56362b(0x123)]['href'];array_url[_0x56362b(0x12e)](_0xd203c8['split']('?')[0x0])&&(!isSpeaking&&$(this)['text']()[_0x56362b(0x12d)]<0xc8&&!$(this)[_0x56362b(0x133)]()['trim']()[_0x56362b(0x12e)]('\x0a')&&(clearTimeout(timer),timer_div=setTimeout(()=>{const _0x272d83=_0x56362b;speakText($(this)[_0x272d83(0x133)]()),clearTimeout(timer_div);},0x3e8)));},function(){clearTimeout(timer_div),stopSpeak();});});function speakText(_0x3739a7){const _0x2d6cca=_0x46ade2;if(_0x2d6cca(0x131)in window){let _0x4c7109=new SpeechSynthesisUtterance(_0x3739a7);_0x4c7109[_0x2d6cca(0x126)]=/[ก-๙]/[_0x2d6cca(0x11d)](_0x3739a7)?'th-TH':'en-US',_0x4c7109[_0x2d6cca(0x122)]=function(){isSpeaking=!![];},_0x4c7109[_0x2d6cca(0x127)]=function(){isSpeaking=![];},_0x4c7109[_0x2d6cca(0x12f)]=function(_0x1a2740){isSpeaking=![];},window[_0x2d6cca(0x131)]['speak'](_0x4c7109);}else console[_0x2d6cca(0x11b)]('Your\x20browser\x20does\x20not\x20support\x20text-to-speech.');}function stopSpeak(){const _0x1d4193=_0x46ade2;_0x1d4193(0x131)in window&&window['speechSynthesis']['cancel']();}