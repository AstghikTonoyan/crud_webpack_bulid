module.exports = function DELETE(removeBtn) {
	removeBtn.forEach(btn => {
		btn.addEventListener("click", async () => {
			const fakeID = parseInt(btn.parentElement.previousElementSibling.firstElementChild.textContent);
			btn.parentElement.parentElement.remove();

			await fetch(`${url}/${fakeID}`, {
				method: "DELETE"
			})
		});
	});
};