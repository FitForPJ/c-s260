function CurriedAdd(x){
	return function(y){
			return x+y;
		}
};

g = CurriedAdd(2);
console.log(g(3))

// function greet(mesg) {
// 	console.log(mesg);
// }
// function greeter(name){
// 	return 'Hello ' + name;
// }
// var mesg = greeter('John')
// greet(mesg);


// function greeter(name) {
// 	var	mesg = 'Hello ' + name;
// 	return function greet() {
// 		console.log(mesg)
// 	}
// }

// var fn = greeter('John')
// fn();

// var foo = () => console.log('foo');
// var bar  = (callback) =>{
// 	console.log('bar');
// 	return callback;
// }
// bar(foo)();

exports.sa = sumAll =  (...args) =>{
	var total = 0;
	for(var	i  = 0;i < args.length; i++){
		total += args[i];
	}
	return(total);
}



