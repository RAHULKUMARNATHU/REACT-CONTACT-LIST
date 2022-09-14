import { ADD_CONTACT, UPDATE_CONTACTS } from "./actionTypes";
import { APIUrls } from "../helpers/urls"
import { getFormBody } from '../helpers/utils';


export function fetchContacts(){
    return(dispatch) => {
        const url = APIUrls.fetchContacts();
    fetch(url).then((response) => {
        // console.log('response',response);
        return response.json();
    })
    .then((data)=>{
        // console.log(data);
        dispatch(updateContacts(data));
    })
    }
}


export function updateContacts(users) {
    return {
      type: UPDATE_CONTACTS,
      users,
    };
  }


  export function createContact(newContact){
    return (dispatch) => {
        const url = APIUrls.createContact();
    
        fetch(url, {
          method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded',
        //     Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
        //   },
          body:getFormBody({newContact}),
        })
        .then((response) => response.json())
        .then((data) => {
          console.log('DATA' ,data);
    
          if(data.success){
            dispatch(addContact(data));
          }
        })
      };
  }

  export function addContact(post) {
    return {
      type: ADD_CONTACT,
      post,
    };
  }