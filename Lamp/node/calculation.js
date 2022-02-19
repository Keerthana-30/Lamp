function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}
exports.add = add;// if the function from the modues is to used outside then when have to use exports.
exports.sub = sub;

/*  (or)

exports.add = function(a,b){
    return a+b;
}
*/