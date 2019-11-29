const initial_state = {
    count: 100
}

export const countreducer = (state = initial_state, action) => {
    switch (action.type) {
        case "plus":

            return { ...state, count: state.count + 1 }
        case "minus":
            return { ...state, count: state.count - 1 }
        case "ganti":
            return { ...state, count: action.payload }
        default:
            return state
    }
}