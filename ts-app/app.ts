import express from "express";

const app = express();

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

app.listen(3000, () => console.log("Server on port 3000"));

export { app };
