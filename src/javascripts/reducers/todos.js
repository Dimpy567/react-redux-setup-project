import { 
    ADD_TODO,
    TODO_LIST,
    UPDATE_TODO,
} from './../actions/todos';

export function todoList( state = [], action ) {
    const data = action.value;
    switch ( action.type ) {
    case TODO_LIST:
        return action.value;
    case ADD_TODO:
        return state.concat( [ action.value ] );
    case UPDATE_TODO:
        return state.map( ( content ) => content.id === data.id ? {
            ...content,
            title : data.title ,
            description : data.description
        } : content );
    default:
        return state;
    }
}
