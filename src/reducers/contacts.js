import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT, UPDATE_CONTACTS } from "../actions/actionTypes";


export default function contacts(state = [], action) {
  console.log(action , "Action in Reducer")  
  switch (action.type) {
      case UPDATE_CONTACTS:
        return action.users;
      case ADD_CONTACT:
        return [action.newContact , ...state];

        case EDIT_CONTACT:
          return{
          ...state,
          user : action.user,
          error : false
          }

        
        case DELETE_CONTACT :
          return state.filter((user) => user !== action.contact);
    default:
      return state;
    }
}
