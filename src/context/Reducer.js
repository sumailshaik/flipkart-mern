const Reducer = (state, action) => {
    switch (action.type) {
        case "OPEN_MODAL":
            return {
                ...state,
                openModal: true
            };
        case "CLOSE_MODAL":
            return {
                ...state,
                openModal: false
            };
        case "OPEN_SIGNUP":
            return{
                ...state,
                isSignup: true
            };
        case "OPEN_LOGIN":
            return{
                ...state,
                isSignup: false
            };
        default:
            return state;
    }
}

export default Reducer;