webpackJsonp([41],{1050:function(t,e,n){!function(t){t(n(882))}(function(t){"use strict";function words(t){for(var e={},n=t.split(" "),T=0;T<n.length;++T)e[n[T]]=!0;return e}t.defineMode("ttcn-cfg",function(t,e){function tokenBase(t,e){var T=t.next();if('"'==T||"'"==T)return e.tokenize=function tokenString(t){return function(e,n){for(var T,E=!1,C=!1;null!=(T=e.next());){if(T==t&&!E){var o=e.peek();o&&("b"!=(o=o.toLowerCase())&&"h"!=o&&"o"!=o||e.next()),C=!0;break}E=!E&&"\\"==T}return(C||!E&&!i)&&(n.tokenize=null),"string"}}(T),e.tokenize(t,e);if(/[:=]/.test(T))return n=T,"punctuation";if("#"==T)return t.skipToEnd(),"comment";if(/\d/.test(T))return t.eatWhile(/[\w\.]/),"number";if(N.test(T))return t.eatWhile(N),"operator";if("["==T)return t.eatWhile(/[\w_\]]/),"number sectionTitle";t.eatWhile(/[\w\$_]/);var r=t.current();return E.propertyIsEnumerable(r)?"keyword":C.propertyIsEnumerable(r)?"negative fileNCtrlMaskOptions":o.propertyIsEnumerable(r)?"negative externalCommands":"variable"}function Context(t,e,n,T,E){this.indented=t,this.column=e,this.type=n,this.align=T,this.prev=E}function pushContext(t,e,n){var T=t.indented;return t.context&&"statement"==t.context.type&&(T=t.context.indented),t.context=new Context(T,e,n,null,t.context)}function popContext(t){var e=t.context.type;return")"!=e&&"]"!=e&&"}"!=e||(t.indented=t.context.indented),t.context=t.context.prev}var n,T=t.indentUnit,E=e.keywords||{},C=e.fileNCtrlMaskOptions||{},o=e.externalCommands||{},i=e.multiLineStrings,r=!1!==e.indentStatements,N=/[\|]/;return{startState:function(t){return{tokenize:null,context:new Context((t||0)-T,0,"top",!1),indented:0,startOfLine:!0}},token:function(t,e){var T=e.context;if(t.sol()&&(null==T.align&&(T.align=!1),e.indented=t.indentation(),e.startOfLine=!0),t.eatSpace())return null;n=null;var E=(e.tokenize||tokenBase)(t,e);if("comment"==E)return E;if(null==T.align&&(T.align=!0),";"!=n&&":"!=n&&","!=n||"statement"!=T.type)if("{"==n)pushContext(e,t.column(),"}");else if("["==n)pushContext(e,t.column(),"]");else if("("==n)pushContext(e,t.column(),")");else if("}"==n){for(;"statement"==T.type;)T=popContext(e);for("}"==T.type&&(T=popContext(e));"statement"==T.type;)T=popContext(e)}else n==T.type?popContext(e):r&&(("}"==T.type||"top"==T.type)&&";"!=n||"statement"==T.type&&"newstatement"==n)&&pushContext(e,t.column(),"statement");else popContext(e);return e.startOfLine=!1,E},electricChars:"{}",lineComment:"#",fold:"brace"}}),t.defineMIME("text/x-ttcn-cfg",{name:"ttcn-cfg",keywords:words("Yes No LogFile FileMask ConsoleMask AppendFile TimeStampFormat LogEventTypes SourceInfoFormat LogEntityName LogSourceInfo DiskFullAction LogFileNumber LogFileSize MatchingHints Detailed Compact SubCategories Stack Single None Seconds DateTime Time Stop Error Retry Delete TCPPort KillTimer NumHCs UnixSocketsEnabled LocalAddress"),fileNCtrlMaskOptions:words("TTCN_EXECUTOR TTCN_ERROR TTCN_WARNING TTCN_PORTEVENT TTCN_TIMEROP TTCN_VERDICTOP TTCN_DEFAULTOP TTCN_TESTCASE TTCN_ACTION TTCN_USER TTCN_FUNCTION TTCN_STATISTICS TTCN_PARALLEL TTCN_MATCHING TTCN_DEBUG EXECUTOR ERROR WARNING PORTEVENT TIMEROP VERDICTOP DEFAULTOP TESTCASE ACTION USER FUNCTION STATISTICS PARALLEL MATCHING DEBUG LOG_ALL LOG_NOTHING ACTION_UNQUALIFIED DEBUG_ENCDEC DEBUG_TESTPORT DEBUG_UNQUALIFIED DEFAULTOP_ACTIVATE DEFAULTOP_DEACTIVATE DEFAULTOP_EXIT DEFAULTOP_UNQUALIFIED ERROR_UNQUALIFIED EXECUTOR_COMPONENT EXECUTOR_CONFIGDATA EXECUTOR_EXTCOMMAND EXECUTOR_LOGOPTIONS EXECUTOR_RUNTIME EXECUTOR_UNQUALIFIED FUNCTION_RND FUNCTION_UNQUALIFIED MATCHING_DONE MATCHING_MCSUCCESS MATCHING_MCUNSUCC MATCHING_MMSUCCESS MATCHING_MMUNSUCC MATCHING_PCSUCCESS MATCHING_PCUNSUCC MATCHING_PMSUCCESS MATCHING_PMUNSUCC MATCHING_PROBLEM MATCHING_TIMEOUT MATCHING_UNQUALIFIED PARALLEL_PORTCONN PARALLEL_PORTMAP PARALLEL_PTC PARALLEL_UNQUALIFIED PORTEVENT_DUALRECV PORTEVENT_DUALSEND PORTEVENT_MCRECV PORTEVENT_MCSEND PORTEVENT_MMRECV PORTEVENT_MMSEND PORTEVENT_MQUEUE PORTEVENT_PCIN PORTEVENT_PCOUT PORTEVENT_PMIN PORTEVENT_PMOUT PORTEVENT_PQUEUE PORTEVENT_STATE PORTEVENT_UNQUALIFIED STATISTICS_UNQUALIFIED STATISTICS_VERDICT TESTCASE_FINISH TESTCASE_START TESTCASE_UNQUALIFIED TIMEROP_GUARD TIMEROP_READ TIMEROP_START TIMEROP_STOP TIMEROP_TIMEOUT TIMEROP_UNQUALIFIED USER_UNQUALIFIED VERDICTOP_FINAL VERDICTOP_GETVERDICT VERDICTOP_SETVERDICT VERDICTOP_UNQUALIFIED WARNING_UNQUALIFIED"),externalCommands:words("BeginControlPart EndControlPart BeginTestCase EndTestCase"),multiLineStrings:!0})})}});