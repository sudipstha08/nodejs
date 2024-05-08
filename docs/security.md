## Helmet
- `Helmet` helps secure Express apps by setting HTTP response headers.
- `Helmet.js` is middleware-based technology that improves security by safeguarding HTTP headers returned by a Node.js app.
  
## X-Powered-By
- The HTTP `X-Powered-By` request header is an optional and unofficial HTTP header, used to indicate the technology stack used on the server-side.
- The HTTP `X-Powered-By` request header is often by default included by popular server and/or scripting software to indicate the name and version number used when generating the HTTP response.
- As with all headers that begin with X-, it is a non-standard header. Specifically, backend technologies generally use X-Powered-By to indicate the name and version number of the framework or library used by the server to generate the HTTP response.

## Cross-site scripting (XSS)
- `Cross-site scripting (XSS)` is a security exploit which allows an attacker to inject into a website malicious client-side code. This code is executed by the victims and lets the attackers bypass access controls and impersonate users. According to the Open Web Application Security Project, XSS was the seventh most common Web app vulnerability in 2017.
- These attacks succeed if the Web app does not employ enough validation or encoding. The user's browser cannot detect the malicious script is untrustworthy, and so gives it access to any cookies, session tokens, or other sensitive site-specific information, or lets the malicious script rewrite the HTML content.

## Click-jacking
- `Clickjacking` is the practice of tricking a user into clicking on a link, button, etc. that is other than what the user thinks it is. This can be used, for example, to steal login credentials or to get the user's unwitting permission to install a piece of malware. (Click-jacking is sometimes called "user interface redressing", though this is a misuse of the term "redress".)

## Cross-site request forgery (CSRF)
- `CSRF (sometimes also called XSRF)` is a related class of attack. The attacker causes the user's browser to perform a request to the website's backend without the user's consent or knowledge. An attacker can use an XSS payload to launch a CSRF attack.
- Wikipedia mentions a good example for CSRF. In this situation, someone includes an image that isn't really an image (for example in an unfiltered chat or forum), instead it really is a request to your bank's server to withdraw money

## DDoS
- A `distributed denial-of-service (DDoS)` attack is a malicious attempt to disrupt the normal traffic of a targeted server, service or network by overwhelming the target or its surrounding infrastructure with a flood of Internet traffic.
- DDoS attacks achieve effectiveness by utilizing multiple compromised computer systems as sources of attack traffic. Exploited machines can include computers and other networked resources such as IoT devices.
- From a high level, a DDoS attack is like an unexpected traffic jam clogging up the highway, preventing regular traffic from arriving at its destination.
- The most obvious symptom of a DDoS attack is a site or service suddenly becoming slow or unavailable. But since a number of causes — such a legitimate spike in traffic — can create similar performance issues, further investigation is usually required. 


### NodeJS Security Best practices
- Rate Limiting
  - eg `express-rate-limit` with nginx | aws rate limiter
- Passoword encryption
  - eg `bcrypt`
- JWT blacklisting
- JSON schema validation
- Escaping HTML and CSS 
  - `bodyparser` or `escape-html`
  - escapeHtml is used to escape a string of content such that it can be interpolated in HTML content.
- ORM/ODM against injections
- Security Linter
  - `eslint-plugin-security`  will help identify potential security hotspots, but finds a lot of false positives which need triage by a human
- Running Node.js as a non root user
- Limiting the payload size
- Authentication Limits
  - Allow to send certain amount of auth request in specified amount of time
- Vulnerability inspections
  - `npm-audit`


## Escaping HTML and CSS in the backend, particularly in Node.js applications, is crucial for security reasons. Here are some reasons why:

-` Cross-Site Scripting (XSS) Prevention`: Escaping HTML helps prevent XSS attacks where an attacker injects malicious scripts into web pages viewed by other users. By escaping HTML, you ensure that any user input containing HTML tags is rendered as plain text, thus eliminating the risk of script injection.
- `Protecting Against Code Injection`: Escaping CSS helps prevent code injection attacks where an attacker injects CSS code to modify the appearance or behavior of a web page in unintended ways. By properly escaping CSS, you ensure that user input is treated as data rather than executable code.
- `Maintaining Data Integrity`: Escaping HTML and CSS ensures that user input is displayed as intended without interfering with the structure or style of the web page. This helps maintain data integrity and ensures a consistent user experience.
- `Compliance with Security Best Practices`: Following security best practices, such as escaping HTML and CSS, helps ensure that your application meets industry standards and compliance requirements for data protection and security.
- `Preventing Client-Side Vulnerabilities`: Even though frontend validation and sanitization are important, relying solely on client-side validation leaves your application vulnerable to attacks if the client-side code is bypassed or manipulated. Escaping HTML and CSS in the backend provides an additional layer of security to mitigate these risks.


[REFERENCES]
- https://blog.logrocket.com/using-helmet-node-js-secure-application/
- https://developer.mozilla.org/en-US/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss
- https://supertokens.com/blog/revoking-access-with-a-jwt-blacklist