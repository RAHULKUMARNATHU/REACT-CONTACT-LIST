import { ADD_CONTACT, UPDATE_CONTACTS } from "./actionTypes";
import { APIUrls } from "../helpers/urls"
import { getFormBody  } from '../helpers/utils';


export function fetchContacts(){
    return(dispatch) => {
        const url = APIUrls.fetchContacts();
    fetch(url).then((response) => {
        // console.log('response',response);
        return response.json();
    })
    .then((data)=>{
       
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


  export function createContact(content){
    return (dispatch) => {
        const url = APIUrls.createContact();
      // console.log({content} ,"content")
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify(content)
          // body:getFormBody({content}),
        })
        .then((response) => response.json())
        .then((data) => {
          console.log('DATA' ,data);
    
          if(data){
            dispatch(addContact(data));
          }
        })
      };
  }

  export function addContact(newContact) {
    console.log(newContact)
    return {
    
      type: ADD_CONTACT,
      newContact,
    };
  }