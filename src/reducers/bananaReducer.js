function bananaReducer(state = {missed: 0, caught: 0}, action) {
    switch (action.type) {
        case 'CAUGHT_BANANA': {
            state.caught ++;
            return {...state, caught: state.caught ++};
        }
        case 'MISSED_BANANA': {
            state.missed ++;
            return {...state, missed: state.missed ++};
        }
        default:
            return state;
    }
}
export default bananaReducer;