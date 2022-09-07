const getElement = (id) => {
    const element = document.getElementById(id);
    const elementValue = element.value;
    element.value = '';
    return elementValue;
}
function addBtn() {
    const inputTilte = getElement('todo-tilte')
    const inputText = getElement('todo-text')
    getFromLocalStorage(inputTilte, inputText)
    displayItem(inputTilte, inputText)
}

const setLocalStoreage = () => {
    const setTodo = localStorage.getItem('todos');
    let todos = {};
    if (setTodo) {
        todos = JSON.parse(setTodo)
    }
    return todos
}
const getFromLocalStorage = (inputTilte, inputText) => {
    const todos = setLocalStoreage();
    todos[inputTilte] = inputText;
    const todoStringify = JSON.stringify(todos);
    localStorage.setItem('todos', todoStringify)

}
const displayItem = (inputTilte, inputText) => {

    const parentLi = document.getElementById('todo-list')
    const li = document.createElement('li');
    li.classList.add('py-2')
    li.innerText = `${inputTilte} : ${inputText}`
    parentLi.appendChild(li)

}
const showItemFromLocalStoreage = () => {
    const todos = setLocalStoreage();
    for (let todo in todos) {
        const todoText = todos[todo];
        displayItem(todo, todoText)
    }

}
function clearAll() {
    localStorage.clear('todos')
    location.reload()
}
showItemFromLocalStoreage()
// displayItem()
