webpackJsonp([56],{1034:function(t,e,n){!function(t){t(n(882))}(function(t){"use strict";t.defineMode("smalltalk",function(t){var e=/[+\-\/\\*~<>=@%|&?!.,:;^]/,n=/true|false|nil|self|super|thisContext/,a=function(t,e){this.next=t,this.parent=e},i=function(t,e,n){this.name=t,this.context=e,this.eos=n},r=function(){this.context=new a(o,null),this.expectVariable=!0,this.indentation=0,this.userIndentationDelta=0};r.prototype.userIndent=function(e){this.userIndentationDelta=e>0?e/t.indentUnit-this.indentation:0};var o=function(t,r,o){var x=new i(null,r,!1),h=t.next();return'"'===h?x=s(t,new a(s,r)):"'"===h?x=u(t,new a(u,r)):"#"===h?"'"===t.peek()?(t.next(),x=c(t,new a(c,r))):t.eatWhile(/[^\s.{}\[\]()]/)?x.name="string-2":x.name="meta":"$"===h?("<"===t.next()&&(t.eatWhile(/[^\s>]/),t.next()),x.name="string-2"):"|"===h&&o.expectVariable?x.context=new a(l,r):/[\[\]{}()]/.test(h)?(x.name="bracket",x.eos=/[\[{(]/.test(h),"["===h?o.indentation++:"]"===h&&(o.indentation=Math.max(0,o.indentation-1))):e.test(h)?(t.eatWhile(e),x.name="operator",x.eos=";"!==h):/\d/.test(h)?(t.eatWhile(/[\w\d]/),x.name="number"):/[\w_]/.test(h)?(t.eatWhile(/[\w\d_]/),x.name=o.expectVariable?n.test(t.current())?"keyword":"variable":null):x.eos=o.expectVariable,x},s=function(t,e){return t.eatWhile(/[^"]/),new i("comment",t.eat('"')?e.parent:e,!0)},u=function(t,e){return t.eatWhile(/[^']/),new i("string",t.eat("'")?e.parent:e,!1)},c=function(t,e){return t.eatWhile(/[^']/),new i("string-2",t.eat("'")?e.parent:e,!1)},l=function(t,e){var n=new i(null,e,!1);return"|"===t.next()?(n.context=e.parent,n.eos=!0):(t.eatWhile(/[^|]/),n.name="variable"),n};return{startState:function(){return new r},token:function(t,e){if(e.userIndent(t.indentation()),t.eatSpace())return null;var n=e.context.next(t,e.context,e);return e.context=n.context,e.expectVariable=n.eos,n.name},blankLine:function(t){t.userIndent(0)},indent:function(e,n){var a=e.context.next===o&&n&&"]"===n.charAt(0)?-1:e.userIndentationDelta;return(e.indentation+a)*t.indentUnit},electricChars:"]"}}),t.defineMIME("text/x-stsrc",{name:"smalltalk"})})}});