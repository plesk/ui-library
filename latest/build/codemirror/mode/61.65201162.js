webpackJsonp([75],{1012:function(t,n,e){!function(t){t(e(882))}(function(t){"use strict";t.defineMode("ntriples",function(){function transitState(n,e){var _,I=n.location;_=I==t.PRE_SUBJECT&&"<"==e?t.WRITING_SUB_URI:I==t.PRE_SUBJECT&&"_"==e?t.WRITING_BNODE_URI:I==t.PRE_PRED&&"<"==e?t.WRITING_PRED_URI:I==t.PRE_OBJ&&"<"==e?t.WRITING_OBJ_URI:I==t.PRE_OBJ&&"_"==e?t.WRITING_OBJ_BNODE:I==t.PRE_OBJ&&'"'==e?t.WRITING_OBJ_LITERAL:I==t.WRITING_SUB_URI&&">"==e?t.PRE_PRED:I==t.WRITING_BNODE_URI&&" "==e?t.PRE_PRED:I==t.WRITING_PRED_URI&&">"==e?t.PRE_OBJ:I==t.WRITING_OBJ_URI&&">"==e?t.POST_OBJ:I==t.WRITING_OBJ_BNODE&&" "==e?t.POST_OBJ:I==t.WRITING_OBJ_LITERAL&&'"'==e?t.POST_OBJ:I==t.WRITING_LIT_LANG&&" "==e?t.POST_OBJ:I==t.WRITING_LIT_TYPE&&">"==e?t.POST_OBJ:I==t.WRITING_OBJ_LITERAL&&"@"==e?t.WRITING_LIT_LANG:I==t.WRITING_OBJ_LITERAL&&"^"==e?t.WRITING_LIT_TYPE:" "!=e||I!=t.PRE_SUBJECT&&I!=t.PRE_PRED&&I!=t.PRE_OBJ&&I!=t.POST_OBJ?I==t.POST_OBJ&&"."==e?t.PRE_SUBJECT:t.ERROR:I,n.location=_}var t={PRE_SUBJECT:0,WRITING_SUB_URI:1,WRITING_BNODE_URI:2,PRE_PRED:3,WRITING_PRED_URI:4,PRE_OBJ:5,WRITING_OBJ_URI:6,WRITING_OBJ_BNODE:7,WRITING_OBJ_LITERAL:8,WRITING_LIT_LANG:9,WRITING_LIT_TYPE:10,POST_OBJ:11,ERROR:12};return{startState:function(){return{location:t.PRE_SUBJECT,uris:[],anchors:[],bnodes:[],langs:[],types:[]}},token:function(t,n){var e=t.next();if("<"==e){transitState(n,e);var _="";return t.eatWhile(function(t){return"#"!=t&&">"!=t&&(_+=t,!0)}),n.uris.push(_),t.match("#",!1)?"variable":(t.next(),transitState(n,">"),"variable")}if("#"==e){var I="";return t.eatWhile(function(t){return">"!=t&&" "!=t&&(I+=t,!0)}),n.anchors.push(I),"variable-2"}if(">"==e)return transitState(n,">"),"variable";if("_"==e){transitState(n,e);var R="";return t.eatWhile(function(t){return" "!=t&&(R+=t,!0)}),n.bnodes.push(R),t.next(),transitState(n," "),"builtin"}if('"'==e)return transitState(n,e),t.eatWhile(function(t){return'"'!=t}),t.next(),"@"!=t.peek()&&"^"!=t.peek()&&transitState(n,'"'),"string";if("@"==e){transitState(n,"@");var r="";return t.eatWhile(function(t){return" "!=t&&(r+=t,!0)}),n.langs.push(r),t.next(),transitState(n," "),"string-2"}if("^"==e){t.next(),transitState(n,"^");var i="";return t.eatWhile(function(t){return">"!=t&&(i+=t,!0)}),n.types.push(i),t.next(),transitState(n,">"),"variable"}" "==e&&transitState(n,e),"."==e&&transitState(n,e)}}}),t.defineMIME("application/n-triples","ntriples"),t.defineMIME("application/n-quads","ntriples"),t.defineMIME("text/n-triples","ntriples")})}});