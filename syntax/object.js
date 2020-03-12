var members = ['egoing', 'esteban', 'lowell'];



var roles = {'programmer':'egoing', 'k8805':'designer', 'manager':'hoys'}



for(var i=0;i<members.length;i++){
  console.log(members[i]);
}

for(var key in roles){
  console.log(key);
  console.log(roles[key]);
}
