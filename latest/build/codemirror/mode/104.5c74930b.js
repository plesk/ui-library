webpackJsonp([40],{1049:function(t,e,n){!function(t){t(n(882))}(function(t){"use strict";function words(t){for(var e={},n=t.split(" "),r=0;r<n.length;++r)e[n[r]]=!0;return e}t.defineMode("ttcn",function(t,e){function tokenBase(t,e){var r=t.next();if('"'==r||"'"==r)return e.tokenize=function tokenString(t){return function(e,n){for(var r,o=!1,i=!1;null!=(r=e.next());){if(r==t&&!o){var s=e.peek();s&&("b"!=(s=s.toLowerCase())&&"h"!=s&&"o"!=s||e.next()),i=!0;break}o=!o&&"\\"==r}return(i||!o&&!y)&&(n.tokenize=null),"string"}}(r),e.tokenize(t,e);if(/[\[\]{}\(\),;\\:\?\.]/.test(r))return n=r,"punctuation";if("#"==r)return t.skipToEnd(),"atom preprocessor";if("%"==r)return t.eatWhile(/\b/),"atom ttcn3Macros";if(/\d/.test(r))return t.eatWhile(/[\w\.]/),"number";if("/"==r){if(t.eat("*"))return e.tokenize=tokenComment,tokenComment(t,e);if(t.eat("/"))return t.skipToEnd(),"comment"}if(g.test(r))return"@"==r&&(t.match("try")||t.match("catch")||t.match("lazy"))?"keyword":(t.eatWhile(g),"operator");t.eatWhile(/[\w\$_\xa1-\uffff]/);var v=t.current();return o.propertyIsEnumerable(v)?"keyword":i.propertyIsEnumerable(v)?"builtin":s.propertyIsEnumerable(v)?"def timerOps":p.propertyIsEnumerable(v)?"def configOps":c.propertyIsEnumerable(v)?"def verdictOps":a.propertyIsEnumerable(v)?"def portOps":l.propertyIsEnumerable(v)?"def sutOps":u.propertyIsEnumerable(v)?"def functionOps":d.propertyIsEnumerable(v)?"string verdictConsts":f.propertyIsEnumerable(v)?"string booleanConsts":m.propertyIsEnumerable(v)?"string otherConsts":h.propertyIsEnumerable(v)?"builtin types":b.propertyIsEnumerable(v)?"builtin visibilityModifiers":x.propertyIsEnumerable(v)?"atom templateMatch":"variable"}function tokenComment(t,e){for(var n,r=!1;n=t.next();){if("/"==n&&r){e.tokenize=null;break}r="*"==n}return"comment"}function Context(t,e,n,r,o){this.indented=t,this.column=e,this.type=n,this.align=r,this.prev=o}function pushContext(t,e,n){var r=t.indented;return t.context&&"statement"==t.context.type&&(r=t.context.indented),t.context=new Context(r,e,n,null,t.context)}function popContext(t){var e=t.context.type;return")"!=e&&"]"!=e&&"}"!=e||(t.indented=t.context.indented),t.context=t.context.prev}var n,r=t.indentUnit,o=e.keywords||{},i=e.builtin||{},s=e.timerOps||{},a=e.portOps||{},p=e.configOps||{},c=e.verdictOps||{},l=e.sutOps||{},u=e.functionOps||{},d=e.verdictConsts||{},f=e.booleanConsts||{},m=e.otherConsts||{},h=e.types||{},b=e.visibilityModifiers||{},x=e.templateMatch||{},y=e.multiLineStrings,v=!1!==e.indentStatements,g=/[+\-*&@=<>!\/]/;return{startState:function(t){return{tokenize:null,context:new Context((t||0)-r,0,"top",!1),indented:0,startOfLine:!0}},token:function(t,e){var r=e.context;if(t.sol()&&(null==r.align&&(r.align=!1),e.indented=t.indentation(),e.startOfLine=!0),t.eatSpace())return null;n=null;var o=(e.tokenize||tokenBase)(t,e);if("comment"==o)return o;if(null==r.align&&(r.align=!0),";"!=n&&":"!=n&&","!=n||"statement"!=r.type)if("{"==n)pushContext(e,t.column(),"}");else if("["==n)pushContext(e,t.column(),"]");else if("("==n)pushContext(e,t.column(),")");else if("}"==n){for(;"statement"==r.type;)r=popContext(e);for("}"==r.type&&(r=popContext(e));"statement"==r.type;)r=popContext(e)}else n==r.type?popContext(e):v&&(("}"==r.type||"top"==r.type)&&";"!=n||"statement"==r.type&&"newstatement"==n)&&pushContext(e,t.column(),"statement");else popContext(e);return e.startOfLine=!1,o},electricChars:"{}",blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//",fold:"brace"}}),function def(e,n){function add(t){if(t)for(var e in t)t.hasOwnProperty(e)&&r.push(e)}"string"==typeof e&&(e=[e]);var r=[];add(n.keywords),add(n.builtin),add(n.timerOps),add(n.portOps),r.length&&(n.helperType=e[0],t.registerHelper("hintWords",e[0],r));for(var o=0;o<e.length;++o)t.defineMIME(e[o],n)}(["text/x-ttcn","text/x-ttcn3","text/x-ttcnpp"],{name:"ttcn",keywords:words("activate address alive all alt altstep and and4b any break case component const continue control deactivate display do else encode enumerated except exception execute extends extension external for from function goto group if import in infinity inout interleave label language length log match message mixed mod modifies module modulepar mtc noblock not not4b nowait of on optional or or4b out override param pattern port procedure record recursive rem repeat return runs select self sender set signature system template testcase to type union value valueof var variant while with xor xor4b"),builtin:words("bit2hex bit2int bit2oct bit2str char2int char2oct encvalue decomp decvalue float2int float2str hex2bit hex2int hex2oct hex2str int2bit int2char int2float int2hex int2oct int2str int2unichar isbound ischosen ispresent isvalue lengthof log2str oct2bit oct2char oct2hex oct2int oct2str regexp replace rnd sizeof str2bit str2float str2hex str2int str2oct substr unichar2int unichar2char enum2int"),types:words("anytype bitstring boolean char charstring default float hexstring integer objid octetstring universal verdicttype timer"),timerOps:words("read running start stop timeout"),portOps:words("call catch check clear getcall getreply halt raise receive reply send trigger"),configOps:words("create connect disconnect done kill killed map unmap"),verdictOps:words("getverdict setverdict"),sutOps:words("action"),functionOps:words("apply derefers refers"),verdictConsts:words("error fail inconc none pass"),booleanConsts:words("true false"),otherConsts:words("null NULL omit"),visibilityModifiers:words("private public friend"),templateMatch:words("complement ifpresent subset superset permutation"),multiLineStrings:!0})})}});