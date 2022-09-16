import { ADD_CONTACT, UPDATE_CONTACTS } from "../actions/actionTypes";


export default function contacts(state = [], action) {
    switch (action.type) {
      case UPDATE_CONTACTS:
        return action.users;
      case ADD_CONTACT:
        return [action.newContact , ...state];

    default:
      return state;
    }
}
