export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return {
                arr: [...state.arr, action.payload] 
            }
        case "REMOVE":
            return {
                arr: state.arr.filter(item => console.log(item, action.payload))
            }
        case "EDIT":
            return {
                arr: [...state.arr, action.payload] 
            }   
        default:
            break;
    }
}