webpackJsonp([30],{1061:function(e,t,n){!function(e){e(n(882))}(function(e){"use strict";e.defineMode("yacas",function(t,n){function tokenBase(e,t){var n;if('"'===(n=e.next()))return t.tokenize=tokenString,t.tokenize(e,t);if("/"===n){if(e.eat("*"))return t.tokenize=tokenComment,t.tokenize(e,t);if(e.eat("/"))return e.skipToEnd(),"comment"}e.backUp(1);var r=e.match(/^(\w+)\s*\(/,!1);null!==r&&o.hasOwnProperty(r[1])&&t.scopes.push("bodied");var s=currentScope(t);if("bodied"===s&&"["===n&&t.scopes.pop(),"["!==n&&"{"!==n&&"("!==n||t.scopes.push(n),("["===(s=currentScope(t))&&"]"===n||"{"===s&&"}"===n||"("===s&&")"===n)&&t.scopes.pop(),";"===n)for(;"bodied"===s;)t.scopes.pop(),s=currentScope(t);return e.match(/\d+ *#/,!0,!1)?"qualifier":e.match(a,!0,!1)?"number":e.match(c,!0,!1)?"variable-3":e.match(/(?:\[|\]|{|}|\(|\))/,!0,!1)?"bracket":e.match(u,!0,!1)?(e.backUp(1),"variable"):e.match(i,!0,!1)?"variable-2":e.match(/(?:\\|\+|\-|\*|\/|,|;|\.|:|@|~|=|>|<|&|\||_|`|'|\^|\?|!|%|#)/,!0,!1)?"operator":"error"}function tokenString(e,t){for(var n,o=!1,r=!1;null!=(n=e.next());){if('"'===n&&!r){o=!0;break}r=!r&&"\\"===n}return o&&!r&&(t.tokenize=tokenBase),"string"}function tokenComment(e,t){for(var n,o;null!=(o=e.next());){if("*"===n&&"/"===o){t.tokenize=tokenBase;break}n=o}return"comment"}function currentScope(e){var t=null;return e.scopes.length>0&&(t=e.scopes[e.scopes.length-1]),t}var o=function words(e){for(var t={},n=e.split(" "),o=0;o<n.length;++o)t[n[o]]=!0;return t}("Assert BackQuote D Defun Deriv For ForEach FromFile FromString Function Integrate InverseTaylor Limit LocalSymbols Macro MacroRule MacroRulePattern NIntegrate Rule RulePattern Subst TD TExplicitSum TSum Taylor Taylor1 Taylor2 Taylor3 ToFile ToStdout ToString TraceRule Until While"),r="(?:[a-zA-Z\\$'][a-zA-Z0-9\\$']*)",a=new RegExp("(?:(?:\\.\\d+|\\d+\\.\\d*|\\d+)(?:[eE][+-]?\\d+)?)"),i=new RegExp(r),c=new RegExp(r+"?_"+r),u=new RegExp(r+"\\s*\\(");return{startState:function(){return{tokenize:tokenBase,scopes:[]}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)},indent:function(n,o){if(n.tokenize!==tokenBase&&null!==n.tokenize)return e.Pass;var r=0;return"]"!==o&&"];"!==o&&"}"!==o&&"};"!==o&&");"!==o||(r=-1),(n.scopes.length+r)*t.indentUnit},electricChars:"{}[]();",blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//"}}),e.defineMIME("text/x-yacas",{name:"yacas"})})}});