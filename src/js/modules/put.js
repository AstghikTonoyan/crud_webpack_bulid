module.exports = function PUT(editBtnArray, saveBtnArray, content) {
	editBtnArray.forEach((editBtn, index) => {
		editBtn.addEventListener("click", (e) => {
			const input = content[index].children[1];
			const fakeID = parseInt(content[index].children[0].textContent);
			if(content[index].children[1].classList[0] !== "disabled"){
				editBtn.style.display = "none";
				saveBtnArray[index].style.display = "inline-block";
				input.classList.add("edit");
				input.removeAttribute("readonly");
			}
			saveBtnArray[index].addEventListener("click", async () => {
				
				await fetch(`${url}/${fakeID}`, {
					method: "PUT",
					headers: {
						"content-type": "application/json"
					},
					body: JSON.stringify({ title: input.value.trim(), isComplete: input.classList[0] === "disabled" ? true : false})
				});
			});
		})
	});
}