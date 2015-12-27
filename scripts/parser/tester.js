var a = require("./a.js");
exports.testSome = function(test){
    test.expect(1);
    test.ok(a.getTrue(), "not compatible");
    test.done();
};
