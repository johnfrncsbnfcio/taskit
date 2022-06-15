
// dynamic event listener
const addGlobalEventListener = ((type, selector, callback) => {
    document.addEventListener(type, e => {
        if(e.target.matches(selector)) callback(e)
    })
})

// Using this to avoid bubbling and capture event..
// Thanks to Web Dev Simplified :)
addGlobalEventListener('click', '.task-add', e => {
   
    console.log('button clicked')

})