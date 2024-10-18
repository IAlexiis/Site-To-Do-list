const input = document.getElementById("new-task");
const toDoList = document.getElementById("todo-list");
const addTask = document.getElementById("add-task");

function ajouterTache() {
  const task = input.value.trim();

  if (task !== "") {
    const li = document.createElement("li");
    const taskText = document.createElement("p");
    taskText.textContent = task;
    li.appendChild(taskText);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.className = "delete-button";

    deleteButton.addEventListener("click", function () {
      toDoList.removeChild(li);
    });

    const modifyButton = document.createElement("button");
    modifyButton.textContent = "✏️";
    modifyButton.className = "modify-button";

    const buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container";

    buttonContainer.appendChild(modifyButton);
    buttonContainer.appendChild(deleteButton);

    modifyButton.addEventListener("click", function () {
      const inputEdit = document.createElement("input");
      inputEdit.type = "text";
      inputEdit.placeholder = "Modifier la tâche";
      inputEdit.className = "input-edit";
      inputEdit.value = taskText.textContent;

      li.removeChild(buttonContainer);

      const saveButton = document.createElement("button");
      saveButton.textContent = "Confirmer";

      li.appendChild(saveButton);

      li.replaceChild(inputEdit, taskText);

      li.appendChild(saveButton);

      saveButton.addEventListener("click", function () {
        if (inputEdit.value.trim() !== "") {
          taskText.textContent = inputEdit.value;
        }

        li.replaceChild(taskText, inputEdit);
        li.removeChild(saveButton);
        li.appendChild(buttonContainer);
      });
    });

    li.appendChild(buttonContainer);

    toDoList.appendChild(li);

    input.value = "";
  } else alert("Vueillez entrer une tache !");
}

addTask.addEventListener("click", ajouterTache);
