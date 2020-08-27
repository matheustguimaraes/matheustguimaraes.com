---
title: "How to enable CORS in Flask"
date: "2020-08-27"
draft: false
path: "/blog/flask-cors"
---

# Fast way to enable CORS in Flask servers

Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers to tell browsers to give a web application running at one origin, access to selected resources from a different origin. A web application executes a cross-origin HTTP request when it requests a resource that has a different origin (domain, protocol, or port) from its own. [[1]](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

Lets create a simple Flask server called ```app.py```:

```python
from flask import Flask, jsonify


@app.route("/", methods=["GET"])
def get_example():
    """GET in server"""
    response = jsonify(message="Simple server is running")
    return response

@app.route("/", methods=["POST"])
def post_example():
    """POST in server"""
    return jsonify(message="POST request returned")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port="5000", debug=True)
```

If you are building an React app and using axios library, GET requests to server will look something like this:

```js
import axios from "axios"

const apiURL = "http://localhost:5000"

axios
    .get(apiURL)
        .then((response) => {
            setState(response.message);
        })
    .catch((error) => {
        console.log(error);
    });
```

But without CORS enabled, the browser will block the server's response for security reasons. To receive data using a React application, CORS must be enabled.

To enable CORS in GET responses on the server, you can simply add a header in response:

```python
@app.route("/", methods=["GET"])
def get_example():
    """GET in server"""
    response = jsonify(message="Simple server is running")
    
    # Enable Access-Control-Allow-Origin
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

```

After ```response.headers.add("Access-Control-Allow-Origin", "*")```, all GET requests will be accepted.

To enable requests like POST, PUT, DELETE, etc., the easiest way is to install *Flask-CORS* (https://flask-cors.readthedocs.io/en/latest). To install Flask-CORS using pip:

```sh
pip install flask-cors
```

In an example of a POST request, simply add the decorator ```@cross_origin``` in the function beginning:

```python
@app.route("/", methods=["POST"])
@cross_origin()
def post_example():
    """POST in server"""
    return jsonify(message="POST request returned")
```

There you go. Now your React app can communicate, receive and send information to the server using all HTTP methods, including POST, PUT, DELETE and more.

Have a nice day!
