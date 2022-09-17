import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { editUser } from '../actions/contacts';
import '../index.css'


 function Settings(props) {
   
    const [name , setName] = useState()
    const [contact , setContact] = useState();
   


    const handleNameChange=(e)=>{
        
        setName({
            name:e.target.value
        })
    }

        const handleContactChange=(e)=>{
            setContact({
                contact : e.target.value
            })
            
    }


    const handleOnClick =()=>{
        //   dispatch an action
        props.dispatch(editUser({ name:name , contact:contact}))
     
    }
    
      
  return (
    <div className='main-container-setting'>
        
        <div className='name-container'>
        <label>Name</label>   
        <input  type="text" onChange={handleNameChange}/>
        </div>
        
        <div className='contact-container' >
        <label>Contact</label>
        <input type="text" onChange={handleContactChange}/>
        </div>
       <div>
       <Button onClick={handleOnClick}>Update</Button>
       </div>
        
    </div>
  )
}
export default connect()(Settings);