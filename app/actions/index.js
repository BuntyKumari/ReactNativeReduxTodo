import { ADD_NEW_TASK, DELETE_TASK} from './actionType';

export const addNewTask = (inputTaskName) => {
    
    console.log("fyuyufyufyuyufufubuybfyubyuf");
    return{
        type: ADD_NEW_TASK,
        data: inputTaskName,
}
}
export const deleteTask = (index) => {
    return{
        type:DELETE_TASK,
        index
    }
}