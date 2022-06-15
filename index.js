const inputText = document.querySelector('.task-name')
const taskArea = document.querySelector('.task-area')
const itemEvent = document.querySelector('.task-item')

// Reference starting point, max 6 task.
var itemLimit = 1

// dynamic event listener
const addGlobalEventListener = ((type, selector, callback) => {
    document.addEventListener(type, e => {
        if (e.target.matches(selector)) callback(e)
    })
})

// Using this to avoid bubbling and capture event..
// Thanks to Web Dev Simplified :)
addGlobalEventListener('click', '.task-add, .task-btn', e => {
    if(itemLimit <= 6){
        if (inputText.value.length == 0 || isSpace(inputText.value)) return

        item()
    }
})

// Pressing enter key
addGlobalEventListener('keyup', '.task-name', e => {
    if(itemLimit <= 6){
        if (e.code == 'Enter' && !(inputText.value.length == 0 || isSpace(inputText.value))) item()
    }
})

// Triggered when mouse clicked twice
// Remove task
addGlobalEventListener('dblclick', '.task-item', e => {
    e.target.remove()
    itemLimit -= 1 // Decrement itemLimit
})

// Put line-through on click task name to mark as complete or ignore
addGlobalEventListener('click', '.task-item', e => {
    e.target.style.textDecoration = 'line-through'
    e.target.style.color = 'red'
})

// function to create element
const item = () => {
    let div = document.createElement('div')
    let taskText = document.createTextNode(inputText.value)
    div.classList.add('task-item')
    div.append(taskText)
    taskArea.append(div)
    inputText.value = ''
    itemLimit += 1
}
// Validate input with white-spaces
const isSpace = (str) => {
    return str.trim().length === 0;
}