var Tokens = {
    "Num": {
        "pattern": "\\d+([.]\\d+)?"
    },
    "Id": {
      "pattern": "[^ ()\\t\\f\\n\\r\\v]+"
    },
    "Bracket":{
      "pattern": "[()]"
    }
}

var parseToken = function(type, str){
  var reg = new RegExp("^" + Tokens[type].pattern);
  var ans = str.match(reg);
  if( ans == null ){
    return null;
  }else {
    return {"type": type, "value": ans[0]};
  }
};

var parseNum = function(str){
  return parseToken("Num", str);
};

var parseId = function(str){
  return parseToken("Id", str);
};

var parseBrackets = function(str){
  return parseToken("Bracket", str);
};

exports.parseNum = parseNum;
exports.parseId = parseId;
exports.parseBrackets = parseBrackets;
