## REST

- REST (Representational State Transfer) is an architectural style for designing networked applications. It is based on a set of principles that describe how resources are defined and addressed, and how interactions are performed between clients and servers over HTTP.

Here are the key principles of REST:

- `Resource Identification`: Resources are identified by unique URIs (Uniform Resource Identifiers), such as URLs (Uniform Resource Locators). Each resource should have its own URI, which serves as its address.
- `Uniform Interface`: RESTful systems have a uniform interface, which means that interactions between clients and servers are standardized. This includes using standard HTTP methods (GET, POST, PUT, DELETE) to perform operations on resources, and standard MIME types (such as JSON or XML) for representing data.
- `Stateless Communication`: RESTful interactions are stateless, meaning that each request from a client to a server must contain all the information necessary to understand and process the request. Servers do not store client state between requests, which improves scalability and reliability.
- `Client-Server Architecture`: RESTful systems follow a client-server architecture, where clients and servers are separate components that communicate over a network. Clients are responsible for presenting the user interface and initiating requests, while servers are responsible for processing requests, managing resources, and generating responses.
- `Cacheability`: Responses from servers can be explicitly marked as cacheable or non-cacheable using caching headers. Clients can cache responses to improve performance and reduce network traffic, as long as the responses remain valid.
- `Layered System`: RESTful systems are organized in layers, where each layer has a specific role and responsibility. This allows for scalability, flexibility, and encapsulation of functionality.

RESTful APIs (Application Programming Interfaces) are designed according to these principles to provide a scalable, reliable, and interoperable way for clients to interact with server-side resources over the web. They are commonly used for building web services, mobile backend services, and IoT (Internet of Things) applications.
  - Presentation Layer:
  - Application Layer:
  - Data Layer
  - Infrastructure Layer:
  - Cross-Cutting Concerns Layer:

