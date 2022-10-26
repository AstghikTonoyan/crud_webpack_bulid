"use strict";

const root = document.querySelector("#root");
const url = "http://localhost:8888/todos";
const get = require("./js/modules/get");
const POST = require("./js/modules/post");
const PUT = require("./js/modules/put");
const DELETE = require("./js/modules/delete");
const isCompleted = require("./js/modules/completed");

const UI = {
	title: document.createElement("h1"),
	subTitle: document.createElement("p"),
	form: document.createElement("form"),
	screenBlock: document.createElement("div"),
	screenInput: document.createElement("input"),
	screenAddBtn: document.createElement("button"),
	listsBlock: document.createElement("div"),

	elementOptions() {
		this.title.textContent = "CRUD";
		this.subTitle.textContent = "Asyn Application";

		this.form.id = "app-form";
		this.screenBlock.id = "screenBlock";
		this.screenInput.type = "text";
		this.screenInput.placeholder = "Type here...";
		this.screenAddBtn.textContent = "ADD";
		this.screenAddBtn.id = "screenAddBtn";
		this.listsBlock.id = "listBlock";
	},

	appendElements() {
		root.append(this.title, this.subTitle, this.form, this.listsBlock);
		this.form.append(this.screenBlock);
		this.screenBlock.append(this.screenInput, this.screenAddBtn);
	},

	toHTML(id, value, isComplete) {
		if(isComplete){
			this.listsBlock.innerHTML += `
			<div class="listsBlockItem">
				<div class="listsBlockItemContent">
					<span>${id}</span>
					<input class="disabled" type="text" value="${value}" readonly>
				</div>
				<div class="buttons">
					<button class="complitedBtn">Completed</button>
					<button class="removeBtn">Remove</button>
					<button class="editBtn">Edit</button>
					<button class="saveBtn">Save</button>
				</div>
			</div>
		`;
		}else{
			this.listsBlock.innerHTML += `
			<div class="listsBlockItem">
				<div class="listsBlockItemContent">
					<span>${id}</span>
					<input type="text" value="${value}" readonly>
				</div>
				<div class="buttons">
					<button class="complitedBtn">IsComplitid?</button>
					<button class="removeBtn">Remove</button>
					<button class="editBtn">Edit</button>
					<button class="saveBtn">Save</button>
				</div>
			</div>
		`;
		}
	},

	start() {
		this.elementOptions();
		this.appendElements();
	}
};

UI.start();

const { form, screenInput } = UI;




POST();



GET();






