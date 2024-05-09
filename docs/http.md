## HTTP

### HTTP Headers
- HTTP headers let the client and the server pass additional information with an HTTP request or response. 
- An HTTP header consists of its case-insensitive name followed by a colon (:), then by its value. Whitespace before the value is ignored.
- Headers can be grouped according to their contexts:
  - Request headers eg Accept, Host, Referer
  - Response headers eg Server, Etag
  - Representation headers eg Content-Type
  - Payload headers eg Content-Length, Content-Range

### HTTP methods
- HTTP defines a set of request methods to indicate the desired action to be performed for a given resource.
- Each of them implements a different semantic, but some common features are shared by a group of them: e.g. a request method can be safe, idempotent, or cacheable.
GET
The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.

HEAD
The HEAD method asks for a response identical to a GET request, but without the response body.

POST
The POST method submits an entity to the specified resource, often causing a change in state or side effects on the server.

PUT
The PUT method replaces all current representations of the target resource with the request payload.

DELETE
The DELETE method deletes the specified resource.

CONNECT
The CONNECT method establishes a tunnel to the server identified by the target resource.

OPTIONS
The OPTIONS method describes the communication options for the target resource.

TRACE
The TRACE method performs a message loop-back test along the path to the target resource.

PATCH
The PATCH method applies partial modifications to a resource.


## HTTP Status code
- HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:
  - Informational responses (100 – 199)
  - Successful responses (200 – 299)
  - Redirection messages (300 – 399)
  - Client error responses (400 – 499)
  - Server error responses (500 – 599)

Commonly used status code
- `200 OK`: The request has succeeded. The client's request was valid, and the server responded with the requested resource.
- `201 Created`: The request has been fulfilled, resulting in the creation of a new resource.
- `204 No Content`: The server successfully processed the request, but there is no content to return.
- `400 Bad Request`: The server cannot process the request due to a client error, such as invalid syntax or missing parameters.
- `401 Unauthorized`: The request requires user authentication. The client needs to provide valid credentials.
- `403 Forbidden`: The server understood the request but refuses to authorize it. The client does not have the necessary permissions.
- `404 Not Found`: The server cannot find the requested resource. It is one of the most common HTTP error responses, indicating that the resource is not available at the specified URL.
- `500 Internal Server Error`: A generic error message indicating that the server encountered an unexpected condition that prevented it from fulfilling the request.
- `502 Bad Gateway`: The server, while acting as a gateway or proxy, received an invalid response from the upstream server it accessed in attempting to fulfill the request.
- `503 Service Unavailable`: The server is currently unable to handle the request due to temporary overloading or maintenance of the server.

[REFERENCES]
- https://developer.mozilla.org/en-US/docs/Web/HTTP

