const initval = {
    val: []
};
export function Userdata(state = initval, action) {
    switch (action.type) {
        case 'adddata':
            return {
                ...state, val: [...state.val, action.data],
                // ...state.data
            }
        case 'remove':
            // var b = state.val.filter((ele, index) => {
            //     return index != action.id
            // })
            state.val.splice(action.id, 1)
            // console.log()
            // state.val.push(b)
            console.log(state)
            return state

        default:
            return state
    }
}