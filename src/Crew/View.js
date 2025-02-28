import Controller from "./Controller.js";
export default class View {
  constructor() {
    this.inner = `
  <main>
    <section>
      <h3>크루를 관리할 코스를 선택해주세요</h3>
      <div>
        <input id="frontend-course" type="radio" name="course" value="frontend" />
        <label for="frontend">프론트엔드</label>
        <input id="backend-course" type="radio" name="course" value="backend" />
        <label for="backend">백엔드</label>
      </div>
    </section>
    <section>
      <h3 id="crew-title">프론트엔드 크루 관리</h3>
      <form>
        <label>크루 이름</label>
        <input id="crew-name-input" type="text" />
        <button id="add-crew-button">확인</button>
      </form>
    </section>
    <section>
      <h3 id="crew-list">프론트엔드 크루 목록</h3>
      <table id="crew-table" border="1">
        <thead>
          <tr>
            <th></th>
            <th>크루</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </section>
  </main>`;
    this.app = document.querySelector("#app");
    this.app.insertAdjacentHTML("beforeend", this.inner);
    this.controller = new Controller();
  }
}
