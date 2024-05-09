import express from "express";
import limiter from "express-rate-limit";
import helmet from "helmet";

const app = express();

app.use(helmet());

/**
 * Apply rate limiter to all routes
 *
 **/

app.use(
	limiter({
		windowMs: 5000,
		max: 5,
		message: {
			code: 429,
			message: "Too many request",
		},
	})
);

const PORT = process.env.PORT || 3000;

const registerLimiter = limiter({
	windowMs: 5 * 60 * 1000,
	max: 2,
});

app.get("/", (req, res) => res.send("Hello from the rate limited app"));

app.get("/api", (req, res) =>
	res.send("Only certain number requests allowed per s/m/h/d")
);

app.get("/open", (req, res) => res.send("This is an open endpoint"));

app.get("/register", (req, res) => res.send("Register page"));

app.post("/register", registerLimiter, (req, res) => res.send("ok"));

app.get("/login", (req, res) => res.send("login page"));

app.post("/login", (req, res) => res.send("OK"));

app.listen(PORT, () => console.log(`Server on PORT: ${PORT}`));
