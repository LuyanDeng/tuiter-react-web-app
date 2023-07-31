import { createSlice } from "@reduxjs/toolkit"
const initialTodos = [
    { _id: "123", do: "Accelerate the world's transition to sustainable energy", done: false },
    { _id: "234", do: "Reduce space transportation costs to become a spacefaring civilization", done: false },
];
// declares an initial set of todo objects in a constant array.

const todosSlice =createSlice ({
    name:"todos",initialState : initialTodos,
    reducers:{
        addTodo(state,action){
            state.push({
                _id: (new Date()).getTime(),
                do:action.payload.do, // do set to "do" object sent through action obj
                //commonly referred to as the "payload"
                done: false
            })
        },
        deleteTodo(state,action){
            // index from action's payload and
// uses it to splice out the todo to
// be deleted

            const index = action.payload;
            state.splice(index,1);

        },
        todoDoneToggle(state, action) {
            const todo = state.find((todo) => todo._id === action.payload._id)
            todo.done = !todo.done
        }
    }
});
export const {addTodo,deleteTodo,todoDoneToggle}=todosSlice.actions
// export actions so we can call them from UI

export default todosSlice.reducer;
// reducer return todos