!function(n){function t(o){if(e[o])return e[o].exports;var a=e[o]={i:o,l:!1,exports:{}};return n[o].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var e={};t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:o})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=0)}([function(n,t,e){"use strict";function o(){b={noImplicitAny:!1,strictNullChecks:!1,noImplicitReturns:!1,noImplicitThis:!1,removeComments:!1,experimentalDecorators:!1,emitDecoratorMetadata:!1,allowNonTsExtensions:!0,target:monaco.languages.typescript.ScriptTarget.ES5}}function a(){o(),r(),d(),x=monaco.editor.create(S,{value:['let foo: string = "Hello World!";',""].join("\n"),language:"typescript",automaticLayout:!0,minimap:{enabled:!1},selectionClipboard:!1}),E=monaco.editor.create(C,{value:["",""].join("\n"),language:"javascript",readOnly:!0,automaticLayout:!0,minimap:{enabled:!1},contextmenu:!1,quickSuggestions:!1,parameterHints:!1,autoClosingBrackets:!1,suggestOnTriggerCharacters:!1,snippetSuggestions:"none",wordBasedSuggestions:!1,selectionClipboard:!1,find:{seedSearchStringFromSelection:!1,autoFindInSelection:!1}}),i()}function i(){x.onDidChangeModelContent(T(c,100)),N.onclick=y,j.onclick=p,s(),c(),w(M)}function r(){window.tsp.compilerOptions=b,window.tsp.compile=c,window.tsp.run=p,window.tsp.sync=function(){s(),d()}}function s(){for(var n=document.getElementById("options").getElementsByClassName("compilerOption"),t=0;t<n.length;t++)window.tsp.compilerOptions.hasOwnProperty(n[t].name)&&(n[t]instanceof HTMLInputElement?"checkbox"===n[t].type?n[t].checked=!!b[n[t].name]:"text"===n[t].type&&(n[t].value=""+b[n[t].name]):n[t]instanceof HTMLSelectElement&&(n[t].value=""+b[n[t].name])),n[t].onchange=l}function l(n){var t=window.tsp.compilerOptions[this.name];this instanceof HTMLInputElement?"checkbox"===this.type?t=!!this.checked:"text"===this.type&&(t=this.value):t=(HTMLSelectElement,this.value),window.tsp.compilerOptions[this.name]=t,d(),c()}function c(n){v(),m().then(function(n){return n.getEmitOutput(x.getModel().uri.toString())}).then(function(n){return!n.emitSkipped&&(!(!n.outputFiles||!n.outputFiles[0])&&n.outputFiles[0].text)}).then(function(n){return"string"==typeof n&&u(n),!!n}).then(function(n){h()})}function p(){var n;!O||O.closed?(n=window.open("","","width=800,height=600"),O=n):n=O,n.document.open(),n.document.write(g()),n.document.close()}function u(n){E.getModel().setValue(n)}function d(){var n=f();n.allowNonTsExtensions=!0,monaco.languages.typescript.typescriptDefaults.setCompilerOptions(n)}function g(){return I.replace(/__CODE__/,E.getValue())}function f(){return JSON.parse(JSON.stringify(window.tsp.compilerOptions))}function m(){return monaco.languages.typescript.getTypeScriptWorker().then(function(n){return n(x.getModel().uri)})}function y(n){this.classList.toggle("active"),k.classList.toggle("visible")}function v(){P.style.display="inline-block"}function h(){P.style.display="none"}function w(n,t,e){void 0===t&&(t=5),void 0===e&&(e=.01),n.style.opacity="1";var o=setInterval(function(){parseFloat(n.style.opacity)<.05?(clearInterval(o),n.style.opacity="0",n.style.display="none"):n.style.opacity=""+(parseFloat(n.style.opacity)-e)},t)}Object.defineProperty(t,"__esModule",{value:!0});var x,E,O,b,T=e(1),_=e(3),I=_.replace(new RegExp(/__BASE__/),window.location.href.replace(/\/?$/,"/")).replace(new RegExp(/__VERSION__/g),"1.3.8"),C=document.getElementById("editor-js"),S=document.getElementById("editor-ts"),j=document.getElementById("run-code"),M=document.getElementById("loading"),P=document.getElementById("processing"),N=document.getElementById("options-toggle"),k=document.getElementById("options");window.tsp={},function(){var n=window;n.require.config({paths:{vs:"https://unpkg.com/monaco-editor@^0.10.0/min/vs"}}),window.MonacoEnvironment={getWorkerUrl:function(n,t){return"proxy.js"}},n.require(["vs/editor/editor.main"],a)}()},function(n,t,e){(function(t){function e(n,t,e){function a(t){var e=m,o=y;return m=y=void 0,T=t,h=n.apply(o,e)}function i(n){return T=n,w=setTimeout(p,t),_?a(n):h}function l(n){var e=n-b,o=n-T,a=t-e;return I?E(a,v-o):a}function c(n){var e=n-b,o=n-T;return void 0===b||e>=t||e<0||I&&o>=v}function p(){var n=O();if(c(n))return u(n);w=setTimeout(p,l(n))}function u(n){return w=void 0,C&&m?a(n):(m=y=void 0,h)}function d(){void 0!==w&&clearTimeout(w),T=0,m=b=y=w=void 0}function g(){return void 0===w?h:u(O())}function f(){var n=O(),e=c(n);if(m=arguments,y=this,b=n,e){if(void 0===w)return i(b);if(I)return w=setTimeout(p,t),a(b)}return void 0===w&&(w=setTimeout(p,t)),h}var m,y,v,h,w,b,T=0,_=!1,I=!1,C=!0;if("function"!=typeof n)throw new TypeError(s);return t=r(t)||0,o(e)&&(_=!!e.leading,I="maxWait"in e,v=I?x(r(e.maxWait)||0,t):v,C="trailing"in e?!!e.trailing:C),f.cancel=d,f.flush=g,f}function o(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function a(n){return!!n&&"object"==typeof n}function i(n){return"symbol"==typeof n||a(n)&&w.call(n)==c}function r(n){if("number"==typeof n)return n;if(i(n))return l;if(o(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=o(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(p,"");var e=d.test(n);return e||g.test(n)?f(n.slice(2),e?2:8):u.test(n)?l:+n}var s="Expected a function",l=NaN,c="[object Symbol]",p=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,g=/^0o[0-7]+$/i,f=parseInt,m="object"==typeof t&&t&&t.Object===Object&&t,y="object"==typeof self&&self&&self.Object===Object&&self,v=m||y||Function("return this")(),h=Object.prototype,w=h.toString,x=Math.max,E=Math.min,O=function(){return v.Date.now()};n.exports=e}).call(t,e(2))},function(n,t){var e;e=function(){return this}();try{e=e||Function("return this")()||(0,eval)("this")}catch(n){"object"==typeof window&&(e=window)}n.exports=e},function(n,t){n.exports="<!doctype html>\n<html lang=\"en\">\n\n<head>\n  <base id=\"base\" href=\"__BASE__\">\n  <meta charset=\"utf8\">\n  <title>TypeScript Playground (run code)</title>\n  <link rel=\"icon\" href=\"assets/favicon.ico\">\n  <link rel=\"stylesheet\" href=\"style.css?__VERSION__\">\n  <script>\n    window.tsp = window.tsp || {}\n  <\/script>\n</head>\n\n<body id=\"run-window\">\n  <div id=\"console\" class=\"grid grid-pad\">\n    <div class=\"col-1-1\">\n      <div id=\"console-heading\">\n        Console Output:\n      </div>\n    </div>\n    <div class=\"col-1-1\">\n      <div class=\"console\" id=\"console-content\"></div>\n    </div>\n  </div>\n  <div id=\"loading-window\">\n    <div class=\"spinner\">\n      <div class=\"double-bounce1\"></div>\n      <div class=\"double-bounce2\"></div>\n    </div>\n  </div>\n\n  <script>\n    tsp.spread = tsp.spread || function spread(arg, start) {\n      var args = arg || [];\n      var spread = [];\n\n      for (var i = start || 0; i < args.length; i++) {\n        spread.push(args[i]);\n      }\n\n      return spread;\n    }\n\n    tsp.getElement = tsp.getElement ||   function getElement() {\n      return document.getElementById('console-content');\n    }\n\n    tsp.clearConsole = tsp.clearConsole ||   function clearConsole() {\n      tsp.getElement().innerHTML = '';\n    }\n\n    tsp.wrapConsoleText = tsp.wrapConsoleText ||   function wrapConsoleText(type, text) {\n      return '<span class=\"log-' + type + '\"><span class=\"icon-' + type + '\"></span>' + text + '</span>';\n    }\n\n    tsp.updateConsole = tsp.updateConsole ||   function updateConsole(type, message) {\n      var optionalParams = tsp.spread(arguments, 2);\n\n      var text = tsp.logToText(message);\n\n      for (var param of optionalParams) {\n        text += '\\n   ' + tsp.logToText(param);\n      }\n\n      text = tsp.wrapConsoleText(type, text);\n\n      tsp.getElement().innerHTML += text + '\\n';\n    }\n\n    tsp.logToText = tsp.logToText ||   function logToText(message) {\n      if (typeof message === 'object' && message !== null) {\n        return JSON.stringify(message);\n      }\n\n      return tsp.escape(message);\n    }\n\n    tsp.escape = tsp.escape ||   function escape(text) {\n      var div = document.createElement('div');\n      div.innerText = text;\n      return div.innerHTML;\n    }\n\n    tsp.log = tsp.log ||   function log(data) {\n      var message = data.data.message;\n      var type = data.type;\n      var optionalParams = data.data.optionalParams;\n      var params = optionalParams;\n      params.unshift(message);\n      if (data.log) data.log.apply(this, params);\n      params.unshift(type);\n      tsp.updateConsole.apply(this, params);\n    }\n\n    tsp.fadeOut = tsp.fadeOut ||   function fadeOut(target) {\n      target.style.opacity = '1';\n\n      var fadeEffect = setInterval(() => {\n        if (parseFloat(target.style.opacity) < 0.05) {\n          clearInterval(fadeEffect);\n          target.style.opacity = '0';\n          target.style.display = 'none';\n        } else {\n          target.style.opacity = (parseFloat(target.style.opacity) - 0.02) + '';\n        }\n      }, 5);\n    }\n\n    tsp.originalLog = tsp.originalLog || console.log;\n    console.log = function log(message) {\n      var optionalParams = tsp.spread(arguments, 1);\n\n      tsp.log({\n        name: 'log',\n        type: 'log',\n        log: tsp.originalLog,\n        data: {\n          message,\n          optionalParams\n        }\n      });\n    }\n\n    tsp.originalInfo = tsp.originalInfo || console.info;\n    console.info = function info(message) {\n      var optionalParams = tsp.spread(arguments, 1);\n\n      tsp.log({\n        name: 'log',\n        type: 'info',\n        log: tsp.originalInfo,\n        data: {\n          message,\n          optionalParams\n        }\n      });\n    }\n\n    tsp.originalWarn = tsp.originalWarn || console.warn;\n    console.warn = function warn(message) {\n      var optionalParams = tsp.spread(arguments, 1);\n\n      tsp.log({\n        name: 'log',\n        type: 'warn',\n        log: tsp.originalWarn,\n        data: {\n          message,\n          optionalParams\n        }\n      });\n    }\n\n    tsp.originalError = tsp.originalError || console.error;\n    console.error = function error(message) {\n      var optionalParams = tsp.spread(arguments, 1);\n\n      tsp.log({\n        name: 'log',\n        type: 'error',\n        log: tsp.originalError,\n        data: {\n          message,\n          optionalParams\n        }\n      });\n    }\n\n    window.onerror = function(message, url, lineNumber) {\n      tsp.log({\n        name: 'error',\n        type: 'error',\n        // log: __originalError,\n        data: {\n          message,\n          optionalParams: []\n        }\n      });\n    }\n  <\/script>\n\n  <script id=\"code\">\n    (function() {\n      __CODE__\n    })();\n  <\/script>\n  <script>\n    tsp.fadeOut(document.getElementById('loading-window'));\n  <\/script>\n</body>\n\n</html>\n"}]);
//# sourceMappingURL=app.js.map