"use strict";

var lex = require("./lex.js");
exports.shouldParseNum = function(test){
    test.deepEqual( lex.parseNum("12"), {"type":"Num", "value":"12"}, "parseNum 12" );
    test.deepEqual( lex.parseNum("12.23"), {"type":"Num", "value":"12.23"}, "parseNum 12.13" );
    test.deepEqual( lex.parseNum("012.23"), {"type":"Num", "value":"012.23"}, "parseNum 12.13" );
    test.deepEqual( lex.parseNum(".213"), null, "parseNum null" );
    test.deepEqual( lex.parseNum("x12"), null, "parseNum null" );
    test.done();
}

exports.shouldParseIdentify = function(test){
  test.deepEqual( lex.parseId("keyword"), {"type":"Id", "value":"keyword"}, "parse keyword");
  test.deepEqual( lex.parseId("define"), {"type":"Id", "value":"define"}, "parse define");
  test.deepEqual( lex.parseId("null?"), {"type":"Id", "value":"null?"}, "parse null?");
  test.deepEqual( lex.parseId("->"), {"type":"Id", "value":"->"}, "parse ->");
  test.deepEqual( lex.parseId("*"), {"type":"Id", "value":"*"}, "parse *");
  test.deepEqual( lex.parseId(" keyword"), null, "parse with prefix space");
  test.deepEqual( lex.parseId("(cons)"), null, "no bracket");
  test.deepEqual( lex.parseId("\tkeyword"), null, "no tabular");
  test.done();
}

exports.shouldParseBrackets = function(test){
  test.deepEqual( lex.parseBrackets("( 21)"), {"type":"Bracket", "value":"("}, "parse Left Bracket" );
  test.deepEqual( lex.parseBrackets(") fe"), {"type":"Bracket", "value":")"}, "parse Left Bracket" );
  test.deepEqual( lex.parseBrackets("(cons)"), {"type":"Bracket", "value":"("}, "parse Left Bracket" );
  test.done();
}
