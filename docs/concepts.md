## Idempotency
- Idempotency is a property of certain operations or API requests that ensures performing the operation multiple times yields the same result as if it were executed only once. This principle is essential in distributed systems and APIs to maintain consistency and predictability in scenarios like network issues, request retries, or duplicated requests.
- Idempotency is crucial in APIs because it guarantees consistent outcomes even if a resource is called multiple times due to network interruptions or request duplications. Non-idempotent operations can lead to unintended side-effects like creating additional resources or unexpected changes, posing a significant risk when Data Accuracy Is Crucial.
- Idempotency simplifies error handling, concurrency management, debugging, and monitoring in operations and APIs. It enhances user experience by maintaining consistency and predictability, even in the face of network disruptions and request retries.
- HTTP methods such as `GET`, `HEAD`, `PUT`, `DELETE`, `OPTIONS`, and `TRACE` are considered idempotent. They can be retried or executed multiple times without causing unintended side effects.
- `POST` method is non-idempotent as making the same POST request multiple times can result in different outcomes or create multiple instances of submitted data.

## PATCH
- PATCH is an HTTP method used for partially updating resources on a server. Unlike PUT, which typically requires the client to send a complete representation of the resource, PATCH allows clients to send only the changes that need to be applied. This makes it more efficient for updating specific attributes or elements of a resource without affecting the rest of the data. The idempotency of PATCH depends on the implementation and the semantics of the operation.


[REFERENCES]
- https://blog.dreamfactory.com/what-is-idempotency/#:~:text=Which%20HTTP%20methods%20are%20idempotent,without%20causing%20unintended%20side%20effects.