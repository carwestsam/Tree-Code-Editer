var Tokens = {
    "Num": {
        "pattern": "\\d+([.]\\d+)?"
    },
    "Id": {
      "pattern": "[^ ()\\t\\f\\n\\r\\v]+"
    }
}

var parseNum = function(str){
  var reg = new RegExp("^" + Tokens["Num"].pattern);
  var ans = str.match(reg)
  if ( ans == null){
    return null;
  }else {
    return {"type": "Num" , "value" : ans[0]};
  }
}

var parseId = function(str){
  var reg = new RegExp("^" + Tokens["Id"].pattern);
  var ans = str.match(reg);
  if ( ans == null){
    return null;
  }else {
    return {"type":"Id", "value" : ans[0]};
  }
}

exports.parseNum = parseNum;
exports.parseId = parseId;
