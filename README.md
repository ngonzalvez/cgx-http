# cgx-http

Minimal AJAX library.


## Why using this library?
It's simple: because it weights 375 bytes compressed.

If you're looking for a library with lots of functionalities, you are in the wrong place. However, if you need just a simple AJAX library and don't want to add several kilobytes to your already big enough bundle, then this is it.


## Installation

**Bower**
```
bower install cgx-http
```


## Usage
~~~javascript
http
  .get('https://jsonplaceholder.typicode.com/posts')
  .then(res => console.log(res.reponseText))
  .catch(res => console.log('The server responded with status ' + res.status));
~~~

## Methods

All params in the following methods, except for the url, are optional. However, if you must respect the order of the params. The library accept the following calls.

**GET**
~~~javascript
http.get(url, params, headers)
~~~

**POST**
~~~javascript
http.post(url, params, headers, data)
~~~

**PUT**
~~~javascript
http.put(url, params, headers, data)
~~~

**PATCH**
~~~javascript
http.patch(url, params, headers, data)
~~~

**DELETE**
~~~javascript
http.put(url, params, headers)
~~~

**REQUEST**
~~~javascript
http.request(method, url, params, headers, data)
~~~


## FAQ

#### Why doesn't this library convert JSON responses to a Javascript object by default?
That's because I don't know if the response is valid JSON, and because implementing that feature would require extra bytes, and the idea of this library is to keep it minimal. However, if I (or someone else) find a way to implement this while keeping the library small enough (~600 bytes) I will introduce this feature to the library.

#### Why isn't this library available for node.js?
Well, this library is designed not to be very powerful (and by that I mean: with many features) just to save space, which is a really valuable asset in front-end web development. However, if you are working with node.js you don't have to download the libraries each time you execute the code or each time a new request arrives. Therefore, since you don't have that restriction, I would advice you to use a full-featured request library instead.


## Sugestions & feature requests

If you have any suggestions on how to improve this library or a feature that you consider should be part of this library, please create a new issue to discuss it. If we decide that it should be part of the library, I will gladly implement it.
