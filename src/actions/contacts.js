import { ADD_CONTACT, EDIT_CONTACT_FAILED, EDIT_CONTACT_SUCCESSFUL, UPDATE_CONTACTS } from "./actionTypes";
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

  export function editUserSuccessful(user) {
    return {
      type: EDIT_CONTACT_SUCCESSFUL,
      user,
    };
  }

  export function editUserFailed(error) {
    return {
      type: EDIT_CONTACT_FAILED,
      error,
    };
  }



  export function editUser(name , contact){
    return (dispatch) => {
      const url = APIUrls.editUser();
      fetch(url ,{
        method : 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }, 
        body: JSON.stringify(
          name,
          contact
         
       ),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Edit Contact data', data);
          if (data) {
            // dispatch action to save user
            dispatch(editUserSuccessful(data.user));
            // if(data.data.token){
            //   localStorage.setItem('token',data.data.token)
            // }
            return;
          }
         

          dispatch(editUserFailed(data.message));


      })
    };
  }


  // DELETE OR REMOVE CONTACT

export function removeConact(userId){
  return(dispatch) => {
    const url = APIUrls.removeConact(userId)
    fetch(url , {
      method: 'DELETE',
    }).then((response) => response.json())
    .then((json) => console.log(json))
  }
}