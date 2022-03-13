function x() {
    console.log("X");
}

function y() {
    console.log("Y");
}

function z() {
    console.log("Z");
}

function receivesAFunction(otherLetter){
    x();
    otherLetter();
}

const newName = x();

function returnsANamedFunction() {
    return function something () {
        console.log("Something");
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log("Something");
    }
}


returnsANamedFunction();