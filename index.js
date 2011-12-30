var EventEmitter2 = require('eventemitter2').EventEmitter2
,		exports = {}
,		emi = new EventEmitter2({verbose:true})
;

emi.on('test', function(arg1,arg2){
	console.log(this.event, arg1, arg2)
})

emi.emit('test', 1, 2)
var x = 0;
var t = setInterval(function(){++x},.1)
var t = setInterval(function(){console.log(new Date().getTime(), x)},1)

//var x = setTimeout(function(){clearInterval(t)},1000)