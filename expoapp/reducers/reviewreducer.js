
export const ReviewReducer = (state = { counter: 100 }, action) => {
    switch (action.type) {
        case 'counter/decrement':
            //immutable logic 
            return { ...state, counter: state.counter - 1 }
        default:
            return state; //default state//initali state would be render during inital render
    }
}
// export default ReviewReducer;