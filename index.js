function receivesAFunction(callback) {
    return callback()
}
function returnsANamedFunction() {
    return function myFunction() {

    }
}
function returnsAnAnonymousFunction() {
    return function() {
        
    }
}