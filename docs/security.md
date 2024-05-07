## Helmet
- Helmet helps secure Express apps by setting HTTP response headers.
- Helmet.js is middleware-based technology that improves security by safeguarding HTTP headers returned by a Node.js app.
  
## X-Powered-By
- The HTTP `X-Powered-By` request header is an optional and unofficial HTTP header, used to indicate the technology stack used on the server-side.
- The HTTP `X-Powered-By` request header is often by default included by popular server and/or scripting software to indicate the name and version number used when generating the HTTP response.
- As with all headers that begin with X-, it is a non-standard header. Specifically, backend technologies generally use X-Powered-By to indicate the name and version number of the framework or library used by the server to generate the HTTP response.

## Cross-site scripting (XSS)
- `Cross-site scripting (XSS)` is a security exploit which allows an attacker to inject into a website malicious client-side code. This code is executed by the victims and lets the attackers bypass access controls and impersonate users. According to the Open Web Application Security Project, XSS was the seventh most common Web app vulnerability in 2017.
- These attacks succeed if the Web app does not employ enough validation or encoding. The user's browser cannot detect the malicious script is untrustworthy, and so gives it access to any cookies, session tokens, or other sensitive site-specific information, or lets the malicious script rewrite the HTML content.

## Click-jacking
Clickjacking is the practice of tricking a user into clicking on a link, button, etc. that is other than what the user thinks it is. This can be used, for example, to steal login credentials or to get the user's unwitting permission to install a piece of malware. (Click-jacking is sometimes called "user interface redressing", though this is a misuse of the term "redress".)

## Cross-site request forgery (CSRF)
- CSRF (sometimes also called XSRF) is a related class of attack. The attacker causes the user's browser to perform a request to the website's backend without the user's consent or knowledge. An attacker can use an XSS payload to launch a CSRF attack.
- Wikipedia mentions a good example for CSRF. In this situation, someone includes an image that isn't really an image (for example in an unfiltered chat or forum), instead it really is a request to your bank's server to withdraw money:


[REFERENCES]
- https://blog.logrocket.com/using-helmet-node-js-secure-application/
- https://developer.mozilla.org/en-US/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss