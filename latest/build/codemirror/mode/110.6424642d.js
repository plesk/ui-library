webpackJsonp([36],{1055:function(e,t,n){!function(e){e(n(882))}(function(e){"use strict";e.defineMode("velocity",function(){function parseWords(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0;return t}function chain(e,t,n){return t.tokenize=n,n(e,t)}function tokenBase(a,i){var o=i.beforeParams;i.beforeParams=!1;var s=a.next();if("'"==s&&!i.inString&&i.inParams)return i.lastTokenWasBuiltin=!1,chain(a,i,tokenString(s));if('"'!=s){if(/[\[\]{}\(\),;\.]/.test(s))return"("==s&&o?i.inParams=!0:")"==s&&(i.inParams=!1,i.lastTokenWasBuiltin=!0),null;if(/\d/.test(s))return i.lastTokenWasBuiltin=!1,a.eatWhile(/[\w\.]/),"number";if("#"==s&&a.eat("*"))return i.lastTokenWasBuiltin=!1,chain(a,i,tokenComment);if("#"==s&&a.match(/ *\[ *\[/))return i.lastTokenWasBuiltin=!1,chain(a,i,tokenUnparsed);if("#"==s&&a.eat("#"))return i.lastTokenWasBuiltin=!1,a.skipToEnd(),"comment";if("$"==s)return a.eatWhile(/[\w\d\$_\.{}]/),n&&n.propertyIsEnumerable(a.current())?"keyword":(i.lastTokenWasBuiltin=!0,i.beforeParams=!0,"builtin");if(r.test(s))return i.lastTokenWasBuiltin=!1,a.eatWhile(r),"operator";a.eatWhile(/[\w\$_{}@]/);var l=a.current();return e&&e.propertyIsEnumerable(l)?"keyword":t&&t.propertyIsEnumerable(l)||a.current().match(/^#@?[a-z0-9_]+ *$/i)&&"("==a.peek()&&(!t||!t.propertyIsEnumerable(l.toLowerCase()))?(i.beforeParams=!0,i.lastTokenWasBuiltin=!1,"keyword"):i.inString?(i.lastTokenWasBuiltin=!1,"string"):a.pos>l.length&&"."==a.string.charAt(a.pos-l.length-1)&&i.lastTokenWasBuiltin?"builtin":(i.lastTokenWasBuiltin=!1,null)}return i.lastTokenWasBuiltin=!1,i.inString?(i.inString=!1,"string"):i.inParams?chain(a,i,tokenString(s)):void 0}function tokenString(e){return function(t,n){for(var r,a=!1,i=!1;null!=(r=t.next());){if(r==e&&!a){i=!0;break}if('"'==e&&"$"==t.peek()&&!a){n.inString=!0,i=!0;break}a=!a&&"\\"==r}return i&&(n.tokenize=tokenBase),"string"}}function tokenComment(e,t){for(var n,r=!1;n=e.next();){if("#"==n&&r){t.tokenize=tokenBase;break}r="*"==n}return"comment"}function tokenUnparsed(e,t){for(var n,r=0;n=e.next();){if("#"==n&&2==r){t.tokenize=tokenBase;break}"]"==n?r++:" "!=n&&(r=0)}return"meta"}var e=parseWords("#end #else #break #stop #[[ #]] #{end} #{else} #{break} #{stop}"),t=parseWords("#if #elseif #foreach #set #include #parse #macro #define #evaluate #{if} #{elseif} #{foreach} #{set} #{include} #{parse} #{macro} #{define} #{evaluate}"),n=parseWords("$foreach.count $foreach.hasNext $foreach.first $foreach.last $foreach.topmost $foreach.parent.count $foreach.parent.hasNext $foreach.parent.first $foreach.parent.last $foreach.parent $velocityCount $!bodyContent $bodyContent"),r=/[+\-*&%=<>!?:\/|]/;return{startState:function(){return{tokenize:tokenBase,beforeParams:!1,inParams:!1,inString:!1,lastTokenWasBuiltin:!1}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)},blockCommentStart:"#*",blockCommentEnd:"*#",lineComment:"##",fold:"velocity"}}),e.defineMIME("text/velocity","velocity")})}});