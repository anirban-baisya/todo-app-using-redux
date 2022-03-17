// 1 step
// here i have to write all the actions that is i have perform after clicking onthe buttons
//in this app i have to define 3 actions (add,delet,clearall)

export const addTodo= (data) => { //getting user input arg(inputData) from Todo.js
    return {
        type: "ADD_TODO",    //here i have to define what i have to perform
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}


export const deleteTodo= (id) => { //first i getting id that i passed inside deleteTodo(elem.id) from Todo.js
    return {
        type: "DELETE_TODO",
        id

    }
}

export const removeTodo= () => {
    return {
        type: "REMOVE_TODO"
    }
}