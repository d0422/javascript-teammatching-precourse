import Crew from "./crew.js";
import Model from "./Model.js";
export default class Controller {
  constructor() {
    const frontEnd = document.getElementById("frontend-course");
    const backEnd = document.getElementById("backend-course");
    const nameSubmit = document.getElementById("add-crew-button");
    this.type;
    this.Front = new Model();
    this.Back = new Model();
    backEnd.addEventListener("click", () => this.setType(event));
    frontEnd.addEventListener("click", () => this.setType(event));
    nameSubmit.addEventListener("click", () => this.getName(event));
  }
  addCrew(name) {
    this.type.addMember(name);
    const table = document.querySelector("#crew-table tbody");
    const crewHTML = `<tr><td>${this.type.index}</td><td>${
      this.type.member[this.type.index - 1]
    }</td><td><button class="delete-crew-button">삭제</button></td></tr>`;
    table.insertAdjacentHTML("beforeend", crewHTML);
    document.getElementById("crew-name-input").value = "";
  }
  setType(event) {
    if (event.target.value == "frontend") {
      this.type = this.Front;
      document.getElementById("crew-title").innerHTML = "프론트엔드 크루 관리";
      document.getElementById("crew-list").innerHTML = "프론트엔드 크루 목록";
    } else if (event.target.value == "backend") {
      this.type == this.Back;
      document.getElementById("crew-title").innerHTML = "백엔드 크루 관리";
      document.getElementById("crew-list").innerHTML = "백엔드 크루 목록";
    }
  }
  getName(evnet) {
    event.preventDefault();
    const nameValue = document.getElementById("crew-name-input").value;
    if (this.validationCheck(nameValue)) {
      this.addCrew(nameValue);
    } else {
      this.showError();
    }
  }
  validationCheck(value) {
    if (!value || value.length > 5 || this.duplicateCheck(this.type, value)) {
      console.log(false);
      return false;
    }
    return true;
  }
  duplicateCheck(Array, newValue) {
    let flag = false;
    Array.member.forEach((mem) => {
      if (mem == newValue) {
        flag = true;
      }
    });
    if (flag) return true;
    else return false;
  }
  showError() {
    alert("잘못된 입력입니다!");
    document.getElementById("crew-name-input").value = "";
  }
}
