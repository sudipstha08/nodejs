const button = document.querySelector("button");
const clinetUrl = "http://localhost:2000"

console.log("button",button)

button.addEventListener("click", () => {
	console.log("Checkout");
	fetch("/create-checkout-session", {
		 url: clinetUrl,
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			items: [
				{
					id: 1,
					quantity: 2,
				},
				{
					id: 2,
					quantity: 1,
				},
			],
		}),
	})
		.then((res) => {
			if (res.ok) return res.json();
			return res.json().then((json) => Promise.reject(json));
		})
		.then(({ url }) => {
			console.log(url)
			window.location = url;
		})
		.catch((e) => {
			console.error(e.error);
		});
});
