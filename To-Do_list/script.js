const addNewBtn = document.getElementById("add");
let idGiver = 0;
const taskBody = document.querySelector(".taskBody");
const footer = document.querySelector(".footer");
let n = 0;
let m = 0;
footer.innerHTML = `
  You have completed ${n} tasks, out of ${m} tasks.
`;

addNewBtn.addEventListener("click", function () {
  const addNewInput = document.getElementById("addNew");
  const element = document.createElement("div");

  const paraText = addNewInput.value;

  if (paraText) {
    idGiver++;
    m = idGiver;
    element.classList.add("task");
    element.innerHTML = `
            <input type="checkbox" name="completed" class='ti${idGiver}' />
            <p>${paraText}</p>
            <span><i class="fa-solid fa-xmark td${idGiver}"></i></span>
            `;

    taskBody.appendChild(element, paraText);
    footer.innerHTML = `
  You have completed ${n} tasks, out of ${m} tasks.
  `;
  } else {
    alert("Name cant be empty!!!!");
  }
  delTask();
  doneTask();
});

delTask();
function delTask() {
  const del = document.querySelectorAll(`.td${idGiver}`);
  //   console.log("del");

  del.forEach((element) => {
    element.addEventListener("click", function () {
      this.parentElement.parentElement.remove();
      idGiver--;
      m = idGiver;
      if (n == 0) {
        n = 0;
      } else {
        n--;
      }
      footer.innerHTML = `
        You have completed ${n} tasks, out of ${m} tasks.
    `;
    });
  });
}

doneTask();
function doneTask() {
  const done = document.querySelectorAll(`.ti${idGiver}`);
  //   console.log("done");
  done.forEach((element) => {
    element.addEventListener("click", function () {
      this.nextElementSibling.classList.toggle("lineThrough");
      let n = document.querySelectorAll(".lineThrough");
      n = n.length;
      footer.innerHTML = `
        You have completed ${n} tasks, out of ${m} tasks.
    `;
    });
  });
}
