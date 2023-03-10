//Biz logic
export const CounterReducer = (state = { counter: 100 }, action) => {
    switch (action.type) {
        case 'counter/increment':
            //immutable logic 
            return { ...state, counter: state.counter + 1 }
        case 'counter/decrement':
            //immutable logic 
            return { ...state, counter: state.counter - 1 }
        default:
            return state; //default state//initali state would be render during inital render
    }
}
// export default CounterReducer;