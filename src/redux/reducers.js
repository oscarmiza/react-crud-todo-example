const initialState = {
    todos: [],
    isLoading: false,
    error: null
}

function reducer(state = initialState, action) {
    switch (action.type) {

        case 'TODO_START':
            return {
                ...state,
                todos: [],
                isLoading: true,
                error: null
            }
        case 'TODO_SUCCESS':

            return {
                ...state,
                todos: action.payload,
                isLoading: false,
                error: null
            }

        case 'TODO_FAIL':

            return {
                ...state,
                todos:[],
                isLoading: false,
                error: action.error
            }

        default:
            return state;

    }
}

export default reducer
