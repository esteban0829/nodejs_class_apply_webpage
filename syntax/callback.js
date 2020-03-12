var a = function(){
  console.log('a');
}

function slowfunc(callback){
  callback();
}

slowfunc(a);
