

const initialState={
        noteArray:[]
}


const todo = (state=initialState,action)=>{
    console.log("actionsss", action.payload);
    switch (action.type){
        case 'ADD_NEW_TASK':
            console.log("notetextsssssssss",action.key)
            return {
                ...state,
                noteArray: [
                    ...state.noteArray,action.data
                ]
            }
        case 'DELETE_TASK': 
        
        // console.log(action.index)
        // debugger;
       state.noteArray.splice(action.index,1);
        return {
            
            noteArray: [...state.noteArray]
        }
            
        default:
            return state;
    }       
}
export default todo