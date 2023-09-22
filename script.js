
const buttonText = document.querySelector(".new-task button")
const taskBox = document.querySelector(".task-box")
const inputText = document.querySelector(".new-task input");




buttonText.addEventListener('click', addTask);




function addTask(){
    event.preventDefault();
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');

    const dataInput = document.createElement('input');
    dataInput.type='checkbox';

    const tagP = document.createElement('p');
    tagP.innerText =inputText.value
    inputText.value = "";

    const button = document.createElement('button');
    const trashIcone = document.createElement('i');
    trashIcone.classList.add('fa');
    trashIcone.classList.add('fa-trash');

    trashIcone.addEventListener('click',deleteTask );
    dataInput.addEventListener('click',completeTask);


    taskItem.appendChild(dataInput);
    taskBox.appendChild(taskItem);
    taskItem.appendChild(tagP);
    taskItem.appendChild(button);
    button.appendChild(trashIcone);

}

function deleteTask(e){
    e.target.parentElement.parentElement.remove();
}

function completeTask(e){
    e.target.parentElement.classList.toggle("complete");
}
