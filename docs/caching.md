## Caching

- A cache is a hardware or software component that stores data temporarily to reduce access time and improve performance. Caches are used to store frequently accessed or recently used data closer to the CPU or other processing units, thereby reducing the time required to retrieve the data from slower storage devices, such as RAM or disk.
- Caches operate on the principle of locality, which refers to the tendency of programs to access the same data or instructions repeatedly or to access nearby data within a short period of time. By storing frequently accessed data in a cache, subsequent accesses to that data can be served more quickly, as the data is readily available in the cache.

Types of cache
- CPU Cache
- Disk cache
- Web cache
- Browser cache
- Memory cache

Some of the caching techniques in Node

- In Memory caching
  ```js
  const cache = {};

function fetchDataFromDatabase(key) {
    // Simulated function to fetch data from a database
    return databaseQuery(key);
}

function getData(key) {
    if (cache[key]) {
        console.log("Data retrieved from cache");
        return cache[key];
    } else {
        const data = fetchDataFromDatabase(key);
        cache[key] = data;
        console.log("Data fetched from database");
        return data;
    }
}

getData("user:123"); // Fetches data from the database and stores it in the cache
getData("user:123"); // Retrieves data from the cache
  ```

- File system caching
```js
const cache = {};

function fetchDataFromDatabase(key) {
    // Simulated function to fetch data from a database
    return databaseQuery(key);
}

function getData(key) {
    if (cache[key]) {
        console.log("Data retrieved from cache");
        return cache[key];
    } else {
        const data = fetchDataFromDatabase(key);
        cache[key] = data;
        console.log("Data fetched from database");
        return data;
    }
}

getData("user:123"); // Fetches data from the database and stores it in the cache
getData("user:123"); // Retrieves data from the cache
```

- Extencal caching solutions like Redis 
  ```js
  const redis = require('redis');
const client = redis.createClient();

function fetchDataFromDatabase(key) {
    // Simulated function to fetch data from a database
    return databaseQuery(key);
}

function getData(key) {
    return new Promise((resolve, reject) => {
        client.get(key, (err, data) => {
            if (err) {
                reject(err);
            } else if (data) {
                console.log("Data retrieved from Redis cache");
                resolve(JSON.parse(data));
            } else {
                const newData = fetchDataFromDatabase(key);
                client.setex(key, 3600, JSON.stringify(newData)); // Cache data for 1 hour (3600 seconds)
                console.log("Data fetched from database and stored in Redis cache");
                resolve(newData);
            }
        });
    });
}

getData("user:123")
    .then(data => console.log(data))
    .catch(err => console.error(err));
  ```