import Crew from "./crew.js";

export default class Model {
  constructor() {
    this.index = 0;
    this.member = [];
  }
  addMember(name) {
    const newCrew = new Crew(this.index, name);
    this.member.push(name);
    this.index++;
  }
}
