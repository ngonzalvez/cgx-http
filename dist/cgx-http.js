/**
 * Simple abstraction for performing HTTP requests.
 */
var http = {
  request: function(method, url, params, headers, data) {
    var xhr = new XMLHttpRequest();
    var body = JSON.stringify(data);
    var encode = encodeURIComponent;
    var promise = new Promise();
    var field;
    var name;

    // Prepare the body for the request.
    if (headers && headers.Authorization !== 'application/json') {
      body = '';

      for (field in data) {
        body += encode(field) + '=' + encode(data[field]) + '&';
      }
    }

    xhr.open(method, url, true);

    for (name in headers) {
      xhr.setRequestHeader(name, headers[name]);
    }

    // Set the response callback.
    xhr.onreadystatechange = function() {
      if (this.readyState != 4) return;

      if (this.status < 400) {
        promise.resolve(this);
      } else {
        promise.reject(this);
      }
    };

    xhr.send(body);

    return promise;
  }
};

http.get = http.request.bind(null, 'GET');
http.post = http.request.bind(null, 'POST');
http.put = http.request.bind(null, 'PUT');
http.patch = http.request.bind(null, 'PATCH');
http.delete = http.request.bind(null, 'DELETE');
