import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT, UPDATE_CONTACTS } from "./actionTypes";
import { APIUrls } from "../helpers/urls"


// GET DATA FROM API
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



  // CREATE CONTACT 
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


  // EDIT OR UPDATE CONTACT

  export function editContact(contact) {
    console.log(contact);
    return {
      type: EDIT_CONTACT,
      contact,
    };
  }

  export function editedContact(contact){
    return (dispatch) => {
      const url = APIUrls.editContact();
      fetch(url ,{
        method : 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }, 
        body: JSON.stringify(contact),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Edit Contact data', data);
          if (data) {
            dispatch(editContact(contact));
            return;
          }
      })
    };
  }

  // DELETE OR REMOVE CONTACT
  export function deleteContact(contact) {
    return {
      type: DELETE_CONTACT,
      contact,
    };
  }
export function removeContact(contact){
  return(dispatch) => {
    const url = APIUrls.deleteContact(contact)
    fetch(url , {
      method: 'POST',
    }).then((response) => response.json())
    .then((data) => {
      // console.log('Delete Contact data', data);
      if (data) {
        dispatch(deleteContact(contact));
        return;
      }
  })
  }
}