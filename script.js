const submit = document.querySelector("#submit");
const name = document.querySelector("#name");
const sex = document.querySelector("#sex");
const score = document.querySelector("#score");
const listStudent = document.querySelector("#list-student");
var selectRow = null;
var grade = "";
const alert = () => {
  const alertContainer = document.querySelector("#alert-container");
  const alertItem = document.createElement("div");
  alertItem.className = "alert alert-primary alert-dismissible";
  alertItem.innerHTML = `<strong>Good Morning </strong> Welcome to my WEB PAGE<button class="btn btn-close" aria-label="close" data-bs-dismiss="alert"></button>`;
  alertContainer.appendChild(alertItem);
};
const error = () => {
  name.classList.add("is-invalid");
  sex.classList.add("is-invalid");
  score.classList.add("is-invalid");
};
const success = () => {
  name.classList.remove("is-invalid");
  sex.classList.remove("is-invalid");
  score.classList.remove("is-invalid");
};

window.addEventListener("DOMContentLoaded", alert());
submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (name.value == "" || sex.value == "" || score.value == "") {
    error();
  } else if (selectRow == null) {
    success();

    console.log(grade);
    const list = document.createElement("tr");
    if (score.value > 98) {
      grade = "A";
      list.className = "table-success";
    } else if (score.value > 88) {
      grade = "B";
      list.className = "table-warning";
    } else if (score.value > 77) {
      grade = "C";
      list.className = "table-secondary";
    } else if (score.value > 66) {
      grade = "D";
      list.className = "table-primary";
    } else if (score.value > 55) {
      grade = "E";
      list.className = "table-info";
    } else {
      grade = "F";
      list.className = "table-danger";
    }
    listStudent.appendChild(list);
    list.innerHTML = `<tr class="table-row">
              <th class="table-cell">${name.value}</th>
              <td class="table-cell">${sex.value}</td>
              <td class="table-cell">${score.value}</td>
              <td class="table-cell">${grade}</td>
              <td class="table-cell d-flex gap-2 ">
                  <a data-bs-toggle="modal" href="#" data-bs-target="#modal" class="btn btn-primary btn-sm custom-edit">Edit</a>
                  <a  href="#" class="btn btn-outline-danger btn-sm custom-delete" >Delete</a>
              </td>
            </tr>`;
  } else {
    catchData();
    selectRow = null;
  }
  clearData();
});
const catchData = () => {
  selectRow.children[0].textContent = name.value;
  selectRow.children[1].textContent = sex.value;
  selectRow.children[2].textContent = score.value;
};
const clearData = () => {
  name.value = "";
  sex.value = "";
  score.value = "";
};
// const deleteList = document.querySelector("#delete");
listStudent.addEventListener("click", (p) => {
  target = p.target;
  if (target.classList.contains("custom-delete")) {
    target.parentElement.parentElement.remove();
  }
});
listStudent.addEventListener("click", (p) => {
  target = p.target;
  console.log(target);
  if (target.classList.contains("custom-edit")) {
    storeData();
  }
});
const storeData = () => {
  selectRow = target.parentElement.parentElement;
  name.value = selectRow.children[0].textContent;
  sex.value = selectRow.children[1].textContent;
  score.value = selectRow.children[2].textContent;
};
