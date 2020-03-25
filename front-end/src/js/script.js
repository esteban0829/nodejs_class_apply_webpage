// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the POST request on the URL endpoint
// technically the url is 'http://222.99.16.137/customer_list' but you can just use this
request.open('POST', '/customer_list', true)

request.onload = function() {
  // Begin accessing JSON data here
  // Which means you can access customer_list here
  var data = JSON.parse(this.response) //customer_list data

  // console.log(data); // display the data

  /*
    a json data is a object that currently in this website's data look like this

    {
        customer.key : { 'first_name' : customer.first_name , ... }
    }

  */

  // I think you could just use this data and make 
  // document.querySelector('#customer-list').innerHTML = table_you_made_with_the_data;
  // this and just use it.

  //when website's are reloaded they fetch the data with the script(line:6)
}

// Send request
request.send()