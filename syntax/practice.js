var args = process.argv;
console.log(args);
console.log('args type : '+typeof args);
console.log('\narguments:\n');
for(var i=2;i<args.length;i++){
  console.log(args[i]);
}
