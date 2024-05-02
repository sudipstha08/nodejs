const express = require("express");
const redis = require("redis");

const app = express();

const client = redis.createClient({
	host: "redis-12982.c1.asia-northeast1-1.gce.cloud.redislabs.com",
	port: 12982,
	password: "1WVvP1zGoarYAukJS2v0lbZEBISLij3Y",
});

client.on("error", (err) => {
	console.error("Redis error: ", err);
});

client.on("connect", () => console.log("::> Redis Client Connected"));

function getHitCount(callback) {
	client.incr("hits", (err, count) => {
		if (err) {
			callback(err, null);
		} else {
			callback(null, count);
		}
	});
}

app.get("/", (req, res) => {
	getHitCount((err, count) => {
		if (err) {
			res.status(500).send("Error incrementing hit count");
		} else {
			res.send(`Hello Hidsfdf World! I have been seen ${count} times.\n`);
		}
	});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
