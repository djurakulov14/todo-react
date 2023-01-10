export const reducer = (state, action) => {
    switch (action.type) {
        case "SET": 
            return {
                arr: action.payload
            }
        case "ADD":
            return {
                arr: [...state.arr, action.payload] 
            }
        case "REMOVE":
            return {
                arr: state.arr.filter(item => item.id !== action.payload)
            }
        case "EDIT":
            let found = state.arr.findIndex((obj => obj.id == action.payload.id))
            state.arr[found].title = action.payload.title
            state.arr[found].completed = action.payload.completed
            return {
                arr: state.arr
            }   
        default:
            break;
    }
}