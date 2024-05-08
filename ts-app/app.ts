import express from "express";
import { errorHandler } from "./middlewares";
import { httpsignup } from "./controllers";

const app = express();

const PORT = 3000;

app.use(express.json());

app.post("/login", (req, res) => res.send("OK"));

app.post("/users", (req, res) => {
	const { password, username } = req.body;
	if (!password || !username) {
		res.sendStatus(400);
		return;
	}
	res.send({
		userId: "fdsfsdf",
	});
});

app.post("/signup", httpsignup);

app.get("/", (req, res) => {
	res.send("<h1>Hello Hello</h1>");
});

// The app.all() function is used to route all types of HTTP requests. Like if we have POST, GET, PUT, DELETE, etc, requests made to any specific route, let’s say /user, so instead of defining different APIs like app.post(‘/user’), app.get(‘/user’), etc, we can define single API app.all(‘/user’) which will accept all type of HTTP request. 
app.all("*", () => {
	throw new Error("Route not found");
});

app.use(errorHandler);

app.listen(PORT, () => console.log("Server on port 3000"));

export { app };
