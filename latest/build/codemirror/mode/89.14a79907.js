webpackJsonp([54],{1036:function(e,t,n){!function(e){e(n(882))}(function(e){"use strict";e.defineMode("solr",function(){function tokenWord(t){return function(o,r){for(var i=t;(t=o.peek())&&null!=t.match(e);)i+=o.next();return r.tokenize=tokenBase,n.test(i)?"operator":function isNumber(e){return parseFloat(e).toString()===e}(i)?"number":":"==o.peek()?"field":"string"}}function tokenBase(n,o){var r=n.next();return'"'==r?o.tokenize=function tokenString(e){return function(t,n){for(var o,r=!1;null!=(o=t.next())&&(o!=e||r);)r=!r&&"\\"==o;return r||(n.tokenize=tokenBase),"string"}}(r):t.test(r)?o.tokenize=function tokenOperator(e){return function(t,n){var o="operator";return"+"==e?o+=" positive":"-"==e?o+=" negative":"|"==e?t.eat(/\|/):"&"==e?t.eat(/\&/):"^"==e&&(o+=" boost"),n.tokenize=tokenBase,o}}(r):e.test(r)&&(o.tokenize=tokenWord(r)),o.tokenize!=tokenBase?o.tokenize(n,o):null}var e=/[^\s\|\!\+\-\*\?\~\^\&\:\(\)\[\]\{\}\"\\]/,t=/[\|\!\+\-\*\?\~\^\&]/,n=/^(OR|AND|NOT|TO)$/i;return{startState:function(){return{tokenize:tokenBase}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)}}}),e.defineMIME("text/x-solr","solr")})}});