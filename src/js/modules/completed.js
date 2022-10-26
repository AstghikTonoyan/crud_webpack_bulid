module.exports = function isCompleted(complitedBtn) {
	complitedBtn.forEach(btn => {
		btn.addEventListener("click", async (e) => {
			const fakeID = parseInt(btn.parentElement.previousElementSibling.firstElementChild.textContent);
			const input = e.target.parentElement.parentElement.children[0].children[1];
			await fetch(`${url}/${fakeID}`, {
				method: "PUT",
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify({title: input.value.trim(), isComplete: true })
			});
		});
	});
};