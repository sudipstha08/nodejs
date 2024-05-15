## Curl

- `cURL`, which stands for client URL, is a command line tool that developers use to transfer data to and from a server. At the most fundamental, cURL lets you talk to a server by specifying the location (in the form of a URL) and the data you want to send. 
- cURL supports several different protocols, including HTTP and HTTPS, and runs on almost every platform. This makes cURL ideal for testing communication from almost any device (as long as it has a command line and network connectivity) from a local server to most edge devices.
- The most basic command in curl is curl http://example.com. The curl command is followed by the URL, from which we would like to retrieve some kind of data. In this case, it would return the html source for example.com.
- Underlying the curl command is the libcurl development library, which has bindings for almost any codebase.
- cURL is also the name of the software project, which encompasses both the curl command-line tool and the libcurl development library.

```
curl http://localhost:3000 --include
// include flag make the request attact the headers
```

## Why use curl?

- It is highly portable. It is compatible with almost every operating system and connected device.
- It is useful for testing endpoints, to check if they are working.
- It can be verbose, providing details of exactly what has been sent/received, which is helpful for debugging.
- It has good error logging.
- It can be rate limited.
