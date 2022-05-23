Object.prototype.myBind = function(fun){
    return (...args) => {
        fun.call(this, ...args);
    }
}

let obj = {
    name: 'rahul'
}

function fun(hobby, rank){
    console.log(this.name, hobby, rank);
}

let fun1 = obj.myBind(fun);

fun1('cricket', 'admin');

///////////////////////////////////////

Function.prototype.myCall = function(context, ...args){
    context[fun] = fun;
    return context[fun](...args);
}

let test = {
    name: 'rahul'
}

function fun(hobby, rank){
    console.log(this.name, hobby, rank);
}

fun.myCall(test, 'cricket', 'topper');
