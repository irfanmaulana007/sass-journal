const initialState = {
    visibility: "invisible",
    message: "",
    formError: ""
}

export default function utilsReducer(state = initialState, action) {
    switch(action.type) {
    case "START_LOADING": 
        return {
            ...state,
            visibility: "visible",
            message: action.payload
        }

    case "STOP_LOADING": 
        return {
            ...state,
            visibility: "invisible",
            message: ""
        }

    case "FORM_ERROR_HANDLER":
        return {
            ...state,
            formError: action.payload
        }
			
    default: return state;
    }
}