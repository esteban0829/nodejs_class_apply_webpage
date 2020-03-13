/*
function that gets parameters suchs as the below and returns an html document
title : Sites title
list : Lists that you can visit
body : contains data you want to see
control : contains the link to trsndfer you
  -create : make more lists with data
  -update : update or delete existing list with data
*/
/*
function that gets the titles of every documents in the data folder and converts
them to html documents (converts them to listed links)
*/

module.exports = {
  'collectRequestData':function(request, callback){
    const FORM_URLENCODED = 'application/x-www-form-urlencoded';
    if(request.headers['content-type'] === FORM_URLENCODED) {
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            callback(qs.parse(body));
        });
    }
    else {
        callback(null);
    }
  }
}
