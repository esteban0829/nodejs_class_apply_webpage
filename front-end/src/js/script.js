// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('POST', '/customer_list', true)

request.onload = function() {
  // Begin accessing JSON data here
  // Which means you can access customer_list here
  var data = JSON.parse(this.response) //Your data
  alert(data);
  console.log(data);
}

// Send request
request.send()