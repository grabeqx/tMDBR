
const appReducer = function (state = {
    test: {}
}, action) {
    console.log("action");
    return {...state}
}

export default appReducer;