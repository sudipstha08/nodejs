import express from "express";

const app = express();

const PORT = 3000

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

app.get("/", (req, res) => {
	res.send("<h1>Hello Hello</h1>");
});

app.listen(PORT, () => console.log("Server on port 3000"));

export { app };
