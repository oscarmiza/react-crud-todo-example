export function getTodos() {
    return async (dispatch) => {
        dispatch(start());
        try {
            const response = await fetch(
                "https://todo-checkpoint-api.herokuapp.com/api/todos/oscar"
            );
            const Todos = await response.json();
                dispatch(getTodosSuccess(Todos));
            
        } catch (error) {
            dispatch({ type: "TODO_FAIL", error });
        }
    };
}

export function getTodosSuccess(Todos) {
    return {
            type: "TODO_SUCCESS",
            payload: Todos
        }
}

export function start() {
    return {
        type: 'TODO_START'
    }
}

export function postTodos() {
    return async (dispatch) => {
        dispatch(start());
        try {
            const response = await fetch(
                "https://todo-checkpoint-api.herokuapp.com/api/todos/oscar"
            );
            const Todos = await response.json();
                dispatch(getTodosSuccess(Todos));
            
        } catch (error) {
            dispatch({ type: "TODO_FAIL", error });
        }
    };
}
