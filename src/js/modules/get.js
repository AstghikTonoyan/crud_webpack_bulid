module.exports = async function GET() {
	return await fetch(url)
		.then(data => data.json())
		.then(data => data.forEach(obj => UI.toHTML(obj.id, obj.title, obj.isComplete)))
		.then(() => {
			PUT(
				document.querySelectorAll(".editBtn"),
				document.querySelectorAll(".saveBtn"),
				document.querySelectorAll(".listsBlockItemContent"),
				
			);
			DELETE(document.querySelectorAll(".removeBtn"));
			isCompleted(document.querySelectorAll(".complitedBtn"),);
		})
}